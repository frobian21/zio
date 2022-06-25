"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2231],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4904:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={id:"index",title:"Introduction"},r=void 0,s={unversionedId:"datatypes/stm/index",id:"version-1.x/datatypes/stm/index",title:"Introduction",description:"Overview",source:"@site/versioned_docs/version-1.x/datatypes/stm/index.md",sourceDirName:"datatypes/stm",slug:"/datatypes/stm/",permalink:"/version-1.x/datatypes/stm/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/stm/index.md",tags:[],version:"1.x",frontMatter:{id:"index",title:"Introduction"},sidebar:"datatypes-sidebar",previous:{title:"Semaphore",permalink:"/version-1.x/datatypes/concurrency/semaphore"},next:{title:"STM",permalink:"/version-1.x/datatypes/stm/"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"The Problem",id:"the-problem",level:2},{value:"Composable Concurrency",id:"composable-concurrency",level:2},{value:"How Does it Work?",id:"how-does-it-work",level:2},{value:"STM Data Types",id:"stm-data-types",level:2},{value:"Advantage of Using STM",id:"advantage-of-using-stm",level:2},{value:"Implication of Using STM",id:"implication-of-using-stm",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"ZIO supports Software Transactional Memory (STM) which is a modular composable concurrency data structure. It allows us to combine and compose a group of memory operations and perform all of them in one single atomic operation."),(0,o.kt)("p",null,"Software Transactional Memory is an abstraction for concurrent communications. The main benefits of STM are composability and modularity. We can write concurrent abstractions that can be composed with any other abstraction built using STM, without exposing the details of how our abstraction ensures safety. This is typically not the case with the locking mechanism."),(0,o.kt)("p",null,"The idea of the transactional operation is not new, they have been the fundamental of distributed systems, and those databases that guarantee us an ACID property. Software transactional memory is just all about memory operations. All operations performed on memory. It is not related to a remote system or a database. Very similar to the database concept of ACID property, but the ",(0,o.kt)("em",{parentName:"p"},"durability"),", is missing which doesn't make sense for in-memory operations."),(0,o.kt)("p",null,"In transactional memory we get these aspects of ACID properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Atomicity")," \u2014 On write operations, we want ",(0,o.kt)("em",{parentName:"p"},"atomic update"),", which means the update operation either should run at once or not at all.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Consistency")," \u2014 On read operations, we want ",(0,o.kt)("em",{parentName:"p"},"consistent view")," of the state of the program that ensures us all reference to the state, gets the same value whenever they get the state.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Isolated")," \u2014 If we have multiple updates, we need to perform these updates in isolated transactions. So each transaction doesn't affect other concurrent transactions. No matter how many fibers are running any number of transactions. None of them have to worry about what is happening in the other transactions."))),(0,o.kt)("p",null,"The ZIO STM API is inspired by Haskell's ",(0,o.kt)("a",{parentName:"p",href:"http://hackage.haskell.org/package/stm-2.5.0.0/docs/Control-Concurrent-STM.html"},"STM library")," although the implementation in ZIO is completely different."),(0,o.kt)("h2",{id:"the-problem"},"The Problem"),(0,o.kt)("p",null,"Let's start from a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"inc")," function, which takes a mutable reference of ",(0,o.kt)("inlineCode",{parentName:"p"},"Int")," and increase it by ",(0,o.kt)("inlineCode",{parentName:"p"},"amount"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def inc(counter: Ref[Int], amount: Int) = for {\n  c <- counter.get\n  _ <- counter.set(c + amount)\n} yield c\n")),(0,o.kt)("p",null,"If there is only one fiber in the world, it is not a problem. This function sounds correct. But what happens if in between reading the value of the counter and setting a new value, another fiber comes and mutates the value of the counter? Another fiber is just updating the counter just after we read the counter. So this function is subject to a race condition, we can test that with the following program:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  counter <- Ref.make(0)\n  _ <- ZIO.collectAllPar(ZIO.replicate(10)(inc(counter, 1)))\n  value <- counter.get\n} yield (value)\n")),(0,o.kt)("p",null,"As the above program runs 10 concurrent fibers to increase the counter value. However, we cannot expect this program to always return 10 as a result. "),(0,o.kt)("p",null,"To fix this issue, we need to perform the ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," operation atomically. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref")," data type some other api like ",(0,o.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"updateAndGet"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"modify")," which perform the reading and writing atomically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def inc(counter: Ref[Int], amount: Int) = counter.updateAndGet(_ + amount)\n")),(0,o.kt)("p",null,"The most important note about the ",(0,o.kt)("inlineCode",{parentName:"p"},"modify")," operation is that it doesn't use pessimistic locking. It doesn't use any locking primitives for the critical section. It has an optimistic assumption on occurring collisions."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"modify")," function takes these three steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It assumes that other fibers don't change the shared state and don't interferer in most cases. So it read the shared state without using any locking primitives.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It should be prepared itself for the worst cases. If another fiber was accessing at the same time, what would happen? So when we came to writing a new value it should check everything. It should make sure that it saw a consistent state of the universe and if it had, then it can change that value.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If it encounters an inconsistent value, it shouldn't continue. So it aborts updating the shared state with invalidated assumption. It should retry the ",(0,o.kt)("inlineCode",{parentName:"p"},"modify")," operation with an updated state."))),(0,o.kt)("p",null,"Let's see how the ",(0,o.kt)("inlineCode",{parentName:"p"},"modify")," function of ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref")," is implemented without any locking mechanism:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"  final case class Ref[A](value: AtomicReference[A]) { self =>\n    def modify[B](f: A => (B, A)): UIO[B] = UIO.effectTotal {\n      var loop = true\n      var b: B = null.asInstanceOf[B]\n      while (loop) {\n        val current = value.get\n        val tuple   = f(current)\n        b = tuple._1\n        loop = !value.compareAndSet(current, tuple._2)\n      }\n      b\n    }\n }\n")),(0,o.kt)("p",null,"As we see, the ",(0,o.kt)("inlineCode",{parentName:"p"},"modify")," operation is implemented in terms of the ",(0,o.kt)("inlineCode",{parentName:"p"},"compare-and-swap")," operation which helps us to perform read and update atomically."),(0,o.kt)("p",null,"Let's rename the ",(0,o.kt)("inlineCode",{parentName:"p"},"inc")," function to the ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," as follows to try the classic problem of transferring money from one account to another:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def deposit(accountBalance: Ref[Int], amount: Int) = accountBalance.update(_ + amount)\n")),(0,o.kt)("p",null,"And the ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def withdraw(accountBalance: Ref[Int], amount: Int) = accountBalance.update(_ - amount) \n")),(0,o.kt)("p",null,"It seems pretty good, but we also need to check that there is sufficient balance in the account to withdraw. So let's add an invariant to check that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'def withdraw(accountBalance: Ref[Int], amount: Int) = for {\n  balance <- accountBalance.get\n  _ <- if (balance < amount) ZIO.fail("Insufficient funds in you account") else\n    accountBalance.update(_ - amount)\n} yield ()\n')),(0,o.kt)("p",null,"What if in between checking and updating the balance, another fiber comes and withdraws all money in the account? This solution has a bug. It has the potential to reach a negative balance. "),(0,o.kt)("p",null,"Suppose we finally reached a solution to do withdraw atomically, the problem remains. We need a way to compose ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," atomically to create a `transfer function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def transfer(from: Ref[Int], to: Ref[Int], amount: Int) = for {\n  _ <- withdraw(from, amount)\n  _ <- deposit(to, amount)\n} yield ()\n")),(0,o.kt)("p",null,"In the above example, even we assume that the ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," are atomic, we can't compose these two transactions. They produce bugs in a concurrent environment. This code doesn't guarantee us that both ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," are performed in one single atomic operation. Other fibers which are executing this ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," method can override the shared state and introduce a race condition."),(0,o.kt)("p",null,"We need a solution to ",(0,o.kt)("strong",{parentName:"p"},"atomically compose transactions"),". This is where software transactional memory comes to into play."),(0,o.kt)("h2",{id:"composable-concurrency"},"Composable Concurrency"),(0,o.kt)("p",null,"Software transactional memory provides us a way to compose multiple transactions and perform them in one single transaction."),(0,o.kt)("p",null,"Let's continue our last effort to convert our ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," method to be one atomic operation. To solve the problem using STM, we replace ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"TRef"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"TRef")," stands for ",(0,o.kt)("em",{parentName:"p"},"Transactional Reference"),"; it is a mutable reference contained in the ",(0,o.kt)("inlineCode",{parentName:"p"},"STM")," world. ",(0,o.kt)("inlineCode",{parentName:"p"},"STM")," is a monadic data structure that represents an effect that can be performed transactionally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'def withdraw(accountBalance: TRef[Int], amount: Int): STM[String, Unit] =\n  for {\n    balance <- accountBalance.get\n    _ <- if (balance < amount)\n      STM.fail("Insufficient funds in you account")\n    else\n      accountBalance.update(_ - amount)\n  } yield ()\n')),(0,o.kt)("p",null,"Although the ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," operation is atomic, to be able to compose with ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," we need to refactor it to takes ",(0,o.kt)("inlineCode",{parentName:"p"},"TRef")," and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"STM"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def deposit(accountBalance: TRef[Int], amount: Int): STM[Nothing, Unit] =\n  accountBalance.update(_ + amount)\n")),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"STM")," world we can compose all operations and at the end of the world, we perform all of them in one single operation atomically. To be able to compose ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," we need to stay in the ",(0,o.kt)("inlineCode",{parentName:"p"},"STM")," world. Therefore, we didn't perform ",(0,o.kt)("inlineCode",{parentName:"p"},"STM.atomically")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"STM#commit")," methods on each of them."),(0,o.kt)("p",null,"Now we can define the ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," method by composing these two function in the ",(0,o.kt)("inlineCode",{parentName:"p"},"STM")," world and converting them into the ",(0,o.kt)("inlineCode",{parentName:"p"},"IO")," atomically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def transfer(from: TRef[Int], to: TRef[Int], amount: Int): IO[String, Unit] =\n  STM.atomically {\n    for {\n      _ <- withdraw(from, amount)\n      _ <- deposit(to, amount)\n    } yield ()\n  }\n")),(0,o.kt)("p",null,"Assume we are in the middle of transferring money from one account to the other. If we withdraw the first account but haven't deposited the second account, that kind of intermediate state is not visible to any external fibers. The transaction completely successful if there are not any conflicting changes. And if there are any conflicts or conflicting changes then the whole transaction, the entire STM will be retried."),(0,o.kt)("h2",{id:"how-does-it-work"},"How Does it Work?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"STM")," uses the same idea of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref#modify")," function, but with a composability feature. The main goal of ",(0,o.kt)("inlineCode",{parentName:"p"},"STM")," is to provide a mechanism to compose multiple transactions and perform them in one single atomic operation."),(0,o.kt)("p",null,"The mechanism behind the compositional part is obvious. The ",(0,o.kt)("inlineCode",{parentName:"p"},"STM")," has its own world. It has lots of useful combinators like ",(0,o.kt)("inlineCode",{parentName:"p"},"flatMap")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"orElse")," to compose multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"STM")," and create more elegant ones. After we perform a transaction with ",(0,o.kt)("inlineCode",{parentName:"p"},"STM#commit")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"STM.atomically")," the runtime system does the following steps. These steps are not exactly accurate, but they draw an outline of what happens during the transaction:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Starting a Transaction")," \u2014 When we start a transaction, the runtime system creates a virtual space to keep track of the transaction logs which is build up by recording the reads and tentative writes that the transaction will perform during the transaction steps.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Virtual Execution")," \u2014 The runtime starts speculating the execution of transactions on every read and write operation. It has two internal logs;  the read and the write log. On the read log, it saves the version of all variables it reads during the intermediate steps, and on the write log, it saves the intermediate result of the transaction. It doesn't change the shared state on the main memory. Anything that is inside an atomic block is not executed immediately, it's executed in the virtual world, just by putting stuff in the internal log, not in the main memory. In this particular model, we guarantee that all computations are isolated from one another.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Commit Phase (Real Execution)")," \u2014 When it came to the end of the transaction the runtime system should check everything it has read. It should make sure that it saw a consistent state of the universe and if it had, then it atomically commits. As the STM is optimistic, it assumes that in the middle of a transaction the chance of interfering with the shared state by other fibers is very rare. But it must ready itself for the worst cases. It should validate its assumption in the final stage. It checks whether the transactional variables involved were modified by any other threads or not. If its assumption got invalidated in the meanwhile of the transaction, it should abandon the transaction and retry it again. It jumps to the start of the transaction with the original and default values and tries again until it succeeds; This is necessary to resolve conflicts. Otherwise, if there was no conflict, it commits the final value atomically to the memory and succeeds. From point of view of other fibers, all values in memory exchanging in one blink of an eye. It's all atomic."))),(0,o.kt)("p",null,"Everything done within a transaction to other transactions looks like it happens at once or not at all. So no matter how many pieces of memory it touches during the transaction. From the other transaction perspective, all of these changes happen at once."),(0,o.kt)("h2",{id:"stm-data-types"},"STM Data Types"),(0,o.kt)("p",null,"There are a variety of transactional data structures that can take part in an STM transaction:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/stm/tarray"},"TArray"))," - A ",(0,o.kt)("inlineCode",{parentName:"li"},"TArray[A]")," is an array of mutable references that can participate in transactions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/stm/tset"},"TSet"))," - A ",(0,o.kt)("inlineCode",{parentName:"li"},"TSet")," is a mutable set that can participate in transactions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/stm/tmap"},"TMap"))," - A ",(0,o.kt)("inlineCode",{parentName:"li"},"TMap[A]")," is a mutable map that can participate in transactions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/stm/tref"},"TRef"))," - A ",(0,o.kt)("inlineCode",{parentName:"li"},"TRef")," is a mutable reference to an immutable value that can participate in transactions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/stm/tpriorityqueue"},"TPriorityQueue"))," - A ",(0,o.kt)("inlineCode",{parentName:"li"},"TPriorityQueue[A]")," is a mutable priority queue that can participate in transactions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/stm/tpromise"},"TPromise"))," - A ",(0,o.kt)("inlineCode",{parentName:"li"},"TPromise")," is a mutable reference that can be set exactly once and can participate in transactions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/stm/tqueue"},"TQueue"))," - A ",(0,o.kt)("inlineCode",{parentName:"li"},"TQueue")," is a mutable queue that can participate in transactions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/stm/treentrantlock"},"TReentrantLock"))," - A ",(0,o.kt)("inlineCode",{parentName:"li"},"TReentrantLock")," is a reentrant read / write lock that can be composed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/stm/tsemaphore"},"TSemaphore"))," - A ",(0,o.kt)("inlineCode",{parentName:"li"},"TSemaphore")," is a semaphore that can participate in transactions.")),(0,o.kt)("p",null,"Since STM places a great emphasis on compositionality, we can build upon these data structures and define our very own concurrent data structures. For example, we can build a transactional priority queue using ",(0,o.kt)("inlineCode",{parentName:"p"},"TRef"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TMap")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TQueue"),"."),(0,o.kt)("h2",{id:"advantage-of-using-stm"},"Advantage of Using STM"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Composable Transaction")," \u2014 Combining atomic operations using locking-oriented programming is almost impossible. ZIO provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"STM")," data type, which has lots of combinators to compose transactions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Declarative")," \u2014 ZIO STM is completely declarative. It doesn't require us to think about low-level primitives. It doesn't force us to think about the ordering of locks. Reasoning concurrent program in a declarative fashion is very simple. We can just focus on the logic of our program and run it in a concurrent environment deterministically. The user code is much simpler of course because it doesn't have to deal with the concurrency at all. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Optimistic Concurrency")," \u2014 In most cases, we are allowed to be optimistic, unless there is tremendous contention. So if we haven't tremendous contention it really pays to be optimistic. It allows a higher volume of concurrent transactions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Lock-Free")," \u2014 All operations are non-blocking using lock-free algorithms.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Fine-Grained Locking"),"\u2014 Coarse-grained locking is very simple to implement, but it has a negative impact on performance, while fine-grained locking significantly has better performance, but it is very cumbersome, sophisticated, and error-prone even for experienced programmers. We would like to have the ease of use of coarse-grain locking, but at the same time, we would like to have the efficiency of fine-grain locking. ZIO provides several data types which are a very coarse way of using concurrency, but they are implemented as if every single word were lockable. So the granularity of concurrency is fine-grained. It increases the performance and concurrency. For example, if we have two fibers accessing the same ",(0,o.kt)("inlineCode",{parentName:"p"},"TArray"),", one of them read and write on the first index of our array, and another one is read and write to the second index of that array, they will not conflict. It is just like as if we were locking the indices, not the whole array. "))),(0,o.kt)("h2",{id:"implication-of-using-stm"},"Implication of Using STM"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Running I/O Inside STM"),"\u2014 There is a strict boundary between the ",(0,o.kt)("inlineCode",{parentName:"p"},"STM")," world and the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," world. This boundary propagates even deeper because we are not allowed to execute arbitrary effects in the ",(0,o.kt)("inlineCode",{parentName:"p"},"STM")," universe. Performing side effects and I/O operation inside a transaction is problematic. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"STM")," the only effect that exists is the ",(0,o.kt)("inlineCode",{parentName:"p"},"STM")," itself. We cannot print something or launch a missile inside a transaction as it will nondeterministically get printed on every reties that transaction do that.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Large Allocations")," \u2014 We should be very careful in choosing the best data structure using for using STM operations. For example, if we use a single data structure with ",(0,o.kt)("inlineCode",{parentName:"p"},"TRef")," and that data structure occupies a big chunk of memory. Every time we are updating this data structure during the transaction, the runtime system needs a fresh copy of this chunk of memory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Running Expensive Operations"),"\u2014 The beautiful feature of the ",(0,o.kt)("inlineCode",{parentName:"p"},"retry")," combinator is when we decide to retry the transaction, the ",(0,o.kt)("inlineCode",{parentName:"p"},"retry")," avoids the busy loop. It waits until any of the underlying transactional variables have changed. However, we should be careful about running expensive operations multiple times."))))}m.isMDXComponent=!0}}]);