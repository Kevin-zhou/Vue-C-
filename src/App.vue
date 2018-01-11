<template>
  <div>    
    <router-view></router-view>  
  </div>
</template>

<script>


export default {
  data() {
    return {   
    }
  },
  methods:{   
  }
}

</script>

<style lang="scss">
.page-wrap {
  overflow: auto;
  height: 100%;
}

.page-header-wrap {
  overflow: auto;
  height: 100%;
  padding: 50px 0 50px 0;

  &.n-footer {
    padding-bottom: 0;
  }
}

.page-footer-wrap {
  overflow: auto;
  height: 100%;
  padding: 0 0 60px 0!important;
}
</style>
