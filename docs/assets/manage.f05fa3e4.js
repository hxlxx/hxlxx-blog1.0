import{d as c,L as u,S as r,b as i,c as d,h as e,k as m,H as l,G as p,p as f,l as h,j as b,m as g,_ as v}from"./index.daa6cca7.js";const k=s=>(f("data-v-bf3d3bb3"),s=s(),h(),s),x={class:"manage animate__animated animate__fadeIn"},B={class:"manage-box"},I=k(()=>e("div",{class:"manage-title"},[e("span",null,"\u4F60\u60F3\u505A\u70B9\u4EC0\u4E48")],-1)),S={class:"menu"},w={class:"menu-item"},C=b("\u5199\u70B9\u6587\u7AE0"),E=c({__name:"manage",setup(s){const a=g(),n=u();return r((o,_)=>{if(o.name==="newarticle"){const t=sessionStorage.getItem("sessionToken");if(t&&t===n.sessionToken)return!0;a.push({name:"home"})}}),(o,_)=>{const t=p("router-link");return i(),d("div",x,[e("div",B,[I,e("ul",S,[e("li",w,[m(t,{to:"/newarticle"},{default:l(()=>[C]),_:1})])])])])}}});const T=v(E,[["__scopeId","data-v-bf3d3bb3"]]);export{T as default};