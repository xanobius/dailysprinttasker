<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Daily Huddle Manager
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Report',
    caption: 'Ready 4 Huddle',
    icon: 'insert_chart',
    link: 'https://quasar.dev'
  },
  {
    title: 'Doing',
    caption: 'Current Sprint',
    icon: 'work',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Upcomming',
    caption: 'Next Sprint',
    icon: 'work_outline',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Backlog',
    caption: 'Future Todos',
    icon: 'toc',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Archive',
    caption: 'Past/Done Tasks',
    icon: 'archive',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Challenges',
    caption: 'Those little basterds',
    icon: 'warning',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Settings',
    caption: 'Configurations',
    icon: 'app_settings_alt',
    link: 'https://facebook.quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
