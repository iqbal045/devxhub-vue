<template>
  <div>
    <about-banner/>
    <about-content/>
  </div>
</template>

<script>
import AboutBanner from '@/components/about/AboutBanner.vue';
import AboutContent from '@/components/about/AboutContent.vue';

export default {
name: "AboutUs",
  components: { AboutContent, AboutBanner }
}
</script>

<style scoped>

</style>
