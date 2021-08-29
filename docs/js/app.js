(()=>{"use strict";var __webpack_modules__={7883:(e,t,n)=>{n.d(t,{vQ:()=>o,aD:()=>i,w4:()=>a,pi:()=>c});var r=n(9315);let o,i,a,c;if(window.useLocalCore){o=()=>!0;const e=Promise.all([n.e(271),n.e(321)]).then(n.bind(n,2043)),t=(async()=>await(await e).initCore())();i=async(e,n)=>await(await t).actions[e](n),a=async()=>{const t=await(await e).getDatabaseBackup(),n=document.createElement("a");n.href=window.URL.createObjectURL(t),n.download=t.name,n.style.display="none",document.body.appendChild(n),n.click(),setTimeout((()=>window.URL.revokeObjectURL(n.href)),5e3),n.remove()},c=async()=>{const t=document.createElement("input");t.type="file",t.accept=".sqlite3,.sqlite,.db,application/vnd.sqlite3",t.onchange=async n=>{const r=t.files[0];r&&(await e).restoreDatabase(r)},t.style.display="none",document.body.append(t),t.click()}}else{const e=window.apiURL+"/action";let t=!1;o=()=>{if(window.useLocalCore)return!0;t||fetch("/api/login").then((async e=>{200===e.status&&"LOGGED_IN"===await e.json()||(t=!0,alert("You are not signed in.\nPlease sign in."),window.location.href="/login.html?page="+window.location.href)}))},i=async(t,n)=>{n=n??{};const i=await fetch(e,{method:"POST",body:JSON.stringify({action:t,params:n}),headers:{Accept:"application/json","Content-Type":"application/json"}});if(500===i.status)return!1;if(200!==i.status)return o();const a=await i.json();return(0,r.i)(a)}}},9315:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function decycle(e,t){var n=new WeakMap;return function e(r,o){var i,a;return void 0!==t&&(r=t(r)),"object"!=typeof r||null===r||r instanceof Boolean||r instanceof Date||r instanceof Number||r instanceof RegExp||r instanceof String?r:void 0!==(i=n.get(r))?{$ref:i}:(n.set(r,o),Array.isArray(r)?(a=[],r.forEach((function(t,n){a[n]=e(t,o+"["+n+"]")}))):(a={},Object.keys(r).forEach((function(t){a[t]=e(r[t],o+"["+JSON.stringify(t)+"]")}))),a)}(e,"$")}function retrocycle($){var px=/^\$(?:\[(?:\d+|"(?:[^\\"\u0000-\u001f]|\\(?:[\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*")\])*$/;return function rez(value){value&&"object"==typeof value&&(Array.isArray(value)?value.forEach((function(element,i){if("object"==typeof element&&null!==element){var path=element.$ref;"string"==typeof path&&px.test(path)?value[i]=eval(path):rez(element)}})):Object.keys(value).forEach((function(name){var item=value[name];if("object"==typeof item&&null!==item){var path=item.$ref;"string"==typeof path&&px.test(path)?value[name]=eval(path):rez(item)}})))}($),$}__webpack_require__.d(__webpack_exports__,{i:()=>retrocycle})},2535:(e,t,n)=>{function r(){}n.d(t,{f_C:()=>je,P$F:()=>ae,R3I:()=>x,f0i:()=>i,Ljt:()=>N,VnY:()=>te,gbL:()=>be,FIv:()=>f,uPJ:()=>ke,YCL:()=>qe,nuO:()=>p,vpE:()=>xe,RMB:()=>O,ogt:()=>S,bGB:()=>L,cSb:()=>R,fwp:()=>K,VOJ:()=>m,u2N:()=>b,gCg:()=>ve,LoY:()=>ye,dvw:()=>he,edG:()=>X,yRu:()=>o,S1n:()=>Ee,$Tr:()=>j,oLt:()=>A,yef:()=>Ce,ZTd:()=>r,H3E:()=>V,j7q:()=>s,N8:()=>_,oWn:()=>z,RMU:()=>B,vax:()=>Q,rTO:()=>F,BmG:()=>D,fxP:()=>g,czc:()=>M,DhX:()=>P,LdU:()=>d,fLW:()=>T,sCW:()=>U,VHj:()=>W,Ui:()=>we,etI:()=>me,kmG:()=>w});const o=e=>e;function i(e,t){for(const n in t)e[n]=t[n];return e}function a(e){return e()}function c(){return Object.create(null)}function s(e){e.forEach(a)}function u(e){return"function"==typeof e}function _(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(e){return 0===Object.keys(e).length}function d(e,...t){if(null==e)return r;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function f(e,t,n){e.$$.on_destroy.push(d(t,n))}function p(e,t,n,r){if(e){const o=h(e,t,n,r);return e[0](o)}}function h(e,t,n,r){return e[1]&&r?i(n.ctx.slice(),e[1](r(t))):n.ctx}function b(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}function w(e,t,n,r,o,i){if(o){const a=h(t,n,r,i);e.p(a,o)}}function m(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function g(e,t,n){return e.set(n),t}const k="undefined"!=typeof window;let y=k?()=>window.performance.now():()=>Date.now(),v=k?e=>requestAnimationFrame(e):r;const $=new Set;function q(e){$.forEach((t=>{t.c(e)||($.delete(t),t.f())})),0!==$.size&&v(q)}let C=!1;function x(e,t){e.appendChild(t)}function E(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function j(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode.removeChild(e)}function O(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function L(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function P(){return T(" ")}function R(){return T("")}function A(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function N(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function U(e){return""===e?null:+e}function F(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function D(e,t){e.value=null==t?"":t}function M(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}function z(e,t){for(let n=0;n<e.options.length;n+=1){const r=e.options[n];if(r.__value===t)return void(r.selected=!0)}e.selectedIndex=-1}function B(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function W(e,t,n){e.classList[n?"add":"remove"](t)}const Z=new Set;let G,I=0;function H(e,t,n,r,o,i,a,c=0){const s=16.666/r;let u="{\n";for(let e=0;e<=1;e+=s){const r=t+(n-t)*i(e);u+=100*e+`%{${a(r,1-r)}}\n`}const _=u+`100% {${a(n,1-n)}}\n}`,l=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(_)}_${c}`,d=E(e);Z.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=function(e){const t=L("style");return function(e,t){x(e.head||e,t)}(E(e),t),t}(e).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[l]||(p[l]=!0,f.insertRule(`@keyframes ${l} ${_}`,f.cssRules.length));const h=e.style.animation||"";return e.style.animation=`${h?`${h}, `:""}${l} ${r}ms linear ${o}ms 1 both`,I+=1,l}function J(e){G=e}function Y(){if(!G)throw new Error("Function called outside component initialization");return G}function V(e){Y().$$.on_mount.push(e)}function Q(e,t){Y().$$.context.set(e,t)}function K(e){return Y().$$.context.get(e)}function X(e){return Y().$$.context.has(e)}const ee=[],te=[],ne=[],re=[],oe=Promise.resolve();let ie=!1;function ae(e){ne.push(e)}let ce=!1;const se=new Set;function ue(){if(!ce){ce=!0;do{for(let e=0;e<ee.length;e+=1){const t=ee[e];J(t),_e(t.$$)}for(J(null),ee.length=0;te.length;)te.pop()();for(let e=0;e<ne.length;e+=1){const t=ne[e];se.has(t)||(se.add(t),t())}ne.length=0}while(ee.length);for(;re.length;)re.pop()();ie=!1,ce=!1,se.clear()}}function _e(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ae)}}let le;function de(e,t,n){e.dispatchEvent(function(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}(`${t?"intro":"outro"}${n}`))}const fe=new Set;let pe;function he(){pe={r:0,c:[],p:pe}}function be(){pe.r||s(pe.c),pe=pe.p}function we(e,t){e&&e.i&&(fe.delete(e),e.i(t))}function me(e,t,n,r){if(e&&e.o){if(fe.has(e))return;fe.add(e),pe.c.push((()=>{fe.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const ge={duration:0};function ke(e,t,n,i){let a=t(e,n),c=i?0:1,_=null,l=null,d=null;function f(){d&&function(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),o=n.length-r.length;o&&(e.style.animation=r.join(", "),I-=o,I||v((()=>{I||(Z.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),Z.clear())})))}(e,d)}function p(e,t){const n=e.b-c;return t*=Math.abs(n),{a:c,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function h(t){const{delay:n=0,duration:i=300,easing:u=o,tick:h=r,css:b}=a||ge,w={start:y()+n,b:t};t||(w.group=pe,pe.r+=1),_||l?l=w:(b&&(f(),d=H(e,c,t,i,n,u,b)),t&&h(0,1),_=p(w,i),ae((()=>de(e,t,"start"))),function(e){let t;0===$.size&&v(q),new Promise((n=>{$.add(t={c:e,f:n})}))}((t=>{if(l&&t>l.start&&(_=p(l,i),l=null,de(e,_.b,"start"),b&&(f(),d=H(e,c,_.b,_.duration,0,u,a.css))),_)if(t>=_.end)h(c=_.b,1-c),de(e,_.b,"end"),l||(_.b?f():--_.group.r||s(_.group.c)),_=null;else if(t>=_.start){const e=t-_.start;c=_.a+_.d*u(e/_.duration),h(c,1-c)}return!(!_&&!l)})))}return{run(e){u(a)?(le||(le=Promise.resolve(),le.then((()=>{le=null}))),le).then((()=>{a=a(),h(e)})):h(e)},end(){f(),_=l=null}}}function ye(e,t){const n={},r={},o={$$scope:1};let i=e.length;for(;i--;){const a=e[i],c=t[i];if(c){for(const e in a)e in c||(r[e]=1);for(const e in c)o[e]||(n[e]=c[e],o[e]=1);e[i]=c}else for(const e in a)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function ve(e){return"object"==typeof e&&null!==e?e:{}}let $e;function qe(e){e&&e.c()}function Ce(e,t,n,r){const{fragment:o,on_mount:i,on_destroy:c,after_update:_}=e.$$;o&&o.m(t,n),r||ae((()=>{const t=i.map(a).filter(u);c?c.push(...t):s(t),e.$$.on_mount=[]})),_.forEach(ae)}function xe(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ee(e,t,n,o,i,a,u,_=[-1]){const l=G;J(e);const d=e.$$={fragment:null,ctx:null,props:a,update:r,not_equal:i,bound:c(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:t.context||[]),callbacks:c(),dirty:_,skip_bound:!1,root:t.target||l.$$.root};u&&u(d.root);let f=!1;if(d.ctx=n?n(e,t.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),f&&function(e,t){-1===e.$$.dirty[0]&&(ee.push(e),ie||(ie=!0,oe.then(ue)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],d.update(),f=!0,s(d.before_update),d.fragment=!!o&&o(d.ctx),t.target){if(t.hydrate){C=!0;const e=function(e){return Array.from(e.childNodes)}(t.target);d.fragment&&d.fragment.l(e),e.forEach(S)}else d.fragment&&d.fragment.c();t.intro&&we(e.$$.fragment),Ce(e,t.target,t.anchor,t.customElement),C=!1,ue()}J(l)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&($e=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(a).filter(u);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){s(this.$$.on_disconnect)}$destroy(){xe(this,1),this.$destroy=r}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!l(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class je{$destroy(){xe(this,1),this.$destroy=r}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!l(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}},3330:(e,t,n)=>{n.d(t,{fZ:()=>i});var r=n(2535);const o=[];function i(e,t=r.ZTd){let n;const i=new Set;function a(t){if((0,r.N8)(e,t)&&(e=t,n)){const t=!o.length;for(const t of i)t[1](),o.push(t,e);if(t){for(let e=0;e<o.length;e+=2)o[e][0](o[e+1]);o.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(o,c=r.ZTd){const s=[o,c];return i.add(s),1===i.size&&(n=t(a)||r.ZTd),o(e),()=>{i.delete(s),0===i.size&&(n(),n=null)}}}}}},__webpack_module_cache__={},deferred,inProgress,loadStylesheet,installedCssChunks;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.loaded=!0,n.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,t,n,r)=>{if(!t){var o=1/0;for(s=0;s<deferred.length;s++){for(var[t,n,r]=deferred[s],i=!0,a=0;a<t.length;a++)(!1&r||o>=r)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](t[a])))?t.splice(a--,1):(i=!1,r<o&&(o=r));if(i){deferred.splice(s--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var s=deferred.length;s>0&&deferred[s-1][2]>r;s--)deferred[s]=deferred[s-1];deferred[s]=[t,n,r]},__webpack_require__.F={},__webpack_require__.E=e=>{Object.keys(__webpack_require__.F).map((t=>{__webpack_require__.F[t](e)}))},__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((t,n)=>(__webpack_require__.f[n](e,t),t)),[])),__webpack_require__.u=e=>"js/"+({321:"core",327:"appComponent"}[e]||e)+".js",__webpack_require__.miniCssF=e=>"css/"+(327===e?"appComponent":e)+".css",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),inProgress={},__webpack_require__.l=(e,t,n,r)=>{if(inProgress[e])inProgress[e].push(t);else{var o,i;if(void 0!==n)for(var a=document.getElementsByTagName("script"),c=0;c<a.length;c++){var s=a[c];if(s.getAttribute("src")==e){o=s;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,__webpack_require__.nc&&o.setAttribute("nonce",__webpack_require__.nc),o.src=e),inProgress[e]=[t];var u=(t,n)=>{o.onerror=o.onload=null,clearTimeout(_);var r=inProgress[e];if(delete inProgress[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(n))),t)return t(n)},_=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),i&&document.head.appendChild(o)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var t=__webpack_require__.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e+"../"})(),loadStylesheet=e=>new Promise(((t,n)=>{var r=__webpack_require__.miniCssF(e),o=__webpack_require__.p+r;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var a;if((o=(a=i[r]).getAttribute("data-href"))===e||o===t)return a}})(r,o))return t();((e,t,n,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,o.parentNode.removeChild(o),r(s)}},o.href=t,document.head.appendChild(o)})(e,o,t,n)})),installedCssChunks={143:0},__webpack_require__.f.miniCss=(e,t)=>{installedCssChunks[e]?t.push(installedCssChunks[e]):0!==installedCssChunks[e]&&{324:1,327:1,573:1,668:1,716:1,747:1,860:1,880:1,933:1}[e]&&t.push(installedCssChunks[e]=loadStylesheet(e).then((()=>{installedCssChunks[e]=0}),(t=>{throw delete installedCssChunks[e],t})))},(()=>{var e={143:0};__webpack_require__.f.j=(t,n)=>{var r=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=o);var i=__webpack_require__.p+__webpack_require__.u(t),a=new Error;__webpack_require__.l(i,(n=>{if(__webpack_require__.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,r[1](a)}}),"chunk-"+t,t)}},__webpack_require__.F.j=t=>{if(!__webpack_require__.o(e,t)||void 0===e[t]){e[t]=null;var n=document.createElement("link");__webpack_require__.nc&&n.setAttribute("nonce",__webpack_require__.nc),n.rel="prefetch",n.as="script",n.href=__webpack_require__.p+__webpack_require__.u(t),document.head.appendChild(n)}},__webpack_require__.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[i,a,c]=n,s=0;if(i.some((t=>0!==e[t]))){for(r in a)__webpack_require__.o(a,r)&&(__webpack_require__.m[r]=a[r]);if(c)var u=c(__webpack_require__)}for(t&&t(n);s<i.length;s++)o=i[s],__webpack_require__.o(e,o)&&e[o]&&e[o][0](),e[i[s]]=0;return __webpack_require__.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),__webpack_require__.O(0,[143],(()=>{__webpack_require__.E(327)}),5);var __webpack_exports__={};(()=>{var e=__webpack_require__(7883),t=__webpack_require__(3330);"http:"!=window.location.protocol||window.disableSecureRedirect||(window.document.body.innerText="Redirecting to secure",window.location.href=window.location.href.replace("http:","https:")),(0,e.vQ)();const n=new URL(__webpack_require__.p);window.bURL=window.bURL??n.href.substring(n.origin.length,n.href.length-1),window.apiURL=window.apiURL??"/api",window.useLocalCore&&"serviceWorker"in navigator&&(window.serviceWorkerStatus=(0,t.fZ)("preparing"),__webpack_require__.e(385).then(__webpack_require__.bind(__webpack_require__,3385)).then((e=>e.register(new URL(n+"service-worker.js").href,{registrationOptions:{scope:n.href},ready(e){window.serviceWorkerStatus.set("ready")},updatefound(e){window.serviceWorkerStatus.set("downloading")},updated(e){window.serviceWorkerStatus.set("refresh")},offline(){window.serviceWorkerStatus.set("offline")},error(e){console.error("Error during service worker registration:",e)}})))),__webpack_require__.e(327).then(__webpack_require__.bind(__webpack_require__,2444)).then((e=>window.app=new e.default({target:window.document.body})))})(),__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.js.map