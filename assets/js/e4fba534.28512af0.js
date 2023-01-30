"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[4130],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),l=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(d.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(t),m=o,g=c["".concat(d,".").concat(m)]||c[m]||p[m]||s;return t?a.createElement(g,r(r({ref:n},u),{},{components:t})):a.createElement(g,r({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=m;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const s={sidebar_position:3},r="8.6.3 KubeEdge",i={unversionedId:"develop-guide/deploy/use-case/kubedge",id:"develop-guide/deploy/use-case/kubedge",title:"8.6.3 KubeEdge",description:"KubeEdge is an open source system for extending native containerized application orchestration capabilities to hosts at Edge.",source:"@site/docs/develop-guide/deploy/use-case/kubedge.md",sourceDirName:"develop-guide/deploy/use-case",slug:"/develop-guide/deploy/use-case/kubedge",permalink:"/book/docs/develop-guide/deploy/use-case/kubedge",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop-guide/deploy/use-case/kubedge.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"developSidebar",previous:{title:"8.6.2 SuperEdge",permalink:"/book/docs/develop-guide/deploy/use-case/superedge"},next:{title:"8.6.4 Podman",permalink:"/book/docs/develop-guide/deploy/use-case/podman"}},d={},l=[{value:"1. Setup Cloud Side (KubeEdge Master Node)",id:"1-setup-cloud-side-kubeedge-master-node",level:2},{value:"Install Go",id:"install-go",level:3},{value:"Install CRI-O",id:"install-cri-o",level:3},{value:"Install and Creating a cluster with kubeadm for K8s",id:"install-and-creating-a-cluster-with-kubeadm-for-k8s",level:3},{value:"Install K8s",id:"install-k8s",level:4},{value:"Create a cluster with kubeadm",id:"create-a-cluster-with-kubeadm",level:4},{value:"Setup KubeEdge Master Node",id:"setup-kubeedge-master-node",level:3},{value:"2. Setup Edge Side (KubeEdge Worker Node)",id:"2-setup-edge-side-kubeedge-worker-node",level:2},{value:"Install Go on Edge Side",id:"install-go-on-edge-side",level:3},{value:"Get Token From Cloud Side",id:"get-token-from-cloud-side",level:3},{value:"Download KubeEdge and join edge nodes",id:"download-kubeedge-and-join-edge-nodes",level:3},{value:"Get Edge Node Status From Cloud Side",id:"get-edge-node-status-from-cloud-side",level:3},{value:"3. Enable kubectl logs Feature",id:"3-enable-kubectl-logs-feature",level:2},{value:"4. Run a simple WebAssembly app",id:"4-run-a-simple-webassembly-app",level:2},{value:"Cloud Side",id:"cloud-side",level:3},{value:"Edge Side",id:"edge-side",level:3},{value:"5. Demo Run Screen Recording",id:"5-demo-run-screen-recording",level:2}],u={toc:l};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"863-kubeedge"},"8.6.3 KubeEdge"),(0,o.kt)("p",null,"KubeEdge is an open source system for extending native containerized application orchestration capabilities to hosts at Edge. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This demo is based on ",(0,o.kt)("a",{parentName:"p",href:"../../deploy/oci-runtime/crun"},"crun's support"))),(0,o.kt)("h2",{id:"1-setup-cloud-side-kubeedge-master-node"},"1. Setup Cloud Side (KubeEdge Master Node)"),(0,o.kt)("h3",{id:"install-go"},"Install Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ wget https://golang.org/dl/go1.17.3.linux-amd64.tar.gz\n$ tar xzvf go1.17.3.linux-amd64.tar.gz\n\n$ export PATH=/home/${user}/go/bin:$PATH\n$ go version\ngo version go1.17.3 linux/amd64\n")),(0,o.kt)("h3",{id:"install-cri-o"},"Install CRI-O"),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cri-o/cri-o/blob/main/install.md#install-packaged-versions-of-cri-o"},"CRI-O Installation Instructions"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Create the .conf file to load the modules at bootup\ncat <<EOF | sudo tee /etc/modules-load.d/crio.conf\noverlay\nbr_netfilter\nEOF\n\nsudo modprobe overlay\nsudo modprobe br_netfilter\n\n# Set up required sysctl params, these persist across reboots.\ncat <<EOF | sudo tee /etc/sysctl.d/99-kubernetes-cri.conf\nnet.bridge.bridge-nf-call-iptables  = 1\nnet.ipv4.ip_forward                 = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nEOF\n\nsudo sysctl --system\nexport OS="xUbuntu_20.04"\nexport VERSION="1.21"\ncat <<EOF | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list\ndeb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/ /\nEOF\ncat <<EOF | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable:cri-o:$VERSION.list\ndeb http://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/$VERSION/$OS/ /\nEOF\n\ncurl -L https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/Release.key | sudo apt-key --keyring /etc/apt/trusted.gpg.d/libcontainers.gpg add -\ncurl -L https://download.opensuse.org/repositories/devel:kubic:libcontainers:stable:cri-o:$VERSION/$OS/Release.key | sudo apt-key --keyring /etc/apt/trusted.gpg.d/libcontainers-cri-o.gpg add -\n\nsudo apt-get update\nsudo apt-get install cri-o cri-o-runc\n\nsudo systemctl daemon-reload\nsudo systemctl enable crio --now\nsudo systemctl status cri-o\n')),(0,o.kt)("p",null,"output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo systemctl status cri-o\n\u25cf crio.service - Container Runtime Interface for OCI (CRI-O)\n     Loaded: loaded (/lib/systemd/system/crio.service; enabled; vendor preset: enabled)\n     Active: active (running) since Mon 2021-12-06 13:46:29 UTC; 16h ago\n       Docs: https://github.com/cri-o/cri-o\n   Main PID: 6868 (crio)\n      Tasks: 14\n     Memory: 133.2M\n     CGroup: /system.slice/crio.service\n             \u2514\u25006868 /usr/bin/crio\n\nDec 07 06:04:13 master crio[6868]: time="2021-12-07 06:04:13.694226800Z" level=info msg="Checking image status: k8s.gcr.io/pause:3.4.1" id=1dbb722e-f031-410c-9f45-5d4b5760163e name=/runtime.v1alpha2.ImageServic>\nDec 07 06:04:13 master crio[6868]: time="2021-12-07 06:04:13.695739507Z" level=info msg="Image status: &{0xc00047fdc0 map[]}" id=1dbb722e-f031-410c-9f45-5d4b5760163e name=/runtime.v1alpha2.ImageService/ImageSta>\nDec 07 06:09:13 master crio[6868]: time="2021-12-07 06:09:13.698823984Z" level=info msg="Checking image status: k8s.gcr.io/pause:3.4.1" id=661b754b-48a4-401b-a03f-7f7a553c7eb6 name=/runtime.v1alpha2.ImageServic>\nDec 07 06:09:13 master crio[6868]: time="2021-12-07 06:09:13.703259157Z" level=info msg="Image status: &{0xc0004d98f0 map[]}" id=661b754b-48a4-401b-a03f-7f7a553c7eb6 name=/runtime.v1alpha2.ImageService/ImageSta>\nDec 07 06:14:13 master crio[6868]: time="2021-12-07 06:14:13.707778419Z" level=info msg="Checking image status: k8s.gcr.io/pause:3.4.1" id=8c7e4d36-871a-452e-ab55-707053604077 name=/runtime.v1alpha2.ImageServic>\nDec 07 06:14:13 master crio[6868]: time="2021-12-07 06:14:13.709379469Z" level=info msg="Image status: &{0xc000035030 map[]}" id=8c7e4d36-871a-452e-ab55-707053604077 name=/runtime.v1alpha2.ImageService/ImageSta>\nDec 07 06:19:13 master crio[6868]: time="2021-12-07 06:19:13.713158978Z" level=info msg="Checking image status: k8s.gcr.io/pause:3.4.1" id=827b6315-f145-4f76-b8da-31653d5892a2 name=/runtime.v1alpha2.ImageServic>\nDec 07 06:19:13 master crio[6868]: time="2021-12-07 06:19:13.714030148Z" level=info msg="Image status: &{0xc000162bd0 map[]}" id=827b6315-f145-4f76-b8da-31653d5892a2 name=/runtime.v1alpha2.ImageService/ImageSta>\nDec 07 06:24:13 master crio[6868]: time="2021-12-07 06:24:13.716746612Z" level=info msg="Checking image status: k8s.gcr.io/pause:3.4.1" id=1d53a917-4d98-4723-9ea8-a2951a472cff name=/runtime.v1alpha2.ImageServic>\nDec 07 06:24:13 master crio[6868]: time="2021-12-07 06:24:13.717381882Z" level=info msg="Image status: &{0xc00042ce00 map[]}" id=1d53a917-4d98-4723-9ea8-a2951a472cff name=/runtime.v1alpha2.ImageService/ImageSta>\n')),(0,o.kt)("h3",{id:"install-and-creating-a-cluster-with-kubeadm-for-k8s"},"Install and Creating a cluster with kubeadm for K8s"),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"},"Creating a cluster with kubeadm"),"."),(0,o.kt)("h4",{id:"install-k8s"},"Install K8s"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get update\nsudo apt-get install -y apt-transport-https curl\necho "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list\n\nsudo apt update\nK_VER="1.21.0-00"\nsudo apt install -y kubelet=${K_VER} kubectl=${K_VER} kubeadm=${K_VER}\nsudo apt-mark hold kubelet kubeadm kubectl\n')),(0,o.kt)("h4",{id:"create-a-cluster-with-kubeadm"},"Create a cluster with kubeadm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#kubernetes scheduler requires this setting to be done.\n$ sudo swapoff -a\n$ sudo vim /etc/fstab\nmark contain swapfile of row\n\n$ cat /etc/cni/net.d/100-crio-bridge.conf\n{\n    "cniVersion": "0.3.1",\n    "name": "crio",\n    "type": "bridge",\n    "bridge": "cni0",\n    "isGateway": true,\n    "ipMasq": true,\n    "hairpinMode": true,\n    "ipam": {\n        "type": "host-local",\n        "routes": [\n            { "dst": "0.0.0.0/0" },\n            { "dst": "1100:200::1/24" }\n        ],\n        "ranges": [\n            [{ "subnet": "10.85.0.0/16" }],\n            [{ "subnet": "1100:200::/24" }]\n        ]\n    }\n}\n$ export CIDR=10.85.0.0/16\n$ sudo kubeadm init --apiserver-advertise-address=192.168.122.160 --pod-network-cidr=$CIDR --cri-socket=/var/run/crio/crio.sock\n\n$ mkdir -p $HOME/.kube\n$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n$ sudo chown $(id -u):$(id -g) $HOME/.kube/config\n')),(0,o.kt)("p",null,"output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Your Kubernetes control-plane has initialized successfully!\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config\n\nYou should now deploy a Pod network to the cluster.\nRun "kubectl apply -f [podnetwork].yaml" with one of the options listed at:\n  /docs/concepts/cluster-administration/addons/\n\nYou can now join any number of machines by running the following on each node\nas root:\n\n  kubeadm join <control-plane-host>:<control-plane-port> --token <token> --discovery-token-ca-cert-hash sha256:<hash>\n')),(0,o.kt)("p",null,"To make kubectl work for your non-root user, run these commands, which are also part of the kubeadm init output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $HOME/.kube\nsudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\nsudo chown $(id -u):$(id -g) $HOME/.kube/config\n")),(0,o.kt)("h3",{id:"setup-kubeedge-master-node"},"Setup KubeEdge Master Node"),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"https://kubeedge.io/en/docs/setup/keadm/"},"Deploying using Keadm"),"."),(0,o.kt)("p",null,"IMPORTANT NOTE:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"At least one of kubeconfig or master must be configured correctly, so that it can be used to verify the version and other info of the k8s cluster."),(0,o.kt)("li",{parentName:"ol"},"Please make sure edge node can connect cloud node using local IP of cloud node, or you need to specify public IP of cloud node with --advertise-address flag."),(0,o.kt)("li",{parentName:"ol"},"--advertise-address(only work since 1.3 release) is the address exposed by the cloud side (will be added to the SANs of the CloudCore certificate), the default value is the local IP.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/kubeedge/kubeedge/releases/download/v1.8.0/keadm-v1.8.0-linux-amd64.tar.gz\ntar xzvf keadm-v1.8.0-linux-amd64.tar.gz\ncd keadm-v1.8.0-linux-amd64/keadm/\nsudo ./keadm init --advertise-address=192.168.122.160 --kube-config=/home/${user}/.kube/config\n")),(0,o.kt)("p",null,"output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Kubernetes version verification passed, KubeEdge installation will start...\n...\nKubeEdge cloudcore is running, For logs visit:  /var/log/kubeedge/cloudcore.log\n")),(0,o.kt)("h2",{id:"2-setup-edge-side-kubeedge-worker-node"},"2. Setup Edge Side (KubeEdge Worker Node)"),(0,o.kt)("p",null,"You can use the CRI-O ","[install.sh]"," script to install CRI-O and ",(0,o.kt)("inlineCode",{parentName:"p"},"crun")," on Ubuntu 20.04."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/second-state/wasmedge-containers-examples/main/crio/install.sh | bash\n")),(0,o.kt)("h3",{id:"install-go-on-edge-side"},"Install Go on Edge Side"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ wget https://golang.org/dl/go1.17.3.linux-amd64.tar.gz\n$ tar xzvf go1.17.3.linux-amd64.tar.gz\n\n$ export PATH=/home/${user}/go/bin:$PATH\n$ go version\ngo version go1.17.3 linux/amd64\n")),(0,o.kt)("h3",{id:"get-token-from-cloud-side"},"Get Token From Cloud Side"),(0,o.kt)("p",null,"Run keadm gettoken in cloud side will return the token, which will be used when joining edge nodes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo ./keadm gettoken --kube-config=/home/${user}/.kube/config\n27a37ef16159f7d3be8fae95d588b79b3adaaf92727b72659eb89758c66ffda2.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTAyMTYwNzd9.JBj8LLYWXwbbvHKffJBpPd5CyxqapRQYDIXtFZErgYE\n")),(0,o.kt)("h3",{id:"download-kubeedge-and-join-edge-nodes"},"Download KubeEdge and join edge nodes"),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"https://kubeedge.io/en/docs/advanced/cri/#cri-o"},"Setting different container runtime with CRI")," and ",(0,o.kt)("a",{parentName:"p",href:"https://kubeedge.io/en/docs/setup/keadm/"},"Deploying using Keadm"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ wget https://github.com/kubeedge/kubeedge/releases/download/v1.8.0/keadm-v1.8.0-linux-amd64.tar.gz\n$ tar xzvf keadm-v1.8.0-linux-amd64.tar.gz\n$ cd keadm-v1.8.0-linux-amd64/keadm/\n\n$ sudo ./keadm join \\\n--cloudcore-ipport=192.168.122.160:10000 \\\n--edgenode-name=edge \\\n--token=b4550d45b773c0480446277eed1358dcd8a02a0c214646a8082d775f9c447d81.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mzg4ODUzNzd9.A9WOYJFrgL2swVGnydpb4gMojyvyoNPCXaA4rXGowqU \\\n--remote-runtime-endpoint=unix:///var/run/crio/crio.sock \\\n--runtimetype=remote \\\n--cgroupdriver=systemd\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Host has mosquit+ already installed and running. Hence skipping the installation steps !!!\n...\nKubeEdge edgecore is running, For logs visit:  /var/log/kubeedge/edgecore.log\n")),(0,o.kt)("h3",{id:"get-edge-node-status-from-cloud-side"},"Get Edge Node Status From Cloud Side"),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get node\nNAME       STATUS    ROLES                  AGE   VERSION\nedge       Ready     agent,edge             10s   v1.19.3-kubeedge-v1.8.2\nmaster     Ready     control-plane,master   68m   v1.21.0\n")),(0,o.kt)("h2",{id:"3-enable-kubectl-logs-feature"},"3. Enable kubectl logs Feature"),(0,o.kt)("p",null,"Before metrics-server deployed, kubectl logs feature must be activated, please ",(0,o.kt)("a",{parentName:"p",href:"https://kubeedge.io/en/docs/setup/keadm/#enable-kubectl-logs-feature"},"see here"),"."),(0,o.kt)("h2",{id:"4-run-a-simple-webassembly-app"},"4. Run a simple WebAssembly app"),(0,o.kt)("p",null,"We can run the WebAssembly-based image from Docker Hub in the Kubernetes cluster."),(0,o.kt)("h3",{id:"cloud-side"},"Cloud Side"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl run -it --restart=Never wasi-demo --image=wasmedge/example-wasi:latest --annotations="module.wasm.image/variant=compat-smart" /wasi_example_main.wasm 50000000\n\nRandom number: -1694733782\nRandom bytes: [6, 226, 176, 126, 136, 114, 90, 2, 216, 17, 241, 217, 143, 189, 123, 197, 17, 60, 49, 37, 71, 69, 67, 108, 66, 39, 105, 9, 6, 72, 232, 238, 102, 5, 148, 243, 249, 183, 52, 228, 54, 176, 63, 249, 216, 217, 46, 74, 88, 204, 130, 191, 182, 19, 118, 193, 77, 35, 189, 6, 139, 68, 163, 214, 231, 100, 138, 246, 185, 47, 37, 49, 3, 7, 176, 97, 68, 124, 20, 235, 145, 166, 142, 159, 114, 163, 186, 46, 161, 144, 191, 211, 69, 19, 179, 241, 8, 207, 8, 112, 80, 170, 33, 51, 251, 33, 105, 0, 178, 175, 129, 225, 112, 126, 102, 219, 106, 77, 242, 104, 198, 238, 193, 247, 23, 47, 22, 29]\nPrinted from wasi: This is from a main function\nThis is from a main function\nThe env vars are as follows.\nThe args are as follows.\n/wasi_example_main.wasm\n50000000\nFile content is This is in a file\n')),(0,o.kt)("p",null,"The WebAssembly app of pod successfully deploy to edge node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl describe pod wasi-demo\n\nName:         wasi-demo\nNamespace:    default\nPriority:     0\nNode:         edge/192.168.122.229\nStart Time:   Mon, 06 Dec 2021 15:45:34 +0000\nLabels:       run=wasi-demo\nAnnotations:  module.wasm.image/variant: compat-smart\nStatus:       Succeeded\nIP:           \nIPs:          <none>\nContainers:\n  wasi-demo:\n    Container ID:  cri-o://1ae4d0d7f671050331a17e9b61b5436bf97ad35ad0358bef043ab820aed81069\n    Image:         wasmedge/example-wasi:latest\n    Image ID:      docker.io/wasmedge/example-wasi@sha256:525aab8d6ae8a317fd3e83cdac14b7883b92321c7bec72a545edf276bb2100d6\n    Port:          <none>\n    Host Port:     <none>\n    Args:\n      /wasi_example_main.wasm\n      50000000\n    State:          Terminated\n      Reason:       Completed\n      Exit Code:    0\n      Started:      Mon, 06 Dec 2021 15:45:33 +0000\n      Finished:     Mon, 06 Dec 2021 15:45:33 +0000\n    Ready:          False\n    Restart Count:  0\n    Environment:    <none>\n    Mounts:\n      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-bhszr (ro)\nConditions:\n  Type           Status\n  Initialized    True \n  Ready          False \n  PodScheduled   True \nVolumes:\n  kube-api-access-bhszr:\n    Type:                    Projected (a volume that contains injected data from multiple sources)\n    TokenExpirationSeconds:  3607\n    ConfigMapName:           kube-root-ca.crt\n    ConfigMapOptional:       <nil>\n    DownwardAPI:             true\nQoS Class:                   BestEffort\nNode-Selectors:              <none>\nTolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s\n                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s\nEvents:\n  Type    Reason     Age   From               Message\n  ----    ------     ----  ----               -------\n")),(0,o.kt)("h3",{id:"edge-side"},"Edge Side"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo crictl ps -a\nCONTAINER           IMAGE                                                                                           CREATED             STATE               NAME                ATTEMPT             POD ID\n1ae4d0d7f6710       0423b8eb71e312b8aaa09a0f0b6976381ff567d5b1e5729bf9b9aa87bff1c9f3                                16 minutes ago      Exited              wasi-demo           0                   2bc2ac0c32eda\n1e6c7cb6bc731       k8s.gcr.io/kube-proxy@sha256:2a25285ff19f9b4025c8e54dac42bb3cd9aceadc361f2570489b8d723cb77135   18 minutes ago      Running             kube-proxy          0                   8b7e7388ad866\n")),(0,o.kt)("p",null,"That's it."),(0,o.kt)("h2",{id:"5-demo-run-screen-recording"},"5. Demo Run Screen Recording"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://asciinema.org/a/wkLOu6xnAOSAQdmYayumwrAvh"},(0,o.kt)("img",{parentName:"a",src:"https://asciinema.org/a/wkLOu6xnAOSAQdmYayumwrAvh.svg",alt:"asciicast"}))))}c.isMDXComponent=!0}}]);