"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7876],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const s={id:"zio-rocksdb",title:"ZIO RocksDB"},a=void 0,i={unversionedId:"resources/ecosystem/officials/zio-rocksdb",id:"resources/ecosystem/officials/zio-rocksdb",title:"ZIO RocksDB",description:"ZIO RocksDB is a ZIO-based interface to RocksDB.",source:"@site/docs/resources/ecosystem/officials/zio-rocksdb.md",sourceDirName:"resources/ecosystem/officials",slug:"/resources/ecosystem/officials/zio-rocksdb",permalink:"/resources/ecosystem/officials/zio-rocksdb",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/officials/zio-rocksdb.md",tags:[],version:"current",frontMatter:{id:"zio-rocksdb",title:"ZIO RocksDB"},sidebar:"resources-sidebar",previous:{title:"ZIO Redis",permalink:"/resources/ecosystem/officials/zio-redis"},next:{title:"ZIO S3",permalink:"/resources/ecosystem/officials/zio-s3"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-rocksdb"},"ZIO RocksDB")," is a ZIO-based interface to RocksDB."),(0,o.kt)("p",null,"Rocksdb is an embeddable persistent key-value store that is optimized for fast storage. ZIO RocksDB provides us a functional ZIO wrapper around its Java API."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-rocksdb" % "0.3.0" \n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"An example of writing and reading key/value pairs and also using transactional operations when using RocksDB:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.console._\nimport zio.rocksdb.{RocksDB, Transaction, TransactionDB}\nimport zio.{URIO, ZIO}\n\nimport java.nio.charset.StandardCharsets._\n\nobject ZIORocksDBExample extends zio.App {\n\n  private def bytesToString(bytes: Array[Byte]): String = new String(bytes, UTF_8)\n  private def bytesToInt(bytes: Array[Byte]): Int = bytesToString(bytes).toInt\n\n  val job1: ZIO[Console with RocksDB, Throwable, Unit] =\n    for {\n      _ <- RocksDB.put(\n        "Key".getBytes(UTF_8),\n        "Value".getBytes(UTF_8)\n      )\n      result <- RocksDB.get("Key".getBytes(UTF_8))\n      stringResult = result.map(bytesToString)\n      _ <- putStrLn(s"value: $stringResult")\n    } yield ()\n\n\n  val job2: ZIO[Console with TransactionDB, Throwable, Unit] =\n    for {\n      key <- ZIO.succeed("COUNT".getBytes(UTF_8))\n      _ <- TransactionDB.put(key, 0.toString.getBytes(UTF_8))\n      _ <- ZIO.foreachPar(0 until 10) { _ =>\n        TransactionDB.atomically {\n          Transaction.getForUpdate(key, exclusive = true) >>= { iCount =>\n            Transaction.put(key, iCount.map(bytesToInt).map(_ + 1).getOrElse(-1).toString.getBytes(UTF_8))\n          }\n        }\n      }\n      value <- TransactionDB.get(key)\n      counterValue = value.map(bytesToInt)\n      _ <- putStrLn(s"The value of counter: $counterValue") // Must be 10\n    } yield ()\n\n  private val transactional_db =\n    TransactionDB.live(new org.rocksdb.Options().setCreateIfMissing(true), "tr_db")\n\n  private val rocks_db =\n    RocksDB.live(new org.rocksdb.Options().setCreateIfMissing(true), "rocks_db")\n\n  override def run(args: List[String]): URIO[zio.ZEnv, Int] =\n    (job1 <*> job2)\n      .provideCustom(transactional_db ++ rocks_db)\n      .foldCauseZIO(cause => putStrLn(cause.prettyPrint) *> ZIO.succeed(1), _ => ZIO.succeed(0))\n}\n')))}p.isMDXComponent=!0}}]);