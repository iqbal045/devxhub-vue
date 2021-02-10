<template>
 <div>
   <section class="newsletter-two" id="newsletter">
     <div class="container">
       <div class="newsletter-content-two text-center wow pixFadeUp">
         <h2 class="title">
           Want to build you future, place your quote right now
         </h2>
       </div>
       <form
         action="https://saaspik.pixelsigns.art/saaspik/php/subscribe.php"
         method="post"
         class="newsletter-form-two wow pixFadeUp"
         data-pixsaas="newsletter-subscribe"
       >
         <div class="newsletter-inner">
           <input
             type="email"
             name="email"
             class="form-control"
             id="newsletter-form-email"
             placeholder="Enter your Email"
             required
           />
           <button
             type="submit"
             name="submit"
             id="newsletter-submit"
             class="newsletter-submit"
           >
             <span class="btn-text">Quote</span>
             <i class="fas fa-spinner fa-spin"></i>
           </button>
           <input
             type="hidden"
             name="recaptcha_response"
             id="recaptchaResponse"
           />
         </div>
         <div class="clearfix"></div>
         <div class="form-result alert"><div class="content"></div></div>
       </form>
     </div>
     <div class="scroll-circle wow pixFadeUp">
       <img
         src="/media/background/circle12.png"
         data-parallax='{"y" : -230}'
         alt="circle6"
       />
     </div>
   </section>
 </div>
</template>

<script>
export default {
name: "Subscription"
}
</script>

<style scoped>

</style>
