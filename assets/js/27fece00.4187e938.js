"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"defining-polymorphic-services-in-zio",title:"Defining Polymorphic Services in ZIO",sidebar_label:"Polymorphic Services"},o=void 0,l={unversionedId:"reference/service-pattern/defining-polymorphic-services-in-zio",id:"reference/service-pattern/defining-polymorphic-services-in-zio",title:"Defining Polymorphic Services in ZIO",description:"As we discussed here, the ZEnvironment, which is the underlying data type used by ZLayer, is backed by a type-level mapping from types of services to implementations of those services. This functionality is backed by izumi.reflect.Tag, which captures a type as a value.",source:"@site/docs/reference/service-pattern/defining-polymorphic-services-in-zio.md",sourceDirName:"reference/service-pattern",slug:"/reference/service-pattern/defining-polymorphic-services-in-zio",permalink:"/reference/service-pattern/defining-polymorphic-services-in-zio",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/service-pattern/defining-polymorphic-services-in-zio.md",tags:[],version:"current",frontMatter:{id:"defining-polymorphic-services-in-zio",title:"Defining Polymorphic Services in ZIO",sidebar_label:"Polymorphic Services"},sidebar:"reference-sidebar",previous:{title:"Service Pattern",permalink:"/reference/service-pattern/"},next:{title:"Generating Accessor Methods",permalink:"/reference/service-pattern/generating-accessor-methods-using-macros"}},p={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As we discussed ",(0,a.kt)("a",{parentName:"p",href:"/reference/contextual/zenvironment"},"here"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZEnvironment"),", which is the underlying data type used by ",(0,a.kt)("inlineCode",{parentName:"p"},"ZLayer"),", is backed by a type-level mapping from types of services to implementations of those services. This functionality is backed by ",(0,a.kt)("inlineCode",{parentName:"p"},"izumi.reflect.Tag"),", which captures a type as a value."),(0,a.kt)("p",null,"We just need to know what is the type of service when we put it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZEnvironment")," because ",(0,a.kt)("inlineCode",{parentName:"p"},"ZEnvironment")," is essentially a map from ",(0,a.kt)("em",{parentName:"p"},"service types (interfaces)")," to ",(0,a.kt)("em",{parentName:"p"},"implementation of those interfaces"),". To implement the map, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZEnvironment")," needs a type tag for the new service, and also needs a way to remove the old service from the type level map. So we should have service type information at the runtime."),(0,a.kt)("p",null,"We can think of ",(0,a.kt)("inlineCode",{parentName:"p"},"Tag[A]")," as like a ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeTag[A]")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ClassTag[A]")," from the Scala standard library but available on a cross-version and cross-platform basis. Basically, it carries information about a certain type into runtime that was available at compile time. Methods that construct ",(0,a.kt)("inlineCode",{parentName:"p"},"ZEnvironment")," values generally require a tag for the value being included in the \u201cbundle of services\u201d."),(0,a.kt)("p",null,"As a user, we should not normally interact with ",(0,a.kt)("inlineCode",{parentName:"p"},"Tag")," except where we define polymorphic services. In general, a ",(0,a.kt)("inlineCode",{parentName:"p"},"Tag")," should always be available whenever we have a concrete type. The only time we should have to use it is when we have a ",(0,a.kt)("em",{parentName:"p"},"polymorphic service"),". If we are using polymorphic code, we need to provide implicit evidence that a tag exists for that type (",(0,a.kt)("inlineCode",{parentName:"p"},"implicit tag: Tag[A]"),") or as a context-bound for that type parameter: (",(0,a.kt)("inlineCode",{parentName:"p"},"A: Tag"),")."),(0,a.kt)("p",null,"Let's try to write a polymorphic service. Assume we have the following service interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait KeyValueStore[K, V, E, F[_, _]] {\n  def get(key: K): F[E, V]\n\n  def set(key: K, value: V): F[E, V]\n\n  def remove(key: K): F[E, Unit]\n}\n")),(0,a.kt)("p",null,"In the next step, we are going to write its accessors. We might end up with the following snippet code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nobject KeyValueStore {\n  def get[K, V, E](key: K): ZIO[KeyValueStore[K, V, E, IO], E, V] =\n    ZIO.serviceWithZIO[KeyValueStore[K, V, E, IO]](_.get(key))\n\n  def set[K, V, E](key: K, value: V): ZIO[KeyValueStore[K, V, E, IO], E, V] =\n    ZIO.serviceWithZIO[KeyValueStore[K, V, E, IO]](_.set(key, value))\n\n  def remove[K, V, E](key: K): ZIO[KeyValueStore[K, V, E, IO], E, Unit] =\n    ZIO.serviceWithZIO(_.remove(key))\n}\n\n// error: could not find implicit value for izumi.reflect.Tag[K]. Did you forget to put on a Tag, TagK or TagKK context bound on one of the parameters in K? e.g. def x[T: Tag, F[_]: TagK] = ...\n// \n// \n// <trace>: \n//   deriving Tag for K, dealiased: K:\n//   could not find implicit value for Tag[K]: K is a type parameter without an implicit Tag!\n//     ZIO.serviceWithZIO[KeyValueStore[K, V, E, IO]](_.get(key))\n//                                                   ^\n// error: could not find implicit value for izumi.reflect.Tag[K]. Did you forget to put on a Tag, TagK or TagKK context bound on one of the parameters in K? e.g. def x[T: Tag, F[_]: TagK] = ...\n// \n// \n// <trace>: \n//   deriving Tag for K, dealiased: K:\n//   could not find implicit value for Tag[K]: K is a type parameter without an implicit Tag!\n//     ZIO.serviceWithZIO[KeyValueStore[K, V, E, IO]](_.set(key, value))\n//                                                   ^\n// error: could not find implicit value for izumi.reflect.Tag[K]. Did you forget to put on a Tag, TagK or TagKK context bound on one of the parameters in K? e.g. def x[T: Tag, F[_]: TagK] = ...\n// \n// \n// <trace>: \n//   deriving Tag for K, dealiased: K:\n//   could not find implicit value for Tag[K]: K is a type parameter without an implicit Tag!\n//     ZIO.serviceWithZIO(_.remove(key))\n//                       ^\n")),(0,a.kt)("p",null,"The compiler generates the following errors:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"could not find implicit value for izumi.reflect.Tag[K]. Did you forget to put on a Tag, TagK or TagKK context bound on one of the parameters in K? e.g. def x[T: Tag, F[_]: TagK] = ...\n\n\n<trace>: \n  deriving Tag for K, dealiased: K:\n  could not find implicit value for Tag[K]: K is a type parameter without an implicit Tag!\n    ZIO.serviceWithZIO[KeyValueStore[K, V, E, IO]](_.get(key))\n")),(0,a.kt)("p",null,"As the compiler says, we should put ",(0,a.kt)("inlineCode",{parentName:"p"},"Tag")," as a context-bound for ",(0,a.kt)("inlineCode",{parentName:"p"},"K"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"V"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," type parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nobject KeyValueStore {\n  def get[K: Tag, V: Tag, E: Tag](key: K): ZIO[KeyValueStore[K, V, E, IO], E, V] =\n    ZIO.serviceWithZIO[KeyValueStore[K, V, E, IO]](_.get(key))\n\n  def set[K: Tag, V: Tag, E: Tag](key: K, value: V): ZIO[KeyValueStore[K, V, E, IO], E, V] =\n    ZIO.serviceWithZIO[KeyValueStore[K, V, E, IO]](_.set(key, value))\n\n  def remove[K: Tag, V: Tag, E: Tag](key: K): ZIO[KeyValueStore[K, V, E, IO], E, Unit] =\n    ZIO.serviceWithZIO(_.remove(key))\n}\n")),(0,a.kt)("p",null,"Now, we can continue and implement the in-memory version of this key-value store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'case class InmemoryKeyValueStore(map: Ref[Map[String, Int]])\n  extends KeyValueStore[String, Int, String, IO] {\n\n  override def get(key: String): IO[String, Int] =\n    map.get.map(_.get(key)).someOrFail(s"$key not found")\n\n  override def set(key: String, value: Int): IO[String, Int] =\n    map.update(_.updated(key, value)).map(_ => value)\n\n  override def remove(key: String): IO[String, Unit] =\n    map.update(_.removed(key))\n}\n\nobject InmemoryKeyValueStore {\n  def layer: ULayer[KeyValueStore[String, Int, String, IO]] =\n    ZLayer {\n      Ref.make(Map[String, Int]()).map(InmemoryKeyValueStore.apply)\n    }\n}\n')),(0,a.kt)("p",null,"The last step is to use the service in a ZIO application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n\n  val myApp: ZIO[KeyValueStore[String, Int, String, IO], String, Unit] =\n    for {\n      _ <- KeyValueStore.set[String, Int, String]("key1", 3).debug\n      _ <- KeyValueStore.get[String, Int, String]("key1").debug\n      _ <- KeyValueStore.remove[String, Int, String]("key1")\n      _ <- KeyValueStore.get[String, Int, String]("key1").either.debug\n    } yield ()\n\n  def run = myApp.provide(InmemoryKeyValueStore.layer)\n  \n}\n')),(0,a.kt)("p",null,"Note that in the above example, one might want to write accessors more polymorphic. So in this case we should add ",(0,a.kt)("inlineCode",{parentName:"p"},"TagKK")," as a context-bound of the ",(0,a.kt)("inlineCode",{parentName:"p"},"F")," type parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"object KeyValueStore {\n  def get[K: Tag, V: Tag, E: Tag, F[_, _] : TagKK](key: K): ZIO[KeyValueStore[K, V, E, F], Nothing, F[E, V]] =\n    ZIO.serviceWith[KeyValueStore[K, V, E, F]](_.get(key))\n\n  def set[K: Tag, V: Tag, E: Tag, F[_, _] : TagKK](key: K, value: V): ZIO[KeyValueStore[K, V, E, F], Nothing, F[E, V]] =\n    ZIO.serviceWith[KeyValueStore[K, V, E, F]](_.set(key, value))\n\n  def remove[K: Tag, V: Tag, E: Tag, F[_, _] : TagKK](key: K): ZIO[KeyValueStore[K, V, E, F], E, Unit] =\n    ZIO.serviceWith(_.remove(key))\n}\n")))}u.isMDXComponent=!0}}]);