import{j as t,r}from"./app-4a23c6dd.js";import{S as s}from"./SecondaryLinkButton-b506ae14.js";import{A as i}from"./AdminLayout-7861a9b7.js";import o from"./FormPost-86a6fd44.js";import"./Dropdown-2e48a914.js";import"./transition-3624eb91.js";import"./ApplicationLogo-03c63b18.js";import"./TextInput-40f479cd.js";import"./InputLabel-e9bae4e0.js";import"./PrimaryButton-cfca9829.js";import"./slugify-fd11cbe0.js";const a=({tags:e})=>t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex justify-between items-center bg-white shadow-sm mb-5 p-6",children:[t.jsx("div",{className:"text-lg font-bold text-zinc-900",children:"Create Post"}),t.jsx(s,{href:route("admin.post.index"),children:"Back"})]}),t.jsx("div",{className:"bg-white p-6 w-full",children:t.jsx(r.Suspense,{fallback:"loading...",children:t.jsx(o,{tags:e})})})]});a.layout=e=>t.jsx(i,{children:e,title:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Create Post"}),head:"Create Post"});export{a as default};