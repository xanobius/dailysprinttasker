
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Doing.vue') },
      { path: '/report', component: () => import('pages/Report.vue') },
      { path: '/upcoming', component: () => import('pages/Upcoming.vue') },
      { path: '/backlog', component: () => import('pages/Backlog') },
      { path: '/archive', component: () => import('pages/Archive.vue') },
      { path: '/challenges', component: () => import('pages/Challenges') },
      { path: '/settings', component: () => import('pages/Settings.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
