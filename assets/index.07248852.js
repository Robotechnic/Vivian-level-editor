(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function y(){}function Ee(e,t){for(const n in t)e[n]=t[n];return e}function yt(e){return e()}function ut(){return Object.create(null)}function Y(e){e.forEach(yt)}function He(e){return typeof e=="function"}function G(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ke;function ve(e,t){return ke||(ke=document.createElement("a")),ke.href=t,e===ke.href}function Nt(e){return Object.keys(e).length===0}function wt(e,...t){if(e==null)return y;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function me(e){let t;return wt(e,n=>t=n)(),t}function O(e,t,n){e.$$.on_destroy.push(wt(t,n))}function kt(e,t,n,l){if(e){const r=$t(e,t,n,l);return e[0](r)}}function $t(e,t,n,l){return e[1]&&l?Ee(n.ctx.slice(),e[1](l(t))):n.ctx}function St(e,t,n,l){if(e[2]&&l){const r=e[2](l(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const i=[],s=Math.max(t.dirty.length,r.length);for(let o=0;o<s;o+=1)i[o]=t.dirty[o]|r[o];return i}return t.dirty|r}return t.dirty}function zt(e,t,n,l,r,i){if(r){const s=$t(t,n,l,i);e.p(s,r)}}function Lt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let l=0;l<n;l++)t[l]=-1;return t}return-1}function at(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function ct(e){return e==null?"":e}function d(e,t){e.appendChild(t)}function z(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode.removeChild(e)}function Je(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function be(e){return document.createTextNode(e)}function b(){return be(" ")}function E(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function Se(e){return function(t){return t.preventDefault(),e.call(this,t)}}function qt(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ft(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const l in t)t[l]==null?e.removeAttribute(l):l==="style"?e.style.cssText=t[l]:l==="__value"?e.value=e[l]=t[l]:n[l]&&n[l].set?e[l]=t[l]:_(e,l,t[l])}function Dt(e){return Array.from(e.childNodes)}function We(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function X(e,t,n){e.classList[n?"add":"remove"](t)}function Mt(e,t,{bubbles:n=!1,cancelable:l=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,l,t),r}let ye;function pe(e){ye=e}function Ae(){if(!ye)throw new Error("Function called outside component initialization");return ye}function Bt(e){Ae().$$.on_mount.push(e)}function Rt(e){Ae().$$.after_update.push(e)}function Gt(e){Ae().$$.on_destroy.push(e)}function Ct(){const e=Ae();return(t,n,{cancelable:l=!1}={})=>{const r=e.$$.callbacks[t];if(r){const i=Mt(t,n,{cancelable:l});return r.slice().forEach(s=>{s.call(e,i)}),!i.defaultPrevented}return!0}}function Ht(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(l=>l.call(this,t))}const he=[],ae=[],ze=[],Me=[],Jt=Promise.resolve();let Be=!1;function Wt(){Be||(Be=!0,Jt.then(Et))}function Re(e){ze.push(e)}function Pe(e){Me.push(e)}const Ne=new Set;let $e=0;function Et(){const e=ye;do{for(;$e<he.length;){const t=he[$e];$e++,pe(t),Xt(t.$$)}for(pe(null),he.length=0,$e=0;ae.length;)ae.pop()();for(let t=0;t<ze.length;t+=1){const n=ze[t];Ne.has(n)||(Ne.add(n),n())}ze.length=0}while(he.length);for(;Me.length;)Me.pop()();Be=!1,Ne.clear(),pe(e)}function Xt(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Re)}}const Le=new Set;let x;function Xe(){x={r:0,c:[],p:x}}function Ye(){x.r||Y(x.c),x=x.p}function $(e,t){e&&e.i&&(Le.delete(e),e.i(t))}function L(e,t,n,l){if(e&&e.o){if(Le.has(e))return;Le.add(e),x.c.push(()=>{Le.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function Yt(e,t){const n={},l={},r={$$scope:1};let i=e.length;for(;i--;){const s=e[i],o=t[i];if(o){for(const u in s)u in o||(l[u]=1);for(const u in o)r[u]||(n[u]=o[u],r[u]=1);e[i]=o}else for(const u in s)r[u]=1}for(const s in l)s in n||(n[s]=void 0);return n}function qe(e,t,n){const l=e.$$.props[t];l!==void 0&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function D(e){e&&e.c()}function N(e,t,n,l){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),l||Re(()=>{const s=e.$$.on_mount.map(yt).filter(He);e.$$.on_destroy?e.$$.on_destroy.push(...s):Y(s),e.$$.on_mount=[]}),i.forEach(Re)}function q(e,t){const n=e.$$;n.fragment!==null&&(Y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(e,t){e.$$.dirty[0]===-1&&(he.push(e),Wt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(e,t,n,l,r,i,s,o=[-1]){const u=ye;pe(e);const a=e.$$={fragment:null,ctx:[],props:i,update:y,not_equal:r,bound:ut(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:ut(),dirty:o,skip_bound:!1,root:t.target||u.$$.root};s&&s(a.root);let c=!1;if(a.ctx=n?n(e,t.props||{},(f,g,...S)=>{const w=S.length?S[0]:g;return a.ctx&&r(a.ctx[f],a.ctx[f]=w)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](w),c&&Ft(e,f)),g}):[],a.update(),c=!0,Y(a.before_update),a.fragment=l?l(a.ctx):!1,t.target){if(t.hydrate){const f=Dt(t.target);a.fragment&&a.fragment.l(f),f.forEach(k)}else a.fragment&&a.fragment.c();t.intro&&$(e.$$.fragment),N(e,t.target,t.anchor,t.customElement),Et()}pe(u)}class K{$destroy(){q(this,1),this.$destroy=y}$on(t,n){if(!He(n))return y;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!Nt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Kt(e){let t,n,l,r,i,s,o,u=[{type:e[3]},{name:e[2]},{id:e[2]},e[4],{value:e[0]}],a={};for(let c=0;c<u.length;c+=1)a=Ee(a,u[c]);return{c(){t=h("div"),n=h("label"),l=be(e[1]),r=b(),i=h("input"),_(n,"for",e[2]),ft(i,a)},m(c,f){z(c,t,f),d(t,n),d(n,l),d(t,r),d(t,i),i.value=a.value,i.autofocus&&i.focus(),s||(o=[E(i,"input",e[5]),E(i,"keypress",e[6])],s=!0)},p(c,[f]){f&2&&We(l,c[1]),f&4&&_(n,"for",c[2]),ft(i,a=Yt(u,[f&8&&{type:c[3]},f&4&&{name:c[2]},f&4&&{id:c[2]},f&16&&c[4],f&1&&i.value!==c[0]&&{value:c[0]}])),"value"in a&&(i.value=a.value)},i:y,o:y,d(c){c&&k(t),s=!1,Y(o)}}}function Ut(e,t,n){let{value:l=""}=t,{label:r="Input"}=t,{name:i="input"}=t,{type:s="text"}=t,{inputParams:o={}}=t;const u=Ct(),a=f=>{n(0,l=f.target.value),s==="number"||s==="range"?n(0,l=Number(l)):s=="checkbox"&&n(0,l=f.target.checked),u("input",l)};function c(f){Ht.call(this,e,f)}return e.$$set=f=>{"value"in f&&n(0,l=f.value),"label"in f&&n(1,r=f.label),"name"in f&&n(2,i=f.name),"type"in f&&n(3,s=f.type),"inputParams"in f&&n(4,o=f.inputParams)},[l,r,i,s,o,a,c]}class De extends K{constructor(t){super(),F(this,t,Ut,Kt,G,{value:0,label:1,name:2,type:3,inputParams:4})}}function Vt(e){let t,n,l,r,i,s,o,u;const a=e[4].default,c=kt(a,e,e[3],null);return{c(){t=h("nav"),n=h("h2"),l=be(e[0]),r=b(),i=h("hr"),s=b(),c&&c.c(),_(n,"class","svelte-15oiif1"),_(i,"class","svelte-15oiif1"),_(t,"class",o=ct(e[2].class)+" svelte-15oiif1"),X(t,"leftShadow",e[1]=="left"),X(t,"rightShadow",e[1]=="right")},m(f,g){z(f,t,g),d(t,n),d(n,l),d(t,r),d(t,i),d(t,s),c&&c.m(t,null),u=!0},p(f,[g]){(!u||g&1)&&We(l,f[0]),c&&c.p&&(!u||g&8)&&zt(c,a,f,f[3],u?St(a,f[3],g,null):Lt(f[3]),null),(!u||g&4&&o!==(o=ct(f[2].class)+" svelte-15oiif1"))&&_(t,"class",o),(!u||g&6)&&X(t,"leftShadow",f[1]=="left"),(!u||g&6)&&X(t,"rightShadow",f[1]=="right")},i(f){u||($(c,f),u=!0)},o(f){L(c,f),u=!1},d(f){f&&k(t),c&&c.d(f)}}}function Qt(e,t,n){let{$$slots:l={},$$scope:r}=t,{title:i="Undefined"}=t,{shadow:s="left"}=t;return e.$$set=o=>{n(2,t=Ee(Ee({},t),at(o))),"title"in o&&n(0,i=o.title),"shadow"in o&&n(1,s=o.shadow),"$$scope"in o&&n(3,r=o.$$scope)},t=at(t),[i,s,t,r,l]}class At extends K{constructor(t){super(),F(this,t,Qt,Vt,G,{title:0,shadow:1})}}const ue=[];function _e(e,t=y){let n;const l=new Set;function r(o){if(G(e,o)&&(e=o,n)){const u=!ue.length;for(const a of l)a[1](),ue.push(a,e);if(u){for(let a=0;a<ue.length;a+=2)ue[a][0](ue[a+1]);ue.length=0}}}function i(o){r(o(e))}function s(o,u=y){const a=[o,u];return l.add(a),l.size===1&&(n=t(r)||y),o(e),()=>{l.delete(a),l.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:s}}const Z=_e(-1),Ge=_e(!1);function It(e,t,n){const{subscribe:l,set:r,update:i}=_e(e);return{subscribe:l,set(s){s<t?s=t:s>n&&(s=n),r(s)},update(s){i(o=>(o=s(o),o<t?o=t:o>n&&(o=n),o))}}}const we=It(10,1,50),fe=It(10,1,20);function Zt(){const{subscribe:e,set:t,update:n}=_e(new Array);return{subscribe:e,set:t,addLevel(){n(l=>[...l,Array.from({length:me(fe)*2+1},r=>Array(me(we)).fill(-1))])},pushLevel(l,r){n(r===void 0?i=>[...i,l]:i=>(i=[...i.slice(0,r),l,...i.slice(r)],i))},removeLevel(l){n(r=>(r=r.filter((i,s)=>s!==l),r))},setLevelCell(l,r,i,s){i!=me(fe)&&n(o=>(o[l][i][r]=s,o))},resize(l,r){r=r*2+1,n(i=>i.map(s=>{const o=s.length-r;if(o>0)s=s.slice(o/2,s.length-o/2);else if(o<0){for(let u=0;u<-o/2;u++)s.unshift(Array(l).fill(-1));for(let u=0;u<-o/2;u++)s.push(Array(l).fill(-1))}return s=s.map(u=>(u.length>l?u=u.slice(0,l):u.length<l&&(u=[...u,...Array(l-u.length).fill(-1)]),u)),s}))},reset(){n(l=>new Array)}}}const j=Zt(),_t=localStorage.getItem("levels");if(_t){const e=JSON.parse(_t);j.set(e.levels),we.set(e.width),fe.set(e.height)}j.subscribe(e=>{localStorage.setItem("levels",JSON.stringify({width:me(we),height:me(fe),levels:e}))});const ce=_e(Array()),dt=localStorage.getItem("images");if(dt){const e=JSON.parse(dt);ce.update(t=>[...t,...e.map(n=>{const l=new Image;return l.src=n.data,{name:n.name,data:l}})])}ce.subscribe(e=>{localStorage.setItem("images",JSON.stringify(e.map(t=>({name:t.name,data:t.data.src}))))});const Ce=_e(-1),xt="/Vivian-level-editor/assets/trash.8b6cb216.svg";function gt(e,t,n){const l=e.slice();return l[17]=t[n],l[19]=n,l}function ht(e){let t,n,l,r,i,s,o,u,a,c;return{c(){t=h("li"),n=h("input"),l=b(),r=h("label"),i=h("img"),_(n,"type","radio"),_(n,"name","tile"+String(e[19])),_(n,"id","tile"+String(e[19])),n.__value=e[19],n.value=n.__value,_(n,"class","svelte-17mgxwz"),e[14][0].push(n),ve(i.src,s=e[17].data.src)||_(i,"src",s),_(i,"alt",o=e[17].name),_(i,"title",u=e[17].name),_(i,"class","svelte-17mgxwz"),_(r,"for","tile"+String(e[19])),_(r,"class","svelte-17mgxwz"),X(r,"current",e[4]==e[19]),_(t,"class","tileSelector__itemList__tile svelte-17mgxwz")},m(f,g){z(f,t,g),d(t,n),n.checked=n.__value===e[4],d(t,l),d(t,r),d(r,i),a||(c=E(n,"change",e[15]),a=!0)},p(f,g){g&16&&(n.checked=n.__value===f[4]),g&32&&!ve(i.src,s=f[17].data.src)&&_(i,"src",s),g&32&&o!==(o=f[17].name)&&_(i,"alt",o),g&32&&u!==(u=f[17].name)&&_(i,"title",u),g&16&&X(r,"current",f[4]==f[19])},d(f){f&&k(t),e[14][0].splice(e[14][0].indexOf(n),1),a=!1,c()}}}function en(e){let t,n,l,r,i,s,o,u,a,c,f,g,S,w,U,ee,T,m,H,v,B,A,te,Fe,J,Ie,Ke,ne,de,Ue,Te,Ve,R,le,C,Qe,V,Q,Ze,xe,Oe,re,W,et,ge,se,je,tt;function Ot(p){e[10](p)}let nt={label:"Width:",name:"width",type:"number",inputParams:{min:0,max:100,step:1}};e[2]!==void 0&&(nt.value=e[2]),w=new De({props:nt}),ae.push(()=>qe(w,"value",Ot)),w.$on("keypress",e[7]);function jt(p){e[11](p)}let lt={label:"Height:",name:"height",type:"number",inputParams:{min:0,max:100,step:1}};e[1]!==void 0&&(lt.value=e[1]),T=new De({props:lt}),ae.push(()=>qe(T,"value",jt)),T.$on("keypress",e[7]);function Pt(p){e[12](p)}let rt={label:"Horizontal mirror:",name:"mirror",type:"checkbox",inputParams:{checked:!1}};e[3]!==void 0&&(rt.value=e[3]),J=new De({props:rt}),ae.push(()=>qe(J,"value",Pt));let ie=e[5],I=[];for(let p=0;p<ie.length;p+=1)I[p]=ht(gt(e,ie,p));return{c(){t=h("form"),n=h("div"),l=h("h3"),l.textContent="Project Manager",r=b(),i=h("button"),i.textContent="Import level set",s=b(),o=h("button"),o.textContent="Export level set",u=b(),a=h("button"),a.textContent="Delete current project",c=b(),f=h("div"),g=h("h3"),g.textContent="Grid Size",S=b(),D(w.$$.fragment),ee=b(),D(T.$$.fragment),H=b(),v=h("button"),v.textContent="Resize",B=b(),A=h("div"),te=h("h3"),te.textContent="Mirror",Fe=b(),D(J.$$.fragment),Ke=b(),ne=h("div"),de=h("h3"),Ue=be("Tile selector : "),Te=be(e[4]),Ve=b(),R=h("ul"),le=h("li"),C=h("input"),Qe=b(),V=h("label"),Q=h("img"),xe=b();for(let p=0;p<I.length;p+=1)I[p].c();Oe=b(),re=h("li"),W=h("input"),et=b(),ge=h("label"),ge.textContent="+",_(l,"class","svelte-17mgxwz"),_(i,"class","svelte-17mgxwz"),_(o,"class","svelte-17mgxwz"),_(a,"class","warn svelte-17mgxwz"),_(n,"class","fileManager svelte-17mgxwz"),_(g,"class","svelte-17mgxwz"),_(v,"class","svelte-17mgxwz"),_(f,"class","gridSize svelte-17mgxwz"),_(te,"class","svelte-17mgxwz"),_(A,"class","mirror"),_(de,"class","svelte-17mgxwz"),_(C,"type","radio"),_(C,"name","tileEraser"),_(C,"id","tileEraser"),C.__value=-1,C.value=C.__value,_(C,"class","svelte-17mgxwz"),e[14][0].push(C),ve(Q.src,Ze=xt)||_(Q,"src",Ze),_(Q,"alt","Eraser"),_(Q,"title","Eraser"),_(Q,"class","svelte-17mgxwz"),_(V,"for","tileEraser"),_(V,"class","noBg svelte-17mgxwz"),X(V,"current",e[4]==-1),_(le,"class","tileSelector__itemList__tile svelte-17mgxwz"),_(W,"type","file"),_(W,"id","newTileButton"),_(W,"accept","*.png, *.jpg, *.jpeg"),_(W,"class","svelte-17mgxwz"),_(ge,"for","newTileButton"),_(ge,"class","noBg svelte-17mgxwz"),_(re,"class","tileSelector__itemList__tile svelte-17mgxwz"),_(R,"class","tileSelector__itemList svelte-17mgxwz"),_(ne,"class","tileSelector"),_(t,"class","svelte-17mgxwz")},m(p,M){z(p,t,M),d(t,n),d(n,l),d(n,r),d(n,i),d(n,s),d(n,o),d(n,u),d(n,a),d(t,c),d(t,f),d(f,g),d(f,S),N(w,f,null),d(f,ee),N(T,f,null),d(f,H),d(f,v),d(t,B),d(t,A),d(A,te),d(A,Fe),N(J,A,null),d(t,Ke),d(t,ne),d(ne,de),d(de,Ue),d(de,Te),d(ne,Ve),d(ne,R),d(R,le),d(le,C),C.checked=C.__value===e[4],d(le,Qe),d(le,V),d(V,Q),d(R,xe);for(let oe=0;oe<I.length;oe+=1)I[oe].m(R,null);d(R,Oe),d(R,re),d(re,W),d(re,et),d(re,ge),se=!0,je||(tt=[E(a,"click",Se(e[9])),E(v,"click",Se(e[8])),E(C,"change",e[13]),E(W,"change",e[16]),E(W,"change",Se(e[6]))],je=!0)},p(p,M){const oe={};!U&&M&4&&(U=!0,oe.value=p[2],Pe(()=>U=!1)),w.$set(oe);const st={};!m&&M&2&&(m=!0,st.value=p[1],Pe(()=>m=!1)),T.$set(st);const it={};if(!Ie&&M&8&&(Ie=!0,it.value=p[3],Pe(()=>Ie=!1)),J.$set(it),(!se||M&16)&&We(Te,p[4]),M&16&&(C.checked=C.__value===p[4]),(!se||M&16)&&X(V,"current",p[4]==-1),M&48){ie=p[5];let P;for(P=0;P<ie.length;P+=1){const ot=gt(p,ie,P);I[P]?I[P].p(ot,M):(I[P]=ht(ot),I[P].c(),I[P].m(R,Oe))}for(;P<I.length;P+=1)I[P].d(1);I.length=ie.length}},i(p){se||($(w.$$.fragment,p),$(T.$$.fragment,p),$(J.$$.fragment,p),se=!0)},o(p){L(w.$$.fragment,p),L(T.$$.fragment,p),L(J.$$.fragment,p),se=!1},d(p){p&&k(t),q(w),q(T),q(J),e[14][0].splice(e[14][0].indexOf(C),1),Je(I,p),je=!1,Y(tt)}}}function tn(e){let t,n;return t=new At({props:{title:"Configuration",shadow:"right",$$slots:{default:[en]},$$scope:{ctx:e}}}),{c(){D(t.$$.fragment)},m(l,r){N(t,l,r),n=!0},p(l,[r]){const i={};r&1048639&&(i.$$scope={dirty:r,ctx:l}),t.$set(i)},i(l){n||($(t.$$.fragment,l),n=!0)},o(l){L(t.$$.fragment,l),n=!1},d(l){q(t,l)}}}function nn(e,t,n){let l,r,i,s,o;O(e,fe,v=>n(1,l=v)),O(e,we,v=>n(2,r=v)),O(e,Ge,v=>n(3,i=v)),O(e,Ce,v=>n(4,s=v)),O(e,ce,v=>n(5,o=v));let u;const a=()=>{let v=u[0],B=new FileReader;B.onload=()=>{const A=new Image;A.src=B.result,A.title=v.name,ce.update(te=>[...te,{name:v.name,data:A}])},B.readAsDataURL(v)},c=v=>{v.key==="Enter"&&(f(),v.preventDefault())},f=()=>{j.resize(r,l)},g=()=>{confirm("Are you sure you want to delete this project?")&&(j.reset(),ce.set([]))},S=[[]];function w(v){r=v,we.set(r)}function U(v){l=v,fe.set(l)}function ee(v){i=v,Ge.set(i)}function T(){s=this.__value,Ce.set(s)}function m(){s=this.__value,Ce.set(s)}function H(){u=this.files,n(0,u)}return[u,l,r,i,s,o,a,c,f,g,w,U,ee,T,S,m,H]}class ln extends K{constructor(t){super(),F(this,t,nn,tn,G,{})}}function rn(e){let t,n,l,r,i,s;return{c(){t=h("div"),n=h("canvas"),_(n,"width",l=e[1]*32),_(n,"height",r=e[2]*32),_(t,"class","grid svelte-2utg53")},m(o,u){z(o,t,u),d(t,n),e[9](n),i||(s=[E(window,"resize",e[3]),E(n,"mousedown",Se(e[4])),E(n,"mousemove",e[6]),E(n,"contextmenu",e[5])],i=!0)},p(o,[u]){u&2&&l!==(l=o[1]*32)&&_(n,"width",l),u&4&&r!==(r=o[2]*32)&&_(n,"height",r)},i:y,o:y,d(o){o&&k(t),e[9](null),i=!1,Y(s)}}}function sn(e,t,n){let l,r;O(e,j,m=>n(8,l=m)),O(e,ce,m=>n(11,r=m));let{gridId:i}=t,s,o=null,u,a;const c=()=>{if(o==null)return;o.clearRect(0,0,s.width,s.height);let m=Math.floor(l[i].length/2);l[i].forEach((H,v)=>{H.forEach((B,A)=>{v==m?(o.fillStyle="black",o.fillRect(A*32,v*32,32,32)):B===-1?(o.fillStyle="white",o.fillRect(A*32,v*32,32,32)):o.drawImage(r[B].data,A*32,v*32,32,32)})})},f=()=>{if(o!=null){c(),o.beginPath(),o.strokeStyle="black",o.fillStyle="black",o.lineWidth=1;for(let m=0;m<u;m++)o.moveTo(m*32,0),o.lineTo(m*32,a*32);for(let m=0;m<a;m++)o.moveTo(0,m*32),o.lineTo(u*32,m*32);o.stroke()}},g=(m,H)=>({x:Math.floor(m/s.width*u),y:Math.floor(H/s.height*a)}),S=Ct(),w=m=>{if(m.buttons==2&&!m.shiftKey)return S("erase",g(m.offsetX,m.offsetY)),!1;if(m.buttons==1)return S("click",g(m.offsetX,m.offsetY)),!0},U=m=>{if(!m.shiftKey){m.preventDefault(),w(m);return}},ee=m=>{m.buttons==2?S("erase",g(m.offsetX,m.offsetY)):m.buttons==1&&S("click",g(m.offsetX,m.offsetY))};Bt(()=>{if(o=s.getContext("2d"),o==null){alert("Could not get canvas context");return}o.imageSmoothingEnabled=!0,console.log("Context loaded"),i>-1&&f()}),Gt(()=>{o=null}),Rt(()=>{i>-1&&f()});function T(m){ae[m?"unshift":"push"](()=>{s=m,n(0,s)})}return e.$$set=m=>{"gridId"in m&&n(7,i=m.gridId)},e.$$.update=()=>{e.$$.dirty&384&&i>-1&&i<l.length&&(n(1,u=l[i][0].length),n(2,a=l[i].length)),e.$$.dirty&384&&l[i]&&f()},[s,u,a,f,w,U,ee,i,l,T]}class Tt extends K{constructor(t){super(),F(this,t,sn,rn,G,{gridId:7})}}function on(e){let t;return{c(){t=h("p"),t.textContent="There is currently no level selected.",_(t,"class","center svelte-92ejb9")},m(n,l){z(n,t,l)},p:y,i:y,o:y,d(n){n&&k(t)}}}function un(e){let t,n,l,r,i,s;return{c(){t=h("div"),n=h("p"),n.textContent="There is currently no levels.",l=b(),r=h("button"),r.textContent="Add a new level",_(t,"class","center svelte-92ejb9")},m(o,u){z(o,t,u),d(t,n),d(t,l),d(t,r),i||(s=E(r,"click",e[2]),i=!0)},p:y,i:y,o:y,d(o){o&&k(t),i=!1,s()}}}function an(e){let t,n,l;return n=new Tt({props:{gridId:e[0]}}),n.$on("click",e[3]),n.$on("erase",e[4]),{c(){t=h("div"),D(n.$$.fragment),_(t,"class","editor__gridContener svelte-92ejb9")},m(r,i){z(r,t,i),N(n,t,null),l=!0},p(r,i){const s={};i&1&&(s.gridId=r[0]),n.$set(s)},i(r){l||($(n.$$.fragment,r),l=!0)},o(r){L(n.$$.fragment,r),l=!1},d(r){r&&k(t),q(n)}}}function cn(e){let t,n,l,r;const i=[an,un,on],s=[];function o(u,a){return u[0]!=-1&&u[1].length>0?0:u[1].length==0?1:2}return n=o(e),l=s[n]=i[n](e),{c(){t=h("section"),l.c(),_(t,"class","editor svelte-92ejb9")},m(u,a){z(u,t,a),s[n].m(t,null),r=!0},p(u,[a]){let c=n;n=o(u),n===c?s[n].p(u,a):(Xe(),L(s[c],1,1,()=>{s[c]=null}),Ye(),l=s[n],l?l.p(u,a):(l=s[n]=i[n](u),l.c()),$(l,1),l.m(t,null))},i(u){r||($(l),r=!0)},o(u){L(l),r=!1},d(u){u&&k(t),s[n].d()}}}function fn(e,t,n){let l,r,i,s;O(e,Ce,c=>n(5,l=c)),O(e,Z,c=>n(0,r=c)),O(e,j,c=>n(1,i=c)),O(e,Ge,c=>n(6,s=c));const o=()=>{j.addLevel(),Z.set(i.length-1)},u=(c,f=!1)=>{j.setLevelCell(r,c.detail.x,c.detail.y,f?-1:l),s&&j.setLevelCell(r,c.detail.x,i[r].length-c.detail.y-1,f?-1:l)};return[r,i,o,u,c=>{u(c,!0)}]}class _n extends K{constructor(t){super(),F(this,t,fn,cn,G,{})}}const dn="/Vivian-level-editor/assets/trash-white.330e363c.svg",gn="/Vivian-level-editor/assets/copy-white.e7560aad.svg";function mt(e,t,n){const l=e.slice();return l[4]=t[n],l}function pt(e){let t,n,l,r,i,s,o,u;return{c(){t=h("button"),n=h("img"),i=b(),ve(n.src,l=e[4].icon)||_(n,"src",l),_(n,"alt",r=e[4].title+"button"),_(n,"class","svelte-1yu8awl"),_(t,"title",s=e[4].title),_(t,"class","svelte-1yu8awl")},m(a,c){z(a,t,c),d(t,n),d(t,i),o||(u=E(t,"click",qt(function(){He(e[4].action(e[1]))&&e[4].action(e[1]).apply(this,arguments)})),o=!0)},p(a,c){e=a,c&1&&!ve(n.src,l=e[4].icon)&&_(n,"src",l),c&1&&r!==(r=e[4].title+"button")&&_(n,"alt",r),c&1&&s!==(s=e[4].title)&&_(t,"title",s)},d(a){a&&k(t),o=!1,u()}}}function hn(e){let t,n,l,r,i=e[0],s=[];for(let a=0;a<i.length;a+=1)s[a]=pt(mt(e,i,a));const o=e[3].default,u=kt(o,e,e[2],null);return{c(){t=h("div"),n=h("div");for(let a=0;a<s.length;a+=1)s[a].c();l=b(),u&&u.c(),_(n,"class","buttons svelte-1yu8awl"),_(t,"class","overlay svelte-1yu8awl")},m(a,c){z(a,t,c),d(t,n);for(let f=0;f<s.length;f+=1)s[f].m(n,null);d(t,l),u&&u.m(t,null),r=!0},p(a,[c]){if(c&3){i=a[0];let f;for(f=0;f<i.length;f+=1){const g=mt(a,i,f);s[f]?s[f].p(g,c):(s[f]=pt(g),s[f].c(),s[f].m(n,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=i.length}u&&u.p&&(!r||c&4)&&zt(u,o,a,a[2],r?St(o,a[2],c,null):Lt(a[2]),null)},i(a){r||($(u,a),r=!0)},o(a){L(u,a),r=!1},d(a){a&&k(t),Je(s,a),u&&u.d(a)}}}function mn(e,t,n){let{$$slots:l={},$$scope:r}=t,{buttons:i}=t,{childId:s}=t;return e.$$set=o=>{"buttons"in o&&n(0,i=o.buttons),"childId"in o&&n(1,s=o.childId),"$$scope"in o&&n(2,r=o.$$scope)},[i,s,r,l]}class pn extends K{constructor(t){super(),F(this,t,mn,hn,G,{buttons:0,childId:1})}}function vt(e,t,n){const l=e.slice();return l[6]=t[n],l[8]=n,l}function vn(e){let t;return{c(){t=h("p"),t.textContent="There is currently no levels."},m(n,l){z(n,t,l)},p:y,i:y,o:y,d(n){n&&k(t)}}}function bn(e){let t,n,l=e[1],r=[];for(let s=0;s<l.length;s+=1)r[s]=bt(vt(e,l,s));const i=s=>L(r[s],1,1,()=>{r[s]=null});return{c(){t=h("ul");for(let s=0;s<r.length;s+=1)r[s].c();_(t,"class","levelList__list svelte-ynwbqm")},m(s,o){z(s,t,o);for(let u=0;u<r.length;u+=1)r[u].m(t,null);n=!0},p(s,o){if(o&7){l=s[1];let u;for(u=0;u<l.length;u+=1){const a=vt(s,l,u);r[u]?(r[u].p(a,o),$(r[u],1)):(r[u]=bt(a),r[u].c(),$(r[u],1),r[u].m(t,null))}for(Xe(),u=l.length;u<r.length;u+=1)i(u);Ye()}},i(s){if(!n){for(let o=0;o<l.length;o+=1)$(r[o]);n=!0}},o(s){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)L(r[o]);n=!1},d(s){s&&k(t),Je(r,s)}}}function yn(e){let t,n;return t=new Tt({props:{gridId:e[8]}}),{c(){D(t.$$.fragment)},m(l,r){N(t,l,r),n=!0},p:y,i(l){n||($(t.$$.fragment,l),n=!0)},o(l){L(t.$$.fragment,l),n=!1},d(l){q(t,l)}}}function bt(e){let t,n,l,r,i,s,o,u,a;return i=new pn({props:{buttons:e[2],childId:e[8],$$slots:{default:[yn]},$$scope:{ctx:e}}}),{c(){t=h("li"),n=h("input"),l=b(),r=h("label"),D(i.$$.fragment),s=b(),_(n,"type","radio"),_(n,"name","level"),_(n,"id","level-"+e[8]),n.__value=e[8],n.value=n.__value,_(n,"class","svelte-ynwbqm"),e[5][0].push(n),_(r,"class","levelList__list__grid svelte-ynwbqm"),_(r,"for","level-"+e[8]),_(t,"class","svelte-ynwbqm")},m(c,f){z(c,t,f),d(t,n),n.checked=n.__value===e[0],d(t,l),d(t,r),N(i,r,null),d(t,s),o=!0,u||(a=E(n,"change",e[4]),u=!0)},p(c,f){f&1&&(n.checked=n.__value===c[0]);const g={};f&512&&(g.$$scope={dirty:f,ctx:c}),i.$set(g)},i(c){o||($(i.$$.fragment,c),o=!0)},o(c){L(i.$$.fragment,c),o=!1},d(c){c&&k(t),e[5][0].splice(e[5][0].indexOf(n),1),q(i),u=!1,a()}}}function wn(e){let t,n,l,r,i,s,o,u;const a=[bn,vn],c=[];function f(g,S){return g[1].length!=0?0:1}return r=f(e),i=c[r]=a[r](e),{c(){t=h("button"),t.textContent="Add a new level",n=b(),l=h("div"),i.c(),_(t,"class","svelte-ynwbqm"),_(l,"class","levelList svelte-ynwbqm")},m(g,S){z(g,t,S),z(g,n,S),z(g,l,S),c[r].m(l,null),s=!0,o||(u=E(t,"click",e[3]),o=!0)},p(g,S){let w=r;r=f(g),r===w?c[r].p(g,S):(Xe(),L(c[w],1,1,()=>{c[w]=null}),Ye(),i=c[r],i?i.p(g,S):(i=c[r]=a[r](g),i.c()),$(i,1),i.m(l,null))},i(g){s||($(i),s=!0)},o(g){L(i),s=!1},d(g){g&&k(t),g&&k(n),g&&k(l),c[r].d(),o=!1,u()}}}function kn(e){let t,n;return t=new At({props:{title:"Level Selector",shadow:"left",$$slots:{default:[wn]},$$scope:{ctx:e}}}),{c(){D(t.$$.fragment)},m(l,r){N(t,l,r),n=!0},p(l,[r]){const i={};r&515&&(i.$$scope={dirty:r,ctx:l}),t.$set(i)},i(l){n||($(t.$$.fragment,l),n=!0)},o(l){L(t.$$.fragment,l),n=!1},d(l){q(t,l)}}}function $n(e,t,n){let l,r;O(e,Z,a=>n(0,l=a)),O(e,j,a=>n(1,r=a));const i=[{title:"Duplicate Level",icon:gn,action:a=>(j.pushLevel(r[a].map(c=>[...c]),a+1),Z.update(c=>a+1),null)},{title:"Delete Level",icon:dn,action:a=>(l==a?Z.set(-1):Z.update(c=>c>a?c-1:c),j.removeLevel(a),null)}],s=a=>{j.addLevel()},o=[[]];function u(){l=this.__value,Z.set(l)}return[l,r,i,s,u,o]}class Sn extends K{constructor(t){super(),F(this,t,$n,kn,G,{})}}function zn(e){let t,n,l,r,i,s,o,u,a;return r=new ln({}),s=new _n({}),u=new Sn({}),{c(){t=h("header"),t.innerHTML="<h1>Vivian level Editor</h1>",n=b(),l=h("main"),D(r.$$.fragment),i=b(),D(s.$$.fragment),o=b(),D(u.$$.fragment),_(l,"class","svelte-1fszlhy")},m(c,f){z(c,t,f),z(c,n,f),z(c,l,f),N(r,l,null),d(l,i),N(s,l,null),d(l,o),N(u,l,null),a=!0},p:y,i(c){a||($(r.$$.fragment,c),$(s.$$.fragment,c),$(u.$$.fragment,c),a=!0)},o(c){L(r.$$.fragment,c),L(s.$$.fragment,c),L(u.$$.fragment,c),a=!1},d(c){c&&k(t),c&&k(n),c&&k(l),q(r),q(s),q(u)}}}class Ln extends K{constructor(t){super(),F(this,t,null,zn,G,{})}}new Ln({target:document.getElementById("app")});
