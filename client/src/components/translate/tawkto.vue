<template>
  <div id="tawk"></div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    let tawkTo = document.createElement('script')
    let func = document.createTextNode(`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5bcf3aaf476c2f239ff5a774/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();`)
    tawkTo.appendChild(func)

    document.getElementById('tawk').appendChild(tawkTo)
  }
}
</script>
