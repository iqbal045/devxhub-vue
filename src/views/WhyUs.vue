<template>
  <div>
    <why-us-banner/>
    <we-offer/>
    <why-choose-us/>
    <we-do-care/>
    <subscription/>
  </div>
</template>

<script>
import WhyUsBanner from '@/components/whyus/WhyUsBanner.vue';
import WeOffer from '@/components/whyus/WeOffer';
import WhyChooseUs from '@/components/whyus/WhyChooseUs.vue';
import WeDoCare from '@/components/whyus/WeDoCare.vue';
import Subscription from '@/components/whyus/Subscription.vue';
export default {
name: "WhyUs",
  components: { Subscription, WeDoCare, WhyChooseUs, WeOffer, WhyUsBanner },
}
</script>

<style scoped>

</style>
