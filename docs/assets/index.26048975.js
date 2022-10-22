const ml=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};ml();function Aa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const hl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pl=Aa(hl);function Oo(e){return!!e||e===""}function Oa(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ge(r)?bl(r):Oa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ge(e))return e;if(he(e))return e}}const gl=/;(?![^(]*\))/g,vl=/:(.+)/;function bl(e){const t={};return e.split(gl).forEach(n=>{if(n){const r=n.split(vl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function At(e){let t="";if(ge(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=At(e[n]);r&&(t+=r+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const sr=e=>ge(e)?e:e==null?"":H(e)||he(e)&&(e.toString===Ro||!U(e.toString))?JSON.stringify(e,Po,2):String(e),Po=(e,t)=>t&&t.__v_isRef?Po(e,t.value):Kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Co(t)?{[`Set(${t.size})`]:[...t.values()]}:he(t)&&!H(t)&&!Io(t)?String(t):t,re={},Yt=[],Le=()=>{},yl=()=>!1,xl=/^on[^a-z]/,yr=e=>xl.test(e),Pa=e=>e.startsWith("onUpdate:"),xe=Object.assign,Ca=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},_l=Object.prototype.hasOwnProperty,K=(e,t)=>_l.call(e,t),H=Array.isArray,Kt=e=>xr(e)==="[object Map]",Co=e=>xr(e)==="[object Set]",U=e=>typeof e=="function",ge=e=>typeof e=="string",Sa=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",So=e=>he(e)&&U(e.then)&&U(e.catch),Ro=Object.prototype.toString,xr=e=>Ro.call(e),wl=e=>xr(e).slice(8,-1),Io=e=>xr(e)==="[object Object]",Ra=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,tr=Aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_r=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},kl=/-(\w)/g,Ge=_r(e=>e.replace(kl,(t,n)=>n?n.toUpperCase():"")),El=/\B([A-Z])/g,tn=_r(e=>e.replace(El,"-$1").toLowerCase()),wr=_r(e=>e.charAt(0).toUpperCase()+e.slice(1)),Lr=_r(e=>e?`on${wr(e)}`:""),kn=(e,t)=>!Object.is(e,t),jr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},lr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Al=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let fi;const Ol=()=>fi||(fi=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ye;class Pl{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ye&&(this.parent=Ye,this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ye;try{return Ye=this,t()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Cl(e,t=Ye){t&&t.active&&t.effects.push(e)}const Ia=e=>{const t=new Set(e);return t.w=0,t.n=0,t},To=e=>(e.w&vt)>0,No=e=>(e.n&vt)>0,Sl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=vt},Rl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];To(a)&&!No(a)?a.delete(e):t[n++]=a,a.w&=~vt,a.n&=~vt}t.length=n}},Vr=new WeakMap;let un=0,vt=1;const Xr=30;let Te;const Ct=Symbol(""),Gr=Symbol("");class Ta{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Cl(this,r)}run(){if(!this.active)return this.fn();let t=Te,n=mt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,mt=!0,vt=1<<++un,un<=Xr?Sl(this):ci(this),this.fn()}finally{un<=Xr&&Rl(this),vt=1<<--un,Te=this.parent,mt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(ci(this),this.onStop&&this.onStop(),this.active=!1)}}function ci(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let mt=!0;const Mo=[];function nn(){Mo.push(mt),mt=!1}function rn(){const e=Mo.pop();mt=e===void 0?!0:e}function Pe(e,t,n){if(mt&&Te){let r=Vr.get(e);r||Vr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ia()),Fo(a)}}function Fo(e,t){let n=!1;un<=Xr?No(e)||(e.n|=vt,n=!To(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function tt(e,t,n,r,a,i){const o=Vr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?Ra(n)&&s.push(o.get("length")):(s.push(o.get(Ct)),Kt(e)&&s.push(o.get(Gr)));break;case"delete":H(e)||(s.push(o.get(Ct)),Kt(e)&&s.push(o.get(Gr)));break;case"set":Kt(e)&&s.push(o.get(Ct));break}if(s.length===1)s[0]&&Qr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Qr(Ia(l))}}function Qr(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&ui(r);for(const r of n)r.computed||ui(r)}function ui(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Il=Aa("__proto__,__v_isRef,__isVue"),Lo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Sa)),Tl=Na(),Nl=Na(!1,!0),Ml=Na(!0),di=Fl();function Fl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(X)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){nn();const r=X(this)[t].apply(this,n);return rn(),r}}),e}function Na(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ql:Bo:t?Do:zo).get(r))return r;const o=H(r);if(!e&&o&&K(di,a))return Reflect.get(di,a,i);const s=Reflect.get(r,a,i);return(Sa(a)?Lo.has(a):Il(a))||(e||Pe(r,"get",a),t)?s:be(s)?o&&Ra(a)?s:s.value:he(s)?e?Ho(s):jn(s):s}}const Ll=jo(),jl=jo(!0);function jo(e=!1){return function(n,r,a,i){let o=n[r];if(En(o)&&be(o)&&!be(a))return!1;if(!e&&!En(a)&&(Jr(a)||(a=X(a),o=X(o)),!H(n)&&be(o)&&!be(a)))return o.value=a,!0;const s=H(n)&&Ra(r)?Number(r)<n.length:K(n,r),l=Reflect.set(n,r,a,i);return n===X(i)&&(s?kn(a,o)&&tt(n,"set",r,a):tt(n,"add",r,a)),l}}function $l(e,t){const n=K(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&tt(e,"delete",t,void 0),r}function zl(e,t){const n=Reflect.has(e,t);return(!Sa(t)||!Lo.has(t))&&Pe(e,"has",t),n}function Dl(e){return Pe(e,"iterate",H(e)?"length":Ct),Reflect.ownKeys(e)}const $o={get:Tl,set:Ll,deleteProperty:$l,has:zl,ownKeys:Dl},Bl={get:Ml,set(e,t){return!0},deleteProperty(e,t){return!0}},Hl=xe({},$o,{get:Nl,set:jl}),Ma=e=>e,kr=e=>Reflect.getPrototypeOf(e);function Bn(e,t,n=!1,r=!1){e=e.__v_raw;const a=X(e),i=X(t);n||(t!==i&&Pe(a,"get",t),Pe(a,"get",i));const{has:o}=kr(a),s=r?Ma:n?ja:An;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Hn(e,t=!1){const n=this.__v_raw,r=X(n),a=X(e);return t||(e!==a&&Pe(r,"has",e),Pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Un(e,t=!1){return e=e.__v_raw,!t&&Pe(X(e),"iterate",Ct),Reflect.get(e,"size",e)}function mi(e){e=X(e);const t=X(this);return kr(t).has.call(t,e)||(t.add(e),tt(t,"add",e,e)),this}function hi(e,t){t=X(t);const n=X(this),{has:r,get:a}=kr(n);let i=r.call(n,e);i||(e=X(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?kn(t,o)&&tt(n,"set",e,t):tt(n,"add",e,t),this}function pi(e){const t=X(this),{has:n,get:r}=kr(t);let a=n.call(t,e);a||(e=X(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&tt(t,"delete",e,void 0),i}function gi(){const e=X(this),t=e.size!==0,n=e.clear();return t&&tt(e,"clear",void 0,void 0),n}function Wn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=X(o),l=t?Ma:e?ja:An;return!e&&Pe(s,"iterate",Ct),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function Yn(e,t,n){return function(...r){const a=this.__v_raw,i=X(a),o=Kt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?Ma:t?ja:An;return!t&&Pe(i,"iterate",l?Gr:Ct),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:s?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function st(e){return function(...t){return e==="delete"?!1:this}}function Ul(){const e={get(i){return Bn(this,i)},get size(){return Un(this)},has:Hn,add:mi,set:hi,delete:pi,clear:gi,forEach:Wn(!1,!1)},t={get(i){return Bn(this,i,!1,!0)},get size(){return Un(this)},has:Hn,add:mi,set:hi,delete:pi,clear:gi,forEach:Wn(!1,!0)},n={get(i){return Bn(this,i,!0)},get size(){return Un(this,!0)},has(i){return Hn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Wn(!0,!1)},r={get(i){return Bn(this,i,!0,!0)},get size(){return Un(this,!0)},has(i){return Hn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Wn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Yn(i,!1,!1),n[i]=Yn(i,!0,!1),t[i]=Yn(i,!1,!0),r[i]=Yn(i,!0,!0)}),[e,n,t,r]}const[Wl,Yl,Kl,ql]=Ul();function Fa(e,t){const n=t?e?ql:Kl:e?Yl:Wl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(K(n,a)&&a in r?n:r,a,i)}const Vl={get:Fa(!1,!1)},Xl={get:Fa(!1,!0)},Gl={get:Fa(!0,!1)},zo=new WeakMap,Do=new WeakMap,Bo=new WeakMap,Ql=new WeakMap;function Jl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zl(e){return e.__v_skip||!Object.isExtensible(e)?0:Jl(wl(e))}function jn(e){return En(e)?e:La(e,!1,$o,Vl,zo)}function ef(e){return La(e,!1,Hl,Xl,Do)}function Ho(e){return La(e,!0,Bl,Gl,Bo)}function La(e,t,n,r,a){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Zl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function qt(e){return En(e)?qt(e.__v_raw):!!(e&&e.__v_isReactive)}function En(e){return!!(e&&e.__v_isReadonly)}function Jr(e){return!!(e&&e.__v_isShallow)}function Uo(e){return qt(e)||En(e)}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function Wo(e){return lr(e,"__v_skip",!0),e}const An=e=>he(e)?jn(e):e,ja=e=>he(e)?Ho(e):e;function Yo(e){mt&&Te&&(e=X(e),Fo(e.dep||(e.dep=Ia())))}function Ko(e,t){e=X(e),e.dep&&Qr(e.dep)}function be(e){return!!(e&&e.__v_isRef===!0)}function Er(e){return qo(e,!1)}function tf(e){return qo(e,!0)}function qo(e,t){return be(e)?e:new nf(e,t)}class nf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:X(t),this._value=n?t:An(t)}get value(){return Yo(this),this._value}set value(t){t=this.__v_isShallow?t:X(t),kn(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:An(t),Ko(this))}}function Vt(e){return be(e)?e.value:e}const rf={get:(e,t,n)=>Vt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return be(a)&&!be(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Vo(e){return qt(e)?e:new Proxy(e,rf)}class af{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ta(t,()=>{this._dirty||(this._dirty=!0,Ko(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=X(this);return Yo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function of(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=Le):(r=e.get,a=e.set),new af(r,a,i||!a,n)}function ht(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Ar(i,t,n)}return a}function je(e,t,n,r){if(U(e)){const i=ht(e,t,n,r);return i&&So(i)&&i.catch(o=>{Ar(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(je(e[i],t,n,r));return a}function Ar(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ht(l,null,10,[e,o,s]);return}}sf(e,n,a,r)}function sf(e,t,n,r=!0){console.error(e)}let fr=!1,Zr=!1;const Oe=[];let et=0;const hn=[];let dn=null,$t=0;const pn=[];let ct=null,zt=0;const Xo=Promise.resolve();let $a=null,ea=null;function Go(e){const t=$a||Xo;return e?t.then(this?e.bind(this):e):t}function lf(e){let t=et+1,n=Oe.length;for(;t<n;){const r=t+n>>>1;On(Oe[r])<e?t=r+1:n=r}return t}function Qo(e){(!Oe.length||!Oe.includes(e,fr&&e.allowRecurse?et+1:et))&&e!==ea&&(e.id==null?Oe.push(e):Oe.splice(lf(e.id),0,e),Jo())}function Jo(){!fr&&!Zr&&(Zr=!0,$a=Xo.then(ts))}function ff(e){const t=Oe.indexOf(e);t>et&&Oe.splice(t,1)}function Zo(e,t,n,r){H(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Jo()}function cf(e){Zo(e,dn,hn,$t)}function uf(e){Zo(e,ct,pn,zt)}function Or(e,t=null){if(hn.length){for(ea=t,dn=[...new Set(hn)],hn.length=0,$t=0;$t<dn.length;$t++)dn[$t]();dn=null,$t=0,ea=null,Or(e,t)}}function es(e){if(Or(),pn.length){const t=[...new Set(pn)];if(pn.length=0,ct){ct.push(...t);return}for(ct=t,ct.sort((n,r)=>On(n)-On(r)),zt=0;zt<ct.length;zt++)ct[zt]();ct=null,zt=0}}const On=e=>e.id==null?1/0:e.id;function ts(e){Zr=!1,fr=!0,Or(e),Oe.sort((n,r)=>On(n)-On(r));const t=Le;try{for(et=0;et<Oe.length;et++){const n=Oe[et];n&&n.active!==!1&&ht(n,null,14)}}finally{et=0,Oe.length=0,es(),fr=!1,$a=null,(Oe.length||hn.length||pn.length)&&ts(e)}}function df(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||re;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[f]||re;h&&(a=n.map(g=>g.trim())),d&&(a=n.map(Al))}let s,l=r[s=Lr(t)]||r[s=Lr(Ge(t))];!l&&i&&(l=r[s=Lr(tn(t))]),l&&je(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,je(c,e,6,a)}}function ns(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=c=>{const f=ns(c,t,!0);f&&(s=!0,xe(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):xe(o,i),r.set(e,o),o)}function Pr(e,t){return!e||!yr(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,tn(t))||K(e,t))}let qe=null,rs=null;function cr(e){const t=qe;return qe=e,rs=e&&e.type.__scopeId||null,t}function Bt(e,t=qe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Oi(-1);const i=cr(t),o=e(...a);return cr(i),r._d&&Oi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function $r(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:h,setupState:g,ctx:A,inheritAttrs:F}=e;let C,v;const _=cr(e);try{if(n.shapeFlag&4){const z=a||r;C=Ke(f.call(z,z,d,i,g,h,A)),v=l}else{const z=t;C=Ke(z.length>1?z(i,{attrs:l,slots:s,emit:c}):z(i,null)),v=t.props?l:mf(l)}}catch(z){vn.length=0,Ar(z,e,1),C=ue(Cn)}let M=C;if(v&&F!==!1){const z=Object.keys(v),{shapeFlag:Y}=M;z.length&&Y&7&&(o&&z.some(Pa)&&(v=hf(v,o)),M=Gt(M,v))}return n.dirs&&(M=Gt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),C=M,cr(_),C}const mf=e=>{let t;for(const n in e)(n==="class"||n==="style"||yr(n))&&((t||(t={}))[n]=e[n]);return t},hf=(e,t)=>{const n={};for(const r in e)(!Pa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function pf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?vi(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(o[h]!==r[h]&&!Pr(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?vi(r,o,c):!0:!!o;return!1}function vi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Pr(n,i))return!0}return!1}function gf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const vf=e=>e.__isSuspense;function bf(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):uf(e)}function nr(e,t){if(ve){let n=ve.provides;const r=ve.parent&&ve.parent.provides;r===n&&(n=ve.provides=Object.create(r)),n[e]=t}}function pt(e,t,n=!1){const r=ve||qe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r.proxy):t}}const bi={};function gn(e,t,n){return as(e,t,n)}function as(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=re){const s=ve;let l,c=!1,f=!1;if(be(e)?(l=()=>e.value,c=Jr(e)):qt(e)?(l=()=>e,r=!0):H(e)?(f=!0,c=e.some(v=>qt(v)||Jr(v)),l=()=>e.map(v=>{if(be(v))return v.value;if(qt(v))return Ht(v);if(U(v))return ht(v,s,2)})):U(e)?t?l=()=>ht(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),je(e,s,3,[h])}:l=Le,t&&r){const v=l;l=()=>Ht(v())}let d,h=v=>{d=C.onStop=()=>{ht(v,s,4)}};if(Rn)return h=Le,t?n&&je(t,s,3,[l(),f?[]:void 0,h]):l(),Le;let g=f?[]:bi;const A=()=>{if(!!C.active)if(t){const v=C.run();(r||c||(f?v.some((_,M)=>kn(_,g[M])):kn(v,g)))&&(d&&d(),je(t,s,3,[v,g===bi?void 0:g,h]),g=v)}else C.run()};A.allowRecurse=!!t;let F;a==="sync"?F=A:a==="post"?F=()=>we(A,s&&s.suspense):F=()=>cf(A);const C=new Ta(l,F);return t?n?A():g=C.run():a==="post"?we(C.run.bind(C),s&&s.suspense):C.run(),()=>{C.stop(),s&&s.scope&&Ca(s.scope.effects,C)}}function yf(e,t,n){const r=this.proxy,a=ge(e)?e.includes(".")?is(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=ve;Qt(this);const s=as(a,i.bind(r),n);return o?Qt(o):St(),s}function is(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Ht(e,t){if(!he(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),be(e))Ht(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)Ht(e[n],t);else if(Co(e)||Kt(e))e.forEach(n=>{Ht(n,t)});else if(Io(e))for(const n in e)Ht(e[n],t);return e}function ze(e){return U(e)?{setup:e,name:e.name}:e}const rr=e=>!!e.type.__asyncLoader,os=e=>e.type.__isKeepAlive;function xf(e,t){ss(e,"a",t)}function _f(e,t){ss(e,"da",t)}function ss(e,t,n=ve){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Cr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)os(a.parent.vnode)&&wf(r,t,n,a),a=a.parent}}function wf(e,t,n,r){const a=Cr(t,e,r,!0);ls(()=>{Ca(r[t],a)},n)}function Cr(e,t,n=ve,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;nn(),Qt(n);const s=je(t,n,e,o);return St(),rn(),s});return r?a.unshift(i):a.push(i),i}}const it=e=>(t,n=ve)=>(!Rn||e==="sp")&&Cr(e,t,n),kf=it("bm"),Ef=it("m"),Af=it("bu"),Of=it("u"),Pf=it("bum"),ls=it("um"),Cf=it("sp"),Sf=it("rtg"),Rf=it("rtc");function If(e,t=ve){Cr("ec",e,t)}function _t(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(nn(),je(l,n,8,[e.el,s,e,t]),rn())}}const fs="components";function Pn(e,t){return Nf(fs,e,!0,t)||e}const Tf=Symbol();function Nf(e,t,n=!0,r=!1){const a=qe||ve;if(a){const i=a.type;if(e===fs){const s=fc(i,!1);if(s&&(s===t||s===Ge(t)||s===wr(Ge(t))))return i}const o=yi(a[e]||i[e],t)||yi(a.appContext[e],t);return!o&&r?i:o}}function yi(e,t){return e&&(e[t]||e[Ge(t)]||e[wr(Ge(t))])}function Mf(e,t,n,r){let a;const i=n&&n[r];if(H(e)||ge(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(he(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const ta=e=>e?ws(e)?Ha(e)||e.proxy:ta(e.parent):null,ur=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ta(e.parent),$root:e=>ta(e.root),$emit:e=>e.emit,$options:e=>us(e),$forceUpdate:e=>e.f||(e.f=()=>Qo(e.update)),$nextTick:e=>e.n||(e.n=Go.bind(e.proxy)),$watch:e=>yf.bind(e)}),Ff={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==re&&K(r,t))return o[t]=1,r[t];if(a!==re&&K(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&K(c,t))return o[t]=3,i[t];if(n!==re&&K(n,t))return o[t]=4,n[t];na&&(o[t]=0)}}const f=ur[t];let d,h;if(f)return t==="$attrs"&&Pe(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==re&&K(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,K(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==re&&K(a,t)?(a[t]=n,!0):r!==re&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==re&&K(e,o)||t!==re&&K(t,o)||(s=i[0])&&K(s,o)||K(r,o)||K(ur,o)||K(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let na=!0;function Lf(e){const t=us(e),n=e.proxy,r=e.ctx;na=!1,t.beforeCreate&&xi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:h,beforeUpdate:g,updated:A,activated:F,deactivated:C,beforeDestroy:v,beforeUnmount:_,destroyed:M,unmounted:z,render:Y,renderTracked:se,renderTriggered:ce,errorCaptured:De,serverPrefetch:de,expose:Be,inheritAttrs:Qe,components:Re,directives:Tt,filters:Nt}=t;if(c&&jf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const te in o){const J=o[te];U(J)&&(r[te]=J.bind(n))}if(a){const te=a.call(n,n);he(te)&&(e.data=jn(te))}if(na=!0,i)for(const te in i){const J=i[te],ke=U(J)?J.bind(n,n):U(J.get)?J.get.bind(n,n):Le,Ft=!U(J)&&U(J.set)?J.set.bind(n):Le,Je=le({get:ke,set:Ft});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Je.value,set:He=>Je.value=He})}if(s)for(const te in s)cs(s[te],r,n,te);if(l){const te=U(l)?l.call(n):l;Reflect.ownKeys(te).forEach(J=>{nr(J,te[J])})}f&&xi(f,e,"c");function me(te,J){H(J)?J.forEach(ke=>te(ke.bind(n))):J&&te(J.bind(n))}if(me(kf,d),me(Ef,h),me(Af,g),me(Of,A),me(xf,F),me(_f,C),me(If,De),me(Rf,se),me(Sf,ce),me(Pf,_),me(ls,z),me(Cf,de),H(Be))if(Be.length){const te=e.exposed||(e.exposed={});Be.forEach(J=>{Object.defineProperty(te,J,{get:()=>n[J],set:ke=>n[J]=ke})})}else e.exposed||(e.exposed={});Y&&e.render===Le&&(e.render=Y),Qe!=null&&(e.inheritAttrs=Qe),Re&&(e.components=Re),Tt&&(e.directives=Tt)}function jf(e,t,n=Le,r=!1){H(e)&&(e=ra(e));for(const a in e){const i=e[a];let o;he(i)?"default"in i?o=pt(i.from||a,i.default,!0):o=pt(i.from||a):o=pt(i),be(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function xi(e,t,n){je(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function cs(e,t,n,r){const a=r.includes(".")?is(n,r):()=>n[r];if(ge(e)){const i=t[e];U(i)&&gn(a,i)}else if(U(e))gn(a,e.bind(n));else if(he(e))if(H(e))e.forEach(i=>cs(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&gn(a,i,e)}}function us(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>dr(l,c,o,!0)),dr(l,t,o)),i.set(t,l),l}function dr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&dr(e,i,n,!0),a&&a.forEach(o=>dr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=$f[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const $f={data:_i,props:kt,emits:kt,methods:kt,computed:kt,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:kt,directives:kt,watch:Df,provide:_i,inject:zf};function _i(e,t){return t?e?function(){return xe(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function zf(e,t){return kt(ra(e),ra(t))}function ra(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function kt(e,t){return e?xe(xe(Object.create(null),e),t):t}function Df(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function Bf(e,t,n,r=!1){const a={},i={};lr(i,Sr,1),e.propsDefaults=Object.create(null),ds(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:ef(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Hf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=X(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(Pr(e.emitsOptions,h))continue;const g=t[h];if(l)if(K(i,h))g!==i[h]&&(i[h]=g,c=!0);else{const A=Ge(h);a[A]=aa(l,s,A,g,e,!1)}else g!==i[h]&&(i[h]=g,c=!0)}}}else{ds(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!K(t,d)&&((f=tn(d))===d||!K(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=aa(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!K(t,d)&&!0)&&(delete i[d],c=!0)}c&&tt(e,"set","$attrs")}function ds(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(tr(l))continue;const c=t[l];let f;a&&K(a,f=Ge(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:Pr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=X(n),c=s||re;for(let f=0;f<i.length;f++){const d=i[f];n[d]=aa(a,l,d,c[d],e,!K(c,d))}}return o}function aa(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=K(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&U(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Qt(a),r=c[n]=l.call(null,t),St())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===tn(n))&&(r=!0))}return r}function ms(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const f=d=>{l=!0;const[h,g]=ms(d,t,!0);xe(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return r.set(e,Yt),Yt;if(H(i))for(let f=0;f<i.length;f++){const d=Ge(i[f]);wi(d)&&(o[d]=re)}else if(i)for(const f in i){const d=Ge(f);if(wi(d)){const h=i[f],g=o[d]=H(h)||U(h)?{type:h}:h;if(g){const A=Ai(Boolean,g.type),F=Ai(String,g.type);g[0]=A>-1,g[1]=F<0||A<F,(A>-1||K(g,"default"))&&s.push(d)}}}const c=[o,s];return r.set(e,c),c}function wi(e){return e[0]!=="$"}function ki(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ei(e,t){return ki(e)===ki(t)}function Ai(e,t){return H(t)?t.findIndex(n=>Ei(n,e)):U(t)&&Ei(t,e)?0:-1}const hs=e=>e[0]==="_"||e==="$stable",za=e=>H(e)?e.map(Ke):[Ke(e)],Uf=(e,t,n)=>{if(t._n)return t;const r=Bt((...a)=>za(t(...a)),n);return r._c=!1,r},ps=(e,t,n)=>{const r=e._ctx;for(const a in e){if(hs(a))continue;const i=e[a];if(U(i))t[a]=Uf(a,i,r);else if(i!=null){const o=za(i);t[a]=()=>o}}},gs=(e,t)=>{const n=za(t);e.slots.default=()=>n},Wf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=X(t),lr(t,"_",n)):ps(t,e.slots={})}else e.slots={},t&&gs(e,t);lr(e.slots,Sr,1)},Yf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(xe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ps(t,a)),o=t}else t&&(gs(e,t),o={default:1});if(i)for(const s in a)!hs(s)&&!(s in o)&&delete a[s]};function vs(){return{app:null,config:{isNativeTag:yl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kf=0;function qf(e,t){return function(r,a=null){U(r)||(r=Object.assign({},r)),a!=null&&!he(a)&&(a=null);const i=vs(),o=new Set;let s=!1;const l=i.app={_uid:Kf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:uc,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(l,...f)):U(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const h=ue(r,a);return h.appContext=i,f&&t?t(h,c):e(h,c,d),s=!0,l._container=c,c.__vue_app__=l,Ha(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function ia(e,t,n,r,a=!1){if(H(e)){e.forEach((h,g)=>ia(h,t&&(H(t)?t[g]:t),n,r,a));return}if(rr(r)&&!a)return;const i=r.shapeFlag&4?Ha(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===re?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(ge(c)?(f[c]=null,K(d,c)&&(d[c]=null)):be(c)&&(c.value=null)),U(l))ht(l,s,12,[o,f]);else{const h=ge(l),g=be(l);if(h||g){const A=()=>{if(e.f){const F=h?f[l]:l.value;a?H(F)&&Ca(F,i):H(F)?F.includes(i)||F.push(i):h?(f[l]=[i],K(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else h?(f[l]=o,K(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(f[e.k]=o))};o?(A.id=-1,we(A,n)):A()}}}const we=bf;function Vf(e){return Xf(e)}function Xf(e,t){const n=Ol();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:h,setScopeId:g=Le,cloneNode:A,insertStaticContent:F}=e,C=(u,m,p,x=null,y=null,E=null,S=!1,k=null,O=!!m.dynamicChildren)=>{if(u===m)return;u&&!fn(u,m)&&(x=L(u),Se(u,y,E,!0),u=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:w,ref:j,shapeFlag:I}=m;switch(w){case Da:v(u,m,p,x);break;case Cn:_(u,m,p,x);break;case zr:u==null&&M(m,p,x,S);break;case Ae:Tt(u,m,p,x,y,E,S,k,O);break;default:I&1?se(u,m,p,x,y,E,S,k,O):I&6?Nt(u,m,p,x,y,E,S,k,O):(I&64||I&128)&&w.process(u,m,p,x,y,E,S,k,O,ne)}j!=null&&y&&ia(j,u&&u.ref,E,m||u,!m)},v=(u,m,p,x)=>{if(u==null)r(m.el=s(m.children),p,x);else{const y=m.el=u.el;m.children!==u.children&&c(y,m.children)}},_=(u,m,p,x)=>{u==null?r(m.el=l(m.children||""),p,x):m.el=u.el},M=(u,m,p,x)=>{[u.el,u.anchor]=F(u.children,m,p,x,u.el,u.anchor)},z=({el:u,anchor:m},p,x)=>{let y;for(;u&&u!==m;)y=h(u),r(u,p,x),u=y;r(m,p,x)},Y=({el:u,anchor:m})=>{let p;for(;u&&u!==m;)p=h(u),a(u),u=p;a(m)},se=(u,m,p,x,y,E,S,k,O)=>{S=S||m.type==="svg",u==null?ce(m,p,x,y,E,S,k,O):Be(u,m,y,E,S,k,O)},ce=(u,m,p,x,y,E,S,k)=>{let O,w;const{type:j,props:I,shapeFlag:$,transition:D,patchFlag:q,dirs:Z}=u;if(u.el&&A!==void 0&&q===-1)O=u.el=A(u.el);else{if(O=u.el=o(u.type,E,I&&I.is,I),$&8?f(O,u.children):$&16&&de(u.children,O,null,x,y,E&&j!=="foreignObject",S,k),Z&&_t(u,null,x,"created"),I){for(const ae in I)ae!=="value"&&!tr(ae)&&i(O,ae,null,I[ae],E,u.children,x,y,P);"value"in I&&i(O,"value",null,I.value),(w=I.onVnodeBeforeMount)&&We(w,x,u)}De(O,u,u.scopeId,S,x)}Z&&_t(u,null,x,"beforeMount");const ee=(!y||y&&!y.pendingBranch)&&D&&!D.persisted;ee&&D.beforeEnter(O),r(O,m,p),((w=I&&I.onVnodeMounted)||ee||Z)&&we(()=>{w&&We(w,x,u),ee&&D.enter(O),Z&&_t(u,null,x,"mounted")},y)},De=(u,m,p,x,y)=>{if(p&&g(u,p),x)for(let E=0;E<x.length;E++)g(u,x[E]);if(y){let E=y.subTree;if(m===E){const S=y.vnode;De(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},de=(u,m,p,x,y,E,S,k,O=0)=>{for(let w=O;w<u.length;w++){const j=u[w]=k?ut(u[w]):Ke(u[w]);C(null,j,m,p,x,y,E,S,k)}},Be=(u,m,p,x,y,E,S)=>{const k=m.el=u.el;let{patchFlag:O,dynamicChildren:w,dirs:j}=m;O|=u.patchFlag&16;const I=u.props||re,$=m.props||re;let D;p&&wt(p,!1),(D=$.onVnodeBeforeUpdate)&&We(D,p,m,u),j&&_t(m,u,p,"beforeUpdate"),p&&wt(p,!0);const q=y&&m.type!=="foreignObject";if(w?Qe(u.dynamicChildren,w,k,p,x,q,E):S||ke(u,m,k,null,p,x,q,E,!1),O>0){if(O&16)Re(k,m,I,$,p,x,y);else if(O&2&&I.class!==$.class&&i(k,"class",null,$.class,y),O&4&&i(k,"style",I.style,$.style,y),O&8){const Z=m.dynamicProps;for(let ee=0;ee<Z.length;ee++){const ae=Z[ee],Ie=I[ae],Lt=$[ae];(Lt!==Ie||ae==="value")&&i(k,ae,Ie,Lt,y,u.children,p,x,P)}}O&1&&u.children!==m.children&&f(k,m.children)}else!S&&w==null&&Re(k,m,I,$,p,x,y);((D=$.onVnodeUpdated)||j)&&we(()=>{D&&We(D,p,m,u),j&&_t(m,u,p,"updated")},x)},Qe=(u,m,p,x,y,E,S)=>{for(let k=0;k<m.length;k++){const O=u[k],w=m[k],j=O.el&&(O.type===Ae||!fn(O,w)||O.shapeFlag&70)?d(O.el):p;C(O,w,j,null,x,y,E,S,!0)}},Re=(u,m,p,x,y,E,S)=>{if(p!==x){for(const k in x){if(tr(k))continue;const O=x[k],w=p[k];O!==w&&k!=="value"&&i(u,k,w,O,S,m.children,y,E,P)}if(p!==re)for(const k in p)!tr(k)&&!(k in x)&&i(u,k,p[k],null,S,m.children,y,E,P);"value"in x&&i(u,"value",p.value,x.value)}},Tt=(u,m,p,x,y,E,S,k,O)=>{const w=m.el=u?u.el:s(""),j=m.anchor=u?u.anchor:s("");let{patchFlag:I,dynamicChildren:$,slotScopeIds:D}=m;D&&(k=k?k.concat(D):D),u==null?(r(w,p,x),r(j,p,x),de(m.children,p,j,y,E,S,k,O)):I>0&&I&64&&$&&u.dynamicChildren?(Qe(u.dynamicChildren,$,p,y,E,S,k),(m.key!=null||y&&m===y.subTree)&&bs(u,m,!0)):ke(u,m,p,j,y,E,S,k,O)},Nt=(u,m,p,x,y,E,S,k,O)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?y.ctx.activate(m,p,x,S,O):Mt(m,p,x,y,E,S,O):me(u,m,O)},Mt=(u,m,p,x,y,E,S)=>{const k=u.component=ac(u,x,y);if(os(u)&&(k.ctx.renderer=ne),ic(k),k.asyncDep){if(y&&y.registerDep(k,te),!u.el){const O=k.subTree=ue(Cn);_(null,O,m,p)}return}te(k,u,m,p,y,E,S)},me=(u,m,p)=>{const x=m.component=u.component;if(pf(u,m,p))if(x.asyncDep&&!x.asyncResolved){J(x,m,p);return}else x.next=m,ff(x.update),x.update();else m.el=u.el,x.vnode=m},te=(u,m,p,x,y,E,S)=>{const k=()=>{if(u.isMounted){let{next:j,bu:I,u:$,parent:D,vnode:q}=u,Z=j,ee;wt(u,!1),j?(j.el=q.el,J(u,j,S)):j=q,I&&jr(I),(ee=j.props&&j.props.onVnodeBeforeUpdate)&&We(ee,D,j,q),wt(u,!0);const ae=$r(u),Ie=u.subTree;u.subTree=ae,C(Ie,ae,d(Ie.el),L(Ie),u,y,E),j.el=ae.el,Z===null&&gf(u,ae.el),$&&we($,y),(ee=j.props&&j.props.onVnodeUpdated)&&we(()=>We(ee,D,j,q),y)}else{let j;const{el:I,props:$}=m,{bm:D,m:q,parent:Z}=u,ee=rr(m);if(wt(u,!1),D&&jr(D),!ee&&(j=$&&$.onVnodeBeforeMount)&&We(j,Z,m),wt(u,!0),I&&B){const ae=()=>{u.subTree=$r(u),B(I,u.subTree,u,y,null)};ee?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ae()):ae()}else{const ae=u.subTree=$r(u);C(null,ae,p,x,u,y,E),m.el=ae.el}if(q&&we(q,y),!ee&&(j=$&&$.onVnodeMounted)){const ae=m;we(()=>We(j,Z,ae),y)}(m.shapeFlag&256||Z&&rr(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&we(u.a,y),u.isMounted=!0,m=p=x=null}},O=u.effect=new Ta(k,()=>Qo(w),u.scope),w=u.update=()=>O.run();w.id=u.uid,wt(u,!0),w()},J=(u,m,p)=>{m.component=u;const x=u.vnode.props;u.vnode=m,u.next=null,Hf(u,m.props,x,p),Yf(u,m.children,p),nn(),Or(void 0,u.update),rn()},ke=(u,m,p,x,y,E,S,k,O=!1)=>{const w=u&&u.children,j=u?u.shapeFlag:0,I=m.children,{patchFlag:$,shapeFlag:D}=m;if($>0){if($&128){Je(w,I,p,x,y,E,S,k,O);return}else if($&256){Ft(w,I,p,x,y,E,S,k,O);return}}D&8?(j&16&&P(w,y,E),I!==w&&f(p,I)):j&16?D&16?Je(w,I,p,x,y,E,S,k,O):P(w,y,E,!0):(j&8&&f(p,""),D&16&&de(I,p,x,y,E,S,k,O))},Ft=(u,m,p,x,y,E,S,k,O)=>{u=u||Yt,m=m||Yt;const w=u.length,j=m.length,I=Math.min(w,j);let $;for($=0;$<I;$++){const D=m[$]=O?ut(m[$]):Ke(m[$]);C(u[$],D,p,null,y,E,S,k,O)}w>j?P(u,y,E,!0,!1,I):de(m,p,x,y,E,S,k,O,I)},Je=(u,m,p,x,y,E,S,k,O)=>{let w=0;const j=m.length;let I=u.length-1,$=j-1;for(;w<=I&&w<=$;){const D=u[w],q=m[w]=O?ut(m[w]):Ke(m[w]);if(fn(D,q))C(D,q,p,null,y,E,S,k,O);else break;w++}for(;w<=I&&w<=$;){const D=u[I],q=m[$]=O?ut(m[$]):Ke(m[$]);if(fn(D,q))C(D,q,p,null,y,E,S,k,O);else break;I--,$--}if(w>I){if(w<=$){const D=$+1,q=D<j?m[D].el:x;for(;w<=$;)C(null,m[w]=O?ut(m[w]):Ke(m[w]),p,q,y,E,S,k,O),w++}}else if(w>$)for(;w<=I;)Se(u[w],y,E,!0),w++;else{const D=w,q=w,Z=new Map;for(w=q;w<=$;w++){const Ee=m[w]=O?ut(m[w]):Ke(m[w]);Ee.key!=null&&Z.set(Ee.key,w)}let ee,ae=0;const Ie=$-q+1;let Lt=!1,oi=0;const ln=new Array(Ie);for(w=0;w<Ie;w++)ln[w]=0;for(w=D;w<=I;w++){const Ee=u[w];if(ae>=Ie){Se(Ee,y,E,!0);continue}let Ue;if(Ee.key!=null)Ue=Z.get(Ee.key);else for(ee=q;ee<=$;ee++)if(ln[ee-q]===0&&fn(Ee,m[ee])){Ue=ee;break}Ue===void 0?Se(Ee,y,E,!0):(ln[Ue-q]=w+1,Ue>=oi?oi=Ue:Lt=!0,C(Ee,m[Ue],p,null,y,E,S,k,O),ae++)}const si=Lt?Gf(ln):Yt;for(ee=si.length-1,w=Ie-1;w>=0;w--){const Ee=q+w,Ue=m[Ee],li=Ee+1<j?m[Ee+1].el:x;ln[w]===0?C(null,Ue,p,li,y,E,S,k,O):Lt&&(ee<0||w!==si[ee]?He(Ue,p,li,2):ee--)}}},He=(u,m,p,x,y=null)=>{const{el:E,type:S,transition:k,children:O,shapeFlag:w}=u;if(w&6){He(u.component.subTree,m,p,x);return}if(w&128){u.suspense.move(m,p,x);return}if(w&64){S.move(u,m,p,ne);return}if(S===Ae){r(E,m,p);for(let I=0;I<O.length;I++)He(O[I],m,p,x);r(u.anchor,m,p);return}if(S===zr){z(u,m,p);return}if(x!==2&&w&1&&k)if(x===0)k.beforeEnter(E),r(E,m,p),we(()=>k.enter(E),y);else{const{leave:I,delayLeave:$,afterLeave:D}=k,q=()=>r(E,m,p),Z=()=>{I(E,()=>{q(),D&&D()})};$?$(E,q,Z):Z()}else r(E,m,p)},Se=(u,m,p,x=!1,y=!1)=>{const{type:E,props:S,ref:k,children:O,dynamicChildren:w,shapeFlag:j,patchFlag:I,dirs:$}=u;if(k!=null&&ia(k,null,p,u,!0),j&256){m.ctx.deactivate(u);return}const D=j&1&&$,q=!rr(u);let Z;if(q&&(Z=S&&S.onVnodeBeforeUnmount)&&We(Z,m,u),j&6)N(u.component,p,x);else{if(j&128){u.suspense.unmount(p,x);return}D&&_t(u,null,m,"beforeUnmount"),j&64?u.type.remove(u,m,p,y,ne,x):w&&(E!==Ae||I>0&&I&64)?P(w,m,p,!1,!0):(E===Ae&&I&384||!y&&j&16)&&P(O,m,p),x&&sn(u)}(q&&(Z=S&&S.onVnodeUnmounted)||D)&&we(()=>{Z&&We(Z,m,u),D&&_t(u,null,m,"unmounted")},p)},sn=u=>{const{type:m,el:p,anchor:x,transition:y}=u;if(m===Ae){b(p,x);return}if(m===zr){Y(u);return}const E=()=>{a(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:k}=y,O=()=>S(p,E);k?k(u.el,E,O):O()}else E()},b=(u,m)=>{let p;for(;u!==m;)p=h(u),a(u),u=p;a(m)},N=(u,m,p)=>{const{bum:x,scope:y,update:E,subTree:S,um:k}=u;x&&jr(x),y.stop(),E&&(E.active=!1,Se(S,u,m,p)),k&&we(k,m),we(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},P=(u,m,p,x=!1,y=!1,E=0)=>{for(let S=E;S<u.length;S++)Se(u[S],m,p,x,y)},L=u=>u.shapeFlag&6?L(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),G=(u,m,p)=>{u==null?m._vnode&&Se(m._vnode,null,null,!0):C(m._vnode||null,u,m,null,null,null,p),es(),m._vnode=u},ne={p:C,um:Se,m:He,r:sn,mt:Mt,mc:de,pc:ke,pbc:Qe,n:L,o:e};let W,B;return t&&([W,B]=t(ne)),{render:G,hydrate:W,createApp:qf(G,W)}}function wt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function bs(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ut(a[i]),s.el=o.el),n||bs(o,s))}}function Gf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Qf=e=>e.__isTeleport,Ae=Symbol(void 0),Da=Symbol(void 0),Cn=Symbol(void 0),zr=Symbol(void 0),vn=[];let Me=null;function Xe(e=!1){vn.push(Me=e?null:[])}function Jf(){vn.pop(),Me=vn[vn.length-1]||null}let Sn=1;function Oi(e){Sn+=e}function ys(e){return e.dynamicChildren=Sn>0?Me||Yt:null,Jf(),Sn>0&&Me&&Me.push(e),e}function gt(e,t,n,r,a,i){return ys(V(e,t,n,r,a,i,!0))}function xs(e,t,n,r,a){return ys(ue(e,t,n,r,a,!0))}function oa(e){return e?e.__v_isVNode===!0:!1}function fn(e,t){return e.type===t.type&&e.key===t.key}const Sr="__vInternal",_s=({key:e})=>e!=null?e:null,ar=({ref:e,ref_key:t,ref_for:n})=>e!=null?ge(e)||be(e)||U(e)?{i:qe,r:e,k:t,f:!!n}:e:null;function V(e,t=null,n=null,r=0,a=null,i=e===Ae?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_s(t),ref:t&&ar(t),scopeId:rs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Ba(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),Sn>0&&!o&&Me&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Me.push(l),l}const ue=Zf;function Zf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Tf)&&(e=Cn),oa(e)){const s=Gt(e,t,!0);return n&&Ba(s,n),Sn>0&&!i&&Me&&(s.shapeFlag&6?Me[Me.indexOf(e)]=s:Me.push(s)),s.patchFlag|=-2,s}if(cc(e)&&(e=e.__vccOpts),t){t=ec(t);let{class:s,style:l}=t;s&&!ge(s)&&(t.class=At(s)),he(l)&&(Uo(l)&&!H(l)&&(l=xe({},l)),t.style=Oa(l))}const o=ge(e)?1:vf(e)?128:Qf(e)?64:he(e)?4:U(e)?2:0;return V(e,t,n,r,a,o,i,!0)}function ec(e){return e?Uo(e)||Sr in e?xe({},e):e:null}function Gt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?tc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&_s(s),ref:t&&t.ref?n&&a?H(a)?a.concat(ar(t)):[a,ar(t)]:ar(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gt(e.ssContent),ssFallback:e.ssFallback&&Gt(e.ssFallback),el:e.el,anchor:e.anchor}}function an(e=" ",t=0){return ue(Da,null,e,t)}function Ke(e){return e==null||typeof e=="boolean"?ue(Cn):H(e)?ue(Ae,null,e.slice()):typeof e=="object"?ut(e):ue(Da,null,String(e))}function ut(e){return e.el===null||e.memo?e:Gt(e)}function Ba(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ba(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Sr in t)?t._ctx=qe:a===3&&qe&&(qe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:qe},n=32):(t=String(t),r&64?(n=16,t=[an(t)]):n=8);e.children=t,e.shapeFlag|=n}function tc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=At([t.class,r.class]));else if(a==="style")t.style=Oa([t.style,r.style]);else if(yr(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function We(e,t,n,r=null){je(e,t,7,[n,r])}const nc=vs();let rc=0;function ac(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||nc,i={uid:rc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ms(r,a),emitsOptions:ns(r,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=df.bind(null,i),e.ce&&e.ce(i),i}let ve=null;const Qt=e=>{ve=e,e.scope.on()},St=()=>{ve&&ve.scope.off(),ve=null};function ws(e){return e.vnode.shapeFlag&4}let Rn=!1;function ic(e,t=!1){Rn=t;const{props:n,children:r}=e.vnode,a=ws(e);Bf(e,n,a,t),Wf(e,r);const i=a?oc(e,t):void 0;return Rn=!1,i}function oc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Wo(new Proxy(e.ctx,Ff));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?lc(e):null;Qt(e),nn();const i=ht(r,e,0,[e.props,a]);if(rn(),St(),So(i)){if(i.then(St,St),t)return i.then(o=>{Pi(e,o,t)}).catch(o=>{Ar(o,e,0)});e.asyncDep=i}else Pi(e,i,t)}else ks(e,t)}function Pi(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=Vo(t)),ks(e,n)}let Ci;function ks(e,t,n){const r=e.type;if(!e.render){if(!t&&Ci&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=xe(xe({isCustomElement:i,delimiters:s},o),l);r.render=Ci(a,c)}}e.render=r.render||Le}Qt(e),nn(),Lf(e),rn(),St()}function sc(e){return new Proxy(e.attrs,{get(t,n){return Pe(e,"get","$attrs"),t[n]}})}function lc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=sc(e))},slots:e.slots,emit:e.emit,expose:t}}function Ha(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Vo(Wo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ur)return ur[n](e)}}))}function fc(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function cc(e){return U(e)&&"__vccOpts"in e}const le=(e,t)=>of(e,t,Rn);function Rr(e,t,n){const r=arguments.length;return r===2?he(t)&&!H(t)?oa(t)?ue(e,null,[t]):ue(e,t):ue(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oa(n)&&(n=[n]),ue(e,t,n))}const uc="3.2.37",dc="http://www.w3.org/2000/svg",Et=typeof document!="undefined"?document:null,Si=Et&&Et.createElement("template"),mc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Et.createElementNS(dc,e):Et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Et.createTextNode(e),createComment:e=>Et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Si.innerHTML=r?`<svg>${e}</svg>`:e;const s=Si.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function hc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function pc(e,t,n){const r=e.style,a=ge(n);if(n&&!a){for(const i in n)sa(r,i,n[i]);if(t&&!ge(t))for(const i in t)n[i]==null&&sa(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ri=/\s*!important$/;function sa(e,t,n){if(H(n))n.forEach(r=>sa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=gc(e,t);Ri.test(n)?e.setProperty(tn(r),n.replace(Ri,""),"important"):e[r]=n}}const Ii=["Webkit","Moz","ms"],Dr={};function gc(e,t){const n=Dr[t];if(n)return n;let r=Ge(t);if(r!=="filter"&&r in e)return Dr[t]=r;r=wr(r);for(let a=0;a<Ii.length;a++){const i=Ii[a]+r;if(i in e)return Dr[t]=i}return t}const Ti="http://www.w3.org/1999/xlink";function vc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ti,t.slice(6,t.length)):e.setAttributeNS(Ti,t,n);else{const i=pl(t);n==null||i&&!Oo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function bc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Oo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[Es,yc]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let la=0;const xc=Promise.resolve(),_c=()=>{la=0},wc=()=>la||(xc.then(_c),la=Es());function kc(e,t,n,r){e.addEventListener(t,n,r)}function Ec(e,t,n,r){e.removeEventListener(t,n,r)}function Ac(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Oc(t);if(r){const c=i[t]=Pc(r,a);kc(e,s,c,l)}else o&&(Ec(e,s,o,l),i[t]=void 0)}}const Ni=/(?:Once|Passive|Capture)$/;function Oc(e){let t;if(Ni.test(e)){t={};let n;for(;n=e.match(Ni);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[tn(e.slice(2)),t]}function Pc(e,t){const n=r=>{const a=r.timeStamp||Es();(yc||a>=n.attached-1)&&je(Cc(r,n.value),t,5,[r])};return n.value=e,n.attached=wc(),n}function Cc(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Mi=/^on[a-z]/,Sc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?hc(e,r,a):t==="style"?pc(e,n,r):yr(t)?Pa(t)||Ac(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rc(e,t,r,a))?bc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),vc(e,t,r,a))};function Rc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Mi.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Mi.test(t)&&ge(n)?!1:t in e}const Ic=xe({patchProp:Sc},mc);let Fi;function Tc(){return Fi||(Fi=Vf(Ic))}const Nc=(...e)=>{const t=Tc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Mc(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Mc(e){return ge(e)?document.querySelector(e):e}var Fc="/assets/omo_pen.5527f84a.png";const Lc={class:"w-full bg-white bg-white"},jc={class:"container mx-auto py-5 flex justify-between items-center"},$c=V("div",{class:"flex items-center gap-2"},[V("img",{class:"w-8",src:Fc,alt:"logo"}),V("span",{class:"text-2xl font-bold text-indigo-900"},"omomuro.dev")],-1),zc={class:"hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase"},Dc={class:"hover:text-gray-500"},Bc=an("home"),Hc={class:"hover:text-gray-500"},Uc=an(" labo "),Wc={class:"hover:text-gray-500"},Yc=an("about"),Kc=V("svg",{class:"hidden md:block w-5 cursor-pointer",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[V("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})],-1),qc=V("li",null,[V("a",{href:"#"},"home")],-1),Vc=V("li",null,[V("a",{href:"#"},"about")],-1),Xc=V("li",null,[V("a",{href:"#"},"works")],-1),Gc=V("li",null,[V("a",{href:"#"},"contact")],-1),Qc=[qc,Vc,Xc,Gc],Jc=ze({__name:"NavBar",setup(e){const t=Er(!1);return(n,r)=>{const a=Pn("router-link"),i=Pn("font-awesome-icon");return Xe(),gt("nav",Lc,[V("div",jc,[ue(a,{to:"/"},{default:Bt(()=>[$c]),_:1}),V("ul",zc,[V("li",Dc,[ue(a,{to:"/"},{default:Bt(()=>[Bc]),_:1})]),V("li",Hc,[ue(a,{to:"/labo"},{default:Bt(()=>[ue(i,{icon:"fa-solid fa-flask"}),Uc]),_:1})]),V("li",Wc,[ue(a,{to:"/about"},{default:Bt(()=>[Yc]),_:1})])]),Kc,V("div",{class:"space-y-1 md:hidden cursor-pointer z-20",onClick:r[0]||(r[0]=o=>t.value=!t.value)},[V("div",{class:At(["w-6 h-0.5",t.value?"bg-white":"bg-black"])},null,2),V("div",{class:At(["w-6 h-0.5",t.value?"bg-white":"bg-black"])},null,2),V("div",{class:At(["w-6 h-0.5",t.value?"bg-white":"bg-black"])},null,2)]),V("ul",{class:At([t.value?"block":"hidden","md:hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"])},Qc,2)])])}}}),Zc={class:"container mx-auto px-4 py-2 bg-gray-50"},eu=ze({__name:"App",setup(e){return(t,n)=>{const r=Pn("router-view");return Xe(),gt(Ae,null,[ue(Jc),V("div",Zc,[ue(r)])],64)}}});/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Dt=typeof window!="undefined";function tu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Br(e,t){const n={};for(const r in t){const a=t[r];n[r]=$e(a)?a.map(e):e(a)}return n}const bn=()=>{},$e=Array.isArray,nu=/\/$/,ru=e=>e.replace(nu,"");function Hr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=su(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function au(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Li(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function iu(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Jt(t.matched[r],n.matched[a])&&As(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Jt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function As(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ou(e[n],t[n]))return!1;return!0}function ou(e,t){return $e(e)?ji(e,t):$e(t)?ji(t,e):e===t}function ji(e,t){return $e(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function su(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var In;(function(e){e.pop="pop",e.push="push"})(In||(In={}));var yn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(yn||(yn={}));function lu(e){if(!e)if(Dt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ru(e)}const fu=/^[^#]+#/;function cu(e,t){return e.replace(fu,"#")+t}function uu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ir=()=>({left:window.pageXOffset,top:window.pageYOffset});function du(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=uu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function $i(e,t){return(history.state?history.state.position-t:-1)+e}const fa=new Map;function mu(e,t){fa.set(e,t)}function hu(e){const t=fa.get(e);return fa.delete(e),t}let pu=()=>location.protocol+"//"+location.host;function Os(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Li(l,"")}return Li(n,e)+r+a}function gu(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const g=Os(e,location),A=n.value,F=t.value;let C=0;if(h){if(n.value=g,t.value=h,o&&o===A){o=null;return}C=F?h.position-F.position:0}else r(g);a.forEach(v=>{v(n.value,A,{delta:C,type:In.pop,direction:C?C>0?yn.forward:yn.back:yn.unknown})})};function l(){o=n.value}function c(h){a.push(h);const g=()=>{const A=a.indexOf(h);A>-1&&a.splice(A,1)};return i.push(g),g}function f(){const{history:h}=window;!h.state||h.replaceState(Q({},h.state,{scroll:Ir()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function zi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Ir():null}}function vu(e){const{history:t,location:n}=window,r={value:Os(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:pu()+e+l;try{t[f?"replaceState":"pushState"](c,"",h),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](h)}}function o(l,c){const f=Q({},t.state,zi(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=Q({},a.value,t.state,{forward:l,scroll:Ir()});i(f.current,f,!0);const d=Q({},zi(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function bu(e){e=lu(e);const t=vu(e),n=gu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=Q({location:"",base:e,go:r,createHref:cu.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function yu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),bu(e)}function xu(e){return typeof e=="string"||e&&typeof e=="object"}function Ps(e){return typeof e=="string"||typeof e=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cs=Symbol("");var Di;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Di||(Di={}));function Zt(e,t){return Q(new Error,{type:e,[Cs]:!0},t)}function Ze(e,t){return e instanceof Error&&Cs in e&&(t==null||!!(e.type&t))}const Bi="[^/]+?",_u={sensitive:!1,strict:!1,start:!0,end:!0},wu=/[.+*?^${}()[\]/\\]/g;function ku(e,t){const n=Q({},_u,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const h=c[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(wu,"\\$&"),g+=40;else if(h.type===1){const{value:A,repeatable:F,optional:C,regexp:v}=h;i.push({name:A,repeatable:F,optional:C});const _=v||Bi;if(_!==Bi){g+=10;try{new RegExp(`(${_})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${A}" (${_}): `+z.message)}}let M=F?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(M=C&&c.length<2?`(?:/${M})`:"/"+M),C&&(M+="?"),a+=M,g+=20,C&&(g+=-8),F&&(g+=-20),_===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let h=1;h<f.length;h++){const g=f[h]||"",A=i[h-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of h)if(g.type===0)f+=g.value;else if(g.type===1){const{value:A,repeatable:F,optional:C}=g,v=A in c?c[A]:"";if($e(v)&&!F)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const _=$e(v)?v.join("/"):v;if(!_)if(C)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);f+=_}}return f||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Eu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Au(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Eu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Hi(r))return 1;if(Hi(a))return-1}return a.length-r.length}function Hi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ou={type:0,value:""},Pu=/[a-zA-Z0-9_]/;function Cu(e){if(!e)return[[]];if(e==="/")return[[Ou]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Pu.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function Su(e,t,n){const r=ku(Cu(e.path),n),a=Q(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Ru(e,t){const n=[],r=new Map;t=Yi({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,h){const g=!h,A=Iu(f);A.aliasOf=h&&h.record;const F=Yi(t,f),C=[A];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of M)C.push(Q({},A,{components:h?h.record.components:A.components,path:z,aliasOf:h?h.record:A}))}let v,_;for(const M of C){const{path:z}=M;if(d&&z[0]!=="/"){const Y=d.record.path,se=Y[Y.length-1]==="/"?"":"/";M.path=d.record.path+(z&&se+z)}if(v=Su(M,d,F),h?h.alias.push(v):(_=_||v,_!==v&&_.alias.push(v),g&&f.name&&!Wi(v)&&o(f.name)),A.children){const Y=A.children;for(let se=0;se<Y.length;se++)i(Y[se],v,h&&h.children[se])}h=h||v,l(v)}return _?()=>{o(_)}:bn}function o(f){if(Ps(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&Au(f,n[d])>=0&&(f.record.path!==n[d].record.path||!Ss(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!Wi(f)&&r.set(f.record.name,f)}function c(f,d){let h,g={},A,F;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw Zt(1,{location:f});F=h.record.name,g=Q(Ui(d.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),f.params&&Ui(f.params,h.keys.map(_=>_.name))),A=h.stringify(g)}else if("path"in f)A=f.path,h=n.find(_=>_.re.test(A)),h&&(g=h.parse(A),F=h.record.name);else{if(h=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!h)throw Zt(1,{location:f,currentLocation:d});F=h.record.name,g=Q({},d.params,f.params),A=h.stringify(g)}const C=[];let v=h;for(;v;)C.unshift(v.record),v=v.parent;return{name:F,path:A,params:g,matched:C,meta:Nu(C)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Ui(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Iu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Tu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Tu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Wi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Nu(e){return e.reduce((t,n)=>Q(t,n.meta),{})}function Yi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ss(e,t){return t.children.some(n=>n===e||Ss(e,n))}const Rs=/#/g,Mu=/&/g,Fu=/\//g,Lu=/=/g,ju=/\?/g,Is=/\+/g,$u=/%5B/g,zu=/%5D/g,Ts=/%5E/g,Du=/%60/g,Ns=/%7B/g,Bu=/%7C/g,Ms=/%7D/g,Hu=/%20/g;function Ua(e){return encodeURI(""+e).replace(Bu,"|").replace($u,"[").replace(zu,"]")}function Uu(e){return Ua(e).replace(Ns,"{").replace(Ms,"}").replace(Ts,"^")}function ca(e){return Ua(e).replace(Is,"%2B").replace(Hu,"+").replace(Rs,"%23").replace(Mu,"%26").replace(Du,"`").replace(Ns,"{").replace(Ms,"}").replace(Ts,"^")}function Wu(e){return ca(e).replace(Lu,"%3D")}function Yu(e){return Ua(e).replace(Rs,"%23").replace(ju,"%3F")}function Ku(e){return e==null?"":Yu(e).replace(Fu,"%2F")}function mr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function qu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Is," "),o=i.indexOf("="),s=mr(o<0?i:i.slice(0,o)),l=o<0?null:mr(i.slice(o+1));if(s in t){let c=t[s];$e(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function Ki(e){let t="";for(let n in e){const r=e[n];if(n=Wu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}($e(r)?r.map(i=>i&&ca(i)):[r&&ca(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Vu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=$e(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Xu=Symbol(""),qi=Symbol(""),Wa=Symbol(""),Fs=Symbol(""),ua=Symbol("");function cn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function dt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Zt(4,{from:n,to:t})):d instanceof Error?s(d):xu(d)?s(Zt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function Ur(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Gu(s)){const c=(s.__vccOpts||s)[t];c&&a.push(dt(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=tu(c)?c.default:c;i.components[o]=f;const h=(f.__vccOpts||f)[t];return h&&dt(h,n,r,i,o)()}))}}return a}function Gu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Vi(e){const t=pt(Wa),n=pt(Fs),r=le(()=>t.resolve(Vt(e.to))),a=le(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const h=d.findIndex(Jt.bind(null,f));if(h>-1)return h;const g=Xi(l[c-2]);return c>1&&Xi(f)===g&&d[d.length-1].path!==g?d.findIndex(Jt.bind(null,l[c-2])):h}),i=le(()=>a.value>-1&&ed(n.params,r.value.params)),o=le(()=>a.value>-1&&a.value===n.matched.length-1&&As(n.params,r.value.params));function s(l={}){return Zu(l)?t[Vt(e.replace)?"replace":"push"](Vt(e.to)).catch(bn):Promise.resolve()}return{route:r,href:le(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Qu=ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vi,setup(e,{slots:t}){const n=jn(Vi(e)),{options:r}=pt(Wa),a=le(()=>({[Gi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Rr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Ju=Qu;function Zu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ed(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!$e(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Xi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Gi=(e,t,n)=>e!=null?e:t!=null?t:n,td=ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=pt(ua),a=le(()=>e.route||r.value),i=pt(qi,0),o=le(()=>{let c=Vt(i);const{matched:f}=a.value;let d;for(;(d=f[c])&&!d.components;)c++;return c}),s=le(()=>a.value.matched[o.value]);nr(qi,le(()=>o.value+1)),nr(Xu,s),nr(ua,a);const l=Er();return gn(()=>[l.value,s.value,e.name],([c,f,d],[h,g,A])=>{f&&(f.instances[d]=c,g&&g!==f&&c&&c===h&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),c&&f&&(!g||!Jt(f,g)||!h)&&(f.enterCallbacks[d]||[]).forEach(F=>F(c))},{flush:"post"}),()=>{const c=a.value,f=e.name,d=s.value,h=d&&d.components[f];if(!h)return Qi(n.default,{Component:h,route:c});const g=d.props[f],A=g?g===!0?c.params:typeof g=="function"?g(c):g:null,C=Rr(h,Q({},A,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return Qi(n.default,{Component:C,route:c})||C}}});function Qi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const nd=td;function rd(e){const t=Ru(e.routes,e),n=e.parseQuery||qu,r=e.stringifyQuery||Ki,a=e.history,i=cn(),o=cn(),s=cn(),l=tf(lt);let c=lt;Dt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Br.bind(null,b=>""+b),d=Br.bind(null,Ku),h=Br.bind(null,mr);function g(b,N){let P,L;return Ps(b)?(P=t.getRecordMatcher(b),L=N):L=b,t.addRoute(L,P)}function A(b){const N=t.getRecordMatcher(b);N&&t.removeRoute(N)}function F(){return t.getRoutes().map(b=>b.record)}function C(b){return!!t.getRecordMatcher(b)}function v(b,N){if(N=Q({},N||l.value),typeof b=="string"){const B=Hr(n,b,N.path),u=t.resolve({path:B.path},N),m=a.createHref(B.fullPath);return Q(B,u,{params:h(u.params),hash:mr(B.hash),redirectedFrom:void 0,href:m})}let P;if("path"in b)P=Q({},b,{path:Hr(n,b.path,N.path).path});else{const B=Q({},b.params);for(const u in B)B[u]==null&&delete B[u];P=Q({},b,{params:d(b.params)}),N.params=d(N.params)}const L=t.resolve(P,N),G=b.hash||"";L.params=f(h(L.params));const ne=au(r,Q({},b,{hash:Uu(G),path:L.path})),W=a.createHref(ne);return Q({fullPath:ne,hash:G,query:r===Ki?Vu(b.query):b.query||{}},L,{redirectedFrom:void 0,href:W})}function _(b){return typeof b=="string"?Hr(n,b,l.value.path):Q({},b)}function M(b,N){if(c!==b)return Zt(8,{from:N,to:b})}function z(b){return ce(b)}function Y(b){return z(Q(_(b),{replace:!0}))}function se(b){const N=b.matched[b.matched.length-1];if(N&&N.redirect){const{redirect:P}=N;let L=typeof P=="function"?P(b):P;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=_(L):{path:L},L.params={}),Q({query:b.query,hash:b.hash,params:"path"in L?{}:b.params},L)}}function ce(b,N){const P=c=v(b),L=l.value,G=b.state,ne=b.force,W=b.replace===!0,B=se(P);if(B)return ce(Q(_(B),{state:typeof B=="object"?Q({},G,B.state):G,force:ne,replace:W}),N||P);const u=P;u.redirectedFrom=N;let m;return!ne&&iu(r,L,P)&&(m=Zt(16,{to:u,from:L}),Ft(L,L,!0,!1)),(m?Promise.resolve(m):de(u,L)).catch(p=>Ze(p)?Ze(p,2)?p:ke(p):te(p,u,L)).then(p=>{if(p){if(Ze(p,2))return ce(Q({replace:W},_(p.to),{state:typeof p.to=="object"?Q({},G,p.to.state):G,force:ne}),N||u)}else p=Qe(u,L,!0,W,G);return Be(u,L,p),p})}function De(b,N){const P=M(b,N);return P?Promise.reject(P):Promise.resolve()}function de(b,N){let P;const[L,G,ne]=ad(b,N);P=Ur(L.reverse(),"beforeRouteLeave",b,N);for(const B of L)B.leaveGuards.forEach(u=>{P.push(dt(u,b,N))});const W=De.bind(null,b,N);return P.push(W),jt(P).then(()=>{P=[];for(const B of i.list())P.push(dt(B,b,N));return P.push(W),jt(P)}).then(()=>{P=Ur(G,"beforeRouteUpdate",b,N);for(const B of G)B.updateGuards.forEach(u=>{P.push(dt(u,b,N))});return P.push(W),jt(P)}).then(()=>{P=[];for(const B of b.matched)if(B.beforeEnter&&!N.matched.includes(B))if($e(B.beforeEnter))for(const u of B.beforeEnter)P.push(dt(u,b,N));else P.push(dt(B.beforeEnter,b,N));return P.push(W),jt(P)}).then(()=>(b.matched.forEach(B=>B.enterCallbacks={}),P=Ur(ne,"beforeRouteEnter",b,N),P.push(W),jt(P))).then(()=>{P=[];for(const B of o.list())P.push(dt(B,b,N));return P.push(W),jt(P)}).catch(B=>Ze(B,8)?B:Promise.reject(B))}function Be(b,N,P){for(const L of s.list())L(b,N,P)}function Qe(b,N,P,L,G){const ne=M(b,N);if(ne)return ne;const W=N===lt,B=Dt?history.state:{};P&&(L||W?a.replace(b.fullPath,Q({scroll:W&&B&&B.scroll},G)):a.push(b.fullPath,G)),l.value=b,Ft(b,N,P,W),ke()}let Re;function Tt(){Re||(Re=a.listen((b,N,P)=>{if(!sn.listening)return;const L=v(b),G=se(L);if(G){ce(Q(G,{replace:!0}),L).catch(bn);return}c=L;const ne=l.value;Dt&&mu($i(ne.fullPath,P.delta),Ir()),de(L,ne).catch(W=>Ze(W,12)?W:Ze(W,2)?(ce(W.to,L).then(B=>{Ze(B,20)&&!P.delta&&P.type===In.pop&&a.go(-1,!1)}).catch(bn),Promise.reject()):(P.delta&&a.go(-P.delta,!1),te(W,L,ne))).then(W=>{W=W||Qe(L,ne,!1),W&&(P.delta&&!Ze(W,8)?a.go(-P.delta,!1):P.type===In.pop&&Ze(W,20)&&a.go(-1,!1)),Be(L,ne,W)}).catch(bn)}))}let Nt=cn(),Mt=cn(),me;function te(b,N,P){ke(b);const L=Mt.list();return L.length?L.forEach(G=>G(b,N,P)):console.error(b),Promise.reject(b)}function J(){return me&&l.value!==lt?Promise.resolve():new Promise((b,N)=>{Nt.add([b,N])})}function ke(b){return me||(me=!b,Tt(),Nt.list().forEach(([N,P])=>b?P(b):N()),Nt.reset()),b}function Ft(b,N,P,L){const{scrollBehavior:G}=e;if(!Dt||!G)return Promise.resolve();const ne=!P&&hu($i(b.fullPath,0))||(L||!P)&&history.state&&history.state.scroll||null;return Go().then(()=>G(b,N,ne)).then(W=>W&&du(W)).catch(W=>te(W,b,N))}const Je=b=>a.go(b);let He;const Se=new Set,sn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:C,getRoutes:F,resolve:v,options:e,push:z,replace:Y,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:Mt.add,isReady:J,install(b){const N=this;b.component("RouterLink",Ju),b.component("RouterView",nd),b.config.globalProperties.$router=N,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Vt(l)}),Dt&&!He&&l.value===lt&&(He=!0,z(a.location).catch(G=>{}));const P={};for(const G in lt)P[G]=le(()=>l.value[G]);b.provide(Wa,N),b.provide(Fs,jn(P)),b.provide(ua,l);const L=b.unmount;Se.add(b),b.unmount=function(){Se.delete(b),Se.size<1&&(c=lt,Re&&Re(),Re=null,l.value=lt,He=!1,me=!1),L()}}};return sn}function jt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function ad(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Jt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Jt(c,l))||a.push(l))}return[n,r,a]}var Ls=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const id={};function od(e,t){return Xe(),gt("h1",null,"Home")}var sd=Ls(id,[["render",od]]);const ld={};function fd(e,t){return Xe(),gt("h1",null,"about")}var cd=Ls(ld,[["render",fd]]);const ud={class:"rounded-md bg-white shadow-lg shadow-indigo-500/40 p-3 hover:scale-125 transition ease-in-out"},dd={class:"rounded-md h-32 bg-gradient-to-r from-cyan-500 to-blue-500 text-clip overflow-hidden tracking-widest text-center"},md={class:"text-2xl"},hd=ze({__name:"LaboLink",props:{title:null,id:null,emoji:null},setup(e){return(t,n)=>{const r=Pn("router-link");return Xe(),xs(r,{to:"/labo/"+e.id},{default:Bt(()=>[V("div",ud,[V("div",dd,[V("span",md,sr(e.emoji.repeat(60)),1)]),an(" "+sr(e.title),1)])]),_:1},8,["to"])}}}),pd={class:"text-2xl p-3"},gd=an(" Labo "),vd={class:"grid grid-cols-auto-fit gap-4"},bd=ze({__name:"Labo",setup(e){const t=Er([{title:"\u30AB\u30A6\u30F3\u30C8\u30A2\u30C3\u30D7",id:1,emoji:"\u{1F600}"},{title:"\u307B\u3052",id:2,emoji:"\u{1F334}"},{title:"\u307B\u3052",id:2,emoji:"\u{1F4BC}"},{title:"\u307B\u3052",id:2,emoji:"\u{1F9B6}"},{title:"\u307B\u3052",id:2,emoji:"\u{1F916}"},{title:"\u307B\u3052",id:2,emoji:"\u{1F425}"}]);return(n,r)=>{const a=Pn("font-awesome-icon");return Xe(),gt(Ae,null,[V("h1",pd,[ue(a,{icon:"fa-solid fa-flask"}),gd]),V("div",vd,[(Xe(!0),gt(Ae,null,Mf(t.value,i=>(Xe(),gt("div",{key:i.id},[ue(hd,{title:i.title,id:i.id,emoji:i.emoji},null,8,["title","id","emoji"])]))),128))])],64)}}}),yd={class:"text-3xl font-bold underline"},xd=ze({__name:"HelloWorld",props:{msg:null},setup(e){const t=Er(0);return(n,r)=>(Xe(),gt(Ae,null,[V("h1",yd,sr(e.msg),1),V("button",{class:"rounded-full bg-sky-500 px-5 py-3 text-white",type:"button",onClick:r[0]||(r[0]=a=>t.value++)},"count is: "+sr(t.value),1)],64))}}),_d=ze({__name:"1",setup(e){return(t,n)=>(Xe(),xs(xd,{msg:"\u30AB\u30A6\u30F3\u30C8\u30A2\u30C3\u30D7\u30C6\u30B9\u30C8"}))}}),wd=[{path:"/",component:sd},{path:"/about",component:cd},{path:"/labo",component:bd},{path:"/labo/1",component:_d}],kd=rd({history:yu(),routes:wd});function Ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ji(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ji(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hr(e){return hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hr(e)}function Ed(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Zi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ad(e,t,n){return t&&Zi(e.prototype,t),n&&Zi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ya(e,t){return Pd(e)||Sd(e,t)||js(e,t)||Id()}function $n(e){return Od(e)||Cd(e)||js(e)||Rd()}function Od(e){if(Array.isArray(e))return da(e)}function Pd(e){if(Array.isArray(e))return e}function Cd(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sd(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function js(e,t){if(!!e){if(typeof e=="string")return da(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return da(e,t)}}function da(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Rd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Id(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var eo=function(){},Ka={},$s={},zs=null,Ds={mark:eo,measure:eo};try{typeof window!="undefined"&&(Ka=window),typeof document!="undefined"&&($s=document),typeof MutationObserver!="undefined"&&(zs=MutationObserver),typeof performance!="undefined"&&(Ds=performance)}catch{}var Td=Ka.navigator||{},to=Td.userAgent,no=to===void 0?"":to,bt=Ka,oe=$s,ro=zs,Kn=Ds;bt.document;var ot=!!oe.documentElement&&!!oe.head&&typeof oe.addEventListener=="function"&&typeof oe.createElement=="function",Bs=~no.indexOf("MSIE")||~no.indexOf("Trident/"),qn,Vn,Xn,Gn,Qn,nt="___FONT_AWESOME___",ma=16,Hs="fa",Us="svg-inline--fa",Rt="data-fa-i2svg",ha="data-fa-pseudo-element",Nd="data-fa-pseudo-element-pending",qa="data-prefix",Va="data-icon",ao="fontawesome-i2svg",Md="async",Fd=["HTML","HEAD","STYLE","SCRIPT"],Ws=function(){try{return!0}catch{return!1}}(),ie="classic",fe="sharp",Xa=[ie,fe];function zn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ie]}})}var Tn=zn((qn={},pe(qn,ie,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),pe(qn,fe,{fa:"solid",fass:"solid","fa-solid":"solid"}),qn)),Nn=zn((Vn={},pe(Vn,ie,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),pe(Vn,fe,{solid:"fass"}),Vn)),Mn=zn((Xn={},pe(Xn,ie,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),pe(Xn,fe,{fass:"fa-solid"}),Xn)),Ld=zn((Gn={},pe(Gn,ie,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),pe(Gn,fe,{"fa-solid":"fass"}),Gn)),jd=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Ys="fa-layers-text",$d=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,zd=zn((Qn={},pe(Qn,ie,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),pe(Qn,fe,{900:"fass"}),Qn)),Ks=[1,2,3,4,5,6,7,8,9,10],Dd=Ks.concat([11,12,13,14,15,16,17,18,19,20]),Bd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fn=new Set;Object.keys(Nn[ie]).map(Fn.add.bind(Fn));Object.keys(Nn[fe]).map(Fn.add.bind(Fn));var Hd=[].concat(Xa,$n(Fn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ot.GROUP,Ot.SWAP_OPACITY,Ot.PRIMARY,Ot.SECONDARY]).concat(Ks.map(function(e){return"".concat(e,"x")})).concat(Dd.map(function(e){return"w-".concat(e)})),xn=bt.FontAwesomeConfig||{};function Ud(e){var t=oe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Wd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(oe&&typeof oe.querySelector=="function"){var Yd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Yd.forEach(function(e){var t=Ya(e,2),n=t[0],r=t[1],a=Wd(Ud(n));a!=null&&(xn[r]=a)})}var qs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Hs,replacementClass:Us,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xn.familyPrefix&&(xn.cssPrefix=xn.familyPrefix);var en=R(R({},qs),xn);en.autoReplaceSvg||(en.observeMutations=!1);var T={};Object.keys(qs).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){en[e]=n,_n.forEach(function(r){return r(T)})},get:function(){return en[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){en.cssPrefix=t,_n.forEach(function(n){return n(T)})},get:function(){return en.cssPrefix}});bt.FontAwesomeConfig=T;var _n=[];function Kd(e){return _n.push(e),function(){_n.splice(_n.indexOf(e),1)}}var ft=ma,Ve={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qd(e){if(!(!e||!ot)){var t=oe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=oe.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return oe.head.insertBefore(t,r),e}}var Vd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ln(){for(var e=12,t="";e-- >0;)t+=Vd[Math.random()*62|0];return t}function on(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ga(e){return e.classList?on(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Vs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Vs(e[n]),'" ')},"").trim()}function Tr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Qa(e){return e.size!==Ve.size||e.x!==Ve.x||e.y!==Ve.y||e.rotate!==Ve.rotate||e.flipX||e.flipY}function Gd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Qd(e){var t=e.transform,n=e.width,r=n===void 0?ma:n,a=e.height,i=a===void 0?ma:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Bs?l+="translate(".concat(t.x/ft-r/2,"em, ").concat(t.y/ft-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ft,"em), calc(-50% + ").concat(t.y/ft,"em)) "):l+="translate(".concat(t.x/ft,"em, ").concat(t.y/ft,"em) "),l+="scale(".concat(t.size/ft*(t.flipX?-1:1),", ").concat(t.size/ft*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Jd=`:root, :host {
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
}`;function Xs(){var e=Hs,t=Us,n=T.cssPrefix,r=T.replacementClass,a=Jd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var io=!1;function Wr(){T.autoAddCss&&!io&&(qd(Xs()),io=!0)}var Zd={mixout:function(){return{dom:{css:Xs,insertCss:Wr}}},hooks:function(){return{beforeDOMElementCreation:function(){Wr()},beforeI2svg:function(){Wr()}}}},rt=bt||{};rt[nt]||(rt[nt]={});rt[nt].styles||(rt[nt].styles={});rt[nt].hooks||(rt[nt].hooks={});rt[nt].shims||(rt[nt].shims=[]);var Fe=rt[nt],Gs=[],em=function e(){oe.removeEventListener("DOMContentLoaded",e),pr=1,Gs.map(function(t){return t()})},pr=!1;ot&&(pr=(oe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(oe.readyState),pr||oe.addEventListener("DOMContentLoaded",em));function tm(e){!ot||(pr?setTimeout(e,0):Gs.push(e))}function Dn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Vs(e):"<".concat(t," ").concat(Xd(r),">").concat(i.map(Dn).join(""),"</").concat(t,">")}function oo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var nm=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Yr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?nm(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function rm(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function pa(e){var t=rm(e);return t.length===1?t[0].toString(16):null}function am(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function so(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ga(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=so(t);typeof Fe.hooks.addPack=="function"&&!a?Fe.hooks.addPack(e,so(t)):Fe.styles[e]=R(R({},Fe.styles[e]||{}),i),e==="fas"&&ga("fa",t)}var Jn,Zn,er,Ut=Fe.styles,im=Fe.shims,om=(Jn={},pe(Jn,ie,Object.values(Mn[ie])),pe(Jn,fe,Object.values(Mn[fe])),Jn),Ja=null,Qs={},Js={},Zs={},el={},tl={},sm=(Zn={},pe(Zn,ie,Object.keys(Tn[ie])),pe(Zn,fe,Object.keys(Tn[fe])),Zn);function lm(e){return~Hd.indexOf(e)}function fm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!lm(a)?a:null}var nl=function(){var t=function(i){return Yr(Ut,function(o,s,l){return o[l]=Yr(s,i,{}),o},{})};Qs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Js=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),tl=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ut||T.autoFetchSvg,r=Yr(im,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Zs=r.names,el=r.unicodes,Ja=Nr(T.styleDefault,{family:T.familyDefault})};Kd(function(e){Ja=Nr(e.styleDefault,{family:T.familyDefault})});nl();function Za(e,t){return(Qs[e]||{})[t]}function cm(e,t){return(Js[e]||{})[t]}function Pt(e,t){return(tl[e]||{})[t]}function rl(e){return Zs[e]||{prefix:null,iconName:null}}function um(e){var t=el[e],n=Za("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function yt(){return Ja}var ei=function(){return{prefix:null,iconName:null,rest:[]}};function Nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ie:n,a=Tn[r][e],i=Nn[r][e]||Nn[r][a],o=e in Fe.styles?e:null;return i||o||null}var lo=(er={},pe(er,ie,Object.keys(Mn[ie])),pe(er,fe,Object.keys(Mn[fe])),er);function Mr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},pe(t,ie,"".concat(T.cssPrefix,"-").concat(ie)),pe(t,fe,"".concat(T.cssPrefix,"-").concat(fe)),t),o=null,s=ie;(e.includes(i[ie])||e.some(function(c){return lo[ie].includes(c)}))&&(s=ie),(e.includes(i[fe])||e.some(function(c){return lo[fe].includes(c)}))&&(s=fe);var l=e.reduce(function(c,f){var d=fm(T.cssPrefix,f);if(Ut[f]?(f=om[s].includes(f)?Ld[s][f]:f,o=f,c.prefix=f):sm[s].indexOf(f)>-1?(o=f,c.prefix=Nr(f,{family:s})):d?c.iconName=d:f!==T.replacementClass&&f!==i[ie]&&f!==i[fe]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var h=o==="fa"?rl(c.iconName):{},g=Pt(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||g||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Ut.far&&Ut.fas&&!T.autoFetchSvg&&(c.prefix="fas")}return c},ei());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===fe&&(Ut.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=Pt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=yt()||"fas"),l}var dm=function(){function e(){Ed(this,e),this.definitions={}}return Ad(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),ga(s,o[s]);var l=Mn[ie][s];l&&ga(l,o[s]),nl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),fo=[],Wt={},Xt={},mm=Object.keys(Xt);function hm(e,t){var n=t.mixoutsTo;return fo=e,Wt={},Object.keys(Xt).forEach(function(r){mm.indexOf(r)===-1&&delete Xt[r]}),fo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),hr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Wt[o]||(Wt[o]=[]),Wt[o].push(i[o])})}r.provides&&r.provides(Xt)}),n}function va(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Wt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function It(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Wt[e]||[];a.forEach(function(i){i.apply(null,n)})}function at(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Xt[e]?Xt[e].apply(null,t):void 0}function ba(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||yt();if(!!t)return t=Pt(n,t)||t,oo(al.definitions,n,t)||oo(Fe.styles,n,t)}var al=new dm,pm=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,It("noAuto")},gm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ot?(It("beforeI2svg",t),at("pseudoElements2svg",t),at("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,tm(function(){bm({autoReplaceSvgRoot:n}),It("watch",t)})}},vm={icon:function(t){if(t===null)return null;if(hr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Pt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Nr(t[0]);return{prefix:r,iconName:Pt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(jd))){var a=Mr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||yt(),iconName:Pt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=yt();return{prefix:i,iconName:Pt(i,t)||t}}}},Ce={noAuto:pm,config:T,dom:gm,parse:vm,library:al,findIconDefinition:ba,toHtml:Dn},bm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?oe:n;(Object.keys(Fe.styles).length>0||T.autoFetchSvg)&&ot&&T.autoReplaceSvg&&Ce.dom.i2svg({node:r})};function Fr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Dn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!ot){var r=oe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ym(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Qa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Tr(R(R({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function xm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:o}),children:r}]}]}function ti(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,A=r.found?r:n,F=A.width,C=A.height,v=a==="fak",_=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(de){return d.classes.indexOf(de)===-1}).filter(function(de){return de!==""||!!de}).concat(d.classes).join(" "),M={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(F," ").concat(C)})},z=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(F/C*16*.0625,"em")}:{};g&&(M.attributes[Rt]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(f||Ln())},children:[l]}),delete M.attributes.title);var Y=R(R({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:R(R({},z),d.styles)}),se=r.found&&n.found?at("generateAbstractMask",Y)||{children:[],attributes:{}}:at("generateAbstractIcon",Y)||{children:[],attributes:{}},ce=se.children,De=se.attributes;return Y.children=ce,Y.attributes=De,s?xm(Y):ym(Y)}function co(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=R(R(R({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Rt]="");var f=R({},o.styles);Qa(a)&&(f.transform=Qd({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Tr(f);d.length>0&&(c.style=d);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function _m(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Tr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Kr=Fe.styles;function ya(e){var t=e[0],n=e[1],r=e.slice(4),a=Ya(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(Ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var wm={found:!1,width:512,height:512};function km(e,t){!Ws&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function xa(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=yt()),new Promise(function(r,a){if(at("missingIconAbstract"),n==="fa"){var i=rl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Kr[t]&&Kr[t][e]){var o=Kr[t][e];return r(ya(o))}km(e,t),r(R(R({},wm),{},{icon:T.showMissingIcons&&e?at("missingIconAbstract")||{}:{}}))})}var uo=function(){},_a=T.measurePerformance&&Kn&&Kn.mark&&Kn.measure?Kn:{mark:uo,measure:uo},mn='FA "6.2.0"',Em=function(t){return _a.mark("".concat(mn," ").concat(t," begins")),function(){return il(t)}},il=function(t){_a.mark("".concat(mn," ").concat(t," ends")),_a.measure("".concat(mn," ").concat(t),"".concat(mn," ").concat(t," begins"),"".concat(mn," ").concat(t," ends"))},ni={begin:Em,end:il},ir=function(){};function mo(e){var t=e.getAttribute?e.getAttribute(Rt):null;return typeof t=="string"}function Am(e){var t=e.getAttribute?e.getAttribute(qa):null,n=e.getAttribute?e.getAttribute(Va):null;return t&&n}function Om(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Pm(){if(T.autoReplaceSvg===!0)return or.replace;var e=or[T.autoReplaceSvg];return e||or.replace}function Cm(e){return oe.createElementNS("http://www.w3.org/2000/svg",e)}function Sm(e){return oe.createElement(e)}function ol(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Cm:Sm:n;if(typeof e=="string")return oe.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ol(o,{ceFn:r}))}),a}function Rm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var or={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ol(a),n)}),n.getAttribute(Rt)===null&&T.keepOriginalSource){var r=oe.createComment(Rm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ga(n).indexOf(T.replacementClass))return or.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Dn(s)}).join(`
`);n.setAttribute(Rt,""),n.innerHTML=o}};function ho(e){e()}function sl(e,t){var n=typeof t=="function"?t:ir;if(e.length===0)n();else{var r=ho;T.mutateApproach===Md&&(r=bt.requestAnimationFrame||ho),r(function(){var a=Pm(),i=ni.begin("mutate");e.map(a),i(),n()})}}var ri=!1;function ll(){ri=!0}function wa(){ri=!1}var gr=null;function po(e){if(!!ro&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?ir:t,r=e.nodeCallback,a=r===void 0?ir:r,i=e.pseudoElementsCallback,o=i===void 0?ir:i,s=e.observeMutationsRoot,l=s===void 0?oe:s;gr=new ro(function(c){if(!ri){var f=yt();on(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!mo(d.addedNodes[0])&&(T.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&T.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&mo(d.target)&&~Bd.indexOf(d.attributeName))if(d.attributeName==="class"&&Am(d.target)){var h=Mr(Ga(d.target)),g=h.prefix,A=h.iconName;d.target.setAttribute(qa,g||f),A&&d.target.setAttribute(Va,A)}else Om(d.target)&&a(d.target)})}}),ot&&gr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Im(){!gr||gr.disconnect()}function Tm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Nm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Mr(Ga(e));return a.prefix||(a.prefix=yt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=cm(a.prefix,e.innerText)||Za(a.prefix,pa(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Mm(e){var t=on(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Ln()):(t["aria-hidden"]="true",t.focusable="false")),t}function Fm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ve,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Nm(e),r=n.iconName,a=n.prefix,i=n.rest,o=Mm(e),s=va("parseNodeAttributes",{},e),l=t.styleParser?Tm(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ve,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Lm=Fe.styles;function fl(e){var t=T.autoReplaceSvg==="nest"?go(e,{styleParser:!1}):go(e);return~t.extra.classes.indexOf(Ys)?at("generateLayersText",e,t):at("generateSvgReplacementMutation",e,t)}var xt=new Set;Xa.map(function(e){xt.add("fa-".concat(e))});Object.keys(Tn[ie]).map(xt.add.bind(xt));Object.keys(Tn[fe]).map(xt.add.bind(xt));xt=$n(xt);function vo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ot)return Promise.resolve();var n=oe.documentElement.classList,r=function(d){return n.add("".concat(ao,"-").concat(d))},a=function(d){return n.remove("".concat(ao,"-").concat(d))},i=T.autoFetchSvg?xt:Xa.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Lm));i.includes("fa")||i.push("fa");var o=[".".concat(Ys,":not([").concat(Rt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=on(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ni.begin("onTree"),c=s.reduce(function(f,d){try{var h=fl(d);h&&f.push(h)}catch(g){Ws||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(h){sl(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(h){l(),d(h)})})}function jm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fl(e).then(function(n){n&&sl([n],t)})}function $m(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ba(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ba(a||{})),e(r,R(R({},n),{},{mask:a}))}}var zm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ve:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,h=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,F=n.classes,C=F===void 0?[]:F,v=n.attributes,_=v===void 0?{}:v,M=n.styles,z=M===void 0?{}:M;if(!!t){var Y=t.prefix,se=t.iconName,ce=t.icon;return Fr(R({type:"icon"},t),function(){return It("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(h?_["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(A||Ln()):(_["aria-hidden"]="true",_.focusable="false")),ti({icons:{main:ya(ce),mask:l?ya(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:se,transform:R(R({},Ve),a),symbol:o,title:h,maskId:f,titleId:A,extra:{attributes:_,styles:z,classes:C}})})}},Dm={mixout:function(){return{icon:$m(zm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vo,n.nodeCallback=jm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?oe:r,i=n.callback,o=i===void 0?function(){}:i;return vo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,A){Promise.all([xa(a,s),f.iconName?xa(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(F){var C=Ya(F,2),v=C[0],_=C[1];g([n,ti({icons:{main:v,mask:_},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Tr(s);l.length>0&&(a.style=l);var c;return Qa(o)&&(c=at("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Bm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Fr({type:"layer"},function(){It("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat($n(i)).join(" ")},children:o}]})}}}},Hm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return Fr({type:"counter",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),_m({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(T.cssPrefix,"-layers-counter")].concat($n(s))}})})}}}},Um={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ve:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,h=r.styles,g=h===void 0?{}:h;return Fr({type:"text",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),co({content:n,transform:R(R({},Ve),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(T.cssPrefix,"-layers-text")].concat($n(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Bs){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,co({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Wm=new RegExp('"',"ug"),bo=[1105920,1112319];function Ym(e){var t=e.replace(Wm,""),n=am(t,0),r=n>=bo[0]&&n<=bo[1],a=t.length===2?t[0]===t[1]:!1;return{value:pa(a?t[0]:t),isSecondary:r||a}}function yo(e,t){var n="".concat(Nd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=on(e.children),o=i.filter(function(ce){return ce.getAttribute(ha)===t})[0],s=bt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match($d),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?fe:ie,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Nn[h][l[2].toLowerCase()]:zd[h][c],A=Ym(d),F=A.value,C=A.isSecondary,v=l[0].startsWith("FontAwesome"),_=Za(g,F),M=_;if(v){var z=um(F);z.iconName&&z.prefix&&(_=z.iconName,g=z.prefix)}if(_&&!C&&(!o||o.getAttribute(qa)!==g||o.getAttribute(Va)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var Y=Fm(),se=Y.extra;se.attributes[ha]=t,xa(_,g).then(function(ce){var De=ti(R(R({},Y),{},{icons:{main:ce,mask:ei()},prefix:g,iconName:M,extra:se,watchable:!0})),de=oe.createElement("svg");t==="::before"?e.insertBefore(de,e.firstChild):e.appendChild(de),de.outerHTML=De.map(function(Be){return Dn(Be)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Km(e){return Promise.all([yo(e,"::before"),yo(e,"::after")])}function qm(e){return e.parentNode!==document.head&&!~Fd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ha)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function xo(e){if(!!ot)return new Promise(function(t,n){var r=on(e.querySelectorAll("*")).filter(qm).map(Km),a=ni.begin("searchPseudoElements");ll(),Promise.all(r).then(function(){a(),wa(),t()}).catch(function(){a(),wa(),n()})})}var Vm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=xo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?oe:r;T.searchPseudoElements&&xo(a)}}},_o=!1,Xm={mixout:function(){return{dom:{unwatch:function(){ll(),_o=!0}}}},hooks:function(){return{bootstrap:function(){po(va("mutationObserverCallbacks",{}))},noAuto:function(){Im()},watch:function(n){var r=n.observeMutationsRoot;_o?wa():po(va("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},wo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Gm={mixout:function(){return{parse:{transform:function(n){return wo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=wo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:h};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},qr={x:0,y:0,width:"100%",height:"100%"};function ko(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Qm(e){return e.tag==="g"?e.children:[e]}var Jm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Mr(a.split(" ").map(function(o){return o.trim()})):ei();return i.prefix||(i.prefix=yt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,h=o.icon,g=Gd({transform:l,containerWidth:d,iconWidth:c}),A={tag:"rect",attributes:R(R({},qr),{},{fill:"white"})},F=f.children?{children:f.children.map(ko)}:{},C={tag:"g",attributes:R({},g.inner),children:[ko(R({tag:f.tag,attributes:R(R({},f.attributes),g.path)},F))]},v={tag:"g",attributes:R({},g.outer),children:[C]},_="mask-".concat(s||Ln()),M="clip-".concat(s||Ln()),z={tag:"mask",attributes:R(R({},qr),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,v]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Qm(h)},z]};return r.push(Y,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(_,")")},qr)}),{children:r,attributes:a}}}},Zm={provides:function(t){var n=!1;bt.matchMedia&&(n=bt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},eh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},th=[Zd,Dm,Bm,Hm,Um,Vm,Xm,Gm,Jm,Zm,eh];hm(th,{mixoutsTo:Ce});Ce.noAuto;var cl=Ce.config,nh=Ce.library;Ce.dom;var vr=Ce.parse;Ce.findIconDefinition;Ce.toHtml;var rh=Ce.icon;Ce.layer;var ah=Ce.text;Ce.counter;function Eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Eo(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Eo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function br(e){return br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},br(e)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ih(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function oh(e,t){if(e==null)return{};var n=ih(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function ka(e){return sh(e)||lh(e)||fh(e)||ch()}function sh(e){if(Array.isArray(e))return Ea(e)}function lh(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fh(e,t){if(!!e){if(typeof e=="string")return Ea(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ea(e,t)}}function Ea(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ch(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var uh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ul={exports:{}};(function(e){(function(t){var n=function(v,_,M){if(!c(_)||d(_)||h(_)||g(_)||l(_))return _;var z,Y=0,se=0;if(f(_))for(z=[],se=_.length;Y<se;Y++)z.push(n(v,_[Y],M));else{z={};for(var ce in _)Object.prototype.hasOwnProperty.call(_,ce)&&(z[v(ce,M)]=n(v,_[ce],M))}return z},r=function(v,_){_=_||{};var M=_.separator||"_",z=_.split||/(?=[A-Z])/;return v.split(z).join(M)},a=function(v){return A(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(_,M){return M?M.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var _=a(v);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(v,_){return r(v,_).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},f=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},h=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},A=function(v){return v=v-0,v===v},F=function(v,_){var M=_&&"process"in _?_.process:_;return typeof M!="function"?v:function(z,Y){return M(z,v,Y)}},C={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,_){return n(F(a,_),v)},decamelizeKeys:function(v,_){return n(F(o,_),v,_)},pascalizeKeys:function(v,_){return n(F(i,_),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=C:t.humps=C})(uh)})(ul);var dh=ul.exports,mh=["class","style"];function hh(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=dh.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function ph(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ai(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=ph(f);break;case"style":l.style=hh(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=oh(n,mh);return Rr(e.tag,Ne(Ne(Ne({},t),{},{class:a.class,style:Ne(Ne({},a.style),o)},a.attrs),s),r)}var dl=!1;try{dl=!0}catch{}function gh(){if(!dl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function wn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}function vh(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},_e(t,"fa-".concat(e.size),e.size!==null),_e(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),_e(t,"fa-pull-".concat(e.pull),e.pull!==null),_e(t,"fa-swap-opacity",e.swapOpacity),_e(t,"fa-bounce",e.bounce),_e(t,"fa-shake",e.shake),_e(t,"fa-beat",e.beat),_e(t,"fa-fade",e.fade),_e(t,"fa-beat-fade",e.beatFade),_e(t,"fa-flash",e.flash),_e(t,"fa-spin-pulse",e.spinPulse),_e(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ao(e){if(e&&br(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(vr.icon)return vr.icon(e);if(e===null)return null;if(br(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var bh=ze({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=le(function(){return Ao(t.icon)}),i=le(function(){return wn("classes",vh(t))}),o=le(function(){return wn("transform",typeof t.transform=="string"?vr.transform(t.transform):t.transform)}),s=le(function(){return wn("mask",Ao(t.mask))}),l=le(function(){return rh(a.value,Ne(Ne(Ne(Ne({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});gn(l,function(f){if(!f)return gh("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=le(function(){return l.value?ai(l.value.abstract[0],{},r):null});return function(){return c.value}}});ze({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=cl.familyPrefix,i=le(function(){return["".concat(a,"-layers")].concat(ka(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Rr("div",{class:i.value},r.default?r.default():[])}}});ze({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=cl.familyPrefix,i=le(function(){return wn("classes",[].concat(ka(t.counter?["".concat(a,"-layers-counter")]:[]),ka(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=le(function(){return wn("transform",typeof t.transform=="string"?vr.transform(t.transform):t.transform)}),s=le(function(){var c=ah(t.value.toString(),Ne(Ne({},o.value),i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=le(function(){return ai(s.value,{},r)});return function(){return l.value}}});var yh={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},xh={prefix:"fas",iconName:"flask",icon:[448,512,[],"f0c3","M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z"]};nh.add(yh,xh);const ii=Nc(eu);ii.use(kd);ii.component("font-awesome-icon",bh);ii.mount("#app");
