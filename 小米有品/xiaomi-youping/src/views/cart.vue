<template>
  <div class="cart-wrap">
    <div class="cart-header">购物车</div>
    <div class="tip">
      <img src="https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/no_result/no_result_cart.png" alt="">
      <p>购物车还没有商品哦~</p>
      <button @click="goShopping" class="shopping">去逛逛</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goShopping() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang='stylus' scoped>
.cart-wrap
  text-align center
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
  .tip
    margin-top 40%
    font-size 14px
    img
      width 99px
      height 99px
    .shopping
      width 77px
      height 38px
      border-radius 30px
      background-color #fff
      border 1px solid #8a8a8a
      font-size 15px
</style>