<template>
  <!-- fragment -->
  <ul>
    <Fragment :data="[0, 3, 5, 5, 6, 7, 9, 1, 4]"/>
  </ul>
</template>

<script>
import Fragment from './fragment.vue'
export default {
  components: {
    Fragment
  }
}
</script>

<style>

</style>