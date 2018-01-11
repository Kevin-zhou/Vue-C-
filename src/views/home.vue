<template>  
    <div class="page-header-wrap">
      <app-header v-bind:title="title"></app-header>
      <quickNav v-bind:quickList="quickList" v-bind:rowNum="rowNum"></quickNav>      
    </div>  
</template>
<script>

const home =require('../view_js').home;
const quickNav =require('../components').quickNav;

export default {
  name: 'home', 
  data() {
    return {
        home:home
    }
  },
  components:{quickNav},
  props:['title'],
  methods: {

  },
  computed:{
     quickList(){
       return home.quickList;
     },
     rowNum(){
       return home.rowNum;
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '~scss_index';


.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.slide-enter-active,
.slide-leave-active {
  transition: transform .2s
}

.slide-enter,
.slide-leave-active {
  transform: translate3d(0, 100%, 0);
}
</style>
