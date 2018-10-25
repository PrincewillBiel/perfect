<template id="">
  <v-layout row wrap>
    <v-flex xs12 mt-3 class="jail">
      <carousel :autoplay="true" :loop="true" :nav="false" :dots="false">
        <div class="test"><img src="/static/img/sc.jpg"></div>
        <div class="test"><img src="/static/img/citigroup.png"></div>
        <div class="test"><img src="/static/img/hathawaylogo.jpg"></div>
        <div class="test"><img src="/static/img/bnp.png"></div>
        <div class="test"><img src="/static/img/bitmain2.png"></div>
      </carousel>
    </v-flex>
  </v-layout>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {
    carousel
  }
}
</script>

<style>
.test {
  height: 10em
}
.test img {
  height: 100%
}
.jail {
  height: 1em
}
@media (min-width: 600px) {

}
@media (min-width: 800px) {
  .logos-1 {
    width: 50%;
    height: 10em;
    margin: 1em auto 0
  }
  .logos-2 {
    width: 50%;
    height: 10em;
    margin: auto
  }
  .logos-3 {
    width: 50%;
    height: 10em;
    margin: auto
  }
  .logos-4 {
    width: 50%;
    height: 10em;
    margin: auto
  }
  .logos-5 {
    width: 50%;
    height: 10em;
    margin: auto
  }
}
</style>
