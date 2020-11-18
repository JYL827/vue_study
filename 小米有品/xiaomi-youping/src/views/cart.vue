<template>
  <div class="cart-wrap">
    <div class="cart-header">购物车</div>
    <!-- 购物车为空时 -->
    <v-empty :emptyTip="emptyTip"></v-empty>
    <v-tabBar></v-tabBar>
  </div>
</template>

<script>
import Empty from '@/components/empty.vue'
import TabBar from '@/components/tabBar.vue'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      emptyTip: {
        imgPath: "https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/no_result/no_result_cart.png",
        title: '购物车还没有商品哦~',
        isShowBtn: true,
        btnName: '去逛逛',
        url: '/'
      }
    }
  },
  computed: {
    ...mapGetters(['hasLogin'])
  },
  components: {
    'v-empty': Empty,
    'v-tabBar': TabBar
  },
  methods: {
    // 如果用户没有登录，则不展示购物车详情
    notLogin() {
      if(!this.hasLogin) {
        this.emptyTip.title = '登录后才能看到商品哦~'
        this.emptyTip.btnName = '立即登录'
        this.emptyTip.url = '/login'
      }
    }
  },
  mounted() {
    this.notLogin()
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