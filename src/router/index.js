import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import WhyUs from '../views/WhyUs.vue'
import AboutUs from '../views/AboutUs.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/why-us',
    name: 'WhyUs',
    component: WhyUs
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
