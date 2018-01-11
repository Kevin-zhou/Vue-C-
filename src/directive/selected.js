import Vue from 'vue'

const selected = {
  name: 'selected',
  Function: {
    inserted: function (el, binding, vnode) {
      
    }
  }
 
}

Vue.directive(selected.name, selected.Function)