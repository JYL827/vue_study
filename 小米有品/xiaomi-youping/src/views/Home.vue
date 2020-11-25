<template>
  <div class="home-wrap" ref="wrapper">
    <div class="home-head">
      <div class="head-title">
        <img src="https://img.youpin.mi-img.com/static/weex_images/v1/m/navi_title_v6.png" alt="">
      </div>
      <!-- 搜索框 -->
      <div class="head-search">
        <van-search
          v-model="value"
          shape="round"
          background="rgb(132, 93, 50)"
          placeholder="搜一搜"
        />
      </div>
    </div>
    <!-- 轮播图 -->
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
    <home-menu></home-menu>
    <div class="home-goods">
      <div class="goods-title">
        <div v-for="(item, index) of title" :key="index" class="origin" :class=" active===index ? 'selected' : ''" @click="selected(index)">
          <span>{{item}}</span>
          <div class="border" v-show="index < title.length - 1"></div>
        </div>
      </div>
      <div class="goods-list">
        <div class="good-content">
          <img src="https://img.youpin.mi-img.com/shopmain/e257a101f8cc41e97135ee5ba74707ad.jpg" style="width:171px;height:171px" alt="">
          <div class="good-special">
            <p style="width:33.6px;margin-right:5px;background-color:#f2b364;border-radius:2px;">HOT</p>
            <p style="width:33.6px;margin-right:5px;background-color:#d96b6c;border-radius:2px;">特价</p>
            <p style="width:33.6px;background-color:#8dba6d;border-radius:2px;">新品</p>
          </div>
          <p class="good-name">防护牙套</p>
          <p class="good-detail">防护磨牙</p>
          <div class="good-price">
            <span>￥</span>
            <span class="newprice">34</span>
            <span class="oldprice">￥42</span>
          </div>
        </div>
        <div class="good-content">
          <img src="https://img.youpin.mi-img.com/shopmain/e257a101f8cc41e97135ee5ba74707ad.jpg" style="width:171px;height:171px" alt="">
          <div class="good-special">
            <p style="width:33.6px;margin-right:5px;background-color:#f2b364;border-radius:2px;">HOT</p>
          </div>
          <p class="good-name">防护牙套</p>
          <p class="good-desc">防护磨牙</p>
          <div class="good-price">
            <span>￥</span>
            <span class="newprice">34</span>
            <span class="oldprice">￥42</span>
          </div>
        </div>
        <div class="good-content">
          <img src="https://img.youpin.mi-img.com/shopmain/e257a101f8cc41e97135ee5ba74707ad.jpg" style="width:171px;height:171px" alt="">
          <div class="good-special">
            <p style="width:33.6px;background-color:#8dba6d;border-radius:2px;">新品</p>
          </div>
          <p class="good-name">防护牙套</p>
          <p class="good-desc">防护磨牙</p>
          <div class="good-price">
            <span>￥</span>
            <span class="newprice">34</span>
            <span class="oldprice">￥42</span>
          </div>
        </div>
        <div class="good-content">
          <img src="https://img.youpin.mi-img.com/shopmain/e257a101f8cc41e97135ee5ba74707ad.jpg" style="width:171px;height:171px" alt="">
          <div class="good-special">
            <p style="width:33.6px;background-color:#8dba6d;border-radius:2px;">新品</p>
          </div>
          <p class="good-name">防护牙套</p>
          <p class="good-desc">防护磨牙</p>
          <div class="good-price">
            <span>￥</span>
            <span class="newprice">34</span>
            <span class="oldprice">￥42</span>
          </div>
        </div>
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
import HomeMenu from '@/components/homeMenu.vue'

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)

export default {
  data() {
    return {
      value: '',
      active: 0,
      title: ['推荐', '智能', '电器', '生活', '时尚']
    }
  },
  components: {
    'v-tabBar': TabBar,
    HomeMenu
  },
  methods: {
    selected(index) {
      this.active = index
      let title = document.querySelector('.goods-title')
      let i = index - 1
      if(index > 0 && index < 4) {
        title.style.transform = `translateX(${-47 * i}px)`
      } else if(index == 0) {
        title.style.transform = `translateX(0px)`
      } else if (index == 4) {
        title.style.transform = `translateX(-94px)`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-wrap
  background-color rgb(244, 244, 244)
  padding-bottom 50px
  .home-head
    width 100vw
    position fixed
    top 0
    z-index 999
    background-color rgb(132, 93, 50)
    .head-title
      width 46px
      height 54px
      padding 11px 0 0 6px
      box-sizing border-box
      float left
      color #fff
      img
        width 40px
        height 31px
  .head-swipe
    margin-top 54px
    img
      width 100vw
      height 160px
      display block
  .home-goods
    overflow hidden
    .goods-title
      white-space nowrap
      .origin
        width 93.75px
        line-height 51px
        display inline-block
        font-weight bold
        font-size 15px
        color #333333
        text-align center
        .border
          width 1px
          height 25px
          float right
          background-color #e2e2e2
          transform translateY(50%)
      .selected
        position relative
        font-size 20px
        color #c30d23
        &::after
          content ''
          width 25px
          height 3px
          position absolute
          bottom 8px
          left 50%
          transform translateX(-50%)
          background-color #c30d23
    .goods-list
      margin 0 12px
      display flex
      flex-wrap wrap
      justify-content space-between
      .good-content
        position relative
        width 171px
        height 258px
        margin-bottom 9px
        background-color #fff
        border-radius 6px
        overflow hidden
        p
          margin 0
        .good-special
          position absolute
          bottom 90px
          left 5px
          margin-right 5px
          text-align center
          color #ffffff
          line-height 16px
          font-size 12px
          display flex
        .good-name
          font-size 15px
          color #333333
          margin-top 6px
        .good-desc
          font-size 13px
          color #999999
          margin-top 2px
          padding 0 3px
        .good-price
          color #e30d0d
          font-size 17px
          margin-top 6.5px
          span
            font-size 13px
          .newprice
            font-size 17px
          .oldprice
            font-size 14px
            color #999999
            text-decoration line-through
            margin-left 4px
</style>