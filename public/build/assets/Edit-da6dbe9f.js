import{W as p,r as i,j as t}from"./app-c818f195.js";import{S as h}from"./SecondaryLinkButton-469f51f0.js";import{A as u}from"./AdminLayout-b5aeac95.js";import{P as a}from"./PrimaryButton-aa032d8c.js";import"./TextInput-2a33136c.js";import"./slugify-f723fd21.js";import j from"./FormUpdate-ea371c6b.js";import{M as g,S as y}from"./Modal-6dd09a34.js";import"./Dropdown-8acf9725.js";import"./transition-a8e051b4.js";import"./toConsumableArray-3797102f.js";import"./react-markdown-c8dfe22a.js";import"./Status-6e1c3b4a.js";import"./InputLabel-4d88ed3c.js";const P=({tags:s,post:e,postTag:n})=>{const{patch:l,processing:d}=p(),[c,o]=i.useState(!1),m=()=>{o(!0)},r=()=>{o(!1)},f=x=>{x.preventDefault(),l(route("admin.post.draft",e.id),{preserveScroll:!0,onSuccess:()=>r()})};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex justify-between items-center bg-white shadow-sm mb-5 p-6",children:[t.jsx("div",{className:"text-lg font-bold text-zinc-900",children:"Edit Post"}),t.jsxs("div",{className:"space-x-2",children:[e.status!=="draft"?t.jsx(a,{onClick:m,children:"Draft"}):t.jsx(t.Fragment,{}),t.jsx(h,{href:route("admin.post.index"),children:"Back"})]})]}),t.jsx("div",{className:"bg-white p-6 w-full",children:t.jsx(i.Suspense,{fallback:"loading...",children:t.jsx(j,{tags:s,dataEdit:e,postTag:n})})}),t.jsx(g,{show:c,onClose:r,children:t.jsxs("form",{onSubmit:f,className:"p-6",children:[t.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to draft this post?"}),t.jsxs("div",{className:"mt-6 flex justify-end",children:[t.jsx(y,{onClick:r,children:"Cancel"}),t.jsx(a,{className:"ml-3",disabled:d,children:"Yes, Draft it!"})]})]})})]})};P.layout=s=>t.jsx(u,{children:s,title:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Edit Post"}),head:"Edit Post"});export{P as default};