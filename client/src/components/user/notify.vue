<template>
  <v-layout row wrap>
    <v-flex xs12 mt-3 class="in-head">
      <div class="big">Notifications</div>
      <div style="margin-top: 2em"><a @click="reload()"><v-icon>home</v-icon></a> <v-icon>chevron_right</v-icon> <span>{{ page }}</span></div>
    </v-flex>
    <v-flex xs11 mx-auto mt-4>
      <v-layout row wrap>
        <v-flex xs1 mt-3>
          <div class="line">
            <div class="circles" v-for="message in messages"  :key="message.id">
              <div class="c1 outer">
                <div class="inner">
                  <v-icon color="white" class="f-icon">fas fa-comments</v-icon>
                </div>
              </div>
            </div>
          </div>
        </v-flex>
        <v-flex xs10 mt-3>
          <div class="set" v-for="message in messages"  :key="message.id">
            <div class="arrow-right"></div>
            <div class="message">
              <h2>{{ message.title }}</h2>
              <hr style="color: #FFD600">
              <div class="message-body">
                Hello, {{ response.data.name }}. {{ message.body }}
              </div>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import tokenApi from '@/api/tokenApi'
export default {
  name: 'Dashboard',
  data () {
    return {
      messages: [
        {
          id: 1,
          title: 'WELCOME',
          body: `We welcome you on behalf of the entire Perfect Funding team. Thank you for joining us.
          We are pleased to inform you that your account is ready for mining investment. Please refer to the home page end for more information regarding funding and account activation procedures.
          If you have any questions, contact customer service at support@perfectfunding.org. Our expert customer service team is always ready to attend to you.`
        },
        {
          id: 2,
          title: 'CRUCIAL UPDATE',
          body: 'We wish to reinstate our commitment to effective customer service deliver and world class trading services. We also want to assure you that we are doing everything possible to ensure that we get rid of unscrupulous activities on th cryptocurrency global system. We always advise customers to NEVER send money to any individual provided wallets except from those on our website or otherwise provided by our official admin email on our website. Customers who do so, do so at their own risk. We remain reputable in our commitment to quality trading services. If you suspect any unwholesome practices, please don’t hesitate to write our support. Thanks a lot for making Perfect Options your preferred choice.'
        },
        {
          id: 3,
          title: 'IMPORTANT MESSAGE',
          body: 'Do not make payments to any external accounts or wallet address provided by any individuals (both from our workers, traders, account managers). In any case, please make sure you confirm from our official support email address. Always crosscheck the email address is same as that on our website before responding or replying to any email. If you have any issues, contact our customer care “support@perfectfunding.org We wish you a successful trading experience.'
        },
        {
          id: 4,
          title: 'PAYMENTS AND FUNDS',
          body: 'We do have staffs, but if anyone ever instructs you to make payment to any wallet address, email, or account individually or different from those provided only within our website or otherwise ONLY from our official email support@perfectoptions.org then it is SCAM. Please be vigilant and help us fight these crimes.'
        }
      ],
      page: 'Notifications',
      response: ''
    }
  },
  mounted () {
    this.fetchUser()
  },
  methods: {
    async fetchUser () {
      try {
        this.response = await tokenApi.fetchWithToken('/api/user/')
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    reload () {
      window.location.reload()
    }
  },
  components: {
  }
}
</script>

<style>
.arrow-right {
  border-top: 0.7em solid transparent;
  border-bottom: 0.7em solid transparent;
  border-right: 0.7em solid #424242;
  height: 0;
  margin-top: 1.2em;
  width: 0
}
.big {
  margin-left: 0.2em;
  font-size: 1.5em;
  font-weight: 600
}
.circles {
  margin-bottom: 14em
}
.in-head {
  color: #757575
}
.f-icon {
  font-size: 1.2em
}
.inner {
  background-color: #616161;
  border-radius: 50%;
  height: 2em;
  margin: auto;
  padding: 0.2em;
  width: 68%
}
.message {
  background-color: #0277BD;
  color: #FFF;
  height: 15em;
  padding: 1em;
  width: 90%
}
.message-body {
  font-size: 1em
}
.outer {
  background-color: #BDBDBD;
  border-radius: 50%;
  height: 3em;
  margin-bottom: 1em;
  padding-top: 0.5em;
  position: relative;
  width: 3em
}
.set {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 2em
}
@media (min-width: 750px) {
  .arrow-right {
    border-top: 0.7em solid transparent;
    border-bottom: 0.7em solid transparent;
    border-right: 0.7em solid #424242;
    height: 0;
    margin-top: 1.5em;
    width: 0
  }
  .big {
    margin-right: 0.2em;
    font-size: 2em
  }
  .circles {
    margin-bottom: 13em
  }
  .f-icon {
    font-size: 1.7em
  }
  .inner {
    background-color: #616161;
    border-radius: 50%;
    height: 3em;
    margin: auto;
    padding: 0.6em;
    width: 79%
  }
  .message {
    background-color: #424242;
    color: #FFF;
    height: 15em;
    padding: 1em;
    width: 80%
  }
  .message-body {
    font-size: 1.2em
  }
  .outer {
    background-color: #BDBDBD;
    border-radius: 50%;
    height: 4em;
    margin-bottom: 1em;
    padding-top: 0.5em;
    position: relative;
    width: 4em
  }
  .set {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 2em
  }
}
</style>
