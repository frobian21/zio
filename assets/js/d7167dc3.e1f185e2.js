"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9530],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),d=i,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const o={id:"zio-kinesis",title:"ZIO Kinesis"},s=void 0,a={unversionedId:"resources/ecosystem/community/zio-kinesis",id:"resources/ecosystem/community/zio-kinesis",title:"ZIO Kinesis",description:"ZIO Kinesis is a ZIO-based AWS Kinesis client for Scala.",source:"@site/docs/resources/ecosystem/community/zio-kinesis.md",sourceDirName:"resources/ecosystem/community",slug:"/resources/ecosystem/community/zio-kinesis",permalink:"/resources/ecosystem/community/zio-kinesis",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/community/zio-kinesis.md",tags:[],version:"current",frontMatter:{id:"zio-kinesis",title:"ZIO Kinesis"},sidebar:"resources-sidebar",previous:{title:"ZIO K8s",permalink:"/resources/ecosystem/community/zio-k8s"},next:{title:"ZIO Pulsar",permalink:"/resources/ecosystem/community/zio-pulsar"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],u={toc:l};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/svroonland/zio-kinesis"},"ZIO Kinesis")," is a ZIO-based AWS Kinesis client for Scala."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"ZIO Kinesis is an interface to Amazon Kinesis Data Streams for consuming and producing data. This library is built on top of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-aws"},"ZIO AWS"),", a library of automatically generated ZIO wrappers around AWS SDK methods."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "nl.vroste" %% "zio-kinesis" % "0.20.0"\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"This is an example of consuming a stream from Amazon Kinesis:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import nl.vroste.zio.kinesis.client.serde.Serde\nimport nl.vroste.zio.kinesis.client.zionative.Consumer\nimport zio.clock.Clock\nimport zio.console.{Console, putStrLn}\nimport zio.duration._\nimport zio.logging.Logging\nimport zio.{ExitCode, URIO, _}\n\nobject ZIOKinesisConsumerExample extends zio.App {\n  val loggingLayer: ZLayer[Any, Nothing, Logging] =\n    (Console.live ++ Clock.live) >>>\n      Logging.console() >>>\n      Logging.withRootLoggerName(getClass.getName)\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    Consumer\n      .consumeWith(\n        streamName = "my-stream",\n        applicationName = "my-application",\n        deserializer = Serde.asciiString,\n        workerIdentifier = "worker1",\n        checkpointBatchSize = 1000L,\n        checkpointDuration = 5.minutes\n      )(record => putStrLn(s"Processing record $record"))\n      .provideCustom(Consumer.defaultEnvironment ++ loggingLayer)\n      .exitCode\n}\n')))}m.isMDXComponent=!0}}]);