"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[517],{1179:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(2791),a="contactform_contact__T5u8L",u="contactform_input__pCh7y",s="contactform_button__1mZ2x",c=t(184),o=function(e){var n=e.onSubmit,t={name:"",number:""},r=function(e){t[e.currentTarget.name]=e.currentTarget.value};return(0,c.jsxs)("form",{className:a,onSubmit:function(e){e.preventDefault(),n(t),function(e){e.currentTarget.elements.name.value="",e.currentTarget.elements.number.value=""}(e)},children:[(0,c.jsxs)("label",{children:["Name",(0,c.jsx)("input",{onChange:r,className:u,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,c.jsxs)("label",{children:["Number",(0,c.jsx)("input",{onChange:r,className:u,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,c.jsx)("button",{className:s,type:"submit",children:"Add contact"})]})},i="filter_input__oS4i7",l=function(e){var n=e.value,t=e.onChangeFilter;return(0,c.jsxs)("label",{children:["Find contacts by name",(0,c.jsx)("input",{className:i,type:"text",value:n,onChange:t})]})},m=t(9434),d=t(6346),h=function(e){var n=e.nameId,t=e.name,r=e.number,a=(0,m.I0)();return(0,c.jsxs)("li",{children:[(0,c.jsxs)("span",{children:["Name: ",t]}),(0,c.jsxs)("span",{children:["Phone: ",r]}),(0,c.jsx)("button",{onClick:function(){return e=n,void a((0,d.in)(e));var e},type:"button",children:"Delete"})]})},f=function(){var e=(0,m.v9)((function(e){return e.contacts.items})),n=(0,m.v9)((function(e){return e.filter})),t=n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e;return(0,c.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,c.jsx)(h,{name:t,number:r,nameId:n},n)}))})},p=t(5653),b=function(){var e=(0,m.v9)((function(e){return e.filter})),n=(0,m.I0)();(0,r.useEffect)((function(){n((0,d.CL)())}),[n]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{children:"Phonebook"}),(0,c.jsx)(o,{onSubmit:function(e){var t=e.name,r=e.number;n((0,d.v6)({name:t,number:r}))}}),(0,c.jsx)("h2",{children:"Contacts"}),(0,c.jsx)(l,{value:e,onChangeFilter:function(e){var t=e.target.value.toLowerCase();n((0,p.T)(t))}}),(0,c.jsx)(f,{})]})},x=function(){return(0,c.jsx)(b,{})}}}]);
//# sourceMappingURL=517.a71a9931.chunk.js.map