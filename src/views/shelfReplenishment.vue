<template>
  <div class="page-header-wrap">
    <app-header v-bind:title="title" v-bind:showBack="true" :button="{ show:true }" v-on:scan="scan"></app-header>
    <div class="pl10 pr10">
      <section class="icon-group mt5 fr pr20" v-if="title=='home'">
      
      </section>
      <replenishment v-bind:list="list"></replenishment>

      <router-link to="/shelf/${shelfId}">点击去补货</router-link>

    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      list: [],
      shelfId:''
    }

  },
  props: ['title'],
  methods: {
    getShelfReplenishment: function() {
      __utils.ajax("shelfReplenishmentList").then(res => {
        if (res.success) {
          this.list = res.data;

        } else {
          __toast(res.error);
        }
      })
    },
    
    scan: function() {
      __sdkUtils.scan().then(barCode => {
        this.$emit("scan", barCode);
       this.shelfId=this.getQueryString(barCode,"id");
        this.$router.push("/shelf/"+this.shelfId);
      });
    },
     getQueryString:function(url,name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = url.split('?')[1].substr(0).match(reg); //匹配目标参数
            if (r != null) return unescape(r[2]);
            return null; //返回参数值
        },

  },
  computed: {

  },
  created: function() {
    this.getShelfReplenishment();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '~scss_index';
.login {
  margin: 0 auto;
}
</style>