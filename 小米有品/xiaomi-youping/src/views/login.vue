<template>
  <div class="login-wrap">
    <div class="help">
      <a href="https://account.xiaomi.com/helpcenter/">?</a>
    </div>
    <div class="head-title">
      欢迎登录小米有品
    </div>
    <input type="text" class="account" placeholder="账号">
    <input type="password" class="password" placeholder="密码">
    <button class="login">登录</button>
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
  methods: {
    register() {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .login-wrap
    text-align center
    font-size 13px
    height 100vh
    background-image url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604933883874&di=2b84b7a3835d13ff19a3f3b8388a3719&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201406%2F18%2F20140618191202_MnFQL.thumb.400_0.jpeg')
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
    .account
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
      display flex
      margin 10px auto
      justify-content space-around
      .register
        border-right 1px solid #8a8a8a
        padding-right 7px
</style>