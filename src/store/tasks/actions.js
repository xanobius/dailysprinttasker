export function updateTask ({ commit }, payload) {
  commit('updateTask', payload)
}

export function deleteTask ({ commit }, id) {
  commit('deleteTask', id)
}

export function startNewSprint ({ commit }) {
  commit('startNewSprint')
}
