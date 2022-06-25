"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"counter",title:"Counter"},i=void 0,l={unversionedId:"datatypes/metrics/counter",id:"datatypes/metrics/counter",title:"Counter",description:"A Counter is a metric representing a single numerical value that may be incremented over time. A typical use of this metric would be to track the number of a certain type of request received.",source:"@site/docs/datatypes/metrics/counter.md",sourceDirName:"datatypes/metrics",slug:"/datatypes/metrics/counter",permalink:"/datatypes/metrics/counter",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/metrics/counter.md",tags:[],version:"current",frontMatter:{id:"counter",title:"Counter"},sidebar:"datatypes-sidebar",previous:{title:"Introduction",permalink:"/datatypes/metrics/"},next:{title:"Gauge",permalink:"/datatypes/metrics/gauge"}},u={},c=[{value:"API",id:"api",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter")," is a metric representing a single numerical value that may be incremented over time. A typical use of this metric would be to track the number of a certain type of request received."),(0,a.kt)("p",null,"With a counter, the quantity of interest is the cumulative value over time, as opposed to a ",(0,a.kt)("a",{parentName:"p",href:"/datatypes/metrics/gauge"},"gauge")," where the quantity of interest is the value as of a specific point in time."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"We use the counter metric type for any value that increases, such as request counts. Note that we should never use the counter for a value that can decrease."),(0,a.kt)("p",null,"So when we should use counters?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When we want to track a value over time, that only goes up"),(0,a.kt)("li",{parentName:"ul"},"When we want to measure the increasing rate of something, how fast something is growing, such as request rates.")),(0,a.kt)("p",null,"Here are some of the use cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Request Counts"),(0,a.kt)("li",{parentName:"ul"},"Completed Tasks"),(0,a.kt)("li",{parentName:"ul"},"Error Counts")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Create a counter named ",(0,a.kt)("inlineCode",{parentName:"p"},"countAll")," which is incremented by ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," every time it is invoked:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.metrics._\nval countAll = Metric.counter("countAll").fromConst(1)\n')),(0,a.kt)("p",null,"Now the counter can be applied to any effect. Note, that the same aspect can be applied to more than one effect. In the example we would count the sum of executions of both effects in the for comprehension:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"val myApp = for {\n  _ <- ZIO.unit @@ countAll\n  _ <- ZIO.unit @@ countAll\n} yield ()\n")),(0,a.kt)("p",null,"Or we can apply them in recurrence situations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'(zio.Random.nextLongBounded(10) @@ Metric.counter("request_counts")).repeatUntil(_ == 7)\n')),(0,a.kt)("p",null,"Create a counter named ",(0,a.kt)("inlineCode",{parentName:"p"},"countBytes")," that can be applied to effects having the output type ",(0,a.kt)("inlineCode",{parentName:"p"},"Double"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val countBytes = Metric.counter("countBytes")\n')),(0,a.kt)("p",null,"Now we can apply it to effects producing ",(0,a.kt)("inlineCode",{parentName:"p"},"Double")," (in a real application the value might be the number of bytes read from a stream or something similar):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val myApp = Random.nextLongBetween(0, 100) @@ countBytes\n")))}p.isMDXComponent=!0}}]);