<template>
  <div class="" style="background: #040D14; margin-top: 0.1em; width: 100%">
    <div class="maine">
      <div class="mobile-container">
        <div class="topnav">
          <a class="name">{{ response.data.name }}</a>
          <div id="myLinks">
            <a href="javascript:void(0)" @click="home">Dashboard</a>
            <a href="javascript:void(0)" @click="profile">Profile</a>
            <a href="javascript:void(0)" @click="account">Fund Account</a>
            <a href="javascript:void(0)" @click="notify">Notifications</a>
            <a href="javascript:void(0)" @click="drop()">External Links</a>
            <div v-show="accordion" class="level">
              <a href="https://www.youtube.com/watch?v=fOMVZXLjKYo" target="_blank">What are cryptocurrencies?</a>
              <v-divider></v-divider>
              <a href="https://www.youtube.com/watch?v=GmOzih6I1zs" target="_blank">What is Cryptocurrency Mining?</a>
              <v-divider></v-divider>
              <a href="https://blockgeeks.com/guides/cryptocurrency-wallet-guide/" target="_blank">Cryptocurrency Wallets</a>
              <v-divider></v-divider>
              <a href="https://www.bitcoin.com/buy-bitcoin" target="_blank">Where to buy bitcoins</a>
            </div>
            <a href="javascript:void(0)" @click="withdraw">Withdraw Funds</a>
            <a href="javascript:void(0)" @click="settings">Settings</a>
          </div>
          <a href="javascript:void(0)" class="icon" @click="openCanvas()">
            <i class="fas fa-caret-square-down "></i>
          </a>
        </div>
      </div>
      <div class="b-menu">
        <v-navigation-drawer
          style="background: #040D14"
          class="light-blue darken-3"
          value="true"
          permanent
        >
          <v-toolbar flat class="transparent">
            <v-list class="pa-0">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img class="logo" src="/static/img/pflogo.png" alt="">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title class="white--text">{{ response.data.name }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-toolbar>
          <v-list>
            <v-list-tile @click="currentView='Home'">
              <v-list-tile-action>
                <v-icon color="amber darken-1">dashboard</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>Dashboard</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-group value="false">
              <v-list-tile slot="activator">
                <v-list-tile-action>
                  <v-icon color="amber darken-1">person</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>Profile</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile @click="currentView='Profile'" class="light-blue darken-2">
                  <v-list-tile-title>View Profile</v-list-tile-title>
                  <v-list-tile-action>
                    <v-icon color="amber darken-1">chevron_right</v-icon>
                  </v-list-tile-action>
                </v-list-tile>

                <v-list-tile @click="currentView='Profile'" class="light-blue darken-2">
                  <v-list-tile-title>Edit Profile</v-list-tile-title>
                  <v-list-tile-action>
                    <v-icon color="amber darken-1">chevron_right</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
            </v-list-group>

            <v-list-tile  @click="currentView='Account'">
              <v-list-tile-action>
                <v-icon color="amber darken-1">fas fa-money-bill</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>Fund Account</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile @click="currentView='Notify'">
              <v-list-tile-action>
                <v-icon color="amber darken-1">fas fa-bell</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>Notifications</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-group value="false">
              <v-list-tile slot="activator">
                <v-list-tile-action>
                  <v-icon color="amber darken-1">fas fa-external-link-alt</v-icon>
                </v-list-tile-action>

                <v-list-tile-content color="amber darken-1">
                  <v-list-tile-title>External Links</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile class="light-blue darken-2">
                <v-list-tile-title><a href="https://www.youtube.com/watch?v=fOMVZXLjKYo" target="_blank" class="guides">What are cryptocurrencies</a></v-list-tile-title>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="light-blue darken-2">
                <v-list-tile-title><a href="https://www.youtube.com/watch?v=GmOzih6I1zs" target="_blank" class="guides">What is Cryptocurrency Mining?</a></v-list-tile-title>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="light-blue darken-2">
                <v-list-tile-title><a href="https://blockgeeks.com/guides/cryptocurrency-wallet-guide/" target="_blank" class="guides">Cryptocurrency Wallets</a></v-list-tile-title>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile class="light-blue darken-2">
                <v-list-tile-title><a href="https://www.bitcoin.com/buy-bitcoin" target="_blank" class="guides">Where to buy bitcoins</a></v-list-tile-title>
              </v-list-tile>
            </v-list-group>

            <v-list-tile  @click="currentView='Withdraw'">
              <v-list-tile-action>
                <v-icon color="amber darken-1">fas fa-hand-holding-usd</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>Withdraw Funds</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-group value="false">
              <v-list-tile slot="activator">
                <v-list-tile-action>
                  <v-icon color="amber darken-1">fas fa-user-cog</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Settings</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile @click="currentView='Settings'" class="light-blue darken-2">
                <v-list-tile-title>Edit Profile</v-list-tile-title>
                <v-list-tile-action>
                  <v-icon color="amber darken-1">chevron_right</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </v-list>
        </v-navigation-drawer>
      </div>
      <div class="environ">
        <keep-alive>
          <component :is="currentView"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Home from '@/components/user/home.vue'
import Account from '@/components/user/account.vue'
import Notify from '@/components/user/notify.vue'
import Profile from '@/components/user/profile.vue'
import Settings from '@/components/user/settings.vue'
import Withdraw from '@/components/user/withdraw.vue'
import tokenApi from '@/api/tokenApi'
export default {
  name: 'Dashboard',
  data () {
    return {
      accordion: false,
      currentView: 'Home',
      error: null,
      response: {}
    }
  },
  mounted () {
    this.fetchUser()
    this.accordion = false
  },
  methods: {
    async fetchUser () {
      try {
        this.response = await tokenApi.fetchWithToken('/api/user/')
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    // mobile
    async drop () {
      if (this.accordion === true) {
        this.accordion = false
      } else {
        if (this.accordion === false) {
          this.accordion = true
        }
      }
    },
    openCanvas () {
      var x = document.getElementById('myLinks')
      if (x.style.display === 'block') {
        x.style.display = 'none'
      } else {
        x.style.display = 'block'
        // x.style.background = '#FFF'
        // x.style.co
      }
    },
    account () {
      this.currentView = 'Account'
      this.closeCanvas()
    },
    home () {
      this.currentView = 'Home'
      this.closeCanvas()
    },
    notify () {
      this.currentView = 'Notify'
      this.closeCanvas()
    },
    profile () {
      this.currentView = 'Profile'
      this.closeCanvas()
    },
    settings () {
      this.currentView = 'Settings'
      this.closeCanvas()
    },
    withdraw () {
      this.currentView = 'Withdraw'
      this.closeCanvas()
    },
    closeCanvas () {
      var x = document.getElementById('myLinks')
      if (x.style.display === 'block') {
        x.style.display = 'none'
      }
    }
  },
  components: {
    Home,
    Account,
    Notify,
    Profile,
    Settings,
    Withdraw
  }
}
</script>

<style>
.active {
  background-color: #4CAF50;
  color: white;
}
.b-menu {
  display: none
}
.guides {
  color: #000;
  text-align: justify;
  text-decoration: none
}
.level {
  background: #212121;
  color: #FFF
}
.environ {
  background: #FFF;
  width: 100%
}
.maine {
  background: #FFF;
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  width: 100%
}
.mobile-container {
  width: 100%;
  background-color: #FFF
}
.name {
  color: #FFF;
  font-size: 1.2em
}
.topnav {
  overflow: hidden;
  background-color: #0277BD;
  position: relative;
}
.topnav #myLinks {
  background: #040D14;
  color: #0277BD;
  display: none
}
.topnav a {
  padding: 14px 16px;
  text-decoration: none;
  display: block;
}
.topnav .icon {
  color: #FFB300;
  display: block;
  font-size: 2em;
  position: absolute;
  right: 0;
  top: 0;
}
.topnav a.icon:visited {
  color: #FFC107
}
@media screen and (max-height: 450px) {
}
/* @media (min-width: 600px) {
  .m-dash {
    display: none
  }
} */
@media (min-width: 750px) {
  .maine {
    display: flex;
    flex-flow: row wrap;
    margin: auto;
    width: 100%
  }
  .environ {
    background: #FFF;
    width: 65%
  }
  .b-menu {
    display: block;
    width: 35%
  }
  .mobile-container {
    display: none
  }
  .tab{
    display: inline-flex;
  }
}
@media (min-width: 800px) {
  .maine {
    margin: auto;
    width: 90%
  }
  .environ {
    width: 75%
  }
  .b-menu {
    width: 25%
  }
}
</style>
