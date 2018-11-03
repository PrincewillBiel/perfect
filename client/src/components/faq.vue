<template id="">
  <v-layout row wrap>
    <v-flex xs12 class="abt"><h1>FREQUENTLY ASKED QUESTIONS</h1></v-flex>
    <v-flex xs11 md10 mx-auto my-4><h2 style="text-align: center; color: #0277BD">QUESTIONS YOU MIGHT WANT TO ASK</h2></v-flex>
    <v-flex xs11 sm7 md5 mx-auto mt-4>
      <h2 style="color: #040D14">General Questions</h2>
      <v-layout row wrap>
        <v-flex xs12 mt-4 class="holden">
          <a id="first" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop1()">WHAT IS PERFECT FUNDING?</a>
          <div v-show="accordion1" class="faq">
            Perfect Funding is a cryptocurrency mining investment platform that makes it easy for you to start your journey as a investor. Our graphical tools and convenient technical analysis indicators help you make investment decisions.
          </div>
        </v-flex>
        <v-flex xs12 mt-3 class="holden">
          <a id="second" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop2()">HOW MUCH MONEY CAN I MAKE?</a>
          <div v-show="accordion2" class="faq">
            Your success depends on our strategic skills, your patience, your chosen investment plan and the amount you are able to invest. We recommend watching our mining basics videos first, so you can make more informed transactions. Beginning traders can try out their skills and practice on the practice account.
          </div>
        </v-flex>
        <v-flex xs12 mt-3 class="holden">
          <a id="third" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop3()">HOW SAFE IS THIS WEBSITE?</a>
          <div v-show="accordion3" class="faq">
            Our data centers are located on multiple locations around the world to make sure that our system has 100% uptime with zero chance for a transaction to fail. Our website is CDN powered, SSL secured and protected against DDoS attacks to make sure your stay on our website is completely safe.
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs11 sm7 md5 mx-auto mt-4>
      <h2 style="color: #040D14">Mining</h2>
      <v-layout row wrap>
        <v-flex xs12 mt-3 class="holden">
          <a id="fourth" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop4()">HOW DOES IT WORK?</a>
          <div v-show="accordion4" class="faq">
            After registering for an account with the company and funded it according to preferred package, you will be connected to an Antminer robot network pool where your investment returns are being generated from and automatically sent straight into your bitcoin wallet in due time of mining duration of the package activated.
          </div>
        </v-flex>
        <v-flex xs12 mt-3 class="holden">
          <a id="fifth" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop5()">WHAT ARE MINING HASH RATES?</a>
          <div v-show="accordion5" class="faq">
            <img src="/static/img/hashrate.jpg" alt="">
          </div>
        </v-flex>
        <v-flex xs12 mt-3 class="holden">
          <a id="sixth" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop6()">IS THERE ANY COMMISSION FOR INACTIVE ACCOUNTS?</a>
          <div v-show="accordion6" class="faq">
            If you don't perform any operations on the platform for 90 days and there is some amount of money remaining on your account, we deduct a $50 fee for servicing the inactive account, but not more than the total of your mining balance. For example, if there's 0.4 USD on your account, not more than 0.4 USD can be charged.
          </div>
        </v-flex>
        <v-flex xs12 mt-3 class="holden">
          <a id="seventh" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop7()">WHY THE MINIMUM OF $1,000?</a>
          <div v-show="accordion7" class="faq">
          Considering the tight security system against hacking and the level of fully equipped tools, the mining network pool functions more effectively on surplus deposits in order to generate profits more efficiently and fast enough to meet the maximum satisfaction of our clients day in day out.That’s the company’s standard.
          </div>
        </v-flex>
        <v-flex xs12 mt-3 class="holden">
          <a id="eighth" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop8()">DISCLOSURE</a>
          <div v-show="accordion8" class="faq">
            Mining equipment metrics are calculated based on a network hash rate of 51,417,644,205 GH/s and using a BTC - USD exchange rate of 1 BTC = $ 6460.17. These figures vary based on the total network hash rate and on the BTC to USD conversion rate. Equipment cost can vary, block reward is fixed at 12.5 BTC . Future block reward and hash rate changes are not taken into account. The electricity price used in generating these metrics is $ 0.12 per kWh. Network hash rate varies over time, this is just an estimation based on current values.
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs11 sm7 md5 mt-4 mx-auto>
      <h2 style="color: #040D14">Funds Withdrawal</h2>
      <v-layout row wrap>
        <v-flex xs12 mt-3 class="holden">
          <a id="ninth" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop9()">HOW DO I WITHDRAW MONEY?</a>
          <div v-show="accordion9" class="faq">
            To withdraw your money, go to Withdraw Funds. Enter the amount you want to withdraw, the description of the fund (investment or referral bonus) and your wallet address. Your request will be handled within a day or two and you will receive your earnings.
          </div>
        </v-flex>
        <v-flex xs12 mt-3 class="holden">
          <a id="tenth" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop10()">HOW LONG DOES IT TAKE TO WITHDRAW FUNDS?</a>
          <div v-show="accordion10" class="faq">
            We aim to process all withdrawal requests within 3 business days. Please keep in mind that the payment service provider may require more time to complete the process depending on the payment method.
          </div>
        </v-flex>
        <v-flex xs12 mt-3 class="holden">
          <a id="eleventh" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop11()">DO I NEED TO PROVIDE ANY DOCUMENTS TO MAKE WITHDRAWALS?</a>
          <div v-show="accordion11" class="faq">
            On suspected security breaches, Yes. You need to verify your identity in order to withdraw funds. Account verification is necessary in order to prevent fraudulent financial transactions on the account.
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs11 md5 my-5 mx-auto></v-flex>
    <v-flex xs11 mx-auto mt-5 class="partners">
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
      accordion1: false,
      accordion2: false,
      accordion3: false,
      accordion4: false,
      accordion5: false,
      accordion6: false,
      accordion7: false,
      accordion8: false,
      accordion9: false,
      accordion10: false,
      accordion11: false
    }
  },
  mounted () {
  },
  methods: {
    async drop1 () {
      if (this.accordion1 === true) {
        this.accordion1 = false
        document.getElementById('first').style.background = '#E0E0E0'
        document.getElementById('first').style.color = '#0277BD'
      } else {
        if (this.accordion1 === false) {
          this.accordion1 = true
          document.getElementById('first').style.background = '#0277BD'
          document.getElementById('first').style.color = '#FFF'
        }
      }
    },
    async drop2 () {
      if (this.accordion2 === true) {
        this.accordion2 = false
        document.getElementById('second').style.background = '#E0E0E0'
        document.getElementById('second').style.color = '#0277BD'
      } else {
        if (this.accordion2 === false) {
          this.accordion2 = true
          document.getElementById('second').style.background = '#0277BD'
          document.getElementById('second').style.color = '#FFF'
        }
      }
    },
    async drop3 () {
      if (this.accordion3 === true) {
        this.accordion3 = false
        document.getElementById('third').style.background = '#E0E0E0'
        document.getElementById('third').style.color = '#0277BD'
      } else {
        if (this.accordion3 === false) {
          this.accordion3 = true
          document.getElementById('third').style.background = '#0277BD'
          document.getElementById('third').style.color = '#FFF'
        }
      }
    },
    async drop4 () {
      if (this.accordion4 === true) {
        this.accordion4 = false
        document.getElementById('fourth').style.background = '#E0E0E0'
        document.getElementById('fourth').style.color = '#0277BD'
      } else {
        if (this.accordion4 === false) {
          this.accordion4 = true
          document.getElementById('fourth').style.background = '#0277BD'
          document.getElementById('fourth').style.color = '#FFF'
        }
      }
    },
    async drop5 () {
      if (this.accordion5 === true) {
        this.accordion5 = false
        document.getElementById('fifth').style.background = '#E0E0E0'
        document.getElementById('fifth').style.color = '#0277BD'
      } else {
        if (this.accordion5 === false) {
          this.accordion5 = true
          document.getElementById('fifth').style.background = '#0277BD'
          document.getElementById('fifth').style.color = '#FFF'
        }
      }
    },
    async drop6 () {
      if (this.accordion6 === true) {
        this.accordion6 = false
        document.getElementById('sixth').style.background = '#E0E0E0'
        document.getElementById('sixth').style.color = '#0277BD'
      } else {
        if (this.accordion6 === false) {
          this.accordion6 = true
          document.getElementById('sixth').style.background = '#0277BD'
          document.getElementById('sixth').style.color = '#FFF'
        }
      }
    },
    async drop7 () {
      if (this.accordion7 === true) {
        this.accordion7 = false
        document.getElementById('seventh').style.background = '#E0E0E0'
        document.getElementById('seventh').style.color = '#0277BD'
      } else {
        if (this.accordion7 === false) {
          this.accordion7 = true
          document.getElementById('seventh').style.background = '#0277BD'
          document.getElementById('seventh').style.color = '#FFF'
        }
      }
    },
    async drop8 () {
      if (this.accordion8 === true) {
        this.accordion8 = false
        document.getElementById('eighth').style.background = '#E0E0E0'
        document.getElementById('eighth').style.color = '#0277BD'
      } else {
        if (this.accordion8 === false) {
          this.accordion8 = true
          document.getElementById('eighth').style.background = '#0277BD'
          document.getElementById('eighth').style.color = '#FFF'
        }
      }
    },
    async drop9 () {
      if (this.accordion9 === true) {
        this.accordion9 = false
        document.getElementById('ninth').style.background = '#E0E0E0'
        document.getElementById('ninth').style.color = '#0277BD'
      } else {
        if (this.accordion9 === false) {
          this.accordion9 = true
          document.getElementById('ninth').style.background = '#0277BD'
          document.getElementById('ninth').style.color = '#FFF'
        }
      }
    },
    async drop10 () {
      if (this.accordion10 === true) {
        this.accordion10 = false
        document.getElementById('tenth').style.background = '#E0E0E0'
        document.getElementById('tenth').style.color = '#0277BD'
      } else {
        if (this.accordion10 === false) {
          this.accordion10 = true
          document.getElementById('tenth').style.background = '#0277BD'
          document.getElementById('tenth').style.color = '#FFF'
        }
      }
    },
    async drop11 () {
      if (this.accordion11 === true) {
        this.accordion11 = false
        document.getElementById('eleventh').style.background = '#E0E0E0'
        document.getElementById('eleventh').style.color = '#0277BD'
      } else {
        if (this.accordion11 === false) {
          this.accordion11 = true
          document.getElementById('eleventh').style.background = '#0277BD'
          document.getElementById('eleventh').style.color = '#FFF'
        }
      }
    }
  },
  components: {
    carousel,
    PageFooter
  }
}
</script>
<style scoped>
.faq {
  border: 1px solid #FFB300;
  padding: 1em
}
.faq img {
  width: 100%
}
.goody {
  display: inline-block;
  font-size: 0.9em;
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  text-align: center;
  text-decoration: none;
  width: 100%
}
.test {
  height: 10em
}
.test img {
  height: 100%
}
@media (min-width: 600px) {
  .goody {
    font-size: 1em;
  }
}
@media (min-width: 800px) {
  .goody {
  }
}
@media (min-width: 960px) {
  .faq {
    font-size: 1.2em
  }
  .goody {
    padding-bottom: 1em;
    padding-top: 1em
  }
  .holden {
  }
}
</style>
