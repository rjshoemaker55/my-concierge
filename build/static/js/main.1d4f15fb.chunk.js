(this.webpackJsonpmyconcierge=this.webpackJsonpmyconcierge||[]).push([[0],{105:function(e,a,t){},106:function(e,a,t){},107:function(e){e.exports=JSON.parse('{"flights":[{"depTime":"4:30pm","arriveTime":"7:30pm","duration":"3 hours","airline":"American Airlines","airlineLogo":"https://static.dezeen.com/uploads/2013/01/dezeen_American-Airlines-logo-and-livery_4a.jpg","flightNumber":"AA-170"},{"depTime":"7:45am","arriveTime":"2:45pm","duration":"7 hours","airline":"United Airlines","airlineLogo":"https://media.glassdoor.com/sqll/683/united-airlines-squarelogo-1562605013842.png","flightNumber":"UA-55"},{"depTime":"6:00am","arriveTime":"5:45pm","duration":"11 hours 45 minutes","airline":"Virgin Airlines","airlineLogo":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Virgin-logo.svg/1200px-Virgin-logo.svg.png","flightNumber":"VA-585"}]}')},108:function(e,a,t){},109:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(13),l=t.n(i),c=(t(61),t(27)),s=t(14),o=t(28),m=t.n(o),u=t(50),d=t(17),p=t(114),h=(t(63),function(e){return r.a.createElement("div",{className:"input-wrapper"},r.a.createElement("h1",{className:"main-heading"},e.mainHeader),r.a.createElement("h2",{className:"sec-heading"},e.secHeader),r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("input",{className:"input",type:"text",name:e.name,value:e.value,onChange:e.onChange})))}),f=t(64),g=function(e){return new Promise((function(a,t){var n,r,i,l,c=e.firstName,s=e.destCity,o=e.originCity,m=e.depDate,u=e.returnDate,d=function(){f({method:"GET",url:"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com","x-rapidapi-key":"2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c"},params:{query:s}}).then((function(e){r=e.data.Places[0].PlaceId,l=e.data.Places[0].PlaceName,p()})).catch((function(e){console.log(e),t(e)}))},p=function(){a({firstName:c,originCityId:n,originCityName:i,destCityId:r,destCityName:l,depDate:m,returnDate:u})};f({method:"GET",url:"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com","x-rapidapi-key":"2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c"},params:{query:o}}).then((function(e){n=e.data.Places[0].PlaceId,i=e.data.Places[0].PlaceName,d()})).catch((function(e){console.log(e),t(e)}))}))},v=(t(82),function(){var e=Object(s.f)(),a=Object(n.useState)(""),t=Object(d.a)(a,2),i=t[0],l=t[1],c=Object(n.useState)(""),o=Object(d.a)(c,2),f=o[0],v=o[1],E=Object(n.useState)(""),y=Object(d.a)(E,2),N=y[0],b=y[1],w=Object(n.useState)(""),k=Object(d.a)(w,2),D=k[0],C=k[1],j=Object(n.useState)(""),H=Object(d.a)(j,2),O=H[0],T=H[1],x=Object(n.useState)(0),A=Object(d.a)(x,2),P=A[0],S=A[1],Y=Object(n.useState)(!1),G=Object(d.a)(Y,2),I=G[0],L=G[1],W=[{mainHeader:r.a.createElement("span",null,r.a.createElement("span",{className:"small-sec"},"welcome to")," My Concierge."),secHeader:"What's your first name?",name:"firstName",value:i},{mainHeader:"Hello ".concat(i,"!"),secHeader:"Where are you headed? (city of airport)",name:"destCity",value:f},{mainHeader:r.a.createElement("span",null,"Ahh ",f,", ",r.a.createElement("span",{className:"small-sec"},"great choice!")),secHeader:"Where are you leaving from? (city of airport)",name:"originCity",value:N},{mainHeader:"Got it. ".concat(N," to ").concat(f,"."),secHeader:"When are you leaving (YYYY-MM-DD)?",name:"depDate",value:D},{mainHeader:"Last step!",secHeader:"When will you be returning (YYYY-MM-DD)?",name:"returnDate",value:O}],B=W[P],M=function(){var e=Object(u.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),4!==P){e.next=3;break}return e.abrupt("return",q());case 3:return e.next=5,S(P+1);case 5:B=W[P];case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),q=function(){L(!0),g({firstName:i,destCity:f,originCity:N,depDate:D,returnDate:O}).then((function(a){e.push({pathname:"/results",state:a})}))};return r.a.createElement("div",{className:"main-div"},r.a.createElement(h,{mainHeader:B.mainHeader,secHeader:B.secHeader,name:B.name,onChange:function(e){switch(e.target.name){case"firstName":l(e.target.value);break;case"destCity":v(e.target.value);break;case"originCity":b(e.target.value);break;case"depDate":C(e.target.value);break;case"returnDate":T(e.target.value)}},onSubmit:M,value:B.value}),r.a.createElement(p.a,{show:I},r.a.createElement(p.a.Header,null,r.a.createElement(p.a.Title,null,"Please wait while we load your results..."))))}),E=t(111),y=t(112),N=t(113),b=(t(105),function(e){return r.a.createElement("div",{className:"flight-display-wrapper"},r.a.createElement("div",{className:"flight-display-header"},e.airline," ",e.flightNumber),r.a.createElement("div",{className:"flight-info-wrapper"},r.a.createElement("img",{src:e.airlineLogo,className:"airline-logo"}),r.a.createElement("div",{className:"flight-info"},r.a.createElement("div",null,r.a.createElement("span",{className:"font-weight-bold"},"Departure Time:")," ",e.depTime),r.a.createElement("div",null,r.a.createElement("span",{className:"font-weight-bold"},"Arrival Time:")," ",e.arriveTime),r.a.createElement("div",null,r.a.createElement("span",{className:"font-weight-bold"},"Duration:")," ",e.duration))))}),w=(t(106),t(107).flights);console.log(w);var k=function(e){var a=e.location.state,t=a.firstName,n=(a.originCityId,a.originCityName),i=(a.destCityId,a.destCityName),l=a.depDate;a.returnDate;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(E.a,{id:"results-page-wrapper"},r.a.createElement("h1",{id:"results-header"},"You're all set for a great trip, ",t,"!"),r.a.createElement("div",{className:"divider"}),r.a.createElement(y.a,{id:"trip-info-wrapper"},r.a.createElement(N.a,null,r.a.createElement("div",{className:"trip-info-section"},"Origin: ",e.originCityName,r.a.createElement("span",{className:"font-weight-bold"},n))),r.a.createElement(N.a,null,r.a.createElement("div",{className:"trip-info-section"},"Destination: ",e.destCityName,r.a.createElement("span",{className:"font-weight-bold"},i))),r.a.createElement(N.a,null,r.a.createElement("div",{className:"trip-info-section"},"Date of Departure: ",e.depDate,r.a.createElement("span",{className:"font-weight-bold"},l)))),r.a.createElement(y.a,null,r.a.createElement(N.a,{className:"flight-hotel-wrapper"},r.a.createElement("h2",{className:"flight-hotel-header"},"Flights"),w.map((function(e){return r.a.createElement(b,{depTime:e.depTime,arriveTime:e.arriveTime,duration:e.duration,airline:e.airline,airlineLogo:e.airlineLogo,flightNumber:e.flightNumber,key:e.flightNumber})}))),r.a.createElement(N.a,{className:"flight-hotel-wrapper"},r.a.createElement("h2",{className:"flight-hotel-header"},"Hotels"),r.a.createElement("div",{id:"to-be-added"},"to be added...")))),r.a.createElement("div",{className:"my-concierge-footer"},"my concierge")))};t(108);var D=function(){return r.a.createElement(c.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:v}),r.a.createElement(s.a,{exact:!0,path:"/results",component:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e,a,t){e.exports=t(109)},61:function(e,a,t){},63:function(e,a,t){},82:function(e,a,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.1d4f15fb.chunk.js.map