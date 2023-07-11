"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[4864],{8279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"sse",title:"SSE (EventSource), with bidirectional emulation",sidebar_label:"SSE (EventSource)"},i=void 0,s={unversionedId:"transports/sse",id:"transports/sse",title:"SSE (EventSource), with bidirectional emulation",description:"SSE (EventSource) connection endpoint in Centrifugo is:",source:"@site/docs/transports/sse.md",sourceDirName:"transports",slug:"/transports/sse",permalink:"/docs/transports/sse",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/sse.md",tags:[],version:"current",frontMatter:{id:"sse",title:"SSE (EventSource), with bidirectional emulation",sidebar_label:"SSE (EventSource)"},sidebar:"Transports",previous:{title:"HTTP streaming",permalink:"/docs/transports/http_stream"},next:{title:"SockJS",permalink:"/docs/transports/sockjs"}},l={},c=[{value:"Options",id:"options",level:2},{value:"sse",id:"sse",level:3},{value:"sse_max_request_body_size",id:"sse_max_request_body_size",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SSE (EventSource) connection endpoint in Centrifugo is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/connection/sse\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This transport is only implemented by our Javascript SDK at this point \u2013 as it mostly makes sense as a fallback for WebSocket to have real-time connection in an environment where WebSocket is unavailable. These days those envs are mostly corporate networks which can block WebSocket traffic (even TLS-based).")),(0,o.kt)("p",null,"Here is an example how to use JavaScript SDK with WebSocket as the main transport and SSE transport fallback:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Use SSE with bidirectional emulation as a fallback for WebSocket in JS SDK"',title:'"Use',SSE:!0,with:!0,bidirectional:!0,emulation:!0,as:!0,a:!0,fallback:!0,for:!0,WebSocket:!0,in:!0,JS:!0,'SDK"':!0},"const transports = [\n    {\n        transport: 'websocket',\n        endpoint: 'ws://localhost:8000/connection/websocket'\n    },\n    {\n        transport: 'sse',\n        endpoint: 'http://localhost:8000/connection/sse'\n    }\n];\nconst centrifuge = new Centrifuge(transports);\ncentrifuge.connect()\n")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Make sure ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/configuration#allowed_origins"},"allowed_origins")," are properly configured.")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"sse"},"sse"),(0,o.kt)("p",null,"Boolean, default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"Enables SSE (EventSource) endpoint. And enables emulation endpoint (",(0,o.kt)("inlineCode",{parentName:"p"},"/emulation")," by default) to accept emulation HTTP requests from clients."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "sse": true\n}\n')),(0,o.kt)("h3",{id:"sse_max_request_body_size"},"sse_max_request_body_size"),(0,o.kt)("p",null,"Default: 65536 (64KB)"),(0,o.kt)("p",null,"Maximum allowed size of a initial HTTP POST request in bytes when using HTTP POST requests to connect (browsers are using GET so it's not applied)."))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);