"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),c=s(n),h=a,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||r;return n?i.createElement(m,l(l({ref:t},f),{},{components:n})):i.createElement(m,l({ref:t},f))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={id:"fiberref",title:"FiberRef"},l=void 0,o={unversionedId:"datatypes/fiber/fiberref",id:"datatypes/fiber/fiberref",title:"FiberRef",description:"FiberRef[A] models a mutable reference to a value of type A. The two basic operations are set, which sets the reference to a new value, and get, which retrieves the current value of the reference.",source:"@site/docs/datatypes/fiber/fiberref.md",sourceDirName:"datatypes/fiber",slug:"/datatypes/fiber/fiberref",permalink:"/datatypes/fiber/fiberref",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/fiber/fiberref.md",tags:[],version:"current",frontMatter:{id:"fiberref",title:"FiberRef"},sidebar:"datatypes-sidebar",previous:{title:"Fiber",permalink:"/datatypes/fiber/fiber.md"},next:{title:"FiberId",permalink:"/datatypes/fiber/fiberid"}},p={},s=[{value:"Operations",id:"operations",level:2},{value:"Propagation",id:"propagation",level:2},{value:"Copy-on-Fork",id:"copy-on-fork",level:3},{value:"Merging Back",id:"merging-back",level:2},{value:"join",id:"join",level:3},{value:"join with Custom Merge",id:"join-with-custom-merge",level:3},{value:"await",id:"await",level:3},{value:"inheritAll",id:"inheritall",level:3},{value:"Memory Safety",id:"memory-safety",level:2}],f={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef[A]")," models a mutable reference to a value of type ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),". The two basic operations are ",(0,a.kt)("inlineCode",{parentName:"p"},"set"),", which sets the reference to a new value, and ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", which retrieves the current value of the reference."),(0,a.kt)("p",null,"We can think of ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef")," as Java's ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," on steroids. So, just like we have ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," in Java we have ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef")," in ZIO. So as different threads have different ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadLocal"),"s, we can say different fibers have different ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef"),"s. They don't intersect or overlap in any way. ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef")," is the fiber version of ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," with significant improvements in its semantics. A ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," only has a mutable state in which each thread accesses its own copy, but threads don't propagate their state to their children's."),(0,a.kt)("p",null,"As opposed to ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref[A]"),", the value of a ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef[A]")," is bound to an executing fiber. Different fibers who hold the same ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef[A]")," can independently set and retrieve values of the reference, without collisions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nfor {\n  fiberRef <- FiberRef.make[Int](0)\n  _        <- fiberRef.set(10)\n  v        <- fiberRef.get\n} yield v == 10\n")),(0,a.kt)("h2",{id:"operations"},"Operations"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef[A]")," has an API almost identical to ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref[A]"),". It includes well-known methods such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FiberRef#get"),". Returns the current value of the reference."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FiberRef#set"),". Sets the current value of the reference."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FiberRef#update")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"FiberRef#updateSome")," updates the value with the specified function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FiberRef#modify"),"/ ",(0,a.kt)("inlineCode",{parentName:"li"},"FiberRef#modifySome")," modifies the value with the specified function, computing a return value for the operation.")),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"locally")," to scope ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef")," value only for a given effect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'for {\n  correlationId <- FiberRef.make[String]("")\n  v1            <- correlationId.locally("my-correlation-id")(correlationId.get)\n  v2            <- correlationId.get\n} yield v1 == "my-correlation-id" && v2 == ""\n')),(0,a.kt)("h2",{id:"propagation"},"Propagation"),(0,a.kt)("p",null,"Let's go back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef"),"s analog called ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," and see how it works. If we have thread ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," with its ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," and thread ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," creates a new thread, let's call it thread ",(0,a.kt)("inlineCode",{parentName:"p"},"B"),". When thread ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," sends thread ",(0,a.kt)("inlineCode",{parentName:"p"},"B")," the same ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," then what value does thread ",(0,a.kt)("inlineCode",{parentName:"p"},"B")," see inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadLocal"),"? Well, it sees the default value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadLocal"),". It does not see ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"s value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadLocal"),". So in other words, ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadLocal"),"s do not propagate their values across the sort of graph of threads so when one thread creates another, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," value is not propagated from parent to child."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef"),"s improve on that model quite dramatically. Basically, whenever a child's fiber is created from its parent, the ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef")," value of parent fiber propagated to its child fiber."),(0,a.kt)("h3",{id:"copy-on-fork"},"Copy-on-Fork"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef[A]")," has ",(0,a.kt)("em",{parentName:"p"},"copy-on-fork")," semantics for ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#fork"),". This essentially means that a child ",(0,a.kt)("inlineCode",{parentName:"p"},"Fiber")," starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef")," values of its parent. When the child sets a new value of ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef"),", the change is visible only to the child itself. The parent fiber still has its own value."),(0,a.kt)("p",null,"So if we create a ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef")," and set its value to ",(0,a.kt)("inlineCode",{parentName:"p"},"5"),", and we pass this ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef")," to a child fiber, it sees the value ",(0,a.kt)("inlineCode",{parentName:"p"},"5"),". If the child fiber modifies the value from ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"6"),", the parent fiber can't see that change. So the child fiber gets its own copy of the ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef"),", and it can modify it locally. Those changes will not affect the parent fiber:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  fiberRef <- FiberRef.make(5)\n  promise <- Promise.make[Nothing, Int]\n  _ <- fiberRef\n    .updateAndGet(_ => 6)\n    .flatMap(promise.succeed).fork\n  childValue <- promise.await\n  parentValue <- fiberRef.get\n} yield assert(parentValue == 5 && childValue == 6)\n")),(0,a.kt)("h2",{id:"merging-back"},"Merging Back"),(0,a.kt)("p",null,"ZIO does not only support to propagate ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef")," values from parents to childs, but also to fetch back these values into the current fiber. This section describes multiple variants for doing so."),(0,a.kt)("h3",{id:"join"},"join"),(0,a.kt)("p",null,"If we ",(0,a.kt)("inlineCode",{parentName:"p"},"join")," a fiber then its ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef")," is merged back into the parent fiber:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  fiberRef <- FiberRef.make(5)\n  child <- fiberRef.set(6).fork\n  _ <- child.join\n  parentValue <- fiberRef.get\n} yield assert(parentValue == 6)\n")),(0,a.kt)("p",null,"So if we ",(0,a.kt)("inlineCode",{parentName:"p"},"fork")," a fiber and that child fiber modifies a bunch of ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef"),"s and then later we ",(0,a.kt)("inlineCode",{parentName:"p"},"join")," it, we get those modifications merged back into the parent fiber. So that's the semantic model of ZIO on ",(0,a.kt)("inlineCode",{parentName:"p"},"join"),". "),(0,a.kt)("p",null,"Each fiber has its own ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef")," and can modify it locally. So when multiple child fibers ",(0,a.kt)("inlineCode",{parentName:"p"},"join")," their parent, how do they get merged? By default, the last child fiber will win, the last fiber which is going to ",(0,a.kt)("inlineCode",{parentName:"p"},"join")," will override the parent's ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef")," value."),(0,a.kt)("p",null,"As we can see, ",(0,a.kt)("inlineCode",{parentName:"p"},"child1")," is the last fiber, so its value, which is ",(0,a.kt)("inlineCode",{parentName:"p"},"6"),", gets merged back into its parent:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  fiberRef <- FiberRef.make(5)\n  child1 <- fiberRef.set(6).fork\n  child2 <- fiberRef.set(7).fork\n  _ <- child2.join\n  _ <- child1.join\n  parentValue <- fiberRef.get\n} yield assert(parentValue == 6)\n")),(0,a.kt)("h3",{id:"join-with-custom-merge"},"join with Custom Merge"),(0,a.kt)("p",null,"Furthermore, we can customize how, if at all, the value will be initialized when a fiber is forked and how values will be combined when a fiber is merged. To do this you specify the desired behavior during ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef#make"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  fiberRef <- FiberRef.make(initial = 0, join = math.max)\n  child    <- fiberRef.update(_ + 1).fork\n  _        <- fiberRef.update(_ + 2)\n  _        <- child.join\n  value    <- fiberRef.get\n} yield assert(value == 2)\n")),(0,a.kt)("h3",{id:"await"},"await"),(0,a.kt)("p",null,"It is important to note that ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," has no such merge behavior. So ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," waits for the child fiber to finish and gives us its value as an ",(0,a.kt)("inlineCode",{parentName:"p"},"Exit"),", without ever merging any ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef")," values back into the parent:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  fiberRef <- FiberRef.make(5)\n  child <- fiberRef.set(6).fork\n  _ <- child.await\n  parentValue <- fiberRef.get\n} yield assert(parentValue == 5)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"join")," has higher-level semantics than ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," because it will fail if the child fiber failed, it will interrupt if the child is interrupted, and it will also merge back its value to its parent."),(0,a.kt)("h3",{id:"inheritall"},"inheritAll"),(0,a.kt)("p",null,"We can inherit the values from all ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef"),"s from an existing ",(0,a.kt)("inlineCode",{parentName:"p"},"Fiber")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Fiber#inheritAll")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  fiberRef <- FiberRef.make[Int](0)\n  latch    <- Promise.make[Nothing, Unit]\n  fiber    <- (fiberRef.set(10) *> latch.succeed(())).fork\n  _        <- latch.await\n  _        <- fiber.inheritAll\n  v        <- fiberRef.get\n} yield v == 10\n")),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"inheritAll")," is automatically called on ",(0,a.kt)("inlineCode",{parentName:"p"},"join"),". However, ",(0,a.kt)("inlineCode",{parentName:"p"},"join")," will wait for merging the ",(0,a.kt)("em",{parentName:"p"},"final")," values, while ",(0,a.kt)("inlineCode",{parentName:"p"},"inheritAll")," will merge the ",(0,a.kt)("em",{parentName:"p"},"current")," values and then continue:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val withJoin =\n    for {\n        fiberRef <- FiberRef.make[Int](0)\n        fiber    <- (fiberRef.set(10) *> fiberRef.set(20).delay(2.seconds)).fork\n        _        <- fiber.join  // wait for fiber's end and copy final result 20 into fiberRef\n        v        <- fiberRef.get\n    } yield assert(v == 20)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val withoutJoin =\n    for {\n        fiberRef <- FiberRef.make[Int](0)\n        fiber    <- (fiberRef.set(10) *> fiberRef.set(20).delay(2.seconds)).fork\n        _        <- fiber.inheritAll.delay(1.second) // copy intermediate result 10 into fiberRef and continue\n        v        <- fiberRef.get\n    } yield assert(v == 10)\n")),(0,a.kt)("h2",{id:"memory-safety"},"Memory Safety"),(0,a.kt)("p",null,"The value of a ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef")," is automatically garbage collected once the ",(0,a.kt)("inlineCode",{parentName:"p"},"Fiber")," owning it is finished. A ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef")," that is no longer reachable (has no reference to it in user-code) will cause all fiber-specific values of the reference to be garbage collected, even if they were once used in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Fiber")," that is currently executing."))}d.isMDXComponent=!0}}]);