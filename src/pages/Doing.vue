<template>
  <q-page>
    <h2>Doing</h2>
    <div class="q-ma-sm">
      <task-list :tasks="getAllTasks" />
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import TaskList from 'components/TaskList'

export default {
  name: 'Doing',
  components: { TaskList },
  computed: {
    ...mapGetters('tasks', ['getAllTasks'])
  }
}
</script>

<style scoped>

</style>
