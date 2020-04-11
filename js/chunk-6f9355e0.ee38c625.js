(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f9355e0"],{"10c2":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-content",{staticClass:"pa-0"},[t("v-container",{staticClass:"pa-0 mt-2",attrs:{fluid:""}},[t("v-row",{staticClass:"py-0 my-0",class:1==this.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{justify:"center",align:"center"}},[t("v-col",{staticClass:"py-3 my-0",attrs:{md:"12",lg:"10",xs:"12"}},[t("Header",[t("h3",{attrs:{slot:"title"},slot:"title"},[e._v("Frequently Asked Questions")]),t("p",{attrs:{slot:"subtitle"},slot:"subtitle"},[e._v("\n            Have a question you don't see covered here? Please contact\n            "),t("a",{staticStyle:{color:"#1565C0","text-decoration":"none"},attrs:{href:"mailto:"+e.communityData.communityEmail}},[e._v(e._s(e.communityData.communityEmail))])])])],1)],1)],1),t("v-container",{staticClass:"pa-0 py-2",attrs:{fluid:""}},[t("v-row",{attrs:{justify:"center",align:"center"}},[t("v-col",{staticClass:"py-0",attrs:{md:"12",lg:"10",xs:"12"}},[t("faqInfo")],1)],1)],1)],1)},s=[],i=t("262f"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{attrs:{fluid:""}},[t("v-expansion-panels",{attrs:{accordion:"",tile:"",multiple:"",flat:""},model:{value:e.panel,callback:function(n){e.panel=n},expression:"panel"}},e._l(e.faqs,(function(n){return t("v-expansion-panel",{key:n},[t("v-expansion-panel-header",{staticClass:"google-font",staticStyle:{color:"#1a73e8","font-weight":"200","font-size":"120%"}},[e._v(e._s(n.question))]),t("v-expansion-panel-content",[e._v(e._s(n.answer))]),n.links?t("v-expansion-panel-content",e._l(n.links,(function(n){return t("div",{key:n},[t("a",{attrs:{href:n.download_link?n.download_link:n.link,target:"_blank",download:n.download_link}},[e._v(e._s(n.name))])])})),0):e._e(),n.code?t("v-expansion-panel-content",{staticClass:"hidden-sm-and-down"},[t("v-row",[t("v-col",{attrs:{xs:"3"}},[n.code?t("code",{staticClass:"pa-2"},[e._v(e._s(n.code))]):e._e()])],1)],1):e._e()],1)})),1)],1)},r=[],l=t("3c6c"),c={data:function(){return{faqs:l.faqs,panel:[0,1]}}},p=c,u=t("2877"),d=t("6544"),h=t.n(d),f=t("62ad"),v=t("a523"),b=(t("8e6e"),t("ac6a"),t("456d"),t("bd86")),m=t("4e82"),y=t("3206"),x=t("80d2"),g=t("58df");function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(t,!0).forEach((function(n){Object(b["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=Object(g["a"])(Object(m["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(y["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return w({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(x["p"])(this))}}),C=t("0789"),k=t("9d65"),j=t("a9ad"),P=Object(g["a"])(k["a"],j["a"],Object(y["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),S=P.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(C["a"],this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(x["p"])(n))])]})))}}),E=t("9d26"),I=t("5607");function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(t,!0).forEach((function(n){Object(b["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var $=Object(g["a"])(j["a"],Object(y["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),H=$.extend().extend({name:"v-expansion-panel-header",directives:{ripple:I["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(x["p"])(this,"actions")||[this.$createElement(E["a"],this.expandIcon)];return this.$createElement(C["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:A({},this.$listeners,{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(x["p"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),V=(t("210b"),t("604c")),B=t("d9bd");function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(t,!0).forEach((function(n){Object(b["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var q=V["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return N({},V["a"].options.computed.classes.call(this),{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(B["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(B["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),a=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(a)}}}),T=t("0fd9"),F=Object(u["a"])(p,o,r,!1,null,null,null),L=F.exports;h()(F,{VCol:f["a"],VContainer:v["a"],VExpansionPanel:_,VExpansionPanelContent:S,VExpansionPanelHeader:H,VExpansionPanels:q,VRow:T["a"]});var M=t("d67c"),K={data:function(){return{communityData:M}},components:{Header:i["a"],faqInfo:L}},z=K,J=t("a75b"),U=Object(u["a"])(z,a,s,!1,null,null,null);n["default"]=U.exports;h()(U,{VCol:f["a"],VContainer:v["a"],VContent:J["a"],VRow:T["a"]})},"210b":function(e,n,t){},"262f":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{attrs:{fluid:""}},[t("v-row",{attrs:{align:"center"}},[t("v-col",{attrs:{md:"12",sm:"12",cols:"12"}},[t("p",{staticClass:"google-font",staticStyle:{color:"#1a73e8","font-weight":"350","font-size":"200%"}},[e._t("title")],2),e._t("subtitle")],2)],1)],1)},s=[],i=t("2877"),o=t("6544"),r=t.n(o),l=t("62ad"),c=t("a523"),p=t("0fd9"),u={},d=Object(i["a"])(u,a,s,!1,null,null,null);n["a"]=d.exports;r()(d,{VCol:l["a"],VContainer:c["a"],VRow:p["a"]})},"3c6c":function(e){e.exports=JSON.parse('{"faqs":[{"question":"How do I know which NIST SP 800-53 Security Controls are addressed using this framework?","answer":"NIST SP 800-53 associations are included in all InSpec profiles and output from other security tools processed through Heimdall_tools. See our presentation to learn more!","links":[{"name":"InSpec, HDF, and NIST SP 800-53 Security Controls","download_link":"MITRE_InSpec_Profiles_and_HDF_include_NIST_SP-800-53_Associations.pdf"}]},{"question":"How can I use InSpec tests in my CI/CD pipeline?","answer":"InSpec tests can be integrated as part of a test battery in your favorite CI platform. For example, you can add InSpec testing to your Travis CI file to run InSpec automatically. For further details, please see our Advanced InSpec Developer\'s Course.","code":"// travis.yml\\n\\nsudo: required\\n\\n# blocklist\\n#branches:\\n#  except:\\n#  - development\\n\\n# safelist\\n#branches:\\n#  only:\\n#  - master\\n#  - stable\\n\\nlanguage: ruby\\nrvm:\\n  - 2.6.1\\n\\ncache: bundler\\n\\naddons:\\n  apt:\\n    sources:\\n      - chef-current-xenial\\n    # packages:\\n    #   - chef-workstation\\n  #artifacts: true\\n\\n# Don\'t `bundle install` which takes about 1.5 mins\\ninstall:\\n\\nservices: docker\\n\\nenv:\\n  matrix:\\n  - INSTANCE=default-ubuntu-1604\\n\\nbefore_script:\\n  - wget https://packages.chef.io/files/stable/chef-workstation/0.5.1/ubuntu/16.04/chef-workstation_0.5.1-1_amd64.deb\\n  - sudo dpkg -i chef-workstation_*.deb\\n  - rm chef-workstation_*.deb\\n  - sudo iptables -L DOCKER || ( echo \\"DOCKER iptables chain missing\\" ; sudo iptables -N DOCKER )\\n  - eval\\\\$(chef shell-init bash)\\"\\n  - gem install bundler:2.0.1\\n  - gem install inspec_tools\\n  - inspec --version\\n  - CHEF_LICENSE=accept chef gem update inspec\\n  - CHEF_LICENSE=accept chef gem update inspec-bin\\n  - /opt/chef-workstation/embedded/bin/gem update inspec\\n  - /opt/chef-workstation/embedded/bin/gem update inspec-bin\\n  - inspec --version\\n  - bundle update --bundler\\n  - bundle install\\n  - chef --version\\n  - cookstyle --version\\n  - foodcritic --version\\n\\nscript: \\n  - CHEF_LICENSE=accept-no-persist KITCHEN_LOCAL_YAML=kitchen.dokken.yml CHEF_VERSION=\\\\${CHEF_VERSION} kitchen verify \\\\${INSTANCE} || true\\n  - export RESULTS=\\\\$(ls results/*.json)\\n  - inspec_tools compliance -j $RESULTS -f threshold.yml","links":[{"name":"InSpec Pipeline Integration Example","link":"https://mitre-inspec-advanced-developer.netlify.com/course/4.html"}]}]}')}}]);