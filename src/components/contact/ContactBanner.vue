<template>
  <div>
    <section class="page-banner-contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="page-title-wrapper">
              <div class="page-title-inner">
                <h1 class="page-title">Get in touch with Us</h1>
<!--                <p>Why I say old chap that is spiffing, young delinquent in my flat bloke<br />buggered what a plonker.</p>-->
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="animate-element-contact">
              <img
                src="/media/animated/001.png"
                alt=""
                class="wow pixFadeDown"
                data-wow-duration="1s"
              />
              <img
                src="/media/animated/002.png"
                alt=""
                class="wow pixFadeUp"
                data-wow-duration="2s"
              />
              <img
                src="/media/animated/003.png"
                alt=""
                class="wow pixFadeLeft"
                data-wow-delay="0.3s"
                data-wow-duration="2s"
              />
              <img
                src="/media/animated/004.png"
                alt="man"
                class="wow pixFadeUp"
                data-wow-duration="2s"
              />
            </div>
          </div>
        </div>
      </div>
      <svg
        class="circle"
        data-parallax='{"y" : 250}'
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="950px"
        height="950px"
      >
        <path
          fill-rule="evenodd"
          stroke="rgb(250, 112, 112)"
          stroke-width="100px"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          opacity="0.051"
          fill="none"
          d="M450.000,50.000 C670.914,50.000 850.000,229.086 850.000,450.000 C850.000,670.914 670.914,850.000 450.000,850.000 C229.086,850.000 50.000,670.914 50.000,450.000 C50.000,229.086 229.086,50.000 450.000,50.000 Z"
        />
      </svg>
      <ul class="animate-ball">
        <li class="ball"></li>
        <li class="ball"></li>
        <li class="ball"></li>
        <li class="ball"></li>
        <li class="ball"></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
name: "ContactBanner"
}
</script>

<style scoped>

</style>
