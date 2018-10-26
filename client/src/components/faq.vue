<template id="">
  <v-layout row wrap>
    <v-flex xs12 class="abt"><h1>ABOUT US</h1></v-flex>
    <v-flex xs11 md5 mx-auto mt-4>
      <h2 style="text-align: center">General Questions</h2>
      <v-layout row wrap>
        <v-flex xs12 mt-3 class="holden">
          <a id="first" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop1()">WHAT IS PERFECT FUNDING?</a>
          <div v-show="accordion1" class="faq">
            Perfect Funding is a cryptocurrency mining investment platform that makes it easy for you to start your journey as a investor. Our graphical tools and convenient technical analysis indicators help you make trading decisions.
          </div>
        </v-flex>
        <v-flex xs12 mt-3 class="holden">
          <a id="second" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop2()">HOW MUCH MONEY CAN I MAKE?</a>
          <div v-show="accordion2" class="faq">
            Your success depends on your skills and patience, your chosen trading strategy, and the amount you are able to invest. We recommend watching our training videos first, so you can make more informed transactions. Beginning traders can try out their skills and practice on the practice account.
          </div>
        </v-flex>
        <v-flex xs12 mt-3 class="holden">
          <a id="third" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop3()">WHAT IS THE BEST TIME TO CHOOSE FOR INVESTMENT?</a>
          <div v-show="accordion3" class="faq">
            The best trading time depends on your trading strategy and a few other factors. We recommend that you pay attention to the market schedules, since the overlap of the American and European trading sessions makes prices more dynamic in currency pairs such as EUR/USD. You should also follow market news that might affect the movement of your chosen asset. It's better not to trade when prices are highly dynamic for inexperienced traders who don't follow the news and don't understand why the price is fluctuating.
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs11 md5 mx-auto mt-3>
      <h2 style="text-align: center">Mining</h2>
      <v-layout row wrap>
        <v-flex xs12 mt-4 class="holden">
          <a id="fourth" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop4()">WHAT IS PERFECT FUNDING?</a>
          <div v-show="accordion4" class="faq">
            Perfect Funding is a cryptocurrency mining investment platform that makes it easy for you to start your journey as a investor. Our graphical tools and convenient technical analysis indicators help you make trading decisions.
          </div>
        </v-flex>
        <v-flex xs12 mt-3 class="holden">
          <a id="fifth" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop5()">HOW MUCH MONEY CAN I MAKE?</a>
          <div v-show="accordion5" class="faq">
            Your success depends on your skills and patience, your chosen trading strategy, and the amount you are able to invest. We recommend watching our training videos first, so you can make more informed transactions. Beginning traders can try out their skills and practice on the practice account.
          </div>
        </v-flex>
        <v-flex xs12 mt-3 class="holden">
          <a id="sixth" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop6()">WHAT IS THE BEST TIME TO CHOOSE FOR INVESTMENT?</a>
          <div v-show="accordion6" class="faq">
            The best trading time depends on your trading strategy and a few other factors. We recommend that you pay attention to the market schedules, since the overlap of the American and European trading sessions makes prices more dynamic in currency pairs such as EUR/USD. You should also follow market news that might affect the movement of your chosen asset. It's better not to trade when prices are highly dynamic for inexperienced traders who don't follow the news and don't understand why the price is fluctuating.
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs11 sm5 mt-5 mx-auto>
      <h2 style="text-align: center">Funds Withdrawal</h2>
      <v-layout row wrap>
        <v-flex xs12 mt-3 class="holden">
          <a id="seventh" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop7()">HOW DO I WITHDRAW MONEY?</a>
          <div v-show="accordion7" class="faq">
            To withdraw your money, go to Withdraw Funds. You will see a list of large icons representing available methods of withdrawal. Choose a method, enter the amount and other information, and click "Withdraw Funds". Your request will be handled within a day or two and you will receive your earnings.
          </div>
        </v-flex>
        <v-flex xs12 mt-3 class="holden">
          <a id="eighth" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop8()">HOW LONG DOES IT TAKE TO WITHDRAW FUNDS?</a>
          <div v-show="accordion8" class="faq">
            We aim to process all withdrawal requests within 3 business days. Please keep in mind that the payment service provider may require more time to complete the process depending on the payment method.
          </div>
        </v-flex>
        <v-flex xs12 mt-3 class="holden">
          <a id="ninth" class="goody" style="background: #E0E0E0" href="javascript:void(0)" @click="drop9()">WHAT IS THE BEST TIME TO CHOOSE FOR INVESTMENT?</a>
          <div v-show="accordion9" class="faq">
            Yes. You need to verify your identity in order to withdraw funds. Account verification is necessary in order to prevent fraudulent financial transactions on the account.
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs11 sm5 mt-5 mx-auto></v-flex>
    <v-flex xs11 mx-auto class="partners">
      <div>
        <carousel :autoplay="true" :loop="true" :nav="false" :dots="false">
          <div class="test"><img src="/static/img/sc.jpg"></div>
          <div class="test"><img src="/static/img/citigroup.png"></div>
          <div class="test"><img src="/static/img/hathawaylogo.jpg"></div>
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
      accordion9: false
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
.goody {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  width: 100%
}
@media (min-width: 600px) {
  .goody {
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
    padding-bottom: 0.5em;
    padding-top: 0.5em
  }
  .holden {
  }
}
</style>
