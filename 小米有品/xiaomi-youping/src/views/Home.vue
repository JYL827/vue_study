<template>
  <div class="home-wrap">
    <div class="home-head">
      <div class="head-title">
        <img src="https://img.youpin.mi-img.com/static/weex_images/v1/m/navi_title_v6.png" alt="">
      </div>
      <div class="head-search">
        <van-search
          v-model="value"
          shape="round"
          background="rgb(132, 93, 50)"
          placeholder="搜一搜"
        />
      </div>
    </div>
    <div class="head-swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="https://img.youpin.mi-img.com/test/d3f91a86f5dae9032a7cfa9c73dffc3b.jpeg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://img.youpin.mi-img.com/test/e42b6a05896fc024e9ede272d1a82a9a.jpeg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://img.youpin.mi-img.com/test/d1d83f3e4bce45c52db67123f6edf20a.jpeg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://img.youpin.mi-img.com/test/d3f91a86f5dae9032a7cfa9c73dffc3b.jpeg" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="home-menu">
      <div class="menu-icon">
        <img src="https://img.youpin.mi-img.com/jianyu/efb5e1c094c3e185d2add3e49bee0366.png" alt="">
        <div>每日上新</div>
      </div>
      <div class="menu-icon">
        <img src="https://img.youpin.mi-img.com/jianyu/24c86a799f3ea8ccfa675ff7563d50fb.png" alt="">
        <div>小米众筹</div>
      </div>
      <div class="menu-icon">
        <img src="https://img.youpin.mi-img.com/jianyu/912d7d210a6a5771f5946f1a8ac39014.png" alt="">
        <div>有品秒杀</div>
      </div>
      <div class="menu-icon">
        <img src="https://img.youpin.mi-img.com/jianyu/cac2205702a4acc7224b6f51308c0dd5.png" alt="">
        <div>小米自营</div>
      </div>
    </div>
    <div class="home-goods">
      <div class="goods-hot">
        
      </div>
    </div>
    <v-tabBar></v-tabBar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search, Swipe, SwipeItem } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import TabBar from '@/components/tabBar.vue'

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)

export default {
  data() {
    return {
      value: ''
    }
  },
  components: {
    'v-tabBar': TabBar
  }
}
</script>

<style lang="stylus" scoped>
.home-wrap
  background-color rgb(255, 255, 255)
  .home-head
    width 100vw
    background-color rgb(132, 93, 50)
    .head-title
      width 40px
      height 54px
      padding 11px 0 0 6px
      box-sizing border-box
      float left
      color #fff
      img
        width 40px
        height 31px
  .head-swipe
    img
      width 100vw
      height 160px
  .home-menu
    font-size 12px
    box-sizing: border-box;
    display: flex;
    justify-content space-between
    text-align center
    width: 100vw;
    padding-bottom: 1px;
    padding-top: 14px;
    .menu-icon
      width 65px
      height 72px
      img
        width 50px
        height 50px
</style>