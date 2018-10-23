<template>
  <!-- TradingView Widget BEGIN -->
  <v-flex id="btc" class="tradingview-widget-container">
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
    let btcticker = document.createElement('script')
    btcticker.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js'
    let btcobj = document.createTextNode(`{
     "symbol": "COINBASE:BTCUSD",
     "width": "390",
     "locale": "en"
    }`)
    btcticker.appendChild(btcobj)
    document.getElementById('btc').appendChild(btcticker)
  }
}
</script>
