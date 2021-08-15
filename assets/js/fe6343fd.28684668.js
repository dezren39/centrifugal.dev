"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[1002],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,f=d["".concat(l,".").concat(p)]||d[p]||h[p]||i;return t?o.createElement(f,s(s({ref:n},u),{},{components:t})):o.createElement(f,s({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7983:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=t(2122),a=t(9756),i=(t(7294),t(3905)),s=["components"],r={id:"index",title:"Frequently Asked Questions"},l=void 0,c={unversionedId:"faq/index",id:"faq/index",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Answers to popular questions here.",source:"@site/docs/faq/index.md",sourceDirName:"faq",slug:"/faq/index",permalink:"/docs/faq/index",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/faq/index.md",version:"current",frontMatter:{id:"index",title:"Frequently Asked Questions"}},u=[{value:"How many connections can one Centrifugo instance handle?",id:"how-many-connections-can-one-centrifugo-instance-handle",children:[]},{value:"Memory usage per connection?",id:"memory-usage-per-connection",children:[]},{value:"Can Centrifugo scale horizontally?",id:"can-centrifugo-scale-horizontally",children:[]},{value:"Message delivery model",id:"message-delivery-model",children:[]},{value:"Message order guarantees",id:"message-order-guarantees",children:[]},{value:"Should I create channels explicitly?",id:"should-i-create-channels-explicitly",children:[]},{value:"What about best practices with the number of channels?",id:"what-about-best-practices-with-the-number-of-channels",children:[]},{value:"Presence for chat apps - online status of your contacts",id:"presence-for-chat-apps---online-status-of-your-contacts",children:[]},{value:"Centrifugo stops accepting new connections, why?",id:"centrifugo-stops-accepting-new-connections-why",children:[]},{value:"Can I use Centrifugo without reverse-proxy like Nginx before it?",id:"can-i-use-centrifugo-without-reverse-proxy-like-nginx-before-it",children:[]},{value:"Does Centrifugo work with HTTP/2?",id:"does-centrifugo-work-with-http2",children:[]},{value:"Is there a way to use a single connection to Centrifugo from different browser tabs?",id:"is-there-a-way-to-use-a-single-connection-to-centrifugo-from-different-browser-tabs",children:[]},{value:"What if I need to send push notifications to mobile or web applications?",id:"what-if-i-need-to-send-push-notifications-to-mobile-or-web-applications",children:[]},{value:"How can I know a message is really delivered to a client?",id:"how-can-i-know-a-message-is-really-delivered-to-a-client",children:[]},{value:"Can I publish new messages over a WebSocket connection from a client?",id:"can-i-publish-new-messages-over-a-websocket-connection-from-a-client",children:[]},{value:"How to create a secure channel for two users only (private chat case)?",id:"how-to-create-a-secure-channel-for-two-users-only-private-chat-case",children:[]},{value:"What&#39;s the best way to organize channel configuration?",id:"whats-the-best-way-to-organize-channel-configuration",children:[]},{value:"Does Centrifugo support webhooks?",id:"does-centrifugo-support-webhooks",children:[]},{value:"How scalable is the presence and join/leave features?",id:"how-scalable-is-the-presence-and-joinleave-features",children:[]},{value:"I have not found an answer to my question here:",id:"i-have-not-found-an-answer-to-my-question-here",children:[]}],h={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Answers to popular questions here."),(0,i.kt)("h3",{id:"how-many-connections-can-one-centrifugo-instance-handle"},"How many connections can one Centrifugo instance handle?"),(0,i.kt)("p",null,"This depends on many factors. Used transport, hardware, message rate, size of messages, Centrifugo features enabled, client distribution over channels, compression on/off, etc. So no certain answer to this question exists. Common sense, performance tests, and monitoring can help here. Generally, we suggest not put more than 50-100k clients on one node - but you should measure for your own use case."),(0,i.kt)("p",null,"You can find a description of a test stand with million WebSocket connections in ",(0,i.kt)("a",{parentName:"p",href:"/blog/2020/02/10/million-connections-with-centrifugo"},"this blog post")," \u2013 though the point above is still valid, measure and monitor your own setup."),(0,i.kt)("h3",{id:"memory-usage-per-connection"},"Memory usage per connection?"),(0,i.kt)("p",null,"Depending on transport used and features enabled the amount of RAM required per each connection can vary."),(0,i.kt)("p",null,"For example, you can expect that each WebSocket connection will cost about 30-50 KB of RAM, thus a server with 1 GB of RAM can handle about 20-30k connections."),(0,i.kt)("p",null,"For other real-time transports, the memory usage per connection can differ. So the best way is again \u2013 measure for your case since depending on Centrifugo features used memory usage can vary."),(0,i.kt)("h3",{id:"can-centrifugo-scale-horizontally"},"Can Centrifugo scale horizontally?"),(0,i.kt)("p",null,"Short answer: yes, it can. It can do this using built-in engines: Redis, KeyDB, Tarantool, or Nats broker."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/engines"},"engines")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/design#scalability-considerations"},"scalability considerations"),"."),(0,i.kt)("h3",{id:"message-delivery-model"},"Message delivery model"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/design#message-delivery-model"},"design overview")),(0,i.kt)("h3",{id:"message-order-guarantees"},"Message order guarantees"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/design#message-order-guarantees"},"design overview"),"."),(0,i.kt)("h3",{id:"should-i-create-channels-explicitly"},"Should I create channels explicitly?"),(0,i.kt)("p",null,"No. By default, channels are created automatically as soon as the first client subscribed to it. And destroyed automatically when the last client unsubscribes from a channel."),(0,i.kt)("p",null,"When history inside the channel is on then a window of last messages is kept automatically during the retention period. So a client that comes later and subscribes to a channel can retrieve those messages using the call to history (or maybe by using the automatic recovery feature)."),(0,i.kt)("h3",{id:"what-about-best-practices-with-the-number-of-channels"},"What about best practices with the number of channels?"),(0,i.kt)("p",null,"Channel is a very lightweight ephemeral entity - Centrifugo can deal with lots of channels, don't be afraid to use many channels."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"But")," keep in mind that one client should not be subscribed to lots of channels at the same moment (since this makes the connection process heavy for a client). Using no more than several channels for a client is what you should try to achieve. A good analogy here is writing SQL queries \u2013 you need to make sure you return content using a fixed amount of database queries, as soon as more entries on your page result in more queries - your pages start working very slow at some point. The same for channels - you better deliver real-time events over a fixed amount of channels. It takes a separate frame for a client to subscribe to a single channel \u2013 more frames mean a more heavy initial connection."),(0,i.kt)("h3",{id:"presence-for-chat-apps---online-status-of-your-contacts"},"Presence for chat apps - online status of your contacts"),(0,i.kt)("p",null,"While presence is a good feature it does not fit well for some apps. For example, if you make a chat app - you may probably use a single personal channel for each user. In this case, you cannot find who is online at moment using the built-in Centrifugo presence feature as users do not share a common channel."),(0,i.kt)("p",null,"You can solve this using your own separate service that tracks the online status of your users (for example in Redis) and has a bulk API that returns online status approximation for a list of users. This way you will have an efficient scalable way to deal with online statuses. This is also available as ",(0,i.kt)("a",{parentName:"p",href:"/docs/pro/user_status"},"Centrifugo PRO feature"),"."),(0,i.kt)("h3",{id:"centrifugo-stops-accepting-new-connections-why"},"Centrifugo stops accepting new connections, why?"),(0,i.kt)("p",null,"The most popular reason behind this is reaching the open file limit. You can make it higher, we described how to do this ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/infra_tuning"},"nearby in this doc"),". Also, check out ",(0,i.kt)("a",{parentName:"p",href:"/blog/2020/11/12/scaling-websocket"},"an article in our blog")," which mentions possible problems when dealing with many persistent connections like WebSocket."),(0,i.kt)("h3",{id:"can-i-use-centrifugo-without-reverse-proxy-like-nginx-before-it"},"Can I use Centrifugo without reverse-proxy like Nginx before it?"),(0,i.kt)("p",null,"Yes, you can - Go standard library designed to allow this. Though proxy before Centrifugo can be very useful for load balancing clients."),(0,i.kt)("h3",{id:"does-centrifugo-work-with-http2"},"Does Centrifugo work with HTTP/2?"),(0,i.kt)("p",null,"Yes, Centrifugo works with HTTP/2."),(0,i.kt)("p",null,"You can disable HTTP/2 running Centrifugo server with ",(0,i.kt)("inlineCode",{parentName:"p"},"GODEBUG")," environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'GODEBUG="http2server=0" centrifugo -c config.json\n')),(0,i.kt)("p",null,"Keep in mind that when using WebSocket you are working only over HTTP/1.1, so HTTP/2 support mostly makes sense for SockJS HTTP transports."),(0,i.kt)("h3",{id:"is-there-a-way-to-use-a-single-connection-to-centrifugo-from-different-browser-tabs"},"Is there a way to use a single connection to Centrifugo from different browser tabs?"),(0,i.kt)("p",null,"If the underlying transport is HTTP-based, and you use HTTP/2 then this will work automatically. For WebSocket, each browser tab creates a new connection."),(0,i.kt)("h3",{id:"what-if-i-need-to-send-push-notifications-to-mobile-or-web-applications"},"What if I need to send push notifications to mobile or web applications?"),(0,i.kt)("p",null,"Sometimes it's confusing to see a difference between real-time messages and push notifications. Centrifugo is a real-time messaging server. It can not send push notifications to devices - to Apple iOS devices via APNS, Android devices via GCM, or browsers over Web Push API. This is a goal for another software."),(0,i.kt)("p",null,"But the reasonable question here is how can you know when you need to send a real-time message to an online client or push notification to its device for an offline client. The solution is pretty simple. You can keep critical notifications for a client in the database. And when a client reads a message you should send an ack to your backend marking that notification as read by the client. Periodically you can check which notifications were sent to clients but they have not read it (no read ack received). For such notifications, you can send push notifications to its device using your own or another open-source solution. Look at Firebase for example."),(0,i.kt)("h3",{id:"how-can-i-know-a-message-is-really-delivered-to-a-client"},"How can I know a message is really delivered to a client?"),(0,i.kt)("p",null,"You can, but Centrifugo does not have such an API. What you have to do to ensure your client has received a message is sending confirmation ack from your client to your application backend as soon as the client processed the message coming from the Centrifugo channel."),(0,i.kt)("h3",{id:"can-i-publish-new-messages-over-a-websocket-connection-from-a-client"},"Can I publish new messages over a WebSocket connection from a client?"),(0,i.kt)("p",null,"Centrifugo is designed to stream messages from server to client. Even though it's possible to publish messages into channels directly from a client (when ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," channel option is enabled) - we strongly discourage this in production usage as those messages just go through Centrifugo without any additional control."),(0,i.kt)("p",null,"Theoretically, Centrifugo could resend messages published from the client to your application backend endpoint (i.e. having some sort of webhook built-in) but it does not seem beneficial in terms of overall performance and application architecture. And this will require an extra layer of conventions about Centrifugo-to-backend communication. "),(0,i.kt)("p",null,"So in general when a user generates an event it must be first delivered to your app backend using a convenient way (for example AJAX POST request for web application), processed on the backend (validated, saved into main application database), and then published to Centrifugo using Centrifugo HTTP or GRPC API."),(0,i.kt)("p",null,"Sometimes publishing from a client directly into a channel can be useful though - for personal projects, for demonstrations (like we do in our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/examples"},"examples"),") or if you trust your users and want to build an application without backend. In all cases when you don't need any message control on your backend."),(0,i.kt)("p",null,"It's also possible to utilize the RPC proxy feature \u2013 in this case, you can call RPC over Centrifugo WebSocket which will be translated to an HTTP request to your backend. After receiving this request on the backend you can publish a message to Centrifugo server API. This way you can utilize WebSocket transport between the client and your server in a bidirectional way. HTTP traffic will be concentrated inside your private network."),(0,i.kt)("h3",{id:"how-to-create-a-secure-channel-for-two-users-only-private-chat-case"},"How to create a secure channel for two users only (private chat case)?"),(0,i.kt)("p",null,"There are several ways to achieve it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use a private channel (starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"$"),") - every time a user subscribes to it your backend should provide a sign to confirm that subscription request. Read more in ",(0,i.kt)("a",{parentName:"li",href:"/docs/server/channels#private-channel-prefix"},"channels chapter")),(0,i.kt)("li",{parentName:"ul"},"next is ",(0,i.kt)("a",{parentName:"li",href:"/docs/server/channels#user-channel-boundary"},"user limited channels")," (with ",(0,i.kt)("inlineCode",{parentName:"li"},"#"),") - you can create a channel with a name like ",(0,i.kt)("inlineCode",{parentName:"li"},"dialog#42,567")," to limit subscribers only to the user with id ",(0,i.kt)("inlineCode",{parentName:"li"},"42")," and user with ID ",(0,i.kt)("inlineCode",{parentName:"li"},"567"),", this does not fit well for channels with many or dynamic possible subscribers"),(0,i.kt)("li",{parentName:"ul"},"you can use subscribe proxy feature to validate subscriptions, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/server/proxy"},"chapter about proxy")),(0,i.kt)("li",{parentName:"ul"},"finally, you can create a hard-to-guess channel name (based on some secret key and user IDs or just generate and save this long unique name into your main app database) so other users won't know this channel to subscribe on it. This is the simplest but not the safest way - but can be reasonable to consider in many situations")),(0,i.kt)("h3",{id:"whats-the-best-way-to-organize-channel-configuration"},"What's the best way to organize channel configuration?"),(0,i.kt)("p",null,"In most situations, your application needs several different real-time features. We suggest using namespaces for every real-time feature if it requires some option enabled."),(0,i.kt)("p",null,"For example, if you need join/leave messages for a chat app - create a special channel namespace with this ",(0,i.kt)("inlineCode",{parentName:"p"},"join_leave")," option enabled. Otherwise, your other channels will receive join/leave messages too - increasing load and traffic in the system but not actually used by clients."),(0,i.kt)("p",null,"The same relates to other channel options."),(0,i.kt)("h3",{id:"does-centrifugo-support-webhooks"},"Does Centrifugo support webhooks?"),(0,i.kt)("p",null,"Centrifugo was originally designed in a way where messages mostly flow in one direction: from server to client. In an idiomatic case you publish messages to your backend first, then after saving to your main database publish to channel over Centrifugo API to deliver a real-time message to all active channel subscribers. Now if you need any extra callbacks/webhooks you can call your application backend yourself from the client-side (for example just after connect event fired in the client library). There are several reasons why we can't simply add webhooks \u2013 some of them described in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifugo/issues/195"},"this issue"),"."),(0,i.kt)("p",null,"A bit tricky thing is disconnects. The difficulty is because there is no guarantee that the disconnect code will have time to execute on the client-side (as the client can just switch off its device or simply lose internet connection). If you need to know that client disconnected and program your business logic around this fact then the only reasonable approach is periodically to call your backend from the client-side and update user status somewhere on the backend (use Redis maybe). This is a pretty robust solution where you can't occasionally miss disconnect events."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/server/proxy"},"Proxy feature")," allows integrating Centrifugo with your own session mechanism and provides a way to react to connection events. Also, it opens a road for bidirectional communication with RPC calls. But the note above about disconnects is still true - we can't simply call your app in case of client disconnects as losing one such event can result in broken business logic inside your app."),(0,i.kt)("h3",{id:"how-scalable-is-the-presence-and-joinleave-features"},"How scalable is the presence and join/leave features?"),(0,i.kt)("p",null,"Presence is good for small channels with a reasonable number of subscribers, as soon as there are tons of subscribers presence information becomes very expensive in terms of bandwidth (as it contains full information about all clients in a channel). There is ",(0,i.kt)("inlineCode",{parentName:"p"},"presence_stats")," API method that can be helpful if you only need to know a number of clients (or unique users) in a channel. But in the case of the Redis engine even ",(0,i.kt)("inlineCode",{parentName:"p"},"presence stats")," are not optimized for channels with more than several thousand active subscribers. You may consider using a separate service to deal with presence status information that provides information in near real-time maybe with some reasonable approximation."),(0,i.kt)("p",null,"The same is true for join/leave messages - as soon as you turn on join/leave events for a channel with many subscribers every join/leave event (which generally happen relatively frequently) result in many messages sent to each subscriber in a channel, drastically multiplying amount of messages traveling through the system. So be careful and estimate possible load. There is no magic, unfortunately."),(0,i.kt)("h3",{id:"i-have-not-found-an-answer-to-my-question-here"},"I have not found an answer to my question here:"),(0,i.kt)("p",null,"Ask in our community rooms:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://t.me/joinchat/ABFVWBE0AhkyyhREoaboXQ"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Telegram-Group-orange?style=flat&logo=telegram",alt:"Join the chat at https://t.me/joinchat/ABFVWBE0AhkyyhREoaboXQ"}))," ","\xa0",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/tYgADKx"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/719186998686122046?style=flat&label=Discord&logo=discord",alt:"Join the chat at https://discord.gg/tYgADKx"}))))}d.isMDXComponent=!0}}]);