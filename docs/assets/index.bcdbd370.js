const pl=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};pl();function Ca(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const gl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vl=Ca(gl);function Po(e){return!!e||e===""}function Pa(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ve(r)?_l(r):Pa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ve(e))return e;if(he(e))return e}}const bl=/;(?![^(]*\))/g,yl=/:(.+)/;function _l(e){const t={};return e.split(bl).forEach(n=>{if(n){const r=n.split(yl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function _r(e){let t="";if(ve(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=_r(e[n]);r&&(t+=r+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ct=e=>ve(e)?e:e==null?"":H(e)||he(e)&&(e.toString===To||!U(e.toString))?JSON.stringify(e,So,2):String(e),So=(e,t)=>t&&t.__v_isRef?So(e,t.value):Gt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ro(t)?{[`Set(${t.size})`]:[...t.values()]}:he(t)&&!H(t)&&!No(t)?String(t):t,ae={},Xt=[],$e=()=>{},xl=()=>!1,wl=/^on[^a-z]/,xr=e=>wl.test(e),Sa=e=>e.startsWith("onUpdate:"),we=Object.assign,Ra=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},kl=Object.prototype.hasOwnProperty,K=(e,t)=>kl.call(e,t),H=Array.isArray,Gt=e=>wr(e)==="[object Map]",Ro=e=>wr(e)==="[object Set]",U=e=>typeof e=="function",ve=e=>typeof e=="string",Ia=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",Io=e=>he(e)&&U(e.then)&&U(e.catch),To=Object.prototype.toString,wr=e=>To.call(e),El=e=>wr(e).slice(8,-1),No=e=>wr(e)==="[object Object]",Ta=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rr=Ca(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Al=/-(\w)/g,Ge=kr(e=>e.replace(Al,(t,n)=>n?n.toUpperCase():"")),Ol=/\B([A-Z])/g,an=kr(e=>e.replace(Ol,"-$1").toLowerCase()),Er=kr(e=>e.charAt(0).toUpperCase()+e.slice(1)),jr=kr(e=>e?`on${Er(e)}`:""),An=(e,t)=>!Object.is(e,t),$r=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},fr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Cl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ui;const Pl=()=>ui||(ui=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ke;class Sl{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ke&&(this.parent=Ke,this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ke;try{return Ke=this,t()}finally{Ke=n}}}on(){Ke=this}off(){Ke=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Rl(e,t=Ke){t&&t.active&&t.effects.push(e)}const Na=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Mo=e=>(e.w&_t)>0,Fo=e=>(e.n&_t)>0,Il=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=_t},Tl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Mo(a)&&!Fo(a)?a.delete(e):t[n++]=a,a.w&=~_t,a.n&=~_t}t.length=n}},Xr=new WeakMap;let mn=0,_t=1;const Gr=30;let Me;const It=Symbol(""),Qr=Symbol("");class Ma{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Rl(this,r)}run(){if(!this.active)return this.fn();let t=Me,n=vt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Me,Me=this,vt=!0,_t=1<<++mn,mn<=Gr?Il(this):di(this),this.fn()}finally{mn<=Gr&&Tl(this),_t=1<<--mn,Me=this.parent,vt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Me===this?this.deferStop=!0:this.active&&(di(this),this.onStop&&this.onStop(),this.active=!1)}}function di(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let vt=!0;const Lo=[];function on(){Lo.push(vt),vt=!1}function sn(){const e=Lo.pop();vt=e===void 0?!0:e}function Se(e,t,n){if(vt&&Me){let r=Xr.get(e);r||Xr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Na()),jo(a)}}function jo(e,t){let n=!1;mn<=Gr?Fo(e)||(e.n|=_t,n=!Mo(e)):n=!e.has(Me),n&&(e.add(Me),Me.deps.push(e))}function rt(e,t,n,r,a,i){const o=Xr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?Ta(n)&&s.push(o.get("length")):(s.push(o.get(It)),Gt(e)&&s.push(o.get(Qr)));break;case"delete":H(e)||(s.push(o.get(It)),Gt(e)&&s.push(o.get(Qr)));break;case"set":Gt(e)&&s.push(o.get(It));break}if(s.length===1)s[0]&&Jr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Jr(Na(l))}}function Jr(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&mi(r);for(const r of n)r.computed||mi(r)}function mi(e,t){(e!==Me||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Nl=Ca("__proto__,__v_isRef,__isVue"),$o=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ia)),Ml=Fa(),Fl=Fa(!1,!0),Ll=Fa(!0),hi=jl();function jl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)Se(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(X)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){on();const r=X(this)[t].apply(this,n);return sn(),r}}),e}function Fa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Zl:Uo:t?Ho:Bo).get(r))return r;const o=H(r);if(!e&&o&&K(hi,a))return Reflect.get(hi,a,i);const s=Reflect.get(r,a,i);return(Ia(a)?$o.has(a):Nl(a))||(e||Se(r,"get",a),t)?s:_e(s)?o&&Ta(a)?s:s.value:he(s)?e?Wo(s):$n(s):s}}const $l=zo(),zl=zo(!0);function zo(e=!1){return function(n,r,a,i){let o=n[r];if(On(o)&&_e(o)&&!_e(a))return!1;if(!e&&!On(a)&&(Zr(a)||(a=X(a),o=X(o)),!H(n)&&_e(o)&&!_e(a)))return o.value=a,!0;const s=H(n)&&Ta(r)?Number(r)<n.length:K(n,r),l=Reflect.set(n,r,a,i);return n===X(i)&&(s?An(a,o)&&rt(n,"set",r,a):rt(n,"add",r,a)),l}}function Dl(e,t){const n=K(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&rt(e,"delete",t,void 0),r}function Bl(e,t){const n=Reflect.has(e,t);return(!Ia(t)||!$o.has(t))&&Se(e,"has",t),n}function Hl(e){return Se(e,"iterate",H(e)?"length":It),Reflect.ownKeys(e)}const Do={get:Ml,set:$l,deleteProperty:Dl,has:Bl,ownKeys:Hl},Ul={get:Ll,set(e,t){return!0},deleteProperty(e,t){return!0}},Wl=we({},Do,{get:Fl,set:zl}),La=e=>e,Ar=e=>Reflect.getPrototypeOf(e);function Hn(e,t,n=!1,r=!1){e=e.__v_raw;const a=X(e),i=X(t);n||(t!==i&&Se(a,"get",t),Se(a,"get",i));const{has:o}=Ar(a),s=r?La:n?za:Cn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Un(e,t=!1){const n=this.__v_raw,r=X(n),a=X(e);return t||(e!==a&&Se(r,"has",e),Se(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Wn(e,t=!1){return e=e.__v_raw,!t&&Se(X(e),"iterate",It),Reflect.get(e,"size",e)}function pi(e){e=X(e);const t=X(this);return Ar(t).has.call(t,e)||(t.add(e),rt(t,"add",e,e)),this}function gi(e,t){t=X(t);const n=X(this),{has:r,get:a}=Ar(n);let i=r.call(n,e);i||(e=X(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?An(t,o)&&rt(n,"set",e,t):rt(n,"add",e,t),this}function vi(e){const t=X(this),{has:n,get:r}=Ar(t);let a=n.call(t,e);a||(e=X(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&rt(t,"delete",e,void 0),i}function bi(){const e=X(this),t=e.size!==0,n=e.clear();return t&&rt(e,"clear",void 0,void 0),n}function Yn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=X(o),l=t?La:e?za:Cn;return!e&&Se(s,"iterate",It),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function Kn(e,t,n){return function(...r){const a=this.__v_raw,i=X(a),o=Gt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?La:t?za:Cn;return!t&&Se(i,"iterate",l?Qr:It),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:s?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function ct(e){return function(...t){return e==="delete"?!1:this}}function Yl(){const e={get(i){return Hn(this,i)},get size(){return Wn(this)},has:Un,add:pi,set:gi,delete:vi,clear:bi,forEach:Yn(!1,!1)},t={get(i){return Hn(this,i,!1,!0)},get size(){return Wn(this)},has:Un,add:pi,set:gi,delete:vi,clear:bi,forEach:Yn(!1,!0)},n={get(i){return Hn(this,i,!0)},get size(){return Wn(this,!0)},has(i){return Un.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:Yn(!0,!1)},r={get(i){return Hn(this,i,!0,!0)},get size(){return Wn(this,!0)},has(i){return Un.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:Yn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Kn(i,!1,!1),n[i]=Kn(i,!0,!1),t[i]=Kn(i,!1,!0),r[i]=Kn(i,!0,!0)}),[e,n,t,r]}const[Kl,ql,Vl,Xl]=Yl();function ja(e,t){const n=t?e?Xl:Vl:e?ql:Kl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(K(n,a)&&a in r?n:r,a,i)}const Gl={get:ja(!1,!1)},Ql={get:ja(!1,!0)},Jl={get:ja(!0,!1)},Bo=new WeakMap,Ho=new WeakMap,Uo=new WeakMap,Zl=new WeakMap;function ef(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tf(e){return e.__v_skip||!Object.isExtensible(e)?0:ef(El(e))}function $n(e){return On(e)?e:$a(e,!1,Do,Gl,Bo)}function nf(e){return $a(e,!1,Wl,Ql,Ho)}function Wo(e){return $a(e,!0,Ul,Jl,Uo)}function $a(e,t,n,r,a){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=tf(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Qt(e){return On(e)?Qt(e.__v_raw):!!(e&&e.__v_isReactive)}function On(e){return!!(e&&e.__v_isReadonly)}function Zr(e){return!!(e&&e.__v_isShallow)}function Yo(e){return Qt(e)||On(e)}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function Ko(e){return fr(e,"__v_skip",!0),e}const Cn=e=>he(e)?$n(e):e,za=e=>he(e)?Wo(e):e;function qo(e){vt&&Me&&(e=X(e),jo(e.dep||(e.dep=Na())))}function Vo(e,t){e=X(e),e.dep&&Jr(e.dep)}function _e(e){return!!(e&&e.__v_isRef===!0)}function gt(e){return Xo(e,!1)}function rf(e){return Xo(e,!0)}function Xo(e,t){return _e(e)?e:new af(e,t)}class af{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:X(t),this._value=n?t:Cn(t)}get value(){return qo(this),this._value}set value(t){t=this.__v_isShallow?t:X(t),An(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Cn(t),Vo(this))}}function Tt(e){return _e(e)?e.value:e}const of={get:(e,t,n)=>Tt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return _e(a)&&!_e(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Go(e){return Qt(e)?e:new Proxy(e,of)}class sf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ma(t,()=>{this._dirty||(this._dirty=!0,Vo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=X(this);return qo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function lf(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=$e):(r=e.get,a=e.set),new sf(r,a,i||!a,n)}function bt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Or(i,t,n)}return a}function ze(e,t,n,r){if(U(e)){const i=bt(e,t,n,r);return i&&Io(i)&&i.catch(o=>{Or(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ze(e[i],t,n,r));return a}function Or(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){bt(l,null,10,[e,o,s]);return}}ff(e,n,a,r)}function ff(e,t,n,r=!0){console.error(e)}let cr=!1,ea=!1;const Pe=[];let nt=0;const gn=[];let hn=null,Ut=0;const vn=[];let mt=null,Wt=0;const Qo=Promise.resolve();let Da=null,ta=null;function Jo(e){const t=Da||Qo;return e?t.then(this?e.bind(this):e):t}function cf(e){let t=nt+1,n=Pe.length;for(;t<n;){const r=t+n>>>1;Pn(Pe[r])<e?t=r+1:n=r}return t}function Zo(e){(!Pe.length||!Pe.includes(e,cr&&e.allowRecurse?nt+1:nt))&&e!==ta&&(e.id==null?Pe.push(e):Pe.splice(cf(e.id),0,e),es())}function es(){!cr&&!ea&&(ea=!0,Da=Qo.then(rs))}function uf(e){const t=Pe.indexOf(e);t>nt&&Pe.splice(t,1)}function ts(e,t,n,r){H(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),es()}function df(e){ts(e,hn,gn,Ut)}function mf(e){ts(e,mt,vn,Wt)}function Cr(e,t=null){if(gn.length){for(ta=t,hn=[...new Set(gn)],gn.length=0,Ut=0;Ut<hn.length;Ut++)hn[Ut]();hn=null,Ut=0,ta=null,Cr(e,t)}}function ns(e){if(Cr(),vn.length){const t=[...new Set(vn)];if(vn.length=0,mt){mt.push(...t);return}for(mt=t,mt.sort((n,r)=>Pn(n)-Pn(r)),Wt=0;Wt<mt.length;Wt++)mt[Wt]();mt=null,Wt=0}}const Pn=e=>e.id==null?1/0:e.id;function rs(e){ea=!1,cr=!0,Cr(e),Pe.sort((n,r)=>Pn(n)-Pn(r));const t=$e;try{for(nt=0;nt<Pe.length;nt++){const n=Pe[nt];n&&n.active!==!1&&bt(n,null,14)}}finally{nt=0,Pe.length=0,ns(),cr=!1,Da=null,(Pe.length||gn.length||vn.length)&&rs(e)}}function hf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ae;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[f]||ae;h&&(a=n.map(g=>g.trim())),d&&(a=n.map(Cl))}let s,l=r[s=jr(t)]||r[s=jr(Ge(t))];!l&&i&&(l=r[s=jr(an(t))]),l&&ze(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ze(c,e,6,a)}}function as(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=c=>{const f=as(c,t,!0);f&&(s=!0,we(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):we(o,i),r.set(e,o),o)}function Pr(e,t){return!e||!xr(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,an(t))||K(e,t))}let Ve=null,is=null;function ur(e){const t=Ve;return Ve=e,is=e&&e.type.__scopeId||null,t}function tt(e,t=Ve,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Pi(-1);const i=ur(t),o=e(...a);return ur(i),r._d&&Pi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function zr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:h,setupState:g,ctx:E,inheritAttrs:I}=e;let P,v;const x=ur(e);try{if(n.shapeFlag&4){const z=a||r;P=qe(f.call(z,z,d,i,g,h,E)),v=l}else{const z=t;P=qe(z.length>1?z(i,{attrs:l,slots:s,emit:c}):z(i,null)),v=t.props?l:pf(l)}}catch(z){yn.length=0,Or(z,e,1),P=re(Mt)}let F=P;if(v&&I!==!1){const z=Object.keys(v),{shapeFlag:Y}=F;z.length&&Y&7&&(o&&z.some(Sa)&&(v=gf(v,o)),F=Zt(F,v))}return n.dirs&&(F=Zt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),P=F,ur(x),P}const pf=e=>{let t;for(const n in e)(n==="class"||n==="style"||xr(n))&&((t||(t={}))[n]=e[n]);return t},gf=(e,t)=>{const n={};for(const r in e)(!Sa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function vf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?yi(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(o[h]!==r[h]&&!Pr(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?yi(r,o,c):!0:!!o;return!1}function yi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Pr(n,i))return!0}return!1}function bf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const yf=e=>e.__isSuspense;function _f(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):mf(e)}function ar(e,t){if(be){let n=be.provides;const r=be.parent&&be.parent.provides;r===n&&(n=be.provides=Object.create(r)),n[e]=t}}function yt(e,t,n=!1){const r=be||Ve;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r.proxy):t}}const _i={};function bn(e,t,n){return os(e,t,n)}function os(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ae){const s=be;let l,c=!1,f=!1;if(_e(e)?(l=()=>e.value,c=Zr(e)):Qt(e)?(l=()=>e,r=!0):H(e)?(f=!0,c=e.some(v=>Qt(v)||Zr(v)),l=()=>e.map(v=>{if(_e(v))return v.value;if(Qt(v))return Kt(v);if(U(v))return bt(v,s,2)})):U(e)?t?l=()=>bt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),ze(e,s,3,[h])}:l=$e,t&&r){const v=l;l=()=>Kt(v())}let d,h=v=>{d=P.onStop=()=>{bt(v,s,4)}};if(In)return h=$e,t?n&&ze(t,s,3,[l(),f?[]:void 0,h]):l(),$e;let g=f?[]:_i;const E=()=>{if(!!P.active)if(t){const v=P.run();(r||c||(f?v.some((x,F)=>An(x,g[F])):An(v,g)))&&(d&&d(),ze(t,s,3,[v,g===_i?void 0:g,h]),g=v)}else P.run()};E.allowRecurse=!!t;let I;a==="sync"?I=E:a==="post"?I=()=>Ee(E,s&&s.suspense):I=()=>df(E);const P=new Ma(l,I);return t?n?E():g=P.run():a==="post"?Ee(P.run.bind(P),s&&s.suspense):P.run(),()=>{P.stop(),s&&s.scope&&Ra(s.scope.effects,P)}}function xf(e,t,n){const r=this.proxy,a=ve(e)?e.includes(".")?ss(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=be;en(this);const s=os(a,i.bind(r),n);return o?en(o):Nt(),s}function ss(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Kt(e,t){if(!he(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),_e(e))Kt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)Kt(e[n],t);else if(Ro(e)||Gt(e))e.forEach(n=>{Kt(n,t)});else if(No(e))for(const n in e)Kt(e[n],t);return e}function Qe(e){return U(e)?{setup:e,name:e.name}:e}const ir=e=>!!e.type.__asyncLoader,ls=e=>e.type.__isKeepAlive;function wf(e,t){fs(e,"a",t)}function kf(e,t){fs(e,"da",t)}function fs(e,t,n=be){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Sr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ls(a.parent.vnode)&&Ef(r,t,n,a),a=a.parent}}function Ef(e,t,n,r){const a=Sr(t,e,r,!0);cs(()=>{Ra(r[t],a)},n)}function Sr(e,t,n=be,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;on(),en(n);const s=ze(t,n,e,o);return Nt(),sn(),s});return r?a.unshift(i):a.push(i),i}}const st=e=>(t,n=be)=>(!In||e==="sp")&&Sr(e,t,n),Af=st("bm"),Of=st("m"),Cf=st("bu"),Pf=st("u"),Sf=st("bum"),cs=st("um"),Rf=st("sp"),If=st("rtg"),Tf=st("rtc");function Nf(e,t=be){Sr("ec",e,t)}function Et(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(on(),ze(l,n,8,[e.el,s,e,t]),sn())}}const us="components";function Sn(e,t){return Ff(us,e,!0,t)||e}const Mf=Symbol();function Ff(e,t,n=!0,r=!1){const a=Ve||be;if(a){const i=a.type;if(e===us){const s=cc(i,!1);if(s&&(s===t||s===Ge(t)||s===Er(Ge(t))))return i}const o=xi(a[e]||i[e],t)||xi(a.appContext[e],t);return!o&&r?i:o}}function xi(e,t){return e&&(e[t]||e[Ge(t)]||e[Er(Ge(t))])}function na(e,t,n,r){let a;const i=n&&n[r];if(H(e)||ve(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(he(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const ra=e=>e?Es(e)?Wa(e)||e.proxy:ra(e.parent):null,dr=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ra(e.parent),$root:e=>ra(e.root),$emit:e=>e.emit,$options:e=>ms(e),$forceUpdate:e=>e.f||(e.f=()=>Zo(e.update)),$nextTick:e=>e.n||(e.n=Jo.bind(e.proxy)),$watch:e=>xf.bind(e)}),Lf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==ae&&K(r,t))return o[t]=1,r[t];if(a!==ae&&K(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&K(c,t))return o[t]=3,i[t];if(n!==ae&&K(n,t))return o[t]=4,n[t];aa&&(o[t]=0)}}const f=dr[t];let d,h;if(f)return t==="$attrs"&&Se(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ae&&K(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,K(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==ae&&K(a,t)?(a[t]=n,!0):r!==ae&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ae&&K(e,o)||t!==ae&&K(t,o)||(s=i[0])&&K(s,o)||K(r,o)||K(dr,o)||K(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let aa=!0;function jf(e){const t=ms(e),n=e.proxy,r=e.ctx;aa=!1,t.beforeCreate&&wi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:h,beforeUpdate:g,updated:E,activated:I,deactivated:P,beforeDestroy:v,beforeUnmount:x,destroyed:F,unmounted:z,render:Y,renderTracked:le,renderTriggered:ue,errorCaptured:Be,serverPrefetch:de,expose:He,inheritAttrs:Je,components:Te,directives:jt,filters:$t}=t;if(c&&$f(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const te in o){const J=o[te];U(J)&&(r[te]=J.bind(n))}if(a){const te=a.call(n,n);he(te)&&(e.data=$n(te))}if(aa=!0,i)for(const te in i){const J=i[te],Oe=U(J)?J.bind(n,n):U(J.get)?J.get.bind(n,n):$e,Dt=!U(J)&&U(J.set)?J.set.bind(n):$e,Ze=fe({get:Oe,set:Dt});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:Ue=>Ze.value=Ue})}if(s)for(const te in s)ds(s[te],r,n,te);if(l){const te=U(l)?l.call(n):l;Reflect.ownKeys(te).forEach(J=>{ar(J,te[J])})}f&&wi(f,e,"c");function me(te,J){H(J)?J.forEach(Oe=>te(Oe.bind(n))):J&&te(J.bind(n))}if(me(Af,d),me(Of,h),me(Cf,g),me(Pf,E),me(wf,I),me(kf,P),me(Nf,Be),me(Tf,le),me(If,ue),me(Sf,x),me(cs,z),me(Rf,de),H(He))if(He.length){const te=e.exposed||(e.exposed={});He.forEach(J=>{Object.defineProperty(te,J,{get:()=>n[J],set:Oe=>n[J]=Oe})})}else e.exposed||(e.exposed={});Y&&e.render===$e&&(e.render=Y),Je!=null&&(e.inheritAttrs=Je),Te&&(e.components=Te),jt&&(e.directives=jt)}function $f(e,t,n=$e,r=!1){H(e)&&(e=ia(e));for(const a in e){const i=e[a];let o;he(i)?"default"in i?o=yt(i.from||a,i.default,!0):o=yt(i.from||a):o=yt(i),_e(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function wi(e,t,n){ze(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ds(e,t,n,r){const a=r.includes(".")?ss(n,r):()=>n[r];if(ve(e)){const i=t[e];U(i)&&bn(a,i)}else if(U(e))bn(a,e.bind(n));else if(he(e))if(H(e))e.forEach(i=>ds(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&bn(a,i,e)}}function ms(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>mr(l,c,o,!0)),mr(l,t,o)),i.set(t,l),l}function mr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&mr(e,i,n,!0),a&&a.forEach(o=>mr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=zf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const zf={data:ki,props:Ot,emits:Ot,methods:Ot,computed:Ot,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:Ot,directives:Ot,watch:Bf,provide:ki,inject:Df};function ki(e,t){return t?e?function(){return we(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function Df(e,t){return Ot(ia(e),ia(t))}function ia(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function xe(e,t){return e?[...new Set([].concat(e,t))]:t}function Ot(e,t){return e?we(we(Object.create(null),e),t):t}function Bf(e,t){if(!e)return t;if(!t)return e;const n=we(Object.create(null),e);for(const r in t)n[r]=xe(e[r],t[r]);return n}function Hf(e,t,n,r=!1){const a={},i={};fr(i,Rr,1),e.propsDefaults=Object.create(null),hs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:nf(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Uf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=X(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(Pr(e.emitsOptions,h))continue;const g=t[h];if(l)if(K(i,h))g!==i[h]&&(i[h]=g,c=!0);else{const E=Ge(h);a[E]=oa(l,s,E,g,e,!1)}else g!==i[h]&&(i[h]=g,c=!0)}}}else{hs(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!K(t,d)&&((f=an(d))===d||!K(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=oa(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!K(t,d)&&!0)&&(delete i[d],c=!0)}c&&rt(e,"set","$attrs")}function hs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(rr(l))continue;const c=t[l];let f;a&&K(a,f=Ge(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:Pr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=X(n),c=s||ae;for(let f=0;f<i.length;f++){const d=i[f];n[d]=oa(a,l,d,c[d],e,!K(c,d))}}return o}function oa(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=K(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&U(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(en(a),r=c[n]=l.call(null,t),Nt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===an(n))&&(r=!0))}return r}function ps(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const f=d=>{l=!0;const[h,g]=ps(d,t,!0);we(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return r.set(e,Xt),Xt;if(H(i))for(let f=0;f<i.length;f++){const d=Ge(i[f]);Ei(d)&&(o[d]=ae)}else if(i)for(const f in i){const d=Ge(f);if(Ei(d)){const h=i[f],g=o[d]=H(h)||U(h)?{type:h}:h;if(g){const E=Ci(Boolean,g.type),I=Ci(String,g.type);g[0]=E>-1,g[1]=I<0||E<I,(E>-1||K(g,"default"))&&s.push(d)}}}const c=[o,s];return r.set(e,c),c}function Ei(e){return e[0]!=="$"}function Ai(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Oi(e,t){return Ai(e)===Ai(t)}function Ci(e,t){return H(t)?t.findIndex(n=>Oi(n,e)):U(t)&&Oi(t,e)?0:-1}const gs=e=>e[0]==="_"||e==="$stable",Ba=e=>H(e)?e.map(qe):[qe(e)],Wf=(e,t,n)=>{if(t._n)return t;const r=tt((...a)=>Ba(t(...a)),n);return r._c=!1,r},vs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(gs(a))continue;const i=e[a];if(U(i))t[a]=Wf(a,i,r);else if(i!=null){const o=Ba(i);t[a]=()=>o}}},bs=(e,t)=>{const n=Ba(t);e.slots.default=()=>n},Yf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=X(t),fr(t,"_",n)):vs(t,e.slots={})}else e.slots={},t&&bs(e,t);fr(e.slots,Rr,1)},Kf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ae;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(we(a,t),!n&&s===1&&delete a._):(i=!t.$stable,vs(t,a)),o=t}else t&&(bs(e,t),o={default:1});if(i)for(const s in a)!gs(s)&&!(s in o)&&delete a[s]};function ys(){return{app:null,config:{isNativeTag:xl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qf=0;function Vf(e,t){return function(r,a=null){U(r)||(r=Object.assign({},r)),a!=null&&!he(a)&&(a=null);const i=ys(),o=new Set;let s=!1;const l=i.app={_uid:qf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:dc,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(l,...f)):U(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const h=re(r,a);return h.appContext=i,f&&t?t(h,c):e(h,c,d),s=!0,l._container=c,c.__vue_app__=l,Wa(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function sa(e,t,n,r,a=!1){if(H(e)){e.forEach((h,g)=>sa(h,t&&(H(t)?t[g]:t),n,r,a));return}if(ir(r)&&!a)return;const i=r.shapeFlag&4?Wa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===ae?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(ve(c)?(f[c]=null,K(d,c)&&(d[c]=null)):_e(c)&&(c.value=null)),U(l))bt(l,s,12,[o,f]);else{const h=ve(l),g=_e(l);if(h||g){const E=()=>{if(e.f){const I=h?f[l]:l.value;a?H(I)&&Ra(I,i):H(I)?I.includes(i)||I.push(i):h?(f[l]=[i],K(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else h?(f[l]=o,K(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(f[e.k]=o))};o?(E.id=-1,Ee(E,n)):E()}}}const Ee=_f;function Xf(e){return Gf(e)}function Gf(e,t){const n=Pl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:h,setScopeId:g=$e,cloneNode:E,insertStaticContent:I}=e,P=(u,m,p,_=null,y=null,A=null,S=!1,k=null,O=!!m.dynamicChildren)=>{if(u===m)return;u&&!un(u,m)&&(_=L(u),Ie(u,y,A,!0),u=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:w,ref:j,shapeFlag:T}=m;switch(w){case Ha:v(u,m,p,_);break;case Mt:x(u,m,p,_);break;case Dr:u==null&&F(m,p,_,S);break;case Ae:jt(u,m,p,_,y,A,S,k,O);break;default:T&1?le(u,m,p,_,y,A,S,k,O):T&6?$t(u,m,p,_,y,A,S,k,O):(T&64||T&128)&&w.process(u,m,p,_,y,A,S,k,O,ne)}j!=null&&y&&sa(j,u&&u.ref,A,m||u,!m)},v=(u,m,p,_)=>{if(u==null)r(m.el=s(m.children),p,_);else{const y=m.el=u.el;m.children!==u.children&&c(y,m.children)}},x=(u,m,p,_)=>{u==null?r(m.el=l(m.children||""),p,_):m.el=u.el},F=(u,m,p,_)=>{[u.el,u.anchor]=I(u.children,m,p,_,u.el,u.anchor)},z=({el:u,anchor:m},p,_)=>{let y;for(;u&&u!==m;)y=h(u),r(u,p,_),u=y;r(m,p,_)},Y=({el:u,anchor:m})=>{let p;for(;u&&u!==m;)p=h(u),a(u),u=p;a(m)},le=(u,m,p,_,y,A,S,k,O)=>{S=S||m.type==="svg",u==null?ue(m,p,_,y,A,S,k,O):He(u,m,y,A,S,k,O)},ue=(u,m,p,_,y,A,S,k)=>{let O,w;const{type:j,props:T,shapeFlag:$,transition:D,patchFlag:q,dirs:Z}=u;if(u.el&&E!==void 0&&q===-1)O=u.el=E(u.el);else{if(O=u.el=o(u.type,A,T&&T.is,T),$&8?f(O,u.children):$&16&&de(u.children,O,null,_,y,A&&j!=="foreignObject",S,k),Z&&Et(u,null,_,"created"),T){for(const ie in T)ie!=="value"&&!rr(ie)&&i(O,ie,null,T[ie],A,u.children,_,y,C);"value"in T&&i(O,"value",null,T.value),(w=T.onVnodeBeforeMount)&&Ye(w,_,u)}Be(O,u,u.scopeId,S,_)}Z&&Et(u,null,_,"beforeMount");const ee=(!y||y&&!y.pendingBranch)&&D&&!D.persisted;ee&&D.beforeEnter(O),r(O,m,p),((w=T&&T.onVnodeMounted)||ee||Z)&&Ee(()=>{w&&Ye(w,_,u),ee&&D.enter(O),Z&&Et(u,null,_,"mounted")},y)},Be=(u,m,p,_,y)=>{if(p&&g(u,p),_)for(let A=0;A<_.length;A++)g(u,_[A]);if(y){let A=y.subTree;if(m===A){const S=y.vnode;Be(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},de=(u,m,p,_,y,A,S,k,O=0)=>{for(let w=O;w<u.length;w++){const j=u[w]=k?ht(u[w]):qe(u[w]);P(null,j,m,p,_,y,A,S,k)}},He=(u,m,p,_,y,A,S)=>{const k=m.el=u.el;let{patchFlag:O,dynamicChildren:w,dirs:j}=m;O|=u.patchFlag&16;const T=u.props||ae,$=m.props||ae;let D;p&&At(p,!1),(D=$.onVnodeBeforeUpdate)&&Ye(D,p,m,u),j&&Et(m,u,p,"beforeUpdate"),p&&At(p,!0);const q=y&&m.type!=="foreignObject";if(w?Je(u.dynamicChildren,w,k,p,_,q,A):S||Oe(u,m,k,null,p,_,q,A,!1),O>0){if(O&16)Te(k,m,T,$,p,_,y);else if(O&2&&T.class!==$.class&&i(k,"class",null,$.class,y),O&4&&i(k,"style",T.style,$.style,y),O&8){const Z=m.dynamicProps;for(let ee=0;ee<Z.length;ee++){const ie=Z[ee],Ne=T[ie],Bt=$[ie];(Bt!==Ne||ie==="value")&&i(k,ie,Ne,Bt,y,u.children,p,_,C)}}O&1&&u.children!==m.children&&f(k,m.children)}else!S&&w==null&&Te(k,m,T,$,p,_,y);((D=$.onVnodeUpdated)||j)&&Ee(()=>{D&&Ye(D,p,m,u),j&&Et(m,u,p,"updated")},_)},Je=(u,m,p,_,y,A,S)=>{for(let k=0;k<m.length;k++){const O=u[k],w=m[k],j=O.el&&(O.type===Ae||!un(O,w)||O.shapeFlag&70)?d(O.el):p;P(O,w,j,null,_,y,A,S,!0)}},Te=(u,m,p,_,y,A,S)=>{if(p!==_){for(const k in _){if(rr(k))continue;const O=_[k],w=p[k];O!==w&&k!=="value"&&i(u,k,w,O,S,m.children,y,A,C)}if(p!==ae)for(const k in p)!rr(k)&&!(k in _)&&i(u,k,p[k],null,S,m.children,y,A,C);"value"in _&&i(u,"value",p.value,_.value)}},jt=(u,m,p,_,y,A,S,k,O)=>{const w=m.el=u?u.el:s(""),j=m.anchor=u?u.anchor:s("");let{patchFlag:T,dynamicChildren:$,slotScopeIds:D}=m;D&&(k=k?k.concat(D):D),u==null?(r(w,p,_),r(j,p,_),de(m.children,p,j,y,A,S,k,O)):T>0&&T&64&&$&&u.dynamicChildren?(Je(u.dynamicChildren,$,p,y,A,S,k),(m.key!=null||y&&m===y.subTree)&&_s(u,m,!0)):Oe(u,m,p,j,y,A,S,k,O)},$t=(u,m,p,_,y,A,S,k,O)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?y.ctx.activate(m,p,_,S,O):zt(m,p,_,y,A,S,O):me(u,m,O)},zt=(u,m,p,_,y,A,S)=>{const k=u.component=ic(u,_,y);if(ls(u)&&(k.ctx.renderer=ne),oc(k),k.asyncDep){if(y&&y.registerDep(k,te),!u.el){const O=k.subTree=re(Mt);x(null,O,m,p)}return}te(k,u,m,p,y,A,S)},me=(u,m,p)=>{const _=m.component=u.component;if(vf(u,m,p))if(_.asyncDep&&!_.asyncResolved){J(_,m,p);return}else _.next=m,uf(_.update),_.update();else m.el=u.el,_.vnode=m},te=(u,m,p,_,y,A,S)=>{const k=()=>{if(u.isMounted){let{next:j,bu:T,u:$,parent:D,vnode:q}=u,Z=j,ee;At(u,!1),j?(j.el=q.el,J(u,j,S)):j=q,T&&$r(T),(ee=j.props&&j.props.onVnodeBeforeUpdate)&&Ye(ee,D,j,q),At(u,!0);const ie=zr(u),Ne=u.subTree;u.subTree=ie,P(Ne,ie,d(Ne.el),L(Ne),u,y,A),j.el=ie.el,Z===null&&bf(u,ie.el),$&&Ee($,y),(ee=j.props&&j.props.onVnodeUpdated)&&Ee(()=>Ye(ee,D,j,q),y)}else{let j;const{el:T,props:$}=m,{bm:D,m:q,parent:Z}=u,ee=ir(m);if(At(u,!1),D&&$r(D),!ee&&(j=$&&$.onVnodeBeforeMount)&&Ye(j,Z,m),At(u,!0),T&&B){const ie=()=>{u.subTree=zr(u),B(T,u.subTree,u,y,null)};ee?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ie()):ie()}else{const ie=u.subTree=zr(u);P(null,ie,p,_,u,y,A),m.el=ie.el}if(q&&Ee(q,y),!ee&&(j=$&&$.onVnodeMounted)){const ie=m;Ee(()=>Ye(j,Z,ie),y)}(m.shapeFlag&256||Z&&ir(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&Ee(u.a,y),u.isMounted=!0,m=p=_=null}},O=u.effect=new Ma(k,()=>Zo(w),u.scope),w=u.update=()=>O.run();w.id=u.uid,At(u,!0),w()},J=(u,m,p)=>{m.component=u;const _=u.vnode.props;u.vnode=m,u.next=null,Uf(u,m.props,_,p),Kf(u,m.children,p),on(),Cr(void 0,u.update),sn()},Oe=(u,m,p,_,y,A,S,k,O=!1)=>{const w=u&&u.children,j=u?u.shapeFlag:0,T=m.children,{patchFlag:$,shapeFlag:D}=m;if($>0){if($&128){Ze(w,T,p,_,y,A,S,k,O);return}else if($&256){Dt(w,T,p,_,y,A,S,k,O);return}}D&8?(j&16&&C(w,y,A),T!==w&&f(p,T)):j&16?D&16?Ze(w,T,p,_,y,A,S,k,O):C(w,y,A,!0):(j&8&&f(p,""),D&16&&de(T,p,_,y,A,S,k,O))},Dt=(u,m,p,_,y,A,S,k,O)=>{u=u||Xt,m=m||Xt;const w=u.length,j=m.length,T=Math.min(w,j);let $;for($=0;$<T;$++){const D=m[$]=O?ht(m[$]):qe(m[$]);P(u[$],D,p,null,y,A,S,k,O)}w>j?C(u,y,A,!0,!1,T):de(m,p,_,y,A,S,k,O,T)},Ze=(u,m,p,_,y,A,S,k,O)=>{let w=0;const j=m.length;let T=u.length-1,$=j-1;for(;w<=T&&w<=$;){const D=u[w],q=m[w]=O?ht(m[w]):qe(m[w]);if(un(D,q))P(D,q,p,null,y,A,S,k,O);else break;w++}for(;w<=T&&w<=$;){const D=u[T],q=m[$]=O?ht(m[$]):qe(m[$]);if(un(D,q))P(D,q,p,null,y,A,S,k,O);else break;T--,$--}if(w>T){if(w<=$){const D=$+1,q=D<j?m[D].el:_;for(;w<=$;)P(null,m[w]=O?ht(m[w]):qe(m[w]),p,q,y,A,S,k,O),w++}}else if(w>$)for(;w<=T;)Ie(u[w],y,A,!0),w++;else{const D=w,q=w,Z=new Map;for(w=q;w<=$;w++){const Ce=m[w]=O?ht(m[w]):qe(m[w]);Ce.key!=null&&Z.set(Ce.key,w)}let ee,ie=0;const Ne=$-q+1;let Bt=!1,li=0;const cn=new Array(Ne);for(w=0;w<Ne;w++)cn[w]=0;for(w=D;w<=T;w++){const Ce=u[w];if(ie>=Ne){Ie(Ce,y,A,!0);continue}let We;if(Ce.key!=null)We=Z.get(Ce.key);else for(ee=q;ee<=$;ee++)if(cn[ee-q]===0&&un(Ce,m[ee])){We=ee;break}We===void 0?Ie(Ce,y,A,!0):(cn[We-q]=w+1,We>=li?li=We:Bt=!0,P(Ce,m[We],p,null,y,A,S,k,O),ie++)}const fi=Bt?Qf(cn):Xt;for(ee=fi.length-1,w=Ne-1;w>=0;w--){const Ce=q+w,We=m[Ce],ci=Ce+1<j?m[Ce+1].el:_;cn[w]===0?P(null,We,p,ci,y,A,S,k,O):Bt&&(ee<0||w!==fi[ee]?Ue(We,p,ci,2):ee--)}}},Ue=(u,m,p,_,y=null)=>{const{el:A,type:S,transition:k,children:O,shapeFlag:w}=u;if(w&6){Ue(u.component.subTree,m,p,_);return}if(w&128){u.suspense.move(m,p,_);return}if(w&64){S.move(u,m,p,ne);return}if(S===Ae){r(A,m,p);for(let T=0;T<O.length;T++)Ue(O[T],m,p,_);r(u.anchor,m,p);return}if(S===Dr){z(u,m,p);return}if(_!==2&&w&1&&k)if(_===0)k.beforeEnter(A),r(A,m,p),Ee(()=>k.enter(A),y);else{const{leave:T,delayLeave:$,afterLeave:D}=k,q=()=>r(A,m,p),Z=()=>{T(A,()=>{q(),D&&D()})};$?$(A,q,Z):Z()}else r(A,m,p)},Ie=(u,m,p,_=!1,y=!1)=>{const{type:A,props:S,ref:k,children:O,dynamicChildren:w,shapeFlag:j,patchFlag:T,dirs:$}=u;if(k!=null&&sa(k,null,p,u,!0),j&256){m.ctx.deactivate(u);return}const D=j&1&&$,q=!ir(u);let Z;if(q&&(Z=S&&S.onVnodeBeforeUnmount)&&Ye(Z,m,u),j&6)M(u.component,p,_);else{if(j&128){u.suspense.unmount(p,_);return}D&&Et(u,null,m,"beforeUnmount"),j&64?u.type.remove(u,m,p,y,ne,_):w&&(A!==Ae||T>0&&T&64)?C(w,m,p,!1,!0):(A===Ae&&T&384||!y&&j&16)&&C(O,m,p),_&&fn(u)}(q&&(Z=S&&S.onVnodeUnmounted)||D)&&Ee(()=>{Z&&Ye(Z,m,u),D&&Et(u,null,m,"unmounted")},p)},fn=u=>{const{type:m,el:p,anchor:_,transition:y}=u;if(m===Ae){b(p,_);return}if(m===Dr){Y(u);return}const A=()=>{a(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:k}=y,O=()=>S(p,A);k?k(u.el,A,O):O()}else A()},b=(u,m)=>{let p;for(;u!==m;)p=h(u),a(u),u=p;a(m)},M=(u,m,p)=>{const{bum:_,scope:y,update:A,subTree:S,um:k}=u;_&&$r(_),y.stop(),A&&(A.active=!1,Ie(S,u,m,p)),k&&Ee(k,m),Ee(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},C=(u,m,p,_=!1,y=!1,A=0)=>{for(let S=A;S<u.length;S++)Ie(u[S],m,p,_,y)},L=u=>u.shapeFlag&6?L(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),G=(u,m,p)=>{u==null?m._vnode&&Ie(m._vnode,null,null,!0):P(m._vnode||null,u,m,null,null,null,p),ns(),m._vnode=u},ne={p:P,um:Ie,m:Ue,r:fn,mt:zt,mc:de,pc:Oe,pbc:Je,n:L,o:e};let W,B;return t&&([W,B]=t(ne)),{render:G,hydrate:W,createApp:Vf(G,W)}}function At({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function _s(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ht(a[i]),s.el=o.el),n||_s(o,s))}}function Qf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Jf=e=>e.__isTeleport,Ae=Symbol(void 0),Ha=Symbol(void 0),Mt=Symbol(void 0),Dr=Symbol(void 0),yn=[];let Le=null;function ge(e=!1){yn.push(Le=e?null:[])}function Zf(){yn.pop(),Le=yn[yn.length-1]||null}let Rn=1;function Pi(e){Rn+=e}function xs(e){return e.dynamicChildren=Rn>0?Le||Xt:null,Zf(),Rn>0&&Le&&Le.push(e),e}function ye(e,t,n,r,a,i){return xs(V(e,t,n,r,a,i,!0))}function ws(e,t,n,r,a){return xs(re(e,t,n,r,a,!0))}function la(e){return e?e.__v_isVNode===!0:!1}function un(e,t){return e.type===t.type&&e.key===t.key}const Rr="__vInternal",ks=({key:e})=>e!=null?e:null,or=({ref:e,ref_key:t,ref_for:n})=>e!=null?ve(e)||_e(e)||U(e)?{i:Ve,r:e,k:t,f:!!n}:e:null;function V(e,t=null,n=null,r=0,a=null,i=e===Ae?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ks(t),ref:t&&or(t),scopeId:is,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Ua(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ve(n)?8:16),Rn>0&&!o&&Le&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Le.push(l),l}const re=ec;function ec(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Mf)&&(e=Mt),la(e)){const s=Zt(e,t,!0);return n&&Ua(s,n),Rn>0&&!i&&Le&&(s.shapeFlag&6?Le[Le.indexOf(e)]=s:Le.push(s)),s.patchFlag|=-2,s}if(uc(e)&&(e=e.__vccOpts),t){t=tc(t);let{class:s,style:l}=t;s&&!ve(s)&&(t.class=_r(s)),he(l)&&(Yo(l)&&!H(l)&&(l=we({},l)),t.style=Pa(l))}const o=ve(e)?1:yf(e)?128:Jf(e)?64:he(e)?4:U(e)?2:0;return V(e,t,n,r,a,o,i,!0)}function tc(e){return e?Yo(e)||Rr in e?we({},e):e:null}function Zt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?nc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ks(s),ref:t&&t.ref?n&&a?H(a)?a.concat(or(t)):[a,or(t)]:or(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zt(e.ssContent),ssFallback:e.ssFallback&&Zt(e.ssFallback),el:e.el,anchor:e.anchor}}function lt(e=" ",t=0){return re(Ha,null,e,t)}function qn(e="",t=!1){return t?(ge(),ws(Mt,null,e)):re(Mt,null,e)}function qe(e){return e==null||typeof e=="boolean"?re(Mt):H(e)?re(Ae,null,e.slice()):typeof e=="object"?ht(e):re(Ha,null,String(e))}function ht(e){return e.el===null||e.memo?e:Zt(e)}function Ua(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ua(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Rr in t)?t._ctx=Ve:a===3&&Ve&&(Ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Ve},n=32):(t=String(t),r&64?(n=16,t=[lt(t)]):n=8);e.children=t,e.shapeFlag|=n}function nc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=_r([t.class,r.class]));else if(a==="style")t.style=Pa([t.style,r.style]);else if(xr(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ye(e,t,n,r=null){ze(e,t,7,[n,r])}const rc=ys();let ac=0;function ic(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||rc,i={uid:ac++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ps(r,a),emitsOptions:as(r,a),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=hf.bind(null,i),e.ce&&e.ce(i),i}let be=null;const en=e=>{be=e,e.scope.on()},Nt=()=>{be&&be.scope.off(),be=null};function Es(e){return e.vnode.shapeFlag&4}let In=!1;function oc(e,t=!1){In=t;const{props:n,children:r}=e.vnode,a=Es(e);Hf(e,n,a,t),Yf(e,r);const i=a?sc(e,t):void 0;return In=!1,i}function sc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ko(new Proxy(e.ctx,Lf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?fc(e):null;en(e),on();const i=bt(r,e,0,[e.props,a]);if(sn(),Nt(),Io(i)){if(i.then(Nt,Nt),t)return i.then(o=>{Si(e,o,t)}).catch(o=>{Or(o,e,0)});e.asyncDep=i}else Si(e,i,t)}else As(e,t)}function Si(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=Go(t)),As(e,n)}let Ri;function As(e,t,n){const r=e.type;if(!e.render){if(!t&&Ri&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=we(we({isCustomElement:i,delimiters:s},o),l);r.render=Ri(a,c)}}e.render=r.render||$e}en(e),on(),jf(e),sn(),Nt()}function lc(e){return new Proxy(e.attrs,{get(t,n){return Se(e,"get","$attrs"),t[n]}})}function fc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=lc(e))},slots:e.slots,emit:e.emit,expose:t}}function Wa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Go(Ko(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dr)return dr[n](e)}}))}function cc(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function uc(e){return U(e)&&"__vccOpts"in e}const fe=(e,t)=>lf(e,t,In);function Ir(e,t,n){const r=arguments.length;return r===2?he(t)&&!H(t)?la(t)?re(e,null,[t]):re(e,t):re(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&la(n)&&(n=[n]),re(e,t,n))}const dc="3.2.37",mc="http://www.w3.org/2000/svg",Pt=typeof document!="undefined"?document:null,Ii=Pt&&Pt.createElement("template"),hc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Pt.createElementNS(mc,e):Pt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Pt.createTextNode(e),createComment:e=>Pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ii.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ii.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function pc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function gc(e,t,n){const r=e.style,a=ve(n);if(n&&!a){for(const i in n)fa(r,i,n[i]);if(t&&!ve(t))for(const i in t)n[i]==null&&fa(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ti=/\s*!important$/;function fa(e,t,n){if(H(n))n.forEach(r=>fa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=vc(e,t);Ti.test(n)?e.setProperty(an(r),n.replace(Ti,""),"important"):e[r]=n}}const Ni=["Webkit","Moz","ms"],Br={};function vc(e,t){const n=Br[t];if(n)return n;let r=Ge(t);if(r!=="filter"&&r in e)return Br[t]=r;r=Er(r);for(let a=0;a<Ni.length;a++){const i=Ni[a]+r;if(i in e)return Br[t]=i}return t}const Mi="http://www.w3.org/1999/xlink";function bc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Mi,t.slice(6,t.length)):e.setAttributeNS(Mi,t,n);else{const i=vl(t);n==null||i&&!Po(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function yc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Po(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[Os,_c]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let ca=0;const xc=Promise.resolve(),wc=()=>{ca=0},kc=()=>ca||(xc.then(wc),ca=Os());function Ec(e,t,n,r){e.addEventListener(t,n,r)}function Ac(e,t,n,r){e.removeEventListener(t,n,r)}function Oc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Cc(t);if(r){const c=i[t]=Pc(r,a);Ec(e,s,c,l)}else o&&(Ac(e,s,o,l),i[t]=void 0)}}const Fi=/(?:Once|Passive|Capture)$/;function Cc(e){let t;if(Fi.test(e)){t={};let n;for(;n=e.match(Fi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[an(e.slice(2)),t]}function Pc(e,t){const n=r=>{const a=r.timeStamp||Os();(_c||a>=n.attached-1)&&ze(Sc(r,n.value),t,5,[r])};return n.value=e,n.attached=kc(),n}function Sc(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Li=/^on[a-z]/,Rc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?pc(e,r,a):t==="style"?gc(e,n,r):xr(t)?Sa(t)||Oc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ic(e,t,r,a))?yc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),bc(e,t,r,a))};function Ic(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Li.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Li.test(t)&&ve(n)?!1:t in e}const Tc=we({patchProp:Rc},hc);let ji;function Nc(){return ji||(ji=Xf(Tc))}const Mc=(...e)=>{const t=Nc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Fc(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Fc(e){return ve(e)?document.querySelector(e):e}var Lc="/assets/omo_pen.5527f84a.png";const jc={class:"w-full bg-white bg-white"},$c={class:"container mx-auto py-5 px-3 flex justify-between items-center"},zc=V("div",{class:"flex items-center gap-2"},[V("img",{class:"w-8",src:Lc,alt:"logo"}),V("span",{class:"text-2xl font-bold text-indigo-900"},"omomuro.dev")],-1),Dc={class:"hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase"},Bc={class:"hover:text-gray-500"},Hc=lt("home"),Uc={class:"hover:text-gray-500"},Wc=lt(" labo "),Yc={class:"hover:text-gray-500"},Kc=lt("about"),qc=V("svg",{class:"hidden md:block w-5 cursor-pointer",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[V("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})],-1),Vc=V("div",{class:"w-6 h-0.5 bg-black"},null,-1),Xc=V("div",{class:"w-6 h-0.5 bg-black"},null,-1),Gc=V("div",{class:"w-6 h-0.5 bg-black"},null,-1),Qc=[Vc,Xc,Gc],Jc={class:"border-solid border border-gray-300"},Zc=lt("home"),eu={class:"border-solid border-gray-300"},tu=lt("labo "),nu=lt("about"),ru=Qe({__name:"NavBar",setup(e){const t=gt(!1);return(n,r)=>{const a=Sn("router-link"),i=Sn("font-awesome-icon");return ge(),ye("nav",jc,[V("div",$c,[re(a,{to:"/"},{default:tt(()=>[zc]),_:1}),V("ul",Dc,[V("li",Bc,[re(a,{to:"/"},{default:tt(()=>[Hc]),_:1})]),V("li",Uc,[re(a,{to:"/labo"},{default:tt(()=>[re(i,{icon:"fa-solid fa-flask",class:"hover:rotate-45 transition ease-in-out"}),Wc]),_:1})]),V("li",Yc,[re(a,{to:"/about"},{default:tt(()=>[Kc]),_:1})])]),qc,V("div",{class:"space-y-1 md:hidden cursor-pointer z-20",onClick:r[0]||(r[0]=o=>t.value=!t.value)},Qc),V("ul",{class:_r([t.value?"block":"hidden","list-none md:hidden bg-white absolute left-0 top-0 w-full pt-12 rounded-b-3xl text-center"])},[V("li",Jc,[re(a,{to:"/",class:"block py-2",onClick:r[1]||(r[1]=o=>t.value=!1)},{default:tt(()=>[Zc]),_:1})]),V("li",eu,[re(a,{to:"/labo",class:"block py-2",onClick:r[2]||(r[2]=o=>t.value=!1)},{default:tt(()=>[re(i,{icon:"fa-solid fa-flask"}),tu]),_:1})]),V("li",{class:"border-solid border border-gray-300",onClick:r[3]||(r[3]=o=>t.value=!1)},[re(a,{to:"/about",class:"block py-2"},{default:tt(()=>[nu]),_:1})])],2)])])}}}),au={class:"container mx-auto px-4 py-2 bg-gray-50"},iu=Qe({__name:"App",setup(e){return(t,n)=>{const r=Sn("router-view");return ge(),ye(Ae,null,[re(ru),V("div",au,[re(r)])],64)}}});/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Yt=typeof window!="undefined";function ou(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Hr(e,t){const n={};for(const r in t){const a=t[r];n[r]=De(a)?a.map(e):e(a)}return n}const _n=()=>{},De=Array.isArray,su=/\/$/,lu=e=>e.replace(su,"");function Ur(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=du(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function fu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function $i(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function cu(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&tn(t.matched[r],n.matched[a])&&Cs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function tn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Cs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!uu(e[n],t[n]))return!1;return!0}function uu(e,t){return De(e)?zi(e,t):De(t)?zi(t,e):e===t}function zi(e,t){return De(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function du(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Tn;(function(e){e.pop="pop",e.push="push"})(Tn||(Tn={}));var xn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(xn||(xn={}));function mu(e){if(!e)if(Yt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lu(e)}const hu=/^[^#]+#/;function pu(e,t){return e.replace(hu,"#")+t}function gu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Tr=()=>({left:window.pageXOffset,top:window.pageYOffset});function vu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=gu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Di(e,t){return(history.state?history.state.position-t:-1)+e}const ua=new Map;function bu(e,t){ua.set(e,t)}function yu(e){const t=ua.get(e);return ua.delete(e),t}let _u=()=>location.protocol+"//"+location.host;function Ps(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),$i(l,"")}return $i(n,e)+r+a}function xu(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const g=Ps(e,location),E=n.value,I=t.value;let P=0;if(h){if(n.value=g,t.value=h,o&&o===E){o=null;return}P=I?h.position-I.position:0}else r(g);a.forEach(v=>{v(n.value,E,{delta:P,type:Tn.pop,direction:P?P>0?xn.forward:xn.back:xn.unknown})})};function l(){o=n.value}function c(h){a.push(h);const g=()=>{const E=a.indexOf(h);E>-1&&a.splice(E,1)};return i.push(g),g}function f(){const{history:h}=window;!h.state||h.replaceState(Q({},h.state,{scroll:Tr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function Bi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Tr():null}}function wu(e){const{history:t,location:n}=window,r={value:Ps(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:_u()+e+l;try{t[f?"replaceState":"pushState"](c,"",h),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](h)}}function o(l,c){const f=Q({},t.state,Bi(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=Q({},a.value,t.state,{forward:l,scroll:Tr()});i(f.current,f,!0);const d=Q({},Bi(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function ku(e){e=mu(e);const t=wu(e),n=xu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=Q({location:"",base:e,go:r,createHref:pu.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Eu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),ku(e)}function Au(e){return typeof e=="string"||e&&typeof e=="object"}function Ss(e){return typeof e=="string"||typeof e=="symbol"}const ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rs=Symbol("");var Hi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Hi||(Hi={}));function nn(e,t){return Q(new Error,{type:e,[Rs]:!0},t)}function et(e,t){return e instanceof Error&&Rs in e&&(t==null||!!(e.type&t))}const Ui="[^/]+?",Ou={sensitive:!1,strict:!1,start:!0,end:!0},Cu=/[.+*?^${}()[\]/\\]/g;function Pu(e,t){const n=Q({},Ou,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const h=c[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(Cu,"\\$&"),g+=40;else if(h.type===1){const{value:E,repeatable:I,optional:P,regexp:v}=h;i.push({name:E,repeatable:I,optional:P});const x=v||Ui;if(x!==Ui){g+=10;try{new RegExp(`(${x})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${E}" (${x}): `+z.message)}}let F=I?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(F=P&&c.length<2?`(?:/${F})`:"/"+F),P&&(F+="?"),a+=F,g+=20,P&&(g+=-8),I&&(g+=-20),x===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let h=1;h<f.length;h++){const g=f[h]||"",E=i[h-1];d[E.name]=g&&E.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of h)if(g.type===0)f+=g.value;else if(g.type===1){const{value:E,repeatable:I,optional:P}=g,v=E in c?c[E]:"";if(De(v)&&!I)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const x=De(v)?v.join("/"):v;if(!x)if(P)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Su(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ru(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Su(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Wi(r))return 1;if(Wi(a))return-1}return a.length-r.length}function Wi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Iu={type:0,value:""},Tu=/[a-zA-Z0-9_]/;function Nu(e){if(!e)return[[]];if(e==="/")return[[Iu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Tu.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function Mu(e,t,n){const r=Pu(Nu(e.path),n),a=Q(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Fu(e,t){const n=[],r=new Map;t=qi({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,h){const g=!h,E=Lu(f);E.aliasOf=h&&h.record;const I=qi(t,f),P=[E];if("alias"in f){const F=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of F)P.push(Q({},E,{components:h?h.record.components:E.components,path:z,aliasOf:h?h.record:E}))}let v,x;for(const F of P){const{path:z}=F;if(d&&z[0]!=="/"){const Y=d.record.path,le=Y[Y.length-1]==="/"?"":"/";F.path=d.record.path+(z&&le+z)}if(v=Mu(F,d,I),h?h.alias.push(v):(x=x||v,x!==v&&x.alias.push(v),g&&f.name&&!Ki(v)&&o(f.name)),E.children){const Y=E.children;for(let le=0;le<Y.length;le++)i(Y[le],v,h&&h.children[le])}h=h||v,l(v)}return x?()=>{o(x)}:_n}function o(f){if(Ss(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&Ru(f,n[d])>=0&&(f.record.path!==n[d].record.path||!Is(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!Ki(f)&&r.set(f.record.name,f)}function c(f,d){let h,g={},E,I;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw nn(1,{location:f});I=h.record.name,g=Q(Yi(d.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),f.params&&Yi(f.params,h.keys.map(x=>x.name))),E=h.stringify(g)}else if("path"in f)E=f.path,h=n.find(x=>x.re.test(E)),h&&(g=h.parse(E),I=h.record.name);else{if(h=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!h)throw nn(1,{location:f,currentLocation:d});I=h.record.name,g=Q({},d.params,f.params),E=h.stringify(g)}const P=[];let v=h;for(;v;)P.unshift(v.record),v=v.parent;return{name:I,path:E,params:g,matched:P,meta:$u(P)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Yi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Lu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ju(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ju(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ki(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $u(e){return e.reduce((t,n)=>Q(t,n.meta),{})}function qi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Is(e,t){return t.children.some(n=>n===e||Is(e,n))}const Ts=/#/g,zu=/&/g,Du=/\//g,Bu=/=/g,Hu=/\?/g,Ns=/\+/g,Uu=/%5B/g,Wu=/%5D/g,Ms=/%5E/g,Yu=/%60/g,Fs=/%7B/g,Ku=/%7C/g,Ls=/%7D/g,qu=/%20/g;function Ya(e){return encodeURI(""+e).replace(Ku,"|").replace(Uu,"[").replace(Wu,"]")}function Vu(e){return Ya(e).replace(Fs,"{").replace(Ls,"}").replace(Ms,"^")}function da(e){return Ya(e).replace(Ns,"%2B").replace(qu,"+").replace(Ts,"%23").replace(zu,"%26").replace(Yu,"`").replace(Fs,"{").replace(Ls,"}").replace(Ms,"^")}function Xu(e){return da(e).replace(Bu,"%3D")}function Gu(e){return Ya(e).replace(Ts,"%23").replace(Hu,"%3F")}function Qu(e){return e==null?"":Gu(e).replace(Du,"%2F")}function hr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ju(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ns," "),o=i.indexOf("="),s=hr(o<0?i:i.slice(0,o)),l=o<0?null:hr(i.slice(o+1));if(s in t){let c=t[s];De(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function Vi(e){let t="";for(let n in e){const r=e[n];if(n=Xu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&da(i)):[r&&da(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Zu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=De(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const ed=Symbol(""),Xi=Symbol(""),Ka=Symbol(""),js=Symbol(""),ma=Symbol("");function dn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function pt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(nn(4,{from:n,to:t})):d instanceof Error?s(d):Au(d)?s(nn(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function Wr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(td(s)){const c=(s.__vccOpts||s)[t];c&&a.push(pt(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=ou(c)?c.default:c;i.components[o]=f;const h=(f.__vccOpts||f)[t];return h&&pt(h,n,r,i,o)()}))}}return a}function td(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Gi(e){const t=yt(Ka),n=yt(js),r=fe(()=>t.resolve(Tt(e.to))),a=fe(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const h=d.findIndex(tn.bind(null,f));if(h>-1)return h;const g=Qi(l[c-2]);return c>1&&Qi(f)===g&&d[d.length-1].path!==g?d.findIndex(tn.bind(null,l[c-2])):h}),i=fe(()=>a.value>-1&&id(n.params,r.value.params)),o=fe(()=>a.value>-1&&a.value===n.matched.length-1&&Cs(n.params,r.value.params));function s(l={}){return ad(l)?t[Tt(e.replace)?"replace":"push"](Tt(e.to)).catch(_n):Promise.resolve()}return{route:r,href:fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const nd=Qe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gi,setup(e,{slots:t}){const n=$n(Gi(e)),{options:r}=yt(Ka),a=fe(()=>({[Ji(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ji(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Ir("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),rd=nd;function ad(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function id(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!De(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Qi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ji=(e,t,n)=>e!=null?e:t!=null?t:n,od=Qe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=yt(ma),a=fe(()=>e.route||r.value),i=yt(Xi,0),o=fe(()=>{let c=Tt(i);const{matched:f}=a.value;let d;for(;(d=f[c])&&!d.components;)c++;return c}),s=fe(()=>a.value.matched[o.value]);ar(Xi,fe(()=>o.value+1)),ar(ed,s),ar(ma,a);const l=gt();return bn(()=>[l.value,s.value,e.name],([c,f,d],[h,g,E])=>{f&&(f.instances[d]=c,g&&g!==f&&c&&c===h&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),c&&f&&(!g||!tn(f,g)||!h)&&(f.enterCallbacks[d]||[]).forEach(I=>I(c))},{flush:"post"}),()=>{const c=a.value,f=e.name,d=s.value,h=d&&d.components[f];if(!h)return Zi(n.default,{Component:h,route:c});const g=d.props[f],E=g?g===!0?c.params:typeof g=="function"?g(c):g:null,P=Ir(h,Q({},E,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return Zi(n.default,{Component:P,route:c})||P}}});function Zi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const sd=od;function ld(e){const t=Fu(e.routes,e),n=e.parseQuery||Ju,r=e.stringifyQuery||Vi,a=e.history,i=dn(),o=dn(),s=dn(),l=rf(ut);let c=ut;Yt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Hr.bind(null,b=>""+b),d=Hr.bind(null,Qu),h=Hr.bind(null,hr);function g(b,M){let C,L;return Ss(b)?(C=t.getRecordMatcher(b),L=M):L=b,t.addRoute(L,C)}function E(b){const M=t.getRecordMatcher(b);M&&t.removeRoute(M)}function I(){return t.getRoutes().map(b=>b.record)}function P(b){return!!t.getRecordMatcher(b)}function v(b,M){if(M=Q({},M||l.value),typeof b=="string"){const B=Ur(n,b,M.path),u=t.resolve({path:B.path},M),m=a.createHref(B.fullPath);return Q(B,u,{params:h(u.params),hash:hr(B.hash),redirectedFrom:void 0,href:m})}let C;if("path"in b)C=Q({},b,{path:Ur(n,b.path,M.path).path});else{const B=Q({},b.params);for(const u in B)B[u]==null&&delete B[u];C=Q({},b,{params:d(b.params)}),M.params=d(M.params)}const L=t.resolve(C,M),G=b.hash||"";L.params=f(h(L.params));const ne=fu(r,Q({},b,{hash:Vu(G),path:L.path})),W=a.createHref(ne);return Q({fullPath:ne,hash:G,query:r===Vi?Zu(b.query):b.query||{}},L,{redirectedFrom:void 0,href:W})}function x(b){return typeof b=="string"?Ur(n,b,l.value.path):Q({},b)}function F(b,M){if(c!==b)return nn(8,{from:M,to:b})}function z(b){return ue(b)}function Y(b){return z(Q(x(b),{replace:!0}))}function le(b){const M=b.matched[b.matched.length-1];if(M&&M.redirect){const{redirect:C}=M;let L=typeof C=="function"?C(b):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=x(L):{path:L},L.params={}),Q({query:b.query,hash:b.hash,params:"path"in L?{}:b.params},L)}}function ue(b,M){const C=c=v(b),L=l.value,G=b.state,ne=b.force,W=b.replace===!0,B=le(C);if(B)return ue(Q(x(B),{state:typeof B=="object"?Q({},G,B.state):G,force:ne,replace:W}),M||C);const u=C;u.redirectedFrom=M;let m;return!ne&&cu(r,L,C)&&(m=nn(16,{to:u,from:L}),Dt(L,L,!0,!1)),(m?Promise.resolve(m):de(u,L)).catch(p=>et(p)?et(p,2)?p:Oe(p):te(p,u,L)).then(p=>{if(p){if(et(p,2))return ue(Q({replace:W},x(p.to),{state:typeof p.to=="object"?Q({},G,p.to.state):G,force:ne}),M||u)}else p=Je(u,L,!0,W,G);return He(u,L,p),p})}function Be(b,M){const C=F(b,M);return C?Promise.reject(C):Promise.resolve()}function de(b,M){let C;const[L,G,ne]=fd(b,M);C=Wr(L.reverse(),"beforeRouteLeave",b,M);for(const B of L)B.leaveGuards.forEach(u=>{C.push(pt(u,b,M))});const W=Be.bind(null,b,M);return C.push(W),Ht(C).then(()=>{C=[];for(const B of i.list())C.push(pt(B,b,M));return C.push(W),Ht(C)}).then(()=>{C=Wr(G,"beforeRouteUpdate",b,M);for(const B of G)B.updateGuards.forEach(u=>{C.push(pt(u,b,M))});return C.push(W),Ht(C)}).then(()=>{C=[];for(const B of b.matched)if(B.beforeEnter&&!M.matched.includes(B))if(De(B.beforeEnter))for(const u of B.beforeEnter)C.push(pt(u,b,M));else C.push(pt(B.beforeEnter,b,M));return C.push(W),Ht(C)}).then(()=>(b.matched.forEach(B=>B.enterCallbacks={}),C=Wr(ne,"beforeRouteEnter",b,M),C.push(W),Ht(C))).then(()=>{C=[];for(const B of o.list())C.push(pt(B,b,M));return C.push(W),Ht(C)}).catch(B=>et(B,8)?B:Promise.reject(B))}function He(b,M,C){for(const L of s.list())L(b,M,C)}function Je(b,M,C,L,G){const ne=F(b,M);if(ne)return ne;const W=M===ut,B=Yt?history.state:{};C&&(L||W?a.replace(b.fullPath,Q({scroll:W&&B&&B.scroll},G)):a.push(b.fullPath,G)),l.value=b,Dt(b,M,C,W),Oe()}let Te;function jt(){Te||(Te=a.listen((b,M,C)=>{if(!fn.listening)return;const L=v(b),G=le(L);if(G){ue(Q(G,{replace:!0}),L).catch(_n);return}c=L;const ne=l.value;Yt&&bu(Di(ne.fullPath,C.delta),Tr()),de(L,ne).catch(W=>et(W,12)?W:et(W,2)?(ue(W.to,L).then(B=>{et(B,20)&&!C.delta&&C.type===Tn.pop&&a.go(-1,!1)}).catch(_n),Promise.reject()):(C.delta&&a.go(-C.delta,!1),te(W,L,ne))).then(W=>{W=W||Je(L,ne,!1),W&&(C.delta&&!et(W,8)?a.go(-C.delta,!1):C.type===Tn.pop&&et(W,20)&&a.go(-1,!1)),He(L,ne,W)}).catch(_n)}))}let $t=dn(),zt=dn(),me;function te(b,M,C){Oe(b);const L=zt.list();return L.length?L.forEach(G=>G(b,M,C)):console.error(b),Promise.reject(b)}function J(){return me&&l.value!==ut?Promise.resolve():new Promise((b,M)=>{$t.add([b,M])})}function Oe(b){return me||(me=!b,jt(),$t.list().forEach(([M,C])=>b?C(b):M()),$t.reset()),b}function Dt(b,M,C,L){const{scrollBehavior:G}=e;if(!Yt||!G)return Promise.resolve();const ne=!C&&yu(Di(b.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return Jo().then(()=>G(b,M,ne)).then(W=>W&&vu(W)).catch(W=>te(W,b,M))}const Ze=b=>a.go(b);let Ue;const Ie=new Set,fn={currentRoute:l,listening:!0,addRoute:g,removeRoute:E,hasRoute:P,getRoutes:I,resolve:v,options:e,push:z,replace:Y,go:Ze,back:()=>Ze(-1),forward:()=>Ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:zt.add,isReady:J,install(b){const M=this;b.component("RouterLink",rd),b.component("RouterView",sd),b.config.globalProperties.$router=M,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Tt(l)}),Yt&&!Ue&&l.value===ut&&(Ue=!0,z(a.location).catch(G=>{}));const C={};for(const G in ut)C[G]=fe(()=>l.value[G]);b.provide(Ka,M),b.provide(js,$n(C)),b.provide(ma,l);const L=b.unmount;Ie.add(b),b.unmount=function(){Ie.delete(b),Ie.size<1&&(c=ut,Te&&Te(),Te=null,l.value=ut,Ue=!1,me=!1),L()}}};return fn}function Ht(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function fd(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>tn(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>tn(c,l))||a.push(l))}return[n,r,a]}var $s=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const cd={};function ud(e,t){return ge(),ye("h1",null,"Home")}var dd=$s(cd,[["render",ud]]);const md={};function hd(e,t){return ge(),ye("h1",null,"about")}var pd=$s(md,[["render",hd]]);const gd={class:"rounded-md bg-white shadow-lg shadow-indigo-500/40 p-3 hover:scale-125 transition ease-in-out"},vd={class:"rounded-md h-32 bg-gradient-to-r from-cyan-500 to-blue-500 text-clip overflow-hidden tracking-widest text-center"},bd={class:"text-2xl"},yd=Qe({__name:"LaboLink",props:{title:null,id:null,emoji:null},setup(e){return(t,n)=>{const r=Sn("router-link");return ge(),ws(r,{to:"/labo/"+e.id},{default:tt(()=>[V("div",gd,[V("div",vd,[V("span",bd,Ct(e.emoji.repeat(60)),1)]),lt(" "+Ct(e.title),1)])]),_:1},8,["to"])}}}),_d={class:"text-2xl p-3"},xd=lt(" Labo "),wd={class:"grid grid-cols-auto-fit gap-4"},kd=Qe({__name:"Labo",setup(e){const t=gt([{title:"\u7D75\u6587\u5B57\u4E00\u81F4\u30C1\u30E3\u30EC\u30F3\u30B8\uFF01",id:1,emoji:"\u{1F600}"},{title:"\u307B\u3052",id:2,emoji:"\u{1F334}"},{title:"\u307B\u3052",id:2,emoji:"\u{1F4BC}"},{title:"\u307B\u3052",id:2,emoji:"\u{1F9B6}"},{title:"\u307B\u3052",id:2,emoji:"\u{1F916}"},{title:"\u307B\u3052",id:2,emoji:"\u{1F425}"}]);return(n,r)=>{const a=Sn("font-awesome-icon");return ge(),ye(Ae,null,[V("h1",_d,[re(a,{icon:"fa-solid fa-flask"}),xd]),V("div",wd,[(ge(!0),ye(Ae,null,na(t.value,i=>(ge(),ye("div",{key:i.id},[re(yd,{title:i.title,id:i.id,emoji:i.emoji},null,8,["title","id","emoji"])]))),128))])],64)}}}),Ed={class:"container text-center"},Ad=V("h1",{class:"text-xl font-bold mb-2"},"\u7D75\u6587\u5B57\u4E00\u81F4\u30C1\u30E3\u30EC\u30F3\u30B8\uFF01",-1),Od={key:0},Cd=["disabled"],Pd=V("br",null,null,-1),Sd=["disabled"],Rd={key:0},Id={key:1},Td=Qe({__name:"1",setup(e){const t=gt(0),n=gt([]),r=gt(0),a=gt(!1),i=gt([[]]),o=["\u{1F339}","\u{1F436}","\u{1F431}"],s=fe(()=>a.value===!1?`${r.value+1}\u56DE\u76EE\u30C1\u30E3\u30EC\u30F3\u30B8`:"\u4E00\u81F4\u304A\u3081\u3067\u3068\u3046\uFF01\uFF01");function l(){return o[Math.floor(Math.random()*o.length)]}function c(h){return h.every(g=>g===h[0])}function f(){for(let h=0;h<5;h++)i.value[r.value].push(l());if(i.value[r.value].length==5){const h=c(i.value[r.value]);n.value.push(h),r.value++,h===!0&&((t.value===0||t.value>=r.value)&&(t.value=r.value),a.value=!0),i.value[r.value]=[]}}function d(){a.value=!1,i.value=[[]],n.value=[],r.value=0}return(h,g)=>(ge(),ye("div",Ed,[Ad,t.value?(ge(),ye("div",Od,"\u30D9\u30B9\u30C8\u30B9\u30B3\u30A2\uFF1A"+Ct(t.value)+"\u56DE\u76EE\u3067\u6210\u529F",1)):qn("",!0),V("button",{class:"rounded-full bg-sky-500 px-5 py-3 mb-3 text-white touch-manipulation",type:"button",onClick:g[0]||(g[0]=E=>f()),disabled:a.value},Ct(Tt(s)),9,Cd),Pd,a.value?(ge(),ye("button",{key:1,class:"rounded-full bg-red-300 px-5 py-3 mb-3 text-white touch-manipulation",type:"button",onClick:g[1]||(g[1]=E=>d()),disabled:!a.value},"\u30EA\u30BB\u30C3\u30C8",8,Sd)):qn("",!0),V("div",null,[(ge(!0),ye(Ae,null,na(i.value,(E,I)=>(ge(),ye("div",{key:I},[n.value[i.value.length-(I+1)]!==void 0?(ge(),ye("span",Rd,Ct(i.value.length-I)+"\u56DE\u76EE",1)):qn("",!0),(ge(!0),ye(Ae,null,na(i.value[i.value.length-(I+1)],(P,v)=>(ge(),ye("span",{key:`${E}-${v}`,class:"text-xl"},Ct(P),1))),128)),n.value[i.value.length-(I+1)]!==void 0?(ge(),ye("span",Id,"\u30FB\u30FB\u30FB"+Ct(n.value[i.value.length-(I+1)]===!0?"\u2B55":"\u274C"),1)):qn("",!0)]))),128))])]))}}),Nd=[{path:"/",component:dd},{path:"/about",component:pd},{path:"/labo",component:kd},{path:"/labo/1",component:Td}],Md=ld({history:Eu(),routes:Nd});function eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?eo(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pr(e){return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pr(e)}function Fd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function to(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ld(e,t,n){return t&&to(e.prototype,t),n&&to(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qa(e,t){return $d(e)||Dd(e,t)||zs(e,t)||Hd()}function zn(e){return jd(e)||zd(e)||zs(e)||Bd()}function jd(e){if(Array.isArray(e))return ha(e)}function $d(e){if(Array.isArray(e))return e}function zd(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Dd(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function zs(e,t){if(!!e){if(typeof e=="string")return ha(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ha(e,t)}}function ha(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Bd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var no=function(){},Va={},Ds={},Bs=null,Hs={mark:no,measure:no};try{typeof window!="undefined"&&(Va=window),typeof document!="undefined"&&(Ds=document),typeof MutationObserver!="undefined"&&(Bs=MutationObserver),typeof performance!="undefined"&&(Hs=performance)}catch{}var Ud=Va.navigator||{},ro=Ud.userAgent,ao=ro===void 0?"":ro,xt=Va,se=Ds,io=Bs,Vn=Hs;xt.document;var ft=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",Us=~ao.indexOf("MSIE")||~ao.indexOf("Trident/"),Xn,Gn,Qn,Jn,Zn,at="___FONT_AWESOME___",pa=16,Ws="fa",Ys="svg-inline--fa",Ft="data-fa-i2svg",ga="data-fa-pseudo-element",Wd="data-fa-pseudo-element-pending",Xa="data-prefix",Ga="data-icon",oo="fontawesome-i2svg",Yd="async",Kd=["HTML","HEAD","STYLE","SCRIPT"],Ks=function(){try{return!0}catch{return!1}}(),oe="classic",ce="sharp",Qa=[oe,ce];function Dn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[oe]}})}var Nn=Dn((Xn={},pe(Xn,oe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),pe(Xn,ce,{fa:"solid",fass:"solid","fa-solid":"solid"}),Xn)),Mn=Dn((Gn={},pe(Gn,oe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),pe(Gn,ce,{solid:"fass"}),Gn)),Fn=Dn((Qn={},pe(Qn,oe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),pe(Qn,ce,{fass:"fa-solid"}),Qn)),qd=Dn((Jn={},pe(Jn,oe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),pe(Jn,ce,{"fa-solid":"fass"}),Jn)),Vd=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,qs="fa-layers-text",Xd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Gd=Dn((Zn={},pe(Zn,oe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),pe(Zn,ce,{900:"fass"}),Zn)),Vs=[1,2,3,4,5,6,7,8,9,10],Qd=Vs.concat([11,12,13,14,15,16,17,18,19,20]),Jd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],St={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ln=new Set;Object.keys(Mn[oe]).map(Ln.add.bind(Ln));Object.keys(Mn[ce]).map(Ln.add.bind(Ln));var Zd=[].concat(Qa,zn(Ln),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",St.GROUP,St.SWAP_OPACITY,St.PRIMARY,St.SECONDARY]).concat(Vs.map(function(e){return"".concat(e,"x")})).concat(Qd.map(function(e){return"w-".concat(e)})),wn=xt.FontAwesomeConfig||{};function em(e){var t=se.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function tm(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(se&&typeof se.querySelector=="function"){var nm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];nm.forEach(function(e){var t=qa(e,2),n=t[0],r=t[1],a=tm(em(n));a!=null&&(wn[r]=a)})}var Xs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ws,replacementClass:Ys,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wn.familyPrefix&&(wn.cssPrefix=wn.familyPrefix);var rn=R(R({},Xs),wn);rn.autoReplaceSvg||(rn.observeMutations=!1);var N={};Object.keys(Xs).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){rn[e]=n,kn.forEach(function(r){return r(N)})},get:function(){return rn[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){rn.cssPrefix=t,kn.forEach(function(n){return n(N)})},get:function(){return rn.cssPrefix}});xt.FontAwesomeConfig=N;var kn=[];function rm(e){return kn.push(e),function(){kn.splice(kn.indexOf(e),1)}}var dt=pa,Xe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function am(e){if(!(!e||!ft)){var t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=se.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return se.head.insertBefore(t,r),e}}var im="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function jn(){for(var e=12,t="";e-- >0;)t+=im[Math.random()*62|0];return t}function ln(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ja(e){return e.classList?ln(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Gs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function om(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Gs(e[n]),'" ')},"").trim()}function Nr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Za(e){return e.size!==Xe.size||e.x!==Xe.x||e.y!==Xe.y||e.rotate!==Xe.rotate||e.flipX||e.flipY}function sm(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function lm(e){var t=e.transform,n=e.width,r=n===void 0?pa:n,a=e.height,i=a===void 0?pa:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Us?l+="translate(".concat(t.x/dt-r/2,"em, ").concat(t.y/dt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/dt,"em), calc(-50% + ").concat(t.y/dt,"em)) "):l+="translate(".concat(t.x/dt,"em, ").concat(t.y/dt,"em) "),l+="scale(".concat(t.size/dt*(t.flipX?-1:1),", ").concat(t.size/dt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var fm=`:root, :host {
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
}`;function Qs(){var e=Ws,t=Ys,n=N.cssPrefix,r=N.replacementClass,a=fm;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var so=!1;function Yr(){N.autoAddCss&&!so&&(am(Qs()),so=!0)}var cm={mixout:function(){return{dom:{css:Qs,insertCss:Yr}}},hooks:function(){return{beforeDOMElementCreation:function(){Yr()},beforeI2svg:function(){Yr()}}}},it=xt||{};it[at]||(it[at]={});it[at].styles||(it[at].styles={});it[at].hooks||(it[at].hooks={});it[at].shims||(it[at].shims=[]);var je=it[at],Js=[],um=function e(){se.removeEventListener("DOMContentLoaded",e),gr=1,Js.map(function(t){return t()})},gr=!1;ft&&(gr=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),gr||se.addEventListener("DOMContentLoaded",um));function dm(e){!ft||(gr?setTimeout(e,0):Js.push(e))}function Bn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Gs(e):"<".concat(t," ").concat(om(r),">").concat(i.map(Bn).join(""),"</").concat(t,">")}function lo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var mm=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Kr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?mm(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function hm(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function va(e){var t=hm(e);return t.length===1?t[0].toString(16):null}function pm(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function fo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ba(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=fo(t);typeof je.hooks.addPack=="function"&&!a?je.hooks.addPack(e,fo(t)):je.styles[e]=R(R({},je.styles[e]||{}),i),e==="fas"&&ba("fa",t)}var er,tr,nr,qt=je.styles,gm=je.shims,vm=(er={},pe(er,oe,Object.values(Fn[oe])),pe(er,ce,Object.values(Fn[ce])),er),ei=null,Zs={},el={},tl={},nl={},rl={},bm=(tr={},pe(tr,oe,Object.keys(Nn[oe])),pe(tr,ce,Object.keys(Nn[ce])),tr);function ym(e){return~Zd.indexOf(e)}function _m(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!ym(a)?a:null}var al=function(){var t=function(i){return Kr(qt,function(o,s,l){return o[l]=Kr(s,i,{}),o},{})};Zs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),el=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),rl=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in qt||N.autoFetchSvg,r=Kr(gm,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});tl=r.names,nl=r.unicodes,ei=Mr(N.styleDefault,{family:N.familyDefault})};rm(function(e){ei=Mr(e.styleDefault,{family:N.familyDefault})});al();function ti(e,t){return(Zs[e]||{})[t]}function xm(e,t){return(el[e]||{})[t]}function Rt(e,t){return(rl[e]||{})[t]}function il(e){return tl[e]||{prefix:null,iconName:null}}function wm(e){var t=nl[e],n=ti("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wt(){return ei}var ni=function(){return{prefix:null,iconName:null,rest:[]}};function Mr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?oe:n,a=Nn[r][e],i=Mn[r][e]||Mn[r][a],o=e in je.styles?e:null;return i||o||null}var co=(nr={},pe(nr,oe,Object.keys(Fn[oe])),pe(nr,ce,Object.keys(Fn[ce])),nr);function Fr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},pe(t,oe,"".concat(N.cssPrefix,"-").concat(oe)),pe(t,ce,"".concat(N.cssPrefix,"-").concat(ce)),t),o=null,s=oe;(e.includes(i[oe])||e.some(function(c){return co[oe].includes(c)}))&&(s=oe),(e.includes(i[ce])||e.some(function(c){return co[ce].includes(c)}))&&(s=ce);var l=e.reduce(function(c,f){var d=_m(N.cssPrefix,f);if(qt[f]?(f=vm[s].includes(f)?qd[s][f]:f,o=f,c.prefix=f):bm[s].indexOf(f)>-1?(o=f,c.prefix=Mr(f,{family:s})):d?c.iconName=d:f!==N.replacementClass&&f!==i[oe]&&f!==i[ce]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var h=o==="fa"?il(c.iconName):{},g=Rt(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||g||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!qt.far&&qt.fas&&!N.autoFetchSvg&&(c.prefix="fas")}return c},ni());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ce&&(qt.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=Rt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=wt()||"fas"),l}var km=function(){function e(){Fd(this,e),this.definitions={}}return Ld(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),ba(s,o[s]);var l=Fn[oe][s];l&&ba(l,o[s]),al()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),uo=[],Vt={},Jt={},Em=Object.keys(Jt);function Am(e,t){var n=t.mixoutsTo;return uo=e,Vt={},Object.keys(Jt).forEach(function(r){Em.indexOf(r)===-1&&delete Jt[r]}),uo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),pr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Vt[o]||(Vt[o]=[]),Vt[o].push(i[o])})}r.provides&&r.provides(Jt)}),n}function ya(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Vt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Lt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Vt[e]||[];a.forEach(function(i){i.apply(null,n)})}function ot(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Jt[e]?Jt[e].apply(null,t):void 0}function _a(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||wt();if(!!t)return t=Rt(n,t)||t,lo(ol.definitions,n,t)||lo(je.styles,n,t)}var ol=new km,Om=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,Lt("noAuto")},Cm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ft?(Lt("beforeI2svg",t),ot("pseudoElements2svg",t),ot("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,dm(function(){Sm({autoReplaceSvgRoot:n}),Lt("watch",t)})}},Pm={icon:function(t){if(t===null)return null;if(pr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Rt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Mr(t[0]);return{prefix:r,iconName:Rt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(Vd))){var a=Fr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||wt(),iconName:Rt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=wt();return{prefix:i,iconName:Rt(i,t)||t}}}},Re={noAuto:Om,config:N,dom:Cm,parse:Pm,library:ol,findIconDefinition:_a,toHtml:Bn},Sm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?se:n;(Object.keys(je.styles).length>0||N.autoFetchSvg)&&ft&&N.autoReplaceSvg&&Re.dom.i2svg({node:r})};function Lr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Bn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!ft){var r=se.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Rm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Za(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Nr(R(R({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Im(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:o}),children:r}]}]}function ri(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,E=r.found?r:n,I=E.width,P=E.height,v=a==="fak",x=[N.replacementClass,i?"".concat(N.cssPrefix,"-").concat(i):""].filter(function(de){return d.classes.indexOf(de)===-1}).filter(function(de){return de!==""||!!de}).concat(d.classes).join(" "),F={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(P)})},z=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(I/P*16*.0625,"em")}:{};g&&(F.attributes[Ft]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(f||jn())},children:[l]}),delete F.attributes.title);var Y=R(R({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:R(R({},z),d.styles)}),le=r.found&&n.found?ot("generateAbstractMask",Y)||{children:[],attributes:{}}:ot("generateAbstractIcon",Y)||{children:[],attributes:{}},ue=le.children,Be=le.attributes;return Y.children=ue,Y.attributes=Be,s?Im(Y):Rm(Y)}function mo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=R(R(R({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Ft]="");var f=R({},o.styles);Za(a)&&(f.transform=lm({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Nr(f);d.length>0&&(c.style=d);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Tm(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Nr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var qr=je.styles;function xa(e){var t=e[0],n=e[1],r=e.slice(4),a=qa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(St.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(St.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(St.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Nm={found:!1,width:512,height:512};function Mm(e,t){!Ks&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function wa(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=wt()),new Promise(function(r,a){if(ot("missingIconAbstract"),n==="fa"){var i=il(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&qr[t]&&qr[t][e]){var o=qr[t][e];return r(xa(o))}Mm(e,t),r(R(R({},Nm),{},{icon:N.showMissingIcons&&e?ot("missingIconAbstract")||{}:{}}))})}var ho=function(){},ka=N.measurePerformance&&Vn&&Vn.mark&&Vn.measure?Vn:{mark:ho,measure:ho},pn='FA "6.2.0"',Fm=function(t){return ka.mark("".concat(pn," ").concat(t," begins")),function(){return sl(t)}},sl=function(t){ka.mark("".concat(pn," ").concat(t," ends")),ka.measure("".concat(pn," ").concat(t),"".concat(pn," ").concat(t," begins"),"".concat(pn," ").concat(t," ends"))},ai={begin:Fm,end:sl},sr=function(){};function po(e){var t=e.getAttribute?e.getAttribute(Ft):null;return typeof t=="string"}function Lm(e){var t=e.getAttribute?e.getAttribute(Xa):null,n=e.getAttribute?e.getAttribute(Ga):null;return t&&n}function jm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function $m(){if(N.autoReplaceSvg===!0)return lr.replace;var e=lr[N.autoReplaceSvg];return e||lr.replace}function zm(e){return se.createElementNS("http://www.w3.org/2000/svg",e)}function Dm(e){return se.createElement(e)}function ll(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?zm:Dm:n;if(typeof e=="string")return se.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ll(o,{ceFn:r}))}),a}function Bm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var lr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ll(a),n)}),n.getAttribute(Ft)===null&&N.keepOriginalSource){var r=se.createComment(Bm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ja(n).indexOf(N.replacementClass))return lr.replace(t);var a=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Bn(s)}).join(`
`);n.setAttribute(Ft,""),n.innerHTML=o}};function go(e){e()}function fl(e,t){var n=typeof t=="function"?t:sr;if(e.length===0)n();else{var r=go;N.mutateApproach===Yd&&(r=xt.requestAnimationFrame||go),r(function(){var a=$m(),i=ai.begin("mutate");e.map(a),i(),n()})}}var ii=!1;function cl(){ii=!0}function Ea(){ii=!1}var vr=null;function vo(e){if(!!io&&!!N.observeMutations){var t=e.treeCallback,n=t===void 0?sr:t,r=e.nodeCallback,a=r===void 0?sr:r,i=e.pseudoElementsCallback,o=i===void 0?sr:i,s=e.observeMutationsRoot,l=s===void 0?se:s;vr=new io(function(c){if(!ii){var f=wt();ln(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!po(d.addedNodes[0])&&(N.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&N.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&po(d.target)&&~Jd.indexOf(d.attributeName))if(d.attributeName==="class"&&Lm(d.target)){var h=Fr(Ja(d.target)),g=h.prefix,E=h.iconName;d.target.setAttribute(Xa,g||f),E&&d.target.setAttribute(Ga,E)}else jm(d.target)&&a(d.target)})}}),ft&&vr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Hm(){!vr||vr.disconnect()}function Um(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Wm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Fr(Ja(e));return a.prefix||(a.prefix=wt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=xm(a.prefix,e.innerText)||ti(a.prefix,va(e.innerText))),!a.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ym(e){var t=ln(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||jn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Km(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Xe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Wm(e),r=n.iconName,a=n.prefix,i=n.rest,o=Ym(e),s=ya("parseNodeAttributes",{},e),l=t.styleParser?Um(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Xe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var qm=je.styles;function ul(e){var t=N.autoReplaceSvg==="nest"?bo(e,{styleParser:!1}):bo(e);return~t.extra.classes.indexOf(qs)?ot("generateLayersText",e,t):ot("generateSvgReplacementMutation",e,t)}var kt=new Set;Qa.map(function(e){kt.add("fa-".concat(e))});Object.keys(Nn[oe]).map(kt.add.bind(kt));Object.keys(Nn[ce]).map(kt.add.bind(kt));kt=zn(kt);function yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ft)return Promise.resolve();var n=se.documentElement.classList,r=function(d){return n.add("".concat(oo,"-").concat(d))},a=function(d){return n.remove("".concat(oo,"-").concat(d))},i=N.autoFetchSvg?kt:Qa.map(function(f){return"fa-".concat(f)}).concat(Object.keys(qm));i.includes("fa")||i.push("fa");var o=[".".concat(qs,":not([").concat(Ft,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Ft,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ln(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ai.begin("onTree"),c=s.reduce(function(f,d){try{var h=ul(d);h&&f.push(h)}catch(g){Ks||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(h){fl(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(h){l(),d(h)})})}function Vm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ul(e).then(function(n){n&&fl([n],t)})}function Xm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:_a(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:_a(a||{})),e(r,R(R({},n),{},{mask:a}))}}var Gm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Xe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,h=d===void 0?null:d,g=n.titleId,E=g===void 0?null:g,I=n.classes,P=I===void 0?[]:I,v=n.attributes,x=v===void 0?{}:v,F=n.styles,z=F===void 0?{}:F;if(!!t){var Y=t.prefix,le=t.iconName,ue=t.icon;return Lr(R({type:"icon"},t),function(){return Lt("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(h?x["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(E||jn()):(x["aria-hidden"]="true",x.focusable="false")),ri({icons:{main:xa(ue),mask:l?xa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:le,transform:R(R({},Xe),a),symbol:o,title:h,maskId:f,titleId:E,extra:{attributes:x,styles:z,classes:P}})})}},Qm={mixout:function(){return{icon:Xm(Gm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=yo,n.nodeCallback=Vm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?se:r,i=n.callback,o=i===void 0?function(){}:i;return yo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,E){Promise.all([wa(a,s),f.iconName?wa(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var P=qa(I,2),v=P[0],x=P[1];g([n,ri({icons:{main:v,mask:x},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Nr(s);l.length>0&&(a.style=l);var c;return Za(o)&&(c=ot("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Jm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Lr({type:"layer"},function(){Lt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(zn(i)).join(" ")},children:o}]})}}}},Zm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return Lr({type:"counter",content:n},function(){return Lt("beforeDOMElementCreation",{content:n,params:r}),Tm({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(zn(s))}})})}}}},eh={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Xe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,h=r.styles,g=h===void 0?{}:h;return Lr({type:"text",content:n},function(){return Lt("beforeDOMElementCreation",{content:n,params:r}),mo({content:n,transform:R(R({},Xe),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(N.cssPrefix,"-layers-text")].concat(zn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Us){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,mo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},th=new RegExp('"',"ug"),_o=[1105920,1112319];function nh(e){var t=e.replace(th,""),n=pm(t,0),r=n>=_o[0]&&n<=_o[1],a=t.length===2?t[0]===t[1]:!1;return{value:va(a?t[0]:t),isSecondary:r||a}}function xo(e,t){var n="".concat(Wd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=ln(e.children),o=i.filter(function(ue){return ue.getAttribute(ga)===t})[0],s=xt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Xd),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ce:oe,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Mn[h][l[2].toLowerCase()]:Gd[h][c],E=nh(d),I=E.value,P=E.isSecondary,v=l[0].startsWith("FontAwesome"),x=ti(g,I),F=x;if(v){var z=wm(I);z.iconName&&z.prefix&&(x=z.iconName,g=z.prefix)}if(x&&!P&&(!o||o.getAttribute(Xa)!==g||o.getAttribute(Ga)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var Y=Km(),le=Y.extra;le.attributes[ga]=t,wa(x,g).then(function(ue){var Be=ri(R(R({},Y),{},{icons:{main:ue,mask:ni()},prefix:g,iconName:F,extra:le,watchable:!0})),de=se.createElement("svg");t==="::before"?e.insertBefore(de,e.firstChild):e.appendChild(de),de.outerHTML=Be.map(function(He){return Bn(He)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function rh(e){return Promise.all([xo(e,"::before"),xo(e,"::after")])}function ah(e){return e.parentNode!==document.head&&!~Kd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ga)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function wo(e){if(!!ft)return new Promise(function(t,n){var r=ln(e.querySelectorAll("*")).filter(ah).map(rh),a=ai.begin("searchPseudoElements");cl(),Promise.all(r).then(function(){a(),Ea(),t()}).catch(function(){a(),Ea(),n()})})}var ih={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=wo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?se:r;N.searchPseudoElements&&wo(a)}}},ko=!1,oh={mixout:function(){return{dom:{unwatch:function(){cl(),ko=!0}}}},hooks:function(){return{bootstrap:function(){vo(ya("mutationObserverCallbacks",{}))},noAuto:function(){Hm()},watch:function(n){var r=n.observeMutationsRoot;ko?Ea():vo(ya("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Eo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},sh={mixout:function(){return{parse:{transform:function(n){return Eo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Eo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:h};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},Vr={x:0,y:0,width:"100%",height:"100%"};function Ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function lh(e){return e.tag==="g"?e.children:[e]}var fh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Fr(a.split(" ").map(function(o){return o.trim()})):ni();return i.prefix||(i.prefix=wt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,h=o.icon,g=sm({transform:l,containerWidth:d,iconWidth:c}),E={tag:"rect",attributes:R(R({},Vr),{},{fill:"white"})},I=f.children?{children:f.children.map(Ao)}:{},P={tag:"g",attributes:R({},g.inner),children:[Ao(R({tag:f.tag,attributes:R(R({},f.attributes),g.path)},I))]},v={tag:"g",attributes:R({},g.outer),children:[P]},x="mask-".concat(s||jn()),F="clip-".concat(s||jn()),z={tag:"mask",attributes:R(R({},Vr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,v]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:lh(h)},z]};return r.push(Y,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(x,")")},Vr)}),{children:r,attributes:a}}}},ch={provides:function(t){var n=!1;xt.matchMedia&&(n=xt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},uh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},dh=[cm,Qm,Jm,Zm,eh,ih,oh,sh,fh,ch,uh];Am(dh,{mixoutsTo:Re});Re.noAuto;var dl=Re.config,mh=Re.library;Re.dom;var br=Re.parse;Re.findIconDefinition;Re.toHtml;var hh=Re.icon;Re.layer;var ph=Re.text;Re.counter;function Oo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oo(Object(n),!0).forEach(function(r){ke(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yr(e){return yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yr(e)}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gh(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function vh(e,t){if(e==null)return{};var n=gh(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Aa(e){return bh(e)||yh(e)||_h(e)||xh()}function bh(e){if(Array.isArray(e))return Oa(e)}function yh(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _h(e,t){if(!!e){if(typeof e=="string")return Oa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oa(e,t)}}function Oa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var wh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ml={exports:{}};(function(e){(function(t){var n=function(v,x,F){if(!c(x)||d(x)||h(x)||g(x)||l(x))return x;var z,Y=0,le=0;if(f(x))for(z=[],le=x.length;Y<le;Y++)z.push(n(v,x[Y],F));else{z={};for(var ue in x)Object.prototype.hasOwnProperty.call(x,ue)&&(z[v(ue,F)]=n(v,x[ue],F))}return z},r=function(v,x){x=x||{};var F=x.separator||"_",z=x.split||/(?=[A-Z])/;return v.split(z).join(F)},a=function(v){return E(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(x,F){return F?F.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var x=a(v);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(v,x){return r(v,x).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},f=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},h=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},E=function(v){return v=v-0,v===v},I=function(v,x){var F=x&&"process"in x?x.process:x;return typeof F!="function"?v:function(z,Y){return F(z,v,Y)}},P={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,x){return n(I(a,x),v)},decamelizeKeys:function(v,x){return n(I(o,x),v,x)},pascalizeKeys:function(v,x){return n(I(i,x),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=P:t.humps=P})(wh)})(ml);var kh=ml.exports,Eh=["class","style"];function Ah(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=kh.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Oh(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return oi(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=Oh(f);break;case"style":l.style=Ah(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=vh(n,Eh);return Ir(e.tag,Fe(Fe(Fe({},t),{},{class:a.class,style:Fe(Fe({},a.style),o)},a.attrs),s),r)}var hl=!1;try{hl=!0}catch{}function Ch(){if(!hl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function En(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ke({},e,t):{}}function Ph(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ke(t,"fa-".concat(e.size),e.size!==null),ke(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ke(t,"fa-pull-".concat(e.pull),e.pull!==null),ke(t,"fa-swap-opacity",e.swapOpacity),ke(t,"fa-bounce",e.bounce),ke(t,"fa-shake",e.shake),ke(t,"fa-beat",e.beat),ke(t,"fa-fade",e.fade),ke(t,"fa-beat-fade",e.beatFade),ke(t,"fa-flash",e.flash),ke(t,"fa-spin-pulse",e.spinPulse),ke(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Co(e){if(e&&yr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(br.icon)return br.icon(e);if(e===null)return null;if(yr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Sh=Qe({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=fe(function(){return Co(t.icon)}),i=fe(function(){return En("classes",Ph(t))}),o=fe(function(){return En("transform",typeof t.transform=="string"?br.transform(t.transform):t.transform)}),s=fe(function(){return En("mask",Co(t.mask))}),l=fe(function(){return hh(a.value,Fe(Fe(Fe(Fe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});bn(l,function(f){if(!f)return Ch("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=fe(function(){return l.value?oi(l.value.abstract[0],{},r):null});return function(){return c.value}}});Qe({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=dl.familyPrefix,i=fe(function(){return["".concat(a,"-layers")].concat(Aa(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Ir("div",{class:i.value},r.default?r.default():[])}}});Qe({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=dl.familyPrefix,i=fe(function(){return En("classes",[].concat(Aa(t.counter?["".concat(a,"-layers-counter")]:[]),Aa(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=fe(function(){return En("transform",typeof t.transform=="string"?br.transform(t.transform):t.transform)}),s=fe(function(){var c=ph(t.value.toString(),Fe(Fe({},o.value),i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=fe(function(){return oi(s.value,{},r)});return function(){return l.value}}});var Rh={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},Ih={prefix:"fas",iconName:"flask",icon:[448,512,[],"f0c3","M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z"]};mh.add(Rh,Ih);const si=Mc(iu);si.use(Md);si.component("font-awesome-icon",Sh);si.mount("#app");
