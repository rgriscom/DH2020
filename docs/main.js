!function(e){function t(t){for(var i,s,a=t[0],l=t[1],c=t[2],p=0,h=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(d&&d(t);h.length;)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={0:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var d=l;r.push([30,1]),n()}({17:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);n(16),n(17);var i=n(2),o=n(0),r=n.p+"nodes.json",a=n.p+"links.json",l=n.p+"arial.xml",c=n.p+"arial.png",d=n(12),p=n.n(d),h=n(13),u=n(14),f=n.n(u);let m;let g;const w="—————————————",x='<span class="block"></span>';let y,b,v,C=[];const k=16777215,S=7829367,T=new o.TextStyle({font:"24px Arial",fill:k,align:"center"});function M(){C.forEach(e=>{const t=Math.abs(e.source.x-e.target.x),n=Math.abs(e.source.y-e.target.y),i=Math.pow(t,2)+Math.pow(n,2),o=e.txt;if(b<i&&i<v){const i=t/2+Math.min(e.source.x,e.target.x),r=n/2+Math.min(e.source.y,e.target.y);o.position.set(i-o.width/2,r-o.height/2)}else o.position.set(1/0,1/0);s.tokens.includes(e.txt.text)?e.txt.tint=k:e.txt.tint=S})}let E;const j=16777215,O=7829367;function P(){const e=new o.Graphics;E=s.pixi.addChild(e);const t=new o.TextStyle({font:"3px Arial",fill:j,align:"center"});s.nodes.forEach(n=>{n.visibility=!1,n.gpxCircle=new o.Graphics,n.gpxCircle.beginFill(16777215,1),n.gpxCircle.drawCircle(0,0,1),n.gpxCircle.endFill(),e.addChild(n.gpxCircle);const[r,a]=(e=>{const t=Math.round(e.length/2);for(let n=t,i=t;n<e.length||i>=0;n++,i--){if(" "===e[n])return[e.substring(0,n),e.substring(n+1)];if(" "===e[i])return[e.substring(0,i),e.substring(i+1)]}return[e,""]})(n.name);n.gpxText=new o.BitmapText(`${r}\n${a}`,t),e.addChild(n.gpxText),n.gpxCircle.interactive=!0,n.gpxCircle.hitArea=new o.Circle(0,0,s.distance),n.gpxCircle.mouseover=e=>{!function(e){const t=i.select("body").append("div").attr("id","focus");t.append("h2").html(e.name),t.append("h3").html(e.docs+" Publications"),s.tokens=e.tokens.slice(0,3).map(e=>e.term),t.append("p").html("&nbsp;"),t.append("h3").html("Tokens by tf-idf"),t.append("p").html(w),e.tokens.slice(0,10).forEach(e=>{const n=x.repeat(e.tfidf/10);t.append("p").html(`${n} &nbsp; ${e.term}`)}),t.append("p").html("&nbsp;"),t.append("h3").html("Co-author Nationalities"),t.append("p").html(w),Object.entries(e.nationalities).sort().forEach(([e,n],i)=>{const o=x.repeat(4*n);t.append("p").html(`${o} &nbsp; ${e}`)}),t.append("p").html("&nbsp;"),t.append("h3").html("Publication Years"),t.append("p").html(w),Object.entries(e.years).forEach(([e,n],i)=>{const o=x.repeat(4*n);t.append("p").html(`${o} &nbsp; ${e}`)})}(n);s.nodes.filter(e=>n.peers.includes(e.id)).forEach(e=>e.visibility=!0),H(),M()},n.gpxCircle.mouseout=e=>{i.select("#focus").remove(),s.tokens=[],s.nodes.forEach(e=>e.visibility=!1),H(),M()}})}new o.Point(1/0,1/0);function H(){E.clear(),s.nodes.forEach(e=>{const{x:t,y:n,gpxCircle:i,gpxText:r,visibility:s}=e;i.position=new o.Point(t,n),r.position.set(t-r.width/2,n+3),s?(i.tint=j,r.tint=j):(i.tint=O,r.tint=O)})}var _=()=>{const e=document.querySelector("canvas#background");e.width=window.innerWidth,e.height=window.innerHeight;document.querySelector("body").prepend(e);const t=e.getContext("2d",{alpha:!1}),n=t.createRadialGradient(e.width/2,e.height/2,0,e.width/2,e.height/2,e.width/2);n.addColorStop(1,d3.rgb(0,0,0)),n.addColorStop(0,d3.rgb(50,50,50)),t.fillStyle=n,t.fillRect(0,0,e.width,e.height)},$=n(15);function A(){!function(){m.clear();const e=d3.extent(s.nodes,e=>e.x),t=d3.extent(s.nodes,e=>e.y),n=e[1]-e[0],i=t[1]-t[0],o=e[0],r=t[0],a=d3.contourDensity().x(e=>e.x-o).y(e=>e.y-r).weight(e=>e.relevancy).size([n,i]).cellSize(10).bandwidth(40).thresholds(15)(s.nodes);a.forEach(e=>e.coordinates=e.coordinates.map(e=>e.map(e=>e.map(e=>[e[0]+o,e[1]+r]))));const l=2/a.length;let c=1;for(let e=a.length-1;e>=0;e--){const t=2-l*c;m.lineStyle(t,9077249),c+=1,a[e].coordinates.forEach(e=>{e.forEach(e=>{e.forEach(([e,t],n)=>{0==n&&m.moveTo(e,t),m.lineTo(e,t)})}),m.closePath()})}}(),g.clear(),g.alpha=.2,s.links.forEach(({source:e,target:t,value:n})=>{g.lineStyle(n,13421772),g.moveTo(e.x,e.y),g.lineTo(t.x,t.y)}),H(),M()}window.d3=i,window.s={distance:30,links:a,nodes:r,tokens:[]},Promise.all([i.json(r),i.json(a),i.xml(l)]).then(([e,t,n])=>{s.links=t,s.nodes=e,console.log("nodes",s.nodes.length),console.log("links",s.links.length),(()=>{const e=new o.Application({width:window.innerWidth,height:window.innerHeight,antialias:!0,transparent:!0,resolution:2,autoDensity:!0,autoResize:!0,resizeTo:window});document.body.prepend(e.view),s.app=e;const t=new h.a({screenWidth:window.innerWidth,screenHeight:window.innerHeight,interaction:e.renderer.plugins.interaction});e.stage.addChild(t),s.pixi=t,t.drag().pinch().wheel().decelerate().clampZoom({minScale:.3,maxScale:5}).setTransform(window.innerWidth/2,window.innerHeight/2,.3,.3),window.addEventListener("wheel",e=>{e.preventDefault()},{passive:!1})})();const i=o.Texture.from(c);o.BitmapText.registerFont(n,i);(()=>{const e=f()({every:1});setInterval(()=>{e.tick()},1e3/60);const t=document.getElementById("fps");e.on("data",(function(e){t.innerHTML=Math.floor(parseInt(e))}))})(),function(){const e=new o.Graphics;e.interactiveChildren=!1,m=s.pixi.addChild(e)}(),function(){const e=new o.Graphics;e.interactiveChildren=!1,g=s.pixi.addChild(e)}(),P(),function(){const e=new o.Graphics;e.interactiveChildren=!1,y=s.pixi.addChild(e),b=Math.pow(2*s.distance-2,2),v=Math.pow(2*s.distance+2,2),C=s.links.filter(e=>e.value>.01),C.forEach(e=>{const[t,n]=Object.entries(e.tokens)[0],i=.003*n;e.txt=new o.BitmapText(t,T),e.txt.scale.set(i),e.txt.position.set(1/0,1/0),y.addChild(e.txt)})}(),_(),d3.forceSimulation().force("charge",$.a().strength(-15).distanceMin(2*s.distance).distanceMax(50*s.distance).update(()=>{let e=1;return t=>{const n=Math.floor(4*Math.log(t));return n!==e&&(e=n,!0)}})).force("collide",d3.forceCollide().radius(s.distance).strength(.5).iterations(5)).force("center",d3.forceCenter(0,0)).force("link",d3.forceLink().id(e=>e.id).strength(e=>e.value)).nodes(s.nodes).on("tick",A).force("link").links(s.links),(()=>{document.querySelector("#autoComplete").addEventListener("autoComplete",e=>{console.log(e)});new p.a({data:{src:async()=>s.nodes,key:["name"],cache:!1},sort:(e,t)=>e.match<t.match?-1:e.match>t.match?1:0,placeHolder:"Search",selector:"#autoComplete",threshold:0,debounce:0,searchEngine:"loose",highlight:!0,maxResults:10,resultsList:{render:!0,container:e=>{e.setAttribute("id","autoComplete_list")},destination:document.querySelector("#autoComplete"),position:"afterend",element:"ul"},resultItem:{content:(e,t)=>{t.innerHTML=e.match},element:"li"},noResults:()=>{const e=document.createElement("li");e.setAttribute("class","no_result"),e.setAttribute("tabindex","1"),e.innerHTML="No Results",document.querySelector("#autoComplete_list").appendChild(e)},onSelection:e=>{console.log(e);e.selection.key;const t=e.selection.value,{x:n,y:i,name:o}=t;document.querySelector("#autoComplete").value=o;s.pixi.setTransform(window.innerWidth/2-5*n,window.innerHeight/2-5*i,5,5)}})})(),window.onresize=function(){_(),s.pixi.resize()}})}});