"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7193],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,v=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return a?n.createElement(v,l(l({ref:t},m),{},{components:a})):n.createElement(v,l({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1285:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={id:"transactions",title:"DynamoDB Transactions",sidebar_label:"Transactions"},l="DynamoDB Transactions",s={unversionedId:"transactions",id:"transactions",title:"DynamoDB Transactions",description:"Transactions are as simple as calling the .transact method on a DynamoDBQuery. As long as every component of the query is a valid transaction item and the DyanmoDBQuery does not have a mix of get and write transaction items. A list of valid items for both types of queries is listed below.",source:"@site/node_modules/@zio.dev/zio-dynamodb/transactions.md",sourceDirName:".",slug:"/transactions",permalink:"/zio-dynamodb/transactions",draft:!1,tags:[],version:"current",frontMatter:{id:"transactions",title:"DynamoDB Transactions",sidebar_label:"Transactions"},sidebar:"sidebar",previous:{title:"Codec Customization",permalink:"/zio-dynamodb/codec-customization"}},o={},c=[{value:"Examples",id:"examples",level:2},{value:"Write Transactions",id:"write-transactions",level:3},{value:"ReadTransactions",id:"readtransactions",level:3},{value:"Transaction Failures",id:"transaction-failures",level:2},{value:"Valid Transact Write Items",id:"valid-transact-write-items",level:3},{value:"Valid Transact Get Item",id:"valid-transact-get-item",level:3}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dynamodb-transactions"},"DynamoDB Transactions"),(0,r.kt)("p",null,"Transactions are as simple as calling the ",(0,r.kt)("inlineCode",{parentName:"p"},".transact")," method on a ",(0,r.kt)("inlineCode",{parentName:"p"},"DynamoDBQuery"),". As long as every component of the query is a valid transaction item and the ",(0,r.kt)("inlineCode",{parentName:"p"},"DyanmoDBQuery")," does not have a mix of get and write transaction items. A list of valid items for both types of queries is listed below."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"write-transactions"},"Write Transactions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'final case class Bill(studentEmail: String, semesters: Int)\n\nval student = Student("avi@gmail.com", "maths")\nval bill = Bill("avi@gmail.com", 1)\n\nval putStudent = put("student", student)\nval billedStudent = put("billing", bill)\nval deleteFromWaitlist = deleteItem("waitlist", PrimaryKey("email" -> student.email))\n\nval studentEnrollmentTransaction = (putStudent zip billedStudent zip deleteFromWaitlist).transact\n\nfor {\n  _ <- studentEnrollmentTransaction.execute\n} yield ()\n')),(0,r.kt)("h3",{id:"readtransactions"},"ReadTransactions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'final case class EnrolledClass(courseId: String, studentEmail: String)\n\nval avi = Student("avi@gmail.com", "maths")\nval maths101 = EnrolledClass("mth-101", avi.email)\nval maths102 = EnrolledClass("mth-102", avi.email)\n\nval putAvi = put("student", avi)\nval putClasses = put("enrolledClass", maths101) zip put("enrolledClass", maths102)\n\nval enrollAvi = (putAvi zip putClasses).transaction\n')),(0,r.kt)("h2",{id:"transaction-failures"},"Transaction Failures"),(0,r.kt)("p",null,"DynamoDBQueries using the ",(0,r.kt)("inlineCode",{parentName:"p"},".transaction")," method will fail at runtime if there are invalid transaction actions such as creating a table, scanning for items, or querying. The ","[DynamoDB documentation]"," has a limited number of actions that can be performed for either a read or a write transaction. There is a ",(0,r.kt)("inlineCode",{parentName:"p"},".safeTransaction")," method that is also available that will return ",(0,r.kt)("inlineCode",{parentName:"p"},"Either[Throwable, DynamoDBQuery[A]]"),"."),(0,r.kt)("p",null,"There are more examples in our integration tests (",(0,r.kt)("inlineCode",{parentName:"p"},"../dynamodb/src/it/scala/zio/dynamodb/LiveSpec.scala"),")."),(0,r.kt)("h3",{id:"valid-transact-write-items"},"Valid Transact Write Items"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PutItem"),(0,r.kt)("li",{parentName:"ul"},"DeleteItem"),(0,r.kt)("li",{parentName:"ul"},"BatchWriteItem"),(0,r.kt)("li",{parentName:"ul"},"UpdateItem"),(0,r.kt)("li",{parentName:"ul"},"ConditionCheck")),(0,r.kt)("h3",{id:"valid-transact-get-item"},"Valid Transact Get Item"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GetItem"),(0,r.kt)("li",{parentName:"ul"},"BatchGetItem")))}d.isMDXComponent=!0}}]);