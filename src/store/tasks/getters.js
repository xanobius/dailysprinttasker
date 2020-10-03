export function getAllTasks (state) {
  return state.tasks
}

export function getCurrentTasks (state) {
  const currentSprint = state.sprints.filter((s) => s.current)[0]
  return state.tasks.filter((t) => t.sprint_id === currentSprint.id)
}

export function getBacklogTasks (state) {
  return state.tasks.filter((t) => t.sprint_id === 0)
}

export function getPreparedSprints (state) {
  return [
    { label: 'Last', value: state.sprints.filter((s) => s.last)[0].id },
    { label: 'Current', value: state.sprints.filter((s) => s.current)[0].id },
    { label: 'Next', value: state.sprints.filter((s) => s.next)[0].id },
    { label: 'Backlog', value: 0 }
  ]
}
