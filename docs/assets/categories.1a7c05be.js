import{d as i,b as o,c as n,F as g,e as p,h as c,n as m,j as f,t as y,s as v,f as b,g as C,m as h,G as x,_,r as N,x as k,k as L,p as T,l as I,i as S}from"./index.daa6cca7.js";import{a as $}from"./shared.ddb0cd84.js";const B={class:"catalog-tree"},V=["onClick"],z={name:"CatalogTree"},j=i({...z,props:{categoryList:null,sub:{default:0}},setup(e){const a=e,r=h(),l=t=>{r.push({name:"category_articles",params:{category:t.categoryName,cid:t.cid}})};return(t,d)=>{const u=x("CatalogTree");return o(),n("div",B,[(o(!0),n(g,null,p(a.categoryList,s=>(o(),n("div",{class:"catalog",key:s.categoryName},[c("span",{class:"catalog-name",ref_for:!0,ref:"catalogNameRef",style:v({fontSize:a.sub?"16px":"20px",animationDelay:`${a.sub*.1}s`}),onClick:G=>l(s)},[c("i",{class:m(["iconfont",a.sub?"icon-catalog-sub":"icon-catalog"])},null,2),f(" "+y(s.categoryName),1)],12,V),s.subCategory?(o(),b(u,{key:0,categoryList:s.subCategory,sub:e.sub+1},null,8,["categoryList","sub"])):C("",!0)]))),128))])}}});const w=_(j,[["__scopeId","data-v-6d95c1f2"]]),D=e=>(T("data-v-7f9cbeda"),e=e(),I(),e),F={class:"categories animate__animated animate__fadeIn"},R=D(()=>c("div",{class:"article-category-title"},[c("span",null,"Categories")],-1)),A={class:"category-tree"},E=i({__name:"categories",setup(e){const a=N([]),r=S("global"),l=async()=>{const{data:t}=await r.$http.get("/api/1.1/classes/categories");a.value=$(t.results.slice(0))};return k(()=>{l()}),(t,d)=>(o(),n("div",F,[R,c("div",A,[L(w,{categoryList:a.value},null,8,["categoryList"])])]))}});const H=_(E,[["__scopeId","data-v-7f9cbeda"]]);export{H as default};