(this["webpackJsonpmidland-front"]=this["webpackJsonpmidland-front"]||[]).push([[0],{23:function(n,t,e){"use strict";e.r(t);var c,r,a,i,s,o,b,d,j,p,u=e(0),l=e.n(u),x=e(11),O=e.n(x),f=e(5),h=e(4),g=e.n(h),m=e(8),v=e(2),w=e(3),y=w.b.div(c||(c=Object(v.a)(["\n    padding: 10px;\n    min-width: 100px;\n    font-size: 0.85rem;\n    line-height: 18px;\n"]))),F=w.b.div(r||(r=Object(v.a)(["\n    text-align: center;\n\n"]))),k=w.b.div(a||(a=Object(v.a)(["\n\n\n"]))),S=w.b.div(i||(i=Object(v.a)(["\n    display: flex; \n    align-items: center;\n    justify-content: center;\n\n"]))),D=e(1),E=function(){var n=Object(m.a)(g.a.mark((function n(t){var e;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat("","/").concat(t),n.next=3,fetch(e);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),C=function(n){var t=n.location,e=Object(u.useState)("Default City"),c=Object(f.a)(e,2),r=c[0],a=c[1],i=Object(u.useState)("01d"),s=Object(f.a)(i,2),o=s[0],b=s[1],d=Object(u.useState)(0),j=Object(f.a)(d,2),p=j[0],l=j[1],x=Object(u.useState)("Default Description"),O=Object(f.a)(x,2),h=O[0],v=O[1],w=function(){var n=Object(m.a)(g.a.mark((function n(t){var e;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E(t);case 3:e=n.sent,a(e.city),b(e.icon),l(e.temperature),v(e.description),n.next=17;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0),a(t),b("01d"),l(-500),v("Error retrieving data");case 17:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}();return Object(u.useEffect)((function(){w(t)}),[]),Object(D.jsxs)(y,{children:[Object(D.jsx)(F,{children:r}),Object(D.jsx)(S,{children:Object(D.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(o,"@2x.png"),alt:"".concat(h,".png")})}),Object(D.jsx)(k,{children:"Current ".concat(p).concat("\xb0"," F")}),Object(D.jsx)(k,{children:h})]})},z=w.b.div(s||(s=Object(v.a)(["\n    display: inline-block\n    background: green;\n    max-width: 1280px;\n    min-width: 480px;\n    margin: 20px 0px;\n    padding 20px;\n    border: 2px solid #F1F1F1;\n    border-radius: 4px;\n"]))),A=w.b.div(o||(o=Object(v.a)(["\n\n    display: flex;\n    height: 32px;\n    width: 100%;\n    border-radius: 4px;\n    background: #F1F1F1;\n    opacity: 0.9;\n"]))),H=w.b.div(b||(b=Object(v.a)(["\n    margin: auto;\n    font-size: 0.9rem;\n    font-weight: 400;\n"]))),M=w.b.div(d||(d=Object(v.a)(["   \n    display: flex; \n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n\n"]))),N=function(n){var t=n.locations;return Object(D.jsxs)(z,{children:[Object(D.jsx)(A,{children:Object(D.jsx)(H,{children:"MIDLAND WEATHER"})}),Object(D.jsx)(M,{children:t.map((function(n,t){return Object(D.jsx)(C,{location:n},t)}))})]})},I=Object(w.a)(j||(j=Object(v.a)(["\n\n    :root {\n        --maxWidth: 1280px;\n    }\n    \n    * {\n        box-sizing: content-box;\n        font-family: 'Helvetica', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n        padding: 0px;\n        margin: 0px 0px;\n    } \n\n"]))),J=w.b.div(p||(p=Object(v.a)(["\n    display: flex; \n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    min-width: 480px;\n\n"]))),R=["Chicago","FortMyers","SiouxFalls"];var W=function(){return Object(D.jsxs)(J,{className:"App",children:[Object(D.jsx)(N,{locations:R}),Object(D.jsx)(I,{})]})};O.a.render(Object(D.jsx)(l.a.StrictMode,{children:Object(D.jsx)(W,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.120497a2.chunk.js.map