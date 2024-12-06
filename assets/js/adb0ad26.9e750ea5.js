"use strict";(self.webpackChunktilli_docs=self.webpackChunktilli_docs||[]).push([[2530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||a;return n?l.createElement(k,i(i({ref:t},u),{},{components:n})):l.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=n(7462),r=(n(7294),n(3905));const a={id:"Getting-started-developer"},i="Getting Started",o={unversionedId:"Getting-started-developer",id:"Getting-started-developer",title:"Getting Started",description:"Tilli is a web-based application with scala as backend and uses truffle as a tool to compile.",source:"@site/docs/Getting-Started-Developer.md",sourceDirName:".",slug:"/Getting-started-developer",permalink:"/docs/Getting-started-developer",draft:!1,tags:[],version:"current",frontMatter:{id:"Getting-started-developer"},sidebar:"tutorialSidebar",previous:{title:"Types-of-Documentation",permalink:"/docs/Types-of-Documentation"},next:{title:"Introduction",permalink:"/docs/GitHub-Repositories"}},p={},s=[{value:"Pre-requisite",id:"pre-requisite",level:2},{value:"Installing Tilli Server",id:"installing-tilli-server",level:2},{value:"Redis Setup",id:"redis-setup",level:2},{value:"File Setup",id:"file-setup",level:2},{value:"To run locally - using SBT.",id:"to-run-locally---using-sbt",level:2},{value:"Installing Tilli Web App",id:"installing-tilli-web-app",level:2},{value:"1. Configuration :",id:"1-configuration-",level:3},{value:"2. How to run? Yarn/npm/",id:"2-how-to-run-yarnnpm",level:3},{value:"Installing Tilli IDE",id:"installing-tilli-ide",level:2},{value:"1. Configuration :",id:"1-configuration--1",level:3},{value:"2. How to run? Yarn/npm/..",id:"2-how-to-run-yarnnpm-1",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Tilli is a web-based application with scala as backend and uses truffle as a tool to compile.\nIt uses MongoDB as a database for regular non-blockchain data persistence and solidity smart contract to execute transactions on Ethereum blockchain."),(0,r.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,r.kt)("p",null,"To run Tilli in your system please make sure you have the following app and libraries installed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Node-js --version >= 20.0.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Yarn --version >= 1.22.20"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"installing-tilli-server"},"Installing Tilli Server"),(0,r.kt)("p",null,"To set up this software on your machine locally:"),(0,r.kt)("p",null,"Clone this repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tillioss/tilli-backend-server"},"https://github.com/tillioss/tilli-backend-server")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cd tilli-backend-server\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," : Please Install Redis in Your System."),(0,r.kt)("h2",{id:"redis-setup"},"Redis Setup"),(0,r.kt)("p",null,"To stop your redis\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/init.d/redis-server stop")),(0,r.kt)("p",null,"If you need backup your existing data\n",(0,r.kt)("inlineCode",{parentName:"p"},"cd /var/lib/redis/cp dump.rdb dump1.rdb")),(0,r.kt)("p",null,"Replace redis data"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cp tilli-backend-server/data/dump.rdb /var/lib/redis/")),(0,r.kt)("p",null,"Restart your redis\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/init.d/redis-server restart")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"file-setup"},"File Setup"),(0,r.kt)("p",null,"Move and extract data files from ",(0,r.kt)("inlineCode",{parentName:"p"},"tilli-backend-server/data/files.zip")," to ","[your_data_path]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ex :"),(0,r.kt)("inlineCode",{parentName:"p"},"cp tilli-backend-server/data/files.zip [your_data_path]")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"to-run-locally---using-sbt"},"To run locally - using SBT."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'sbt "runMain com.teqbahn.bootstrap.StarterMain local 2553 8093  [ServerIP]  [RedisIP]:[RedisPort] [MailId] [MailPassword] [your_data_path]"')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"local - server running environment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2553 - Akka Port")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"8093 - Attp Port")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"httpHostName : 192.0.0.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[ServerIP]"," - Replace your system IP Address\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Ex : 192.0.0.1 ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[RedisIP]"," - Replace your Redis IP Address\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Ex : 127.0.0.1 ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[RedisPort]"," - Replace your Redis Port\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Ex : 6379 "))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you required send mail, Please configure mail setup otherWise use the dummy values.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[MailId]"," - Replace your mail id\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Ex : ",(0,r.kt)("a",{parentName:"em",href:"mailto:xxxx@xyz.com"},"xxxx@xyz.com")," ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[MailPassword]"," - Replace your password\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Ex : password123 ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[your_data_path]"," - Replace your system filepath\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Ex : /html/tilli "))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Ex : ")),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'sbt "runMain com.teqbahn.bootstrap.StarterMain local 2553 8093  192.1.0.1  127.0.0.1:6379 xxxx@xyz.com password123 /html/tilli"')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"installing-tilli-web-app"},"Installing Tilli Web App"),(0,r.kt)("h3",{id:"1-configuration-"},"1. Configuration :"),(0,r.kt)("p",null,"a. Need to change IP address and Port in config/Myconstant.js :"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ex apiURL :")," ",(0,r.kt)("a",{parentName:"p",href:"http://192.yyy.1.xxx:8093/tilli-api/"},"http://192.yyy.1.xxx:8093/tilli-api/")),(0,r.kt)("h3",{id:"2-how-to-run-yarnnpm"},"2. How to run? Yarn/npm/"),(0,r.kt)("p",null,"a. Use below CMD to install modules :"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install")),(0,r.kt)("p",null,"b. Enter below CMD to start :"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm start")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Running Url :")," http://localhost:3023/tilli-web/"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"installing-tilli-ide"},"Installing Tilli IDE"),(0,r.kt)("h3",{id:"1-configuration--1"},"1. Configuration :"),(0,r.kt)("p",null,"a. Need to change IP address and Port in config/Myconstant.js :"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ex apiURL :")," ",(0,r.kt)("a",{parentName:"p",href:"http://192.yyy.1.xxx:8093/tilli-api/"},"http://192.yyy.1.xxx:8093/tilli-api/")),(0,r.kt)("h3",{id:"2-how-to-run-yarnnpm-1"},"2. How to run? Yarn/npm/.."),(0,r.kt)("p",null,"a. Use below CMD to install modules :"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install")),(0,r.kt)("p",null,"b. Enter below CMD to start :"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm start")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Running Url :")," 'http://localhost:3022/tilli/'"),(0,r.kt)("p",null,"UserName :tilliadmin"),(0,r.kt)("p",null,"Password :tilliadmin"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Last updated:06/12/2024"))}d.isMDXComponent=!0}}]);