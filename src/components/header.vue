<template>
    <div class="header fixed" :class="'bg-'+bg">
        <div class="inner w">
            <div class="page-back" v-if="showBack">
                <label class="back-wrap">
                    <i class="mintui mintui-back" @click="back()"></i>
                </label>
            </div>
            <slot>
                <p class="title">{{title}}</p>
            </slot>
            <div class="header-button" v-if="button.show" @click="clickButton">
                <i class="icon scan-icon"></i>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'app-header',

    data() {
        return {

        }
    },
    props: {
        showBack: {
            type: Boolean,
            default: false
        },
        button: {
            type: Object,
            default: function() { return { show: false, text: '' } }
        },
        title: {
            type: String,
        },
        bg: {
            type: String,
            default: 'primary'
        }

    },
    methods: {
        back: function() {
            if (this.$route.query.goindex === 'true') {
                this.$router.push('/')
            } else {
                this.$router.back(-1)
            }
        },
        clickButton: function() {
            this.$emit('scan');
        }
    },
    created: function() {
        this.$setgoindex()
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/index";
.header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    line-height: 1;
    position: relative;
    text-align: center;
    white-space: nowrap;
    min-height: 45px;
    &.fixed {
        top: 0;
        right: 0;
        left: 0;
        position: fixed;
        z-index: 1;
    }
    & .inner {
        width: 100%;
        min-height: 45px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    & .title {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0 40px;
        line-height: 45px;
        color: #ffffff;
        font-size: 18px;
    }
}



.page-back {
    width: 40px;
    height: 45px;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    & .back-wrap {
        width: 40px;
        height: 45px;
        display: table-cell;
        left: 0;
        top: 0;
        text-align: center;
        vertical-align: middle;

        & .mintui-back {
            font-size: 22px;
            font-weight: bold;
        }
        & .mintui-back:before {
            font-weight: bold;
        }
    }
}

.header-button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-45%);
    padding-right:20px;
    z-index: 1;
}

.mintui-back {
    color: #fff;
}

[class*='light'] {
    border-bottom: 1px solid #bbb;
    & .title {
        color: #616161;
    }
    & .mintui-back {
        color: #616161;
    }
}
</style>
