import{S as a,i as s,s as e,e as t,j as n,c as r,a as l,m as c,d as o,b as i,f as h,o as d,x as f,u,v,k as m,l as g,Z as p,n as V,w as $,M as E,L as b,ai as k,N as D,r as I,C as w,t as x,g as y,Q as M,V as P,h as S,ak as j,al as L,ac as N,W as _,am as C,an as R}from"../../chunks/vendor-9ef56761.js";import{f as G}from"../../chunks/graphql-7c12eb8b.js";import{P as O}from"../../chunks/PageControls-60bf12d6.js";import{m as q}from"../../chunks/markdown-f46c64ca.js";function A(a,s,e){const t=a.slice();return t[9]=s[e],t}function Q(a){let s,e,m;return e=new O({props:{totalPages:Math.ceil(a[2]/X),currentPage:a[4]}}),{c(){s=t("div"),n(e.$$.fragment),this.h()},l(a){s=r(a,"DIV",{class:!0});var t=l(s);c(e.$$.fragment,t),t.forEach(o),this.h()},h(){i(s,"class","mt-5 ml-auto flex justify-end")},m(a,t){h(a,s,t),d(e,s,null),m=!0},p(a,s){const t={};4&s&&(t.totalPages=Math.ceil(a[2]/X)),e.$set(t)},i(a){m||(f(e.$$.fragment,a),m=!0)},o(a){u(e.$$.fragment,a),m=!1},d(a){a&&o(s),v(e)}}}function W(a){let s,e,n,c,d,f,u,v,g,p,$,E,b,k,D,I=a[0].data.getSMLVersions.sml_versions,w=[];for(let t=0;t<I.length;t+=1)w[t]=K(A(a,I,t));return{c(){s=t("div"),e=t("div"),n=x("Version"),c=m(),d=t("div"),f=x("Stability"),u=m(),v=t("div"),g=x("Game Version"),p=m(),$=t("div"),E=x("Release Date"),b=m(),k=t("div"),D=m();for(let a=0;a<w.length;a+=1)w[a].c();this.h()},l(a){s=r(a,"DIV",{class:!0});var t=l(s);e=r(t,"DIV",{});var i=l(e);n=y(i,"Version"),i.forEach(o),c=V(t),d=r(t,"DIV",{});var h=l(d);f=y(h,"Stability"),h.forEach(o),u=V(t),v=r(t,"DIV",{});var m=l(v);g=y(m,"Game Version"),m.forEach(o),p=V(t),$=r(t,"DIV",{});var I=l($);E=y(I,"Release Date"),I.forEach(o),b=V(t),k=r(t,"DIV",{}),l(k).forEach(o),D=V(t);for(let s=0;s<w.length;s+=1)w[s].l(t);t.forEach(o),this.h()},h(){i(s,"class","grid grid-cols-6 versions svelte-1e74345")},m(a,t){h(a,s,t),M(s,e),M(e,n),M(s,c),M(s,d),M(d,f),M(s,u),M(s,v),M(v,g),M(s,p),M(s,$),M($,E),M(s,b),M(s,k),M(s,D);for(let e=0;e<w.length;e+=1)w[e].m(s,null)},p(a,e){if(35&e){let t;for(I=a[0].data.getSMLVersions.sml_versions,t=0;t<I.length;t+=1){const n=A(a,I,t);w[t]?w[t].p(n,e):(w[t]=K(n),w[t].c(),w[t].m(s,null))}for(;t<w.length;t+=1)w[t].d(1);w.length=I.length}},d(a){a&&o(s),N(w,a)}}}function Z(a){let s,e,n,c=a[0].error.message+"";return{c(){s=t("p"),e=x("Oh no... "),n=x(c)},l(a){s=r(a,"P",{});var t=l(s);e=y(t,"Oh no... "),n=y(t,c),t.forEach(o)},m(a,t){h(a,s,t),M(s,e),M(s,n)},p(a,s){1&s&&c!==(c=a[0].error.message+"")&&S(n,c)},d(a){a&&o(s)}}}function z(a){let s,e;return{c(){s=t("p"),e=x("Loading...")},l(a){s=r(a,"P",{});var t=l(s);e=y(t,"Loading..."),t.forEach(o)},m(a,t){h(a,s,t),M(s,e)},p:_,d(a){a&&o(s)}}}function B(a){let s,e,n,c={ctx:a,current:null,token:null,hasCatch:!1,pending:J,then:H,catch:F,value:12};return j(e=q(a[9].changelog),c),{c(){s=t("div"),c.block.c(),n=m(),this.h()},l(a){s=r(a,"DIV",{class:!0});var e=l(s);c.block.l(e),n=V(e),e.forEach(o),this.h()},h(){i(s,"class","col-span-5 p-2 markdown-content")},m(a,e){h(a,s,e),c.block.m(s,c.anchor=null),c.mount=()=>s,c.anchor=n,M(s,n)},p(s,t){a=s,c.ctx=a,1&t&&e!==(e=q(a[9].changelog))&&j(e,c)||L(c,a,t)},d(a){a&&o(s),c.block.d(),c.token=null,c=null}}}function F(a){return{c:_,l:_,m:_,p:_,d:_}}function H(a){let s,e,t=a[12]+"";return{c(){s=new C,e=g(),this.h()},l(a){s=R(a),e=g(),this.h()},h(){s.a=e},m(a,n){s.m(t,a,n),h(a,e,n)},p(a,e){1&e&&t!==(t=a[12]+"")&&s.p(t)},d(a){a&&o(e),a&&s.d()}}}function J(a){return{c:_,l:_,m:_,p:_,d:_}}function K(a){let s,e,n,c,d,f,u,v,p,$,E,b,k,D,I,w,j,L,N,_,C,R=a[9].version+"",G=a[9].stability+"",O=a[9].satisfactory_version+"",q=a[9].date+"",A=a[1].has(a[9].id);function Q(){return a[8](a[9])}let W=A&&B(a);return{c(){s=t("div"),e=t("div"),n=x(R),c=m(),d=t("div"),f=x(G),u=m(),v=t("div"),p=x(O),$=m(),E=t("div"),b=x(q),k=m(),D=t("div"),I=t("a"),w=x("View"),L=m(),W&&W.c(),N=g(),this.h()},l(a){s=r(a,"DIV",{class:!0});var t=l(s);e=r(t,"DIV",{class:!0});var i=l(e);n=y(i,R),i.forEach(o),c=V(t),d=r(t,"DIV",{class:!0});var h=l(d);f=y(h,G),h.forEach(o),u=V(t),v=r(t,"DIV",{class:!0});var m=l(v);p=y(m,O),m.forEach(o),$=V(t),E=r(t,"DIV",{class:!0});var x=l(E);b=y(x,q),x.forEach(o),k=V(t),D=r(t,"DIV",{class:!0});var M=l(D);I=r(M,"A",{href:!0,class:!0});var P=l(I);w=y(P,"View"),P.forEach(o),M.forEach(o),t.forEach(o),L=V(a),W&&W.l(a),N=g(),this.h()},h(){i(e,"class","svelte-1e74345"),i(d,"class","svelte-1e74345"),i(v,"class","svelte-1e74345"),i(E,"class","svelte-1e74345"),i(I,"href",j=a[9].link),i(I,"class","py-1 px-4 rounded text-base bg-blue-500 text-center"),i(D,"class","grid grid-flow-col gap-4 svelte-1e74345"),i(s,"class","contents version-header svelte-1e74345")},m(a,t){h(a,s,t),M(s,e),M(e,n),M(s,c),M(s,d),M(d,f),M(s,u),M(s,v),M(v,p),M(s,$),M(s,E),M(E,b),M(s,k),M(s,D),M(D,I),M(I,w),h(a,L,t),W&&W.m(a,t),h(a,N,t),_||(C=P(s,"click",Q),_=!0)},p(s,e){a=s,1&e&&R!==(R=a[9].version+"")&&S(n,R),1&e&&G!==(G=a[9].stability+"")&&S(f,G),1&e&&O!==(O=a[9].satisfactory_version+"")&&S(p,O),1&e&&q!==(q=a[9].date+"")&&S(b,q),1&e&&j!==(j=a[9].link)&&i(I,"href",j),3&e&&(A=a[1].has(a[9].id)),A?W?W.p(a,e):(W=B(a),W.c(),W.m(N.parentNode,N)):W&&(W.d(1),W=null)},d(a){a&&o(s),a&&o(L),W&&W.d(a),a&&o(N),_=!1,C()}}}function T(a){let s,e,m;return e=new O({props:{totalPages:Math.ceil(a[2]/X),currentPage:a[4]}}),{c(){s=t("div"),n(e.$$.fragment),this.h()},l(a){s=r(a,"DIV",{class:!0});var t=l(s);c(e.$$.fragment,t),t.forEach(o),this.h()},h(){i(s,"class","mt-5 ml-auto flex justify-end")},m(a,t){h(a,s,t),d(e,s,null),m=!0},p(a,s){const t={};4&s&&(t.totalPages=Math.ceil(a[2]/X)),e.$set(t)},i(a){m||(f(e.$$.fragment,a),m=!0)},o(a){u(e.$$.fragment,a),m=!1},d(a){a&&o(s),v(e)}}}function U(a){let s,e,t,n,r,l=a[2]&&Q(a);function c(a,s){return a[0].fetching?z:a[0].error?Z:W}let i=c(a),d=i(a),v=a[2]&&T(a);return{c(){s=m(),l&&l.c(),e=m(),d.c(),t=m(),v&&v.c(),n=g(),this.h()},l(a){p('[data-svelte="svelte-afhnpt"]',document.head).forEach(o),s=V(a),l&&l.l(a),e=V(a),d.l(a),t=V(a),v&&v.l(a),n=g(),this.h()},h(){document.title="SML Versions - SMR"},m(a,c){h(a,s,c),l&&l.m(a,c),h(a,e,c),d.m(a,c),h(a,t,c),v&&v.m(a,c),h(a,n,c),r=!0},p(a,[s]){a[2]?l?(l.p(a,s),4&s&&f(l,1)):(l=Q(a),l.c(),f(l,1),l.m(e.parentNode,e)):l&&(I(),u(l,1,1,(()=>{l=null})),$()),i===(i=c(a))&&d?d.p(a,s):(d.d(1),d=i(a),d&&(d.c(),d.m(t.parentNode,t))),a[2]?v?(v.p(a,s),4&s&&f(v,1)):(v=T(a),v.c(),f(v,1),v.m(n.parentNode,n)):v&&(I(),u(v,1,1,(()=>{v=null})),$())},i(a){r||(f(l),f(v),r=!0)},o(a){u(l),u(v),r=!1},d(a){a&&o(s),l&&l.d(a),a&&o(e),d.d(a),a&&o(t),v&&v.d(a),a&&o(n)}}}const X=20;function Y(a,s,e){let t;var n,r;let l=new Set;const c=E(G,{offset:0,limit:X});b(a,c,(a=>e(0,t=a)));const o=w(1);let i;o.subscribe((a=>k(c,t.variables.offset=(a-1)*X,t))),D(c);const h=a=>{l.has(a)?l.delete(a):l.add(a),e(1,l)};return a.$$.update=()=>{193&a.$$.dirty&&e(2,i=null===e(7,r=null===e(6,n=null==t?void 0:t.data)||void 0===n?void 0:n.getSMLVersions)||void 0===r?void 0:r.count)},[t,l,i,c,o,h,n,r,a=>h(a.id)]}class aa extends a{constructor(a){super(),s(this,a,Y,U,e,{})}}export{aa as default};
//# sourceMappingURL=index.svelte-39c7dec9.js.map
