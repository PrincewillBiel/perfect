<template>
  <!-- TradingView Widget BEGIN -->
  <v-flex id="bch" class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com" rel="noopener" target="_blank"></a></div>
  </v-flex>
  <!-- TradingView Widget END -->
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    let bchticker = document.createElement('script')
    bchticker.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js'
    let bchobj = document.createTextNode(`{
      "symbol": "COINBASE:BCHUSD",
      "width": "390",
      "locale": "en"
    }`)
    bchticker.appendChild(bchobj)
    document.getElementById('bch').appendChild(bchticker)
  }
}
</script>
