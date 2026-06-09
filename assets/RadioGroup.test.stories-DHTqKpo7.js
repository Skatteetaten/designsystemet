import{c as we,j as d,r as te}from"./iframe-DyzX2HZk.js";import{g as Be,q as Se,b as v,s as Te,c as Ae,a as xe,d as Re,e as Ee,f as ke,h as He,i as qe,j as De,k as Ce,l as ne,p as We}from"./dom.esm-BaCV4rBE.js";import{R as m}from"./index-BsMkEDp2.js";import{A as Ve}from"./index-BVZq6FY6.js";import{H as Me}from"./index-CMkU_MzX.js";import{w as Ie}from"./webcomponent-decorator-Bol-bNci.js";import{S as Q}from"./icon.systems-CftjSuGj.js";var Le=Object.defineProperty,je=(e,t)=>{for(var a in t)Le(e,a,{get:t[a],enumerable:!0})},se={};je(se,{findAllByShadowAltText:()=>st,findAllByShadowDisplayValue:()=>Ua,findAllByShadowLabelText:()=>ca,findAllByShadowPlaceholderText:()=>Sa,findAllByShadowRole:()=>Qe,findAllByShadowTestId:()=>kt,findAllByShadowText:()=>Va,findAllByShadowTitle:()=>gt,findByShadowAltText:()=>rt,findByShadowDisplayValue:()=>za,findByShadowLabelText:()=>ua,findByShadowPlaceholderText:()=>Ta,findByShadowRole:()=>Ze,findByShadowTestId:()=>Ht,findByShadowText:()=>Ma,findByShadowTitle:()=>ft,getAllByShadowAltText:()=>tt,getAllByShadowDisplayValue:()=>$a,getAllByShadowLabelText:()=>ia,getAllByShadowPlaceholderText:()=>wa,getAllByShadowRole:()=>Ye,getAllByShadowTestId:()=>Rt,getAllByShadowText:()=>Ca,getAllByShadowTitle:()=>ht,getByShadowAltText:()=>nt,getByShadowDisplayValue:()=>_a,getByShadowLabelText:()=>da,getByShadowPlaceholderText:()=>Ba,getByShadowRole:()=>Xe,getByShadowTestId:()=>Et,getByShadowText:()=>Wa,getByShadowTitle:()=>yt,queryAllByShadowAltText:()=>ue,queryAllByShadowDisplayValue:()=>ce,queryAllByShadowLabelText:()=>le,queryAllByShadowPlaceholderText:()=>ie,queryAllByShadowRole:()=>oe,queryAllByShadowTestId:()=>me,queryAllByShadowText:()=>de,queryAllByShadowTitle:()=>pe,queryByShadowAltText:()=>at,queryByShadowDisplayValue:()=>Ga,queryByShadowLabelText:()=>la,queryByShadowPlaceholderText:()=>ba,queryByShadowRole:()=>Ke,queryByShadowTestId:()=>xt,queryByShadowText:()=>Da,queryByShadowTitle:()=>mt});Pe();function Fe(){Oe()}function Z(){HTMLSlotElement.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll}function f(e){Fe();try{let t=e();return typeof t=="object"&&"finally"in t&&typeof t.finally=="function"&&t.finally(()=>Z()),t}finally{Z()}}function Pe(){if(typeof ShadowRoot>"u")throw"Your environment does not support shadow roots.";ShadowRoot.prototype.matches==null&&Object.defineProperties(ShadowRoot.prototype,{matches:{get(){return function(e){return e.trim()==="*"?!0:!!this.querySelector(e)}}}}),ShadowRoot.prototype.outerHTML==null&&Object.defineProperties(ShadowRoot.prototype,{outerHTML:{get(){return this.innerHTML}}})}function Oe(){HTMLSlotElement.prototype.querySelectorAll=function(e){let t=HTMLElement.prototype.querySelectorAll,a=[];return this.assignedElements({flatten:!0}).forEach(n=>{let s=n,o=document.createElement("div");o.appendChild(s.cloneNode(!1)),o.querySelector(e)&&a.push(s),a=a.concat(Array.from(s.querySelectorAll(e)))}),a.length==0&&(a=Array.from(t.call(this,e))),[...new Set(a)]}}function b(e,t={shallow:!1}){return re(e,"*",t)}function re(e,t,a={shallow:!1},n=[],s=[]){return e instanceof Document&&(e=document.documentElement),n=[e],s.push(e),e instanceof HTMLElement&&e.shadowRoot!=null&&e.shadowRoot.mode!=="closed"&&(s.push(e.shadowRoot),n.push(e.shadowRoot)),n.forEach(o=>{o.querySelectorAll(t).forEach(l=>{if(l.shadowRoot==null||l.shadowRoot.mode==="closed"){s.push(l);return}if(s.push(l.shadowRoot),a.shallow===!0){l.shadowRoot.querySelectorAll(t).forEach(p=>{s.push(p)});return}l.shadowRoot.querySelectorAll(t).forEach(p=>{s.push(p),n.push(p)}),re(l.shadowRoot,t,a,n,s)})}),[...new Set(s)]}function w(e){return e.map(t=>(...a)=>{let[n,s,o,...l]=a;return o==null&&(o={}),o.suggest=!1,t(n,s,o,...l)})}function oe(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(f(()=>b(t,n).map(s=>xe(s,a,n)).flat(1/0)))]}var Ne=(e,t)=>`Found multiple elements with the role of: ${t}`,Ge=(e,t)=>`Unable to find an element with the role of: ${t}`,[$e,_e,Ue,ze,Je]=w(v(oe,Ne,Ge)),Ke=(...e)=>$e(...e),Ye=(...e)=>_e(...e),Xe=(...e)=>Ue(...e),Qe=(...e)=>ze(...e),Ze=(...e)=>Je(...e);function le(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(f(()=>b(t,n).map(s=>Re(s,a,n)).flat(1/0)))]}var ea=(e,t)=>`Found multiple elements with the label text of: ${t}`,aa=(e,t)=>`Unable to find an element with the label text of: ${t}`,[ta,na,sa,ra,oa]=w(v(le,ea,aa)),la=(...e)=>ta(...e),ia=(...e)=>na(...e),da=(...e)=>sa(...e),ca=(...e)=>ra(...e),ua=(...e)=>oa(...e);function ie(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(f(()=>b(t,n).map(s=>Ee(s,a,n)).flat(1/0)))]}var pa=(e,t)=>`Found multiple elements with the placeholder text of: ${t}`,ma=(e,t)=>`Unable to find an element with the placeholder text of: ${t}`,[ha,ya,ga,fa,va]=w(v(ie,pa,ma)),ba=(...e)=>ha(...e),wa=(...e)=>ya(...e),Ba=(...e)=>ga(...e),Sa=(...e)=>fa(...e),Ta=(...e)=>va(...e);function de(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(f(()=>b(t,n).map(s=>ke(s,a,n)).flat(1/0)))]}var Aa=(e,t)=>`Found multiple elements with the text of: ${t}`,xa=(e,t)=>`Unable to find an element with the text of: ${t}`,[Ra,Ea,ka,Ha,qa]=w(v(de,Aa,xa)),Da=(...e)=>Ra(...e),Ca=(...e)=>Ea(...e),Wa=(...e)=>ka(...e),Va=(...e)=>Ha(...e),Ma=(...e)=>qa(...e);function ce(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(f(()=>b(t,n).map(s=>He(s,a,n)).flat(1/0)))]}var Ia=(e,t)=>`Found multiple elements with the display value of: ${t}`,La=(e,t)=>`Unable to find an element with the display value of: ${t}`,[ja,Fa,Pa,Oa,Na]=w(v(ce,Ia,La)),Ga=(...e)=>ja(...e),$a=(...e)=>Fa(...e),_a=(...e)=>Pa(...e),Ua=(...e)=>Oa(...e),za=(...e)=>Na(...e);function ue(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(f(()=>b(t,n).map(s=>qe(s,a,n)).flat(1/0)))]}var Ja=(e,t)=>`Found multiple elements with the alt text of: ${t}`,Ka=(e,t)=>`Unable to find an element with the alt text of: ${t}`,[Ya,Xa,Qa,Za,et]=w(v(ue,Ja,Ka)),at=(...e)=>Ya(...e),tt=(...e)=>Xa(...e),nt=(...e)=>Qa(...e),st=(...e)=>Za(...e),rt=(...e)=>et(...e);function pe(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(f(()=>b(t,n).map(s=>De(s,a,n)).flat(1/0)))]}var ot=(e,t)=>`Found multiple elements with the title of: ${t}`,lt=(e,t)=>`Unable to find an element with the title of: ${t}`,[it,dt,ct,ut,pt]=w(v(pe,ot,lt)),mt=(...e)=>it(...e),ht=(...e)=>dt(...e),yt=(...e)=>ct(...e),gt=(...e)=>ut(...e),ft=(...e)=>pt(...e);function me(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(f(()=>b(t,n).map(s=>Ce(s,a,n)).flat(1/0)))]}var vt=(e,t)=>`Found multiple elements with the test id of: ${t}`,bt=(e,t)=>`Unable to find an element with the test id of: ${t}`,[wt,Bt,St,Tt,At]=w(v(me,vt,bt)),xt=(...e)=>wt(...e),Rt=(...e)=>Bt(...e),Et=(...e)=>St(...e),kt=(...e)=>Tt(...e),Ht=(...e)=>At(...e),ee=/([^\S(\r\n|\r|\n)]*[\f\n\r\t\v]+)/.source;function qt(e){return e.replace(new RegExp(`${ee}.*${ee}{2,}`,"g"),"")}function Dt(...e){let[t,a,n]=e,s=Gt(n?.filterNode||Ct);return n==null&&(n={}),n.plugins==null&&(n.plugins=[]),n.plugins.push(s),f(()=>We(t,a,{...n,plugins:[s]}))}function he(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ct(e){return e.nodeType!==Y&&(e.nodeType!==ge||!e.matches(ne().defaultIgnore))}var Wt=(e,t,a,n,s,o,l)=>{let p=n+a.indent,h=a.colors;return e.map(y=>{let T=t[y],B=l(T,a,p,s,o);return typeof T!="string"&&(B.indexOf(`
`)!==-1&&(B=a.spacingOuter+p+B+a.spacingOuter+n),B="{"+B+"}"),a.spacingInner+n+h.prop.open+y+h.prop.close+"="+h.value.open+B+h.value.close}).join("")},Vt=3,Mt=(e,t,a,n,s,o)=>qt(e.map(l=>{let p=typeof l=="string"?ye(l,t):o(l,t,a,n,s);return p===""&&typeof l=="object"&&l!=null&&l.nodeType!==Vt?"":t.spacingOuter+a+p}).join("")),ye=(e,t)=>{let a=t.colors.content;return a.open+he(e)+a.close},It=(e,t)=>{let a=t.colors.comment;return a.open+"<!--"+he(e)+"-->"+a.close},Lt=(e,t,a,n,s)=>{let o=n.colors.tag;return o.open+"<"+e+(t&&o.close+t+n.spacingOuter+s+o.open)+(a?">"+o.close+a+n.spacingOuter+s+o.open+"</"+e:(t&&!n.min?"":" ")+"/")+">"+o.close},jt=(e,t)=>{let a=t.colors.tag;return a.open+"<"+e+a.close+" …"+a.open+" />"+a.close},ge=1,fe=3,Y=8,ve=11,Ft=/^((HTML|SVG)\w*)?Element$/,Pt=e=>{var t;let a=((t=e?.constructor)==null?void 0:t.name)||"",{nodeType:n,tagName:s}=e,o=typeof s=="string"&&s.includes("-")||typeof e.hasAttribute=="function"&&e.hasAttribute("is")||e instanceof HTMLElement;return n===ge&&(Ft.test(a)||o)||n===fe&&a==="Text"||n===Y&&a==="Comment"||n===ve};function Ot(e){return e.nodeType===fe}function Nt(e){return e.nodeType===Y}function ae(e){return e.nodeType===ve}function Gt(e){function t(a){let n=Array.prototype.slice.call(a.childNodes||a.children);return"shadowRoot"in a&&a.shadowRoot!=null&&a.shadowRoot.mode!=="closed"&&n.unshift(a.shadowRoot),n.filter(e)}return{test:a=>a?.constructor&&Pt(a),serialize:(a,n,s,o,l,p)=>{if(Ot(a))return ye(a.data,n);if(Nt(a))return It(a.data,n);let h="DocumentFragment";return"tagName"in a&&a.tagName?h=a.tagName.toLowerCase():a instanceof ShadowRoot&&(h="ShadowRoot"),++o>n.maxDepth?jt(h,n):Lt(h,Wt(ae(a)?[]:Array.from(a.attributes).map(y=>y.name).sort(),ae(a)?{}:Array.from(a.attributes).reduce((y,T)=>(y[T.name]=T.value,y),{}),n,s+n.indent,o,l,p),Mt(t(a),n,s+n.indent,o,l,p),n,s)}}}({...Te});var $t={...Se,...se};function _t(e){let t=Be(e,$t);return{...t,queryAllByShadowRole:(...a)=>t.queryAllByShadowRole(...a),queryByShadowRole:(...a)=>t.queryByShadowRole(...a),getAllByShadowRole:(...a)=>t.getAllByShadowRole(...a),getByShadowRole:(...a)=>t.getByShadowRole(...a),findAllByShadowRole:(...a)=>t.findAllByShadowRole(...a),findByShadowRole:(...a)=>t.findByShadowRole(...a),queryAllByShadowLabelText:(...a)=>t.queryAllByShadowLabelText(...a),queryByShadowLabelText:(...a)=>t.queryByShadowLabelText(...a),getAllByShadowLabelText:(...a)=>t.getAllByShadowLabelText(...a),getByShadowLabelText:(...a)=>t.getByShadowLabelText(...a),findAllByShadowLabelText:(...a)=>t.findAllByShadowLabelText(...a),findByShadowLabelText:(...a)=>t.findByShadowLabelText(...a),queryAllByShadowPlaceholderText:(...a)=>t.queryAllByShadowPlaceholderText(...a),queryByShadowPlaceholderText:(...a)=>t.queryByShadowPlaceholderText(...a),getAllByShadowPlaceholderText:(...a)=>t.getAllByShadowPlaceholderText(...a),getByShadowPlaceholderText:(...a)=>t.getByShadowPlaceholderText(...a),findAllByShadowPlaceholderText:(...a)=>t.findAllByShadowPlaceholderText(...a),findByShadowPlaceholderText:(...a)=>t.findByShadowPlaceholderText(...a),queryAllByShadowText:(...a)=>t.queryAllByShadowText(...a),queryByShadowText:(...a)=>t.queryByShadowText(...a),getAllByShadowText:(...a)=>t.getAllByShadowText(...a),getByShadowText:(...a)=>t.getByShadowText(...a),findAllByShadowText:(...a)=>t.findAllByShadowText(...a),findByShadowText:(...a)=>t.findByShadowText(...a),queryAllByShadowDisplayValue:(...a)=>t.queryAllByShadowDisplayValue(...a),queryByShadowDisplayValue:(...a)=>t.queryByShadowDisplayValue(...a),getAllByShadowDisplayValue:(...a)=>t.getAllByShadowDisplayValue(...a),getByShadowDisplayValue:(...a)=>t.getByShadowDisplayValue(...a),findAllByShadowDisplayValue:(...a)=>t.findAllByShadowDisplayValue(...a),findByShadowDisplayValue:(...a)=>t.findByShadowDisplayValue(...a),queryAllByShadowAltText:(...a)=>t.queryAllByShadowAltText(...a),queryByShadowAltText:(...a)=>t.queryByShadowAltText(...a),getAllByShadowAltText:(...a)=>t.getAllByShadowAltText(...a),getByShadowAltText:(...a)=>t.getByShadowAltText(...a),findAllByShadowAltText:(...a)=>t.findAllByShadowAltText(...a),findByShadowAltText:(...a)=>t.findByShadowAltText(...a),queryAllByShadowTitle:(...a)=>t.queryAllByShadowTitle(...a),queryByShadowTitle:(...a)=>t.queryByShadowTitle(...a),getAllByShadowTitle:(...a)=>t.getAllByShadowTitle(...a),getByShadowTitle:(...a)=>t.getByShadowTitle(...a),findAllByShadowTitle:(...a)=>t.findAllByShadowTitle(...a),findByShadowTitle:(...a)=>t.findByShadowTitle(...a),queryAllByShadowTestId:(...a)=>t.queryAllByShadowTestId(...a),queryByShadowTestId:(...a)=>t.queryByShadowTestId(...a),getAllByShadowTestId:(...a)=>t.getAllByShadowTestId(...a),getByShadowTestId:(...a)=>t.getByShadowTestId(...a),findAllByShadowTestId:(...a)=>t.findAllByShadowTestId(...a),findByShadowTestId:(...a)=>t.findByShadowTestId(...a)}}Ae({getElementError(e,t){let a=Dt(t),n=new Error([e,`Ignored nodes: comments, ${ne().defaultIgnore}
${a}`].filter(Boolean).join(`

`));return n.name="ShadowDOMTestingLibraryElementError",n}});const{useArgs:Ut}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:r,fn:X,userEvent:S,waitFor:be,within:c}=__STORYBOOK_MODULE_TEST__,zt={component:m,title:"Tester/RadioGroup",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{category:we.props}},children:{table:{disable:!0}},defaultValue:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(Q),mapping:Q},helpText:{table:{disable:!0}},hideLegend:{table:{disable:!0}},legend:{table:{disable:!0}},readOnly:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},value:{table:{disable:!0}},selectedValue:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"},disabled:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},required:{table:{disable:!0}},ariaDescribedBy:{table:{disable:!0}},onChange:{table:{disable:!0}},onBlur:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1},htmlValidate:{test:"off"}}},u=e=>{const[,t]=Ut();return d.jsx(m,{...e,onChange:a=>{e.value!==void 0?t({value:a.target.value}):e.selectedValue!==void 0?t({selectedValue:a.target.value}):e.defaultValue!==void 0&&t({defaultValue:a.target.value})}})},g="annet",K="Type virksomhet",i={legend:K,children:[d.jsx(m.Radio,{value:"foretak",children:"Enkeltpersonsforetak"},"radioGroupRadio_1"),d.jsx(m.Radio,{value:"selskap",children:"Aksjeselskap"},"radioGroupRadio_2"),d.jsx(m.Radio,{value:"annet",children:"Annet"},"radioGroupRadio_3")]},A={render:u,name:"With Ref (FA1)",args:{...i,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=c(e).getByRole("group");await r(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},x={render:u,name:"With Attributes (FA2-5)",args:{...i,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=c(e).getByRole("group");await r(a).toHaveClass("dummyClassname"),await r(a).toHaveAttribute("id","htmlId"),await r(a).toHaveAttribute("lang","nb"),await r(a).toHaveAttribute("data-testid","123ID"),await r(a).toHaveAttribute("form","123form")}},R={name:"With Custom ClassNames (FA3)",args:{...i,classNames:{container:"dummyClassname",legend:"dummyClassname",errorMessage:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:"feil"},argTypes:{classNames:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=c(e),a=t.getByRole("group");await r(a).toHaveClass("dummyClassname");const n=t.getByText(K);await r(n).toHaveClass("dummyClassname");const s=e.querySelector("[id^= radioErrorId]>div");await r(s).toHaveClass("dummyClassname");const o=t.getByText("beskrivelse");await r(o).toHaveClass("dummyClassname");const l=t.getByRole("button");await S.click(l);const h=t.getByText("HJEEEEEEELP").parentElement;await r(h).toHaveClass("dummyClassname")}},E={render:u,name:"Defaults Variant Standard (A1, B1)",args:{...i},argTypes:{children:{table:{disable:!1}},legend:{table:{disable:!1}},variant:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=c(e),a=t.getByRole("group"),n=t.getAllByText(K)[0],s=t.getAllByRole("radio");await r(a).toBeInTheDocument(),await r(a.tagName).toBe("FIELDSET"),await r(n).toBeInTheDocument(),await r(n.tagName).toBe("LEGEND"),s.forEach(o=>{r(o).toHaveAttribute("name"),r(o).not.toHaveAttribute("aria-invalid")})}},k={name:"With AriaDescribedBy",render:e=>{const t="radiogroup-alert-description-id";return d.jsxs(d.Fragment,{children:[d.jsx(m,{...e,ariaDescribedBy:t,hasSpacing:!0}),d.jsx(Ve,{id:t,variant:"warning",showAlert:!0,children:"Dette er en varselmelding for radiogroup"})]})},args:{...i},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=c(e),a=t.getByRole("group");await r(a).toHaveAttribute("aria-describedby");const n=t.getByText("Dette er en varselmelding for radiogroup");await r(n).toBeInTheDocument();const o=(a.getAttribute("aria-describedby")||"").split(" ").filter(Boolean);await r(o).toContain("radiogroup-alert-description-id")}},H={render:u,name:"Variant Horizontal (A6)",args:{...i,variant:"horizontal"},argTypes:{variant:{table:{disable:!1}}}},q={render:u,name:"With HideLegend (B1)",args:{...i,hideLegend:!0},argTypes:{hideLegend:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getAllByText(K)[0];await r(a).toBeInTheDocument()}},D={render:u,name:"With SelectedValue (A3)",args:{...i,selectedValue:g,defaultValue:void 0},argTypes:{selectedValue:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=c(e).getByRole("radio",{checked:!0});await r(a).toHaveAttribute("value",g)}},C={render:u,name:"With Value (A3)",args:{...i,value:g,defaultValue:void 0},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=c(e).getByRole("radio",{checked:!0});await r(a).toHaveAttribute("value",g)}},W={render:u,name:"With DefaultValue (A3)",args:{...i,selectedValue:void 0,value:void 0,defaultValue:g},argTypes:{defaultValue:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("radio",{checked:!0});await r(a).toHaveAttribute("value",g)}},V={render:u,name:"With Disabled (A4 delvis)",args:{...i,disabled:!0,value:g,defaultValue:void 0,helpText:"Hjelpeknappen skal også være disabled"},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const t=c(e);t.getAllByRole("radio").forEach(s=>{r(s).toBeDisabled()});const n=t.getByRole("button");await r(n).toBeDisabled()}},M={render:u,name:"With Required (A7)",args:{...i,required:!0},argTypes:{required:{table:{disable:!1}}},play:async({canvasElement:e})=>{c(e).getAllByRole("radio").forEach(n=>{r(n).toBeRequired(),r(n).toHaveAttribute("aria-invalid","false")})}},I={render:u,name:"With Required And Mark (A7, A8)",args:{...i,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},L={render:u,name:"With Required And Mark And Legend As Markup (A7, A8)",args:{...i,legend:d.jsxs(d.Fragment,{children:[d.jsx(Me,{as:"h4",level:3,children:K}),d.jsx("span",{children:"Med virksomhet så menes bla bla"})]}),required:!0,showRequiredMark:!0},argTypes:{showRequiredMark:{table:{disable:!1}}}},j={render:u,name:"With Name (B1)",args:{...i,name:"nameFraKonsument"},argTypes:{name:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{c(e).getAllByRole("radio").forEach(n=>{r(n).toHaveAttribute("name","nameFraKonsument")})}},F={render:u,name:"Without ErrorMessage (B4)",args:{...i},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=c(e),a=t.getAllByRole("generic")[6];await r(a).toBeInTheDocument(),await r(t.queryByText("Feilmelding")).not.toBeInTheDocument(),t.getAllByRole("radio").forEach(s=>{r(s).not.toHaveAttribute("aria-invalid","true"),r(s).not.toHaveAttribute("aria-describedby")})},parameters:{imageSnapshot:{disableSnapshot:!0}}},P={render:u,name:"With ErrorMessage (B4, A3)",args:{...i,errorMessage:"Feilmelding",value:g,defaultValue:void 0},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const t=c(e),a=t.getAllByRole("radio"),n=t.getByText("Feilmelding"),s=t.getAllByRole("generic")[6];await r(n).toBeInTheDocument(),await r(s).toBeInTheDocument(),a.forEach(o=>{r(o).toHaveAttribute("aria-invalid","true"),r(o).toHaveAttribute("aria-describedby",s.id)})}},O={render:u,name:"With ErrorMessage And AriaDescribedby (B4)",args:{...i,children:[d.jsx(m.Radio,{ariaDescribedby:"konsumentId",children:"Enkeltpersonsforetak"},"radioGroupRadio_1")],errorMessage:"Feilmelding"},argTypes:{},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=c(e),a=t.getAllByRole("generic")[4],n=t.getByRole("radio");r(n).toHaveAttribute("aria-describedby",`konsumentId ${a.id}`)}},N={render:u,name:"With HelpText (A1)",args:{...i,helpText:"Vi trenger å vite din type virksomhet."},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await r(a).toBeInTheDocument(),await S.click(a)}},G={name:"With Description (A1)",args:{...i,description:"Vi trenger å vite din type virksomhet."},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByText("Vi trenger å vite din type virksomhet.",{selector:":not([aria-hidden='true'])"});await r(a).toBeInTheDocument()}},Jt=e=>{const[t,a]=te.useState("Aksjeselskap");return d.jsx(m,{...e,onChange:n=>{a("Radio har blitt klikket på"),e.onChange&&e.onChange(n)},children:d.jsx(m.Radio,{value:"selskap",children:t})})},Kt=e=>{const[t,a]=te.useState(""),s=document.querySelector("radiogroup-customelement")?.shadowRoot;return d.jsxs(m,{...e,legend:"Voksen eller barn",shadowRootNode:s??void 0,onChange:o=>{e.onChange&&e.onChange(o)},onBlur:o=>{a("Radiogruppe har mistet fokus (onBlur)"),e.onBlur&&e.onBlur(o)},children:[d.jsx(m.Radio,{value:"voksen",children:"Voksen"}),d.jsx(m.Radio,{value:"barn",children:"Barn"}),d.jsxs("label",{children:["FeltForFokus",d.jsx("input",{type:"text",value:"Annen input som skal få fokus",onChange:X()})]}),d.jsx("div",{children:t})]})},$={render:Jt,name:"With EventHandlers",args:{...i,onChange:X()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:t})=>{const n=c(t).getByRole("radio");await r(n).toBeInTheDocument(),await r(n).not.toBeChecked(),await S.click(n),await r(n).toBeChecked(),await be(()=>r(e.onChange).toHaveBeenCalledWith(r.objectContaining({target:r.objectContaining({value:"selskap"})})))}},_={render:Kt,name:"With onBlur Event",decorators:[Ie],args:{...i,onBlur:X()},parameters:{imageSnapshot:{disableSnapshot:!0},customElementName:"radiogroup-customelement"},play:async({args:e,canvasElement:t})=>{const a=c(t);await r(a.queryByRole("radio")).not.toBeInTheDocument();const n=t.querySelector("radiogroup-customelement");await r(n).toBeInTheDocument();const s=_t(t),l=(await s.findAllByShadowRole("radio"))?.find(y=>y.value==="voksen");l&&await S.click(l),await r(l).toBeChecked();const p=await s.findByShadowRole("radio",{name:"Barn"});await S.click(p);const h=s.getByShadowLabelText("FeltForFokus",{selector:"input"});await S.click(h),await be(()=>r(e.onBlur).toHaveBeenCalled())}},U={name:"With onHelpToggle Event",args:{...i,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disableSnapshot:!0}}},z={name:"Read Only",args:{...i,readOnly:!0,value:g,defaultValue:void 0,description:"Dette er en radiogruppe i read only modus"},argTypes:{readOnly:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=c(e).getAllByRole("radio");for(const n of a)await r(n).toHaveAttribute("data-read-only","true"),r(n).toHaveAccessibleName(/skrivebeskyttet$/)}},J={name:"Read Only And Description",args:{...i,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},render:e=>d.jsxs(m,{...e,children:[d.jsx(m.Radio,{description:"Dette er en radiogruppe i read only modus",children:"Enkeltpersonsforetak"}),d.jsx(m.Radio,{description:"Dette er en radiogruppe i read only modus",children:"Aksjeselskap"})]})};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...A.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      container: 'dummyClassname',
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
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    },
    a11y: {
      test: 'off'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('group');
    await expect(container).toHaveClass('dummyClassname');
    const legend = canvas.getByText(defaultLegendText);
    await expect(legend).toHaveClass('dummyClassname');
    const errorMessageContainer = canvasElement.querySelector('[id^= radioErrorId]>div');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
    const description = canvas.getByText('beskrivelse');
    await expect(description).toHaveClass('dummyClassname');
    const helpButton = canvas.getByRole('button');
    await userEvent.click(helpButton);
    const helpText = canvas.getByText('HJEEEEEEELP');
    const helpBox = helpText.parentElement;
    await expect(helpBox).toHaveClass('dummyClassname');
  }
} satisfies Story`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...H.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...D.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Value (A3)',
  args: {
    ...defaultArgs,
    value: selectedValue,
    defaultValue: undefined
  },
  argTypes: {
    value: {
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
} satisfies Story`,...C.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With DefaultValue (A3)',
  args: {
    ...defaultArgs,
    selectedValue: undefined,
    value: undefined,
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
} satisfies Story`,...W.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Disabled (A4 delvis)',
  args: {
    ...defaultArgs,
    disabled: true,
    value: selectedValue,
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
} satisfies Story`,...V.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...I.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...L.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...j.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With ErrorMessage (B4, A3)',
  args: {
    ...defaultArgs,
    errorMessage: 'Feilmelding',
    value: selectedValue,
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
} satisfies Story`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...N.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...G.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...$.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,..._.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  }
} satisfies Story`,...U.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Read Only',
  args: {
    ...defaultArgs,
    readOnly: true,
    value: selectedValue,
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
} satisfies Story`,...z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...J.parameters?.docs?.source}}};const Yt=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithAriaDescribedBy","VariantHorizontal","WithHideLegend","WithSelectedValue","WithValue","WithDefaultValue","WithDisabled","WithRequired","WithRequiredAndMark","WithRequiredAndMarkAndLegendAsMarkup","WithName","WithoutErrorMessage","WithErrorMessage","WithErrorMessageAndAriaDescribedby","WithHelpText","WithDescription","WithEventHandlers","WithOnBlurEvent","WithHelpToggleEvent","ReadOnly","ReadOnlyAndDescription"],sn=Object.freeze(Object.defineProperty({__proto__:null,Defaults:E,ReadOnly:z,ReadOnlyAndDescription:J,VariantHorizontal:H,WithAriaDescribedBy:k,WithAttributes:x,WithCustomClassNames:R,WithDefaultValue:W,WithDescription:G,WithDisabled:V,WithErrorMessage:P,WithErrorMessageAndAriaDescribedby:O,WithEventHandlers:$,WithHelpText:N,WithHelpToggleEvent:U,WithHideLegend:q,WithName:j,WithOnBlurEvent:_,WithRef:A,WithRequired:M,WithRequiredAndMark:I,WithRequiredAndMarkAndLegendAsMarkup:L,WithSelectedValue:D,WithValue:C,WithoutErrorMessage:F,__namedExportsOrder:Yt,default:zt},Symbol.toStringTag,{value:"Module"}));export{sn as R};
//# sourceMappingURL=RadioGroup.test.stories-DHTqKpo7.js.map
