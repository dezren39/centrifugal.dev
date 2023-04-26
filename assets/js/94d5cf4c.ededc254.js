"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5028],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(o),m=r,b=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return o?n.createElement(b,a(a({ref:t},p),{},{components:o})):n.createElement(b,a({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},9872:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const i={id:"websocket",title:"WebSocket"},a=void 0,s={unversionedId:"transports/websocket",id:"transports/websocket",title:"WebSocket",description:"Websocket is the main transport in Centrifugo. It's a very efficient low-overhead protocol on top of TCP.",source:"@site/docs/transports/websocket.md",sourceDirName:"transports",slug:"/transports/websocket",permalink:"/docs/transports/websocket",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/websocket.md",tags:[],version:"current",frontMatter:{id:"websocket",title:"WebSocket"},sidebar:"Transports",previous:{title:"Client real-time SDKs",permalink:"/docs/transports/client_sdk"},next:{title:"HTTP streaming",permalink:"/docs/transports/http_stream"}},l={},c=[{value:"Options",id:"options",level:2},{value:"websocket_message_size_limit",id:"websocket_message_size_limit",level:3},{value:"websocket_read_buffer_size",id:"websocket_read_buffer_size",level:3},{value:"websocket_write_buffer_size",id:"websocket_write_buffer_size",level:3},{value:"websocket_use_write_buffer_pool",id:"websocket_use_write_buffer_pool",level:3},{value:"websocket_compression",id:"websocket_compression",level:3},{value:"Protobuf binary protocol",id:"protobuf-binary-protocol",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebSocket"},"Websocket")," is the main transport in Centrifugo. It's a very efficient low-overhead protocol on top of TCP."),(0,r.kt)("p",null,"The biggest advantage is that Websocket works out of the box in all modern browsers and almost all programming languages have Websocket implementations. This makes Websocket a universal transport that can be used to connect to Centrifugo from almost everywhere."),(0,r.kt)("p",null,"Default WebSocket connection endpoint in Centrifugo is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/connection/websocket\n")),(0,r.kt)("p",null,"So to connect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Connect to local Centrifugo with JavaScript SDK"',title:'"Connect',to:!0,local:!0,Centrifugo:!0,with:!0,JavaScript:!0,'SDK"':!0},"const client = new Centrifuge('ws://localhost:8000/connection/websocket', {\n    // token: ?,\n    // getToken: ?\n});\n\nclient.connect();\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"websocket_message_size_limit"},"websocket_message_size_limit"),(0,r.kt)("p",null,"Default: 65536 (64KB)"),(0,r.kt)("p",null,"Maximum allowed size of a message received from WebSocket connection in bytes."),(0,r.kt)("h3",{id:"websocket_read_buffer_size"},"websocket_read_buffer_size"),(0,r.kt)("p",null,"In bytes, by default 0 which tells Centrifugo to reuse read buffer from HTTP server for WebSocket connection (usually 4096 bytes in size). If set to a lower value can reduce memory usage per WebSocket connection (but can increase number of system calls depending on average message size)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "websocket_read_buffer_size": 512\n}\n')),(0,r.kt)("h3",{id:"websocket_write_buffer_size"},"websocket_write_buffer_size"),(0,r.kt)("p",null,"In bytes, by default 0 which tells Centrifugo to reuse write buffer from HTTP server for WebSocket connection (usually 4096 bytes in size). If set to a lower value can reduce memory usage per WebSocket connection (but HTTP buffer won't be reused):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "websocket_write_buffer_size": 512\n}\n')),(0,r.kt)("h3",{id:"websocket_use_write_buffer_pool"},"websocket_use_write_buffer_pool"),(0,r.kt)("p",null,"If you have a few writes then ",(0,r.kt)("inlineCode",{parentName:"p"},"websocket_use_write_buffer_pool")," (boolean, default ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),") option can reduce memory usage of Centrifugo a bit as there won't be separate write buffer binded to each WebSocket connection."),(0,r.kt)("h3",{id:"websocket_compression"},"websocket_compression"),(0,r.kt)("p",null,"An experimental feature for raw WebSocket endpoint - ",(0,r.kt)("inlineCode",{parentName:"p"},"permessage-deflate")," compression for  websocket messages. Btw look at ",(0,r.kt)("a",{parentName:"p",href:"https://www.igvita.com/2013/11/27/configuring-and-optimizing-websocket-compression/"},"great article")," about websocket compression. WebSocket compression can reduce an amount of traffic travelling over the wire."),(0,r.kt)("p",null,"We consider this experimental because this websocket compression is experimental in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gorilla/websocket"},"Gorilla Websocket")," library that Centrifugo uses internally."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Enabling WebSocket compression will result in much slower Centrifugo performance and more memory usage \u2013 depending on your message rate this can be very noticeable.")),(0,r.kt)("p",null,"To enable WebSocket compression for raw WebSocket endpoint set ",(0,r.kt)("inlineCode",{parentName:"p"},"websocket_compression")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in a configuration file. After this clients that support ",(0,r.kt)("inlineCode",{parentName:"p"},"permessage-deflate")," will negotiate compression with server automatically. Note that enabling compression does not mean that every connection will use it - this depends on client support for this feature."),(0,r.kt)("p",null,"Another option is ",(0,r.kt)("inlineCode",{parentName:"p"},"websocket_compression_min_size"),". Default 0. This is a minimal size of message in bytes for which we use ",(0,r.kt)("inlineCode",{parentName:"p"},"deflate")," compression when writing it to client's connection. Default value ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," means that we will compress all messages when ",(0,r.kt)("inlineCode",{parentName:"p"},"websocket_compression")," enabled and compression support negotiated with client."),(0,r.kt)("p",null,"It's also possible to control websocket compression level defined at ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/pkg/compress/flate/#NewWriter"},"compress/flate")," By default when compression with a client negotiated Centrifugo uses compression level 1 (BestSpeed). If you want to set custom compression level use ",(0,r.kt)("inlineCode",{parentName:"p"},"websocket_compression_level")," configuration option."),(0,r.kt)("h2",{id:"protobuf-binary-protocol"},"Protobuf binary protocol"),(0,r.kt)("p",null,"In most cases you will use Centrifugo with JSON protocol which is used by default. It consists of simple human-readable frames that can be easily inspected. Also it's a very simple task to publish JSON encoded data to HTTP API endpoint. You may want to use binary Protobuf client protocol if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you want less traffic on wire as Protobuf is very compact"),(0,r.kt)("li",{parentName:"ul"},"you want maximum performance on server-side as Protobuf encoding/decoding is very efficient"),(0,r.kt)("li",{parentName:"ul"},"you can sacrifice human-readable JSON for your application")),(0,r.kt)("p",null,"Binary protobuf protocol only works for raw Websocket connections (as SockJS can't deal with binary). With most clients to use binary you just need to provide query parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," to Websocket URL, so final URL look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wss://centrifugo.example.com/connection/websocket?format=protobuf\n")),(0,r.kt)("p",null,"After doing this Centrifugo will use binary frames to pass data between client and server. Your application specific payload can be random bytes."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You still can continue to encode your application specific data as JSON when using Protobuf protocol thus have a possibility to co-exist with clients that use JSON protocol on the same Centrifugo installation inside the same channels.")))}u.isMDXComponent=!0}}]);