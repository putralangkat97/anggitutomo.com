import{j as t}from"./app-5ed953f5.js";import{H as r}from"./HomeLayout-d91735fb.js";import a from"./Posts-fe5e7fb7.js";const i=({posts:e})=>t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"flex justify-start mx-auto mt-10 mb-4",children:t.jsx("h1",{className:"text-zinc-950 text-2xl font-medium",children:"Recent Articles"})}),t.jsx("hr",{className:"text-left"}),t.jsx("div",{className:"grid grid-cols-1 gap-8 mt-6 lg:mt-10",children:e.length>0&&e.map((s,l)=>t.jsx("div",{children:t.jsx(a,{title:s.title,content:s.content,slug:s.slug})},l))})]});i.layout=e=>t.jsx(r,{children:e,head:"Blog"});export{i as default};