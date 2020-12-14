(()=>{var e={372:(e,t,s)=>{"use strict";s.r(t)},154:(e,t,s)=>{"use strict";s.r(t)},699:(e,t,s)=>{"use strict";s.r(t)},517:(e,t,s)=>{"use strict";s.r(t)},56:(e,t,s)=>{"use strict";s.r(t)},110:(e,t,s)=>{"use strict";s.r(t)},803:(e,t,s)=>{"use strict";s.r(t)},980:(e,t,s)=>{"use strict";s.r(t)},574:(e,t,s)=>{"use strict";s.r(t)},965:(e,t,s)=>{"use strict";s.r(t)},275:(e,t,s)=>{"use strict";s.r(t)},840:(e,t,s)=>{"use strict";s.r(t)},695:(e,t,s)=>{"use strict";s.r(t)},430:(e,t,s)=>{"use strict";s.r(t)},346:(e,t,s)=>{s(683);const r=s(161),{renderSlide:a,renderNotFoundSlide:o}=s(549);let i=1;function n(){o(document.getElementsByClassName("slides")[0])}r("/",(()=>r("/1"))),r("/:id",(function(e){if(e.params.id)try{const{html:t,state:r}=s(220)(`./${e.params.id}.md`);a(document.getElementsByClassName("slides")[0],r,t),i=parseInt(e.params.id,10)}catch(e){e.toString().includes("Cannot find module")&&n()}})),r("*",n),r({hashbang:!0,click:!1});const d=e=>{try{s(220)(`./${e}.md`),r(`/${e}`)}catch(e){}},l=document.getElementsByTagName("body")[0],c=document.getElementsByClassName("arrow-left")[0],u=document.getElementsByClassName("arrow-right")[0];l.onkeyup=e=>{"ArrowRight"===e.key&&(u.classList.remove("active"),d(i+1)),"ArrowLeft"===e.key&&(c.classList.remove("active"),d(i-1))},l.onkeydown=e=>{"ArrowRight"===e.key&&u.classList.add("active"),"ArrowLeft"===e.key&&c.classList.add("active")};const h=e=>{const t=document.getElementsByClassName("slides")[0],s=document.getElementsByClassName("icons")[0];if("A"!==e.target.tagName&&!s.contains(e.target)&&t.contains(e.target)){const t=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)/2;e.clientX>t?(u.classList.add("active"),d(i+1)):(c.classList.add("active"),d(i-1))}},m=e=>{e.stopPropagation(),c.classList.remove("active"),u.classList.remove("active")};u.onclick=e=>e.preventDefault(),c.onclick=e=>e.preventDefault(),u.onmouseup=m,c.onmouseup=m,u.onmousedown=e=>{e.stopPropagation(),e.preventDefault(),u.classList.add("active"),d(i+1)},c.onmousedown=e=>{e.preventDefault(),c.classList.add("active"),d(i-1)},l.onmousedown=h,l.ontouchstart=h,l.ontouchend=m,l.onmouseup=m},683:(e,t,s)=>{const r=s(577),a=document.getElementsByClassName("arrow-fullscreen")[0],o=document.getElementsByClassName("arrow-exit-fullscreen")[0];r.isEnabled||a.remove(),a.onclick=e=>e.preventDefault(),o.onclick=e=>e.preventDefault(),a.onmousedown=e=>{e.preventDefault(),a.classList.add("active")},a.onmouseup=e=>{e.stopPropagation(),a.classList.remove("active"),r.isEnabled&&(o.classList.remove("hidden"),a.classList.add("hidden"),r.toggle())},a.onmousedown=e=>{e.preventDefault(),a.classList.add("active")},o.onmouseup=e=>{e.stopPropagation(),o.classList.remove("active"),r.isEnabled&&(a.classList.remove("hidden"),o.classList.add("hidden"),r.toggle())}},549:(e,t,s)=>{const r=s(802);s(954),s(372),r.registerLanguage("javascript",s(344)),r.registerLanguage("markdown",s(839)),e.exports={renderSlide:(e,t,a)=>{try{s(74)(`./${t}.scss`),e.outerHTML=a;const o=document.querySelectorAll("pre code");o.length&&r.highlightBlock(o[0])}catch(e){console.error(e)}},renderNotFoundSlide:e=>{try{s(430),e.outerHTML='<div class="slides twoHeaders"><div class="container"><h1>Oh 😢, looks like this slide doesn\'t exist. Try taking a step back and start from the <a href="/">beginning</a>.</h1></div></div>'}catch(e){console.error(e)}}}},74:(e,t,s)=>{var r={"./blockquote.scss":154,"./headerCodeblock.scss":699,"./headerImage.scss":517,"./headerList.scss":56,"./headerManyParagraphs.scss":110,"./headerManyParagraphsImage.scss":803,"./headerParagraphImage.scss":980,"./headerSingleParagraph.scss":574,"./image.scss":965,"./manyImages.scss":275,"./normal.scss":840,"./singleHeader.scss":695,"./twoHeaders.scss":430};function a(e){var t=o(e);return s(t)}function o(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=74},316:(e,t,s)=>{"use strict";s.r(t),s.d(t,{html:()=>r,state:()=>a});const r='<div class="slides headerList"><div class="top"><h1>📽 Presentador: An opinionated presentation framework</h1>\n</div><div class="bottom"><ul>\n<li>Write your slides in Markdown and Presentador will do the rest</li>\n<li>Automatically assigns a layout on each slide based on the elements in it</li>\n<li>Custom (opinionated) themes</li>\n<li>Play with Presentador on the <a href="https://www.presentador.dev/playground.html">playground</a></li>\n<li>Contribute to Presentador on <a href="https://github.com/kbariotis/presentador">GitHub</a></li>\n<li>Actually, this site is a presentation it self. Enjoy! 🙂</li>\n</ul>\n</div></div>',a="headerList"},603:(e,t,s)=>{"use strict";s.r(t),s.d(t,{html:()=>r,state:()=>a});const r='<div class="slides singleHeader"><div class="container"><h2>Presentador parses Markdown files and produces a website for your presentation</h2>\n</div></div>',a="singleHeader"},650:(e,t,s)=>{"use strict";s.r(t),s.d(t,{html:()=>r,state:()=>a});const r='<div class="slides headerSingleParagraph"><div class="top"><h3>Presentador is opinionated</h3>\n</div><div class="bottom"><p>It chooses a predefined layout based on the elements on each slide.</p>\n</div></div>',a="headerSingleParagraph"},470:(e,t,s)=>{"use strict";s.r(t),s.d(t,{html:()=>r,state:()=>a});const r='<div class="slides headerParagraphImage"><div class="left"><h3>For example</h3>\n<p>Presentador decided to put that image on the right.</p>\n</div><div class="right"><img src="https://via.placeholder.com/550" alt="Placeholder Image" /></div></div>',a="headerParagraphImage"},197:(e,t,s)=>{"use strict";s.r(t),s.d(t,{html:()=>r,state:()=>a});const r='<div class="slides headerCodeblock"><div class="top"><h3>The code below produced the previous slide</h3>\n</div><div class="bottom"><pre><code>### For example\n\nPresentador decided to put that image on the right.\n\n![Placeholder Image](https://via.placeholder.com/550)\n</code></pre>\n</div></div>',a="headerCodeblock"},81:(e,t,s)=>{"use strict";s.r(t),s.d(t,{html:()=>r,state:()=>a});const r='<div class="slides singleHeader"><div class="container"><h1>Presentador is simple, no code or configuration required to build a presentation</h1>\n</div></div>',a="singleHeader"},11:(e,t,s)=>{"use strict";s.r(t),s.d(t,{html:()=>r,state:()=>a});const r='<div class="slides headerList"><div class="top"><h1>Thank you</h1>\n</div><div class="bottom"><ul>\n<li>Start with these <a href="https://github.com/kbariotis/presentador#quick-start">two steps to build a presentation</a></li>\n<li>Experiment with Markdown on the <a href="https://www.presentador.dev/playground.html">playground</a></li>\n<li>Contribute by submitting an <a href="https://github.com/kbariotis/presentador/issues">issue or a PR</a></li>\n</ul>\n</div></div>',a="headerList"},220:(e,t,s)=>{var r={"./1.md":316,"./2.md":603,"./3.md":650,"./4.md":470,"./5.md":197,"./6.md":81,"./7.md":11};function a(e){var t=o(e);return s(t)}function o(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=220}},t={};function s(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,s),a.exports}s.m=e,s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0},t=[[346,736]],r=()=>{};function a(){for(var r,a=0;a<t.length;a++){for(var o=t[a],i=!0,n=1;n<o.length;n++){var d=o[n];0!==e[d]&&(i=!1)}i&&(t.splice(a--,1),r=s(s.s=o[0]))}return 0===t.length&&(s.x(),s.x=()=>{}),r}s.x=()=>{s.x=()=>{},i=i.slice();for(var e=0;e<i.length;e++)o(i[e]);return(r=a)()};var o=a=>{for(var o,i,[d,l,c,u]=a,h=0,m=[];h<d.length;h++)i=d[h],s.o(e,i)&&e[i]&&m.push(e[i][0]),e[i]=0;for(o in l)s.o(l,o)&&(s.m[o]=l[o]);for(c&&c(s),n(a);m.length;)m.shift()();return u&&t.push.apply(t,u),r()},i=self.webpackChunkpresentador=self.webpackChunkpresentador||[],n=i.push.bind(i);i.push=o})(),s.x()})();