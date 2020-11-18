const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/users')

// 用户登录
router.post('/userLogin', async (ctx, next) => {
  // console.log(ctx.request.body);
  const _username = ctx.request.body.username
  const _userpwd = ctx.request.body.userpwd
  // console.log(_username);
  if(_username && _userpwd) {
    await userService.userLogin(_username, _userpwd).then((res) => {
      if(!res.length) {
        try {
          throw Error('用户名或密码错误')
        } catch (err) {
          console.log(err);
        }
        ctx.body = {
          code: '80005',
          data: 'err',
          msg: '用户名或密码错误'
        }
      } else {
        let result = {
          username: res[0].username,
          nickname: res[0].nickname
        }
        ctx.body = {
          code: '80000',
          data: result,
          msg: '登录成功'
        }
      }
    })
  } else {
    ctx.body = {
      code: '80001',
      msg: '用户名或密码不能为空'
    }
  }
})

// 用户注册
router.post('/userRegister', async (ctx, next) => {
  console.log(ctx.request.body.username);
  var _username = ctx.request.body.username
  var _userpwd = ctx.request.body.userpwd
  var _nickname = ctx.request.body.nickname
  if(!_username || !_userpwd || !_nickname) {
    ctx.body =  {
      code: '80001',
      msg: '用户名、密码或昵称不能为空'
    }
    return
  }
  let user = {
    username: _username,
    userpwd: _userpwd,
    nickname: _nickname
  }
  await userService.findUser(user.username).then(async(res) => {
    if(res.length) {
      try {
        throw Error('用户名已存在')
      } catch (err) {
        console.log(err);
      }
      ctx.body = {
        code: '80003',
        data: 'err',
        msg: '用户名已存在'
      }
    } else {
      await userService.insertUser([user.username, user.userpwd, user.nickname])
      .then((res) =>{
        let r = ''
        if(res.affectedRows !== 0) {
          r = 'ok'
          ctx.body = {
            code: '80000',
            data: r,
            msg: '注册成功'
          }
        } else {
          r = 'error'
          ctx.body = {
            code: '80004',
            data: r,
            msg: '注册失败'
          }
        }
      })
      .catch((err) => {
        ctx.body = {
          code: '80002',
          data: err
        }
      })
    }
  })
  .catch((err) => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})

module.exports = router
