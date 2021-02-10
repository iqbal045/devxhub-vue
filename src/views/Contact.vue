<template>
  <div>
    <contact-banner/>
    <contact-section/>
    <google-map/>
  </div>
</template>

<script>
import ContactBanner from '@/components/contact/ContactBanner.vue';
import ContactSection from '@/components/contact/ContactSection.vue';
import GoogleMap from '@/components/GoogleMap.vue';
export default {
  name: 'Contact',
  components: { GoogleMap, ContactSection, ContactBanner }
};
</script>

<style scoped>

</style>
