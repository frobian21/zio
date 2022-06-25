"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7504],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(f,s(s({ref:t},m),{},{components:a})):n.createElement(f,s({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7120:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={id:"summary",title:"Summary"},s=void 0,o={unversionedId:"datatypes/metrics/summary",id:"datatypes/metrics/summary",title:"Summary",description:"A Summary represents a sliding window of a time series along with metrics for certain percentiles of the time series, referred to as quantiles.",source:"@site/docs/datatypes/metrics/summary.md",sourceDirName:"datatypes/metrics",slug:"/datatypes/metrics/summary",permalink:"/datatypes/metrics/summary",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/metrics/summary.md",tags:[],version:"current",frontMatter:{id:"summary",title:"Summary"},sidebar:"datatypes-sidebar",previous:{title:"Histogram",permalink:"/datatypes/metrics/histogram"},next:{title:"Frequency",permalink:"/datatypes/metrics/setcount"}},l={},p=[{value:"Internals",id:"internals",level:2},{value:"API",id:"api",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Summary")," represents a sliding window of a time series along with metrics for certain percentiles of the time series, referred to as quantiles."),(0,r.kt)("p",null,"Quantiles describe specified percentiles of the sliding window that are of interest. For example, if we were using a summary to track the response time for requests over the last hour then we might be interested in the 50th percentile, 90th percentile, 95th percentile, and 99th percentile for response times."),(0,r.kt)("h2",{id:"internals"},"Internals"),(0,r.kt)("p",null,"Similar to a ",(0,r.kt)("a",{parentName:"p",href:"/datatypes/metrics/histogram"},"histogram")," a summary also observes ",(0,r.kt)("em",{parentName:"p"},"Double")," values. While a histogram directly modifies the bucket counters and does not keep the individual samples, the summary keeps the observed samples in its internal state. To avoid the set of samples grow uncontrolled, the summary needs to be configured with a maximum age ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," and a maximum size ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),". To calculate the statistics, maximal ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," samples will be used, all of which are not older than ",(0,r.kt)("inlineCode",{parentName:"p"},"t"),"."),(0,r.kt)("p",null,"Essentially, the set of samples is a ",(0,r.kt)("em",{parentName:"p"},"sliding window")," over the last observed samples matching the conditions above."),(0,r.kt)("p",null,"A summary is used to calculate a set of quantiles over the current set of samples. A quantile is defined by a ",(0,r.kt)("em",{parentName:"p"},"Double")," value ",(0,r.kt)("inlineCode",{parentName:"p"},"q")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"0 <= q <= 1")," and resolves to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Double")," as well."),(0,r.kt)("p",null,"The value of a given quantile ",(0,r.kt)("inlineCode",{parentName:"p"},"q")," is the maximum value ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," out of the current sample buffer with size ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," where at most ",(0,r.kt)("inlineCode",{parentName:"p"},"q * n")," values out of the sample buffer are less or equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"v"),"."),(0,r.kt)("p",null,"Typical quantiles for observation are ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5")," (the median) and the ",(0,r.kt)("inlineCode",{parentName:"p"},"0.95"),". Quantiles are very good for monitoring ",(0,r.kt)("em",{parentName:"p"},"Service Level Agreements"),"."),(0,r.kt)("p",null,"The ZIO Metrics API also allows summaries to be configured with an error margin ",(0,r.kt)("inlineCode",{parentName:"p"},"e"),". The error margin is applied to the count of values, so that a quantile ",(0,r.kt)("inlineCode",{parentName:"p"},"q")," for a set of size ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," resolves to value ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," if the number ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," of values less or equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"(1 -e)q * s <= n <= (1+e)q"),"."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"Like ",(0,r.kt)("a",{parentName:"p",href:"/datatypes/metrics/histogram"},"histograms"),", summaries are used for ",(0,r.kt)("em",{parentName:"p"},"monitoring latencies"),", but they don't require us to define buckets. So, summaries are the best choice in these situations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When histograms are not proper for us, in terms of accuracy"),(0,r.kt)("li",{parentName:"ul"},"When we can't use histograms, as we don't have a good estimation of the range of values"),(0,r.kt)("li",{parentName:"ul"},"When we don't need to perform aggregation or averages across multiple instances, as the calculations are done on the application side")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Create a summary that can hold ",(0,r.kt)("inlineCode",{parentName:"p"},"100")," samples, the max age of the samples is ",(0,r.kt)("inlineCode",{parentName:"p"},"1 day")," and the error margin is ",(0,r.kt)("inlineCode",{parentName:"p"},"3%"),". The summary should report the ",(0,r.kt)("inlineCode",{parentName:"p"},"10%"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"50%")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"90%")," Quantile. It can be applied to effects yielding an ",(0,r.kt)("inlineCode",{parentName:"p"},"Int"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")),(0,r.kt)("p",null,"Now we can apply this aspect to an effect producing an ",(0,r.kt)("inlineCode",{parentName:"p"},"Int"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")))}u.isMDXComponent=!0}}]);