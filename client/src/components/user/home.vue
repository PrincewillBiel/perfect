<template>
  <v-layout row wrap>
    <v-flex xs12 mt-3 class="in-head">
      <div class="big">Dashboard</div>
      <div style="margin-top: 2em"><a @click="reload()"><v-icon>home</v-icon></a> <v-icon>chevron_right</v-icon> <span>{{ page }}</span></div>
    </v-flex>
    <v-flex xs12 mt-4 class="scrollspy">
      <ul>
        <li><a id="overview" @click="overview()">Overview</a></li>
        <li><a id="investment" @click="investment()">Investments</a></li>
        <li><a id="bonus" @click="bonus()">Bonuses</a></li>
      </ul>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap>
        <keep-alive>
          <component :is="currentView"></component>
        </keep-alive>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import Bonus from '@/components/user/overview/bonus.vue'
import Investment from '@/components/user/overview/investment.vue'
import Overview from '@/components/user/overview/overview.vue'
import tokenApi from '@/api/tokenApi'
export default {
  name: 'Dashboard',
  data () {
    return {
      error: null,
      currentView: 'Overview',
      page: ''
    }
  },
  mounted () {
    this.fetchUser()

    document.getElementById('overview').classList.add('take')
    this.page = 'Account Overview'
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
    async bonus () {
      this.currentView = 'Bonus'
      this.page = 'My Bonuses'
      if (document.getElementById('overview').classList.contains('take')) {
        document.getElementById('overview').classList.remove('take')
        document.getElementById('bonus').classList.add('take')
      } else {
        if (document.getElementById('investment').classList.contains('take')) {
          document.getElementById('investment').classList.remove('take')
          document.getElementById('bonus').classList.add('take')
        }
      }
    },
    async investment () {
      this.currentView = 'Investment'
      this.page = 'My Investments'
      if (document.getElementById('overview').classList.contains('take')) {
        document.getElementById('overview').classList.remove('take')
        document.getElementById('investment').classList.add('take')
      } else {
        if (document.getElementById('bonus').classList.contains('take')) {
          document.getElementById('bonus').classList.remove('take')
          document.getElementById('investment').classList.add('take')
        }
      }
    },
    async overview () {
      this.currentView = 'Overview'
      this.page = 'Account Overview'
      if (document.getElementById('bonus').classList.contains('take')) {
        document.getElementById('bonus').classList.remove('take')
        document.getElementById('overview').classList.add('take')
      } else {
        if (document.getElementById('investment').classList.contains('take')) {
          document.getElementById('investment').classList.remove('take')
          document.getElementById('overview').classList.add('take')
        }
      }
    },
    reload () {
      window.location.reload()
    }
  },
  components: {
    Bonus,
    Investment,
    Overview
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
