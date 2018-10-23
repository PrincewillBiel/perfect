<template>
  <!-- TradingView Widget BEGIN -->
  <div id="overview-widget" class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div  class="tradingview-widget-copyright"><a href="https://www.tradingview.com" rel="noopener" target="_blank"></a></div>
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
    let overview = document.createElement('script')
    overview.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
    let obj = document.createTextNode(`{
    "belowLineFillColorGrowing": "rgba(60, 188, 152, 0.05)",
    "gridLineColor": "rgba(233, 233, 234, 1)",
    "scaleFontColor": "rgba(218, 221, 224, 1)",
    "title": "Currencies",
    "tabs": [
      {
        "title_raw": "Major",
        "symbols": [
          {
            "s": "FX_IDC:EURUSD"
          },
          {
            "s": "FX_IDC:USDJPY"
          },
          {
            "s": "FX_IDC:GBPUSD"
          },
          {
            "s": "FX_IDC:AUDUSD"
          },
          {
            "s": "FX_IDC:USDCAD"
          },
          {
            "s": "FX_IDC:USDCHF"
          }
        ],
        "title": "Major"
      },
      {
        "title_raw": "Minor",
        "symbols": [
          {
            "s": "FX_IDC:EURGBP"
          },
          {
            "s": "FX_IDC:EURJPY"
          },
          {
            "s": "FX_IDC:GBPJPY"
          },
          {
            "s": "FX_IDC:CADJPY"
          },
          {
            "s": "FX_IDC:GBPCAD"
          },
          {
            "s": "FX_IDC:EURCAD"
          }
        ],
        "title": "Minor"
      },
      {
        "title_raw": "Exotic",
        "symbols": [
          {
            "s": "FX_IDC:USDSEK"
          },
          {
            "s": "FX_IDC:USDMXN"
          },
          {
            "s": "FX_IDC:USDZAR"
          },
          {
            "s": "FX_IDC:EURTRY"
          },
          {
            "s": "FX_IDC:EURNOK"
          },
          {
            "s": "FX_IDC:GBPPLN"
          }
        ],
        "title": "Exotic"
      }
    ],
    "plotLineColorFalling": "rgba(255, 74, 104, 1)",
    "plotLineColorGrowing": "rgba(60, 188, 152, 1)",
    "showChart": true,
    "title_link": "/markets/currencies/rates-all/",
    "locale": "en",
    "symbolActiveColor": "rgba(242, 250, 254, 1)",
    "belowLineFillColorFalling": "rgba(255, 74, 104, 0.05)",
    "height": "500",
    "width": "100%"
  }`)
    overview.appendChild(obj)
    document.getElementById('overview-widget').appendChild(overview)
  }
}
</script>
