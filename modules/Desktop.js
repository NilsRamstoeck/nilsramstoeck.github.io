import{a as S1,d as j2}from"../chunk-WKKMNUV3.js";import{a as y1}from"../chunk-MC3HE2WE.js";import"../chunk-PZK4PQ5R.js";import"../chunk-LYJN6WSL.js";import{a as B,b as k1,c as I,e as e2,i as q}from"../chunk-GI55XC6B.js";import{a as A1}from"../chunk-ORO4Q5FJ.js";import{b as z,c as w1,d as L2,j as g2}from"../chunk-MTT35ZOU.js";import{a as i,c as _2,e as n4}from"../chunk-HUMC4NK7.js";var E3=_2((L0,R3)=>{"use strict";var E6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";R3.exports=E6});var I3=_2((g0,O3)=>{"use strict";var U6=E3();function U3(){}i(U3,"emptyFunction");function W3(){}i(W3,"emptyFunctionWithReset");W3.resetWarningCache=U3;O3.exports=function(){function c(r,s,n,f,l,o){if(o!==U6){var t=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw t.name="Invariant Violation",t}}i(c,"shim"),c.isRequired=c;function a(){return c}i(a,"getShim");var e={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:a,element:c,elementType:c,instanceOf:a,node:c,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:W3,resetWarningCache:U3};return e.PropTypes=e,e}});var G3=_2((w0,q3)=>{q3.exports=I3()();var b0,N0});function P1({_ref:c,active:a=!0,x:e,y:r,children:s}){let n=c??e2(),[f,l]=B({x:e??0,y:r??0});function o(t,m){l({x:t.clientX-m.x,y:t.clientY-m.y})}return i(o,"mouseMove"),z("div",{ref:n,style:{position:"absolute",left:f.x,top:f.y},onMouseDown:t=>{if(!a||!n.current)return;let m={x:t.clientX-n.current.getBoundingClientRect().x,y:t.clientY-n.current.getBoundingClientRect().y},H=i(h=>o(h,m),"listener");addEventListener("mousemove",H),addEventListener("mouseup",()=>{removeEventListener("mousemove",H)},{once:!0})},className:"preact-draggable"},s)}i(P1,"Draggable");var T1={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]};var B1={prefix:"fas",iconName:"power-off",icon:[512,512,[9211],"f011","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"]};var K={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"]};var F1={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var D1={prefix:"fas",iconName:"window-minimize",icon:[512,512,[128469],"f2d1","M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"]};function R1(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}i(R1,"ownKeys");function v(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?R1(Object(e),!0).forEach(function(r){w(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):R1(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}i(v,"_objectSpread2");function F2(c){"@babel/helpers - typeof";return F2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},F2(c)}i(F2,"_typeof");function f4(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}i(f4,"_classCallCheck");function E1(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}i(E1,"_defineProperties");function l4(c,a,e){return a&&E1(c.prototype,a),e&&E1(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}i(l4,"_createClass");function w(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}i(w,"_defineProperty");function l1(c,a){return t4(c)||H4(c,a)||o3(c,a)||z4()}i(l1,"_slicedToArray");function p2(c){return o4(c)||m4(c)||o3(c)||v4()}i(p2,"_toConsumableArray");function o4(c){if(Array.isArray(c))return K2(c)}i(o4,"_arrayWithoutHoles");function t4(c){if(Array.isArray(c))return c}i(t4,"_arrayWithHoles");function m4(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}i(m4,"_iterableToArray");function H4(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,f,l;try{for(e=e.call(c);!(s=(f=e.next()).done)&&(r.push(f.value),!(a&&r.length===a));s=!0);}catch(o){n=!0,l=o}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw l}}return r}}i(H4,"_iterableToArrayLimit");function o3(c,a){if(c){if(typeof c=="string")return K2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return K2(c,a)}}i(o3,"_unsupportedIterableToArray");function K2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}i(K2,"_arrayLikeToArray");function v4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i(v4,"_nonIterableSpread");function z4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i(z4,"_nonIterableRest");var U1=i(function(){},"noop"),o1={},t3={},m3=null,H3={mark:U1,measure:U1};try{typeof window<"u"&&(o1=window),typeof document<"u"&&(t3=document),typeof MutationObserver<"u"&&(m3=MutationObserver),typeof performance<"u"&&(H3=performance)}catch{}var V4=o1.navigator||{},W1=V4.userAgent,O1=W1===void 0?"":W1,_=o1,g=t3,I1=m3,x2=H3,t0=!!_.document,U=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",v3=~O1.indexOf("MSIE")||~O1.indexOf("Trident/"),b2,N2,w2,S2,k2,D="___FONT_AWESOME___",J2=16,z3="fa",V3="svg-inline--fa",c2="data-fa-i2svg",Z2="data-fa-pseudo-element",h4="data-fa-pseudo-element-pending",t1="data-prefix",m1="data-icon",q1="fontawesome-i2svg",M4="async",p4=["HTML","HEAD","STYLE","SCRIPT"],h3=function(){try{return!0}catch{return!1}}(),L="classic",N="sharp",H1=[L,N];function u2(c){return new Proxy(c,{get:i(function(e,r){return r in e?e[r]:e[L]},"get")})}i(u2,"familyProxy");var v2=u2((b2={},w(b2,L,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),w(b2,N,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),b2)),z2=u2((N2={},w(N2,L,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),w(N2,N,{solid:"fass",regular:"fasr",light:"fasl"}),N2)),V2=u2((w2={},w(w2,L,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),w(w2,N,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),w2)),u4=u2((S2={},w(S2,L,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),w(S2,N,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),S2)),C4=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,M3="fa-layers-text",d4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,L4=u2((k2={},w(k2,L,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),w(k2,N,{900:"fass",400:"fasr",300:"fasl"}),k2)),p3=[1,2,3,4,5,6,7,8,9,10],g4=p3.concat([11,12,13,14,15,16,17,18,19,20]),x4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},h2=new Set;Object.keys(z2[L]).map(h2.add.bind(h2));Object.keys(z2[N]).map(h2.add.bind(h2));var b4=[].concat(H1,p2(h2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY]).concat(p3.map(function(c){return"".concat(c,"x")})).concat(g4.map(function(c){return"w-".concat(c)})),m2=_.FontAwesomeConfig||{};function N4(c){var a=g.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}i(N4,"getAttrConfig");function w4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}i(w4,"coerce");g&&typeof g.querySelector=="function"&&(G1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],G1.forEach(function(c){var a=l1(c,2),e=a[0],r=a[1],s=w4(N4(e));s!=null&&(m2[r]=s)}));var G1,u3={styleDefault:"solid",familyDefault:"classic",cssPrefix:z3,replacementClass:V3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};m2.familyPrefix&&(m2.cssPrefix=m2.familyPrefix);var n2=v(v({},u3),m2);n2.autoReplaceSvg||(n2.observeMutations=!1);var V={};Object.keys(u3).forEach(function(c){Object.defineProperty(V,c,{enumerable:!0,set:i(function(e){n2[c]=e,H2.forEach(function(r){return r(V)})},"set"),get:i(function(){return n2[c]},"get")})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:i(function(a){n2.cssPrefix=a,H2.forEach(function(e){return e(V)})},"set"),get:i(function(){return n2.cssPrefix},"get")});_.FontAwesomeConfig=V;var H2=[];function S4(c){return H2.push(c),function(){H2.splice(H2.indexOf(c),1)}}i(S4,"onChange");var G=J2,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function k4(c){if(!(!c||!U)){var a=g.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=g.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],f=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(r=n)}return g.head.insertBefore(a,r),c}}i(k4,"insertCss");var y4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function M2(){for(var c=12,a="";c-- >0;)a+=y4[Math.random()*62|0];return a}i(M2,"nextUniqueId");function f2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}i(f2,"toArray");function v1(c){return c.classList?f2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}i(v1,"classArray");function C3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}i(C3,"htmlEscape");function A4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(C3(c[e]),'" ')},"").trim()}i(A4,"joinAttributes");function E2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}i(E2,"joinStyles");function z1(c){return c.size!==F.size||c.x!==F.x||c.y!==F.y||c.rotate!==F.rotate||c.flipX||c.flipY}i(z1,"transformIsMeaningful");function P4(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(n," ").concat(f," ").concat(l)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:o,path:t}}i(P4,"transformForSvg");function T4(c){var a=c.transform,e=c.width,r=e===void 0?J2:e,s=c.height,n=s===void 0?J2:s,f=c.startCentered,l=f===void 0?!1:f,o="";return l&&v3?o+="translate(".concat(a.x/G-r/2,"em, ").concat(a.y/G-n/2,"em) "):l?o+="translate(calc(-50% + ".concat(a.x/G,"em), calc(-50% + ").concat(a.y/G,"em)) "):o+="translate(".concat(a.x/G,"em, ").concat(a.y/G,"em) "),o+="scale(".concat(a.size/G*(a.flipX?-1:1),", ").concat(a.size/G*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}i(T4,"transformForCss");var B4=`:root, :host {
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
}`;function d3(){var c=z3,a=V3,e=V.cssPrefix,r=V.replacementClass,s=B4;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),f=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(f,"--".concat(e,"-")).replace(l,".".concat(r))}return s}i(d3,"css");var _1=!1;function X2(){V.autoAddCss&&!_1&&(k4(d3()),_1=!0)}i(X2,"ensureCss");var F4={mixout:i(function(){return{dom:{css:d3,insertCss:X2}}},"mixout"),hooks:i(function(){return{beforeDOMElementCreation:i(function(){X2()},"beforeDOMElementCreation"),beforeI2svg:i(function(){X2()},"beforeI2svg")}},"hooks")},R=_||{};R[D]||(R[D]={});R[D].styles||(R[D].styles={});R[D].hooks||(R[D].hooks={});R[D].shims||(R[D].shims=[]);var T=R[D],L3=[],D4=i(function c(){g.removeEventListener("DOMContentLoaded",c),D2=1,L3.map(function(a){return a()})},"listener"),D2=!1;U&&(D2=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),D2||g.addEventListener("DOMContentLoaded",D4));function R4(c){U&&(D2?setTimeout(c,0):L3.push(c))}i(R4,"domready");function C2(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?C3(c):"<".concat(a," ").concat(A4(r),">").concat(n.map(C2).join(""),"</").concat(a,">")}i(C2,"toHtml");function j1(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}i(j1,"iconFromMapping");var E4=i(function(a,e){return function(r,s,n,f){return a.call(e,r,s,n,f)}},"bindInternal4"),Y2=i(function(a,e,r,s){var n=Object.keys(a),f=n.length,l=s!==void 0?E4(e,s):e,o,t,m;for(r===void 0?(o=1,m=a[n[0]]):(o=0,m=r);o<f;o++)t=n[o],m=l(m,a[t],t,a);return m},"fastReduceObject");function U4(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}i(U4,"ucs2decode");function c1(c){var a=U4(c);return a.length===1?a[0].toString(16):null}i(c1,"toHex");function W4(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}i(W4,"codePointAt");function X1(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}i(X1,"normalizeIcons");function a1(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=X1(a);typeof T.hooks.addPack=="function"&&!s?T.hooks.addPack(c,X1(a)):T.styles[c]=v(v({},T.styles[c]||{}),n),c==="fas"&&a1("fa",a)}i(a1,"defineIcons");var y2,A2,P2,r2=T.styles,O4=T.shims,I4=(y2={},w(y2,L,Object.values(V2[L])),w(y2,N,Object.values(V2[N])),y2),V1=null,g3={},x3={},b3={},N3={},w3={},q4=(A2={},w(A2,L,Object.keys(v2[L])),w(A2,N,Object.keys(v2[N])),A2);function G4(c){return~b4.indexOf(c)}i(G4,"isReserved");function _4(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!G4(s)?s:null}i(_4,"getIconName");var S3=i(function(){var a=i(function(n){return Y2(r2,function(f,l,o){return f[o]=Y2(l,n,{}),f},{})},"lookup");g3=a(function(s,n,f){if(n[3]&&(s[n[3]]=f),n[2]){var l=n[2].filter(function(o){return typeof o=="number"});l.forEach(function(o){s[o.toString(16)]=f})}return s}),x3=a(function(s,n,f){if(s[f]=f,n[2]){var l=n[2].filter(function(o){return typeof o=="string"});l.forEach(function(o){s[o]=f})}return s}),w3=a(function(s,n,f){var l=n[2];return s[f]=f,l.forEach(function(o){s[o]=f}),s});var e="far"in r2||V.autoFetchSvg,r=Y2(O4,function(s,n){var f=n[0],l=n[1],o=n[2];return l==="far"&&!e&&(l="fas"),typeof f=="string"&&(s.names[f]={prefix:l,iconName:o}),typeof f=="number"&&(s.unicodes[f.toString(16)]={prefix:l,iconName:o}),s},{names:{},unicodes:{}});b3=r.names,N3=r.unicodes,V1=U2(V.styleDefault,{family:V.familyDefault})},"build");S4(function(c){V1=U2(c.styleDefault,{family:V.familyDefault})});S3();function h1(c,a){return(g3[c]||{})[a]}i(h1,"byUnicode");function j4(c,a){return(x3[c]||{})[a]}i(j4,"byLigature");function Z(c,a){return(w3[c]||{})[a]}i(Z,"byAlias");function k3(c){return b3[c]||{prefix:null,iconName:null}}i(k3,"byOldName");function X4(c){var a=N3[c],e=h1("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}i(X4,"byOldUnicode");function j(){return V1}i(j,"getDefaultUsablePrefix");var M1=i(function(){return{prefix:null,iconName:null,rest:[]}},"emptyCanonicalIcon");function U2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?L:e,s=v2[r][c],n=z2[r][c]||z2[r][s],f=c in T.styles?c:null;return n||f||null}i(U2,"getCanonicalPrefix");var Y1=(P2={},w(P2,L,Object.keys(V2[L])),w(P2,N,Object.keys(V2[N])),P2);function W2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},w(a,L,"".concat(V.cssPrefix,"-").concat(L)),w(a,N,"".concat(V.cssPrefix,"-").concat(N)),a),f=null,l=L;(c.includes(n[L])||c.some(function(t){return Y1[L].includes(t)}))&&(l=L),(c.includes(n[N])||c.some(function(t){return Y1[N].includes(t)}))&&(l=N);var o=c.reduce(function(t,m){var H=_4(V.cssPrefix,m);if(r2[m]?(m=I4[l].includes(m)?u4[l][m]:m,f=m,t.prefix=m):q4[l].indexOf(m)>-1?(f=m,t.prefix=U2(m,{family:l})):H?t.iconName=H:m!==V.replacementClass&&m!==n[L]&&m!==n[N]&&t.rest.push(m),!s&&t.prefix&&t.iconName){var h=f==="fa"?k3(t.iconName):{},M=Z(t.prefix,t.iconName);h.prefix&&(f=null),t.iconName=h.iconName||M||t.iconName,t.prefix=h.prefix||t.prefix,t.prefix==="far"&&!r2.far&&r2.fas&&!V.autoFetchSvg&&(t.prefix="fas")}return t},M1());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&l===N&&(r2.fass||V.autoFetchSvg)&&(o.prefix="fass",o.iconName=Z(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||f==="fa")&&(o.prefix=j()||"fas"),o}i(W2,"getCanonicalIcon");var Y4=function(){function c(){f4(this,c),this.definitions={}}return i(c,"Library"),l4(c,[{key:"add",value:i(function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var f=s.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(l){e.definitions[l]=v(v({},e.definitions[l]||{}),f[l]),a1(l,f[l]);var o=V2[L][l];o&&a1(o,f[l]),S3()})},"add")},{key:"reset",value:i(function(){this.definitions={}},"reset")},{key:"_pullDefinitions",value:i(function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var f=s[n],l=f.prefix,o=f.iconName,t=f.icon,m=t[2];e[l]||(e[l]={}),m.length>0&&m.forEach(function(H){typeof H=="string"&&(e[l][H]=t)}),e[l][o]=t}),e},"_pullDefinitions")}]),c}(),$1=[],s2={},i2={},$4=Object.keys(i2);function Q4(c,a){var e=a.mixoutsTo;return $1=c,s2={},Object.keys(i2).forEach(function(r){$4.indexOf(r)===-1&&delete i2[r]}),$1.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(f){typeof s[f]=="function"&&(e[f]=s[f]),F2(s[f])==="object"&&Object.keys(s[f]).forEach(function(l){e[f]||(e[f]={}),e[f][l]=s[f][l]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(f){s2[f]||(s2[f]=[]),s2[f].push(n[f])})}r.provides&&r.provides(i2)}),e}i(Q4,"registerPlugins");function e1(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=s2[c]||[];return n.forEach(function(f){a=f.apply(null,[a].concat(r))}),a}i(e1,"chainHooks");function a2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=s2[c]||[];s.forEach(function(n){n.apply(null,e)})}i(a2,"callHooks");function E(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return i2[c]?i2[c].apply(null,a):void 0}i(E,"callProvided");function r1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||j();if(a)return a=Z(e,a)||a,j1(y3.definitions,e,a)||j1(T.styles,e,a)}i(r1,"findIconDefinition");var y3=new Y4,K4=i(function(){V.autoReplaceSvg=!1,V.observeMutations=!1,a2("noAuto")},"noAuto"),J4={i2svg:i(function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(a2("beforeI2svg",a),E("pseudoElements2svg",a),E("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},"i2svg"),watch:i(function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,R4(function(){c6({autoReplaceSvgRoot:e}),a2("watch",a)})},"watch")},Z4={icon:i(function(a){if(a===null)return null;if(F2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:Z(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=U2(a[0]);return{prefix:r,iconName:Z(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(V.cssPrefix,"-"))>-1||a.match(C4))){var s=W2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||j(),iconName:Z(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=j();return{prefix:n,iconName:Z(n,a)||a}}},"icon")},P={noAuto:K4,config:V,dom:J4,parse:Z4,library:y3,findIconDefinition:r1,toHtml:C2},c6=i(function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?g:e;(Object.keys(T.styles).length>0||V.autoFetchSvg)&&U&&V.autoReplaceSvg&&P.dom.i2svg({node:r})},"autoReplace");function O2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:i(function(){return c.abstract.map(function(r){return C2(r)})},"get")}),Object.defineProperty(c,"node",{get:i(function(){if(U){var r=g.createElement("div");return r.innerHTML=c.html,r.children}},"get")}),c}i(O2,"domVariants");function a6(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,f=c.transform;if(z1(f)&&e.found&&!r.found){var l=e.width,o=e.height,t={x:l/o/2,y:.5};s.style=E2(v(v({},n),{},{"transform-origin":"".concat(t.x+f.x/16,"em ").concat(t.y+f.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}i(a6,"asIcon");function e6(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,f=n===!0?"".concat(a,"-").concat(V.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},s),{},{id:f}),children:r}]}]}i(e6,"asSymbol");function p1(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,f=c.transform,l=c.symbol,o=c.title,t=c.maskId,m=c.titleId,H=c.extra,h=c.watchable,M=h===void 0?!1:h,C=r.found?r:e,x=C.width,d=C.height,k=s==="fak",b=[V.replacementClass,n?"".concat(V.cssPrefix,"-").concat(n):""].filter(function(O){return H.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(H.classes).join(" "),u={children:[],attributes:v(v({},H.attributes),{},{"data-prefix":s,"data-icon":n,class:b,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(d)})},y=k&&!~H.classes.indexOf("fa-fw")?{width:"".concat(x/d*16*.0625,"em")}:{};M&&(u.attributes[c2]=""),o&&(u.children.push({tag:"title",attributes:{id:u.attributes["aria-labelledby"]||"title-".concat(m||M2())},children:[o]}),delete u.attributes.title);var S=v(v({},u),{},{prefix:s,iconName:n,main:e,mask:r,maskId:t,transform:f,symbol:l,styles:v(v({},y),H.styles)}),$=r.found&&e.found?E("generateAbstractMask",S)||{children:[],attributes:{}}:E("generateAbstractIcon",S)||{children:[],attributes:{}},Q=$.children,G2=$.attributes;return S.children=Q,S.attributes=G2,l?e6(S):a6(S)}i(p1,"makeInlineSvgAbstract");function Q1(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,f=c.extra,l=c.watchable,o=l===void 0?!1:l,t=v(v(v({},f.attributes),n?{title:n}:{}),{},{class:f.classes.join(" ")});o&&(t[c2]="");var m=v({},f.styles);z1(s)&&(m.transform=T4({transform:s,startCentered:!0,width:e,height:r}),m["-webkit-transform"]=m.transform);var H=E2(m);H.length>0&&(t.style=H);var h=[];return h.push({tag:"span",attributes:t,children:[a]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}i(Q1,"makeLayersTextAbstract");function r6(c){var a=c.content,e=c.title,r=c.extra,s=v(v(v({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=E2(r.styles);n.length>0&&(s.style=n);var f=[];return f.push({tag:"span",attributes:s,children:[a]}),e&&f.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),f}i(r6,"makeLayersCounterAbstract");var $2=T.styles;function s1(c){var a=c[0],e=c[1],r=c.slice(4),s=l1(r,1),n=s[0],f=null;return Array.isArray(n)?f={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(J.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(J.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(J.PRIMARY),fill:"currentColor",d:n[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:f}}i(s1,"asFoundIcon");var s6={found:!1,width:512,height:512};function i6(c,a){!h3&&!V.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}i(i6,"maybeNotifyMissing");function i1(c,a){var e=a;return a==="fa"&&V.styleDefault!==null&&(a=j()),new Promise(function(r,s){var n={found:!1,width:512,height:512,icon:E("missingIconAbstract")||{}};if(e==="fa"){var f=k3(c)||{};c=f.iconName||c,a=f.prefix||a}if(c&&a&&$2[a]&&$2[a][c]){var l=$2[a][c];return r(s1(l))}i6(c,a),r(v(v({},s6),{},{icon:V.showMissingIcons&&c?E("missingIconAbstract")||{}:{}}))})}i(i1,"findIcon");var K1=i(function(){},"noop"),n1=V.measurePerformance&&x2&&x2.mark&&x2.measure?x2:{mark:K1,measure:K1},t2='FA "6.4.2"',n6=i(function(a){return n1.mark("".concat(t2," ").concat(a," begins")),function(){return A3(a)}},"begin"),A3=i(function(a){n1.mark("".concat(t2," ").concat(a," ends")),n1.measure("".concat(t2," ").concat(a),"".concat(t2," ").concat(a," begins"),"".concat(t2," ").concat(a," ends"))},"end"),u1={begin:n6,end:A3},T2=i(function(){},"noop");function J1(c){var a=c.getAttribute?c.getAttribute(c2):null;return typeof a=="string"}i(J1,"isWatched");function f6(c){var a=c.getAttribute?c.getAttribute(t1):null,e=c.getAttribute?c.getAttribute(m1):null;return a&&e}i(f6,"hasPrefixAndIcon");function l6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(V.replacementClass)}i(l6,"hasBeenReplaced");function o6(){if(V.autoReplaceSvg===!0)return B2.replace;var c=B2[V.autoReplaceSvg];return c||B2.replace}i(o6,"getMutator");function t6(c){return g.createElementNS("http://www.w3.org/2000/svg",c)}i(t6,"createElementNS");function m6(c){return g.createElement(c)}i(m6,"createElement");function P3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?t6:m6:e;if(typeof c=="string")return g.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(f){s.setAttribute(f,c.attributes[f])});var n=c.children||[];return n.forEach(function(f){s.appendChild(P3(f,{ceFn:r}))}),s}i(P3,"convertSVG");function H6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}i(H6,"nodeAsComment");var B2={replace:i(function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(P3(s),e)}),e.getAttribute(c2)===null&&V.keepOriginalSource){var r=g.createComment(H6(e));e.parentNode.replaceChild(r,e)}else e.remove()},"replace"),nest:i(function(a){var e=a[0],r=a[1];if(~v1(e).indexOf(V.replacementClass))return B2.replace(a);var s=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(l,o){return o===V.replacementClass||o.match(s)?l.toSvg.push(o):l.toNode.push(o),l},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var f=r.map(function(l){return C2(l)}).join(`
`);e.setAttribute(c2,""),e.innerHTML=f},"nest")};function Z1(c){c()}i(Z1,"performOperationSync");function T3(c,a){var e=typeof a=="function"?a:T2;if(c.length===0)e();else{var r=Z1;V.mutateApproach===M4&&(r=_.requestAnimationFrame||Z1),r(function(){var s=o6(),n=u1.begin("mutate");c.map(s),n(),e()})}}i(T3,"perform");var C1=!1;function B3(){C1=!0}i(B3,"disableObservation");function f1(){C1=!1}i(f1,"enableObservation");var R2=null;function c3(c){if(I1&&V.observeMutations){var a=c.treeCallback,e=a===void 0?T2:a,r=c.nodeCallback,s=r===void 0?T2:r,n=c.pseudoElementsCallback,f=n===void 0?T2:n,l=c.observeMutationsRoot,o=l===void 0?g:l;R2=new I1(function(t){if(!C1){var m=j();f2(t).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!J1(H.addedNodes[0])&&(V.searchPseudoElements&&f(H.target),e(H.target)),H.type==="attributes"&&H.target.parentNode&&V.searchPseudoElements&&f(H.target.parentNode),H.type==="attributes"&&J1(H.target)&&~x4.indexOf(H.attributeName))if(H.attributeName==="class"&&f6(H.target)){var h=W2(v1(H.target)),M=h.prefix,C=h.iconName;H.target.setAttribute(t1,M||m),C&&H.target.setAttribute(m1,C)}else l6(H.target)&&s(H.target)})}}),U&&R2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}i(c3,"observe");function v6(){R2&&R2.disconnect()}i(v6,"disconnect");function z6(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),f=n[0],l=n.slice(1);return f&&l.length>0&&(r[f]=l.join(":").trim()),r},{})),e}i(z6,"styleParser");function V6(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=W2(v1(c));return s.prefix||(s.prefix=j()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=j4(s.prefix,c.innerText)||h1(s.prefix,c1(c.innerText))),!s.iconName&&V.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}i(V6,"classParser");function h6(c){var a=f2(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return V.autoA11y&&(e?a["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(r||M2()):(a["aria-hidden"]="true",a.focusable="false")),a}i(h6,"attributesParser");function M6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}i(M6,"blankMeta");function a3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=V6(c),r=e.iconName,s=e.prefix,n=e.rest,f=h6(c),l=e1("parseNodeAttributes",{},c),o=a.styleParser?z6(c):[];return v({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:f}},l)}i(a3,"parseMeta");var p6=T.styles;function F3(c){var a=V.autoReplaceSvg==="nest"?a3(c,{styleParser:!1}):a3(c);return~a.extra.classes.indexOf(M3)?E("generateLayersText",c,a):E("generateSvgReplacementMutation",c,a)}i(F3,"generateMutation");var X=new Set;H1.map(function(c){X.add("fa-".concat(c))});Object.keys(v2[L]).map(X.add.bind(X));Object.keys(v2[N]).map(X.add.bind(X));X=p2(X);function e3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();var e=g.documentElement.classList,r=i(function(H){return e.add("".concat(q1,"-").concat(H))},"hclAdd"),s=i(function(H){return e.remove("".concat(q1,"-").concat(H))},"hclRemove"),n=V.autoFetchSvg?X:H1.map(function(m){return"fa-".concat(m)}).concat(Object.keys(p6));n.includes("fa")||n.push("fa");var f=[".".concat(M3,":not([").concat(c2,"])")].concat(n.map(function(m){return".".concat(m,":not([").concat(c2,"])")})).join(", ");if(f.length===0)return Promise.resolve();var l=[];try{l=f2(c.querySelectorAll(f))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();var o=u1.begin("onTree"),t=l.reduce(function(m,H){try{var h=F3(H);h&&m.push(h)}catch(M){h3||M.name==="MissingIcon"&&console.error(M)}return m},[]);return new Promise(function(m,H){Promise.all(t).then(function(h){T3(h,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),o(),m()})}).catch(function(h){o(),H(h)})})}i(e3,"onTree");function u6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;F3(c).then(function(e){e&&T3([e],a)})}i(u6,"onNode");function C6(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:r1(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:r1(s||{})),c(r,v(v({},e),{},{mask:s}))}}i(C6,"resolveIcons");var d6=i(function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?F:r,n=e.symbol,f=n===void 0?!1:n,l=e.mask,o=l===void 0?null:l,t=e.maskId,m=t===void 0?null:t,H=e.title,h=H===void 0?null:H,M=e.titleId,C=M===void 0?null:M,x=e.classes,d=x===void 0?[]:x,k=e.attributes,b=k===void 0?{}:k,u=e.styles,y=u===void 0?{}:u;if(a){var S=a.prefix,$=a.iconName,Q=a.icon;return O2(v({type:"icon"},a),function(){return a2("beforeDOMElementCreation",{iconDefinition:a,params:e}),V.autoA11y&&(h?b["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(C||M2()):(b["aria-hidden"]="true",b.focusable="false")),p1({icons:{main:s1(Q),mask:o?s1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:$,transform:v(v({},F),s),symbol:f,title:h,maskId:m,titleId:C,extra:{attributes:b,styles:y,classes:d}})})}},"render"),L6={mixout:i(function(){return{icon:C6(d6)}},"mixout"),hooks:i(function(){return{mutationObserverCallbacks:i(function(e){return e.treeCallback=e3,e.nodeCallback=u6,e},"mutationObserverCallbacks")}},"hooks"),provides:i(function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?g:r,n=e.callback,f=n===void 0?function(){}:n;return e3(s,f)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,f=r.titleId,l=r.prefix,o=r.transform,t=r.symbol,m=r.mask,H=r.maskId,h=r.extra;return new Promise(function(M,C){Promise.all([i1(s,l),m.iconName?i1(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var d=l1(x,2),k=d[0],b=d[1];M([e,p1({icons:{main:k,mask:b},prefix:l,iconName:s,transform:o,symbol:t,maskId:H,title:n,titleId:f,extra:h,watchable:!0})])}).catch(C)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,f=e.transform,l=e.styles,o=E2(l);o.length>0&&(s.style=o);var t;return z1(f)&&(t=E("generateAbstractTransformGrouping",{main:n,transform:f,containerWidth:n.width,iconWidth:n.width})),r.push(t||n.icon),{children:r,attributes:s}}},"provides")},g6={mixout:i(function(){return{layer:i(function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return O2({type:"layer"},function(){a2("beforeDOMElementCreation",{assembler:e,params:r});var f=[];return e(function(l){Array.isArray(l)?l.map(function(o){f=f.concat(o.abstract)}):f=f.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(p2(n)).join(" ")},children:f}]})},"layer")}},"mixout")},x6={mixout:i(function(){return{counter:i(function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,f=r.classes,l=f===void 0?[]:f,o=r.attributes,t=o===void 0?{}:o,m=r.styles,H=m===void 0?{}:m;return O2({type:"counter",content:e},function(){return a2("beforeDOMElementCreation",{content:e,params:r}),r6({content:e.toString(),title:n,extra:{attributes:t,styles:H,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(p2(l))}})})},"counter")}},"mixout")},b6={mixout:i(function(){return{text:i(function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?F:s,f=r.title,l=f===void 0?null:f,o=r.classes,t=o===void 0?[]:o,m=r.attributes,H=m===void 0?{}:m,h=r.styles,M=h===void 0?{}:h;return O2({type:"text",content:e},function(){return a2("beforeDOMElementCreation",{content:e,params:r}),Q1({content:e,transform:v(v({},F),n),title:l,extra:{attributes:H,styles:M,classes:["".concat(V.cssPrefix,"-layers-text")].concat(p2(t))}})})},"text")}},"mixout"),provides:i(function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,f=r.extra,l=null,o=null;if(v3){var t=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();l=m.width/t,o=m.height/t}return V.autoA11y&&!s&&(f.attributes["aria-hidden"]="true"),Promise.resolve([e,Q1({content:e.innerHTML,width:l,height:o,transform:n,title:s,extra:f,watchable:!0})])}},"provides")},N6=new RegExp('"',"ug"),r3=[1105920,1112319];function w6(c){var a=c.replace(N6,""),e=W4(a,0),r=e>=r3[0]&&e<=r3[1],s=a.length===2?a[0]===a[1]:!1;return{value:c1(s?a[0]:a),isSecondary:r||s}}i(w6,"hexValueFromContent");function s3(c,a){var e="".concat(h4).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=f2(c.children),f=n.filter(function(Q){return Q.getAttribute(Z2)===a})[0],l=_.getComputedStyle(c,a),o=l.getPropertyValue("font-family").match(d4),t=l.getPropertyValue("font-weight"),m=l.getPropertyValue("content");if(f&&!o)return c.removeChild(f),r();if(o&&m!=="none"&&m!==""){var H=l.getPropertyValue("content"),h=~["Sharp"].indexOf(o[2])?N:L,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?z2[h][o[2].toLowerCase()]:L4[h][t],C=w6(H),x=C.value,d=C.isSecondary,k=o[0].startsWith("FontAwesome"),b=h1(M,x),u=b;if(k){var y=X4(x);y.iconName&&y.prefix&&(b=y.iconName,M=y.prefix)}if(b&&!d&&(!f||f.getAttribute(t1)!==M||f.getAttribute(m1)!==u)){c.setAttribute(e,u),f&&c.removeChild(f);var S=M6(),$=S.extra;$.attributes[Z2]=a,i1(b,M).then(function(Q){var G2=p1(v(v({},S),{},{icons:{main:Q,mask:M1()},prefix:M,iconName:u,extra:$,watchable:!0})),O=g.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(O,c.firstChild):c.appendChild(O),O.outerHTML=G2.map(function(i4){return C2(i4)}).join(`
`),c.removeAttribute(e),r()}).catch(s)}else r()}else r()})}i(s3,"replaceForPosition");function S6(c){return Promise.all([s3(c,"::before"),s3(c,"::after")])}i(S6,"replace");function k6(c){return c.parentNode!==document.head&&!~p4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(Z2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}i(k6,"processable");function i3(c){if(U)return new Promise(function(a,e){var r=f2(c.querySelectorAll("*")).filter(k6).map(S6),s=u1.begin("searchPseudoElements");B3(),Promise.all(r).then(function(){s(),f1(),a()}).catch(function(){s(),f1(),e()})})}i(i3,"searchPseudoElements");var y6={hooks:i(function(){return{mutationObserverCallbacks:i(function(e){return e.pseudoElementsCallback=i3,e},"mutationObserverCallbacks")}},"hooks"),provides:i(function(a){a.pseudoElements2svg=function(e){var r=e.node,s=r===void 0?g:r;V.searchPseudoElements&&i3(s)}},"provides")},n3=!1,A6={mixout:i(function(){return{dom:{unwatch:i(function(){B3(),n3=!0},"unwatch")}}},"mixout"),hooks:i(function(){return{bootstrap:i(function(){c3(e1("mutationObserverCallbacks",{}))},"bootstrap"),noAuto:i(function(){v6()},"noAuto"),watch:i(function(e){var r=e.observeMutationsRoot;n3?f1():c3(e1("mutationObserverCallbacks",{observeMutationsRoot:r}))},"watch")}},"hooks")},f3=i(function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,s){var n=s.toLowerCase().split("-"),f=n[0],l=n.slice(1).join("-");if(f&&l==="h")return r.flipX=!0,r;if(f&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(f){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},e)},"parseTransformString"),P6={mixout:i(function(){return{parse:{transform:i(function(e){return f3(e)},"transform")}}},"mixout"),hooks:i(function(){return{parseNodeAttributes:i(function(e,r){var s=r.getAttribute("data-fa-transform");return s&&(e.transform=f3(s)),e},"parseNodeAttributes")}},"hooks"),provides:i(function(a){a.generateAbstractTransformGrouping=function(e){var r=e.main,s=e.transform,n=e.containerWidth,f=e.iconWidth,l={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(s.x*32,", ").concat(s.y*32,") "),t="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),m="rotate(".concat(s.rotate," 0 0)"),H={transform:"".concat(o," ").concat(t," ").concat(m)},h={transform:"translate(".concat(f/2*-1," -256)")},M={outer:l,inner:H,path:h};return{tag:"g",attributes:v({},M.outer),children:[{tag:"g",attributes:v({},M.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:v(v({},r.icon.attributes),M.path)}]}]}}},"provides")},Q2={x:0,y:0,width:"100%",height:"100%"};function l3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}i(l3,"fillBlack");function T6(c){return c.tag==="g"?c.children:[c]}i(T6,"deGroup");var B6={hooks:i(function(){return{parseNodeAttributes:i(function(e,r){var s=r.getAttribute("data-fa-mask"),n=s?W2(s.split(" ").map(function(f){return f.trim()})):M1();return n.prefix||(n.prefix=j()),e.mask=n,e.maskId=r.getAttribute("data-fa-mask-id"),e},"parseNodeAttributes")}},"hooks"),provides:i(function(a){a.generateAbstractMask=function(e){var r=e.children,s=e.attributes,n=e.main,f=e.mask,l=e.maskId,o=e.transform,t=n.width,m=n.icon,H=f.width,h=f.icon,M=P4({transform:o,containerWidth:H,iconWidth:t}),C={tag:"rect",attributes:v(v({},Q2),{},{fill:"white"})},x=m.children?{children:m.children.map(l3)}:{},d={tag:"g",attributes:v({},M.inner),children:[l3(v({tag:m.tag,attributes:v(v({},m.attributes),M.path)},x))]},k={tag:"g",attributes:v({},M.outer),children:[d]},b="mask-".concat(l||M2()),u="clip-".concat(l||M2()),y={tag:"mask",attributes:v(v({},Q2),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,k]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:u},children:T6(h)},y]};return r.push(S,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(u,")"),mask:"url(#".concat(b,")")},Q2)}),{children:r,attributes:s}}},"provides")},F6={provides:i(function(a){var e=!1;_.matchMedia&&(e=_.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:v(v({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=v(v({},n),{},{attributeName:"opacity"}),l={tag:"circle",attributes:v(v({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||l.children.push({tag:"animate",attributes:v(v({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},f),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:v(v({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:v(v({},f),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:v(v({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}},"provides")},D6={hooks:i(function(){return{parseNodeAttributes:i(function(e,r){var s=r.getAttribute("data-fa-symbol"),n=s===null?!1:s===""?!0:s;return e.symbol=n,e},"parseNodeAttributes")}},"hooks")},R6=[F4,L6,g6,x6,b6,y6,A6,P6,B6,F6,D6];Q4(R6,{mixoutsTo:P});var m0=P.noAuto,H0=P.config,v0=P.library,z0=P.dom,I2=P.parse,V0=P.findIconDefinition,h0=P.toHtml,D3=P.icon,M0=P.layer,p0=P.text,u0=P.counter;var p=n4(G3());function _3(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}i(_3,"ownKeys");function Y(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?_3(Object(e),!0).forEach(function(r){l2(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):_3(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}i(Y,"_objectSpread2");function q2(c){"@babel/helpers - typeof";return q2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},q2(c)}i(q2,"_typeof");function l2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}i(l2,"_defineProperty");function W6(c,a){if(c==null)return{};var e={},r=Object.keys(c),s,n;for(n=0;n<r.length;n++)s=r[n],!(a.indexOf(s)>=0)&&(e[s]=c[s]);return e}i(W6,"_objectWithoutPropertiesLoose");function O6(c,a){if(c==null)return{};var e=W6(c,a),r,s;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(c);for(s=0;s<n.length;s++)r=n[s],!(a.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(c,r)&&(e[r]=c[r])}return e}i(O6,"_objectWithoutProperties");function L1(c){return I6(c)||q6(c)||G6(c)||_6()}i(L1,"_toConsumableArray");function I6(c){if(Array.isArray(c))return g1(c)}i(I6,"_arrayWithoutHoles");function q6(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}i(q6,"_iterableToArray");function G6(c,a){if(c){if(typeof c=="string")return g1(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g1(c,a)}}i(G6,"_unsupportedIterableToArray");function g1(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}i(g1,"_arrayLikeToArray");function _6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i(_6,"_nonIterableSpread");function j6(c){var a,e=c.beat,r=c.fade,s=c.beatFade,n=c.bounce,f=c.shake,l=c.flash,o=c.spin,t=c.spinPulse,m=c.spinReverse,H=c.pulse,h=c.fixedWidth,M=c.inverse,C=c.border,x=c.listItem,d=c.flip,k=c.size,b=c.rotation,u=c.pull,y=(a={"fa-beat":e,"fa-fade":r,"fa-beat-fade":s,"fa-bounce":n,"fa-shake":f,"fa-flash":l,"fa-spin":o,"fa-spin-reverse":m,"fa-spin-pulse":t,"fa-pulse":H,"fa-fw":h,"fa-inverse":M,"fa-border":C,"fa-li":x,"fa-flip":d===!0,"fa-flip-horizontal":d==="horizontal"||d==="both","fa-flip-vertical":d==="vertical"||d==="both"},l2(a,"fa-".concat(k),typeof k<"u"&&k!==null),l2(a,"fa-rotate-".concat(b),typeof b<"u"&&b!==null&&b!==0),l2(a,"fa-pull-".concat(u),typeof u<"u"&&u!==null),l2(a,"fa-swap-opacity",c.swapOpacity),a);return Object.keys(y).map(function(S){return y[S]?S:null}).filter(function(S){return S})}i(j6,"classList");function X6(c){return c=c-0,c===c}i(X6,"_isNumerical");function X3(c){return X6(c)?c:(c=c.replace(/[\-_\s]+(.)?/g,function(a,e){return e?e.toUpperCase():""}),c.substr(0,1).toLowerCase()+c.substr(1))}i(X3,"camelize");var Y6=["style"];function $6(c){return c.charAt(0).toUpperCase()+c.slice(1)}i($6,"capitalize");function Q6(c){return c.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var r=e.indexOf(":"),s=X3(e.slice(0,r)),n=e.slice(r+1).trim();return s.startsWith("webkit")?a[$6(s)]=n:a[s]=n,a},{})}i(Q6,"styleToObject");function Y3(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof a=="string")return a;var r=(a.children||[]).map(function(o){return Y3(c,o)}),s=Object.keys(a.attributes||{}).reduce(function(o,t){var m=a.attributes[t];switch(t){case"class":o.attrs.className=m,delete a.attributes.class;break;case"style":o.attrs.style=Q6(m);break;default:t.indexOf("aria-")===0||t.indexOf("data-")===0?o.attrs[t.toLowerCase()]=m:o.attrs[X3(t)]=m}return o},{attrs:{}}),n=e.style,f=n===void 0?{}:n,l=O6(e,Y6);return s.attrs.style=Y(Y({},s.attrs.style),f),c.apply(void 0,[a.tag,Y(Y({},s.attrs),l)].concat(L1(r)))}i(Y3,"convert");var $3=!1;try{$3=!0}catch{}function K6(){if(!$3&&console&&typeof console.error=="function"){var c;(c=console).error.apply(c,arguments)}}i(K6,"log");function j3(c){if(c&&q2(c)==="object"&&c.prefix&&c.iconName&&c.icon)return c;if(I2.icon)return I2.icon(c);if(c===null)return null;if(c&&q2(c)==="object"&&c.prefix&&c.iconName)return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:"fas",iconName:c}}i(j3,"normalizeIconArgs");function d1(c,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?l2({},c,a):{}}i(d1,"objectWithKey");var A=j2.forwardRef(function(c,a){var e=c.icon,r=c.mask,s=c.symbol,n=c.className,f=c.title,l=c.titleId,o=c.maskId,t=j3(e),m=d1("classes",[].concat(L1(j6(c)),L1(n.split(" ")))),H=d1("transform",typeof c.transform=="string"?I2.transform(c.transform):c.transform),h=d1("mask",j3(r)),M=D3(t,Y(Y(Y(Y({},m),H),h),{},{symbol:s,title:f,titleId:l,maskId:o}));if(!M)return K6("Could not find icon",t),null;var C=M.abstract,x={ref:a};return Object.keys(c).forEach(function(d){A.defaultProps.hasOwnProperty(d)||(x[d]=c[d])}),J6(C[0],x)});A.displayName="FontAwesomeIcon";A.propTypes={beat:p.default.bool,border:p.default.bool,beatFade:p.default.bool,bounce:p.default.bool,className:p.default.string,fade:p.default.bool,flash:p.default.bool,mask:p.default.oneOfType([p.default.object,p.default.array,p.default.string]),maskId:p.default.string,fixedWidth:p.default.bool,inverse:p.default.bool,flip:p.default.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.default.oneOfType([p.default.object,p.default.array,p.default.string]),listItem:p.default.bool,pull:p.default.oneOf(["right","left"]),pulse:p.default.bool,rotation:p.default.oneOf([0,90,180,270]),shake:p.default.bool,size:p.default.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.default.bool,spinPulse:p.default.bool,spinReverse:p.default.bool,symbol:p.default.oneOfType([p.default.bool,p.default.string]),title:p.default.string,titleId:p.default.string,transform:p.default.oneOfType([p.default.string,p.default.object]),swapOpacity:p.default.bool};A.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var J6=Y3.bind(null,j2.createElement);function Q3({width:c,minWidth:a,maxWidth:e,height:r,minHeight:s,maxHeight:n,resizable:f=!0,children:l}){let[o,t]=B({w:c??0,h:r??0}),m={w:a??0,h:s??0},H={w:e??Number.MAX_SAFE_INTEGER,h:n??Number.MAX_SAFE_INTEGER},h=e2();function M(C){t({w:C.clientX-h.current.getBoundingClientRect().x,h:C.clientY-h.current.getBoundingClientRect().y})}return i(M,"mouseMove"),I(()=>{h.current},[h]),z("div",{ref:h,style:{position:"relative",width:Math.min(Math.max(m.w,o.w),H.w)||"inherit",height:Math.min(Math.max(m.h,o.h),H.h)||"inherit"}},l,!f||z("div",{style:{position:"absolute",right:"-3px",bottom:"-3px",display:"flex",cursor:"nwse-resize"},onMouseDown:C=>{if(!f||!h.current)return;let x=i(d=>M(d),"listener");addEventListener("mousemove",x),addEventListener("mouseup",()=>{removeEventListener("mousemove",x)},{once:!0})}},z(A,{style:{transform:"rotate(-45deg)",aspectRatio:"1/1"},icon:T1})))}i(Q3,"Resizable");var Z6=1,c0=g2(null);function K3(c){let a=Z6++;return{...c,id:a}}i(K3,"createWindow");function J3(c){let{title:a,children:e,resizable:r,minimized:s=!1,x:n,y:f,width:l,minWidth:o,maxWidth:t,height:m,minHeight:H,maxHeight:h,Icon:M}=c,[{windows:C},x]=q(W),[d,k]=B(!1),b=C.at(-1).id==c.id&&!s,u=w1();return I(()=>{u.current&&(u.current.style.left=(n??document.body.clientWidth/2-u.current.clientWidth/2)+"px",u.current.style.top=(f??document.body.clientHeight/2-u.current.clientHeight/2)+"px")},[]),z(P1,{_ref:u,x:n,y:f,active:d},z("div",{style:{display:s?"none":void 0},className:`plasma-window ${b?"plasma-box-glow":""} plasma-box`,onMouseDown:()=>x({action:"FOCUS",window:c})},z("div",{onMouseDown:y=>{k(!0),addEventListener("mouseup",()=>{k(!1)},{once:!0})},className:"plasma-window-titlebar plasma-box-bottom"},z("span",{className:"plasma-window-title"},typeof M=="function"?z(M,null):z(A,{icon:M}),a),z("span",null,z("div",{className:"plasma-button plasma-fill plasma-square",onClick:()=>x({action:"MINIMIZE",window:c})},z(A,{style:{fontSize:"0.9em"},icon:D1})),z("div",{className:"plasma-button plasma-fill plasma-square",onClick:()=>x({action:"CLOSE",window:c})},z(A,{icon:F1})))),z(Q3,{minHeight:H,minWidth:o,maxHeight:h,maxWidth:t,height:m,width:l,resizable:r},z(c0.Provider,{value:c},z("div",{className:"plasma-window-content"},e)))))}i(J3,"PlasmaWindow");var o2=class{static{i(this,"Program")}constructor({name:a,icon:e,WindowContents:r,options:s}){this.options={title:a,Icon:e??K,children:z(r,null),...s??{}}}launch(a){let[e,r]=a??x1;console.log(r),r({action:"CREATE",window:K3(this.options)})}};var d2=new o2({name:"Bingo",icon:K,WindowContents:a0,options:{resizable:!0,width:500,height:500,minWidth:300,minHeight:300,maxHeight:700,maxWidth:700}});function a0(){return z(A1,null)}i(a0,"WindowContents");var b1=new o2({name:"Monaco Editor",WindowContents:e0,options:{minHeight:200,height:300,minWidth:200,width:700,resizable:!0}});function e0(){return z(y1,null)}i(e0,"WindowContents");function Z3({}){let c=q(W);return z("div",{className:"homemenu plasma-box-inline"},z("span",{onClick:()=>{d2.launch(c)},className:"plasma-button plasma-box-top"},z(A,{icon:K}),z("span",{className:"plasma-center"},d2.options.title)),z("span",{onClick:()=>{b1.launch(c)},className:"plasma-button plasma-box-top"},z(A,{icon:K}),z("span",{className:"plasma-center"},b1.options.title)),z("span",{className:"plasma-button plasma-box-top"},z(A,{icon:B1}),z("span",{className:"plasma-center"},"Shutdown")))}i(Z3,"HomeMenu");function c4({}){let[c,a]=B(!1),e=e2();return z(L2,null,z("div",{className:"taskbar-homebutton plasma-button plasma-box-inline",onClick:()=>{if(a(!c),!c){let r=new AbortController;setTimeout(()=>document.querySelector(".desktop-enviroment")?.addEventListener("click",s=>{console.log(s.composedPath(),e.current),a(!1),r.abort()},{signal:r.signal}))}}},z("img",{className:"taskbar-homebutton",src:S1,alt:""})),!c||z(Z3,{ref:e}))}i(c4,"HomeButton");function a4(c){let{title:a,minimized:e}=c,[{windows:r},s]=q(W),n=r.at(-1).id==c.id&&!e;return z("div",{className:`taskbar-entry plasma-button plasma-box-right ${!n||"taskbar-entry-focus"}`,onClick:()=>{s(e||!n?{action:"FOCUS",window:c}:{action:"MINIMIZE",window:c})}},a)}i(a4,"TaskbarEntry");function e4({}){let[c,a]=B(Date.now()),[{windows:e}]=q(W);return I(()=>{let r=setInterval(()=>{a(Date.now())},1e3);return()=>{clearInterval(r)}},[]),z("div",{className:"taskbar"},z(c4,null),z("div",{className:"taskbar-windows"},[...e].sort((r,s)=>r.id-s.id).map(r=>z(a4,{key:r.id,...r}))),z("span",{className:"taskbar-date plasma-box-inline"},z("div",null,new Date(c).toLocaleTimeString().slice(0,-3)),z("div",null,new Date(c).toLocaleDateString())))}i(e4,"Taskbar");function N1(c,a){return c.windows.find(e=>e.id==a.id)}i(N1,"getWindow");var r0={CREATE:function(c,{window:a}){if(!N1(c,a))return c.windows.unshift(a),{...c}},CLOSE:function(c,{window:a}){return{windows:c.windows.filter(e=>e.id!=a.id)}},MINIMIZE:function(c,{window:a}){return N1(c,a).minimized=!0,c.windows.unshift(c.windows.pop()),{...c}},MAXIMISE:function(c,{window:a}){return N1(c,a).minimized=!0,{...c}},FOCUS:function(c,{window:a}){return a.minimized=!1,{windows:[...c.windows.filter(e=>e.id!=a.id),a]}}};function r4(c,a){return r0[a.action](c,a)}i(r4,"WindowManagerReducer");var W=g2(null),x1=[{windows:[]},()=>{throw new Error("WindowManager is not available. Desktop Enviroment may not be running")}];function s4({}){let c=k1(r4,{windows:[]});return x1=c,I(()=>{d2.launch(c)},[]),z("div",{className:"desktop-enviroment"},z(W.Provider,{value:c},z("div",{className:"desktop"},c[0].windows.map(a=>z(J3,{key:a.id,...a}))),z(e4,null)))}i(s4,"DesktopEnviroment");var H5=i(()=>z(L2,null,z("link",{rel:"stylesheet",href:"/modules/Desktop.css"}),z(s4,null)),"default");export{H5 as default};
