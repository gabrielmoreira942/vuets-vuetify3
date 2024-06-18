import{aE as j,p,aA as T,f as c,Y as N,a1 as Be,aF as be,aG as rt,aH as ut,aI as ct,c as f,F as dt,P as te,m as D,a as H,b as G,g as L,d as M,h as Ee,t as P,u as R,a4 as Y,am as vt,a8 as Pe,a5 as ft,k as ie,w as oe,H as mt,n as Le,o as gt,al as Te,ao as ht,aJ as yt,y as $e,aK as bt,i as C,ag as ne,r as le,aL as pt,aM as Ct,aN as St,s as _t,au as Ve,aO as xt,z as kt,e as Ne,T as U,aP as wt,aQ as pe,$ as It,E as Re,a0 as Bt,aR as Et,aS as Ce,ac as Pt,ae as Lt,aT as ze,ak as re,at as Tt}from"./index-Bzyx5dWX.js";const Oe=["top","bottom"],$t=["start","end","left","right"];function Vt(e,n){let[a,t]=e.split(" ");return t||(t=j(Oe,a)?"start":j($t,a)?"top":"center"),{side:Se(a,n),align:Se(t,n)}}function Se(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function Sn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function _n(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function xn(e){return{side:e.align,align:e.side}}function kn(e){return j(Oe,e.side)?"y":"x"}const Ae=p({border:[Boolean,Number,String]},"border");function De(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{borderClasses:c(()=>{const t=N(e)?e.value:e.border,i=[];if(t===!0||t==="")i.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))i.push(`border-${s}`);return i})}}const Nt=[null,"default","comfortable","compact"],He=p({density:{type:String,default:"default",validator:e=>Nt.includes(e)}},"density");function Ge(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{densityClasses:c(()=>`${n}--density-${e.density}`)}}const Me=p({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function Fe(e){return{elevationClasses:c(()=>{const a=N(e)?e.value:e.elevation,t=[];return a==null||t.push(`elevation-${a}`),t})}}const ue=p({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ce(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{roundedClasses:c(()=>{const t=N(e)?e.value:e.rounded,i=N(e)?e.value:e.tile,s=[];if(t===!0||t==="")s.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const o of String(t).split(" "))s.push(`rounded-${o}`);else i&&s.push("rounded-0");return s})}}function de(e){return Be(()=>{const n=[],a={};if(e.value.background)if(be(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&rt(e.value.background)){const t=ut(e.value.background);if(t.a==null||t.a===1){const i=ct(t);a.color=i,a.caretColor=i}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(be(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:a}})}function q(e,n){const a=c(()=>({text:N(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:i}=de(a);return{textColorClasses:t,textColorStyles:i}}function _e(e,n){const a=c(()=>({background:N(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:i}=de(a);return{backgroundColorClasses:t,backgroundColorStyles:i}}const Rt=["elevated","flat","tonal","outlined","text","plain"];function zt(e,n){return f(dt,null,[e&&f("span",{key:"overlay",class:`${n}__overlay`},null),f("span",{key:"underlay",class:`${n}__underlay`},null)])}const We=p({color:String,variant:{type:String,default:"elevated",validator:e=>Rt.includes(e)}},"variant");function Ot(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();const a=c(()=>{const{variant:s}=te(e);return`${n}--variant-${s}`}),{colorClasses:t,colorStyles:i}=de(c(()=>{const{variant:s,color:o}=te(e);return{[["elevated","flat"].includes(s)?"background":"text"]:o}}));return{colorClasses:t,colorStyles:i,variantClasses:a}}const je=p({divided:Boolean,...Ae(),...D(),...He(),...Me(),...ue(),...H(),...G(),...We()},"VBtnGroup"),xe=L()({name:"VBtnGroup",props:je(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=M(e),{densityClasses:i}=Ge(e),{borderClasses:s}=De(e),{elevationClasses:o}=Fe(e),{roundedClasses:l}=ce(e);Ee({VBtn:{height:"auto",color:P(e,"color"),density:P(e,"density"),flat:!0,variant:P(e,"variant")}}),R(()=>f(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,s.value,i.value,o.value,l.value,e.class],style:e.style},a))}}),At=p({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Dt=p({value:null,disabled:Boolean,selectedClass:String},"group-item");function Ht(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=Y("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=vt();Pe(Symbol.for(`${n.description}:id`),i);const s=ft(n,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const o=P(e,"value"),l=c(()=>!!(s.disabled.value||e.disabled));s.register({id:i,value:o,disabled:l},t),ie(()=>{s.unregister(i)});const r=c(()=>s.isSelected(i)),m=c(()=>r.value&&[s.selectedClass.value,e.selectedClass]);return oe(r,g=>{t.emit("group:selected",{value:g})},{flush:"sync"}),{id:i,isSelected:r,toggle:()=>s.select(i,!r.value),select:g=>s.select(i,g),selectedClass:m,value:o,disabled:l,group:s}}function Gt(e,n){let a=!1;const t=mt([]),i=Le(e,"modelValue",[],u=>u==null?[]:qe(t,ht(u)),u=>{const d=Ft(t,u);return e.multiple?d:d[0]}),s=Y("useGroup");function o(u,d){const b=u,h=Symbol.for(`${n.description}:id`),S=yt(h,s==null?void 0:s.vnode).indexOf(d);te(b.value)==null&&(b.value=S),S>-1?t.splice(S,0,b):t.push(b)}function l(u){if(a)return;r();const d=t.findIndex(b=>b.id===u);t.splice(d,1)}function r(){const u=t.find(d=>!d.disabled);u&&e.mandatory==="force"&&!i.value.length&&(i.value=[u.id])}gt(()=>{r()}),ie(()=>{a=!0});function m(u,d){const b=t.find(h=>h.id===u);if(!(d&&(b!=null&&b.disabled)))if(e.multiple){const h=i.value.slice(),k=h.findIndex(v=>v===u),S=~k;if(d=d??!S,S&&e.mandatory&&h.length<=1||!S&&e.max!=null&&h.length+1>e.max)return;k<0&&d?h.push(u):k>=0&&!d&&h.splice(k,1),i.value=h}else{const h=i.value.includes(u);if(e.mandatory&&h)return;i.value=d??!h?[u]:[]}}function g(u){if(e.multiple,i.value.length){const d=i.value[0],b=t.findIndex(S=>S.id===d);let h=(b+u)%t.length,k=t[h];for(;k.disabled&&h!==b;)h=(h+u)%t.length,k=t[h];if(k.disabled)return;i.value=[t[h].id]}else{const d=t.find(b=>!b.disabled);d&&(i.value=[d.id])}}const y={register:o,unregister:l,selected:i,select:m,disabled:P(e,"disabled"),prev:()=>g(t.length-1),next:()=>g(1),isSelected:u=>i.value.includes(u),selectedClass:c(()=>e.selectedClass),items:c(()=>t),getItemIndex:u=>Mt(t,u)};return Pe(n,y),y}function Mt(e,n){const a=qe(e,[n]);return a.length?e.findIndex(t=>t.id===a[0]):-1}function qe(e,n){const a=[];return n.forEach(t=>{const i=e.find(o=>Te(t,o.value)),s=e[t];(i==null?void 0:i.value)!=null?a.push(i.id):s!=null&&a.push(s.id)}),a}function Ft(e,n){const a=[];return n.forEach(t=>{const i=e.findIndex(s=>s.id===t);if(~i){const s=e[i];a.push(s.value!=null?s.value:i)}}),a}const Xe=Symbol.for("vuetify:v-btn-toggle"),Wt=p({...je(),...At()},"VBtnToggle");L()({name:"VBtnToggle",props:Wt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isSelected:t,next:i,prev:s,select:o,selected:l}=Gt(e,Xe);return R(()=>{const r=xe.filterProps(e);return f(xe,$e({class:["v-btn-toggle",e.class]},r,{style:e.style}),{default:()=>{var m;return[(m=a.default)==null?void 0:m.call(a,{isSelected:t,next:i,prev:s,select:o,selected:l})]}})}),{next:i,prev:s,select:o}}});const jt=p({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Q=L(!1)({name:"VDefaultsProvider",props:jt(),setup(e,n){let{slots:a}=n;const{defaults:t,disabled:i,reset:s,root:o,scoped:l}=bt(e);return Ee(t,{reset:s,root:o,scoped:l,disabled:i}),()=>{var r;return(r=a.default)==null?void 0:r.call(a)}}}),qt=["x-small","small","default","large","x-large"],ve=p({size:{type:[String,Number],default:"default"}},"size");function fe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return Be(()=>{let a,t;return j(qt,e.size)?a=`${n}--size-${e.size}`:e.size&&(t={width:C(e.size),height:C(e.size)}),{sizeClasses:a,sizeStyles:t}})}const Xt=p({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:ne,...D(),...ve(),...H({tag:"i"}),...G()},"VIcon"),Z=L()({name:"VIcon",props:Xt(),setup(e,n){let{attrs:a,slots:t}=n;const i=le(),{themeClasses:s}=M(e),{iconData:o}=pt(c(()=>i.value||e.icon)),{sizeClasses:l}=fe(e),{textColorClasses:r,textColorStyles:m}=q(P(e,"color"));return R(()=>{var u,d;const g=(u=t.default)==null?void 0:u.call(t);g&&(i.value=(d=Ct(g).filter(b=>b.type===St&&b.children&&typeof b.children=="string")[0])==null?void 0:d.children);const y=!!(a.onClick||a.onClickOnce);return f(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",s.value,l.value,r.value,{"v-icon--clickable":y,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[l.value?void 0:{fontSize:C(e.size),height:C(e.size),width:C(e.size)},m.value,e.style],role:y?"button":void 0,"aria-hidden":!y,tabindex:y?e.disabled?-1:0:void 0},{default:()=>[g]})}),{}}});function Ye(e,n){const a=le(),t=_t(!1);if(Ve){const i=new IntersectionObserver(s=>{e==null||e(s,i),t.value=!!s.find(o=>o.isIntersecting)},n);ie(()=>{i.disconnect()}),oe(a,(s,o)=>{o&&(i.unobserve(o),t.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:a,isIntersecting:t}}const Yt=p({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...D(),...ve(),...H({tag:"div"}),...G()},"VProgressCircular"),Ut=L()({name:"VProgressCircular",props:Yt(),setup(e,n){let{slots:a}=n;const t=20,i=2*Math.PI*t,s=le(),{themeClasses:o}=M(e),{sizeClasses:l,sizeStyles:r}=fe(e),{textColorClasses:m,textColorStyles:g}=q(P(e,"color")),{textColorClasses:y,textColorStyles:u}=q(P(e,"bgColor")),{intersectionRef:d,isIntersecting:b}=Ye(),{resizeRef:h,contentRect:k}=xt(),S=c(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),v=c(()=>Number(e.width)),_=c(()=>r.value?Number(e.size):k.value?k.value.width:Math.max(v.value,32)),E=c(()=>t/(1-v.value/_.value)*2),B=c(()=>v.value/_.value*E.value),z=c(()=>C((100-S.value)/100*i));return kt(()=>{d.value=s.value,h.value=s.value}),R(()=>f(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":b.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},o.value,l.value,m.value,e.class],style:[r.value,g.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[f("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${E.value} ${E.value}`},[f("circle",{class:["v-progress-circular__underlay",y.value],style:u.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":B.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),f("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":B.value,"stroke-dasharray":i,"stroke-dashoffset":z.value},null)]),a.default&&f("div",{class:"v-progress-circular__content"},[a.default({value:S.value})])]})),{}}}),Jt=p({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Kt(e){return{dimensionStyles:c(()=>({height:C(e.height),maxHeight:C(e.maxHeight),maxWidth:C(e.maxWidth),minHeight:C(e.minHeight),minWidth:C(e.minWidth),width:C(e.width)}))}}const ke={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ue=p({location:String},"location");function Je(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=Ne();return{locationStyles:c(()=>{if(!e.location)return{};const{side:s,align:o}=Vt(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function l(m){return a?a(m):0}const r={};return s!=="center"&&(n?r[ke[s]]=`calc(100% - ${l(s)}px)`:r[s]=0),o!=="center"?n?r[ke[o]]=`calc(100% - ${l(o)}px)`:r[o]=0:(s==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),r})}}const Qt=p({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...D(),...Ue({location:"top"}),...ue(),...H(),...G()},"VProgressLinear"),Zt=L()({name:"VProgressLinear",props:Qt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const t=Le(e,"modelValue"),{isRtl:i,rtlClasses:s}=Ne(),{themeClasses:o}=M(e),{locationStyles:l}=Je(e),{textColorClasses:r,textColorStyles:m}=q(e,"color"),{backgroundColorClasses:g,backgroundColorStyles:y}=_e(c(()=>e.bgColor||e.color)),{backgroundColorClasses:u,backgroundColorStyles:d}=_e(e,"color"),{roundedClasses:b}=ce(e),{intersectionRef:h,isIntersecting:k}=Ye(),S=c(()=>parseInt(e.max,10)),v=c(()=>parseInt(e.height,10)),_=c(()=>parseFloat(e.bufferValue)/S.value*100),E=c(()=>parseFloat(t.value)/S.value*100),B=c(()=>i.value!==e.reverse),z=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),F=c(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function J(x){if(!h.value)return;const{left:$,right:K,width:V}=h.value.getBoundingClientRect(),W=B.value?V-x.clientX+(K-V):x.clientX-$;t.value=Math.round(W/V*S.value)}return R(()=>f(e.tag,{ref:h,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&k.value,"v-progress-linear--reverse":B.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},b.value,o.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?C(v.value):0,"--v-progress-linear-height":C(v.value),...l.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:E.value,onClick:e.clickable&&J},{default:()=>[e.stream&&f("div",{key:"stream",class:["v-progress-linear__stream",r.value],style:{...m.value,[B.value?"left":"right"]:C(-v.value),borderTop:`${C(v.value/2)} dotted`,opacity:F.value,top:`calc(50% - ${C(v.value/4)})`,width:C(100-_.value,"%"),"--v-progress-linear-stream-to":C(v.value*(B.value?1:-1))}},null),f("div",{class:["v-progress-linear__background",g.value],style:[y.value,{opacity:F.value,width:C(e.stream?_.value:100,"%")}]},null),f(U,{name:z.value},{default:()=>[e.indeterminate?f("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(x=>f("div",{key:x,class:["v-progress-linear__indeterminate",x,u.value],style:d.value},null))]):f("div",{class:["v-progress-linear__determinate",u.value],style:[d.value,{width:C(E.value,"%")}]},null)]}),a.default&&f("div",{class:"v-progress-linear__content"},[a.default({value:E.value,buffer:_.value})])]})),{}}}),en=p({loading:[Boolean,String]},"loader");function tn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{loaderClasses:c(()=>({[`${n}--loading`]:e.loading}))}}function wn(e,n){var t;let{slots:a}=n;return f("div",{class:`${e.name}__loader`},[((t=a.default)==null?void 0:t.call(a,{color:e.color,isActive:e.active}))||f(Zt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const nn=["static","relative","fixed","absolute","sticky"],an=p({position:{type:String,validator:e=>nn.includes(e)}},"position");function sn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{positionClasses:c(()=>e.position?`${n}--${e.position}`:void 0)}}function on(){const e=Y("useRoute");return c(()=>{var n;return(n=e==null?void 0:e.proxy)==null?void 0:n.$route})}function In(){var e,n;return(n=(e=Y("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function ln(e,n){const a=wt("RouterLink"),t=c(()=>!!(e.href||e.to)),i=c(()=>(t==null?void 0:t.value)||pe(n,"click")||pe(e,"click"));if(typeof a=="string")return{isLink:t,isClickable:i,href:P(e,"href")};const s=e.to?a.useLink(e):void 0,o=on();return{isLink:t,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&c(()=>{var l,r,m;return e.exact?o.value?((m=s.isExactActive)==null?void 0:m.value)&&Te(s.route.value.query,o.value.query):(r=s.isExactActive)==null?void 0:r.value:(l=s.isActive)==null?void 0:l.value}),href:c(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const rn=p({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ee=!1;function Bn(e,n){let a=!1,t,i;It&&(Re(()=>{window.addEventListener("popstate",s),t=e==null?void 0:e.beforeEach((o,l,r)=>{ee?a?n(r):r():setTimeout(()=>a?n(r):r()),ee=!0}),i=e==null?void 0:e.afterEach(()=>{ee=!1})}),Bt(()=>{window.removeEventListener("popstate",s),t==null||t(),i==null||i()}));function s(o){var l;(l=o.state)!=null&&l.replaced||(a=!0,setTimeout(()=>a=!1))}}function un(e,n){oe(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&n&&Re(()=>{n(!0)})},{immediate:!0})}const ae=Symbol("rippleStop"),cn=80;function we(e,n){e.style.transform=n,e.style.webkitTransform=n}function se(e){return e.constructor.name==="TouchEvent"}function Ke(e){return e.constructor.name==="KeyboardEvent"}const dn=function(e,n){var y;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,i=0;if(!Ke(e)){const u=n.getBoundingClientRect(),d=se(e)?e.touches[e.touches.length-1]:e;t=d.clientX-u.left,i=d.clientY-u.top}let s=0,o=.3;(y=n._ripple)!=null&&y.circle?(o=.15,s=n.clientWidth/2,s=a.center?s:s+Math.sqrt((t-s)**2+(i-s)**2)/4):s=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const l=`${(n.clientWidth-s*2)/2}px`,r=`${(n.clientHeight-s*2)/2}px`,m=a.center?l:`${t-s}px`,g=a.center?r:`${i-s}px`;return{radius:s,scale:o,x:m,y:g,centerX:l,centerY:r}},X={show(e,n){var d;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=n==null?void 0:n._ripple)!=null&&d.enabled))return;const t=document.createElement("span"),i=document.createElement("span");t.appendChild(i),t.className="v-ripple__container",a.class&&(t.className+=` ${a.class}`);const{radius:s,scale:o,x:l,y:r,centerX:m,centerY:g}=dn(e,n,a),y=`${s*2}px`;i.className="v-ripple__animation",i.style.width=y,i.style.height=y,n.appendChild(t);const u=window.getComputedStyle(n);u&&u.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),we(i,`translate(${l}, ${r}) scale3d(${o},${o},${o})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),we(i,`translate(${m}, ${g}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const a=n[n.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const t=performance.now()-Number(a.dataset.activated),i=Math.max(250-t,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((l=a.parentNode)==null?void 0:l.parentNode)===e&&e.removeChild(a.parentNode)},300)},i)}};function Qe(e){return typeof e>"u"||!!e}function O(e){const n={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ae])){if(e[ae]=!0,se(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(n.center=a._ripple.centered||Ke(e),a._ripple.class&&(n.class=a._ripple.class),se(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{X.show(e,a,n)},a._ripple.showTimer=window.setTimeout(()=>{var t;(t=a==null?void 0:a._ripple)!=null&&t.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},cn)}else X.show(e,a,n)}}function Ie(e){e[ae]=!0}function w(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),X.hide(n)}}function Ze(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let A=!1;function et(e){!A&&(e.keyCode===Ce.enter||e.keyCode===Ce.space)&&(A=!0,O(e))}function tt(e){A=!1,w(e)}function nt(e){A&&(A=!1,w(e))}function at(e,n,a){const{value:t,modifiers:i}=n,s=Qe(t);if(s||X.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,Et(t)&&t.class&&(e._ripple.class=t.class),s&&!a){if(i.stop){e.addEventListener("touchstart",Ie,{passive:!0}),e.addEventListener("mousedown",Ie);return}e.addEventListener("touchstart",O,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",Ze,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",O),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",et),e.addEventListener("keyup",tt),e.addEventListener("blur",nt),e.addEventListener("dragstart",w,{passive:!0})}else!s&&a&&st(e)}function st(e){e.removeEventListener("mousedown",O),e.removeEventListener("touchstart",O),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",Ze),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",et),e.removeEventListener("keyup",tt),e.removeEventListener("dragstart",w),e.removeEventListener("blur",nt)}function vn(e,n){at(e,n,!1)}function fn(e){delete e._ripple,st(e)}function mn(e,n){if(n.value===n.oldValue)return;const a=Qe(n.oldValue);at(e,n,a)}const gn={mounted:vn,unmounted:fn,updated:mn},hn=p({active:{type:Boolean,default:void 0},symbol:{type:null,default:Xe},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ne,appendIcon:ne,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Ae(),...D(),...He(),...Jt(),...Me(),...Dt(),...en(),...Ue(),...an(),...ue(),...rn(),...ve(),...H({tag:"button"}),...G(),...We({variant:"elevated"})},"VBtn"),En=L()({name:"VBtn",directives:{Ripple:gn},props:hn(),emits:{"group:selected":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const{themeClasses:i}=M(e),{borderClasses:s}=De(e),{colorClasses:o,colorStyles:l,variantClasses:r}=Ot(e),{densityClasses:m}=Ge(e),{dimensionStyles:g}=Kt(e),{elevationClasses:y}=Fe(e),{loaderClasses:u}=tn(e),{locationStyles:d}=Je(e),{positionClasses:b}=sn(e),{roundedClasses:h}=ce(e),{sizeClasses:k,sizeStyles:S}=fe(e),v=Ht(e,e.symbol,!1),_=ln(e,a),E=c(()=>{var x;return e.active!==void 0?e.active:_.isLink.value?(x=_.isActive)==null?void 0:x.value:v==null?void 0:v.isSelected.value}),B=c(()=>(v==null?void 0:v.disabled.value)||e.disabled),z=c(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),F=c(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function J(x){var $;B.value||_.isLink.value&&(x.metaKey||x.ctrlKey||x.shiftKey||x.button!==0||a.target==="_blank")||(($=_.navigate)==null||$.call(_,x),v==null||v.toggle())}return un(_,v==null?void 0:v.select),R(()=>{var me,ge;const x=_.isLink.value?"a":e.tag,$=!!(e.prependIcon||t.prepend),K=!!(e.appendIcon||t.append),V=!!(e.icon&&e.icon!==!0),W=(v==null?void 0:v.isSelected.value)&&(!_.isLink.value||((me=_.isActive)==null?void 0:me.value))||!v||((ge=_.isActive)==null?void 0:ge.value);return Pt(f(x,{type:x==="a"?void 0:"button",class:["v-btn",v==null?void 0:v.selectedClass.value,{"v-btn--active":E.value,"v-btn--block":e.block,"v-btn--disabled":B.value,"v-btn--elevated":z.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},i.value,s.value,W?o.value:void 0,m.value,y.value,u.value,b.value,h.value,k.value,r.value,e.class],style:[W?l.value:void 0,g.value,d.value,S.value,e.style],disabled:B.value||void 0,href:_.href.value,onClick:J,value:F.value},{default:()=>{var he;return[zt(!0,"v-btn"),!e.icon&&$&&f("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?f(Q,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):f(Z,{key:"prepend-icon",icon:e.prependIcon},null)]),f("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&V?f(Z,{key:"content-icon",icon:e.icon},null):f(Q,{key:"content-defaults",disabled:!V,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var ye;return[((ye=t.default)==null?void 0:ye.call(t))??e.text]}})]),!e.icon&&K&&f("span",{key:"append",class:"v-btn__append"},[t.append?f(Q,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):f(Z,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&f("span",{key:"loader",class:"v-btn__loader"},[((he=t.loader)==null?void 0:he.call(t))??f(Ut,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Lt("ripple"),!B.value&&e.ripple,null]])}),{group:v}}}),yn=p({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function I(e,n,a){return L()({name:e,props:yn({mode:a,origin:n}),setup(t,i){let{slots:s}=i;const o={onBeforeEnter(l){t.origin&&(l.style.transformOrigin=t.origin)},onLeave(l){if(t.leaveAbsolute){const{offsetTop:r,offsetLeft:m,offsetWidth:g,offsetHeight:y}=l;l._transitionInitialStyles={position:l.style.position,top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height},l.style.position="absolute",l.style.top=`${r}px`,l.style.left=`${m}px`,l.style.width=`${g}px`,l.style.height=`${y}px`}t.hideOnLeave&&l.style.setProperty("display","none","important")},onAfterLeave(l){if(t.leaveAbsolute&&(l!=null&&l._transitionInitialStyles)){const{position:r,top:m,left:g,width:y,height:u}=l._transitionInitialStyles;delete l._transitionInitialStyles,l.style.position=r||"",l.style.top=m||"",l.style.left=g||"",l.style.width=y||"",l.style.height=u||""}}};return()=>{const l=t.group?ze:U;return re(l,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:o},s.default)}}})}function it(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return L()({name:e,props:{mode:{type:String,default:a},disabled:Boolean},setup(t,i){let{slots:s}=i;return()=>re(U,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:n},s.default)}})}function ot(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const a=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Tt(`offset-${a}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[a]:o.style[a]}},onEnter(o){const l=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const r=`${o[t]}px`;o.style[a]="0",o.offsetHeight,o.style.transition=l.transition,e&&o._parent&&o._parent.classList.add(e),requestAnimationFrame(()=>{o.style[a]=r})},onAfterEnter:s,onEnterCancelled:s,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[a]:o.style[a]},o.style.overflow="hidden",o.style[a]=`${o[t]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[a]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(o){e&&o._parent&&o._parent.classList.remove(e),s(o)}function s(o){const l=o._initialStyle[a];o.style.overflow=o._initialStyle.overflow,l!=null&&(o.style[a]=l),delete o._initialStyle}}I("fab-transition","center center","out-in");I("dialog-bottom-transition");I("dialog-top-transition");I("fade-transition");I("scale-transition");I("scroll-x-transition");I("scroll-x-reverse-transition");I("scroll-y-transition");I("scroll-y-reverse-transition");I("slide-x-transition");I("slide-x-reverse-transition");const Pn=I("slide-y-transition");I("slide-y-reverse-transition");const Ln=it("expand-transition",ot()),Tn=it("expand-x-transition",ot("",!0)),$n=p({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Vn=(e,n)=>{let{slots:a}=n;const{transition:t,disabled:i,group:s,...o}=e,{component:l=s?ze:U,...r}=typeof t=="object"?t:{};return re(l,$e(typeof t=="string"?{name:i?"":t}:r,typeof t=="string"?{}:{disabled:i,group:s},o),a)};function bn(e,n){if(!Ve)return;const a=n.modifiers||{},t=n.value,{handler:i,options:s}=typeof t=="object"?t:{handler:t,options:{}},o=new IntersectionObserver(function(){var y;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;const m=(y=e._observe)==null?void 0:y[n.instance.$.uid];if(!m)return;const g=l.some(u=>u.isIntersecting);i&&(!a.quiet||m.init)&&(!a.once||g||m.init)&&i(g,l,r),g&&a.once?lt(e,n):m.init=!0},s);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:o},o.observe(e)}function lt(e,n){var t;const a=(t=e._observe)==null?void 0:t[n.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const pn={mounted:bn,unmounted:lt},Nn=pn;export{sn as A,Ot as B,zt as C,Zt as D,He as E,en as F,rn as G,Ge as H,tn as I,ln as J,q as K,wn as L,Vn as M,Nn as N,ve as O,fe as P,Pn as Q,gn as R,Tn as S,Q as V,Me as a,ue as b,De as c,Fe as d,ce as e,Ln as f,hn as g,En as h,In as i,Z as j,Sn as k,_n as l,Ae as m,xn as n,kn as o,Vt as p,Jt as q,$n as r,Kt as s,Se as t,_e as u,Bn as v,Ue as w,an as x,We as y,Je as z};