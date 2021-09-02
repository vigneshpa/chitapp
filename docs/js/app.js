(()=>{"use strict";var __webpack_modules__={1828:(e,t,n)=>{n.d(t,{aD:()=>k,vQ:()=>y,w4:()=>v,pi:()=>$});var r=n(9315);const o=Symbol("Comlink.proxy"),i=Symbol("Comlink.endpoint"),a=Symbol("Comlink.releaseProxy"),s=Symbol("Comlink.thrown"),c=e=>"object"==typeof e&&null!==e||"function"==typeof e,u=new Map([["proxy",{canHandle:e=>c(e)&&e[o],serialize(e){const{port1:t,port2:n}=new MessageChannel;return l(e,t),[n,[n]]},deserialize:e=>(e.start(),d(e))}],["throw",{canHandle:e=>c(e)&&s in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function l(e,t=self){t.addEventListener("message",(function n(r){if(!r||!r.data)return;const{id:i,type:a,path:c}=Object.assign({path:[]},r.data),u=(r.data.argumentList||[]).map(m);let d;try{const t=c.slice(0,-1).reduce(((e,t)=>e[t]),e),n=c.reduce(((e,t)=>e[t]),e);switch(a){case"GET":d=n;break;case"SET":t[c.slice(-1)[0]]=m(r.data.value),d=!0;break;case"APPLY":d=n.apply(t,u);break;case"CONSTRUCT":d=function(e){return Object.assign(e,{[o]:!0})}(new n(...u));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;l(e,n),d=function(e,t){return b.set(e,t),e}(t,[t])}break;case"RELEASE":d=void 0;break;default:return}}catch(e){d={value:e,[s]:0}}Promise.resolve(d).catch((e=>({value:e,[s]:0}))).then((e=>{const[r,o]=w(e);t.postMessage(Object.assign(Object.assign({},r),{id:i}),o),"RELEASE"===a&&(t.removeEventListener("message",n),_(t))}))})),t.start&&t.start()}function _(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function d(e,t){return p(e,[],t)}function f(e){if(e)throw new Error("Proxy has been released and is not useable")}function p(e,t=[],n=function(){}){let r=!1;const o=new Proxy(n,{get(n,i){if(f(r),i===a)return()=>g(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{_(e),r=!0}));if("then"===i){if(0===t.length)return{then:()=>o};const n=g(e,{type:"GET",path:t.map((e=>e.toString()))}).then(m);return n.then.bind(n)}return p(e,[...t,i])},set(n,o,i){f(r);const[a,s]=w(i);return g(e,{type:"SET",path:[...t,o].map((e=>e.toString())),value:a},s).then(m)},apply(n,o,a){f(r);const s=t[t.length-1];if(s===i)return g(e,{type:"ENDPOINT"}).then(m);if("bind"===s)return p(e,t.slice(0,-1));const[c,u]=h(a);return g(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},u).then(m)},construct(n,o){f(r);const[i,a]=h(o);return g(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:i},a).then(m)}});return o}function h(e){const t=e.map(w);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const b=new WeakMap;function w(e){for(const[t,n]of u)if(n.canHandle(e)){const[r,o]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},o]}return[{type:"RAW",value:e},b.get(e)||[]]}function m(e){switch(e.type){case"HANDLER":return u.get(e.name).deserialize(e.value);case"RAW":return e.value}}function g(e,t,n){return new Promise((r=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===o&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),n)}))}let y,k,v,$;if(window.useLocalCore){y=()=>!0;const e=d(new Worker(new URL(n.p+n.u(922),n.b)));e.initCore(),k=e.action,v=async()=>{const t=await e.getDatabaseBackup(),n=document.createElement("a");n.href=window.URL.createObjectURL(t),n.download=t.name,n.style.display="none",document.body.appendChild(n),n.click(),setTimeout((()=>window.URL.revokeObjectURL(n.href)),5e3),n.remove()},$=async()=>{const t=document.createElement("input");t.type="file",t.accept=".zip,application/zip",t.onchange=async n=>{const r=t.files[0];if(!r)return;const o=await e.restoreDatabase(r);"done"===o?window.location.reload():alert("cannotVerifySignature"===o?"Cannot restore backup!\nFile may be corrupted":"Invalid File!\nPlease choose a valid chit backup file")},t.style.display="none",document.body.append(t),t.click()}}else{const e=window.apiURL+"/action";let t=!1;y=()=>{t||fetch("/api/login").then((async e=>{200===e.status&&"LOGGED_IN"===await e.json()||(t=!0,alert("You are not signed in.\nPlease sign in."),window.location.href="/login.html?page="+window.location.href)}))},k=async(t,n)=>{n=n??{};const o=await fetch(e,{method:"POST",body:JSON.stringify({action:t,params:n}),headers:{Accept:"application/json","Content-Type":"application/json"}});if(500===o.status)return!1;if(200!==o.status)return y();const i=await o.json();return(0,r.i)(i)}}},9315:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function decycle(e,t){var n=new WeakMap;return function e(r,o){var i,a;return void 0!==t&&(r=t(r)),"object"!=typeof r||null===r||r instanceof Boolean||r instanceof Date||r instanceof Number||r instanceof RegExp||r instanceof String?r:void 0!==(i=n.get(r))?{$ref:i}:(n.set(r,o),Array.isArray(r)?(a=[],r.forEach((function(t,n){a[n]=e(t,o+"["+n+"]")}))):(a={},Object.keys(r).forEach((function(t){a[t]=e(r[t],o+"["+JSON.stringify(t)+"]")}))),a)}(e,"$")}function retrocycle($){var px=/^\$(?:\[(?:\d+|"(?:[^\\"\u0000-\u001f]|\\(?:[\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*")\])*$/;return function rez(value){value&&"object"==typeof value&&(Array.isArray(value)?value.forEach((function(element,i){if("object"==typeof element&&null!==element){var path=element.$ref;"string"==typeof path&&px.test(path)?value[i]=eval(path):rez(element)}})):Object.keys(value).forEach((function(name){var item=value[name];if("object"==typeof item&&null!==item){var path=item.$ref;"string"==typeof path&&px.test(path)?value[name]=eval(path):rez(item)}})))}($),$}__webpack_require__.d(__webpack_exports__,{i:()=>retrocycle})},2535:(e,t,n)=>{function r(){}n.d(t,{f_C:()=>xe,P$F:()=>ae,R3I:()=>C,f0i:()=>i,Ljt:()=>N,VnY:()=>te,gbL:()=>be,FIv:()=>f,uPJ:()=>ye,YCL:()=>Ee,nuO:()=>p,vpE:()=>Ce,RMB:()=>j,ogt:()=>L,bGB:()=>O,cSb:()=>R,fwp:()=>X,VOJ:()=>m,u2N:()=>b,gCg:()=>ve,LoY:()=>ke,dvw:()=>he,edG:()=>K,yRu:()=>o,S1n:()=>Se,$Tr:()=>x,oLt:()=>A,yef:()=>qe,ZTd:()=>r,H3E:()=>V,j7q:()=>c,N8:()=>l,oWn:()=>F,RMU:()=>W,vax:()=>Q,rTO:()=>U,BmG:()=>z,fxP:()=>g,czc:()=>D,DhX:()=>T,LdU:()=>d,fLW:()=>P,sCW:()=>M,VHj:()=>I,Ui:()=>we,etI:()=>me,kmG:()=>w});const o=e=>e;function i(e,t){for(const n in t)e[n]=t[n];return e}function a(e){return e()}function s(){return Object.create(null)}function c(e){e.forEach(a)}function u(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function _(e){return 0===Object.keys(e).length}function d(e,...t){if(null==e)return r;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function f(e,t,n){e.$$.on_destroy.push(d(t,n))}function p(e,t,n,r){if(e){const o=h(e,t,n,r);return e[0](o)}}function h(e,t,n,r){return e[1]&&r?i(n.ctx.slice(),e[1](r(t))):n.ctx}function b(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}function w(e,t,n,r,o,i){if(o){const a=h(t,n,r,i);e.p(a,o)}}function m(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function g(e,t,n){return e.set(n),t}const y="undefined"!=typeof window;let k=y?()=>window.performance.now():()=>Date.now(),v=y?e=>requestAnimationFrame(e):r;const $=new Set;function E(e){$.forEach((t=>{t.c(e)||($.delete(t),t.f())})),0!==$.size&&v(E)}let q=!1;function C(e,t){e.appendChild(t)}function S(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function x(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode.removeChild(e)}function j(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function O(e){return document.createElement(e)}function P(e){return document.createTextNode(e)}function T(){return P(" ")}function R(){return P("")}function A(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function N(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function M(e){return""===e?null:+e}function U(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function z(e,t){e.value=null==t?"":t}function D(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}function F(e,t){for(let n=0;n<e.options.length;n+=1){const r=e.options[n];if(r.__value===t)return void(r.selected=!0)}e.selectedIndex=-1}function W(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function I(e,t,n){e.classList[n?"add":"remove"](t)}const B=new Set;let H,G=0;function Z(e,t,n,r,o,i,a,s=0){const c=16.666/r;let u="{\n";for(let e=0;e<=1;e+=c){const r=t+(n-t)*i(e);u+=100*e+`%{${a(r,1-r)}}\n`}const l=u+`100% {${a(n,1-n)}}\n}`,_=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(l)}_${s}`,d=S(e);B.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=function(e){const t=O("style");return function(e,t){C(e.head||e,t)}(S(e),t),t}(e).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[_]||(p[_]=!0,f.insertRule(`@keyframes ${_} ${l}`,f.cssRules.length));const h=e.style.animation||"";return e.style.animation=`${h?`${h}, `:""}${_} ${r}ms linear ${o}ms 1 both`,G+=1,_}function Y(e){H=e}function J(){if(!H)throw new Error("Function called outside component initialization");return H}function V(e){J().$$.on_mount.push(e)}function Q(e,t){J().$$.context.set(e,t)}function X(e){return J().$$.context.get(e)}function K(e){return J().$$.context.has(e)}const ee=[],te=[],ne=[],re=[],oe=Promise.resolve();let ie=!1;function ae(e){ne.push(e)}let se=!1;const ce=new Set;function ue(){if(!se){se=!0;do{for(let e=0;e<ee.length;e+=1){const t=ee[e];Y(t),le(t.$$)}for(Y(null),ee.length=0;te.length;)te.pop()();for(let e=0;e<ne.length;e+=1){const t=ne[e];ce.has(t)||(ce.add(t),t())}ne.length=0}while(ee.length);for(;re.length;)re.pop()();ie=!1,se=!1,ce.clear()}}function le(e){if(null!==e.fragment){e.update(),c(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ae)}}let _e;function de(e,t,n){e.dispatchEvent(function(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}(`${t?"intro":"outro"}${n}`))}const fe=new Set;let pe;function he(){pe={r:0,c:[],p:pe}}function be(){pe.r||c(pe.c),pe=pe.p}function we(e,t){e&&e.i&&(fe.delete(e),e.i(t))}function me(e,t,n,r){if(e&&e.o){if(fe.has(e))return;fe.add(e),pe.c.push((()=>{fe.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const ge={duration:0};function ye(e,t,n,i){let a=t(e,n),s=i?0:1,l=null,_=null,d=null;function f(){d&&function(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),o=n.length-r.length;o&&(e.style.animation=r.join(", "),G-=o,G||v((()=>{G||(B.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),B.clear())})))}(e,d)}function p(e,t){const n=e.b-s;return t*=Math.abs(n),{a:s,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function h(t){const{delay:n=0,duration:i=300,easing:u=o,tick:h=r,css:b}=a||ge,w={start:k()+n,b:t};t||(w.group=pe,pe.r+=1),l||_?_=w:(b&&(f(),d=Z(e,s,t,i,n,u,b)),t&&h(0,1),l=p(w,i),ae((()=>de(e,t,"start"))),function(e){let t;0===$.size&&v(E),new Promise((n=>{$.add(t={c:e,f:n})}))}((t=>{if(_&&t>_.start&&(l=p(_,i),_=null,de(e,l.b,"start"),b&&(f(),d=Z(e,s,l.b,l.duration,0,u,a.css))),l)if(t>=l.end)h(s=l.b,1-s),de(e,l.b,"end"),_||(l.b?f():--l.group.r||c(l.group.c)),l=null;else if(t>=l.start){const e=t-l.start;s=l.a+l.d*u(e/l.duration),h(s,1-s)}return!(!l&&!_)})))}return{run(e){u(a)?(_e||(_e=Promise.resolve(),_e.then((()=>{_e=null}))),_e).then((()=>{a=a(),h(e)})):h(e)},end(){f(),l=_=null}}}function ke(e,t){const n={},r={},o={$$scope:1};let i=e.length;for(;i--;){const a=e[i],s=t[i];if(s){for(const e in a)e in s||(r[e]=1);for(const e in s)o[e]||(n[e]=s[e],o[e]=1);e[i]=s}else for(const e in a)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function ve(e){return"object"==typeof e&&null!==e?e:{}}let $e;function Ee(e){e&&e.c()}function qe(e,t,n,r){const{fragment:o,on_mount:i,on_destroy:s,after_update:l}=e.$$;o&&o.m(t,n),r||ae((()=>{const t=i.map(a).filter(u);s?s.push(...t):c(t),e.$$.on_mount=[]})),l.forEach(ae)}function Ce(e,t){const n=e.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Se(e,t,n,o,i,a,u,l=[-1]){const _=H;Y(e);const d=e.$$={fragment:null,ctx:null,props:a,update:r,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(_?_.$$.context:t.context||[]),callbacks:s(),dirty:l,skip_bound:!1,root:t.target||_.$$.root};u&&u(d.root);let f=!1;if(d.ctx=n?n(e,t.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),f&&function(e,t){-1===e.$$.dirty[0]&&(ee.push(e),ie||(ie=!0,oe.then(ue)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],d.update(),f=!0,c(d.before_update),d.fragment=!!o&&o(d.ctx),t.target){if(t.hydrate){q=!0;const e=function(e){return Array.from(e.childNodes)}(t.target);d.fragment&&d.fragment.l(e),e.forEach(L)}else d.fragment&&d.fragment.c();t.intro&&we(e.$$.fragment),qe(e,t.target,t.anchor,t.customElement),q=!1,ue()}Y(_)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&($e=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(a).filter(u);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){c(this.$$.on_disconnect)}$destroy(){Ce(this,1),this.$destroy=r}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class xe{$destroy(){Ce(this,1),this.$destroy=r}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}},3330:(e,t,n)=>{n.d(t,{fZ:()=>i});var r=n(2535);const o=[];function i(e,t=r.ZTd){let n;const i=new Set;function a(t){if((0,r.N8)(e,t)&&(e=t,n)){const t=!o.length;for(const t of i)t[1](),o.push(t,e);if(t){for(let e=0;e<o.length;e+=2)o[e][0](o[e+1]);o.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(o,s=r.ZTd){const c=[o,s];return i.add(c),1===i.size&&(n=t(a)||r.ZTd),o(e),()=>{i.delete(c),0===i.size&&(n(),n=null)}}}}}},__webpack_module_cache__={},deferred,inProgress,loadStylesheet,installedCssChunks;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,t,n,r)=>{if(!t){var o=1/0;for(c=0;c<deferred.length;c++){for(var[t,n,r]=deferred[c],i=!0,a=0;a<t.length;a++)(!1&r||o>=r)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](t[a])))?t.splice(a--,1):(i=!1,r<o&&(o=r));if(i){deferred.splice(c--,1);var s=n();void 0!==s&&(e=s)}}return e}r=r||0;for(var c=deferred.length;c>0&&deferred[c-1][2]>r;c--)deferred[c]=deferred[c-1];deferred[c]=[t,n,r]},__webpack_require__.F={},__webpack_require__.E=e=>{Object.keys(__webpack_require__.F).map((t=>{__webpack_require__.F[t](e)}))},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((t,n)=>(__webpack_require__.f[n](e,t),t)),[])),__webpack_require__.u=e=>"js/"+({327:"appComponent",922:"localCore"}[e]||e)+".js",__webpack_require__.miniCssF=e=>"css/"+(327===e?"appComponent":e)+".css",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),inProgress={},__webpack_require__.l=(e,t,n,r)=>{if(inProgress[e])inProgress[e].push(t);else{var o,i;if(void 0!==n)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var c=a[s];if(c.getAttribute("src")==e){o=c;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,__webpack_require__.nc&&o.setAttribute("nonce",__webpack_require__.nc),o.src=e),inProgress[e]=[t];var u=(t,n)=>{o.onerror=o.onload=null,clearTimeout(l);var r=inProgress[e];if(delete inProgress[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(n))),t)return t(n)},l=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),i&&document.head.appendChild(o)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var t=__webpack_require__.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e+"../"})(),loadStylesheet=e=>new Promise(((t,n)=>{var r=__webpack_require__.miniCssF(e),o=__webpack_require__.p+r;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var a;if((o=(a=i[r]).getAttribute("data-href"))===e||o===t)return a}})(r,o))return t();((e,t,n,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,o.parentNode.removeChild(o),r(c)}},o.href=t,document.head.appendChild(o)})(e,o,t,n)})),installedCssChunks={143:0},__webpack_require__.f.miniCss=(e,t)=>{installedCssChunks[e]?t.push(installedCssChunks[e]):0!==installedCssChunks[e]&&{324:1,327:1,573:1,668:1,716:1,747:1,860:1,880:1,933:1}[e]&&t.push(installedCssChunks[e]=loadStylesheet(e).then((()=>{installedCssChunks[e]=0}),(t=>{throw delete installedCssChunks[e],t})))},(()=>{__webpack_require__.b=document.baseURI||self.location.href;var e={143:0};__webpack_require__.f.j=(t,n)=>{var r=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=o);var i=__webpack_require__.p+__webpack_require__.u(t),a=new Error;__webpack_require__.l(i,(n=>{if(__webpack_require__.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,r[1](a)}}),"chunk-"+t,t)}},__webpack_require__.F.j=t=>{if(!__webpack_require__.o(e,t)||void 0===e[t]){e[t]=null;var n=document.createElement("link");__webpack_require__.nc&&n.setAttribute("nonce",__webpack_require__.nc),n.rel="prefetch",n.as="script",n.href=__webpack_require__.p+__webpack_require__.u(t),document.head.appendChild(n)}},__webpack_require__.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[i,a,s]=n,c=0;if(i.some((t=>0!==e[t]))){for(r in a)__webpack_require__.o(a,r)&&(__webpack_require__.m[r]=a[r]);if(s)var u=s(__webpack_require__)}for(t&&t(n);c<i.length;c++)o=i[c],__webpack_require__.o(e,o)&&e[o]&&e[o][0](),e[i[c]]=0;return __webpack_require__.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),__webpack_require__.O(0,[143],(()=>{__webpack_require__.E(327)}),5);var __webpack_exports__={};(()=>{var e=__webpack_require__(1828),t=__webpack_require__(3330);"http:"!=window.location.protocol||window.disableSecureRedirect||(window.document.body.innerText="Redirecting to secure",window.location.href=window.location.href.replace("http:","https:")),(0,e.vQ)();const n=new URL(__webpack_require__.p);window.bURL=window.bURL??n.href.substring(n.origin.length,n.href.length-1),window.apiURL=window.apiURL??"/api",window.useLocalCore&&"serviceWorker"in navigator&&(window.serviceWorkerStatus=(0,t.fZ)("preparing"),__webpack_require__.e(385).then(__webpack_require__.bind(__webpack_require__,3385)).then((e=>e.register(new URL(n+"service-worker.js").href,{registrationOptions:{scope:n.href},ready(e){window.serviceWorkerStatus.set("ready")},updatefound(e){window.serviceWorkerStatus.set("downloading")},updated(e){window.serviceWorkerStatus.set("refresh")},offline(){window.serviceWorkerStatus.set("offline")},error(e){console.error("Error during service worker registration:",e)}})))),__webpack_require__.e(327).then(__webpack_require__.bind(__webpack_require__,2444)).then((e=>window.app=new e.default({target:window.document.body})))})(),__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.js.map