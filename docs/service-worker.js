if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,c,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return r;case"module":return a;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./service-worker.js",["./workbox-5f17b7ce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/sql-wasm.wasm",revision:"8b3b3fe7c9c611db53b9e43661bf38dd"},{url:"css/324.css",revision:"a5be0e4549ad7642c3ac311f8480fa80"},{url:"css/573.css",revision:"24a0e4bc9693476f3535cf5049250dd8"},{url:"css/668.css",revision:"d7af360e6583df696962f8eea130d856"},{url:"css/716.css",revision:"de94a508a0ff4fcb8eac9c7a7ef7503f"},{url:"css/747.css",revision:"338aa96889ae19d84dfb016e8a018c30"},{url:"css/860.css",revision:"a2bbb3ade4efdbc6ce9ee46dad9b34d8"},{url:"css/880.css",revision:"859e18168866a8b29e20e7fb981aef56"},{url:"css/933.css",revision:"d456de5630431b077cad8c7d041a2e54"},{url:"css/appComponent.css",revision:"16dbce2faa647db13e0e75594c6374bc"},{url:"index.html",revision:"84b7c2236e2d27ba6f5e738cf44ac819"},{url:"js/271.js",revision:"6b84fac7ec927eb36f1a5953a6fe19a1"},{url:"js/271.js.LICENSE.txt",revision:"f386bc74499748ca33ac8e50617c82a9"},{url:"js/324.js",revision:"cb803a20519b6a153f06a44fcae506d4"},{url:"js/385.js",revision:"1781cccac5bb2886582da0d9a03e1753"},{url:"js/573.js",revision:"2a9ec3bacbfd0164708df7094faa1cd4"},{url:"js/668.js",revision:"a2e51ab557daa01cfa16a19566233216"},{url:"js/716.js",revision:"c31c559baef09069dcd9cc4f0ceb5332"},{url:"js/747.js",revision:"f3ab0350b1585f2572f03b3e49c21f74"},{url:"js/860.js",revision:"372033a7ed5fc1f1a5ea057a97427a38"},{url:"js/880.js",revision:"7bb4edf33fd7641dff65c1d6649c3024"},{url:"js/933.js",revision:"e21b519fb468319687a298605d47adfd"},{url:"js/app.js",revision:"4165de0d6b28975d9143b427257e07c7"},{url:"js/appComponent.js",revision:"d85caa9fded5bfd5681a0f15c2b97d20"},{url:"js/core.js",revision:"353a269967d24d7c249bfbf134c691db"},{url:"manifest.webmanifest",revision:"aa536b5ded74d666ac83689f00af9897"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=service-worker.js.map
