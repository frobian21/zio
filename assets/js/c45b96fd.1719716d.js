"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[49390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(n),m=r,h=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"overview_basic_operations",title:"Basic Operations"},o=void 0,p={unversionedId:"overview/overview_basic_operations",id:"version-1.x/overview/overview_basic_operations",title:"Basic Operations",description:"Mapping",source:"@site/versioned_docs/version-1.x/overview/basic_operations.md",sourceDirName:"overview",slug:"/overview/overview_basic_operations",permalink:"/version-1.x/overview/overview_basic_operations",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/overview/basic_operations.md",tags:[],version:"1.x",frontMatter:{id:"overview_basic_operations",title:"Basic Operations"},sidebar:"overview-sidebar",previous:{title:"Creating Effects",permalink:"/version-1.x/overview/overview_creating_effects"},next:{title:"Handling Errors",permalink:"/version-1.x/overview/overview_handling_errors"}},l={},s=[{value:"Mapping",id:"mapping",level:2},{value:"Chaining",id:"chaining",level:2},{value:"For Comprehensions",id:"for-comprehensions",level:2},{value:"Zipping",id:"zipping",level:2},{value:"Next Step",id:"next-step",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mapping"},"Mapping"),(0,r.kt)("p",null,"You can map over the success channel of an effect by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#map")," method. This lets you transform the success values of effects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nval succeeded: UIO[Int] = IO.succeed(21).map(_ * 2)\n")),(0,r.kt)("p",null,"You can map over the error channel of an effect by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#mapError")," method. This lets you transform the failure values of effects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val failed: IO[Exception, Unit] = \n  IO.fail("No no!").mapError(msg => new Exception(msg))\n')),(0,r.kt)("p",null,"Note that mapping over an effect's success or error channel does not change the success or failure of the effect, in the same way that mapping over an ",(0,r.kt)("inlineCode",{parentName:"p"},"Either")," does not change whether the ",(0,r.kt)("inlineCode",{parentName:"p"},"Either")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Left")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Right"),"."),(0,r.kt)("h2",{id:"chaining"},"Chaining"),(0,r.kt)("p",null,"You can execute two effects in sequence with the ",(0,r.kt)("inlineCode",{parentName:"p"},"flatMap")," method, which requires that you pass a callback, which will receive the value of the first effect, and can return a second effect that depends on this value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val sequenced = \n  getStrLn.flatMap(input => putStrLn(s"You entered: $input"))\n')),(0,r.kt)("p",null,"If the first effect fails, the callback passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"flatMap")," will never be invoked, and the composed effect returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"flatMap")," will also fail."),(0,r.kt)("p",null,"In ",(0,r.kt)("em",{parentName:"p"},"any")," chain of effects, the first failure will short-circuit the whole chain, just like throwing an exception will prematurely exit a sequence of statements."),(0,r.kt)("h2",{id:"for-comprehensions"},"For Comprehensions"),(0,r.kt)("p",null,"Because the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," data type supports both ",(0,r.kt)("inlineCode",{parentName:"p"},"flatMap")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),", you can use Scala's ",(0,r.kt)("em",{parentName:"p"},"for comprehensions")," to build sequential effects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val program = \n  for {\n    _    <- putStrLn("Hello! What is your name?")\n    name <- getStrLn\n    _    <- putStrLn(s"Hello, ${name}, welcome to ZIO!")\n  } yield ()\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For comprehensions")," provide a more procedural syntax for composing chains of effects."),(0,r.kt)("h2",{id:"zipping"},"Zipping"),(0,r.kt)("p",null,"You can combine two effects into a single effect with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#zip")," method. The resulting effect succeeds with a tuple that contains the success values of both effects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val zipped: UIO[(String, Int)] = \n  ZIO.succeed("4").zip(ZIO.succeed(2))\n')),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"zip")," operates sequentially: the effect on the left side is executed before the effect on the right side."),(0,r.kt)("p",null,"In any ",(0,r.kt)("inlineCode",{parentName:"p"},"zip")," operation, if either the left or right hand sides fail, then the composed effect will fail, because ",(0,r.kt)("em",{parentName:"p"},"both")," values are required to construct the tuple."),(0,r.kt)("p",null,"Sometimes, when the success value of an effect is not useful (for example, it is ",(0,r.kt)("inlineCode",{parentName:"p"},"Unit"),"), it can be more convenient to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#zipLeft")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#zipRight")," functions, which first perform a ",(0,r.kt)("inlineCode",{parentName:"p"},"zip"),", and then map over the tuple to discard one side or the other:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val zipRight1 = \n  putStrLn("What is your name?").zipRight(getStrLn)\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"zipRight")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"zipLeft")," functions have symbolic aliases, known as ",(0,r.kt)("inlineCode",{parentName:"p"},"*>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<*"),", respectively. Some developers find these operators easier to read:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val zipRight2 = \n  putStrLn("What is your name?") *>\n  getStrLn\n')),(0,r.kt)("h2",{id:"next-step"},"Next Step"),(0,r.kt)("p",null,"If you are comfortable with the basic operations on ZIO effects, then the next step is to learn about ",(0,r.kt)("a",{parentName:"p",href:"/version-1.x/overview/overview_handling_errors"},"error handling"),"."))}u.isMDXComponent=!0}}]);