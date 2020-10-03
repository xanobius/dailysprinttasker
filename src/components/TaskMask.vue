<template>
  <div>
    <h2>Thats it, do it</h2>
    <div>
      <q-form @submit="onSubmit">
        <q-input outlined v-model="project" label="Label" />
        <q-input outlined v-model="title" label="Label" />
        <q-option-group
          :options="sprintOptions"
          label="Notifications"
          type="radio"
          v-model="sprint"
        />
        <div class="q-pa-md q-gutter-sm on-right">
          <q-btn round color="secondary" type="submit" icon="done"></q-btn>
          <q-btn round color="negative" type="reset" icon="delete" @click="$emit('close')"></q-btn>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskMask',
  data () {
    return {
      sprintOptions: [
        { label: 'Current', value: 0 },
        { label: 'Last', value: 1 },
        { label: 'Next', value: 2 },
        { label: 'Backlog', value: 3 }
      ],
      project: null,
      title: '',
      sprint: null,
      done: false,
      dings: ''
    }
  },
  methods: {
    onSubmit (evt) {
      console.log('save it')
      evt.preventDefault()
    }
  }
}
</script>

<style scoped>

</style>
