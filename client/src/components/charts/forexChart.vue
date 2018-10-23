<template>
  <!-- TradingView Widget BEGIN -->
  <v-layout row wrap>
    <v-flex xs12 id="forex-widget" class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com" rel="noopener" target="_blank"></a></div>
    </v-flex>
  </v-layout>
  <!-- TradingView Widget END -->
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    let forex = document.createElement('script')
    forex.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
    let obj = document.createTextNode(`{
    "width": 500,
    "height": 500,
    "symbol": "BITFINEX:BTCUSD",
    "locale": "en",
    "interval": "1D"
  }`)
    forex.appendChild(obj)
    document.getElementById('forex-widget').appendChild(forex)
  }
}
</script>
