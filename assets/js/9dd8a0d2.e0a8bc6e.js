"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7054,2278],{895:function(e,t,i){i.d(t,{dK:function(){return n},_k:function(){return r},vc:function(){return a},rx:function(){return s},qo:function(){return o},Hk:function(){return c},Iz:function(){return l}});i(1336);var n=["en"],r=!1,a=null,s="1074a537",o=8,c=50,l={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},5711:function(e,t,i){i.r(t),i.d(t,{default:function(){return u}});var n=i(7294),r=i(6010),a="featureTitle_1sBy",s="featureContent_X9Lx",o="featureContentReversed_3gLf",c="featureImage_1CfO",l="darkSection_3BKa",h="featureImageReversed_1bU1";function u(e){var t=e.reversed,i=e.title,u=e.img,m=e.text,d=e.isDark,f=n.createElement("div",{className:(0,r.Z)("col col--6",c,t?h:"")},u),p=n.createElement("div",{className:(0,r.Z)("col col--6",s,t?o:"")},n.createElement("h3",{className:a},i),m);return n.createElement("section",{className:(0,r.Z)("highlightSection",d?l+" darkSection":"")},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},t?n.createElement(n.Fragment,null,p,f):n.createElement(n.Fragment,null,f,p))))}},3225:function(e,t,i){i.r(t);var n,r=i(7294);function a(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function s(e,t,i,n){var r=n*Math.PI/180;return[e+i*Math.cos(r),t+i*Math.sin(r)]}function o(e,t,i,n){return 180*Math.atan2(n-t,i-e)/Math.PI}function c(e,t,i,n,r,a,s,o,c,l,h,u){this.ctx=e,this.init(t,i,n,r,a,s,o,c,l,h,u)}function l(e,t,i,n,r,a){this.ctx=e,this.init(t,i,n,r,a)}if(c.prototype.init=function(e,t,i,n,r,a,s,o,c,l,h){this.X=e,this.Y=t,this.radius=r,this.x=i,this.y=n,this.r=a,this.w=s,this.c=h,this.rotate=o,this.speed=c,this.angleDiff=l,this.a=0},c.prototype.drawSegment=function(e,t,i){this.ctx.translate(this.x,this.y),this.ctx.rotate(i*Math.PI/180),this.ctx.translate(-this.x,-this.y),this.ctx.beginPath();var n=s(this.x,this.y,this.r,e),r=n[0],a=n[1],c=s(this.x,this.y,this.r,t),l=c[0],h=c[1],u=r-this.w,m=h-this.w,d=o(this.x,this.y,u,a),f=o(this.x,this.y,l,m),p=t*Math.PI/180,g=e*Math.PI/180,v=d*Math.PI/180,y=f*Math.PI/180;this.ctx.arc(this.x,this.y,this.r,p,g,!0),this.ctx.arc(this.x,this.y,this.r-this.w,v,y,!1),this.ctx.closePath(),this.ctx.fillStyle=this.c,this.ctx.fill(),this.ctx.stroke()},c.prototype.draw=function(){this.ctx.save(),this.ctx.lineWidth=3,this.ctx.strokeStyle=this.c,this.ctx.shadowColor=this.c,this.drawSegment(4+this.angleDiff,86-this.angleDiff,this.rotate+this.a),this.ctx.restore()},c.prototype.resize=function(){this.x=this.X/2,this.y=this.Y/2},c.prototype.updateParams=function(){this.a+=this.speed*this.radius/this.r},c.prototype.render=function(){this.updateParams(),this.draw()},l.prototype.init=function(e,t,i,n,r){this.X=e,this.Y=t,this.x=i,this.y=n,this.c=r,this.lw=1,this.v={x:2*Math.random(),y:2*Math.random()}},l.prototype.draw=function(){this.ctx.save(),this.ctx.lineWidth=this.lw,this.ctx.strokeStyle=this.c,this.ctx.beginPath(),this.ctx.moveTo(0,this.y),this.ctx.lineTo(this.X,this.y),this.ctx.stroke(),this.ctx.lineWidth=this.lw,this.ctx.beginPath(),this.ctx.moveTo(this.x,0),this.ctx.lineTo(this.x,this.Y),this.ctx.stroke(),this.ctx.restore()},l.prototype.updatePosition=function(){this.x+=this.v.x,this.y+=this.v.y},l.prototype.wrapPosition=function(){this.x<0&&(this.x=this.X),this.x>this.X&&(this.x=0),this.y<0&&(this.y=this.Y),this.y>this.Y&&(this.y=0)},l.prototype.updateParams=function(){},l.prototype.render=function(){this.updatePosition(),this.wrapPosition(),this.updateParams(),this.draw()},i.g.window||process&&process.browser){n=new MutationObserver((function(e){e.forEach((function(e){"attributes"==e.type&&window.dispatchEvent(new Event("resize"))}))}));var h=document.querySelector("html");n.observe(h,{attributes:!0})}t.default=function(e){var t=r.useState({x:1,y:1}),n=t[0],s=t[1],o=r.useRef(null),h=function(){o.current.width=o.current.clientWidth,o.current.height=o.current.clientHeight,s({x:o.current?o.current.clientWidth:0,y:o.current?o.current.clientHeight:0})};return r.useEffect((function(){return h()}),[]),(i.g.window||process&&process.browser)&&r.useEffect((function(){return window.addEventListener("resize",h),function(){return window.removeEventListener("resize",h)}})),r.useEffect((function(){!function(e,t,n,r){var s,o,h=e.getContext("2d"),u=t/2,m=n/2;r?(s="#8d3838",o="#6e2b2b"):(s="#ffd4d4",o="#ffd4d4");for(var d=[],f=[],p=n/7,g=p/16,v=i.g.requestAnimationFrame||i.g.mozRequestAnimationFrame||i.g.webkitRequestAnimationFrame||i.g.msRequestAnimationFrame||function(e){setTimeout(e,17)},y=0;y<3;y+=1){var b=new l(h,t,n,a(0,t),a(0,n),s);d.push(b)}f.push(new c(h,t,n,u,m,p,2.65*p,9*g,0,-1.5,0,o)),f.push(new c(h,t,n,u,m,p,2.65*p,9*g,90,-1.5,0,o)),f.push(new c(h,t,n,u,m,p,2.65*p,9*g,180,-1.5,0,o)),f.push(new c(h,t,n,u,m,p,2.65*p,9*g,270,-1.5,0,o)),f.push(new c(h,t,n,u,m,p,1.45*p,8*g,45,1.5,2,o)),f.push(new c(h,t,n,u,m,p,1.45*p,8*g,135,1.5,2,o)),f.push(new c(h,t,n,u,m,p,1.45*p,8*g,225,1.5,2,o)),function e(){h.clearRect(0,0,t,n);for(var i=0;i<d.length;i+=1)d[i].render();for(var r=0;r<f.length;r+=1)f[r].render();v(e)}()}(o.current,n.x,n.y,e.isDarkTheme)}),[n]),r.createElement("canvas",{ref:o,style:{width:"100%",height:"100%"}})}},5503:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var n=i(7294),r=i(6010),a=i(2273),s=i(6742),o=i(2263),c=i(4996),l={heroBanner:"heroBanner_3P7f",hero:"hero_2alu",container:"container_J4y9",mainTitle:"mainTitle_1TR-",subTitle:"subTitle_2lxd",section:"section_1DfF",sectionAlt:"sectionAlt_3vvI",buttons:"buttons_1r9m",features:"features_3azU",featureImage:"featureImage_ZtzX",heart:"heart_Bya6",quote:"quote_eKkj",responsiveEmbed:"responsiveEmbed_2GMN",lspDemo:"lspDemo_3Gtm",playWithIt:"playWithIt_1VT1",feature:"feature_3ctd"},h=i(3225),u=i(5350),m=i(5711);function d(e){var t=e.imageUrl,i=e.title,a=e.children,s=(0,c.Z)(t);return n.createElement("div",{className:(0,r.Z)("col col--4",l.feature)},s&&n.createElement("div",{className:"text--center"},n.createElement("img",{className:l.featureImage,src:s,alt:i})),n.createElement("h3",null,i),n.createElement("p",null,a))}function f(){var e=(0,u.Z)().isDarkTheme;return n.createElement("header",{id:"hero",className:(0,r.Z)("hero hero--primary",l.heroBanner)},n.createElement(h.default,{isDarkTheme:e}),n.createElement("div",{className:"container",style:{zIndex:1}},n.createElement("div",{className:l.mainTitle},"CENTRIFUGO"),n.createElement("div",{className:l.subTitle},"Scalable real-time messaging server. Set up once and forever."),n.createElement("div",{className:l.buttons},n.createElement(s.Z,{className:(0,r.Z)("button button--outline button--secondary button--lg",l.getStarted),to:(0,c.Z)("docs/getting-started/introduction")},"Get Started"))))}var p=function(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).tagline;return n.createElement(a.Z,{title:t,description:"Centrifugo is an open source server designed to help building interactive real-time messaging applications. Think chats, live comments, multiplayer games, streaming metrics etc. Centrifugo provides a variety of real-time transports, scales well and integrates with any application."},n.createElement(f,null),n.createElement("main",null,n.createElement("section",{className:l.features},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement(d,{title:"Integrates with everything",imageUrl:"img/integration.svg"},"Centrifugo is a self-hosted service which can handle connections over ",n.createElement("a",{href:"/docs/transports/overview"},"a variety of real-time transports")," and provides a simple ",n.createElement("a",{href:"/docs/server/server_api"},"publish API"),". Centrifugo integrates well with any application \u2013 no need to change an existing application architecture to introduce real-time features. Just let Centrifugo deal with persistent connections."),n.createElement(d,{title:"Great performance",imageUrl:"img/performance.svg"},"Centrifugo is built in Go language with some smart optimizations inside. It has good performance \u2013 see a ",n.createElement("a",{href:"/blog/2020/02/10/million-connections-with-centrifugo"},"description")," of a test stand with one million WebSocket connections and 30 million delivered messages per minute with hardware comparable to one modern server machine."),n.createElement(d,{title:"Feature-rich",imageUrl:"img/feature_rich.svg"},"Many built-in features can help to build an attractive real-time application in a limited time. Centrifugo provides different types of subscriptions, hot channel history, instant presence, RPC calls. There is also the possibility to proxy connection events to the application backend over HTTP or GRPC and more."),n.createElement(d,{title:"Out-of-the-box scalability",imageUrl:"img/scalability.svg"},"Built-in Redis, KeyDB, Tarantool engines, or Nats broker make it possible to scale connections over different machines. With consistent sharding of Redis, KeyDB, and Tarantool it's possible to handle millions of active connections with reasonable hardware requirements."),n.createElement(d,{title:"Used in production",imageUrl:"img/production.svg"},"Started almost 10 years back then Centrifugo (and Centrifuge library for Go it's built on top of) is a mature server successfully used in production by many companies around the world: Mail.ru, Badoo, ManyChat, Grafana, and others."),n.createElement(d,{title:"Even more with Centrifugo PRO",imageUrl:"img/pro2.svg"},"Centrifugo PRO provides even more unique features: real-time connection analytics with ClickHouse, real-time user and channel tracing, token bucket operation throttling, user active status support, faster API, faster proxy performance, and more.")))),n.createElement(m.default,{img:n.createElement("img",{src:"/img/scheme_sketch.png"}),reversed:!0,title:"What is real-time messaging?",text:n.createElement(n.Fragment,null,n.createElement("p",null,"\ud83d\udca0 Real-time messaging can help building interactive applications where data delivered to users almost immediately after being acknowledged by application backend using push technologies."),n.createElement("p",null,"\ud83d\udca0 Centrifugo handles persistent connections from clients over WebSocket, SockJS, GRPC, SSE (EventSource), HTTP-streaming transports and provides API to publish messages to clients in real-time."),n.createElement("p",null,"\ud83d\udca0 Clients subscribe to channels to receive an interesting subset of messages. So Centrifugo acts as a user facing PUB/SUB server."))}),n.createElement(m.default,{img:n.createElement("iframe",{width:"560",height:"355",src:"https://player.vimeo.com/video/570333329?title=0&byline=0&portrait=0",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),isDark:!0,title:"Looking for a cool demo?",text:n.createElement(n.Fragment,null,n.createElement("p",null,"Here is a real-time telemetry streamed from Assetto Corsa racing simulator towards Grafana dashboard with a help of our WebSocket technologies."),n.createElement("p",null,"This demonstrates that you can stream 60Hz data towards client connections and thus provide an instant visual feedback about system state."),n.createElement("p",null,"Chats, live comments, multiplayer games, streaming metrics and other types of interactive applications can be quickly built using Centrifugo and a set of client libraries available for frontend (for both web and mobile experience)."),n.createElement("div",{className:l.buttons},n.createElement(s.Z,{className:(0,r.Z)("button button--outline button--secondary button--lg",l.getStarted),to:(0,c.Z)("docs/getting-started/introduction")},"Impressive? Get Started.")))})))}}}]);