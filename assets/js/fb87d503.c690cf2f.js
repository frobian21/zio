"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[1531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=i,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={id:"overview_index",title:"Summary"},o=void 0,l={unversionedId:"overview/overview_index",id:"overview/overview_index",title:"Summary",description:"ZIO is a library for asynchronous and concurrent programming.",source:"@site/docs/overview/index.md",sourceDirName:"overview",slug:"/overview/",permalink:"/overview/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/overview/index.md",tags:[],version:"current",frontMatter:{id:"overview_index",title:"Summary"},sidebar:"overview_sidebar",next:{title:"Creating Effects",permalink:"/overview/overview_creating_effects"}},p={},s=[{value:"ZIO",id:"zio",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ZIO is a library for asynchronous and concurrent programming."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For background on how pure functional programming deals with effects like input and output, see the ",(0,i.kt)("a",{parentName:"p",href:"/overview/overview_background"},"Background")," section.")),(0,i.kt)("p",null,"At the core of ZIO is ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),", a powerful effect type inspired by Haskell's ",(0,i.kt)("inlineCode",{parentName:"p"},"IO")," monad. This data type lets you solve complex problems with simple, type-safe, testable, and composable code."),(0,i.kt)("h2",{id:"zio"},"ZIO"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," data type has three type parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO[R, E, A]"),". The parameters are defined as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"R")," - Environment Type"),". Represents the environment required by the effect. If this type parameter is ",(0,i.kt)("inlineCode",{parentName:"li"},"Any"),", the environment has no requirements, meaning you can run the effect with any value (for example, the unit value ",(0,i.kt)("inlineCode",{parentName:"li"},"()"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"E")," - Failure Type"),". Represents the value of the effect's potential failure. If this type parameter is ",(0,i.kt)("inlineCode",{parentName:"li"},"Nothing"),", it means the effect cannot fail as there are no values of type ",(0,i.kt)("inlineCode",{parentName:"li"},"Nothing"),". Or, as another example, some applications will use ",(0,i.kt)("inlineCode",{parentName:"li"},"Throwable")," to indicate a failure which may throw."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"A")," - Success Type"),". Represents the potential success value of the effect. If this type parameter is ",(0,i.kt)("inlineCode",{parentName:"li"},"Unit"),", it means the effect produces no useful information, while if it is ",(0,i.kt)("inlineCode",{parentName:"li"},"Nothing"),", it means the effect runs forever (or until failure).")),(0,i.kt)("p",null,"For example, an effect of type ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO[Any, IOException, Byte]")," has no requirements, may fail with a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"IOException"),", or may succeed with a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Byte"),"."),(0,i.kt)("p",null,"A value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO[R, E, A]")," is like an effectful version of the following function type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"R => Either[E, A]\n")),(0,i.kt)("p",null,"This function, which requires an ",(0,i.kt)("inlineCode",{parentName:"p"},"R"),", might produce either an ",(0,i.kt)("inlineCode",{parentName:"p"},"E"),", representing failure, or an ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", representing success. ZIO effects are not actually functions, of course, because they model complex effects like asynchronous and concurrent effects."),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is the only effect type in ZIO. However, there are a family of type aliases and companion objects that simplify common cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UIO[A]")," \u2014 A type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[Any, Nothing, A]"),", representing an effect that has no requirements, cannot fail, and can succeed with an ",(0,i.kt)("inlineCode",{parentName:"li"},"A"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"URIO[R, A]")," \u2014 A type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[R, Nothing, A]"),", representing an effect that requires an ",(0,i.kt)("inlineCode",{parentName:"li"},"R"),", cannot fail, and can succeed with an ",(0,i.kt)("inlineCode",{parentName:"li"},"A"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Task[A]")," \u2014 A type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[Any, Throwable, A]"),", representing an effect that has no requirements, may fail with a ",(0,i.kt)("inlineCode",{parentName:"li"},"Throwable")," value, or succeed with an ",(0,i.kt)("inlineCode",{parentName:"li"},"A"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RIO[R, A]")," \u2014 A type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[R, Throwable, A]"),", representing an effect that requires an ",(0,i.kt)("inlineCode",{parentName:"li"},"R"),", may fail with a ",(0,i.kt)("inlineCode",{parentName:"li"},"Throwable")," value, or succeed with an ",(0,i.kt)("inlineCode",{parentName:"li"},"A"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IO[E, A]")," \u2014 A type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[Any, E, A]"),", representing an effect that has no requirements, may fail with an ",(0,i.kt)("inlineCode",{parentName:"li"},"E"),", or succeed with an ",(0,i.kt)("inlineCode",{parentName:"li"},"A"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tips For Getting Started With Type Aliases")),(0,i.kt)("p",null,"If you are new to functional effects, we recommend starting with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," type, which has a single type parameter and corresponds most closely to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Future")," data type built into Scala's standard library."),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("em",{parentName:"p"},"Cats Effect")," libraries, you may find the ",(0,i.kt)("inlineCode",{parentName:"p"},"RIO")," type useful, since it allows you to thread environments through third-party libraries and your application."),(0,i.kt)("p",null,"No matter what type alias you use in your application, ",(0,i.kt)("inlineCode",{parentName:"p"},"UIO")," can be useful for describing infallible effects, including those resulting from handling all errors."),(0,i.kt)("p",null,"Finally, if you are an experienced functional programmer, then direct use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is recommended, although you may find it useful to create your own family of type aliases in different parts of your application."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"If you are comfortable with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," data type, and its family of type aliases, the next step is learning how to ",(0,i.kt)("a",{parentName:"p",href:"/overview/overview_creating_effects"},"create effects"),"."))}u.isMDXComponent=!0}}]);