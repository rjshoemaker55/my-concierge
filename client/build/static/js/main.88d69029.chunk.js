(this.webpackJsonpmyconcierge=this.webpackJsonpmyconcierge||[]).push([[0],{51:function(e,t,n){e.exports=n(89)},56:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),c=(n(56),n(21)),l=n(11),u=n(1),s=n(13),m=n.n(s),d=n(22),f=n(91),p=function(e){return new Promise((function(t,n){var a=e.destCity,r=e.arriveDate,i=e.numberNights,o=e.sortBy,c=function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:4000/locationid/".concat(a)).then((function(e){return e.json().then((function(e){e.error?n({msg:"Invalid location.",type:"location"}):l(e)}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:4000/hotellist/".concat(n,"/").concat(r,"/").concat(i,"/").concat(o)).then((function(e){return e.json()})).then((function(e){return t(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();c(a)}))},b=(n(58),n(59),function(e){var t=Object(l.f)(),n=Object(a.useState)(""),i=Object(u.a)(n,2),o=i[0],s=i[1],b=Object(a.useState)(""),h=Object(u.a)(b,2),g=h[0],v=h[1],E=Object(a.useState)(""),w=Object(u.a)(E,2),j=w[0],x=w[1],O=Object(a.useState)("recommended"),y=Object(u.a)(O,2),k=y[0],S=y[1],N=Object(a.useState)(!1),z=Object(u.a)(N,2),C=z[0],I=z[1],L=Object(a.useState)("hide"),M=Object(u.a)(L,2),B=M[0],P=M[1],_=Object(a.useState)(""),D=Object(u.a)(_,2),F=D[0],J=D[1],T=Object(a.useState)(!0),H=Object(u.a)(T,2),U=(H[0],H[1],function(){var e=Object(d.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I(!0),!(g<(new Date).toJSON().slice(0,10))){e.next=4;break}return W("Invalid date.","date"),e.abrupt("return");case 4:if(!(j>10)){e.next=7;break}return W("Too many nights.","nights"),e.abrupt("return");case 7:return e.prev=7,e.next=10,p({destCity:o,arriveDate:g,numberNights:j,sortBy:k});case 10:n=e.sent,t.push({pathname:"/results",state:{hotelList:n}}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),W(e.t0.msg,"location");case 17:I(!1);case 18:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}()),W=function(e,t){I(!1),J(e),P(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"navbar-wrapper",style:{background:e.navbarMaximized&&"rgba(35, 65, 75, 0.9)"}},r.a.createElement(c.b,{id:"navbar-title",to:"/"},"my concierge"),r.a.createElement("div",{id:"navbar-form",style:{display:!e.navbarMaximized&&"none"}},r.a.createElement("input",{className:"navbar-inputs ".concat("location"===B&&"error-text"),type:"text",placeholder:"city",value:"location"===B?F:o,onChange:function(e){return s(e.target.value)},onClick:function(){"location"===B&&(s(""),P("hide"))}}),r.a.createElement("input",{className:"navbar-inputs ".concat("date"===B&&"error-text"),type:"text",placeholder:"arrival date (yyyy-mm-dd)",onChange:function(e){return v(e.target.value)},value:"date"===B?F:g,onClick:function(){"date"===B&&(v(""),P("hide"))}}),r.a.createElement("input",{className:"navbar-inputs ".concat("nights"===B&&"error-text"),type:"number",placeholder:"nights",value:"nights"===B?F:j,onChange:function(e){return x(e.target.value)},onClick:function(){"nights"===B&&(x(""),P("hide"))}}),r.a.createElement("select",{name:"sort-by",id:"sort-dropdown",value:k,onChange:function(e){return S(e.target.value)}},r.a.createElement("option",{value:null},"sort by..."),r.a.createElement("option",{value:"price"},"recommended"),r.a.createElement("option",{value:"popularity"},"popularity"),r.a.createElement("option",{value:"price"},"price")),r.a.createElement("button",{type:"submit",id:"navbar-submit-button",onClick:U},"go")),r.a.createElement("button",{className:"open-full-navbar",onClick:e.switchNavbar,style:{display:!e.minimizeButtonShow&&"none"}},e.navbarMaximized?"\u2191":"\u2193")),r.a.createElement(f.a,{show:C},r.a.createElement(f.a.Header,null,r.a.createElement(f.a.Title,null,"Please wait while we load your results..."))))}),h=n(16),g=n(17),v=(n(82),n(83),function(e){return r.a.createElement("a",{className:"offer-wrapper",href:e.link,target:"_blank"},r.a.createElement("img",{className:"offer-logo",src:e.logoUrl}))}),E=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}};function w(){var e=Object(h.a)(["\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 1px 10px;\n    background: white;\n    color: rgba(35, 65, 75, 0.7);\n    border-radius: 5px;\n    font-weight: bold;\n    font-size: 18px;\n    cursor: pointer;\n    transition-duration: 0.3s;\n    &:hover {\n      color: white;\n      background: transparent;\n    }\n  "]);return w=function(){return e},e}function j(){var e=Object(h.a)(["\n    display: ",";\n    position: absolute;\n    right: 10px;\n    width: 45%; */}\n    margin-top: 15px;\n    background: rgba(0, 0, 0, 0.5);\n    animation: fadeIn ease 1s;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n    -webkit-animation: fadeIn ease 0.45s;\n    -moz-animation: fadeIn ease 0.45s;\n    -o-animation: fadeIn ease 0.45s;\n    -ms-animation: fadeIn ease 0.45s;\n    @media only screen and (max-width: 768px) {\n      text-align: center;\n    }\n    @media only screen and (max-width: 414px) {\n      width: 60%;\n    }\n  "]);return j=function(){return e},e}function x(){var e=Object(h.a)(["\n    color: rgb(132, 193, 204);\n    font-size: 23px;\n    font-weight: bold;\n  "]);return x=function(){return e},e}function O(){var e=Object(h.a)(["\n    color: white;\n    font-size: 45px;\n    font-family: 'Lobster', cursive;\n    font-weight: 100;\n    letter-spacing: 2px;\n  "]);return O=function(){return e},e}function y(){var e=Object(h.a)(["\n    background-color: rgba(0, 0, 0, 0.7);\n    padding: 5px 20px;\n  "]);return y=function(){return e},e}function k(){var e=Object(h.a)(["\n    background-image: url(",");\n    background-size: cover;\n    width: 100%;\n    height: ",";\n    background-attachment: fixed;\n    position: relative;\n  "]);return k=function(){return e},e}var S=function(e){var t=Object(a.useState)("none"),n=Object(u.a)(t,2),i=n[0],o=n[1],c=Object(a.useState)(!1),l=Object(u.a)(c,2),s=l[0],m=l[1],d=e.offers,f=function(){var e=Object(a.useState)(E()),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){r(E())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),p=(f.height,f.width),b=g.a.div(k(),e.originalPhoto,s?p<414?"160px":"100px":"600px"),h=g.a.div(y()),S=g.a.h1(O()),N=g.a.h2(x()),z=g.a.div(j(),i),C=g.a.div(w());return r.a.createElement(b,{onClick:function(e){return o("none"===i?"block":"none")}},r.a.createElement(h,null,r.a.createElement(S,null,e.name.toLowerCase()),r.a.createElement(N,null,e.locationString.toLowerCase()),r.a.createElement(C,{onClick:function(){return m(!s)}},"-")),r.a.createElement(z,null,r.a.createElement("div",{className:"hotel-info-header"},"information"),r.a.createElement("div",{className:"hotel-info-body"},r.a.createElement("div",{className:"hotel-price-display"},e.price," per night"),r.a.createElement("div",{className:"hotel-offers-wrapper"},(p>768?d:p>414?d.slice(0,6):d.slice(0,3)).map((function(e){return r.a.createElement(v,{logoUrl:e.logo,link:e.link,key:Math.random()})}))))))},N=(n(85),function(e){var t=Object(a.useState)(!0),n=Object(u.a)(t,2),i=n[0],o=n[1],c=e.location.state.hotelList.filter((function(e){return e.hac_offers.offers.length}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{switchNavbar:function(){return o(!i)},navbarMaximized:i,minimizeButtonShow:!0}),r.a.createElement("div",{className:"hotel-list"},r.a.createElement("div",{id:"instructions-bar"},"Click on a hotel's picture to view booking information."),c.map((function(e){return r.a.createElement(S,{key:Math.random(),name:e.name,locationString:e.location_string,originalPhoto:e.photo.images.original.url&&e.photo.images.original.url,largePhoto:e.photo.images.large.url,rankingText:e.ranking,rating:e.rating,class:e.hotel_class,offers:e.hac_offers.offers,price:e.price,minimized:e.minimized})}))))}),z=(n(86),function(){Object(l.f)();var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=(t[0],t[1],Object(a.useState)("")),i=Object(u.a)(n,2),o=(i[0],i[1],Object(a.useState)("")),c=Object(u.a)(o,2),s=(c[0],c[1],Object(a.useState)("")),m=Object(u.a)(s,2),d=(m[0],m[1],Object(a.useState)(0)),f=Object(u.a)(d,2);f[0],f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{navbarMaximized:!0,minimizeButtonShow:!1}),r.a.createElement("div",{className:"landing-wrapper"},r.a.createElement("div",{className:"landing-header-wrapper"},r.a.createElement("div",{className:"landing-small-header"},"welcome to"),r.a.createElement("div",{className:"landing-header"},"my concierge"))))});n(87),n(88);var C=function(){return r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:z})," ",r.a.createElement(l.a,{exact:!0,path:"/results",component:N})))};o.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.88d69029.chunk.js.map