import{R as s,r as n}from"./index-BwDkhjyp.js";import{c as u}from"./client-BCxScYCN.js";var o=new Map,c=({callback:e,children:t})=>{let r=n.useRef();return n.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},R=async(e,t)=>{let r=await m(t);return new Promise(a=>{r.render(s.createElement(c,{callback:()=>a(null)},e))})},p=(e,t)=>{let r=o.get(e);r&&(r.unmount(),o.delete(e))},m=async e=>{let t=o.get(e);return t||(t=u.createRoot(e),o.set(e,t)),t};export{R as r,p as u};
//# sourceMappingURL=react-18-B2Zgvqmf.js.map
