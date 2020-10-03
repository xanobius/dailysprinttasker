<template>
  <q-list bordered separator>
      <q-item
        clickable
        v-ripple
        v-for="i in tasks" v-bind:key="i.id" :class="{ done : i.done }"
        @click="updateTask({ id : i.id, updates : { done : ! i.done }})"
      >
        <q-item-section side top>
          <q-checkbox
            v-model="i.done"
            color="secondary"
            class="no-pointer-events"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ i.title}}</q-item-label>
          <q-item-label caption>{{ i.project }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn
            @click.stop="promptToDelete(i.id)"
            flat
            round
            dense
            color="red-9"
            icon="delete"
          />
        </q-item-section>
      </q-item>
  </q-list>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TaskList',
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  computed: {
    orderedTasks: function () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.tasks.sort((a, b) => {
        return a.done === b.done ? 0 : (a.done ? 1 : -1)
      })
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete (id) {
      this.$q.dialog({
        title: 'Sicher',
        message: 'Task wirklich löschen?!',
        ok: {
          push: true
        },
        cancel: {
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  }
}
</script>

<style scoped>
.done{
  opacity: 0.4;
}
</style>
