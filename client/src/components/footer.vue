<template id="">
  <v-flex xs12>
    <div class="foooter">
      <v-layout row wrap>
        <v-flex xs10 md3 mx-auto class="foot-div">
          <ul>
            <h3>Contact Us</h3>
            <li><i class="fas fa-phone"></i> +1 (334) 819-1740</li>
            <li><i class="fas fa-envelope"></i> support@perfectfunding.org</li>
            <li><i class="fas fa-map-marker-alt"></i>
1711 Franklin Street,
Opelika, Alabama
United States.
            </li>
          </ul>
        </v-flex>
        <v-flex xs10 md3 mx-auto class="foot-use">
          <h3>Useful Links</h3>
          <ul>
            <li><a @click="navigateTo({name: 'Index'})">Home</a></li>
            <li v-if="!$store.state.isUserLoggedIn"><a @click="navigateTo({name: 'Signup'})">Register</a></li>
            <li v-if="!$store.state.isUserLoggedIn"><a @click="navigateTo({name: 'Signin'})">Log In</a></li>
            <li v-if="$store.state.isUserLoggedIn"><a @click="navigateTo({name: 'Dashboard'})">Dashboard</a></li>
            <li><a @click="navigateTo({name: 'Policy'})">Our Policies</a></li>
            <li><a @click="navigateTo({name: 'About'})">About Us</a></li>
          </ul>
        </v-flex>
      </v-layout>
    </div>
    <div class="when">
      <strong>Perfect Funding</strong> — &copy;2018
    </div>
  </v-flex>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
    }
  },
  methods: {
    async navigateTo (route) {
      await this.$router.push(route)
    }
  }
}
</script>
<style scope>
.fas{
  color: #FFB300;
}
.form input{
  border: 1px solid #FFF;
  margin-bottom: 1em;
  width: 100%;
  border-radius: 5px;
  height: 2em
}
.foooter{
  background-color: #040D14;
  width: 100%;
  color: #FFF;
  padding-top: 3em;
  padding-bottom: 3em;
  font-size: 1.2em
}
.foooter ul{
  list-style-type: none
}
.footer li{
  padding: 2em
}
.foot-div{
  margin-bottom: 1em;
  color: #FFF
}
.foot-use{
  margin-bottom: 1em;
  color: #FFF
}
.foot-use a{
  color: #0277BD
}
.when{
  width: 100%;
  color: #FFB300;
  background-color: #0277BD;
  text-align: center
}
</style>
