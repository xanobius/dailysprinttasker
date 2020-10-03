<template>
  <q-page>
    <div class="q-ma-md">
      <h2>Backlog</h2>
      <p>All the tasks on your bucket list, but not planed to realise in the next 48 hours</p>
      <task-list :tasks="getBacklogTasks" />
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import TaskList from 'components/TaskList'

export default {
  name: 'Backlog',
  components: { TaskList },
  computed: {
    ...mapGetters('tasks', ['getBacklogTasks'])
  }
}
</script>

<style scoped>

</style>
