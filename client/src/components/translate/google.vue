<template>
  <div id="google_translate_element"></div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    let translator = document.createElement('script')
    let func = document.createTextNode(`
      var duplicate_google_translate_counter = 0 // this stops google adding button multiple times
      function googleTranslateElementInit() {
       if (duplicate_google_translate_counter == 0) {
          new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');
       }
       duplicate_google_translate_counter++;
    }`)
    translator.appendChild(func)

    let translater = document.createElement('script')
    translater.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'

    document.getElementById('google_translate_element').appendChild(translator)
    document.getElementById('google_translate_element').appendChild(translater)
  }
}
</script>

<style media="screen">
#google_translate_element {
}
@media (min-width: 750px) {
  #google_translate_element {
    height: 5em;
    padding-top: 1.2em
  }
}
@media (min-width: 800px) {
  #google_translate_element {
    padding-top: 1.8em
  }
}
</style>
