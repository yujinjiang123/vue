(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();var b=typeof global=="object"&&global&&global.Object===Object&&global;const y=b;var p=typeof self=="object"&&self&&self.Object===Object&&self,m=y||p||Function("return this")();const j=m;var O=j.Symbol;const u=O;var g=Object.prototype,S=g.hasOwnProperty,h=g.toString,f=u?u.toStringTag:void 0;function T(e){var n=S.call(e,f),c=e[f];try{e[f]=void 0;var l=!0}catch{}var t=h.call(e);return l&&(n?e[f]=c:delete e[f]),t}var v=Object.prototype,$=v.toString;function E(e){return $.call(e)}var L="[object Null]",P="[object Undefined]",d=u?u.toStringTag:void 0;function w(e){return e==null?e===void 0?P:L:d&&d in Object(e)?T(e):E(e)}function A(e){return e!=null&&typeof e=="object"}var N=Array.isArray;const x=N;var G="[object String]";function _(e){return typeof e=="string"||!x(e)&&A(e)&&w(e)==G}function q(e){const{createElement:n,setElementText:c,insert:l}=e;function t(i,o,a){i||s(o,a)}function r(i,o){!o||(i?t(o._vnode,i,o):(o._vnode&&c(o,""),o._vnode=i))}function s(i,o){const a=n(i.type);_(i.children)&&c(a,i.children),l(a,o)}return{render:r}}const F={type:"h1",children:"Hello"},R=q({createElement:e=>document.createElement(e),setElementText:(e,n)=>e.textContent=n,insert:(e,n,c=null)=>n.insertBefore(e,c)});R.render(F,document.querySelector("#app"));