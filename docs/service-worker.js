if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,c,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return r;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./service-worker.js",["./workbox-5f17b7ce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/sql-wasm.wasm",revision:"8b3b3fe7c9c611db53b9e43661bf38dd"},{url:"css/324.css",revision:"a5be0e4549ad7642c3ac311f8480fa80"},{url:"css/573.css",revision:"24a0e4bc9693476f3535cf5049250dd8"},{url:"css/668.css",revision:"d7af360e6583df696962f8eea130d856"},{url:"css/716.css",revision:"de94a508a0ff4fcb8eac9c7a7ef7503f"},{url:"css/747.css",revision:"2e92e53e89cafa853f5df492edf14184"},{url:"css/860.css",revision:"d3e5718f6551c44ed5d5957d24b4ef80"},{url:"css/880.css",revision:"859e18168866a8b29e20e7fb981aef56"},{url:"css/933.css",revision:"d456de5630431b077cad8c7d041a2e54"},{url:"css/appComponent.css",revision:"0f8f564016c8c25f0a37c81b344235d8"},{url:"index.html",revision:"7bd60c96374eb58a568cbfb1ab108fd6"},{url:"js/324.js",revision:"fa8b3026ba84ded3a91dd710b1f5440b"},{url:"js/385.js",revision:"1781cccac5bb2886582da0d9a03e1753"},{url:"js/573.js",revision:"55406c70e462c9a5259bd2dd9e2bf2a7"},{url:"js/668.js",revision:"a34836f719bddc70a8259e5c183b19d8"},{url:"js/716.js",revision:"7ff3566baddc294691b123eea58772ba"},{url:"js/721.js",revision:"19ff38e3562b0ceb7b721f1dbe5fb9e0"},{url:"js/721.js.LICENSE.txt",revision:"249cf7151da8d50c87840a7b5e3137b3"},{url:"js/747.js",revision:"753c4c3338b77a7e64d43e179995e2ed"},{url:"js/860.js",revision:"2b1a44f1403ab0880b45e639950736fe"},{url:"js/880.js",revision:"eba8bd3a8bd995a9f2ddfcb03bb58d9a"},{url:"js/904.js",revision:"dfee2f1b90b2f80720be1cc5b2a35560"},{url:"js/933.js",revision:"8e0e8b67bac9fccd2c4cac9429f9b082"},{url:"js/app.js",revision:"9c27e403dca90ea816d6076f3acb3d3d"},{url:"js/appComponent.js",revision:"dce0dda2e58cc6fbfa627aeee8c8d4db"},{url:"manifest.webmanifest",revision:"aa536b5ded74d666ac83689f00af9897"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=service-worker.js.map
