<template>
  <q-page>
    <div class="q-ma-md">
      <h2>Report</h2>
      <h3>Past Sprint</h3>
      <task-list :tasks="getLastTasks"></task-list>
      <h3>Current Sprint</h3>
      <task-list :tasks="getCurrentTasks"></task-list>
    </div>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import TaskList from 'components/TaskList'

export default {
  name: 'Report',
  components: { TaskList },
  computed: {
    ...mapGetters('tasks', ['getCurrentTasks', 'getLastTasks'])
  }
}
</script>

<style scoped>

</style>
