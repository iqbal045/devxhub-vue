!(function (i, t, e) {
    "use strict";
    function n() {
        var e,
            n = i(".site-header").not(".header_trans-fixed").outerHeight(),
            a = i(".menu-wrapper").data("top"),
            s = i("#wpadminbar").outerHeight();
        i("#wpadminbar").length ? ((e = s + n), i(".site-header").css("margin-top", s)) : (e = n),
            i(t).width() < a
                ? i(".menu-wrapper").css("padding-top", e + "px")
                : i("#wpadminbar").length && i(".site-header").hasClass("header_trans-fixed")
                ? i(".menu-wrapper").css("padding-top", s + "px")
                : i(".menu-wrapper").css("padding-top", "0"),
        i("#wpadminbar").length && i(t).width() < 768 && i("#wpadminbar").css({ position: "fixed", top: "0" });
    }
    function a() {
        var e = i(".menu-wrapper").attr("data-top");
        t.outerWidth < e || i(".site-header").hasClass("topmenu-arrow")
            ? (i(".menu-item-has-children i").length || (i("header .menu-item-has-children").append('<i class="fa fa-angle-down"></i>'), i("header .menu-item-has-children i").addClass("hide-drop")),
                i("header .menu-item-has-children i").on("click", function () {
                    i(this).hasClass("animation") ||
                    (i(this).parent().toggleClass("is-open"),
                        i(this).addClass("animation"),
                        i(this).parent().siblings().removeClass("is-open").find(".fa").removeClass("hide-drop").prev(".sub-menu").slideUp(250),
                        i(this).hasClass("hide-drop")
                            ? (i(this).closest(".sub-menu").length || i(".menu-item-has-children i").addClass("hide-drop").next(".sub-menu").hide(250), i(this).removeClass("hide-drop").prev(".sub-menu").slideToggle(250))
                            : i(this).addClass("hide-drop").prev(".sub-menu").hide(100).find(".menu-item-has-children a").addClass("hide-drop").prev(".sub-menu").hide(250)),
                        setTimeout(function () {
                            i("header .site-main-menu i").removeClass("animation");
                        }, 250);
                }))
            : i("header .menu-item-has-children i").remove();
    }
    function s() {
        var e = i("#wpadminbar").length ? i("#wpadminbar").outerHeight() : 0;
        i(".additional-inner-wrap").css("top", e + "px");
    }
    i(t).on("scroll load", function () {
        30 <= i(this).scrollTop()
            ? (i(".site-header.header_trans-fixed").length &&
            (i(".site-header.header_trans-fixed").not(".fixed-dark").addClass("pix-header-fixed"),
                i(".fixed-dark").addClass("bg-fixed-dark"),
                i(".sticky-logo, .header-button-scroll").show(),
                i(".main-logo, .header-button-default").hide()),
            i(".right-menu.modern").length && i(".right-menu.modern").closest(".fixed-header").addClass("fixed-header-scroll"))
            : (i(".site-header.header_trans-fixed").length &&
            (i(".site-header.header_trans-fixed").not(".fixed-dark").removeClass("pix-header-fixed"),
                i(".fixed-dark").removeClass("bg-fixed-dark"),
                i(".sticky-logo, .header-button-scroll").hide(),
                i(".main-logo, .header-button-default").show()),
            i(".right-menu.modern").length && i(".right-menu.modern").closest(".fixed-header").removeClass("fixed-header-scroll"));
    }),
    i(t).width() >= i(".menu-wrapper").data("top") &&
    i('.site-main-menu li:not(.menu-item-has-children) > a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        var n = i(this).attr("href");
        i(n).length && i("html,body").animate({ scrollTop: i(n).offset().top - i(".header_trans-fixed").outerHeight() - i("#wpadminbar").outerHeight() }, "slow");
    }),
        i(".open-search").on("click", function () {
            i("body").css("overflow", "hidden"), i(".site-search").addClass("open");
        }),
        i(".close-search").on("click", function () {
            i("body").css("overflow", ""), i(".site-search").removeClass("open");
        }),
        i(".toggle-menu").on("click", function (e) {
            e.preventDefault();
            i('<div class="mask-overlay">').hide().appendTo("body").fadeIn("fast"),
                i("html")
                    .addClass("no-scroll sidebar-open")
                    .height(t.innerHeight + "px"),
                i("#wpadminbar").length ? i(".sidebar-open .site-nav").css("top", "46px") : i(".sidebar-open .site-nav").css("top", "0");
        }),
        i(".close-menu, .mask-overlay").on("click", function (e) {
            e.preventDefault(), i("html").removeClass("no-scroll sidebar-open").height("auto"), i(".mask-overlay").remove();
        }),
        i(".search-icon-wrapper.ico-style .close-search").on("click", function () {
            i(this).parent().toggleClass("is-active"),
            i(this).parent().hasClass("is-active") &&
            setTimeout(function () {
                i(".search-icon-wrapper.ico-style .search-field").focus();
            }, 300);
        }),
        i(e).on("click", function (e) {
            i(e.target).closest(".search-icon-wrapper.ico-style").length || i(".ico-style .close-search").parent().removeClass("is-active"), e.stopPropagation();
        }),
        i(".additional-nav").on("click", function (e) {
            e.preventDefault(), i(".additional-menu-wrapper").addClass("menu-open"), i(".menu-wrapper").addClass("additional-menu-open");
        }),
        i(".additional-nav-close, .additional-menu-overlay").on("click", function () {
            i(".additional-menu-wrapper").removeClass("menu-open"), i(".menu-wrapper").removeClass("additional-menu-open");
        }),
        i(t).on("load", function () {
            !(function () {
                i(".aside-nav").on("click", function () {
                    return i(".aside-menu").toggleClass("active-menu"), i(".site-header").toggleClass("active-menu"), !1;
                }),
                    i(".menu-wrapper:not(.unit) .menu-item-has-children > a").on("click", function (e) {
                        e.preventDefault();
                    });
                var e = i(".menu-wrapper").data("top");
                if (
                    (t.outerWidth >= e
                        ? (i(".menu-wrapper").on("click", function (e) {
                            e.target.closest(".aside-menu") || i(".sub-menu-open").slideUp(250);
                        }),
                            i(".aside-menu .menu-item-has-children a").addClass("hide-drop"),
                            i(".aside-menu .menu-item a").on("click", function () {
                                i(this).parent().hasClass("menu-item-has-children") &&
                                (i(this).hasClass("hide-drop")
                                    ? i(this).closest(".sub-menu").length
                                        ? (i(this).removeClass("hide-drop").next(".sub-menu").slideDown(250).removeClass("sub-menu-open"), i(this).parent().siblings().find(".sub-menu").slideUp(250).addClass("sub-menu-open"))
                                        : (i(".menu-item-has-children a").addClass("hide-drop").next(".sub-menu").hide(250).removeClass("sub-menu-open"),
                                            i(this).removeClass("hide-drop").next(".sub-menu").slideToggle(250).toggleClass("sub-menu-open"))
                                    : (i(this).addClass("hide-drop").next(".sub-menu").hide(250).find(".menu-item-has-children a").addClass("hide-drop").next(".sub-menu").hide(250),
                                        i(this).next(".sub-menu").removeClass("sub-menu-open")));
                            }))
                        : i(".menu-item-has-children a").removeClass("hide-drop"),
                    i(".aside-fix").length && i(t).width() > e)
                ) {
                    var n = i(".logo span, .logo img").outerWidth();
                    i(".logo").css("top", n + "px");
                }
            })();
        }),
        i(t).on("scroll", function () {}),
        i(t).on("load resize", function () {
            n(), a(), s();
        }),
        t.addEventListener("orientationchange", function () {
            s(), n(), a();
        });
})(jQuery, window, document);
