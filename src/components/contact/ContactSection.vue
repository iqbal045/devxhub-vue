<template>
  <div>
    <section class="contactus">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="contact-infos">
              <div class="contact-info">
                <h3 class="title">Our Location</h3>
                <p class="description">
                  158/27, Ghoramara, Boalia, Rajshahi-6100,<br> Dhaka, Bangladesh
                </p>
              </div>
              <div class="contact-info">
                <!-- <h3 class="title">Call or email us</h3> -->
                <div class="info">
                  <i class="ei ei-icon_mail_alt"></i>
                  <span>info@devxhub.com</span>
                </div>
                <div class="info phone">
                  <i class="ei ei-icon_phone"></i>
                  <span>+8801745-969697</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="contact-froms">
              <form
                action="https://saaspik.pixelsigns.art/saaspik/php/mailer.php"
                class="contact-form"
                data-pixsaas="contact-froms"
              >
                <div class="row">
                  <div class="col-md-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <input type="text" name="subject" placeholder="Subject" />
                <textarea
                  name="content"
                  placeholder="Your Comment"
                  required
                ></textarea>
                <button type="submit" class="pix-btn submit-btn">
                  <span class="btn-text">Send Your Massage</span>
                  <i class="fas fa-spinner fa-spin"></i>
                </button>
                <input
                  type="hidden"
                  name="recaptcha_response"
                  id="recaptchaResponse"
                />
                <div class="row">
                  <div class="form-result alert">
                    <div class="content"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
name: "ContactSection"
}
</script>

<style scoped>

</style>
