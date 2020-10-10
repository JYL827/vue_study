// vue2.0是如何实现响应式原理
// 数据改变了，视图就会更新

const { method } = require("lodash")

// 重写数组方法 push shift(去头，返回头部元素) unshift(头部添加，返回新长度) pop(去尾，返回尾部元素) reverse
let oldArrayPrototype = Array.prototype
let proto = Object.create(oldArrayPrototype)

Array.from(['push', 'shift', 'unshift']).forEach(method => {
  proto[method] = function() { // 函数劫持,把函数进行重写，内部调用的还是老方法
    updateView() // 切片编程
    oldArrayPrototype[method].call(this, ...arguments)
  }
})

function observer(target) {// 观察者
  if (typeof target !== 'object' || target == null) {
    return target
  }

  if(Array.isArray(target)) {
    Object.setPrototypeOf(target, proto)
  }

  for(let key in target) {
    defineReactive(target, key, target[key])
  }
  // updateView()
}

function defineReactive(target, key, value) {
  observer(value)// 递归
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newValue) {
      if(newValue !== value) {
        updateView()
        value = newValue
      }
    }
  })
}

function updateView() {
  console.log('视图更新了');
}

let data = {
  name: 'wn',
  age: 18,
  like: {
    a: 'running',
    b: 'reading'
  },
  job: ['teacher', 'cleaner', 'driver']
}
observer(data)
data.name = 'yl'
data.job.push('policeman')
console.log(data.name);