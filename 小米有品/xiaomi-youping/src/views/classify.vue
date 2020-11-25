<template>
  <div class="classfy-wrap">
    <van-search v-model="value" :placeholder="searchTitle" shape="round" />
    <div class="side-wrap">
      <div class="side-item" v-for="(item, index) of titleList" :key="index" @click="goPage(index)">
        <div class="origin" :class="active===index ? 'selected' : '' ">{{item}}</div>
      </div>
    </div>
    <class-list :classData="classData[classIndex]"></class-list>
    <v-tabBar></v-tabBar>
  </div>
</template>

<script>
import TabBar from '@/components/tabBar.vue'
import ClassList from '@/components/classList.vue'
import Vue from 'vue';
import { Search } from 'vant';
import { mapGetters } from 'vuex';
import ClassData from '@/assets/classList/classDetail.js'

Vue.use(Search);
export default {
  data() {
    return {
      searchTitle: '',
      value: '',
      timeId: {},
      titleList: ['有品推荐', '家用电器', '居家餐厨', '电视影音', '家具家装', '智能家庭', '手机电脑', '数码周边', '日用文创', '服装配饰', '美妆个护'],
      classData: ClassData,
      classIndex: 0,
      active: 0
    }
  },
  components: {
    'v-tabBar': TabBar,
    ClassList
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
    },
    goPage(index) {
      this.active = index
      this.classIndex = index % this.classData.length 
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
  position fixed
  top 0
  z-index 999
.classfy-wrap
  background-color #f1f1f1
  .side-wrap
    position fixed
    left 0
    width 93px
    height 572px
    background-color #fff
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    .side-item
      width 74.5px
      padding 13px 0
      font-size 13px
      color #666666
      text-align center
      .origin
        width 74px
        line-height 24px
      .selected
        background-color rgb(241, 83, 56)
        color #fff
        border-radius 12px
</style>