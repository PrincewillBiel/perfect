<template id="">
  <v-layout row wrap>
    <v-flex xs12 id="carousel" class="carousel">
      <v-flex xs12 class="cover">
        <div class="words">
          <transition name="slide-fade" tag='div'>
            <div
              v-for="number in [currentNumber]"
              :key='number'
              >
            <p>{{ currentWords }}</p>
            </div>
          </transition>
        </div>
        <div class="btn-holder">
          <v-btn ripple class="ca-btn" style="background: #0277BD; border: 1px solid #FFB300; color: #FFB300; font-weight: 1000" v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'Signup'})">Start Earning!</v-btn>
          <v-btn ripple class="ca-btn" style="background: #0277BD; border: 1px solid #FFB300; color: #FFB300" v-if="$store.state.isUserLoggedIn" @click="navigateTo({name: 'Dashboard'})">Start Earning!</v-btn>
        </div>
      </v-flex>
      <image-slider>
        <transition-group name='fade' tag='anime' class="anime">
          <div
            v-for="number in [currentNumber]"
            :key='number'
            >
             <img :src="currentImage" class="img">
          </div>
        </transition-group>
      </image-slider>
    </v-flex>

    <v-flex xs11 md6 mx-auto class="intro">
      <h1 style="color: #0277BD; text-align: center"><b>Welcome to Perfect Funding LTD.</b></h1>
      <div class="int">Perfect Funding is one of the highest paying bitcoin mining pool and cloud mining provider on the market, it is also one of the leading private investment firms providing asset management services on the internet including Bitcoin Mining Program, Cryptocurrency earning, exchange and crypto assets management.

We offer professional investment solutions for all investor’s needs.

Our highly experienced team of Miners use Asics processors which expend mass amounts of energy to solve complex math algorithms in order to validate bitcoin transactions using a consensus protocol called "proof of work" using our own unique mining system.

We have an impeccable success rate achieved by a team of pro miners working round the clock; so profit is always guaranteed.
    </div>
