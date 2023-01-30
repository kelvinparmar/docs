"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[1656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var s=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=s.createContext({}),d=function(e){var t=s.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return s.createElement(p.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=d(n),m=o,h=l["".concat(p,".").concat(m)]||l[m]||c[m]||r;return n?s.createElement(h,a(a({ref:t},u),{},{components:n})):s.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<r;d++)a[d]=n[d];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4},a="5.4 Node.js support",i={unversionedId:"develop-guide/javascript/nodejs",id:"develop-guide/javascript/nodejs",title:"5.4 Node.js support",description:"Many existing JavaScript apps simply use Node.js built-in APIs. In order to support and reuse these JavaScript apps, we are in the process of implementing many Node.JS APIs for WasmEdge QuickJS. The goal is to have unmodified Node.js programs running in WasmEdge QuickJS.",source:"@site/docs/develop-guide/javascript/nodejs.md",sourceDirName:"develop-guide/javascript",slug:"/develop-guide/javascript/nodejs",permalink:"/book/cn/docs/develop-guide/javascript/nodejs",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop-guide/javascript/nodejs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"developSidebar",previous:{title:"5.3.2 Server",permalink:"/book/cn/docs/develop-guide/javascript/http_service/server"},next:{title:"5.5 ES6 Modules",permalink:"/book/cn/docs/develop-guide/javascript/es6"}},p={},d=[{value:"The JavaScript modules",id:"the-javascript-modules",level:2},{value:"The Rust internal modules",id:"the-rust-internal-modules",level:2}],u={toc:d};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"54-nodejs-support"},"5.4 Node.js support"),(0,o.kt)("p",null,"Many existing JavaScript apps simply use Node.js built-in APIs. In order to support and reuse these JavaScript apps, we are in the process of implementing many Node.JS APIs for WasmEdge QuickJS. The goal is to have unmodified Node.js programs running in WasmEdge QuickJS."),(0,o.kt)("p",null,"In order to use Node.js APIs in WasmEdge, you must make the ",(0,o.kt)("inlineCode",{parentName:"p"},"modules")," directory from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs"},"wasmedge-quickjs")," accessible to the WasmEdge Runtime. The simplest approach is to clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs"},"wasmedge-quickjs")," repo, and run the Node.js app from the repo's top directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/wasmedge-quickjs\ncd wasmedge-quickjs\ncurl -OL https://github.com/second-state/wasmedge-quickjs/releases/download/v0.4.0-alpha/wasmedge_quickjs.wasm\ncp -r /path/to/my_node_app .\nwasmedge --dir .:. wasmedge_quickjs.wasm my_node_app/index.js\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you want to run ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmedge")," from a directory outside of the repo, you will need to tell it where to find the ",(0,o.kt)("inlineCode",{parentName:"p"},"modules")," directory using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--dir")," option. A typical command will look like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmedge --dir .:. --dir ./modules:/path/to/modules wasmedge_quickjs.wasm app.js"))),(0,o.kt)("p",null,"The progress of Node.js support in WasmEdge QuickJS is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/WasmEdge/WasmEdge/issues/1535"},"tracked in this issue"),".")," There are two approaches for supporting Node.js APIs in WasmEdge QuickJS."),(0,o.kt)("h2",{id:"the-javascript-modules"},"The JavaScript modules"),(0,o.kt)("p",null,"Some Node.js functions can be implemented in pure JavaScript using the ",(0,o.kt)("a",{parentName:"p",href:"modules"},"modules")," approach. For example,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/modules/querystring.js"},"querystring")," functions just perform string manipulations."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/modules/buffer.js"},"buffer")," functions manage and encode arrays and memory structures."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/modules/encoding.js"},"encoding")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/modules/http.js"},"http")," functions support corresponding Node.js APIs by wrapping around ",(0,o.kt)("a",{parentName:"li",href:"rust"},"Rust internal modules"),".")),(0,o.kt)("h2",{id:"the-rust-internal-modules"},"The Rust internal modules"),(0,o.kt)("p",null,"Other Node.js functions must be implemented in Rust using the ",(0,o.kt)("a",{parentName:"p",href:"rust"},"internal_module")," approach. There are two reasons for that. First, some Node.js API functions are CPU intensive (e.g., encoding) and is most efficiently implemented in Rust. Second, some Node.js API functions require access to the underlying system (e.g., networking and file system) through native host functions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/src/internal_module/core.rs"},"core")," module provides OS level functions such as ",(0,o.kt)("inlineCode",{parentName:"li"},"timeout"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/src/internal_module/encoding.rs"},"encoding")," module provides high-performance encoding and decoding functions, which are in turn ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/modules/encoding.js"},"wrapped into Node.js encoding APIs"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/src/internal_module/wasi_net_module.rs"},"wasi_net_module")," provides JavaScript networking functions implemented via the Rust-based WasmEdge WASI socket API. It is then wrapped into the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/modules/http.js"},"Node.js http module"),".")),(0,o.kt)("p",null,"Node.js compatibility support in WasmEdge QuickJS is a work in progress. It is a great way for new developers to get familiar with WasmEdge QuickJS. Join us!"))}l.isMDXComponent=!0}}]);