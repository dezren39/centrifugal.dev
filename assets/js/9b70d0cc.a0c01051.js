"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[9027],{4805:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={title:"Centrifugo integration with NodeJS tutorial",tags:["centrifugo","tutorial","proxy"],description:"In this tutorial we are integrating Centrifugo with NodeJS. We are using Centrifugo connect proxy feature to authenticate connections over standard Express.js session middleware.",author:"Alexander Emelin",authorTitle:"Creator of Centrifugo",authorImageURL:"https://github.com/FZambia.png",image:"/img/keyboard.png",hide_table_of_contents:!1},a=void 0,l={permalink:"/blog/2021/10/18/integrating-with-nodejs",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/blog/2021-10-18-integrating-with-nodejs.md",source:"@site/blog/2021-10-18-integrating-with-nodejs.md",title:"Centrifugo integration with NodeJS tutorial",description:"In this tutorial we are integrating Centrifugo with NodeJS. We are using Centrifugo connect proxy feature to authenticate connections over standard Express.js session middleware.",date:"2021-10-18T00:00:00.000Z",formattedDate:"October 18, 2021",tags:[{label:"centrifugo",permalink:"/blog/tags/centrifugo"},{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"proxy",permalink:"/blog/tags/proxy"}],readingTime:6.675,hasTruncateMarker:!0,authors:[{name:"Alexander Emelin",title:"Creator of Centrifugo",imageURL:"https://github.com/FZambia.png"}],frontMatter:{title:"Centrifugo integration with NodeJS tutorial",tags:["centrifugo","tutorial","proxy"],description:"In this tutorial we are integrating Centrifugo with NodeJS. We are using Centrifugo connect proxy feature to authenticate connections over standard Express.js session middleware.",author:"Alexander Emelin",authorTitle:"Creator of Centrifugo",authorImageURL:"https://github.com/FZambia.png",image:"/img/keyboard.png",hide_table_of_contents:!1},prevItem:{title:"Centrifugo integration with Django \u2013 building a basic chat application",permalink:"/blog/2021/11/04/integrating-with-django-building-chat-application"},nextItem:{title:"Centrifugo v3 released",permalink:"/blog/2021/08/31/hello-centrifugo-v3"}},s={authorsImageUrls:[void 0]},u=[],c={toc:u};function g(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Centrifuge",src:r(2232).Z,width:"1280",height:"500"})),(0,i.kt)("p",null,"Centrifugo is a scalable real-time messaging server in a language-agnostic way. In this tutorial we will integrate Centrifugo with NodeJS backend using a connect proxy feature of Centrifugo for user authentication and native session middleware of ExpressJS framework."),(0,i.kt)("p",null,"Why would NodeJS developers want to integrate a project with Centrifugo? This is a good question especially since there are lots of various tools for real-time messaging available in NodeJS ecosystem."))}g.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,d=p["".concat(s,".").concat(f)]||p[f]||g[f]||o;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2232:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/keyboard-38dec1755b401ae21b4e5f92f3d1caa6.png"}}]);