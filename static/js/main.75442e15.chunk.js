(this["webpackJsonpreactemployeedirectory.io"]=this["webpackJsonpreactemployeedirectory.io"]||[]).push([[0],{37:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},62:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),r=c(24),a=c.n(r),i=c(27),l=c(2),j=c(10),o=c(29);var d=function(e){return Object(n.jsx)("div",Object(o.a)({className:"container".concat(e.fluid?"-fluid":"")},e))},h=c(25),u=c.n(h);c(37);var m=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("table",{className:"emp-list",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Image"}),Object(n.jsx)("th",{scope:"col",children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Phone"}),Object(n.jsx)("th",{scope:"col",children:"Email"}),Object(n.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(n.jsx)("tbody",{children:e.results.map((function(e,t){return Object(n.jsxs)("tr",{className:"employee-data",children:[Object(n.jsx)("td",{className:"emp-list-img",children:Object(n.jsx)("img",{alt:e.title,className:"img.fluid",src:e.picture.medium})},e.index),Object(n.jsx)("td",{className:"emp-list-name",children:Object(n.jsxs)("p",{children:[e.name.first," ",e.name.last]})},e.index),Object(n.jsx)("td",{className:"emp-list-phone",children:Object(n.jsx)("p",{children:e.cell})},e.index),Object(n.jsx)("td",{className:"emp-list-email",children:Object(n.jsx)("p",{children:e.email})},e.index),Object(n.jsx)("td",{className:"emp-list-bday",children:Object(n.jsx)(u.a,{date:e.dob.date,format:"MM/DD/YYYY"})},e.index)]},e.id.value)}))})]})})},b=c(26),O=c.n(b),x=function(){return O.a.get("https://randomuser.me/api/?results=200&nat=us")};c(55);var p=function(e){return Object(n.jsx)("form",{className:"search",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"language",children:"Search Term:"}),Object(n.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"term",list:"term",type:"text",className:"form-control",placeholder:"Search by First Name",id:"term"})]})})};var f=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(s.useState)(""),i=Object(j.a)(a,2),l=i[0],o=i[1],h=Object(s.useState)(""),u=Object(j.a)(h,2),b=u[0],O=u[1],f=Object(s.useState)([]),g=Object(j.a)(f,2),v=g[0],N=g[1];function y(e){return c.filter((function(t){return t.name.first.toLowerCase().includes(e)}))}return Object(s.useEffect)((function(){if(!l)return x().then((function(e){if(console.log(e),0===e.data.length)throw new Error("please enter a parameter");if("error"===e.data.status)throw new Error(e.data.message);r(e.data.results),N(e.data.results)})).catch((function(e){return O(e)}));y(l)}),[l]),Object(n.jsxs)("div",{children:["Home",Object(n.jsxs)(d,{style:{minHeight:"100vh"},children:[Object(n.jsx)("h1",{className:"text-center",children:"Search Employee Info"}),Object(n.jsx)(p,{handleInputChange:function(e){e.preventDefault(),o(e.target.value),N(y(l))},results:l}),b,Object(n.jsx)(m,{results:v})]})]})};c(56);var g=function(e){return Object(n.jsx)("main",{className:"wrapper",children:e.children})};var v=function(){return console.log("hope this works"),Object(n.jsx)(i.a,{children:Object(n.jsx)("div",{children:Object(n.jsx)(g,{children:Object(n.jsx)(l.a,{path:"/",component:f})})})})};c(62),c(63);a.a.render(Object(n.jsx)(v,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.75442e15.chunk.js.map