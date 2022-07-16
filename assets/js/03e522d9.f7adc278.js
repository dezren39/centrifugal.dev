"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[2624],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4310:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"token_revocation",title:"Token revocation API"},s=void 0,p={unversionedId:"pro/token_revocation",id:"pro/token_revocation",title:"Token revocation API",description:"One more protective instrument in Centrifugo PRO is API to manage token revocations.",source:"@site/docs/pro/token_revocation.md",sourceDirName:"pro",slug:"/pro/token_revocation",permalink:"/docs/next/pro/token_revocation",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/token_revocation.md",tags:[],version:"current",frontMatter:{id:"token_revocation",title:"Token revocation API"},sidebar:"Pro",previous:{title:"User blocking API",permalink:"/docs/next/pro/user_block"},next:{title:"Faster performance",permalink:"/docs/next/pro/performance"}},u={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Configure",id:"configure",level:2},{value:"Redis persistence engine",id:"redis-persistence-engine",level:3},{value:"Database persistence engine",id:"database-persistence-engine",level:3},{value:"Revoke token API",id:"revoke-token-api",level:2},{value:"Revoke token params",id:"revoke-token-params",level:4},{value:"Revoke token result",id:"revoke-token-result",level:4},{value:"Invalidate user tokens API",id:"invalidate-user-tokens-api",level:2},{value:"Invalidate user tokens params",id:"invalidate-user-tokens-params",level:4},{value:"Invalidate user tokens result",id:"invalidate-user-tokens-result",level:4}],c={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One more protective instrument in Centrifugo PRO is API to manage token revocations."),(0,o.kt)("p",null,"At the moment Centrifugo provides two ways to revoke tokens:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Revoke token by ID: based on ",(0,o.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7"},"jti")," claim in the case of JWT."),(0,o.kt)("li",{parentName:"ol"},"Revoke all user's tokens issued before certain time: based on ",(0,o.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.6"},"iat")," in the case of JWT.")),(0,o.kt)("p",null,"When token is revoked client with such token will be disconnected from Centrifugo shortly. And attempt to connect with a revoked token won't succeed."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"By default, information about token revocations shared throughout Centrifugo cluster and kept in a process memory. So token revocation information will be lost upon Centrifugo restart."),(0,o.kt)("p",null,"But it's possible to enable revocation information persistence by configuring a persistence storage \u2013 in this case token revocation information will survive Centrifugo restarts."),(0,o.kt)("p",null,"Centrifugo also automatically expires entries in the storage to keep working set reasonably small. Keeping pool of revoked tokens small allows avoiding expensive database lookups on every check \u2013 information is loaded periodically from the database and all checks performed over in-memory data structure \u2013 thus token revocation checks are cheap and have a small impact on the overall system performance."),(0,o.kt)("h2",{id:"configure"},"Configure"),(0,o.kt)("p",null,"Token revocation features (both revocation by token ID and user token invalidation by issue time) are enabled by default in Centrifugo PRO (as soon as your JWTs has ",(0,o.kt)("inlineCode",{parentName:"p"},"jti")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"iat")," claims you will be able to use revocation APIs). By default revocation information kept in a process memory."),(0,o.kt)("p",null,"There are two types of persistent engines supported at the moment:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"redis")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"database"))),(0,o.kt)("h3",{id:"redis-persistence-engine"},"Redis persistence engine"),(0,o.kt)("p",null,"Revocation data can be kept in Redis. To enable this configuration should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "token_revoke": {\n        "persistence_engine": "redis",\n        "redis_address": "localhost:6379"\n    },\n    "user_tokens_invalidate": {\n        "persistence_engine": "redis",\n        "redis_address": "localhost:6379"\n    }\n}\n')),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Unlike many other Redis features in Centrifugo consistent sharding is not supported for revocation data. The reason is that we don't want to loose revocation information when additional Redis node added. So only one Redis shard can be provided for ",(0,o.kt)("inlineCode",{parentName:"p"},"token_revoke")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"user_tokens_invalidate")," features. This should be fine given that working set of revoked entities should be reasonably small and old entries expire. If you try to set several Redis shards here Centrifugo will exit with an error on start.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"One more thing you may notice is that Redis configuration here does not have ",(0,o.kt)("inlineCode",{parentName:"p"},"use_redis_from_engine")," option. The reason is that since Redis is not shardable here reusing Redis configuration here could cause problems at the moment of main Redis scaling \u2013 which we want to avoid thus require explicit configuration here.")),(0,o.kt)("h3",{id:"database-persistence-engine"},"Database persistence engine"),(0,o.kt)("p",null,"Revocation data can be kept in the relational database. Only PostgreSQL is supported."),(0,o.kt)("p",null,"To enable this configuration should be like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "database": {\n        "dsn": "postgresql://postgres:test@127.0.0.1:5432/postgres"\n    },\n    "token_revoke": {\n        "persistence_engine": "database"\n    },\n    "user_tokens_invalidate": {\n        "persistence_engine": "database"\n    }\n}\n')),(0,o.kt)("h2",{id:"revoke-token-api"},"Revoke token API"),(0,o.kt)("p",null,"Allows revoking individual tokens. For example, this may be useful when token leakage has been detected and you want to revoke access for a particular tokens. BTW Centrifugo PRO provides ",(0,o.kt)("inlineCode",{parentName:"p"},"user_connections")," API which has an information about tokens for active users connections (if set in JWT). "),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This API assumes that JWTs you are using contain ",(0,o.kt)("inlineCode",{parentName:"p"},'"jti"')," claim which is a unique token ID (according to ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7"},"RFC"),").  ")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "revoke_token", "params": {"uid": "xxx-xxx-xxx", "expire_at": 1635845122}}\' \\\n  http://localhost:8000/api\n')),(0,o.kt)("h4",{id:"revoke-token-params"},"Revoke token params"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"uid"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Token unique ID (JTI claim in case of JWT)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"expire_at"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"Unix time in the future when revocation information should expire (Unix seconds). While optional ",(0,o.kt)("strong",{parentName:"td"},"we recommend to use a reasonably small expiration time (matching the expiration time of your JWTs)")," to keep working set of revocations small (since Centrifugo nodes periodically load all entries from the database table to construct in-memory cache).")))),(0,o.kt)("h4",{id:"revoke-token-result"},"Revoke token result"),(0,o.kt)("p",null,"Empty object at the moment."),(0,o.kt)("h2",{id:"invalidate-user-tokens-api"},"Invalidate user tokens API"),(0,o.kt)("p",null,"Allows revoking all tokens for a user which were issued before a certain time. For example, this may be useful after user changed a password in an application."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This API assumes that JWTs you are using contain ",(0,o.kt)("inlineCode",{parentName:"p"},'"iat"')," claim which is a time token was issued at (according to ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.6"},"RFC"),").  ")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "invalidate_user_tokens", "params": {"user": "test", "issued_before": 1635845022, "expire_at": 1635845122}}\' \\\n  http://localhost:8000/api\n')),(0,o.kt)("h4",{id:"invalidate-user-tokens-params"},"Invalidate user tokens params"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"user"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"User ID to invalidate tokens for")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"issued_before"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"All tokens issued at before this time will be considered revoked (in case of JWT this requires ",(0,o.kt)("inlineCode",{parentName:"td"},"iat")," to be properly set in JWT)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"expire_at"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"Unix time in the future when revocation information should expire (Unix seconds). While optional ",(0,o.kt)("strong",{parentName:"td"},"we recommend to use a reasonably small expiration time (matching the expiration time of your JWTs)")," to keep working set of revocations small (since Centrifugo nodes periodically load all entries from the database table to construct in-memory cache).")))),(0,o.kt)("h4",{id:"invalidate-user-tokens-result"},"Invalidate user tokens result"),(0,o.kt)("p",null,"Empty object at the moment."))}k.isMDXComponent=!0}}]);