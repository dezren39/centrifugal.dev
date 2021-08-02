"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[6791],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},290:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],c={id:"uni_sse",title:"Unidirectional SSE (Eventsource)",sidebar_label:"SSE (Eventsource)"},s=void 0,p={unversionedId:"transports/uni_sse",id:"transports/uni_sse",isDocsHomePage:!1,title:"Unidirectional SSE (Eventsource)",description:"Default unidirectional SSE (Eventsource) connection endpoint in Centrifugo is:",source:"@site/docs/transports/uni_sse.md",sourceDirName:"transports",slug:"/transports/uni_sse",permalink:"/docs/transports/uni_sse",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/uni_sse.md",version:"current",frontMatter:{id:"uni_sse",title:"Unidirectional SSE (Eventsource)",sidebar_label:"SSE (Eventsource)"},sidebar:"Transports",previous:{title:"WebSocket",permalink:"/docs/transports/uni_websocket"},next:{title:"HTTP streaming",permalink:"/docs/transports/uni_http_stream"}},u=[{value:"Connect command",id:"connect-command",children:[]},{value:"Supported data formats",id:"supported-data-formats",children:[]},{value:"Pings",id:"pings",children:[]}],l={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Default unidirectional SSE (Eventsource) connection endpoint in Centrifugo is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/connection/uni_sse\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Only parts of Eventsource spec that make sense for Centrifugo are implemented. For example ",(0,a.kt)("inlineCode",{parentName:"p"},"Last-Event-Id")," header not supported (since one connection can be subscribed to many channels) and multiline strings (since we are passing JSON-encoded objects to the client) etc."))),(0,a.kt)("h2",{id:"connect-command"},"Connect command"),(0,a.kt)("p",null,"Unfortunately SSE can't be issued as POST request from a web browser, so the only way to pass initial connect command is over URL params. Centrifugo is looking for ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," URL param for connect command. Connect command value expected to be a JSON-encoded string, properly encoded into URL. "),(0,a.kt)("h2",{id:"supported-data-formats"},"Supported data formats"),(0,a.kt)("p",null,"JSON"),(0,a.kt)("h2",{id:"pings"},"Pings"),(0,a.kt)("p",null,"Centrifugo sends SSE data like this as pings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"event: ping\ndata:\n")),(0,a.kt)("p",null,"I.e. with event name ",(0,a.kt)("inlineCode",{parentName:"p"},"ping")," and empty data."))}d.isMDXComponent=!0}}]);