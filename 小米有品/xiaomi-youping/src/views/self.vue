<template>
  <div>
    <div class="self-wrap">
      <div class="self-head">
        <div class="head-pic">
          <img src="https://img.youpin.mi-img.com/shopcenter/415b0fd8150f58ee2b85caa2ee9cef8f.png" alt="">
        </div>
        <div class="head-title">请登录</div>
        <img class="head-next" src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/icons/icon_arrow_right_darkgray.png" alt="">
      </div>
      <van-cell title="我的订单" is-link size="large"/>
      <div class="sell-info">
        
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup } from "vant";

Vue.use(Cell);
Vue.use(CellGroup);
export default {};
</script>
  
<style lang="stylus" scoped>
.self-wrap
  height 100vh
  background-color #f1f1f1
  .self-head
    height 100px
    background-image url('https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_bg_top.png')
    background-size:100% 100%
    color #ffffff
    display flex
    justify-content space-between
    align-items center
    .head-pic img 
      width 60px
      height 60px
      margin 0 20px
    .head-title
      text-align left
      flex 1
      font-size 15px
    .head-next
      width 18px
      height 18px
      margin-right 20px
</style>