Join us now and we will share our success with you! Happy Investing!
  </v-flex>
  <v-flex xs12 md6 class="office">
    <img src="/static/img/office.png" alt="">
  </v-flex>
  <v-flex xs12 class="steps-holder">
    <v-layout row wrap>
      <v-flex xs11 sm3 mx-auto class="steps">
        <v-icon style="font-size: 3em" color="light-blue darken-3">fas fa-box</v-icon>

        <h2>Register</h2>

        <div class="">
          Set up your account quickly and simply.
        </div>
      </v-flex>
      <v-flex xs11 sm3 mx-auto class="steps">
        <v-icon style="font-size: 3em" color="light-blue darken-3">fas fa-hand-holding-usd</v-icon>

        <h2>Make a Deposit</h2>

        <div class="">
          Select a package and fund your account
        </div>
      </v-flex>
      <v-flex xs11 sm3 mx-auto class="steps">
        <v-icon style="font-size: 3em" color="light-blue darken-3">fas fa-money-check-alt</v-icon>

        <h2>Get Returns</h2>

        <div class="">
          Earn big on your Investment.
        </div>
      </v-flex>
    </v-layout>
  </v-flex>

  <v-flex xs12 class="warn">
    <div class="">
      <h3>WARNING!</h3>
  Never make payments to any external wallet addresses or account details provided by anyone (miner, trader, manager, staff, etc). Our Staff will NEVER ask you to send money to any wallet address, email, WesternUnion, Skrill or Bank account DIFFERENT from those provided on our website.
  Customers who do so, do so at their own risk. Always write to our support/email to confirm any of such claims.
    </div>
  </v-flex>

  <v-flex xs12 class="listing">
    <v-layout row wrap>
      <v-flex xs11 sm5 md4 mx-auto class="listing-div" style="background: #0277BD">
        <h2>SILVER</h2>
        <h3 style="color: #FFB300; text-align: center">30% Weekly Profit</h3>
        <div>
          <div class="inv">Minimum Deposit: $1000</div>
          <div class="inv">Maximum Deposit: $9000</div>
          <div class="inv">Money-back Guarantee: 100%</div>
          <div class="inv">Referral Bonus: 5%</div>
        </div>
      </v-flex>
      <v-flex xs11 sm5 md4 mx-auto class="listing-div" style="background: #040D14">
        <h2 style="color: #FFB300">GOLD</h2>
        <h3 style="color: #0277BD; text-align: center">50% Weekly Profit</h3>
        <div>
          <div class="inv-alt">Minimum Deposit: $10000</div>
          <div class="inv-alt">Maximum Deposit: $49000</div>
          <div class="inv-alt">Money-back Guarantee: 100%</div>
          <div class="inv-alt">Referral Bonus: 10%</div>
        </div>
      </v-flex>
      <v-flex xs11 sm5 md4 mx-auto class="listing-div" style="background: #0277BD">
        <h2>DIAMOND</h2>
        <h3 style="color: #FFB300; text-align: center">100% Weekly Profit</h3>
        <div>
          <div class="inv">Minimum Deposit: $50000</div>
          <div class="inv">Maximum Deposit: $90000</div>
          <div class="inv">Money-back Guarantee: 100%</div>
          <div class="inv">Referral Bonus: 15%</div>
        </div>
      </v-flex>
      <v-flex xs11 sm5 md4 mx-auto class="listing-div" style="background: #040D14">
        <h2 style="color: #FFB300">LIFETIME</h2>
        <h3 style="color: #0277BD; text-align: center">10% Weekly Profit</h3>
        <div>
          <div class="inv-alt">Minimum Deposit: $100000</div>
          <div class="inv-alt">Maximum Deposit: Varied</div>
          <div class="inv-alt">Mining Duration: 365 Days</div>
          <div class="inv-alt">Referral Bonus: 20%</div>
        </div>
      </v-flex>
      <v-flex xs11 sm5 md4 mx-auto class="listing-div" style="background: #0277BD; padding-left: 2%">
        <h2 style="color: #040D14">SPECIAL OFFER</h2>
        <div>
          <div class="inv-alt">Deposit: 1 BTC to earn 0.5BTC</div>
          <div class="inv-alt">Mining Duration: 24 hours for 30 Days</div>
          <div class="inv-alt" style="color: #040D14">Contact support if interested in this plan.</div>
        </div>
      </v-flex>
    </v-layout>
  </v-flex>

  <v-flex xs12 class="holder" style="background-color: #FFF">
    <v-layout row wrap>
      <v-flex xs12 sm6 class="iframe">
        <v-card color="white darken-2" style="height: 100%; z-index: 900">
          <iframe width="100%" height="100%" src="https://youtube.com/embed/GmOzih6I1zs"></iframe>
        </v-card>
      </v-flex>
      <v-flex xs11 sm6 class="intro" style="background-color: #FFF; color: #040D14">
        <h2 style="color: #0277BD">Learn the Best Practices in Cryptocurrency Investment.</h2>

