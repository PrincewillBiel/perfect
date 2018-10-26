<template>
  <div class="">
    <div class="info-war">
      <div class="location">
        <ul>
          <li><i class="fas fa-envelope"></i> support@perfectfunding.org</li>
          <li><i class="fas fa-map-marker-alt"></i> 1711 Franklin Street, Opelika, Alabama.</li>
          <li><i class="fas fa-mobile-alt"></i> +1 (334) 819-1740</li>
        </ul>
      </div>
      <div class="translate">
        <v-btn flat ripple style="color: #FFB300; background-color: #0277BD; border: 1px solid #FFB300; height: 2em; padding: 0 2em" v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'Signin'})">Log In</v-btn>
        <v-btn flat ripple style="color: #FFB300; background-color: #0277BD; border: 1px solid #FFB300; height: 2em; padding: 0 2em" v-if="$store.state.isUserLoggedIn" @click="logout" class="tab">Log Out</v-btn>
      </div>
    </div>
    <v-toolbar color="white" style="z-index: 999" class="nav">
      <v-toolbar-title class="title"><a @click="navigateTo({name: 'Index'})"><img class="logo" src="/static/img/pflogo.png" alt=""></a></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="mobile" @click="openCanvas"><i class="fas fa-bars"></i></v-toolbar-side-icon>
      <v-toolbar-items class="bar-bar tab">
        <v-btn flat ripple class="bttn" style="color: #0277BD" @click="navigateTo({name: 'Index'})">Home</v-btn>
        <v-menu transition="slide-x-transition" open-on-hover bottom right>
          <v-btn flat style="color: #0277BD" slot="activator">
            ACCOUNT
          </v-btn>
          <v-card color="white">
            <v-btn flat style="color: #0277BD" v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'Signin'})">Log In</v-btn>
            <v-divider></v-divider>
            <v-btn flat style="color: #0277BD" v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'Signup'})">Register</v-btn>
            <v-divider></v-divider>
            <v-btn flat style="color: #0277BD" v-if="$store.state.isUserLoggedIn" @click="navigateTo({name: 'Dashboard'})">Dashboard</v-btn>
            <v-divider></v-divider>
            <v-btn flat style="color: #0277BD" v-if="$store.state.isUserLoggedIn" @click="logout" class="tab">Log Out</v-btn>
          </v-card>
        </v-menu>
        <v-menu transition="slide-x-transition" open-on-hover bottom right>
          <v-btn flat style="color: #0277BD" slot="activator">
            COMPANY
          </v-btn>
          <v-card color="white">
            <v-btn flat style="color: #0277BD" @click="navigateTo({name: 'About'})">About Us</v-btn>
            <v-divider></v-divider>
            <v-btn flat style="color: #0277BD" @click="navigateTo({name: 'Policy'})">Our Policies</v-btn>
            <v-divider></v-divider>
            <v-btn flat style="color: #0277BD" @click="navigateTo({name: 'FAQ'})">FAQs and Answers</v-btn>
          </v-card>
        </v-menu>
        <div class="">
          <translate />
        </div>
      </v-toolbar-items>
    </v-toolbar>
    <div id="myOffcanvas" class="offcanvas">
      <a class="closeOffcanvas" @click="closeCanvas"><i class="fa fa-times"></i></a>
      <a class="link" @click="navigateTo({name: 'Index'})">Home</a>
      <a class="link" v-if="$store.state.isUserLoggedIn" @click="navigateTo({name: 'Dashboard'})">Dashboard</a>
      <a class="link collapsible">Company</a>
      <div class="content">
        <ul>
          <li><a class="link" @click="navigateTo({name: 'About'})">About Us</a></li>
          <li><a class="link" @click="navigateTo({name: 'Policy'})">Our Policies</a></li>
          <li><a class="link" @click="navigateTo({name: 'FAQ'})">FAQs and Answers</a></li>
        </ul>
      </div>
      <a class="link" v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'Signup'})">Register</a>
      <a class="link" v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'Signin'})">Log In</a>
      <a v-if="$store.state.isUserLoggedIn" @click="logout">Log Out</a>
      <div></div>
    </div>
  </div>
