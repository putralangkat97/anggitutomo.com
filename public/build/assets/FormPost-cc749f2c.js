import{W as j,r as m,j as t}from"./app-02af86e4.js";import{T as n,I as r}from"./TextInput-722f3537.js";import{I as o}from"./InputLabel-f68ef5f3.js";import{P as h}from"./PrimaryButton-b0da3ff7.js";import{s as v,S as f,E as N}from"./slugify-974a8740.js";import"./toConsumableArray-3797102f.js";import"./react-markdown-244b5911.js";const C=({tags:c})=>{const{data:e,setData:a,post:u,processing:g,errors:l,reset:d}=j({title:"",slug:"",content:"",tag:[]}),[i,x]=m.useState(),p=s=>{s.preventDefault(),u(route("admin.post.store"),{preserveScroll:!0,onSuccess:()=>d()})};return m.useEffect(()=>{a("content",i)},[i]),m.useEffect(()=>{a("slug",v(e.title))},[e.title]),t.jsxs("form",{onSubmit:p,children:[t.jsxs("div",{className:"grid grid-cols-1 grid-cols-2 gap-4",children:[t.jsxs("div",{className:"",children:[t.jsx(o,{htmlFor:"title",value:"Post Title"}),t.jsx(n,{id:"title",type:"text",name:"title",value:e.title,className:"mt-1 block w-full",placeholder:"Title",onChange:s=>a("title",s.target.value)}),t.jsx(r,{message:l.title,className:"mt-2"})]}),t.jsxs("div",{children:[t.jsx(o,{htmlFor:"slug",value:"Slug"}),t.jsx(n,{id:"slug",type:"text",name:"slug",value:e.slug,className:"mt-1 block w-full bg-gray-100 cursor-not-allowed",readOnly:!0}),t.jsx(r,{message:l.slug,className:"mt-2"})]}),t.jsxs("div",{className:"col-span-2",children:[t.jsx(o,{htmlFor:"tag",value:"Tag"}),t.jsx(f,{isMulti:!0,id:"tag",options:c,onChange:s=>a("tag",s)}),t.jsx("input",{type:"hidden",name:"tag[]",value:e.tag}),t.jsx(r,{message:l.tag,className:"mt-2"})]}),t.jsxs("div",{className:"col-span-2",children:[t.jsx(o,{htmlFor:"content",value:"Content"}),t.jsx("div",{"data-color-mode":"light",children:t.jsx(N,{height:280,value:i,onChange:s=>x(s)})}),t.jsx(r,{message:l.content,className:"mt-2"})]})]}),t.jsx(h,{className:"mt-10",disabled:g,children:"Submit"})]})};export{C as default};
