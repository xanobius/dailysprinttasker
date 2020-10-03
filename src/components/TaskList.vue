<template>
  <q-list bordered separator>
      <q-item clickable v-ripple v-for="i in tasks" v-bind:key="i.id">

        <div class="q-gutter-sm q-mr-lg">
          <q-checkbox
            v-model="i.done"
            color="secondary"
            :true-value="true"
            :false-value="false"
          />
        </div>
        <q-item-section>
          <q-item-label>{{ i.title}}</q-item-label>
          <q-item-label caption>{{ i.project }}</q-item-label>
        </q-item-section>
      </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
