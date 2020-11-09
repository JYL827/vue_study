<template>
  <div class="register-wrap">
    <div class="head-title">
      注册账号
    </div>
    <div class="inputInfo">
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field label-width="50px" v-model="username" type="digit" label="用户名" required />
      <!-- 输入密码 -->
      <van-field label-width="50px" v-model="password" type="password" label="密码" required />
      <van-field label-width="50px" v-model="nickname" label="昵称" required />
    </div>
    <van-button type="primary" color="#ddbcb1" url="/login" class="register">注册</van-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field, Button } from 'vant';

Vue.use(Field);
Vue.use(Button);
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.register-wrap
  position relative
  height 100vh
  text-align center
  background-image url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604940998325&di=9c4a8fe71c8a41ce8a063fb392a0de70&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201405%2F08%2F20140508212719_V8RLN.thumb.700_0.jpeg')
  background-size 100% 100%
  .head-title
    padding-top 40px
    font-size 24px
    color #666666
  .inputInfo
    position absolute
    width 300px
    top 25%
    left 50%
    transform translateX(-50%)
  .register
    position absolute
    top 54%
    width 80px
    height 35px
    left 50%
    transform translateX(-50%)
</style>