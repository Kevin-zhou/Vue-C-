<template>  
    <div class="page-header-wrap">
       <app-header v-bind:title="title" v-bind:showBack="true" :button="{ show:true }" v-on:scan="scan"></app-header>
      <div class="pl10 pr10">
        <accordion v-bind:list="list"></accordion>
    </div>
    </div>
  </template>
  <script>
export default {
  data() {
    return {
      list:[]
    }
  }, 
  props:['title'],
  methods: {
    getShelfStocktake:function(){
        __utils.ajax("getShelfStocktakeList").then(res => {
            if (res.success) {
              this.shelfStocktake=res.data;
              this.list=res.data;
            
            } else {
                __toast(res.error);
            }
        })
    },
    scan:function(){
            __sdkUtils.scan().then(barCode => {
                this.$emit("scan", barCode);
            });
        }
  },

  computed:{
     
  },
   created: function() {
    this.getShelfStocktake();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '~scss_index';

</style>