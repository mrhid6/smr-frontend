import{S as e,i as t,s,e as a,j as r,c as o,a as n,m as c,d as l,b as i,f as d,o as h,x as u,u as f,v as p,k as m,l as v,Z as g,n as b,w as $,M as D,L as E,ai as x,P as V,N as I,r as w,C as M,t as P,g as y,Q as j,V as k,h as N,X as U,ac as A,W as L}from"../../chunks/vendor-9ef56761.js";import{j as O,k as T,l as _}from"../../chunks/graphql-7c12eb8b.js";import{P as q}from"../../chunks/PageControls-60bf12d6.js";import{b as R}from"../../chunks/paths-6758d194.js";function B(e,t,s){const a=e.slice();return a[12]=t[s],a}function C(e){let t,s,m;return s=new q({props:{totalPages:Math.ceil(e[1]/z),currentPage:e[3]}}),{c(){t=a("div"),r(s.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=n(t);c(s.$$.fragment,a),a.forEach(l),this.h()},h(){i(t,"class","mt-5 ml-auto flex justify-end")},m(e,a){d(e,t,a),h(s,t,null),m=!0},p(e,t){const a={};2&t&&(a.totalPages=Math.ceil(e[1]/z)),s.$set(a)},i(e){m||(u(s.$$.fragment,e),m=!0)},o(e){f(s.$$.fragment,e),m=!1},d(e){e&&l(t),p(s)}}}function S(e){let t,s,r,c,h,u,f,p,v,g,$,D,E=e[0].data.getUnapprovedMods.mods,x=[];for(let a=0;a<E.length;a+=1)x[a]=W(B(e,E,a));return{c(){t=a("div"),s=a("div"),r=P("Mod"),c=m(),h=a("div"),u=P("Description"),f=m(),p=a("div"),v=P("Release Date"),g=m(),$=a("div"),D=m();for(let e=0;e<x.length;e+=1)x[e].c();this.h()},l(e){t=o(e,"DIV",{class:!0});var a=n(t);s=o(a,"DIV",{});var i=n(s);r=y(i,"Mod"),i.forEach(l),c=b(a),h=o(a,"DIV",{});var d=n(h);u=y(d,"Description"),d.forEach(l),f=b(a),p=o(a,"DIV",{});var m=n(p);v=y(m,"Release Date"),m.forEach(l),g=b(a),$=o(a,"DIV",{}),n($).forEach(l),D=b(a);for(let t=0;t<x.length;t+=1)x[t].l(a);a.forEach(l),this.h()},h(){i(t,"class","grid grid-cols-6 itemList svelte-uwb2eg")},m(e,a){d(e,t,a),j(t,s),j(s,r),j(t,c),j(t,h),j(h,u),j(t,f),j(t,p),j(p,v),j(t,g),j(t,$),j(t,D);for(let s=0;s<x.length;s+=1)x[s].m(t,null)},p(e,s){if(49&s){let a;for(E=e[0].data.getUnapprovedMods.mods,a=0;a<E.length;a+=1){const r=B(e,E,a);x[a]?x[a].p(r,s):(x[a]=W(r),x[a].c(),x[a].m(t,null))}for(;a<x.length;a+=1)x[a].d(1);x.length=E.length}},d(e){e&&l(t),A(x,e)}}}function H(e){let t,s,r,c=e[0].error.message+"";return{c(){t=a("p"),s=P("Oh no... "),r=P(c)},l(e){t=o(e,"P",{});var a=n(t);s=y(a,"Oh no... "),r=y(a,c),a.forEach(l)},m(e,a){d(e,t,a),j(t,s),j(t,r)},p(e,t){1&t&&c!==(c=e[0].error.message+"")&&N(r,c)},d(e){e&&l(t)}}}function Q(e){let t,s;return{c(){t=a("p"),s=P("Loading...")},l(e){t=o(e,"P",{});var a=n(t);s=y(a,"Loading..."),a.forEach(l)},m(e,a){d(e,t,a),j(t,s)},p:L,d(e){e&&l(t)}}}function W(e){let t,s,r,c,h,u,f,p,v,g,$,D,E,x,V,I,w,M,A,L,O,T,_,q=e[12].name+"",B=e[12].short_description+"",C=e[12].created_at+"";function S(){return e[8](e[12])}function H(){return e[9](e[12])}return{c(){t=a("div"),s=a("div"),r=P(q),c=m(),h=a("div"),u=P(B),f=m(),p=a("div"),v=P(C),g=m(),$=a("div"),D=a("button"),E=P("Approve"),x=m(),V=a("button"),I=P("Deny"),w=m(),M=a("a"),A=P("View"),O=m(),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=n(t);s=o(a,"DIV",{class:!0});var i=n(s);r=y(i,q),i.forEach(l),c=b(a),h=o(a,"DIV",{class:!0});var d=n(h);u=y(d,B),d.forEach(l),f=b(a),p=o(a,"DIV",{class:!0});var m=n(p);v=y(m,C),m.forEach(l),g=b(a),$=o(a,"DIV",{class:!0});var P=n($);D=o(P,"BUTTON",{class:!0});var j=n(D);E=y(j,"Approve"),j.forEach(l),x=b(P),V=o(P,"BUTTON",{class:!0});var k=n(V);I=y(k,"Deny"),k.forEach(l),w=b(P),M=o(P,"A",{href:!0,class:!0});var N=n(M);A=y(N,"View"),N.forEach(l),P.forEach(l),O=b(a),a.forEach(l),this.h()},h(){i(s,"class","svelte-uwb2eg"),i(h,"class","svelte-uwb2eg"),i(p,"class","svelte-uwb2eg"),i(D,"class","py-1 px-4 rounded text-base bg-green-600 text-center cursor-pointer"),i(V,"class","py-1 px-4 rounded text-base bg-red-600 text-center cursor-pointer"),i(M,"href",L=R+"/mod/"+e[12].id),i(M,"class","py-1 px-4 rounded text-base bg-blue-500 text-center cursor-pointer"),i($,"class","grid grid-flow-col gap-4 svelte-uwb2eg"),i(t,"class","contents itemHeader svelte-uwb2eg")},m(e,a){d(e,t,a),j(t,s),j(s,r),j(t,c),j(t,h),j(h,u),j(t,f),j(t,p),j(p,v),j(t,g),j(t,$),j($,D),j(D,E),j($,x),j($,V),j(V,I),j($,w),j($,M),j(M,A),j(t,O),T||(_=[k(D,"click",S),k(V,"click",H)],T=!0)},p(t,s){e=t,1&s&&q!==(q=e[12].name+"")&&N(r,q),1&s&&B!==(B=e[12].short_description+"")&&N(u,B),1&s&&C!==(C=e[12].created_at+"")&&N(v,C),1&s&&L!==(L=R+"/mod/"+e[12].id)&&i(M,"href",L)},d(e){e&&l(t),T=!1,U(_)}}}function X(e){let t,s,m;return s=new q({props:{totalPages:Math.ceil(e[1]/z),currentPage:e[3]}}),{c(){t=a("div"),r(s.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=n(t);c(s.$$.fragment,a),a.forEach(l),this.h()},h(){i(t,"class","mt-5 ml-auto flex justify-end")},m(e,a){d(e,t,a),h(s,t,null),m=!0},p(e,t){const a={};2&t&&(a.totalPages=Math.ceil(e[1]/z)),s.$set(a)},i(e){m||(u(s.$$.fragment,e),m=!0)},o(e){f(s.$$.fragment,e),m=!1},d(e){e&&l(t),p(s)}}}function Z(e){let t,s,a,r,o,n=e[1]&&C(e);function c(e,t){return e[0].fetching?Q:e[0].error?H:S}let i=c(e),h=i(e),p=e[1]&&X(e);return{c(){t=m(),n&&n.c(),s=m(),h.c(),a=m(),p&&p.c(),r=v(),this.h()},l(e){g('[data-svelte="svelte-744wjo"]',document.head).forEach(l),t=b(e),n&&n.l(e),s=b(e),h.l(e),a=b(e),p&&p.l(e),r=v(),this.h()},h(){document.title="Admin: Unapproved Mods - SMR"},m(e,c){d(e,t,c),n&&n.m(e,c),d(e,s,c),h.m(e,c),d(e,a,c),p&&p.m(e,c),d(e,r,c),o=!0},p(e,[t]){e[1]?n?(n.p(e,t),2&t&&u(n,1)):(n=C(e),n.c(),u(n,1),n.m(s.parentNode,s)):n&&(w(),f(n,1,1,(()=>{n=null})),$()),i===(i=c(e))&&h?h.p(e,t):(h.d(1),h=i(e),h&&(h.c(),h.m(a.parentNode,a))),e[1]?p?(p.p(e,t),2&t&&u(p,1)):(p=X(e),p.c(),u(p,1),p.m(r.parentNode,r)):p&&(w(),f(p,1,1,(()=>{p=null})),$())},i(e){o||(u(n),u(p),o=!0)},o(e){f(n),f(p),o=!1},d(e){e&&l(t),n&&n.d(e),e&&l(s),h.d(e),e&&l(a),p&&p.d(e),e&&l(r)}}}const z=20;function F(e,t,s){let a;var r,o;const n=D(O,{filter:{offset:0,limit:z}});E(e,n,(e=>s(0,a=e)));const c=M(1);let l;c.subscribe((e=>x(n,a.variables.filter.offset=(e-1)*z,a)));const i=V({query:T}),d=e=>{i({modId:e}).then((()=>{n.reexecute()}))},h=V({query:_}),u=e=>{h({modId:e}).then((()=>{n.reexecute()}))};I(n);return e.$$.update=()=>{193&e.$$.dirty&&s(1,l=null===s(7,o=null===s(6,r=null==a?void 0:a.data)||void 0===r?void 0:r.getUnapprovedMods)||void 0===o?void 0:o.count)},[a,l,n,c,d,u,r,o,e=>d(e.id),e=>u(e.id)]}class G extends e{constructor(e){super(),t(this,e,F,Z,s,{})}}export{G as default};
//# sourceMappingURL=unapproved-mods.svelte-f0ee102f.js.map
