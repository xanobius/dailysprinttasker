<template>
  <div>
    <h2>Thats it, do it</h2>
    <div>
      <q-input outlined v-model="text" label="Label" :dense="dense" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskMask',
  data () {
    return {
      dings: ''
    }
  }
}
</script>

<style scoped>

</style>
