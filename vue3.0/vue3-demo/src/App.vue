<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld />
  <comDemo />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import comDemo from './components/com-demo.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    comDemo
  }
}
</script>