</template>
<script>
import Translate from '@/components/translate/google.vue'
import cookie from 'cookie'
export default {
  data () {
    return {
    }
  },
  mounted () {
    let coll = document.getElementsByClassName('collapsible')
    let i

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', function () {
        this.classList.toggle('active')
        let content = this.nextElementSibling
        if (content.style.maxHeight) {
          content.style.maxHeight = null
        } else {
          content.style.maxHeight = content.scrollHeight + 'px'
        }
      })
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
      this.closeCanvas()
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      document.cookie = cookie.serialize('token', '', {
        maxAge: -1
      })
      // force a reload of al current queries now that user is
      // logged out, so we don't accidentally leave state around
      this.$router.push({
        name: 'Index'
      })
    },
    openCanvas () {
      document.getElementById('myOffcanvas').style.width = '90%'
      document.getElementById('myOffcanvas').style.opacity = '1'
    },
    closeCanvas () {
      document.getElementById('myOffcanvas').style.width = '0%'
      document.getElementById('myOffcanvas').style.opacity = '0'
    }
  },
  components: {
    Translate
  }
}
</script>
<style scoped>
.active:after {
  content: "-";
}
.closeOffcanvas{
  margin-left: 1em
}
.collapsible{
  cursor: pointer;
  color: #0277BD
}
.collapsible:after {
  content: "+";
  font-size: 13px;
  color: #0277BD;
  float: right;
  margin-left: 5px;
  margin-top: 5px
}
.content {
  padding: 0 1.125em;
  font-size: 1em;
  overflow: hidden;
  max-height: 0;
  background-color: #F0F0F0;
  transition: max-height 0.2s ease-out
}
.content ul{
  list-style-type: none
}
.content li{
  display: block;
  width: 100%
}
.control{
  list-style-type: none
}
.control li:last-child{
  margin-left: 50%
}
.control li{
  display: inline-block
}
.fa-angle-down{
  margin-left: 0.5em;
  font-size: 1.2em
}
.fa-times{
  font-size: 2em;
  text-align: center;
}
.fa-caret-down{
  font-size: 1em;
  margin-left: 70%
}
.fa-bars{
  font-size: 2em;
  color: #0277BD
}
/*.icon{
  font-size: 2em;
  color: #0277BD
}*/
.info-war {
  display: none
}
.link {
  border-bottom: 1px solid #81D4FA;
}
.location {
  padding-top: 0.4em;
  width: 87%
}
.location i{
  color: #FFB300
}
.location li {
  margin-left: 2em
}
.logo {
  width: 100%;
  height: 2.5em;
  margin-top: 0.6em
}
.m-logo{
  width: 100%;
  height: 4em
}
.nav{
  height: 4.5em
}
.offcanvas {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: #FFF;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 4em
}
.offcanvas a {
  padding: 0.5em 0.5em 0.5em 2em;
  text-decoration: none;
  font-size: 1.1em;
  color: #0277BD;
  opacity: 0.8;
  display: block;
  transition: 0.3s
}
.offcanvas a:hover {
  opacity: 1
}
.offcanvas .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
.show {
  display: none
}
 .tab {
   display: none
 }
 .title {
   width: 2.5em
 }
 .title a {
   width: 100%
 }
 .translate {
   width: 10%
 }
@media screen and (max-height: 450px) {
  .offcanvas {padding-top: 15px;}
  .offcanvas a {font-size: 18px;}
}
@media (min-width: 600px) {
  .fa-bars{
    margin-top: 0.5em;
    font-size: 2.5em;
    color: #0277BD
  }
  .logo{
    width: 100%;
    height: 2.6em;
    margin-top: 0.7em
  }
  .title {
    width: 2.7em
  }
  .title a {
    width: 100%
  }
}
@media (min-width: 750px) {
  .bar-bar {
    font-size: 0.8em;
    padding-top: 1em
  }
  .mobile{
    display: none
  }
  .tab{
    display: inline-flex;
  }
}
@media (min-width: 800px) {
  .bar-bar {
    font-size: 0.8em;
    padding-top: 0.6em
  }
  .info-war {
    background: #0277BD;
    display: flex;
    flex-flow: row wrap;
    height: 3em;
    padding-top: 0.2em;
    width: 100%;
    z-index: 999
  }
  .info-war ul {
    text-decoration: none
  }
  .info-war li {
    display: inline
  }
  .logo {
    width: 44%;
    height: 2.5em;
    margin-top: 0.6em
  }
  .nav {
    height: 5em
  }
  .title{
    width: 6em
  }
  .title a {
    width: 100%
  }
}
</style>
