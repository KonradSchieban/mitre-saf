(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-431ce597"],{"72ab":function(t,e,a){t.exports=a.p+"img/avatar.d5a816ad.png"},"8adc":function(t,e,a){},cc20:function(t,e,a){"use strict";a("8e6e"),a("ac6a"),a("456d");var s=a("768b"),i=a("bd86"),o=(a("8adc"),a("58df")),r=a("0789"),c=a("9d26"),n=a("a9ad"),l=a("4e82"),h=a("7560"),u=a("f2e7"),p=a("1c87"),d=a("af2b"),m=a("d9bd");function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]=Object(o["a"])(n["a"],d["a"],p["a"],h["a"],Object(l["a"])("chipGroup"),Object(u["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return f({"v-chip":!0},p["a"].options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,{},this.sizeableClasses,{},this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(p["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(s["a"])(e,2),i=a[0],o=a[1];t.$attrs.hasOwnProperty(i)&&Object(m["a"])(i,o,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(c["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(r["b"],t)},genClose:function(){var t=this;return this.$createElement(c["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),s=a.tag,i=a.data;i.attrs=f({},i.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex}),i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);var o=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(o,i),e)}})},eb1e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",{staticClass:"px-0 mx-0 pt-1"},[a("v-container",{staticClass:"px-0 pt-5 mt-5",attrs:{fluid:""}},[a("v-row",{staticClass:"py-3",class:1==this.$vuetify.theme.dark?"black":"grey lighten-5",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"pt-3 bottom-space",attrs:{md:"12",lg:"10",xs:"12"}},[a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[t.showLoader?a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"12"}},[a("v-progress-circular",{attrs:{width:4,size:70,color:"indigo",indeterminate:""}})],1)],1):t._e(),a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"pa-4",attrs:{cols:"12",md:"12"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-3"},[t.showTeamData?a("v-col",{staticClass:"pa-5 elevation-1",class:1==this.$vuetify.theme.dark?"indigo":"white"},[t._v("\n                                 "+t._s(t.teamData.name)+" Deatils:\n                              ")]):t._e()],1),a("v-row",[t.showTeamData?a("v-col",{staticClass:"pa-5 elevation-1 text-center",class:1==this.$vuetify.theme.dark?"grey darken-4":"white",attrs:{cols:"12",md:"3"}},[a("v-avatar",{attrs:{size:"120"}},[a("img",{attrs:{src:t.getImgUrl(t.teamData.image),"lazy-src":t.getImgUrl(t.teamData.image),alt:""}})]),a("p",{staticClass:"mt-3 mb-0 google-font mb-0",staticStyle:{"font-size":"120%"}},[t._v(t._s(t.teamData.name))]),a("p",{staticClass:"mt-1 mb-0 google-font mt-0",staticStyle:{"font-size":"100%"}},[t._v(t._s(t.teamData.designation))]),a("v-chip",{staticClass:"mt-2",attrs:{small:""}},[t._v(t._s(t.teamData.role))]),a("br"),a("br"),t.teamData.active?a("v-chip",{staticClass:"ma-1",attrs:{dark:"",label:"",color:"green",small:""}},[t._v("Active")]):a("v-chip",{staticClass:"ma-1",attrs:{label:"",dark:"",color:"red",small:""}},[t._v("Not Active")]),a("br"),a("br"),a("br")],1):t._e(),t.showTeamData?a("v-col",{staticClass:"elevation-1 py-5 text-left pa-5",class:1==this.$vuetify.theme.dark?"grey darken-4":"white",attrs:{cols:"12",md:"9"}},[a("p",{staticClass:"mb-0"},[a("b",[t._v("Bio")])]),a("p",{staticClass:"mt-1 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},[t._v(t._s(t.teamData.bio))]),a("p",{staticClass:"mb-0 mt-3"},[a("b",[t._v("Social Links")])]),a("p",{staticClass:"mt-1 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},t._l(t.teamData.socialLinks,(function(e,s){return a("span",{key:s,staticClass:"mr-1",staticStyle:{cursor:"pointer"}},[e?a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:e,target:"_blank"}},[a("v-chip",{staticStyle:{"text-transform":"uppercase"},attrs:{small:""}},[t._v(t._s(s))])],1):t._e()])})),0)]):t._e()],1)],1)],1)],1),t.userNotFound?a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"elevation-1 pa-3 white"},[a("v-col",[a("h1",{staticClass:"google-font"},[t._v("User "+t._s(t.$route.params.id)+" Not Found")])])],1)],1)],1)],1):t._e()],1)],1)],1)],1)],1)},i=[],o=a("59ca"),r=a.n(o),c={components:{},data:function(){return{snackbarSuccess:!1,userNotFound:!1,showTeamData:!1,showLoader:!0,teamLoader:!0,teamData:[],search:""}},created:function(){var t=document.querySelector("meta[name=theme-color]");this.$vuetify.theme.dark?t.setAttribute("content","#212121"):t.setAttribute("content","#0277bd"),this.$route.params.id&&this.getTeamData()},methods:{getImgUrl:function(t){return t.length>0?t:a("72ab")},getTeamData:function(){var t=this;this.showLoader=!0,this.showTeamData=!1,this.userNotFound=!1,r.a.firestore().collection("team").doc(this.$route.params.id).get().then((function(e){void 0==e.data()?(t.showLoader=!1,t.showTeamData=!1,t.userNotFound=!0):e.data()?(t.showTeamData=!0,t.showLoader=!1,t.teamData=e.data()):(t.showTeamData=!1,t.showLoader=!1,t.userNotFound=!0)}))}}},n=c,l=a("2877"),h=a("6544"),u=a.n(h),p=a("8212"),d=a("cc20"),m=a("62ad"),v=a("a523"),f=a("a75b"),g=a("490a"),b=a("0fd9"),C=Object(l["a"])(n,s,i,!1,null,"5cf1edaa",null);e["default"]=C.exports;u()(C,{VAvatar:p["a"],VChip:d["a"],VCol:m["a"],VContainer:v["a"],VContent:f["a"],VProgressCircular:g["a"],VRow:b["a"]})}}]);