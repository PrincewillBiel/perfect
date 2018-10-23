<template>
  <v-layout row wrap>
    <v-flex xs12 mt-3 class="in-head">
      <div class="big">Profile</div>
      <div style="margin-top: 2em"><a @click="reload()"><v-icon>home</v-icon></a> <v-icon>chevron_right</v-icon> <span>{{ page }}</span></div>
    </v-flex>
    <v-flex xs12 mt-4 class="scrollspy">
      <ul>
        <li><a id="look" @click="look()">Overview</a></li>
        <li><a id="edit" @click="edit()">Manage Profile</a></li>
      </ul>
    </v-flex>
    <v-flex xs12>
      <v-layout row  wrap>
        <keep-alive>
          <component :is="currentView"></component>
        </keep-alive>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import Edit from '@/components/user/view-edit/edit.vue'
import Look from '@/components/user/view-edit/look.vue'
import tokenApi from '@/api/tokenApi'
export default {
  name: 'Dashboard',
  data () {
    return {
      error: null,
      currentView: 'Look',
      page: ''
    }
  },
  mounted () {
    this.fetchUser()

    document.getElementById('look').classList.add('take')
    this.page = 'User Profile'
  },
  methods: {
    async fetchUser () {
      try {
        this.response = await tokenApi.fetchWithToken('/api/user/')
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async navigateTo (route) {
      this.$router.push(route)
    },
    async look () {
      this.currentView = 'Look'
      this.page = 'User Profile'
      if (document.getElementById('edit').classList.contains('take')) {
        document.getElementById('edit').classList.remove('take')
        document.getElementById('look').classList.add('take')
      }
    },
    async edit () {
      this.currentView = 'Edit'
      this.page = 'Edit User Data'
      if (document.getElementById('look').classList.contains('take')) {
        document.getElementById('look').classList.remove('take')
        document.getElementById('edit').classList.add('take')
      }
    },
    reload () {
      window.location.reload()
    }
  },
  components: {
    Edit,
    Look
  }
}
</script>

<style>
.big {
  margin-left: 0.2em;
  font-size: 1.5em;
  font-weight: 600
}
.in-head {
  color: #757575
}
.scrollspy {
  padding: 2em 0.1em 1.5em;
  border-bottom: 0.5px solid #BDBDBD
}
.scrollspy a {
  padding: 1.5em 0.5em;
  text-decoration: none;
}
.scrollspy li {
  display: inline-block
}
.scrollspy ul {
  list-style-type: none
}
.take {
  border-bottom: 2px solid #FFF;
  border-left: 1px solid #BDBDBD;
  border-right: 1px solid #BDBDBD;
  border-top: 2px solid #FFB300
}
@media (min-width: 750px) {
  .big {
    margin-right: 0.2em;
    font-size: 2em
  }
  .scrollspy {
    padding: 2em 0.1em 1.5em;
    border-bottom: 0.5px solid #BDBDBD
  }
  .scrollspy a {
    padding: 1.6em 1em
  }
  .take {
    border-bottom: 3px solid #FFF;
    border-left: 1px solid #BDBDBD;
    border-right: 1px solid #BDBDBD;
    border-top: 2px solid #FFB300
  }
}
</style>
