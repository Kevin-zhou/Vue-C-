import Vue from 'vue'

const stopTouch = {
  name: 'stopTouch',
  Function: {
    inserted: function (el, binding, vnode) {
       el.addEventListener("touchmove",function(event){      
          event.preventDefault();
       },false)
    }
  }
 
}

Vue.directive(stopTouch.name, stopTouch.Function)