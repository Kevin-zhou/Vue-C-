<template>
  <div class="page-wrap">
    <div class="p10 f14 bg-light">
      <p>补货单名称：2222222222222222222222（张志明）</p>
      <p class="mt5">
        <span class="tb-cell left">货架名称：腾楷</span>
        <span class="tb-cell left">货架编码：xxxxxxxxx</span>
      </p>
    </div>
    <div class="mt10"></div>
    <div class="p10 bg-light">
      <div style="border:1px solid #c4c4c4">
        <p class="clearfix">
          <span class="fl pt5 pb5 pl10 pr10">商品</span>
          <span class="fr pt5 pb5 pl10 pr10">补货数量</span>
        </p>
        <ul class="bh-p-list">
          <li class="item" v-for="item in 6">
            <div class="img"></div>
            <div class="r-box">
              <div class="inner f-center">
                <p class="p-title">三只松鼠</p>
                <span class="p-num">2</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <mt-button class="mt10 mb15 bg-primary" size="large" @click="updateReplenishment"><i class="icon up-shelf-icon mr5"></i>上架</mt-button>
    </div>
  </div>
</template>
<script>


export default {
  name: 'shelf',
  data() {
    return {
     replenishmentList:[],
     shelfId:''
    }
  },
  props: ['title'],
  methods: {
       onsubmit:function(){
          __utils.ajax('getTaskShelfItemListById', {
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
      
    updateReplenishment:function(){

    }
  },
  created() {
   console.log(this.$route)
   this.shelfId=this.$route;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '~scss_index';

.bh-p-list {
  border-top: 1px solid #c4c4c4;
  & .item {
    @extend .p10,
    .flex;
  }
  & .item+.item{
    border-top:1px solid #c4c4c4;
  }
  & .img {
    width: 90px;
    height: 90px;
    background-color: #f5f5f5;
  }
  & .r-box {
    flex: 1;
    padding-left: 10px;

    & .inner {
      height:90px;
      @extend.flex;

      & .p-title {
        @extend .flex-1,.pr10;
      }
      & .p-num {
        width: 60px;
        margin-right:20px;
      }
    }
  }
}
</style>
