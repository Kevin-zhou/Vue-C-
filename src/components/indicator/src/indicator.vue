<template>
  <transition name="mint-indicator">
    <div class="mint-indicator" v-show="visible">
      <div class="mint-indicator-wrapper zIndex10" :style="{ 'padding': text ? '20px' : '15px' }">
       
        <div v-if="spinnerType">
          <spinner class="mint-indicator-spin" :type="convertedSpinnerType" :size="32"></spinner>
        </div>
        <span class="indicator-text" v-show="text">{{ text }}</span>
      </div>
      <div class="mint-indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<style>
.indicator-text {
  display: block;
  color: #fff;
  text-align: left;
  font-size: 16px;
  white-space: nowrap;
}
.mint-indicator-mask{
  z-index: 10;
}
.mint-indicator-enter,
.mint-indicator-leave-active {
  opacity: 0;
}
.zIndex10{
  z-index: 10;
}
</style>

<script type="text/babel">
import Spinner from 'mint-ui/lib/spinner/index.js';
if (process.env.NODE_ENV === 'component') {
  require('mint-ui/lib/spinner/style.css');
}

export default {
  data() {
    return {
      visible: false
    };
  },

  components: {
    Spinner
  },

  computed: {
    convertedSpinnerType() {
      switch (this.spinnerType) {
        case 'snake':
          return 0;
        case 'double-bounce':
          return 1;
        case 'triple-bounce':
          return 2;
        case 'fading-circle':
          return 3;
        default:
          return 0;
      }
    }
  },

  props: {
    text: String,
    spinnerType: {
      type: String
    }
  }
};
</script>
