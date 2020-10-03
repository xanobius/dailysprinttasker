<template>
  <q-page>
    <div class="q-ma-md">
      <h2>Upcomming (Next Sprint)</h2>
      <task-list :tasks="getNextTasks" />
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import TaskList from 'components/TaskList'

export default {
  name: 'Upcomming',
  components: { TaskList },
  computed: {
    ...mapGetters('tasks', ['getNextTasks'])
  }
}
</script>

<style scoped>

</style>
