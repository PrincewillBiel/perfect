<template>
  <v-layout row wrap>
    <v-flex xs11 mx-auto mt-4 style="height: 100vh">
      <div class="table">
        <div class="table-head">
          My Bonuses
        </div>
        <table id="t01">
          <tr>
           <th>Date</th>
           <th>Downline</th>
           <th>Amount</th>
         </tr>
         <tr v-for="bonus in bonuses" :key="bonus._id">
           <td>{{ bonus.form }}</td>
           <td>{{ bonus.name }}</td>
           <td>$ {{ bonus.bonus }}</td>
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
      response: {},
      bonuses: [],
      getError: null
    }
  },
  mounted () {
    this.fetchBonus()
  },
  methods: {
    async fetchBonus () {
      try {
        this.response = await tokenApi.fetchWithToken('/api/user/bonus')
        this.bonuses = this.response.data.bonus
        this.bonuses.forEach(function (e) {
          e.form = moment(e.createdAt).format('DD-MMM-YYYY')
        })
        console.log(this.response)
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
  color: white
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
