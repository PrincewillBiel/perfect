<template id="">
  <v-layout row wrap>
    <v-flex xs12 mt-4>
      <v-layout row wrap mt-2>
        <v-flex xs11 sm6 mx-auto class="form-update">
          <div class="method-div" v-for="link in links" :key="link.id">
            <a class="method" @click="link.func">
              <h4>Pay with {{ link.method }}</h4>
              Click to generate your payment invoice for this method of payment.
            </a>
          </div>
        </v-flex>
        <v-flex xs11 sm6 mx-auto class="form-hold">
          <div class="detaile">
            <h3>
              Click on any payment method to see destination wallet
            </h3>

            <ul>
              <li><span style="font-weight: 600">Name:</span> {{ response.data.name }}</li>
              <li><span style="font-weight: 600">Email:</span> {{ response.data.email }}</li>
              <li><span style="font-weight: 600">Payment Method:</span> {{ method }}</li>
              <li><span style="font-weight: 600">Wallet Address:</span> {{ wallet }} <v-chip label v-clipboard:copy="wallet" class="copy white--text" style="background-color: #0277BD">Copy</v-chip></li>
            </ul>
          </div>
          <div class="plan-head">
            <h2>Select A Plan</h2>
          </div>
          <div class="create">
            <v-select
              :items="packages"
              v-model="plan"
              v-on:input="check"
              single-line
              label="Select Plan"
            ></v-select>
            <v-text-field
              v-model="amount"
              label="Enter amount"
              outline
              v-on:input="checkAmount"
            ></v-text-field>
            <div v-show="loaded" class="loading">investing...</div>
            <v-chip label style="background: #0277BD" class="butn white--text" @click="invest()">Invest</v-chip>
            <div v-html="error" class="err"></div>
          </div>
        </v-flex>
      </v-layout>
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
      begin: 'new',
      duration: '',
      interest: '',
      less: '',
      method: '',
      plan: '',
      total: '',
      // page variables
      links: [
        {
          id: 1,
          func: () => {
            this.method = 'Bitcoin'
            this.wallet = '1DvHHdtsLGoX3YfhxHiQ1ngUqin1RiRGQy'
          },
          method: 'Bitcoin'
        },
        {
          id: 2,
          func: () => {
            this.method = 'Ethereum'
            this.wallet = '0x64aE5177e912BE3546c11507AD99f8b06DcdE392'
          },
          method: 'Ethereum'
        },
        {
          id: 3,
          func: () => {
            this.method = 'Bitcoin Cash'
            this.wallet = 'qrx4x4jf0uja8djg8xyzxa9wrrzt95xa5u3uste5ph'
          },
          method: 'Bitcoin Cash'
        },
        {
          id: 4,
          func: () => {
            this.method = 'Litecoin'
            this.wallet = 'MT9aVcSsBgk4a8itMxAKfsmzJBQneweFJv'
          },
          method: 'Litecoin'
        }
      ],
      loaded: false,
      page: 'Fund Account',
      packages: [
        'Silver', 'Gold', 'Diamond', 'Lifetime'
      ],
      response: {},
      wallet: '',
      error: null
    }
  },
  mounted () {
    this.fetchUser()
    this.getUpline()
    this.method = 'Bitcoin'
    this.wallet = '1DvHHdtsLGoX3YfhxHiQ1ngUqin1RiRGQy'
  },
  methods: {
    check () {
      if (this.plan === 'Silver') {
        this.duration = 7
        this.percent = 30
      } else {
        if (this.plan === 'Gold') {
          this.duration = 7
          this.percent = 50
        } else {
          if (this.plan === 'Diamond') {
            this.duration = 7
            this.percent = 100
          } else {
            if (this.plan === 'Lifetime') {
              this.duration = 365
              this.percent = 3650
            }
          }
        }
      }
    },
    async checkAmount () {
      let minus = 0
      this.less = (minus).toFixed(2)
      this.interest = ((this.amount * (this.percent / 100)) / this.duration).toFixed(2)
      this.total = (this.amount * (this.percent / 100)).toFixed(2)
      if (this.amount <= 9000) {
        this.bonus = (this.amount * 0.05)
      } else {
        if (this.amount <= 49000) {
          this.bonus = (this.amount * 0.1)
        } else {
          if (this.amount <= 90000) {
            this.bonus = (this.amount * 0.15)
          } else {
            if (this.amount >= 100000) {
              this.bonus = (this.amount * 0.2)
            }
          }
        }
      }
    },
    async createInv () {
      this.loaded = true
      try {
        await tokenApi.fetchWithToken('/api/user/investments/create', {
          method: 'post',
          data: {
            amount: this.amount,
            begin: this.begin,
            duration: this.duration,
            interest: this.interest,
            less: this.less,
            method: this.method,
            plan: this.plan,
            total: this.total
          }
        })
        this.loaded = false
      } catch (error) {
        this.loaded = false
        this.error = error.data.error
      }
    },
    async getUpline () {
      try {
        this.refemail = (await tokenApi.fetchWithToken('/api/user/uplines')).data.upline.refemail
      } catch (error) {
        this.err = error.upline.data.error
      }
    },
    invest () {
      if ((this.amount < 1000 || this.amount > 9000) && this.plan === 'Silver') {
        this.error = `Amount for the ${this.plan} plan must be between 1000 and 9000.`
      } else {
        if ((this.amount < 10000 || this.amount > 49000) && this.plan === 'Gold') {
          this.error = `Amount for the ${this.plan} plan must be between 10,000 and 49,000.`
        } else {
          if ((this.amount < 50000 || this.amount > 90000) && this.plan === 'Diamond') {
            this.error = `Amount for the ${this.plan} plan must be between 50,000 and 90,000.`
          } else {
            if ((this.amount < 100000) && this.plan === 'Lifetime') {
              this.error = `Amount for the ${this.plan} plan must be between 100,000.`
            } else {
              if (this.plan === '') {
                this.error = 'Please choose a package.'
              } else {
                this.createInv()
                this.postBonus()
                this.restart()
              }
            }
          }
        }
      }
    },
    async postBonus () {
      try {
        await tokenApi.fetchWithToken('/api/user/bonus/create', {
          method: 'post',
          data: {
            refemail: this.refemail,
            bonus: this.bonus
          }
        })
      } catch (error) {
        this.error = error.data.error
      }
    },
    async fetchUser () {
      try {
        this.response = await tokenApi.fetchWithToken('/api/user/')
      } catch (error) {
        this.error = error.response.data.error
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
  margin-right: 0.2em;
  font-size: 2em;
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
  border: 1px solid #FFB300
}
.form-hold ul {
  list-style-type: none;
  width: 100%;
  word-wrap: break-word;
  word-break: break-all
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
</style>
