import{W as d,r as p,j as s,c as l}from"./app-5ad31a3b.js";import{G as c}from"./GuestLayout-e2cbd286.js";import{T as u,I as f}from"./TextInput-82d41de3.js";import{I as x}from"./InputLabel-3eef8366.js";import{P as w}from"./PrimaryButton-a82b012c.js";import"./ApplicationLogo-508d4490.js";function P(){const{data:e,setData:a,post:t,processing:o,errors:i,reset:m}=d({password:""});p.useEffect(()=>()=>{m("password")},[]);const n=r=>{r.preventDefault(),t(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(u,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>a("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{className:"ml-4",disabled:o,children:"Confirm"})})]})]})}export{P as default};