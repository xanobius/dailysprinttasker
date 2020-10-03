<template>
  <q-card class="task-mask">
    <q-form @submit="onSubmit">
      <q-card-section class="row">
        <div class="text-h6">Add Task</div>
        <q-space />
        <q-btn
          v-close-popup
          flat
          round
          dense
          icon="close"
        >
        </q-btn>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="row q-mb-sm">
          <q-input class="col" outlined v-model="project" label="Project" />
        </div>
        <div class="row q-mb-sm">
          <q-input class="col" outlined v-model="title" label="Title / Description" />
        </div>
        <div class="row q-mb-sm">
          <q-option-group
            class="col"
            :options="getPreparedSprints"
            label="Notifications"
            type="radio"
            v-model="sprint_id"
          />
        </div>
        <div class="row q-mb-sm">
          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-checkbox v-model="done" val="teal" color="teal" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Done</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn round color="secondary" type="submit" class="q-ma-sm" icon="done"></q-btn>
      </q-card-actions>

    </q-form>
  </q-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TaskMask',
  data () {
    return {
      id: 0,
      project: '',
      title: '',
      sprint_id: 0,
      done: false
    }
  },
  mounted () {
    this.sprint_id = this.getPreparedSprints.filter((s) => s.label === 'Current')[0].value
  },
  computed: {
    ...mapGetters('tasks', ['getPreparedSprints'])
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    onSubmit (evt) {
      this.updateTask({ id: this.id, updates: { ...this.$data } })
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">
  .task-mask{
    width: 99vw;
  }
</style>
