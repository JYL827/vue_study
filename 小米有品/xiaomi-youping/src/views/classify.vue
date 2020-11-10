<template>
  <div class="classfy-wrap">
    <van-search v-model="value" :placeholder="searchTitle" shape="round" />
    <div class="side-wrap">
      <div class="side-item">1</div>
      <div class="side-item">2</div>
      <div class="side-item">3</div>
      <div class="side-item">4</div>
      <div class="side-item">5</div>
      <div class="side-item">6</div>
      <div class="side-item">7</div>
      <div class="side-item">8</div>
      <div class="side-item">9</div>
      <div class="side-item">10</div>
      <div class="side-item">11</div>
      <div class="side-item">12</div>
    </div>
    <v-tabBar></v-tabBar>
  </div>
</template>

<script>
import TabBar from '@/components/tabBar.vue'
import Vue from 'vue';
import { Search } from 'vant';
import { mapGetters } from 'vuex';

Vue.use(Search);
export default {
  data() {
    return {
      searchTitle: '',
      value: '',
      timeId: {}
    }
  },
  components: {
    'v-tabBar': TabBar
  },
  computed: {
    ...mapGetters(['hotWords'])
  },
  methods: {
    // 每隔2秒循环播放热搜词汇
    getTitle() {
      let i = 1
      this.searchTitle = this.hotWords[0]
      let timeId = setInterval(() => {
        this.searchTitle = this.hotWords[i]
        i++
        if(i > this.hotWords.length - 1) i = 0
      }, 2000)
      // 在destroyed生命周期中清除定时器
      this.timeId = timeId
    }
  },
  mounted() {
    this.getTitle()
  },
  destroyed() {
    clearInterval(this.timeId)
  }
}
</script>

<style lang="stylus" scoped>
.van-search
  width 100vw
  height 45px
  border-bottom 1px solid #f1f1f1
  position absolute
  top 0
.classfy-wrap
  height 100vh
  background-color #f1f1f1
.side-wrap
  padding-top 45px
  padding-bottom 50px
  width 93px
  height 572px
  background-color #fff
  overflow scroll
  .side-item
    box-sizing border-box
    height 50px
    padding 13px 0
</style>