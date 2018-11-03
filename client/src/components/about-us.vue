<template id="">
  <v-layout row wrap>
    <v-flex xs12 class="abt"><h1>ABOUT US</h1></v-flex>
      <v-flex xs11 md12 mx-auto class="about">
        <h3 style="text-align: center">ABOUT PERFECTFUNDING LTD.</h3>
        <div class="int">Perfect Funding is one of the highest paying bitcoin mining pool and cloud mining provider on the market, it is also one of the leading private investment firms providing asset management services on the internet including Bitcoin Mining Program, Cryptocurrency earning, exchange and crypto assets management.

We offer professional investment solutions for all investor’s needs.

Our highly experienced team of Miners use Asics processors which expend mass amounts of energy to solve complex math algorithms in order to validate bitcoin transactions using a consensus protocol called "proof of work" using our own unique mining system.

Join us now and we will share our success with you! We have an impeccable success rate achieved by a team of pro miners working round the clock; so profit is always guaranteed.

          <h3 style="text-align: center">OUR VISION</h3>
We are a professional mining investment management company whose priority is focused at providing our clients with the most successful possible services in today’s market.

          <h3 style="text-align: center">OUR OBJECTIVES</h3>
Being the leading cloud mining provider on the market, PerfectFunding is dedicated to creating the most user-friendly mining investment experience for all our clients worldwide full investment profitability.
We bring the most advanced technology and newly developed tools to allow miners to mine confidently and successfully.

In addition to our tools, we also ensure that our customer service is of the most epic level. Any request that is made by an investor is properly handled in swift and professional manner.

          <h3 style="text-align: center">OUR SERVICES</h3>
PerfectFunding is a leading investment/cloud mining provider to the financial market professionals. Our technical strategies cover equity, forex, commodities and fixed-income markets.

Our market depth and knowledge are attributed to our acquired experience on trading floors of many banking institutions.
We have given the public the opportunity to invest/mine all cryptocurrencies at convenience, 100% payouts guaranteed, zero risks, withdrawals are made at choice and With over 1000 Antminer machines that are fully installed to give our clients the best services day in day out.

Happy Investing!
        </div>
    </v-flex>
    <v-flex xs12 class="team">
      <h2>MEET THE TEAM</h2>
      <v-layout row wrap>
        <v-flex xs9 sm3 md2 mx-auto class="photo">
          <img src="/static/img/ceo.jpg" alt="">
          <div class="bio">
            <h3 class="name">Maik Amsel</h3>
            <i>Founder & Chief Executive Officer(CEO)</i>
          </div>
        </v-flex>
        <v-flex xs9 sm3 md2 mx-auto class="photo">
          <img src="/static/img/cpo.jpg" alt="">
          <div class="bio">
            <h3 class="name">Wayne Elliston</h3>
            <i>Accounts and Finance Manager</i>
          </div>
        </v-flex>
        <v-flex xs9 sm3 md2 mx-auto class="photo">
          <img src="/static/img/sm.jpeg" alt="">
          <div class="bio">
            <h3 class="name">Crystal Siddiqui</h3>
            <i>Head of Strategy and Marketing</i>
          </div>
        </v-flex>
        <v-flex xs9 sm3 md2 mx-auto class="photo">
          <img src="/static/img/coo.jpg" alt="">
          <div class="bio">
            <h3 class="name">Albert Montgomery</h3>
            <i>Chief Operations Officer</i>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs11 mx-auto class="partners">
      <h2>OUR PARTNERS</h2>
      <div>
        <carousel :autoplay="true" :loop="true" :nav="false" :dots="false" :items="4">
          <div class="test"><img src="/static/img/sc.jpg"></div>
          <div class="test"><img src="/static/img/citigroup.png"></div>
          <div class="test"><img src="/static/img/hathawaylogo.jpg"></div>
          <div class="test"><img src="/static/img/barclays.jpg"></div>
          <div class="test"><img src="/static/img/bnp.png"></div>
          <div class="test"><img src="/static/img/bitmain2.png"></div>
        </carousel>
      </div>
    </v-flex>
    <page-footer />
  </v-layout>
</template>

<script>
import carousel from 'vue-owl-carousel'
import PageFooter from '@/components/footer.vue'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {
    carousel,
    PageFooter
  }
}
</script>
<style scoped>
.about h3{
  color: #0277BD
}
.bio{
  color: #FFEA00;
  font-size: 1.2em;
  margin: auto;
  width: 80%
}
.photo{
  margin-bottom: 2em
}
.photo img{
  border-radius: 50%;
  width: 60%;
  height: 10em
}
.team{
  text-align: center;
  background-color: #0277BD;
  padding-bottom: 1.5em
}
.team h2{
  color: #FFEA00;
  margin-top: 1em;
  font-size: 2.5em;
  margin-bottom: 0.5em
}
.test {
  height: 10em
}
.test img {
  height: 100%
}
@media (min-width: 400px) {
  .photo img{
    border-radius: 50%;
    width: 60%;
    height: 14em
  }
}
@media (min-width: 600px) {
  .bio{
    width: 90%
  }
  .photo img{
    width: 80%;
    height: 12em
  }
}
@media (min-width: 960px) {
  .bio{
    width: 100%
  }
  .photo img{
    height: 13em
  }
}
</style>
