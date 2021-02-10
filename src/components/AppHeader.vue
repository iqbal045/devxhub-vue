<template>
  <div>
    <header class="site-header header_trans-fixed" data-top="992">
      <div class="container">
        <div class="header-inner">
          <div class="toggle-menu">
            <span class="bar"></span> <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <div class="site-mobile-logo">
            <a href="index-2.html" class="logo"
            ><img
              src="/assets/img/logo3.png"
              alt="site logo"
              class="main-logo"
            />
              <img
                src="/assets/img/logo3.png"
                alt="site logo"
                class="sticky-logo"
              />
            </a>
          </div>
          <nav class="site-nav">
            <div class="close-menu">
              <span>Close</span> <i class="ei ei-icon_close"></i>
            </div>
            <div class="site-logo">
              <a href="/" class="logo"
              ><img
                src="/assets/img/logo3.png"
                alt="site logo"
                class="main-logo"
              />
                <img
                  src="/assets/img/logo3.png"
                  alt="site logo"
                  class="sticky-logo"
                />
              </a>
            </div>
            <div class="menu-wrapper" data-top="992">
              <ul class="site-main-menu">
                <li>
                  <router-link :to="{name: 'Home'}">Home</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'WhyUs'}">Why Us</router-link>
                </li>
<!--                <li><a href="{{ route('portfolio') }}">Our Portfolios</a></li>-->
<!--                <li><a href="javascropt:void(0)">Contest</a></li>-->
<!--                <li><a href="{{ route('blog') }}">Blog</a></li>-->
                <li>
                  <router-link :to="{name: 'AboutUs'}">About</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Contact'}">Contact Us</router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>

  </div>
</template>

<script>
export default {
  name: 'AppHeader',
};

</script>
