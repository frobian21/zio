"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[74531],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),m=a,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},34628:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"urmanaged",title:"URManaged"},i=void 0,s={unversionedId:"datatypes/resource/urmanaged",id:"version-1.x/datatypes/resource/urmanaged",title:"URManaged",description:"URManaged[R, A] is a type alias for ZManaged[R, Nothing, A], which represents a managed resource that requires an R, and cannot fail, but can succeed with an A.",source:"@site/versioned_docs/version-1.x/datatypes/resource/urmanaged.md",sourceDirName:"datatypes/resource",slug:"/datatypes/resource/urmanaged",permalink:"/version-1.x/datatypes/resource/urmanaged",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/resource/urmanaged.md",tags:[],version:"1.x",frontMatter:{id:"urmanaged",title:"URManaged"},sidebar:"datatypes-sidebar",previous:{title:"UManaged",permalink:"/version-1.x/datatypes/resource/umanaged"},next:{title:"Introduction",permalink:"/version-1.x/datatypes/stream/"}},c={},p=[],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"URManaged[R, A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"ZManaged[R, Nothing, A]"),", which represents a managed resource that requires an ",(0,a.kt)("inlineCode",{parentName:"p"},"R"),", and cannot fail, but can succeed with an ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"URManaged")," type alias is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"type URManaged[-R, +A] = ZManaged[R, Nothing, A]\n")))}d.isMDXComponent=!0}}]);