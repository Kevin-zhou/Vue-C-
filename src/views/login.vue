<template>  
    <div class="page-header-wrap">
      <app-header v-bind:title="title"></app-header>    
       <p class="input-item"> 
     <mt-field label="用户名" placeholder="请输入用户名" v-model.trim="username"></mt-field>
       </p>
         <div class="input-item mt10 sms">
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model.trim="password"></mt-field>
         </div>
     <p class="center mt10">
    <mt-button type="primary" class="button login" @click="onsubmit">登录</mt-button>
     </p>
    </div>  
  </template>
  <script>
export default {
  name: 'login', 
  data() {
    return {
        username:'',
        password:''
    }
  }, 
  props:['title'],
  methods: {
   onsubmit:function(){
          __utils.ajax('login', {
                "userName": this.username,
                "userPassword": this.password
            }).then(res => {  
                if (res.success) {
                  __session.setItem("accessToken",res.data);
                 
                    this.$router.replace("/home");
                    // 关闭弹框
                } else {
                    __toast.open(res.returnMsg);
                }
            })    
   },
       
    
  },
  computed:{
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '~scss_index';
.login{
  margin:0 auto;
}

</style>