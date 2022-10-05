"use strict";(self.webpackChunkkapusta_project=self.webpackChunkkapusta_project||[]).push([[748],{7628:function(e,t,n){n.d(t,{r:function(){return u}});var r,a,s=n(2791),i=["title","titleId"];function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function l(e,t){var n=e.title,l=e.titleId,u=c(e,i);return s.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",ref:t,"aria-labelledby":l},u),n?s.createElement("title",{id:l},n):null,r||(r=s.createElement("g",{clipPath:"url(#clip0_11_747)"},s.createElement("path",{fill:"#FF751D",d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"}))),a||(a=s.createElement("defs",null,s.createElement("clipPath",{id:"clip0_11_747"},s.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))))}var u=s.forwardRef(l);n.p},5698:function(e,t,n){n.d(t,{Z:function(){return b}});var r,a=n(885),s="Modal_modal__DJDMv",i="Modal_active__-p53x Modal_modal__DJDMv",o="Modal_partOfModal__yZSNf",c="Modal_text__KJZTz",l=n(2791),u=["title","titleId"];function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function p(e,t){var n=e.title,a=e.titleId,s=m(e,u);return l.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",style:{enableBackground:"new 0 0 16 16"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},s),n?l.createElement("title",{id:a},n):null,r||(r=l.createElement("path",{d:"M8 3 0 13h16z"})))}var _=l.forwardRef(p),h=(n.p,n(184)),f=function(e){var t=e.handleToggle,n=e.active;e.setActive;return(0,h.jsxs)("div",{className:"".concat(n?i:s," "),onClick:function(e){e.target===e.currentTarget&&t()},children:[(0,h.jsx)("p",{children:"Hello! To get started, enter the current balance of your account!"}),(0,h.jsx)("p",{className:c,children:"You can't spend money until you have it :)"}),(0,h.jsx)(_,{width:"25px",className:o})]})},v=n(5048),x=n(6871),g=n(6912),j=n(8724),y={container:"Balance_container__qL3d1",balance:"Balance_balance__41oSS",wrap:"Balance_wrap__-7-60",input:"Balance_input__5zeug",spinner:"Balance_spinner__y8L42",confirmBtn:"Balance_confirmBtn__ctfY4",amount:"Balance_amount__PZJn2"},b=function(){var e=(0,v.I0)(),t=(0,l.useState)(!1),n=(0,a.Z)(t,2),r=n[0],s=n[1],i=(0,v.v9)((function(e){return e.auth.userData.transactions})),o=(0,x.TH)().pathname,c=(0,v.v9)((function(e){return e.auth.userData.balance})),u=(0,l.useState)(c),d=(0,a.Z)(u,2),m=d[0],p=d[1],_=(0,l.useState)("".concat(c.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")," UAH")),b=(0,a.Z)(_,2),N=b[0],w=b[1],F=i.length>0,O=(0,g.FF)().data,E=void 0===O?[]:O,B=(0,g.yp)().data,C=void 0===B?[]:B,R=E.expenses,T=C.incomes;(0,l.useEffect)((function(){e((0,j.ts)())}),[e,R,T]),(0,l.useEffect)((function(){e((0,j.ts)())}),[e]),(0,l.useEffect)((function(){w("".concat(c.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")," UAH"))}),[c]),(0,l.useEffect)((function(){"/transactions/expenses"!==o||0!==i.length||0!==c||s(!0)}),[o,i,c]);return(0,h.jsxs)("div",{className:y.container,children:[(0,h.jsx)("span",{className:y.balance,children:"Balance:"}),(0,h.jsxs)("form",{className:y.wrap,onSubmit:function(t){t.preventDefault();var n=Number(m).toFixed(2);e((0,j.Xv)(Number(n))),t.target.balance.blur()},children:[(0,h.jsx)("div",{className:y.amount,children:(0,h.jsx)("input",{className:y.input,name:"balance",value:N,onChange:function(e){var t=e.target.value;!Number(t)&&t||(w(t),p(t))},onFocus:function(){w("")},onBlur:function(){w("".concat(c.toFixed(2)," UAH"))},disabled:F})}),(0,h.jsx)("button",{className:y.confirmBtn,type:"submit",disabled:F,children:"CONFIRM"}),r&&(0,h.jsx)(f,{className:y.modal,handleToggle:function(){s(!r)},active:r,setActive:s})]})]})}},9748:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ze}});var r=n(885),a="ReportsPage_main__AMhtK",s="ReportsPage_meta__NDdSx",i="ReportsPage_container__x6J4v",o="ReportsPage_block__c8tYZ",c="ReportsPage_header__go1nI",l="ReportsPage_text__uvXFd",u="ReportsPage_btn__EdsEq",d="ReportsPage_item__AJZqg",m="ReportsPage_chart_container__AR5gZ",p="ReportsPage_chart_lines__yCuoc",_="ReportsPage_icon__fuYUy",h="ReportsPage_title__Yo8Oj",f="ReportsPage_types__SVOnv",v="ReportsPage_leftArrow__iBs3U ReportsPage_arrows__qWqm6",x="ReportsPage_rightArrow__siZoH ReportsPage_arrows__qWqm6",g="ReportsPage_iconArrow__RoElM",j=n(2791),y=n(3504),b=n(6871),N=n(5698),w="MonthTotal_list__w-wtn",F="MonthTotal_item__SF4ME",O="MonthTotal_expense__B-gyv MonthTotal_total__legI+",E="MonthTotal_income__fXaVK MonthTotal_total__legI+",B="MonthTotal_text__j+-Vr",C="MonthTotal_textLoading__fsS1O MonthTotal_text__j+-Vr",R="MonthTotal_spinner__6bv-A",T=n(1726),k=n(6912),D=n(184);function M(e){var t=e.date,n=(0,k.L5)(function(e){var t=(e.getMonth()+1).toString(),n=e.getFullYear();return t.length<2&&(t="0"+t),[n,t].join("-")}(t)),r=n.currentData,a=n.isFetching,s=null===r||void 0===r?void 0:r.incomes.incomeTotal,i=null===r||void 0===r?void 0:r.expenses.expenseTotal,o=0===i?(null===i||void 0===i?void 0:i.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& "))+" \u0433\u0440\u043d.":"- "+(null===i||void 0===i?void 0:i.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& "))+" \u0433\u0440\u043d.",c=0===s?(null===s||void 0===s?void 0:s.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& "))+" \u0433\u0440\u043d.":"+ "+(null===s||void 0===s?void 0:s.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& "))+" \u0433\u0440\u043d.";return(0,D.jsxs)("ul",{className:w,children:[(0,D.jsx)("li",{className:F,children:a?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("p",{className:C,children:"Expenses:"}),(0,D.jsx)("div",{className:R,children:(0,D.jsx)(T.Nx,{width:"70",color:"#3f51b5"})})]}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("p",{className:B,children:"Expenses:"}),(0,D.jsx)("span",{className:O,children:o})]})}),(0,D.jsx)("li",{className:F,children:a?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("p",{className:C,children:"Income:"}),(0,D.jsx)("div",{className:R,children:(0,D.jsx)(T.Nx,{width:"70",color:"#3f51b5"})})]}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("p",{className:B,children:"Income:"}),(0,D.jsx)("span",{className:E,children:c})]})})]})}var P=n(2982),S="ExpenseByCategories_list__jYiK+",Z="ExpenseByCategories_item__Q5xCm",I="ExpenseByCategories_info__FBcti",A="ExpenseByCategories_title__Bb6Ki",L="ExpenseByCategories_link__bO25p",H="ExpenseByCategories_iconBackground__h-q8C",W="ExpenseByCategories_icon__6h8ck",J="ExpenseByCategories_activeLink__LnJDL",q="ExpenseByCategories_spinner__MDnZx",Y=n(5273);var U=n.p+"static/media/icons.13564d682188ff87cd0145486783fb7a.svg";var $,z=n.p+"static/media/symbols.1e3dc31e8782231ede15f87e35d4584f.svg",V=JSON.parse('{"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b":"Products","\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c":"Alcohol","\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":"Entertainment","\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435":"Health","\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442":"Transport","\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430":"Housing","\u0422\u0435\u0445\u043d\u0438\u043a\u0430":"Technique","\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c":"CommunalAndCommunication","\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438":"SportsAndHobbies","\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435":"Education","\u041f\u0440\u043e\u0447\u0435\u0435":"Other"}'),K=JSON.parse('{"\u0417/\u041f":"Salary","\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434":"Spin-off"}'),G=function(e){return e.isActive?J:L},X=function(e){var t,n=e.dateTransactionFilter,r=e.setCategory,a=e.category,s=e.reportsType,i=e.date,o=(0,b.s0)(),c=(0,k.H6)().data,l=(0,k.FF)(),u=l.data,d=void 0===u?[]:u,m=l.isFetching,p=d.expenses,_=void 0===p?[]:p,h=(0,b.TH)().pathname,f=null===c||void 0===c?void 0:c.map((function(e){var t;return{name:e,amount:null===(t=n(_))||void 0===t?void 0:t.reduce((function(t,n){return e===n.category?t+n.amount:t}),0),convertName:V[e]}})),v=(0,P.Z)(f).sort((function(e,t){return t.amount-e.amount}))[0].name,x=Object.values(K).includes(h.slice(9));(0,j.useEffect)((function(){!1===s&&r(v)}),[r,v,s]),(0,j.useEffect)((function(){o(V[v])}),[i]);var g=null===f||void 0===f||null===(t=f.filter((function(e){return e.amount>0})))||void 0===t?void 0:t.map((function(e){var t=e.name,n=e.amount,s=e.convertName,i=U+"#".concat(t),o=z+"#".concat(t),c=n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ");return(0,D.jsxs)("li",{className:Z,onClick:function(){a!==t&&r(t)},children:[(0,D.jsx)("p",{className:I,children:c}),(0,D.jsxs)(y.OL,{to:s,className:G,children:[(0,D.jsx)("svg",{className:H,width:"56px",height:"56px",children:(0,D.jsx)("use",{href:o})}),(0,D.jsx)("svg",{className:W,width:"56px",height:"56px",children:(0,D.jsx)("use",{href:i})})]}),(0,D.jsx)("p",{className:I,children:t})]},(0,Y.x0)())}));return(0,D.jsx)(D.Fragment,{children:m?(0,D.jsx)("div",{className:q,children:(0,D.jsx)(T.Nx,{width:"200",color:"#3f51b5"})}):(0,D.jsxs)(D.Fragment,{children:[g.length>0?(0,D.jsx)("ul",{className:S,children:g}):(0,D.jsx)("h3",{className:A,children:"You don't have expense transactions in the current period"}),x&&(0,D.jsx)(b.Fg,{to:V[v]})]})})},Q="IncomeByCategories_list__8ZVMy",ee="IncomeByCategories_item__2uv10",te="IncomeByCategories_title__5WkyE",ne="IncomeByCategories_info__52wE3",re="IncomeByCategories_link__SbULm",ae="IncomeByCategories_iconBackground__ZoTWE",se="IncomeByCategories_icon__ic2G2",ie="IncomeByCategories_activeLink__KjfMQ",oe="IncomeByCategories_spinner__tAZaH",ce=function(e){return e.isActive?ie:re},le=function(e){var t,n=e.dateTransactionFilter,r=e.setCategory,a=e.category,s=e.reportsType,i=e.date,o=(0,b.s0)(),c=(0,k.jN)().data,l=(0,k.yp)(),u=l.data,d=void 0===u?[]:u,m=l.isFetching,p=d.incomes,_=void 0===p?[]:p,h=(0,b.TH)().pathname,f=null===c||void 0===c?void 0:c.map((function(e){return{name:e,amount:n(_).reduce((function(t,n){return e===n.category?t+n.amount:t}),0),convertName:K[e]}})),v=Object.values(V).includes(h.slice(9)),x=(0,P.Z)(f).sort((function(e,t){return t.amount-e.amount}))[0].name;(0,j.useEffect)((function(){!0===s&&r(x)}),[r,x,s]),(0,j.useEffect)((function(){o(K[x])}),[i]);var g=null===f||void 0===f||null===(t=f.filter((function(e){return e.amount>0})))||void 0===t?void 0:t.map((function(e){var t=e.name,n=e.amount,s=e.convertName,i=U+"#".concat(t),o=z+"#".concat(t),c=n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ");return(0,D.jsxs)("li",{className:ee,onClick:function(){a!==t&&r(t)},children:[(0,D.jsx)("p",{className:ne,children:c}),(0,D.jsxs)(y.OL,{to:s,className:ce,children:[(0,D.jsx)("svg",{className:ae,width:"56px",height:"56px",children:(0,D.jsx)("use",{href:o})}),(0,D.jsx)("svg",{className:se,width:"56px",height:"56px",children:(0,D.jsx)("use",{href:i})})]}),(0,D.jsx)("p",{className:ne,children:t})]},(0,Y.x0)())}));return(0,D.jsx)(D.Fragment,{children:m?(0,D.jsx)("div",{className:oe,children:(0,D.jsx)(T.Nx,{width:"200",color:"#3f51b5"})}):(0,D.jsxs)(D.Fragment,{children:[g.length>0?(0,D.jsx)("ul",{className:Q,children:g}):(0,D.jsx)("h3",{className:te,children:"You don't have income transactions in the current period"}),v&&(0,D.jsx)(b.Fg,{to:K[x]})]})})},ue="ReportsDate_container__ZAfxT",de="ReportsDate_block__8TOx6",me="ReportsDate_leftBtn__glEjc ReportsDate_btn__JeZ7j",pe="ReportsDate_rightBtn__VbZmk ReportsDate_btn__JeZ7j",_e="ReportsDate_text__71uVZ",he="ReportsDate_date__EPHhG",fe="ReportsDate_icon__EGHnW",ve=["title","titleId"];function xe(){return xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xe.apply(this,arguments)}function ge(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function je(e,t){var n=e.title,r=e.titleId,a=ge(e,ve);return j.createElement("svg",xe({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 12",ref:t,"aria-labelledby":r},a),n?j.createElement("title",{id:r},n):null,$||($=j.createElement("path",{stroke:"#FF751D",strokeWidth:2,d:"M6 1L2 6l4 5"})))}var ye,be=j.forwardRef(je),Ne=(n.p,["title","titleId"]);function we(){return we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(this,arguments)}function Fe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Oe(e,t){var n=e.title,r=e.titleId,a=Fe(e,Ne);return j.createElement("svg",we({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 12",ref:t,"aria-labelledby":r},a),n?j.createElement("title",{id:r},n):null,ye||(ye=j.createElement("path",{stroke:"#FF751D",strokeWidth:2,d:"M1 1l4 5-4 5"})))}var Ee=j.forwardRef(Oe);n.p;function Be(e){var t=e.date,n=e.setDate,r=t.toLocaleString("en",{year:"numeric",month:"long"}).toUpperCase();return(0,D.jsxs)("div",{className:ue,children:[(0,D.jsx)("p",{className:_e,children:"Current period:"}),(0,D.jsxs)("div",{className:de,children:[(0,D.jsx)("button",{type:"button",className:me,onClick:function(){return function(e){var t=e.setMonth(e.getMonth()-1),r=new Date(t);n(r)}(t)},children:(0,D.jsx)(be,{className:fe})}),(0,D.jsxs)("p",{className:he,children:[" ",r]}),(0,D.jsx)("button",{type:"button",className:pe,onClick:function(){return function(e){var t=e.setMonth(e.getMonth()+1),r=new Date(t);n(r)}(t)},children:(0,D.jsx)(Ee,{className:fe})})]})]})}var Ce=n(7628),Re="Chart_list__NMCs7",Te="Chart_item__jf3ga",ke="Chart_category__e3D30",De="Chart_price__1PG96",Me="Chart_description__hXq3k",Pe=function(e){return new Intl.NumberFormat("uk",{minimumFractionDigits:2}).format(e).replace(",",".")},Se=function(e){var t,n,a,s=e.dateTransactionFilter,i=e.category,o=null===(t=(0,k.FF)().currentData)||void 0===t?void 0:t.expenses,c=null===(n=(0,k.yp)().currentData)||void 0===n?void 0:n.incomes,l=[],u=(0,j.useState)(window.innerWidth-40),d=(0,r.Z)(u,2),m=d[0],p=d[1],_=(0,j.useState)(window.innerWidth<768),h=(0,r.Z)(_,2),f=h[0],v=h[1],x=function(){window.innerWidth<480?p(window.innerWidth-40):p(440),v(window.innerWidth<768)};(0,j.useEffect)((function(){return window.addEventListener("resize",x),function(){return window.removeEventListener("resize",x)}}),[]),void 0!==c&&void 0!==o&&l.push.apply(l,(0,P.Z)(c).concat((0,P.Z)(o)));var g=function(e,t){var n;return null===e||void 0===e||null===(n=e.filter((function(e){return e.category===t})))||void 0===n?void 0:n.map((function(e){return e.description})).filter((function(e,t,n){return n.indexOf(e)===t}))}(l,i),y=null===g||void 0===g?void 0:g.map((function(e){return{descriptionName:e,amount:s(l).reduce((function(t,n){return e===n.description?t+n.amount:t}),0)}})).sort((function(e,t){return t.amount-e.amount})).filter((function(e){return 0!==e.amount})),b=null===(a=y[0])||void 0===a?void 0:a.amount;return(0,D.jsx)("ul",{className:Re,children:y.map((function(e,t){var n=e.descriptionName,r=e.amount;return(0,D.jsx)("li",{className:Te,children:f?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("div",{className:Me,style:{width:r/b*m+10},children:[(0,D.jsxs)("p",{className:ke,children:[n,"\xa0"]}),(0,D.jsxs)("p",{className:De,children:[Pe(r),"\xa0\u20b4"]})]}),(0,D.jsx)("div",{style:{width:r/b*m,height:15,background:t%3===0?"#FF751D":"#FED9BF",borderTopRightRadius:10,borderBottomRightRadius:10}})]}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("p",{className:De,children:[Pe(r),"\xa0\u20b4"]}),(0,D.jsx)("div",{style:{width:38,height:r/b*328,background:t%3===0?"#FF751D":"#FED9BF",borderTopRightRadius:10,borderTopLeftRadius:10}}),(0,D.jsxs)("p",{className:ke,children:[n,"\xa0"]})]})},(0,Y.x0)())}))})},Ze=function(){var e=(0,j.useState)(new Date),t=(0,r.Z)(e,2),n=t[0],w=t[1],F=(0,j.useState)(!1),O=(0,r.Z)(F,2),E=O[0],B=O[1],C=(0,j.useState)(null),R=(0,r.Z)(C,2),T=R[0],k=R[1],P=n.toLocaleString("en",{year:"numeric",month:"long"}),S=function(e){return null===e||void 0===e?void 0:e.filter((function(e){var t=new Date(e.date).toLocaleString("en",{year:"numeric",month:"long"});return P===t}))},Z=function(){B(!E),k(null)};return(0,D.jsxs)("main",{className:s,children:[(0,D.jsx)("div",{className:i}),(0,D.jsxs)("div",{className:a,children:[(0,D.jsxs)("div",{className:c,children:[(0,D.jsxs)(y.rU,{className:u,to:"/transactions/expenses",children:[(0,D.jsx)(Ce.r,{className:_})," ",(0,D.jsx)("p",{className:l,children:"Main page"})]}),(0,D.jsx)("div",{className:d,children:(0,D.jsx)(N.Z,{})}),(0,D.jsx)("div",{className:d,children:(0,D.jsx)(Be,{date:n,setDate:w})})]}),(0,D.jsx)(M,{date:n}),(0,D.jsxs)("div",{className:o,children:[(0,D.jsxs)("div",{className:f,children:[(0,D.jsx)("button",{type:"button",className:v,onClick:function(){return Z()},children:(0,D.jsx)(be,{className:g})}),(0,D.jsxs)("p",{className:h,children:[" ",E?"Income":"Expenses"," "]}),(0,D.jsx)("button",{type:"button",className:x,onClick:function(){return Z()},children:(0,D.jsx)(Ee,{className:g})})]}),E?(0,D.jsx)(le,{dateTransactionFilter:S,setCategory:k,category:T,reportsType:E,date:n}):(0,D.jsx)(X,{dateTransactionFilter:S,setCategory:k,category:T,reportsType:E,date:n})]}),(0,D.jsx)("div",{className:m,id:"flexible",children:(0,D.jsx)("div",{className:p,children:(0,D.jsx)(b.Z5,{children:(0,D.jsx)(b.AW,{path:":categoryName",element:(0,D.jsx)(Se,{dateTransactionFilter:S,category:T})})})})})]})]})}}}]);
//# sourceMappingURL=748.f11a73d4.chunk.js.map