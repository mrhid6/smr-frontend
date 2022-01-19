import{S as x,i as ee,s as te,w as T,x as M,y as q,q as E,o as N,B as A,az as re,M as oe,N as ne,l as I,k as F,e as y,t as P,ab as se,d as _,m as D,c as S,a as j,h as C,b as U,X as v,g as w,p as H,O as ae,P as O,R as X,T as Z,Q as L,aC as ie,n as J,D as B,j as Q,Z as z,f as K}from"../../../chunks/vendor-2ce7ccec.js";import{p as le}from"../../../chunks/routing-689f9c1f.js";import{T as ce}from"../../../chunks/Toast-cfd5b391.js";import{g as fe}from"../../../chunks/navigation-ca50617e.js";import{V as ue}from"../../../chunks/VersionForm-98d72f87.js";import{x as de,C as me,y as pe,z as _e,F as he}from"../../../chunks/graphql-4793b2e5.js";import{b as be}from"../../../chunks/paths-396f020f.js";import{M as ke}from"../../../chunks/MetaDescriptors-36bd2d25.js";import"../../../chunks/singletons-4fc5a6de.js";import"../../../chunks/uplugin-6a735e2b.js";import"../../../chunks/api-82c76902.js";import"../../../chunks/user-ad7271b9.js";import"../../../chunks/forms-fd19d773.js";import"../../../chunks/markdown-b4f4b87c.js";import"../../../chunks/formatting-24701f16.js";import"../../../chunks/stores-3b01ec45.js";const ge=async(i,e,r,t,n)=>{const a=1e7,o=Math.ceil(i.size/a),u=new Array(o).fill(0).map((m,f)=>f).reverse(),l=(m,f,k)=>n.uploadVersionPart({modId:e,versionId:k,part:f,file:m}),b=10;let h=0,d=0;const $=m=>{if(h>=b||!u.length)return;const f=u.pop(),k=f*a,g=i.slice(k,k+a);return h+=1,Promise.all([l(g,f+1,m).then(()=>(h-=1,t.set({total:o,uploaded:o-u.length-h}),$(m))).catch(s=>{if(console.error("Upload failed:",s),h-=1,u.push(f),d+=1,d<5)return $(m);throw new Error("Failed uploading after 5 attempts")}),$(m)])};return n.createVersion({modId:e}).then(async m=>(t.set({total:o,uploaded:0}),await $(m.data.createVersion),m.data.createVersion)).then(m=>(console.log("Finalizing",{versionID:m}),n.finalizeCreateVersion({modId:e,versionId:m,version:r}).then(()=>new Promise((f,k)=>{let g=0;const s=setInterval(()=>{if(g==60)return clearInterval(s),k(new Error("Timed out waiting for mod processing"));n.checkVersionUploadState.reexecute({requestPolicy:"network-only"}),g++},1e4);n.checkVersionUploadState.variables.versionId=m;const p=n.checkVersionUploadState.subscribe(c=>{if(!c.fetching){if(c.error){clearInterval(s),k(new Error(c.error.message)),setTimeout(p);return}!c.data||!c.data.checkVersionUploadState||!c.data.checkVersionUploadState.version||!c.data.checkVersionUploadState.version.id||(p(),clearInterval(s),f(c.data.checkVersionUploadState))}})})))).catch(m=>{throw console.error(m),m})};function W(i){let e,r;return e=new ke({props:{description:"Creating a new version of mod "+i[2].data.mod.name,title:"New version of mod "+i[2].data.mod.name}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){q(e,t,n),r=!0},p(t,n){const a={};n&4&&(a.description="Creating a new version of mod "+t[2].data.mod.name),n&4&&(a.title="New version of mod "+t[2].data.mod.name),e.$set(a)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){N(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function ve(i){let e=i[2].data.mod.name+"",r;return{c(){r=P(e)},l(t){r=C(t,e)},m(t,n){w(t,r,n)},p(t,n){n&4&&e!==(e=t[2].data.mod.name+"")&&Q(r,e)},d(t){t&&_(r)}}}function $e(i){let e;return{c(){e=P("...")},l(r){e=C(r,"...")},m(r,t){w(r,e,t)},p:z,d(r){r&&_(e)}}}function we(i){let e,r,t,n;e=new ue({props:{onSubmit:i[8],modReference:i[2].data.mod.mod_reference}});let a=i[3]&&Y(i);return{c(){T(e.$$.fragment),r=F(),a&&a.c(),t=I()},l(o){M(e.$$.fragment,o),r=D(o),a&&a.l(o),t=I()},m(o,u){q(e,o,u),w(o,r,u),a&&a.m(o,u),w(o,t,u),n=!0},p(o,u){const l={};u&4&&(l.modReference=o[2].data.mod.mod_reference),e.$set(l),o[3]?a?a.p(o,u):(a=Y(o),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i(o){n||(E(e.$$.fragment,o),n=!0)},o(o){N(e.$$.fragment,o),n=!1},d(o){A(e,o),o&&_(r),a&&a.d(o),o&&_(t)}}}function Ve(i){let e,r,t=i[2].error.message+"",n;return{c(){e=y("p"),r=P("Oh no... "),n=P(t)},l(a){e=S(a,"P",{});var o=j(e);r=C(o,"Oh no... "),n=C(o,t),o.forEach(_)},m(a,o){w(a,e,o),v(e,r),v(e,n)},p(a,o){o&4&&t!==(t=a[2].error.message+"")&&Q(n,t)},i:z,o:z,d(a){a&&_(e)}}}function ye(i){let e,r;return{c(){e=y("p"),r=P("Loading...")},l(t){e=S(t,"P",{});var n=j(e);r=C(n,"Loading..."),n.forEach(_)},m(t,n){w(t,e,n),v(e,r)},p:z,i:z,o:z,d(t){t&&_(e)}}}function Y(i){let e,r,t,n,a,o,u,l,b=i[4].toFixed(0)+"",h,d,$,m,f;return{c(){e=y("div"),r=y("div"),t=y("div"),n=y("span"),a=P(i[3]),o=F(),u=y("div"),l=y("span"),h=P(b),d=P("%"),$=F(),m=y("div"),f=y("div"),this.h()},l(k){e=S(k,"DIV",{class:!0});var g=j(e);r=S(g,"DIV",{class:!0});var s=j(r);t=S(s,"DIV",{});var p=j(t);n=S(p,"SPAN",{class:!0});var c=j(n);a=C(c,i[3]),c.forEach(_),p.forEach(_),o=D(s),u=S(s,"DIV",{class:!0});var V=j(u);l=S(V,"SPAN",{class:!0});var R=j(l);h=C(R,b),d=C(R,"%"),R.forEach(_),V.forEach(_),s.forEach(_),$=D(g),m=S(g,"DIV",{class:!0});var G=j(m);f=S(G,"DIV",{style:!0,class:!0}),j(f).forEach(_),G.forEach(_),g.forEach(_),this.h()},h(){U(n,"class","text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-yellow-600"),U(l,"class","text-xs font-semibold inline-block text-white"),U(u,"class","text-right"),U(r,"class","flex mb-2 items-center justify-between"),K(f,"width",i[4].toFixed(0)+"%"),U(f,"class","shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600"),U(m,"class","overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-600"),U(e,"class","relative pt-4")},m(k,g){w(k,e,g),v(e,r),v(r,t),v(t,n),v(n,a),v(r,o),v(r,u),v(u,l),v(l,h),v(l,d),v(e,$),v(e,m),v(m,f)},p(k,g){g&8&&Q(a,k[3]),g&16&&b!==(b=k[4].toFixed(0)+"")&&Q(h,b),g&16&&K(f,"width",k[4].toFixed(0)+"%")},d(k){k&&_(e)}}}function Se(i){let e,r,t,n;const a=[ye,Ve,we],o=[];function u(l,b){return l[2].fetching?0:l[2].error?1:2}return e=u(i),r=o[e]=a[e](i),{c(){r.c(),t=I()},l(l){r.l(l),t=I()},m(l,b){o[e].m(l,b),w(l,t,b),n=!0},p(l,b){let h=e;e=u(l),e===h?o[e].p(l,b):(J(),N(o[h],1,1,()=>{o[h]=null}),H(),r=o[e],r?r.p(l,b):(r=o[e]=a[e](l),r.c()),E(r,1),r.m(t.parentNode,t))},i(l){n||(E(r),n=!0)},o(l){N(r),n=!1},d(l){o[e].d(l),l&&_(t)}}}function je(i){let e,r;return e=new ie({props:{$$slots:{default:[Se]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){q(e,t,n),r=!0},p(t,n){const a={};n&65564&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){N(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Ee(i){let e,r;return{c(){e=y("span"),r=P(i[1])},l(t){e=S(t,"SPAN",{});var n=j(e);r=C(n,i[1]),n.forEach(_)},m(t,n){w(t,e,n),v(e,r)},p(t,n){n&2&&Q(r,t[1])},d(t){t&&_(e)}}}function Pe(i){let e,r,t,n,a,o,u,l,b,h,d=!i[2].fetching&&!i[2].error&&i[2].data.mod&&W(i);function $(s,p){if(s[2].fetching)return $e;if(!s[2].error)return ve}let m=$(i),f=m&&m(i);o=new re({props:{$$slots:{default:[je]},$$scope:{ctx:i}}});function k(s){i[10](s)}let g={$$slots:{default:[Ee]},$$scope:{ctx:i}};return i[0]!==void 0&&(g.running=i[0]),l=new ce({props:g}),oe.push(()=>ne(l,"running",k)),{c(){d&&d.c(),e=I(),r=F(),t=y("h1"),n=P(`New Version for
  `),f&&f.c(),a=F(),T(o.$$.fragment),u=F(),T(l.$$.fragment),this.h()},l(s){const p=se('[data-svelte="svelte-qrqlce"]',document.head);d&&d.l(p),e=I(),p.forEach(_),r=D(s),t=S(s,"H1",{class:!0});var c=j(t);n=C(c,`New Version for
  `),f&&f.l(c),c.forEach(_),a=D(s),M(o.$$.fragment,s),u=D(s),M(l.$$.fragment,s),this.h()},h(){U(t,"class","text-4xl my-4 font-bold")},m(s,p){d&&d.m(document.head,null),v(document.head,e),w(s,r,p),w(s,t,p),v(t,n),f&&f.m(t,null),w(s,a,p),q(o,s,p),w(s,u,p),q(l,s,p),h=!0},p(s,[p]){!s[2].fetching&&!s[2].error&&s[2].data.mod?d?(d.p(s,p),p&4&&E(d,1)):(d=W(s),d.c(),E(d,1),d.m(e.parentNode,e)):d&&(J(),N(d,1,1,()=>{d=null}),H()),m===(m=$(s))&&f?f.p(s,p):(f&&f.d(1),f=m&&m(s),f&&(f.c(),f.m(t,null)));const c={};p&65564&&(c.$$scope={dirty:p,ctx:s}),o.$set(c);const V={};p&65538&&(V.$$scope={dirty:p,ctx:s}),!b&&p&1&&(b=!0,V.running=s[0],ae(()=>b=!1)),l.$set(V)},i(s){h||(E(d),E(o.$$.fragment,s),E(l.$$.fragment,s),h=!0)},o(s){N(d),N(o.$$.fragment,s),N(l.$$.fragment,s),h=!1},d(s){d&&d.d(s),_(e),s&&_(r),s&&_(t),f&&f.d(),s&&_(a),A(o,s),s&&_(u),A(l,s)}}}const He=le();function Ce(i,e,r){let t,n,a,{modId:o}=e;const u=B("");O(i,u,c=>r(3,n=c));const l=B(0);O(i,l,c=>r(4,a=c));const b=B();b.subscribe(c=>{c&&(c.uploaded===c.total?(u.set("Processing..."),l.set(100)):(u.set(`Uploading: ${c.uploaded}/${c.total}`),l.set(c.uploaded/c.total*100)))});let h="",d=!1;const $=X(de,{mod:o});O(i,$,c=>r(2,t=c)),Z($);const m=L({query:pe}),f=L({query:_e}),k=L({query:he}),g=X(me,{versionId:void 0,modId:o},{pause:!0});Z(g);const s=async c=>ge(c.file,o,{changelog:c.changelog,stability:c.stability},b,{createVersion:m,uploadVersionPart:f,finalizeCreateVersion:k,checkVersionUploadState:g}).then(V=>{console.log({success:V}),fe(be+"/mod/"+o+"/version/"+V.version.id)}).catch(V=>{console.error(V),r(1,h="Error creating version: "+V.message),r(0,d=!0),u.set("")});function p(c){d=c,r(0,d)}return i.$$set=c=>{"modId"in c&&r(9,o=c.modId)},i.$$.update=()=>{i.$$.dirty&1&&(d||r(1,h=""))},[d,h,t,n,a,u,l,$,s,o,p]}class Xe extends x{constructor(e){super();ee(this,e,Ce,Pe,te,{modId:9})}}export{Xe as default,He as load};
//# sourceMappingURL=new-version.svelte-05fad400.js.map
