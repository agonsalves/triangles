(this.webpackJsonptriangles=this.webpackJsonptriangles||[]).push([[0],{15:function(n,e,t){n.exports=t(23)},20:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(10),i=t.n(o),u=(t(20),t(14)),c=t(7),s=t(2),f=t(3);function l(){var n=Object(s.a)(["\n    width: 100px;\n    height: 100px;\n    cursor: pointer;\n"]);return l=function(){return n},n}function m(){var n=Object(s.a)(["\n    display: flex;\n    flex-wrap: wrap-reverse;\n    align-items: flex-end;\n    transform: rotate(","deg);\n    grid-area: q",";\n"]);return m=function(){return n},n}function p(){var n=Object(s.a)(["\n    width: ","%;\n    height:  ","%;\n    transform: rotate(","deg);\n    transition: transform .3s ease-out;\n"]);return p=function(){return n},n}function d(){var n=Object(s.a)(["\n    display: grid;\n    width: ","px;\n    height: ",'px;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas:\n        "q4 q1"\n        "q3 q2";\n']);return d=function(){return n},n}var h=Object(r.memo)((function(n){var e=n.dimensions,t=n.type,r=n.updateValue,o=n.position;return a.a.createElement(g,{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",dimensions:e,type:t,className:"type-".concat(t),onClick:function(){return r(o)}},a.a.createElement("polygon",{points:"0 0, 100 100, 0 100",fill:"black"}))})),v=f.a.div(d(),(function(n){return n.size}),(function(n){return n.size})),g=f.a.svg(p(),(function(n){return 100/n.dimensions}),(function(n){return 100/n.dimensions}),(function(n){return 90*n.type})),w=f.a.div(m(),(function(n){return 90*n.number}),(function(n){return n.number+1})),b=f.a.div(l()),y=function(n){return 1===n?3:3===n?1:n},j=function(){var n=Object(r.useState)(function(n){for(var e=[],t=0;t<n;t++)for(var r=0;r<n;r++)t<=r?e.push(Math.floor(4*Math.random())):e.push(y(e[r*n+t]));return e}(12)),e=Object(c.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(!1),s=Object(c.a)(i,2),f=s[0],l=s[1],m=function(n){var e=n?n%12:0,t=Math.floor(n/12);o((function(r){var a,o=Object(u.a)(r);(o[n]=3===(a=r[n])?0:a+1,e!==t)&&(o[12*e+t]=y(o[n]));return o}))};return Object(r.useEffect)((function(){var n;return f&&(n=setInterval((function(){return m(Math.floor(143*Math.random()))}),500)),function(){return clearInterval(n)}}),[f]),a.a.createElement("div",{className:"App"},a.a.createElement(v,{size:960},[0,1,2,3].map((function(n){return a.a.createElement(w,{number:n,className:"quadrant",key:n},t.map((function(n,e){return a.a.createElement(h,{dimensions:12,type:n,key:e,position:e,updateValue:m})})))}))),a.a.createElement(b,{onClick:function(){return l((function(n){return!n}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.bd560e2b.chunk.js.map