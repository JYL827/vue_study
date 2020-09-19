<template>
  <div class="content-wrapper">
    <v-bg :number="problemTitle"></v-bg>
    <div class="content-title">
      <div class="content-head">{{problemTitle}}</div>
      <ul class="content-iconList">
        <li v-for="(item, index) in iconList" :key="index" class="icon-item">{{item}}</li>
      </ul>
      <ul class="content-problemList">
        <li v-for="(item, index) in problemList" :key="index">{{item}}</li>
      </ul>
    </div>
    <div class="content-next" @click="next"></div>
  </div>
</template>

<script>
import background from '@/components/background.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['problemList', 'problemTitle', 'iconList', 'isOver'])
  },
  components: {
    'v-bg': background
  },
  methods: {
    ...mapMutations(['nextProblem']),
    next() {
      this.nextProblem()
      if(this.isOver) {
        this.$router.push({ path: '/account'})
      }
    },
    // 实现题目单选改变颜色以及计算分数
  }
}
</script>

<style>
  .content-title {
    color: #fff;
    position: absolute;
    width: 340px;
    height: 300px;
    background-image: url("../assets/images/2-1.png");
    background-size:100% 100%;
    top: 130px;
    left: 25px; 
  }
    .content-head {
      position: absolute;
      left: 100px;
      top: 50px;
    }
    .content-problemList {
      position: absolute;
      top: 80px;
      left: 130px;
      line-height: 31px;
    }
    .content-iconList {
      position: absolute;
      top: 85px;
      left: 100px;
    }
      .icon-item {
        text-align: center;
        width: 20px;
        height: 20px;
        margin-bottom: 8px;
        border-radius: 50%;
        border: 1px solid #fff;
      }
    ul {
      list-style: none;
    }
  .content-next {
    width: 112px;
    height: 54px;
    position: absolute;
    background-image: url("../assets/images/2-2.png");
    background-size:100% 100%;
    bottom: 35vh;
    left: 50%;
    transform: translateX(-50%);
  }
</style>