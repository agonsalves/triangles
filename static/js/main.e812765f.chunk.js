(this.webpackJsonptriangles=this.webpackJsonptriangles||[]).push([[0],{55:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var r,i,c,a,o,s,u,l,d,b=t(1),j=t.n(b),f=t(23),g=t.n(f),h=t(2),O=t(13),p=t(6),v=t(11),x=t(35),m=t.n(x),y=t(20),k=t(12),w=function(e){for(var n=[],t=0;t<e;t++)for(var r=0;r<e;r++)t<=r?n.push(Math.floor(4*Math.random())):n.push(C(n[r*e+t]));return n},C=function(e){return 1===e?3:3===e?1:e},S=function(e,n){return{x:e?e%n:0,y:Math.floor(e/n)}},M=function(){return Math.floor(2*Math.random())},q=function(e,n){return Math.round(6e4/e*(n/.25))},F=function(e,n){return Math.round(e/n)},D=t(3),E=["M0,0 L 0,100 L 100,100Z","M0,100 L 100,100 L 100,0Z","M100,100 L 100,0 L 0,0Z","M100,0 L 0,0 L 0,100Z"],U=Object(b.memo)((function(e){var n=e.dimensions,t=e.type,r=e.updateValue,i=e.position,c=e.colors,a=e.isUpdating,o=e.duration,s=e.stagger,u=e.isStaggered,l=S(i,n),d=l.x,b=l.y,j=m()(c),f=Object(y.useSpring)({shape:E[t],fill:j((d+b)/(2*n-2)),config:{precision:.1,duration:o},delay:a&&u?Math.max(d,b)*s:0}),g=f.shape,h=f.fill;return Object(D.jsx)(L,{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",dimensions:n,type:t,onClick:function(){return r(i)},children:Object(D.jsx)(y.animated.path,{d:g,style:{fill:h}})})})),z=k.a.div(r||(r=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n"]))),B=Object(b.memo)((function(e){var n=e.isUpdating,t=e.children,r=Object(y.useSpring)({skewX:0,skewY:0,loop:{reverse:!0},config:{tension:50},to:[{skewX:15,skewY:15},{skewX:-15,skewY:-15}]});return n&&Object(D.jsx)(y.animated.div,{style:r,className:"skewer",children:t})||t})),I=k.a.div(i||(i=Object(v.a)(["\n  background-color: ",";\n  display: grid;\n  width: ","px;\n  height: ",'px;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas:\n        "q4 q1"\n        "q3 q2";\n'])),(function(e){return e.isDark?"black":"white"}),(function(e){return e.size}),(function(e){return e.size})),L=k.a.svg(c||(c=Object(v.a)(["\n  width: ","%;\n  height: ","%;\n"])),(function(e){return 100/e.dimensions}),(function(e){return 100/e.dimensions})),N=k.a.div(a||(a=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap-reverse;\n  align-items: flex-end;\n  transform: rotate(","deg);\n  grid-area: q",";\n"])),(function(e){return 90*e.number}),(function(e){return e.number+1})),A=k.a.div(o||(o=Object(v.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n"]))),V=k.a.div(s||(s=Object(v.a)(["\n  background-color: white;\n  opacity: 0;\n  transition: opacity .2s ease-out;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding: 3px;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),J=k.a.div(u||(u=Object(v.a)(["\n  width: 100px;\n  height: 100px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  border: 1px solid #333;\n  text-align: center;\n"]))),Z=k.a.input(l||(l=Object(v.a)(["\n  height: 0;\n  padding: 0;\n  border: none;\n  position: absolute;\n"]))),X=k.a.input(d||(d=Object(v.a)(["\n  width: 50px;\n"]))),Y=function(e){var n=e.config,t=e.setConfig,r=e.setValues,i=e.values,c=Object(b.useRef)(null),a=n.dimensions,o=n.squareSize,s=n.interval,u=n.bpm,l=n.note,d=n.isColor,j=n.isDark,f=n.isUpdating,g=n.isSkewed,O=n.stagger,p=n.incoming,v=n.isStaggered;return Object(D.jsx)(A,{children:Object(D.jsxs)(V,{children:[Object(D.jsxs)("select",{onChange:function(e){return t((function(n){return Object(h.a)(Object(h.a)({},n),{},{method:e.target.value})}))},defaultValue:"collection",children:[Object(D.jsx)("option",{value:"single",children:"single"}),Object(D.jsx)("option",{value:"all",children:"all"}),Object(D.jsx)("option",{value:"collection",children:"collection"}),Object(D.jsx)("option",{value:"sequence",children:"sequence"})]}),Object(D.jsxs)(J,{onClick:function(){return t((function(e){return Object(h.a)(Object(h.a)({},e),{},{isUpdating:!e.isUpdating})}))},children:["Updating:",Object(D.jsx)("br",{}),f?"on":"off"]}),Object(D.jsx)(Z,{id:"copyarea",ref:c,value:JSON.stringify(i).trim(),readOnly:!0}),Object(D.jsx)(J,{onClick:function(){c.current.select(),document.execCommand("copy")},children:"Copy"}),Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{children:["Dimensions:",Object(D.jsx)(X,{onChange:function(e){return t((function(n){return Object(h.a)(Object(h.a)({},n),{},{dimensions:e.target.value})}))},value:a,type:"number"})]}),Object(D.jsxs)("div",{children:["Square Size:",Object(D.jsx)(X,{onChange:function(e){return t((function(n){return Object(h.a)(Object(h.a)({},n),{},{squareSize:e.target.value})}))},value:o,type:"number"})]}),Object(D.jsxs)("div",{children:["Interval:",Object(D.jsx)(X,{onChange:function(e){return t((function(n){return Object(h.a)(Object(h.a)({},n),{},{interval:e.target.value})}))},value:s,type:"number"}),"ms"]}),Object(D.jsxs)("div",{children:["BPM:",Object(D.jsx)(X,{onChange:function(e){return t((function(n){return Object(h.a)(Object(h.a)({},n),{},{bpm:e.target.value,interval:q(e.target.value,l),stagger:Math.min(O,F(q(e.target.value,l),a))})}))},value:u,type:"number"})]}),Object(D.jsxs)("div",{children:["Note:",Object(D.jsxs)("select",{onChange:function(e){return t((function(n){return Object(h.a)(Object(h.a)({},n),{},{note:Number(e.target.value),interval:q(u,Number(e.target.value)),stagger:Math.min(O,F(q(u,Number(e.target.value)),a))})}))},defaultValue:1,children:[Object(D.jsx)("option",{value:1,children:"whole"}),Object(D.jsx)("option",{value:.25,children:"quarter"})]})]}),Object(D.jsxs)("div",{children:["Stagger:",Object(D.jsx)(X,{onChange:function(e){return t((function(n){return Object(h.a)(Object(h.a)({},n),{},{stagger:e.target.value})}))},value:O,type:"number"}),"ms"]}),Object(D.jsxs)("div",{children:["Color:",Object(D.jsx)(X,{onChange:function(){return t((function(e){return Object(h.a)(Object(h.a)({},e),{},{isColor:!e.isColor})}))},value:d,type:"checkbox"})]}),Object(D.jsxs)("div",{children:["Dark Mode:",Object(D.jsx)(X,{onChange:function(){return t((function(e){return Object(h.a)(Object(h.a)({},e),{},{isDark:!e.isDark})}))},value:j,type:"checkbox"})]}),Object(D.jsxs)("div",{children:["Staggered:",Object(D.jsx)(X,{onChange:function(){return t((function(e){return Object(h.a)(Object(h.a)({},e),{},{isStaggered:!e.isStaggered})}))},value:v,type:"checkbox"})]}),Object(D.jsxs)("div",{children:["Skewed:",Object(D.jsx)(X,{onChange:function(){return t((function(e){return Object(h.a)(Object(h.a)({},e),{},{isSkewed:!e.isSkewed})}))},value:g,type:"checkbox"})]}),Object(D.jsxs)("div",{children:["Input:",Object(D.jsx)(X,{onChange:function(e){return t((function(n){return Object(h.a)(Object(h.a)({},n),{},{incoming:e.target.value})}))},value:p,type:"text"})]}),Object(D.jsx)("div",{children:Object(D.jsx)(J,{onClick:function(){var e=JSON.parse(p);Array.isArray(e)&&e.length===a^2&&r(e)},children:"Submit"})})]})]})})},W={5:[[0,3,2,1,0,1,2,3,0,1,2,1,0,3,2,3,0,1,2,3,0,3,2,1,0],[1,3,1,3,1,1,1,3,1,3,3,1,1,3,1,1,3,1,1,3,3,1,3,1,1],[3,2,0,2,0,2,3,2,0,2,0,2,3,2,0,2,0,2,3,2,0,2,0,2,3],[2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2]],12:[[1,0,2,2,1,2,0,3,3,1,3,0,0,2,0,1,3,2,2,2,0,3,0,2,2,0,0,0,2,3,3,2,0,1,3,0,2,3,0,2,0,3,2,1,3,3,0,1,3,1,2,0,0,2,2,2,3,1,0,0,2,2,1,1,2,2,1,1,1,2,0,2,0,2,1,2,2,3,2,3,3,1,1,3,1,2,2,3,2,3,1,0,3,2,3,0,1,0,0,1,1,3,1,1,0,2,1,2,3,1,3,1,3,2,3,2,2,2,2,3,1,0,1,0,0,0,3,1,3,2,3,3,0,2,0,3,0,2,1,0,2,1,1,3],[3,2,3,2,3,2,3,2,3,2,0,2,2,3,2,3,2,3,2,3,2,0,2,0,1,2,3,2,3,2,3,2,0,2,0,2,2,1,2,3,2,3,2,2,0,2,0,0,1,2,1,2,3,2,3,0,2,0,2,2,2,1,2,1,2,3,2,2,0,2,0,0,1,2,1,2,1,2,3,0,2,0,2,0,2,1,2,2,0,2,0,2,0,2,0,2,1,2,0,0,2,0,2,0,0,2,2,0,2,0,2,2,0,2,0,2,2,0,0,2,0,2,0,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,2,0,2,0,2],[3,0,1,3,1,3,1,0,0,2,0,2,0,2,3,2,0,2,0,1,2,1,2,0,3,1,2,3,1,3,1,1,3,1,2,1,1,2,1,2,0,2,0,0,1,3,2,1,3,0,3,0,2,0,2,0,2,2,3,0,1,2,1,2,0,0,3,1,3,3,1,3,3,0,3,0,2,1,1,3,0,2,0,3,0,3,3,0,0,3,1,3,2,0,1,2,0,2,1,3,2,1,0,2,2,1,3,2,2,3,3,1,2,1,2,0,3,3,0,2,0,2,2,2,1,3,0,3,1,0,0,3,2,0,3,3,0,1,1,2,2,2,1,1],[0,2,0,2,3,0,2,1,3,0,1,1,2,2,3,3,2,1,3,0,1,2,1,3,0,1,0,2,0,3,1,3,3,0,3,3,2,1,2,1,1,2,0,0,1,1,2,2,1,2,0,3,3,0,3,1,2,1,0,1,0,3,1,2,0,1,2,1,3,0,2,0,2,1,3,0,1,2,1,2,0,2,0,2,3,0,1,0,3,3,2,2,1,0,2,3,1,3,1,3,2,1,0,3,0,1,2,2,0,2,0,3,3,0,2,0,3,2,1,2,3,3,1,2,0,2,0,2,2,3,3,3,3,1,1,2,3,0,2,1,2,2,1,0],[0,2,0,2,1,3,3,1,0,3,2,3,2,0,2,0,3,1,2,0,1,2,0,3,0,2,0,2,1,3,0,2,0,3,1,3,2,0,2,0,3,0,2,0,0,2,0,3,3,1,3,1,0,2,0,0,2,0,2,0,1,3,1,0,2,0,0,2,1,2,0,0,1,2,0,2,0,0,2,0,3,0,0,0,3,0,2,0,0,2,0,2,0,0,0,0,0,3,0,0,2,3,1,0,0,0,0,0,1,2,1,2,0,2,0,0,0,0,0,0,2,0,3,0,2,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0]],10:[[3,2,1,2,0,3,1,2,0,3,2,0,3,0,2,1,0,2,2,3,3,1,2,1,3,0,2,3,1,1,2,0,3,0,2,2,1,2,2,0,0,2,1,2,0,3,1,3,2,0,1,3,0,2,1,2,0,0,3,0,3,0,2,3,3,0,2,2,0,3,2,2,1,2,1,0,2,2,2,0,0,2,3,2,2,1,0,2,2,2,1,1,3,0,0,0,1,0,2,1],[1,2,0,2,0,2,0,2,0,2,2,1,2,0,2,0,2,0,2,0,0,2,1,2,0,2,0,2,0,2,2,0,2,1,2,0,2,0,2,0,0,2,0,2,1,2,0,2,0,2,2,0,2,0,2,1,2,0,2,0,0,2,0,2,0,2,1,2,0,2,2,0,2,0,2,0,2,1,2,0,0,2,0,2,0,2,0,2,1,2,2,0,2,0,2,0,2,0,2,1],[0,3,1,3,1,3,1,3,1,3,1,3,3,1,3,1,3,1,3,1,3,1,1,3,1,3,1,3,1,3,1,3,1,2,0,2,0,2,0,2,3,1,3,0,2,0,2,0,2,0,1,3,1,2,0,2,0,2,0,2,3,1,3,0,2,0,2,0,2,0,1,3,1,2,0,2,0,2,0,2,3,1,3,0,2,0,2,0,2,0,1,3,1,2,0,2,0,2,0,2],[0,2,0,3,1,3,0,2,0,2,2,0,2,1,3,1,3,0,2,0,0,2,2,1,1,3,0,2,0,2,1,3,3,0,2,0,2,0,2,0,3,1,3,2,0,2,0,2,0,2,1,3,1,0,2,0,2,0,2,1,0,1,0,2,0,2,0,2,0,3,2,0,2,0,2,0,2,2,0,0,0,2,0,2,0,2,0,0,0,0,2,0,2,0,2,3,1,0,0,0],[0,1,3,1,3,1,3,1,3,1,3,0,0,0,3,1,3,1,3,1,1,0,0,0,1,3,1,3,1,3,3,0,0,0,0,1,3,1,3,1,1,1,3,0,0,0,1,3,1,3,3,3,1,3,0,0,0,1,3,1,1,1,3,1,3,0,0,0,1,3,3,3,1,3,1,3,0,0,0,1,1,1,3,1,3,1,3,0,0,0,3,3,1,3,1,3,1,3,0,0],[3,0,3,2,1,3,1,2,1,3,0,0,2,0,3,0,3,0,3,1,1,2,0,2,1,2,1,2,1,2,2,0,2,0,3,0,3,0,3,0,3,1,3,1,2,1,2,1,1,3,1,0,2,0,3,0,3,0,3,1,3,1,3,1,2,1,2,1,2,1,2,0,2,0,3,0,3,0,3,0,3,1,3,1,3,1,2,1,2,1,1,3,2,0,1,3,3,0,3,0],[3,2,3,2,3,2,3,2,3,2,2,3,2,3,2,3,2,3,2,3,1,2,3,2,3,2,3,2,3,2,2,1,2,3,2,3,2,3,2,3,1,2,1,2,3,2,3,2,3,2,2,1,2,1,2,3,2,3,2,3,1,2,1,2,1,2,3,2,3,2,2,1,2,1,2,1,2,3,2,3,1,2,1,2,1,2,1,2,3,2,2,1,2,1,2,1,2,1,2,3],[3,1,0,2,0,2,0,3,1,2,3,3,1,3,1,3,1,2,0,3,0,3,0,2,0,2,0,3,1,2,2,1,2,0,2,0,2,1,3,0,0,3,0,2,0,2,0,3,1,2,2,1,2,0,2,0,3,1,2,0,0,3,0,2,0,1,2,2,0,3,1,2,1,3,1,3,2,0,3,1,3,0,3,1,3,2,0,1,1,1,2,1,2,0,2,0,1,3,3,2],[2,0,1,1,2,2,1,2,1,1,0,2,2,2,2,2,0,0,0,3,3,2,2,2,2,0,0,0,1,2,3,2,2,2,0,0,0,0,0,3,2,2,2,0,0,0,0,0,1,2,2,2,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,1,2,2,0,0,0,0,0,0,0,0,2,3,0,3,0,3,0,3,0,0,3,3,1,2,1,2,1,2,2,1,2],[2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,2,0,2,0,2,0,0,0,0,0,0,0,2,0,2,0,2,2,2,2,2,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,2,2,2,0,2,0,2,0,2,0,2,0,0,0,2,0,2,0,2,0,2,0,2],[3,2,1,3,0,2,1,2,1,3,2,0,1,0,2,0,3,0,3,1,3,3,2,0,3,0,3,0,3,0,1,0,0,2,1,2,1,2,1,3,0,2,1,3,0,3,0,3,0,2,2,0,0,2,1,0,3,2,1,3,3,1,1,3,0,1,2,3,0,2,2,0,0,2,1,2,1,2,1,3,3,1,1,3,0,3,0,3,0,2,1,3,0,1,2,1,2,1,2,0],[1,0,2,0,3,1,3,1,3,1,0,3,0,2,0,3,1,3,1,3,2,0,1,0,2,0,3,1,3,1,0,2,0,3,0,2,0,2,0,2,1,0,2,0,1,0,2,0,2,0,3,1,0,2,0,3,0,2,0,2,1,3,1,0,2,0,1,0,2,0,3,1,3,2,0,2,0,3,0,2,1,3,1,0,2,0,2,0,1,0,3,1,3,2,0,2,0,2,0,3],[2,2,0,2,2,2,0,2,0,1,2,2,2,0,2,2,2,0,2,0,0,2,2,2,0,2,2,2,0,2,2,0,2,2,2,0,2,2,2,0,2,2,0,2,2,2,0,2,2,2,2,2,2,0,2,2,2,0,2,2,0,2,2,2,0,2,2,2,0,2,2,0,2,2,2,0,2,2,2,0,0,2,0,2,2,2,0,2,2,2,3,0,2,0,2,2,2,0,2,2],[0,3,0,3,0,3,0,3,0,3,1,2,1,2,1,2,1,2,1,2,0,3,0,3,0,3,0,3,0,3,1,2,1,2,1,2,1,2,1,2,0,3,0,3,0,3,0,3,0,3,1,2,1,2,1,2,1,2,1,2,0,3,0,3,0,3,0,3,0,3,1,2,1,2,1,2,1,2,1,2,0,3,0,3,0,3,0,3,0,3,1,2,1,2,1,2,1,2,1,2],[2,1,2,0,3,1,2,1,2,1,3,1,0,2,1,3,2,0,3,1,2,0,1,3,0,2,3,1,2,0,0,2,1,2,1,2,1,3,0,2,1,3,0,3,0,3,0,2,1,3,3,1,2,2,1,3,2,0,3,1,2,2,1,3,0,2,3,1,2,0,3,0,3,1,2,0,3,0,3,0,2,1,2,0,3,1,2,1,2,1,3,3,0,2,1,3,0,0,3,1],[1,1,3,1,1,3,1,1,3,1,3,1,1,3,1,1,3,1,1,3,1,3,1,1,3,1,1,3,1,1,3,1,3,1,1,3,1,1,3,1,3,3,1,3,1,1,3,1,1,3,1,3,3,1,3,1,1,3,1,1,3,1,3,3,1,3,1,1,3,1,3,3,1,3,3,1,3,1,1,3,1,3,3,1,3,3,1,3,1,1,3,1,3,3,1,3,3,1,3,1],[1,2,3,1,3,0,3,0,2,0,2,1,2,3,1,3,0,2,0,2,1,2,1,2,3,1,2,0,2,0,3,1,2,1,2,3,0,2,0,2,1,3,1,2,1,2,3,1,3,1,0,1,3,1,2,1,2,3,1,3,1,0,2,0,1,2,1,2,3,1,0,2,0,2,3,1,2,1,2,3,2,0,2,0,1,3,1,2,1,2,0,2,0,2,3,1,3,1,2,1],[3,1,3,0,1,0,0,2,0,1,3,0,2,2,0,2,1,3,1,3,1,2,0,3,2,0,3,1,3,1,0,2,1,2,0,2,1,3,1,3,3,0,2,0,2,0,3,1,3,1,0,2,0,2,0,0,2,0,2,0,0,3,1,3,1,2,0,2,0,2,2,1,3,1,3,0,2,0,2,0,0,3,1,3,1,2,0,2,0,2,3,1,3,1,3,0,2,0,2,0],[1,1,3,0,2,0,2,0,2,2,3,0,2,2,0,0,2,2,0,0,1,2,0,2,2,2,0,0,2,2,0,2,2,0,0,0,2,2,0,0,2,0,2,0,2,0,0,2,2,2,0,0,2,0,0,2,0,0,0,0,2,2,0,2,0,0,2,2,2,0,0,2,0,2,2,0,2,0,2,2,2,0,2,0,2,0,2,2,0,0,2,0,2,0,2,0,0,2,0,2],[0,2,0,2,0,2,0,2,0,2,2,0,2,0,2,0,2,0,2,0,0,2,0,2,0,2,0,2,0,2,2,0,2,0,2,0,2,0,2,0,0,2,0,2,0,2,0,2,0,2,2,0,2,0,2,0,2,0,2,0,0,2,0,2,0,2,0,2,0,2,2,0,2,0,2,0,2,0,2,0,0,2,0,2,0,2,0,2,0,2,2,0,2,0,2,0,2,0,2,0],[2,0,1,3,2,0,1,3,2,0,0,2,3,1,0,2,3,1,0,2,3,1,0,2,2,0,1,3,2,0,1,3,2,0,1,3,2,0,2,2,2,0,2,3,0,1,0,2,0,0,0,2,0,1,3,2,2,0,2,2,3,1,3,2,0,2,0,2,0,0,1,3,1,0,2,0,2,0,2,2,2,0,2,2,0,2,0,2,0,0,0,2,0,2,0,2,0,2,0,0],[3,1,1,1,1,1,1,1,1,1,3,0,3,0,3,0,3,0,3,0,3,1,2,1,2,1,2,1,2,1,3,0,3,0,3,0,3,0,3,0,3,1,2,1,2,1,2,1,2,1,3,0,3,0,3,0,3,0,3,0,3,1,2,1,2,1,2,1,2,1,3,0,3,0,3,0,3,0,3,0,3,1,2,1,2,1,2,1,2,1,3,0,3,0,3,0,3,0,3,0],[0,2,0,3,1,3,1,3,1,3,2,0,2,0,2,0,2,0,2,0,0,2,3,3,0,2,0,2,0,2,1,0,1,0,3,0,2,0,2,0,3,2,0,1,1,3,0,2,0,2,1,0,2,0,1,0,3,0,2,0,3,2,0,2,0,1,3,3,0,2,1,0,2,0,2,0,1,0,3,0,3,2,0,2,0,2,0,1,1,3,1,0,2,0,2,0,2,0,1,0],[2,3,0,2,0,2,0,2,0,2,1,0,1,0,1,0,1,0,1,0,0,3,0,1,3,2,0,2,0,2,2,0,3,0,1,3,2,0,2,0,0,3,1,3,2,1,3,2,0,2,2,0,2,1,3,2,1,0,2,0,0,3,0,2,1,3,2,3,3,2,2,0,2,0,2,0,1,0,1,3,0,3,0,2,0,2,1,3,0,1,2,0,2,0,2,0,2,1,3,0],[3,3,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,3,2,1,2,2,1,2,1,2,3,0,3,2,1,1,2,1,2,1,0,3,2,3,2,1,1,2,1,2,3,0,2,3,3,2,1,1,2,1,0,3,3,2,3,3,2,1,1,2,3,0,2,3,2,3,3,2,1,1,0,3,3,2,3,2,3,3,2,1,3,0,2,3,2,3,2,3,3,2],[0,2,0,2,3,1,3,1,0,2,2,0,2,0,1,3,1,3,2,0,0,2,0,2,3,1,3,1,0,2,2,0,2,0,1,3,1,3,2,0,1,3,1,3,2,0,2,0,1,3,3,1,3,1,0,2,0,2,3,1,1,3,1,3,2,0,2,0,1,3,3,1,3,1,0,2,0,2,3,1,0,2,0,2,3,1,3,1,0,2,2,0,2,0,1,3,1,3,2,0],[2,0,1,2,3,2,0,2,0,1,0,0,0,0,1,0,1,0,2,3,3,0,2,0,1,2,3,2,0,0,2,0,0,2,3,1,0,1,3,1,1,3,3,1,1,3,2,3,1,0,2,0,2,3,1,3,0,1,3,2,0,3,1,0,2,0,1,3,3,1,2,0,2,3,1,3,1,3,2,3,0,2,0,1,3,1,1,2,0,3,3,1,0,3,0,2,3,1,1,2],[3,3,3,2,1,3,0,0,1,1,1,0,2,3,2,3,2,3,2,3,1,2,0,1,0,1,0,1,0,1,2,1,3,2,3,2,3,0,2,3,3,2,0,1,0,1,2,2,0,0,1,1,3,2,3,2,2,1,0,1,0,2,0,1,2,2,2,2,3,2,0,1,3,0,2,3,2,0,2,0,3,2,0,2,0,0,1,2,2,1,3,1,3,1,0,3,2,0,3,2],[0,1,0,3,2,3,0,1,0,3,3,2,3,0,1,0,3,2,3,0,0,1,0,3,2,3,0,1,0,3,1,0,1,0,1,0,3,2,3,0,2,3,2,3,2,3,0,1,0,3,1,0,1,0,1,0,3,2,3,0,0,1,0,1,0,1,0,1,0,3,3,2,3,2,3,2,3,2,3,0,0,1,0,1,0,1,0,1,0,3,1,0,1,0,1,0,1,0,1,0],[0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2],[1,3,0,2,3,0,2,0,1,0,1,0,2,0,3,2,0,2,3,2,0,2,0,2,0,1,3,1,0,1,2,0,2,0,2,0,3,3,2,3,1,1,0,2,0,2,0,1,1,0,0,2,3,0,2,0,2,0,2,3,2,0,1,1,0,2,0,2,0,0,0,2,3,1,3,0,2,0,2,1,3,1,0,2,3,2,0,2,0,2,0,2,3,1,0,1,0,3,2,0],[2,3,2,0,2,0,2,3,2,3,1,0,1,3,1,3,1,0,1,0,2,3,2,0,2,0,2,3,2,3,0,1,0,2,0,2,0,2,1,0,2,3,2,0,2,0,2,0,2,3,0,1,0,2,0,2,0,2,0,1,2,3,2,0,2,0,2,0,2,3,1,0,1,2,0,2,0,2,0,1,2,3,2,3,2,0,2,0,2,3,1,0,1,0,1,3,1,3,1,0],[0,3,1,0,3,1,0,3,1,0,1,0,3,1,0,3,1,0,3,1,3,1,0,3,1,0,3,1,0,3,0,3,1,0,3,1,0,3,1,0,1,0,3,1,0,3,1,0,3,1,3,1,0,3,1,0,3,1,0,3,0,3,1,0,3,1,0,3,1,0,1,0,3,1,0,3,1,0,3,1,3,1,0,3,1,0,3,1,0,3,0,3,1,0,3,1,0,3,1,0],[0,2,0,0,2,3,1,3,3,1,2,2,0,2,3,1,3,1,1,3,0,0,2,0,1,3,1,3,3,1,0,2,0,2,2,0,2,3,1,3,2,1,3,2,0,2,0,1,3,1,1,3,1,0,2,0,2,3,1,3,3,1,3,2,0,2,0,0,2,0,1,3,1,1,3,1,0,2,0,2,1,3,1,3,1,3,2,0,2,0,3,1,3,1,3,1,0,2,0,2]]},P=[["red","yellow","blue","violet"],["#e96443","#904e95"],["#E55D87","#5FC3E4"],["#00416A","#799F0C","#FFE000"],["#1a2a6c","#b21f1f","#fdbb2d"],["#fdeff9","#ec38bc","#7303c0","#03001e"],["#dd1818","#333333"],["#40e0d0","#ff8c00","#ff0080"],["#3e5151","#decba4"],["#11998e","#38ef7d"],["#22c1c3","#fdbb2d"],["#b24592","#f15f79"],["#f1f2b5","#135058"],["#ff0084","#33001b"],["#833ab4","#fd1d1d","#fcb045"],["#d38312","#a83279"],["#556270","#ff6b6b"],["#c21500","#ffc500"],["#134e5e","#71b280"],["#ffe000","#799f0c"],["#9796f0","#fbc7d4"],["#3EECAC","#EE74E1"],["#FA8BFF","#2BD2FF","#2BFF88"],["#FF3CAC","#784BA0","#2B86C5"],["#30cfd0","#330867"],["#eea2a2","#bbc1bf","#57c6e1","#b49fda","#7ac5d8"],["#3d3393","#2b76b9","#2cacd1","#35eb93"]],R={10:[[0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2],[2,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2],[2,3,0,1,0,1,0,1,0,1,1,0,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2],[2,3,2,1,0,1,0,1,0,1,1,0,1,2,3,2,3,2,3,2,2,3,2,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2],[0,3,2,3,0,1,0,1,0,1,1,0,1,0,3,2,3,2,3,2,2,3,2,3,0,1,0,1,0,1,1,0,1,0,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2],[0,1,2,3,2,1,0,1,0,1,3,2,1,0,1,2,3,2,3,2,2,3,2,3,2,1,0,1,0,1,1,0,1,0,1,2,3,2,3,2,2,3,2,3,2,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2],[0,1,0,3,2,3,0,1,0,1,3,2,3,0,1,0,3,2,3,2,0,1,0,3,2,3,0,1,0,1,1,0,1,0,1,0,3,2,3,2,2,3,2,3,2,3,0,1,0,1,1,0,1,0,1,0,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2],[2,1,0,1,2,3,2,1,0,1,3,2,3,2,1,0,1,2,3,2,0,1,0,1,2,3,2,1,0,1,3,2,3,2,1,0,1,2,3,2,2,3,2,3,2,3,2,1,0,1,1,0,1,0,1,0,1,2,3,2,2,3,2,3,2,3,2,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2],[2,3,0,1,0,3,2,3,0,1,1,0,3,2,3,0,1,0,3,2,0,1,0,1,0,3,2,3,0,1,3,2,3,2,3,0,1,0,3,2,0,1,0,1,0,3,2,3,0,1,1,0,1,0,1,0,1,0,3,2,2,3,2,3,2,3,2,3,0,1,1,0,1,0,1,0,1,0,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2],[2,3,2,1,0,1,2,3,2,1,1,0,1,2,3,2,1,0,1,2,2,3,2,1,0,1,2,3,2,1,3,2,3,2,3,2,1,0,1,2,0,1,0,1,0,1,2,3,2,1,3,2,3,2,3,2,1,0,1,2,2,3,2,3,2,3,2,3,2,1,1,0,1,0,1,0,1,0,1,2,2,3,2,3,2,3,2,3,2,1,3,2,3,2,3,2,3,2,3,2],[0,3,2,3,0,1,0,3,2,3,1,0,1,0,3,2,3,0,1,0,2,3,2,3,0,1,0,3,2,3,1,0,1,0,3,2,3,0,1,0,0,1,0,1,0,1,0,3,2,3,3,2,3,2,3,2,3,0,1,0,0,1,0,1,0,1,0,3,2,3,1,0,1,0,1,0,1,0,1,0,2,3,2,3,2,3,2,3,2,3,1,0,1,0,1,0,1,0,1,0],[0,1,2,3,2,1,0,1,2,3,3,2,1,0,1,2,3,2,1,0,2,3,2,3,2,1,0,1,2,3,1,0,1,0,1,2,3,2,1,0,2,3,2,3,2,1,0,1,2,3,3,2,3,2,3,2,3,2,1,0,0,1,0,1,0,1,0,1,2,3,3,2,3,2,3,2,3,2,1,0,2,3,2,3,2,3,2,3,2,3,1,0,1,0,1,0,1,0,1,0],[0,1,0,3,2,3,0,1,0,3,3,2,3,0,1,0,3,2,3,0,0,1,0,3,2,3,0,1,0,3,1,0,1,0,1,0,3,2,3,0,2,3,2,3,2,3,0,1,0,3,1,0,1,0,1,0,3,2,3,0,0,1,0,1,0,1,0,1,0,3,3,2,3,2,3,2,3,2,3,0,0,1,0,1,0,1,0,1,0,3,1,0,1,0,1,0,1,0,1,0],[0,1,0,1,2,3,2,1,0,1,3,2,3,2,1,0,1,2,3,2,0,1,0,1,2,3,2,1,0,1,3,2,3,2,1,0,1,2,3,2,2,3,2,3,2,3,2,1,0,1,1,0,1,0,1,0,1,2,3,2,2,3,2,3,2,3,2,1,0,1,3,2,3,2,3,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2],[0,1,0,1,0,3,2,3,0,1,3,2,3,2,3,0,1,0,3,2,0,1,0,1,0,3,2,3,0,1,3,2,3,2,3,0,1,0,3,2,0,1,0,1,0,3,2,3,0,1,1,0,1,0,1,0,1,0,3,2,2,3,2,3,2,3,2,3,0,1,1,0,1,0,1,0,1,0,3,2,0,1,0,1,0,1,0,1,0,1,3,2,3,2,3,2,3,2,3,2],[0,1,0,1,0,1,2,3,2,1,3,2,3,2,3,2,1,0,1,2,0,1,0,1,0,1,2,3,2,1,3,2,3,2,3,2,1,0,1,2,0,1,0,1,0,1,2,3,2,1,3,2,3,2,3,2,1,0,1,2,2,3,2,3,2,3,2,3,2,1,1,0,1,0,1,0,1,0,1,2,2,3,2,3,2,3,2,3,2,1,3,2,3,2,3,2,3,2,3,2],[0,1,0,1,0,1,0,3,2,3,3,2,3,2,3,2,3,0,1,0,0,1,0,1,0,1,0,3,2,3,3,2,3,2,3,2,3,0,1,0,0,1,0,1,0,1,0,3,2,3,3,2,3,2,3,2,3,0,1,0,0,1,0,1,0,1,0,3,2,3,1,0,1,0,1,0,1,0,1,0,2,3,2,3,2,3,2,3,2,3,1,0,1,0,1,0,1,0,1,0],[0,1,0,1,0,1,0,1,2,3,3,2,3,2,3,2,3,2,1,0,0,1,0,1,0,1,0,1,2,3,3,2,3,2,3,2,3,2,1,0,0,1,0,1,0,1,0,1,2,3,3,2,3,2,3,2,3,2,1,0,0,1,0,1,0,1,0,1,2,3,3,2,3,2,3,2,3,2,1,0,2,3,2,3,2,3,2,3,2,3,1,0,1,0,1,0,1,0,1,0],[0,1,0,1,0,1,0,1,0,3,3,2,3,2,3,2,3,2,3,0,0,1,0,1,0,1,0,1,0,3,3,2,3,2,3,2,3,2,3,0,0,1,0,1,0,1,0,1,0,3,3,2,3,2,3,2,3,2,3,0,0,1,0,1,0,1,0,1,0,3,3,2,3,2,3,2,3,2,3,0,0,1,0,1,0,1,0,1,0,3,1,0,1,0,1,0,1,0,1,0]]},$=["black","black"],G=[0,1,2,3],H=function(){var e=Object(b.useState)({dimensions:10,squareSize:50,interval:2e3,bpm:120,note:1,duration:250,stagger:75,isColor:!1,isDark:!1,isUpdating:!1,isStaggered:!0,isSkewed:!1,colors:$,method:"collection",index:null,sequenceIndex:0,incoming:""}),n=Object(p.a)(e,2),t=n[0],r=n[1],i=Object(b.useState)([]),c=Object(p.a)(i,2),a=c[0],o=c[1],s=t.dimensions,u=t.squareSize,l=t.interval,d=t.isColor,j=t.isDark,f=t.isUpdating,g=t.isSkewed,v=t.method,x=t.colors,m=t.duration,y=t.stagger,k=t.sequenceIndex,q=t.isStaggered;Object(b.useEffect)((function(){o(w(s))}),[s]);var F=function(e){var n=S(e,s),t=n.x,r=n.y;o((function(n){var i,c=Object(O.a)(n);(c[e]=3===(i=n[e])?0:i+1,t!==r)&&(c[t*s+r]=C(c[e]));return c}))};return Object(b.useEffect)((function(){var e,n={single:function(){return F(Math.floor(Math.random()*((2^s)-1)))},all:function(){return o(w(s))},collection:function(){return o((e=W[s][Math.floor(Math.random()*W[s].length)],M()?e.map((function(e){return function(e){switch(e){case 0:return 2;case 1:return 3;case 2:return 0;case 3:return 1}}(e)})):e));var e},sequence:function(){o(R[s][k]),r((function(e){var n=e.sequenceIndex+1;return n===R[s].length&&(n=0),Object(h.a)(Object(h.a)({},e),{},{sequenceIndex:n})}))}};return f&&(e=setInterval((function(){r(d?function(e){return Object(h.a)(Object(h.a)({},e),{},{colors:(n=P[Math.floor(Math.random()*(P.length-1))],M()?n.reverse():n)});var n}:function(e){return Object(h.a)(Object(h.a)({},e),{},{colors:$})}),n[v]()}),l)),function(){return clearInterval(e)}}),[f,v,s,l,d,k]),Object(D.jsxs)(z,{children:[Object(D.jsx)(B,{isUpdating:f&&g,children:Object(D.jsx)(I,{size:2*s*u,isDark:j,children:G.map((function(e){return Object(D.jsx)(N,{number:e,className:"quadrant",children:a.map((function(e,n){return Object(D.jsx)(U,{dimensions:s,type:e,position:n,updateValue:F,isUpdating:f,colors:x,duration:m,stagger:y,isStaggered:q},n)}))},e)}))})}),Object(D.jsx)(Y,{config:t,setConfig:r,setValues:o,values:a})]})};t(55),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.a.render(Object(D.jsx)(j.a.StrictMode,{children:Object(D.jsx)(H,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.e812765f.chunk.js.map