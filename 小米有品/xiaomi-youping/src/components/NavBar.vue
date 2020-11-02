<template>
  <div class="Navbar">
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar)
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus">
  .van-nav-bar 
    background-color #f1f1f1
    .van-icon
      color #000
</style>