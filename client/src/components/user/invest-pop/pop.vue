<template id="">
  <v-layout row wrap>
    <v-flex xs11 sm6 mx-auto mt-4>
      <v-text-field
        v-model="name"
        label="Username"
        outline
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="Email"
        outline
      ></v-text-field>
      <div>
        <input type="file" @change="onFileChanged($event)">
        <p v-show="loaded" class="loading">Please wait...</p>
        <p v-html="popError" class="err"></p>
        <v-chip label @click="onUpload" class="white--text" style="background-color: #0277BD">Upload Picture</v-chip>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
import tokenApi from '@/api/tokenApi'
export default {
  data () {
    return {
      // database variables
      email: '',
      name: '',
      popError: '',
      selectedFile: '',
      // page variables
      loaded: false,
      page: 'Proof of Payment',
      response: {},
      error: null
    }
  },
  mounted () {
    this.fetchUser()
  },
  methods: {
    async fetchUser () {
      try {
        this.response = await tokenApi.fetchWithToken('/api/user/')
        this.name = this.response.data.name
        this.email = this.response.data.email
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    onFileChanged (e) {
      this.selectedFile = e.target.files[0]
    },
    async onUpload () {
      this.loaded = true
      const uploadPreset = 'uyff0kfy'
      const cloudName = 'dgq5corvs'

      let file = this.selectedFile // from upload button
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', uploadPreset)
      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData
        )
        // console.log(response)
        // do api post to save file details to db
        tokenApi.fetchWithToken('/api/user/pop', {
          method: 'post',
          data: {
            proof: response.data
          }
        })
        this.loaded = false
        this.restart()
      } catch (error) {
        this.loaded = false
        this.popError = 'Please upload a valid file'
        // console.log(this.error)
      }
    },
    restart () {
      window.location.reload()
    }
  },
  components: {
  }
}
</script>

<style>
.loading {
  color: #0277BD
}
</style>
