"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(d,".").concat(m)]||p[m]||l[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="3.1 WasmEdge-Bindgen Introduction",s={unversionedId:"embed-guide/data/intro",id:"embed-guide/data/intro",title:"3.1 WasmEdge-Bindgen Introduction",description:"Passing complex data like string is difficult for WebAssembly since Wasm does not have a string data type. That's why we have the WasmEdge-Bindgen project. The Wasmedge-Bindgen project provides Rust macros for functions to accept and return complex data types, and then for functions in the host to call such Rust functions running in WasmEdge.",source:"@site/docs/embed-guide/data/intro.md",sourceDirName:"embed-guide/data",slug:"/embed-guide/data/intro",permalink:"/book/zh-Hans/embed-guide/data/intro",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/embed-guide/data/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"embedSidebar",previous:{title:"Passing Complex Data",permalink:"/book/zh-Hans/category/passing-complex-data"},next:{title:"3.2 Rust",permalink:"/book/zh-Hans/embed-guide/data/rust"}},d={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"31-wasmedge-bindgen-introduction"},"3.1 WasmEdge-Bindgen Introduction"),(0,a.kt)("p",null,"Passing complex data like string is difficult for WebAssembly since Wasm does not have a string data type. That's why we have the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-bindgen"},"WasmEdge-Bindgen")," project. The Wasmedge-Bindgen project provides Rust macros for functions to accept and return complex data types, and then for functions in the host to call such Rust functions running in WasmEdge."),(0,a.kt)("p",null,"Now WasmEdge-bindgen supports WasmEdge Go SDK and Rust SDK. We will show you how to pass complex data from GO and Rust host to an embedded Wasm functions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/book/zh-Hans/embed-guide/data/go"},"Passing complex data from WasmEdge Go SDK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/book/zh-Hans/embed-guide/data/rust"},"Passing complex data from WasmEdge Rust SDK"))))}p.isMDXComponent=!0}}]);