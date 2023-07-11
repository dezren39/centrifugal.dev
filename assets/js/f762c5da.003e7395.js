"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[6562],{5559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const a={title:"Centrifugo v5 released",tags:["centrifugo","release"],description:"We are excited to announce a new version of Centrifugo. It's an evolutionary step which makes Centrifugo cleaner and more intuitive to use.",author:"Centrifugal team",authorTitle:"\ud83d\udcbb\u2728\ud83d\udd2e\u2728\ud83d\udcbb",authorImageURL:"/img/logo_animated.svg",image:"/img/v5.jpg",hide_table_of_contents:!1},r=void 0,s={permalink:"/blog/2023/06/29/centrifugo-v5-released",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/blog/2023-06-29-centrifugo-v5-released.md",source:"@site/blog/2023-06-29-centrifugo-v5-released.md",title:"Centrifugo v5 released",description:"We are excited to announce a new version of Centrifugo. It's an evolutionary step which makes Centrifugo cleaner and more intuitive to use.",date:"2023-06-29T00:00:00.000Z",formattedDate:"June 29, 2023",tags:[{label:"centrifugo",permalink:"/blog/tags/centrifugo"},{label:"release",permalink:"/blog/tags/release"}],readingTime:12.635,hasTruncateMarker:!0,authors:[{name:"Centrifugal team",title:"\ud83d\udcbb\u2728\ud83d\udd2e\u2728\ud83d\udcbb",imageURL:"/img/logo_animated.svg"}],frontMatter:{title:"Centrifugo v5 released",tags:["centrifugo","release"],description:"We are excited to announce a new version of Centrifugo. It's an evolutionary step which makes Centrifugo cleaner and more intuitive to use.",author:"Centrifugal team",authorTitle:"\ud83d\udcbb\u2728\ud83d\udd2e\u2728\ud83d\udcbb",authorImageURL:"/img/logo_animated.svg",image:"/img/v5.jpg",hide_table_of_contents:!1},nextItem:{title:"Setting up Keycloak SSO authentication flow and connecting to Centrifugo WebSocket",permalink:"/blog/2023/03/31/keycloak-sso-centrifugo"}},l={authorsImageUrls:[void 0]},c=[{value:"Dropping old client protocol",id:"dropping-old-client-protocol",level:2},{value:"Token behaviour adjustments in SDKs",id:"token-behaviour-adjustments-in-sdks",level:2},{value:"history_meta_ttl refactoring",id:"history_meta_ttl-refactoring",level:2},{value:"Node communication protocol update",id:"node-communication-protocol-update",level:2},{value:"New HTTP API format",id:"new-http-api-format",level:2},{value:"OpenAPI spec and Swagger UI",id:"openapi-spec-and-swagger-ui",level:2},{value:"OpenTelemetry for server API",id:"opentelemetry-for-server-api",level:2},{value:"Separate config for subscription token",id:"separate-config-for-subscription-token",level:2},{value:"Unknown config keys warnings",id:"unknown-config-keys-warnings",level:2},{value:"Simplifying protocol debug with Postman",id:"simplifying-protocol-debug-with-postman",level:2},{value:"The future of SockJS",id:"the-future-of-sockjs",level:2},{value:"Introducing Centrifugal Labs LTD",id:"introducing-centrifugal-labs-ltd",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In Centrifugo v5 we're phasing out old client protocol support, introducing a more intuitive HTTP API, adjusting token management behaviour in SDKs, improving configuration process, and refactoring the history meta ttl option. As the result you get a cleaner, more user-friendly, and optimized Centrifugo experience. And we have important news about the project - check it out in the end of this post."),(0,i.kt)("img",{src:"/img/v5.jpg"}),(0,i.kt)("admonition",{title:"What is Centrifugo?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Centrifugo is an open-source scalable real-time messaging server. Centrifugo can instantly deliver messages to application online users connected over supported transports (WebSocket, HTTP-streaming, SSE/EventSource, GRPC, SockJS, WebTransport). Centrifugo has the concept of a channel \u2013 so it's a user-facing PUB/SUB server."),(0,i.kt)("p",{parentName:"admonition"},"Centrifugo is language-agnostic and can be used to build chat apps, live comments, multiplayer games, real-time data visualizations, collaborative tools, etc. in combination with any backend. It is well suited for modern architectures and allows decoupling the business logic from the real-time transport layer."),(0,i.kt)("p",{parentName:"admonition"},"Several official client SDKs for browser and mobile development wrap the bidirectional protocol. In addition, Centrifugo supports a unidirectional approach for simple use cases with no SDK dependency.")),(0,i.kt)("p",null,"Let's proceed and take a look at most notable changes of Centrifugo v5."),(0,i.kt)("h2",{id:"dropping-old-client-protocol"},"Dropping old client protocol"),(0,i.kt)("p",null,"With the introduction of Centrifugo v4, our previous major release, ",(0,i.kt)("a",{parentName:"p",href:"/blog/2022/07/19/centrifugo-v4-released#unified-client-sdk-api"},"we rolled out")," a new version of the client protocol along with a set of client SDKs designed to work in conjunction with it. Nevertheless, we maintained support for the old client protocol in Centrifugo v4 to facilitate a seamless migration of applications."),(0,i.kt)("p",null,"In Centrifugo v5 we are discontinuing support for the old protocol. If you have been using Centrifugo v4 with the latest SDKs, this change should have no impact on you. From our perspective, removing support for the old protocol allows us to eliminate a considerable amount of non-obvious branching in the source code and cleanup Protobuf schema definitions."),(0,i.kt)("h2",{id:"token-behaviour-adjustments-in-sdks"},"Token behaviour adjustments in SDKs"),(0,i.kt)("p",null,"In Centrifugo v5 we are adjusting ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/client_api"},"client SDK specification")," in the aspect of connection token management. Previously, returning an empty token string from ",(0,i.kt)("inlineCode",{parentName:"p"},"getToken")," callback resulted in client disconnection with ",(0,i.kt)("inlineCode",{parentName:"p"},"unauthorized")," reason."),(0,i.kt)("p",null,"There was some problem with it though. We did not take into account the fact that empty token may be a valid scenario actually. Centrifugo supports options to avoid using token at all for anonymous access. So the lack of possibility to switch between ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"no token")," scenarios did not allow users to easily implement login/logout workflow. The only way was re-initializing SDK."),(0,i.kt)("p",null,"Now returning an empty string from ",(0,i.kt)("inlineCode",{parentName:"p"},"getToken")," is a valid scenario which won't result into disconnect on the client side. It's still possible to disconnect client by returning a special error from ",(0,i.kt)("inlineCode",{parentName:"p"},"getToken")," function."),(0,i.kt)("p",null,"And we are putting back ",(0,i.kt)("inlineCode",{parentName:"p"},"setToken")," method to our SDKs \u2013 so it's now possible to reset the token to be empty upon user logout."),(0,i.kt)("p",null,"An abstract example in Javascript which demonstrates how login/logout flow may be now implemented with our SDK:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const centrifuge = new Centrifuge('ws://localhost:8000/connection/websocket', {\n    // Provide function which returns empty string for anonymous users,\n    // and proper JWT for authenticated users.\n    getToken: getTokenImplementation\n});\ncentrifuge.connect();\n\nloginButton.addEventListener('click', function() {\n    centrifuge.disconnect();\n    // Do actual login here.\n    centrifuge.connect();\n});\n\nlogoutButton.addEventListener('click', function() {\n    centrifuge.disconnect();\n    // Reset token - so that getToken will be called on next connect attempt.\n    centrifuge.setToken(\"\");\n    // Do actual logout here.\n    centrifuge.connect();\n});\n")),(0,i.kt)("p",null,"We updated all our SDKs to inherit described behaviour - check out v5 ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/migration_v5"},"migration guide")," for more details."),(0,i.kt)("h2",{id:"history_meta_ttl-refactoring"},"history_meta_ttl refactoring"),(0,i.kt)("p",null,"One of Centrifugo's key advantages for real-time messaging tasks is its ephemeral channels and per-channel history. In version 5, we've improved one aspect of handling history by offering users the ability to tune the history meta TTL option at the channel namespace level."),(0,i.kt)("p",null,"The history meta TTL is the duration Centrifugo retains meta information about each channel stream, such as the latest offset and current stream epoch. This data allows users to successfully restore connections upon reconnection, particularly useful when subscribed to mostly inactive channels where publications are infrequent. Although the history meta TTL can usually be reasonably large (significantly larger than history TTL), there are certain scenarios where it's beneficial to minimize it as much as possible."),(0,i.kt)("p",null,"One such use case is illustrated in this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/examples/tree/master/v4/go_async_processing"},"example"),". Using Centrifugo SDK and channels with history, it's possible to reliably stream results of asynchronous tasks to clients."),(0,i.kt)("p",null,"As another example, consider a ChatGPT use case where clients ask questions, subscribe to a channel with the answer, and then the response is streamed towards the client token by token. This all may be done over a secure, separate channel protected with a token. With the ability to use a relatively small history meta TTL in the channel namespace, implementing such things is now simpler."),(0,i.kt)("p",null,"Hence, ",(0,i.kt)("inlineCode",{parentName:"p"},"history_meta_ttl")," is now an option at the channel namespace level (instead of per-engine). However, setting it is optional as we have a global default value for it - see ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/channels#history_meta_ttl"},"details in the doc"),"."),(0,i.kt)("h2",{id:"node-communication-protocol-update"},"Node communication protocol update"),(0,i.kt)("p",null,"When running in cluster Centrifugo nodes can communicate between each other using broker's PUB/SUB. Nodes exchange some information - like statistics, emulation requests, etc."),(0,i.kt)("p",null,"In Centrifugo v5 we are simplifying and making inter-node communication protocol slightly faster by removing extra encoding layers from it's format. Something similar to what we did for our client protocol in Centrifugo v4."),(0,i.kt)("p",null,"This change, however, leads to an incompatibility between Centrifugo v4 and v5 nodes in terms of their communication protocols. Consequently, Centrifugo v5 cannot be part of a cluster with Centrifugo v4 nodes."),(0,i.kt)("h2",{id:"new-http-api-format"},"New HTTP API format"),(0,i.kt)("p",null,"From the beginning Centrifugo HTTP API exposed one ",(0,i.kt)("inlineCode",{parentName:"p"},"/api")," endpoint to make requests with all command types."),(0,i.kt)("p",null,"To work properly HTTP API had to add one additional layer to request JSON payload to be able to distinguish between different API methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey API_KEY" \\\n  --request POST \\\n  --data \'{"method": "publish", "params": {"channel": "test", "data": {"x": 1}}}\' \\\n  http://localhost:8000/api\n')),(0,i.kt)("p",null,"And it worked fine. It additionally supported request batching where users could send many commands to Centrifugo in one request using line-delimited JSON."),(0,i.kt)("p",null,"However, the fact that we were accommodating various commands via a single API endpoint resulted in nested serialized payloads for each command. The top-level method would determine the structure of the params. We addressed this issue in the client protocol in Centrifugo v4, and now we're addressing a similar issue in the inter-node communication protocol in Centrifugo v5."),(0,i.kt)("p",null,"At some point we introduced GRPC API in Centrifugo. In GRPC case we don't have a way to send batches of commands without defining a separate method to do so."),(0,i.kt)("p",null,"These developments highlighted the need for us to align the HTTP API format more closely with the GRPC API. Specifically, we need to separate the command method from the actual method payload, moving towards a structure like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "X-API-Key: API_KEY" \\\n  --request POST \\\n  --data \'{"channel": "test", "data": {"x": 1}}\' \\\n  http://localhost:8000/api/publish\n')),(0,i.kt)("p",null,"Note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/api/publish")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"/api")," in path"),(0,i.kt)("li",{parentName:"ul"},"payload does not include ",(0,i.kt)("inlineCode",{parentName:"li"},"method")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"params")," keys anymore"),(0,i.kt)("li",{parentName:"ul"},"we also support ",(0,i.kt)("inlineCode",{parentName:"li"},"X-API-Key")," header for setting API key to be closer to OpenAPI specification (see more about OpenAPI below)")),(0,i.kt)("p",null,"In v5 we implemented the approach above. Many thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/StringNick"},"@StringNick")," for the help with the implementation and discussions."),(0,i.kt)("p",null,"Our HTTP and GRPC API are very similar now. We've also introduced a new batch method to send multiple commands in both HTTP and GRPC APIs, a feature that was previously unavailable in GRPC."),(0,i.kt)("p",null,"Documentation for v5 was updated to reflect this change. But it worth noting - old API format id still supported. It will be supported for some time while we are migrating our HTTP API libraries to use modern API version. Hopefully users won't be affected by this migration a lot, just switching to a new version of library at some point."),(0,i.kt)("h2",{id:"openapi-spec-and-swagger-ui"},"OpenAPI spec and Swagger UI"),(0,i.kt)("p",null,"One additional benefit of moving to the new HTTP format is the possibility to define a clear OpenAPI schema for each API method Centrifugo has. It was previously quite tricky due to the fact we had one endpoint capable to work with all kinds of commands."),(0,i.kt)("p",null,"This change paves the way for generating HTTP clients based on our OpenAPI specification."),(0,i.kt)("p",null,"We now have Swagger UI built-in. To access it, launch Centrifugo with the ",(0,i.kt)("inlineCode",{parentName:"p"},'"swagger": true')," option and navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/swagger"),"."),(0,i.kt)("p",null,"The Swagger UI operates on the internal port, so if you're running Centrifugo using our Kubernetes Helm chart, it won't be exposed to the same ingress as client connection endpoints. This is similar to how our Prometheus, admin, API, and debug endpoints currently work."),(0,i.kt)("h2",{id:"opentelemetry-for-server-api"},"OpenTelemetry for server API"),(0,i.kt)("p",null,"Another good addition is an OpenTelemetry tracing support for HTTP and GRPC server API requests. If you are using OpenTelemetry in your services you can now now enable tracing export in Centrifugo and find Centrifugo API request exported traces in your tracing collector UI."),(0,i.kt)("p",null,"Description and simple example with Jaeger may be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/observability#opentelemetry"},"in observability chapter"),". We only support OTLP HTTP export format and trace format defined in W3C spec: ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/trace-context/"},"https://www.w3.org/TR/trace-context/"),"."),(0,i.kt)("h2",{id:"separate-config-for-subscription-token"},"Separate config for subscription token"),(0,i.kt)("p",null,"With the introduction of JWKS support in Centrifugo v4 (a way to validate JWT tokens using a remote endpoint which manages keys and key rotation - see ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7517"},"JWK spec"),") Centrifugo users can rely on JWKS provider (like Keycloak, AWS Cognito) for making authentication."),(0,i.kt)("p",null,"But at the same time developers may want to work with channels using subscription tokens managed in a custom way \u2013 without using the same JWKS configuration used for connection tokens."),(0,i.kt)("p",null,"Centrifugo v5 allows doing by introducing the ",(0,i.kt)("inlineCode",{parentName:"p"},"separate_subscription_token_config")," option."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"separate_subscription_token_config")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," Centrifugo does not look at general token options at all when verifying subscription tokens and uses config options starting from ",(0,i.kt)("inlineCode",{parentName:"p"},"subscription_token_")," prefix instead. "),(0,i.kt)("p",null,"Here is an example how to use JWKS for connection tokens, but have HMAC-based verification for subscription tokens:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  "token_jwks_public_endpoint": "https://example.com/openid-connect/certs",\n  "separate_subscription_token_config": true,\n  "subscription_token_hmac_secret_key": "separate_secret_which_must_be_strong"\n}\n')),(0,i.kt)("h2",{id:"unknown-config-keys-warnings"},"Unknown config keys warnings"),(0,i.kt)("p",null,"With every release, Centrifugo offers more and more options. One thing we've noticed is that some options from previous Centrifugo options, which were already removed, still persist in the user's configuration file."),(0,i.kt)("p",null,"Another issue is that a single typo in the configuration key can cost hours of debugging especially for Centrifugo new users. What is worse, the typo might result in unexpected behavior if the feature isn't properly tested before being run in production."),(0,i.kt)("p",null,"In Centrifugo v5, we are addressing these problems. Now, Centrifugo logs on WARN level about unknown keys found in the configuration upon server start-up. Not only in the configuration file but also verifying the validity of environment variables (looking at those starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"CENTRIFUGO_")," prefix). This should help clean up the configuration to align with the latest Centrifugo release and catch typos at an early stage."),(0,i.kt)("p",null,"It looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"08:25:33 [WRN] unknown key found in the namespace object key=watch namespace_name=xx\n08:25:33 [WRN] unknown key found in the proxy object key=type proxy_name=connect\n08:25:33 [WRN] unknown key found in the configuration file key=granulr_proxy_mode\n08:25:33 [WRN] unknown key found in the environment key=CENTRIFUGO_ADDRES\n")),(0,i.kt)("p",null,"These warnings do not prevent server to start so you can gradually clean up the configuration."),(0,i.kt)("h2",{id:"simplifying-protocol-debug-with-postman"},"Simplifying protocol debug with Postman"),(0,i.kt)("p",null,"Centrifugo v5 supports a special url parameter for bidirectional websocket which turns on using native WebSocket frame ping-pong mechanism instead of server-to-client application level pings Centrifugo uses by default. This simplifies debugging Centrifugo protocol with tools like Postman, wscat, websocat, etc. "),(0,i.kt)("p",null,"Previously it was inconvenient due to the fact Centrifugo sends periodic ping message to the client (",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," in JSON protocol scenario) and expects pong response back within some time period. Otherwise Centrifugo closes connection. This results in problems with mentioned tools because you had to manually send ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," pong message upon ping message. So typical session in ",(0,i.kt)("inlineCode",{parentName:"p"},"wscat")," could look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f wscat --connect ws://localhost:8000/connection/websocket\nConnected (press CTRL+C to quit)\n> {"id": 1, "connect": {}}\n< {"id":1,"connect":{"client":"9ac9de4e-5289-4ad6-9aa7-8447f007083e","version":"0.0.0","ping":25,"pong":true}}\n< {}\nDisconnected (code: 3012, reason: "no pong")\n')),(0,i.kt)("p",null,"The parameter is called ",(0,i.kt)("inlineCode",{parentName:"p"},"cf_ws_frame_ping_pong"),", to use it connect to Centrifugo bidirectional WebSocket endpoint like ",(0,i.kt)("inlineCode",{parentName:"p"},"ws://localhost:8000/websocket/connection?cf_ws_frame_ping_pong=true"),". Here is an example which demonstrates working with Postman WebSocket where we connect to local Centrifugo and subscribe to two channels ",(0,i.kt)("inlineCode",{parentName:"p"},"test1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test2"),":"),(0,i.kt)("video",{width:"100%",loop:!0,autoPlay:"autoplay",muted:!0,controls:"",src:"/img/postman.mp4"}),(0,i.kt)("p",null,"You can then proceed to Centrifugo ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/admin_web"},"admin web UI"),", publish something to these channels and see publications in Postman."),(0,i.kt)("p",null,"Note, how we sent several JSON commands in one WebSocket frame to Centrifugo from Postman in the example above - this is possible since Centrifugo protocol supports batches of commands in line-delimited format."),(0,i.kt)("p",null,"We consider this feature to be used only for debugging, ",(0,i.kt)("strong",{parentName:"p"},"in production prefer using our SDKs without using ",(0,i.kt)("inlineCode",{parentName:"strong"},"cf_ws_frame_ping_pong")," parameter")," \u2013 because app-level ping-pong is more efficient and our SDKs detect broken connections due to it."),(0,i.kt)("h2",{id:"the-future-of-sockjs"},"The future of SockJS"),(0,i.kt)("p",null,"As you know SockJS is deprecated in Centrifugal ecosystem since Centrifugo v4. In this release we are not removing support for it \u2013 but we may do this in the next release."),(0,i.kt)("p",null,"Unfortunately, SockJS client repo is poorly maintained these days. And some of its iframe-based transports are becoming archaic. If you depend on SockJS and you really need fallback for WebSocket \u2013 consider switching to Centrifugo own bidirectional emulation for the browser which works over HTTP-streaming (using modern fetch API with Readable streams) or SSE. It should be more performant and work without sticky sessions requirement (sticky sessions is an optimization in our implementation). More details may be found in ",(0,i.kt)("a",{parentName:"p",href:"/blog/2022/07/19/centrifugo-v4-released#modern-websocket-emulation-in-javascript"},"Centrifugo v4 release post"),"."),(0,i.kt)("p",null,"If you think SockJS is still required for your use case - reach us out so we could think about the future steps together."),(0,i.kt)("h2",{id:"introducing-centrifugal-labs-ltd"},"Introducing Centrifugal Labs LTD"),(0,i.kt)("p",null,"Finally, some important news we mentioned in the beginning!"),(0,i.kt)("p",null,"Centrifugo is now backed by the company called ",(0,i.kt)("strong",{parentName:"p"},"Centrifugal Labs LTD")," - a Cyprus-registered technology company. This should help us to finally launch ",(0,i.kt)("a",{parentName:"p",href:"/docs/pro/overview"},"Centrifugo PRO")," offering \u2013 the product we have been working on for a couple of years now and which has some unique and powerful features like ",(0,i.kt)("a",{parentName:"p",href:"/docs/pro/analytics"},"real-time analytics")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/pro/push_notifications"},"push notification API"),"."),(0,i.kt)("p",null,"As a Centrifugo user you will start noticing mentions of Centrifugal Labs LTD in our licenses, Github organization, throughout this web site. And that's mostly it - no radical changes at this point. We will still be working on improving Centrifugo trying to find a balance between OSS and PRO versions. Which is difficult TBH \u2013 but we will try."),(0,i.kt)("p",null,"An ideal plan for us \u2013 make Centrifugo development sustainable enough to have the possibility for features from the PRO version flow to the OSS version eventually. The reality may be harder than this of course."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"That's all about most notable things happened in Centrifugo v5. We updated documentation to reflect the changes in v5, also some documentation chapters were rewritten. For example, take a look at the refreshed ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/design"},"Design overview"),". Several more changes and details outlined in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/migration_v5"},"migration guide for Centifugo v5"),". Please feel free to contact in the community rooms if you have questions about the release. And as usual, let the Centrifugal force be with you!"))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);