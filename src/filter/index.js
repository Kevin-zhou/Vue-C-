
import Vue from 'vue'
// time
Vue.filter('timeFormat', function (val) {      
   return __utils.time(val) || null;
})