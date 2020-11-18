<template>
  <div class="login-wrap">
    <div class="help">
      <a href="https://account.xiaomi.com/helpcenter/">?</a>
    </div>
    <div class="head-title">
      欢迎登录小米有品
    </div>
    <input type="text" class="username" v-model="username" placeholder="用户名">
    <input type="password" class="password" v-model="userpwd" placeholder="密码">
    <button class="login" @click="login">登录</button>
    <div class="next">
      <div class="register" @click="register">
        立即注册
      </div>
      <div class="forget">
        忘记密码？
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      userpwd: ''
    }
  },
  methods: {
    register() {
      this.$router.push('/register')
    },
    login() {
      // console.log(this.username);
      if (this.username.trim() == "" || this.username.trim() == null) {
        this.$toast("请输入账号");
        return
      }
      if (this.userpwd.trim() == "" || this.userpwd.trim() == null) {
        this.$toast("请输入密码");
        return
      }
      this.$http({
        method: 'post',
        url: this.$util.baseUrl+'/users/userLogin',
        data: {
          username: this.username.trim(),
          userpwd: this.userpwd.trim()
        }
      }).then((res) => {
        if(res.data.code === '80000') {
          // 拿到后端返回的用户信息(用户名和昵称) 存到本地
          sessionStorage.setItem('userInfo', JSON.stringify(res.data.data))
          // 跳转至首页
          this.$router.push({ path: '/'})
        } else {
          this.$toast(res.data.msg)
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .login-wrap
    text-align center
    font-size 13px
    height 100vh
    background-image url('../assets/login.jpg')
    background-size 100% 100%
    color #666666
    .help
      border-radius 50%
      width 15px
      line-height 15px
      border 1px solid #000
      text-align center
      font-weight bold
      position absolute
      right 25px
      top 20px
    .head-title
      font-size 24px
      padding-top 37%
      margin-bottom 20px
    .username
    .password
      width 250px
      height 35px
      border none
      background-color #ceedff
      border-bottom 1px solid #8a8a8a
      opacity .7
      margin-bottom 10px
    .login
      display block
      margin 8px auto
      width 120px
      height 30px
      border-radius 15px
      border none 
      background-color #ddbcb1
      color #fff
    .next
      width 140px
      line-height 18px
      display flex
      margin 10px auto
      justify-content space-around
      .register
        border-right 1px solid #8a8a8a
        padding-right 7px
</style>