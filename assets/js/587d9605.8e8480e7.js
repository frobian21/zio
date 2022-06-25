"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6538],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(a),g=n,d=m["".concat(s,".").concat(g)]||m[g]||p[g]||i;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const i={id:"gauge",title:"Gauge"},o=void 0,u={unversionedId:"datatypes/metrics/gauge",id:"datatypes/metrics/gauge",title:"Gauge",description:"A Gauge is a metric representing a single numerical value that may be set or adjusted. A typical use of this metric would be to track the current memory usage.",source:"@site/docs/datatypes/metrics/gauge.md",sourceDirName:"datatypes/metrics",slug:"/datatypes/metrics/gauge",permalink:"/datatypes/metrics/gauge",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/metrics/gauge.md",tags:[],version:"current",frontMatter:{id:"gauge",title:"Gauge"},sidebar:"datatypes-sidebar",previous:{title:"Counter",permalink:"/datatypes/metrics/counter"},next:{title:"Histogram",permalink:"/datatypes/metrics/histogram"}},s={},l=[{value:"API",id:"api",level:2},{value:"Use Case",id:"use-case",level:2},{value:"Examples",id:"examples",level:2}],c={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"Gauge")," is a metric representing a single numerical value that may be ",(0,n.kt)("em",{parentName:"p"},"set")," or ",(0,n.kt)("em",{parentName:"p"},"adjusted"),". A typical use of this metric would be to track the current memory usage."),(0,n.kt)("p",null,"With a gauge, the quantity of interest is the current value, as opposed to a counter where the quantity of interest is the cumulative values over time."),(0,n.kt)("p",null,"A gauge is a named variable of type ",(0,n.kt)("em",{parentName:"p"},"Double")," that can change over time. It can either be set to an absolute value or relative to the current value."),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("p",null,"TODO"),(0,n.kt)("h2",{id:"use-case"},"Use Case"),(0,n.kt)("p",null,"The gauge metric type is the best choice for things that their values can go down as well as up, such as queue size, and we don't want to query their rates. Thus, they are used to measuring things that have a particular value at a certain point in time:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Memory Usage"),(0,n.kt)("li",{parentName:"ul"},"Queue Size"),(0,n.kt)("li",{parentName:"ul"},"In-Progress Request Counts"),(0,n.kt)("li",{parentName:"ul"},"Temperature")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Create a gauge that can be set to absolute values, it can be applied to effects yielding a ",(0,n.kt)("inlineCode",{parentName:"p"},"Double"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.metrics._\nval absoluteGauge = Metric.gauge("setGauge")\n')),(0,n.kt)("p",null,"Now we can apply these gauges to effects having an output type ",(0,n.kt)("inlineCode",{parentName:"p"},"Double"),". Note that we can instrument an effect with any number of aspects if the type constraints are satisfied:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  _ <- Random.nextDoubleBetween(0.0d, 100.0d) @@ absoluteGauge @@ countAll\n} yield ()\n")))}p.isMDXComponent=!0}}]);