import{j as t,r}from"./app-4a23c6dd.js";import{S as o}from"./SecondaryLinkButton-b506ae14.js";import{A as a}from"./AdminLayout-7861a9b7.js";import"./TextInput-40f479cd.js";import"./slugify-fd11cbe0.js";import d from"./FormUpdate-2c56ad0d.js";import"./Dropdown-2e48a914.js";import"./transition-3624eb91.js";import"./ApplicationLogo-03c63b18.js";import"./InputLabel-e9bae4e0.js";import"./PrimaryButton-cfca9829.js";const m=({tags:e,post:i,postTag:s})=>t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex justify-between items-center bg-white shadow-sm mb-5 p-6",children:[t.jsx("div",{className:"text-lg font-bold text-zinc-900",children:"Edit Post"}),t.jsx(o,{href:route("admin.post.index"),children:"Back"})]}),t.jsx("div",{className:"bg-white p-6 w-full",children:t.jsx(r.Suspense,{fallback:"loading...",children:t.jsx(d,{tags:e,dataEdit:i,postTag:s})})})]});m.layout=e=>t.jsx(a,{children:e,title:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Edit Post"}),head:"Edit Post"});export{m as default};
