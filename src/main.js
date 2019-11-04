// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import 'popper.js';
import 'bootstrap';
import './assets/app.css';

import jQuery from 'jquery';

import swal from 'sweetalert2';
window.swal = swal;

import Vue2Filters from 'vue2-filters';
Vue.use(Vue2Filters);

const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

window.toast = toast;

window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
