<template id="">
  <v-layout row wrap>
    <v-flex xs12 mt-3 class="in-head">
      <div class="big">Withdraw Funds</div>
      <div style="margin-top: 2em"><a @click="restart()"><v-icon>home</v-icon></a> <v-icon>chevron_right</v-icon> <span>{{ page }}</span></div>
    </v-flex>
    <v-flex xs10 sm6 mx-auto mt-4>
      <v-text-field
        v-model="name"
        label="Username"
        outline
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="Email"
        outline
      ></v-text-field>
      <v-text-field
        v-model="amount"
        label="Enter amount"
        outline
      ></v-text-field>
      <v-text-field
        v-model="description"
        label="Description (Investment or Bonus)"
        outline
      ></v-text-field>
      <v-text-field
        v-model="currency"
        label="Enter Wallet Type e.g Bitcoin"
        outline
      ></v-text-field>
      <v-text-field
        v-model="wallet"
        label="Enter Wallet Address"
        outline
      ></v-text-field>
      <p v-show="loading" class="loading">Please wait...</p>
      <p v-html="wallError" class="err"></p>
      <v-chip label @click="postWithdraw" class="white--text" style="background-color: #0277BD">Submit</v-chip> <v-chip label @click="restart" class="white--text" style="background-color: #FFB300">Cancel</v-chip>
    </v-flex>
  </v-layout>
</template>

<script>
import tokenApi from '@/api/tokenApi'
export default {
  data () {
    return {
      // database variables
      amount: '',
      currency: '',
      description: '',
      email: '',
      name: '',
      wallet: '',
      // page variables
      loaded: false,
      loading: false,
      page: 'Withdraw Funds',
      response: {},
      error: null
    }
  },
  mounted () {
    this.fetchUser()
  },
  methods: {
    async fetchUser () {
      try {
        this.response = await tokenApi.fetchWithToken('/api/user/')
        this.name = this.response.data.name
        this.email = this.response.data.email
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async postWithdraw () {
      this.loading = true
      try {
        await tokenApi.fetchWithToken('/api/user/withdraw', {
          method: 'post',
          data: {
            amount: this.amount,
            currency: this.currency,
            description: this.description,
            wallet: this.wallet
          }
        })
        this.loading = false
        this.restart()
      } catch (error) {
        this.loading = false
        this.wallError = 'Please Enter your wallet address.'
      }
    },
    restart () {
      window.location.reload()
    }
  },
  components: {
  }
}
</script>

<style>
.big {
  margin-left: 0.2em;
  font-size: 1.5em;
  font-weight: 600
}
.create {
  margin: auto;
  width: 90%
}
.detaile {
  font-size: 1.1em;
  margin: auto;
  padding: 1em 0;
  width: 90%
}
.detaile li {
  margin-bottom: 0.5em
}
.detaile ul {
  margin-top: 1em
}
.form-hold {
  border: 1px solid yellow
}
.form-hold ul {
  list-style-type: none;
  width: 100%
}
.form-update {
  height: 21.9em
}
.in-head {
  color: #757575
}
.loading {
  color: #0277BD
}
.method {

}
.method-div {
  border-bottom: 1px solid #BDBDBD;
  font-size: 1.1em;
  padding: 0.2em 0 0.2em 1em;
}
.plan-head {
  text-align: center
}
@media (min-width: 750px) {
  .big {
    margin-right: 0.2em;
    font-size: 2em
  }
}
</style>
