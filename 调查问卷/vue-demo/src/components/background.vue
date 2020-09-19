<template>
  <div class="bg-wrapper">
    <div class="bg-number">
      <div class="bg-header" :number="number">{{number}}</div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: String,
      value: ''
    }
  }
}
</script>

<style>
  .bg-wrapper{
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/images/1-1.jpg");
    background-size:100% 100%; 
  }
  .bg-number {
    position: absolute;
    width: 84px;
    height: 190px;
    top: 0;
    right: 30px;
    background-image: url("../assets/images/WechatIMG2.png");
    background-size:100% 100%;
  }
    .bg-header {
      position: absolute;
      top: 142px;
      right: 15px;
      color: #a57c50;
      font-weight: 600;
    }

</style>