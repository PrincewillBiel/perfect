<template>
  <v-layout row wrap>
    <v-flex xs12 mx-auto elevation-2 class="down">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </v-flex>
    <v-flex xs11 sm7 md4 mx-auto mt-5 elevation-2 class="up">
      <v-toolbar class="head" style="background: #0288D1" flat dense>
        <v-toolbar-title class="white--text title">REGISTER</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-1 pb-2">
        <p class="inq">Already have an account? <a @click="navigateTo({name: 'Signin'})">Log In</a></p>
        <form autocomplete="off">
          <v-text-field label="Name" prepend-icon="person" v-model="name"></v-text-field>
          <v-text-field label="Email" prepend-icon="email" v-model="email"></v-text-field>
          <v-select
            :items="states"
            v-model="country"
            single-line
            label="Select Country"
            prepend-icon="public"
          ></v-select>
          <v-text-field label="Phone Number" prepend-icon="stay_current_portrait" v-model="mobile"></v-text-field>
          <v-text-field label="Password" prepend-icon="lock" type="password" v-model="password" autocomplete="new-password"></v-text-field>
          <v-text-field label="Confirm Password" prepend-icon="lock" type="password" v-model="confirm" v-on:input="onChg($event)" autocomplete="new-password"></v-text-field>
        </form>
        <v-chip label class="butn white--text" style="background: #0277BD" @click="register">Register</v-chip>
        <div v-html="error" class="err"></div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import cookie from 'cookie'
import randomstring from 'randomstring'
import UplineService from '@/services/UplineService'
import DownlineService from '@/services/DownlineService'
// import Panel from '@/components/Panel'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      states: [
        'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua, Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas',
        'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia , Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands',
        'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica',
        'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
        'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana',
        'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India',
        'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia',
        'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania',
        'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia',
        'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
        'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre , Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles',
        'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts , Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan',
        'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor', 'Togo', 'Tonga', 'Trinidad , Tobago', 'Tunisia',
        'Turkey', 'Turkmenistan', 'Turks , Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay',
        'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'
      ],
      country: '',
      email: '',
      mobile: '',
      name: '',
      password: '',
      confirm: '',
      referral: 'www.perfectfunding.org/register/',
      code: '',
      refInfo: '',
      error: null
    }
  },
  mounted () {
    this.code = randomstring.generate({
      length: 7,
      charset: 'alphanumeric'
    })
    this.referral += this.code
    this.getUpline()
  },
  methods: {
    onChg (e) {
      if (this.confirm !== this.password) {
        this.error = 'Your password does not match.'
      } else {
        this.error = null
      }
    },
    async getUpline () {
      try {
        this.refInfo = (await UplineService.getUpline(this.$route.params.code)).data
      } catch (error) {
        this.error = error.data.error
      }
    },
    async postDownline () {
      try {
        await DownlineService.postDownline({
          name: this.name,
          myemail: this.email,
          refemail: this.refInfo.upline.email,
          refname: this.refInfo.upline.name
        })
      } catch (error) {
        this.error = error.data.error
      }
    },
    async postUpline () {
      try {
        await UplineService.postUpline({
          name: this.name,
          email: this.email,
          code: this.code
        })
      } catch (error) {
        this.error = error.data.error
      }
    },
    async register () {
      try {
        const response = await AuthenticationService.register({
          country: this.country,
          email: this.email,
          mobile: this.mobile,
          name: this.name,
          password: this.password,
          referral: this.referral
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.postUpline()
        this.postDownline()
        const token = response.data.token
        document.cookie = cookie.serialize('token', token, {
          maxAge: 30 * 24 * 60 * 60
        })
        this.$router.push({
          name: 'Dashboard'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    // Panel
  }
}
</script>

<style scoped>
.butn{
  font-size: 1.2em;
  margin-left: 38%
}
.down{
  background: #01579B;
  height: 50%;
  position: absolute;
  width: 100%
}
.err{
  color: red;
  margin-top: 1em;
  text-align: center
}
.head{
  background: #0277BD;
}
.inq{
  text-align: center;
  font-size: 1.2em;
  margin-top: 1em;
}
.select{
  width: 100%;
  border: 0;
  border-bottom: 1px solid grey;
  color: grey;
  font-size: 1.1em;
  margin: 1em 0
}
.title{
  margin-left: 38%;
}
.up{
  background: #FFF;
  left: 50%;
  position: absolute;
  top: 60%;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  width: 50%;
  z-index: 401
}
</style>
