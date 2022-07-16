"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[8356],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={id:"tracing",title:"User and channel tracing"},s=void 0,l={unversionedId:"pro/tracing",id:"pro/tracing",title:"User and channel tracing",description:"That's a unique thing. The tracing feature of Centrifugo PRO allows attaching to any channel to see all messages flying towards subscribers or attach to a specific user ID to see all user-related events in real-time.",source:"@site/docs/pro/tracing.md",sourceDirName:"pro",slug:"/pro/tracing",permalink:"/docs/next/pro/tracing",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/tracing.md",tags:[],version:"current",frontMatter:{id:"tracing",title:"User and channel tracing"},sidebar:"Pro",previous:{title:"Install and run PRO version",permalink:"/docs/next/pro/install_and_run"},next:{title:"Analytics with ClickHouse",permalink:"/docs/next/pro/analytics"}},u={},p=[{value:"Save to a file",id:"save-to-a-file",level:3}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"That's a unique thing. The tracing feature of Centrifugo PRO allows attaching to any channel to see all messages flying towards subscribers or attach to a specific user ID to see all user-related events in real-time."),(0,a.kt)("p",null,"It's possible to attach to trace streams using Centrifugo admin UI panel or simply from terminal using CURL and admin token. "),(0,a.kt)("p",null,"This can be super-useful for debugging issues, investigating application behavior, understanding that the application works as expected. "),(0,a.kt)("video",{width:"100%",controls:!0},(0,a.kt)("source",{src:"/img/tracing.mp4",type:"video/mp4"}),"Sorry, your browser doesn't support embedded video."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The tracing feature works fine for JSON messages. For binary payloads, there are some limitations currently.")),(0,a.kt)("h3",{id:"save-to-a-file"},"Save to a file"),(0,a.kt)("p",null,"It's possible to connect to the admin tracing endpoint with CURL using the admin session token. And then save tracing output to a file for later processing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -X POST http://localhost:8000/admin/trace -H "Authorization: token <ADMIN_AUTH_TOKEN>" -d \'{"type": "user", "entity": "56"}\' -o trace.txt\n')),(0,a.kt)("p",null,"Currently, you should copy the admin auth token from browser developer tools, this may be improved in the future."))}d.isMDXComponent=!0}}]);