"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[1385],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8531:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],s={id:"uni_sse",title:"Unidirectional SSE (EventSource)",sidebar_label:"SSE (EventSource)"},c=void 0,u={unversionedId:"transports/uni_sse",id:"version-3/transports/uni_sse",title:"Unidirectional SSE (EventSource)",description:"Default unidirectional SSE (EventSource) connection endpoint in Centrifugo is:",source:"@site/versioned_docs/version-3/transports/uni_sse.md",sourceDirName:"transports",slug:"/transports/uni_sse",permalink:"/docs/transports/uni_sse",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/transports/uni_sse.md",tags:[],version:"3",frontMatter:{id:"uni_sse",title:"Unidirectional SSE (EventSource)",sidebar_label:"SSE (EventSource)"},sidebar:"Transports",previous:{title:"WebSocket",permalink:"/docs/transports/uni_websocket"},next:{title:"HTTP streaming",permalink:"/docs/transports/uni_http_stream"}},l={},p=[{value:"Connect command",id:"connect-command",level:2},{value:"Supported data formats",id:"supported-data-formats",level:2},{value:"Pings",id:"pings",level:2},{value:"Options",id:"options",level:2},{value:"uni_sse",id:"uni_sse",level:3},{value:"uni_sse_max_request_body_size",id:"uni_sse_max_request_body_size",level:3},{value:"Browser example",id:"browser-example",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Default unidirectional SSE (EventSource) connection endpoint in Centrifugo is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/connection/uni_sse\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Only parts of EventSource spec that make sense for Centrifugo are implemented. For example ",(0,i.kt)("inlineCode",{parentName:"p"},"Last-Event-Id")," header not supported (since one connection can be subscribed to many channels) and multiline strings (since we are passing JSON-encoded objects to the client) etc.")),(0,i.kt)("h2",{id:"connect-command"},"Connect command"),(0,i.kt)("p",null,"Unfortunately SSE specification does not allow POST requests from a web browser, so the only way to pass initial connect command is over URL params. Centrifugo is looking for ",(0,i.kt)("inlineCode",{parentName:"p"},"cf_connect")," URL param for connect command. Connect command value expected to be a JSON-encoded string, properly encoded into URL. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const url = new URL('http://localhost:8000/connection/uni_sse');\nurl.searchParams.append(\"cf_connect\", JSON.stringify({\n    'token': '<JWT>'\n}));\n\nconst eventSource = new EventSource(url);\n")),(0,i.kt)("p",null,"Refer to the full Connect command description \u2013 it's ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/uni_websocket#connect-command"},"the same as for unidirectional WebSocket"),"."),(0,i.kt)("p",null,"The length of URL query should be kept less than 2048 characters to work throughout browsers. This should be more than enough for most use cases.  "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Centrifugo unidirectional SSE endpoint also supports POST requests. While it's not very useful for browsers which only allow GET requests for EventSource this can be useful when connecting from a mobile device. In this case you must send the connect object as a JSON body of a POST request (instead of using ",(0,i.kt)("inlineCode",{parentName:"p"},"cf_connect")," URL parameter), similar to what we have in unidirectional HTTP streaming transport case.")),(0,i.kt)("h2",{id:"supported-data-formats"},"Supported data formats"),(0,i.kt)("p",null,"JSON"),(0,i.kt)("h2",{id:"pings"},"Pings"),(0,i.kt)("p",null,"Centrifugo sends SSE data like this as pings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"event: ping\ndata:\n")),(0,i.kt)("p",null,"I.e. with event name ",(0,i.kt)("inlineCode",{parentName:"p"},"ping")," and empty data. You can ignore such messages or use them to detect broken connections (nothing received from a server for a long time)."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"uni_sse"},"uni_sse"),(0,i.kt)("p",null,"Boolean, default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Enables unidirectional SSE (EventSource) endpoint."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "uni_sse": true\n}\n')),(0,i.kt)("h3",{id:"uni_sse_max_request_body_size"},"uni_sse_max_request_body_size"),(0,i.kt)("p",null,"Default: 65536 (64KB)"),(0,i.kt)("p",null,"Maximum allowed size of a initial HTTP POST request in bytes (when using HTTP POST requests to connect)."),(0,i.kt)("h2",{id:"browser-example"},"Browser example"),(0,i.kt)("p",null,"A basic browser example can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/examples/tree/master/v3/unidirectional/sse"},"here"),"."))}m.isMDXComponent=!0}}]);