const t=(r,e="/designsystemet/")=>{if(!r.startsWith("/")||r.startsWith("//"))return r;const s=e.replace(/\/$/,"");return s&&(r===s||r.startsWith(`${s}/`))?r:`${s}${r}`};export{t as g};
