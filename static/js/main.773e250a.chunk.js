(this["webpackJsonpreact-graphql-pokemon"]=this["webpackJsonpreact-graphql-pokemon"]||[]).push([[0],{57:function(e,t,a){e.exports=a(73)},64:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),m=a(20),s=(a(62),a(63),a(64),a(53)),o=a(13),i=a(19),u=a(7),E=a(35),h=a(42),p=a(26);function g(){var e=Object(h.a)(["\n  query pokemons($first: Int!) {\n    pokemons(first: $first) {\n      id\n      name\n      image\n      number\n      classification\n    }\n  }\n"]);return g=function(){return e},e}var d=a.n(p)()(g()),f=a(79),v=a(75),b=function(e){return r.a.createElement(f.a,{variant:"info",className:"text-center"},r.a.createElement(f.a.Heading,null,e.appTitle," and ",r.a.createElement("span",{className:"fa fa-heart text-danger"})),r.a.createElement("hr",null),r.a.createElement("h5",null,"There are",r.a.createElement(v.a,{pill:!0,variant:"primary",className:"mr-1 ml-1"},e.poks),"Pok\xe9mon"),r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement(m.b,{to:"/Pokemon-List-React-GraphQL"},"Main Table"),r.a.createElement(m.b,{to:"/Pokemon-List-React-GraphQL/reverseList"},"Reverse Table")))},k=a(77),N=a(30),P=a(31),x=a.n(P),y=a(76),j=function(e){var t=e.totalPros,a=e.currentPage,n=e.perPage,l=e.onPageChange,c=Math.ceil(t/n);if(1===c)return null;var m=Object(P.range)(1,c+1);return r.a.createElement("nav",{style:{height:"100px"},className:"mb-5 mt-5","aria-label":"Page navigation"},r.a.createElement("ul",{className:"pagination justify-content-center"},m.map((function(e){return r.a.createElement("li",{key:e,className:e===a?"page-item active":"page-item"},r.a.createElement(y.a,{className:"page-link",style:{cursor:"pointer"},onClick:function(){return l(e)}},e))}))))},w=function(e,t,a){var n=(t-1)*a;return x()(e).slice(n).take(a).value()},L=function(e){var t=e.pokemons,a=e.perPage,l=Object(n.useState)(1),c=Object(i.a)(l,2),m=c[0],s=c[1],o=w(t,m,a);return r.a.createElement(n.Fragment,null,r.a.createElement(N.a,null,r.a.createElement("title",null,"Main Pok\xe9mon")),r.a.createElement("div",{className:"container"},r.a.createElement(k.a,{size:"sm",responsive:!0,bordered:!0,hover:!0,className:"mt-5 text-center"},r.a.createElement("thead",{className:"text-info"},r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("h4",null,"#")),r.a.createElement("th",null,r.a.createElement("h4",null,"Types")),r.a.createElement("th",null,r.a.createElement("h4",null,"Name")),r.a.createElement("th",null,r.a.createElement("h4",null,"Images")))),o.map((function(e){return r.a.createElement("tbody",{key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",{className:"text-danger"},parseInt(e.number))),r.a.createElement("td",null,r.a.createElement("b",{className:"text-dark"},e.classification)),r.a.createElement("td",null,r.a.createElement("b",{className:"text-dark"},e.name)),r.a.createElement("td",{className:"d-flex justify-content-center"},r.a.createElement("img",{style:{height:"50px",width:"50px"},src:e.image,alt:e.name}))))}))),r.a.createElement(j,{totalPros:t.length,currentPage:m,perPage:a,onPageChange:function(e){s(e)}})))},O=function(e){var t=e.pokemons,a=e.perPage,l=Object(n.useState)(5),c=Object(i.a)(l,2),m=c[0],s=c[1],o=w(t,m,a);return r.a.createElement(n.Fragment,null,r.a.createElement(N.a,null,r.a.createElement("title",null,"Reverse Pok\xe9mon")),r.a.createElement("div",{className:"container"},r.a.createElement(k.a,{size:"sm",responsive:!0,bordered:!0,hover:!0,className:"mt-5 text-center"},r.a.createElement("thead",{className:"text-info"},r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("h4",null,"#")),r.a.createElement("th",null,r.a.createElement("h4",null,"Types")),r.a.createElement("th",null,r.a.createElement("h4",null,"Name")),r.a.createElement("th",null,r.a.createElement("h4",null,"Images")))),o.reverse().map((function(e){return r.a.createElement("tbody",{key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",{className:"text-danger"},parseInt(e.number,10))),r.a.createElement("td",null,r.a.createElement("b",{className:"text-dark"},e.classification)),r.a.createElement("td",null,r.a.createElement("b",{className:"text-dark"},e.name)),r.a.createElement("td",{className:"d-flex justify-content-center"},r.a.createElement("img",{style:{height:"50px",width:"50px"},src:e.image,alt:e.name}))))}))),r.a.createElement(j,{totalPros:t.length,currentPage:m,perPage:a,onPageChange:function(e){s(e)}})))},R=a(78),T=function(){var e=Object(n.useState)(31),t=Object(i.a)(e,1)[0],a=Object(E.a)(d,{variables:{first:151}}),l=a.loading,c=a.data,m=(c=void 0===c?{}:c).pokemons,s=void 0===m?[]:m;return l?r.a.createElement("div",{style:{height:"500px"},className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement(R.a,{animation:"border",variant:"info"})):r.a.createElement(n.Fragment,null,r.a.createElement(b,{appTitle:"Pok\xe9mon List, made with React, GraphQL",poks:s.length}),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/Pokemon-List-React-GraphQL/reverseList",render:function(e){return r.a.createElement(O,Object.assign({},e,{pokemons:s,perPage:t}))}}),r.a.createElement(u.a,{path:"/Pokemon-List-React-GraphQL",render:function(e){return r.a.createElement(L,Object.assign({},e,{pokemons:s,perPage:t}))}})))},I=function(){var e=new s.a({uri:"https://graphql-pokemon.now.sh/"});return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{client:e},r.a.createElement(T,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(m.a,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.773e250a.chunk.js.map