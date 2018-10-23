<template>
  <!-- TradingView Widget BEGIN -->
  <div id="widget" class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com" rel="noopener" target="_blank"></a></div>
  </div>
  <!-- TradingView Widget END -->
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    let ticker = document.createElement('script')
    ticker.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js'
    let obj = document.createTextNode(`{
      "symbols": [
        {
          "title": "BTC/USD",
          "proName": "BITFINEX:BTCUSD"
        },
        {
          "title": "ETH/USD",
          "proName": "BITFINEX:ETHUSD"
        },
        {
          "title": "BCH/USD",
          "proName": "BITFINEX:BTCUSD"
        },
        {
          "title": "ETH/BTC",
          "proName": "BINANCE:ETHBTC"
        },
        {
          "title": "EUR/USD",
          "proName": "FX_IDC:EURUSD"
        }
      ],
      "locale": "en"
    }`)
    ticker.appendChild(obj)
    document.getElementById('widget').appendChild(ticker)
  }
}
</script>
