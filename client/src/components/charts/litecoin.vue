<template>
  <!-- TradingView Widget BEGIN -->
  <v-flex id="ltc" class="tradingview-widget-container">
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
    let ltcticker = document.createElement('script')
    ltcticker.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js'
    let ltcobj = document.createTextNode(`{
      "symbol": "COINBASE:LTCUSD",
      "width": "390",
      "locale": "en"
    }`)
    ltcticker.appendChild(ltcobj)
    document.getElementById('ltc').appendChild(ltcticker)
  }
}
</script>
