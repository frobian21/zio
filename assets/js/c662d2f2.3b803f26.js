"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={id:"countdownlatch",title:"CountdownLatch"},i=void 0,l={unversionedId:"datatypes/sync/countdownlatch",id:"version-1.x/datatypes/sync/countdownlatch",title:"CountdownLatch",description:"A synchronization aid that allows one or more fibers to wait until a set of operations being performed in other fibers",source:"@site/versioned_docs/version-1.x/datatypes/sync/countdownlatch.md",sourceDirName:"datatypes/sync",slug:"/datatypes/sync/countdownlatch",permalink:"/version-1.x/datatypes/sync/countdownlatch",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/sync/countdownlatch.md",tags:[],version:"1.x",frontMatter:{id:"countdownlatch",title:"CountdownLatch"}},c={},s=[{value:"Operations",id:"operations",level:2},{value:"Creation",id:"creation",level:3},{value:"Use",id:"use",level:3},{value:"Example Usage",id:"example-usage",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A synchronization aid that allows one or more fibers to wait until a set of operations being performed in other fibers\ncompletes."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"CountDownLatch")," is initialized with a given count. The ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," method block until the current count reaches zero due\nto invocations of the ",(0,r.kt)("inlineCode",{parentName:"p"},"countDown")," method, after which all waiting fibers are released and any subsequent invocations\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," return immediately. This is a one-shot phenomenon -- the count cannot be reset. If you need a version that\nresets the count, consider using a [","[CyclicBarrier]","]."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"CountDownLatch")," is a versatile synchronization tool and can be used for a number of purposes. A ",(0,r.kt)("inlineCode",{parentName:"p"},"CountDownLatch"),"\ninitialized with a count of one serves as a simple on/off latch, or gate: all fibers invoking ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," wait at the gate\nuntil it is opened by a fiber invoking ",(0,r.kt)("inlineCode",{parentName:"p"},"countDown"),". A ",(0,r.kt)("inlineCode",{parentName:"p"},"CountDownLatch"),"initialized to N can be used to make one fiber\nwait until N fibers have completed some action, or some action has been completed N times."),(0,r.kt)("p",null,"A useful property of a ",(0,r.kt)("inlineCode",{parentName:"p"},"CountDownLatch")," is that it doesn't require that fibers calling ",(0,r.kt)("inlineCode",{parentName:"p"},"countDown")," wait for the count to\nreach zero before proceeding, it simply prevents any fiber from proceeding past an ",(0,r.kt)("inlineCode",{parentName:"p"},"await"),"until all fibers could pass."),(0,r.kt)("h2",{id:"operations"},"Operations"),(0,r.kt)("h3",{id:"creation"},"Creation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"make(n: Int): IO[Option[Nothing], CountdownLatch]")),(0,r.kt)("td",{parentName:"tr",align:null},"Makes a new ",(0,r.kt)("inlineCode",{parentName:"td"},"CountdownLatch"),".")))),(0,r.kt)("h3",{id:"use"},"Use"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"await: UIO[Unit]")),(0,r.kt)("td",{parentName:"tr",align:null},"Causes the current fiber to wait until the latch has counted down to zero.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"countDown: UIO[Unit]")),(0,r.kt)("td",{parentName:"tr",align:null},"Decrements the count of the latch, releasing all waiting fibers if the count reaches zero.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"count: UIO[Int]")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the current count.")))),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.concurrent.CountdownLatch\n\nfor {\n  latch  <- CountdownLatch.make(100)\n  count  <- Ref.make(0)\n  ps     <- ZIO.collectAll(List.fill(10)(Promise.make[Nothing, Unit]))\n  _      <- ZIO.forkAll(ps.map(p => latch.await *> count.update(_ + 1) *> p.succeed(())))\n  _      <- latch.countDown.repeat(Schedule.recurs(99))\n  _      <- ZIO.foreach_(ps)(_.await)\n  result <- count.get\n} yield assert(result == 10)\n")))}u.isMDXComponent=!0}}]);