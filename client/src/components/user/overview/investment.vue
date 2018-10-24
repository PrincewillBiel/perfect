<template>
  <v-layout row wrap>
    <v-flex xs12 mx-auto mt-4 style="margin-bottom: 10em">
      <div class="table">
        <div class="table-head">
          My Investments
        </div>
        <h3 style="text-align: center">Go over to the payments page to post the proof of payment for investments made to start growing.</h3>
        <table id="t01">
         <tr>
           <th>Date</th>
           <th>Plan</th>
           <th>Amount</th>
           <th>Day</th>
           <th>Status</th>
           <th>Growth</th>
           <th>Withdrawn</th>
         </tr>
         <tr v-for="investment in investments" :key="investment._id">
           <td>{{ investment.form }}</td>
           <td>{{ investment.plan }}</td>
           <td>${{ investment.amount }}</td>
           <td>{{ investment.days }}</td>
           <td>{{ investment.status }}</td>
           <td>${{ investment.growth }}</td>
           <td>${{ investment.less }}</td>
         </tr>
        </table>
        <div class="" v-html="getError">

        </div>
      </div>
    </v-flex>
    <v-flex xs12 mx-auto mt-5>
      <div class="table">
        <div class="table-head">
          My Transactions
        </div>
        <table id="t01">
         <tr>
           <th>Date</th>
           <th>Status</th>
           <th>Market</th>
           <th>Plan</th>
           <th>Amount</th>
         </tr>
         <tr v-if="investment.isCancelled == true" v-for="investment in cancelled" :key="investment.id">
           <td>{{ investment.form }}</td>
           <td>{{ investment.status }}</td>
           <td>{{ investment.market }}</td>
           <td>{{ investment.packages }}</td>
           <td>${{ investment.amount }}</td>
         </tr>
         <tr v-else-if="investment.isWithdrawn == true" v-for="investment in cancelled" :key="investment.id">
           <td>{{ investment.form }}</td>
           <td>{{ investment.status }}</td>
           <td>{{ investment.market }}</td>
           <td>{{ investment.packages }}</td>
           <td>${{ investment.amount }}</td>
         </tr>
        </table>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import tokenApi from '@/api/tokenApi'
import moment from 'moment'
export default {
  data () {
    return {
      cancelled: {},
      investments: '',
      getError: null,
      datee: '',
      response: {}
    }
  },
  mounted () {
    this.fetchInv()
    this.fetchTrans()
  },
  methods: {
    async fetchInv () {
      try {
        this.response = await tokenApi.fetchWithToken('/api/user/investments')
        this.investments = this.response.data.investments

        console.log(this.investments)
        this.investments.forEach(function (e) {
          e.show = true
          e.start = moment().format('MM/DD/YYYY')
          e.that = moment(e.begin).format('MM/DD/YYYY')
          e.form = moment(e.createdAt).format('DD-MMM-YYYY')
          e.dateDiff = function (date1, date2) {
            let dt1 = new Date(date1)
            let dt2 = new Date(date2)
            return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24))
          }
          if (e.updatedAt === e.createdAt) {
            e.status = 'Pending'
            e.days = 0
            e.growth = 0
          } else {
            if (e.updatedAt !== e.createdAt) {
              e.status = 'Confirmed'
              e.days = e.dateDiff(e.that, e.start)
              e.growth = (e.interest * e.days).toFixed(2)
            }
          }

          if (e.days === 7 || e.days === 14 || e.days === 21 || e.days === 28 || e.days === 35 || e.days === 49 || e.days === 56 || e.days === 63 || e.days === 70 || e.days === 77 || e.days === 84) {
            e.disable = false
          } else {
            e.disable = true
          }
        })
      } catch (error) {
        this.getError = error.data.error
      }
    },
    dateDiff (date1, date2) {
      let dt1 = new Date(date1)
      let dt2 = new Date(date2)
      return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24))
    },
    async fetchTrans () {
      try {
        this.response = await tokenApi.fetchWithToken('/api/user/investments/list')
        this.cancelled = this.response.data.investments
        console.log(this.cancelled)
        this.cancelled.forEach(function (e) {
          e.form = moment(e.createdAt).format('DD-MMM-YYYY')
          if (e.isCancelled === true) {
            e.status = 'Cancelled'
          } else {
            if (e.isWithdrawn === true) {
              e.status = 'Withdrawn'
            }
          }
        })
      } catch (error) {
        this.getError = error.data.error
      }
    }
  }
}
</script>

<style scoped>
.table-head{
  text-align: center;
  font-size: 1.2em;
  color: #0277BD;
  padding-bottom: 0.5em
}
.table{
  width: 100%
}
table{
  width: 100%;
  font-size: 0.8em
}
table, th, td{
  border: 1px solid #FFF;
  border-collapse: collapse
}
th,td{
  text-align: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em
}
table#t01 tr:nth-child(even){
  background-color: #EEE
}
table#t01 tr:nth-child(odd){
  background-color: #FFF;
}
table#t01 th{
  background-color: #0277BD;
  color: #FFF
}
@media (min-width: 600px) {
  table{
    width: 100%;
    font-size: 0.9em
  }
  .table-head{
    font-size: 1.5em
  }
}
@media (min-width: 960px) {
  .table-head{
    font-size: 2em
  }
  table{
    width:100%;
  }
  th,td{
    text-align: center;
    padding: 1em
  }
}
</style>
