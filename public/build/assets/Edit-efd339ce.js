import{W as p,r as i,j as t}from"./app-516c76ac.js";import{S as h}from"./SecondaryLinkButton-0a5c1aa7.js";import{A as u}from"./AdminLayout-819cd23b.js";import{P as a}from"./PrimaryButton-969488a6.js";import"./TextInput-9dc0afee.js";import"./slugify-20cf776e.js";import j from"./FormUpdate-23b854d2.js";import{M as g,S as y}from"./Modal-1814057e.js";import"./Dropdown-a8825ce5.js";import"./transition-46886329.js";import"./toConsumableArray-3797102f.js";import"./react-markdown-6ff40055.js";import"./Status-ad268780.js";import"./InputLabel-b29ec83a.js";const P=({tags:s,post:e,postTag:n})=>{const{patch:l,processing:d}=p(),[c,o]=i.useState(!1),m=()=>{o(!0)},r=()=>{o(!1)},f=x=>{x.preventDefault(),l(route("admin.post.draft",e.id),{preserveScroll:!0,onSuccess:()=>r()})};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex justify-between items-center bg-white shadow-sm mb-5 p-6",children:[t.jsx("div",{className:"text-lg font-bold text-zinc-900",children:"Edit Post"}),t.jsxs("div",{className:"space-x-2",children:[e.status!=="draft"?t.jsx(a,{onClick:m,children:"Draft"}):t.jsx(t.Fragment,{}),t.jsx(h,{href:route("admin.post.index"),children:"Back"})]})]}),t.jsx("div",{className:"bg-white p-6 w-full",children:t.jsx(i.Suspense,{fallback:"loading...",children:t.jsx(j,{tags:s,dataEdit:e,postTag:n})})}),t.jsx(g,{show:c,onClose:r,children:t.jsxs("form",{onSubmit:f,className:"p-6",children:[t.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to draft this post?"}),t.jsxs("div",{className:"mt-6 flex justify-end",children:[t.jsx(y,{onClick:r,children:"Cancel"}),t.jsx(a,{className:"ml-3",disabled:d,children:"Yes, Draft it!"})]})]})})]})};P.layout=s=>t.jsx(u,{children:s,title:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Edit Post"}),head:"Edit Post"});export{P as default};
