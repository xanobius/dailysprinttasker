<template>
  <q-layout view="hHh lpr Lff" class="shadow-2 rounded-borders">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="menu" />
        <q-toolbar-title>Header</q-toolbar-title>
        <q-btn flat @click="showAddTask = true" round dense icon="add_task"></q-btn>
        <!--        <q-btn flat @click="addNewTask" round dense icon="add_task"></q-btn>-->
      </q-toolbar>
    </q-header>
    <!--  Navigation drawer  -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above

      :mini="!leftDrawerOpen || miniState"
      @click.capture="drawerClick"

      :width="250"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item v-for="nl in navLinks" v-bind:key="nl.title" v-ripple :to="nl.link" exact>
            <q-item-section avatar><q-icon :name="nl.icon" /></q-item-section>
            <q-item-section>{{ nl.title }}</q-item-section>
          </q-item>
        </q-list>
        <q-btn @click="promptStartNewSprint" color="green" icon="mail" icon-right="send" label="Start new Sprint" class="full-width" />
      </q-scroll-area>
      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn
          round
          unelevated
          color="grey-7"
          icon="chevron_left"
          @click="miniState = true"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog v-model="showAddTask">
      <task-mask
        v-on:close="showAddTask = false"
      ></task-mask>
    </q-dialog>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'
import TaskMask from 'components/TaskMask'
import { mapActions } from 'vuex'

const linksData = [
  {
    title: 'Doing',
    caption: 'Current Sprint',
    icon: 'work',
    link: '/'
  },
  {
    title: 'Report',
    caption: 'Ready 4 Huddle',
    icon: 'insert_chart',
    link: '/report'
  },
  {
    title: 'Upcoming',
    caption: 'Next Sprint',
    icon: 'work_outline',
    link: '/upcoming'
  },
  {
    title: 'Backlog',
    caption: 'Future Todos',
    icon: 'toc',
    link: '/backlog'
  },
  {
    title: 'Archive',
    caption: 'Past/Done Tasks',
    icon: 'archive',
    link: '/archive'
  },
  {
    title: 'Challenges',
    caption: 'Those little basterds',
    icon: 'warning',
    link: '/challenges'
  },
  {
    title: 'Settings',
    caption: 'Configurations',
    icon: 'app_settings_alt',
    link: '/settings'
  }
]

export default {
  name: 'MainLayout',
  components: { TaskMask },
  data () {
    return {
      showAddTask: false,
      leftDrawerOpen: true,
      miniState: false,
      navLinks: linksData,
      todoDrawerOpen: false
    }
  },
  created () {
    this.todoDrawerOpen = false
    this.getInitialData()
  },
  methods: {
    ...mapActions('tasks', ['startNewSprint', 'getInitialData']),
    promptStartNewSprint () {
      this.$q.dialog({
        title: 'Neuen Sprint starten?',
        message: 'Aktiver Sprint wird gewechselt. Unerledigte Tasks müssen manuell neu zugeordnet werden.',
        ok: {
          push: true
        },
        cancel: {
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.startNewSprint()
      })
    },
    drawerClick (e) {
      if (this.miniState) {
        this.miniState = false
        e.stopPropagation()
      }
    },
    addNewTask () {
      this.todoDrawerOpen = true
    },
    receivedCloseWish () {
      console.log('close  it, may be')
    }
  }
}
</script>
