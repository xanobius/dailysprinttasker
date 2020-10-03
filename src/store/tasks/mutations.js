import Vue from 'vue'

export function updateTask (state, payload) {
  if (payload.id === 0) {
    payload.updates.id = (Math.random() * 999) + 100
    state.tasks.push(payload.updates)
    console.log('saved new todo')

    return
  }

  console.log('update task ' + payload.id)

  Object.assign(
    state.tasks.filter((t) => t.id === payload.id)[0],
    payload.updates
  )
}

export function deleteTask (state, id) {
  const index = state.tasks.indexOf(state.tasks.filter((t) => t.id === id)[0])
  Vue.delete(state.tasks, index)
}
