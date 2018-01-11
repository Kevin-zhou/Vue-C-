import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'

import api from "./config/api.js";
import appUtils from "./utils/utils";
import SdkUtils from "./utils/sdk_utils";

import 'mint-ui/lib/style.css';

import router from './router/router'

const appheader = require('./components').header;
const accordion = require('./components').accordion;
const replenishment = require('./components').replenishment;
Vue.component('app-header',appheader);
Vue.component('accordion',accordion);
Vue.component('replenishment',replenishment);
/* eslint-disable no-new */

require('./directive');

import appFilter from './filter'

import {Field,Button } from 'mint-ui';
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);

new Vue({
  el: '#app',
  router,  
  render: h => h(App)
})
