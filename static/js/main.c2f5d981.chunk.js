(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{115:function(e,t,c){"use strict";c.r(t);var n,s,a=c(0),i=c.n(a),j=c(24),r=c.n(j),o=(c(89),c(25)),d=c(4),l=(c.p,c(90),c(124)),b=c(122),h=c(125),O=c(123),x=c(83),f=[{id:0,title:"White and Black",content:"Born in France",price:12e4,src:"https://codingapple1.github.io/shop/shoes1.jpg"},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4,src:"https://codingapple1.github.io/shop/shoes2.jpg"},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4,src:"https://codingapple1.github.io/shop/shoes3.jpg"}],p=c(76),u=c.n(p),m=c(26),g=c(9),v=c(27),k=c(28),N=c(41),S=c(40),y=c(42),C=c(43),w=c(35),B=(c(75),c(1)),I=w.a.div(n||(n=Object(C.a)(["\n    padding : 20px;\n"]))),E=w.a.h4(s||(s=Object(C.a)(["\n    font-size : 25px;\n    color : ","\n"])),(function(e){return e.color}));function F(e){return Object(B.jsx)("p",{children:"\uc7ac\uace0 : "+e.stock})}i.a.Component;var D,L,T=function(e){var t=Object(a.useState)(!0),c=Object(d.a)(t,2),n=c[0],s=c[1];Object(a.useEffect)((function(){})),Object(a.useEffect)((function(){setTimeout((function(){s(!1)}),2e3)}),[n]),Object(a.useEffect)((function(){})),Object(a.useEffect)((function(){}));var i,j,r=Object(g.f)(),l=Object(g.g)().id,b=e.stock[l],h=Object(y.a)(e.data);try{for(h.s();!(j=h.n()).done;){var O=j.value;if(O.id.toString()===l.toString()){i=O;break}}}catch(x){h.e(x)}finally{h.f()}return Object(B.jsxs)("div",{className:"container",children:[Object(B.jsx)(I,{children:Object(B.jsx)(E,{className:"red",children:"sdsdfsdffsdf"})}),!0===n?Object(B.jsx)("div",{id:"alert2",className:"my-alert2",children:Object(B.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,Object(B.jsxs)("div",{className:"row",children:[Object(B.jsx)("div",{className:"col-md-6",children:Object(B.jsx)("img",{src:i.src,width:"100%"})}),Object(B.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(B.jsx)("h4",{className:"pt-5",children:i.title}),Object(B.jsx)("p",{children:i.content}),Object(B.jsx)("p",{children:i.price}),Object(B.jsx)(F,{stock:b}),Object(B.jsx)("button",{className:"btn btn-danger",onClick:function(){var t=Object(o.a)(e.stock);t[l]-=1,e.setStock(t)},children:"\uc8fc\ubb38\ud558\uae30"}),Object(B.jsx)("button",{className:"btn btn-dark",onClick:function(){r.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})},A=w.a.div(D||(D=Object(C.a)(["\n    padding : 20px;\n"]))),z=w.a.h4(L||(L=Object(C.a)(["\n    font-size : 25px;\n    color : ","\n"])),(function(e){return e.color}));i.a.Component;var J=function(e){var t=Object(a.useState)(!0),c=Object(d.a)(t,2),n=c[0];return c[1],Object(g.f)(),Object(g.g)().id,Object(B.jsxs)("div",{className:"container",children:[Object(B.jsx)(A,{children:Object(B.jsx)(z,{className:"red",children:"sdsdfsdffsdf"})}),!0===n?Object(B.jsx)("div",{id:"alert2",className:"my-alert2",children:Object(B.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null]})};function P(e){return Object(B.jsxs)("div",{className:"col-md-4",children:[Object(B.jsx)("img",{src:e.data.src,width:"100%"}),Object(B.jsx)("h4",{children:Object(B.jsx)(m.b,{to:"/detail/"+e.data.id,children:e.data.title})}),Object(B.jsxs)("p",{children:[e.data.content," & ",e.data.price]})]})}var G=function(e){var t=Object(a.useState)(f),c=Object(d.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)([10,11,12]),j=Object(d.a)(i,2),r=j[0],p=j[1];return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(l.a,{bg:"light",expand:"lg",children:Object(B.jsxs)(b.a,{children:[Object(B.jsx)(l.a.Brand,{href:"#home",children:"Shop"}),Object(B.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(B.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(B.jsxs)(h.a,{className:"me-auto",children:[Object(B.jsx)(h.a.Link,{href:"#home",as:m.b,to:"/",children:"Home"}),Object(B.jsx)(h.a.Link,{href:"#link",as:m.b,to:"/detail",children:"Detail"}),Object(B.jsxs)(O.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(B.jsx)(O.a.Item,{href:"#action/3.1",children:Object(B.jsx)(m.b,{to:"/test",children:"Action"})}),Object(B.jsx)(O.a.Item,{href:"#action/3.2",children:"Another action"}),Object(B.jsx)(O.a.Item,{href:"#action/3.3",children:"Something"}),Object(B.jsx)(O.a.Divider,{}),Object(B.jsx)(O.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(B.jsxs)(g.c,{children:[Object(B.jsxs)(g.a,{exact:!0,path:"/",children:[Object(B.jsxs)("div",{className:"background",style:{height:"200px",text:"#ffffff",padding:"20px"},children:[Object(B.jsx)("h1",{children:"20% season off"}),Object(B.jsx)("p",{children:"\uaca8\uc6b8\uc744 \ub9de\uc774\ud558\uc5ec \uc2e0\ubc1c\uc744 \ud560\uc778\ud569\ub2c8\ub2e4."}),Object(B.jsx)("p",{children:"\uc3e0\ub77c\uc3d8\ub77c\ub77c\ub77c\ub77c\ub77c \ud558\ud558\ud558\ud558\ud558\ud558\ud558\ud558\ud558\ud558\ud558\ud558\ud558"}),Object(B.jsx)(x.a,{children:"\ucd94\uac00\uc0ac\ud56d"})]}),Object(B.jsxs)("div",{className:"container",children:[Object(B.jsx)("div",{className:"row",children:n.map((function(e,t){return Object(B.jsx)(P,{data:e,history:Object(g.f)(),stock:r[t]},t)}))}),Object(B.jsx)("button",{className:"btn btn-primary",onClick:function(){u.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){s([].concat(Object(o.a)(n),Object(o.a)(e.data)))})).catch((function(e){return console.log(e)}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(B.jsx)(g.a,{exact:!0,path:"/detail/:id",children:Object(B.jsx)(T,{data:n,stock:r,setStock:p})}),Object(B.jsx)(g.a,{exact:!0,path:"/test",children:Object(B.jsx)(J,{})})]})]})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,126)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};r.a.render(Object(B.jsx)(i.a.StrictMode,{children:Object(B.jsx)(m.a,{children:Object(B.jsx)(G,{})})}),document.getElementById("root")),H()},75:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){}},[[115,1,2]]]);
//# sourceMappingURL=main.c2f5d981.chunk.js.map