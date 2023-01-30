"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="8.3 Podman",l={unversionedId:"develop-guide/deploy/podman",id:"develop-guide/deploy/podman",title:"8.3 Podman",description:"Fedora Platform",source:"@site/docs/develop-guide/deploy/podman.md",sourceDirName:"develop-guide/deploy",slug:"/develop-guide/deploy/podman",permalink:"/book/cn/docs/develop-guide/deploy/podman",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop-guide/deploy/podman.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"developSidebar",previous:{title:"8.2 Docker + Wasm",permalink:"/book/cn/docs/develop-guide/deploy/docker"},next:{title:"8.4 Kubernetes",permalink:"/book/cn/docs/develop-guide/deploy/kubernetes"}},p={},s=[{value:"Fedora Platform",id:"fedora-platform",level:2},{value:"Install podman and WasmEdge",id:"install-podman-and-wasmedge",level:3},{value:"Run A simple WASI app",id:"run-a-simple-wasi-app",level:3},{value:"Other Linux distributions",id:"other-linux-distributions",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Run A simple WASI app",id:"run-a-simple-wasi-app-1",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"83-podman"},"8.3 Podman"),(0,r.kt)("h2",{id:"fedora-platform"},"Fedora Platform"),(0,r.kt)("p",null,"The easiest platform to run Wasm app with container is Fedora, because the crun fedora package has supported WasmEdge as a default runtime. We don't need to make any changes to run WasmEdge apps on fedora platform. If you use other Linux distributions, go to ",(0,r.kt)("a",{parentName:"p",href:"#other-linux-distributions"},"next section"),"."),(0,r.kt)("h3",{id:"install-podman-and-wasmedge"},"Install podman and WasmEdge"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo dnf -y install podman\nsudo dnf -y install wasmedge\n")),(0,r.kt)("h3",{id:"run-a-simple-wasi-app"},"Run A simple WASI app"),(0,r.kt)("p",null,"Now, we could run wasm apps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," podman run --rm --annotation module.wasm.image/variant=compat-smart docker.io/wasmedge/example-wasi:latest /wasi_example_main.wasm 50000000\n")),(0,r.kt)("p",null,"That's it."),(0,r.kt)("h2",{id:"other-linux-distributions"},"Other Linux distributions"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install and configure Podman ")),(0,r.kt)("p",null,"Use the following commands to install podman on your system. Here I use Ubuntu as an example. For more different types of podman, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://podman.io/getting-started/installation"},"Podman's installation instruction"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get -y update\nsudo apt-get -y install podman\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../build-and-run/install"},"Install WasmEdge"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build and configure crun with WasmEdge support"))),(0,r.kt)("p",null,"Next, configure and build a ",(0,r.kt)("inlineCode",{parentName:"p"},"crun")," binary with WasmEdge support."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./autogen.sh\n./configure --with-wasmedge\nmake\nsudo make install\n# replace crun (be careful, you may want to do a bakup first)\nmv crun $(which crun)\n")),(0,r.kt)("p",null,"Then, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"crun -v")," to check out if crun is installed successfully."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"crun --version\n#output\ncrun version 1.7.2.0.0.0.26-51af\ncommit: 51af1448f60b69326cf26e726e14b38fcb253943\nrundir: /run/user/0/crun\nspec: 1.0.0\n+SYSTEMD +SELINUX +APPARMOR +CAP +SECCOMP +EBPF +WASM:wasmedge +YAJL\n")),(0,r.kt)("h3",{id:"run-a-simple-wasi-app-1"},"Run A simple WASI app"),(0,r.kt)("p",null," Now, we could run wasm apps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," podman run --rm --annotation module.wasm.image/variant=compat-smart docker.io/wasmedge/example-wasi:latest /wasi_example_main.wasm 50000000\n")),(0,r.kt)("p",null,"For more information, you could refered to ",(0,r.kt)("a",{parentName:"p",href:"../deploy/oci-runtime/crun"},"crun")," chapter."),(0,r.kt)("p",null,"There is a great open source project introducing podman and Wasm from community called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KWasm/podman-wasm"},"Kwasm"),". Check it out!"))}d.isMDXComponent=!0}}]);