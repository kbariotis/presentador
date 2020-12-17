(()=>{var e,s,r,t,a,n,o,d={372:(e,s,r)=>{"use strict";r.r(s)},430:(e,s,r)=>{"use strict";r.r(s)},346:(e,s,r)=>{r(683);const{slideNext:t,slidePrev:a}=r(355),n=document.getElementsByTagName("body")[0],o=document.getElementsByClassName("arrow-left")[0],d=document.getElementsByClassName("arrow-right")[0];n.onkeyup=e=>{"ArrowRight"===e.key&&(d.classList.remove("active"),t()),"ArrowLeft"===e.key&&(o.classList.remove("active"),a())},n.onkeydown=e=>{"ArrowRight"===e.key&&d.classList.add("active"),"ArrowLeft"===e.key&&o.classList.add("active")};const i=e=>{e.stopPropagation(),o.classList.remove("active"),d.classList.remove("active")};d.onclick=e=>e.preventDefault(),o.onclick=e=>e.preventDefault(),d.onmouseup=i,o.onmouseup=i,d.onmousedown=e=>{e.stopPropagation(),e.preventDefault(),d.classList.add("active"),t()},o.onmousedown=e=>{e.preventDefault(),o.classList.add("active"),a()},n.onmousedown=e=>{const s=document.getElementsByClassName("slides")[0],r=document.getElementsByClassName("icons")[0];if("A"!==e.target.tagName&&!r.contains(e.target)&&s.contains(e.target)){const s=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)/2;e.clientX>s?(d.classList.add("active"),t()):(o.classList.add("active"),a())}},n.onmouseup=i},683:(e,s,r)=>{const t=r(577),a=document.getElementsByClassName("arrow-fullscreen")[0],n=document.getElementsByClassName("arrow-exit-fullscreen")[0];t.isEnabled||a.remove(),a.onclick=e=>e.preventDefault(),n.onclick=e=>e.preventDefault(),a.onmousedown=e=>{e.preventDefault(),a.classList.add("active")},a.onmouseup=e=>{e.stopPropagation(),a.classList.remove("active"),t.isEnabled&&(n.classList.remove("hidden"),a.classList.add("hidden"),t.toggle())},a.onmousedown=e=>{e.preventDefault(),a.classList.add("active")},n.onmouseup=e=>{e.stopPropagation(),n.classList.remove("active"),t.isEnabled&&(a.classList.remove("hidden"),n.classList.add("hidden"),t.toggle())}},549:(e,s,r)=>{r(372),e.exports={renderSlide:async(e,s,t)=>{try{r(261)(`./${s}.scss`),e.outerHTML=t,"headerCodeblock"===s&&(await Promise.all([r.e(736),r.e(66)]).then(r.t.bind(r,768,23))).default()}catch(e){console.error(e)}},renderNotFoundSlide:e=>{try{r(430),e.outerHTML='<div class="slides twoHeaders"><div class="container"><h1>Oh 😢, looks like this slide doesn\'t exist. Try taking a step back and start from the <a href="/">beginning</a>.</h1></div></div>'}catch(e){console.error(e)}}}},355:(e,s,r)=>{"use strict";r.r(s),r.d(s,{slideTo:()=>c,slideNext:()=>l,slidePrev:()=>m});const t=r(161),{renderSlide:a,renderNotFoundSlide:n}=r(549);let o=1;function d(e){e.params.id&&(r(265)(`./${parseInt(e.params.id,10)-1}.md`).then((e=>{r(927)(`./${e.state}.scss`)})),r(265)(`./${parseInt(e.params.id,10)+1}.md`).then((e=>{r(927)(`./${e.state}.scss`)})),r(472)(`./${e.params.id}.md`).then((s=>{a(document.getElementsByClassName("slides")[0],s.state,s.html),o=parseInt(e.params.id,10)})).catch((e=>{console.log(e),e.toString().includes("Cannot find module")&&i()})))}function i(){n(document.getElementsByClassName("slides")[0])}const c=e=>{r(111)(`./${e}.md`).then((()=>{t(`/${e}`)})).catch((e=>console.error(e)))},l=()=>c(o+1),m=()=>c(o-1);t("/",(()=>d({params:{id:1}}))),t("/:id",d),t("*",i),t({click:!1})},927:(e,s,r)=>{var t={"./blockquote.scss":[154,748],"./headerCodeblock.scss":[699,184],"./headerImage.scss":[517,128],"./headerList.scss":[56,442],"./headerManyParagraphs.scss":[110,936],"./headerManyParagraphsImage.scss":[803,254],"./headerParagraphImage.scss":[980,239],"./headerSingleParagraph.scss":[574,762],"./image.scss":[965,3],"./manyImages.scss":[275,646],"./normal.scss":[840,999],"./singleHeader.scss":[695,413],"./twoHeaders.scss":[430]};function a(e){if(!r.o(t,e))return Promise.resolve().then((()=>{var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}));var s=t[e],a=s[0];return Promise.all(s.slice(1).map(r.e)).then((()=>r(a)))}a.keys=()=>Object.keys(t),a.id=927,e.exports=a},261:(e,s,r)=>{var t={"./blockquote.scss":[154,748],"./headerCodeblock.scss":[699,184],"./headerImage.scss":[517,128],"./headerList.scss":[56,442],"./headerManyParagraphs.scss":[110,936],"./headerManyParagraphsImage.scss":[803,254],"./headerParagraphImage.scss":[980,239],"./headerSingleParagraph.scss":[574,762],"./image.scss":[965,3],"./manyImages.scss":[275,646],"./normal.scss":[840,999],"./singleHeader.scss":[695,413],"./twoHeaders.scss":[430]};function a(e){if(!r.o(t,e))return Promise.resolve().then((()=>{var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}));var s=t[e],a=s[0];return Promise.all(s.slice(1).map(r.e)).then((()=>r(a)))}a.keys=()=>Object.keys(t),a.id=261,e.exports=a},265:(e,s,r)=>{var t={"./1.md":[316,283],"./2.md":[603,203],"./3.md":[650,577],"./4.md":[470,192],"./5.md":[197,813],"./6.md":[81,689],"./7.md":[11,86]};function a(e){if(!r.o(t,e))return Promise.resolve().then((()=>{var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}));var s=t[e],a=s[0];return r.e(s[1]).then((()=>r.t(a,7)))}a.keys=()=>Object.keys(t),a.id=265,e.exports=a},472:(e,s,r)=>{var t={"./1.md":[316,283],"./2.md":[603,203],"./3.md":[650,577],"./4.md":[470,192],"./5.md":[197,813],"./6.md":[81,689],"./7.md":[11,86]};function a(e){if(!r.o(t,e))return Promise.resolve().then((()=>{var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}));var s=t[e],a=s[0];return r.e(s[1]).then((()=>r.t(a,7)))}a.keys=()=>Object.keys(t),a.id=472,e.exports=a},111:(e,s,r)=>{var t={"./1.md":[316,283],"./2.md":[603,203],"./3.md":[650,577],"./4.md":[470,192],"./5.md":[197,813],"./6.md":[81,689],"./7.md":[11,86]};function a(e){if(!r.o(t,e))return Promise.resolve().then((()=>{var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}));var s=t[e],a=s[0];return r.e(s[1]).then((()=>r.t(a,7)))}a.keys=()=>Object.keys(t),a.id=111,e.exports=a}},i={};function c(e){if(i[e])return i[e].exports;var s=i[e]={exports:{}};return d[e].call(s.exports,s,s.exports,c),s.exports}c.m=d,s=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(r,t){if(1&t&&(r=this(r)),8&t)return r;if("object"==typeof r&&r){if(4&t&&r.__esModule)return r;if(16&t&&"function"==typeof r.then)return r}var a=Object.create(null);c.r(a);var n={};e=e||[null,s({}),s([]),s(s)];for(var o=2&t&&r;"object"==typeof o&&!~e.indexOf(o);o=s(o))Object.getOwnPropertyNames(o).forEach((e=>n[e]=()=>r[e]));return n.default=()=>r,c.d(a,n),a},c.d=(e,s)=>{for(var r in s)c.o(s,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((s,r)=>(c.f[r](e,s),s)),[])),c.u=e=>(({3:"image-scss",86:"7-md",128:"headerImage-scss",184:"headerCodeblock-scss",192:"4-md",203:"2-md",239:"headerParagraphImage-scss",254:"headerManyParagraphsImage-scss",283:"1-md",413:"singleHeader-scss",442:"headerList-scss",577:"3-md",646:"manyImages-scss",689:"6-md",748:"blockquote-scss",762:"headerSingleParagraph-scss",813:"5-md",936:"headerManyParagraphs-scss",999:"normal-scss"}[e]||e)+"."+c.h()+".js"),c.miniCssF=e=>(({3:"image-scss",86:"7-md",128:"headerImage-scss",179:"main",184:"headerCodeblock-scss",192:"4-md",203:"2-md",239:"headerParagraphImage-scss",254:"headerManyParagraphsImage-scss",283:"1-md",413:"singleHeader-scss",442:"headerList-scss",577:"3-md",646:"manyImages-scss",689:"6-md",736:"vendor",748:"blockquote-scss",762:"headerSingleParagraph-scss",813:"5-md",936:"headerManyParagraphs-scss",999:"normal-scss"}[e]||e)+".css"),c.h=()=>"0aae814a7a4e8f119356",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),r={},t="presentador:",c.l=(e,s,a)=>{if(r[e])r[e].push(s);else{var n,o;if(void 0!==a)for(var d=document.getElementsByTagName("script"),i=0;i<d.length;i++){var l=d[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==t+a){n=l;break}}n||(o=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,c.nc&&n.setAttribute("nonce",c.nc),n.setAttribute("data-webpack",t+a),n.src=e),r[e]=[s];var m=(s,t)=>{n.onerror=n.onload=null,clearTimeout(u);var a=r[e];if(delete r[e],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(t))),s)return s(t)},u=setTimeout(m.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=m.bind(null,n.onerror),n.onload=m.bind(null,n.onload),o&&document.head.appendChild(n)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.F={},c.E=e=>{Object.keys(c.F).map((s=>{c.F[s](e)}))},(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var s=c.g.document;if(!e&&s&&(s.currentScript&&(e=s.currentScript.src),!e)){var r=s.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),a=c.x,c.x=()=>{var e=a();return[748,184,128,442,936,254,239,762,3,646,999,413,283,203,577,192,813,689,86].map(c.E),e},n=e=>new Promise(((s,r)=>{var t=c.miniCssF(e),a=c.p+t;if(((e,s)=>{for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var a=(o=r[t]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===s))return o}var n=document.getElementsByTagName("style");for(t=0;t<n.length;t++){var o;if((a=(o=n[t]).getAttribute("data-href"))===e||a===s)return o}})(t,a))return s();((e,s,r,t)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=n=>{if(a.onerror=a.onload=null,"load"===n.type)r();else{var o=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.href||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=o,i.request=d,a.parentNode.removeChild(a),t(i)}},a.href=s,document.head.appendChild(a)})(e,a,s,r)})),o={179:0},c.f.miniCss=(e,s)=>{o[e]?s.push(o[e]):0!==o[e]&&{3:1,66:1,128:1,184:1,239:1,254:1,413:1,442:1,646:1,748:1,762:1,936:1,999:1}[e]&&s.push(o[e]=n(e).then((()=>{o[e]=0}),(s=>{throw delete o[e],s})))},(()=>{var e={179:0},s=[[346,736]];c.f.j=(s,r)=>{var t=c.o(e,s)?e[s]:void 0;if(0!==t)if(t)r.push(t[2]);else{var a=new Promise(((r,a)=>{t=e[s]=[r,a]}));r.push(t[2]=a);var n=c.p+c.u(s),o=new Error;c.l(n,(r=>{if(c.o(e,s)&&(0!==(t=e[s])&&(e[s]=void 0),t)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;o.message="Loading chunk "+s+" failed.\n("+a+": "+n+")",o.name="ChunkLoadError",o.type=a,o.request=n,t[1](o)}}),"chunk-"+s)}},c.F.j=s=>{if(!c.o(e,s)||void 0===e[s]){e[s]=null;var r=document.createElement("link");c.nc&&r.setAttribute("nonce",c.nc),r.rel="prefetch",r.as="script",r.href=c.p+c.u(s),document.head.appendChild(r)}};var r=()=>{};function t(){for(var r,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var d=a[o];0!==e[d]&&(n=!1)}n&&(s.splice(t--,1),r=c(c.s=a[0]))}return 0===s.length&&(c.x(),c.x=()=>{}),r}c.x=()=>{c.x=()=>{},n=n.slice();for(var e=0;e<n.length;e++)a(n[e]);return(r=t)()};var a=t=>{for(var a,n,[d,i,l,m]=t,u=0,h=[];u<d.length;u++)n=d[u],c.o(e,n)&&e[n]&&h.push(e[n][0]),e[n]=0;for(a in i)c.o(i,a)&&(c.m[a]=i[a]);for(l&&l(c),o(t);h.length;)h.shift()();return m&&s.push.apply(s,m),r()},n=self.webpackChunkpresentador=self.webpackChunkpresentador||[],o=n.push.bind(n);n.push=a})(),c.x()})();