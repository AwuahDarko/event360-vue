import Vue from 'vue';
import VueRouter from 'vue-router';
// import CreateEvent from '../views/CreateEvent.vue';
// import Login from '../views/Login.vue';
// import Register from '../views/Register.vue';
import VuePageTitle from 'vue-page-title';
import VueProgressBar from 'vue-progressbar';
import VModal from 'vue-js-modal';
import { BootstrapVue } from 'bootstrap-vue';
import { Steps } from 'ant-design-vue';
import 'ant-design-vue/lib/steps/style';
import Paginate from 'vuejs-paginate';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'ant-design-vue/dist/antd.css';
// import LoadScript from 'vue-plugin-load-script';

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
Vue.use(Steps);
// Vue.use(LoadScript);

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

Vue.component('paginate', Paginate);

function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`);
}

const routes = [
  {
    path: '/',
    name: 'BrowseEvent',
    component: lazyLoad('BrowseEvent'),
  },
  {
    path: '/create-event',
    name: 'CreateEvent',
    component: lazyLoad('CreateEvent'),
  },
  {
    path: '/login',
    name: 'Login',
    component: lazyLoad('Login'),
  },
  {
    path: '/sign-up',
    name: 'Register',
    component: lazyLoad('Register'),
  },
  {
    path: '/browse-event',
    name: 'BrowseEvent',
    component: lazyLoad('BrowseEvent'),
  },
  {
    path: '/browse-by-category/:category',
    name: 'BrowseByCategory',
    component: lazyLoad('BrowseByCategory'),
  },
  {
    path: '/browse-by-type/:type',
    name: 'BrowseByType',
    component: lazyLoad('BrowseByType'),
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'PromoCode',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../components/PaymentInfo.vue'),
  // },
];

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

export default router;
