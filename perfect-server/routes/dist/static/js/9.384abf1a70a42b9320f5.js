webpackJsonp([9],{Jo4R:function(e,t){},hq4c:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("Xxa5"),a=s.n(o),r=s("exGp"),i=s.n(r),n=s("ma9O"),c={name:"Dashboard",data:function(){return{messages:[{id:1,title:"WELCOME",body:"We welcome you on behalf of the entire Perfect Funding team. Thank you for joining us.\n          We are pleased to inform you that your account is ready for mining investment. Please refer to the home page end for more information regarding funding and account activation procedures.\n          If you have any questions, contact customer service at support@perfectfunding.org. Our expert customer service team is always ready to attend to you."},{id:2,title:"CRUCIAL UPDATE",body:"We wish to reinstate our commitment to effective customer service and world class investment services. We always advise customers to NEVER send money to any individual provided wallets except from those on our website or otherwise provided by our official admin email on our website. Customers who do so, do so at their own risk. If you suspect any unwholesome practices, do not hesitate to write our support."},{id:3,title:"IMPORTANT MESSAGE",body:"Do not make payments to any external accounts or wallet address provided by any individuals (both from our workers, traders, account managers). In any case, please make sure you confirm from our official support email address. Always crosscheck the email address is same as that on our website before responding or replying to any email. If you have any issues, contact our customer care support@perfectfunding.org."},{id:4,title:"PAYMENTS AND FUNDS",body:"We do have staffs, but if anyone ever instructs you to make payment to any wallet address, email, or account individually or different from those provided only within our website or otherwise ONLY from our official email support@perfectfunding.org then it is SCAM. Please be vigilant and help us fight these crimes."}],page:"Notifications",response:""}},mounted:function(){this.fetchUser()},methods:{fetchUser:function(){var e=this;return i()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.a.fetchWithToken("/api/user/");case 3:e.response=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.error=t.t0.response.data.error;case 9:case"end":return t.stop()}},t,e,[[0,6]])}))()},reload:function(){window.location.reload()}},components:{}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"in-head",attrs:{xs12:"","mt-3":""}},[s("div",{staticClass:"big"},[e._v("Notifications")]),e._v(" "),s("div",{staticStyle:{"margin-top":"2em"}},[s("a",{on:{click:function(t){e.reload()}}},[s("v-icon",[e._v("home")])],1),e._v(" "),s("v-icon",[e._v("chevron_right")]),e._v(" "),s("span",[e._v(e._s(e.page))])],1)]),e._v(" "),s("v-flex",{attrs:{xs11:"","mx-auto":"","mt-4":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs1:"","mt-3":""}},[s("div",{staticClass:"line"},e._l(e.messages,function(t){return s("div",{key:t.id,staticClass:"circles"},[s("div",{staticClass:"c1 outer"},[s("div",{staticClass:"inner"},[s("v-icon",{staticClass:"f-icon",attrs:{color:"white"}},[e._v("fas fa-comments")])],1)])])}))]),e._v(" "),s("v-flex",{attrs:{xs10:"","mt-3":""}},e._l(e.messages,function(t){return s("div",{key:t.id,staticClass:"set"},[s("div",{staticClass:"arrow-right"}),e._v(" "),s("div",{staticClass:"message"},[s("h2",[e._v(e._s(t.title))]),e._v(" "),s("hr",{staticStyle:{color:"#FFD600"}}),e._v(" "),s("div",{staticClass:"message-body"},[e._v("\n              Hello, "+e._s(e.response.data.name)+". "+e._s(t.body)+"\n            ")])])])}))],1)],1)],1)},staticRenderFns:[]};var d=s("VU/8")(c,u,!1,function(e){s("Jo4R")},null,null);t.default=d.exports}});
//# sourceMappingURL=9.384abf1a70a42b9320f5.js.map