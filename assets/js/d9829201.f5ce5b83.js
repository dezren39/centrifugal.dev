"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[4016],{9439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={id:"quickstart",sidebar_label:"Quickstart tutorial",title:"Quickstart tutorial \u23f1\ufe0f"},r=void 0,l={unversionedId:"getting-started/quickstart",id:"version-4/getting-started/quickstart",title:"Quickstart tutorial \u23f1\ufe0f",description:"In this tutorial we will build a very simple browser application with Centrifugo. Users will connect to Centrifugo over WebSocket, subscribe to a channel, and start receiving all channel publications (messages published to that channel). In our case, we will send a counter value to all channel subscribers to update counter widget in all open browser tabs in real-time.",source:"@site/versioned_docs/version-4/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/docs/4/getting-started/quickstart",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/getting-started/quickstart.md",tags:[],version:"4",frontMatter:{id:"quickstart",sidebar_label:"Quickstart tutorial",title:"Quickstart tutorial \u23f1\ufe0f"},sidebar:"Introduction",previous:{title:"Install Centrifugo",permalink:"/docs/4/getting-started/installation"},next:{title:"Main highlights",permalink:"/docs/4/getting-started/highlights"}},s={},c=[],u={toc:c};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial we will build a very simple browser application with Centrifugo. Users will connect to Centrifugo over WebSocket, subscribe to a channel, and start receiving all channel publications (messages published to that channel). In our case, we will send a counter value to all channel subscribers to update counter widget in all open browser tabs in real-time."),(0,i.kt)("p",null,"First you need to ",(0,i.kt)("a",{parentName:"p",href:"/docs/4/getting-started/installation"},"install Centrifugo"),". In this example, we are using a binary file release which is fine for development. Once you have Centrifugo binary available on your machine you can generate minimal required configuration file with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./centrifugo genconfig\n")),(0,i.kt)("p",null,"This helper command will generate ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," file in the working directory with a content like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  "token_hmac_secret_key": "bbe7d157-a253-4094-9759-06a8236543f9",\n  "admin_password": "d0683813-0916-4c49-979f-0e08a686b727",\n  "admin_secret": "4e9eafcf-0120-4ddd-b668-8dc40072c78e",\n  "api_key": "d7627bb6-2292-4911-82e1-615c0ed3eebb",\n  "allowed_origins": []\n}\n')),(0,i.kt)("p",null,"Now we can start a server. Let's start Centrifugo with a built-in admin web interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"./centrifugo --config=config.json --admin\n")),(0,i.kt)("p",null,"We could also enable the admin web interface by not using ",(0,i.kt)("inlineCode",{parentName:"p"},"--admin")," flag but by adding ",(0,i.kt)("inlineCode",{parentName:"p"},'"admin": true')," option to the JSON configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  "token_hmac_secret_key": "bbe7d157-a253-4094-9759-06a8236543f9",\n  "admin": true,\n  "admin_password": "d0683813-0916-4c49-979f-0e08a686b727",\n  "admin_secret": "4e9eafcf-0120-4ddd-b668-8dc40072c78e",\n  "api_key": "d7627bb6-2292-4911-82e1-615c0ed3eebb",\n  "allowed_origins": []\n}\n')),(0,i.kt)("p",null,"And then running Centrifugo only with a path to a configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"./centrifugo --config=config.json\n")),(0,i.kt)("p",null,"Now open ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000"),". You should see Centrifugo admin web panel. Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"admin_password")," value from the configuration file to log in (in our case it's ",(0,i.kt)("inlineCode",{parentName:"p"},"d0683813-0916-4c49-979f-0e08a686b727"),", but you will have a different value)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin web panel",src:n(6608).Z,width:"2646",height:"1342"})),(0,i.kt)("p",null,"Inside the admin panel, you should see that one Centrifugo node is running, and it does not have connected clients:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin web panel",src:n(5724).Z,width:"2346",height:"896"})),(0,i.kt)("p",null,"Now let's create ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file with our simple app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},"<html>\n\n<head>\n  <title>Centrifugo quick start</title>\n</head>\n\n<body>\n  <div id=\"counter\">-</div>\n  <script src=\"https://unpkg.com/centrifuge@3.1.0/dist/centrifuge.js\"><\/script>\n  <script type=\"text/javascript\">\n    const container = document.getElementById('counter');\n\n    const centrifuge = new Centrifuge(\"ws://localhost:8000/connection/websocket\", {\n      token: \"<TOKEN>\"\n    });\n\n    centrifuge.on('connecting', function (ctx) {\n      console.log(`connecting: ${ctx.code}, ${ctx.reason}`);\n    }).on('connected', function (ctx) {\n      console.log(`connected over ${ctx.transport}`);\n    }).on('disconnected', function (ctx) {\n      console.log(`disconnected: ${ctx.code}, ${ctx.reason}`);\n    }).connect();\n\n    const sub = centrifuge.newSubscription(\"channel\");\n\n    sub.on('publication', function (ctx) {\n      container.innerHTML = ctx.data.value;\n      document.title = ctx.data.value;\n    }).on('subscribing', function (ctx) {\n      console.log(`subscribing: ${ctx.code}, ${ctx.reason}`);\n    }).on('subscribed', function (ctx) {\n      console.log('subscribed', ctx);\n    }).on('unsubscribed', function (ctx) {\n      console.log(`unsubscribed: ${ctx.code}, ${ctx.reason}`);\n    }).subscribe();\n  <\/script>\n</body>\n\n</html>\n")),(0,i.kt)("p",null,"Note that we are using ",(0,i.kt)("inlineCode",{parentName:"p"},"centrifuge-js")," 3.1.0 in this example, getting it from CDN, you better use its latest version at the moment of reading this tutorial. In real Javascript app you most probably will load ",(0,i.kt)("inlineCode",{parentName:"p"},"centrifuge")," from NPM."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," above we created an instance of a Centrifuge client passing Centrifugo server default WebSocket endpoint address to it, then we subscribed to a channel called ",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," and provided a callback function to process incoming real-time messages (publications). Upon receiving a new publication we update page HTML and setting counter value to page title. We call ",(0,i.kt)("inlineCode",{parentName:"p"},".subscribe()")," to initialte subscription and ",(0,i.kt)("inlineCode",{parentName:"p"},".connect()")," method of Client to start a WebSocket connection. We also handle Client state transitions (disconnected, connecting, connected) and Subscription state transitions (unsubscribed, subscribing, subscribed) \u2013 see detailed description in ",(0,i.kt)("a",{parentName:"p",href:"/docs/4/transports/client_api"},"client SDK spec"),"."),(0,i.kt)("p",null,"Now you need to serve this file with an HTTP server. In a real-world Javascript application, you will serve your HTML files with a web server of your choice \u2013 but for this simple example we can use a simple built-in Centrifugo static file server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./centrifugo serve --port 3000\n")),(0,i.kt)("p",null,"Alternatively, if you have Python 3 installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m http.server 3000\n")),(0,i.kt)("p",null,"These commands start a simple static file web server that serves the current directory on port 3000. Make sure you still have Centrifugo server running. Open ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),"."),(0,i.kt)("p",null,"Now if you look at browser developer tools or in Centrifugo logs you will notice that a connection can not be successfully established:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2021-09-01 10:17:33 [INF] request Origin is not authorized due to empty allowed_origins origin=http://localhost:3000\n")),(0,i.kt)("p",null,"That's because we have not set ",(0,i.kt)("inlineCode",{parentName:"p"},"allowed_origins")," in the configuration. Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"allowed_origins")," like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  ...\n  "allowed_origins": ["http://localhost:3000"]\n}\n')),(0,i.kt)("p",null,"Allowed origins is a security option for request originating from web browsers \u2013 see ",(0,i.kt)("a",{parentName:"p",href:"/docs/4/server/configuration#allowed_origins"},"more details")," in server configuration docs. ",(0,i.kt)("strong",{parentName:"p"},"Restart Centrifugo")," after modifying ",(0,i.kt)("inlineCode",{parentName:"p"},"allowed_origins")," in a configuration file."),(0,i.kt)("p",null,"Now if you reload a browser window with an application you should see new information logs in server output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'2022-06-10 09:44:21 [INF] invalid connection token error="invalid token: token format is not valid" client=a65a8463-6a36-421d-814a-0083c8836529\n2022-06-10 09:44:21 [INF] disconnect after handling command client=a65a8463-6a36-421d-814a-0083c8836529 command="id:1  connect:{token:\\"<TOKEN>\\"  name:\\"js\\"}" reason="invalid token" user=\n')),(0,i.kt)("p",null,"We still can not connect. That's because the client should provide a valid JWT (JSON Web Token) to authenticate itself. This token ",(0,i.kt)("strong",{parentName:"p"},"must be generated on your backend")," and passed to a client-side (over template variables or using separate AJAX call \u2013 whatever way you prefer). Since in our simple example we don't have an application backend we can quickly generate an example token for a user using ",(0,i.kt)("inlineCode",{parentName:"p"},"centrifugo")," sub-command ",(0,i.kt)("inlineCode",{parentName:"p"},"gentoken"),". Like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./centrifugo gentoken -u 123722\n")),(0,i.kt)("p",null,"\u2013 where ",(0,i.kt)("inlineCode",{parentName:"p"},"-u")," flag sets user ID. The output should be like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'HMAC SHA-256 JWT for user "123722" with expiration TTL 168h0m0s:\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM3MjIiLCJleHAiOjE2NTU0NDgyOTl9.mUU9s5kj3yqp-SAEqloGy8QBgsLg0llA7lKUNwtHRnw\n')),(0,i.kt)("p",null,"\u2013 you will have another token value since this one is based on randomly generated ",(0,i.kt)("inlineCode",{parentName:"p"},"token_hmac_secret_key")," from the configuration file we created at the beginning of this tutorial. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/4/server/authentication"},"token authentication docs")," for information about proper token generation in a real application."),(0,i.kt)("p",null,"Now we can copy generated HMAC SHA-256 JWT and paste it into Centrifugo constructor instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"<TOKEN>")," placeholder in ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file. I.e.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket", {\n    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM3MjIiLCJleHAiOjE2NTU0NDgyOTl9.mUU9s5kj3yqp-SAEqloGy8QBgsLg0llA7lKUNwtHRnw"\n});\n')),(0,i.kt)("p",null,"If you reload your browser tab \u2013 the connection will be successfully established, but the client still can not subscribe to a channel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'2022-06-10 09:45:49 [INF] client command error error="permission denied" client=88116489-350f-447f-9ff3-ab61c9341efe code=103 command="id:2  subscribe:{channel:\\"channel\\"}" reply="id:2  error:{code:103  message:\\"permission denied\\"}" user=123722\n')),(0,i.kt)("p",null,"We need to give client a permission to subscribe on the channel ",(0,i.kt)("inlineCode",{parentName:"p"},"channel"),". There are several ways to do this. For example, client can provide ",(0,i.kt)("a",{parentName:"p",href:"/docs/4/server/channel_token_auth"},"subscription JWT")," for a channel. But here we will use an option to allow all authenticated clients subscribe to any channel."),(0,i.kt)("p",null,"To do this let's extend a server configuration with ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_subscribe_for_client")," option: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  "token_hmac_secret_key": "bbe7d157-a253-4094-9759-06a8236543f9",\n  "admin": true,\n  "admin_password": "d0683813-0916-4c49-979f-0e08a686b727",\n  "admin_secret": "4e9eafcf-0120-4ddd-b668-8dc40072c78e",\n  "api_key": "d7627bb6-2292-4911-82e1-615c0ed3eebb",\n  "allowed_origins": ["http://localhost:3000"],\n  "allow_subscribe_for_client": true\n}\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A good practice with Centrifugo is configuring ",(0,i.kt)("a",{parentName:"p",href:"/docs/4/server/channels#channel-namespaces"},"channel namespaces")," for different types of real-time features you have in the application. By defining namespaces you can achieve a granular control over channel behavior and permissions. ")),(0,i.kt)("p",null,"Restart Centrifugo \u2013 and after doing this everything should start working. Client can successfully connect and successfully subscribe to a channel now."),(0,i.kt)("p",null,"Open developer tools and look at WebSocket frames panel, you should see sth like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connected",src:n(3193).Z,width:"3070",height:"1542"})),(0,i.kt)("p",null,"Note, that in this example we generated connection JWT \u2013 but it has expiration time, so after some time Centrifugo stops accepting those tokens. In real-life you need to add a token refresh function to a client to rotate tokens. See out ",(0,i.kt)("a",{parentName:"p",href:"/docs/4/transports/client_api"},"client API SDK spec"),"."),(0,i.kt)("p",null,"OK, the last thing we need to do here is to publish a new counter value to a channel and make sure our app works properly."),(0,i.kt)("p",null,"We can do this over Centrifugo API sending an HTTP request to default API endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/api"),", but let's do this over the admin web panel first."),(0,i.kt)("p",null,"Open Centrifugo admin web panel in another browser tab (",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8000/"},"http://localhost:8000/"),") and go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions")," section. Select publish action, insert channel name that you want to publish to \u2013 in our case this is a string ",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," and insert into ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," area JSON like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": 1\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin publish",src:n(8410).Z,width:"2482",height:"1282"})),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"PUBLISH")," button and check out the application browser tab \u2013 counter value must be immediately received and displayed."),(0,i.kt)("p",null,"Open several browser tabs with our app and make sure all tabs receive a message as soon as you publish it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Message received",src:n(74).Z,width:"3068",height:"1310"})),(0,i.kt)("p",null,"BTW, let's also look at how you can publish data to a channel over Centrifugo server API from a terminal using ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," tool:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey d7627bb6-2292-4911-82e1-615c0ed3eebb" \\\n  --request POST \\\n  --data \'{"method": "publish", "params": {"channel": "channel", "data": {"value": 2}}}\' \\\n  http://localhost:8000/api\n')),(0,i.kt)("p",null,"\u2013 where for ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header we set ",(0,i.kt)("inlineCode",{parentName:"p"},"api_key")," value from Centrifugo config file generated above."),(0,i.kt)("p",null,"We did it! We built the simplest browser real-time app with Centrifugo and its Javascript client. It does not have a backend, it's not very useful, to be honest, but it should give you an insight on how to start working with Centrifugo server. Read more about Centrifugo server in the next documentations chapters \u2013 it can do much much more than we just showed here. ",(0,i.kt)("a",{parentName:"p",href:"/docs/4/getting-started/integration"},"Integration guide")," describes a process of idiomatic Centrifugo integration with your application backend."))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,h=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6608:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quick_start_admin_v4-891e873d147fc9c979c0dd99b5cad8f4.png"},5724:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quick_start_logged_in_v4-e81864800a451fd7119a91f51c1b466a.png"},74:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quick_start_message_v4-81964ce5777a2c65910116a04fa6e371.png"},8410:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quick_start_publish_v4-54ba7f45435ba110190f21e2c3e1dd24.png"},3193:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quick_start_ws_frames_v4-9e299975b617ef20f961ed68692e67d9.png"}}]);