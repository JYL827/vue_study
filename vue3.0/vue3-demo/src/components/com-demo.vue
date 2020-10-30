<template>
  <!-- fragment -->
  <!-- <ul>
    <Fragment :data="[0, 3, 5, 5, 6, 7, 9, 1, 4]"/>
  </ul>
  <hr/> -->
  <TeleportDemo />
  <hr/>
  <Suspense>
    <template #default>
      <AsyncComponent :timeout="3000"/>
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>

<script>
import Fragment from './fragment.vue'
import TeleportDemo from './teleport.vue'
import AsyncComponent from './suspense.vue'
import Loading from './loading.vue'
export default {
  components: {
    Fragment,
    TeleportDemo,
    AsyncComponent,
    Loading
  }
}
</script>

<style>

</style>