import{W as j,r as n,j as t}from"./app-180a7d22.js";import{T as m,I as r}from"./TextInput-0defa406.js";import{I as o}from"./InputLabel-47b21ed3.js";import{P as h}from"./PrimaryButton-814b70f3.js";import{_ as v,S as f,E as N}from"./slugify-8303c04e.js";import"./react-markdown-a6b9ca4c.js";const T=({tags:c})=>{const{data:s,setData:a,post:u,processing:d,errors:l,reset:g}=j({title:"",slug:"",content:"",tag:[]}),[i,x]=n.useState(),p=e=>{e.preventDefault(),u(route("admin.post.store"),{preserveScroll:!0,onSuccess:()=>g()})};return n.useEffect(()=>{a("content",i)},[i]),n.useEffect(()=>{a("slug",v(s.title))},[s.title]),t.jsxs("form",{onSubmit:p,children:[t.jsxs("div",{className:"grid grid-cols-1 grid-cols-2 gap-4",children:[t.jsxs("div",{className:"",children:[t.jsx(o,{htmlFor:"title",value:"Post Title"}),t.jsx(m,{id:"title",type:"text",name:"title",value:s.title,className:"mt-1 block w-full",placeholder:"Title",onChange:e=>a("title",e.target.value)}),t.jsx(r,{message:l.title,className:"mt-2"})]}),t.jsxs("div",{children:[t.jsx(o,{htmlFor:"slug",value:"Slug"}),t.jsx(m,{id:"slug",type:"text",name:"slug",value:s.slug,className:"mt-1 block w-full bg-gray-100 cursor-not-allowed",readOnly:!0}),t.jsx(r,{message:l.slug,className:"mt-2"})]}),t.jsxs("div",{className:"col-span-2",children:[t.jsx(o,{htmlFor:"tag",value:"Tag"}),t.jsx(f,{isMulti:!0,id:"tag",options:c,onChange:e=>a("tag",e)}),t.jsx("input",{type:"hidden",name:"tag[]",value:s.tag}),t.jsx(r,{message:l.tag,className:"mt-2"})]}),t.jsxs("div",{className:"col-span-2",children:[t.jsx(o,{htmlFor:"content",value:"Content"}),t.jsx("div",{"data-color-mode":"light",children:t.jsx(N,{height:280,value:i,onChange:e=>x(e)})}),t.jsx(r,{message:l.content,className:"mt-2"})]})]}),t.jsx(h,{className:"mt-10",disabled:d,children:"Submit"})]})};export{T as default};
