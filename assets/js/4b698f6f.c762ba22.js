"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3122],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),p=s,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||r;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:s,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2243:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(7462),s=(a(7294),a(3905));const r={sidebar_position:1},o="4.5.1 TensorFlow",i={unversionedId:"develop-guide/rust/ai_inference/tensorflow",id:"develop-guide/rust/ai_inference/tensorflow",title:"4.5.1 TensorFlow",description:"AI inference is a computationally intensive task that could benefit greatly from the speed of Rust and WebAssembly. However, the standard WebAssembly sandbox provides very limited access to the native OS and hardware, such as multi-core CPUs, GPU and specialized AI inference chips. It is not ideal for the AI workload.",source:"@site/docs/develop-guide/rust/ai_inference/tensorflow.md",sourceDirName:"develop-guide/rust/ai_inference",slug:"/develop-guide/rust/ai_inference/tensorflow",permalink:"/book/docs/develop-guide/rust/ai_inference/tensorflow",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop-guide/rust/ai_inference/tensorflow.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"4.5 AI Inference",permalink:"/book/docs/category/45-ai-inference"},next:{title:"4.5.2 Pytorch",permalink:"/book/docs/develop-guide/rust/ai_inference/pytorch"}},l={},u=[{value:"Build",id:"build",level:3},{value:"Run",id:"run",level:3},{value:"Make it run faster",id:"make-it-run-faster",level:3},{value:"Code explanation",id:"code-explanation",level:3},{value:"Deployment options",id:"deployment-options",level:2},{value:"Serverless functions",id:"serverless-functions",level:3},{value:"Second Sate FaaS and Node.js",id:"second-sate-faas-and-nodejs",level:3},{value:"Service mesh",id:"service-mesh",level:3},{value:"Data streaming framework",id:"data-streaming-framework",level:3}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"451-tensorflow"},"4.5.1 TensorFlow"),(0,s.kt)("p",null,"AI inference is a computationally intensive task that could benefit greatly from the speed of Rust and WebAssembly. However, the standard WebAssembly sandbox provides very limited access to the native OS and hardware, such as multi-core CPUs, GPU and specialized AI inference chips. It is not ideal for the AI workload."),(0,s.kt)("p",null,"The popular WebAssembly System Interface (WASI) provides a design pattern for sandboxed WebAssembly programs to securely access native host functions. The WasmEdge Runtime extends the WASI model to support access to native Tensorflow libraries from WebAssembly programs. The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge_tensorflow_interface"},"WasmEdge Tensorflow Rust SDK")," provides the security, portability, and ease-of-use of WebAssembly and native speed for Tensorflow."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If you are not familiar with Rust, you can try our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasm-learning/tree/master/cli/classify_yml"},"experimental AI inference DSL")," or try our ","[JavaScript examples]",".")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Before we started, make sure ",(0,s.kt)("a",{parentName:"p",href:"../../rust/setup"},"you have Rust, WasmEdge and TensorFlow Extension installed"),".")),(0,s.kt)("h3",{id:"build"},"Build"),(0,s.kt)("p",null,"Check out the example source code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/second-state/wasm-learning/\ncd cli/tflite\n")),(0,s.kt)("p",null,"Use Rust ",(0,s.kt)("inlineCode",{parentName:"p"},"Cargo")," to build the WebAssembly target."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --target wasm32-wasi --release\n")),(0,s.kt)("h3",{id:"run"},"Run"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"wasmedge-tensorflow-lite")," utility is the WasmEdge build that includes the Tensorflow and Tensorflow Lite extensions."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge-tensorflow-lite target/wasm32-wasi/release/classify.wasm < grace_hopper.jpg\nIt is very likely a <a href='https://www.google.com/search?q=military uniform'>military uniform</a> in the picture\n")),(0,s.kt)("h3",{id:"make-it-run-faster"},"Make it run faster"),(0,s.kt)("p",null,"To make Tensorflow inference run ",(0,s.kt)("em",{parentName:"p"},"much")," faster, you could AOT compile it down to machine native code, and then use WasmEdge sandbox to run the native code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedgec target/wasm32-wasi/release/classify.wasm classify.wasm\n$ wasmedge-tensorflow-lite classify.wasm < grace_hopper.jpg\nIt is very likely a <a href='https://www.google.com/search?q=military uniform'>military uniform</a> in the picture\n")),(0,s.kt)("h3",{id:"code-explanation"},"Code explanation"),(0,s.kt)("p",null,"It is fairly straightforward to use the WasmEdge Tensorflow API. You can see the entire source code in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasm-learning/blob/master/cli/tflite/src/main.rs"},"main.rs"),"."),(0,s.kt)("p",null,"First, it reads the trained TFLite model file (ImageNet) and its label file. The label file maps numeric output from the model to English names for the classified objects."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'  let model_data: &[u8] = include_bytes!("models/mobilenet_v1_1.0_224/mobilenet_v1_1.0_224_quant.tflite");\n  let labels = include_str!("models/mobilenet_v1_1.0_224/labels_mobilenet_quant_v1_224.txt");\n')),(0,s.kt)("p",null,"Next, it reads the image from ",(0,s.kt)("inlineCode",{parentName:"p"},"STDIN")," and converts it to the size and RGB pixel arrangement required by the Tensorflow Lite model."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"  let mut buf = Vec::new();\n  io::stdin().read_to_end(&mut buf).unwrap();\n\n  let flat_img = wasmedge_tensorflow_interface::load_jpg_image_to_rgb8(&buf, 224, 224);\n")),(0,s.kt)("p",null,"Then, the program runs the TFLite model with its required input tensor (i.e., the flat image in this case), and receives the model output. In this case, the model output is an array of numbers. Each number corresponds to the probability of an object name in the label text file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'  let mut session = wasmedge_tensorflow_interface::Session::new(&model_data, wasmedge_tensorflow_interface::ModelType::TensorFlowLite);\n  session.add_input("input", &flat_img, &[1, 224, 224, 3])\n         .run();\n  let res_vec: Vec<u8> = session.get_output("MobilenetV1/Predictions/Reshape_1");\n')),(0,s.kt)("p",null,"Let's find the object with the highest probability, and then look up the name in the labels file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"  let mut i = 0;\n  let mut max_index: i32 = -1;\n  let mut max_value: u8 = 0;\n  while i < res_vec.len() {\n    let cur = res_vec[i];\n    if cur > max_value {\n      max_value = cur;\n      max_index = i as i32;\n    }\n    i += 1;\n  }\n\n  let mut label_lines = labels.lines();\n  for _i in 0..max_index {\n    label_lines.next();\n  }\n")),(0,s.kt)("p",null,"Finally, it prints the result to ",(0,s.kt)("inlineCode",{parentName:"p"},"STDOUT"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'  let class_name = label_lines.next().unwrap().to_string();\n  if max_value > 50 {\n    println!("It {} a <a href=\'https://www.google.com/search?q={}\'>{}</a> in the picture", confidence.to_string(), class_name, class_name);\n  } else {\n    println!("It does not appears to be any food item in the picture.");\n  }\n')),(0,s.kt)("h2",{id:"deployment-options"},"Deployment options"),(0,s.kt)("p",null,"All the tutorials below use the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge_tensorflow_interface"},"WasmEdge Rust API for Tensorflow")," to create AI inference functions. Those Rust functions are then compiled to WebAssembly and deployed together with WasmEdge on the cloud."),(0,s.kt)("h3",{id:"serverless-functions"},"Serverless functions"),(0,s.kt)("p",null,"The following tutorials showcase how to deploy WebAssembly programs (written in Rust) on public cloud serverless platforms. The WasmEdge Runtime runs inside a Docker container on those platforms. Each serverless platform provides APIs to get data into and out of the WasmEdge runtime through STDIN and STDOUT."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.secondstate.io/articles/vercel-wasmedge-webassembly-rust/"},"Vercel Serverless Functions")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.secondstate.io/articles/netlify-wasmedge-webassembly-rust-serverless/"},"Netlify Functions")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/aws-lambda-wasm-runtime"},"AWS Lambda")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/tencent-scf-wasm-runtime"},"Tencent Serverless Functions")," (in Chinese)")),(0,s.kt)("h3",{id:"second-sate-faas-and-nodejs"},"Second Sate FaaS and Node.js"),(0,s.kt)("p",null,"The following tutorials showcase how to deploy WebAssembly functions (written in Rust) on the Second State FaaS. Since the FaaS service is running on Node.js, you can follow the same tutorials for running those functions in your own Node.js server."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.secondstate.io/articles/faas-image-classification/"},"Tensorflow: Image classification using the MobileNet models")," | ",(0,s.kt)("a",{parentName:"li",href:"https://second-state.github.io/wasm-learning/faas/mobilenet/html/index.html"},"Live demo")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.secondstate.io/articles/faas-face-detection/"},"Tensorflow: Face detection using the MTCNN models")," | ",(0,s.kt)("a",{parentName:"li",href:"https://second-state.github.io/wasm-learning/faas/mtcnn/html/index.html"},"Live demo"))),(0,s.kt)("h3",{id:"service-mesh"},"Service mesh"),(0,s.kt)("p",null,"The following tutorials showcase how to deploy WebAssembly functions and programs (written in Rust) as sidecar microservices."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/dapr-wasm"},"The Dapr template")," shows how to build and deploy Dapr sidecars in Go and Rust languages. The sidecars then use the WasmEdge SDK to start WebAssembly programs to process workloads to the microservices.")),(0,s.kt)("h3",{id:"data-streaming-framework"},"Data streaming framework"),(0,s.kt)("p",null,"The following tutorials showcase how to deploy WebAssembly functions (written in Rust) as embedded handler functions in data streaming frameworks for AIoT."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.secondstate.io/articles/yomo-wasmedge-real-time-data-streams/"},"The YoMo template")," starts the WasmEdge Runtime to process image data as the data streams in from a camera in a smart factory.")))}m.isMDXComponent=!0}}]);