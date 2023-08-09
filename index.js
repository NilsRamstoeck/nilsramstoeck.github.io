import{a as x,f as b,h as y,i as h}from"./chunk-DTY64X2U.js";import{a as l,e as t,g as v,j as g}from"./chunk-P25D4DJI.js";var j={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function N(r){if(typeof r=="number")return{value:r,unit:"px"};var e,a=(r.match(/^[0-9.]*/)||"").toString();a.includes(".")?e=parseFloat(a):e=parseInt(a,10);var o=(r.match(/[^0-9]*$/)||"").toString();return j[o]?{value:e,unit:o}:(console.warn("React Spinners: ".concat(r," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}l(N,"parseLengthAndUnit");function p(r){var e=N(r);return"".concat(e.value).concat(e.unit)}l(p,"cssValue");var w=l(function(r,e,a){var o="react-spinners-".concat(r,"-").concat(a);if(typeof window>"u"||!window.document)return o;var n=document.createElement("style");document.head.appendChild(n);var i=n.sheet,d=`
    @keyframes `.concat(o,` {
      `).concat(e,`
    }
  `);return i&&i.insertRule(d,0),o},"createAnimation");var s=function(){return s=Object.assign||function(r){for(var e,a=1,o=arguments.length;a<o;a++){e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},s.apply(this,arguments)},R=function(r,e){var a={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&e.indexOf(o)<0&&(a[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(r);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(r,o[n])&&(a[o[n]]=r[o[n]]);return a},_=w("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");function M(r){var e=r.loading,a=e===void 0?!0:e,o=r.color,n=o===void 0?"#000000":o,i=r.speedMultiplier,d=i===void 0?1:i,m=r.cssOverride,E=m===void 0?{}:m,f=r.size,u=f===void 0?35:f,B=R(r,["loading","color","speedMultiplier","cssOverride","size"]),A=s({background:"transparent !important",width:p(u),height:p(u),borderRadius:"100%",border:"2px solid",borderTopColor:n,borderBottomColor:"transparent",borderLeftColor:n,borderRightColor:n,display:"inline-block",animation:"".concat(_," ").concat(.75/d,"s 0s infinite linear"),animationFillMode:"both"},E);return a?t("span",s({style:A},B)):null}l(M,"ClipLoader");var c=M;function L(){return t("div",{className:"plasma-fill",style:{background:"var(--backgroundprimary)"}},t("div",{className:"plasma-composit plasma-fill"},t("div",{className:"plasma-fill plasma-center flex-column",style:{top:"10px"}},t("img",{style:{width:"10vw",height:"10vw"},src:x}),t("span",{style:{color:"var(--primary)"}},"Coming Soon...")),t("div",{className:"plasma-fill plasma-center"},t(c,{color:"var(--primary) ",size:"10vw"}))))}l(L,"BootScreen");function k({module:r,fallback:e}){let a=b(()=>h(()=>import(r)),[r]);return t(y,{fallback:e??t("div",null,"loading...")},t(a,null))}l(k,"LazyLoaded");var C=`:root {
  --primarylight: #D60000;
  --primary: #A10000;
  --primarydark: #6C0202;
  --successlight: #0f0;
  --success: #00CC00;
  --successdark: #090;
  --errorlight: #f00;
  --error: #E10303;
  --errordark: #900;
  --secondarylight: #AAA;
  --secondary: #878787;
  --secondarydark: #666;
  --warninglight: #ff0;
  --warning: #cc0;
  --warningdark: #990;
  --infolight: #69f;
  --info: #36c;
  --infodark: #039;
  --welllight: #444444;
  --well: #222222;
  --white: #fff;
  --black: #202020;
  --hp: #dd3434;
  --money: #ffd700;
  --hack: #adff2f;
  --combat: #faffdf;
  --cha: #a671d1;
  --int: #6495ed;
  --rep: #faffdf;
  --disabled: #66cfbc;
  --backgroundprimary: #121212;
  --backgroundsecondary: #121212;
  --button: #373737;
}`;var S=`body{
  margin: 0;
  height: 100vh;
}

#root {
  height: 100%;
}

.plasma-box-glow {
  box-shadow: 0px 0px 10px 2px var(--primary)
}

.plasma-fill {
  width: 100%;
  height: 100%;
}

.plasma-composit {
  position: relative;
}

.plasma-composit>* {
  position: absolute;
}

.plasma-square {
  aspect-ratio: 1/1;
}

.plasma-box {
  border: 1px solid var(--welllight);
}

.plasma-box-inline {
  border-inline: 1px solid var(--welllight);
}

.plasma-box-block {
  border-block: 1px solid var(--welllight);
}

.plasma-box-top {
  border-top: 1px solid var(--welllight);
}

.plasma-box-bottom {
  border-bottom: 1px solid var(--welllight);
}

.plasma-box-right {
  border-right: 1px solid var(--welllight);
}

.plasma-button {
  cursor: pointer;
}

.plasma-button:hover {
  background-color: var(--well);
}

.plasma-button:active {
  background-color: var(--welllight);
}

.plasma-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-column {
  flex-direction: column;
}`;var P=document.getElementById("root"),D=["modules"],O={DESKTOP:{at:1200,module:"Desktop.js"},TABLET:{at:990,module:"Tablet.js"},PHONE:{at:575,module:"Phone.js"}};if(!P)throw new Error("<preact> No root element");(async()=>{let r=V();g(t(I,{module:r}),P)})();function I({module:r}){return t(v,null,t("style",null,C,S),t(k,{fallback:t(L,null),module:r}))}l(I,"App");function V(){for(let r in O){let e=O[r];if(window.visualViewport.width>e.at)return["",...D,e.module].join("/")}throw new Error("Could not resolve breakpoint to module")}l(V,"getModuleFromBreakpoint");
