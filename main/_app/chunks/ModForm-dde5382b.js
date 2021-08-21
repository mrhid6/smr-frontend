import{aq as a,ar as s,ax as e,ay as r,az as t,S as o,i as l,s as n,as as i,ak as c,e as d,t as f,k as p,j as m,c as u,a as $,g as h,d as g,n as v,m as x,b as E,f as w,Q as b,o as y,at as _,al as L,x as S,u as A,v as D,au as I,av as N,aw as V,L as P,h as T,W as k}from"./vendor-9ef56761.js";import{t as U}from"./forms-8d025218.js";import{m as R}from"./markdown-f46c64ca.js";const M=a({name:s().min(3).max(32),mod_reference:s().min(3).max(32).regex(/^([a-zA-Z][a-zA-Z0-9_]*)$/).refine((async()=>!0)),short_description:s().min(16).max(128),full_description:e(s()),logo:e(r().refine((a=>"name"in a&&"size"in a&&"type"in a))),source_url:s().url().optional().or(t(""))});function B(a){let s,e,r=(a[8]||"")+"";return{c(){s=d("span"),e=f(r),this.h()},l(a){s=u(a,"SPAN",{class:!0});var t=$(s);e=h(t,r),t.forEach(g),this.h()},h(){E(s,"class","validation-message")},m(a,r){w(a,s,r),b(s,e)},p(a,s){256&s&&r!==(r=(a[8]||"")+"")&&T(e,r)},d(a){a&&g(s)}}}function j(a){let s,e,r=(a[8]||"")+"";return{c(){s=d("span"),e=f(r),this.h()},l(a){s=u(a,"SPAN",{class:!0});var t=$(s);e=h(t,r),t.forEach(g),this.h()},h(){E(s,"class","validation-message")},m(a,r){w(a,s,r),b(s,e)},p(a,s){256&s&&r!==(r=(a[8]||"")+"")&&T(e,r)},d(a){a&&g(s)}}}function z(a){let s,e,r=(a[8]||"")+"";return{c(){s=d("span"),e=f(r),this.h()},l(a){s=u(a,"SPAN",{class:!0});var t=$(s);e=h(t,r),t.forEach(g),this.h()},h(){E(s,"class","validation-message")},m(a,r){w(a,s,r),b(s,e)},p(a,s){256&s&&r!==(r=(a[8]||"")+"")&&T(e,r)},d(a){a&&g(s)}}}function F(a){let s,e,r=(a[8]||"")+"";return{c(){s=d("span"),e=f(r),this.h()},l(a){s=u(a,"SPAN",{class:!0});var t=$(s);e=h(t,r),t.forEach(g),this.h()},h(){E(s,"class","validation-message")},m(a,r){w(a,s,r),b(s,e)},p(a,s){256&s&&r!==(r=(a[8]||"")+"")&&T(e,r)},d(a){a&&g(s)}}}function O(a){return{c:k,l:k,m:k,p:k,d:k}}function C(a){let s,e=a[9]+"";return{c(){s=d("div"),this.h()},l(a){s=u(a,"DIV",{class:!0}),$(s).forEach(g),this.h()},h(){E(s,"class","markdown-content right svelte-1ks9yo5")},m(a,r){w(a,s,r),s.innerHTML=e},p(a,r){4&r&&e!==(e=a[9]+"")&&(s.innerHTML=e)},d(a){a&&g(s)}}}function H(a){return{c:k,l:k,m:k,p:k,d:k}}function Z(a){let s,e,r=(a[8]||"")+"";return{c(){s=d("span"),e=f(r),this.h()},l(a){s=u(a,"SPAN",{class:!0});var t=$(s);e=h(t,r),t.forEach(g),this.h()},h(){E(s,"class","validation-message")},m(a,r){w(a,s,r),b(s,e)},p(a,s){256&s&&r!==(r=(a[8]||"")+"")&&T(e,r)},d(a){a&&g(s)}}}function q(a){let s,e,r=(a[8]||"")+"";return{c(){s=d("span"),e=f(r),this.h()},l(a){s=u(a,"SPAN",{class:!0});var t=$(s);e=h(t,r),t.forEach(g),this.h()},h(){E(s,"class","validation-message")},m(a,r){w(a,s,r),b(s,e)},p(a,s){256&s&&r!==(r=(a[8]||"")+"")&&T(e,r)},d(a){a&&g(s)}}}function Q(a){let s,e,r,t,o,l,n,I,N,V,P,T,k,U,M,Q,W,X,G,J,K,Y,aa,sa,ea,ra,ta,oa,la,na,ia,ca,da,fa,pa,ma,ua,$a,ha,ga,va,xa,Ea,wa,ba,ya,_a,La,Sa,Aa,Da,Ia,Na,Va,Pa,Ta,ka,Ua,Ra,Ma,Ba,ja;N=new i({props:{for:"name",$$slots:{default:[B,({messages:a})=>({8:a}),({messages:a})=>a?256:0]},$$scope:{ctx:a}}}),W=new i({props:{for:"mod_reference",$$slots:{default:[j,({messages:a})=>({8:a}),({messages:a})=>a?256:0]},$$scope:{ctx:a}}}),ea=new i({props:{for:"short_description",$$slots:{default:[z,({messages:a})=>({8:a}),({messages:a})=>a?256:0]},$$scope:{ctx:a}}}),fa=new i({props:{for:"full_description",$$slots:{default:[F,({messages:a})=>({8:a}),({messages:a})=>a?256:0]},$$scope:{ctx:a}}});let za={ctx:a,current:null,token:null,hasCatch:!1,pending:H,then:C,catch:O,value:9};return c(ga=R(a[2]),za),La=new i({props:{for:"logo",$$slots:{default:[Z,({messages:a})=>({8:a}),({messages:a})=>a?256:0]},$$scope:{ctx:a}}}),Ta=new i({props:{for:"source_url",$$slots:{default:[q,({messages:a})=>({8:a}),({messages:a})=>a?256:0]},$$scope:{ctx:a}}}),{c(){s=d("form"),e=d("div"),r=d("div"),t=d("label"),o=f("Name:"),l=p(),n=d("input"),I=p(),m(N.$$.fragment),V=p(),P=d("div"),T=d("label"),k=f("Mod Reference:"),U=p(),M=d("input"),Q=p(),m(W.$$.fragment),X=p(),G=d("div"),J=d("label"),K=f("Short Description:"),Y=p(),aa=d("input"),sa=p(),m(ea.$$.fragment),ra=p(),ta=d("div"),oa=d("div"),la=d("label"),na=f("Full Description:"),ia=p(),ca=d("textarea"),da=p(),m(fa.$$.fragment),pa=p(),ma=d("div"),ua=d("span"),$a=f("Preview:"),ha=p(),za.block.c(),va=p(),xa=d("div"),Ea=d("label"),wa=f("Logo:"),ba=p(),ya=d("input"),_a=p(),m(La.$$.fragment),Sa=p(),Aa=d("div"),Da=d("label"),Ia=f("Source URL:"),Na=p(),Va=d("input"),Pa=p(),m(Ta.$$.fragment),ka=p(),Ua=d("div"),Ra=d("input"),this.h()},l(a){s=u(a,"FORM",{});var i=$(s);e=u(i,"DIV",{class:!0});var c=$(e);r=u(c,"DIV",{class:!0});var d=$(r);t=u(d,"LABEL",{for:!0});var f=$(t);o=h(f,"Name:"),f.forEach(g),l=v(d),n=u(d,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),I=v(d),x(N.$$.fragment,d),d.forEach(g),V=v(c),P=u(c,"DIV",{class:!0});var p=$(P);T=u(p,"LABEL",{for:!0});var m=$(T);k=h(m,"Mod Reference:"),m.forEach(g),U=v(p),M=u(p,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Q=v(p),x(W.$$.fragment,p),p.forEach(g),X=v(c),G=u(c,"DIV",{class:!0});var E=$(G);J=u(E,"LABEL",{for:!0});var w=$(J);K=h(w,"Short Description:"),w.forEach(g),Y=v(E),aa=u(E,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),sa=v(E),x(ea.$$.fragment,E),E.forEach(g),ra=v(c),ta=u(c,"DIV",{class:!0});var b=$(ta);oa=u(b,"DIV",{class:!0});var y=$(oa);la=u(y,"LABEL",{for:!0});var _=$(la);na=h(_,"Full Description:"),_.forEach(g),ia=v(y),ca=u(y,"TEXTAREA",{class:!0,id:!0,name:!0,placeholder:!0,rows:!0}),$(ca).forEach(g),da=v(y),x(fa.$$.fragment,y),y.forEach(g),pa=v(b),ma=u(b,"DIV",{class:!0});var L=$(ma);ua=u(L,"SPAN",{});var S=$(ua);$a=h(S,"Preview:"),S.forEach(g),ha=v(L),za.block.l(L),L.forEach(g),b.forEach(g),va=v(c),xa=u(c,"DIV",{class:!0});var A=$(xa);Ea=u(A,"LABEL",{for:!0});var D=$(Ea);wa=h(D,"Logo:"),D.forEach(g),ba=v(A),ya=u(A,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),_a=v(A),x(La.$$.fragment,A),A.forEach(g),Sa=v(c),Aa=u(c,"DIV",{class:!0});var R=$(Aa);Da=u(R,"LABEL",{for:!0});var B=$(Da);Ia=h(B,"Source URL:"),B.forEach(g),Na=v(R),Va=u(R,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Pa=v(R),x(Ta.$$.fragment,R),R.forEach(g),ka=v(c),Ua=u(c,"DIV",{});var j=$(Ua);Ra=u(j,"INPUT",{type:!0,class:!0}),j.forEach(g),c.forEach(g),i.forEach(g),this.h()},h(){E(t,"for","name"),E(n,"id","name"),E(n,"class","base-input"),E(n,"name","name"),E(n,"type","text"),E(n,"placeholder","Name"),E(r,"class","grid grid-flow-row gap-2"),E(T,"for","mod_reference"),E(M,"id","mod_reference"),E(M,"class","base-input"),E(M,"name","mod_reference"),E(M,"type","text"),E(M,"placeholder","Mod Reference"),M.readOnly=a[1],E(P,"class","grid grid-flow-row gap-2"),E(J,"for","short_description"),E(aa,"id","short_description"),E(aa,"class","base-input"),E(aa,"name","short_description"),E(aa,"type","text"),E(aa,"placeholder","Short Description"),E(G,"class","grid grid-flow-row gap-2"),E(la,"for","full_description"),E(ca,"class","base-input"),E(ca,"id","full_description"),E(ca,"name","full_description"),E(ca,"placeholder","Full Description"),E(ca,"rows","10"),E(oa,"class","grid grid-flow-row gap-2 auto-rows-max"),E(ma,"class","grid grid-flow-row gap-2 auto-rows-max"),E(ta,"class","grid gap-6 split svelte-1ks9yo5"),E(Ea,"for","logo"),E(ya,"id","logo"),E(ya,"class","base-input"),E(ya,"name","logo"),E(ya,"type","file"),E(ya,"accept","image/png,image/jpeg,image/gif"),E(ya,"placeholder","Logo"),E(xa,"class","grid grid-flow-row gap-2"),E(Da,"for","source_url"),E(Va,"id","source_url"),E(Va,"class","base-input"),E(Va,"name","source_url"),E(Va,"type","text"),E(Va,"placeholder","Source URL"),E(Aa,"class","grid grid-flow-row gap-2"),E(Ra,"type","submit"),Ra.value=a[0],E(Ra,"class","px-4 py-2 rounded text-base bg-blue-500 cursor-pointer"),E(e,"class","grid grid-flow-row gap-6")},m(i,c){w(i,s,c),b(s,e),b(e,r),b(r,t),b(t,o),b(r,l),b(r,n),b(r,I),y(N,r,null),b(e,V),b(e,P),b(P,T),b(T,k),b(P,U),b(P,M),b(P,Q),y(W,P,null),b(e,X),b(e,G),b(G,J),b(J,K),b(G,Y),b(G,aa),b(G,sa),y(ea,G,null),b(e,ra),b(e,ta),b(ta,oa),b(oa,la),b(la,na),b(oa,ia),b(oa,ca),b(oa,da),y(fa,oa,null),b(ta,pa),b(ta,ma),b(ma,ua),b(ua,$a),b(ma,ha),za.block.m(ma,za.anchor=null),za.mount=()=>ma,za.anchor=null,b(e,va),b(e,xa),b(xa,Ea),b(Ea,wa),b(xa,ba),b(xa,ya),b(xa,_a),y(La,xa,null),b(e,Sa),b(e,Aa),b(Aa,Da),b(Da,Ia),b(Aa,Na),b(Aa,Va),b(Aa,Pa),y(Ta,Aa,null),b(e,ka),b(e,Ua),b(Ua,Ra),Ma=!0,Ba||(ja=_(a[3].call(null,s)),Ba=!0)},p(s,[e]){a=s;const r={};1280&e&&(r.$$scope={dirty:e,ctx:a}),N.$set(r),(!Ma||2&e)&&(M.readOnly=a[1]);const t={};1280&e&&(t.$$scope={dirty:e,ctx:a}),W.$set(t);const o={};1280&e&&(o.$$scope={dirty:e,ctx:a}),ea.$set(o);const l={};1280&e&&(l.$$scope={dirty:e,ctx:a}),fa.$set(l),za.ctx=a,4&e&&ga!==(ga=R(a[2]))&&c(ga,za)||L(za,a,e);const n={};1280&e&&(n.$$scope={dirty:e,ctx:a}),La.$set(n);const i={};1280&e&&(i.$$scope={dirty:e,ctx:a}),Ta.$set(i),(!Ma||1&e)&&(Ra.value=a[0])},i(a){Ma||(S(N.$$.fragment,a),S(W.$$.fragment,a),S(ea.$$.fragment,a),S(fa.$$.fragment,a),S(La.$$.fragment,a),S(Ta.$$.fragment,a),Ma=!0)},o(a){A(N.$$.fragment,a),A(W.$$.fragment,a),A(ea.$$.fragment,a),A(fa.$$.fragment,a),A(La.$$.fragment,a),A(Ta.$$.fragment,a),Ma=!1},d(a){a&&g(s),D(N),D(W),D(ea),D(fa),za.block.d(),za.token=null,za=null,D(La),D(Ta),Ba=!1,ja()}}}function W(a,s,e){let r,t,{onSubmit:o}=s,{initialValues:l}=s,{submitText:n="Create"}=s,{editing:i=!1}=s;const{form:c,data:d}=I({initialValues:l,extend:[N,V],validateSchema:M,onSubmit:a=>o(U(a,M))});return P(a,d,(a=>e(7,t=a))),a.$$set=a=>{"onSubmit"in a&&e(5,o=a.onSubmit),"initialValues"in a&&e(6,l=a.initialValues),"submitText"in a&&e(0,n=a.submitText),"editing"in a&&e(1,i=a.editing)},a.$$.update=()=>{128&a.$$.dirty&&e(2,r=t.full_description||"")},[n,i,r,c,d,o,l,t]}class X extends o{constructor(a){super(),l(this,a,W,Q,n,{onSubmit:5,initialValues:6,submitText:0,editing:1})}}export{X as M};
//# sourceMappingURL=ModForm-dde5382b.js.map
