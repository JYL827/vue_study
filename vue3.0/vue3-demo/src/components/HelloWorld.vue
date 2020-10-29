<template>
  <h1>{{state.count}} * 2 = {{double}}</h1>
  <button @click="add">+1</button>
  <h2>{{num}}</h2>
  <hr/>
</template>

<script>
import { computed, reactive, ref, onMounted } from 'vue'
export default {
  setup() {
    // hooks函数
    const {state, double} = useCounter(1)
    // const state = reactive({
    //   count: 1
    // })
    const num = ref(2)
    function add() {
      state.count++
      num.value++
    }
    // const double = computed(() => state.count * 2)

    return {
      state,
      add,
      double,
      num
    }
  }
}

function useCounter(count) {
  const state = reactive({
    count
  })
  const double = computed(() => state.count * 2)
  return {state, double}
}
</script>

<style>

</style>
