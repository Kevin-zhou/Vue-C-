<template>
    <div class="pl10 pr10">
        <ul class="quick-nav">
            <!--<li class="quick-item fl" v-for="quick in quickList" v-bind:style="{width:itemWidth}">
                <div class="inner" v-bind:style="{height:itemHeight}">
                    <button @click="shelfStorck">{{quick}}</button></div>
            </li>-->
            <li class="quick-item fl"v-bind:style="{width:itemWidth}" >
                <div class="immer" v-bind:style="{height:itemHeight}">
                    <button @click="shelfShorck">盘点</button>
                </div>
            </li>
             <li class="quick-item fl"v-bind:style="{width:itemWidth}" >
                <div class="immer" v-bind:style="{height:itemHeight}">
                    <button @click="shelfReplenish">补货</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>


export default {
    name: 'quick-nav',
    data() {
        return {
          itemHeight:0
        }
    },
    props:['quickList','rowNum'],
    methods: {
       getItemHeight(){
           const width = document.documentElement.clientWidth;
           this.itemHeight = `${width/this.rowNum-10}px`;
       },
       //盘点
       shelfShorck:function(){
            this.$router.push({ path: '/shelfStocktake'})
       },
       //补货
       shelfReplenish:function(){
            this.$router.replace({ path: '/shelfReplenishment'})
       }
    },
    computed:{
        itemWidth(){
            return `${100/this.rowNum}%`;
        }
    },
    created: function() {   
        this.getItemHeight();

        window.addEventListener('resize',()=>{this.getItemHeight()},false);
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/index";

.quick-nav{
    margin-left:-10px;
    & .quick-item{        
        box-sizing: border-box;
        @extend .center,.pl10,.pb10;

        & .inner{
            @extend .bg-light;
        }
    }
}
</style>