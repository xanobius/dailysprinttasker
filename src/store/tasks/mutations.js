import Vue from 'vue'

export function updateTask (state, payload) {
  Object.assign(
    state.tasks.filter((t) => t.id === payload.id)[0],
    payload.updates
  )
}

export function deleteTask (state, id) {
  const index = state.tasks.indexOf(state.tasks.filter((t) => t.id === id)[0])
  Vue.delete(state.tasks, index)
}
