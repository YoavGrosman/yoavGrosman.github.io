(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],f=0,d=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("19b3"),n=a.n(r);n.a},"19b3":function(t,e,a){},3890:function(t,e,a){"use strict";var r=a("b3c5"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("router-view")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("img",{attrs:{src:t.image}})])},o=[],c={name:"Header",data:function(){return{image:a("cf05")}}},u=c,l=(a("3890"),a("2877")),f=Object(l["a"])(u,s,o,!1,null,"78da67fc",null),d=f.exports,p={name:"app",components:{Header:d}},m=p,h=(a("034f"),Object(l["a"])(m,n,i,!1,null,null,null)),v=h.exports,b=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container"},[t.loading?a("div",[a("h3",[t._v("...Loading")])]):t._e(),t.artists?a("ul",[a("router-link",{staticClass:"btn",attrs:{to:"/newArtist"}},[t._v("Add New Artist")]),t._l(t.artists,(function(t){return a("li",{key:t.id},[a("router-link",{attrs:{to:"/artist/"+t.artist_id}},[a("v-img",{attrs:{src:t.profilePic,"lazy-src":"https://picsum.photos/id/11/10/6","aspect-ratio":"1",contain:""}})],1)],1)}))],2):t._e()])},_=[],w=(a("4160"),a("159b"),a("96cf"),a("89ba")),y={name:"Home",data:function(){return{artists:[],loading:!1}},beforeCreated:function(){this.loading=!0},created:function(){this.getArtists()},methods:{getArtists:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.collection("artists").get();case 2:e=t.sent,a=[],e.forEach((function(t){var e=t.data();e.id=t.id,a.push(e)})),this.artists=a,this.loading=!1;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},P=y,k=a("6544"),x=a.n(k),j=a("adda"),O=Object(l["a"])(P,g,_,!1,null,"6d772877",null),C=O.exports;x()(O,{VImg:j["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"header"},[a("h3",[t._v("This is "+t._s(this.artist_name)+" - The #1 DJ in Sweden")]),a("v-img",{staticClass:"grey lighten-2",attrs:{src:t.artist_profile_pic,"lazy-src":"https://picsum.photos/id/11/10/6","aspect-ratio":"1.7778","max-width":"600","max-height":"400"}})],1),a("router-link",{staticClass:"btn",attrs:{to:"/"}},[t._v("Go Back")])],1)},E=[],I=(a("b0c0"),{name:"Artist",data:function(){return{artist_id:null,artist_name:null,artist_profile_pic:""}},beforeRouteEnter:function(t,e,a){Z.collection("artists").where("artist_id","==",t.params.id).get().then((function(t){t.forEach((function(t){a((function(e){console.log(t.data()),e.artist_id=t.data().artist_id,e.artist_name=t.data().name,e.artist_profile_pic=t.data().profilePic}))}))}))},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;Z.collection("artists").where("artist_id","==",this.$route.params.id).get().then((function(e){e.forEach((function(e){t.artist_id=e.data().artist_id,t.artist_name=e.data().name,t.artist_profile_pic=e.data().profilePic}))}))}}}),N=I,S=Object(l["a"])(N,A,E,!1,null,"3ace242a",null),$=S.exports;x()(S,{VImg:j["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"container"},[a("div",{staticClass:"grid"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"form-group"},[a("v-text-field",{attrs:{label:"Enter Your Name...",outlined:""},model:{value:t.artistName,callback:function(e){t.artistName=e},expression:"artistName"}})],1),a("div",{staticClass:"form-group"},[a("v-file-input",{attrs:{label:"Choose Profile Picture..."},model:{value:t.artistProfilePic,callback:function(e){t.artistProfilePic=e},expression:"artistProfilePic"}})],1),t._m(0)])])]),a("router-link",{attrs:{to:"/"}},[t._v("Go Back")])],1)},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn",attrs:{type:"submit",value:"Add New Artist"}})])}],T=(a("a15b"),a("ac1f"),a("1276"),a("8aa50")),M=a.n(T),R={name:"NewArtist",data:function(){return{artistName:null,artistProfilePic:null,artistId:null}},methods:{onSubmit:function(){var t=this,e=M.a.storage().ref(),a={contentType:"image/jpeg"};this.artistId=this.artistName.split(" ").join("").toLowerCase();e.child("".concat(this.artistId,"-profile.jpg")).put(this.artistProfilePic,a).then((function(e){e.ref.getDownloadURL().then((function(e){Z.collection("artists").add({artist_id:t.artistId,name:t.artistName,profilePic:e}).then((function(e){t.$router.push("/")}))}))}))}}},L=R,z=a("23a7"),B=a("8654"),G=Object(l["a"])(L,D,H,!1,null,"20d34be8",null),J=G.exports;x()(G,{VFileInput:z["a"],VTextField:B["a"]}),r["a"].use(b["a"]);var V=new b["a"]({mode:"history",routes:[{path:"/",name:"home",component:C},{path:"/artist/:id",name:"artist",component:$},{path:"/newArtist",name:"newArtist",component:J}]}),F=a("a65d"),W=a.n(F),Q=a("f309");r["a"].use(Q["a"]);var U=new Q["a"]({}),Y=a("59ca"),K=a.n(Y);a.d(e,"db",(function(){return Z})),r["a"].config.productionTip=!1;var X={apiKey:"AIzaSyDddmlHoBWporXYM3W3g5RHke5FrQJtMEs",authDomain:"backstage-server.firebaseapp.com",databaseURL:"https://backstage-server.firebaseio.com",projectId:"backstage-server",storageBucket:"backstage-server.appspot.com",messagingSenderId:"174277567",appId:"1:174277567:web:fea2a8137fc9f661f1170a",measurementId:"G-PE41LQGHWZ"};K.a.initializeApp(X);var Z=K.a.firestore();r["a"].use(W.a,{iconPack:"fontawesome"}),new r["a"]({router:V,vuetify:U,render:function(t){return t(v)}}).$mount("#app")},b3c5:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.badc059d.png"}});
//# sourceMappingURL=app.e0938c6b.js.map