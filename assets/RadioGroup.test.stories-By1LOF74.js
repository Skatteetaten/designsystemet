import{j as d}from"./jsx-runtime-Nms4Y4qS.js";import{r as gt}from"./index-BwDkhjyp.js";import{R as h}from"./index-FK3RsA-s.js";import{H as ha}from"./index-CCUfsLXI.js";import{w as u,e as l,u as A,f as U,c as ft}from"./index-hUG6DWTw.js";import{b as f,s as pa,q as ga,c as fa,g as wa,a as wt,d as Ba,e as ba,f as Sa,h as Ta,i as Aa,j as va,k as xa,l as Ea,p as Ra,m as qa}from"./dom.esm-D1LiUFLp.js";import{c as ka}from"./helpers-CDRJ97Ot.js";import{w as Ha}from"./webcomponent-decorator-DlmhHjRY.js";import{S as ae}from"./icon.systems-Cj7Nt_Zb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CI44Z2h3.js";import"./DatePickerCalendar-CuGySpz0.js";import"./index-DMYlLpXe.js";import"./index-DcL_RvKM.js";import"./index-Cq8GVsVj.js";import"./LabelWithHelp-BmjIbcxG.js";import"./Help-CLr4Mr4j.js";import"./index-BdP0pRE8.js";import"./client-BCxScYCN.js";import"./index-B8XB3FuZ.js";import"./icon.utils-Djpt9B5F.js";const Da=["standard","horizontal"];var Wa=Object.defineProperty,Ca=(e,a)=>{for(var t in a)Wa(e,t,{get:a[t],enumerable:!0})},Bt={};Ca(Bt,{findAllByShadowAltText:()=>Jt,findAllByShadowDisplayValue:()=>Gt,findAllByShadowLabelText:()=>kt,findAllByShadowPlaceholderText:()=>Mt,findAllByShadowRole:()=>vt,findAllByShadowTestId:()=>la,findAllByShadowText:()=>Pt,findAllByShadowTitle:()=>ea,findByShadowAltText:()=>Yt,findByShadowDisplayValue:()=>_t,findByShadowLabelText:()=>Ht,findByShadowPlaceholderText:()=>Vt,findByShadowRole:()=>xt,findByShadowTestId:()=>ra,findByShadowText:()=>jt,findByShadowTitle:()=>ta,getAllByShadowAltText:()=>zt,getAllByShadowDisplayValue:()=>Ot,getAllByShadowLabelText:()=>Rt,getAllByShadowPlaceholderText:()=>Wt,getAllByShadowRole:()=>Tt,getAllByShadowTestId:()=>na,getAllByShadowText:()=>Lt,getAllByShadowTitle:()=>Xt,getByShadowAltText:()=>Kt,getByShadowDisplayValue:()=>$t,getByShadowLabelText:()=>qt,getByShadowPlaceholderText:()=>Ct,getByShadowRole:()=>At,getByShadowTestId:()=>oa,getByShadowText:()=>Ft,getByShadowTitle:()=>Zt,queryAllByShadowAltText:()=>X,queryAllByShadowDisplayValue:()=>Q,queryAllByShadowLabelText:()=>K,queryAllByShadowPlaceholderText:()=>J,queryAllByShadowRole:()=>z,queryAllByShadowTestId:()=>ee,queryAllByShadowText:()=>Y,queryAllByShadowTitle:()=>Z,queryByShadowAltText:()=>Ut,queryByShadowDisplayValue:()=>Nt,queryByShadowLabelText:()=>Et,queryByShadowPlaceholderText:()=>Dt,queryByShadowRole:()=>St,queryByShadowTestId:()=>aa,queryByShadowText:()=>It,queryByShadowTitle:()=>Qt});Va();function Ma(){Ia()}function ne(){HTMLSlotElement.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll}function p(e){Ma();try{let a=e();return typeof a=="object"&&"finally"in a&&typeof a.finally=="function"&&a.finally(()=>ne()),a}finally{ne()}}function Va(){if(typeof ShadowRoot>"u")throw"Your environment does not support shadow roots.";ShadowRoot.prototype.matches==null&&Object.defineProperties(ShadowRoot.prototype,{matches:{get(){return function(e){return e.trim()==="*"?!0:!!this.querySelector(e)}}}}),ShadowRoot.prototype.outerHTML==null&&Object.defineProperties(ShadowRoot.prototype,{outerHTML:{get(){return this.innerHTML}}})}function Ia(){HTMLSlotElement.prototype.querySelectorAll=function(e){let a=HTMLElement.prototype.querySelectorAll,t=[];return this.assignedElements({flatten:!0}).forEach(n=>{let o=n,r=document.createElement("div");r.appendChild(o.cloneNode(!1)),r.querySelector(e)&&t.push(o),t=t.concat(Array.from(o.querySelectorAll(e)))}),t.length==0&&(t=Array.from(a.call(this,e))),[...new Set(t)]}}function w(e,a={shallow:!1}){return bt(e,"*",a)}function bt(e,a,t={shallow:!1},n=[],o=[]){return e instanceof Document&&(e=document.documentElement),n=[e],o.push(e),e instanceof HTMLElement&&e.shadowRoot!=null&&e.shadowRoot.mode!=="closed"&&(o.push(e.shadowRoot),n.push(e.shadowRoot)),n.forEach(r=>{r.querySelectorAll(a).forEach(s=>{if(s.shadowRoot==null||s.shadowRoot.mode==="closed"){o.push(s);return}if(o.push(s.shadowRoot),t.shallow===!0){s.shadowRoot.querySelectorAll(a).forEach(m=>{o.push(m)});return}s.shadowRoot.querySelectorAll(a).forEach(m=>{o.push(m),n.push(m)}),bt(s.shadowRoot,a,t,n,o)})}),[...new Set(o)]}function B(e){return e.map(a=>(...t)=>{let[n,o,r,...s]=t;return r==null&&(r={}),r.suggest=!1,a(n,o,r,...s)})}function z(...e){let[a,t,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(p(()=>w(a,n).map(o=>Ba(o,t,n)).flat(1/0)))]}var La=(e,a)=>`Found multiple elements with the role of: ${a}`,Fa=(e,a)=>`Unable to find an element with the role of: ${a}`,[Pa,ja,Na,Oa,$a]=B(f(z,La,Fa)),St=(...e)=>Pa(...e),Tt=(...e)=>ja(...e),At=(...e)=>Na(...e),vt=(...e)=>Oa(...e),xt=(...e)=>$a(...e);function K(...e){let[a,t,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(p(()=>w(a,n).map(o=>ba(o,t,n)).flat(1/0)))]}var Ga=(e,a)=>`Found multiple elements with the label text of: ${a}`,_a=(e,a)=>`Unable to find an element with the label text of: ${a}`,[Ua,za,Ka,Ja,Ya]=B(f(K,Ga,_a)),Et=(...e)=>Ua(...e),Rt=(...e)=>za(...e),qt=(...e)=>Ka(...e),kt=(...e)=>Ja(...e),Ht=(...e)=>Ya(...e);function J(...e){let[a,t,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(p(()=>w(a,n).map(o=>Sa(o,t,n)).flat(1/0)))]}var Qa=(e,a)=>`Found multiple elements with the placeholder text of: ${a}`,Xa=(e,a)=>`Unable to find an element with the placeholder text of: ${a}`,[Za,en,tn,an,nn]=B(f(J,Qa,Xa)),Dt=(...e)=>Za(...e),Wt=(...e)=>en(...e),Ct=(...e)=>tn(...e),Mt=(...e)=>an(...e),Vt=(...e)=>nn(...e);function Y(...e){let[a,t,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(p(()=>w(a,n).map(o=>Ta(o,t,n)).flat(1/0)))]}var on=(e,a)=>`Found multiple elements with the text of: ${a}`,ln=(e,a)=>`Unable to find an element with the text of: ${a}`,[rn,sn,dn,un,cn]=B(f(Y,on,ln)),It=(...e)=>rn(...e),Lt=(...e)=>sn(...e),Ft=(...e)=>dn(...e),Pt=(...e)=>un(...e),jt=(...e)=>cn(...e);function Q(...e){let[a,t,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(p(()=>w(a,n).map(o=>Aa(o,t,n)).flat(1/0)))]}var mn=(e,a)=>`Found multiple elements with the display value of: ${a}`,yn=(e,a)=>`Unable to find an element with the display value of: ${a}`,[hn,pn,gn,fn,wn]=B(f(Q,mn,yn)),Nt=(...e)=>hn(...e),Ot=(...e)=>pn(...e),$t=(...e)=>gn(...e),Gt=(...e)=>fn(...e),_t=(...e)=>wn(...e);function X(...e){let[a,t,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(p(()=>w(a,n).map(o=>va(o,t,n)).flat(1/0)))]}var Bn=(e,a)=>`Found multiple elements with the alt text of: ${a}`,bn=(e,a)=>`Unable to find an element with the alt text of: ${a}`,[Sn,Tn,An,vn,xn]=B(f(X,Bn,bn)),Ut=(...e)=>Sn(...e),zt=(...e)=>Tn(...e),Kt=(...e)=>An(...e),Jt=(...e)=>vn(...e),Yt=(...e)=>xn(...e);function Z(...e){let[a,t,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(p(()=>w(a,n).map(o=>xa(o,t,n)).flat(1/0)))]}var En=(e,a)=>`Found multiple elements with the title of: ${a}`,Rn=(e,a)=>`Unable to find an element with the title of: ${a}`,[qn,kn,Hn,Dn,Wn]=B(f(Z,En,Rn)),Qt=(...e)=>qn(...e),Xt=(...e)=>kn(...e),Zt=(...e)=>Hn(...e),ea=(...e)=>Dn(...e),ta=(...e)=>Wn(...e);function ee(...e){let[a,t,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(p(()=>w(a,n).map(o=>Ea(o,t,n)).flat(1/0)))]}var Cn=(e,a)=>`Found multiple elements with the test id of: ${a}`,Mn=(e,a)=>`Unable to find an element with the test id of: ${a}`,[Vn,In,Ln,Fn,Pn]=B(f(ee,Cn,Mn)),aa=(...e)=>Vn(...e),na=(...e)=>In(...e),oa=(...e)=>Ln(...e),la=(...e)=>Fn(...e),ra=(...e)=>Pn(...e),oe=/([^\S\r\n]*[\f\n\r\t\v]+)/.source;function jn(e){return e.replace(new RegExp(`${oe}.*${oe}{2,}`,"g"),"")}function Nn(...e){let[a,t,n]=e,o=ya((n==null?void 0:n.filterNode)||ia);return n==null&&(n={}),n.plugins==null&&(n.plugins=[]),n.plugins.push(o),p(()=>Ra(a,t,{...n,plugins:[o]}))}function sa(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ia(e){return e.nodeType!==te&&(e.nodeType!==ua||!e.matches(wt().defaultIgnore))}var On=(e,a,t,n,o,r,s)=>{let m=n+t.indent,y=t.colors;return e.map(g=>{let T=a[g],b=s(T,t,m,o,r);return typeof T!="string"&&(b.indexOf(`
`)!==-1&&(b=t.spacingOuter+m+b+t.spacingOuter+n),b="{"+b+"}"),t.spacingInner+n+y.prop.open+g+y.prop.close+"="+y.value.open+b+y.value.close}).join("")},$n=3,Gn=(e,a,t,n,o,r)=>jn(e.map(s=>{let m=typeof s=="string"?da(s,a):r(s,a,t,n,o);return m===""&&typeof s=="object"&&s!=null&&s.nodeType!==$n?"":a.spacingOuter+t+m}).join("")),da=(e,a)=>{let t=a.colors.content;return t.open+sa(e)+t.close},_n=(e,a)=>{let t=a.colors.comment;return t.open+"<!--"+sa(e)+"-->"+t.close},Un=(e,a,t,n,o)=>{let r=n.colors.tag;return r.open+"<"+e+(a&&r.close+a+n.spacingOuter+o+r.open)+(t?">"+r.close+t+n.spacingOuter+o+r.open+"</"+e:(a&&!n.min?"":" ")+"/")+">"+r.close},zn=(e,a)=>{let t=a.colors.tag;return t.open+"<"+e+t.close+" …"+t.open+" />"+t.close},ua=1,ca=3,te=8,ma=11,Kn=/^((HTML|SVG)\w*)?Element$/,Jn=e=>{var a;let t=((a=e==null?void 0:e.constructor)==null?void 0:a.name)||"",{nodeType:n,tagName:o}=e,r=typeof o=="string"&&o.includes("-")||typeof e.hasAttribute=="function"&&e.hasAttribute("is")||e instanceof HTMLElement;return n===ua&&(Kn.test(t)||r)||n===ca&&t==="Text"||n===te&&t==="Comment"||n===ma};function Yn(e){return e.nodeType===ca}function Qn(e){return e.nodeType===te}function le(e){return e.nodeType===ma}function ya(e){function a(t){let n=Array.prototype.slice.call(t.childNodes||t.children);return"shadowRoot"in t&&t.shadowRoot!=null&&t.shadowRoot.mode!=="closed"&&n.unshift(t.shadowRoot),n.filter(e)}return{test:t=>(t==null?void 0:t.constructor)&&Jn(t),serialize:(t,n,o,r,s,m)=>{if(Yn(t))return da(t.data,n);if(Qn(t))return _n(t.data,n);let y="DocumentFragment";return"tagName"in t&&t.tagName?y=t.tagName.toLowerCase():t instanceof ShadowRoot&&(y="ShadowRoot"),++r>n.maxDepth?zn(y,n):Un(y,On(le(t)?[]:Array.from(t.attributes).map(g=>g.name).sort(),le(t)?{}:Array.from(t.attributes).reduce((g,T)=>(g[T.name]=T.value,g),{}),n,o+n.indent,r,s,m),Gn(a(t),n,o+n.indent,r,s,m),n,o)}}}function re(...e){let[a,t,n]=e,o=ya((n==null?void 0:n.filterNode)||ia);n==null&&(n={}),n.plugins==null&&(n.plugins=[]),n.plugins.push(o),p(()=>qa(a,t,n))}function Xn(...e){let[a,t,n]=e;Array.isArray(a)?a.forEach(o=>re(o,t,n)):re(a,t,n)}({...pa});var Zn={...ga,...Bt};function eo(e){let a=wa(e,Zn);return{...a,queryAllByShadowRole:(...t)=>a.queryAllByShadowRole(...t),queryByShadowRole:(...t)=>a.queryByShadowRole(...t),getAllByShadowRole:(...t)=>a.getAllByShadowRole(...t),getByShadowRole:(...t)=>a.getByShadowRole(...t),findAllByShadowRole:(...t)=>a.findAllByShadowRole(...t),findByShadowRole:(...t)=>a.findByShadowRole(...t),queryAllByShadowLabelText:(...t)=>a.queryAllByShadowLabelText(...t),queryByShadowLabelText:(...t)=>a.queryByShadowLabelText(...t),getAllByShadowLabelText:(...t)=>a.getAllByShadowLabelText(...t),getByShadowLabelText:(...t)=>a.getByShadowLabelText(...t),findAllByShadowLabelText:(...t)=>a.findAllByShadowLabelText(...t),findByShadowLabelText:(...t)=>a.findByShadowLabelText(...t),queryAllByShadowPlaceholderText:(...t)=>a.queryAllByShadowPlaceholderText(...t),queryByShadowPlaceholderText:(...t)=>a.queryByShadowPlaceholderText(...t),getAllByShadowPlaceholderText:(...t)=>a.getAllByShadowPlaceholderText(...t),getByShadowPlaceholderText:(...t)=>a.getByShadowPlaceholderText(...t),findAllByShadowPlaceholderText:(...t)=>a.findAllByShadowPlaceholderText(...t),findByShadowPlaceholderText:(...t)=>a.findByShadowPlaceholderText(...t),queryAllByShadowText:(...t)=>a.queryAllByShadowText(...t),queryByShadowText:(...t)=>a.queryByShadowText(...t),getAllByShadowText:(...t)=>a.getAllByShadowText(...t),getByShadowText:(...t)=>a.getByShadowText(...t),findAllByShadowText:(...t)=>a.findAllByShadowText(...t),findByShadowText:(...t)=>a.findByShadowText(...t),queryAllByShadowDisplayValue:(...t)=>a.queryAllByShadowDisplayValue(...t),queryByShadowDisplayValue:(...t)=>a.queryByShadowDisplayValue(...t),getAllByShadowDisplayValue:(...t)=>a.getAllByShadowDisplayValue(...t),getByShadowDisplayValue:(...t)=>a.getByShadowDisplayValue(...t),findAllByShadowDisplayValue:(...t)=>a.findAllByShadowDisplayValue(...t),findByShadowDisplayValue:(...t)=>a.findByShadowDisplayValue(...t),queryAllByShadowAltText:(...t)=>a.queryAllByShadowAltText(...t),queryByShadowAltText:(...t)=>a.queryByShadowAltText(...t),getAllByShadowAltText:(...t)=>a.getAllByShadowAltText(...t),getByShadowAltText:(...t)=>a.getByShadowAltText(...t),findAllByShadowAltText:(...t)=>a.findAllByShadowAltText(...t),findByShadowAltText:(...t)=>a.findByShadowAltText(...t),queryAllByShadowTitle:(...t)=>a.queryAllByShadowTitle(...t),queryByShadowTitle:(...t)=>a.queryByShadowTitle(...t),getAllByShadowTitle:(...t)=>a.getAllByShadowTitle(...t),getByShadowTitle:(...t)=>a.getByShadowTitle(...t),findAllByShadowTitle:(...t)=>a.findAllByShadowTitle(...t),findByShadowTitle:(...t)=>a.findByShadowTitle(...t),queryAllByShadowTestId:(...t)=>a.queryAllByShadowTestId(...t),queryByShadowTestId:(...t)=>a.queryByShadowTestId(...t),getAllByShadowTestId:(...t)=>a.getAllByShadowTestId(...t),getByShadowTestId:(...t)=>a.getByShadowTestId(...t),findAllByShadowTestId:(...t)=>a.findAllByShadowTestId(...t),findByShadowTestId:(...t)=>a.findByShadowTestId(...t)}}fa({getElementError(e,a){let t=Nn(a),n=new Error([e,`Ignored nodes: comments, ${wt().defaultIgnore}
${t}`].filter(Boolean).join(`

`));return n.name="ShadowDOMTestingLibraryElementError",n}});const{useArgs:to}=__STORYBOOK_MODULE_PREVIEW_API__,Eo={component:h,title:"Tester/RadioGroup/RadioGroup",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{category:ka.props}},children:{table:{disable:!0}},defaultValue:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(ae),mapping:ae},helpText:{table:{disable:!0}},hideLegend:{table:{disable:!0}},legend:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},selectedValue:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},options:[...Da],control:"inline-radio"},disabled:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},required:{table:{disable:!0}},onChange:{table:{disable:!0}},onBlur:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}}},c=e=>{const[,a]=to();return d.jsx(h,{...e,onChange:t=>{e.selectedValue?a({selectedValue:t.target.value}):e.defaultValue&&a({defaultValue:t.target.value})}})},S="annet",v="Type virksomhet",i={legend:v,children:[d.jsx(h.Radio,{value:"foretak",children:"Enkeltpersonsforetak"},"radioGroupRadio_1"),d.jsx(h.Radio,{value:"selskap",children:"Aksjeselskap"},"radioGroupRadio_2"),d.jsx(h.Radio,{value:"annet",children:"Annet"},"radioGroupRadio_3")]},x={render:c,name:"With Ref (FA1)",args:{...i,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=u(e).getByRole("group");await l(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},E={render:c,name:"With Attributes (FA2-5)",args:{...i,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=u(e).getByRole("group");await l(t).toHaveClass("dummyClassname"),await l(t).toHaveAttribute("id","htmlId"),await l(t).toHaveAttribute("lang","nb"),await l(t).toHaveAttribute("data-testid","123ID"),await l(t).toHaveAttribute("form","123form")}},R={render:c,name:"Defaults Variant Standard (A1, B1)",args:{...i},argTypes:{children:{table:{disable:!1}},legend:{table:{disable:!1}},variant:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=u(e),t=a.getByRole("group"),n=a.getAllByText(v)[0],o=a.getAllByRole("radio");await l(t).toBeInTheDocument(),await l(t.tagName).toBe("FIELDSET"),await l(n).toBeInTheDocument(),await l(n.tagName).toBe("LEGEND"),o.forEach(r=>{l(r).toHaveAttribute("name")})}},q={render:c,name:"Variant Horizontal (A6)",args:{...i,variant:"horizontal"},argTypes:{variant:{table:{disable:!1}}}},k={render:c,name:"With HideLegend (B1)",args:{...i,hideLegend:!0},argTypes:{hideLegend:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=u(e).getAllByText(v)[0];await l(t).toBeInTheDocument()}},H={render:c,name:"With SelectedValue (A3)",args:{...i,selectedValue:S,defaultValue:void 0},argTypes:{selectedValue:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=u(e).getByRole("radio",{checked:!0});await l(t).toHaveAttribute("value",S)}},D={render:c,name:"With DefaultValue (A3)",args:{...i,selectedValue:void 0,defaultValue:S},argTypes:{defaultValue:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=u(e).getByRole("radio",{checked:!0});await l(t).toHaveAttribute("value",S)}},W={render:c,name:"With Disabled (A4 delvis)",args:{...i,disabled:!0,selectedValue:S,defaultValue:void 0},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{u(e).getAllByRole("radio").forEach(n=>{l(n).toBeDisabled()})}},C={render:c,name:"With Required (A7)",args:{...i,required:!0},argTypes:{required:{table:{disable:!1}}},play:async({canvasElement:e})=>{u(e).getAllByRole("radio").forEach(n=>{l(n).toBeRequired()})}},M={render:c,name:"With Required And Mark (A7, A8)",args:{...i,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},V={render:c,name:"With Required And Mark And Legend As Markup (A7, A8)",args:{...i,legend:d.jsxs(d.Fragment,{children:[d.jsx(ha,{as:"h4",level:3,children:v}),d.jsx("span",{children:"Med virksomhet så menes bla bla"})]}),required:!0,showRequiredMark:!0},argTypes:{showRequiredMark:{table:{disable:!1}}}},I={render:c,name:"With Name (B1)",args:{...i,name:"nameFraKonsument"},argTypes:{name:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{u(e).getAllByRole("radio").forEach(n=>{l(n).toHaveAttribute("name","nameFraKonsument")})}},L={render:c,name:"Without ErrorMessage (B4)",args:{...i},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=u(e),t=a.getAllByRole("generic")[6];await l(t).toBeInTheDocument(),await l(a.queryByText("Feilmelding")).not.toBeInTheDocument(),a.getAllByRole("radio").forEach(o=>{l(o).not.toHaveAttribute("aria-invalid","true"),l(o).not.toHaveAttribute("aria-describedby")})},parameters:{imageSnapshot:{disable:!0}}},F={render:c,name:"With ErrorMessage (B4, A3)",args:{...i,errorMessage:"Feilmelding",selectedValue:S,defaultValue:void 0},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=u(e),t=a.getAllByRole("radio"),n=a.getByText("Feilmelding"),o=a.getAllByRole("generic")[6];await l(n).toBeInTheDocument(),await l(o).toBeInTheDocument(),t.forEach(r=>{l(r).toHaveAttribute("aria-invalid","true"),l(r).toHaveAttribute("aria-describedby",o.id)})}},P={render:c,name:"With ErrorMessage And AriaDescribedby (B4)",args:{...i,children:[d.jsx(h.Radio,{ariaDescribedby:"konsumentId",children:"Enkeltpersonsforetak"},"radioGroupRadio_1")],errorMessage:"Feilmelding"},argTypes:{},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=u(e),t=a.getAllByRole("generic")[4],n=a.getByRole("radio");l(n).toHaveAttribute("aria-describedby",`konsumentId ${t.id}`)}},j={render:c,name:"With HelpText (A1)",args:{...i,helpText:"Vi trenger å vite din type virksomhet."},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=u(e).getByRole("button",{description:v});await l(t).toBeInTheDocument(),await A.click(t)}},N={name:"With Description (A1)",args:{...i,description:"Vi trenger å vite din type virksomhet."},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=u(e).getByText("Vi trenger å vite din type virksomhet.");await l(t).toBeInTheDocument()}},ao=e=>{const[a,t]=gt.useState("Aksjeselskap");return d.jsx(h,{...e,onChange:n=>{t("Radio har blitt klikket på"),e.onChange&&e.onChange(n)},children:d.jsx(h.Radio,{value:"selskap",children:a})})},no=e=>{const[a,t]=gt.useState(""),n=document.querySelector("radiogroup-customelement"),o=n==null?void 0:n.shadowRoot;return d.jsxs(h,{...e,legend:"Voksen eller barn",shadowRootNode:o??void 0,onChange:r=>{e.onChange&&e.onChange(r)},onBlur:r=>{t("Radiogruppe har mistet fokus (onBlur)"),e.onBlur&&e.onBlur(r)},children:[d.jsx(h.Radio,{value:"voksen",children:"Voksen"}),d.jsx(h.Radio,{value:"barn",children:"Barn"}),d.jsxs("label",{children:["FeltForFokus",d.jsx("input",{type:"text",value:"Annen input som skal få fokus",onChange:U()})]}),d.jsx("div",{children:a})]})},O={render:ao,name:"With EventHandlers",args:{...i,onChange:U()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:a})=>{const n=u(a).getByRole("radio");await l(n).toBeInTheDocument(),await l(n).not.toBeChecked(),await A.click(n),await l(n).toBeChecked(),await ft(()=>l(e.onChange).toHaveBeenCalledWith(l.objectContaining({target:l.objectContaining({value:"selskap"})})))}},$={render:no,name:"With onBlur Event",decorators:[Ha],args:{...i,onBlur:U()},parameters:{imageSnapshot:{disable:!0},customElementName:"radiogroup-customelement"},play:async({args:e,canvasElement:a})=>{const t=u(a);await l(t.queryByRole("radio")).not.toBeInTheDocument();const n=a.querySelector("radiogroup-customelement");await l(n).toBeInTheDocument();const o=eo(a),r=await o.findAllByShadowRole("radio"),s=r==null?void 0:r.find(g=>g.value==="voksen");s&&await A.click(s),await l(s).toBeChecked();const m=await o.findByShadowRole("radio",{name:"Barn"});await A.click(m);const y=o.getByShadowLabelText("FeltForFokus",{selector:"input"});await A.click(y),await ft(()=>l(e.onBlur).toHaveBeenCalled())}},G={name:"With onHelpToggle Event",args:{...i,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},_={name:"With Custom ClassNames (FA3)",args:{...i,classNames:{legend:"dummyClassname",errorMessage:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:"feil"},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=u(e),t=e.querySelector("[id^= radioErrorId]>div");await l(t).toHaveClass("dummyClassname"),await l(a.getByText("beskrivelse")).toHaveClass("dummyClassname")}};var se,ie,de;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLFieldSetElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    }
  },
  argTypes: {
    ref: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('group');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(de=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,ce,me;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: Template,
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    form: '123form'
  },
  argTypes: {
    id: {
      table: {
        disable: false
      }
    },
    className: {
      table: {
        disable: false
      }
    },
    lang: {
      table: {
        disable: false
      }
    },
    'data-testid': {
      table: {
        disable: false
      }
    },
    form: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const fieldset = canvas.getByRole('group');
    await expect(fieldset).toHaveClass('dummyClassname');
    await expect(fieldset).toHaveAttribute('id', 'htmlId');
    await expect(fieldset).toHaveAttribute('lang', 'nb');
    await expect(fieldset).toHaveAttribute('data-testid', '123ID');
    await expect(fieldset).toHaveAttribute('form', '123form');
  }
} satisfies Story`,...(me=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ye,he,pe;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: Template,
  name: 'Defaults Variant Standard (A1, B1)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    legend: {
      table: {
        disable: false
      }
    },
    variant: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const fieldset = canvas.getByRole('group');
    const legend = canvas.getAllByText(defaultLegendText)[0];
    const radios = canvas.getAllByRole('radio');
    await expect(fieldset).toBeInTheDocument();
    await expect(fieldset.tagName).toBe('FIELDSET');
    await expect(legend).toBeInTheDocument();
    await expect(legend.tagName).toBe('LEGEND');
    radios.forEach(input => {
      expect(input).toHaveAttribute('name');
    });
  }
} satisfies Story`,...(pe=(he=R.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var ge,fe,we;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: Template,
  name: 'Variant Horizontal (A6)',
  args: {
    ...defaultArgs,
    variant: 'horizontal'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(we=(fe=q.parameters)==null?void 0:fe.docs)==null?void 0:we.source}}};var Be,be,Se;k.parameters={...k.parameters,docs:{...(Be=k.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: Template,
  name: 'With HideLegend (B1)',
  args: {
    ...defaultArgs,
    hideLegend: true
  },
  argTypes: {
    hideLegend: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const legend = canvas.getAllByText(defaultLegendText)[0];
    await expect(legend).toBeInTheDocument();
  }
} satisfies Story`,...(Se=(be=k.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var Te,Ae,ve;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: Template,
  name: 'With SelectedValue (A3)',
  args: {
    ...defaultArgs,
    selectedValue: selectedValue,
    defaultValue: undefined
  },
  argTypes: {
    selectedValue: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('radio', {
      checked: true
    });
    // eslint-disable-next-line jest-dom/prefer-to-have-value
    await expect(input).toHaveAttribute('value', selectedValue);
  }
} satisfies Story`,...(ve=(Ae=H.parameters)==null?void 0:Ae.docs)==null?void 0:ve.source}}};var xe,Ee,Re;D.parameters={...D.parameters,docs:{...(xe=D.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: Template,
  name: 'With DefaultValue (A3)',
  args: {
    ...defaultArgs,
    selectedValue: undefined,
    defaultValue: selectedValue
  },
  argTypes: {
    defaultValue: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('radio', {
      checked: true
    });
    // eslint-disable-next-line jest-dom/prefer-to-have-value
    await expect(input).toHaveAttribute('value', selectedValue);
  }
} satisfies Story`,...(Re=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var qe,ke,He;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: Template,
  name: 'With Disabled (A4 delvis)',
  args: {
    ...defaultArgs,
    disabled: true,
    selectedValue: selectedValue,
    defaultValue: undefined
  },
  argTypes: {
    disabled: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole('radio');
    radios.forEach(input => {
      expect(input).toBeDisabled();
    });
  }
} satisfies Story`,...(He=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:He.source}}};var De,We,Ce;C.parameters={...C.parameters,docs:{...(De=C.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: Template,
  name: 'With Required (A7)',
  args: {
    ...defaultArgs,
    required: true
  },
  argTypes: {
    required: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole('radio');
    radios.forEach(input => {
      expect(input).toBeRequired();
    });
  }
} satisfies Story`,...(Ce=(We=C.parameters)==null?void 0:We.docs)==null?void 0:Ce.source}}};var Me,Ve,Ie;M.parameters={...M.parameters,docs:{...(Me=M.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: Template,
  name: 'With Required And Mark (A7, A8)',
  args: {
    ...defaultArgs,
    required: true,
    showRequiredMark: true
  },
  argTypes: {
    required: {
      table: {
        disable: false
      }
    },
    showRequiredMark: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(Ie=(Ve=M.parameters)==null?void 0:Ve.docs)==null?void 0:Ie.source}}};var Le,Fe,Pe;V.parameters={...V.parameters,docs:{...(Le=V.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: Template,
  name: 'With Required And Mark And Legend As Markup (A7, A8)',
  args: {
    ...defaultArgs,
    legend: <>
        <Heading as={'h4'} level={3}>
          {defaultLegendText}
        </Heading>
        <span>{'Med virksomhet så menes bla bla'}</span>
      </>,
    required: true,
    showRequiredMark: true
  },
  argTypes: {
    showRequiredMark: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(Pe=(Fe=V.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var je,Ne,Oe;I.parameters={...I.parameters,docs:{...(je=I.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: Template,
  name: 'With Name (B1)',
  args: {
    ...defaultArgs,
    name: 'nameFraKonsument'
  },
  argTypes: {
    name: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole('radio');
    radios.forEach(input => {
      expect(input).toHaveAttribute('name', 'nameFraKonsument');
    });
  }
} satisfies Story`,...(Oe=(Ne=I.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var $e,Ge,_e;L.parameters={...L.parameters,docs:{...($e=L.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: Template,
  name: 'Without ErrorMessage (B4)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    errorMessage: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const errorMessageContainer = canvas.getAllByRole('generic')[6];
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(canvas.queryByText('Feilmelding')).not.toBeInTheDocument();
    const radios = canvas.getAllByRole('radio');
    radios.forEach(radio => {
      expect(radio).not.toHaveAttribute('aria-invalid', 'true');
      expect(radio).not.toHaveAttribute('aria-describedby');
    });
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...(_e=(Ge=L.parameters)==null?void 0:Ge.docs)==null?void 0:_e.source}}};var Ue,ze,Ke;F.parameters={...F.parameters,docs:{...(Ue=F.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: Template,
  name: 'With ErrorMessage (B4, A3)',
  args: {
    ...defaultArgs,
    errorMessage: 'Feilmelding',
    selectedValue: selectedValue,
    defaultValue: undefined
  },
  argTypes: {
    errorMessage: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole('radio');
    const errorMessage = canvas.getByText('Feilmelding');
    const errorMessageContainer = canvas.getAllByRole('generic')[6];
    await expect(errorMessage).toBeInTheDocument();
    await expect(errorMessageContainer).toBeInTheDocument();
    radios.forEach(radio => {
      expect(radio).toHaveAttribute('aria-invalid', 'true');
      expect(radio).toHaveAttribute('aria-describedby', errorMessageContainer.id);
    });
  }
} satisfies Story`,...(Ke=(ze=F.parameters)==null?void 0:ze.docs)==null?void 0:Ke.source}}};var Je,Ye,Qe;P.parameters={...P.parameters,docs:{...(Je=P.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: Template,
  name: 'With ErrorMessage And AriaDescribedby (B4)',
  args: {
    ...defaultArgs,
    children: [<RadioGroup.Radio key={'radioGroupRadio_1'} ariaDescribedby={'konsumentId'}>
        {'Enkeltpersonsforetak'}
      </RadioGroup.Radio>],
    errorMessage: 'Feilmelding'
  },
  argTypes: {},
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const errorMessageContainer = canvas.getAllByRole('generic')[4];
    const radio = canvas.getByRole('radio');
    expect(radio).toHaveAttribute('aria-describedby', \`konsumentId \${errorMessageContainer.id}\`);
  }
} satisfies Story`,...(Qe=(Ye=P.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;j.parameters={...j.parameters,docs:{...(Xe=j.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: Template,
  name: 'With HelpText (A1)',
  args: {
    ...defaultArgs,
    helpText: 'Vi trenger å vite din type virksomhet.'
  },
  argTypes: {
    helpText: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button', {
      description: defaultLegendText
    });
    await expect(helpButton).toBeInTheDocument();
    await userEvent.click(helpButton);
  }
} satisfies Story`,...(et=(Ze=j.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;N.parameters={...N.parameters,docs:{...(tt=N.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  name: 'With Description (A1)',
  args: {
    ...defaultArgs,
    description: 'Vi trenger å vite din type virksomhet.'
  },
  argTypes: {
    description: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const description = canvas.getByText('Vi trenger å vite din type virksomhet.');
    await expect(description).toBeInTheDocument();
  }
} satisfies Story`,...(nt=(at=N.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var ot,lt,rt;O.parameters={...O.parameters,docs:{...(ot=O.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers',
  args: {
    ...defaultArgs,
    onChange: fn()
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole('radio');
    await expect(radio).toBeInTheDocument();
    await expect(radio).not.toBeChecked();
    await userEvent.click(radio);
    await expect(radio).toBeChecked();
    await waitFor(() => expect(args.onChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({
        value: 'selskap'
      })
    })));
  }
} satisfies Story`,...(rt=(lt=O.parameters)==null?void 0:lt.docs)==null?void 0:rt.source}}};var st,it,dt;$.parameters={...$.parameters,docs:{...(st=$.parameters)==null?void 0:st.docs,source:{originalSource:`{
  render: OnBlurHandlerTemplate,
  name: 'With onBlur Event',
  decorators: [webComponent],
  args: {
    ...defaultArgs,
    onBlur: fn()
  },
  parameters: {
    imageSnapshot: {
      disable: true
    },
    customElementName: 'radiogroup-customelement'
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('radio')).not.toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    const customElement = canvasElement.querySelector('radiogroup-customelement') as HTMLElement;
    await expect(customElement).toBeInTheDocument();
    const shadowCanvas = shadowWithin(canvasElement);
    const radioGroup = await shadowCanvas.findAllByShadowRole<HTMLInputElement>('radio');
    const radio = radioGroup?.find(radio => radio.value === 'voksen');
    if (radio) {
      await userEvent.click(radio);
    }
    await expect(radio).toBeChecked();
    const shadowRadio = await shadowCanvas.findByShadowRole('radio', {
      name: 'Barn'
    });
    await userEvent.click(shadowRadio);
    const input = shadowCanvas.getByShadowLabelText('FeltForFokus', {
      selector: 'input'
    });
    await userEvent.click(input);
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
  }
} satisfies Story`,...(dt=(it=$.parameters)==null?void 0:it.docs)==null?void 0:dt.source}}};var ut,ct,mt;G.parameters={...G.parameters,docs:{...(ut=G.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  name: 'With onHelpToggle Event',
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst',
    onHelpToggle: (isOpen: boolean): void => {
      alert(isOpen ? 'Hjelpetekst blir vist' : 'Hjelpetekst skjules');
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...(mt=(ct=G.parameters)==null?void 0:ct.docs)==null?void 0:mt.source}}};var yt,ht,pt;_.parameters={..._.parameters,docs:{...(yt=_.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      legend: 'dummyClassname',
      errorMessage: 'dummyClassname',
      description: 'dummyClassname',
      helpText: 'dummyClassname'
    },
    description: 'beskrivelse',
    helpText: 'HJEEEEEEELP',
    errorMessage: 'feil'
  },
  argTypes: {
    classNames: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    // eslint-disable-next-line testing-library/no-node-access
    const errorMessageContainer = canvasElement.querySelector('[id^= radioErrorId]>div');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
    await expect(canvas.getByText('beskrivelse')).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(pt=(ht=_.parameters)==null?void 0:ht.docs)==null?void 0:pt.source}}};const Ro=["WithRef","WithAttributes","Defaults","VariantHorizontal","WithHideLegend","WithSelectedValue","WithDefaultValue","WithDisabled","WithRequired","WithRequiredAndMark","WithRequiredAndMarkAndLegendAsMarkup","WithName","WithoutErrorMessage","WithErrorMessage","WithErrorMessageAndAriaDescribedby","WithHelpText","WithDescription","WithEventHandlers","WithOnBlurEvent","WithHelpToggleEvent","WithCustomClassNames"];export{R as Defaults,q as VariantHorizontal,E as WithAttributes,_ as WithCustomClassNames,D as WithDefaultValue,N as WithDescription,W as WithDisabled,F as WithErrorMessage,P as WithErrorMessageAndAriaDescribedby,O as WithEventHandlers,j as WithHelpText,G as WithHelpToggleEvent,k as WithHideLegend,I as WithName,$ as WithOnBlurEvent,x as WithRef,C as WithRequired,M as WithRequiredAndMark,V as WithRequiredAndMarkAndLegendAsMarkup,H as WithSelectedValue,L as WithoutErrorMessage,Ro as __namedExportsOrder,Eo as default};
//# sourceMappingURL=RadioGroup.test.stories-By1LOF74.js.map
