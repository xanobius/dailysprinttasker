import Vue from 'vue'

export function updateTask (state, payload) {
  if (payload.id === 0) {
    payload.updates.id = ((Math.random() * 999) + 100).toFixed(0)
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

export function startNewSprint (state) {
  state.sprints.filter((t) => t.last)[0].last = false
  const oldCurrent = state.sprints.filter((t) => t.current)[0]
  const newCurrent = state.sprints.filter((t) => t.next)[0]
  oldCurrent.current = false
  oldCurrent.last = true
  newCurrent.next = false
  newCurrent.current = true
  state.sprints.push({
    id: ((Math.random() * 999) + 100).toFixed(0),
    last: false,
    current: false,
    next: true
  })
}
