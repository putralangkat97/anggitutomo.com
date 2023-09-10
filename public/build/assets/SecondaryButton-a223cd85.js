import{R as f,r as u,b as tt,a as oe,j as F}from"./app-180a7d22.js";import{l as Q,s as j,a as R,u as N,b as de,D as b,X as $,o as h,c as fe,y as S,p as nt,f as Te,T as rt,d as xe,S as we,C as ot,e as q,t as te}from"./transition-041ecc33.js";var ye;let O=(ye=f.useId)!=null?ye:function(){let e=Q(),[t,n]=f.useState(e?()=>j.nextId():null);return R(()=>{t===null&&n(j.nextId())},[t]),t!=null?""+t:void 0};function Se(e){return j.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let le=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var D=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(D||{}),Le=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Le||{}),lt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(lt||{});function at(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(le)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Pe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Pe||{});function it(e,t=0){var n;return e===((n=Se(e))==null?void 0:n.body)?!1:N(t,{0(){return e.matches(le)},1(){let r=e;for(;r!==null;){if(r.matches(le))return!0;r=r.parentElement}return!1}})}var ut=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ut||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function C(e){e==null||e.focus({preventScroll:!0})}let st=["textarea","input"].join(",");function ct(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,st))!=null?n:!1}function dt(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),a=t(r);if(l===null||a===null)return 0;let o=l.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function X(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?dt(e):e:at(e);l.length>0&&o.length>1&&(o=o.filter(p=>!l.includes(p))),r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},d=0,m=o.length,E;do{if(d>=m||d+m<=0)return 0;let p=s+d;if(t&16)p=(p+m)%m;else{if(p<0)return 3;if(p>=m)return 1}E=o[p],E==null||E.focus(c),d+=i}while(E!==a.activeElement);return t&6&&ct(E)&&E.select(),2}function K(e,t,n){let r=de(t);u.useEffect(()=>{function l(a){r.current(a)}return document.addEventListener(e,l,n),()=>document.removeEventListener(e,l,n)},[e,n])}function Fe(e,t,n){let r=de(t);u.useEffect(()=>{function l(a){r.current(a)}return window.addEventListener(e,l,n),()=>window.removeEventListener(e,l,n)},[e,n])}function ft(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function l(o,i){if(!r.current||o.defaultPrevented)return;let s=i(o);if(s===null||!s.getRootNode().contains(s)||!s.isConnected)return;let c=function d(m){return typeof m=="function"?d(m()):Array.isArray(m)||m instanceof Set?m:[m]}(e);for(let d of c){if(d===null)continue;let m=d instanceof HTMLElement?d:d.current;if(m!=null&&m.contains(s)||o.composed&&o.composedPath().includes(m))return}return!it(s,Pe.Loose)&&s.tabIndex!==-1&&o.preventDefault(),t(o,s)}let a=u.useRef(null);K("pointerdown",o=>{var i,s;r.current&&(a.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),K("mousedown",o=>{var i,s;r.current&&(a.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),K("click",o=>{a.current&&(l(o,()=>a.current),a.current=null)},!0),K("touchend",o=>l(o,()=>o.target instanceof HTMLElement?o.target:null),!0),Fe("blur",o=>l(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function mt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&pt(n)?!1:r}function pt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let vt="div";var z=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(z||{});function gt(e,t){let{features:n=1,...r}=e,l={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return $({ourProps:l,theirProps:r,slot:{},defaultTag:vt,name:"Hidden"})}let ae=b(gt);var De=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(De||{});function me(e,t){let n=u.useRef([]),r=h(e);u.useEffect(()=>{let l=[...n.current];for(let[a,o]of t.entries())if(n.current[a]!==o){let i=r(t,l);return n.current=t,i}},[r,...t])}function ht(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function B(...e){return u.useMemo(()=>Se(...e),[...e])}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function Et(){let e=u.useRef(0);return Fe("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Me(e,t,n,r){let l=de(n);u.useEffect(()=>{e=e??window;function a(o){l.current(o)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function wt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Ce(e){let t=h(e),n=u.useRef(!1);u.useEffect(()=>(n.current=!1,()=>{n.current=!0,fe(()=>{n.current&&t()})}),[t])}function Re(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let yt="div";var Ae=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ae||{});function bt(e,t){let n=u.useRef(null),r=S(n,t),{initialFocus:l,containers:a,features:o=30,...i}=e;Q()||(o=1);let s=B(n);xt({ownerDocument:s},!!(o&16));let c=St({ownerDocument:s,container:n,initialFocus:l},!!(o&2));Lt({ownerDocument:s,container:n,containers:a,previousActiveElement:c},!!(o&8));let d=Et(),m=h(v=>{let T=n.current;T&&(L=>L())(()=>{N(d.current,{[H.Forwards]:()=>{X(T,D.First,{skipElements:[v.relatedTarget]})},[H.Backwards]:()=>{X(T,D.Last,{skipElements:[v.relatedTarget]})}})})}),E=nt(),p=u.useRef(!1),Z={ref:r,onKeyDown(v){v.key=="Tab"&&(p.current=!0,E.requestAnimationFrame(()=>{p.current=!1}))},onBlur(v){let T=Re(a);n.current instanceof HTMLElement&&T.add(n.current);let L=v.relatedTarget;L instanceof HTMLElement&&L.dataset.headlessuiFocusGuard!=="true"&&(Ne(T,L)||(p.current?X(n.current,N(d.current,{[H.Forwards]:()=>D.Next,[H.Backwards]:()=>D.Previous})|D.WrapAround,{relativeTo:v.target}):v.target instanceof HTMLElement&&C(v.target)))}};return f.createElement(f.Fragment,null,!!(o&4)&&f.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:m,features:z.Focusable}),$({ourProps:Z,theirProps:i,defaultTag:yt,name:"FocusTrap"}),!!(o&4)&&f.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:m,features:z.Focusable}))}let $t=b(bt),k=Object.assign($t,{features:Ae}),P=[];wt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&P[0]!==t.target&&(P.unshift(t.target),P=P.filter(n=>n!=null&&n.isConnected),P.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Tt(e=!0){let t=u.useRef(P.slice());return me(([n],[r])=>{r===!0&&n===!1&&fe(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=P.slice())},[e,P,t]),h(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function xt({ownerDocument:e},t){let n=Tt(t);me(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&C(n())},[t]),Ce(()=>{t&&C(n())})}function St({ownerDocument:e,container:t,initialFocus:n},r){let l=u.useRef(null),a=Te();return me(()=>{if(!r)return;let o=t.current;o&&fe(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){l.current=i;return}}else if(o.contains(i)){l.current=i;return}n!=null&&n.current?C(n.current):X(o,D.First)===Le.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=e==null?void 0:e.activeElement})},[r]),l}function Lt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){let a=Te();Me(e==null?void 0:e.defaultView,"focus",o=>{if(!l||!a.current)return;let i=Re(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let c=o.target;c&&c instanceof HTMLElement?Ne(i,c)?(r.current=c,C(c)):(o.preventDefault(),o.stopPropagation(),C(s)):C(r.current)},!0)}function Ne(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Oe=u.createContext(!1);function Pt(){return u.useContext(Oe)}function ie(e){return f.createElement(Oe.Provider,{value:e.force},e.children)}function Ft(e){let t=Pt(),n=u.useContext(ke),r=B(e),[l,a]=u.useState(()=>{if(!t&&n!==null||j.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{l!==null&&(r!=null&&r.body.contains(l)||r==null||r.body.appendChild(l))},[l,r]),u.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),l}let Dt=u.Fragment;function Mt(e,t){let n=e,r=u.useRef(null),l=S(rt(d=>{r.current=d}),t),a=B(r),o=Ft(r),[i]=u.useState(()=>{var d;return j.isServer?null:(d=a==null?void 0:a.createElement("div"))!=null?d:null}),s=u.useContext(ue),c=Q();return R(()=>{!o||!i||o.contains(i)||(i.setAttribute("data-headlessui-portal",""),o.appendChild(i))},[o,i]),R(()=>{if(i&&s)return s.register(i)},[s,i]),Ce(()=>{var d;!o||!i||(i instanceof Node&&o.contains(i)&&o.removeChild(i),o.childNodes.length<=0&&((d=o.parentElement)==null||d.removeChild(o)))}),c?!o||!i?null:tt.createPortal($({ourProps:{ref:l},theirProps:n,defaultTag:Dt,name:"Portal"}),i):null}let Ct=u.Fragment,ke=u.createContext(null);function Rt(e,t){let{target:n,...r}=e,l={ref:S(t)};return f.createElement(ke.Provider,{value:n},$({ourProps:l,theirProps:r,defaultTag:Ct,name:"Popover.Group"}))}let ue=u.createContext(null);function At(){let e=u.useContext(ue),t=u.useRef([]),n=h(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=h(a=>{let o=t.current.indexOf(a);o!==-1&&t.current.splice(o,1),e&&e.unregister(a)}),l=u.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,u.useMemo(()=>function({children:a}){return f.createElement(ue.Provider,{value:l},a)},[l])]}let Nt=b(Mt),Ot=b(Rt),se=Object.assign(Nt,{Group:Ot}),Ie=u.createContext(null);function He(){let e=u.useContext(Ie);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,He),t}return e}function kt(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=h(a=>(t(o=>[...o,a]),()=>t(o=>{let i=o.slice(),s=i.indexOf(a);return s!==-1&&i.splice(s,1),i}))),l=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return f.createElement(Ie.Provider,{value:l},n.children)},[t])]}let It="p";function Ht(e,t){let n=O(),{id:r=`headlessui-description-${n}`,...l}=e,a=He(),o=S(t);R(()=>a.register(r),[r,a.register]);let i={ref:o,...a.props,id:r};return $({ourProps:i,theirProps:l,slot:a.slot||{},defaultTag:It,name:a.name||"Description"})}let jt=b(Ht),Bt=Object.assign(jt,{}),pe=u.createContext(()=>{});pe.displayName="StackContext";var ce=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ce||{});function _t(){return u.useContext(pe)}function Ut({children:e,onUpdate:t,type:n,element:r,enabled:l}){let a=_t(),o=h((...i)=>{t==null||t(...i),a(...i)});return R(()=>{let i=l===void 0||l===!0;return i&&o(0,n,r),()=>{i&&o(1,n,r)}},[o,n,r,l]),f.createElement(pe.Provider,{value:o},e)}function Wt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Vt=typeof Object.is=="function"?Object.is:Wt,{useState:Yt,useEffect:Gt,useLayoutEffect:qt,useDebugValue:Kt}=oe;function Xt(e,t,n){const r=t(),[{inst:l},a]=Yt({inst:{value:r,getSnapshot:t}});return qt(()=>{l.value=r,l.getSnapshot=t,ne(l)&&a({inst:l})},[e,r,t]),Gt(()=>(ne(l)&&a({inst:l}),e(()=>{ne(l)&&a({inst:l})})),[e]),Kt(r),r}function ne(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Vt(n,r)}catch{return!0}}function zt(e,t,n){return t()}const Jt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qt=!Jt,Zt=Qt?zt:Xt,en="useSyncExternalStore"in oe?(e=>e.useSyncExternalStore)(oe):Zt;function tn(e){return en(e.subscribe,e.getSnapshot,e.getSnapshot)}function nn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...a){let o=t[l].call(n,...a);o&&(n=o,r.forEach(i=>i()))}}}function rn(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,a=e-l;n.style(r,"paddingRight",`${a}px`)}}}function on(){if(!ht())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(a){return r.containers.flatMap(o=>o()).some(o=>o.contains(a))}n.microTask(()=>{if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let o=xe();o.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>o.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),c=t.querySelector(s);c&&!l(c)&&(a=c)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!l(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})})}}}function ln(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function an(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let M=nn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:xe(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:an(n)},l=[on(),rn(),ln()];l.forEach(({before:a})=>a==null?void 0:a(r)),l.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});M.subscribe(()=>{let e=M.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&M.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&M.dispatch("TEARDOWN",n)}});function un(e,t,n){let r=tn(M),l=e?r.get(e):void 0,a=l?l.count>0:!1;return R(()=>{if(!(!e||!t))return M.dispatch("PUSH",e,n),()=>M.dispatch("POP",e,n)},[t,e]),a}let re=new Map,I=new Map;function be(e,t=!0){R(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function l(){var o;if(!r)return;let i=(o=I.get(r))!=null?o:1;if(i===1?I.delete(r):I.set(r,i-1),i!==1)return;let s=re.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,re.delete(r))}let a=(n=I.get(r))!=null?n:0;return I.set(r,a+1),a!==0||(re.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),l},[e,t])}function sn({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let l=u.useRef((r=n==null?void 0:n.current)!=null?r:null),a=B(l),o=h(()=>{var i;let s=[];for(let c of e)c!==null&&(c instanceof HTMLElement?s.push(c):"current"in c&&c.current instanceof HTMLElement&&s.push(c.current));if(t!=null&&t.current)for(let c of t.current)s.push(c);for(let c of(i=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?i:[])c!==document.body&&c!==document.head&&c instanceof HTMLElement&&c.id!=="headlessui-portal-root"&&(c.contains(l.current)||s.some(d=>c.contains(d))||s.push(c));return s});return{resolveContainers:o,contains:h(i=>o().some(s=>s.contains(i))),mainTreeNodeRef:l,MainTreeNode:u.useMemo(()=>function(){return n!=null?null:f.createElement(ae,{features:z.Hidden,ref:l})},[l,n])}}var cn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(cn||{}),dn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(dn||{});let fn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},J=u.createContext(null);J.displayName="DialogContext";function _(e){let t=u.useContext(J);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_),n}return t}function mn(e,t,n=()=>[document.body]){un(e,t,r=>{var l;return{containers:[...(l=r.containers)!=null?l:[],n]}})}function pn(e,t){return N(t.type,fn,e,t)}let vn="div",gn=we.RenderStrategy|we.Static;function hn(e,t){var n;let r=O(),{id:l=`headlessui-dialog-${r}`,open:a,onClose:o,initialFocus:i,__demoMode:s=!1,...c}=e,[d,m]=u.useState(0),E=ot();a===void 0&&E!==null&&(a=(E&q.Open)===q.Open);let p=u.useRef(null),Z=S(p,t),v=B(p),T=e.hasOwnProperty("open")||E!==null,L=e.hasOwnProperty("onClose");if(!T&&!L)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!T)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!L)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof a!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let w=a?0:1,[U,je]=u.useReducer(pn,{titleId:null,descriptionId:null,panelRef:u.createRef()}),A=h(()=>o(!1)),ve=h(g=>je({type:0,id:g})),W=Q()?s?!1:w===0:!1,V=d>1,ge=u.useContext(J)!==null,[Be,_e]=At(),{resolveContainers:ee,mainTreeNodeRef:Y,MainTreeNode:Ue}=sn({portals:Be,defaultContainers:[(n=U.panelRef.current)!=null?n:p.current]}),We=V?"parent":"leaf",he=E!==null?(E&q.Closing)===q.Closing:!1,Ve=(()=>ge||he?!1:W)(),Ye=u.useCallback(()=>{var g,x;return(x=Array.from((g=v==null?void 0:v.querySelectorAll("body > *"))!=null?g:[]).find(y=>y.id==="headlessui-portal-root"?!1:y.contains(Y.current)&&y instanceof HTMLElement))!=null?x:null},[Y]);be(Ye,Ve);let Ge=(()=>V?!0:W)(),qe=u.useCallback(()=>{var g,x;return(x=Array.from((g=v==null?void 0:v.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(y=>y.contains(Y.current)&&y instanceof HTMLElement))!=null?x:null},[Y]);be(qe,Ge);let Ke=(()=>!(!W||V))();ft(ee,A,Ke);let Xe=(()=>!(V||w!==0))();Me(v==null?void 0:v.defaultView,"keydown",g=>{Xe&&(g.defaultPrevented||g.key===De.Escape&&(g.preventDefault(),g.stopPropagation(),A()))});let ze=(()=>!(he||w!==0||ge))();mn(v,ze,ee),u.useEffect(()=>{if(w!==0||!p.current)return;let g=new ResizeObserver(x=>{for(let y of x){let G=y.target.getBoundingClientRect();G.x===0&&G.y===0&&G.width===0&&G.height===0&&A()}});return g.observe(p.current),()=>g.disconnect()},[w,p,A]);let[Je,Qe]=kt(),Ze=u.useMemo(()=>[{dialogState:w,close:A,setTitleId:ve},U],[w,U,A,ve]),Ee=u.useMemo(()=>({open:w===0}),[w]),et={ref:Z,id:l,role:"dialog","aria-modal":w===0?!0:void 0,"aria-labelledby":U.titleId,"aria-describedby":Je};return f.createElement(Ut,{type:"Dialog",enabled:w===0,element:p,onUpdate:h((g,x)=>{x==="Dialog"&&N(g,{[ce.Add]:()=>m(y=>y+1),[ce.Remove]:()=>m(y=>y-1)})})},f.createElement(ie,{force:!0},f.createElement(se,null,f.createElement(J.Provider,{value:Ze},f.createElement(se.Group,{target:p},f.createElement(ie,{force:!1},f.createElement(Qe,{slot:Ee,name:"Dialog.Description"},f.createElement(k,{initialFocus:i,containers:ee,features:W?N(We,{parent:k.features.RestoreFocus,leaf:k.features.All&~k.features.FocusLock}):k.features.None},f.createElement(_e,null,$({ourProps:et,theirProps:c,slot:Ee,defaultTag:vn,features:gn,visible:w===0,name:"Dialog"}))))))))),f.createElement(Ue,null))}let En="div";function wn(e,t){let n=O(),{id:r=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:a,close:o}]=_("Dialog.Overlay"),i=S(t),s=h(d=>{if(d.target===d.currentTarget){if(mt(d.currentTarget))return d.preventDefault();d.preventDefault(),d.stopPropagation(),o()}}),c=u.useMemo(()=>({open:a===0}),[a]);return $({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:l,slot:c,defaultTag:En,name:"Dialog.Overlay"})}let yn="div";function bn(e,t){let n=O(),{id:r=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:a},o]=_("Dialog.Backdrop"),i=S(t);u.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let s=u.useMemo(()=>({open:a===0}),[a]);return f.createElement(ie,{force:!0},f.createElement(se,null,$({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:l,slot:s,defaultTag:yn,name:"Dialog.Backdrop"})))}let $n="div";function Tn(e,t){let n=O(),{id:r=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:a},o]=_("Dialog.Panel"),i=S(t,o.panelRef),s=u.useMemo(()=>({open:a===0}),[a]),c=h(d=>{d.stopPropagation()});return $({ourProps:{ref:i,id:r,onClick:c},theirProps:l,slot:s,defaultTag:$n,name:"Dialog.Panel"})}let xn="h2";function Sn(e,t){let n=O(),{id:r=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:a,setTitleId:o}]=_("Dialog.Title"),i=S(t);u.useEffect(()=>(o(r),()=>o(null)),[r,o]);let s=u.useMemo(()=>({open:a===0}),[a]);return $({ourProps:{ref:i,id:r},theirProps:l,slot:s,defaultTag:xn,name:"Dialog.Title"})}let Ln=b(hn),Pn=b(bn),Fn=b(Tn),Dn=b(wn),Mn=b(Sn),$e=Object.assign(Ln,{Backdrop:Pn,Panel:Fn,Overlay:Dn,Title:Mn,Description:Bt});function An({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:l=()=>{}}){const a=()=>{r&&l()},o={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return F.jsx(te,{show:t,as:u.Fragment,leave:"duration-200",children:F.jsxs($e,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[F.jsx(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:F.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),F.jsx(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:F.jsx($e.Panel,{className:`mb-6 bg-white overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${o}`,children:e})})]})})}function Nn({type:e="button",className:t="",disabled:n,children:r,...l}){return F.jsx("button",{...l,type:e,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}export{An as M,Nn as S};
