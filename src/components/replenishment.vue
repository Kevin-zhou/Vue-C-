<template>
    <div>
        <div class="accordion" v-if="list" v-for="item,index in list" v-bind:class="selectedIndex==index?'active':''">
            <div class="header bg-light" @click="selected(index)">
                <div class="inner f14">
                    <p class="p5">
                        <label>补货单名称：</label>{{item.replenishmentName}}</p>
                    <p class="p5">
                        <label>补货单时间：</label>{{filterTime(item.replenishmentTime)}}</p>
                    <!--<p class="p5">
                        <span>
                            <label>任务数量：</label>6</span>
                        <i class="ml30 mr10"></i>
                        <span>
                            <label>未完成：</label>6</span>
                    </p>-->
                </div>
            </div>
            <div class="body bg-light">
                <ul class="shelf-list f14">
                    <li class="shelf-item flex" v-if="item.taskShelfVos" v-for="li,index2 in item.taskShelfVos">
                        <div>
                            <label>{{index2+1}}、</label>
                        </div>
                        <div class="flex-1">
                            <ul>
                                <li class="break-word pb5">
                                    <label>货架名称：</label>{{li.shelfName}}</li>
                                <li class="break-word pb5">
                                    <label>货架编码：</label>{{li.shelfNo}}</li>
                                <li class="break-word">
                                    <label>货架位置：</label>{{li.shelfLocation}}</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'accordion',
    data() {
        return {
            selectedIndex: 0
        }
    },
    props: ['list'],
    methods: {
        selected(index) {
            if (this.selectedIndex == index) this.selectedIndex = -1;
            else this.selectedIndex = index;
        },
         filterTime: function(time){
            let _date = new Date(time);
            //计算年
            let year = _date.getFullYear()
            let month = _date.getMonth()+1;
            let days = _date.getDate();
            //计算出小时数              
            let hours = _date.getHours();
            //计算分钟数 
            let minutes = _date.getMinutes();
            //计算秒数              
            let seconds = _date.getSeconds();
            seconds = seconds >= 10 ? seconds : "0" + seconds;
            minutes = minutes >= 10 ? minutes : "0" + minutes;
            hours = hours >= 10 ? hours : "0" + hours;
            days = days >= 10 ? days : "0" + days;
            month = month>=10?month:"0"+month;
            year = year>=10?year:"0"+year;
            let returnDate = year+"-"+month+"-"+days+' '+hours+":"+minutes+":"+seconds;
            return returnDate;
        },
    },
    created: function() {

    }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/index";
.accordion {
    border-radius: 4px;
    overflow: hidden;
    & .header {
        font-size: 12px;
        box-sizing: border-box;
        padding: 0 10px;
        & .inner {
            padding: 10px;
            border-bottom: 1px solid transparent;
        }
    }
    & .body {
        height: 0;
        padding: 0;
        overflow: hidden;
    }
    &.active {
        & .header .inner {
            border-bottom: 1px solid #e5e5e5;
        }
        & .body {
            padding: 0 10px;
            height: auto;
        }
    }
}

.accordion+.accordion {
    margin-top: 10px;
}


.shelf-list {
    & .shelf-item {
        padding: 10px;
    }

    & .shelf-item+.shelf-item {
        border-top: 1px solid #e5e5e5;
    }
}
</style>