"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[6e3],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1728:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],c={id:"client_api",title:"Client API showcase"},s=void 0,l={unversionedId:"getting-started/client_api",id:"getting-started/client_api",isDocsHomePage:!1,title:"Client API showcase",description:"This chapter showcases client Centrifugo API capabilities \u2013 i.e. available real-time messaging primitives available on front-end (can be browser or mobile device).",source:"@site/docs/getting-started/client_api.md",sourceDirName:"getting-started",slug:"/getting-started/client_api",permalink:"/docs/getting-started/client_api",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/getting-started/client_api.md",version:"current",frontMatter:{id:"client_api",title:"Client API showcase"},sidebar:"Introduction",previous:{title:"Quick start",permalink:"/docs/getting-started/quick_start"},next:{title:"Integration guide",permalink:"/docs/getting-started/integration"}},p=[{value:"Connecting to a server",id:"connecting-to-a-server",children:[]},{value:"Disconnecting from a server",id:"disconnecting-from-a-server",children:[]},{value:"Reconnecting to a server",id:"reconnecting-to-a-server",children:[]},{value:"Connection lifecycle events",id:"connection-lifecycle-events",children:[]},{value:"Subscribe to a channel",id:"subscribe-to-a-channel",children:[]},{value:"Server-side subscriptions",id:"server-side-subscriptions",children:[]},{value:"Send RPC",id:"send-rpc",children:[]},{value:"Call channel history",id:"call-channel-history",children:[]},{value:"Presence and presence stats",id:"presence-and-presence-stats",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This chapter showcases client Centrifugo API capabilities \u2013 i.e. available real-time messaging primitives available on front-end (can be browser or mobile device)."),(0,i.kt)("p",null,"This is a formal description \u2013 refer to each specific client implementation for concrete method names and possibilities. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/ecosystem/client"},"full list of Centrifugo client connectors"),"."),(0,i.kt)("p",null,"If you are looking for a detailed information about client-server protocol internals then ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/client_protocol"},"client protocol description")," chapter can help."),(0,i.kt)("p",null,"We use Javascript client ",(0,i.kt)("inlineCode",{parentName:"p"},"centrifuge-js")," for examples here."),(0,i.kt)("h2",{id:"connecting-to-a-server"},"Connecting to a server"),(0,i.kt)("p",null,"Each Centrifugo client allows connecting to a server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const centrifuge = new Centrifuge('ws://localhost:8000/connection/websocket');\ncentrifuge.connect();\n")),(0,i.kt)("p",null,"In most cases you will need to pass JWT token for authentication, so the example above transforms to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const centrifuge = new Centrifuge('ws://localhost:8000/connection/websocket');\ncentrifuge.setToken('<USER-JWT-TOKEN>')\ncentrifuge.connect();\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/authentication"},"authentication")," chapter for more information on how to generate connection JWT."),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/proxy#connect-proxy"},"connect proxy")," then you may go without setting JWT."),(0,i.kt)("p",null,"It's also possible to avoid using client library at all ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/overview"},"with unidirectional transports"),"."),(0,i.kt)("h2",{id:"disconnecting-from-a-server"},"Disconnecting from a server"),(0,i.kt)("p",null,"After connecting you can disconnect from a server at any moment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"centrifuge.disconnect();\n")),(0,i.kt)("h2",{id:"reconnecting-to-a-server"},"Reconnecting to a server"),(0,i.kt)("p",null,"Centrifugo clients automatically reconnect to a server in case of temporary connection loss, also clients periodically ping server to detect broken connections."),(0,i.kt)("h2",{id:"connection-lifecycle-events"},"Connection lifecycle events"),(0,i.kt)("p",null,"All client implementations allow setting handlers on connect and disconnect events."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"centrifuge.on('connect', function(connectCtx){\n    console.log('connected', connectCtx)\n});\n\ncentrifuge.on('disconnect', function(disconnectCtx){\n    console.log('disconnected', disconnectCtx)\n});\n")),(0,i.kt)("h2",{id:"subscribe-to-a-channel"},"Subscribe to a channel"),(0,i.kt)("p",null,"Another core functionality of client API is possibility to subscribe on a channel to receive all messages published to that channel."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"centrifuge.subscribe('channel', function(messageCtx) {\n    console.log(messageCtx);\n})\n")),(0,i.kt)("p",null,"Client can subscribe to ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/channels"},"different channels"),". Subscribe method returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscription")," object. It's also possible to react on different Subscription events: join and leave events, subscribe success and subscribe error events, unsubscribe event."),(0,i.kt)("p",null,"In idiomatic case messages published to channels from application backend ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/server_api"},"over Centrifugo server API"),". Though it's not always true."),(0,i.kt)("p",null,"Centrifugo also provides message recovery feature to restore missed publications in channels. Publications can be missed due to temporary disconnects (bad network) or server reloads. Recovery happens automatically on reconnect (due to bad network or server reloads) as soon as recovery in channel ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/channels#channel-options"},"properly configured"),". Client keeps last seen Publication offset and restores missed publications since known offset upon reconnect. If recovery failed then client implementation provides a flag inside subscribe event to let application know that some publications missed \u2013 so you may need to load state from scratch from application backend. Not all Centrifugo clients implement recovery feature \u2013 refer to specific client implementation docs. More details about recovery in ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/history_and_recovery"},"a dedicated chapter"),"."),(0,i.kt)("h2",{id:"server-side-subscriptions"},"Server-side subscriptions"),(0,i.kt)("p",null,"To handle publications coming from ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/server_subs"},"server-side subscriptions")," client API allows listening publications simply on Centrifuge client instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"centrifuge.on('publish', function(messageCtx) {\n    console.log(messageCtx);\n});\n")),(0,i.kt)("p",null,"It's also possible to react on different server-side Subscription events: join and leave events, subscribe success, unsubscribe event. There is no subscribe error event here since subscription initiated on a server side."),(0,i.kt)("h2",{id:"send-rpc"},"Send RPC"),(0,i.kt)("p",null,"Client can send RPC to a server. RPC is a call which is not related to channels at all. It's just a way to call server method from client side over WebSocket or SockJS connection. RPC is only available when ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/proxy#rpc-proxy"},"RPC proxy")," configured."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const rpcRequest = {'key': 'value'};\nconst data = await centrifuge.namedRPC('example_method', rpcRequest);\n")),(0,i.kt)("h2",{id:"call-channel-history"},"Call channel history"),(0,i.kt)("p",null,"Once subscribed client can call publication history inside channel (only for channels where ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/channels#channel-options"},"history configured"),") to get last publications in channel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const resp = await subscription.history();\n")),(0,i.kt)("h2",{id:"presence-and-presence-stats"},"Presence and presence stats"),(0,i.kt)("p",null,"Once subscribed client can call presence and presence stats information inside channel (only for channels where ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/channels#channel-options"},"presence configured"),"):"),(0,i.kt)("p",null,"For presence (full information about active subscribers in channel):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const resp = await subscription.presence();\n")),(0,i.kt)("p",null,"For presence stats (just a number of clients and unique users in channel):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const resp = await subscription.presenceStats();\n")))}d.isMDXComponent=!0}}]);