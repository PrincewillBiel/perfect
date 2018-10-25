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
        <v-toolbar-title class="white--text title">NEW PASSWORD</v-toolbar-title>
      </v-toolbar>
      <div class="pl-3 pr-4 pt-2 pb-2">
        <form autocomplete="off">
          <v-text-field label="New Password" type="password" v-model="password" autocomplete="new-password"></v-text-field>
          <v-text-field label="Confirm Password" type="password" v-model="confirm" autocomplete="new-password"></v-text-field>
        </form>
        <v-chip label class="butn white--text" style="background: #0277BD" @click="submit">Submit</v-chip>
        <div v-html="error" class="err"></div>
        <p class="inq">Cancel Reset? <a @click="navigateTo({name: 'Signin'})">Log In</a></p>
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
      confirm: '',
      password: '',
      error: null
    }
  },
  methods: {
    async submit () {
      try {
        if (this.password && this.password === this.confirm && this.$route.query.code) {
          const response = await AuthenticationService.changePassword({
            newPassword: this.password,
            code: this.$route.query.code
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          const token = response.data.token
          document.cookie = cookie.serialize('token', token, {
            maxAge: 30 * 24 * 60 * 60
          })
          this.$router.push({
            name: 'Signin'
          })

          // console.log(response.data)
        } else {
          if (!this.password) {
            console.log('password is null')
          }
          if (this.password !== this.confirm) {
            console.log('passwords do not match')
          }
          if (!this.$route.query.code) {
            console.log('invalid code supllied')
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {}
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
.form-holder{
  margin: 13rem auto
}
.title{
  margin-left: 27%;
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
