"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7115],{2309:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294);class i extends o.Component{constructor(){super(),this.onChange=this.onChange.bind(this),this.onClick=this.onClick.bind(this),this.state={config:null,output:"Here will be configuration for v4",logs:"Here will be log of changes made in your config"}}onClick(e){if(!this.state.config)return void alert("Provide a configuration");let t;try{t=JSON.parse(this.state.config)}catch{return void alert("Invalid JSON")}let n=[],o=[],i=function(e){let t="config top-level";return void 0!==e&&(t="namespace {"+e.name+"}"),t},r=function(e,r,a){o.push("`"+e+"` renamed to `"+r+"`");let s=i(a);void 0===a&&(a=t),void 0===a[r]&&void 0!==a[e]&&(a[r]=a[e],delete a[e],n.push("renamed "+e+" to "+r+" in "+s))},a=function(e,r){o.push("`"+e+"` removed");let a=i(r);void 0===r&&(r=t),void 0!==r[e]&&(delete r[e],n.push("removed "+e+" from "+a))},s=function(e,r,a){o.push("`"+e+"` is now required");let s=i(a);void 0===a&&(a=t),void 0===a[e]&&(a[e]=r,n.push("added "+e+" to "+s))};a("use_unlimited_history_by_default"),r("client_anonymous","allow_anonymous_connect_without_token");let l=t;if(s("allow_user_limited_channels",!0),!0===l.protected?a("protected"):(s("allow_subscribe_for_client",!0),r("anonymous","allow_subscribe_for_anonymous")),!0===l.publish&&(r("publish","allow_publish_for_client"),s("allow_publish_for_anonymous",!0)),!0===l.presence&&(!0===l.presence_disabled_for_client?a("presence_disabled_for_client"):(s("allow_presence_for_subscriber",!0),s("allow_presence_for_anonymous",!0))),void 0!==l.history_ttl&&void 0!==l.history_size&&(!0===l.history_disabled_for_client?a("history_disabled_for_client"):(s("allow_history_for_subscriber",!0),s("allow_history_for_anonymous",!0))),!0===l.position?r("position","force_positioning"):a("position"),!0===l.recover?r("recover","force_recovery"):a("recover"),!0===l.join_leave&&s("force_push_join_leave",!0),void 0!==t.namespaces){let e=[];for(let n of t.namespaces)s("allow_user_limited_channels",!0,n),!0===n.protected?a("protected",n):(s("allow_subscribe_for_client",!0,n),r("anonymous","allow_subscribe_for_anonymous",n)),!0===n.publish&&(r("publish","allow_publish_for_client",n),s("allow_publish_for_anonymous",!0,n)),!0===n.presence&&(!0===n.presence_disabled_for_client?a("presence_disabled_for_client",n):(s("allow_presence_for_subscriber",!0,n),s("allow_presence_for_anonymous",!0,n))),void 0!==n.history_ttl&&void 0!==n.history_size&&(!0===n.history_disabled_for_client?a("history_disabled_for_client",n):(s("allow_history_for_subscriber",!0,n),s("allow_history_for_anonymous",!0,n))),!0===n.position?r("position","force_positioning",n):a("position",n),!0===n.recover?r("recover","force_recovery",n):a("recover",n),!0===n.join_leave&&s("force_push_join_leave",!0),e.push(n);t.namespaces=e}this.setState({output:JSON.stringify(t,null,"\t")}),this.setState({logs:JSON.stringify(n,null,"\t")}),console.log(o.join("\n\n"))}onChange(e){this.setState({config:e.target.value})}render(){return o.createElement("div",null,o.createElement("textarea",{onChange:this.onChange,placeholder:"Paste your Centrifugo v3 JSON config here...",style:{width:"100%",height:"300px",border:"2px solid #ccc"}}),o.createElement("button",{onClick:this.onClick},"Convert"),o.createElement("pre",{style:{marginTop:"10px"}},this.state.output),o.createElement("pre",{style:{marginTop:"10px"}},this.state.logs))}}},1329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),i=(n(7294),n(3905)),r=n(2309);const a={id:"migration_v4",title:"Migrating to v4"},s=void 0,l={unversionedId:"getting-started/migration_v4",id:"getting-started/migration_v4",title:"Migrating to v4",description:"Centrifugo v4 development was concentrated around two main things:",source:"@site/docs/getting-started/migration-v4.md",sourceDirName:"getting-started",slug:"/getting-started/migration_v4",permalink:"/docs/getting-started/migration_v4",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/getting-started/migration-v4.md",tags:[],version:"current",frontMatter:{id:"migration_v4",title:"Migrating to v4"}},c={},u=[{value:"Client SDK migration",id:"client-sdk-migration",level:2},{value:"Unidirectional transport migration",id:"unidirectional-transport-migration",level:2},{value:"SockJS migration",id:"sockjs-migration",level:2},{value:"Channel ASCII enforced",id:"channel-ascii-enforced",level:2},{value:"Subscription token migration",id:"subscription-token-migration",level:2},{value:"User-limited channel migration",id:"user-limited-channel-migration",level:2},{value:"Namespace configuration migration",id:"namespace-configuration-migration",level:2},{value:"Proxy disconnect code changes",id:"proxy-disconnect-code-changes",level:2},{value:"Other configuration option changes",id:"other-configuration-option-changes",level:2},{value:"Server API changes",id:"server-api-changes",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Centrifugo v4 development was concentrated around two main things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"adopt a new generation of client protocol"),(0,i.kt)("li",{parentName:"ul"},"make namespaces secure by default")),(0,i.kt)("p",null,"These goals dictate most of backwards compatibility changes in v4."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"What we would like to emphasize is that even there are many backwards incompatible changes it should be possible to migrate to Centrifugo v4 server without changing your client-side code at all. And then gradually upgrade the client-side. Below we are giving all the tips to achieve this.")),(0,i.kt)("h2",{id:"client-sdk-migration"},"Client SDK migration"),(0,i.kt)("p",null,"New generation of client protocol requires using the latest versions of client SDKs. During the next several days we will release the following SDK versions which are compatible with Centrifugo v4:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"centrifuge-js >= v3.0.0"),(0,i.kt)("li",{parentName:"ul"},"centrifuge-go >= v0.9.0"),(0,i.kt)("li",{parentName:"ul"},"centrifuge-dart >= v0.9.0"),(0,i.kt)("li",{parentName:"ul"},"centrifuge-swift >= v0.5.0"),(0,i.kt)("li",{parentName:"ul"},"centrifuge-java >= v0.2.0")),(0,i.kt)("p",null,"New client SDKs ",(0,i.kt)("strong",{parentName:"p"},"support only new client protocol")," \u2013 you can not connect to Centrifugo v3 with them."),(0,i.kt)("p",null,"If you have a production system where you want to upgrade Centrifugo from v3 to v4 then the plan is:"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"If you are using private channels (starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"$"),") or user-limited channels (containing ",(0,i.kt)("inlineCode",{parentName:"p"},"#"),") then carefully read about subscription token migration and user-limited channels migration below.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Upgrade Centrifugo and its configuration to adopt changes in v4."),(0,i.kt)("li",{parentName:"ol"},"In Centrifugo v4 config turn on ",(0,i.kt)("inlineCode",{parentName:"li"},"use_client_protocol_v1_by_default"),"."),(0,i.kt)("li",{parentName:"ol"},"Run Centrifugo v4 \u2013 all current clients should continue working with it."),(0,i.kt)("li",{parentName:"ol"},"Then on the client-side uprade client SDK version to the one which works with Centrifugo v4, adopt changes in SDK API dictated by our new ",(0,i.kt)("a",{parentName:"li",href:"/docs/transports/client_api"},"client SDK API spec"),". ",(0,i.kt)("strong",{parentName:"li"},"Important thing")," \u2013 add ",(0,i.kt)("inlineCode",{parentName:"li"},"?cf_protocol_version=v2")," URL param to the connection endpoint to tell Centrifugo that modern generation of protocol is being used by the connection (otherwise, it assumes old protocol since we have ",(0,i.kt)("inlineCode",{parentName:"li"},"use_client_protocol_v1_by_default")," option enabled)."),(0,i.kt)("li",{parentName:"ol"},"As soon as all your clients migrated to use new protocol generation you can remove ",(0,i.kt)("inlineCode",{parentName:"li"},"use_client_protocol_v1_by_default")," option from the server configuration."),(0,i.kt)("li",{parentName:"ol"},"After that you can remove ",(0,i.kt)("inlineCode",{parentName:"li"},"?cf_protocol_version=v2")," from connection endpoint on the client-side.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are using mobile client SDKs then most probably some time must pass while clients update their apps to use an updated Centrifugo SDK version.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Starting from Centrifugo v4.1.1 it's possible to completely turn off client protocol v1 by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"disable_client_protocol_v1")," boolean option to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("h2",{id:"unidirectional-transport-migration"},"Unidirectional transport migration"),(0,i.kt)("p",null,"Client protocol framing also changed in unidirectional transports. The good news is that Centrifugo v4 still supports previous format for unidirectional transports."),(0,i.kt)("p",null,"When you are enabling ",(0,i.kt)("inlineCode",{parentName:"p"},"use_client_protocol_v1_by_default")," option described above you also make unidirectional transports to work over old protocol format. So your existing clients will continue working just fine with Centrifugo v4. Then the same steps to migrate described above can be applied to unidirectional transport case. The only difference that in unidirectional approach you are not using Centrifugo SDKs."),(0,i.kt)("h2",{id:"sockjs-migration"},"SockJS migration"),(0,i.kt)("p",null,"SockJS is now DEPRECATED in Centrifugo. Centrifugo v4 may be the last release which supports it. We now offer our own bidirectional emulation layer on top of HTTP-streaming and EventSource. See additional information in Centrifugo v4 introduction post."),(0,i.kt)("h2",{id:"channel-ascii-enforced"},"Channel ASCII enforced"),(0,i.kt)("p",null,"Centrifugo v2 and v3 docs mentioned the fact that channels must contain only ASCII characters. But it was not actually enforced by a server. Now Centrifugo is more strict. If a channel has non-ASCII characters then the ",(0,i.kt)("inlineCode",{parentName:"p"},"107: bad request")," error will be returned to the client. Please reach us out if this behavior is not suitable for your use case \u2013 we can discuss the use case and think on a proper solution together."),(0,i.kt)("h2",{id:"subscription-token-migration"},"Subscription token migration"),(0,i.kt)("p",null,"Subscription token now requires ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," claim (current user ID) to be set."),(0,i.kt)("p",null,"In most cases the only change which is required to smoothly migrate to v4 without breaking things is to add a boolean option ",(0,i.kt)("inlineCode",{parentName:"p"},'"skip_user_check_in_subscription_token": true')," to a Centrifugo v4 configuration. This skips the check of ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," claim to contain the current user ID set to a connection during authentication."),(0,i.kt)("p",null,"After that start adding ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," claim (with current user ID) to subscription tokens. As soon as all subscription tokens in your system contain user ID in ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," claim you can remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"skip_user_check_in_subscription_token")," from a server configuration."),(0,i.kt)("p",null,"One more important note is that ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," claim in subscription token in Centrifugo v4 only supported for backwards compatibility. It must not be included into new subscription tokens."),(0,i.kt)("p",null,"It's worth mentioning that Centrifugo v4 does not allow subscribing on channels starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," without token even if namespace marked as available for subscribing using sth like ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_subscribe_for_client")," option. This is done to prevent potential security risk during v3 -> v4 migration when client previously not available to subscribe to channels starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," in any case may get permissions to do so."),(0,i.kt)("h2",{id:"user-limited-channel-migration"},"User-limited channel migration"),(0,i.kt)("p",null,"User-limited channel support should now be allowed over a separate channel namespace option ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_user_limited_channels"),". See below the namespace option converter which takes this change into account."),(0,i.kt)("h2",{id:"namespace-configuration-migration"},"Namespace configuration migration"),(0,i.kt)("p",null,"In Centrifugo v4 namespace configuration options have been changed. Centrifugo now has ",(0,i.kt)("inlineCode",{parentName:"p"},"secure by default")," namespaces. First thing to do is to read the new docs about ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/channels"},"channels and namespaces"),"."),(0,i.kt)("p",null,"Then you can use the following converter which will transform your old namespace configuration to a new one. This converter tries to keep backwards compatibility \u2013 i.e. it should be possible to deploy Centrifugo with namespace configuration from converter output and have the same behaviour as before regarding channel permissions. We believe that new option names should provide a more readable configuration and may help to reveal some potential security improvements in your namespace configuration \u2013 i.e. making it more strict and protective."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Do not blindly deploy things to production \u2013 test your system first, go through the possible usage scenarios and/or test cases.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It's fully client-side: your data won't be sent anywhere.")),(0,i.kt)(r.Z,{mdxType:"ConfigConverter"}),(0,i.kt)("h2",{id:"proxy-disconnect-code-changes"},"Proxy disconnect code changes"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"reconnect")," flag from custom disconnect code is removed. Reconnect advice is now determined by disconnect code value. This allowed us avoiding using JSON in WebSocket CLOSE frame reason. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/proxy#return-custom-disconnect"},"proxy docs")," docs for more details.  "),(0,i.kt)("h2",{id:"other-configuration-option-changes"},"Other configuration option changes"),(0,i.kt)("p",null,"Several other non-namespace related options have been renamed or removed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_anonymous")," option renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"allow_anonymous_connect_without_token")," \u2013 new name better describes the purpose of this option which was previously not clear. Converter above takes this into account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"use_unlimited_history_by_default")," option was removed. It was used to help migrating from Centrifugo v2 to v3.")),(0,i.kt)("h2",{id:"server-api-changes"},"Server API changes"),(0,i.kt)("p",null,"The only breaking change is that ",(0,i.kt)("inlineCode",{parentName:"p"},"user_connections")," API method (which is available in Centrifugo PRO only) was renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"connections"),". The method is more generic now with a broader possibilities \u2013 so previous name does not match the current behavior."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);