(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],[,,,,,,,,,,,,,,function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){"use strict";t.r(r);var c=t(0),n=t(1),a=t.n(n),s=t(6),o=t.n(s),d=(t(14),t(3)),i=(t(15),a.a.createContext("")),u=(t(16),t(17),function(){return Object(c.jsx)("div",{className:"bingo__header",children:["B","I","N","G","O"].map((function(e){return Object(c.jsx)("div",{className:"header-cell",children:e},e)}))})}),b=(t(18),t(8)),j=(t(19),t(7)),l=t.n(j),h=[0,0,0,0,0,0,0,0,0,0,0,0],O=a.a.memo((function(e){var r=e.num,t=e.index,a=e.setWin,s=Object(n.useContext)(i),o=Object(n.useState)(!1),u=Object(d.a)(o,2),j=u[0],O=u[1],m=h;return Object(c.jsx)("div",{className:l()({"body-cell":!0,selected:j}),"data-order":t+1,onClick:function(e){var r=e.target,t=r.innerText,c=r.dataset;if(!(+t!==s&&"FREE"!==t||Object(b.a)(e.target.classList).includes("selected"))){switch(O(!0),!0){case+c.order<=5:m[0]++;break;case+c.order<=10:m[1]++;break;case+c.order<=15:m[2]++;break;case+c.order<=20:m[3]++;break;case+c.order<=25:m[4]++}switch(!0){case 1===+c.order:case 6===+c.order:case 11===+c.order:case 16===+c.order:case 21===+c.order:m[5]++;break;case 2===+c.order:case 7===+c.order:case 12===+c.order:case 17===+c.order:case 22===+c.order:m[6]++;break;case 3===+c.order:case 8===+c.order:case 13===+c.order:case 18===+c.order:case 23===+c.order:m[7]++;break;case 4===+c.order:case 9===+c.order:case 14===+c.order:case 19===+c.order:case 24===+c.order:m[8]++;break;case 5===+c.order:case 10===+c.order:case 15===+c.order:case 20===+c.order:case 25===+c.order:m[9]++}switch(!0){case 1===+c.order:case 7===+c.order:case 19===+c.order:case 25===+c.order:m[10]++;break;case 5===+c.order:case 9===+c.order:case 17===+c.order:case 21===+c.order:m[11]++;break;case 13===+c.order:m[10]++,m[11]++}m.some((function(e){return 5===e}))&&a(!0)}},children:r})})),m=a.a.memo((function(e){var r=e.setWin,t=Object(n.useMemo)((function(){var e=Array.from({length:25},(function(){return Math.ceil(90*Math.random())}));return e[12]="FREE",e}),[]);return Object(c.jsx)("div",{className:"bingo__body",children:t.map((function(e,t){return Object(c.jsx)(O,{num:e,index:t,setWin:r},"".concat(100*Math.random()))}))})})),f=a.a.memo((function(e){var r=e.setWin;return Object(c.jsxs)("div",{className:"bingo__card",children:[Object(c.jsx)(u,{}),Object(c.jsx)(m,{setWin:r})]})})),x=(t(20),t(21),function(e){var r=e.setNumber,t=Object(n.useContext)(i);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)("button",{type:"button",onClick:function(){r(Math.ceil(90*Math.random()))},children:"Change number"})]})}),v=function(e){var r=e.setNumber;return Object(c.jsx)("div",{className:"lottery-drom",children:Object(c.jsx)(x,{setNumber:r})})},g=(t(22),function(){return Object(c.jsxs)("div",{className:"win",children:[Object(c.jsx)("span",{children:"BINGO"}),Object(c.jsx)("p",{children:"To start a new game, refresh the page"})]})});var k=function(){var e=Object(n.useState)("-"),r=Object(d.a)(e,2),t=r[0],a=r[1],s=Object(n.useState)(!1),o=Object(d.a)(s,2),u=o[0],b=o[1];return Object(c.jsx)(i.Provider,{value:t,children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(v,{setNumber:a}),Object(c.jsx)(f,{setWin:b}),u&&Object(c.jsx)(g,{})]})})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(r){var t=r.getCLS,c=r.getFID,n=r.getFCP,a=r.getLCP,s=r.getTTFB;t(e),c(e),n(e),a(e),s(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),N()}],[[23,1,2]]]);
//# sourceMappingURL=main.ca57a20d.chunk.js.map