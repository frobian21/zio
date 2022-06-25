"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2033],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(y,s(s({ref:t},l),{},{components:a})):r.createElement(y,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8778:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={id:"task-managed",title:"TaskManaged"},s=void 0,i={unversionedId:"datatypes/resource/task-managed",id:"version-1.x/datatypes/resource/task-managed",title:"TaskManaged",description:"TaskManaged[A] is a type alias for ZManaged[Any, Throwable, A], which represents a managed resource that has no requirements, and may fail with a Throwable value, or succeed with an A.",source:"@site/versioned_docs/version-1.x/datatypes/resource/task-managed.md",sourceDirName:"datatypes/resource",slug:"/datatypes/resource/task-managed",permalink:"/version-1.x/datatypes/resource/task-managed",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/resource/task-managed.md",tags:[],version:"1.x",frontMatter:{id:"task-managed",title:"TaskManaged"},sidebar:"datatypes-sidebar",previous:{title:"Managed",permalink:"/version-1.x/datatypes/resource/managed"},next:{title:"RManaged",permalink:"/version-1.x/datatypes/resource/rmanaged"}},c={},p=[],l={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TaskManaged[A]")," is a type alias for ",(0,n.kt)("inlineCode",{parentName:"p"},"ZManaged[Any, Throwable, A]"),", which represents a managed resource that has no requirements, and may fail with a ",(0,n.kt)("inlineCode",{parentName:"p"},"Throwable")," value, or succeed with an ",(0,n.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"TaskManaged")," type alias is defined as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"type TaskManaged[+A] = ZManaged[Any, Throwable, A]\n")))}d.isMDXComponent=!0}}]);