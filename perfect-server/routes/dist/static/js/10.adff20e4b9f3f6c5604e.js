webpackJsonp([10],{VNb6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Xxa5"),r=n.n(a),o=n("exGp"),s=n.n(o),i=n("OxWs"),c=n("XDND"),u=n("ma9O"),l={name:"Dashboard",data:function(){return{error:null,currentView:"Look",page:""}},mounted:function(){this.fetchUser(),document.getElementById("look").classList.add("take"),this.page="User Profile"},methods:{fetchUser:function(){var e=this;return s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.fetchWithToken("/api/user/");case 3:e.response=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.error=t.t0.response.data.error;case 9:case"end":return t.stop()}},t,e,[[0,6]])}))()},navigateTo:function(e){var t=this;return s()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.$router.push(e);case 1:case"end":return n.stop()}},n,t)}))()},look:function(){var e=this;return s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.currentView="Look",e.page="User Profile",document.getElementById("edit").classList.contains("take")&&(document.getElementById("edit").classList.remove("take"),document.getElementById("look").classList.add("take"));case 3:case"end":return t.stop()}},t,e)}))()},edit:function(){var e=this;return s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.currentView="Edit",e.page="Edit User Data",document.getElementById("look").classList.contains("take")&&(document.getElementById("look").classList.remove("take"),document.getElementById("edit").classList.add("take"));case 3:case"end":return t.stop()}},t,e)}))()},reload:function(){window.location.reload()}},components:{Edit:i.default,Look:c.default}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"in-head",attrs:{xs12:"","mt-3":""}},[n("div",{staticClass:"big"},[e._v("Profile")]),e._v(" "),n("div",{staticStyle:{"margin-top":"2em"}},[n("a",{on:{click:function(t){e.reload()}}},[n("v-icon",[e._v("home")])],1),e._v(" "),n("v-icon",[e._v("chevron_right")]),e._v(" "),n("span",[e._v(e._s(e.page))])],1)]),e._v(" "),n("v-flex",{staticClass:"scrollspy",attrs:{xs12:"","mt-4":""}},[n("ul",[n("li",[n("a",{attrs:{id:"look"},on:{click:function(t){e.look()}}},[e._v("Overview")])]),e._v(" "),n("li",[n("a",{attrs:{id:"edit"},on:{click:function(t){e.edit()}}},[e._v("Manage Profile")])])])]),e._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("keep-alive",[n(e.currentView,{tag:"component"})],1)],1)],1)],1)},staticRenderFns:[]};var v=n("VU/8")(l,d,!1,function(e){n("iM/X")},null,null);t.default=v.exports},"iM/X":function(e,t){}});
//# sourceMappingURL=10.adff20e4b9f3f6c5604e.js.map