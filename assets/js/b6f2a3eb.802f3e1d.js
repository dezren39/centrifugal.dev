"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[9474],{4380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const s={id:"design",title:"Design overview"},o=void 0,r={unversionedId:"getting-started/design",id:"getting-started/design",title:"Design overview",description:"Let's discuss some architectural and design topics about Centrifugo.",source:"@site/docs/getting-started/design.md",sourceDirName:"getting-started",slug:"/getting-started/design",permalink:"/docs/getting-started/design",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/getting-started/design.md",tags:[],version:"current",frontMatter:{id:"design",title:"Design overview"},sidebar:"Introduction",previous:{title:"Integration guide",permalink:"/docs/getting-started/integration"},next:{title:"Ecosystem notes",permalink:"/docs/getting-started/ecosystem"}},l={},c=[{value:"Idiomatic usage",id:"idiomatic-usage",level:2},{value:"Message history considerations",id:"message-history-considerations",level:2},{value:"Message delivery model",id:"message-delivery-model",level:2},{value:"Message order guarantees",id:"message-order-guarantees",level:2},{value:"Graceful degradation",id:"graceful-degradation",level:2},{value:"Online presence considerations",id:"online-presence-considerations",level:2},{value:"Scalability considerations",id:"scalability-considerations",level:2}],d={toc:c};function u(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's discuss some architectural and design topics about Centrifugo."),(0,i.kt)("h2",{id:"idiomatic-usage"},"Idiomatic usage"),(0,i.kt)("p",null,"Centrifugo is a standalone server which abstracts away the complexity of working with many persistent connections and efficient message broadcasting from the application backend. The fact Centrifugo acts as a separate service dictates some idiomatic patterns how to integrate with Centrifugo for real-time message delivery. Let's look at them."),(0,i.kt)("p",null,"Usually, you want to deliver content created by some user in your app to other users in real time. Each user may have several real-time connections with Centrifugo. For example, user opened several browser tabs, each tab created a separate connection. Or user has two mobile devices and created separate connection to your app from each of them. We call connection a ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," in Centrifugo. So words ",(0,i.kt)("inlineCode",{parentName:"p"},"connection")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," are synonims for us."),(0,i.kt)("p",null,"All requests from users that generate new data should first go to the application backend \u2013 i.e. calling app backend API from the client side. The backend can validate the message, process it, save it into a database for long-term persistence \u2013 and then publish an event to a channel using ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/server_api"},"Centrifugo server API"),". This event is then efficiently broadcasted by Centrifugo to all active channel subscribers."),(0,i.kt)("p",null,"The following diagram shows the process (assuming client that generates new content is also a channel subscriber so also receives real-time message):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"diagram_unidirectional_publish",src:n(9557).Z,width:"2797",height:"1268"})),(0,i.kt)("p",null,"This is a usually a natural workflow for applications since this is how applications traditionally work (without real-time features) and Centrifugo is fully decoupled from the application in this case."),(0,i.kt)("p",null,"Centrifugo has a role of real-time transport layer in this case, and you may design the app with graceful degradation in mind \u2013 so that removing Centrifugo won't be a fatal problem for the application \u2013 it will continue working, just real-time features will be unavailable."),(0,i.kt)("p",null,"If the original source of events is your app backend (without any user involved) \u2013 then the above diagram simplifies to:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"diagram_unidirectional_publish",src:n(4850).Z,width:"2617",height:"1228"})),(0,i.kt)("p",null,"So the backend publishes data to channels and if there are active subscribers \u2013 events are delivered. If there are no active subscribers then events are dropped by Centrifugo (or, in case of using history features in channels, events may be temporaly kept in Centrifugo history stream)."),(0,i.kt)("p",null,"It's also possible to utilize Centrifugo bidirectional connection for sending requests to the backend. To achieve this Centrifugo provides ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/proxy"},"event proxy features"),". It's possible to send RPC (with custom request-response) requests from client to Centrifugo and the request will be then proxied to the application backend (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/proxy#rpc-proxy"},"RPC proxy"),"). Moreover, proxy provides a way to utilize bidirectional connection for publishing into channels (using ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/proxy#publish-proxy"},"publish proxy"),"). But again \u2013 in most real scenarios your backend must validate the publication attempt, so the scheme will look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"client generates content",src:n(4550).Z,width:"2627",height:"1176"})),(0,i.kt)("h2",{id:"message-history-considerations"},"Message history considerations"),(0,i.kt)("p",null,"Idiomatic Centrifugo usage requires having the main application database from which initial and actual state can be loaded at any point in time."),(0,i.kt)("p",null,"While Centrifugo has channel history, it has been mostly designed to be a hot cache to reduce the load on the main application database when all users reconnect at once (in case of load balancer configuration reload, Centrifugo restart, temporary network problems, etc). This allows to radically reduce the load on the application main database during reconnect storm. Since such disconnects are usually pretty short in time having a reasonably small number of messages cached in history is sufficient."),(0,i.kt)("p",null,"The addition of history iteration API shifts possible use cases a bit. Manually calling history chunk by chunk allows keeping larger number of publications per channel."),(0,i.kt)("p",null,"Depending on Engine used and configuration of the underlying storage history stream persistence characteristics can vary. For example, with Memory Engine history will be lost upon Centrifugo restart. With Redis or Tarantool engines history will survive Centrifugo restarts but depending on a storage configuration it can be lost upon storage restart \u2013 so you should take into account storage configuration and persistence properties as well. For example, consider enabling Redis AOF with fsync for maximum durability, or configure replication for high-availability, use Redis Cluster or maybe synchronous replication with Tarantool."),(0,i.kt)("p",null,"When using history with automatic recovery Centrifugo provides clients a flag to distinguish whether the missed messages were all successfully restored from Centrifugo history upon recovery or not. If not \u2013 client may restore state from the main application database. Centrifugo message history can be used as a complementary way to restore messages and thus reduce a load on the main application database most of the time."),(0,i.kt)("h2",{id:"message-delivery-model"},"Message delivery model"),(0,i.kt)("p",null,"By default, the message delivery model of Centrifugo is at most once. With history and the positioning/recovery features enabled it's possible to achieve at least once guarantee within history retention time and size. After abnormal disconnect clients have an option to recover missed messages from the publication channel stream history that Centrifugo maintains."),(0,i.kt)("p",null,"Without the positioning or recovery features enabled a message sent to Centrifugo can be theoretically lost while moving towards clients. Centrifugo makes its best effort only to prevent message loss on a way to online clients, but the application should tolerate the loss."),(0,i.kt)("p",null,"As noted Centrifugo has a feature called message recovery to automatically recover messages missed due to short network disconnections. Also, it compensates at most once delivery of broker PUB/SUB system  (Redis, Tarantool) by using additional publication offset checks and periodic offset synchronization. So publication loss missed in PUB/SUB layer will be detected eventually and client may catch up the state loading it from history."),(0,i.kt)("h2",{id:"message-order-guarantees"},"Message order guarantees"),(0,i.kt)("p",null,"Message order in channels is guaranteed to be the same while you publish messages into a channel one after another or publish them in one request. If you do parallel publications into the same channel then Centrifugo can't guarantee message order since those are processed in parallel."),(0,i.kt)("h2",{id:"graceful-degradation"},"Graceful degradation"),(0,i.kt)("p",null,"It is recommended to design an application in a way that users don't even notice when Centrifugo does not work. Use graceful degradation. For example, if a user posts a new comment over AJAX to your application backend - you should not rely only on Centrifugo to receive a new comment from a channel and display it. You should return new comment data in AJAX call response and render it. This way user that posts a comment will think that everything works just fine. Be careful to not draw comments twice in this case because you may also receive the same data from a channel - think about idempotent identifiers for your entities."),(0,i.kt)("h2",{id:"online-presence-considerations"},"Online presence considerations"),(0,i.kt)("p",null,"Online presence in a channel is designed to be eventually consistent. It will return the correct state most of the time. But when using Redis or Tarantool engines, due to the network failures and unexpected shut down of Centrifugo node, there are chances that clients can be presented in a presence up to one minute more (until presence entry expiration)."),(0,i.kt)("p",null,"Also, channel presence does not scale well for channels with lots of active subscribers. This is due to the fact that presence returns the entire snapshot of all clients in a channel \u2013 as soon as the number of active subscribers grows the response size becomes larger. In some cases, ",(0,i.kt)("inlineCode",{parentName:"p"},"presence_stats")," API call can be sufficient to avoid receiving the entire presence state."),(0,i.kt)("h2",{id:"scalability-considerations"},"Scalability considerations"),(0,i.kt)("p",null,"Centrifugo can scale horizontally with built-in engines (Redis, Tarantool, KeyDB) or with Nats broker. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/engines"},"engines"),"."),(0,i.kt)("p",null,"All supported brokers are fast \u2013 they can handle hundreds of thousands of requests per second. This should be enough for most applications."),(0,i.kt)("p",null,"But, if you approach broker resource limits (CPU or memory) then it's possible:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use Centrifugo consistent sharding support to balance queries between different broker instances (supported for Redis, KeyDB, Tarantool)"),(0,i.kt)("li",{parentName:"ul"},"Use Redis Cluster (it's also possible to consistently shard data between different Redis Clusters)"),(0,i.kt)("li",{parentName:"ul"},"Nats broker should scale well itself in cluster setup")),(0,i.kt)("p",null,"All brokers can be set up in highly available way so there won't be a single point of failure."),(0,i.kt)("p",null,"All Centrifugo data (history, online presence) is designed to be ephemeral and have an expiration time. Due to this fact and the fact that Centrifugo provides hooks for the application to understand history loss makes the process of resharding mostly automatic. As soon as you need to add additional broker shard (when using client-side sharding) you can just add it to the configuration and restart Centrifugo. Since data is sharded consistently part of the data will stay on the same broker nodes. Applications should handle cases that channel data moved to another shard and restore a state from the main application database when needed (i.e. when ",(0,i.kt)("inlineCode",{parentName:"p"},"recovered")," flag provided by SDK is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")."))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||s;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4550:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/design_1-354663c834d3f800095d9a1a56ee003b.png"},4850:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/design_2-4ffa693119a50f685e242a7696acd42a.png"},9557:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/design_3-10b56f23ae067f4a1f256cece4ccee57.png"}}]);