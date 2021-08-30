(()=>{var e,t,n={8424:(e,t,n)=>{"use strict";var r={};n.r(r),n.d(r,{Chit:()=>j,Client:()=>v,Group:()=>h,Payment:()=>G}),n(8706);var o=n(9668);function i(e){return async function({phone:t}){return(await e.Client.findOne({phone:t}))?.name||!1}}function a(e){return Number.isSafeInteger(e)&&Number.isFinite(e)&&e>=0}var c=n(9887),s=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class u{constructor(e){this.uuid=e||(0,c.Z)()}}s([(0,o.bsY)(),l("design:type",Number)],u.prototype,"id",void 0),s([(0,o.sgG)({type:"uuid",unique:!0}),l("design:type",String)],u.prototype,"uuid",void 0),s([(0,o.erC)(),l("design:type",Date)],u.prototype,"createdAt",void 0),s([(0,o.RUf)(),l("design:type",Date)],u.prototype,"updatedAt",void 0);var p=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends u{constructor(){super(...arguments),this.isActive=!1}activate(){if(this.isActive)throw new Error("Group is already active");let e=0;if(this.chits.forEach((t=>{e+=t.value})),e<this.totalValue)throw new Error("Chits are not sufficient");if(e>this.totalValue)throw new Error("Chits are more than the limit");this.isActive=!0}};p([(0,o.sgG)({unique:!0}),f("design:type",String)],d.prototype,"name",void 0),p([(0,o.sgG)({nullable:!1}),f("design:type",String)],d.prototype,"batch",void 0),p([(0,o.sgG)("integer"),f("design:type",Number)],d.prototype,"month",void 0),p([(0,o.sgG)({nullable:!1}),f("design:type",Number)],d.prototype,"year",void 0),p([(0,o.sgG)({nullable:!1,type:"integer"}),f("design:type",Number)],d.prototype,"totalValue",void 0),p([(0,o.sgG)({nullable:!1}),f("design:type",Boolean)],d.prototype,"isActive",void 0),p([(0,o.IFc)((e=>j),(e=>e.group),{cascade:!0}),f("design:type",Array)],d.prototype,"chits",void 0),d=p([(0,o.JHW)("groups")],d);const h=d;var y=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let w=class extends u{};y([(0,o.sgG)(),g("design:type",String)],w.prototype,"name",void 0),y([(0,o.sgG)(),g("design:type",String)],w.prototype,"phone",void 0),y([(0,o.sgG)(),g("design:type",String)],w.prototype,"address",void 0),y([(0,o.IFc)((e=>j),(e=>e.client)),g("design:type",Array)],w.prototype,"chits",void 0),w=y([(0,o.JHW)("clients")],w);const v=w;var b=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let O=class extends u{constructor(){super(...arguments),this.wonAtMonth=null}};b([(0,o.Q2k)(),(0,o.hAt)((e=>v),(e=>e.chits)),m("design:type",v)],O.prototype,"client",void 0),b([(0,o.Q2k)(),(0,o.hAt)((e=>h),(e=>e.chits)),m("design:type",h)],O.prototype,"group",void 0),b([(0,o.sgG)({nullable:!1,type:"integer"}),m("design:type",Number)],O.prototype,"value",void 0),b([(0,o.IFc)((e=>G),(e=>e.chit),{cascade:!0}),m("design:type",Array)],O.prototype,"payments",void 0),b([(0,o.sgG)({type:"integer",nullable:!0}),m("design:type",Object)],O.prototype,"wonAtMonth",void 0),O=b([(0,o.JHW)("chits")],O);const j=O;var C=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},E=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let R=class extends u{get toBePaid(){let e=this.chit.value/20;const t=e/5;return this.chit.wonAtMonth&&this.chit.wonAtMonth<this.imonth&&(e+=t),e}};C([(0,o.Q2k)(),(0,o.hAt)((e=>j),(e=>e.payments)),E("design:type",j)],R.prototype,"chit",void 0),C([(0,o.sgG)("integer",{nullable:!1}),E("design:type",Number)],R.prototype,"imonth",void 0),C([(0,o.sgG)({nullable:!1}),E("design:type",Boolean)],R.prototype,"ispaid",void 0),R=C([(0,o.JHW)("payments")],R);const G=R;function A(e){return async function({clientUuid:t,groupUuid:n,value:r}){const o=await e.Client.findOne({uuid:t});if(!o)throw new Error("Client does not exists");const i=await e.Group.findOne({uuid:n});if(!i)throw new Error("Group does not exists");if(i.isActive)throw new Error("Cannot add chit to an active group");if(!a(r))throw new Error("Value of an chit is not valid");let c=new j;c.client=o,c.group=i,c.value=r,c.wonAtMonth=null,c.payments=[];for(let e=1;e<=20;e++){const t=new G;t.chit=c,t.imonth=e,t.ispaid=!1,c.payments.push(t)}return c=await e.Chit.save(c),Object.freeze(c)}}function S(e){return async function({year:t,month:n,batch:r,totalValue:o}){if(!a(t))throw new Error("Year is not valid");if(!a(n))throw new Error("Month is not valid");if(r.length>3)throw new Error("Batch cannot be longer than 3");if(!a(o))throw new Error("Specified total value is not valid");if(await e.Group.count({year:t,month:n,batch:r})>0)throw new Error("Group already exists");let i=new h;return i.year=t,i.month=n,i.batch=r,i.totalValue=o,i.isActive=!1,i.chits=[],i.name=t+"-"+n+"-"+r,i=await e.Group.save(i),Object.freeze(i)}}function P(e){return async function({name:t,phone:n,address:r}){if(t.length<3)throw new Error("Name must be longer than 2 characters");if(n.length<10)throw new Error("Phone number must be longer than 10 characters");if(r.length<5)throw new Error("Address must be longer than 5 characters");if(await e.Client.count({phone:n})>0)throw new Error("Client with same phone number already exists");let o=new v;return o.name=t,o.phone=n,o.address=r,o.chits=[],o=await e.Client.save(o),Object.freeze(o)}}function x(e){return async function({clientUuid:t,groupUuid:n,value:r}){const o=t?await e.Client.findOne({uuid:t}):void 0,i=n?await e.Group.findOne({uuid:n}):void 0;if(r&&!a(r))throw new Error("Value of an chit is not valid");const c=e.Chit.find({client:o,group:i,value:r});return Object.freeze(c)}}function D(e){return async function(t){if(!t||!t.partial)return Object.freeze(await e.Group.find());if(t.partial.year&&!a(t.partial.year))throw new Error("Year is not valid");if(t.partial.month&&!a(t.partial.month))throw new Error("Month is not valid");if(t.partial.batch&&t.partial.batch.length>3)throw new Error("Batch cannot be longer than 3");if(t.partial.totalValue&&!a(t.partial.totalValue))throw new Error("Specified total value is not valid");let n=await e.Group.find({where:t.partial});return Object.freeze(n)}}function k(e){return async function(t){if(!t||!t.partial)return Object.freeze(await e.Client.find());if(t.partial.name&&t.partial.name.length<3)throw new Error("Name must be longer than 2 characters");if(t.partial.phone&&t.partial.phone.length<10)throw new Error("Phone number must be longer than 10 characters");if(t.partial.address&&t.partial.address.length<5)throw new Error("Address must be longer than 5 characters");const n=await e.Client.find({where:t.partial});return Object.freeze(n)}}function N(e){return async function({name:t}){return!!await e.Group.findOne({name:t})}}class I{constructor(){this.isConnected=!1}async connect(e){if(this.isConnected)throw new Error("This instance is already connected");this.connection=await(0,o.I5I)({...e,entities:Object.values(r),synchronize:!0}),this.isConnected=!0,this.loadActions(),this.connection.manager.query}async close(){if(!this.isConnected||!this.connection)return console.error(new Error("Connection is already closed"));await this.connection.close(),this.isConnected=!1}loadActions(){if(!this.connection)throw new Error("Cannot load actions as the instance is not connected");const e={};for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)){const n=r[t];e[t]=this.connection.getRepository(n)}this.actions=function(e){return{checkPhone:i(e),checkGroup:N(e),createChit:A(e),createGroup:S(e),createClient:P(e),findClients:k(e),findGroups:D(e),findChits:x(e)}}(e)}}var M=n(645),z=n.n(M),F=n(8500),V=n(927),B=n(6891);self.window=self,V.config({name:"chitDataStore",storeName:"chitDataStore"});let q=null;const T={initCore:async function(e="chitDatabase"){if(q)return console.error("Core is already atarted to initilise");q=(async()=>{self.SQL||(self.SQL=await z()({locateFile:()=>F}));const t=await V.getItem(e)??void 0,n=new I;return await n.connect({type:"sqljs",database:t,autoSave:!0,logging:!1,autoSaveCallback(t){V.setItem(e,t)}}),n})()},getDatabaseBackup:async function(e="chitDatabase"){const t=await V.getItem(e);if(!t)throw new Error("Database file does not exists");return new File([t],"backup.sqlite3",{type:"application/vnd.sqlite3",lastModified:Date.now()})},restoreDatabase:async function(e,t="chitDatabase"){var n;await V.setItem(t,new Int8Array(await(n=e,new Promise(((e,t)=>{const r=new FileReader;r.addEventListener("loadend",(t=>e(t.target.result))),r.addEventListener("error",t),r.readAsArrayBuffer(n)})))))},action:async(e,t)=>{if(!q)throw new Error("Core is not initilised or even starting to initilise");return await(await q).actions[e](t)}};(0,B.Jj)(T)},617:()=>{},9356:()=>{},1497:()=>{},7021:()=>{}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return n[e](i,i.exports,o),i.loaded=!0,i.exports}o.m=n,o.x=()=>{var e=o.O(void 0,[321],(()=>o(8424)));return o.O(e)},e=[],o.O=(t,n,r,i)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,r,i]=e[u],c=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>"js/"+e+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{var e={685:1};o.f.i=(t,n)=>{e[t]||importScripts(o.p+o.u(t))};var t=self.webpackChunk=self.webpackChunk||[],n=t.push.bind(t);t.push=t=>{var[r,i,a]=t;for(var c in i)o.o(i,c)&&(o.m[c]=i[c]);for(a&&a(o);r.length;)e[r.pop()]=1;n(t)}})(),t=o.x,o.x=()=>o.e(321).then(t),o.x()})();
//# sourceMappingURL=685.js.map