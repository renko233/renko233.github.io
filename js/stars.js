!function(){var t=["#D61C59","#E7D84B","#1B8798"],i=window.innerWidth,n=(window.innerHeight,{x:i/2,y:i/2}),e=[];function o(t){i=window.innerWidth,window.innerHeight}function s(i){var o,s,h,l;n.x=i.clientX,n.y=i.clientY,o=n.x,s=n.y,h=t[Math.floor(Math.random()*t.length)],(l=new a).init(o,s,h),e.push(l)}function h(){requestAnimationFrame(h),function(){for(var t=0;t<e.length;t++)e[t].update();for(t=e.length-1;t>=0;t--)e[t].lifeSpan<0&&(e[t].die(),e.splice(t,1))}()}function a(){this.character="*",this.lifeSpan=120,this.initialStyles={position:"fixed",display:"inline-block",top:"0px",left:"0px",pointerEvents:"none","touch-action":"none","z-index":"10000000",fontSize:"25px","will-change":"transform"},this.init=function(t,i,n){this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1},this.position={x:t+10,y:i+10},this.initialStyles.color=n,this.element=document.createElement("span"),this.element.innerHTML=this.character,function(t,i){for(var n in i)t.style[n]=i[n]}(this.element,this.initialStyles),this.update(),document.querySelector(".js-cursor-container").appendChild(this.element)},this.update=function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.element.style.transform="translate3d("+this.position.x+"px,"+this.position.y+"px, 0) scale("+this.lifeSpan/120+")"},this.die=function(){this.element.parentNode.removeChild(this.element)}}"ontouchstart"in window||navigator.msMaxTouchPoints||(document.addEventListener("mousemove",s),window.addEventListener("resize",o),h())}();