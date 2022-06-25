"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),y=a,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||s;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={id:"system",title:"System"},o=void 0,i={unversionedId:"datatypes/contextual/services/system",id:"datatypes/contextual/services/system",title:"System",description:"System service contains several useful functions related to system environments and properties. Both of system environments and system properties are key/value pairs. They are used to pass user-defined information to our application.",source:"@site/docs/datatypes/contextual/services/system.md",sourceDirName:"datatypes/contextual/services",slug:"/datatypes/contextual/services/system",permalink:"/datatypes/contextual/services/system",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/contextual/services/system.md",tags:[],version:"current",frontMatter:{id:"system",title:"System"},sidebar:"datatypes-sidebar",previous:{title:"Random",permalink:"/datatypes/contextual/services/random"},next:{title:"Introduction",permalink:"/datatypes/fiber/"}},l={},p=[{value:"System Environment",id:"system-environment",level:2},{value:"System Property",id:"system-property",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"System service contains several useful functions related to system environments and properties. Both of ",(0,a.kt)("strong",{parentName:"p"},"system environments")," and ",(0,a.kt)("strong",{parentName:"p"},"system properties")," are key/value pairs. They are used to pass user-defined information to our application."),(0,a.kt)("p",null,"Environment variables are global operating system level variables available to all applications running on the same machine, while properties are application-level variables provided to our application."),(0,a.kt)("h2",{id:"system-environment"},"System Environment"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," function retrieves the value of an environment variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nfor {\n  user <- System.env("USER")\n  _    <- user match {\n            case Some(value) => \n              Console.printLine(s"The USER env is: $value")\n            case None        => \n              Console.printLine("Oops! The USER env is not set")\n          }\n} yield ()\n')),(0,a.kt)("h2",{id:"system-property"},"System Property"),(0,a.kt)("p",null,"Also, the System service has a ",(0,a.kt)("inlineCode",{parentName:"p"},"property")," function to retrieve the value of a system property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nfor {\n  user <- System.property("LOG_LEVEL")\n  _    <- user match {\n           case Some(value) => \n             Console.printLine(s"The LOG_LEVEL property is: $value")\n           case None => \n             Console.printLine("Oops! The LOG_LEVEL property is not set")\n         }\n} yield ()\n')),(0,a.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"lineSeparator")," method, we can determine the line separator for the underlying platform:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'System.lineSeparator\n// res2: String = """\n// """\n')))}u.isMDXComponent=!0}}]);