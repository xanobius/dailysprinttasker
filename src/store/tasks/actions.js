export function updateTask ({ commit }, payload) {
  console.log(payload)
  commit('updateTask', payload)
}

export function deleteTask ({ commit }, id) {
  commit('deleteTask', id)
}
