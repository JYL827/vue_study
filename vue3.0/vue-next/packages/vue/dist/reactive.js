// vue3.0响应式原理
// 1.vue2.0会默认递归 2.数组改变length是无效的 3.数据劫持只能监听对象

let toProxy = new WeakMap() // 弱引用映射表，放置的是被代理的对象
let toRaw = new WeakSet() // 被代理过的对象: 原对象

// 判断是否是对象
function isObject(val) {
  return typeof val === 'object' && val !== null
}
function hasOwn(target, key) {
  return target.hasOwnProperty(key)
}

// 响应式的核心方法
function reactive(target) {
  // 创建响应式的对象
  return createReactiveObject(target)
}
function createReactiveObject(target) {
  if (!isObject(target)) { // 如果不是对象，直接返回
    return target
  }

  let proxy = toProxy.get(target)
  if (proxy) {
    return proxy
  }
  if(toRaw.has(target)) { // 防止代理过的对象被再次代理
    return target
  }

  let baseHandler = {
    // Reflect 会替换掉object 上的方法 不会报错且会有返回值
    get(target, key, receiver) {
      console.log('获取');
      // proxy + reflect 反射
      let result = Reflect.get(target, key, receiver)
      // result 是当前取到的值
      return isObject(result) ? reactive(result) : result // 数据多层嵌套时做递归
      // return target
    },
    set(target, key, value, receiver) {
      let hadkey = hasOwn(target, key)
      let oldValue = target[key]
      if(!hadkey) {
        console.log('新增');
      } else if (oldValue !== value) {
        console.log('修改');
      }
      let res = Reflect.set(target, key, value, receiver)
      // target[key] = value // 如果设置没成功 当对象不可以被更改时(configurable writable可以设置对象可读可写)
      return res
    },
    deleteProperty(target, key) {
      let res = Reflect.deleteProperty(target, key)
      return res
    }
  }

  let observed = new Proxy(target, baseHandler)
  toProxy.set(target, observed)
  toRaw.add(observed, target)
  return observed
}

let object = {
  name: {
    n: 'wn'
  }
}

let proxy = reactive(object)
proxy.name = 'sh'
console.log(object.name)
