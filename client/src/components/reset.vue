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
    <v-flex xs11 sm7 md4 mx-auto elevation-2 class="up">
      <v-toolbar class="head" style="background: #0288D1" flat dense>
        <v-toolbar-title class="white--text title">RESET PASSWORD</v-toolbar-title>
      </v-toolbar>
      <div class="pl-3 pr-4 pt-2 pb-2">
        <p class="inq">Did you forget your password?</p>
        <form autocomplete="off">
          <v-text-field label="Email" outline prepend-icon="email" v-model="email"></v-text-field>
        </form>
        <v-chip label class="butn white--text" style="background: #0277BD" @click="sendEmail">Reset Password</v-chip>
        <div v-html="error" class="err"></div>
        <p v-show="wait" class="wait">Please wait...</p>
        <p v-show="sent" class="sent">Please check your email for link to reset password.</p>
        <p class="inq">Don't have an account? <a @click="navigateTo({name: 'Signup'})">Register</a></p>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
// import cookie from 'cookie'
// import tokenApi from '@/api/tokenApi'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      error: null,
      sent: false,
      wait: false
    }
  },
  methods: {
    async sendEmail () {
      try {
        this.wait = true
        await AuthenticationService.sendEmail({
          email: this.email
        })
        this.wait = false
        this.sent = true
      } catch (error) {
        this.wait = false
        this.error = error.data.error
      }
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
  }
}
</script>

<style scoped>
.butn{
  font-size: 1.2em;
  margin-left: 35%
}
.down{
  background: #01579B;
  height: 50%;
  position: absolute;
  width: 100%
}
.inq{
  text-align: center;
  font-size: 1.2em;
  margin-top: 1em;
}
.sent{
  margin-left: 15%;
  color: #0277BD
}
.title{
  margin-left: 30%;
}
.up{
  background: #FFF;
  left: 50%;
  position: absolute;
  top: 60%;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  width: 100%;
  z-index: 401
}
.wait{
  text-align: center;
  color: #0277BD
}
</style>
