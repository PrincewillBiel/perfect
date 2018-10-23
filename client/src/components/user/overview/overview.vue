<template>
  <v-layout row wrap>
    <v-flex mx-auto xs11 mt-5>
      <div class="overview">
        <div class="overview-div">
          <h3>Recent Plan</h3>
          <hr>
          <span>{{ plan }}</span>
        </div>
        <div class="centre">
          <h3>Working Balance</h3>
          <hr>
          <span>$ {{ sumAmount }}</span>
        </div>
        <div class="overview-div">
          <h3>ROIs</h3>
          <hr>
          <span>$ {{ sumInterest }}</span>
        </div>
        <div class="overview-div">
          <h3>My Bonuses</h3>
          <hr>
          <span>$ {{ sumBonus }}</span>
        </div>
      </div>
    </v-flex>
    <v-flex xs11 sm4 md4 mx-auto class="feature">
      <v-layout row wrap>
        <v-flex xs12 pt-2 elevation-2>
          <p>Site Speed</p>
          <vue-circle
            :progress="95"
            :size="100"
            :reverse="false"
            line-cap="round"
            :fill="fill"
            empty-fill="rgba(0, 0, 0, .1)"
            :animation-start-value="0.0"
            :start-angle="0"
            insert-mode="append"
            :thickness="5"
            :show-percent="true"
            @vue-circle-progress="progress"
            @vue-circle-end="progress_end">
          </vue-circle>
        </v-flex>
        <v-flex xs12 pt-2 mt-2 elevation-2>
          <p>Server Optimization</p>
          <vue-circle
            :progress="100"
            :size="100"
            :reverse="false"
            line-cap="round"
            :fill="fill"
            empty-fill="rgba(0, 0, 0, .1)"
            :animation-start-value="0.0"
            :start-angle="0"
            insert-mode="append"
            :thickness="5"
            :show-percent="true"
            @vue-circle-progress="progress"
            @vue-circle-end="progress_end">
          </vue-circle>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs11 sm8 mx-auto class="feature">
      <v-card>
        <div class="headline calc"><b>ROI Calculator</b></div>
        <v-card-text>
          <div style="font-size: 1.2em">This calculates the ROI for the each from the beginning to the end of the mining duration</div>
          <v-text-field label="Enter Amount (Between 1000 and 100000)" v-model="principle" v-on:input="calc($event)"></v-text-field>
          <div class="slidecontainer">
            <input class="slider" type="range" v-bind:min="min" v-bind:max="max" v-on:input="onChg($event)" value="0">
          </div>
          <div class="show-er">
            <ul>
              <li>Day: {{ node }}</li>
              <li>ROI: ${{ increase }}</li>
            </ul>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs11 sm5 mx-auto class="mobile">
      <bitcoin />
    </v-flex>
    <v-flex xs11 sm5 mx-auto class="mobile">
      <ether />
    </v-flex>
    <v-flex xs11 sm5 mx-auto class="mobile">
      <cash />
    </v-flex>
    <v-flex xs11 sm5 mx-auto class="mobile">
      <litecoin />
    </v-flex>
  </v-layout>
</template>

