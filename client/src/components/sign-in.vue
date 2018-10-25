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
        <v-toolbar-title class="white--text title">LOG IN</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
        <p class="inq">Don't have an account? <a @click="navigateTo({name: 'Signup'})">Register</a></p>
        <form autocomplete="off">
          <v-text-field label="Email" v-model="email" prepend-icon="email"></v-text-field>
          <v-text-field label="Password" type="password" v-model="password" prepend-icon="lock" autocomplete="new-password"></v-text-field>
        </form>
        <v-chip label class="butn white--text" style="background: #0277BD" @click="login">Log In</v-chip>
        <div v-html="error" class="err"></div>
        <p class="inq">Forgot Password? <a @click="navigateTo({name: 'Reset'})">Reset Password</a></p>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import cookie from 'cookie'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
  }
}
</script>

<style scoped>
.butn{
  font-size: 1.2em;
  margin-left: 37.5%
}
.down{
  background: #01579B;
  height: 50%;
  position: absolute;
  width: 100%
}
.form-holder{
  margin: 13rem auto
}
.head{
  background: #0277BD
}
.inq{
  text-align: center;
  font-size: 1.2em;
  margin-top: 1em;
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
  width: 100%;
  z-index: 401
}
</style>
