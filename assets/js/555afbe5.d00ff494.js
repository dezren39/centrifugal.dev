"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[2925],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),g=i,m=f["".concat(s,".").concat(g)]||f[g]||p[g]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8374:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],l={id:"singleflight",title:"Singleflight"},s=void 0,c={unversionedId:"pro/singleflight",id:"pro/singleflight",isDocsHomePage:!1,title:"Singleflight",description:"Centrifugo PRO provides an additional boolean option use_singleflight (default false). When this option enabled Centrifugo will automatically try to merge identical requests to history, presence or presence stats issued at the same time into one real network request.",source:"@site/docs/pro/singleflight.md",sourceDirName:"pro",slug:"/pro/singleflight",permalink:"/docs/pro/singleflight",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/singleflight.md",version:"current",frontMatter:{id:"singleflight",title:"Singleflight"},sidebar:"Pro",previous:{title:"PRO performance",permalink:"/docs/pro/performance"},next:{title:"CPU and RSS stats",permalink:"/docs/pro/process_stats"}},u=[],p={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Centrifugo PRO provides an additional boolean option ",(0,o.kt)("inlineCode",{parentName:"p"},"use_singleflight")," (default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"). When this option enabled Centrifugo will automatically try to merge identical requests to history, presence or presence stats issued at the same time into one real network request."),(0,o.kt)("p",null,"This option can radically reduce a load on a broker in the following situations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Many clients subscribed to the same channel and in case of massive reconnect scenario try to access history simulteniously to restore a state (whether manually using history API or over automatic recovery feature)"),(0,o.kt)("li",{parentName:"ul"},"Many clients subscribed to the same channel and positioning feature is on so Centrifugo tracks client position"),(0,o.kt)("li",{parentName:"ul"},"Many clients subscribed to the same channel and in case of massive reconnect scenario try to call presense or presence stats simulteniously")),(0,o.kt)("p",null,"Using this option only makes sense with remote engine (Redis, KeyDB, Tarantool), it won't provide a benefit in case of using a Memory engine."),(0,o.kt)("p",null,"To enable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "use_singleflight": true\n}\n')),(0,o.kt)("p",null,"Or via ",(0,o.kt)("inlineCode",{parentName:"p"},"CENTRIFUGO_USE_SINGLEFLIGHT")," environment variable."))}f.isMDXComponent=!0}}]);