<template>
  <div class="home">
    <Slider/>
    <MisionVission/>
    <SkillsTecnology/>
    <fun-fact/>
    <testimonial/>
    <google-map/>
  </div>
</template>

<script>

import Slider from '@/components/home/Slider.vue';
import MisionVission from '@/components/home/MisionVission.vue';
import SkillsTecnology from '@/components/home/SkillsTecnology.vue';
import FunFact from '@/components/home/FunFact.vue';
import Testimonial from '@/components/home/Testimonial.vue';
import GoogleMap from '@/components/GoogleMap.vue';

export default {
  name: 'Home',
  components: {
    GoogleMap,
    Testimonial,
    FunFact,
    SkillsTecnology,
    MisionVission,
    Slider,
  },
};
</script>
