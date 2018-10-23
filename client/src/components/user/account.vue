<template>
  <v-layout row wrap>
    <v-flex xs12 mt-3 class="in-head">
      <div class="big">Fund Account</div>
      <div style="margin-top: 2em"><a @click="reload()"><v-icon>home</v-icon></a> <v-icon>chevron_right</v-icon> <span>{{ page }}</span></div>
    </v-flex>
    <v-flex xs12 mt-4 class="scrollspy">
      <ul>
        <li><a id="fund" @click="fund()">Choose A Plan</a></li>
        <li><a id="pop" @click="pop()">Upload Proof of Payment</a></li>
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
import Fund from '@/components/user/invest-pop/fund.vue'
import Pop from '@/components/user/invest-pop/pop.vue'
import tokenApi from '@/api/tokenApi'
export default {
  name: 'Dashboard',
  data () {
    return {
      error: null,
      currentView: 'Fund',
      page: ''
    }
  },
  mounted () {
    this.fetchUser()

    document.getElementById('fund').classList.add('take')
    this.page = 'Choose A Plan'
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
    async fund () {
      if (document.getElementById('pop').classList.contains('take')) {
        document.getElementById('pop').classList.remove('take')
        document.getElementById('fund').classList.add('take')
      }
      this.currentView = 'Fund'
      this.page = 'Choose A Plan'
    },
    async pop () {
      if (document.getElementById('fund').classList.contains('take')) {
        document.getElementById('fund').classList.remove('take')
        document.getElementById('pop').classList.add('take')
      }
      this.currentView = 'Pop'
      this.page = 'Proof of Payment'
    },
    reload () {
      window.location.reload()
    }
  },
  components: {
    Fund,
    Pop
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
