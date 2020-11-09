<template>
  <div class="isEmpty">
    <img :src="emptyTip.imgPath" alt="">
    <p>{{emptyTip.title}}</p>
    <button @click="goShopping" class="goto" v-if="emptyTip.isShowBtn">{{emptyTip.btnName}}</button>
  </div>
</template>

<script>
export default {
  props: {
    emptyTip: {
      type: Object,
      default: function() {
        return {
          imgPath: '',
          title: '',
          isShowBtn: true,
          btnName: '',
          url: ''
        }
      }
    }
  },
  methods: {
    goShopping() {
      this.$router.push(this.emptyTip.url)
    }
  }
}
</script>

<style lang='stylus' scoped>
.isEmpty
  margin-top 35% 
  text-align center
  font-size 14px
  img
    width 99px
    height 99px
  .goto
    height 38px
    padding 0 15px
    border-radius 30px
    background-color #fff
    border 1px solid #8a8a8a
    font-size 15px
</style>