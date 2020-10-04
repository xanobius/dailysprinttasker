import axios from 'axios'

export function updateTask ({ commit }, payload) {
  commit('updateTask', payload)
}

export function deleteTask ({ commit }, id) {
  commit('deleteTask', id)
}

export function startNewSprint ({ commit }) {
  commit('startNewSprint')
}

export function getInitialData ({ commit }) {
  // Random Auth string, insert real one to make it work
  setAxiosHeaders('sE70uGGnmwFqdRwvLuG5SU8JoFk56VbjactchEgC')
  axios.get('http://huddle.test/api/tasks')
    .then(response => {
      commit('setTasks', response.data)
      console.log(response)
    })
  axios.get('http://huddle.test/api/sprints')
    .then(response => {
      commit('setSprints', response.data)
      console.log(response)
    })
}

function setAxiosHeaders (token) {
  axios.defaults.headers.common.Authorization = 'Bearer ' + token
}
