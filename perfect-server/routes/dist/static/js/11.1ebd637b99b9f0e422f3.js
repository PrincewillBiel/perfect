webpackJsonp([11],{"4krf":function(e,t){},kVQf:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Xxa5"),r=a.n(s),o=a("exGp"),n=a.n(o),l=a("ma9O"),i={data:function(){return{email:"",oldPassword:"",mobile:"",name:"",newPassword:"",loaded:!1,loading:!1,page:"Profile Settings",response:{},error:null}},mounted:function(){this.fetchUser()},methods:{fetchUser:function(){var e=this;return n()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.fetchWithToken("/api/user/");case 3:e.response=t.sent,e.name=e.response.data.name,e.email=e.response.data.email,e.mobile=e.response.data.mobile,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e.error=t.t0.response.data.error;case 12:case"end":return t.stop()}},t,e,[[0,9]])}))()},changePassword:function(){var e=this;return n()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loaded=!0,t.prev=1,t.next=4,l.a.fetchWithToken("/api/user/changePassword",{method:"post",data:{oldPassword:e.oldPassword,newPassword:e.newPassword}});case 4:e.loaded=!1,e.restart(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.loaded=!1;case 11:case"end":return t.stop()}},t,e,[[1,8]])}))()},editProfile:function(){var e=this;return n()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,l.a.fetchWithToken("/api/user/editProfile",{method:"post",data:{mobile:e.mobile}});case 4:e.loading=!1,e.restart(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.loading=!1;case 11:case"end":return t.stop()}},t,e,[[1,8]])}))()},restart:function(){window.location.reload()}},components:{}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"in-head",attrs:{xs12:"","mt-3":""}},[a("div",{staticClass:"big"},[e._v("Settings")]),e._v(" "),a("div",{staticStyle:{"margin-top":"2em"}},[a("a",{on:{click:function(t){e.restart()}}},[a("v-icon",[e._v("home")])],1),e._v(" "),a("v-icon",[e._v("chevron_right")]),e._v(" "),a("span",[e._v(e._s(e.page))])],1)]),e._v(" "),a("v-flex",{attrs:{xs10:"",sm7:"","mx-auto":"","mt-4":""}},[a("h2",{staticStyle:{"text-align":"center",color:"#0277BD"}},[e._v("Change Mobile")]),e._v(" "),a("v-text-field",{attrs:{label:"Username",outline:"",disabled:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),a("v-text-field",{attrs:{label:"Email",outline:"",disabled:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("v-text-field",{attrs:{label:"Mobile",outline:""},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading"},[e._v("Please wait...")]),e._v(" "),a("p",{staticClass:"err",domProps:{innerHTML:e._s(e.wallError)}}),e._v(" "),a("v-chip",{staticClass:"white--text",staticStyle:{"background-color":"#0277BD"},attrs:{label:""},on:{click:e.editProfile}},[e._v("Submit")]),e._v(" "),a("v-chip",{staticClass:"white--text",staticStyle:{"background-color":"#FFB300"},attrs:{label:""},on:{click:e.restart}},[e._v("Cancel")])],1),e._v(" "),a("v-flex",{attrs:{xs10:"",sm7:"","mx-auto":"","mt-4":""}},[a("h2",{staticStyle:{"text-align":"center",color:"#0277BD"}},[e._v("Change Password")]),e._v(" "),a("v-text-field",{attrs:{label:"Old Password",outline:""},model:{value:e.oldPassword,callback:function(t){e.oldPassword=t},expression:"oldPassword"}}),e._v(" "),a("v-text-field",{attrs:{label:"New Password",outline:""},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}}),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"loading"},[e._v("Please wait...")]),e._v(" "),a("p",{staticClass:"err",domProps:{innerHTML:e._s(e.wallError)}}),e._v(" "),a("v-chip",{staticClass:"white--text",staticStyle:{"background-color":"#0277BD"},attrs:{label:""},on:{click:e.changePassword}},[e._v("Submit")]),e._v(" "),a("v-chip",{staticClass:"white--text",staticStyle:{"background-color":"#FFB300"},attrs:{label:""},on:{click:e.restart}},[e._v("Cancel")])],1)],1)},staticRenderFns:[]};var d=a("VU/8")(i,c,!1,function(e){a("4krf")},null,null);t.default=d.exports}});
//# sourceMappingURL=11.1ebd637b99b9f0e422f3.js.map