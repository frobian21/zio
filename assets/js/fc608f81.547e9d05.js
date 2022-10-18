"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9013],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=c(a),u=n,d=g["".concat(l,".").concat(u)]||g[u]||p[u]||i;return a?r.createElement(d,o(o({ref:t},m),{},{components:a})):r.createElement(d,o({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},20680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={id:"programming-paradigms-in-zio",title:"Programming Paradigms in ZIO"},o=void 0,s={unversionedId:"reference/architecture/programming-paradigms-in-zio",id:"reference/architecture/programming-paradigms-in-zio",title:"Programming Paradigms in ZIO",description:"It is important to realize that the programming paradigm used to write a software system has a significant impact on its design and architecture. In this section, we are going to talk the foundation of ZIO from the programming paradigm perspective:",source:"@site/docs/reference/architecture/programming-paradigm.md",sourceDirName:"reference/architecture",slug:"/reference/architecture/programming-paradigms-in-zio",permalink:"/reference/architecture/programming-paradigms-in-zio",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/architecture/programming-paradigm.md",tags:[],version:"current",frontMatter:{id:"programming-paradigms-in-zio",title:"Programming Paradigms in ZIO"},sidebar:"reference-sidebar",previous:{title:"System",permalink:"/reference/services/system"},next:{title:"Non-functional Requirements",permalink:"/reference/architecture/non-functional-requirements"}},l={},c=[{value:"Functional and Object-Oriented Programming",id:"functional-and-object-oriented-programming",level:2},{value:"Object-Oriented Programming",id:"object-oriented-programming",level:3},{value:"Classes",id:"classes",level:4},{value:"Subtyping",id:"subtyping",level:4},{value:"Interfaces and Polymorphism",id:"interfaces-and-polymorphism",level:4},{value:"Functional Programming",id:"functional-programming",level:3},{value:"Embracing Both Functional and Object-Oriented Programming",id:"embracing-both-functional-and-object-oriented-programming",level:3},{value:"Imperative and Declarative Programming",id:"imperative-and-declarative-programming",level:2},{value:"Structured Programming",id:"structured-programming",level:2},{value:"Aspect Oriented Programming",id:"aspect-oriented-programming",level:2}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It is important to realize that the programming paradigm used to write a software system has a significant impact on its design and architecture. In this section, we are going to talk the foundation of ZIO from the programming paradigm perspective:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Functional and object-oriented programming"),(0,n.kt)("li",{parentName:"ul"},"Imperative and Declarative Programming"),(0,n.kt)("li",{parentName:"ul"},"Structured Programming"),(0,n.kt)("li",{parentName:"ul"},"Aspect-oriented Programming")),(0,n.kt)("h2",{id:"functional-and-object-oriented-programming"},"Functional and Object-Oriented Programming"),(0,n.kt)("p",null,"Every computer program is written in the form of a set of operations and data structures:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A data are nouns in the program, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"Person"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Address"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Order"),", etc. They represent a piece of information, configuration, or state that is used by operations."),(0,n.kt)("li",{parentName:"ul"},"Operations are verbs, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"createOrder"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"updateOrder"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"deleteOrder"),", and etc. They are methods or functions that operate on data.")),(0,n.kt)("p",null,"The way we organize these two elements in our program determines the programming paradigm we use; object-oriented programming (OOP) or functional programming (FP)."),(0,n.kt)("h3",{id:"object-oriented-programming"},"Object-Oriented Programming"),(0,n.kt)("p",null,"In object-oriented programming, we organize our program by bundling related data and operations into a single unit called an object. Each object has its own state and behavior. This is the fundamental construct of object-oriented programming. All other constructs like classes, interfaces, inheritances, subtyping are built around this concept."),(0,n.kt)("p",null,"Therefore, the object is the only option we have in object-oriented programming to organize our programs. We have only one hammer for all classes of design problems."),(0,n.kt)("p",null,"So, we can say that the most important result of object-oriented programming is modularity. We can package related data and operations into a single unit and reuse them in other parts of our program."),(0,n.kt)("h4",{id:"classes"},"Classes"),(0,n.kt)("p",null,'In statical-typed object-oriented programming, we can define a "category" of objects by using a class. A class is a blueprint that defines the structure of all objects in that category. A class is basically define the whole class of objects that all have similarities.'),(0,n.kt)("p",null,"We can create an instance of a class by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"new")," keyword. This instance is called an object."),(0,n.kt)("h4",{id:"subtyping"},"Subtyping"),(0,n.kt)("p",null,"Another great feature of object-oriented programming is sub-typing. We can define a new class that inherits from an existing class. This new class is called a sub-class or a child class, and the existing class is called a super-class or a parent class. Using sub-typing, we can define a whole class of objects and then classify it into sub-classes."),(0,n.kt)("h4",{id:"interfaces-and-polymorphism"},"Interfaces and Polymorphism"),(0,n.kt)("p",null,"In object-oriented programming, we can also define an interface. An interface is a contract that defines the behavior that is shared by all classes that implement that interface."),(0,n.kt)("p",null,"Using interfaces, we can achieve polymorphism when writing services. For example, we can define a ",(0,n.kt)("inlineCode",{parentName:"p"},"Logger")," interface that defines the ",(0,n.kt)("inlineCode",{parentName:"p"},"log")," method. Then we can define a ",(0,n.kt)("inlineCode",{parentName:"p"},"ConsoleLogger"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"FileLogger"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"JsonLogger")," that all implement the same ",(0,n.kt)("inlineCode",{parentName:"p"},"Logger")," interface. This way, we can use the same ",(0,n.kt)("inlineCode",{parentName:"p"},"Logger")," interface to inject different implementations of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Logger")," interface into our services."),(0,n.kt)("h3",{id:"functional-programming"},"Functional Programming"),(0,n.kt)("p",null,"In the previous section, we discussed object-oriented programming and saw that the object is the basis of object-oriented programming. Let's talk about functional programming now and see what its basis is."),(0,n.kt)("p",null,"A functional program is modeled as a set of mathematical functions. By mathematical functions, we mean those that take an immutable input and produce an immutable output while having referential transparency."),(0,n.kt)("p",null,"Functions are the basis of FP, and the basis of functions is the lambda. Lambdas are functions that can be passed as arguments to other functions or returned as results. So we can say that the lambda is a fancy term for first-class functions (functions as values)."),(0,n.kt)("p",null,"In contrast to object-oriented programming, functional programming separates data and operations into two different worlds. Data is immutable, and operations are pure functions. This separation of data and operations is the fundamental philosophy of functional programming."),(0,n.kt)("p",null,"In FP, we have only two building blocks to model our programs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data (Algebraic data types)"),(0,n.kt)("li",{parentName:"ul"},"Operations (Functions)")),(0,n.kt)("p",null,'We describe our data (input and output) using constructs called "algebraic data types" which for Scala programmers means ',(0,n.kt)("em",{parentName:"p"},"sealed traits")," (or enums) and \u0640case classes\u0640. So there is two building blocks for describing data in FP. To describe operations, we have functions."),(0,n.kt)("p",null,"Separation of data and operations is the fundamental concept of functional programming. In contrast to object-oriented programming, we have no tools for abstraction, modularity, interfaces, and polymorphism."),(0,n.kt)("h3",{id:"embracing-both-functional-and-object-oriented-programming"},"Embracing Both Functional and Object-Oriented Programming"),(0,n.kt)("p",null,"ZIO is a functional programming library which also brings the power of object-oriented programming into the functional world. It tries to combine the best of both worlds."),(0,n.kt)("p",null,"We use FP to achieve ",(0,n.kt)("strong",{parentName:"p"},"code maintainability")," and OOP to achieve ",(0,n.kt)("strong",{parentName:"p"},"code organization"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Functional programming gives us the following tools in terms of ",(0,n.kt)("strong",{parentName:"p"},"code maintainability"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Data Modeling")," using Algebraic Data Types"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Functional Design")," using functions to create Domain Specific Languages (DSLs)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Composability")," using Pure and Referentially Transparent Functions"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Object-oriented programming gives us the following tools in terms of ",(0,n.kt)("strong",{parentName:"p"},"code organization"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Methods")," which help us to operate on a specific data attached to an object"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Constructors")," which help us to create a new instance of a data type"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Modules")," which allows us to bundle together related operations into a single unit")))),(0,n.kt)("p",null,"So, we leverage the power of both FP and OOP to build a better software system in ZIO."),(0,n.kt)("h2",{id:"imperative-and-declarative-programming"},"Imperative and Declarative Programming"),(0,n.kt)("p",null,"Another important aspect of programming paradigms is the difference between imperative and declarative programming."),(0,n.kt)("p",null,'In imperative programming, we describe the steps ("How") the computer should take to solve a problem. In declarative programming, we describe the problem itself ("What") and let the computer figure out the steps to solve it.'),(0,n.kt)("p",null,"Although ZIO has a declarative API in terms of a functional effect model \u2014the ZIO runtime interprets the program as a set of effects and decides what steps to take to execute it\u2014, it is imperative in comparison to other libraries like ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/TomasMikula/libretto"},"Libretto"),"."),(0,n.kt)("h2",{id:"structured-programming"},"Structured Programming"),(0,n.kt)("p",null,"The idea of structured concurrency is based on the structured programming paradigm. So, let's talk about structured programming first."),(0,n.kt)("p",null,"In the early days of programming, we used to write programs in a linear manner. Program were composed of a series of instructions that executed one by one. Using goto statements, we could jump to any part of the program and change its execution flow. This was the first programming paradigm called procedural programming. Writing programs in such a linear fashion was error-prone and hard to maintain. Such a program was also complicated to read, understand, and reason about."),(0,n.kt)("p",null,'Structured programming paradigms were introduced to solve this problem. Structured programming uses control structures like "if-then-else" to make the program flow more logical. Without these control structures, we cannot jump to any part of the program.'),(0,n.kt)("p",null,'In structured programming, we use control structures to organize our code into blocks. These blocks are called "structured blocks" and are the building blocks of structured programming.'),(0,n.kt)("p",null,"A structured control flow makes nested blocks of code with clear boundaries. Each new block of code has its own scope where all objects defined in that block are only visible inside that block. As a result, objects are bound to their enclosing blocks for their lifetime. Having clear scopes and lifetimes of objects make it easier to understand the control flow of the program."),(0,n.kt)("p",null,"ZIO embraces the structured programming into the next level by using this paradigm in other areas of programming such as ",(0,n.kt)("a",{parentName:"p",href:"/reference/fiber/#structured-concurrency"},"structured concurrency"),", ",(0,n.kt)("a",{parentName:"p",href:"/reference/resource/scope"},"scope based resource management"),", and also regional interruption model."),(0,n.kt)("h2",{id:"aspect-oriented-programming"},"Aspect Oriented Programming"),(0,n.kt)("p",null,"Aspect Oriented Programming (AOP) is a programming paradigm that allows us to separate cross-cutting concerns from the main program logic. Cross-cutting concerns are those that are not directly related to the main program logic but are still important to the program. Examples of cross-cutting concerns are logging, tracing, metrics, and security."),(0,n.kt)("p",null,"ZIO embraces AOP by providing ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIOAspect"),' in the "core" and ',(0,n.kt)("inlineCode",{parentName:"p"},"TestAspect"),' in the "test" module. Using these two data types, we can write aspects that can be applied to any ZIO effect or test.'))}p.isMDXComponent=!0}}]);