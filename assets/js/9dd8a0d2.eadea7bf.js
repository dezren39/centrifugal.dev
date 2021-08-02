"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7054,2278],{895:function(t,e,i){i.d(e,{dK:function(){return n},_k:function(){return s},vc:function(){return r},rx:function(){return a},qo:function(){return o},Hk:function(){return c},Iz:function(){return l}});i(1336);var n=["en"],s=!1,r=null,a="9d127eeb",o=8,c=50,l={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},3225:function(t,e,i){i.r(e);var n,s=i(7294);function r(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function a(t,e,i,n){var s=n*Math.PI/180;return[t+i*Math.cos(s),e+i*Math.sin(s)]}function o(t,e,i,n){return 180*Math.atan2(n-e,i-t)/Math.PI}function c(t,e,i,n,s,r,a,o,c,l,h,u){this.ctx=t,this.init(e,i,n,s,r,a,o,c,l,h,u)}function l(t,e,i,n,s,r){this.ctx=t,this.init(e,i,n,s,r)}if(c.prototype.init=function(t,e,i,n,s,r,a,o,c,l,h){this.X=t,this.Y=e,this.radius=s,this.x=i,this.y=n,this.r=r,this.w=a,this.c=h,this.rotate=o,this.speed=c,this.angleDiff=l,this.a=0},c.prototype.drawSegment=function(t,e,i){this.ctx.translate(this.x,this.y),this.ctx.rotate(i*Math.PI/180),this.ctx.translate(-this.x,-this.y),this.ctx.beginPath();var n=a(this.x,this.y,this.r,t),s=n[0],r=n[1],c=a(this.x,this.y,this.r,e),l=c[0],h=c[1],u=s-this.w,m=h-this.w,d=o(this.x,this.y,u,r),f=o(this.x,this.y,l,m),p=e*Math.PI/180,g=t*Math.PI/180,v=d*Math.PI/180,y=f*Math.PI/180;this.ctx.arc(this.x,this.y,this.r,p,g,!0),this.ctx.arc(this.x,this.y,this.r-this.w,v,y,!1),this.ctx.closePath(),this.ctx.fillStyle=this.c,this.ctx.fill(),this.ctx.stroke()},c.prototype.draw=function(){this.ctx.save(),this.ctx.lineWidth=3,this.ctx.strokeStyle=this.c,this.ctx.shadowColor=this.c,this.drawSegment(4+this.angleDiff,86-this.angleDiff,this.rotate+this.a),this.ctx.restore()},c.prototype.resize=function(){this.x=this.X/2,this.y=this.Y/2},c.prototype.updateParams=function(){this.a+=this.speed*this.radius/this.r},c.prototype.render=function(){this.updateParams(),this.draw()},l.prototype.init=function(t,e,i,n,s){this.X=t,this.Y=e,this.x=i,this.y=n,this.c=s,this.lw=1,this.v={x:2*Math.random(),y:2*Math.random()}},l.prototype.draw=function(){this.ctx.save(),this.ctx.lineWidth=this.lw,this.ctx.strokeStyle=this.c,this.ctx.beginPath(),this.ctx.moveTo(0,this.y),this.ctx.lineTo(this.X,this.y),this.ctx.stroke(),this.ctx.lineWidth=this.lw,this.ctx.beginPath(),this.ctx.moveTo(this.x,0),this.ctx.lineTo(this.x,this.Y),this.ctx.stroke(),this.ctx.restore()},l.prototype.updatePosition=function(){this.x+=this.v.x,this.y+=this.v.y},l.prototype.wrapPosition=function(){this.x<0&&(this.x=this.X),this.x>this.X&&(this.x=0),this.y<0&&(this.y=this.Y),this.y>this.Y&&(this.y=0)},l.prototype.updateParams=function(){},l.prototype.render=function(){this.updatePosition(),this.wrapPosition(),this.updateParams(),this.draw()},i.g.window||process&&process.browser){n=new MutationObserver((function(t){t.forEach((function(t){"attributes"==t.type&&window.dispatchEvent(new Event("resize"))}))}));var h=document.querySelector("html");n.observe(h,{attributes:!0})}e.default=function(t){var e=s.useState({x:1,y:1}),n=e[0],a=e[1],o=s.useRef(null),h=function(){o.current.width=o.current.clientWidth,o.current.height=o.current.clientHeight,a({x:o.current?o.current.clientWidth:0,y:o.current?o.current.clientHeight:0})};return s.useEffect((function(){return h()}),[]),(i.g.window||process&&process.browser)&&s.useEffect((function(){return window.addEventListener("resize",h),function(){return window.removeEventListener("resize",h)}})),s.useEffect((function(){!function(t,e,n,s){var a,o,h=t.getContext("2d"),u=e/2,m=n/2;s?(a="#8d3838",o="#6e2b2b"):(a="#ffd4d4",o="#ffd4d4");for(var d=[],f=[],p=n/7,g=p/16,v=i.g.requestAnimationFrame||i.g.mozRequestAnimationFrame||i.g.webkitRequestAnimationFrame||i.g.msRequestAnimationFrame||function(t){setTimeout(t,17)},y=0;y<3;y+=1){var b=new l(h,e,n,r(0,e),r(0,n),a);d.push(b)}f.push(new c(h,e,n,u,m,p,2.65*p,9*g,0,-1.5,0,o)),f.push(new c(h,e,n,u,m,p,2.65*p,9*g,90,-1.5,0,o)),f.push(new c(h,e,n,u,m,p,2.65*p,9*g,180,-1.5,0,o)),f.push(new c(h,e,n,u,m,p,2.65*p,9*g,270,-1.5,0,o)),f.push(new c(h,e,n,u,m,p,1.45*p,8*g,45,1.5,2,o)),f.push(new c(h,e,n,u,m,p,1.45*p,8*g,135,1.5,2,o)),f.push(new c(h,e,n,u,m,p,1.45*p,8*g,225,1.5,2,o)),function t(){h.clearRect(0,0,e,n);for(var i=0;i<d.length;i+=1)d[i].render();for(var s=0;s<f.length;s+=1)f[s].render();v(t)}()}(o.current,n.x,n.y,t.isDarkTheme)}),[n]),s.createElement("canvas",{ref:o,style:{width:"100%",height:"100%"}})}},5503:function(t,e,i){i.r(e),i.d(e,{default:function(){return f}});var n=i(7294),s=i(6010),r=i(2273),a=i(6742),o=i(2263),c=i(4996),l={heroBanner:"heroBanner_3P7f",hero:"hero_2alu",container:"container_J4y9",mainTitle:"mainTitle_1TR-",subTitle:"subTitle_2lxd",section:"section_1DfF",sectionAlt:"sectionAlt_3vvI",buttons:"buttons_1r9m",features:"features_3azU",featureImage:"featureImage_ZtzX",heart:"heart_Bya6",quote:"quote_eKkj",responsiveEmbed:"responsiveEmbed_2GMN",lspDemo:"lspDemo_3Gtm",playWithIt:"playWithIt_1VT1",feature:"feature_3ctd"},h=i(3225),u=i(5350);function m(t){var e=t.imageUrl,i=t.title,r=t.children,a=(0,c.Z)(e);return n.createElement("div",{className:(0,s.Z)("col col--4",l.feature)},a&&n.createElement("div",{className:"text--center"},n.createElement("img",{className:l.featureImage,src:a,alt:i})),n.createElement("h3",null,i),n.createElement("p",null,r))}function d(){var t=(0,u.Z)().isDarkTheme;return n.createElement("header",{id:"hero",className:(0,s.Z)("hero hero--primary",l.heroBanner)},n.createElement(h.default,{isDarkTheme:t}),n.createElement("div",{className:"container",style:{zIndex:1}},n.createElement("div",{className:l.mainTitle},"CENTRIFUGO"),n.createElement("div",{className:l.subTitle},"Scalable real-time messaging server. Set up once and forever."),n.createElement("div",{className:l.buttons},n.createElement(a.Z,{className:(0,s.Z)("button button--outline button--secondary button--lg",l.getStarted),to:(0,c.Z)("docs/getting-started/introduction")},"Get Started"))))}var f=function(){var t=(0,o.Z)().siteConfig,e=void 0===t?{}:t;return n.createElement(r.Z,{title:e.title,description:"Scalable real-time messaging server"},n.createElement(d,null),n.createElement("main",null,n.createElement("section",{className:l.features},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement(m,{title:"Integrates with everything",imageUrl:"img/integration.svg"},"Centrifugo is language-agnostic. It's a standalone server with simple API which can be integrated with an application written in any programming language. No need to change an existing application architecture to introduce real-time features. Just add Centrifugo nearby and let it deal with persistent connections."),n.createElement(m,{title:"Great performance",imageUrl:"img/performance.svg"},"Centrifugo is built in Go language with some smart optimizations inside. It has good performance \u2013 see a ",n.createElement("a",{href:"/blog/2020/02/10/million-connections-with-centrifugo"},"description")," of a test stand with one million WebSocket connections and 30 million delivered messages per minute with a hardware comparable to one modern server machine."),n.createElement(m,{title:"Feature-rich",imageUrl:"img/feature_rich.svg"},"Many built-in features can help building an attractive real-time application in a limited time. Centrifugo provides different types of subscriptions, hot channel history and instant presence, RPC calls. Also possibility to proxy WebSocket events to backend over HTTP or GRPC and more."),n.createElement(m,{title:"Out-of-the-box scalability",imageUrl:"img/scalability.svg"},"Built-in Redis, KeyDB, Tarantool engines or Nats broker make it possible to scale connections over different machines. With consistent sharding of Redis, KeyDB and Tarantool it's possible to handle millions of active connections with reasonable hardware requirements."),n.createElement(m,{title:"Used in production",imageUrl:"img/production.svg"},"Started almost 10 years back then Centrifugo (and Centrifuge library for Go it's built on top of) is a mature server succesfully used in production by many companies around the world: Mail.ru, Badoo, ManyChat, Grafana, Spot.im and others."),n.createElement(m,{title:"Even more with Centrifugo PRO",imageUrl:"img/pro2.svg"},"Centrifugo PRO has even more unique features: real-time connection analylics with Clickhouse, real-time user and channel tracing, token bucket operation throttling, user last active status support, faster API and proxy performance etc.")))),n.createElement("section",{className:(0,s.Z)(l.section,l.sectionAlt)},n.createElement("div",{className:"container"},n.createElement("h2",null,"What is Centrifugo?"),n.createElement("p",null,"\ud83d\udca0 Real-time messaging can help building interactive applications where data delivered to users almost immediately after being acknowleded by application backend using push technologies."),n.createElement("p",null,"\ud83d\udca0 Centrifugo handles persistent connections from clients over WebSocket, SockJS, GRPC, SSE (Eventsource), HTTP-streaming transports and provides API to publish messages to clients in real-time."),n.createElement("p",null,"\ud83d\udca0 Clients subscribe to channels to receive an interesting subset of messages. So Centrifugo acts as a user facing PUB/SUB server."),n.createElement("p",null,"\ud83d\udca0 Chats, live comments, multiplayer games, streaming metrics and other types of interactive applications can be quickly built using Centrifugo and a set of client libraries available for frontend (for both web and mobile experience).")),n.createElement("div",{className:l.buttons},n.createElement(a.Z,{className:(0,s.Z)("button button--outline button--secondary button--lg",l.getStarted),to:(0,c.Z)("docs/getting-started/introduction")},"Get Started")))))}}}]);