<template>
  <div class="cart-wrap">
    <div class="cart-header">购物车</div>
    <v-empty :emptyTip="emptyTip"></v-empty>
  </div>
</template>

<script>
import Empty from '@/components/empty.vue'
export default {
  data() {
    return {
      emptyTip: {
        imgPath: "https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/no_result/no_result_cart.png",
        title: '购物车还没有商品哦~',
        isShowBtn: true,
        btnName: '去逛逛'
      }
    }
  },
  components: {
    'v-empty': Empty
  }
}
</script>

<style lang='stylus' scoped>
.cart-wrap
  color #8a8a8a
  background-color #f4f4f4
  width 100vw
  height 100vh
  .cart-header
    line-height 88px
    text-align center
    background-image url('https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/common/bg_page_header.png')
    background-size 100% 120%
    font-size 20px
    color #fff
    font-weight bold
</style>