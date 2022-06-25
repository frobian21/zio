"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"semaphore",title:"Semaphore"},i=void 0,s={unversionedId:"datatypes/concurrency/semaphore",id:"datatypes/concurrency/semaphore",title:"Semaphore",description:"A Semaphore datatype which allows synchronization between fibers with the withPermit operation, which safely acquires and releases a permit.",source:"@site/docs/datatypes/concurrency/semaphore.md",sourceDirName:"datatypes/concurrency",slug:"/datatypes/concurrency/semaphore",permalink:"/datatypes/concurrency/semaphore",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/concurrency/semaphore.md",tags:[],version:"current",frontMatter:{id:"semaphore",title:"Semaphore"},sidebar:"datatypes-sidebar",previous:{title:"Hub",permalink:"/datatypes/concurrency/hub"},next:{title:"Introduction",permalink:"/datatypes/stm/"}},p={},c=[{value:"Operations",id:"operations",level:2}],l={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Semaphore")," datatype which allows synchronization between fibers with the ",(0,a.kt)("inlineCode",{parentName:"p"},"withPermit")," operation, which safely acquires and releases a permit.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Semaphore")," is based on ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref[A]")," datatype."),(0,a.kt)("h2",{id:"operations"},"Operations"),(0,a.kt)("p",null,"For example, a synchronization of asynchronous tasks can\nbe done via acquiring and releasing a semaphore with a given number of permits it can spend.\nWhen the acquire operation cannot be performed due to no more available ",(0,a.kt)("inlineCode",{parentName:"p"},"permits")," in the semaphore, such task\nis semantically blocked, until the ",(0,a.kt)("inlineCode",{parentName:"p"},"permits")," value is large enough again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import java.util.concurrent.TimeUnit\nimport zio._\nimport zio.Console._\n\nval task = for {\n  _ <- printLine("start")\n  _ <- ZIO.sleep(Duration(2, TimeUnit.SECONDS))\n  _ <- printLine("end")\n} yield ()\n\nval semTask = (sem: Semaphore) => for {\n  _ <- sem.withPermit(task)\n} yield ()\n\nval semTaskSeq = (sem: Semaphore) => (1 to 3).map(_ => semTask(sem))\n\nval program = for {\n\n  sem <- Semaphore.make(permits = 1)\n\n  seq <- ZIO.succeed(semTaskSeq(sem))\n\n  _ <- ZIO.collectAllPar(seq)\n\n} yield ()\n')),(0,a.kt)("p",null,"As the binary semaphore is a special case of a counting semaphore,\nwe can acquire and release any number of ",(0,a.kt)("inlineCode",{parentName:"p"},"permits"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val semTaskN = (sem: Semaphore) => for {\n  _ <- sem.withPermits(5)(task)\n} yield ()\n")),(0,a.kt)("p",null,"The guarantee of ",(0,a.kt)("inlineCode",{parentName:"p"},"withPermit")," (and its corresponding counting version ",(0,a.kt)("inlineCode",{parentName:"p"},"withPermits"),") is that each acquisition will be followed by the equivalent number of releases, regardless of whether the task succeeds, fails, or is interrupted."))}m.isMDXComponent=!0}}]);