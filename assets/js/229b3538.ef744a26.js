"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5218],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(r),v=o,m=d["".concat(c,".").concat(v)]||d[v]||s[v]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},228:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={id:"with-guava",title:"How to Interop with Guava?"},a=void 0,u={unversionedId:"guides/interop/with-guava",id:"version-1.x/guides/interop/with-guava",title:"How to Interop with Guava?",description:"interop-guava module provide capibility to convert Guava's com.google.common.util.concurrent.ListenableFuture into ZIO Task.",source:"@site/versioned_docs/version-1.x/guides/interop/with-guava.md",sourceDirName:"guides/interop",slug:"/guides/interop/with-guava",permalink:"/version-1.x/guides/interop/with-guava",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/guides/interop/with-guava.md",tags:[],version:"1.x",frontMatter:{id:"with-guava",title:"How to Interop with Guava?"}},c={},p=[],l={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/interop-guava"},(0,o.kt)("inlineCode",{parentName:"a"},"interop-guava"))," module provide capibility to convert ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/guava/wiki/ListenableFutureExplained"},"Guava's ",(0,o.kt)("inlineCode",{parentName:"a"},"com.google.common.util.concurrent.ListenableFuture"))," into ZIO ",(0,o.kt)("inlineCode",{parentName:"p"},"Task"),"."))}s.isMDXComponent=!0}}]);