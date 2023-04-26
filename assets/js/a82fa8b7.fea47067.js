"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[4435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={id:"overview",title:"Real-time transports"},a=void 0,s={unversionedId:"transports/overview",id:"transports/overview",title:"Real-time transports",description:"Centrifugo supports a variety of transports to deliver real-time messages to clients.",source:"@site/docs/transports/overview.md",sourceDirName:"transports",slug:"/transports/overview",permalink:"/docs/transports/overview",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Real-time transports"},sidebar:"Transports",next:{title:"Client SDK API",permalink:"/docs/transports/client_api"}},l={},c=[{value:"Bidirectional",id:"bidirectional",level:2},{value:"Unidirectional",id:"unidirectional",level:2},{value:"Unidirectional message types",id:"unidirectional-message-types",level:3},{value:"PING/PONG behavior",id:"pingpong-behavior",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Centrifugo supports a variety of transports to deliver real-time messages to clients."),(0,i.kt)("admonition",{title:"Every transport is a persistent connection",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Here we describe supported transports between your application frontend and Centrifugo itself. Every Centrifugo transport is a persistent connection so the server can push data towards clients at any moment.")),(0,i.kt)("p",null,"The important distinction here is that all supported transports belong to one of two possible groups:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bidirectional"),(0,i.kt)("li",{parentName:"ul"},"Unidirectional")),(0,i.kt)("h2",{id:"bidirectional"},"Bidirectional"),(0,i.kt)("p",null,"Bidirectional transports are capable to serve all Centrifugo features. These transports are the main Centrifugo focus."),(0,i.kt)("p",null,"Bidirectional transports come with a cost that developers need to use a special client connector library (SDK) which speaks Centrifugo ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/client_protocol"},"client protocol"),". The reason why we need a special client connector library is that a bidirectional connection is asynchronous \u2013 it's required to match requests to responses, properly manage connection state, handle request queueing/timeouts/errors, etc."),(0,i.kt)("p",null,"Centrifugo has several official ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/client_sdk"},"client SDKs")," for popular environments. All of them work over ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/websocket"},"WebSocket")," transport. Our Javascript SDK also offers bidirectional fallbacks over ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/http_stream"},"HTTP-Streaming"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/sse"},"Server-Sent Events (SSE)")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/sockjs"},"SockJS"),"."),(0,i.kt)("h2",{id:"unidirectional"},"Unidirectional"),(0,i.kt)("p",null,"Unidirectional transports suit well for simple use-cases with stable subscriptions, usually known at connection time."),(0,i.kt)("p",null,"The advantage is that unidirectional transports do not require special client connectors - developers can use native browser APIs (like ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/uni_websocket"},"WebSocket"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/uni_sse"},"EventSource/SSE"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/uni_http_stream"},"HTTP-streaming"),"), or ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/uni_grpc"},"GRPC")," generated code to receive real-time updates from Centrifugo. Thus avoiding dependency to a client connector that abstracts bidirectional communication."),(0,i.kt)("p",null,"The drawback is that with unidirectional transports you are not inheriting all Centrifugo features out of the box (like dynamic subscriptions/unsubscriptions, automatic message recovery on reconnect, possibility to send RPC calls over persistent connection). But some of the missing client APIs can be mimicked by using calls to Centrifugo ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/server_api"},"server API")," (i.e. over client -> application backend -> Centrifugo)."),(0,i.kt)("h3",{id:"unidirectional-message-types"},"Unidirectional message types"),(0,i.kt)("p",null,"In case of unidirectional transports Centrifugo will send ",(0,i.kt)("inlineCode",{parentName:"p"},"Push")," frames to the connection. Push frames defined by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/protocol/blob/master/definitions/client.proto"},"client protocol schema"),". I.e. Centrifugo reuses a part of its bidirectional protocol for unidirectional communication. Push message defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"message Push {\n  string channel = 2;\n\n  Publication pub = 4;\n  Join join = 5;\n  Leave leave = 6;\n  Unsubscribe unsubscribe = 7;\n  Message message = 8;\n  Subscribe subscribe = 9;\n  Connect connect = 10;\n  Disconnect disconnect = 11;\n  Refresh refresh = 12;\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Some numbers in Protobuf definitions skipped for backwards compatibility with previous client protocol version.")),(0,i.kt)("p",null,"So unidirectional connection will receive various pushes. Every push contains ",(0,i.kt)("strong",{parentName:"p"},"one of")," the following objects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Publication"),(0,i.kt)("li",{parentName:"ul"},"Join"),(0,i.kt)("li",{parentName:"ul"},"Leave"),(0,i.kt)("li",{parentName:"ul"},"Unsubscribe"),(0,i.kt)("li",{parentName:"ul"},"Message"),(0,i.kt)("li",{parentName:"ul"},"Subscribe"),(0,i.kt)("li",{parentName:"ul"},"Connect"),(0,i.kt)("li",{parentName:"ul"},"Disconnect"),(0,i.kt)("li",{parentName:"ul"},"Refresh")),(0,i.kt)("p",null,"Some pushes belong to a ",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," which may be set on Push top level."),(0,i.kt)("p",null,"All you need to do is look at Push, process messages you are interested in and ignore others. In most cases you will be most interested in pushes which contain ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Publication")," messages."),(0,i.kt)("p",null,"For example, according to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/protocol/blob/master/definitions/client.proto"},"protocol schema")," Publication message type looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"message Publication {\n  bytes data = 4;\n  ClientInfo info = 5;\n  uint64 offset = 6;\n  map<string, string> tags = 7;\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In JSON protocol case Centrifugo replaces ",(0,i.kt)("inlineCode",{parentName:"p"},"bytes")," type with embedded JSON.")),(0,i.kt)("p",null,"Just try using any unidirectional transport and you will quickly get the idea."),(0,i.kt)("h2",{id:"pingpong-behavior"},"PING/PONG behavior"),(0,i.kt)("p",null,"Centrifugo server periodically sends pings to clients and expects pong from clients that works over bidirectional transports. Sending ping and receiving pong allows to find broken connections faster. Centrifugo sends pings on the Centrifugo client protocol level, thus it's possible for clients to handle ping messages on the client side to make sure connection is not broken (our bidirectional SDKs do this automatically)."),(0,i.kt)("p",null,"By default Centrifugo sends pings every 25 seconds. This may be changed using ",(0,i.kt)("inlineCode",{parentName:"p"},"ping_interval")," option (",(0,i.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration"),", default ",(0,i.kt)("inlineCode",{parentName:"p"},'"25s"'),")."),(0,i.kt)("p",null,"Centrifugo expects pong message from bidirectional client SDK after sending ping to it. By default, it waits no more than 8 seconds before closing a connection. This may be changed using ",(0,i.kt)("inlineCode",{parentName:"p"},"pong_timeout")," option (",(0,i.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration"),", default ",(0,i.kt)("inlineCode",{parentName:"p"},'"8s"'),")."),(0,i.kt)("p",null,"In most cases default ping/pong intervals are fine so you don't really need to tweak them. Reducing timeouts may help you to find non-gracefully closed connections faster, but will increase network traffic and CPU resource usage since ping/pongs are sent faster."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"ping_interval")," must be greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"pong_timeout")," in the current implementation.")),(0,i.kt)("p",null,"Here is a scheme how ping/pong works in bidirectional and unidirectional client scenarios:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3915).Z,width:"2566",height:"1558"})))}u.isMDXComponent=!0},3915:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ping_pong-5819b8856db75d60f40c9067903c328f.png"}}]);