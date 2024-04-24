/*! For license information please see 899.js.LICENSE.txt */
"use strict";(self.webpackChunkcurrency_vista=self.webpackChunkcurrency_vista||[]).push([[899],{759:(t,e,n)=>{function o(){return"undefined"!=typeof navigator&&"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:{}}n.d(e,{$q:()=>l});const s="function"==typeof Proxy,i="devtools-plugin:setup";let a,r;class c{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const e in t.settings){const o=t.settings[e];n[e]=o.defaultValue}const o=`__vue-devtools-plugin-settings__${t.id}`;let s=Object.assign({},n);try{const t=localStorage.getItem(o),e=JSON.parse(t);Object.assign(s,e)}catch(t){}this.fallbacks={getSettings:()=>s,setSettings(t){try{localStorage.setItem(o,JSON.stringify(t))}catch(t){}s=t},now:()=>{return void 0!==a||("undefined"!=typeof window&&window.performance?(a=!0,r=window.performance):"undefined"!=typeof globalThis&&(null===(t=globalThis.perf_hooks)||void 0===t?void 0:t.performance)?(a=!0,r=globalThis.perf_hooks.performance):a=!1),a?r.now():Date.now();var t}},e&&e.on("plugin:settings:set",((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function l(t,e){const n=t,a=o(),r=o().__VUE_DEVTOOLS_GLOBAL_HOOK__,l=s&&n.enableEarlyProxy;if(!r||!a.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&l){const t=l?new c(n,r):null;(a.__VUE_DEVTOOLS_PLUGINS__=a.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else r.emit(i,t,e)}},899:(t,e,n)=>{n.r(e),n.d(e,{MutationType:()=>d,PiniaVuePlugin:()=>dt,acceptHMRUpdate:()=>Q,createPinia:()=>B,defineStore:()=>ot,getActivePinia:()=>l,mapActions:()=>lt,mapGetters:()=>ct,mapState:()=>rt,mapStores:()=>at,mapWritableState:()=>ut,setActivePinia:()=>c,setMapStoreSuffix:()=>it,skipHydrate:()=>tt,storeToRefs:()=>pt});var o=n(875),s=!1;function i(t,e,n){return Array.isArray(t)?(t.length=Math.max(t.length,e),t.splice(e,1,n),n):(t[e]=n,n)}var a=n(759);let r;const c=t=>r=t,l=()=>(0,o.hasInjectionContext)()&&(0,o.inject)(u)||r,u=Symbol();function p(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var d;!function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"}(d||(d={}));const f="undefined"!=typeof window,h="undefined"!=typeof __VUE_PROD_DEVTOOLS__&&__VUE_PROD_DEVTOOLS__&&f,g=(()=>"object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:"object"==typeof globalThis?globalThis:{HTMLElement:null})();function y(t,e,n){const o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){w(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function m(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return e.status>=200&&e.status<=299}function _(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}const b="object"==typeof navigator?navigator:{userAgent:""},v=(()=>/Macintosh/.test(b.userAgent)&&/AppleWebKit/.test(b.userAgent)&&!/Safari/.test(b.userAgent))(),w=f?"undefined"!=typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!v?function(t,e="download",n){const o=document.createElement("a");o.download=e,o.rel="noopener","string"==typeof t?(o.href=t,o.origin!==location.origin?m(o.href)?y(t,e,n):(o.target="_blank",_(o)):_(o)):(o.href=URL.createObjectURL(t),setTimeout((function(){URL.revokeObjectURL(o.href)}),4e4),setTimeout((function(){_(o)}),0))}:"msSaveOrOpenBlob"in b?function(t,e="download",n){if("string"==typeof t)if(m(t))y(t,e,n);else{const e=document.createElement("a");e.href=t,e.target="_blank",setTimeout((function(){_(e)}))}else navigator.msSaveOrOpenBlob(function(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}(t,n),e)}:function(t,e,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return y(t,e,n);const s="application/octet-stream"===t.type,i=/constructor/i.test(String(g.HTMLElement))||"safari"in g,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||s&&i||v)&&"undefined"!=typeof FileReader){const e=new FileReader;e.onloadend=function(){let t=e.result;if("string"!=typeof t)throw o=null,new Error("Wrong reader.result type");t=a?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location.assign(t),o=null},e.readAsDataURL(t)}else{const e=URL.createObjectURL(t);o?o.location.assign(e):location.href=e,o=null,setTimeout((function(){URL.revokeObjectURL(e)}),4e4)}}:()=>{};function O(t,e){const n="🍍 "+t;"function"==typeof __VUE_DEVTOOLS_TOAST__?__VUE_DEVTOOLS_TOAST__(n,e):"error"===e?console.error(n):"warn"===e?console.warn(n):console.log(n)}function S(t){return"_a"in t&&"install"in t}function $(){if(!("clipboard"in navigator))return O("Your browser doesn't support the Clipboard API","error"),!0}function k(t){return!!(t instanceof Error&&t.message.toLowerCase().includes("document is not focused"))&&(O('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0)}let E;function I(t,e){for(const n in e){const o=t.state.value[n];o?Object.assign(o,e[n]):t.state.value[n]=e[n]}}function T(t){return{_custom:{display:t}}}const j="🍍 Pinia (root)",P="_root";function R(t){return S(t)?{id:P,label:j}:{id:t.$id,label:t.$id}}function A(t){return t?Array.isArray(t)?t.reduce(((t,e)=>(t.keys.push(e.key),t.operations.push(e.type),t.oldValue[e.key]=e.oldValue,t.newValue[e.key]=e.newValue,t)),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:T(t.type),key:T(t.key),oldValue:t.oldValue,newValue:t.newValue}:{}}function L(t){switch(t){case d.direct:return"mutation";case d.patchFunction:case d.patchObject:return"$patch";default:return"unknown"}}let C=!0;const V=[],x="pinia:mutations",U="pinia",{assign:D}=Object,M=t=>"🍍 "+t;function N(t,e){(0,a.$q)({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:V,app:t},(n=>{"function"!=typeof n.now&&O("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:x,label:"Pinia 🍍",color:15064968}),n.addInspector({id:U,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{!async function(t){if(!$())try{await navigator.clipboard.writeText(JSON.stringify(t.state.value)),O("Global state copied to clipboard.")}catch(t){if(k(t))return;O("Failed to serialize the state. Check the console for more details.","error"),console.error(t)}}(e)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await async function(t){if(!$())try{I(t,JSON.parse(await navigator.clipboard.readText())),O("Global state pasted from clipboard.")}catch(t){if(k(t))return;O("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(t)}}(e),n.sendInspectorTree(U),n.sendInspectorState(U)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{!async function(t){try{w(new Blob([JSON.stringify(t.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(t){O("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}(e)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await async function(t){try{const e=(E||(E=document.createElement("input"),E.type="file",E.accept=".json"),function(){return new Promise(((t,e)=>{E.onchange=async()=>{const e=E.files;if(!e)return t(null);const n=e.item(0);return t(n?{text:await n.text(),file:n}:null)},E.oncancel=()=>t(null),E.onerror=e,E.click()}))}),n=await e();if(!n)return;const{text:o,file:s}=n;I(t,JSON.parse(o)),O(`Global state imported from "${s.name}".`)}catch(t){O("Failed to import the state from JSON. Check the console for more details.","error"),console.error(t)}}(e),n.sendInspectorTree(U),n.sendInspectorState(U)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:'Reset the state (with "$reset")',action:t=>{const n=e._s.get(t);n?"function"!=typeof n.$reset?O(`Cannot reset "${t}" store because it doesn't have a "$reset" method implemented.`,"warn"):(n.$reset(),O(`Store "${t}" reset.`)):O(`Cannot reset "${t}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent(((t,e)=>{const n=t.componentInstance&&t.componentInstance.proxy;if(n&&n._pStores){const e=t.componentInstance.proxy._pStores;Object.values(e).forEach((e=>{t.instanceData.state.push({type:M(e.$id),key:"state",editable:!0,value:e._isOptionsAPI?{_custom:{value:(0,o.toRaw)(e.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>e.$reset()}]}}:Object.keys(e.$state).reduce(((t,n)=>(t[n]=e.$state[n],t)),{})}),e._getters&&e._getters.length&&t.instanceData.state.push({type:M(e.$id),key:"getters",editable:!1,value:e._getters.reduce(((t,n)=>{try{t[n]=e[n]}catch(e){t[n]=e}return t}),{})})}))}})),n.on.getInspectorTree((n=>{if(n.app===t&&n.inspectorId===U){let t=[e];t=t.concat(Array.from(e._s.values())),n.rootNodes=(n.filter?t.filter((t=>"$id"in t?t.$id.toLowerCase().includes(n.filter.toLowerCase()):j.toLowerCase().includes(n.filter.toLowerCase()))):t).map(R)}})),n.on.getInspectorState((n=>{if(n.app===t&&n.inspectorId===U){const t=n.nodeId===P?e:e._s.get(n.nodeId);if(!t)return;t&&(n.state=function(t){if(S(t)){const e=Array.from(t._s.keys()),n=t._s,o={state:e.map((e=>({editable:!0,key:e,value:t.state.value[e]}))),getters:e.filter((t=>n.get(t)._getters)).map((t=>{const e=n.get(t);return{editable:!1,key:t,value:e._getters.reduce(((t,n)=>(t[n]=e[n],t)),{})}}))};return o}const e={state:Object.keys(t.$state).map((e=>({editable:!0,key:e,value:t.$state[e]})))};return t._getters&&t._getters.length&&(e.getters=t._getters.map((e=>({editable:!1,key:e,value:t[e]})))),t._customProperties.size&&(e.customProperties=Array.from(t._customProperties).map((e=>({editable:!0,key:e,value:t[e]})))),e}(t))}})),n.on.editInspectorState(((n,o)=>{if(n.app===t&&n.inspectorId===U){const t=n.nodeId===P?e:e._s.get(n.nodeId);if(!t)return O(`store "${n.nodeId}" not found`,"error");const{path:o}=n;S(t)?o.unshift("state"):1===o.length&&t._customProperties.has(o[0])&&!(o[0]in t.$state)||o.unshift("$state"),C=!1,n.set(t,o,n.state.value),C=!0}})),n.on.editComponentState((t=>{if(t.type.startsWith("🍍")){const n=t.type.replace(/^🍍\s*/,""),o=e._s.get(n);if(!o)return O(`store "${n}" not found`,"error");const{path:s}=t;if("state"!==s[0])return O(`Invalid path for store "${n}":\n${s}\nOnly state can be modified.`);s[0]="$state",C=!1,t.set(o,s,t.state.value),C=!0}}))}))}let F,H=0;function J(t,e,n){const s=e.reduce(((e,n)=>(e[n]=(0,o.toRaw)(t)[n],e)),{});for(const e in s)t[e]=function(){const o=H,i=n?new Proxy(t,{get:(...t)=>(F=o,Reflect.get(...t)),set:(...t)=>(F=o,Reflect.set(...t))}):t;F=o;const a=s[e].apply(i,arguments);return F=void 0,a}}function G({app:t,store:e,options:n}){if(e.$id.startsWith("__hot:"))return;e._isOptionsAPI=!!n.state,J(e,Object.keys(n.actions),e._isOptionsAPI);const s=e._hotUpdate;(0,o.toRaw)(e)._hotUpdate=function(t){s.apply(this,arguments),J(e,Object.keys(t._hmrPayload.actions),!!e._isOptionsAPI)},function(t,e){V.includes(M(e.$id))||V.push(M(e.$id)),(0,a.$q)({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:V,app:t,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},(t=>{const n="function"==typeof t.now?t.now.bind(t):Date.now;e.$onAction((({after:o,onError:s,name:i,args:a})=>{const r=H++;t.addTimelineEvent({layerId:x,event:{time:n(),title:"🛫 "+i,subtitle:"start",data:{store:T(e.$id),action:T(i),args:a},groupId:r}}),o((o=>{F=void 0,t.addTimelineEvent({layerId:x,event:{time:n(),title:"🛬 "+i,subtitle:"end",data:{store:T(e.$id),action:T(i),args:a,result:o},groupId:r}})})),s((o=>{F=void 0,t.addTimelineEvent({layerId:x,event:{time:n(),logType:"error",title:"💥 "+i,subtitle:"end",data:{store:T(e.$id),action:T(i),args:a,error:o},groupId:r}})}))}),!0),e._customProperties.forEach((s=>{(0,o.watch)((()=>(0,o.unref)(e[s])),((e,o)=>{t.notifyComponentUpdate(),t.sendInspectorState(U),C&&t.addTimelineEvent({layerId:x,event:{time:n(),title:"Change",subtitle:s,data:{newValue:e,oldValue:o},groupId:F}})}),{deep:!0})})),e.$subscribe((({events:o,type:s},i)=>{if(t.notifyComponentUpdate(),t.sendInspectorState(U),!C)return;const a={time:n(),title:L(s),data:D({store:T(e.$id)},A(o)),groupId:F};s===d.patchFunction?a.subtitle="⤵️":s===d.patchObject?a.subtitle="🧩":o&&!Array.isArray(o)&&(a.subtitle=o.type),o&&(a.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:o}}),t.addTimelineEvent({layerId:x,event:a})}),{detached:!0,flush:"sync"});const s=e._hotUpdate;e._hotUpdate=(0,o.markRaw)((o=>{s(o),t.addTimelineEvent({layerId:x,event:{time:n(),title:"🔥 "+e.$id,subtitle:"HMR update",data:{store:T(e.$id),info:T("HMR update")}}}),t.notifyComponentUpdate(),t.sendInspectorTree(U),t.sendInspectorState(U)}));const{$dispose:i}=e;e.$dispose=()=>{i(),t.notifyComponentUpdate(),t.sendInspectorTree(U),t.sendInspectorState(U),t.getSettings().logStoreChanges&&O(`Disposed "${e.$id}" store 🗑`)},t.notifyComponentUpdate(),t.sendInspectorTree(U),t.sendInspectorState(U),t.getSettings().logStoreChanges&&O(`"${e.$id}" store installed 🆕`)}))}(t,e)}function B(){const t=(0,o.effectScope)(!0),e=t.run((()=>(0,o.ref)({})));let n=[],i=[];const a=(0,o.markRaw)({install(t){c(a),s||(a._a=t,t.provide(u,a),t.config.globalProperties.$pinia=a,h&&N(t,a),i.forEach((t=>n.push(t))),i=[])},use(t){return this._a||s?n.push(t):i.push(t),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return h&&"undefined"!=typeof Proxy&&a.use(G),a}function Q(t,e){return()=>{}}const W=()=>{};function q(t,e,n,s=W){t.push(e);const i=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&(0,o.getCurrentScope)()&&(0,o.onScopeDispose)(i),i}function z(t,...e){t.slice().forEach((t=>{t(...e)}))}const Y=t=>t();function K(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];p(i)&&p(s)&&t.hasOwnProperty(n)&&!(0,o.isRef)(s)&&!(0,o.isReactive)(s)?t[n]=K(i,s):t[n]=s}return t}const X=Symbol(),Z=new WeakMap;function tt(t){return s?Z.set(t,1)&&t:Object.defineProperty(t,X,{})}const{assign:et}=Object;function nt(t,e,n={},a,r,l){let u;const f=et({actions:{}},n),g={deep:!0};let y,m,_,b=[],v=[];const w=a.state.value[t];l||w||(s?i(a.state.value,t,{}):a.state.value[t]={});const O=(0,o.ref)({});let S;function $(e){let n;y=m=!1,"function"==typeof e?(e(a.state.value[t]),n={type:d.patchFunction,storeId:t,events:_}):(K(a.state.value[t],e),n={type:d.patchObject,payload:e,storeId:t,events:_});const s=S=Symbol();(0,o.nextTick)().then((()=>{S===s&&(y=!0)})),m=!0,z(b,n,a.state.value[t])}const k=l?function(){const{state:t}=n,e=t?t():{};this.$patch((t=>{et(t,e)}))}:W;function E(e,n){return function(){c(a);const o=Array.from(arguments),s=[],i=[];let r;z(v,{args:o,name:e,store:j,after:function(t){s.push(t)},onError:function(t){i.push(t)}});try{r=n.apply(this&&this.$id===t?this:j,o)}catch(t){throw z(i,t),t}return r instanceof Promise?r.then((t=>(z(s,t),t))).catch((t=>(z(i,t),Promise.reject(t)))):(z(s,r),r)}}const I=(0,o.markRaw)({actions:{},getters:{},state:[],hotState:O}),T={_p:a,$id:t,$onAction:q.bind(null,v),$patch:$,$reset:k,$subscribe(e,n={}){const s=q(b,e,n.detached,(()=>i())),i=u.run((()=>(0,o.watch)((()=>a.state.value[t]),(o=>{("sync"===n.flush?m:y)&&e({storeId:t,type:d.direct,events:_},o)}),et({},g,n))));return s},$dispose:function(){u.stop(),b=[],v=[],a._s.delete(t)}};s&&(T._r=!1);const j=(0,o.reactive)(h?et({_hmrPayload:I,_customProperties:(0,o.markRaw)(new Set)},T):T);a._s.set(t,j);const P=(a._a&&a._a.runWithContext||Y)((()=>a._e.run((()=>(u=(0,o.effectScope)()).run(e)))));for(const e in P){const n=P[e];if((0,o.isRef)(n)&&(A=n,!(0,o.isRef)(A)||!A.effect)||(0,o.isReactive)(n))l||(!w||(R=n,s?Z.has(R):p(R)&&R.hasOwnProperty(X))||((0,o.isRef)(n)?n.value=w[e]:K(n,w[e])),s?i(a.state.value[t],e,n):a.state.value[t][e]=n);else if("function"==typeof n){const t=E(e,n);s?i(P,e,t):P[e]=t,f.actions[e]=n}}var R,A;if(s?Object.keys(P).forEach((t=>{i(j,t,P[t])})):(et(j,P),et((0,o.toRaw)(j),P)),Object.defineProperty(j,"$state",{get:()=>a.state.value[t],set:t=>{$((e=>{et(e,t)}))}}),h){const t={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach((e=>{Object.defineProperty(j,e,et({value:j[e]},t))}))}return s&&(j._r=!0),a._p.forEach((t=>{if(h){const e=u.run((()=>t({store:j,app:a._a,pinia:a,options:f})));Object.keys(e||{}).forEach((t=>j._customProperties.add(t))),et(j,e)}else et(j,u.run((()=>t({store:j,app:a._a,pinia:a,options:f}))))})),w&&l&&n.hydrate&&n.hydrate(j.$state,w),y=!0,m=!0,j}function ot(t,e,n){let a,l;const p="function"==typeof e;function d(t,n){const d=(0,o.hasInjectionContext)();return(t=t||(d?(0,o.inject)(u,null):null))&&c(t),(t=r)._s.has(a)||(p?nt(a,e,l,t):function(t,e,n,a){const{state:r,actions:l,getters:u}=e,p=n.state.value[t];let d;d=nt(t,(function(){p||(s?i(n.state.value,t,r?r():{}):n.state.value[t]=r?r():{});const e=(0,o.toRefs)(n.state.value[t]);return et(e,l,Object.keys(u||{}).reduce(((e,i)=>(e[i]=(0,o.markRaw)((0,o.computed)((()=>{c(n);const e=n._s.get(t);if(!s||e._r)return u[i].call(e,e)}))),e)),{}))}),e,n,0,!0)}(a,l,t)),t._s.get(a)}return"string"==typeof t?(a=t,l=p?n:e):(l=t,a=t.id),d.$id=a,d}let st="Store";function it(t){st=t}function at(...t){return t.reduce(((t,e)=>(t[e.$id+st]=function(){return e(this.$pinia)},t)),{})}function rt(t,e){return Array.isArray(e)?e.reduce(((e,n)=>(e[n]=function(){return t(this.$pinia)[n]},e)),{}):Object.keys(e).reduce(((n,o)=>(n[o]=function(){const n=t(this.$pinia),s=e[o];return"function"==typeof s?s.call(this,n):n[s]},n)),{})}const ct=rt;function lt(t,e){return Array.isArray(e)?e.reduce(((e,n)=>(e[n]=function(...e){return t(this.$pinia)[n](...e)},e)),{}):Object.keys(e).reduce(((n,o)=>(n[o]=function(...n){return t(this.$pinia)[e[o]](...n)},n)),{})}function ut(t,e){return Array.isArray(e)?e.reduce(((e,n)=>(e[n]={get(){return t(this.$pinia)[n]},set(e){return t(this.$pinia)[n]=e}},e)),{}):Object.keys(e).reduce(((n,o)=>(n[o]={get(){return t(this.$pinia)[e[o]]},set(n){return t(this.$pinia)[e[o]]=n}},n)),{})}function pt(t){if(s)return(0,o.toRefs)(t);{t=(0,o.toRaw)(t);const e={};for(const n in t){const s=t[n];((0,o.isRef)(s)||(0,o.isReactive)(s))&&(e[n]=(0,o.toRef)(t,n))}return e}}const dt=function(t){t.mixin({beforeCreate(){const t=this.$options;if(t.pinia){const e=t.pinia;if(!this._provided){const t={};Object.defineProperty(this,"_provided",{get:()=>t,set:e=>Object.assign(t,e)})}this._provided[u]=e,this.$pinia||(this.$pinia=e),e._a=this,f&&c(e),h&&N(e._a,e)}else!this.$pinia&&t.parent&&t.parent.$pinia&&(this.$pinia=t.parent.$pinia)},destroyed(){delete this._pStores}})}}}]);