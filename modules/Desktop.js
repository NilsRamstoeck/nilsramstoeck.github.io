import{a as S1,b as B,c as k1,d as q,e as a2,g as F,j as _2}from"../chunk-DTY64X2U.js";import{a as i,b as G2,c as f4,e as z,f as N1,g as w1,m as C2}from"../chunk-P25D4DJI.js";var D3=G2((x0,F3)=>{"use strict";var U6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";F3.exports=U6});var W3=G2((b0,U3)=>{"use strict";var W6=D3();function R3(){}i(R3,"emptyFunction");function E3(){}i(E3,"emptyFunctionWithReset");E3.resetWarningCache=R3;U3.exports=function(){function c(r,s,n,f,l,o){if(o!==W6){var t=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw t.name="Invariant Violation",t}}i(c,"shim"),c.isRequired=c;function a(){return c}i(a,"getShim");var e={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:a,element:c,elementType:c,instanceOf:a,node:c,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:E3,resetWarningCache:R3};return e.PropTypes=e,e}});var I3=G2((k0,O3)=>{O3.exports=W3()();var w0,S0});function y1({_ref:c,active:a=!0,x:e,y:r,children:s}){let n=c??a2(),[f,l]=B({x:e??0,y:r??0});function o(t,m){l({x:t.clientX-m.x,y:t.clientY-m.y})}return i(o,"mouseMove"),z("div",{ref:n,style:{position:"absolute",left:f.x,top:f.y},onMouseDown:t=>{if(!a||!n.current)return;let m={x:t.clientX-n.current.getBoundingClientRect().x,y:t.clientY-n.current.getBoundingClientRect().y},H=i(h=>o(h,m),"listener");addEventListener("mousemove",H),addEventListener("mouseup",()=>{removeEventListener("mousemove",H)},{once:!0})},className:"preact-draggable"},s)}i(y1,"Draggable");var A1={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]};var P1={prefix:"fas",iconName:"power-off",icon:[512,512,[9211],"f011","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"]};var e2={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"]};var T1={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var B1={prefix:"fas",iconName:"window-minimize",icon:[512,512,[128469],"f2d1","M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"]};function F1(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}i(F1,"ownKeys");function v(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?F1(Object(e),!0).forEach(function(r){w(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):F1(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}i(v,"_objectSpread2");function P2(c){"@babel/helpers - typeof";return P2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},P2(c)}i(P2,"_typeof");function l4(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}i(l4,"_classCallCheck");function D1(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}i(D1,"_defineProperties");function o4(c,a,e){return a&&D1(c.prototype,a),e&&D1(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}i(o4,"_createClass");function w(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}i(w,"_defineProperty");function f1(c,a){return m4(c)||v4(c,a)||f3(c,a)||V4()}i(f1,"_slicedToArray");function M2(c){return t4(c)||H4(c)||f3(c)||z4()}i(M2,"_toConsumableArray");function t4(c){if(Array.isArray(c))return Q2(c)}i(t4,"_arrayWithoutHoles");function m4(c){if(Array.isArray(c))return c}i(m4,"_arrayWithHoles");function H4(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}i(H4,"_iterableToArray");function v4(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,f,l;try{for(e=e.call(c);!(s=(f=e.next()).done)&&(r.push(f.value),!(a&&r.length===a));s=!0);}catch(o){n=!0,l=o}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw l}}return r}}i(v4,"_iterableToArrayLimit");function f3(c,a){if(c){if(typeof c=="string")return Q2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Q2(c,a)}}i(f3,"_unsupportedIterableToArray");function Q2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}i(Q2,"_arrayLikeToArray");function z4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i(z4,"_nonIterableSpread");function V4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i(V4,"_nonIterableRest");var R1=i(function(){},"noop"),l1={},l3={},o3=null,t3={mark:R1,measure:R1};try{typeof window<"u"&&(l1=window),typeof document<"u"&&(l3=document),typeof MutationObserver<"u"&&(o3=MutationObserver),typeof performance<"u"&&(t3=performance)}catch{}var h4=l1.navigator||{},E1=h4.userAgent,U1=E1===void 0?"":E1,_=l1,g=l3,W1=o3,d2=t3,H0=!!_.document,W=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",m3=~U1.indexOf("MSIE")||~U1.indexOf("Trident/"),L2,g2,x2,b2,N2,R="___FONT_AWESOME___",K2=16,H3="fa",v3="svg-inline--fa",Z="data-fa-i2svg",J2="data-fa-pseudo-element",M4="data-fa-pseudo-element-pending",o1="data-prefix",t1="data-icon",O1="fontawesome-i2svg",p4="async",u4=["HTML","HEAD","STYLE","SCRIPT"],z3=function(){try{return!0}catch{return!1}}(),L="classic",N="sharp",m1=[L,N];function p2(c){return new Proxy(c,{get:i(function(e,r){return r in e?e[r]:e[L]},"get")})}i(p2,"familyProxy");var H2=p2((L2={},w(L2,L,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),w(L2,N,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),L2)),v2=p2((g2={},w(g2,L,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),w(g2,N,{solid:"fass",regular:"fasr",light:"fasl"}),g2)),z2=p2((x2={},w(x2,L,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),w(x2,N,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),x2)),C4=p2((b2={},w(b2,L,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),w(b2,N,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),b2)),d4=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,V3="fa-layers-text",L4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,g4=p2((N2={},w(N2,L,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),w(N2,N,{900:"fass",400:"fasr",300:"fasl"}),N2)),h3=[1,2,3,4,5,6,7,8,9,10],x4=h3.concat([11,12,13,14,15,16,17,18,19,20]),b4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],K={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},V2=new Set;Object.keys(v2[L]).map(V2.add.bind(V2));Object.keys(v2[N]).map(V2.add.bind(V2));var N4=[].concat(m1,M2(V2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",K.GROUP,K.SWAP_OPACITY,K.PRIMARY,K.SECONDARY]).concat(h3.map(function(c){return"".concat(c,"x")})).concat(x4.map(function(c){return"w-".concat(c)})),t2=_.FontAwesomeConfig||{};function w4(c){var a=g.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}i(w4,"getAttrConfig");function S4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}i(S4,"coerce");g&&typeof g.querySelector=="function"&&(I1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],I1.forEach(function(c){var a=f1(c,2),e=a[0],r=a[1],s=S4(w4(e));s!=null&&(t2[r]=s)}));var I1,M3={styleDefault:"solid",familyDefault:"classic",cssPrefix:H3,replacementClass:v3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};t2.familyPrefix&&(t2.cssPrefix=t2.familyPrefix);var n2=v(v({},M3),t2);n2.autoReplaceSvg||(n2.observeMutations=!1);var V={};Object.keys(M3).forEach(function(c){Object.defineProperty(V,c,{enumerable:!0,set:i(function(e){n2[c]=e,m2.forEach(function(r){return r(V)})},"set"),get:i(function(){return n2[c]},"get")})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:i(function(a){n2.cssPrefix=a,m2.forEach(function(e){return e(V)})},"set"),get:i(function(){return n2.cssPrefix},"get")});_.FontAwesomeConfig=V;var m2=[];function k4(c){return m2.push(c),function(){m2.splice(m2.indexOf(c),1)}}i(k4,"onChange");var G=K2,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function y4(c){if(!(!c||!W)){var a=g.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=g.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],f=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(r=n)}return g.head.insertBefore(a,r),c}}i(y4,"insertCss");var A4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function h2(){for(var c=12,a="";c-- >0;)a+=A4[Math.random()*62|0];return a}i(h2,"nextUniqueId");function f2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}i(f2,"toArray");function H1(c){return c.classList?f2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}i(H1,"classArray");function p3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}i(p3,"htmlEscape");function P4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(p3(c[e]),'" ')},"").trim()}i(P4,"joinAttributes");function F2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}i(F2,"joinStyles");function v1(c){return c.size!==D.size||c.x!==D.x||c.y!==D.y||c.rotate!==D.rotate||c.flipX||c.flipY}i(v1,"transformIsMeaningful");function T4(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(n," ").concat(f," ").concat(l)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:o,path:t}}i(T4,"transformForSvg");function B4(c){var a=c.transform,e=c.width,r=e===void 0?K2:e,s=c.height,n=s===void 0?K2:s,f=c.startCentered,l=f===void 0?!1:f,o="";return l&&m3?o+="translate(".concat(a.x/G-r/2,"em, ").concat(a.y/G-n/2,"em) "):l?o+="translate(calc(-50% + ".concat(a.x/G,"em), calc(-50% + ").concat(a.y/G,"em)) "):o+="translate(".concat(a.x/G,"em, ").concat(a.y/G,"em) "),o+="scale(".concat(a.size/G*(a.flipX?-1:1),", ").concat(a.size/G*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}i(B4,"transformForCss");var F4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function u3(){var c=H3,a=v3,e=V.cssPrefix,r=V.replacementClass,s=F4;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),f=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(f,"--".concat(e,"-")).replace(l,".".concat(r))}return s}i(u3,"css");var q1=!1;function j2(){V.autoAddCss&&!q1&&(y4(u3()),q1=!0)}i(j2,"ensureCss");var D4={mixout:i(function(){return{dom:{css:u3,insertCss:j2}}},"mixout"),hooks:i(function(){return{beforeDOMElementCreation:i(function(){j2()},"beforeDOMElementCreation"),beforeI2svg:i(function(){j2()},"beforeI2svg")}},"hooks")},E=_||{};E[R]||(E[R]={});E[R].styles||(E[R].styles={});E[R].hooks||(E[R].hooks={});E[R].shims||(E[R].shims=[]);var T=E[R],C3=[],R4=i(function c(){g.removeEventListener("DOMContentLoaded",c),T2=1,C3.map(function(a){return a()})},"listener"),T2=!1;W&&(T2=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),T2||g.addEventListener("DOMContentLoaded",R4));function E4(c){W&&(T2?setTimeout(c,0):C3.push(c))}i(E4,"domready");function u2(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?p3(c):"<".concat(a," ").concat(P4(r),">").concat(n.map(u2).join(""),"</").concat(a,">")}i(u2,"toHtml");function G1(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}i(G1,"iconFromMapping");var U4=i(function(a,e){return function(r,s,n,f){return a.call(e,r,s,n,f)}},"bindInternal4"),X2=i(function(a,e,r,s){var n=Object.keys(a),f=n.length,l=s!==void 0?U4(e,s):e,o,t,m;for(r===void 0?(o=1,m=a[n[0]]):(o=0,m=r);o<f;o++)t=n[o],m=l(m,a[t],t,a);return m},"fastReduceObject");function W4(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}i(W4,"ucs2decode");function Z2(c){var a=W4(c);return a.length===1?a[0].toString(16):null}i(Z2,"toHex");function O4(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}i(O4,"codePointAt");function _1(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}i(_1,"normalizeIcons");function c1(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=_1(a);typeof T.hooks.addPack=="function"&&!s?T.hooks.addPack(c,_1(a)):T.styles[c]=v(v({},T.styles[c]||{}),n),c==="fas"&&c1("fa",a)}i(c1,"defineIcons");var w2,S2,k2,r2=T.styles,I4=T.shims,q4=(w2={},w(w2,L,Object.values(z2[L])),w(w2,N,Object.values(z2[N])),w2),z1=null,d3={},L3={},g3={},x3={},b3={},G4=(S2={},w(S2,L,Object.keys(H2[L])),w(S2,N,Object.keys(H2[N])),S2);function _4(c){return~N4.indexOf(c)}i(_4,"isReserved");function j4(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!_4(s)?s:null}i(j4,"getIconName");var N3=i(function(){var a=i(function(n){return X2(r2,function(f,l,o){return f[o]=X2(l,n,{}),f},{})},"lookup");d3=a(function(s,n,f){if(n[3]&&(s[n[3]]=f),n[2]){var l=n[2].filter(function(o){return typeof o=="number"});l.forEach(function(o){s[o.toString(16)]=f})}return s}),L3=a(function(s,n,f){if(s[f]=f,n[2]){var l=n[2].filter(function(o){return typeof o=="string"});l.forEach(function(o){s[o]=f})}return s}),b3=a(function(s,n,f){var l=n[2];return s[f]=f,l.forEach(function(o){s[o]=f}),s});var e="far"in r2||V.autoFetchSvg,r=X2(I4,function(s,n){var f=n[0],l=n[1],o=n[2];return l==="far"&&!e&&(l="fas"),typeof f=="string"&&(s.names[f]={prefix:l,iconName:o}),typeof f=="number"&&(s.unicodes[f.toString(16)]={prefix:l,iconName:o}),s},{names:{},unicodes:{}});g3=r.names,x3=r.unicodes,z1=D2(V.styleDefault,{family:V.familyDefault})},"build");k4(function(c){z1=D2(c.styleDefault,{family:V.familyDefault})});N3();function V1(c,a){return(d3[c]||{})[a]}i(V1,"byUnicode");function X4(c,a){return(L3[c]||{})[a]}i(X4,"byLigature");function J(c,a){return(b3[c]||{})[a]}i(J,"byAlias");function w3(c){return g3[c]||{prefix:null,iconName:null}}i(w3,"byOldName");function Y4(c){var a=x3[c],e=V1("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}i(Y4,"byOldUnicode");function j(){return z1}i(j,"getDefaultUsablePrefix");var h1=i(function(){return{prefix:null,iconName:null,rest:[]}},"emptyCanonicalIcon");function D2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?L:e,s=H2[r][c],n=v2[r][c]||v2[r][s],f=c in T.styles?c:null;return n||f||null}i(D2,"getCanonicalPrefix");var j1=(k2={},w(k2,L,Object.keys(z2[L])),w(k2,N,Object.keys(z2[N])),k2);function R2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},w(a,L,"".concat(V.cssPrefix,"-").concat(L)),w(a,N,"".concat(V.cssPrefix,"-").concat(N)),a),f=null,l=L;(c.includes(n[L])||c.some(function(t){return j1[L].includes(t)}))&&(l=L),(c.includes(n[N])||c.some(function(t){return j1[N].includes(t)}))&&(l=N);var o=c.reduce(function(t,m){var H=j4(V.cssPrefix,m);if(r2[m]?(m=q4[l].includes(m)?C4[l][m]:m,f=m,t.prefix=m):G4[l].indexOf(m)>-1?(f=m,t.prefix=D2(m,{family:l})):H?t.iconName=H:m!==V.replacementClass&&m!==n[L]&&m!==n[N]&&t.rest.push(m),!s&&t.prefix&&t.iconName){var h=f==="fa"?w3(t.iconName):{},M=J(t.prefix,t.iconName);h.prefix&&(f=null),t.iconName=h.iconName||M||t.iconName,t.prefix=h.prefix||t.prefix,t.prefix==="far"&&!r2.far&&r2.fas&&!V.autoFetchSvg&&(t.prefix="fas")}return t},h1());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&l===N&&(r2.fass||V.autoFetchSvg)&&(o.prefix="fass",o.iconName=J(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||f==="fa")&&(o.prefix=j()||"fas"),o}i(R2,"getCanonicalIcon");var $4=function(){function c(){l4(this,c),this.definitions={}}return i(c,"Library"),o4(c,[{key:"add",value:i(function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var f=s.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(l){e.definitions[l]=v(v({},e.definitions[l]||{}),f[l]),c1(l,f[l]);var o=z2[L][l];o&&c1(o,f[l]),N3()})},"add")},{key:"reset",value:i(function(){this.definitions={}},"reset")},{key:"_pullDefinitions",value:i(function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var f=s[n],l=f.prefix,o=f.iconName,t=f.icon,m=t[2];e[l]||(e[l]={}),m.length>0&&m.forEach(function(H){typeof H=="string"&&(e[l][H]=t)}),e[l][o]=t}),e},"_pullDefinitions")}]),c}(),X1=[],s2={},i2={},Q4=Object.keys(i2);function K4(c,a){var e=a.mixoutsTo;return X1=c,s2={},Object.keys(i2).forEach(function(r){Q4.indexOf(r)===-1&&delete i2[r]}),X1.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(f){typeof s[f]=="function"&&(e[f]=s[f]),P2(s[f])==="object"&&Object.keys(s[f]).forEach(function(l){e[f]||(e[f]={}),e[f][l]=s[f][l]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(f){s2[f]||(s2[f]=[]),s2[f].push(n[f])})}r.provides&&r.provides(i2)}),e}i(K4,"registerPlugins");function a1(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=s2[c]||[];return n.forEach(function(f){a=f.apply(null,[a].concat(r))}),a}i(a1,"chainHooks");function c2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=s2[c]||[];s.forEach(function(n){n.apply(null,e)})}i(c2,"callHooks");function U(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return i2[c]?i2[c].apply(null,a):void 0}i(U,"callProvided");function e1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||j();if(a)return a=J(e,a)||a,G1(S3.definitions,e,a)||G1(T.styles,e,a)}i(e1,"findIconDefinition");var S3=new $4,J4=i(function(){V.autoReplaceSvg=!1,V.observeMutations=!1,c2("noAuto")},"noAuto"),Z4={i2svg:i(function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(c2("beforeI2svg",a),U("pseudoElements2svg",a),U("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},"i2svg"),watch:i(function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,E4(function(){a6({autoReplaceSvgRoot:e}),c2("watch",a)})},"watch")},c6={icon:i(function(a){if(a===null)return null;if(P2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:J(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=D2(a[0]);return{prefix:r,iconName:J(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(V.cssPrefix,"-"))>-1||a.match(d4))){var s=R2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||j(),iconName:J(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=j();return{prefix:n,iconName:J(n,a)||a}}},"icon")},A={noAuto:J4,config:V,dom:Z4,parse:c6,library:S3,findIconDefinition:e1,toHtml:u2},a6=i(function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?g:e;(Object.keys(T.styles).length>0||V.autoFetchSvg)&&W&&V.autoReplaceSvg&&A.dom.i2svg({node:r})},"autoReplace");function E2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:i(function(){return c.abstract.map(function(r){return u2(r)})},"get")}),Object.defineProperty(c,"node",{get:i(function(){if(W){var r=g.createElement("div");return r.innerHTML=c.html,r.children}},"get")}),c}i(E2,"domVariants");function e6(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,f=c.transform;if(v1(f)&&e.found&&!r.found){var l=e.width,o=e.height,t={x:l/o/2,y:.5};s.style=F2(v(v({},n),{},{"transform-origin":"".concat(t.x+f.x/16,"em ").concat(t.y+f.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}i(e6,"asIcon");function r6(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,f=n===!0?"".concat(a,"-").concat(V.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},s),{},{id:f}),children:r}]}]}i(r6,"asSymbol");function M1(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,f=c.transform,l=c.symbol,o=c.title,t=c.maskId,m=c.titleId,H=c.extra,h=c.watchable,M=h===void 0?!1:h,C=r.found?r:e,x=C.width,d=C.height,k=s==="fak",b=[V.replacementClass,n?"".concat(V.cssPrefix,"-").concat(n):""].filter(function(I){return H.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(H.classes).join(" "),u={children:[],attributes:v(v({},H.attributes),{},{"data-prefix":s,"data-icon":n,class:b,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(d)})},y=k&&!~H.classes.indexOf("fa-fw")?{width:"".concat(x/d*16*.0625,"em")}:{};M&&(u.attributes[Z]=""),o&&(u.children.push({tag:"title",attributes:{id:u.attributes["aria-labelledby"]||"title-".concat(m||h2())},children:[o]}),delete u.attributes.title);var S=v(v({},u),{},{prefix:s,iconName:n,main:e,mask:r,maskId:t,transform:f,symbol:l,styles:v(v({},y),H.styles)}),$=r.found&&e.found?U("generateAbstractMask",S)||{children:[],attributes:{}}:U("generateAbstractIcon",S)||{children:[],attributes:{}},Q=$.children,q2=$.attributes;return S.children=Q,S.attributes=q2,l?r6(S):e6(S)}i(M1,"makeInlineSvgAbstract");function Y1(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,f=c.extra,l=c.watchable,o=l===void 0?!1:l,t=v(v(v({},f.attributes),n?{title:n}:{}),{},{class:f.classes.join(" ")});o&&(t[Z]="");var m=v({},f.styles);v1(s)&&(m.transform=B4({transform:s,startCentered:!0,width:e,height:r}),m["-webkit-transform"]=m.transform);var H=F2(m);H.length>0&&(t.style=H);var h=[];return h.push({tag:"span",attributes:t,children:[a]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}i(Y1,"makeLayersTextAbstract");function s6(c){var a=c.content,e=c.title,r=c.extra,s=v(v(v({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=F2(r.styles);n.length>0&&(s.style=n);var f=[];return f.push({tag:"span",attributes:s,children:[a]}),e&&f.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),f}i(s6,"makeLayersCounterAbstract");var Y2=T.styles;function r1(c){var a=c[0],e=c[1],r=c.slice(4),s=f1(r,1),n=s[0],f=null;return Array.isArray(n)?f={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(K.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(K.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(K.PRIMARY),fill:"currentColor",d:n[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:f}}i(r1,"asFoundIcon");var i6={found:!1,width:512,height:512};function n6(c,a){!z3&&!V.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}i(n6,"maybeNotifyMissing");function s1(c,a){var e=a;return a==="fa"&&V.styleDefault!==null&&(a=j()),new Promise(function(r,s){var n={found:!1,width:512,height:512,icon:U("missingIconAbstract")||{}};if(e==="fa"){var f=w3(c)||{};c=f.iconName||c,a=f.prefix||a}if(c&&a&&Y2[a]&&Y2[a][c]){var l=Y2[a][c];return r(r1(l))}n6(c,a),r(v(v({},i6),{},{icon:V.showMissingIcons&&c?U("missingIconAbstract")||{}:{}}))})}i(s1,"findIcon");var $1=i(function(){},"noop"),i1=V.measurePerformance&&d2&&d2.mark&&d2.measure?d2:{mark:$1,measure:$1},o2='FA "6.4.0"',f6=i(function(a){return i1.mark("".concat(o2," ").concat(a," begins")),function(){return k3(a)}},"begin"),k3=i(function(a){i1.mark("".concat(o2," ").concat(a," ends")),i1.measure("".concat(o2," ").concat(a),"".concat(o2," ").concat(a," begins"),"".concat(o2," ").concat(a," ends"))},"end"),p1={begin:f6,end:k3},y2=i(function(){},"noop");function Q1(c){var a=c.getAttribute?c.getAttribute(Z):null;return typeof a=="string"}i(Q1,"isWatched");function l6(c){var a=c.getAttribute?c.getAttribute(o1):null,e=c.getAttribute?c.getAttribute(t1):null;return a&&e}i(l6,"hasPrefixAndIcon");function o6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(V.replacementClass)}i(o6,"hasBeenReplaced");function t6(){if(V.autoReplaceSvg===!0)return A2.replace;var c=A2[V.autoReplaceSvg];return c||A2.replace}i(t6,"getMutator");function m6(c){return g.createElementNS("http://www.w3.org/2000/svg",c)}i(m6,"createElementNS");function H6(c){return g.createElement(c)}i(H6,"createElement");function y3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?m6:H6:e;if(typeof c=="string")return g.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(f){s.setAttribute(f,c.attributes[f])});var n=c.children||[];return n.forEach(function(f){s.appendChild(y3(f,{ceFn:r}))}),s}i(y3,"convertSVG");function v6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}i(v6,"nodeAsComment");var A2={replace:i(function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(y3(s),e)}),e.getAttribute(Z)===null&&V.keepOriginalSource){var r=g.createComment(v6(e));e.parentNode.replaceChild(r,e)}else e.remove()},"replace"),nest:i(function(a){var e=a[0],r=a[1];if(~H1(e).indexOf(V.replacementClass))return A2.replace(a);var s=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(l,o){return o===V.replacementClass||o.match(s)?l.toSvg.push(o):l.toNode.push(o),l},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var f=r.map(function(l){return u2(l)}).join(`
`);e.setAttribute(Z,""),e.innerHTML=f},"nest")};function K1(c){c()}i(K1,"performOperationSync");function A3(c,a){var e=typeof a=="function"?a:y2;if(c.length===0)e();else{var r=K1;V.mutateApproach===p4&&(r=_.requestAnimationFrame||K1),r(function(){var s=t6(),n=p1.begin("mutate");c.map(s),n(),e()})}}i(A3,"perform");var u1=!1;function P3(){u1=!0}i(P3,"disableObservation");function n1(){u1=!1}i(n1,"enableObservation");var B2=null;function J1(c){if(W1&&V.observeMutations){var a=c.treeCallback,e=a===void 0?y2:a,r=c.nodeCallback,s=r===void 0?y2:r,n=c.pseudoElementsCallback,f=n===void 0?y2:n,l=c.observeMutationsRoot,o=l===void 0?g:l;B2=new W1(function(t){if(!u1){var m=j();f2(t).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!Q1(H.addedNodes[0])&&(V.searchPseudoElements&&f(H.target),e(H.target)),H.type==="attributes"&&H.target.parentNode&&V.searchPseudoElements&&f(H.target.parentNode),H.type==="attributes"&&Q1(H.target)&&~b4.indexOf(H.attributeName))if(H.attributeName==="class"&&l6(H.target)){var h=R2(H1(H.target)),M=h.prefix,C=h.iconName;H.target.setAttribute(o1,M||m),C&&H.target.setAttribute(t1,C)}else o6(H.target)&&s(H.target)})}}),W&&B2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}i(J1,"observe");function z6(){B2&&B2.disconnect()}i(z6,"disconnect");function V6(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),f=n[0],l=n.slice(1);return f&&l.length>0&&(r[f]=l.join(":").trim()),r},{})),e}i(V6,"styleParser");function h6(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=R2(H1(c));return s.prefix||(s.prefix=j()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=X4(s.prefix,c.innerText)||V1(s.prefix,Z2(c.innerText))),!s.iconName&&V.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}i(h6,"classParser");function M6(c){var a=f2(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return V.autoA11y&&(e?a["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(r||h2()):(a["aria-hidden"]="true",a.focusable="false")),a}i(M6,"attributesParser");function p6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}i(p6,"blankMeta");function Z1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=h6(c),r=e.iconName,s=e.prefix,n=e.rest,f=M6(c),l=a1("parseNodeAttributes",{},c),o=a.styleParser?V6(c):[];return v({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:f}},l)}i(Z1,"parseMeta");var u6=T.styles;function T3(c){var a=V.autoReplaceSvg==="nest"?Z1(c,{styleParser:!1}):Z1(c);return~a.extra.classes.indexOf(V3)?U("generateLayersText",c,a):U("generateSvgReplacementMutation",c,a)}i(T3,"generateMutation");var X=new Set;m1.map(function(c){X.add("fa-".concat(c))});Object.keys(H2[L]).map(X.add.bind(X));Object.keys(H2[N]).map(X.add.bind(X));X=M2(X);function c3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();var e=g.documentElement.classList,r=i(function(H){return e.add("".concat(O1,"-").concat(H))},"hclAdd"),s=i(function(H){return e.remove("".concat(O1,"-").concat(H))},"hclRemove"),n=V.autoFetchSvg?X:m1.map(function(m){return"fa-".concat(m)}).concat(Object.keys(u6));n.includes("fa")||n.push("fa");var f=[".".concat(V3,":not([").concat(Z,"])")].concat(n.map(function(m){return".".concat(m,":not([").concat(Z,"])")})).join(", ");if(f.length===0)return Promise.resolve();var l=[];try{l=f2(c.querySelectorAll(f))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();var o=p1.begin("onTree"),t=l.reduce(function(m,H){try{var h=T3(H);h&&m.push(h)}catch(M){z3||M.name==="MissingIcon"&&console.error(M)}return m},[]);return new Promise(function(m,H){Promise.all(t).then(function(h){A3(h,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),o(),m()})}).catch(function(h){o(),H(h)})})}i(c3,"onTree");function C6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;T3(c).then(function(e){e&&A3([e],a)})}i(C6,"onNode");function d6(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:e1(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:e1(s||{})),c(r,v(v({},e),{},{mask:s}))}}i(d6,"resolveIcons");var L6=i(function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?D:r,n=e.symbol,f=n===void 0?!1:n,l=e.mask,o=l===void 0?null:l,t=e.maskId,m=t===void 0?null:t,H=e.title,h=H===void 0?null:H,M=e.titleId,C=M===void 0?null:M,x=e.classes,d=x===void 0?[]:x,k=e.attributes,b=k===void 0?{}:k,u=e.styles,y=u===void 0?{}:u;if(a){var S=a.prefix,$=a.iconName,Q=a.icon;return E2(v({type:"icon"},a),function(){return c2("beforeDOMElementCreation",{iconDefinition:a,params:e}),V.autoA11y&&(h?b["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(C||h2()):(b["aria-hidden"]="true",b.focusable="false")),M1({icons:{main:r1(Q),mask:o?r1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:$,transform:v(v({},D),s),symbol:f,title:h,maskId:m,titleId:C,extra:{attributes:b,styles:y,classes:d}})})}},"render"),g6={mixout:i(function(){return{icon:d6(L6)}},"mixout"),hooks:i(function(){return{mutationObserverCallbacks:i(function(e){return e.treeCallback=c3,e.nodeCallback=C6,e},"mutationObserverCallbacks")}},"hooks"),provides:i(function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?g:r,n=e.callback,f=n===void 0?function(){}:n;return c3(s,f)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,f=r.titleId,l=r.prefix,o=r.transform,t=r.symbol,m=r.mask,H=r.maskId,h=r.extra;return new Promise(function(M,C){Promise.all([s1(s,l),m.iconName?s1(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var d=f1(x,2),k=d[0],b=d[1];M([e,M1({icons:{main:k,mask:b},prefix:l,iconName:s,transform:o,symbol:t,maskId:H,title:n,titleId:f,extra:h,watchable:!0})])}).catch(C)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,f=e.transform,l=e.styles,o=F2(l);o.length>0&&(s.style=o);var t;return v1(f)&&(t=U("generateAbstractTransformGrouping",{main:n,transform:f,containerWidth:n.width,iconWidth:n.width})),r.push(t||n.icon),{children:r,attributes:s}}},"provides")},x6={mixout:i(function(){return{layer:i(function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return E2({type:"layer"},function(){c2("beforeDOMElementCreation",{assembler:e,params:r});var f=[];return e(function(l){Array.isArray(l)?l.map(function(o){f=f.concat(o.abstract)}):f=f.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(M2(n)).join(" ")},children:f}]})},"layer")}},"mixout")},b6={mixout:i(function(){return{counter:i(function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,f=r.classes,l=f===void 0?[]:f,o=r.attributes,t=o===void 0?{}:o,m=r.styles,H=m===void 0?{}:m;return E2({type:"counter",content:e},function(){return c2("beforeDOMElementCreation",{content:e,params:r}),s6({content:e.toString(),title:n,extra:{attributes:t,styles:H,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(M2(l))}})})},"counter")}},"mixout")},N6={mixout:i(function(){return{text:i(function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?D:s,f=r.title,l=f===void 0?null:f,o=r.classes,t=o===void 0?[]:o,m=r.attributes,H=m===void 0?{}:m,h=r.styles,M=h===void 0?{}:h;return E2({type:"text",content:e},function(){return c2("beforeDOMElementCreation",{content:e,params:r}),Y1({content:e,transform:v(v({},D),n),title:l,extra:{attributes:H,styles:M,classes:["".concat(V.cssPrefix,"-layers-text")].concat(M2(t))}})})},"text")}},"mixout"),provides:i(function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,f=r.extra,l=null,o=null;if(m3){var t=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();l=m.width/t,o=m.height/t}return V.autoA11y&&!s&&(f.attributes["aria-hidden"]="true"),Promise.resolve([e,Y1({content:e.innerHTML,width:l,height:o,transform:n,title:s,extra:f,watchable:!0})])}},"provides")},w6=new RegExp('"',"ug"),a3=[1105920,1112319];function S6(c){var a=c.replace(w6,""),e=O4(a,0),r=e>=a3[0]&&e<=a3[1],s=a.length===2?a[0]===a[1]:!1;return{value:Z2(s?a[0]:a),isSecondary:r||s}}i(S6,"hexValueFromContent");function e3(c,a){var e="".concat(M4).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=f2(c.children),f=n.filter(function(Q){return Q.getAttribute(J2)===a})[0],l=_.getComputedStyle(c,a),o=l.getPropertyValue("font-family").match(L4),t=l.getPropertyValue("font-weight"),m=l.getPropertyValue("content");if(f&&!o)return c.removeChild(f),r();if(o&&m!=="none"&&m!==""){var H=l.getPropertyValue("content"),h=~["Sharp"].indexOf(o[2])?N:L,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?v2[h][o[2].toLowerCase()]:g4[h][t],C=S6(H),x=C.value,d=C.isSecondary,k=o[0].startsWith("FontAwesome"),b=V1(M,x),u=b;if(k){var y=Y4(x);y.iconName&&y.prefix&&(b=y.iconName,M=y.prefix)}if(b&&!d&&(!f||f.getAttribute(o1)!==M||f.getAttribute(t1)!==u)){c.setAttribute(e,u),f&&c.removeChild(f);var S=p6(),$=S.extra;$.attributes[J2]=a,s1(b,M).then(function(Q){var q2=M1(v(v({},S),{},{icons:{main:Q,mask:h1()},prefix:M,iconName:u,extra:$,watchable:!0})),I=g.createElement("svg");a==="::before"?c.insertBefore(I,c.firstChild):c.appendChild(I),I.outerHTML=q2.map(function(n4){return u2(n4)}).join(`
`),c.removeAttribute(e),r()}).catch(s)}else r()}else r()})}i(e3,"replaceForPosition");function k6(c){return Promise.all([e3(c,"::before"),e3(c,"::after")])}i(k6,"replace");function y6(c){return c.parentNode!==document.head&&!~u4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(J2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}i(y6,"processable");function r3(c){if(W)return new Promise(function(a,e){var r=f2(c.querySelectorAll("*")).filter(y6).map(k6),s=p1.begin("searchPseudoElements");P3(),Promise.all(r).then(function(){s(),n1(),a()}).catch(function(){s(),n1(),e()})})}i(r3,"searchPseudoElements");var A6={hooks:i(function(){return{mutationObserverCallbacks:i(function(e){return e.pseudoElementsCallback=r3,e},"mutationObserverCallbacks")}},"hooks"),provides:i(function(a){a.pseudoElements2svg=function(e){var r=e.node,s=r===void 0?g:r;V.searchPseudoElements&&r3(s)}},"provides")},s3=!1,P6={mixout:i(function(){return{dom:{unwatch:i(function(){P3(),s3=!0},"unwatch")}}},"mixout"),hooks:i(function(){return{bootstrap:i(function(){J1(a1("mutationObserverCallbacks",{}))},"bootstrap"),noAuto:i(function(){z6()},"noAuto"),watch:i(function(e){var r=e.observeMutationsRoot;s3?n1():J1(a1("mutationObserverCallbacks",{observeMutationsRoot:r}))},"watch")}},"hooks")},i3=i(function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,s){var n=s.toLowerCase().split("-"),f=n[0],l=n.slice(1).join("-");if(f&&l==="h")return r.flipX=!0,r;if(f&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(f){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},e)},"parseTransformString"),T6={mixout:i(function(){return{parse:{transform:i(function(e){return i3(e)},"transform")}}},"mixout"),hooks:i(function(){return{parseNodeAttributes:i(function(e,r){var s=r.getAttribute("data-fa-transform");return s&&(e.transform=i3(s)),e},"parseNodeAttributes")}},"hooks"),provides:i(function(a){a.generateAbstractTransformGrouping=function(e){var r=e.main,s=e.transform,n=e.containerWidth,f=e.iconWidth,l={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(s.x*32,", ").concat(s.y*32,") "),t="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),m="rotate(".concat(s.rotate," 0 0)"),H={transform:"".concat(o," ").concat(t," ").concat(m)},h={transform:"translate(".concat(f/2*-1," -256)")},M={outer:l,inner:H,path:h};return{tag:"g",attributes:v({},M.outer),children:[{tag:"g",attributes:v({},M.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:v(v({},r.icon.attributes),M.path)}]}]}}},"provides")},$2={x:0,y:0,width:"100%",height:"100%"};function n3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}i(n3,"fillBlack");function B6(c){return c.tag==="g"?c.children:[c]}i(B6,"deGroup");var F6={hooks:i(function(){return{parseNodeAttributes:i(function(e,r){var s=r.getAttribute("data-fa-mask"),n=s?R2(s.split(" ").map(function(f){return f.trim()})):h1();return n.prefix||(n.prefix=j()),e.mask=n,e.maskId=r.getAttribute("data-fa-mask-id"),e},"parseNodeAttributes")}},"hooks"),provides:i(function(a){a.generateAbstractMask=function(e){var r=e.children,s=e.attributes,n=e.main,f=e.mask,l=e.maskId,o=e.transform,t=n.width,m=n.icon,H=f.width,h=f.icon,M=T4({transform:o,containerWidth:H,iconWidth:t}),C={tag:"rect",attributes:v(v({},$2),{},{fill:"white"})},x=m.children?{children:m.children.map(n3)}:{},d={tag:"g",attributes:v({},M.inner),children:[n3(v({tag:m.tag,attributes:v(v({},m.attributes),M.path)},x))]},k={tag:"g",attributes:v({},M.outer),children:[d]},b="mask-".concat(l||h2()),u="clip-".concat(l||h2()),y={tag:"mask",attributes:v(v({},$2),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,k]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:u},children:B6(h)},y]};return r.push(S,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(u,")"),mask:"url(#".concat(b,")")},$2)}),{children:r,attributes:s}}},"provides")},D6={provides:i(function(a){var e=!1;_.matchMedia&&(e=_.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:v(v({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=v(v({},n),{},{attributeName:"opacity"}),l={tag:"circle",attributes:v(v({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||l.children.push({tag:"animate",attributes:v(v({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},f),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:v(v({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:v(v({},f),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:v(v({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}},"provides")},R6={hooks:i(function(){return{parseNodeAttributes:i(function(e,r){var s=r.getAttribute("data-fa-symbol"),n=s===null?!1:s===""?!0:s;return e.symbol=n,e},"parseNodeAttributes")}},"hooks")},E6=[D4,g6,x6,b6,N6,A6,P6,T6,F6,D6,R6];K4(E6,{mixoutsTo:A});var v0=A.noAuto,z0=A.config,V0=A.library,h0=A.dom,U2=A.parse,M0=A.findIconDefinition,p0=A.toHtml,B3=A.icon,u0=A.layer,C0=A.text,d0=A.counter;var p=f4(I3());function q3(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}i(q3,"ownKeys");function Y(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?q3(Object(e),!0).forEach(function(r){l2(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):q3(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}i(Y,"_objectSpread2");function W2(c){"@babel/helpers - typeof";return W2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},W2(c)}i(W2,"_typeof");function l2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}i(l2,"_defineProperty");function O6(c,a){if(c==null)return{};var e={},r=Object.keys(c),s,n;for(n=0;n<r.length;n++)s=r[n],!(a.indexOf(s)>=0)&&(e[s]=c[s]);return e}i(O6,"_objectWithoutPropertiesLoose");function I6(c,a){if(c==null)return{};var e=O6(c,a),r,s;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(c);for(s=0;s<n.length;s++)r=n[s],!(a.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(c,r)&&(e[r]=c[r])}return e}i(I6,"_objectWithoutProperties");function d1(c){return q6(c)||G6(c)||_6(c)||j6()}i(d1,"_toConsumableArray");function q6(c){if(Array.isArray(c))return L1(c)}i(q6,"_arrayWithoutHoles");function G6(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}i(G6,"_iterableToArray");function _6(c,a){if(c){if(typeof c=="string")return L1(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return L1(c,a)}}i(_6,"_unsupportedIterableToArray");function L1(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}i(L1,"_arrayLikeToArray");function j6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i(j6,"_nonIterableSpread");function X6(c){var a,e=c.beat,r=c.fade,s=c.beatFade,n=c.bounce,f=c.shake,l=c.flash,o=c.spin,t=c.spinPulse,m=c.spinReverse,H=c.pulse,h=c.fixedWidth,M=c.inverse,C=c.border,x=c.listItem,d=c.flip,k=c.size,b=c.rotation,u=c.pull,y=(a={"fa-beat":e,"fa-fade":r,"fa-beat-fade":s,"fa-bounce":n,"fa-shake":f,"fa-flash":l,"fa-spin":o,"fa-spin-reverse":m,"fa-spin-pulse":t,"fa-pulse":H,"fa-fw":h,"fa-inverse":M,"fa-border":C,"fa-li":x,"fa-flip":d===!0,"fa-flip-horizontal":d==="horizontal"||d==="both","fa-flip-vertical":d==="vertical"||d==="both"},l2(a,"fa-".concat(k),typeof k<"u"&&k!==null),l2(a,"fa-rotate-".concat(b),typeof b<"u"&&b!==null&&b!==0),l2(a,"fa-pull-".concat(u),typeof u<"u"&&u!==null),l2(a,"fa-swap-opacity",c.swapOpacity),a);return Object.keys(y).map(function(S){return y[S]?S:null}).filter(function(S){return S})}i(X6,"classList");function Y6(c){return c=c-0,c===c}i(Y6,"_isNumerical");function _3(c){return Y6(c)?c:(c=c.replace(/[\-_\s]+(.)?/g,function(a,e){return e?e.toUpperCase():""}),c.substr(0,1).toLowerCase()+c.substr(1))}i(_3,"camelize");var $6=["style"];function Q6(c){return c.charAt(0).toUpperCase()+c.slice(1)}i(Q6,"capitalize");function K6(c){return c.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var r=e.indexOf(":"),s=_3(e.slice(0,r)),n=e.slice(r+1).trim();return s.startsWith("webkit")?a[Q6(s)]=n:a[s]=n,a},{})}i(K6,"styleToObject");function j3(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof a=="string")return a;var r=(a.children||[]).map(function(o){return j3(c,o)}),s=Object.keys(a.attributes||{}).reduce(function(o,t){var m=a.attributes[t];switch(t){case"class":o.attrs.className=m,delete a.attributes.class;break;case"style":o.attrs.style=K6(m);break;default:t.indexOf("aria-")===0||t.indexOf("data-")===0?o.attrs[t.toLowerCase()]=m:o.attrs[_3(t)]=m}return o},{attrs:{}}),n=e.style,f=n===void 0?{}:n,l=I6(e,$6);return s.attrs.style=Y(Y({},s.attrs.style),f),c.apply(void 0,[a.tag,Y(Y({},s.attrs),l)].concat(d1(r)))}i(j3,"convert");var X3=!1;try{X3=!0}catch{}function J6(){if(!X3&&console&&typeof console.error=="function"){var c;(c=console).error.apply(c,arguments)}}i(J6,"log");function G3(c){if(c&&W2(c)==="object"&&c.prefix&&c.iconName&&c.icon)return c;if(U2.icon)return U2.icon(c);if(c===null)return null;if(c&&W2(c)==="object"&&c.prefix&&c.iconName)return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:"fas",iconName:c}}i(G3,"normalizeIconArgs");function C1(c,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?l2({},c,a):{}}i(C1,"objectWithKey");var P=_2.forwardRef(function(c,a){var e=c.icon,r=c.mask,s=c.symbol,n=c.className,f=c.title,l=c.titleId,o=c.maskId,t=G3(e),m=C1("classes",[].concat(d1(X6(c)),d1(n.split(" ")))),H=C1("transform",typeof c.transform=="string"?U2.transform(c.transform):c.transform),h=C1("mask",G3(r)),M=B3(t,Y(Y(Y(Y({},m),H),h),{},{symbol:s,title:f,titleId:l,maskId:o}));if(!M)return J6("Could not find icon",t),null;var C=M.abstract,x={ref:a};return Object.keys(c).forEach(function(d){P.defaultProps.hasOwnProperty(d)||(x[d]=c[d])}),Z6(C[0],x)});P.displayName="FontAwesomeIcon";P.propTypes={beat:p.default.bool,border:p.default.bool,beatFade:p.default.bool,bounce:p.default.bool,className:p.default.string,fade:p.default.bool,flash:p.default.bool,mask:p.default.oneOfType([p.default.object,p.default.array,p.default.string]),maskId:p.default.string,fixedWidth:p.default.bool,inverse:p.default.bool,flip:p.default.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.default.oneOfType([p.default.object,p.default.array,p.default.string]),listItem:p.default.bool,pull:p.default.oneOf(["right","left"]),pulse:p.default.bool,rotation:p.default.oneOf([0,90,180,270]),shake:p.default.bool,size:p.default.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.default.bool,spinPulse:p.default.bool,spinReverse:p.default.bool,symbol:p.default.oneOfType([p.default.bool,p.default.string]),title:p.default.string,titleId:p.default.string,transform:p.default.oneOfType([p.default.string,p.default.object]),swapOpacity:p.default.bool};P.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Z6=j3.bind(null,_2.createElement);var Y3=`.plasma-window>* {
  background-color: var(--backgroundprimary);
}

.plasma-window>.plasma-window-titlebar {
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
  cursor: move;
  height: 30px;
}

.plasma-window-title svg {
  margin-right: 10px;
}

.plasma-window>.plasma-window-titlebar>span:first-child {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 5px;
}

.plasma-window>.plasma-window-titlebar>span:last-child {
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 0.2em;
}

.plasma-window>.plasma-window-titlebar>span:last-child>div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
}

.plasma-window>.plasma-window-titlebar>span:last-child>div>svg {
  aspect-ratio: 1/1;
}

.plasma-window .plasma-window-content {
  width: 100%;
  height: 100%;
}`;function $3({width:c,minWidth:a,maxWidth:e,height:r,minHeight:s,maxHeight:n,resizable:f=!0,children:l}){let[o,t]=B({w:c??0,h:r??0}),m={w:a??0,h:s??0},H={w:e??Number.MAX_SAFE_INTEGER,h:n??Number.MAX_SAFE_INTEGER},h=a2();function M(C){t({w:C.clientX-h.current.getBoundingClientRect().x,h:C.clientY-h.current.getBoundingClientRect().y})}return i(M,"mouseMove"),q(()=>{h.current},[h]),z("div",{ref:h,style:{position:"relative",width:Math.min(Math.max(m.w,o.w),H.w)||"inherit",height:Math.min(Math.max(m.h,o.h),H.h)||"inherit"}},l,!f||z("div",{style:{position:"absolute",right:"-3px",bottom:"-3px",display:"flex",cursor:"nwse-resize"},onMouseDown:C=>{if(!f||!h.current)return;let x=i(d=>M(d),"listener");addEventListener("mousemove",x),addEventListener("mouseup",()=>{removeEventListener("mousemove",x)},{once:!0})}},z(P,{style:{transform:"rotate(-45deg)",aspectRatio:"1/1"},icon:A1})))}i($3,"Resizable");var a0=1,g1=C2(null);function Q3(c){let a=a0++;return{...c,id:a}}i(Q3,"createWindow");function K3(c){let{title:a,children:e,resizable:r,minimized:s=!1,x:n,y:f,width:l,minWidth:o,maxWidth:t,height:m,minHeight:H,maxHeight:h,icon:M}=c,[{windows:C},x]=F(O),[d,k]=B(!1),b=C.at(-1).id==c.id&&!s,u=N1();return q(()=>{u.current&&(u.current.style.left=(n??document.body.clientWidth/2-u.current.clientWidth/2)+"px",u.current.style.top=(f??document.body.clientHeight/2-u.current.clientHeight/2)+"px")},[]),z(y1,{_ref:u,x:n,y:f,active:d},z("style",null,Y3),z("div",{style:{display:s?"none":void 0},className:`plasma-window ${b?"plasma-box-glow":""} plasma-box`,onMouseDown:()=>x({action:"FOCUS",window:c})},z("div",{onMouseDown:y=>{k(!0),addEventListener("mouseup",()=>{k(!1)},{once:!0})},className:"plasma-window-titlebar plasma-box-bottom"},z("span",{className:"plasma-window-title"},!M||z(P,{icon:M}),a),z("span",null,z("div",{className:"plasma-button plasma-fill plasma-square",onClick:()=>x({action:"MINIMIZE",window:c})},z(P,{style:{fontSize:"0.9em"},icon:B1})),z("div",{className:"plasma-button plasma-fill plasma-square",onClick:()=>x({action:"CLOSE",window:c})},z(P,{icon:T1})))),z($3,{minHeight:H,minWidth:o,maxHeight:h,maxWidth:t,height:m,width:l,resizable:r},z(g1.Provider,{value:c},z("div",{className:"plasma-window-content"},e)))))}i(K3,"PlasmaWindow");var O2=class{static{i(this,"Program")}constructor({name:a,icon:e,WindowContents:r,options:s}){this.options={title:a,icon:e??e2,children:z(r,null),...s??{}}}launch(a){let[e,r]=a??x1;console.log(r),r({action:"CREATE",window:Q3(this.options)})}};var J3=new O2({name:"Bingo",icon:e2,WindowContents:e0,options:{resizable:!0,width:500,height:500,minWidth:300,minHeight:300,maxHeight:700,maxWidth:700}});function e0(){let c=F(g1);return z("span",null,z("iframe",{width:"100%",height:"100%",src:"/bingo",frameBorder:"0"}))}i(e0,"WindowContents");function Z3({}){let c=F(O);return z("div",{className:"homemenu plasma-box-inline"},z("span",{onClick:()=>{J3.launch(c)},className:"plasma-button plasma-box-top"},z(P,{icon:e2}),z("span",{className:"plasma-center"},"Bingo")),z("span",{className:"plasma-button plasma-box-top"},z(P,{icon:P1}),z("span",{className:"plasma-center"},"Shutdown")))}i(Z3,"HomeMenu");function c4({}){let[c,a]=B(!1),e=a2();return z(w1,null,z("div",{className:"taskbar-homebutton plasma-button plasma-box-inline",onClick:()=>{if(a(!c),!c){let r=new AbortController;setTimeout(()=>document.querySelector(".desktop-enviroment")?.addEventListener("click",s=>{console.log(s.composedPath(),e.current),a(!1),r.abort()},{signal:r.signal}))}}},z("img",{className:"taskbar-homebutton",src:S1,alt:""})),!c||z(Z3,{ref:e}))}i(c4,"HomeButton");var I2=`.taskbar {
  background-color: var(--backgroundprimary);
  border-block: 1px solid var(--welllight);
  height: 45px;
  display: flex;
  position: relative;
  z-index: 1;
}

.taskbar>* {
  height: 43px;
}

.taskbar-windows {
  width: 100%;
  display: flex;
}

.taskbar-windows>* {
  height: 100%;
}

.taskbar-homebutton {
  width: 45px;
  flex-shrink: 0;
}

.homemenu {
  position: absolute;
  left: 0;
  bottom: 43px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.homemenu>* {
  padding: 5px;
  width: 100%;
  gap: 1em;
  display: grid;
  grid-template-columns: 30px auto;
}

.homemenu svg {
  font-size: 1.5em;
}

.taskbar-date {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: fit-content;
  justify-self: right;
  padding-inline: 10px;
}

.taskbar-entry {
  height: 100%;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 5px;
}

.taskbar-entry-focus {
  background-color: var(--well);
}

.taskbar-entry-focus:hover {
  filter: brightness(1.5);
}`;function a4(c){let{title:a,minimized:e}=c,[{windows:r},s]=F(O),n=r.at(-1).id==c.id&&!e;return z("div",{className:`taskbar-entry plasma-button plasma-box-right ${!n||"taskbar-entry-focus"}`,onClick:()=>{s(e||!n?{action:"FOCUS",window:c}:{action:"MINIMIZE",window:c})}},z("style",null,I2),a)}i(a4,"TaskbarEntry");function e4({}){let[c,a]=B(Date.now()),[{windows:e}]=F(O);return q(()=>{let r=setInterval(()=>{a(Date.now())},1e3);return()=>{clearInterval(r)}},[]),z("div",{className:"taskbar"},z("style",null,I2),z(c4,null),z("div",{className:"taskbar-windows"},[...e].sort((r,s)=>r.id-s.id).map(r=>z(a4,{key:r.id,...r}))),z("span",{className:"taskbar-date plasma-box-inline"},z("div",null,new Date(c).toLocaleTimeString().slice(0,-3)),z("div",null,new Date(c).toLocaleDateString())))}i(e4,"Taskbar");function b1(c,a){return c.windows.find(e=>e.id==a.id)}i(b1,"getWindow");var s0={CREATE:function(c,{action:a,window:e}){if(!b1(c,e))return c.windows.unshift(e),{...c}},CLOSE:function(c,{action:a,window:e}){return{windows:c.windows.filter(r=>r.id!=e.id)}},MINIMIZE:function(c,{action:a,window:e}){return b1(c,e).minimized=!0,c.windows.unshift(c.windows.pop()),{...c}},MAXIMISE:function(c,{action:a,window:e}){return b1(c,e).minimized=!0,{...c}},FOCUS:function(c,{action:a,window:e}){return e.minimized=!1,{windows:[...c.windows.filter(r=>r.id!=e.id),e]}}};function r4(c,a){return s0[a.action](c,a)}i(r4,"WindowManagerReducer");var s4=`
.desktop-enviroment {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 45px;
  background-color: var(--backgroundprimary);
  font-family: "Lucida Console", "Lucida Sans Unicode", "Fira Mono", Consolas, "Courier New", Courier, monospace, "Times New Roman";
}

.desktop-enviroment * {
  box-sizing: border-box;
  color: var(--primarylight);
  font-size: 1.05em;
  user-select: none;
}

.plasma-desktop{
  overflow: hidden;
}`;var O=C2(null),x1=[{windows:[]},()=>{throw new Error("WindowManager is not available. Desktop Enviroment may not be running")}];function i4({}){let c=k1(r4,{windows:[]});return x1=c,q(()=>{},[]),z("div",{className:"desktop-enviroment"},z("style",null,s4),z(O.Provider,{value:c},z("div",{className:"desktop"},c[0].windows.map(a=>z(K3,{key:a.id,...a}))),z(e4,null)))}i(i4,"DesktopEnviroment");var i5=i(()=>z(i4,null),"default");export{i5 as default};
