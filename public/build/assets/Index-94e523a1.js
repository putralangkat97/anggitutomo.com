import{j as t}from"./app-180a7d22.js";import{H as r}from"./HomeLayout-5bb5e251.js";import l from"./Jumbotron-f12e85d2.js";import o from"./Posts-11339510.js";import"./react-markdown-a6b9ca4c.js";const i=({posts:e})=>t.jsxs(t.Fragment,{children:[t.jsx(l,{}),t.jsx("div",{className:"flex md:justify-center mx-auto mt-16 lg:mt-20 mb-4",children:t.jsx("h1",{className:"text-zinc-950 text-2xl font-medium",children:"My Recent Article"})}),t.jsx("hr",{className:"mx-auto max-w-xl"}),t.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 lg:mt-10",children:e.length>0&&e.map((s,m)=>t.jsx("div",{children:t.jsx(o,{title:s.title,content:s.content,slug:s.slug})},m))})]});i.layout=e=>t.jsx(r,{children:e});export{i as default};
