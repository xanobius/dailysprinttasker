<template>
  <q-page>
    <div class="q-ma-md">
      <h2>Doing</h2>
      <task-list :tasks="getCurrentTasks" />
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
    ...mapGetters('tasks', ['getCurrentTasks'])
  }
}
</script>

<style scoped>

</style>