Perfect Funding is an investment management company that deals in cryptocurrency (mostly Bitcoin) mining and investments. We are run by a team of mining experts who generate profits by mining cryptocurrencies. Here we will teach you the basics of mining and how to make smart investments in no time.
      </v-flex>
    </v-layout>
  </v-flex>

  <v-flex xs12 class="stats-holder">
    <v-layout row wrap>
      <v-flex xs11 sm3 mx-auto class="stats">
        <h2>4926</h2>
        <div class="">
          Perfect Trades
        </div>
      </v-flex>
      <v-flex xs11 sm3 mx-auto class="stats">
        <h2>35,605+</h2>
        <div class="">
          Investors
        </div>
      </v-flex>
      <v-flex xs11 sm3 mx-auto class="stats">
        <h2>64</h2>
        <div class="">
          In-house Miners
        </div>
      </v-flex>
    </v-layout>
  </v-flex>

  <v-flex xs12 class="plan">
    <v-flex xs11 sm6 md7 mx-auto class="heading-1"><h2><span>WHY YOU SHOULD INVEST WITH US</span></h2></v-flex>
    <v-layout row wrap>
      <v-flex xs11 sm6 md4 mx-auto class="reason reason-1 reason-2 reason-4">
        <h2>NO HIDDEN FEE</h2>
        <span><i class="fas fa-user-shield"></i></span>
        <div class="">Transparent volume-based pricing with no hidden fees.</div>
      </v-flex>
      <v-flex xs11 sm6 md4  mx-auto class="reason reason-2 reason-3 reason-4">
        <h2>HIGH ROI</h2>
        <span><i class="fas fa-chart-line"></i></span>
        <div class="">With our clever trading tactics and smart systems, high return on investment is assured.</div>
      </v-flex>
      <v-flex xs11 sm6 md4  mx-auto class="reason reason-1 reason-2 reason-4">
        <h2>GUARANTEED RETURNS</h2>
        <span><i class="fas fa-hand-holding-usd"></i></span>
        <div class="">With our Risk transfer and Insurances on check, we understand all risk and measures needed to handle your investments.</div>
      </v-flex>
      <v-flex xs11 sm6 md4  mx-auto class="reason reason-4">
        <h2>QUICK WITHDRAWALS</h2>
        <span><i class="fas fa-piggy-bank"></i></span>
        <div class="">Withdrawals are made easy and simple, simply request and our system will process.</div>
      </v-flex>
      <v-flex xs11 sm6 md4  mx-auto class="reason reason-1 reason-3">
        <h2>ROUND THE CLOCK SUPPORT</h2>
        <span><i class="fas fa-user-clock"></i></span>
        <div class="">Our Online support team are ready to assist you 24/7.</div>
      </v-flex>
      <v-flex xs11 sm6 md4  mx-auto class="reason">
        <h2>FULLY-FEATURED</h2>
        <span><i class="far fa-chart-bar"></i></span>
        <div class="">We will provide you an easy to fully-featured, easy to navigate platform. So sit back and relax while you make big returns.</div>
      </v-flex>
    </v-layout>
  </v-flex>

  <v-flex xs11 mt-3 mx-auto>
    <carousel :autoplay="true" :loop="true" :nav="false" :dots="false">
      <div class="test"><img src="/static/img/sc.jpg"></div>
      <div class="test"><img src="/static/img/citigroup.png"></div>
      <div class="test"><img src="/static/img/hathawaylogo.jpg"></div>
      <div class="test"><img src="/static/img/bnp.png"></div>
      <div class="test"><img src="/static/img/bitmain2.png"></div>
    </carousel>
  </v-flex>

  <v-flex xs12>
    <div class="testimonial">
      <transition name="fade" mode="out-in" tag='div'>
        <div
          v-for="number in [currentNumber]"
          :key='number'
          >
        <div class="testimony">{{ currentTestimony }}</div>
        <div class="names"><i class="fas fa-quote-left"></i>{{ currentName }}</div>
        </div>
      </transition>
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
      currentNumber: 0,
      timer: null,
      images: [
        '/static/img/servers.jpg',
        '/static/img/system.jpg'
      ],
      words: [
        'Fast, Efficient & Rewarding Mining with Perfect Funding.',
        'Your Success is Our Priority.'
      ],
      testimonials: [
        `I know nothing about cryptocurrency mining, but Perfect Funding has made it possible for me to accomplish
        such tasks without my direct involvement with excellent weekly returns.
        I will encourage all to give Perfect Funding a try.`,
        `Recommended investment company for you who are always looking
        for good investment company with good weekly returns,
        swift withdrawal, and excellent support.`,
        `I have invested with many trading firms, but recently I was advised to try Perfect Funding.
        I signed up this company is very good and they provide very good.`,
        `You know good opportunity when you see one, Perfect Funding,
        the perfect investment platform I have involved with.`
      ],
      names: [
        `PAULA FLEMING.
        Atlanta Georgia`,
        `EDDY WILLIAMS
        New York`,
        `GUILLERMO CRUZ
        Santa Fe, New Mexico`,
        `ADRIAN MEYERS
        Germany`
      ]
    }
  },
  mounted () {
    this.startRotation()
  },
  methods: {
    startRotation () {
      this.timer = setInterval(this.next, 5000)
    },
    stopRotation () {
      clearTimeout(this.timer)
      this.timer = null
    },
    next () {
      this.currentNumber += 1
    },
    prev () {
      this.currentNumber -= 1
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  computed: {
    currentImage () {
      return this.images[Math.abs(this.currentNumber) % this.images.length]
    },
    currentWords () {
      return this.words[Math.abs(this.currentNumber) % this.words.length]
    },
    currentTestimony () {
      return this.testimonials[Math.abs(this.currentNumber) % this.testimonials.length]
    },
    currentName () {
      return this.names[Math.abs(this.currentNumber) % this.names.length]
    }
  },
  components: {
    carousel,
    PageFooter
  }
}
</script>
<style scoped>
.alt{
  background: #0277BD
}
.alt, .div{
  padding: 1em 0;
  white-space: pre-wrap;      /* CSS3 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap;     /* Opera <7 */
  white-space: -o-pre-wrap;   /* Opera 7 */
  word-wrap: break-word;      /* IE break-all */
  word-break: normal;
}
.anime{
  width: 100%
}
.ca-btn {
  border: 1px solid #FFB300;
  height: 2em;
  padding: 0 1em
}
.carousel {
  height: 19em;
  width: 100%
}
.contain{
  display: flex;
  flex-flow: row wrap;
  width: 100%
}
.cover{
  height: 30em;
  width: 100%;
  background: #B3E5FC;
  opacity: 0.8;
  padding-top: 5em;
  position: absolute;
  font-size: 1em;
  text-align: center
}
.crypt-1, .crypt-2{
  background: #FFB300
}
.dealer{
  font-size: 1.2em;
  background: #FFF;
  padding-top: 0.5em;
  text-align: justify;
  text-justify: inter-word;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  word-break: keep-all;
  font-weight: 400
}
.dealer li{
  margin: 0;
  padding-left: 0.8em
}
.dealer ul{
  list-style-type: none;
  color: #0277BD
}
.dealer h2{
  color: #0277BD;
  padding-left: 1em
}
.dealer span{
  color: #040D14;
  padding-left: 0.5em
}
.div{
  position: relative;
  background: #0277BD;
  overflow: hidden;
  white-space: pre-wrap;      /* CSS3 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap;     /* Opera <7 */
  white-space: -o-pre-wrap;   /* Opera 7 */
  word-wrap: break-word;      /* IE break-all */
  word-break: normal
}
.div:before{
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.3;
  background-image: url("/static/img/laptop.jpg");
  background-repeat: no-repeat;
  background-position: 0 50%;
  -ms-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover
}
.div div{
  z-index: 2;
  position: relative
}
.down{
  background: #01579B;
  height: 50%;
  position: absolute;
  width: 100%
}
.fade-enter-active{
  /* transition: all 2s ease; */
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: relative
}
.fade-enter, .fade-leave-to{
  opacity: 0;
  visibility: hidden
}
.fa-quote-left{
  font-size: 1.5em;
  color: white;
  margin-right: 0.5em
}
.feature{
  padding: 1em;
  font-size: 1.1em;
  width: 90%;
  margin: 1em auto;
  height: 15em;
  background: #FFF;
  border-radius: 5px
}
.holder {
  margin-bottom: 2em;
  margin-top: 2em
}
.iframe{
  height: 16.5em;
  margin: auto
}
.img{
  height: 19.5em;
  width: 100%
}
.img-2 {
  height: 20em;
  width: 100%
}
.index-container{
  background: #FFF;
  border-radius: 2px;
  font-size: 1.2em;
  margin: auto;
  padding: 0.5em;
  width: 90%;
}
.in-part {
  background: #FFF
}
.intro h1 {
  font-size: 1.3em
}
.listing {
  background: #040D14;
  padding: 2em 1% 1em;
  width: 100%
}
.listing-div {
  border: 1px solid #FFB300;
  height: 17em;
  margin-bottom: 1.5em;
  padding-top: 1em
}
.listing h3 {
  font-size: 1.4em;
  margin-bottom: 0.8em
}
.listing-div div{
  font-size: 1.1em;
  padding-left: 4%
}
.listing-div h2 {
  padding-bottom: 1em;
  text-align: center
}
.name{
  height: 5em;
  font-size: 1em;
  text-justify: inter-word
}
.office {
  height: 20em
}
.office img {
  height: 100%;
  width: 100%
}
.options {
  position: relative;
  background: #040D14;
  overflow: hidden;
  white-space: pre-wrap;      /* CSS3 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap;     /* Opera <7 */
  white-space: -o-pre-wrap;   /* Opera 7 */
  word-wrap: break-word;      /* IE break-all */
  word-break: normal
}
.options:before{
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.3;
  background-image: url("/static/img/mobile.jpg");
  background-repeat: no-repeat;
  background-position: 0 50%;
  -ms-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover
}
.options div{
  z-index: 2;
  position: relative
}
.options-container{
  background: #FFF;
  border-radius: 2px;
  margin: 2em 0
}
.options-container h2{
  color: #0277BD
}
.plan{
  font-size: 1em;
  padding: 5em 1em;
  margin: auto;
  color: #0277BD;
  text-align: center;
  white-space: pre-wrap;      /* CSS3 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap;     /* Opera <7 */
  white-space: -o-pre-wrap;   /* Opera 7 */
  word-wrap: break-word;      /* IE break-all */
  word-break: keep-all;
  background: #040D14
}
.reason{
  border: 1px solid #FFB300;
  margin-bottom: 2em;
  padding: 2.5em 1em;
  font-size: 1.3em;
}
.reason h2{
  font-size: 1.2em
}
.reason i{
  font-size: 1em;
  color: #FFB300;
  padding: 0.5em;
  background-color: #FFF;
  border-radius: 50%;
  margin: 0.5em
}
.slide-fade-enter-active{
  transition-delay: 0s;
  transition: all 7s ease;
}
.slide-fade-enter{
  transform: translateX(20px);
  opacity: 0;
}
.split{
  height: 2em;
  background: #0277BD
}
.stats {
  background: #FFF;
  border: 1px solid #FFB300;
  color: #0277BD;
  margin-bottom: 1em;
  padding: 2em 0;
  text-align: center
}
.stats h2, .steps h2 {
  margin-top: 0.5em
}
.stats-holder {
  background: #0277BD;
  height: auto;
  padding-bottom: 1em;
  padding-top: 2em
}
.steps {
  background: #FFC300;
  margin-bottom: 1em;
  padding: 2em 0;
  text-align: center
}
.steps-holder {
  background: #E0E0E0;
  height: auto;
  overflow: hidden;
  padding-bottom: 1em;
  padding-top: 2em;
  position: relative
}
.steps-holder:before, .warn:before{
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.09;
  background-image: url("/static/img/mining.jpg");
  background-repeat: no-repeat;
  background-position: 0 50%;
  -ms-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover
}
.test {
  height: 10em
}
.test img {
  height: 100%
}
.testimonial{
  width: 100%;
  padding: 2em;
  text-align: center;
  white-space: pre-wrap;      /* CSS3 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap;     /* Opera <7 */
  white-space: -o-pre-wrap;   /* Opera 7 */
  word-wrap: break-word;      /* IE break-all */
  word-break: keep-all;
  background: #0277BD;
  color: #FFB300
}
.testimony{
  height: 7.5em;
  font-size: 1em;
  text-justify: inter-word
}
.warn {
  background-color: #E0E0E0;
  color: #FF0000;
  height: auto;
  overflow: hidden;
  padding-bottom: 1em;
  position: relative
}
.warn div {
  background-color: #FFB300;
  color: #F00;
  margin: auto;
  padding: 0.5em;
  width: 90%
}
.warn h3 {
  text-align: center
}
.words{
  color: #FF6F00;
  font-size: 1.5em;
  font-weight: 900;
  height: 4em;
  margin-top: 3em;
  padding: 1em 1em;
  width: 100%
}
@media (min-width: 440px){

}
@media (min-width: 600px){
  .alt, .div{
    padding: 5em 0;
  }
  .ca-btn {
    border: 1px solid #FFB300;
    height: 3em;
    padding: 0 2em
  }
  .carousel {
    height: 35em
  }
  .cover{
    height: 35em;
    padding-top: 5em
  }
  .fa-quote-left{
    font-size: 1.5em;
    color: white;
    margin-right: 0.5em
  }
  .feature{
    padding: 1em;
    width: 45%;
    height: 18em;
    font-size: 1.4em
  }
  .feature-card{
    padding: 0.5em
  }
  .iframe{
    height: 20em;
    margin: auto
  }
  .img{
    height: 40em
  }
  .img-2{
    height: 20em
  }
  .index-container{
    margin: auto;
    padding: 2em;
    width: 80%
  }
  .nav-2{
    width: 75%;
    font-size: 1em
  }
  .office {
    height: 30em
  }
  .office img {
    padding: 5em
  }
  .options-container{
    margin-top: 0
  }
  .reason {
    border: 0;
    margin: 0;
    font-size: 1.3em;
  }
  .reason i{
    color: #FFB300;
    font-size: 1.2em;
  }
  .reason-1{
    border-right: 1px solid #FFB300
  }
  .reason-4{
    border-bottom: 1px solid #FFB300
  }
  .words {
    height: 6em;
    width: 100%;
    padding: 1em 1em;
    font-size: 2em;
  }
}
@media (min-width: 800px) {
  .iframe{
    height: 30em
  }
}
@media (min-width: 960px) {
  .alt, .div{
    padding: 5em 0;
  }
  .ca-btn {
    border: 1px solid #FFB300;
    height: 3em;
    padding: 0 2em
  }
  .carousel{
    height: 45em
  }
  .cover {
    /* height: 45em;
    padding-top: 30em;
    text-align: center */
    height: 45em;
    padding-top: 15em;
    text-align: center
  }
  .fa-quote-left{
    font-size: 3em;
    color: white;
    margin-right: 1em
  }
  .feature{
    padding: 1em;
    width: 30%;
    height: 14em;
    font-size: 1.4em
  }
  .feature-card {
    padding: 1em
  }
  .img {
    height: 45em
  }
  .img-2 {
    height: 20em
  }
  .index-container {
    font-size: 1.5em;
    padding: 2em;
    width: 41%;
    margin-left: 5%;
  }
  .intro h1{
    font-size: 2em
  }
  .listing {
    height: auto;
    padding-top: 4em
  }
  .listing-div {
    height: 22em;
    padding-top: 1em
  }
  .listing div {
    font-size: 1.1em;
    margin-bottom: 1em;
    padding-left: 3%
  }
  .listing h2 {
    padding-bottom: 1.2em
  }
  .listing h3 {
    font-size: 1.5em;
    margin-bottom: 0.8em
  }
  .nav-2 {
    width: 60%;
    font-size: 1.5em
  }
  .options {
    padding: 4.5em 0 4em
  }
  .plan-2 {
    width: 26%;
  }
  .plan-holder {
    padding: 5em 0;
  }
  .reason{
    border: 0;
    margin: 0;
    font-size: 1.3em;
    padding: 0.5em
  }
  .reason i {
    font-size: 1.5em
  }
  .reason-2 {
    border-bottom: 0.5px solid #FFB300;
  }
  .reason-3 {
    border-left: 0.5px solid #FFB300;
    border-right: 0.5px solid #FFB300
  }
  .stats {
    font-size: 1.1em;
    height: 12em
  }
  .steps {
    height: 14em
  }
  .stats h2, .steps h2 {
    margin-top: 1em
  }
  .stats div, .steps div {
    font-size: 1.1em
  }
  .stats-holder, .steps-holder {
    height: 18em;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 2em
  }
  .testimonial{
    width: 100%;
    padding: 2em 3em;
    text-align: center;
    white-space: pre-wrap;      /* CSS3 */
    white-space: -moz-pre-wrap; /* Firefox */
    white-space: -pre-wrap;     /* Opera <7 */
    white-space: -o-pre-wrap;   /* Opera 7 */
    word-wrap: break-word;      /* IE break-all */
    word-break: keep-all;
    background: #0277BD;
  }
  .testimony{
    height: 6em;
    font-size: 1.2em;
    text-align: center;
    text-justify: inter-word
  }
  .warn {
    height: 20em;
    padding-top: 2em
  }
  .warn div {
    background: #FFB300;
    font-size: 1.2em;
    margin: auto;
    padding: 2em;
    width: 50%
  }
  .words {
    font-size: 3.5em;
    font-weight: 500;
    height: 4em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0em;
    padding: 0em 1em;
    text-align: center;
    width: 90%
  }
}
</style>
