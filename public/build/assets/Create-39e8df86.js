import{j as t,r}from"./app-180a7d22.js";import{S as s}from"./SecondaryLinkButton-36b1d490.js";import{A as i}from"./AdminLayout-e7fc8d52.js";import o from"./FormPost-00e29f3d.js";import"./Dropdown-5c91d7ff.js";import"./transition-041ecc33.js";import"./ApplicationLogo-9eda1c2c.js";import"./TextInput-0defa406.js";import"./InputLabel-47b21ed3.js";import"./PrimaryButton-814b70f3.js";import"./slugify-8303c04e.js";import"./react-markdown-a6b9ca4c.js";const a=({tags:e})=>t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex justify-between items-center bg-white shadow-sm mb-5 p-6",children:[t.jsx("div",{className:"text-lg font-bold text-zinc-900",children:"Create Post"}),t.jsx(s,{href:route("admin.post.index"),children:"Back"})]}),t.jsx("div",{className:"bg-white p-6 w-full",children:t.jsx(r.Suspense,{fallback:"loading...",children:t.jsx(o,{tags:e})})})]});a.layout=e=>t.jsx(i,{children:e,title:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Create Post"}),head:"Create Post"});export{a as default};