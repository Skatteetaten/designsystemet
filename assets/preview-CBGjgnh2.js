let l;const S=new Uint8Array(16);function D(){if(!l&&(l=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(S)}const r=[];for(let t=0;t<256;++t)r.push((t+256).toString(16).slice(1));function T(t,e=0){return r[t[e+0]]+r[t[e+1]]+r[t[e+2]]+r[t[e+3]]+"-"+r[t[e+4]]+r[t[e+5]]+"-"+r[t[e+6]]+r[t[e+7]]+"-"+r[t[e+8]]+r[t[e+9]]+"-"+r[t[e+10]]+r[t[e+11]]+r[t[e+12]]+r[t[e+13]]+r[t[e+14]]+r[t[e+15]]}const f=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),m={randomUUID:f};function w(t,e,i){if(m.randomUUID&&!e&&!t)return m.randomUUID();t=t||{};const n=t.random||(t.rng||D)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,T(n)}const{addons:U}=__STORYBOOK_MODULE_PREVIEW_API__,{global:R}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:j}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var x="storybook/actions",V=`${x}/action-event`,P={depth:10,clearOnStoryChange:!0,limit:50},E=(t,e)=>{let i=Object.getPrototypeOf(t);return!i||e(i)?i:E(i,e)},F=t=>!!(typeof t=="object"&&t&&E(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),M=t=>{if(F(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let i=Object.getOwnPropertyDescriptor(e,"view"),n=i==null?void 0:i.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...i,value:Object.create(n.constructor.prototype)}),e}return t},B=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?w():Date.now().toString(36)+Math.random().toString(36).substring(2);function y(t,e={}){let i={...P,...e},n=function(...c){var g,u;if(e.implicit){let _=(g="__STORYBOOK_PREVIEW__"in R?R.__STORYBOOK_PREVIEW__:void 0)==null?void 0:g.storyRenders.find(d=>d.phase==="playing"||d.phase==="rendering");if(_){let d=!((u=window==null?void 0:window.FEATURES)!=null&&u.disallowImplicitActionsInRenderV8),O=new j({phase:_.phase,name:t,deprecated:d});if(d)console.warn(O);else throw O}}let o=U.getChannel(),a=B(),s=5,p=c.map(M),A=c.length>1?p:p[0],I={id:a,count:0,data:{name:t,args:A},options:{...i,maxDepth:s+(i.depth||3),allowFunction:i.allowFunction||!1}};o.emit(V,I)};return n.isAction=!0,n.implicit=e.implicit,n}var b=(t,e)=>typeof e[t]>"u"&&!(t in e),v=t=>{let{initialArgs:e,argTypes:i,id:n,parameters:{actions:c}}=t;if(!c||c.disable||!c.argTypesRegex||!i)return{};let o=new RegExp(c.argTypesRegex);return Object.entries(i).filter(([a])=>!!o.test(a)).reduce((a,[s,p])=>(b(s,e)&&(a[s]=y(s,{implicit:!0,id:n})),a),{})},k=t=>{let{initialArgs:e,argTypes:i,parameters:{actions:n}}=t;return n!=null&&n.disable||!i?{}:Object.entries(i).filter(([c,o])=>!!o.action).reduce((c,[o,a])=>(b(o,e)&&(c[o]=y(typeof a.action=="string"?a.action:o)),c),{})},L=[k,v],h=Symbol.for("tinyspy:spy"),K=t=>{let{args:e,parameters:{actions:i}}=t;i!=null&&i.disable||Object.entries(e).filter(([,n])=>typeof n=="function"&&"_isMockFunction"in n&&n._isMockFunction).forEach(([n,c])=>{var a;let o=c.getMockImplementation()??(h in c?(a=c[h])==null?void 0:a.getOriginal():void 0);if((o==null?void 0:o._actionAttached)!==!0&&(o==null?void 0:o.isAction)!==!0){let s=(...p)=>(y(n)(...p),o==null?void 0:o(...p));s._actionAttached=!0,c.mockImplementation(s)}})},W=[K];export{L as argsEnhancers,W as loaders,h as tinySpyInternalState};
//# sourceMappingURL=preview-CBGjgnh2.js.map
