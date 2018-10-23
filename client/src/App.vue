<template>
  <div id="app">
    <v-app>
      <page-header />
      <main>
        <div class="contain">
          <router-view />
        </div>
      </main>
      <tawk-to />
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/header.vue'
import TawkTo from '@/components/translate/tawkto.vue'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    PageHeader,
    TawkTo
  }
}
</script>
<style src="./assets/css/perfect.css">
</style>
