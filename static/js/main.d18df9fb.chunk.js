(this["webpackJsonpreact-for-beginner"]=this["webpackJsonpreact-for-beginner"]||[]).push([[0],{11:function(e,t,n){e.exports={box:"Movie_box__2lmU2",title:"Movie_title__3pQTI",thumbnail:"Movie_thumbnail__24RxW"}},20:function(e,t,n){e.exports={container:"Home_container__1AkGC"}},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(17),i=n.n(s),a=n(6),j=n(2),o=n(7),u=n.n(o),l=n(10),b=n(5),d=n(11),h=n.n(d),m=n(0);var O=function(e){var t=e.id,n=e.title,c=e.coverImg,r=e.summary,s=e.genres;return Object(m.jsxs)("div",{className:h.a.box,children:[Object(m.jsx)("img",{src:c,alt:"",className:h.a.thumbnail}),Object(m.jsx)("h2",{children:Object(m.jsx)(a.b,{to:"/movie/".concat(t),className:h.a.title,children:n})}),Object(m.jsx)("p",{children:r&&r.length>200?"".concat(r.slice(0,200),"..."):r}),Object(m.jsx)("ul",{children:s&&s.map((function(e){return Object(m.jsx)("li",{children:e},e)}))})]})},x=n(8),v=n.n(x);var f=function(e){return e.index,Object(m.jsxs)("ul",{className:v.a.menu,children:[Object(m.jsx)("li",{className:v.a.menuItem,children:Object(m.jsx)(a.b,{to:"/home",children:"Movie"})}),Object(m.jsx)("li",{className:v.a.menuItem,children:Object(m.jsx)(a.b,{to:"/CoinTracker",children:"Coin tracker"})}),Object(m.jsx)("li",{className:v.a.menuItem,children:Object(m.jsx)(a.b,{to:"/MinutesToHours",children:"Hour & km"})}),Object(m.jsx)("li",{className:v.a.menuItem,children:Object(m.jsx)(a.b,{to:!0,children:"TodoList"})})]})},p=n(20),g=n.n(p);var _=function(){var e=Object(c.useState)(!0),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(b.a)(s,2),a=i[0],j=i[1],o=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,j(t.data.movies),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsxs)("div",{className:g.a.container,children:[n?Object(m.jsx)("h1",{children:"loading"}):null,a.map((function(e){return Object(m.jsx)(O,{id:e.id,summary:e.summary,title:e.title,coverImg:e.medium_cover_image,genres:e.genres},e.id)}))]})]})};var k=function(){var e=Object(c.useState)(!0),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(b.a)(s,2),a=i[0],o=i[1],d=Object(j.f)().id,h=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(d));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,r(!1),o(t.data.movie),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h()}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{}),n?Object(m.jsx)("h1",{children:"loading"}):null,Object(m.jsx)(O,{id:a.id,summary:a.description_intro,title:a.title,coverImg:a.medium_cover_image,genres:a.genres},a.id)]})};var y=function(){var e=Object(c.useState)(!0),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(b.a)(s,2),a=i[0],j=i[1];return Object(c.useEffect)((function(){fetch("https://api.coinpaprika.com/v1/tickers").then((function(e){return e.json()})).then((function(e){j(e),r(!1)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsxs)("h1",{children:["The Coins! (",a.length,")"]}),n?Object(m.jsx)("strong",{children:"Loading"}):null,Object(m.jsx)("ul",{children:a.map((function(e){return Object(m.jsxs)("li",{children:[e.name," (",e.symbol,") : $",e.quotes.USD.price," USD"]})}))})]})};var I=function(){var e=Object(c.useState)(),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(b.a)(s,2),a=i[0],j=i[1],o=function(e){r(e.target.value)};function u(){r(0)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"minutes",children:"Minutes"}),Object(m.jsx)("input",{value:a?60*n:n,id:"minutes",placeholder:"Minutes",type:"number",onChange:o,disabled:!0===a})]}),Object(m.jsxs)("h4",{children:["You want to convert ",n]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"hours",children:"Hours"}),Object(m.jsx)("input",{value:a?n:Math.round(n/60),id:"hours",placeholder:"Hours",type:"number",disabled:!1===a,onChange:o})]}),Object(m.jsx)("button",{onClick:u,children:"Reset"}),Object(m.jsx)("button",{onClick:function(){u(),j((function(e){return!e}))},children:a?"turn back":"."})]})]})};var N=function(){return Object(m.jsx)(a.a,{children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/Home",children:Object(m.jsx)(_,{})}),Object(m.jsx)(j.a,{path:"/MinutesToHours",children:Object(m.jsx)(I,{})}),Object(m.jsx)(j.a,{path:"/CoinTracker",children:Object(m.jsx)(y,{})}),Object(m.jsx)(j.a,{path:"/movie/:id",children:Object(m.jsx)(k,{})}),Object(m.jsx)(j.a,{path:"/",children:Object(m.jsx)(_,{})})]})})};n(32);i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={menu:"Nav_menu__fPdv3",menuItem:"Nav_menuItem__3cu8Q"}}},[[33,1,2]]]);
//# sourceMappingURL=main.d18df9fb.chunk.js.map