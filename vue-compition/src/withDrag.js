import { defineComponent, h } from 'vue';
// html css js .vue 会被webpack的vue-loader打包成 js 
/*
  <template>
    <div class="cls">123</div>
  </template>
  template被打包成h('div', {class: 'cls', [123]})
  h函数被调用
  div节点就被创建出来了
*/
export default function (Com) {
  // console.log(Com)
  // 第二个参数 script 中间那一段
  return defineComponent({
    // render 返回就是 该组件需要渲染的
    render() {
      // return h('h3', {}, ['hhh'])
      // vue react(函数式) angular(响应式) 前端老三样
      return h('div', {
        "onTouchmove": this.handleMove,
        style: [
          {position: 'absolute'},
          {left: this.x + 'px'},
          {top: this.y + 'px'}
        ]
      }, [h(Com)])
    },
    data() {
      return {
        x: 0,
        y: 0
      }
    },
    methods: {
      handleMove(e) {
        const x = e.touches[0].pageX;
        const y = e.touches[0].pageY;
        this.x = x;
        this.y = y;

      }
    }
  })
}