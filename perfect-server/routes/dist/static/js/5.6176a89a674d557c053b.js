webpackJsonp([5],{"/9SF":function(e,t){},ZSnO:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Xxa5"),o=s.n(a),r=s("exGp"),n=s.n(r),c=s("sp77"),i=s.n(c),l=s("CLm6"),d={data:function(){return{confirm:"",password:"",error:null}},methods:{submit:function(){var e=this;return n()(o.a.mark(function t(){var s,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.password||e.password!==e.confirm||!e.$route.query.code){t.next=12;break}return t.next=4,l.a.changePassword({newPassword:e.password,code:e.$route.query.code});case 4:s=t.sent,e.$store.dispatch("setToken",s.data.token),e.$store.dispatch("setUser",s.data.user),a=s.data.token,document.cookie=i.a.serialize("token",a,{maxAge:2592e3}),e.$router.push({name:"Signin"}),t.next=15;break;case 12:e.password||console.log("password is null"),e.password!==e.confirm&&console.log("passwords do not match"),e.$route.query.code||console.log("invalid code supllied");case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.log(t.t0);case 20:case"end":return t.stop()}},t,e,[[0,17]])}))()},navigateTo:function(e){this.$router.push(e)}},components:{}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"down",attrs:{xs12:"","mx-auto":"","elevation-2":""}},[s("vue-particles",{attrs:{color:"#dedede",particleOpacity:.7,particlesNumber:100,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1),e._v(" "),s("v-flex",{staticClass:"up",attrs:{xs11:"",sm7:"",md4:"","mx-auto":"","elevation-2":""}},[s("v-toolbar",{staticClass:"head",staticStyle:{background:"#0288D1"},attrs:{flat:"",dense:""}},[s("v-toolbar-title",{staticClass:"white--text title"},[e._v("NEW PASSWORD")])],1),e._v(" "),s("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[s("form",{attrs:{autocomplete:"off"}},[s("v-text-field",{attrs:{label:"New Password",type:"password",autocomplete:"new-password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),s("v-text-field",{attrs:{label:"Confirm Password",type:"password",autocomplete:"new-password"},model:{value:e.confirm,callback:function(t){e.confirm=t},expression:"confirm"}})],1),e._v(" "),s("v-chip",{staticClass:"butn white--text",staticStyle:{background:"#0277BD"},attrs:{label:""},on:{click:e.submit}},[e._v("Submit")]),e._v(" "),s("div",{staticClass:"err",domProps:{innerHTML:e._s(e.error)}}),e._v(" "),s("p",{staticClass:"inq"},[e._v("Cancel Reset? "),s("a",{on:{click:function(t){e.navigateTo({name:"Signin"})}}},[e._v("Log In")])])],1)],1)],1)},staticRenderFns:[]};var u=s("VU/8")(d,p,!1,function(e){s("/9SF")},"data-v-facbda8e",null);t.default=u.exports}});
//# sourceMappingURL=5.6176a89a674d557c053b.js.map