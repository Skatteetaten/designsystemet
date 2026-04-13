import{c as we,j as i,r as ae}from"./iframe-_BeEUj9n.js";import{g as ve,q as Se,b as f,s as Be,c as Ae,a as Te,d as xe,e as Re,f as Ee,h as ke,i as qe,j as De,k as He,l as te,p as We}from"./dom.esm-BoHKmWYb.js";import{R as m}from"./index-jV6wSCam.js";import{A as Ce}from"./index-BUfGp1h_.js";import{H as Me}from"./index-CUk3vgdJ.js";import{w as Ie}from"./webcomponent-decorator-DFeccF90.js";import{S as X}from"./icon.systems-C7aKoqez.js";var Ve=Object.defineProperty,Le=(e,t)=>{for(var a in t)Ve(e,a,{get:t[a],enumerable:!0})},ne={};Le(ne,{findAllByShadowAltText:()=>nt,findAllByShadowDisplayValue:()=>_a,findAllByShadowLabelText:()=>da,findAllByShadowPlaceholderText:()=>Sa,findAllByShadowRole:()=>Xe,findAllByShadowTestId:()=>Et,findAllByShadowText:()=>Ca,findAllByShadowTitle:()=>yt,findByShadowAltText:()=>rt,findByShadowDisplayValue:()=>Ua,findByShadowLabelText:()=>ca,findByShadowPlaceholderText:()=>Ba,findByShadowRole:()=>Qe,findByShadowTestId:()=>kt,findByShadowText:()=>Ma,findByShadowTitle:()=>gt,getAllByShadowAltText:()=>at,getAllByShadowDisplayValue:()=>Ga,getAllByShadowLabelText:()=>la,getAllByShadowPlaceholderText:()=>wa,getAllByShadowRole:()=>Je,getAllByShadowTestId:()=>xt,getAllByShadowText:()=>Ha,getAllByShadowTitle:()=>mt,getByShadowAltText:()=>tt,getByShadowDisplayValue:()=>$a,getByShadowLabelText:()=>ia,getByShadowPlaceholderText:()=>va,getByShadowRole:()=>Ye,getByShadowTestId:()=>Rt,getByShadowText:()=>Wa,getByShadowTitle:()=>ht,queryAllByShadowAltText:()=>ce,queryAllByShadowDisplayValue:()=>de,queryAllByShadowLabelText:()=>oe,queryAllByShadowPlaceholderText:()=>le,queryAllByShadowRole:()=>se,queryAllByShadowTestId:()=>pe,queryAllByShadowText:()=>ie,queryAllByShadowTitle:()=>ue,queryByShadowAltText:()=>et,queryByShadowDisplayValue:()=>Na,queryByShadowLabelText:()=>oa,queryByShadowPlaceholderText:()=>ba,queryByShadowRole:()=>Ke,queryByShadowTestId:()=>Tt,queryByShadowText:()=>Da,queryByShadowTitle:()=>pt});Fe();function je(){Pe()}function Q(){HTMLSlotElement.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll}function g(e){je();try{let t=e();return typeof t=="object"&&"finally"in t&&typeof t.finally=="function"&&t.finally(()=>Q()),t}finally{Q()}}function Fe(){if(typeof ShadowRoot>"u")throw"Your environment does not support shadow roots.";ShadowRoot.prototype.matches==null&&Object.defineProperties(ShadowRoot.prototype,{matches:{get(){return function(e){return e.trim()==="*"?!0:!!this.querySelector(e)}}}}),ShadowRoot.prototype.outerHTML==null&&Object.defineProperties(ShadowRoot.prototype,{outerHTML:{get(){return this.innerHTML}}})}function Pe(){HTMLSlotElement.prototype.querySelectorAll=function(e){let t=HTMLElement.prototype.querySelectorAll,a=[];return this.assignedElements({flatten:!0}).forEach(n=>{let r=n,o=document.createElement("div");o.appendChild(r.cloneNode(!1)),o.querySelector(e)&&a.push(r),a=a.concat(Array.from(r.querySelectorAll(e)))}),a.length==0&&(a=Array.from(t.call(this,e))),[...new Set(a)]}}function b(e,t={shallow:!1}){return re(e,"*",t)}function re(e,t,a={shallow:!1},n=[],r=[]){return e instanceof Document&&(e=document.documentElement),n=[e],r.push(e),e instanceof HTMLElement&&e.shadowRoot!=null&&e.shadowRoot.mode!=="closed"&&(r.push(e.shadowRoot),n.push(e.shadowRoot)),n.forEach(o=>{o.querySelectorAll(t).forEach(l=>{if(l.shadowRoot==null||l.shadowRoot.mode==="closed"){r.push(l);return}if(r.push(l.shadowRoot),a.shallow===!0){l.shadowRoot.querySelectorAll(t).forEach(p=>{r.push(p)});return}l.shadowRoot.querySelectorAll(t).forEach(p=>{r.push(p),n.push(p)}),re(l.shadowRoot,t,a,n,r)})}),[...new Set(r)]}function w(e){return e.map(t=>(...a)=>{let[n,r,o,...l]=a;return o==null&&(o={}),o.suggest=!1,t(n,r,o,...l)})}function se(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(r=>Te(r,a,n)).flat(1/0)))]}var Oe=(e,t)=>`Found multiple elements with the role of: ${t}`,Ne=(e,t)=>`Unable to find an element with the role of: ${t}`,[Ge,$e,_e,Ue,ze]=w(f(se,Oe,Ne)),Ke=(...e)=>Ge(...e),Je=(...e)=>$e(...e),Ye=(...e)=>_e(...e),Xe=(...e)=>Ue(...e),Qe=(...e)=>ze(...e);function oe(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(r=>xe(r,a,n)).flat(1/0)))]}var Ze=(e,t)=>`Found multiple elements with the label text of: ${t}`,ea=(e,t)=>`Unable to find an element with the label text of: ${t}`,[aa,ta,na,ra,sa]=w(f(oe,Ze,ea)),oa=(...e)=>aa(...e),la=(...e)=>ta(...e),ia=(...e)=>na(...e),da=(...e)=>ra(...e),ca=(...e)=>sa(...e);function le(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(r=>Re(r,a,n)).flat(1/0)))]}var ua=(e,t)=>`Found multiple elements with the placeholder text of: ${t}`,pa=(e,t)=>`Unable to find an element with the placeholder text of: ${t}`,[ma,ha,ya,ga,fa]=w(f(le,ua,pa)),ba=(...e)=>ma(...e),wa=(...e)=>ha(...e),va=(...e)=>ya(...e),Sa=(...e)=>ga(...e),Ba=(...e)=>fa(...e);function ie(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(r=>Ee(r,a,n)).flat(1/0)))]}var Aa=(e,t)=>`Found multiple elements with the text of: ${t}`,Ta=(e,t)=>`Unable to find an element with the text of: ${t}`,[xa,Ra,Ea,ka,qa]=w(f(ie,Aa,Ta)),Da=(...e)=>xa(...e),Ha=(...e)=>Ra(...e),Wa=(...e)=>Ea(...e),Ca=(...e)=>ka(...e),Ma=(...e)=>qa(...e);function de(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(r=>ke(r,a,n)).flat(1/0)))]}var Ia=(e,t)=>`Found multiple elements with the display value of: ${t}`,Va=(e,t)=>`Unable to find an element with the display value of: ${t}`,[La,ja,Fa,Pa,Oa]=w(f(de,Ia,Va)),Na=(...e)=>La(...e),Ga=(...e)=>ja(...e),$a=(...e)=>Fa(...e),_a=(...e)=>Pa(...e),Ua=(...e)=>Oa(...e);function ce(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(r=>qe(r,a,n)).flat(1/0)))]}var za=(e,t)=>`Found multiple elements with the alt text of: ${t}`,Ka=(e,t)=>`Unable to find an element with the alt text of: ${t}`,[Ja,Ya,Xa,Qa,Za]=w(f(ce,za,Ka)),et=(...e)=>Ja(...e),at=(...e)=>Ya(...e),tt=(...e)=>Xa(...e),nt=(...e)=>Qa(...e),rt=(...e)=>Za(...e);function ue(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(r=>De(r,a,n)).flat(1/0)))]}var st=(e,t)=>`Found multiple elements with the title of: ${t}`,ot=(e,t)=>`Unable to find an element with the title of: ${t}`,[lt,it,dt,ct,ut]=w(f(ue,st,ot)),pt=(...e)=>lt(...e),mt=(...e)=>it(...e),ht=(...e)=>dt(...e),yt=(...e)=>ct(...e),gt=(...e)=>ut(...e);function pe(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(r=>He(r,a,n)).flat(1/0)))]}var ft=(e,t)=>`Found multiple elements with the test id of: ${t}`,bt=(e,t)=>`Unable to find an element with the test id of: ${t}`,[wt,vt,St,Bt,At]=w(f(pe,ft,bt)),Tt=(...e)=>wt(...e),xt=(...e)=>vt(...e),Rt=(...e)=>St(...e),Et=(...e)=>Bt(...e),kt=(...e)=>At(...e),Z=/([^\S(\r\n|\r|\n)]*[\f\n\r\t\v]+)/.source;function qt(e){return e.replace(new RegExp(`${Z}.*${Z}{2,}`,"g"),"")}function Dt(...e){let[t,a,n]=e,r=Nt(n?.filterNode||Ht);return n==null&&(n={}),n.plugins==null&&(n.plugins=[]),n.plugins.push(r),g(()=>We(t,a,{...n,plugins:[r]}))}function me(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ht(e){return e.nodeType!==J&&(e.nodeType!==ye||!e.matches(te().defaultIgnore))}var Wt=(e,t,a,n,r,o,l)=>{let p=n+a.indent,h=a.colors;return e.map(y=>{let B=t[y],S=l(B,a,p,r,o);return typeof B!="string"&&(S.indexOf(`
`)!==-1&&(S=a.spacingOuter+p+S+a.spacingOuter+n),S="{"+S+"}"),a.spacingInner+n+h.prop.open+y+h.prop.close+"="+h.value.open+S+h.value.close}).join("")},Ct=3,Mt=(e,t,a,n,r,o)=>qt(e.map(l=>{let p=typeof l=="string"?he(l,t):o(l,t,a,n,r);return p===""&&typeof l=="object"&&l!=null&&l.nodeType!==Ct?"":t.spacingOuter+a+p}).join("")),he=(e,t)=>{let a=t.colors.content;return a.open+me(e)+a.close},It=(e,t)=>{let a=t.colors.comment;return a.open+"<!--"+me(e)+"-->"+a.close},Vt=(e,t,a,n,r)=>{let o=n.colors.tag;return o.open+"<"+e+(t&&o.close+t+n.spacingOuter+r+o.open)+(a?">"+o.close+a+n.spacingOuter+r+o.open+"</"+e:(t&&!n.min?"":" ")+"/")+">"+o.close},Lt=(e,t)=>{let a=t.colors.tag;return a.open+"<"+e+a.close+" …"+a.open+" />"+a.close},ye=1,ge=3,J=8,fe=11,jt=/^((HTML|SVG)\w*)?Element$/,Ft=e=>{var t;let a=((t=e?.constructor)==null?void 0:t.name)||"",{nodeType:n,tagName:r}=e,o=typeof r=="string"&&r.includes("-")||typeof e.hasAttribute=="function"&&e.hasAttribute("is")||e instanceof HTMLElement;return n===ye&&(jt.test(a)||o)||n===ge&&a==="Text"||n===J&&a==="Comment"||n===fe};function Pt(e){return e.nodeType===ge}function Ot(e){return e.nodeType===J}function ee(e){return e.nodeType===fe}function Nt(e){function t(a){let n=Array.prototype.slice.call(a.childNodes||a.children);return"shadowRoot"in a&&a.shadowRoot!=null&&a.shadowRoot.mode!=="closed"&&n.unshift(a.shadowRoot),n.filter(e)}return{test:a=>a?.constructor&&Ft(a),serialize:(a,n,r,o,l,p)=>{if(Pt(a))return he(a.data,n);if(Ot(a))return It(a.data,n);let h="DocumentFragment";return"tagName"in a&&a.tagName?h=a.tagName.toLowerCase():a instanceof ShadowRoot&&(h="ShadowRoot"),++o>n.maxDepth?Lt(h,n):Vt(h,Wt(ee(a)?[]:Array.from(a.attributes).map(y=>y.name).sort(),ee(a)?{}:Array.from(a.attributes).reduce((y,B)=>(y[B.name]=B.value,y),{}),n,r+n.indent,o,l,p),Mt(t(a),n,r+n.indent,o,l,p),n,r)}}}({...Be});var Gt={...Se,...ne};function $t(e){let t=ve(e,Gt);return{...t,queryAllByShadowRole:(...a)=>t.queryAllByShadowRole(...a),queryByShadowRole:(...a)=>t.queryByShadowRole(...a),getAllByShadowRole:(...a)=>t.getAllByShadowRole(...a),getByShadowRole:(...a)=>t.getByShadowRole(...a),findAllByShadowRole:(...a)=>t.findAllByShadowRole(...a),findByShadowRole:(...a)=>t.findByShadowRole(...a),queryAllByShadowLabelText:(...a)=>t.queryAllByShadowLabelText(...a),queryByShadowLabelText:(...a)=>t.queryByShadowLabelText(...a),getAllByShadowLabelText:(...a)=>t.getAllByShadowLabelText(...a),getByShadowLabelText:(...a)=>t.getByShadowLabelText(...a),findAllByShadowLabelText:(...a)=>t.findAllByShadowLabelText(...a),findByShadowLabelText:(...a)=>t.findByShadowLabelText(...a),queryAllByShadowPlaceholderText:(...a)=>t.queryAllByShadowPlaceholderText(...a),queryByShadowPlaceholderText:(...a)=>t.queryByShadowPlaceholderText(...a),getAllByShadowPlaceholderText:(...a)=>t.getAllByShadowPlaceholderText(...a),getByShadowPlaceholderText:(...a)=>t.getByShadowPlaceholderText(...a),findAllByShadowPlaceholderText:(...a)=>t.findAllByShadowPlaceholderText(...a),findByShadowPlaceholderText:(...a)=>t.findByShadowPlaceholderText(...a),queryAllByShadowText:(...a)=>t.queryAllByShadowText(...a),queryByShadowText:(...a)=>t.queryByShadowText(...a),getAllByShadowText:(...a)=>t.getAllByShadowText(...a),getByShadowText:(...a)=>t.getByShadowText(...a),findAllByShadowText:(...a)=>t.findAllByShadowText(...a),findByShadowText:(...a)=>t.findByShadowText(...a),queryAllByShadowDisplayValue:(...a)=>t.queryAllByShadowDisplayValue(...a),queryByShadowDisplayValue:(...a)=>t.queryByShadowDisplayValue(...a),getAllByShadowDisplayValue:(...a)=>t.getAllByShadowDisplayValue(...a),getByShadowDisplayValue:(...a)=>t.getByShadowDisplayValue(...a),findAllByShadowDisplayValue:(...a)=>t.findAllByShadowDisplayValue(...a),findByShadowDisplayValue:(...a)=>t.findByShadowDisplayValue(...a),queryAllByShadowAltText:(...a)=>t.queryAllByShadowAltText(...a),queryByShadowAltText:(...a)=>t.queryByShadowAltText(...a),getAllByShadowAltText:(...a)=>t.getAllByShadowAltText(...a),getByShadowAltText:(...a)=>t.getByShadowAltText(...a),findAllByShadowAltText:(...a)=>t.findAllByShadowAltText(...a),findByShadowAltText:(...a)=>t.findByShadowAltText(...a),queryAllByShadowTitle:(...a)=>t.queryAllByShadowTitle(...a),queryByShadowTitle:(...a)=>t.queryByShadowTitle(...a),getAllByShadowTitle:(...a)=>t.getAllByShadowTitle(...a),getByShadowTitle:(...a)=>t.getByShadowTitle(...a),findAllByShadowTitle:(...a)=>t.findAllByShadowTitle(...a),findByShadowTitle:(...a)=>t.findByShadowTitle(...a),queryAllByShadowTestId:(...a)=>t.queryAllByShadowTestId(...a),queryByShadowTestId:(...a)=>t.queryByShadowTestId(...a),getAllByShadowTestId:(...a)=>t.getAllByShadowTestId(...a),getByShadowTestId:(...a)=>t.getByShadowTestId(...a),findAllByShadowTestId:(...a)=>t.findAllByShadowTestId(...a),findByShadowTestId:(...a)=>t.findByShadowTestId(...a)}}Ae({getElementError(e,t){let a=Dt(t),n=new Error([e,`Ignored nodes: comments, ${te().defaultIgnore}
${a}`].filter(Boolean).join(`

`));return n.name="ShadowDOMTestingLibraryElementError",n}});const{useArgs:_t}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:s,fn:Y,userEvent:z,waitFor:be,within:c}=__STORYBOOK_MODULE_TEST__,Ut={component:m,title:"Tester/RadioGroup",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{category:we.props}},children:{table:{disable:!0}},defaultValue:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(X),mapping:X},helpText:{table:{disable:!0}},hideLegend:{table:{disable:!0}},legend:{table:{disable:!0}},readOnly:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},selectedValue:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"},disabled:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},required:{table:{disable:!0}},ariaDescribedBy:{table:{disable:!0}},onChange:{table:{disable:!0}},onBlur:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1},htmlValidate:{test:"off"}}},u=e=>{const[,t]=_t();return i.jsx(m,{...e,onChange:a=>{e.selectedValue?t({selectedValue:a.target.value}):e.defaultValue&&t({defaultValue:a.target.value})}})},v="annet",K="Type virksomhet",d={legend:K,children:[i.jsx(m.Radio,{value:"foretak",children:"Enkeltpersonsforetak"},"radioGroupRadio_1"),i.jsx(m.Radio,{value:"selskap",children:"Aksjeselskap"},"radioGroupRadio_2"),i.jsx(m.Radio,{value:"annet",children:"Annet"},"radioGroupRadio_3")]},A={render:u,name:"With Ref (FA1)",args:{...d,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=c(e).getByRole("group");await s(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},T={render:u,name:"With Attributes (FA2-5)",args:{...d,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=c(e).getByRole("group");await s(a).toHaveClass("dummyClassname"),await s(a).toHaveAttribute("id","htmlId"),await s(a).toHaveAttribute("lang","nb"),await s(a).toHaveAttribute("data-testid","123ID"),await s(a).toHaveAttribute("form","123form")}},x={render:u,name:"Defaults Variant Standard (A1, B1)",args:{...d},argTypes:{children:{table:{disable:!1}},legend:{table:{disable:!1}},variant:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=c(e),a=t.getByRole("group"),n=t.getAllByText(K)[0],r=t.getAllByRole("radio");await s(a).toBeInTheDocument(),await s(a.tagName).toBe("FIELDSET"),await s(n).toBeInTheDocument(),await s(n.tagName).toBe("LEGEND"),r.forEach(o=>{s(o).toHaveAttribute("name"),s(o).not.toHaveAttribute("aria-invalid")})}},R={name:"With AriaDescribedBy",render:e=>{const t="radiogroup-alert-description-id";return i.jsxs(i.Fragment,{children:[i.jsx(m,{...e,ariaDescribedBy:t,hasSpacing:!0}),i.jsx(Ce,{id:t,variant:"warning",showAlert:!0,children:"Dette er en varselmelding for radiogroup"})]})},args:{...d},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=c(e),a=t.getByRole("group");await s(a).toHaveAttribute("aria-describedby");const n=t.getByText("Dette er en varselmelding for radiogroup");await s(n).toBeInTheDocument();const o=(a.getAttribute("aria-describedby")||"").split(" ").filter(Boolean);await s(o).toContain("radiogroup-alert-description-id")}},E={render:u,name:"Variant Horizontal (A6)",args:{...d,variant:"horizontal"},argTypes:{variant:{table:{disable:!1}}}},k={render:u,name:"With HideLegend (B1)",args:{...d,hideLegend:!0},argTypes:{hideLegend:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getAllByText(K)[0];await s(a).toBeInTheDocument()}},q={render:u,name:"With SelectedValue (A3)",args:{...d,selectedValue:v,defaultValue:void 0},argTypes:{selectedValue:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=c(e).getByRole("radio",{checked:!0});await s(a).toHaveAttribute("value",v)}},D={render:u,name:"With DefaultValue (A3)",args:{...d,selectedValue:void 0,defaultValue:v},argTypes:{defaultValue:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("radio",{checked:!0});await s(a).toHaveAttribute("value",v)}},H={render:u,name:"With Disabled (A4 delvis)",args:{...d,disabled:!0,selectedValue:v,defaultValue:void 0,helpText:"Hjelpeknappen skal også være disabled"},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const t=c(e);t.getAllByRole("radio").forEach(r=>{s(r).toBeDisabled()});const n=t.getByRole("button");await s(n).toBeDisabled()}},W={render:u,name:"With Required (A7)",args:{...d,required:!0},argTypes:{required:{table:{disable:!1}}},play:async({canvasElement:e})=>{c(e).getAllByRole("radio").forEach(n=>{s(n).toBeRequired(),s(n).toHaveAttribute("aria-invalid","false")})}},C={render:u,name:"With Required And Mark (A7, A8)",args:{...d,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},M={render:u,name:"With Required And Mark And Legend As Markup (A7, A8)",args:{...d,legend:i.jsxs(i.Fragment,{children:[i.jsx(Me,{as:"h4",level:3,children:K}),i.jsx("span",{children:"Med virksomhet så menes bla bla"})]}),required:!0,showRequiredMark:!0},argTypes:{showRequiredMark:{table:{disable:!1}}}},I={render:u,name:"With Name (B1)",args:{...d,name:"nameFraKonsument"},argTypes:{name:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{c(e).getAllByRole("radio").forEach(n=>{s(n).toHaveAttribute("name","nameFraKonsument")})}},V={render:u,name:"Without ErrorMessage (B4)",args:{...d},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=c(e),a=t.getAllByRole("generic")[6];await s(a).toBeInTheDocument(),await s(t.queryByText("Feilmelding")).not.toBeInTheDocument(),t.getAllByRole("radio").forEach(r=>{s(r).not.toHaveAttribute("aria-invalid","true"),s(r).not.toHaveAttribute("aria-describedby")})},parameters:{imageSnapshot:{disableSnapshot:!0}}},L={render:u,name:"With ErrorMessage (B4, A3)",args:{...d,errorMessage:"Feilmelding",selectedValue:v,defaultValue:void 0},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const t=c(e),a=t.getAllByRole("radio"),n=t.getByText("Feilmelding"),r=t.getAllByRole("generic")[6];await s(n).toBeInTheDocument(),await s(r).toBeInTheDocument(),a.forEach(o=>{s(o).toHaveAttribute("aria-invalid","true"),s(o).toHaveAttribute("aria-describedby",r.id)})}},j={render:u,name:"With ErrorMessage And AriaDescribedby (B4)",args:{...d,children:[i.jsx(m.Radio,{ariaDescribedby:"konsumentId",children:"Enkeltpersonsforetak"},"radioGroupRadio_1")],errorMessage:"Feilmelding"},argTypes:{},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=c(e),a=t.getAllByRole("generic")[4],n=t.getByRole("radio");s(n).toHaveAttribute("aria-describedby",`konsumentId ${a.id}`)}},F={render:u,name:"With HelpText (A1)",args:{...d,helpText:"Vi trenger å vite din type virksomhet."},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await s(a).toBeInTheDocument(),await z.click(a)}},P={name:"With Description (A1)",args:{...d,description:"Vi trenger å vite din type virksomhet."},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByText("Vi trenger å vite din type virksomhet.",{selector:":not([aria-hidden='true'])"});await s(a).toBeInTheDocument()}},zt=e=>{const[t,a]=ae.useState("Aksjeselskap");return i.jsx(m,{...e,onChange:n=>{a("Radio har blitt klikket på"),e.onChange&&e.onChange(n)},children:i.jsx(m.Radio,{value:"selskap",children:t})})},Kt=e=>{const[t,a]=ae.useState(""),r=document.querySelector("radiogroup-customelement")?.shadowRoot;return i.jsxs(m,{...e,legend:"Voksen eller barn",shadowRootNode:r??void 0,onChange:o=>{e.onChange&&e.onChange(o)},onBlur:o=>{a("Radiogruppe har mistet fokus (onBlur)"),e.onBlur&&e.onBlur(o)},children:[i.jsx(m.Radio,{value:"voksen",children:"Voksen"}),i.jsx(m.Radio,{value:"barn",children:"Barn"}),i.jsxs("label",{children:["FeltForFokus",i.jsx("input",{type:"text",value:"Annen input som skal få fokus",onChange:Y()})]}),i.jsx("div",{children:t})]})},O={render:zt,name:"With EventHandlers",args:{...d,onChange:Y()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:t})=>{const n=c(t).getByRole("radio");await s(n).toBeInTheDocument(),await s(n).not.toBeChecked(),await z.click(n),await s(n).toBeChecked(),await be(()=>s(e.onChange).toHaveBeenCalledWith(s.objectContaining({target:s.objectContaining({value:"selskap"})})))}},N={render:Kt,name:"With onBlur Event",decorators:[Ie],args:{...d,onBlur:Y()},parameters:{imageSnapshot:{disableSnapshot:!0},customElementName:"radiogroup-customelement"},play:async({args:e,canvasElement:t})=>{const a=c(t);await s(a.queryByRole("radio")).not.toBeInTheDocument();const n=t.querySelector("radiogroup-customelement");await s(n).toBeInTheDocument();const r=$t(t),l=(await r.findAllByShadowRole("radio"))?.find(y=>y.value==="voksen");l&&await z.click(l),await s(l).toBeChecked();const p=await r.findByShadowRole("radio",{name:"Barn"});await z.click(p);const h=r.getByShadowLabelText("FeltForFokus",{selector:"input"});await z.click(h),await be(()=>s(e.onBlur).toHaveBeenCalled())}},G={name:"With onHelpToggle Event",args:{...d,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},$={name:"With Custom ClassNames (FA3)",args:{...d,classNames:{legend:"dummyClassname",errorMessage:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:"feil"},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=c(e),a=e.querySelector("[id^= radioErrorId]>div");await s(a).toHaveClass("dummyClassname"),await s(t.getByText("beskrivelse")).toHaveClass("dummyClassname")}},_={name:"Read Only",args:{...d,readOnly:!0,selectedValue:v,defaultValue:void 0,description:"Dette er en radiogruppe i read only modus"},argTypes:{readOnly:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=c(e).getAllByRole("radio");for(const n of a)await s(n).toHaveAttribute("data-read-only","true"),s(n).toHaveAccessibleName(/skrivebeskyttet$/)}},U={name:"Read Only And Description",args:{...d,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},render:e=>i.jsxs(m,{...e,children:[i.jsx(m.Radio,{description:"Dette er en radiogruppe i read only modus",children:"Enkeltpersonsforetak"}),i.jsx(m.Radio,{description:"Dette er en radiogruppe i read only modus",children:"Aksjeselskap"})]})};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('group');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
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
} satisfies Story`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
      expect(input).not.toHaveAttribute('aria-invalid');
    });
  }
} satisfies Story`,...x.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'With AriaDescribedBy',
  render: (args): JSX.Element => {
    const alertId = 'radiogroup-alert-description-id';
    return <>
        <RadioGroup {...args} ariaDescribedBy={alertId} hasSpacing />
        <Alert id={alertId} variant={'warning'} showAlert>
          {'Dette er en varselmelding for radiogroup'}
        </Alert>
      </>;
  },
  args: {
    ...defaultArgs
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole('group');
    await expect(group).toHaveAttribute('aria-describedby');
    const alertText = canvas.getByText('Dette er en varselmelding for radiogroup');
    await expect(alertText).toBeInTheDocument();
    const describedBy = group.getAttribute('aria-describedby') || '';
    const describedByIds = describedBy.split(' ').filter(Boolean);
    await expect(describedByIds).toContain('radiogroup-alert-description-id');
  }
} satisfies Story`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('radio', {
      checked: true
    });
    await expect(input).toHaveAttribute('value', selectedValue);
  }
} satisfies Story`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
    await expect(input).toHaveAttribute('value', selectedValue);
  }
} satisfies Story`,...D.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Disabled (A4 delvis)',
  args: {
    ...defaultArgs,
    disabled: true,
    selectedValue: selectedValue,
    defaultValue: undefined,
    helpText: 'Hjelpeknappen skal også være disabled'
  },
  argTypes: {
    disabled: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus', 'active']
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
    const helpButton = canvas.getByRole('button');
    await expect(helpButton).toBeDisabled();
  }
} satisfies Story`,...H.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
      expect(input).toHaveAttribute('aria-invalid', 'false');
    });
  }
} satisfies Story`,...W.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
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
} satisfies Story`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  }
} satisfies Story`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus', 'active']
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
} satisfies Story`,...L.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
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
} satisfies Story`,...j.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
    const helpButton = canvas.getByRole('button');
    await expect(helpButton).toBeInTheDocument();
    await userEvent.click(helpButton);
  }
} satisfies Story`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
    const description = canvas.getByText('Vi trenger å vite din type virksomhet.', {
      selector: ":not([aria-hidden='true'])"
    });
    await expect(description).toBeInTheDocument();
  }
} satisfies Story`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers',
  args: {
    ...defaultArgs,
    onChange: fn()
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
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
} satisfies Story`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: OnBlurHandlerTemplate,
  name: 'With onBlur Event',
  decorators: [webComponent],
  args: {
    ...defaultArgs,
    onBlur: fn()
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    },
    customElementName: 'radiogroup-customelement'
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('radio')).not.toBeInTheDocument();
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
} satisfies Story`,...N.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...G.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
    const errorMessageContainer = canvasElement.querySelector('[id^= radioErrorId]>div');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
    await expect(canvas.getByText('beskrivelse')).toHaveClass('dummyClassname');
  }
} satisfies Story`,...$.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Read Only',
  args: {
    ...defaultArgs,
    readOnly: true,
    selectedValue: selectedValue,
    defaultValue: undefined,
    description: 'Dette er en radiogruppe i read only modus'
  },
  argTypes: {
    readOnly: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole('radio');
    for (const radio of radios) {
      await expect(radio).toHaveAttribute('data-read-only', 'true');
      expect(radio).toHaveAccessibleName(/skrivebeskyttet$/);
    }
  }
} satisfies Story`,..._.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Read Only And Description',
  args: {
    ...defaultArgs,
    readOnly: true
  },
  argTypes: {
    readOnly: {
      table: {
        disable: false
      }
    }
  },
  render: (args): JSX.Element => <RadioGroup {...args}>
      <RadioGroup.Radio description={'Dette er en radiogruppe i read only modus'}>
        {'Enkeltpersonsforetak'}
      </RadioGroup.Radio>
      <RadioGroup.Radio description={'Dette er en radiogruppe i read only modus'}>
        {'Aksjeselskap'}
      </RadioGroup.Radio>
    </RadioGroup>
} satisfies Story`,...U.parameters?.docs?.source}}};const Jt=["WithRef","WithAttributes","Defaults","WithAriaDescribedBy","VariantHorizontal","WithHideLegend","WithSelectedValue","WithDefaultValue","WithDisabled","WithRequired","WithRequiredAndMark","WithRequiredAndMarkAndLegendAsMarkup","WithName","WithoutErrorMessage","WithErrorMessage","WithErrorMessageAndAriaDescribedby","WithHelpText","WithDescription","WithEventHandlers","WithOnBlurEvent","WithHelpToggleEvent","WithCustomClassNames","ReadOnly","ReadOnlyAndDescription"],nn=Object.freeze(Object.defineProperty({__proto__:null,Defaults:x,ReadOnly:_,ReadOnlyAndDescription:U,VariantHorizontal:E,WithAriaDescribedBy:R,WithAttributes:T,WithCustomClassNames:$,WithDefaultValue:D,WithDescription:P,WithDisabled:H,WithErrorMessage:L,WithErrorMessageAndAriaDescribedby:j,WithEventHandlers:O,WithHelpText:F,WithHelpToggleEvent:G,WithHideLegend:k,WithName:I,WithOnBlurEvent:N,WithRef:A,WithRequired:W,WithRequiredAndMark:C,WithRequiredAndMarkAndLegendAsMarkup:M,WithSelectedValue:q,WithoutErrorMessage:V,__namedExportsOrder:Jt,default:Ut},Symbol.toStringTag,{value:"Module"}));export{nn as R};
//# sourceMappingURL=RadioGroup.test.stories-CawpP8hs.js.map
