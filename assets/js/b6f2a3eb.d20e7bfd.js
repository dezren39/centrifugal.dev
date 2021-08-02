"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[9474],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=l(n),m=r,p=g["".concat(c,".").concat(m)]||g[m]||u[m]||i;return n?a.createElement(p,o(o({ref:t},d),{},{components:n})):a.createElement(p,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1680:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return g}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={id:"design",title:"Design overview"},c=void 0,l={unversionedId:"getting-started/design",id:"getting-started/design",isDocsHomePage:!1,title:"Design overview",description:"Let's discuss some architectural and design topics about Centrifugo.",source:"@site/docs/getting-started/design.md",sourceDirName:"getting-started",slug:"/getting-started/design",permalink:"/docs/getting-started/design",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/getting-started/design.md",version:"current",frontMatter:{id:"design",title:"Design overview"},sidebar:"Introduction",previous:{title:"Integration guide",permalink:"/docs/getting-started/integration"},next:{title:"Migrating to v3",permalink:"/docs/getting-started/migration_v3"}},d=[{value:"Idiomatic usage",id:"idiomatic-usage",children:[]},{value:"Message delivery model",id:"message-delivery-model",children:[]},{value:"Message order guarantees",id:"message-order-guarantees",children:[]}],u={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's discuss some architectural and design topics about Centrifugo."),(0,i.kt)("h2",{id:"idiomatic-usage"},"Idiomatic usage"),(0,i.kt)("p",null,"Centrifugo have been designed as a real-time transport without long-term persistence in mind. Idiomatic Centrifugo usage requires having a main application database from which initial and actual state can be loaded at any point of time."),(0,i.kt)("p",null,"Originally Centrifugo was built with unidirectional flow as main approach \u2013 where application data travels only from server to a client. All requests that generate new data first go to application backend (for example over AJAX call of backend API), where a backend can validate message, process it, save into database for long-term persistence \u2013 and then published from a backend side to Centrifugo API. During Centrifugo v2 life cycle this paradigm changed a bit, so it's now possible to send RPC requests from client to Centrifugo and it will be then proxied to application backend. Also connection attempts or publication to a channel attempts can be proxied. So at the moment the number of possible integration ways increased."),(0,i.kt)("p",null,"Message history Centrifugo feature designed to hold only a reasonably small number of last messages in a channel. History helps reducing load on a main application database when all users reconnect at once (in case of load balancer configuration reload, Centrifugo restart, temporary network problems etc) \u2013 since such disconnects usually pretty short in time having a reasonably small number of messages cached in history is sufficient."),(0,i.kt)("h2",{id:"message-delivery-model"},"Message delivery model"),(0,i.kt)("p",null,"By default the message delivery model of Centrifugo is at most once. With position/recovery feature enabled it's possible to achieve at least once guarantee within history retention time and size. After abnormal disconnect client have an option to recover missed messages from publication stream cache that Centrifugo maintains (depending on engine used this cache can leave in Redis for example)."),(0,i.kt)("p",null,"Without recovery feature enabled a message sent to Centrifugo can be theoretically lost while moving towards clients. Centrifugo tries to do the best effort to prevent message loss on a way to online clients, but application should tolerate a loss. "),(0,i.kt)("p",null,"As noted Centrifugo has a feature called message recovery to automatically recover messages missed due to short network disconnections. Also, it compensates at most once delivery of Redis PUB/SUB by using and  additional publication offset checks and its periodic synchronization."),(0,i.kt)("p",null,"At this moment Centrifugo message recovery designed for a short term disconnect period (think no more than one hour for a typical chat application). After this period (which can be configured per channel basis) Centrifugo removes messages from channel history cache. In this case Centrifugo may tell client that some messages can not be recovered, so you application state can be loaded from main database."),(0,i.kt)("p",null,"It is recommended to design an application in a way that users don't even notice when Centrifugo does not work at all. Use graceful degradation. For example if a user posts a new comment over AJAX call to your application backend - you should not rely only on Centrifugo to receive a new comment from a channel and display it - you should return new comment data in AJAX call response and render it. This way user that posts a comment will think that everything works just fine. Be careful to not draw comments twice in this case - think about idempotent identifiers for your entities."),(0,i.kt)("h2",{id:"message-order-guarantees"},"Message order guarantees"),(0,i.kt)("p",null,"Message order in channels guaranteed to be the same while you publish messages into channel one after another or publish them in one request. If you do parallel publications into the same channel then Centrifugo can't guarantee message order since those may be processed in different goroutines."))}g.isMDXComponent=!0}}]);