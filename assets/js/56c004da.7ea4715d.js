"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,d=m["".concat(l,".").concat(u)]||m[u]||f[u]||o;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={id:"with-cats-effect",title:"How to Interop with Cats Effect?",sidebar_label:"Cats Effect"},r=void 0,s={unversionedId:"guides/interop/with-cats-effect",id:"guides/interop/with-cats-effect",title:"How to Interop with Cats Effect?",description:"Introduction",source:"@site/docs/guides/interop/with-cats-effect.md",sourceDirName:"guides/interop",slug:"/guides/interop/with-cats-effect",permalink:"/guides/interop/with-cats-effect",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/interop/with-cats-effect.md",tags:[],version:"current",frontMatter:{id:"with-cats-effect",title:"How to Interop with Cats Effect?",sidebar_label:"Cats Effect"},sidebar:"guides-sidebar",previous:{title:"Monitoring a ZIO Application Using ZIO's Built-in Metric System",permalink:"/guides/tutorials/monitor-a-zio-application-using-zio-built-in-metric-system"},next:{title:"Scala's Future",permalink:"/guides/interop/with-future"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Cats Effect Instances",id:"cats-effect-instances",level:2},{value:"Providing Runtime Manually",id:"providing-runtime-manually",level:3},{value:"Using <code>CatsApp</code> Runtime",id:"using-catsapp-runtime",level:3},{value:"Cats Effect 2.x",id:"cats-effect-2x",level:2},{value:"Timer Instance",id:"timer-instance",level:3},{value:"Converting Resource to ZManaged",id:"converting-resource-to-zmanaged",level:3},{value:"Converting ZManaged to Resource",id:"converting-zmanaged-to-resource",level:3},{value:"Cats Effect 3.x",id:"cats-effect-3x",level:2},{value:"Type class Instances for ZIO&#39;s Task",id:"type-class-instances-for-zios-task",level:3},{value:"Converting Resource to ZManaged",id:"converting-resource-to-zmanaged-1",level:3},{value:"Cats Core",id:"cats-core",level:2},{value:"FS2 Streams",id:"fs2-streams",level:2},{value:"From FS2 Stream to ZStream",id:"from-fs2-stream-to-zstream",level:3},{value:"From ZStream to FS2 Stream",id:"from-zstream-to-fs2-stream",level:3},{value:"Using Queue with Cats Effect",id:"using-queue-with-cats-effect",level:2},{value:"Cats Effect 2.x",id:"cats-effect-2x-1",level:3},{value:"Cats Effect 3.x",id:"cats-effect-3x-1",level:3},{value:"Using STM with Cats Effect",id:"using-stm-with-cats-effect",level:2},{value:"Examples",id:"examples",level:2},{value:"Using ZIO with Doobie",id:"using-zio-with-doobie",level:3},{value:"Customized Transactor (CE2)",id:"customized-transactor-ce2",level:4},{value:"Customized Transactor (CE3)",id:"customized-transactor-ce3",level:4},{value:"Http4s",id:"http4s",level:3},{value:"Cats Effect 2.x",id:"cats-effect-2x-2",level:4},{value:"Cats Effect 3.x",id:"cats-effect-3x-2",level:4}],p={toc:c};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/interop-cats"},(0,i.kt)("inlineCode",{parentName:"a"},"interop-cats"))," has instances for the ",(0,i.kt)("a",{parentName:"p",href:"https://typelevel.org/cats/"},"Cats"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/typelevel/cats-mtl"},"Cats MTL")," and ",(0,i.kt)("a",{parentName:"p",href:"https://typelevel.org/cats-effect/"},"Cats Effect")," libraries, which allow you to use ZIO with any libraries that rely on these, like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tpolecat/doobie"},"Doobie"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/http4s/http4s"},"Http4s"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/functional-streams-for-scala/fs2"},"FS2")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/circe/circe"},"Circe")),(0,i.kt)("p",null,"Depends on which version of Cats Effect we are using, we should pick the right version of ",(0,i.kt)("inlineCode",{parentName:"p"},"zio-interop-cats"),". In this tutorial, whenever we're working with Cats Effect 2.x, we are using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-interop-cats" % "2.5.1.0"\n')),(0,i.kt)("p",null,"And whenever we are using Cats Effect 3.x instances, we are using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-interop-cats" % "3.1.1.0"\n')),(0,i.kt)("p",null,"Most of the interop functionality resides in the following package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.interop.catz._\n")),(0,i.kt)("h2",{id:"cats-effect-instances"},"Cats Effect Instances"),(0,i.kt)("p",null,"ZIO integrates with Typelevel libraries by providing instances of Cats Effect type classes. These type classes are used by ",(0,i.kt)("inlineCode",{parentName:"p"},"fs2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"doobie"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"http4s"),", and a variety of other libraries in the functional Scala ecosystem."),(0,i.kt)("p",null,"Due to the limitations of the Cats Effect, ZIO cannot provide instances for arbitrary error types. Instead, we can obtain instances only for effects whose error type extends ",(0,i.kt)("inlineCode",{parentName:"p"},"Throwable"),"."),(0,i.kt)("p",null,"For convenience, ZIO includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RIO")," type aliases, which fix the error type to ",(0,i.kt)("inlineCode",{parentName:"p"},"Throwable"),", and may be useful for interop with Cats Effect:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.{ZIO, Task, RIO}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"type Task[+A]    = ZIO[Any, Throwable, A]\ntype RIO[-R, +A] = ZIO[  R, Throwable, A]\n")),(0,i.kt)("h3",{id:"providing-runtime-manually"},"Providing Runtime Manually"),(0,i.kt)("p",null,"To use Cats Effect instances for these types, we should have an implicit ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime[R]")," in scope for the environment type of our effects. The following code snippet creates an implicit ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime")," for all the modules built into ZIO:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import cats.implicits._\nimport zio.interop.catz._\n\nobject ZioCatsEffectInterop extends scala.App {\n  def catsEffectApp[F[_]: cats.effect.Sync]: F[Unit] =\n    cats.effect.Sync[F].delay(\n        println("Hello from Cats Effect World!")\n      )\n      \n  implicit val runtime: zio.Runtime[zio.ZEnv] = zio.Runtime.default\n\n  val zioApp: zio.Task[Unit] = catsEffectApp[zio.Task]\n  runtime.unsafeRun(zioApp.exitCode)\n}\n')),(0,i.kt)("p",null,"If we are working with Cats Effect 3.x, the ",(0,i.kt)("inlineCode",{parentName:"p"},"catsEffectApp[Task]")," will be expanded as if we called the following code explicitly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import ZioCatsEffectInterop.catsEffectApp\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object ZioCatsEffectInterop extends scala.App {\n  val runtime: zio.Runtime[zio.ZEnv] = zio.Runtime.default\n  \n  val zioApp: zio.Task[Unit] = catsEffectApp[zio.Task](\n    zio.interop.catz.asyncRuntimeInstance(runtime) \n  )\n  \n  runtime.unsafeRun(zioApp.exitCode) \n}\n")),(0,i.kt)("p",null,"And if we are working with Cats Effect 2.x, it will be expanded as if we called following code explicitly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object ZioCatsEffectInterop extends scala.App {\n  val runtime: zio.Runtime[zio.ZEnv] = zio.Runtime.default\n\n  val zioApp = catsEffectApp[zio.Task](zio.interop.catz.taskConcurrentInstance)\n  runtime.unsafeRun(zioApp.exitCode)\n}\n")),(0,i.kt)("p",null,"If we are using ",(0,i.kt)("inlineCode",{parentName:"p"},"RIO")," for a custom environment ",(0,i.kt)("inlineCode",{parentName:"p"},"R"),", then we will have to create our own ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime[R]"),", and ensure that implicit wherever we need Cats Effect instances."),(0,i.kt)("h3",{id:"using-catsapp-runtime"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"CatsApp")," Runtime"),(0,i.kt)("p",null,"As a convenience, our application can extend ",(0,i.kt)("inlineCode",{parentName:"p"},"CatsApp"),", which automatically brings an implicit ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime[ZEnv]")," into our scope:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.interop.catz._\nimport cats.implicits._\n\nobject ZioCatsEffectInteropWithCatsApp extends CatsApp {\n  def catsEffectApp[F[_]: cats.effect.Sync]: F[Unit] =\n    cats.effect.Sync[F].delay(println("Hello from Cats Effect World!"))\n\n  override def run(args: List[String]): zio.URIO[zio.ZEnv, zio.ExitCode] = \n    catsEffectApp[zio.Task].exitCode\n}\n')),(0,i.kt)("p",null,"This example works properly in both Cats Effect 2.x and 3.x versions."),(0,i.kt)("h2",{id:"cats-effect-2x"},"Cats Effect 2.x"),(0,i.kt)("h3",{id:"timer-instance"},"Timer Instance"),(0,i.kt)("p",null,"In order to get a ",(0,i.kt)("inlineCode",{parentName:"p"},"cats.effect.Timer[zio.Task]")," instance, we need an extra import (",(0,i.kt)("inlineCode",{parentName:"p"},"zio.interop.catz.implicits._"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import java.util.concurrent.TimeUnit\n\nimport cats.implicits._\nimport zio.interop.catz._\nimport zio.interop.catz.implicits._ // Provides `zio.Task instance` for `cats.effect.Time` type class\nimport zio.{ ExitCode, Task, URIO }\n\nimport scala.concurrent.duration.DurationInt\n\nobject ZioCatsEffectTimerInterop extends zio.interop.catz.CatsApp {\n  override def run(args: List[String]): zio.URIO[zio.ZEnv, zio.ExitCode] =\n    catsEffectTimerApp[zio.Task].exitCode\n\n  def catsEffectTimerApp[F[_]: cats.effect.Clock: cats.effect.Timer: cats.effect.Sync]: F[Unit] = for {\n    t2 <- cats.effect.Clock[F].monotonic(TimeUnit.SECONDS)\n    _  <- cats.effect.Timer[F].sleep(2.seconds)\n    t1 <- cats.effect.Clock[F].monotonic(TimeUnit.SECONDS)\n    _  <- cats.effect.Sync[F].delay(println(t1 - t2))\n  } yield ()\n}\n")),(0,i.kt)("p",null,"The reason a ",(0,i.kt)("inlineCode",{parentName:"p"},"cats.effect.Timer[zio.Task]")," instance is not provided by the default ",(0,i.kt)("em",{parentName:"p"},"interop")," import is that it makes testing programs that require timing capabilities very difficult. The extra import (wherever needed) makes reasoning about timing-related effects much easier."),(0,i.kt)("p",null,"If we're using ",(0,i.kt)("inlineCode",{parentName:"p"},"RIO")," for a custom environment then our environment must use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Clock")," service, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"R <: Clock")," to get a timer."),(0,i.kt)("h3",{id:"converting-resource-to-zmanaged"},"Converting Resource to ZManaged"),(0,i.kt)("p",null,"To convert Cats Effect ",(0,i.kt)("inlineCode",{parentName:"p"},"Resource")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"ZManaged"),", we can call ",(0,i.kt)("inlineCode",{parentName:"p"},"toManaged")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"Resource"),"."),(0,i.kt)("p",null,"For example, assume we have the following ",(0,i.kt)("inlineCode",{parentName:"p"},"File")," API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'case class File[F[_]: cats.effect.Sync]() {\n  import cats.syntax.apply._\n  def read: F[String] =\n    cats.effect.Sync[F].delay(println("Reading file.")) *>\n      cats.effect.Sync[F].pure("Hello, World!")\n  def close: F[Unit]  =\n    cats.effect.Sync[F].delay(println("Closing file."))\n}\n\nobject File {\n  import cats.syntax.apply._\n  def open[F[_]: cats.effect.Sync](name: String): F[File[F]] =\n    cats.effect.Sync[F].delay(println(s"opening $name file")) *>\n      cats.effect.Sync[F].delay(File())\n}\n')),(0,i.kt)("p",null,"And, also assume we have ",(0,i.kt)("inlineCode",{parentName:"p"},"fileResource")," defined as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def fileResource[F[_]: cats.effect.Sync](name: String): cats.effect.Resource[F, File[F]] =\n  cats.effect.Resource.make(File.open[F](name))(_.close)\n")),(0,i.kt)("p",null,"Let's convert that to ",(0,i.kt)("inlineCode",{parentName:"p"},"ZManaged"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val resource: zio.ZManaged[zio.ZEnv, Throwable, File[zio.Task]] =\n  fileResource[zio.Task]("log.txt").toManaged[zio.ZEnv]\n')),(0,i.kt)("p",null,"Here is a complete working example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.interop.catz._\n\nobject CatsEffectResourceInterop extends CatsApp {\n  def fileResource[F[_]: cats.effect.Sync](name: String): cats.effect.Resource[F, File[F]] =\n    cats.effect.Resource.make(File.open[F](name))(_.close)\n\n  def myApp: zio.ZIO[zio.ZEnv, Throwable, Unit] = for {\n    c <- fileResource[zio.Task]("log.txt").toManaged[zio.ZEnv].use(_.read)\n    _ <- zio.console.putStr(s"file content: $c")\n  } yield ()\n\n  override def run(args: List[String]): zio.URIO[zio.ZEnv, zio.ExitCode] =\n    myApp.exitCode\n}\n')),(0,i.kt)("h3",{id:"converting-zmanaged-to-resource"},"Converting ZManaged to Resource"),(0,i.kt)("p",null,"We have an extension method on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZManaged")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"ZManaged#toResource")," which converts a ZIO managed resource to Cats Effect resource:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"final class ZManagedSyntax[R, E, A](private val managed: ZManaged[R, E, A]) {\n  def toResource[F[_]](implicit\n      F: Async[F],\n      ev: Effect[ZIO[R, E, *]]\n  ): Resource[F, A] = ???\n}\n")),(0,i.kt)("p",null,"Let's try an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.interop.catz._\n\nobject ZManagedToResource extends cats.effect.IOApp {\n  implicit val zioRuntime: zio.Runtime[zio.ZEnv] = zio.Runtime.default\n\n  val resource: cats.effect.Resource[cats.effect.IO, java.io.InputStream] =\n    zio.ZManaged\n      .fromAutoCloseable(\n        zio.ZIO.effect(\n          java.nio.file.Files.newInputStream(\n            java.nio.file.Paths.get("file.txt")\n          )\n        )\n      )\n      .toResource[cats.effect.IO]\n\n  val effect: cats.effect.IO[Unit] =\n    resource\n      .use { is =>\n        cats.effect.IO.delay(is.readAllBytes())\n      }\n      .flatMap(bytes =>\n        cats.effect.IO.delay(\n          println(s"file length: ${bytes.length}")\n        )\n      )\n\n  override def run(args: List[String]): cats.effect.IO[cats.effect.ExitCode] =\n    effect.as(cats.effect.ExitCode.Success)\n}\n')),(0,i.kt)("h2",{id:"cats-effect-3x"},"Cats Effect 3.x"),(0,i.kt)("h3",{id:"type-class-instances-for-zios-task"},"Type class Instances for ZIO's Task"),(0,i.kt)("p",null,"ZIO integrates with Cats Effect 3.x as well as 2.x. The ",(0,i.kt)("inlineCode",{parentName:"p"},"interop-cats")," module provides ",(0,i.kt)("inlineCode",{parentName:"p"},"Concurrent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Temporal")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Async")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.Task"),"."),(0,i.kt)("p",null,"An example of ZIO interoperability with CE3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import cats.implicits._\nimport zio.interop.catz._\nimport scala.concurrent.duration.DurationInt\n\nobject ZioCatsEffectInterop extends zio.interop.catz.CatsApp {\n\n  def catsEffectTimerApp[F[_]: cats.effect.Async]: F[Unit] = for {\n    t2 <- cats.effect.Clock[F].monotonic\n    _  <- cats.effect.Temporal[F].sleep(2.seconds)\n    t1 <- cats.effect.Clock[F].monotonic\n    _  <- cats.effect.Sync[F].delay(println(t1 - t2))\n  } yield ()\n  \n  override def run(args: List[String]): zio.URIO[zio.ZEnv, zio.ExitCode] = {\n    catsEffectTimerApp[zio.Task].exitCode\n  }\n}\n")),(0,i.kt)("h3",{id:"converting-resource-to-zmanaged-1"},"Converting Resource to ZManaged"),(0,i.kt)("p",null,"To convert a Cats Effect's ",(0,i.kt)("inlineCode",{parentName:"p"},"Resource")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ZManaged")," we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"cats.effect.Resource#toZManaged")," extension method by importing ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.interop.catz._")," package and also we should provide an implicit instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Dispatcher"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.interop.catz._\nimport scala.concurrent.ExecutionContextExecutor\n\nobject ResourceToZManagedExample extends zio.App {\n  implicit val ceRuntime: cats.effect.unsafe.IORuntime =\n    cats.effect.unsafe.IORuntime.global\n  implicit val ec: ExecutionContextExecutor =\n    scala.concurrent.ExecutionContext.global\n\n  implicit val dispatcher: cats.effect.std.Dispatcher[cats.effect.IO] =\n    cats.effect.std\n      .Dispatcher[cats.effect.IO]\n      .allocated\n      .unsafeRunSync()\n      ._1\n\n  def catsResource[F[_]: cats.effect.Sync]\n      : cats.effect.Resource[F, java.io.InputStream] =\n    cats.effect.Resource\n      .fromAutoCloseable(\n        cats.effect\n          .Sync[F]\n          .delay(\n            java.nio.file.Files.newInputStream(\n              java.nio.file.Paths.get("file.txt")\n            )\n          )\n      )\n\n  val myApp: zio.ZIO[zio.console.Console, Throwable, Unit] =\n    catsResource[cats.effect.IO].toManaged\n      .use { is =>\n        zio.console.putStrLn(is.readAllBytes().length.toString)\n      }\n      \n  override def run(args: List[String]): zio.URIO[zio.ZEnv, zio.ExitCode] =\n    myApp.exitCode\n}\n')),(0,i.kt)("h2",{id:"cats-core"},"Cats Core"),(0,i.kt)("p",null,"There is another package in ",(0,i.kt)("inlineCode",{parentName:"p"},"interop-cats")," module called ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.interop.catz.core._")," which helps us to interop with core data types. This package contains instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.Chunk")," data type for Cats Core module like ",(0,i.kt)("inlineCode",{parentName:"p"},"cats.Order"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cats.Hash"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cats.Traverse"),", and so forth."),(0,i.kt)("p",null,"In the following example, we are going to use ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.Chunk")," in a Cats Effect application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import cats.implicits._\nimport zio.interop.catz.core._\n\nobject ZioInteropWithCatsCore extends cats.effect.IOApp {\n  val chunk = zio.Chunk("1", "2", "3", "4", "5")\n\n  def parseInt(s: String): Option[Int] =\n    Either.catchOnly[NumberFormatException](s.toInt).toOption\n\n  val parseAll = cats.Traverse[zio.Chunk].traverse(chunk)(parseInt)\n\n  override def run(args: List[String]): cats.effect.IO[cats.effect.ExitCode] =\n    cats.effect.IO.println(parseAll).as(cats.effect.ExitCode.Success)\n}\n')),(0,i.kt)("p",null,"This package also contains utilities to support ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.NonEmptyChunk")," interoperability with Cats Core module."),(0,i.kt)("h2",{id:"fs2-streams"},"FS2 Streams"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"interop-cats")," module contains extension methods to convert ",(0,i.kt)("em",{parentName:"p"},"FS2 Stream")," to ",(0,i.kt)("em",{parentName:"p"},"ZStream")," and vice versa. These methods support both FS2 series, 2.x and 3.x:"),(0,i.kt)("h3",{id:"from-fs2-stream-to-zstream"},"From FS2 Stream to ZStream"),(0,i.kt)("p",null,"By importing ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.stream.interop.fs2z._")," into our application, the ",(0,i.kt)("inlineCode",{parentName:"p"},"fs2.Stream#toZStream")," extension method converts a ",(0,i.kt)("inlineCode",{parentName:"p"},"fs2.Stream")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ZStream"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.stream.ZStream\nimport zio.stream.interop.fs2z._\nval zstream: ZStream[Any, Throwable, Int] = fs2.Stream.range(1, 10).toZStream()\n")),(0,i.kt)("h3",{id:"from-zstream-to-fs2-stream"},"From ZStream to FS2 Stream"),(0,i.kt)("p",null,"Also, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZStream#toFs2Stream")," converts a ZIO Stream into FS2 Stream:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.stream.ZStream\nimport zio.Chunk\nimport zio.stream.interop.fs2z._\nval fs2stream = ZStream.fromChunks(Chunk(1, 2, 3, 4)).toFs2Stream\n")),(0,i.kt)("h2",{id:"using-queue-with-cats-effect"},"Using Queue with Cats Effect"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"interop-cats")," library has an ",(0,i.kt)("inlineCode",{parentName:"p"},"import zio.interop.Queue")," package to lift creation of ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," effect from ",(0,i.kt)("inlineCode",{parentName:"p"},"UIO[Queue[A]]")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"F[Queue[F, A]]")," which enables us to run ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," under Cats Effect runtime. It supports all variants of ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," like ",(0,i.kt)("inlineCode",{parentName:"p"},"bounded"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unbounded"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sliding")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dropping"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def bounded[F[+_], A](capacity: Int)(implicit R: Runtime[ZEnv], F: LiftIO[F]): F[Queue[F, A]]\n")),(0,i.kt)("h3",{id:"cats-effect-2x-1"},"Cats Effect 2.x"),(0,i.kt)("p",null,"In the following example, we are going to lift the ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," creation effect to Cats ",(0,i.kt)("inlineCode",{parentName:"p"},"IO")," effect. If we are integrating with 2.x Cats Effect library, this snippet works properly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.interop.Queue\nimport cats.effect.IO\n\nimplicit val runtime = Runtime.default\ndef liftedToIO: IO[List[Int]] = for {\n  q <- Queue.bounded[IO, Int](100)\n  _  <- q.offer(1)\n  _  <- q.offer(2)\n  r <- q.takeAll\n} yield (r)\n")),(0,i.kt)("h3",{id:"cats-effect-3x-1"},"Cats Effect 3.x"),(0,i.kt)("p",null,"To run ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," with Cats Effect 3.x we also need to provide an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Dispatcher")," to our contextual environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.interop.Queue\n\nobject ZioQueueInteropWithCats extends scala.App {\n\n  implicit val ceRuntime: cats.effect.unsafe.IORuntime =\n    cats.effect.unsafe.IORuntime.global\n\n  implicit val zioRuntime: zio.Runtime[zio.ZEnv] =\n    zio.Runtime.default\n\n  implicit val ec: scala.concurrent.ExecutionContextExecutor =\n    scala.concurrent.ExecutionContext.global\n\n  implicit val dispatcher: cats.effect.std.Dispatcher[cats.effect.IO] =\n    cats.effect.std\n      .Dispatcher[cats.effect.IO]\n      .allocated\n      .unsafeRunSync()\n      ._1\n\n  def liftedToIO: cats.effect.IO[List[Int]] = for {\n    q <- Queue.bounded[cats.effect.IO, Int](100)\n    _ <- q.offer(1)\n    _ <- q.offer(2)\n    r <- q.takeAll\n  } yield (r)\n\n  val catsApp = liftedToIO\n    .flatMap { e =>\n      cats.effect.IO.println(s"List of elements retrieved from Queue: $e")\n    }\n    .as(cats.effect.ExitCode.Success)\n\n  catsApp.unsafeRunSync()\n}\n')),(0,i.kt)("h2",{id:"using-stm-with-cats-effect"},"Using STM with Cats Effect"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.interop.stm")," provides a wrapper data type on ",(0,i.kt)("inlineCode",{parentName:"p"},"STM[Throwable, A]")," which enables us to run ",(0,i.kt)("inlineCode",{parentName:"p"},"STM")," with the Cats Effect library."),(0,i.kt)("p",null,"Currently, the ",(0,i.kt)("inlineCode",{parentName:"p"},"interop-cats")," support ",(0,i.kt)("inlineCode",{parentName:"p"},"TRef"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TPromise"),",  ",(0,i.kt)("inlineCode",{parentName:"p"},"TQueue")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TSemaphore")," data types."),(0,i.kt)("p",null,"Let's try a working example using ",(0,i.kt)("inlineCode",{parentName:"p"},"STM")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TRef"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import cats.effect.IO\nimport cats.effect.unsafe.IORuntime\nimport zio.interop.stm.{STM, TRef}\n\nimplicit val zioRuntime: zio.Runtime[zio.ZEnv] = zio.Runtime.default\nimplicit val catsRuntime: IORuntime            = IORuntime.global\n\ndef transferMoney(\n    from: TRef[IO, Long],\n    to: TRef[IO, Long],\n    amount: Long\n): STM[IO, Long] =\n  for {\n    senderBal <- from.get\n    _ <-\n      if (senderBal < amount)\n        STM.fail[IO](new Exception("Not enough money"))\n      else\n        STM.unit[IO]\n    _       <- from.update(existing => existing - amount)\n    _       <- to.update(existing => existing + amount)\n    recvBal <- to.get\n  } yield recvBal\n\nval program: IO[Long] = for {\n  sndAcc <- STM.atomically[cats.effect.IO, TRef[IO, Long]](\n    TRef.make[IO, Long](1000)\n  )\n  rcvAcc <- STM.atomically[cats.effect.IO, TRef[IO, Long]](\n    TRef.make[IO, Long](200)\n  )\n  recvAmt <- STM.atomically(transferMoney(sndAcc, rcvAcc, 500L))\n} yield recvAmt\n\nprogram\n  .flatMap(amount =>\n    IO.println(s"Balance of second account after transaction: $amount")\n  )\n  .unsafeRunSync()\n')),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Cats Effect and Type-Level libraries are older than the ZIO ecosystem. So there are very nice libraries like doobie and http4s, that a ZIO user would like to use in its application."),(0,i.kt)("p",null,"We have provided some full working example of using these important libraries:"),(0,i.kt)("h3",{id:"using-zio-with-doobie"},"Using ZIO with Doobie"),(0,i.kt)("p",null,"The following example shows how to use ZIO with Doobie (a library for JDBC access) and FS2 (a streaming library), which both rely on Cats Effect instances:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// This snippet works with both CE2 and CE3\nimport doobie._\nimport doobie.implicits._\nimport fs2.Stream\nimport zio.Task\nimport zio.interop.catz._\n\nimplicit val zioRuntime: zio.Runtime[zio.ZEnv] = zio.Runtime.default\n\ncase class User(id: String, name: String, age: Int)\n\ndef xa: Transactor[Task] =\n  Transactor.fromDriverManager[Task](\n    "org.h2.Driver",\n    "jdbc:h2:mem:users;DB_CLOSE_DELAY=-1"\n  )\n\ndef createTable: doobie.ConnectionIO[Int] =\n  sql"""|CREATE TABLE IF NOT EXISTS USERS(\n        |id   INT SERIAL UNIQUE,\n        |name VARCHAR NOT NULL UNIQUE,\n        |age  SMALLINT\n        |)""".stripMargin.update.run\n\ndef dropTable: doobie.ConnectionIO[Int] =\n  sql"""DROP TABLE IF EXISTS USERS""".update.run\n\ndef insert(name: String, age: Int): doobie.ConnectionIO[Int] =\n  sql"insert into users (name, age) values ($name, $age)".update.run\n\ndef loadUsers: Stream[doobie.ConnectionIO, User] =\n  sql"""SELECT * FROM users""".query[User].stream\n\nval doobieApp: Stream[doobie.ConnectionIO, User] = for {\n  _ <- fs2.Stream.eval(dropTable)\n  _ <- fs2.Stream.eval(createTable)\n  _ <- fs2.Stream.eval(insert("Olivia", 21))\n  _ <- fs2.Stream.eval(insert("Oliver", 30))\n  u <- loadUsers\n} yield u\n\nval run: Stream[Task, User] = doobieApp.transact(xa)\n\nval allUsers: List[User] =\n  zioRuntime.unsafeRun(run.compile.toList)\n')),(0,i.kt)("p",null,"Sounds good, but how can we specify a specialized transactor than the default one? Creating a customized transactor in CE2 differs from CE3. "),(0,i.kt)("p",null,"Let's try doing that in each of which:"),(0,i.kt)("h4",{id:"customized-transactor-ce2"},"Customized Transactor (CE2)"),(0,i.kt)("p",null,"ZIO provides a specific blocking thread pool for blocking operations. The ",(0,i.kt)("inlineCode",{parentName:"p"},"doobie-hikari")," module helps us create a transactor with two separated executors, one for blocking operations, and the other one for non-blocking operations. So we shouldn't run blocking JDBC operations or perform awaiting connections to the database on the main thread pool."),(0,i.kt)("p",null,"So let's fix this issue in the previous example. In the following snippet we are going to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZMHikari")," of Hikari transactor. In this example we are using ",(0,i.kt)("inlineCode",{parentName:"p"},"0.13.4")," version of doobie which supports CE2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.ZManaged\nimport zio.{ Runtime, Task, ZIO, ZManaged }\nimport doobie.hikari.HikariTransactor\nimport cats.effect.Blocker\nimport zio.interop.catz._\n\ndef transactor: ZManaged[Any, Throwable, HikariTransactor[Task]] =\n  for {\n    rt <- ZIO.runtime[Any].toManaged\n    be <- ZIO.blockingExecutor.toManaged                          // our blocking EC\n    xa <- HikariTransactor\n            .newHikariTransactor[Task](\n              "org.h2.Driver",                                    // driver classname\n              "jdbc:h2:mem:test;DB_CLOSE_DELAY=-1",               // connect URL\n              "sa",                                               // username\n              "",                                                 // password\n              be.asExecutionContext,                              // await connection here\n              Blocker.liftExecutionContext(be.asExecutionContext) // execute JDBC operations here\n            )\n            .toManagedZIO\n  } yield xa\n')),(0,i.kt)("p",null,"Now we can ",(0,i.kt)("inlineCode",{parentName:"p"},"transact")," our ",(0,i.kt)("inlineCode",{parentName:"p"},"doobieApp")," with this ",(0,i.kt)("inlineCode",{parentName:"p"},"transactor")," and convert that to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," effect:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val zioApp: ZIO[Any, Throwable, List[User]] =\n  transactor.use(xa => doobieApp.transact(xa).compile.toList)\n")),(0,i.kt)("h4",{id:"customized-transactor-ce3"},"Customized Transactor (CE3)"),(0,i.kt)("p",null,"In Cats Effect 3.x, the ",(0,i.kt)("inlineCode",{parentName:"p"},"cats.effect.Blocker")," has been removed. So the transactor constructor doesn't require us a blocking executor; it happens under the hood using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sync[F].blocking")," operation."),(0,i.kt)("p",null,"To create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Transactor")," in CE3, we need to create an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Dispatcher")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.Task"),". The following example is based on Doobie's ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0.0-M5")," version which supports CE3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import doobie.hikari.HikariTransactor\nimport zio.interop.catz._\nimport zio.{Task, ZIO, ZManaged}\n\nimplicit val zioRuntime: zio.Runtime[zio.ZEnv] =\n  zio.Runtime.default\n\nimplicit val dispatcher: cats.effect.std.Dispatcher[zio.Task] =\n  zioRuntime\n    .unsafeRun(\n      cats.effect.std\n        .Dispatcher[zio.Task]\n        .allocated\n    )\n    ._1\n\ndef transactor: ZManaged[Any, Throwable, HikariTransactor[Task]] =\n  for {\n    rt <- ZIO.runtime[Any].toManaged\n    xa <-\n      HikariTransactor\n        .newHikariTransactor[Task](\n          "org.h2.Driver",                             // driver classname\n          "jdbc:h2:mem:test;DB_CLOSE_DELAY=-1",        // connect URL\n          "sa",                                        // username\n          "",                                          // password\n          rt.runtimeConfig.executor.asExecutionContext // await connection here\n        )\n        .toManaged\n  } yield xa\n')),(0,i.kt)("p",null,"Now we can ",(0,i.kt)("inlineCode",{parentName:"p"},"transact")," our ",(0,i.kt)("inlineCode",{parentName:"p"},"doobieApp")," with this ",(0,i.kt)("inlineCode",{parentName:"p"},"transactor")," and convert that to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," effect:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val zioApp: ZIO[Any, Throwable, List[User]] =\n  transactor.use(xa => doobieApp.transact(xa).compile.toList)\n")),(0,i.kt)("h3",{id:"http4s"},"Http4s"),(0,i.kt)("p",null,"Here is the full working example of using http4s in ZIO App:"),(0,i.kt)("h4",{id:"cats-effect-2x-2"},"Cats Effect 2.x"),(0,i.kt)("p",null,"The following example is based on http4s's ",(0,i.kt)("inlineCode",{parentName:"p"},"0.21.24")," version which supports CE2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import cats.effect.{ConcurrentEffect, Sync, Timer}\nimport cats.implicits._\nimport fs2.Stream\nimport org.http4s.HttpRoutes\nimport org.http4s.client.blaze.BlazeClientBuilder\nimport org.http4s.dsl.Http4sDsl\nimport org.http4s.server.blaze.BlazeServerBuilder\nimport zio.interop.catz._\nimport zio.interop.catz.implicits._ \nimport zio.{Task, URIO}\n\nimport scala.concurrent.ExecutionContext.global\n\nobject ZioHttp4sInterop extends CatsApp {\n  def run(args: List[String]): URIO[zio.ZEnv, zio.ExitCode] =\n    stream[Task].compile.drain.exitCode\n  \n  def stream[F[_]: ConcurrentEffect: Timer]: Stream[F, Nothing] = {\n    import org.http4s.implicits._\n    val httpApp = helloWorldRoute[F].orNotFound\n    for {\n      _ <- BlazeClientBuilder[F](global).stream\n      exitCode <- BlazeServerBuilder[F](global)\n        .bindHttp(8080, "0.0.0.0")\n        .withHttpApp(httpApp)\n        .serve\n    } yield exitCode\n  }.drain\n\n  def helloWorldRoute[F[_]: Sync]: HttpRoutes[F] = {\n    val dsl = new Http4sDsl[F]{}\n    import dsl._\n    HttpRoutes.strict[F] {\n      case GET -> Root =>\n        Ok("Hello, World!")\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"cats-effect-3x-2"},"Cats Effect 3.x"),(0,i.kt)("p",null,"The following example is based on http4s's ",(0,i.kt)("inlineCode",{parentName:"p"},"0.23.0-RC1")," version which supports CE3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import cats.Applicative\nimport cats.effect.Async\nimport fs2.Stream\nimport org.http4s.HttpRoutes\nimport org.http4s.blaze.client.BlazeClientBuilder\nimport org.http4s.blaze.server.BlazeServerBuilder\nimport org.http4s.dsl.Http4sDsl\nimport zio.interop.catz._\nimport zio.{Task, URIO}\n\nimport scala.concurrent.ExecutionContext.global\n\nobject ZioHttp4sInterop extends zio.interop.catz.CatsApp {\n  def stream[F[_]: Async]: Stream[F, Nothing] = {\n    import org.http4s.implicits._\n    val httpApp = helloWorldRoute[F].orNotFound\n    for {\n      _ <- BlazeClientBuilder[F](global).stream\n      exitCode <- BlazeServerBuilder[F](global)\n        .bindHttp(8080, "0.0.0.0")\n        .withHttpApp(httpApp)\n        .serve\n    } yield exitCode\n  }.drain\n\n  def helloWorldRoute[F[_]: Applicative]: HttpRoutes[F] = {\n    val dsl = new Http4sDsl[F] {}\n    import dsl._\n    HttpRoutes.strict[F] { case GET -> Root =>\n      Ok("Hello, World!")\n    }\n  }\n\n  def run(args: List[String]): URIO[zio.ZEnv, zio.ExitCode] =\n    stream[Task].compile.drain.exitCode\n}\n')))}f.isMDXComponent=!0}}]);