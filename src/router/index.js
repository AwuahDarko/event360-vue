import Vue from 'vue';
import VueRouter from 'vue-router';
import CreateEvent from '../views/CreateEvent.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import VuePageTitle from 'vue-page-title';
import VueProgressBar from 'vue-progressbar';
import VModal from 'vue-js-modal';
import { BootstrapVue } from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

const options = {
  color: '#00BFFF',
  failedColor: '#874b4b',
  thickness: '4px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
  autoFinish: false,
};

Vue.use(VueRouter);

Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);

Vue.use(VuePageTitle, {
  prefix: 'e360 - ',
  // suffix: '- My App '
});
Vue.use(VueProgressBar, options);
Vue.use(VModal, {
  height: 'auto',
  width: 'auto',
  adaptive: true,
  scrollable: true,
});

const routes = [
  {
    path: '/',
    name: 'CreateEvent',
    component: CreateEvent,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/sign-up',
    name: 'Register',
    component: Register,
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'PromoCode',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/PromoCode.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
