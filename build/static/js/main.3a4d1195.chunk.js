(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},19:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),u=n(13),r=n.n(u),l=(n(19),n(2)),o=function(e,t){return e.map((function(e){return e.name})).includes(t)},i=function(e,t,n){return!1===e?t.filter((function(e){return e.name.includes(n)})):t},m=function(e){var t=e.person,n=e.clickhandler;return c.a.createElement("ul",{key:t.id}," ",t.name," ",t.number,c.a.createElement("button",{onClick:function(){return n(t)}},"Delete"))},d=n(3),f=n.n(d),s="http://localhost:3001/api/persons",b=function(){return f.a.get(s)},h=function(e){return f.a.post(s,e)},E=function(e){return f.a.put("".concat(s,"/").concat(e.id),e)},p=function(e){return f.a.delete("".concat(s,"/").concat(e))},v=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],u=t[1],r=Object(a.useState)(""),d=Object(l.a)(r,2),f=d[0],s=d[1],v=Object(a.useState)(""),j=Object(l.a)(v,2),O=j[0],g=j[1],w=Object(a.useState)(""),k=Object(l.a)(w,2),S=k[0],y=k[1],C=Object(a.useState)(!0),D=Object(l.a)(C,2),N=D[0],J=D[1],P=Object(a.useState)(""),T=Object(l.a)(P,2),x=T[0],A=T[1],B=Object(a.useState)(""),F=Object(l.a)(B,2),I=F[0],q=F[1];Object(a.useEffect)((function(){b().then((function(e){u(e.data)}))}),[]);var z=function(e){q(e),setTimeout((function(){q("")}),5e3)},G=function(e){A(e),setTimeout((function(){A("")}),5e3)},H=function(e){window.confirm("Delete ".concat(e.name," ?"))&&(p(e.id).then((function(e){u(n.concat(e.data)),y(""),J(!0)})),z("Deleted ".concat(e.name)))};return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement((function(e){var t=e.message;return""===t?null:c.a.createElement("div",{className:"error"},t)}),{message:x}),c.a.createElement((function(e){var t=e.message;return""===t?null:c.a.createElement("div",{className:"success"},t)}),{message:I}),c.a.createElement("div",null,c.a.createElement("form",null,"Filter shown with ",c.a.createElement("input",{value:S,onChange:function(e){y(e.target.value),""===e.target.value?J(!0):J(!1)}})," ")),c.a.createElement("div",null,c.a.createElement("h3",null,"Add new"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:f,number:O};if(o(n,f)){if(window.confirm("".concat(f," is already added to phonebook, replace the old number?"))){var a=n.filter((function(e){return e.name===f}))[0];t.id=a.id,E(t).then((function(e){u(n.map((function(t){return t.id!==n.id?t:e.data}))),z("".concat(t.name," changed."))})).catch((function(e){u(n.filter((function(e){return e.id!==t.id}))),G("Person ".concat(t.name," is already removed from database."))}))}s(""),g("")}else h(t).then((function(e){u(n.concat(e.data)),z("Created ".concat(t.name)),s(""),g("")})).catch((function(e){G("Name must be 3 chars and number atleast 8")}))}},c.a.createElement("div",null,"name: ",c.a.createElement("input",{value:f,onChange:function(e){s(e.target.value)}})," "),c.a.createElement("div",null,"number: ",c.a.createElement("input",{value:O,onChange:function(e){g(e.target.value)}})),c.a.createElement("button",{type:"submit"},"add"))),c.a.createElement("h2",null,"Numbers"),c.a.createElement("form",null,c.a.createElement("div",null,i(N,n,S).map((function(e){return c.a.createElement(m,{key:e.id,person:e,clickhandler:H})})))))};r.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3a4d1195.chunk.js.map