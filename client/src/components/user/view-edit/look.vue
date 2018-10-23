<template>
  <v-layout row wrap>
    <v-flex mx-auto xs11 mt-5>
      <div class="table">
        <table class="t01">
          <tr>
            <th>Name:</th>
            <td>{{ response.data.name }}</td>
          </tr>
          <tr>
            <th>Referral Link:</th>
            <td>{{ response.data.referral }} <v-chip label v-clipboard:copy="link" class="copy white--text" style="background-color: #0277BD">Copy</v-chip></td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{{ response.data.email }}</td>
          </tr>
          <tr>
            <th>Country:</th>
            <td>{{ response.data.country }}</td>
          </tr>
          <tr>
            <th>Phone:</th>
            <td>{{ response.data.mobile }}</td>
          </tr>
          <tr>
            <th>Registered On:</th>
            <td>{{ response.data.mobile }}</td>
          </tr>
          <tr>
            <th>Referrer:</th>
            <td>{{ upline.refname }}</td>
          </tr>
        </table>
        <table class="t01">
          <tr>
            <th>My Downlines</th>
          </tr>
          <tr v-for="downline in downlines" :key="downline.id">
            <td>{{ downline.name }}</td>
          </tr>
        </table>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import tokenApi from '@/api/tokenApi'
export default {
  data () {
    return {
      downlines: {},
      upline: {},
      response: {},
      error: null,
      link: '',
      copySucceeded: null
    }
  },
  mounted () {
    this.fetchUser()
    this.getDownline()
    this.getUpline()
  },
  methods: {
    async fetchUser () {
      try {
        this.response = await tokenApi.fetchWithToken('/api/user')
        this.link = this.response.data.referral
        console.log(this.response)
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async getDownline () {
      try {
        this.downlines = (await tokenApi.fetchWithToken('/api/user/downlines')).data.downline
        console.log(this.downlines)
      } catch (error) {
        this.error = error.downlines.data.error
      }
    },
    async getUpline () {
      try {
        this.upline = (await tokenApi.fetchWithToken('/api/user/uplines')).data.upline
      } catch (error) {
        this.err = error.upline.data.error
      }
    }
  }
}
</script>

<style scoped>
.copy{
  color: white;
  margin-left: 5em;
  font-size: 1em
}
.investment{
  text-align: justify;
  width: 100%;
  font-size: 0.9em;
  font-family: 'Comfortaa', sans-serif;
  text-justify: inter-word;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  word-break: break-all
}
.table-head{
  text-align: center;
  font-size: 1.2em;
  color: #0277BD;
  padding-bottom: 0.5em
}
table{
  width: 100%;
  border-radius: 5px
}
th{
  color: white;
  background: #040D14
}
td{
  word-break: break-all
}
table, th, td{
  border: 1px solid #BDBDBD;
  border-collapse: collapse
}
th,td{
  padding: 1em 0.5em
}
table.t01 tr:nth-child(even){
  background-color: #EEE
}
table.t01 tr:nth-child(odd){
  background-color: #FFF
}
@media (min-width: 600px){
  .copy{
    margin-left: 1em
  }
  .table-head{
    font-size: 1.5em
  }
}
@media (min-width: 960px){
  .copy{
    font-size: 1em
  }
  table {
    width: 100%
  }
  .investment{
    font-size: 1.2em
  }
  .table-head{
    font-size: 2em
  }
}
</style>
