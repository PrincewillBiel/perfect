webpackJsonp([18],{"+708":function(e,t,n){"use strict";var a={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;n("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,n,a,i,o,s,r,l,c,u,d,v,p,m){particlesJS("particles-js",{particles:{number:{value:n,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:a,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:i,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:r,distance:c,color:o,opacity:l,width:s},move:{enable:!0,speed:u,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:d,mode:v},onclick:{enable:p,mode:m},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},i={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},o=n("VU/8")(a,i,!1,null,null,null);t.a=o.exports},"7zck":function(e,t){},Cz8s:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("NR8e"),i=n("sp77"),o=n.n(i),s={data:function(){return{}},mounted:function(){var e=document.getElementsByClassName("collapsible"),t=void 0;for(t=0;t<e.length;t++)e[t].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})},methods:{navigateTo:function(e){this.$router.push(e),this.closeCanvas()},logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),document.cookie=o.a.serialize("token","",{maxAge:-1}),this.$router.push({name:"Index"})},openCanvas:function(){document.getElementById("myOffcanvas").style.width="90%",document.getElementById("myOffcanvas").style.opacity="1"},closeCanvas:function(){document.getElementById("myOffcanvas").style.width="0%",document.getElementById("myOffcanvas").style.opacity="0"}},components:{Translate:a.default}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("div",{staticClass:"info-war"},[e._m(0),e._v(" "),n("div",{staticClass:"translate"},[e.$store.state.isUserLoggedIn?e._e():n("v-btn",{staticStyle:{color:"#FFB300","background-color":"#0277BD",border:"1px solid #FFB300",height:"2em",padding:"0 2em"},attrs:{flat:"",ripple:""},on:{click:function(t){e.navigateTo({name:"Signin"})}}},[e._v("Log In")]),e._v(" "),e.$store.state.isUserLoggedIn?n("v-btn",{staticClass:"tab",staticStyle:{color:"#FFB300","background-color":"#0277BD",border:"1px solid #FFB300",height:"2em",padding:"0 2em"},attrs:{flat:"",ripple:""},on:{click:e.logout}},[e._v("Log Out")]):e._e()],1)]),e._v(" "),n("v-toolbar",{staticClass:"nav",staticStyle:{"z-index":"999"},attrs:{color:"white"}},[n("v-toolbar-title",{staticClass:"title"},[n("a",{on:{click:function(t){e.navigateTo({name:"Index"})}}},[n("img",{staticClass:"logo",attrs:{src:"/static/img/pflogo.png",alt:""}})])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-side-icon",{staticClass:"mobile",on:{click:e.openCanvas}},[n("i",{staticClass:"fas fa-bars"})]),e._v(" "),n("v-toolbar-items",{staticClass:"bar-bar tab"},[n("v-btn",{staticClass:"bttn",staticStyle:{color:"#0277BD"},attrs:{flat:"",ripple:""},on:{click:function(t){e.navigateTo({name:"Index"})}}},[e._v("Home")]),e._v(" "),n("v-menu",{attrs:{transition:"slide-x-transition","open-on-hover":"",bottom:"",right:""}},[n("v-btn",{staticStyle:{color:"#0277BD"},attrs:{slot:"activator",flat:""},slot:"activator"},[e._v("\n          ACCOUNT\n        ")]),e._v(" "),n("v-card",{attrs:{color:"white"}},[e.$store.state.isUserLoggedIn?e._e():n("v-btn",{staticStyle:{color:"#0277BD"},attrs:{flat:""},on:{click:function(t){e.navigateTo({name:"Signin"})}}},[e._v("Log In")]),e._v(" "),n("v-divider"),e._v(" "),e.$store.state.isUserLoggedIn?e._e():n("v-btn",{staticStyle:{color:"#0277BD"},attrs:{flat:""},on:{click:function(t){e.navigateTo({name:"Signup"})}}},[e._v("Register")]),e._v(" "),n("v-divider"),e._v(" "),e.$store.state.isUserLoggedIn?n("v-btn",{staticStyle:{color:"#0277BD"},attrs:{flat:""},on:{click:function(t){e.navigateTo({name:"Dashboard"})}}},[e._v("Dashboard")]):e._e(),e._v(" "),n("v-divider"),e._v(" "),e.$store.state.isUserLoggedIn?n("v-btn",{staticClass:"tab",staticStyle:{color:"#0277BD"},attrs:{flat:""},on:{click:e.logout}},[e._v("Log Out")]):e._e()],1)],1),e._v(" "),n("v-menu",{attrs:{transition:"slide-x-transition","open-on-hover":"",bottom:"",right:""}},[n("v-btn",{staticStyle:{color:"#0277BD"},attrs:{slot:"activator",flat:""},slot:"activator"},[e._v("\n          COMPANY\n        ")]),e._v(" "),n("v-card",{attrs:{color:"white"}},[n("v-btn",{staticStyle:{color:"#0277BD"},attrs:{flat:""},on:{click:function(t){e.navigateTo({name:"About"})}}},[e._v("About Us")]),e._v(" "),n("v-divider"),e._v(" "),n("v-btn",{staticStyle:{color:"#0277BD"},attrs:{flat:""},on:{click:function(t){e.navigateTo({name:"Policy"})}}},[e._v("Our Policies")])],1)],1),e._v(" "),n("div",{},[n("translate")],1)],1)],1),e._v(" "),n("div",{staticClass:"offcanvas",attrs:{id:"myOffcanvas"}},[n("a",{staticClass:"closeOffcanvas",on:{click:e.closeCanvas}},[n("i",{staticClass:"fa fa-times"})]),e._v(" "),n("a",{staticClass:"link",on:{click:function(t){e.navigateTo({name:"Index"})}}},[e._v("Home")]),e._v(" "),e.$store.state.isUserLoggedIn?n("a",{staticClass:"link",on:{click:function(t){e.navigateTo({name:"Dashboard"})}}},[e._v("Dashboard")]):e._e(),e._v(" "),n("a",{staticClass:"link collapsible"},[e._v("Company")]),e._v(" "),n("div",{staticClass:"content"},[n("ul",[n("li",[n("a",{staticClass:"link",on:{click:function(t){e.navigateTo({name:"About"})}}},[e._v("About Us")])]),e._v(" "),n("li",[n("a",{staticClass:"link",on:{click:function(t){e.navigateTo({name:"Policy"})}}},[e._v("Our Policies")])])])]),e._v(" "),e.$store.state.isUserLoggedIn?e._e():n("a",{staticClass:"link",on:{click:function(t){e.navigateTo({name:"Signup"})}}},[e._v("Register")]),e._v(" "),e.$store.state.isUserLoggedIn?e._e():n("a",{staticClass:"link",on:{click:function(t){e.navigateTo({name:"Signin"})}}},[e._v("Log In")]),e._v(" "),e.$store.state.isUserLoggedIn?n("a",{on:{click:e.logout}},[e._v("Log Out")]):e._e(),e._v(" "),n("div")])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"location"},[t("ul",[t("li",[t("i",{staticClass:"fas fa-envelope"}),this._v(" support@perfectfunding.org")]),this._v(" "),t("li",[t("i",{staticClass:"fas fa-map-marker-alt"}),this._v(" 1711 Franklin Street, Opelika, Alabama.")]),this._v(" "),t("li",[t("i",{staticClass:"fas fa-mobile-alt"}),this._v(" +1 (334) 819-1740")])])])}]};var l=n("VU/8")(s,r,!1,function(e){n("R6E4")},"data-v-554be003",null);t.default=l.exports},DZgw:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i=n("Cz8s"),o=n("PtZC"),s={name:"App",data:function(){return{}},components:{PageHeader:i.default,TawkTo:o.default}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("v-app",[t("page-header"),this._v(" "),t("main",[t("div",{staticClass:"contain"},[t("router-view")],1)]),this._v(" "),t("tawk-to")],1)],1)},staticRenderFns:[]};var l=n("VU/8")(s,r,!1,function(e){n("DZgw")},null,null).exports,c=n("/ocq");function u(e){return function(){return n("mUJ2")("./"+e+".vue")}}a.a.use(c.a);var d=new c.a({mode:"history",routes:[{path:"/",name:"Index",component:u("index")},{path:"/about",name:"About",component:u("about-us")},{path:"/dasboard",name:"Dashboard",component:u("dashboard")},{path:"/markets/nfp",name:"NFP",component:u("test")},{path:"/payments",name:"Payments",component:u("payment")},{path:"/pf_policies",name:"Policy",component:u("policy")},{path:"/login",name:"Signin",component:u("sign-in")},{path:"/register/:code?",name:"Signup",component:u("sign-up")},{path:"/reset_password",name:"Reset",component:u("reset")},{path:"/forgot/change",name:"Link",component:u("reset_link")},{path:"/test",name:"Test",component:u("test")}]}),v=n("9JMe"),p=n("NYxO"),m=n("424j");a.a.use(p.a);var f=new p.a.Store({strict:!0,plugins:[Object(m.a)()],state:{token:null,user:"",isUserLoggedIn:!1},mutations:{setToken:function(e,t){e.token=t,e.isUserLoggedIn=!!t},setUser:function(e,t){e.user=t}},actions:{setToken:function(e,t){(0,e.commit)("setToken",t)},setUser:function(e,t){(0,e.commit)("setUser",t)}}}),g=n("3EgV"),_=n.n(g),h=n("wvfG"),b=n.n(h),y=n("mM94");n("7zck"),n("gJtD"),n("csSS");a.a.config.productionTip=!1,a.a.use(b.a),a.a.use(_.a,{iconfont:"mdi"}),a.a.use(y.a),Object(v.sync)(f,d),new a.a({el:"#app",router:d,store:f,components:{App:l},template:"<App/>"})},NR8e:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{}},mounted:function(){var e=document.createElement("script"),t=document.createTextNode("\n      var duplicate_google_translate_counter = 0 // this stops google adding button multiple times\n      function googleTranslateElementInit() {\n       if (duplicate_google_translate_counter == 0) {\n          new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');\n       }\n       duplicate_google_translate_counter++;\n    }");e.appendChild(t);var n=document.createElement("script");n.src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",document.getElementById("google_translate_element").appendChild(e),document.getElementById("google_translate_element").appendChild(n)}},i={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"google_translate_element"}})},staticRenderFns:[]};var o=n("VU/8")(a,i,!1,function(e){n("jMK4")},null,null);t.default=o.exports},PtZC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{}},mounted:function(){var e=document.createElement("script"),t=document.createTextNode("var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();\n    (function(){\n    var s1=document.createElement(\"script\"),s0=document.getElementsByTagName(\"script\")[0];\n    s1.async=true;\n    s1.src='https://embed.tawk.to/5bcf3aaf476c2f239ff5a774/default';\n    s1.charset='UTF-8';\n    s1.setAttribute('crossorigin','*');\n    s0.parentNode.insertBefore(s1,s0);\n    })();");e.appendChild(t),document.getElementById("tawk").appendChild(e)}},i={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"tawk"}})},staticRenderFns:[]},o=n("VU/8")(a,i,!1,null,null,null);t.default=o.exports},R6E4:function(e,t){},csSS:function(e,t){},gJtD:function(e,t){},jMK4:function(e,t){},mUJ2:function(e,t,n){var a={"./about-us.vue":["EKAH",0,3],"./charts/btc.vue":["lYLI",0],"./charts/btcash.vue":["0HNf",0],"./charts/chartCrypto.vue":["t5wI",16],"./charts/ether.vue":["UL4c",0],"./charts/forexChart.vue":["oLWT",0],"./charts/forexOv.vue":["bANB",15],"./charts/litecoin.vue":["zXF4",0],"./dashboard.vue":["mcif",0,2],"./footer.vue":["mzkE",0],"./header.vue":["Cz8s"],"./index.vue":["dAjm",0,4],"./policy.vue":["bfBD",0,13],"./reset.vue":["Jy7u",0,12],"./reset_link.vue":["ZSnO",0,5],"./sign-in.vue":["Arnv",0,8],"./sign-up.vue":["SJGk",0,1],"./translate/google.vue":["NR8e"],"./translate/tawkto.vue":["PtZC"],"./user/account.vue":["JCHq",0,6],"./user/home.vue":["k4Tb",0,14],"./user/invest-pop/fund.vue":["Gvan",0],"./user/invest-pop/pop.vue":["BHs4",0],"./user/notify.vue":["hq4c",0,10],"./user/overview/bonus.vue":["/l1r",0],"./user/overview/investment.vue":["1GHi",0],"./user/overview/overview.vue":["bo0H",0],"./user/profile.vue":["VNb6",0,9],"./user/settings.vue":["kVQf",0,11],"./user/view-edit/edit.vue":["OxWs",0],"./user/view-edit/look.vue":["XDND",0],"./user/withdraw.vue":["e5HX",0,7]};function i(e){var t=a[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}i.keys=function(){return Object.keys(a)},i.id="mUJ2",e.exports=i}},["NHnr"]);
//# sourceMappingURL=app.d1aec892a5d4dc726a6b.js.map