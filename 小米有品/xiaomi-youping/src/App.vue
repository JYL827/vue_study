<template>
  <div id="app">
    <div class="tabBar">
      <van-tabbar v-model="active" active-color="#a2876f" route>
      <van-tabbar-item v-for="(item, index) in tabbarList" :key="index" :to="item.path">
          <template slot-scope="props">
            <img slot="icon" :src="props.active ? item.active : item.normal" />
            <div class="title">{{item.title}}</div>
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      active: 0,
      tabbarList: [
        {
          path: "/",
          title: "首页",
          normal:
            require("./assets/menuIcon/home.png"),
          active:
            require("./assets/menuIcon/home1.png"),
        },
        {
          path: "/classify",
          title: "分类",
          normal:
            require("./assets/menuIcon/classify.png"),
          active:
            require("./assets/menuIcon/classify1.png"),
        },
        {
          path: "/cart",
          title: "购物车",
          normal:
            require("./assets/menuIcon/cart.png"),
          active:
            require("./assets/menuIcon/cart1.png"),
        },
        {
          path: "/self",
          title: "我的",
          normal:
            require("./assets/menuIcon/self.png"),
          active:
            require("./assets/menuIcon/self1.png"),
        },
      ],
    }
  }
}
</script>
<style lang="stylus" scoped>
  .tabBar
    text-align center
    img
      width 24px
      height 24px
      margin-top 4px
      margin-bottom 4px
</style>