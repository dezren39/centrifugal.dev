"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[2906],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=m(t),d=r,f=p["".concat(l,".").concat(d)]||p[d]||s[d]||c;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var m=2;m<c;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2777:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return u},default:function(){return p}});var o=t(2122),r=t(9756),c=(t(7294),t(3905)),i=["components"],a={id:"console_commands",title:"Console commands"},l=void 0,m={unversionedId:"server/console_commands",id:"server/console_commands",isDocsHomePage:!1,title:"Console commands",description:"Here is a list of console commands that come with Centrifugo executable.",source:"@site/docs/server/console_commands.md",sourceDirName:"server",slug:"/server/console_commands",permalink:"/docs/server/console_commands",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/console_commands.md",version:"current",frontMatter:{id:"console_commands",title:"Console commands"},sidebar:"Guides",previous:{title:"Configure Centrifugo",permalink:"/docs/server/configuration"},next:{title:"Server API",permalink:"/docs/server/server_api"}},u=[{value:"version command",id:"version-command",children:[]},{value:"checkconfig command",id:"checkconfig-command",children:[]},{value:"genconfig command",id:"genconfig-command",children:[]},{value:"gentoken command",id:"gentoken-command",children:[]},{value:"checktoken command",id:"checktoken-command",children:[]}],s={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Here is a list of console commands that come with Centrifugo executable."),(0,c.kt)("h2",{id:"version-command"},"version command"),(0,c.kt)("p",null,"To show Centrifugo version and exit run:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"centrifugo version\n")),(0,c.kt)("h2",{id:"checkconfig-command"},"checkconfig command"),(0,c.kt)("p",null,"Centrifugo has special command to check configuration file ",(0,c.kt)("inlineCode",{parentName:"p"},"checkconfig"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"centrifugo checkconfig --config=config.json\n")),(0,c.kt)("p",null,"If any errors found during validation \u2013 program will exit with error message and exit code 1."),(0,c.kt)("h2",{id:"genconfig-command"},"genconfig command"),(0,c.kt)("p",null,"Another command is ",(0,c.kt)("inlineCode",{parentName:"p"},"genconfig"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"centrifugo genconfig -c config.json\n")),(0,c.kt)("p",null,"It will automatically generate the minimal required configuration file."),(0,c.kt)("p",null,"If any errors happen \u2013 program will exit with error message and exit code 1."),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"genconfig")," also supports generation of YAML and TOML configuration file formats - just provide an extension to a file:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"centrifugo genconfig -c config.toml\n")),(0,c.kt)("h2",{id:"gentoken-command"},"gentoken command"),(0,c.kt)("p",null,"Another command is ",(0,c.kt)("inlineCode",{parentName:"p"},"gentoken"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"centrifugo gentoken -c config.json -u 28282\n")),(0,c.kt)("p",null,"It will automatically generate HMAC SHA-256 based token for user with ID ",(0,c.kt)("inlineCode",{parentName:"p"},"28282")," (which expires in 1 week)."),(0,c.kt)("p",null,"You can change token TTL with ",(0,c.kt)("inlineCode",{parentName:"p"},"-t")," flag (number of seconds):"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"centrifugo gentoken -c config.json -u 28282 -t 3600\n")),(0,c.kt)("p",null,"This way generated token will be valid for 1 hour."),(0,c.kt)("p",null,"If any errors happen \u2013 program will exit with error message and exit code 1."),(0,c.kt)("h2",{id:"checktoken-command"},"checktoken command"),(0,c.kt)("p",null,"One more command is ",(0,c.kt)("inlineCode",{parentName:"p"},"checktoken"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"centrifugo checktoken -c config.json <TOKEN>\n")),(0,c.kt)("p",null,"It will validate your connection JWT, so you can test it before using while developing application."),(0,c.kt)("p",null,"If any errors happen or validation failed \u2013 program will exit with error message and exit code 1."))}p.isMDXComponent=!0}}]);