import{j as t}from"./app-180a7d22.js";import{H as r}from"./HomeLayout-5bb5e251.js";import i from"./Posts-11339510.js";import"./react-markdown-a6b9ca4c.js";const o=({posts:s})=>t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"flex justify-start mx-auto mt-10 mb-4",children:t.jsx("h1",{className:"text-zinc-950 text-2xl font-medium",children:"Recent Articles"})}),t.jsx("hr",{className:"text-left"}),t.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 lg:mt-10",children:s.length>0&&s.map((e,l)=>t.jsx("div",{children:t.jsx(i,{title:e.title,content:e.content,slug:e.slug})},l))})]});o.layout=s=>t.jsx(r,{children:s,head:"Blog"});export{o as default};