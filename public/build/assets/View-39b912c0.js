import{j as e,d as x,W as u,r as h}from"./app-440b4154.js";import{M as b,S as f}from"./SecondaryButton-9349fb2c.js";import{P as o}from"./PrimaryButton-0d12e79b.js";import{A as p}from"./AdminLayout-32b486bb.js";import"./transition-7fa5ee19.js";import"./Dropdown-292204bc.js";import"./ApplicationLogo-35fc79e3.js";const g=({status:s=""})=>{let t="";return s=="pending"?t="text-orange-500":s=="draft"?t="text-sky-500":s=="published"?t="text-green-500":t="text-zinc-500",e.jsxs(e.Fragment,{children:[e.jsx("span",{className:`ml-3 ${t}`,children:s}),s==="pending"&&e.jsx(ClockIcon,{className:"ml-1 w-5 h-6 -mb-0.5 text-orange-500"})]})};function j({className:s="",disabled:t,children:i,...n}){return e.jsx(x,{...n,className:`inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+s,as:"button",disabled:t,children:i})}const N=({value:s,key:t,className:i=""})=>e.jsx("div",{className:`inline-flex items-center px-4 py-2 bg-zinc-200 border border-transparent font-semibold text-xs text-zinc-900 uppercase tracking-widest hover:bg-zinc-300 transition ease-in-out duration-150 ${i}`,children:s},t),v=({post:s})=>{const{patch:t,processing:i}=u(),[n,l]=h.useState(!1),c=()=>{l(!0)},r=()=>{l(!1)},d=a=>{a.preventDefault(),t(route("admin.post.publish",s.id),{preserveScroll:!0,onSuccess:()=>r()})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between items-center bg-white shadow-sm p-6",children:[e.jsxs("div",{className:"inline-flex items-center ",children:["Status:",e.jsx(g,{status:s.status})]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx(j,{href:route("admin.post.edit",s.id),children:"Edit"}),s.status==="draft"?e.jsx(o,{onClick:c,children:"Publish"}):e.jsx(e.Fragment,{})]})]}),e.jsxs("div",{className:"bg-gray-50 shadow-sm p-6",children:[e.jsx("div",{className:"text-lg font-bold text-zinc-900 mb-6",children:s.title}),e.jsx("div",{className:"mb-6",children:s.content})]}),e.jsx("div",{className:"bg-white shadow-sm p-6",children:s.tags.map((a,m)=>e.jsx(N,{value:a.name,className:"mr-2"},m))}),e.jsx(b,{show:n,onClose:r,children:e.jsxs("form",{onSubmit:d,className:"p-6",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to publish this post?"}),e.jsxs("div",{className:"mt-6 flex justify-end",children:[e.jsx(f,{onClick:r,children:"Cancel"}),e.jsx(o,{className:"ml-3",disabled:i,children:"Publish"})]})]})})]})};v.layout=s=>e.jsx(p,{children:s,title:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"View Post"}),head:"Edit Post"});export{v as default};