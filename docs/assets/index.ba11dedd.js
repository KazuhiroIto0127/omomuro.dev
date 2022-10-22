const hl=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};hl();function Oa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const pl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gl=Oa(pl);function Co(e){return!!e||e===""}function Pa(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ge(r)?yl(r):Pa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ge(e))return e;if(he(e))return e}}const vl=/;(?![^(]*\))/g,bl=/:(.+)/;function yl(e){const t={};return e.split(vl).forEach(n=>{if(n){const r=n.split(bl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function yr(e){let t="";if(ge(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=yr(e[n]);r&&(t+=r+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Wt=e=>ge(e)?e:e==null?"":H(e)||he(e)&&(e.toString===To||!U(e.toString))?JSON.stringify(e,So,2):String(e),So=(e,t)=>t&&t.__v_isRef?So(e,t.value):Xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ro(t)?{[`Set(${t.size})`]:[...t.values()]}:he(t)&&!H(t)&&!No(t)?String(t):t,ae={},Vt=[],$e=()=>{},_l=()=>!1,xl=/^on[^a-z]/,_r=e=>xl.test(e),Ca=e=>e.startsWith("onUpdate:"),xe=Object.assign,Sa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},wl=Object.prototype.hasOwnProperty,K=(e,t)=>wl.call(e,t),H=Array.isArray,Xt=e=>xr(e)==="[object Map]",Ro=e=>xr(e)==="[object Set]",U=e=>typeof e=="function",ge=e=>typeof e=="string",Ra=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",Io=e=>he(e)&&U(e.then)&&U(e.catch),To=Object.prototype.toString,xr=e=>To.call(e),kl=e=>xr(e).slice(8,-1),No=e=>xr(e)==="[object Object]",Ia=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,nr=Oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},El=/-(\w)/g,Qe=wr(e=>e.replace(El,(t,n)=>n?n.toUpperCase():"")),Al=/\B([A-Z])/g,an=wr(e=>e.replace(Al,"-$1").toLowerCase()),kr=wr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Lr=wr(e=>e?`on${kr(e)}`:""),An=(e,t)=>!Object.is(e,t),jr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},lr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ol=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ui;const Pl=()=>ui||(ui=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let qe;class Cl{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&qe&&(this.parent=qe,this.index=(qe.scopes||(qe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=qe;try{return qe=this,t()}finally{qe=n}}}on(){qe=this}off(){qe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Sl(e,t=qe){t&&t.active&&t.effects.push(e)}const Ta=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Mo=e=>(e.w&_t)>0,Fo=e=>(e.n&_t)>0,Rl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=_t},Il=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Mo(a)&&!Fo(a)?a.delete(e):t[n++]=a,a.w&=~_t,a.n&=~_t}t.length=n}},Vr=new WeakMap;let mn=0,_t=1;const Xr=30;let Me;const Rt=Symbol(""),Gr=Symbol("");class Na{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Sl(this,r)}run(){if(!this.active)return this.fn();let t=Me,n=gt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Me,Me=this,gt=!0,_t=1<<++mn,mn<=Xr?Rl(this):di(this),this.fn()}finally{mn<=Xr&&Il(this),_t=1<<--mn,Me=this.parent,gt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Me===this?this.deferStop=!0:this.active&&(di(this),this.onStop&&this.onStop(),this.active=!1)}}function di(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let gt=!0;const Lo=[];function on(){Lo.push(gt),gt=!1}function sn(){const e=Lo.pop();gt=e===void 0?!0:e}function Se(e,t,n){if(gt&&Me){let r=Vr.get(e);r||Vr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ta()),jo(a)}}function jo(e,t){let n=!1;mn<=Xr?Fo(e)||(e.n|=_t,n=!Mo(e)):n=!e.has(Me),n&&(e.add(Me),Me.deps.push(e))}function rt(e,t,n,r,a,i){const o=Vr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?Ia(n)&&s.push(o.get("length")):(s.push(o.get(Rt)),Xt(e)&&s.push(o.get(Gr)));break;case"delete":H(e)||(s.push(o.get(Rt)),Xt(e)&&s.push(o.get(Gr)));break;case"set":Xt(e)&&s.push(o.get(Rt));break}if(s.length===1)s[0]&&Qr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Qr(Ta(l))}}function Qr(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&mi(r);for(const r of n)r.computed||mi(r)}function mi(e,t){(e!==Me||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Tl=Oa("__proto__,__v_isRef,__isVue"),$o=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ra)),Nl=Ma(),Ml=Ma(!1,!0),Fl=Ma(!0),hi=Ll();function Ll(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)Se(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(X)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){on();const r=X(this)[t].apply(this,n);return sn(),r}}),e}function Ma(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Jl:Uo:t?Ho:Bo).get(r))return r;const o=H(r);if(!e&&o&&K(hi,a))return Reflect.get(hi,a,i);const s=Reflect.get(r,a,i);return(Ra(a)?$o.has(a):Tl(a))||(e||Se(r,"get",a),t)?s:ye(s)?o&&Ia(a)?s:s.value:he(s)?e?Wo(s):$n(s):s}}const jl=zo(),$l=zo(!0);function zo(e=!1){return function(n,r,a,i){let o=n[r];if(On(o)&&ye(o)&&!ye(a))return!1;if(!e&&!On(a)&&(Jr(a)||(a=X(a),o=X(o)),!H(n)&&ye(o)&&!ye(a)))return o.value=a,!0;const s=H(n)&&Ia(r)?Number(r)<n.length:K(n,r),l=Reflect.set(n,r,a,i);return n===X(i)&&(s?An(a,o)&&rt(n,"set",r,a):rt(n,"add",r,a)),l}}function zl(e,t){const n=K(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&rt(e,"delete",t,void 0),r}function Dl(e,t){const n=Reflect.has(e,t);return(!Ra(t)||!$o.has(t))&&Se(e,"has",t),n}function Bl(e){return Se(e,"iterate",H(e)?"length":Rt),Reflect.ownKeys(e)}const Do={get:Nl,set:jl,deleteProperty:zl,has:Dl,ownKeys:Bl},Hl={get:Fl,set(e,t){return!0},deleteProperty(e,t){return!0}},Ul=xe({},Do,{get:Ml,set:$l}),Fa=e=>e,Er=e=>Reflect.getPrototypeOf(e);function Hn(e,t,n=!1,r=!1){e=e.__v_raw;const a=X(e),i=X(t);n||(t!==i&&Se(a,"get",t),Se(a,"get",i));const{has:o}=Er(a),s=r?Fa:n?$a:Pn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Un(e,t=!1){const n=this.__v_raw,r=X(n),a=X(e);return t||(e!==a&&Se(r,"has",e),Se(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Wn(e,t=!1){return e=e.__v_raw,!t&&Se(X(e),"iterate",Rt),Reflect.get(e,"size",e)}function pi(e){e=X(e);const t=X(this);return Er(t).has.call(t,e)||(t.add(e),rt(t,"add",e,e)),this}function gi(e,t){t=X(t);const n=X(this),{has:r,get:a}=Er(n);let i=r.call(n,e);i||(e=X(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?An(t,o)&&rt(n,"set",e,t):rt(n,"add",e,t),this}function vi(e){const t=X(this),{has:n,get:r}=Er(t);let a=n.call(t,e);a||(e=X(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&rt(t,"delete",e,void 0),i}function bi(){const e=X(this),t=e.size!==0,n=e.clear();return t&&rt(e,"clear",void 0,void 0),n}function Yn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=X(o),l=t?Fa:e?$a:Pn;return!e&&Se(s,"iterate",Rt),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function Kn(e,t,n){return function(...r){const a=this.__v_raw,i=X(a),o=Xt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?Fa:t?$a:Pn;return!t&&Se(i,"iterate",l?Gr:Rt),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:s?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function ct(e){return function(...t){return e==="delete"?!1:this}}function Wl(){const e={get(i){return Hn(this,i)},get size(){return Wn(this)},has:Un,add:pi,set:gi,delete:vi,clear:bi,forEach:Yn(!1,!1)},t={get(i){return Hn(this,i,!1,!0)},get size(){return Wn(this)},has:Un,add:pi,set:gi,delete:vi,clear:bi,forEach:Yn(!1,!0)},n={get(i){return Hn(this,i,!0)},get size(){return Wn(this,!0)},has(i){return Un.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:Yn(!0,!1)},r={get(i){return Hn(this,i,!0,!0)},get size(){return Wn(this,!0)},has(i){return Un.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:Yn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Kn(i,!1,!1),n[i]=Kn(i,!0,!1),t[i]=Kn(i,!1,!0),r[i]=Kn(i,!0,!0)}),[e,n,t,r]}const[Yl,Kl,ql,Vl]=Wl();function La(e,t){const n=t?e?Vl:ql:e?Kl:Yl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(K(n,a)&&a in r?n:r,a,i)}const Xl={get:La(!1,!1)},Gl={get:La(!1,!0)},Ql={get:La(!0,!1)},Bo=new WeakMap,Ho=new WeakMap,Uo=new WeakMap,Jl=new WeakMap;function Zl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ef(e){return e.__v_skip||!Object.isExtensible(e)?0:Zl(kl(e))}function $n(e){return On(e)?e:ja(e,!1,Do,Xl,Bo)}function tf(e){return ja(e,!1,Ul,Gl,Ho)}function Wo(e){return ja(e,!0,Hl,Ql,Uo)}function ja(e,t,n,r,a){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ef(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Gt(e){return On(e)?Gt(e.__v_raw):!!(e&&e.__v_isReactive)}function On(e){return!!(e&&e.__v_isReadonly)}function Jr(e){return!!(e&&e.__v_isShallow)}function Yo(e){return Gt(e)||On(e)}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function Ko(e){return lr(e,"__v_skip",!0),e}const Pn=e=>he(e)?$n(e):e,$a=e=>he(e)?Wo(e):e;function qo(e){gt&&Me&&(e=X(e),jo(e.dep||(e.dep=Ta())))}function Vo(e,t){e=X(e),e.dep&&Qr(e.dep)}function ye(e){return!!(e&&e.__v_isRef===!0)}function Qt(e){return Xo(e,!1)}function nf(e){return Xo(e,!0)}function Xo(e,t){return ye(e)?e:new rf(e,t)}class rf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:X(t),this._value=n?t:Pn(t)}get value(){return qo(this),this._value}set value(t){t=this.__v_isShallow?t:X(t),An(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Pn(t),Vo(this))}}function vt(e){return ye(e)?e.value:e}const af={get:(e,t,n)=>vt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ye(a)&&!ye(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Go(e){return Gt(e)?e:new Proxy(e,af)}class of{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Na(t,()=>{this._dirty||(this._dirty=!0,Vo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=X(this);return qo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function sf(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=$e):(r=e.get,a=e.set),new of(r,a,i||!a,n)}function bt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Ar(i,t,n)}return a}function ze(e,t,n,r){if(U(e)){const i=bt(e,t,n,r);return i&&Io(i)&&i.catch(o=>{Ar(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ze(e[i],t,n,r));return a}function Ar(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){bt(l,null,10,[e,o,s]);return}}lf(e,n,a,r)}function lf(e,t,n,r=!0){console.error(e)}let fr=!1,Zr=!1;const Ce=[];let nt=0;const gn=[];let hn=null,Bt=0;const vn=[];let mt=null,Ht=0;const Qo=Promise.resolve();let za=null,ea=null;function Jo(e){const t=za||Qo;return e?t.then(this?e.bind(this):e):t}function ff(e){let t=nt+1,n=Ce.length;for(;t<n;){const r=t+n>>>1;Cn(Ce[r])<e?t=r+1:n=r}return t}function Zo(e){(!Ce.length||!Ce.includes(e,fr&&e.allowRecurse?nt+1:nt))&&e!==ea&&(e.id==null?Ce.push(e):Ce.splice(ff(e.id),0,e),es())}function es(){!fr&&!Zr&&(Zr=!0,za=Qo.then(rs))}function cf(e){const t=Ce.indexOf(e);t>nt&&Ce.splice(t,1)}function ts(e,t,n,r){H(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),es()}function uf(e){ts(e,hn,gn,Bt)}function df(e){ts(e,mt,vn,Ht)}function Or(e,t=null){if(gn.length){for(ea=t,hn=[...new Set(gn)],gn.length=0,Bt=0;Bt<hn.length;Bt++)hn[Bt]();hn=null,Bt=0,ea=null,Or(e,t)}}function ns(e){if(Or(),vn.length){const t=[...new Set(vn)];if(vn.length=0,mt){mt.push(...t);return}for(mt=t,mt.sort((n,r)=>Cn(n)-Cn(r)),Ht=0;Ht<mt.length;Ht++)mt[Ht]();mt=null,Ht=0}}const Cn=e=>e.id==null?1/0:e.id;function rs(e){Zr=!1,fr=!0,Or(e),Ce.sort((n,r)=>Cn(n)-Cn(r));const t=$e;try{for(nt=0;nt<Ce.length;nt++){const n=Ce[nt];n&&n.active!==!1&&bt(n,null,14)}}finally{nt=0,Ce.length=0,ns(),fr=!1,za=null,(Ce.length||gn.length||vn.length)&&rs(e)}}function mf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ae;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[f]||ae;h&&(a=n.map(g=>g.trim())),d&&(a=n.map(Ol))}let s,l=r[s=Lr(t)]||r[s=Lr(Qe(t))];!l&&i&&(l=r[s=Lr(an(t))]),l&&ze(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ze(c,e,6,a)}}function as(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=c=>{const f=as(c,t,!0);f&&(s=!0,xe(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):xe(o,i),r.set(e,o),o)}function Pr(e,t){return!e||!_r(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,an(t))||K(e,t))}let Xe=null,is=null;function cr(e){const t=Xe;return Xe=e,is=e&&e.type.__scopeId||null,t}function tt(e,t=Xe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ci(-1);const i=cr(t),o=e(...a);return cr(i),r._d&&Ci(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function $r(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:h,setupState:g,ctx:A,inheritAttrs:F}=e;let C,v;const x=cr(e);try{if(n.shapeFlag&4){const z=a||r;C=Ve(f.call(z,z,d,i,g,h,A)),v=l}else{const z=t;C=Ve(z.length>1?z(i,{attrs:l,slots:s,emit:c}):z(i,null)),v=t.props?l:hf(l)}}catch(z){yn.length=0,Ar(z,e,1),C=re(Tt)}let M=C;if(v&&F!==!1){const z=Object.keys(v),{shapeFlag:Y}=M;z.length&&Y&7&&(o&&z.some(Ca)&&(v=pf(v,o)),M=Zt(M,v))}return n.dirs&&(M=Zt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),C=M,cr(x),C}const hf=e=>{let t;for(const n in e)(n==="class"||n==="style"||_r(n))&&((t||(t={}))[n]=e[n]);return t},pf=(e,t)=>{const n={};for(const r in e)(!Ca(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?yi(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(o[h]!==r[h]&&!Pr(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?yi(r,o,c):!0:!!o;return!1}function yi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Pr(n,i))return!0}return!1}function vf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const bf=e=>e.__isSuspense;function yf(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):df(e)}function rr(e,t){if(ve){let n=ve.provides;const r=ve.parent&&ve.parent.provides;r===n&&(n=ve.provides=Object.create(r)),n[e]=t}}function yt(e,t,n=!1){const r=ve||Xe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r.proxy):t}}const _i={};function bn(e,t,n){return os(e,t,n)}function os(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ae){const s=ve;let l,c=!1,f=!1;if(ye(e)?(l=()=>e.value,c=Jr(e)):Gt(e)?(l=()=>e,r=!0):H(e)?(f=!0,c=e.some(v=>Gt(v)||Jr(v)),l=()=>e.map(v=>{if(ye(v))return v.value;if(Gt(v))return Yt(v);if(U(v))return bt(v,s,2)})):U(e)?t?l=()=>bt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),ze(e,s,3,[h])}:l=$e,t&&r){const v=l;l=()=>Yt(v())}let d,h=v=>{d=C.onStop=()=>{bt(v,s,4)}};if(In)return h=$e,t?n&&ze(t,s,3,[l(),f?[]:void 0,h]):l(),$e;let g=f?[]:_i;const A=()=>{if(!!C.active)if(t){const v=C.run();(r||c||(f?v.some((x,M)=>An(x,g[M])):An(v,g)))&&(d&&d(),ze(t,s,3,[v,g===_i?void 0:g,h]),g=v)}else C.run()};A.allowRecurse=!!t;let F;a==="sync"?F=A:a==="post"?F=()=>ke(A,s&&s.suspense):F=()=>uf(A);const C=new Na(l,F);return t?n?A():g=C.run():a==="post"?ke(C.run.bind(C),s&&s.suspense):C.run(),()=>{C.stop(),s&&s.scope&&Sa(s.scope.effects,C)}}function _f(e,t,n){const r=this.proxy,a=ge(e)?e.includes(".")?ss(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=ve;en(this);const s=os(a,i.bind(r),n);return o?en(o):It(),s}function ss(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Yt(e,t){if(!he(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ye(e))Yt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)Yt(e[n],t);else if(Ro(e)||Xt(e))e.forEach(n=>{Yt(n,t)});else if(No(e))for(const n in e)Yt(e[n],t);return e}function Be(e){return U(e)?{setup:e,name:e.name}:e}const ar=e=>!!e.type.__asyncLoader,ls=e=>e.type.__isKeepAlive;function xf(e,t){fs(e,"a",t)}function wf(e,t){fs(e,"da",t)}function fs(e,t,n=ve){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Cr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ls(a.parent.vnode)&&kf(r,t,n,a),a=a.parent}}function kf(e,t,n,r){const a=Cr(t,e,r,!0);cs(()=>{Sa(r[t],a)},n)}function Cr(e,t,n=ve,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;on(),en(n);const s=ze(t,n,e,o);return It(),sn(),s});return r?a.unshift(i):a.push(i),i}}const st=e=>(t,n=ve)=>(!In||e==="sp")&&Cr(e,t,n),Ef=st("bm"),Af=st("m"),Of=st("bu"),Pf=st("u"),Cf=st("bum"),cs=st("um"),Sf=st("sp"),Rf=st("rtg"),If=st("rtc");function Tf(e,t=ve){Cr("ec",e,t)}function Et(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(on(),ze(l,n,8,[e.el,s,e,t]),sn())}}const us="components";function Sn(e,t){return Mf(us,e,!0,t)||e}const Nf=Symbol();function Mf(e,t,n=!0,r=!1){const a=Xe||ve;if(a){const i=a.type;if(e===us){const s=cc(i,!1);if(s&&(s===t||s===Qe(t)||s===kr(Qe(t))))return i}const o=xi(a[e]||i[e],t)||xi(a.appContext[e],t);return!o&&r?i:o}}function xi(e,t){return e&&(e[t]||e[Qe(t)]||e[kr(Qe(t))])}function ta(e,t,n,r){let a;const i=n&&n[r];if(H(e)||ge(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(he(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const na=e=>e?ks(e)?Wa(e)||e.proxy:na(e.parent):null,ur=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>na(e.parent),$root:e=>na(e.root),$emit:e=>e.emit,$options:e=>ms(e),$forceUpdate:e=>e.f||(e.f=()=>Zo(e.update)),$nextTick:e=>e.n||(e.n=Jo.bind(e.proxy)),$watch:e=>_f.bind(e)}),Ff={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==ae&&K(r,t))return o[t]=1,r[t];if(a!==ae&&K(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&K(c,t))return o[t]=3,i[t];if(n!==ae&&K(n,t))return o[t]=4,n[t];ra&&(o[t]=0)}}const f=ur[t];let d,h;if(f)return t==="$attrs"&&Se(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ae&&K(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,K(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==ae&&K(a,t)?(a[t]=n,!0):r!==ae&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ae&&K(e,o)||t!==ae&&K(t,o)||(s=i[0])&&K(s,o)||K(r,o)||K(ur,o)||K(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ra=!0;function Lf(e){const t=ms(e),n=e.proxy,r=e.ctx;ra=!1,t.beforeCreate&&wi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:h,beforeUpdate:g,updated:A,activated:F,deactivated:C,beforeDestroy:v,beforeUnmount:x,destroyed:M,unmounted:z,render:Y,renderTracked:le,renderTriggered:ue,errorCaptured:He,serverPrefetch:de,expose:Ue,inheritAttrs:Je,components:Te,directives:Ft,filters:Lt}=t;if(c&&jf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const te in o){const J=o[te];U(J)&&(r[te]=J.bind(n))}if(a){const te=a.call(n,n);he(te)&&(e.data=$n(te))}if(ra=!0,i)for(const te in i){const J=i[te],Ae=U(J)?J.bind(n,n):U(J.get)?J.get.bind(n,n):$e,$t=!U(J)&&U(J.set)?J.set.bind(n):$e,Ze=fe({get:Ae,set:$t});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:We=>Ze.value=We})}if(s)for(const te in s)ds(s[te],r,n,te);if(l){const te=U(l)?l.call(n):l;Reflect.ownKeys(te).forEach(J=>{rr(J,te[J])})}f&&wi(f,e,"c");function me(te,J){H(J)?J.forEach(Ae=>te(Ae.bind(n))):J&&te(J.bind(n))}if(me(Ef,d),me(Af,h),me(Of,g),me(Pf,A),me(xf,F),me(wf,C),me(Tf,He),me(If,le),me(Rf,ue),me(Cf,x),me(cs,z),me(Sf,de),H(Ue))if(Ue.length){const te=e.exposed||(e.exposed={});Ue.forEach(J=>{Object.defineProperty(te,J,{get:()=>n[J],set:Ae=>n[J]=Ae})})}else e.exposed||(e.exposed={});Y&&e.render===$e&&(e.render=Y),Je!=null&&(e.inheritAttrs=Je),Te&&(e.components=Te),Ft&&(e.directives=Ft)}function jf(e,t,n=$e,r=!1){H(e)&&(e=aa(e));for(const a in e){const i=e[a];let o;he(i)?"default"in i?o=yt(i.from||a,i.default,!0):o=yt(i.from||a):o=yt(i),ye(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function wi(e,t,n){ze(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ds(e,t,n,r){const a=r.includes(".")?ss(n,r):()=>n[r];if(ge(e)){const i=t[e];U(i)&&bn(a,i)}else if(U(e))bn(a,e.bind(n));else if(he(e))if(H(e))e.forEach(i=>ds(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&bn(a,i,e)}}function ms(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>dr(l,c,o,!0)),dr(l,t,o)),i.set(t,l),l}function dr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&dr(e,i,n,!0),a&&a.forEach(o=>dr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=$f[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const $f={data:ki,props:Ot,emits:Ot,methods:Ot,computed:Ot,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:Ot,directives:Ot,watch:Df,provide:ki,inject:zf};function ki(e,t){return t?e?function(){return xe(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function zf(e,t){return Ot(aa(e),aa(t))}function aa(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function Ot(e,t){return e?xe(xe(Object.create(null),e),t):t}function Df(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const r in t)n[r]=_e(e[r],t[r]);return n}function Bf(e,t,n,r=!1){const a={},i={};lr(i,Sr,1),e.propsDefaults=Object.create(null),hs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:tf(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Hf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=X(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(Pr(e.emitsOptions,h))continue;const g=t[h];if(l)if(K(i,h))g!==i[h]&&(i[h]=g,c=!0);else{const A=Qe(h);a[A]=ia(l,s,A,g,e,!1)}else g!==i[h]&&(i[h]=g,c=!0)}}}else{hs(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!K(t,d)&&((f=an(d))===d||!K(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=ia(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!K(t,d)&&!0)&&(delete i[d],c=!0)}c&&rt(e,"set","$attrs")}function hs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(nr(l))continue;const c=t[l];let f;a&&K(a,f=Qe(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:Pr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=X(n),c=s||ae;for(let f=0;f<i.length;f++){const d=i[f];n[d]=ia(a,l,d,c[d],e,!K(c,d))}}return o}function ia(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=K(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&U(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(en(a),r=c[n]=l.call(null,t),It())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===an(n))&&(r=!0))}return r}function ps(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const f=d=>{l=!0;const[h,g]=ps(d,t,!0);xe(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return r.set(e,Vt),Vt;if(H(i))for(let f=0;f<i.length;f++){const d=Qe(i[f]);Ei(d)&&(o[d]=ae)}else if(i)for(const f in i){const d=Qe(f);if(Ei(d)){const h=i[f],g=o[d]=H(h)||U(h)?{type:h}:h;if(g){const A=Pi(Boolean,g.type),F=Pi(String,g.type);g[0]=A>-1,g[1]=F<0||A<F,(A>-1||K(g,"default"))&&s.push(d)}}}const c=[o,s];return r.set(e,c),c}function Ei(e){return e[0]!=="$"}function Ai(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Oi(e,t){return Ai(e)===Ai(t)}function Pi(e,t){return H(t)?t.findIndex(n=>Oi(n,e)):U(t)&&Oi(t,e)?0:-1}const gs=e=>e[0]==="_"||e==="$stable",Da=e=>H(e)?e.map(Ve):[Ve(e)],Uf=(e,t,n)=>{if(t._n)return t;const r=tt((...a)=>Da(t(...a)),n);return r._c=!1,r},vs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(gs(a))continue;const i=e[a];if(U(i))t[a]=Uf(a,i,r);else if(i!=null){const o=Da(i);t[a]=()=>o}}},bs=(e,t)=>{const n=Da(t);e.slots.default=()=>n},Wf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=X(t),lr(t,"_",n)):vs(t,e.slots={})}else e.slots={},t&&bs(e,t);lr(e.slots,Sr,1)},Yf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ae;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(xe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,vs(t,a)),o=t}else t&&(bs(e,t),o={default:1});if(i)for(const s in a)!gs(s)&&!(s in o)&&delete a[s]};function ys(){return{app:null,config:{isNativeTag:_l,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kf=0;function qf(e,t){return function(r,a=null){U(r)||(r=Object.assign({},r)),a!=null&&!he(a)&&(a=null);const i=ys(),o=new Set;let s=!1;const l=i.app={_uid:Kf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:dc,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(l,...f)):U(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const h=re(r,a);return h.appContext=i,f&&t?t(h,c):e(h,c,d),s=!0,l._container=c,c.__vue_app__=l,Wa(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function oa(e,t,n,r,a=!1){if(H(e)){e.forEach((h,g)=>oa(h,t&&(H(t)?t[g]:t),n,r,a));return}if(ar(r)&&!a)return;const i=r.shapeFlag&4?Wa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===ae?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(ge(c)?(f[c]=null,K(d,c)&&(d[c]=null)):ye(c)&&(c.value=null)),U(l))bt(l,s,12,[o,f]);else{const h=ge(l),g=ye(l);if(h||g){const A=()=>{if(e.f){const F=h?f[l]:l.value;a?H(F)&&Sa(F,i):H(F)?F.includes(i)||F.push(i):h?(f[l]=[i],K(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else h?(f[l]=o,K(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(f[e.k]=o))};o?(A.id=-1,ke(A,n)):A()}}}const ke=yf;function Vf(e){return Xf(e)}function Xf(e,t){const n=Pl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:h,setScopeId:g=$e,cloneNode:A,insertStaticContent:F}=e,C=(u,m,p,_=null,y=null,E=null,S=!1,k=null,O=!!m.dynamicChildren)=>{if(u===m)return;u&&!un(u,m)&&(_=L(u),Ie(u,y,E,!0),u=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:w,ref:j,shapeFlag:I}=m;switch(w){case Ba:v(u,m,p,_);break;case Tt:x(u,m,p,_);break;case zr:u==null&&M(m,p,_,S);break;case Ee:Ft(u,m,p,_,y,E,S,k,O);break;default:I&1?le(u,m,p,_,y,E,S,k,O):I&6?Lt(u,m,p,_,y,E,S,k,O):(I&64||I&128)&&w.process(u,m,p,_,y,E,S,k,O,ne)}j!=null&&y&&oa(j,u&&u.ref,E,m||u,!m)},v=(u,m,p,_)=>{if(u==null)r(m.el=s(m.children),p,_);else{const y=m.el=u.el;m.children!==u.children&&c(y,m.children)}},x=(u,m,p,_)=>{u==null?r(m.el=l(m.children||""),p,_):m.el=u.el},M=(u,m,p,_)=>{[u.el,u.anchor]=F(u.children,m,p,_,u.el,u.anchor)},z=({el:u,anchor:m},p,_)=>{let y;for(;u&&u!==m;)y=h(u),r(u,p,_),u=y;r(m,p,_)},Y=({el:u,anchor:m})=>{let p;for(;u&&u!==m;)p=h(u),a(u),u=p;a(m)},le=(u,m,p,_,y,E,S,k,O)=>{S=S||m.type==="svg",u==null?ue(m,p,_,y,E,S,k,O):Ue(u,m,y,E,S,k,O)},ue=(u,m,p,_,y,E,S,k)=>{let O,w;const{type:j,props:I,shapeFlag:$,transition:D,patchFlag:q,dirs:Z}=u;if(u.el&&A!==void 0&&q===-1)O=u.el=A(u.el);else{if(O=u.el=o(u.type,E,I&&I.is,I),$&8?f(O,u.children):$&16&&de(u.children,O,null,_,y,E&&j!=="foreignObject",S,k),Z&&Et(u,null,_,"created"),I){for(const ie in I)ie!=="value"&&!nr(ie)&&i(O,ie,null,I[ie],E,u.children,_,y,P);"value"in I&&i(O,"value",null,I.value),(w=I.onVnodeBeforeMount)&&Ke(w,_,u)}He(O,u,u.scopeId,S,_)}Z&&Et(u,null,_,"beforeMount");const ee=(!y||y&&!y.pendingBranch)&&D&&!D.persisted;ee&&D.beforeEnter(O),r(O,m,p),((w=I&&I.onVnodeMounted)||ee||Z)&&ke(()=>{w&&Ke(w,_,u),ee&&D.enter(O),Z&&Et(u,null,_,"mounted")},y)},He=(u,m,p,_,y)=>{if(p&&g(u,p),_)for(let E=0;E<_.length;E++)g(u,_[E]);if(y){let E=y.subTree;if(m===E){const S=y.vnode;He(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},de=(u,m,p,_,y,E,S,k,O=0)=>{for(let w=O;w<u.length;w++){const j=u[w]=k?ht(u[w]):Ve(u[w]);C(null,j,m,p,_,y,E,S,k)}},Ue=(u,m,p,_,y,E,S)=>{const k=m.el=u.el;let{patchFlag:O,dynamicChildren:w,dirs:j}=m;O|=u.patchFlag&16;const I=u.props||ae,$=m.props||ae;let D;p&&At(p,!1),(D=$.onVnodeBeforeUpdate)&&Ke(D,p,m,u),j&&Et(m,u,p,"beforeUpdate"),p&&At(p,!0);const q=y&&m.type!=="foreignObject";if(w?Je(u.dynamicChildren,w,k,p,_,q,E):S||Ae(u,m,k,null,p,_,q,E,!1),O>0){if(O&16)Te(k,m,I,$,p,_,y);else if(O&2&&I.class!==$.class&&i(k,"class",null,$.class,y),O&4&&i(k,"style",I.style,$.style,y),O&8){const Z=m.dynamicProps;for(let ee=0;ee<Z.length;ee++){const ie=Z[ee],Ne=I[ie],zt=$[ie];(zt!==Ne||ie==="value")&&i(k,ie,Ne,zt,y,u.children,p,_,P)}}O&1&&u.children!==m.children&&f(k,m.children)}else!S&&w==null&&Te(k,m,I,$,p,_,y);((D=$.onVnodeUpdated)||j)&&ke(()=>{D&&Ke(D,p,m,u),j&&Et(m,u,p,"updated")},_)},Je=(u,m,p,_,y,E,S)=>{for(let k=0;k<m.length;k++){const O=u[k],w=m[k],j=O.el&&(O.type===Ee||!un(O,w)||O.shapeFlag&70)?d(O.el):p;C(O,w,j,null,_,y,E,S,!0)}},Te=(u,m,p,_,y,E,S)=>{if(p!==_){for(const k in _){if(nr(k))continue;const O=_[k],w=p[k];O!==w&&k!=="value"&&i(u,k,w,O,S,m.children,y,E,P)}if(p!==ae)for(const k in p)!nr(k)&&!(k in _)&&i(u,k,p[k],null,S,m.children,y,E,P);"value"in _&&i(u,"value",p.value,_.value)}},Ft=(u,m,p,_,y,E,S,k,O)=>{const w=m.el=u?u.el:s(""),j=m.anchor=u?u.anchor:s("");let{patchFlag:I,dynamicChildren:$,slotScopeIds:D}=m;D&&(k=k?k.concat(D):D),u==null?(r(w,p,_),r(j,p,_),de(m.children,p,j,y,E,S,k,O)):I>0&&I&64&&$&&u.dynamicChildren?(Je(u.dynamicChildren,$,p,y,E,S,k),(m.key!=null||y&&m===y.subTree)&&_s(u,m,!0)):Ae(u,m,p,j,y,E,S,k,O)},Lt=(u,m,p,_,y,E,S,k,O)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?y.ctx.activate(m,p,_,S,O):jt(m,p,_,y,E,S,O):me(u,m,O)},jt=(u,m,p,_,y,E,S)=>{const k=u.component=ic(u,_,y);if(ls(u)&&(k.ctx.renderer=ne),oc(k),k.asyncDep){if(y&&y.registerDep(k,te),!u.el){const O=k.subTree=re(Tt);x(null,O,m,p)}return}te(k,u,m,p,y,E,S)},me=(u,m,p)=>{const _=m.component=u.component;if(gf(u,m,p))if(_.asyncDep&&!_.asyncResolved){J(_,m,p);return}else _.next=m,cf(_.update),_.update();else m.el=u.el,_.vnode=m},te=(u,m,p,_,y,E,S)=>{const k=()=>{if(u.isMounted){let{next:j,bu:I,u:$,parent:D,vnode:q}=u,Z=j,ee;At(u,!1),j?(j.el=q.el,J(u,j,S)):j=q,I&&jr(I),(ee=j.props&&j.props.onVnodeBeforeUpdate)&&Ke(ee,D,j,q),At(u,!0);const ie=$r(u),Ne=u.subTree;u.subTree=ie,C(Ne,ie,d(Ne.el),L(Ne),u,y,E),j.el=ie.el,Z===null&&vf(u,ie.el),$&&ke($,y),(ee=j.props&&j.props.onVnodeUpdated)&&ke(()=>Ke(ee,D,j,q),y)}else{let j;const{el:I,props:$}=m,{bm:D,m:q,parent:Z}=u,ee=ar(m);if(At(u,!1),D&&jr(D),!ee&&(j=$&&$.onVnodeBeforeMount)&&Ke(j,Z,m),At(u,!0),I&&B){const ie=()=>{u.subTree=$r(u),B(I,u.subTree,u,y,null)};ee?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ie()):ie()}else{const ie=u.subTree=$r(u);C(null,ie,p,_,u,y,E),m.el=ie.el}if(q&&ke(q,y),!ee&&(j=$&&$.onVnodeMounted)){const ie=m;ke(()=>Ke(j,Z,ie),y)}(m.shapeFlag&256||Z&&ar(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&ke(u.a,y),u.isMounted=!0,m=p=_=null}},O=u.effect=new Na(k,()=>Zo(w),u.scope),w=u.update=()=>O.run();w.id=u.uid,At(u,!0),w()},J=(u,m,p)=>{m.component=u;const _=u.vnode.props;u.vnode=m,u.next=null,Hf(u,m.props,_,p),Yf(u,m.children,p),on(),Or(void 0,u.update),sn()},Ae=(u,m,p,_,y,E,S,k,O=!1)=>{const w=u&&u.children,j=u?u.shapeFlag:0,I=m.children,{patchFlag:$,shapeFlag:D}=m;if($>0){if($&128){Ze(w,I,p,_,y,E,S,k,O);return}else if($&256){$t(w,I,p,_,y,E,S,k,O);return}}D&8?(j&16&&P(w,y,E),I!==w&&f(p,I)):j&16?D&16?Ze(w,I,p,_,y,E,S,k,O):P(w,y,E,!0):(j&8&&f(p,""),D&16&&de(I,p,_,y,E,S,k,O))},$t=(u,m,p,_,y,E,S,k,O)=>{u=u||Vt,m=m||Vt;const w=u.length,j=m.length,I=Math.min(w,j);let $;for($=0;$<I;$++){const D=m[$]=O?ht(m[$]):Ve(m[$]);C(u[$],D,p,null,y,E,S,k,O)}w>j?P(u,y,E,!0,!1,I):de(m,p,_,y,E,S,k,O,I)},Ze=(u,m,p,_,y,E,S,k,O)=>{let w=0;const j=m.length;let I=u.length-1,$=j-1;for(;w<=I&&w<=$;){const D=u[w],q=m[w]=O?ht(m[w]):Ve(m[w]);if(un(D,q))C(D,q,p,null,y,E,S,k,O);else break;w++}for(;w<=I&&w<=$;){const D=u[I],q=m[$]=O?ht(m[$]):Ve(m[$]);if(un(D,q))C(D,q,p,null,y,E,S,k,O);else break;I--,$--}if(w>I){if(w<=$){const D=$+1,q=D<j?m[D].el:_;for(;w<=$;)C(null,m[w]=O?ht(m[w]):Ve(m[w]),p,q,y,E,S,k,O),w++}}else if(w>$)for(;w<=I;)Ie(u[w],y,E,!0),w++;else{const D=w,q=w,Z=new Map;for(w=q;w<=$;w++){const Oe=m[w]=O?ht(m[w]):Ve(m[w]);Oe.key!=null&&Z.set(Oe.key,w)}let ee,ie=0;const Ne=$-q+1;let zt=!1,li=0;const cn=new Array(Ne);for(w=0;w<Ne;w++)cn[w]=0;for(w=D;w<=I;w++){const Oe=u[w];if(ie>=Ne){Ie(Oe,y,E,!0);continue}let Ye;if(Oe.key!=null)Ye=Z.get(Oe.key);else for(ee=q;ee<=$;ee++)if(cn[ee-q]===0&&un(Oe,m[ee])){Ye=ee;break}Ye===void 0?Ie(Oe,y,E,!0):(cn[Ye-q]=w+1,Ye>=li?li=Ye:zt=!0,C(Oe,m[Ye],p,null,y,E,S,k,O),ie++)}const fi=zt?Gf(cn):Vt;for(ee=fi.length-1,w=Ne-1;w>=0;w--){const Oe=q+w,Ye=m[Oe],ci=Oe+1<j?m[Oe+1].el:_;cn[w]===0?C(null,Ye,p,ci,y,E,S,k,O):zt&&(ee<0||w!==fi[ee]?We(Ye,p,ci,2):ee--)}}},We=(u,m,p,_,y=null)=>{const{el:E,type:S,transition:k,children:O,shapeFlag:w}=u;if(w&6){We(u.component.subTree,m,p,_);return}if(w&128){u.suspense.move(m,p,_);return}if(w&64){S.move(u,m,p,ne);return}if(S===Ee){r(E,m,p);for(let I=0;I<O.length;I++)We(O[I],m,p,_);r(u.anchor,m,p);return}if(S===zr){z(u,m,p);return}if(_!==2&&w&1&&k)if(_===0)k.beforeEnter(E),r(E,m,p),ke(()=>k.enter(E),y);else{const{leave:I,delayLeave:$,afterLeave:D}=k,q=()=>r(E,m,p),Z=()=>{I(E,()=>{q(),D&&D()})};$?$(E,q,Z):Z()}else r(E,m,p)},Ie=(u,m,p,_=!1,y=!1)=>{const{type:E,props:S,ref:k,children:O,dynamicChildren:w,shapeFlag:j,patchFlag:I,dirs:$}=u;if(k!=null&&oa(k,null,p,u,!0),j&256){m.ctx.deactivate(u);return}const D=j&1&&$,q=!ar(u);let Z;if(q&&(Z=S&&S.onVnodeBeforeUnmount)&&Ke(Z,m,u),j&6)N(u.component,p,_);else{if(j&128){u.suspense.unmount(p,_);return}D&&Et(u,null,m,"beforeUnmount"),j&64?u.type.remove(u,m,p,y,ne,_):w&&(E!==Ee||I>0&&I&64)?P(w,m,p,!1,!0):(E===Ee&&I&384||!y&&j&16)&&P(O,m,p),_&&fn(u)}(q&&(Z=S&&S.onVnodeUnmounted)||D)&&ke(()=>{Z&&Ke(Z,m,u),D&&Et(u,null,m,"unmounted")},p)},fn=u=>{const{type:m,el:p,anchor:_,transition:y}=u;if(m===Ee){b(p,_);return}if(m===zr){Y(u);return}const E=()=>{a(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:k}=y,O=()=>S(p,E);k?k(u.el,E,O):O()}else E()},b=(u,m)=>{let p;for(;u!==m;)p=h(u),a(u),u=p;a(m)},N=(u,m,p)=>{const{bum:_,scope:y,update:E,subTree:S,um:k}=u;_&&jr(_),y.stop(),E&&(E.active=!1,Ie(S,u,m,p)),k&&ke(k,m),ke(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},P=(u,m,p,_=!1,y=!1,E=0)=>{for(let S=E;S<u.length;S++)Ie(u[S],m,p,_,y)},L=u=>u.shapeFlag&6?L(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),G=(u,m,p)=>{u==null?m._vnode&&Ie(m._vnode,null,null,!0):C(m._vnode||null,u,m,null,null,null,p),ns(),m._vnode=u},ne={p:C,um:Ie,m:We,r:fn,mt:jt,mc:de,pc:Ae,pbc:Je,n:L,o:e};let W,B;return t&&([W,B]=t(ne)),{render:G,hydrate:W,createApp:qf(G,W)}}function At({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function _s(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ht(a[i]),s.el=o.el),n||_s(o,s))}}function Gf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Qf=e=>e.__isTeleport,Ee=Symbol(void 0),Ba=Symbol(void 0),Tt=Symbol(void 0),zr=Symbol(void 0),yn=[];let Le=null;function be(e=!1){yn.push(Le=e?null:[])}function Jf(){yn.pop(),Le=yn[yn.length-1]||null}let Rn=1;function Ci(e){Rn+=e}function xs(e){return e.dynamicChildren=Rn>0?Le||Vt:null,Jf(),Rn>0&&Le&&Le.push(e),e}function Pe(e,t,n,r,a,i){return xs(V(e,t,n,r,a,i,!0))}function Ha(e,t,n,r,a){return xs(re(e,t,n,r,a,!0))}function sa(e){return e?e.__v_isVNode===!0:!1}function un(e,t){return e.type===t.type&&e.key===t.key}const Sr="__vInternal",ws=({key:e})=>e!=null?e:null,ir=({ref:e,ref_key:t,ref_for:n})=>e!=null?ge(e)||ye(e)||U(e)?{i:Xe,r:e,k:t,f:!!n}:e:null;function V(e,t=null,n=null,r=0,a=null,i=e===Ee?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ws(t),ref:t&&ir(t),scopeId:is,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Ua(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),Rn>0&&!o&&Le&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Le.push(l),l}const re=Zf;function Zf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Nf)&&(e=Tt),sa(e)){const s=Zt(e,t,!0);return n&&Ua(s,n),Rn>0&&!i&&Le&&(s.shapeFlag&6?Le[Le.indexOf(e)]=s:Le.push(s)),s.patchFlag|=-2,s}if(uc(e)&&(e=e.__vccOpts),t){t=ec(t);let{class:s,style:l}=t;s&&!ge(s)&&(t.class=yr(s)),he(l)&&(Yo(l)&&!H(l)&&(l=xe({},l)),t.style=Pa(l))}const o=ge(e)?1:bf(e)?128:Qf(e)?64:he(e)?4:U(e)?2:0;return V(e,t,n,r,a,o,i,!0)}function ec(e){return e?Yo(e)||Sr in e?xe({},e):e:null}function Zt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?nc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ws(s),ref:t&&t.ref?n&&a?H(a)?a.concat(ir(t)):[a,ir(t)]:ir(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zt(e.ssContent),ssFallback:e.ssFallback&&Zt(e.ssFallback),el:e.el,anchor:e.anchor}}function lt(e=" ",t=0){return re(Ba,null,e,t)}function tc(e="",t=!1){return t?(be(),Ha(Tt,null,e)):re(Tt,null,e)}function Ve(e){return e==null||typeof e=="boolean"?re(Tt):H(e)?re(Ee,null,e.slice()):typeof e=="object"?ht(e):re(Ba,null,String(e))}function ht(e){return e.el===null||e.memo?e:Zt(e)}function Ua(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ua(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Sr in t)?t._ctx=Xe:a===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Xe},n=32):(t=String(t),r&64?(n=16,t=[lt(t)]):n=8);e.children=t,e.shapeFlag|=n}function nc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=yr([t.class,r.class]));else if(a==="style")t.style=Pa([t.style,r.style]);else if(_r(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ke(e,t,n,r=null){ze(e,t,7,[n,r])}const rc=ys();let ac=0;function ic(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||rc,i={uid:ac++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ps(r,a),emitsOptions:as(r,a),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=mf.bind(null,i),e.ce&&e.ce(i),i}let ve=null;const en=e=>{ve=e,e.scope.on()},It=()=>{ve&&ve.scope.off(),ve=null};function ks(e){return e.vnode.shapeFlag&4}let In=!1;function oc(e,t=!1){In=t;const{props:n,children:r}=e.vnode,a=ks(e);Bf(e,n,a,t),Wf(e,r);const i=a?sc(e,t):void 0;return In=!1,i}function sc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ko(new Proxy(e.ctx,Ff));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?fc(e):null;en(e),on();const i=bt(r,e,0,[e.props,a]);if(sn(),It(),Io(i)){if(i.then(It,It),t)return i.then(o=>{Si(e,o,t)}).catch(o=>{Ar(o,e,0)});e.asyncDep=i}else Si(e,i,t)}else Es(e,t)}function Si(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=Go(t)),Es(e,n)}let Ri;function Es(e,t,n){const r=e.type;if(!e.render){if(!t&&Ri&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=xe(xe({isCustomElement:i,delimiters:s},o),l);r.render=Ri(a,c)}}e.render=r.render||$e}en(e),on(),Lf(e),sn(),It()}function lc(e){return new Proxy(e.attrs,{get(t,n){return Se(e,"get","$attrs"),t[n]}})}function fc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=lc(e))},slots:e.slots,emit:e.emit,expose:t}}function Wa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Go(Ko(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ur)return ur[n](e)}}))}function cc(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function uc(e){return U(e)&&"__vccOpts"in e}const fe=(e,t)=>sf(e,t,In);function Rr(e,t,n){const r=arguments.length;return r===2?he(t)&&!H(t)?sa(t)?re(e,null,[t]):re(e,t):re(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&sa(n)&&(n=[n]),re(e,t,n))}const dc="3.2.37",mc="http://www.w3.org/2000/svg",Pt=typeof document!="undefined"?document:null,Ii=Pt&&Pt.createElement("template"),hc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Pt.createElementNS(mc,e):Pt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Pt.createTextNode(e),createComment:e=>Pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ii.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ii.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function pc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function gc(e,t,n){const r=e.style,a=ge(n);if(n&&!a){for(const i in n)la(r,i,n[i]);if(t&&!ge(t))for(const i in t)n[i]==null&&la(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ti=/\s*!important$/;function la(e,t,n){if(H(n))n.forEach(r=>la(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=vc(e,t);Ti.test(n)?e.setProperty(an(r),n.replace(Ti,""),"important"):e[r]=n}}const Ni=["Webkit","Moz","ms"],Dr={};function vc(e,t){const n=Dr[t];if(n)return n;let r=Qe(t);if(r!=="filter"&&r in e)return Dr[t]=r;r=kr(r);for(let a=0;a<Ni.length;a++){const i=Ni[a]+r;if(i in e)return Dr[t]=i}return t}const Mi="http://www.w3.org/1999/xlink";function bc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Mi,t.slice(6,t.length)):e.setAttributeNS(Mi,t,n);else{const i=gl(t);n==null||i&&!Co(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function yc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Co(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[As,_c]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let fa=0;const xc=Promise.resolve(),wc=()=>{fa=0},kc=()=>fa||(xc.then(wc),fa=As());function Ec(e,t,n,r){e.addEventListener(t,n,r)}function Ac(e,t,n,r){e.removeEventListener(t,n,r)}function Oc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Pc(t);if(r){const c=i[t]=Cc(r,a);Ec(e,s,c,l)}else o&&(Ac(e,s,o,l),i[t]=void 0)}}const Fi=/(?:Once|Passive|Capture)$/;function Pc(e){let t;if(Fi.test(e)){t={};let n;for(;n=e.match(Fi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[an(e.slice(2)),t]}function Cc(e,t){const n=r=>{const a=r.timeStamp||As();(_c||a>=n.attached-1)&&ze(Sc(r,n.value),t,5,[r])};return n.value=e,n.attached=kc(),n}function Sc(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Li=/^on[a-z]/,Rc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?pc(e,r,a):t==="style"?gc(e,n,r):_r(t)?Ca(t)||Oc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ic(e,t,r,a))?yc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),bc(e,t,r,a))};function Ic(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Li.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Li.test(t)&&ge(n)?!1:t in e}const Tc=xe({patchProp:Rc},hc);let ji;function Nc(){return ji||(ji=Vf(Tc))}const Mc=(...e)=>{const t=Nc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Fc(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Fc(e){return ge(e)?document.querySelector(e):e}var Lc="/assets/omo_pen.5527f84a.png";const jc={class:"w-full bg-white bg-white"},$c={class:"container mx-auto py-5 px-3 flex justify-between items-center"},zc=V("div",{class:"flex items-center gap-2"},[V("img",{class:"w-8",src:Lc,alt:"logo"}),V("span",{class:"text-2xl font-bold text-indigo-900"},"omomuro.dev")],-1),Dc={class:"hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase"},Bc={class:"hover:text-gray-500"},Hc=lt("home"),Uc={class:"hover:text-gray-500"},Wc=lt(" labo "),Yc={class:"hover:text-gray-500"},Kc=lt("about"),qc=V("svg",{class:"hidden md:block w-5 cursor-pointer",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[V("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})],-1),Vc=V("div",{class:"w-6 h-0.5 bg-black"},null,-1),Xc=V("div",{class:"w-6 h-0.5 bg-black"},null,-1),Gc=V("div",{class:"w-6 h-0.5 bg-black"},null,-1),Qc=[Vc,Xc,Gc],Jc={class:"border-solid border border-gray-300"},Zc=lt("home"),eu={class:"border-solid border-gray-300"},tu=lt("labo "),nu=lt("about"),ru=Be({__name:"NavBar",setup(e){const t=Qt(!1);return(n,r)=>{const a=Sn("router-link"),i=Sn("font-awesome-icon");return be(),Pe("nav",jc,[V("div",$c,[re(a,{to:"/"},{default:tt(()=>[zc]),_:1}),V("ul",Dc,[V("li",Bc,[re(a,{to:"/"},{default:tt(()=>[Hc]),_:1})]),V("li",Uc,[re(a,{to:"/labo"},{default:tt(()=>[re(i,{icon:"fa-solid fa-flask",class:"hover:rotate-45 transition ease-in-out"}),Wc]),_:1})]),V("li",Yc,[re(a,{to:"/about"},{default:tt(()=>[Kc]),_:1})])]),qc,V("div",{class:"space-y-1 md:hidden cursor-pointer z-20",onClick:r[0]||(r[0]=o=>t.value=!t.value)},Qc),V("ul",{class:yr([t.value?"block":"hidden","list-none md:hidden bg-white absolute left-0 top-0 w-full pt-12 rounded-b-3xl text-center"])},[V("li",Jc,[re(a,{to:"/",class:"block py-2",onClick:r[1]||(r[1]=o=>t.value=!1)},{default:tt(()=>[Zc]),_:1})]),V("li",eu,[re(a,{to:"/labo",class:"block py-2",onClick:r[2]||(r[2]=o=>t.value=!1)},{default:tt(()=>[re(i,{icon:"fa-solid fa-flask"}),tu]),_:1})]),V("li",{class:"border-solid border border-gray-300",onClick:r[3]||(r[3]=o=>t.value=!1)},[re(a,{to:"/about",class:"block py-2"},{default:tt(()=>[nu]),_:1})])],2)])])}}}),au={class:"container mx-auto px-4 py-2 bg-gray-50"},iu=Be({__name:"App",setup(e){return(t,n)=>{const r=Sn("router-view");return be(),Pe(Ee,null,[re(ru),V("div",au,[re(r)])],64)}}});/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ut=typeof window!="undefined";function ou(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Br(e,t){const n={};for(const r in t){const a=t[r];n[r]=De(a)?a.map(e):e(a)}return n}const _n=()=>{},De=Array.isArray,su=/\/$/,lu=e=>e.replace(su,"");function Hr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=du(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function fu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function $i(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function cu(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&tn(t.matched[r],n.matched[a])&&Os(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function tn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Os(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!uu(e[n],t[n]))return!1;return!0}function uu(e,t){return De(e)?zi(e,t):De(t)?zi(t,e):e===t}function zi(e,t){return De(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function du(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Tn;(function(e){e.pop="pop",e.push="push"})(Tn||(Tn={}));var xn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(xn||(xn={}));function mu(e){if(!e)if(Ut){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lu(e)}const hu=/^[^#]+#/;function pu(e,t){return e.replace(hu,"#")+t}function gu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ir=()=>({left:window.pageXOffset,top:window.pageYOffset});function vu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=gu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Di(e,t){return(history.state?history.state.position-t:-1)+e}const ca=new Map;function bu(e,t){ca.set(e,t)}function yu(e){const t=ca.get(e);return ca.delete(e),t}let _u=()=>location.protocol+"//"+location.host;function Ps(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),$i(l,"")}return $i(n,e)+r+a}function xu(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const g=Ps(e,location),A=n.value,F=t.value;let C=0;if(h){if(n.value=g,t.value=h,o&&o===A){o=null;return}C=F?h.position-F.position:0}else r(g);a.forEach(v=>{v(n.value,A,{delta:C,type:Tn.pop,direction:C?C>0?xn.forward:xn.back:xn.unknown})})};function l(){o=n.value}function c(h){a.push(h);const g=()=>{const A=a.indexOf(h);A>-1&&a.splice(A,1)};return i.push(g),g}function f(){const{history:h}=window;!h.state||h.replaceState(Q({},h.state,{scroll:Ir()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function Bi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Ir():null}}function wu(e){const{history:t,location:n}=window,r={value:Ps(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:_u()+e+l;try{t[f?"replaceState":"pushState"](c,"",h),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](h)}}function o(l,c){const f=Q({},t.state,Bi(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=Q({},a.value,t.state,{forward:l,scroll:Ir()});i(f.current,f,!0);const d=Q({},Bi(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function ku(e){e=mu(e);const t=wu(e),n=xu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=Q({location:"",base:e,go:r,createHref:pu.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Eu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),ku(e)}function Au(e){return typeof e=="string"||e&&typeof e=="object"}function Cs(e){return typeof e=="string"||typeof e=="symbol"}const ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ss=Symbol("");var Hi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Hi||(Hi={}));function nn(e,t){return Q(new Error,{type:e,[Ss]:!0},t)}function et(e,t){return e instanceof Error&&Ss in e&&(t==null||!!(e.type&t))}const Ui="[^/]+?",Ou={sensitive:!1,strict:!1,start:!0,end:!0},Pu=/[.+*?^${}()[\]/\\]/g;function Cu(e,t){const n=Q({},Ou,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const h=c[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(Pu,"\\$&"),g+=40;else if(h.type===1){const{value:A,repeatable:F,optional:C,regexp:v}=h;i.push({name:A,repeatable:F,optional:C});const x=v||Ui;if(x!==Ui){g+=10;try{new RegExp(`(${x})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${A}" (${x}): `+z.message)}}let M=F?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(M=C&&c.length<2?`(?:/${M})`:"/"+M),C&&(M+="?"),a+=M,g+=20,C&&(g+=-8),F&&(g+=-20),x===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let h=1;h<f.length;h++){const g=f[h]||"",A=i[h-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of h)if(g.type===0)f+=g.value;else if(g.type===1){const{value:A,repeatable:F,optional:C}=g,v=A in c?c[A]:"";if(De(v)&&!F)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const x=De(v)?v.join("/"):v;if(!x)if(C)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Su(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ru(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Su(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Wi(r))return 1;if(Wi(a))return-1}return a.length-r.length}function Wi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Iu={type:0,value:""},Tu=/[a-zA-Z0-9_]/;function Nu(e){if(!e)return[[]];if(e==="/")return[[Iu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Tu.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function Mu(e,t,n){const r=Cu(Nu(e.path),n),a=Q(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Fu(e,t){const n=[],r=new Map;t=qi({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,h){const g=!h,A=Lu(f);A.aliasOf=h&&h.record;const F=qi(t,f),C=[A];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of M)C.push(Q({},A,{components:h?h.record.components:A.components,path:z,aliasOf:h?h.record:A}))}let v,x;for(const M of C){const{path:z}=M;if(d&&z[0]!=="/"){const Y=d.record.path,le=Y[Y.length-1]==="/"?"":"/";M.path=d.record.path+(z&&le+z)}if(v=Mu(M,d,F),h?h.alias.push(v):(x=x||v,x!==v&&x.alias.push(v),g&&f.name&&!Ki(v)&&o(f.name)),A.children){const Y=A.children;for(let le=0;le<Y.length;le++)i(Y[le],v,h&&h.children[le])}h=h||v,l(v)}return x?()=>{o(x)}:_n}function o(f){if(Cs(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&Ru(f,n[d])>=0&&(f.record.path!==n[d].record.path||!Rs(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!Ki(f)&&r.set(f.record.name,f)}function c(f,d){let h,g={},A,F;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw nn(1,{location:f});F=h.record.name,g=Q(Yi(d.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),f.params&&Yi(f.params,h.keys.map(x=>x.name))),A=h.stringify(g)}else if("path"in f)A=f.path,h=n.find(x=>x.re.test(A)),h&&(g=h.parse(A),F=h.record.name);else{if(h=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!h)throw nn(1,{location:f,currentLocation:d});F=h.record.name,g=Q({},d.params,f.params),A=h.stringify(g)}const C=[];let v=h;for(;v;)C.unshift(v.record),v=v.parent;return{name:F,path:A,params:g,matched:C,meta:$u(C)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Yi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Lu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ju(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ju(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ki(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $u(e){return e.reduce((t,n)=>Q(t,n.meta),{})}function qi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Rs(e,t){return t.children.some(n=>n===e||Rs(e,n))}const Is=/#/g,zu=/&/g,Du=/\//g,Bu=/=/g,Hu=/\?/g,Ts=/\+/g,Uu=/%5B/g,Wu=/%5D/g,Ns=/%5E/g,Yu=/%60/g,Ms=/%7B/g,Ku=/%7C/g,Fs=/%7D/g,qu=/%20/g;function Ya(e){return encodeURI(""+e).replace(Ku,"|").replace(Uu,"[").replace(Wu,"]")}function Vu(e){return Ya(e).replace(Ms,"{").replace(Fs,"}").replace(Ns,"^")}function ua(e){return Ya(e).replace(Ts,"%2B").replace(qu,"+").replace(Is,"%23").replace(zu,"%26").replace(Yu,"`").replace(Ms,"{").replace(Fs,"}").replace(Ns,"^")}function Xu(e){return ua(e).replace(Bu,"%3D")}function Gu(e){return Ya(e).replace(Is,"%23").replace(Hu,"%3F")}function Qu(e){return e==null?"":Gu(e).replace(Du,"%2F")}function mr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ju(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ts," "),o=i.indexOf("="),s=mr(o<0?i:i.slice(0,o)),l=o<0?null:mr(i.slice(o+1));if(s in t){let c=t[s];De(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function Vi(e){let t="";for(let n in e){const r=e[n];if(n=Xu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&ua(i)):[r&&ua(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Zu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=De(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const ed=Symbol(""),Xi=Symbol(""),Ka=Symbol(""),Ls=Symbol(""),da=Symbol("");function dn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function pt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(nn(4,{from:n,to:t})):d instanceof Error?s(d):Au(d)?s(nn(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function Ur(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(td(s)){const c=(s.__vccOpts||s)[t];c&&a.push(pt(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=ou(c)?c.default:c;i.components[o]=f;const h=(f.__vccOpts||f)[t];return h&&pt(h,n,r,i,o)()}))}}return a}function td(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Gi(e){const t=yt(Ka),n=yt(Ls),r=fe(()=>t.resolve(vt(e.to))),a=fe(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const h=d.findIndex(tn.bind(null,f));if(h>-1)return h;const g=Qi(l[c-2]);return c>1&&Qi(f)===g&&d[d.length-1].path!==g?d.findIndex(tn.bind(null,l[c-2])):h}),i=fe(()=>a.value>-1&&id(n.params,r.value.params)),o=fe(()=>a.value>-1&&a.value===n.matched.length-1&&Os(n.params,r.value.params));function s(l={}){return ad(l)?t[vt(e.replace)?"replace":"push"](vt(e.to)).catch(_n):Promise.resolve()}return{route:r,href:fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const nd=Be({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gi,setup(e,{slots:t}){const n=$n(Gi(e)),{options:r}=yt(Ka),a=fe(()=>({[Ji(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ji(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Rr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),rd=nd;function ad(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function id(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!De(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Qi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ji=(e,t,n)=>e!=null?e:t!=null?t:n,od=Be({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=yt(da),a=fe(()=>e.route||r.value),i=yt(Xi,0),o=fe(()=>{let c=vt(i);const{matched:f}=a.value;let d;for(;(d=f[c])&&!d.components;)c++;return c}),s=fe(()=>a.value.matched[o.value]);rr(Xi,fe(()=>o.value+1)),rr(ed,s),rr(da,a);const l=Qt();return bn(()=>[l.value,s.value,e.name],([c,f,d],[h,g,A])=>{f&&(f.instances[d]=c,g&&g!==f&&c&&c===h&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),c&&f&&(!g||!tn(f,g)||!h)&&(f.enterCallbacks[d]||[]).forEach(F=>F(c))},{flush:"post"}),()=>{const c=a.value,f=e.name,d=s.value,h=d&&d.components[f];if(!h)return Zi(n.default,{Component:h,route:c});const g=d.props[f],A=g?g===!0?c.params:typeof g=="function"?g(c):g:null,C=Rr(h,Q({},A,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return Zi(n.default,{Component:C,route:c})||C}}});function Zi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const sd=od;function ld(e){const t=Fu(e.routes,e),n=e.parseQuery||Ju,r=e.stringifyQuery||Vi,a=e.history,i=dn(),o=dn(),s=dn(),l=nf(ut);let c=ut;Ut&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Br.bind(null,b=>""+b),d=Br.bind(null,Qu),h=Br.bind(null,mr);function g(b,N){let P,L;return Cs(b)?(P=t.getRecordMatcher(b),L=N):L=b,t.addRoute(L,P)}function A(b){const N=t.getRecordMatcher(b);N&&t.removeRoute(N)}function F(){return t.getRoutes().map(b=>b.record)}function C(b){return!!t.getRecordMatcher(b)}function v(b,N){if(N=Q({},N||l.value),typeof b=="string"){const B=Hr(n,b,N.path),u=t.resolve({path:B.path},N),m=a.createHref(B.fullPath);return Q(B,u,{params:h(u.params),hash:mr(B.hash),redirectedFrom:void 0,href:m})}let P;if("path"in b)P=Q({},b,{path:Hr(n,b.path,N.path).path});else{const B=Q({},b.params);for(const u in B)B[u]==null&&delete B[u];P=Q({},b,{params:d(b.params)}),N.params=d(N.params)}const L=t.resolve(P,N),G=b.hash||"";L.params=f(h(L.params));const ne=fu(r,Q({},b,{hash:Vu(G),path:L.path})),W=a.createHref(ne);return Q({fullPath:ne,hash:G,query:r===Vi?Zu(b.query):b.query||{}},L,{redirectedFrom:void 0,href:W})}function x(b){return typeof b=="string"?Hr(n,b,l.value.path):Q({},b)}function M(b,N){if(c!==b)return nn(8,{from:N,to:b})}function z(b){return ue(b)}function Y(b){return z(Q(x(b),{replace:!0}))}function le(b){const N=b.matched[b.matched.length-1];if(N&&N.redirect){const{redirect:P}=N;let L=typeof P=="function"?P(b):P;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=x(L):{path:L},L.params={}),Q({query:b.query,hash:b.hash,params:"path"in L?{}:b.params},L)}}function ue(b,N){const P=c=v(b),L=l.value,G=b.state,ne=b.force,W=b.replace===!0,B=le(P);if(B)return ue(Q(x(B),{state:typeof B=="object"?Q({},G,B.state):G,force:ne,replace:W}),N||P);const u=P;u.redirectedFrom=N;let m;return!ne&&cu(r,L,P)&&(m=nn(16,{to:u,from:L}),$t(L,L,!0,!1)),(m?Promise.resolve(m):de(u,L)).catch(p=>et(p)?et(p,2)?p:Ae(p):te(p,u,L)).then(p=>{if(p){if(et(p,2))return ue(Q({replace:W},x(p.to),{state:typeof p.to=="object"?Q({},G,p.to.state):G,force:ne}),N||u)}else p=Je(u,L,!0,W,G);return Ue(u,L,p),p})}function He(b,N){const P=M(b,N);return P?Promise.reject(P):Promise.resolve()}function de(b,N){let P;const[L,G,ne]=fd(b,N);P=Ur(L.reverse(),"beforeRouteLeave",b,N);for(const B of L)B.leaveGuards.forEach(u=>{P.push(pt(u,b,N))});const W=He.bind(null,b,N);return P.push(W),Dt(P).then(()=>{P=[];for(const B of i.list())P.push(pt(B,b,N));return P.push(W),Dt(P)}).then(()=>{P=Ur(G,"beforeRouteUpdate",b,N);for(const B of G)B.updateGuards.forEach(u=>{P.push(pt(u,b,N))});return P.push(W),Dt(P)}).then(()=>{P=[];for(const B of b.matched)if(B.beforeEnter&&!N.matched.includes(B))if(De(B.beforeEnter))for(const u of B.beforeEnter)P.push(pt(u,b,N));else P.push(pt(B.beforeEnter,b,N));return P.push(W),Dt(P)}).then(()=>(b.matched.forEach(B=>B.enterCallbacks={}),P=Ur(ne,"beforeRouteEnter",b,N),P.push(W),Dt(P))).then(()=>{P=[];for(const B of o.list())P.push(pt(B,b,N));return P.push(W),Dt(P)}).catch(B=>et(B,8)?B:Promise.reject(B))}function Ue(b,N,P){for(const L of s.list())L(b,N,P)}function Je(b,N,P,L,G){const ne=M(b,N);if(ne)return ne;const W=N===ut,B=Ut?history.state:{};P&&(L||W?a.replace(b.fullPath,Q({scroll:W&&B&&B.scroll},G)):a.push(b.fullPath,G)),l.value=b,$t(b,N,P,W),Ae()}let Te;function Ft(){Te||(Te=a.listen((b,N,P)=>{if(!fn.listening)return;const L=v(b),G=le(L);if(G){ue(Q(G,{replace:!0}),L).catch(_n);return}c=L;const ne=l.value;Ut&&bu(Di(ne.fullPath,P.delta),Ir()),de(L,ne).catch(W=>et(W,12)?W:et(W,2)?(ue(W.to,L).then(B=>{et(B,20)&&!P.delta&&P.type===Tn.pop&&a.go(-1,!1)}).catch(_n),Promise.reject()):(P.delta&&a.go(-P.delta,!1),te(W,L,ne))).then(W=>{W=W||Je(L,ne,!1),W&&(P.delta&&!et(W,8)?a.go(-P.delta,!1):P.type===Tn.pop&&et(W,20)&&a.go(-1,!1)),Ue(L,ne,W)}).catch(_n)}))}let Lt=dn(),jt=dn(),me;function te(b,N,P){Ae(b);const L=jt.list();return L.length?L.forEach(G=>G(b,N,P)):console.error(b),Promise.reject(b)}function J(){return me&&l.value!==ut?Promise.resolve():new Promise((b,N)=>{Lt.add([b,N])})}function Ae(b){return me||(me=!b,Ft(),Lt.list().forEach(([N,P])=>b?P(b):N()),Lt.reset()),b}function $t(b,N,P,L){const{scrollBehavior:G}=e;if(!Ut||!G)return Promise.resolve();const ne=!P&&yu(Di(b.fullPath,0))||(L||!P)&&history.state&&history.state.scroll||null;return Jo().then(()=>G(b,N,ne)).then(W=>W&&vu(W)).catch(W=>te(W,b,N))}const Ze=b=>a.go(b);let We;const Ie=new Set,fn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:C,getRoutes:F,resolve:v,options:e,push:z,replace:Y,go:Ze,back:()=>Ze(-1),forward:()=>Ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:jt.add,isReady:J,install(b){const N=this;b.component("RouterLink",rd),b.component("RouterView",sd),b.config.globalProperties.$router=N,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>vt(l)}),Ut&&!We&&l.value===ut&&(We=!0,z(a.location).catch(G=>{}));const P={};for(const G in ut)P[G]=fe(()=>l.value[G]);b.provide(Ka,N),b.provide(Ls,$n(P)),b.provide(da,l);const L=b.unmount;Ie.add(b),b.unmount=function(){Ie.delete(b),Ie.size<1&&(c=ut,Te&&Te(),Te=null,l.value=ut,We=!1,me=!1),L()}}};return fn}function Dt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function fd(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>tn(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>tn(c,l))||a.push(l))}return[n,r,a]}var js=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const cd={};function ud(e,t){return be(),Pe("h1",null,"Home")}var dd=js(cd,[["render",ud]]);const md={};function hd(e,t){return be(),Pe("h1",null,"about")}var pd=js(md,[["render",hd]]);const gd={class:"rounded-md bg-white shadow-lg shadow-indigo-500/40 p-3 hover:scale-125 transition ease-in-out"},vd={class:"rounded-md h-32 bg-gradient-to-r from-cyan-500 to-blue-500 text-clip overflow-hidden tracking-widest text-center"},bd={class:"text-2xl"},yd=Be({__name:"LaboLink",props:{title:null,id:null,emoji:null},setup(e){return(t,n)=>{const r=Sn("router-link");return be(),Ha(r,{to:"/labo/"+e.id},{default:tt(()=>[V("div",gd,[V("div",vd,[V("span",bd,Wt(e.emoji.repeat(60)),1)]),lt(" "+Wt(e.title),1)])]),_:1},8,["to"])}}}),_d={class:"text-2xl p-3"},xd=lt(" Labo "),wd={class:"grid grid-cols-auto-fit gap-4"},kd=Be({__name:"Labo",setup(e){const t=Qt([{title:"\u30AB\u30A6\u30F3\u30C8\u30A2\u30C3\u30D7",id:1,emoji:"\u{1F600}"},{title:"\u307B\u3052",id:2,emoji:"\u{1F334}"},{title:"\u307B\u3052",id:2,emoji:"\u{1F4BC}"},{title:"\u307B\u3052",id:2,emoji:"\u{1F9B6}"},{title:"\u307B\u3052",id:2,emoji:"\u{1F916}"},{title:"\u307B\u3052",id:2,emoji:"\u{1F425}"}]);return(n,r)=>{const a=Sn("font-awesome-icon");return be(),Pe(Ee,null,[V("h1",_d,[re(a,{icon:"fa-solid fa-flask"}),xd]),V("div",wd,[(be(!0),Pe(Ee,null,ta(t.value,i=>(be(),Pe("div",{key:i.id},[re(yd,{title:i.title,id:i.id,emoji:i.emoji},null,8,["title","id","emoji"])]))),128))])],64)}}}),Ed={class:"container text-center"},Ad={class:"text-xl font-bold mb-2"},Od={key:0},Pd=Be({__name:"HelloWorld",props:{msg:null},setup(e){let t=Qt([]),n=Qt(0);const r=Qt([[]]),a=["\u{1F600}","\u{1F610}","\u{1F618}"];function i(){return a[Math.floor(Math.random()*a.length)]}function o(){r.value[n.value].length==5&&(t.value.push(r.value[n.value].every(s=>s===r.value[n.value][0])),n.value++,r.value[n.value]=[]),r.value[n.value].push(i())}return(s,l)=>(be(),Pe("div",Ed,[V("h1",Ad,Wt(e.msg),1),V("button",{class:"rounded-full bg-sky-500 px-5 py-3 text-white",type:"button",onClick:l[0]||(l[0]=c=>o())},"\u7D75\u6587\u5B57\u3092\u5897\u3084\u3059"),V("div",null,[(be(!0),Pe(Ee,null,ta(r.value,(c,f)=>(be(),Pe("div",{key:f},[V("span",null,Wt(r.value.length-(f+1)),1),vt(t)[r.value.length-(f+1)]!==void 0?(be(),Pe("span",Od,Wt(vt(t)[r.value.length-(f+1)]===!0?"\u2B55":"\u274C"),1)):tc("",!0),(be(!0),Pe(Ee,null,ta(r.value[r.value.length-(f+1)],(d,h)=>(be(),Pe("span",{key:`${c}-${h}`,class:"text-xl"},Wt(d),1))),128))]))),128))])]))}}),Cd=Be({__name:"1",setup(e){return(t,n)=>(be(),Ha(Pd,{msg:"\u30AB\u30A6\u30F3\u30C8\u30A2\u30C3\u30D7\u30C6\u30B9\u30C8"}))}}),Sd=[{path:"/",component:dd},{path:"/about",component:pd},{path:"/labo",component:kd},{path:"/labo/1",component:Cd}],Rd=ld({history:Eu(),routes:Sd});function eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?eo(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hr(e){return hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hr(e)}function Id(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function to(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Td(e,t,n){return t&&to(e.prototype,t),n&&to(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qa(e,t){return Md(e)||Ld(e,t)||$s(e,t)||$d()}function zn(e){return Nd(e)||Fd(e)||$s(e)||jd()}function Nd(e){if(Array.isArray(e))return ma(e)}function Md(e){if(Array.isArray(e))return e}function Fd(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ld(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function $s(e,t){if(!!e){if(typeof e=="string")return ma(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ma(e,t)}}function ma(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var no=function(){},Va={},zs={},Ds=null,Bs={mark:no,measure:no};try{typeof window!="undefined"&&(Va=window),typeof document!="undefined"&&(zs=document),typeof MutationObserver!="undefined"&&(Ds=MutationObserver),typeof performance!="undefined"&&(Bs=performance)}catch{}var zd=Va.navigator||{},ro=zd.userAgent,ao=ro===void 0?"":ro,xt=Va,se=zs,io=Ds,qn=Bs;xt.document;var ft=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",Hs=~ao.indexOf("MSIE")||~ao.indexOf("Trident/"),Vn,Xn,Gn,Qn,Jn,at="___FONT_AWESOME___",ha=16,Us="fa",Ws="svg-inline--fa",Nt="data-fa-i2svg",pa="data-fa-pseudo-element",Dd="data-fa-pseudo-element-pending",Xa="data-prefix",Ga="data-icon",oo="fontawesome-i2svg",Bd="async",Hd=["HTML","HEAD","STYLE","SCRIPT"],Ys=function(){try{return!0}catch{return!1}}(),oe="classic",ce="sharp",Qa=[oe,ce];function Dn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[oe]}})}var Nn=Dn((Vn={},pe(Vn,oe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),pe(Vn,ce,{fa:"solid",fass:"solid","fa-solid":"solid"}),Vn)),Mn=Dn((Xn={},pe(Xn,oe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),pe(Xn,ce,{solid:"fass"}),Xn)),Fn=Dn((Gn={},pe(Gn,oe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),pe(Gn,ce,{fass:"fa-solid"}),Gn)),Ud=Dn((Qn={},pe(Qn,oe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),pe(Qn,ce,{"fa-solid":"fass"}),Qn)),Wd=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Ks="fa-layers-text",Yd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Kd=Dn((Jn={},pe(Jn,oe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),pe(Jn,ce,{900:"fass"}),Jn)),qs=[1,2,3,4,5,6,7,8,9,10],qd=qs.concat([11,12,13,14,15,16,17,18,19,20]),Vd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ln=new Set;Object.keys(Mn[oe]).map(Ln.add.bind(Ln));Object.keys(Mn[ce]).map(Ln.add.bind(Ln));var Xd=[].concat(Qa,zn(Ln),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ct.GROUP,Ct.SWAP_OPACITY,Ct.PRIMARY,Ct.SECONDARY]).concat(qs.map(function(e){return"".concat(e,"x")})).concat(qd.map(function(e){return"w-".concat(e)})),wn=xt.FontAwesomeConfig||{};function Gd(e){var t=se.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Qd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(se&&typeof se.querySelector=="function"){var Jd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Jd.forEach(function(e){var t=qa(e,2),n=t[0],r=t[1],a=Qd(Gd(n));a!=null&&(wn[r]=a)})}var Vs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Us,replacementClass:Ws,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wn.familyPrefix&&(wn.cssPrefix=wn.familyPrefix);var rn=R(R({},Vs),wn);rn.autoReplaceSvg||(rn.observeMutations=!1);var T={};Object.keys(Vs).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){rn[e]=n,kn.forEach(function(r){return r(T)})},get:function(){return rn[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){rn.cssPrefix=t,kn.forEach(function(n){return n(T)})},get:function(){return rn.cssPrefix}});xt.FontAwesomeConfig=T;var kn=[];function Zd(e){return kn.push(e),function(){kn.splice(kn.indexOf(e),1)}}var dt=ha,Ge={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function em(e){if(!(!e||!ft)){var t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=se.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return se.head.insertBefore(t,r),e}}var tm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function jn(){for(var e=12,t="";e-- >0;)t+=tm[Math.random()*62|0];return t}function ln(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ja(e){return e.classList?ln(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Xs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function nm(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Xs(e[n]),'" ')},"").trim()}function Tr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Za(e){return e.size!==Ge.size||e.x!==Ge.x||e.y!==Ge.y||e.rotate!==Ge.rotate||e.flipX||e.flipY}function rm(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function am(e){var t=e.transform,n=e.width,r=n===void 0?ha:n,a=e.height,i=a===void 0?ha:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Hs?l+="translate(".concat(t.x/dt-r/2,"em, ").concat(t.y/dt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/dt,"em), calc(-50% + ").concat(t.y/dt,"em)) "):l+="translate(".concat(t.x/dt,"em, ").concat(t.y/dt,"em) "),l+="scale(".concat(t.size/dt*(t.flipX?-1:1),", ").concat(t.size/dt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var im=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
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
    transition-delay: 0s;
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
}`;function Gs(){var e=Us,t=Ws,n=T.cssPrefix,r=T.replacementClass,a=im;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var so=!1;function Wr(){T.autoAddCss&&!so&&(em(Gs()),so=!0)}var om={mixout:function(){return{dom:{css:Gs,insertCss:Wr}}},hooks:function(){return{beforeDOMElementCreation:function(){Wr()},beforeI2svg:function(){Wr()}}}},it=xt||{};it[at]||(it[at]={});it[at].styles||(it[at].styles={});it[at].hooks||(it[at].hooks={});it[at].shims||(it[at].shims=[]);var je=it[at],Qs=[],sm=function e(){se.removeEventListener("DOMContentLoaded",e),pr=1,Qs.map(function(t){return t()})},pr=!1;ft&&(pr=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),pr||se.addEventListener("DOMContentLoaded",sm));function lm(e){!ft||(pr?setTimeout(e,0):Qs.push(e))}function Bn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Xs(e):"<".concat(t," ").concat(nm(r),">").concat(i.map(Bn).join(""),"</").concat(t,">")}function lo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var fm=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Yr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?fm(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function cm(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ga(e){var t=cm(e);return t.length===1?t[0].toString(16):null}function um(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function fo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function va(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=fo(t);typeof je.hooks.addPack=="function"&&!a?je.hooks.addPack(e,fo(t)):je.styles[e]=R(R({},je.styles[e]||{}),i),e==="fas"&&va("fa",t)}var Zn,er,tr,Kt=je.styles,dm=je.shims,mm=(Zn={},pe(Zn,oe,Object.values(Fn[oe])),pe(Zn,ce,Object.values(Fn[ce])),Zn),ei=null,Js={},Zs={},el={},tl={},nl={},hm=(er={},pe(er,oe,Object.keys(Nn[oe])),pe(er,ce,Object.keys(Nn[ce])),er);function pm(e){return~Xd.indexOf(e)}function gm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!pm(a)?a:null}var rl=function(){var t=function(i){return Yr(Kt,function(o,s,l){return o[l]=Yr(s,i,{}),o},{})};Js=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Zs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),nl=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Kt||T.autoFetchSvg,r=Yr(dm,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});el=r.names,tl=r.unicodes,ei=Nr(T.styleDefault,{family:T.familyDefault})};Zd(function(e){ei=Nr(e.styleDefault,{family:T.familyDefault})});rl();function ti(e,t){return(Js[e]||{})[t]}function vm(e,t){return(Zs[e]||{})[t]}function St(e,t){return(nl[e]||{})[t]}function al(e){return el[e]||{prefix:null,iconName:null}}function bm(e){var t=tl[e],n=ti("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wt(){return ei}var ni=function(){return{prefix:null,iconName:null,rest:[]}};function Nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?oe:n,a=Nn[r][e],i=Mn[r][e]||Mn[r][a],o=e in je.styles?e:null;return i||o||null}var co=(tr={},pe(tr,oe,Object.keys(Fn[oe])),pe(tr,ce,Object.keys(Fn[ce])),tr);function Mr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},pe(t,oe,"".concat(T.cssPrefix,"-").concat(oe)),pe(t,ce,"".concat(T.cssPrefix,"-").concat(ce)),t),o=null,s=oe;(e.includes(i[oe])||e.some(function(c){return co[oe].includes(c)}))&&(s=oe),(e.includes(i[ce])||e.some(function(c){return co[ce].includes(c)}))&&(s=ce);var l=e.reduce(function(c,f){var d=gm(T.cssPrefix,f);if(Kt[f]?(f=mm[s].includes(f)?Ud[s][f]:f,o=f,c.prefix=f):hm[s].indexOf(f)>-1?(o=f,c.prefix=Nr(f,{family:s})):d?c.iconName=d:f!==T.replacementClass&&f!==i[oe]&&f!==i[ce]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var h=o==="fa"?al(c.iconName):{},g=St(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||g||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Kt.far&&Kt.fas&&!T.autoFetchSvg&&(c.prefix="fas")}return c},ni());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ce&&(Kt.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=St(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=wt()||"fas"),l}var ym=function(){function e(){Id(this,e),this.definitions={}}return Td(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),va(s,o[s]);var l=Fn[oe][s];l&&va(l,o[s]),rl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),uo=[],qt={},Jt={},_m=Object.keys(Jt);function xm(e,t){var n=t.mixoutsTo;return uo=e,qt={},Object.keys(Jt).forEach(function(r){_m.indexOf(r)===-1&&delete Jt[r]}),uo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),hr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){qt[o]||(qt[o]=[]),qt[o].push(i[o])})}r.provides&&r.provides(Jt)}),n}function ba(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=qt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Mt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=qt[e]||[];a.forEach(function(i){i.apply(null,n)})}function ot(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Jt[e]?Jt[e].apply(null,t):void 0}function ya(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||wt();if(!!t)return t=St(n,t)||t,lo(il.definitions,n,t)||lo(je.styles,n,t)}var il=new ym,wm=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,Mt("noAuto")},km={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ft?(Mt("beforeI2svg",t),ot("pseudoElements2svg",t),ot("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,lm(function(){Am({autoReplaceSvgRoot:n}),Mt("watch",t)})}},Em={icon:function(t){if(t===null)return null;if(hr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:St(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Nr(t[0]);return{prefix:r,iconName:St(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(Wd))){var a=Mr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||wt(),iconName:St(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=wt();return{prefix:i,iconName:St(i,t)||t}}}},Re={noAuto:wm,config:T,dom:km,parse:Em,library:il,findIconDefinition:ya,toHtml:Bn},Am=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?se:n;(Object.keys(je.styles).length>0||T.autoFetchSvg)&&ft&&T.autoReplaceSvg&&Re.dom.i2svg({node:r})};function Fr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Bn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!ft){var r=se.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Om(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Za(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Tr(R(R({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Pm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:o}),children:r}]}]}function ri(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,A=r.found?r:n,F=A.width,C=A.height,v=a==="fak",x=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(de){return d.classes.indexOf(de)===-1}).filter(function(de){return de!==""||!!de}).concat(d.classes).join(" "),M={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(F," ").concat(C)})},z=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(F/C*16*.0625,"em")}:{};g&&(M.attributes[Nt]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(f||jn())},children:[l]}),delete M.attributes.title);var Y=R(R({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:R(R({},z),d.styles)}),le=r.found&&n.found?ot("generateAbstractMask",Y)||{children:[],attributes:{}}:ot("generateAbstractIcon",Y)||{children:[],attributes:{}},ue=le.children,He=le.attributes;return Y.children=ue,Y.attributes=He,s?Pm(Y):Om(Y)}function mo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=R(R(R({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Nt]="");var f=R({},o.styles);Za(a)&&(f.transform=am({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Tr(f);d.length>0&&(c.style=d);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Cm(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Tr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Kr=je.styles;function _a(e){var t=e[0],n=e[1],r=e.slice(4),a=qa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(Ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Ct.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Ct.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Sm={found:!1,width:512,height:512};function Rm(e,t){!Ys&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function xa(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=wt()),new Promise(function(r,a){if(ot("missingIconAbstract"),n==="fa"){var i=al(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Kr[t]&&Kr[t][e]){var o=Kr[t][e];return r(_a(o))}Rm(e,t),r(R(R({},Sm),{},{icon:T.showMissingIcons&&e?ot("missingIconAbstract")||{}:{}}))})}var ho=function(){},wa=T.measurePerformance&&qn&&qn.mark&&qn.measure?qn:{mark:ho,measure:ho},pn='FA "6.2.0"',Im=function(t){return wa.mark("".concat(pn," ").concat(t," begins")),function(){return ol(t)}},ol=function(t){wa.mark("".concat(pn," ").concat(t," ends")),wa.measure("".concat(pn," ").concat(t),"".concat(pn," ").concat(t," begins"),"".concat(pn," ").concat(t," ends"))},ai={begin:Im,end:ol},or=function(){};function po(e){var t=e.getAttribute?e.getAttribute(Nt):null;return typeof t=="string"}function Tm(e){var t=e.getAttribute?e.getAttribute(Xa):null,n=e.getAttribute?e.getAttribute(Ga):null;return t&&n}function Nm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Mm(){if(T.autoReplaceSvg===!0)return sr.replace;var e=sr[T.autoReplaceSvg];return e||sr.replace}function Fm(e){return se.createElementNS("http://www.w3.org/2000/svg",e)}function Lm(e){return se.createElement(e)}function sl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Fm:Lm:n;if(typeof e=="string")return se.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(sl(o,{ceFn:r}))}),a}function jm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var sr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(sl(a),n)}),n.getAttribute(Nt)===null&&T.keepOriginalSource){var r=se.createComment(jm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ja(n).indexOf(T.replacementClass))return sr.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Bn(s)}).join(`
`);n.setAttribute(Nt,""),n.innerHTML=o}};function go(e){e()}function ll(e,t){var n=typeof t=="function"?t:or;if(e.length===0)n();else{var r=go;T.mutateApproach===Bd&&(r=xt.requestAnimationFrame||go),r(function(){var a=Mm(),i=ai.begin("mutate");e.map(a),i(),n()})}}var ii=!1;function fl(){ii=!0}function ka(){ii=!1}var gr=null;function vo(e){if(!!io&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?or:t,r=e.nodeCallback,a=r===void 0?or:r,i=e.pseudoElementsCallback,o=i===void 0?or:i,s=e.observeMutationsRoot,l=s===void 0?se:s;gr=new io(function(c){if(!ii){var f=wt();ln(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!po(d.addedNodes[0])&&(T.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&T.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&po(d.target)&&~Vd.indexOf(d.attributeName))if(d.attributeName==="class"&&Tm(d.target)){var h=Mr(Ja(d.target)),g=h.prefix,A=h.iconName;d.target.setAttribute(Xa,g||f),A&&d.target.setAttribute(Ga,A)}else Nm(d.target)&&a(d.target)})}}),ft&&gr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function $m(){!gr||gr.disconnect()}function zm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Dm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Mr(Ja(e));return a.prefix||(a.prefix=wt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=vm(a.prefix,e.innerText)||ti(a.prefix,ga(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Bm(e){var t=ln(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||jn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Hm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ge,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Dm(e),r=n.iconName,a=n.prefix,i=n.rest,o=Bm(e),s=ba("parseNodeAttributes",{},e),l=t.styleParser?zm(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ge,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Um=je.styles;function cl(e){var t=T.autoReplaceSvg==="nest"?bo(e,{styleParser:!1}):bo(e);return~t.extra.classes.indexOf(Ks)?ot("generateLayersText",e,t):ot("generateSvgReplacementMutation",e,t)}var kt=new Set;Qa.map(function(e){kt.add("fa-".concat(e))});Object.keys(Nn[oe]).map(kt.add.bind(kt));Object.keys(Nn[ce]).map(kt.add.bind(kt));kt=zn(kt);function yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ft)return Promise.resolve();var n=se.documentElement.classList,r=function(d){return n.add("".concat(oo,"-").concat(d))},a=function(d){return n.remove("".concat(oo,"-").concat(d))},i=T.autoFetchSvg?kt:Qa.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Um));i.includes("fa")||i.push("fa");var o=[".".concat(Ks,":not([").concat(Nt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Nt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ln(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ai.begin("onTree"),c=s.reduce(function(f,d){try{var h=cl(d);h&&f.push(h)}catch(g){Ys||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(h){ll(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(h){l(),d(h)})})}function Wm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cl(e).then(function(n){n&&ll([n],t)})}function Ym(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ya(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ya(a||{})),e(r,R(R({},n),{},{mask:a}))}}var Km=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ge:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,h=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,F=n.classes,C=F===void 0?[]:F,v=n.attributes,x=v===void 0?{}:v,M=n.styles,z=M===void 0?{}:M;if(!!t){var Y=t.prefix,le=t.iconName,ue=t.icon;return Fr(R({type:"icon"},t),function(){return Mt("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(h?x["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(A||jn()):(x["aria-hidden"]="true",x.focusable="false")),ri({icons:{main:_a(ue),mask:l?_a(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:le,transform:R(R({},Ge),a),symbol:o,title:h,maskId:f,titleId:A,extra:{attributes:x,styles:z,classes:C}})})}},qm={mixout:function(){return{icon:Ym(Km)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=yo,n.nodeCallback=Wm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?se:r,i=n.callback,o=i===void 0?function(){}:i;return yo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,A){Promise.all([xa(a,s),f.iconName?xa(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(F){var C=qa(F,2),v=C[0],x=C[1];g([n,ri({icons:{main:v,mask:x},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Tr(s);l.length>0&&(a.style=l);var c;return Za(o)&&(c=ot("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Vm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Fr({type:"layer"},function(){Mt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(zn(i)).join(" ")},children:o}]})}}}},Xm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return Fr({type:"counter",content:n},function(){return Mt("beforeDOMElementCreation",{content:n,params:r}),Cm({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(zn(s))}})})}}}},Gm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ge:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,h=r.styles,g=h===void 0?{}:h;return Fr({type:"text",content:n},function(){return Mt("beforeDOMElementCreation",{content:n,params:r}),mo({content:n,transform:R(R({},Ge),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(T.cssPrefix,"-layers-text")].concat(zn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Hs){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,mo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Qm=new RegExp('"',"ug"),_o=[1105920,1112319];function Jm(e){var t=e.replace(Qm,""),n=um(t,0),r=n>=_o[0]&&n<=_o[1],a=t.length===2?t[0]===t[1]:!1;return{value:ga(a?t[0]:t),isSecondary:r||a}}function xo(e,t){var n="".concat(Dd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=ln(e.children),o=i.filter(function(ue){return ue.getAttribute(pa)===t})[0],s=xt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Yd),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ce:oe,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Mn[h][l[2].toLowerCase()]:Kd[h][c],A=Jm(d),F=A.value,C=A.isSecondary,v=l[0].startsWith("FontAwesome"),x=ti(g,F),M=x;if(v){var z=bm(F);z.iconName&&z.prefix&&(x=z.iconName,g=z.prefix)}if(x&&!C&&(!o||o.getAttribute(Xa)!==g||o.getAttribute(Ga)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var Y=Hm(),le=Y.extra;le.attributes[pa]=t,xa(x,g).then(function(ue){var He=ri(R(R({},Y),{},{icons:{main:ue,mask:ni()},prefix:g,iconName:M,extra:le,watchable:!0})),de=se.createElement("svg");t==="::before"?e.insertBefore(de,e.firstChild):e.appendChild(de),de.outerHTML=He.map(function(Ue){return Bn(Ue)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Zm(e){return Promise.all([xo(e,"::before"),xo(e,"::after")])}function eh(e){return e.parentNode!==document.head&&!~Hd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(pa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function wo(e){if(!!ft)return new Promise(function(t,n){var r=ln(e.querySelectorAll("*")).filter(eh).map(Zm),a=ai.begin("searchPseudoElements");fl(),Promise.all(r).then(function(){a(),ka(),t()}).catch(function(){a(),ka(),n()})})}var th={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=wo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?se:r;T.searchPseudoElements&&wo(a)}}},ko=!1,nh={mixout:function(){return{dom:{unwatch:function(){fl(),ko=!0}}}},hooks:function(){return{bootstrap:function(){vo(ba("mutationObserverCallbacks",{}))},noAuto:function(){$m()},watch:function(n){var r=n.observeMutationsRoot;ko?ka():vo(ba("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Eo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},rh={mixout:function(){return{parse:{transform:function(n){return Eo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Eo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:h};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},qr={x:0,y:0,width:"100%",height:"100%"};function Ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ah(e){return e.tag==="g"?e.children:[e]}var ih={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Mr(a.split(" ").map(function(o){return o.trim()})):ni();return i.prefix||(i.prefix=wt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,h=o.icon,g=rm({transform:l,containerWidth:d,iconWidth:c}),A={tag:"rect",attributes:R(R({},qr),{},{fill:"white"})},F=f.children?{children:f.children.map(Ao)}:{},C={tag:"g",attributes:R({},g.inner),children:[Ao(R({tag:f.tag,attributes:R(R({},f.attributes),g.path)},F))]},v={tag:"g",attributes:R({},g.outer),children:[C]},x="mask-".concat(s||jn()),M="clip-".concat(s||jn()),z={tag:"mask",attributes:R(R({},qr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,v]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:ah(h)},z]};return r.push(Y,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(x,")")},qr)}),{children:r,attributes:a}}}},oh={provides:function(t){var n=!1;xt.matchMedia&&(n=xt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},sh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},lh=[om,qm,Vm,Xm,Gm,th,nh,rh,ih,oh,sh];xm(lh,{mixoutsTo:Re});Re.noAuto;var ul=Re.config,fh=Re.library;Re.dom;var vr=Re.parse;Re.findIconDefinition;Re.toHtml;var ch=Re.icon;Re.layer;var uh=Re.text;Re.counter;function Oo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oo(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function br(e){return br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},br(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dh(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function mh(e,t){if(e==null)return{};var n=dh(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Ea(e){return hh(e)||ph(e)||gh(e)||vh()}function hh(e){if(Array.isArray(e))return Aa(e)}function ph(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gh(e,t){if(!!e){if(typeof e=="string")return Aa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Aa(e,t)}}function Aa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},dl={exports:{}};(function(e){(function(t){var n=function(v,x,M){if(!c(x)||d(x)||h(x)||g(x)||l(x))return x;var z,Y=0,le=0;if(f(x))for(z=[],le=x.length;Y<le;Y++)z.push(n(v,x[Y],M));else{z={};for(var ue in x)Object.prototype.hasOwnProperty.call(x,ue)&&(z[v(ue,M)]=n(v,x[ue],M))}return z},r=function(v,x){x=x||{};var M=x.separator||"_",z=x.split||/(?=[A-Z])/;return v.split(z).join(M)},a=function(v){return A(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(x,M){return M?M.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var x=a(v);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(v,x){return r(v,x).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},f=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},h=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},A=function(v){return v=v-0,v===v},F=function(v,x){var M=x&&"process"in x?x.process:x;return typeof M!="function"?v:function(z,Y){return M(z,v,Y)}},C={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,x){return n(F(a,x),v)},decamelizeKeys:function(v,x){return n(F(o,x),v,x)},pascalizeKeys:function(v,x){return n(F(i,x),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=C:t.humps=C})(bh)})(dl);var yh=dl.exports,_h=["class","style"];function xh(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=yh.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function wh(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return oi(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=wh(f);break;case"style":l.style=xh(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=mh(n,_h);return Rr(e.tag,Fe(Fe(Fe({},t),{},{class:a.class,style:Fe(Fe({},a.style),o)},a.attrs),s),r)}var ml=!1;try{ml=!0}catch{}function kh(){if(!ml&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function En(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}function Eh(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},we(t,"fa-".concat(e.size),e.size!==null),we(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),we(t,"fa-pull-".concat(e.pull),e.pull!==null),we(t,"fa-swap-opacity",e.swapOpacity),we(t,"fa-bounce",e.bounce),we(t,"fa-shake",e.shake),we(t,"fa-beat",e.beat),we(t,"fa-fade",e.fade),we(t,"fa-beat-fade",e.beatFade),we(t,"fa-flash",e.flash),we(t,"fa-spin-pulse",e.spinPulse),we(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Po(e){if(e&&br(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(vr.icon)return vr.icon(e);if(e===null)return null;if(br(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ah=Be({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=fe(function(){return Po(t.icon)}),i=fe(function(){return En("classes",Eh(t))}),o=fe(function(){return En("transform",typeof t.transform=="string"?vr.transform(t.transform):t.transform)}),s=fe(function(){return En("mask",Po(t.mask))}),l=fe(function(){return ch(a.value,Fe(Fe(Fe(Fe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});bn(l,function(f){if(!f)return kh("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=fe(function(){return l.value?oi(l.value.abstract[0],{},r):null});return function(){return c.value}}});Be({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ul.familyPrefix,i=fe(function(){return["".concat(a,"-layers")].concat(Ea(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Rr("div",{class:i.value},r.default?r.default():[])}}});Be({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ul.familyPrefix,i=fe(function(){return En("classes",[].concat(Ea(t.counter?["".concat(a,"-layers-counter")]:[]),Ea(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=fe(function(){return En("transform",typeof t.transform=="string"?vr.transform(t.transform):t.transform)}),s=fe(function(){var c=uh(t.value.toString(),Fe(Fe({},o.value),i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=fe(function(){return oi(s.value,{},r)});return function(){return l.value}}});var Oh={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},Ph={prefix:"fas",iconName:"flask",icon:[448,512,[],"f0c3","M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z"]};fh.add(Oh,Ph);const si=Mc(iu);si.use(Rd);si.component("font-awesome-icon",Ah);si.mount("#app");