<script>
import Analysis from '@/components/charts/forexChart.vue'
import Bitcoin from '@/components/charts/btc.vue'
import Cash from '@/components/charts/btcash.vue'
import Ether from '@/components/charts/ether.vue'
import Litecoin from '@/components/charts/litecoin.vue'
import moment from 'moment'
import tokenApi from '@/api/tokenApi'
import VueCircle from 'vue2-circle-progress'
export default {
  data () {
    return {
      fill: {
        gradient: ['red', 'green', 'blue']
      },
      increase: 0,
      investments: '',
      max: '',
      min: 0,
      node: '',
      percentage: 0,
      plan: 0,
      principle: '',
      roi: '',
      sumAmount: 0,
      sumBonus: 0,
      sumInterest: 0
    }
  },
  mounted () {
    this.fetchInv()
    this.fetchUser()
  },
  methods: {
    async fetchUser () {
      try {
        const response = await tokenApi.fetchWithToken('/api/user')
        this.link = response.data.referral
        console.log(response)
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async fetchBonus () {
      try {
        this.response = await tokenApi.fetchWithToken('/api/user/bonus')
        this.bonuses = this.response.data.bonus

        var gatherBonus = []
        this.bonuses.forEach(function (e) {
          gatherBonus.push(e.bonus)
        })
        this.sumBonus = gatherBonus.reduce(this.getSum, 0)
      } catch (error) {
        this.getError = error.data.error
      }
    },
    async fetchInv () {
      try {
        this.response = await tokenApi.fetchWithToken('/api/user/investments')
        this.investments = this.response.data.investments

        var gatherAmount = []
        var gatherInterest = []
        var gatherPlan = []
        this.investments.forEach(function (e) {
          gatherAmount.push(e.amount)
          gatherInterest.push(e.interest)
          gatherPlan.push(e.plan)

          e.start = moment().format('MM/DD/YYYY')
          e.that = moment(e.begin).format('MM/DD/YYYY')
          e.dateDiff = function (date1, date2) {
            let dt1 = new Date(date1)
            let dt2 = new Date(date2)
            return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24))
          }

          if (e.begin !== 'new') {
            e.days = e.dateDiff(e.that, e.start)
            e.growth = (e.interest * e.days).toFixed(2)
            gatherInterest.push(e.growth)
          } // else {
          // if (e.begin !== 'new') {}
          // }
        })

        this.sumAmount = gatherAmount.reduce(this.getSum, 0)
        this.sumInterest = gatherInterest.reduce(this.getSum, 0)
        this.plan = gatherPlan[gatherPlan.length - 1]

        this.fetchBonus()
      } catch (error) {
        this.getError = error.data.error
      }
    },
    dateDiff (date1, date2) {
      let dt1 = new Date(date1)
      let dt2 = new Date(date2)
      return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24))
    },
    getSum (total, num) {
      return total + num
    },
    // Calculator
    onChg (e) {
      this.node = e.target.value

      let num = (this.roi / this.max) * this.node

      this.roi = this.principle * (this.percentage / 100)
      this.increase = num.toFixed(2)
    },
    calc (e) {
      if (this.principle >= 1000 && this.principle <= 9000) {
        this.percentage = 30
        this.max = 7
      } else {
        if (this.principle >= 10000 && this.principle <= 49000) {
          this.percentage = 50
          this.max = 7
        } else {
          if (this.principle >= 50000 && this.principle <= 90000) {
            this.percentage = 100
            this.max = 7
          } else {
            if (this.principle >= 100000) {
              this.percentage = 3650
              this.max = 365
            } else {
              this.percentage = 0
              this.increase = 0
            }
          }
        }
      }
    }
  },
  components: {
    Analysis,
    Bitcoin,
    Cash,
    Ether,
    Litecoin,
    VueCircle
  }
}
</script>

<style scoped>
.centre {
  text-align: center
}
.overview {
  display: flex;
  flex-flow: row wrap;
  width: 100%
}
.overview div {
  background: #0277BD;
  font-size: 1.1em;
  height: 6em;
  margin: 0 auto 2em;
  padding: 1em 0.5em;
  width: 95%
}
.overview h3, .overview span {
  color: #FFF
}
.overview-div {
  text-align: center
}
.slidecontainer {
  width: 100%
}
.slider{
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #BDBDBD;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s
}
.slider:hover{
  opacity: 1
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #FFEA00;
  cursor: pointer
}
.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer
}
@media (min-width: 600px){
  .centre {
  }
  .overview div {
    background: #0277BD;
    font-size: 1.1em;
    margin: 0 auto 2em;
    width: 45%
  }
}
@media (min-width: 960px){
  .centre {
    margin: 0 auto 2em;
    width: 30%
  }
  .overview div {
    background: #0277BD;
    margin-bottom: 2em;
    width: 24%
  }
}
</style>
