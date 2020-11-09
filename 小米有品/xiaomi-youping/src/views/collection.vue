<template>
  <div class="collection-wrap">
    <div class="collection-head">
      <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/icons/icon_arrow_left_black.png" @click="goBack">
      <p>我的收藏</p>
    </div>
    <!-- 收藏为空时 -->
    <v-empty :emptyTip="emptyTip"></v-empty>
  </div>
</template>

<script>
import Empty from '@/components/empty.vue'
export default {
  data() {
    return {
      emptyTip: {
        imgPath: "https://m.xiaomiyoupin.com/youpin/static/m/res/images/no_result/no_result_favor.png",
        title: '目前没有收藏商品哦~',
        isShowBtn: true,
        btnName: '去首页逛逛',
        url: '/'
      }
    }
  },
  components: {
    'v-empty': Empty
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='stylus' scoped>
.collection-wrap
  width 100vw
  height 100vh
  color #8a8a8a
  width 100vw
  .collection-head
    height 48px
    background-color #f4f4f4
    display flex
    align-items center
    img 
      width 39px
      height 48px
    p
      margin-left 136px
</style>