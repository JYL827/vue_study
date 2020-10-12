<template>
  <div class="home-wrap">
    <div class="home-head">
      <div class="head-search">
        <van-search
          v-model="value"
          shape="round"
          background="rgb(132, 93, 50)"
          placeholder="搜索"
        />
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
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search, Swipe, SwipeItem } from 'vant';

Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)

export default {
  
}
</script>

<style lang="stylus" scoped>
  .head-swipe
    img
      width 100%
      height 160px
</style>