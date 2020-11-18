<template>
  <div class="register-wrap">
    <div class="head-title">
      注册账号
    </div>
    <div class="inputInfo">
      <van-form @submit="register">
        <van-field 
          label-width="50px" 
          v-model="username"
          maxlength="10" 
          label="用户名" 
          :rules="[{ pattern, message: '用户名只能为数字、字母或下划线' }]"
        />
        <!-- 输入密码 -->
        <van-field 
          label-width="50px" 
          v-model="userpwd" 
          maxlength="20"
          type="password" 
          label="密码" 
          :rules="[{ required: true, message: '请填写密码' }]" 
        />
        <van-field 
          label-width="50px" 
          v-model="nickname"
          maxlength="20" 
          label="昵称" 
          :rules="[{ required: true, message: '请填写昵称' }]" 
        />
        <van-button type="info" native-type="submit" color="#ddbcb1" class="register">注册</van-button>
      </van-form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field, Button, Form } from 'vant';

Vue.use(Field);
Vue.use(Button);
Vue.use(Form)
export default {
  data() {
    return {
      username: '',
      userpwd: '',
      nickname: '',
      pattern: /^[a-z0-9A-Z_%]+$/
    }
  },
  methods: {
    register() {
      this.$http({
        method: 'post',
        url: this.$util.baseUrl+'/users/userRegister',
        data: {
          username: this.username,
          userpwd: this.userpwd,
          nickname: this.nickname
        }
      }).then((res) =>{
        if(res.data.code === '80000') {
          this.$toast(res.data.msg)
          this.login()
        } else {
          this.$toast(res.data.msg)
        }
      })
    },
    login() {
      this.$router.push({ path: '/login'} )
    }
  }
}
</script>

<style lang="stylus" scoped>
.register-wrap
  position relative
  height 100vh
  text-align center
  background-image url('../assets/register.jpg')
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
    margin 30px auto
    width 80px
    height 35px
</style>