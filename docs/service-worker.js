if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return r[s]||(e=new Promise((async e=>{if("document"in self){const r=document.createElement("script");r.src=s,document.head.appendChild(r),r.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!r[s])throw new Error(`Module ${s} didn’t register its module`);return r[s]}))},e=(e,r)=>{Promise.all(e.map(s)).then((s=>r(1===s.length?s[0]:s)))},r={require:Promise.resolve(e)};self.define=(e,c,i)=>{r[e]||(r[e]=Promise.resolve().then((()=>{let r={};const f={uri:location.origin+e.slice(1)};return Promise.all(c.map((e=>{switch(e){case"exports":return r;case"module":return f;default:return s(e)}}))).then((s=>{const e=i(...s);return r.default||(r.default=e),r}))})))}}define("./service-worker.js",["./workbox-5f17b7ce"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/sql-wasm.wasm",revision:"8b3b3fe7c9c611db53b9e43661bf38dd"},{url:"css/324.css",revision:"a5be0e4549ad7642c3ac311f8480fa80"},{url:"css/573.css",revision:"24a0e4bc9693476f3535cf5049250dd8"},{url:"css/668.css",revision:"d7af360e6583df696962f8eea130d856"},{url:"css/716.css",revision:"de94a508a0ff4fcb8eac9c7a7ef7503f"},{url:"css/747.css",revision:"8f1edfb9736ff200518265d9f1bf1ae6"},{url:"css/860.css",revision:"1f7e7e049e6018e6c3080b3c5a4d5678"},{url:"css/880.css",revision:"859e18168866a8b29e20e7fb981aef56"},{url:"css/933.css",revision:"d456de5630431b077cad8c7d041a2e54"},{url:"css/appComponent.css",revision:"6df90681fc41a942cda81749a506c130"},{url:"index.html",revision:"f68d2abe8a165fbc6634cd8a8a645b65"},{url:"js/271.js",revision:"65b78f0fe04c768c7519f594a2c0ff49"},{url:"js/271.js.LICENSE.txt",revision:"0dc782cb313164b20d1ccc2b8332ff85"},{url:"js/324.js",revision:"cb803a20519b6a153f06a44fcae506d4"},{url:"js/573.js",revision:"2a9ec3bacbfd0164708df7094faa1cd4"},{url:"js/668.js",revision:"a2e51ab557daa01cfa16a19566233216"},{url:"js/671.js",revision:"ce490bd2702c79e687060b13337a8715"},{url:"js/716.js",revision:"c31c559baef09069dcd9cc4f0ceb5332"},{url:"js/747.js",revision:"9165f8cf8a275fbc29c307bbd6f59df4"},{url:"js/860.js",revision:"0e101a665326cf9c4e8065c831442d5b"},{url:"js/880.js",revision:"6d9c7e1b74d744ec1ba92a700a071447"},{url:"js/933.js",revision:"e21b519fb468319687a298605d47adfd"},{url:"js/app.js",revision:"c3c223ab826355366f106907497f74dd"},{url:"js/appComponent.js",revision:"343d8df233a318a6e95dce3bbeee3513"},{url:"js/core.js",revision:"129fda9efabf30a4110620b1622d9e54"}],{}),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=service-worker.js.map
