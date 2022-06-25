"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6035],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||r;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={id:"zio-config",title:"ZIO Config"},i=void 0,s={unversionedId:"resources/ecosystem/officials/zio-config",id:"resources/ecosystem/officials/zio-config",title:"ZIO Config",description:"ZIO Config is a ZIO-based library for loading and parsing configuration sources.",source:"@site/docs/resources/ecosystem/officials/zio-config.md",sourceDirName:"resources/ecosystem/officials",slug:"/resources/ecosystem/officials/zio-config",permalink:"/resources/ecosystem/officials/zio-config",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/officials/zio-config.md",tags:[],version:"current",frontMatter:{id:"zio-config",title:"ZIO Config"},sidebar:"resources-sidebar",previous:{title:"ZIO Cache",permalink:"/resources/ecosystem/officials/zio-cache"},next:{title:"ZIO FTP",permalink:"/resources/ecosystem/officials/zio-ftp"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Resources",id:"resources",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://zio.github.io/zio-config/"},"ZIO Config")," is a ZIO-based library for loading and parsing configuration sources."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In the real world, config retrieval is the first to develop applications. We mostly have some application config that should be loaded and parsed through our application. Doing such things manually is always boring and error-prone and also has lots of boilerplates."),(0,o.kt)("p",null,"The ZIO Config has a lot of features, and it is more than just a config parsing library. Let's enumerate some key features of this library:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Support for Various Sources")," \u2014 It can read/write flat or nested configurations from/to various formats and sources.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Composable sources")," \u2014 ZIO Config can compose sources of configuration, so we can have, e.g. environmental or command-line overrides.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Automatic Document Generation")," \u2014 It can auto-generate documentation of configurations. So developers or DevOps engineers know how to configure the application.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Report generation")," \u2014 It has a report generation that shows where each piece of configuration data came from.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Automatic Derivation")," \u2014 It has built-in support for automatic derivation of readers and writers for case classes and sealed traits.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type-level Constraints and Automatic Validation")," \u2014 because it supports ",(0,o.kt)("em",{parentName:"p"},"Refined")," types, we can write type-level predicates which constrain the set of values described for data types.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Descriptive Errors")," \u2014 It accumulates all errors and reports all of them to the user rather than failing fast."))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-config" % "3.0.0-RC9" \n')),(0,o.kt)("p",null,"There are also some optional dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"zio-config-mangolia")," \u2014 Auto Derivation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"zio-config-refined")," \u2014 Integration with Refined Library"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"zio-config-typesafe")," \u2014 HOCON/Json Support"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"zio-config-yaml")," \u2014 Yaml Support"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"zio-config-gen")," \u2014 Random Config Generation")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's add these four lines to our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file as we are using these modules in our example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-config"          % "3.0.0-RC9"\nlibraryDependencies += "dev.zio" %% "zio-config-magnolia" % "3.0.0-RC9"\nlibraryDependencies += "dev.zio" %% "zio-config-typesafe" % "3.0.0-RC9"\nlibraryDependencies += "dev.zio" %% "zio-config-refined"  % "3.0.0-RC9"\n')),(0,o.kt)("p",null,"In this example we are reading from HOCON config format using type derivation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import eu.timepit.refined.W\nimport eu.timepit.refined.api.Refined\nimport eu.timepit.refined.collection.NonEmpty\nimport eu.timepit.refined.numeric.GreaterEqual\nimport zio._\nimport zio.config.magnolia.{describe, descriptor}\nimport zio.config.typesafe.TypesafeConfigSource\n\nsealed trait DataSource\n\nfinal case class Database(\n    @describe("Database Host Name")\n    host: Refined[String, NonEmpty],\n    @describe("Database Port")\n    port: Refined[Int, GreaterEqual[W.`1024`.T]]\n) extends DataSource\n\nfinal case class Kafka(\n    @describe("Kafka Topics")\n    topicName: String,\n    @describe("Kafka Brokers")\n    brokers: List[String]\n) extends DataSource\n\nobject ZIOConfigExample extends ZIOAppDefault {\n  import zio.config._\n  import zio.config.refined._\n\n  val json =\n    s"""\n       |"Database" : {\n       |  "port" : "1024",\n       |  "host" : "localhost"\n       |}\n       |""".stripMargin\n\n  def run =\n    for {\n      _ <- ZIO.unit\n      source = TypesafeConfigSource.fromHoconString(json)\n      desc = descriptor[DataSource] from source\n      dataSource <- read(desc)\n      // Printing Auto Generated Documentation of Application Config\n      _ <- Console.printLine(\n        generateDocs(desc).toTable.toGithubFlavouredMarkdown\n      )\n      _ <- dataSource match {\n        case Database(host, port) =>\n          ZIO.debug(s"Start connecting to the database: $host:$port")\n        case Kafka(_, brokers) =>\n          ZIO.debug(s"Start connecting to the kafka brokers: $brokers")\n      }\n    } yield ()\n\n}\n')),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=4SrSKluyyKo"},"Easy Config For Your App")," by Afsal Thaj (December 2020) \u2014 Managing application configuration can be quite challenging: we often have to support multiple data sources with overrides, including HOCON, system properties, environment variables, and more. We have to document our configuration so it is clear to IT and DevOps how to configure our applications. We have to do strong validation with error accumulation to ensure bad data is rejected and good error messages are generated for end-users. In this presentation, Afsal Thaj, the author of ZIO Config, shows attendees how to solve all of these problems in a composable and testable way. By separating the description of configuration from what must be done with the configuration, ZIO Config provides all standard features\u2014including multiple data sources, data source overrides, documentation, and validation with error accumulation\u2014for free. Come learn how to make your applications configurable in an easy way that will delight IT and DevOps and make it easy to change your applications over time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Introduction to ZIO Config by Afsal Thaj"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Part 1: ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=l5CVQmSp7fY"},"Start writing better Scala with zio-config")),(0,o.kt)("li",{parentName:"ul"},"Part 2: ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=SusCbrSK5eA&t=0s"},"Maximise the use of Scala types (Option & Either in zio-config)")),(0,o.kt)("li",{parentName:"ul"},"Part 3: ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=LGo_g1GK6_k&t=0s"},"Intro to ADT, and scalable configuration management!")),(0,o.kt)("li",{parentName:"ul"},"Part 4: ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=--mcs4HztJY&t=0s"},"Auto generate sample configurations of your application in Scala"))))))}u.isMDXComponent=!0}}]);