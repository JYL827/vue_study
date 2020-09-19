<template>
  <div class="pr-wrapper">
    <v-bg :number="date"></v-bg>
    <div class="pr-title"></div>
    <div class="pr-start" @click="start"></div>
  </div>
</template>

<script>
import background from '@/components/background.vue'
export default {
  data() {
    return {
      date: '第一周'
    }
  },
  components: {
    'v-bg': background
  },
  methods: {
    start() {
      this.$router.push({ path: '/content' })
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .pr-title {
    position: absolute;
    width: 340px;
    height: 300px;
    background-image: url("../assets/images/1-2.png");
    background-size:100% 100%;
    top: 130px;
    left: 25px; 
  }
  .pr-start {
    width: 112px;
    height: 54px;
    position: absolute;
    background-image: url("../assets/images/1-4.png");
    background-size:100% 100%;
    bottom: 35vh;
    left: 50%;
    transform: translateX(-50%);
  }
</style>