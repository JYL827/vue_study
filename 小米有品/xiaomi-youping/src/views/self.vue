<template>
  <div>
    <div class="self-wrap">
      <div class="self-head" @click="toLogin">
        <div class="head-pic">
          <img src="https://img.youpin.mi-img.com/shopcenter/415b0fd8150f58ee2b85caa2ee9cef8f.png" alt="">
        </div>
        <div class="head-title">{{nickName}}</div>
        <img class="head-next" src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/icons/icon_arrow_right_darkgray.png" v-if="!hasLogin">
      </div>
      <van-cell title="我的订单" is-link size="large"/>
      <div class="sell-info">
        <div class="info-item">
          <div class="info-num">4</div>
          <img src="https://img.youpin.mi-img.com/shopcenter/1su4kcv21eg_22212270231600948691418.png" alt="">
          <div>待付款</div>
        </div>
        <div class="info-item">
          <div class="info-num">3</div>
          <img src="https://img.youpin.mi-img.com/shopcenter/2rsi345c8a_22212270231600948691450.png" alt="">
          <div>待收货</div>
        </div>
        <div class="info-item">
          <div class="info-num">2</div>
          <img src="https://img.youpin.mi-img.com/shopcenter/n9q7tuhs6ao_22212270231600948691455.png" alt="">
          <div>评价</div>
        </div>
        <div class="info-item">
          <div class="info-num">1</div>
          <img src="https://img.youpin.mi-img.com/shopcenter/q69ib1u9teg_22212270231600948691439.png" alt="">
          <div>退款/售后</div>
        </div>
      </div>
      <van-cell-group class="cell-group">
        <van-cell icon="paid" title="我的资产" is-link size="large"/>
        <van-cell icon="star-o" title="我的收藏" is-link size="large" url="./collection"/>
        <van-cell icon="location-o" title="地址管理" is-link size="large" url="./address"/>
      </van-cell-group>
      <van-cell-group class="cell-group">
        <van-cell icon="coupon-o" title="资质证照" is-link size="large"/>
        <van-cell icon="description" title="协议规则" is-link size="large"/>
        <van-cell icon="question-o" title="帮助与反馈" is-link size="large"/>
      </van-cell-group>
      <button class="exit" v-if="hasLogin" @click="exit">退出</button>
    </div>
    <v-tabBar></v-tabBar>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup } from "vant";
import { mapActions, mapGetters } from 'vuex';
import TabBar from '@/components/tabBar.vue'

Vue.use(Cell);
Vue.use(CellGroup);
export default {
  computed: {
    ...mapGetters(['hasLogin', 'nickName'])
  },
  methods: {
    ...mapActions(['exitLogin']),
    exit() {
      this.exitLogin()
      this.$router.push('/')
    },
    toLogin() {
      if(!this.hasLogin) {
        this.$router.push('/login')
      }
    }
  },
  components: {
    'v-tabBar': TabBar
  }
}
</script>
  
<style lang="stylus" scoped>
.self-wrap
  position relative
  height 100vh
  background-color #f1f1f1
  color #8a8a8a
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
  .cell-group
    margin-top 5px
  .sell-info
    height 69px
    box-sizing border-box
    display flex
    justify-content space-between
    padding 0 20px
    text-align center
    align-items center
    font-size 12px
    background-color #fff
    margin-top 1px
    img
      width 40px
      height 40px
    .info-item 
      position relative
      width 58px
      .info-num
        width 15px
        height 15px
        border-radius 50%
        background-color red
        color #ffffff
        position absolute
        right 10px
        top 2px
  .exit
    width 100px
    height 45px
    position absolute
    left 50%
    transform translateX(-50%)
    margin-top 10px
    background-color #fff
    border-radius 5px
    border 1px solid #8a8a8a
    color #000
    font-size 14px
</style>