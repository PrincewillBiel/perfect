<template>
  <!-- TradingView Widget BEGIN -->
  <v-flex id="eth" class="tradingview-widget-container">
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
    let ethticker = document.createElement('script')
    ethticker.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js'
    let ethobj = document.createTextNode(`{
      "symbol": "BITFINEX:ETHUSD",
      "width": "390",
      "locale": "en"
    }`)
    ethticker.appendChild(ethobj)
    document.getElementById('eth').appendChild(ethticker)
  }
}
</script>
