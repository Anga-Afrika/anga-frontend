"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9312],{436:(M,_,a)=>{a.d(_,{c:()=>r});var g=a(2992),l=a(5988),c=a(2528);const r=(n,s)=>{let e,t;const u=(i,w,E)=>{if(typeof document>"u")return;const p=document.elementFromPoint(i,w);p&&s(p)?p!==e&&(o(),d(p,E)):o()},d=(i,w)=>{e=i,t||(t=e);const E=e;(0,g.w)(()=>E.classList.add("ion-activated")),w()},o=(i=!1)=>{if(!e)return;const w=e;(0,g.w)(()=>w.classList.remove("ion-activated")),i&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:i=>u(i.currentX,i.currentY,l.a),onMove:i=>u(i.currentX,i.currentY,l.b),onEnd:()=>{o(!0),(0,l.h)(),t=void 0}})}},1008:(M,_,a)=>{a.d(_,{g:()=>l});var g=a(4829);const l=()=>{if(void 0!==g.w)return g.w.Capacitor}},5984:(M,_,a)=>{a.d(_,{c:()=>g,i:()=>l});const g=(c,r,n)=>"function"==typeof n?n(c,r):"string"==typeof n?c[n]===r[n]:Array.isArray(r)?r.includes(c):c===r,l=(c,r,n)=>void 0!==c&&(Array.isArray(c)?c.some(s=>g(s,r,n)):g(c,r,n))},6944:(M,_,a)=>{a.d(_,{g:()=>g});const g=(s,e,t,u,d)=>c(s[1],e[1],t[1],u[1],d).map(o=>l(s[0],e[0],t[0],u[0],o)),l=(s,e,t,u,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*t*d+3*t+u*d))-s*Math.pow(d-1,3),c=(s,e,t,u,d)=>n((u-=d)-3*(t-=d)+3*(e-=d)-(s-=d),3*t-6*e+3*s,3*e-3*s,s).filter(i=>i>=0&&i<=1),n=(s,e,t,u)=>{if(0===s)return((s,e,t)=>{const u=e*e-4*s*t;return u<0?[]:[(-e+Math.sqrt(u))/(2*s),(-e-Math.sqrt(u))/(2*s)]})(e,t,u);const d=(3*(t/=s)-(e/=s)*e)/3,o=(2*e*e*e-9*e*t+27*(u/=s))/27;if(0===d)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-d),-Math.sqrt(-d)];const i=Math.pow(o/2,2)+Math.pow(d/3,3);if(0===i)return[Math.pow(o/2,.5)-e/3];if(i>0)return[Math.pow(-o/2+Math.sqrt(i),1/3)-Math.pow(o/2+Math.sqrt(i),1/3)-e/3];const w=Math.sqrt(Math.pow(-d/3,3)),E=Math.acos(-o/(2*Math.sqrt(Math.pow(-d/3,3)))),p=2*Math.pow(w,1/3);return[p*Math.cos(E/3)-e/3,p*Math.cos((E+2*Math.PI)/3)-e/3,p*Math.cos((E+4*Math.PI)/3)-e/3]}},7716:(M,_,a)=>{a.d(_,{i:()=>g});const g=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},704:(M,_,a)=>{a.r(_),a.d(_,{startFocusVisible:()=>r});const g="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=n=>{let s=[],e=!0;const t=n?n.shadowRoot:document,u=n||document.body,d=y=>{s.forEach(h=>h.classList.remove(g)),y.forEach(h=>h.classList.add(g)),s=y},o=()=>{e=!1,d([])},i=y=>{e=c.includes(y.key),e||d([])},w=y=>{if(e&&void 0!==y.composedPath){const h=y.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));d(h)}},E=()=>{t.activeElement===u&&d([])};return t.addEventListener("keydown",i),t.addEventListener("focusin",w),t.addEventListener("focusout",E),t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("mousedown",o),{destroy:()=>{t.removeEventListener("keydown",i),t.removeEventListener("focusin",w),t.removeEventListener("focusout",E),t.removeEventListener("touchstart",o),t.removeEventListener("mousedown",o)},setFocus:d}}},8507:(M,_,a)=>{a.d(_,{c:()=>l});var g=a(6384);const l=s=>{const e=s;let t;return{hasLegacyControl:()=>{if(void 0===t){const d=void 0!==e.label||c(e),o=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,i=(0,g.h)(e);t=!0===e.legacy||!d&&!o&&null!==i}return t}}},c=s=>!!(r.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||n.includes(s.tagName)&&""!==s.textContent),r=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],n=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},5988:(M,_,a)=>{a.d(_,{I:()=>l,a:()=>e,b:()=>t,c:()=>s,d:()=>d,h:()=>u});var g=a(1008),l=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(l||{});const r={getEngine(){const o=window.TapticEngine;if(o)return o;const i=(0,g.g)();return null!=i&&i.isPluginAvailable("Haptics")?i.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const i=(0,g.g)();return"web"!==(null==i?void 0:i.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,g.g)(),impact(o){const i=this.getEngine();if(!i)return;const w=this.isCapacitor()?o.style:o.style.toLowerCase();i.impact({style:w})},notification(o){const i=this.getEngine();if(!i)return;const w=this.isCapacitor()?o.type:o.type.toLowerCase();i.notification({type:w})},selection(){const o=this.isCapacitor()?l.Light:"light";this.impact({style:o})},selectionStart(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},n=()=>r.available(),s=()=>{n()&&r.selection()},e=()=>{n()&&r.selectionStart()},t=()=>{n()&&r.selectionChanged()},u=()=>{n()&&r.selectionEnd()},d=o=>{n()&&r.impact(o)}},2816:(M,_,a)=>{a.d(_,{I:()=>s,a:()=>d,b:()=>n,c:()=>w,d:()=>p,f:()=>o,g:()=>u,i:()=>t,p:()=>E,r:()=>y,s:()=>i});var g=a(1528),l=a(6384),c=a(2032);const n="ion-content",s=".ion-content-scroll-host",e=`${n}, ${s}`,t=h=>"ION-CONTENT"===h.tagName,u=function(){var h=(0,g.c)(function*(v){return t(v)?(yield new Promise(m=>(0,l.c)(v,m)),v.getScrollElement()):v});return function(m){return h.apply(this,arguments)}}(),d=h=>h.querySelector(s)||h.querySelector(e),o=h=>h.closest(e),i=(h,v)=>t(h)?h.scrollToTop(v):Promise.resolve(h.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),w=(h,v,m,O)=>t(h)?h.scrollByPoint(v,m,O):Promise.resolve(h.scrollBy({top:m,left:v,behavior:O>0?"smooth":"auto"})),E=h=>(0,c.b)(h,n),p=h=>{if(t(h)){const m=h.scrollY;return h.scrollY=!1,m}return h.style.setProperty("overflow","hidden"),!0},y=(h,v)=>{t(h)?h.scrollY=v:h.style.removeProperty("overflow")}},4812:(M,_,a)=>{a.d(_,{a:()=>g,b:()=>w,c:()=>e,d:()=>E,e:()=>L,f:()=>s,g:()=>p,h:()=>c,i:()=>l,j:()=>O,k:()=>C,l:()=>t,m:()=>o,n:()=>y,o:()=>d,p:()=>n,q:()=>r,r:()=>m,s:()=>f,t:()=>i,u:()=>h,v:()=>v,w:()=>u});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},6132:(M,_,a)=>{a.d(_,{c:()=>r,g:()=>n});var g=a(4829),l=a(6384),c=a(2032);const r=(e,t,u)=>{let d,o;if(void 0!==g.w&&"MutationObserver"in g.w){const p=Array.isArray(t)?t:[t];d=new MutationObserver(y=>{for(const h of y)for(const v of h.addedNodes)if(v.nodeType===Node.ELEMENT_NODE&&p.includes(v.slot))return u(),void(0,l.r)(()=>i(v))}),d.observe(e,{childList:!0})}const i=p=>{var y;o&&(o.disconnect(),o=void 0),o=new MutationObserver(h=>{u();for(const v of h)for(const m of v.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===t&&E()}),o.observe(null!==(y=p.parentElement)&&void 0!==y?y:p,{subtree:!0,childList:!0})},E=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),E()}}},n=(e,t,u)=>{const d=null==e?0:e.toString().length,o=s(d,t);if(void 0===u)return o;try{return u(d,t)}catch(i){return(0,c.a)("Exception in provided `counterFormatter`.",i),o}},s=(e,t)=>`${e} / ${t}`},8888:(M,_,a)=>{a.r(_),a.d(_,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>h,keyboardDidOpen:()=>p,keyboardDidResize:()=>y,resetKeyboardAssist:()=>d,setKeyboardClose:()=>E,setKeyboardOpen:()=>w,startKeyboardAssist:()=>o,trackViewportChanges:()=>O});var g=a(56);a(1008),a(4829);const r="ionKeyboardDidShow",n="ionKeyboardDidHide";let e={},t={},u=!1;const d=()=>{e={},t={},u=!1},o=f=>{if(g.K.getEngine())i(f);else{if(!f.visualViewport)return;t=C(f.visualViewport),f.visualViewport.onresize=()=>{O(f),p()||y(f)?w(f):h(f)&&E(f)}}},i=f=>{f.addEventListener("keyboardDidShow",L=>w(f,L)),f.addEventListener("keyboardDidHide",()=>E(f))},w=(f,L)=>{v(f,L),u=!0},E=f=>{m(f),u=!1},p=()=>!u&&e.width===t.width&&(e.height-t.height)*t.scale>150,y=f=>u&&!h(f),h=f=>u&&t.height===f.innerHeight,v=(f,L)=>{const D=new CustomEvent(r,{detail:{keyboardHeight:L?L.keyboardHeight:f.innerHeight-t.height}});f.dispatchEvent(D)},m=f=>{const L=new CustomEvent(n);f.dispatchEvent(L)},O=f=>{e=Object.assign({},t),t=C(f.visualViewport)},C=f=>({width:Math.round(f.width),height:Math.round(f.height),offsetTop:f.offsetTop,offsetLeft:f.offsetLeft,pageTop:f.pageTop,pageLeft:f.pageLeft,scale:f.scale})},56:(M,_,a)=>{a.d(_,{K:()=>r,a:()=>c});var g=a(1008),l=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(l||{}),c=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(c||{});const r={getEngine(){const n=(0,g.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(s=>{if(s.code!==l.Unimplemented)throw s}):Promise.resolve(void 0)}}},4908:(M,_,a)=>{a.d(_,{c:()=>s});var g=a(1528),l=a(4829),c=a(56);const r=e=>{if(void 0===l.d||e===c.a.None||void 0===e)return null;const t=l.d.querySelector("ion-app");return null!=t?t:l.d.body},n=e=>{const t=r(e);return null===t?0:t.clientHeight},s=function(){var e=(0,g.c)(function*(t){let u,d,o,i;const w=function(){var v=(0,g.c)(function*(){const m=yield c.K.getResizeMode(),O=void 0===m?void 0:m.mode;u=()=>{void 0===i&&(i=n(O)),o=!0,E(o,O)},d=()=>{o=!1,E(o,O)},null==l.w||l.w.addEventListener("keyboardWillShow",u),null==l.w||l.w.addEventListener("keyboardWillHide",d)});return function(){return v.apply(this,arguments)}}(),E=(v,m)=>{t&&t(v,p(m))},p=v=>{if(0===i||i===n(v))return;const m=r(v);return null!==m?new Promise(O=>{const f=new ResizeObserver(()=>{m.clientHeight===i&&(f.disconnect(),O())});f.observe(m)}):void 0};return yield w(),{init:w,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",u),null==l.w||l.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>o}});return function(u){return e.apply(this,arguments)}}()},3464:(M,_,a)=>{a.d(_,{c:()=>l});var g=a(1528);const l=()=>{let c;return{lock:function(){var n=(0,g.c)(function*(){const s=c;let e;return c=new Promise(t=>e=t),void 0!==s&&(yield s),e});return function(){return n.apply(this,arguments)}}()}}},7620:(M,_,a)=>{a.d(_,{c:()=>c});var g=a(4829),l=a(6384);const c=(r,n,s)=>{let e;const t=()=>!(void 0===n()||void 0!==r.label||null===s()),d=()=>{const i=n();if(void 0===i)return;if(!t())return void i.style.removeProperty("width");const w=s().scrollWidth;if(0===w&&null===i.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==e)return;const E=e=new IntersectionObserver(p=>{1===p[0].intersectionRatio&&(d(),E.disconnect(),e=void 0)},{threshold:.01,root:r});E.observe(i)}else i.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{t()&&(0,l.r)(()=>{d()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},9096:(M,_,a)=>{a.d(_,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(c,r,n)=>{const s=c*r/n-c+"ms",e=2*Math.PI*r/n;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(c,r,n)=>{const s=r/n,e=c*s-c+"ms",t=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,r,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,r,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})}}},4568:(M,_,a)=>{a.r(_),a.d(_,{createSwipeBackGesture:()=>n});var g=a(6384),l=a(7716),c=a(2528);a(6560);const n=(s,e,t,u,d)=>{const o=s.ownerDocument.defaultView;let i=(0,l.i)(s);const E=m=>i?-m.deltaX:m.deltaX;return(0,c.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(i=(0,l.i)(s),(m=>{const{startX:C}=m;return i?C>=o.innerWidth-50:C<=50})(m)&&e()),onStart:t,onMove:m=>{const C=E(m)/o.innerWidth;u(C)},onEnd:m=>{const O=E(m),C=o.innerWidth,f=O/C,L=(m=>i?-m.velocityX:m.velocityX)(m),D=L>=0&&(L>.2||O>C/2),P=(D?1-f:f)*C;let A=0;if(P>5){const T=P/Math.abs(L);A=Math.min(T,540)}d(D,f<=0?.01:(0,g.l)(0,f,.9999),A)}})}},7128:(M,_,a)=>{a.d(_,{w:()=>g});const g=(r,n,s)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{s(l(t,n))});return e.observe(r,{childList:!0,subtree:!0}),e},l=(r,n)=>{let s;return r.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)s=c(e.addedNodes[t],n)||s}),s},c=(r,n)=>{if(1!==r.nodeType)return;const s=r;return(s.tagName===n.toUpperCase()?[s]:Array.from(s.querySelectorAll(n))).find(t=>t.value===s.value)}}}]);