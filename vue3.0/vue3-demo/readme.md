# vue3.0 与 vue2.0 的区别

1. template里面不再需要唯一的根节点，减少了没意义的dom
2. vue3.0使用Composition API，vue2.0使用的是options API
3. 完美支持tree shaking
4. 

组件:
  fragment 不再需要一个无用的根节点
  teleport 可以指明dom节点插入
  suspense 更好地实现异步组件