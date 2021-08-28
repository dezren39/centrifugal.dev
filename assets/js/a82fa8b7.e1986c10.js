"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[4435],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5631:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],s={id:"overview",title:"Real-time transports"},c=void 0,l={unversionedId:"transports/overview",id:"transports/overview",isDocsHomePage:!1,title:"Real-time transports",description:"Centrifugo supports a variety of transports to deliver real-time messages to clients.",source:"@site/docs/transports/overview.md",sourceDirName:"transports",slug:"/transports/overview",permalink:"/docs/transports/overview",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/overview.md",version:"current",frontMatter:{id:"overview",title:"Real-time transports"},sidebar:"Transports",next:{title:"WebSocket",permalink:"/docs/transports/websocket"}},p=[{value:"Bidirectional",id:"bidirectional",children:[]},{value:"Unidirectional",id:"unidirectional",children:[{value:"Unidirectional message types",id:"unidirectional-message-types",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Centrifugo supports a variety of transports to deliver real-time messages to clients."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Every transport is a persistent connection")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Here we describe supported transports between your application frontend and Centrifugo itself. Every Centrifugo transport is a persistent connection so the server can push data towards clients at any moment."))),(0,o.kt)("p",null,"The important distinction here is that all supported transports belong to one of two possible groups:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bidirectional"),(0,o.kt)("li",{parentName:"ul"},"Unidirectional")),(0,o.kt)("h2",{id:"bidirectional"},"Bidirectional"),(0,o.kt)("p",null,"Bidirectional transports are capable to serve all Centrifugo features. These transports are the main Centrifugo focus."),(0,o.kt)("p",null,"Bidirectional transports come with a cost that developers need to use a special client connector library which speaks Centrifugo ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/client_protocol"},"client protocol"),". The reason why we need a special client connector library is that a bidirectional connection is asynchronous \u2013 it's required to match requests to responses, properly manage connection state and request queueing/timeouts/errors."),(0,o.kt)("p",null,"Centrifugo has ",(0,o.kt)("a",{parentName:"p",href:"/docs/ecosystem/client"},"client connector libraries")," for popular environments."),(0,o.kt)("h2",{id:"unidirectional"},"Unidirectional"),(0,o.kt)("p",null,"Unidirectional transports suit well for simple use-cases with stable subscriptions."),(0,o.kt)("p",null,"The advantage is that unidirectional transports do not require special client connectors - developers can use native browser APIs (like WebSocket, SSE, HTTP streaming), or GRPC generated code to receive real-time updates from Centrifugo \u2013 thus avoiding dependency to a client connector that abstracts bidirectional communication."),(0,o.kt)("p",null,"The drawback is that with unidirectional transports you are not inheriting all Centrifugo features out of the box (like dynamic subscriptions/unsubscriptions, automatic message recovery on reconnect, possibility to send RPC calls over persistent connection). But some of the missing client APIs can be mimicked by using calls to Centrifugo ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/server_api"},"server API")," (i.e. over client -> application backend -> Centrifugo)."),(0,o.kt)("h3",{id:"unidirectional-message-types"},"Unidirectional message types"),(0,o.kt)("p",null,"In case of unidirectional transports Centrifugo will send ",(0,o.kt)("inlineCode",{parentName:"p"},"Push")," frames to the connection. Push frames defined by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/protocol/blob/master/definitions/client.proto"},"client protocol schema"),". I.e. Centrifugo reuses a part of its bidirectional protocol for unidirectional communication. Push message defined as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"message Push {\n  enum PushType {\n    PUBLICATION = 0;\n    JOIN = 1;\n    LEAVE = 2;\n    UNSUBSCRIBE = 3;\n    MESSAGE = 4;\n    SUBSCRIBE = 5;\n    CONNECT = 6;\n    DISCONNECT = 7;\n    REFRESH = 8;\n  }\n  PushType type = 1;\n  string channel = 2;\n  bytes data = 3;\n}\n")),(0,o.kt)("p",null,"So unidirectional connection will receive various pushes. All you need to do is look at Push type and process it or skip it. In most cases you will be most interested in ",(0,o.kt)("inlineCode",{parentName:"p"},"CONNECT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PUBLICATION")," types."),(0,o.kt)("p",null,"Just try any unidirectional transport and you will quickly get the idea."))}d.isMDXComponent=!0}}]);