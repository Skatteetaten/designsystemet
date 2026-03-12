import{c as be,j as d,r as ee}from"./iframe-BHAek7Q1.js";import{g as we,q as ve,b as f,s as Se,c as Be,a as Te,d as Ae,e as xe,f as Re,h as Ee,i as ke,j as qe,k as He,l as ae,p as De}from"./dom.esm-D2P0ZyyB.js";import{R as m}from"./index-D1w89d87.js";import{H as We}from"./index-BVEcgXLv.js";import{w as Me}from"./webcomponent-decorator-liU0mRFA.js";import{S as Y}from"./icon.systems-MD0H-F_M.js";var Ce=Object.defineProperty,Ve=(e,t)=>{for(var a in t)Ce(e,a,{get:t[a],enumerable:!0})},te={};Ve(te,{findAllByShadowAltText:()=>at,findAllByShadowDisplayValue:()=>Ga,findAllByShadowLabelText:()=>la,findAllByShadowPlaceholderText:()=>wa,findAllByShadowRole:()=>Je,findAllByShadowTestId:()=>xt,findAllByShadowText:()=>Da,findAllByShadowTitle:()=>mt,findByShadowAltText:()=>tt,findByShadowDisplayValue:()=>$a,findByShadowLabelText:()=>ia,findByShadowPlaceholderText:()=>va,findByShadowRole:()=>Ye,findByShadowTestId:()=>Rt,findByShadowText:()=>Wa,findByShadowTitle:()=>ht,getAllByShadowAltText:()=>Za,getAllByShadowDisplayValue:()=>Oa,getAllByShadowLabelText:()=>ra,getAllByShadowPlaceholderText:()=>fa,getAllByShadowRole:()=>ze,getAllByShadowTestId:()=>Tt,getAllByShadowText:()=>qa,getAllByShadowTitle:()=>ut,getByShadowAltText:()=>et,getByShadowDisplayValue:()=>Na,getByShadowLabelText:()=>oa,getByShadowPlaceholderText:()=>ba,getByShadowRole:()=>Ke,getByShadowTestId:()=>At,getByShadowText:()=>Ha,getByShadowTitle:()=>pt,queryAllByShadowAltText:()=>de,queryAllByShadowDisplayValue:()=>ie,queryAllByShadowLabelText:()=>re,queryAllByShadowPlaceholderText:()=>oe,queryAllByShadowRole:()=>se,queryAllByShadowTestId:()=>ue,queryAllByShadowText:()=>le,queryAllByShadowTitle:()=>ce,queryByShadowAltText:()=>Xa,queryByShadowDisplayValue:()=>Pa,queryByShadowLabelText:()=>sa,queryByShadowPlaceholderText:()=>ga,queryByShadowRole:()=>Ue,queryByShadowTestId:()=>Bt,queryByShadowText:()=>ka,queryByShadowTitle:()=>ct});Le();function Ie(){Fe()}function Q(){HTMLSlotElement.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll}function g(e){Ie();try{let t=e();return typeof t=="object"&&"finally"in t&&typeof t.finally=="function"&&t.finally(()=>Q()),t}finally{Q()}}function Le(){if(typeof ShadowRoot>"u")throw"Your environment does not support shadow roots.";ShadowRoot.prototype.matches==null&&Object.defineProperties(ShadowRoot.prototype,{matches:{get(){return function(e){return e.trim()==="*"?!0:!!this.querySelector(e)}}}}),ShadowRoot.prototype.outerHTML==null&&Object.defineProperties(ShadowRoot.prototype,{outerHTML:{get(){return this.innerHTML}}})}function Fe(){HTMLSlotElement.prototype.querySelectorAll=function(e){let t=HTMLElement.prototype.querySelectorAll,a=[];return this.assignedElements({flatten:!0}).forEach(n=>{let s=n,o=document.createElement("div");o.appendChild(s.cloneNode(!1)),o.querySelector(e)&&a.push(s),a=a.concat(Array.from(s.querySelectorAll(e)))}),a.length==0&&(a=Array.from(t.call(this,e))),[...new Set(a)]}}function b(e,t={shallow:!1}){return ne(e,"*",t)}function ne(e,t,a={shallow:!1},n=[],s=[]){return e instanceof Document&&(e=document.documentElement),n=[e],s.push(e),e instanceof HTMLElement&&e.shadowRoot!=null&&e.shadowRoot.mode!=="closed"&&(s.push(e.shadowRoot),n.push(e.shadowRoot)),n.forEach(o=>{o.querySelectorAll(t).forEach(l=>{if(l.shadowRoot==null||l.shadowRoot.mode==="closed"){s.push(l);return}if(s.push(l.shadowRoot),a.shallow===!0){l.shadowRoot.querySelectorAll(t).forEach(p=>{s.push(p)});return}l.shadowRoot.querySelectorAll(t).forEach(p=>{s.push(p),n.push(p)}),ne(l.shadowRoot,t,a,n,s)})}),[...new Set(s)]}function w(e){return e.map(t=>(...a)=>{let[n,s,o,...l]=a;return o==null&&(o={}),o.suggest=!1,t(n,s,o,...l)})}function se(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(s=>Te(s,a,n)).flat(1/0)))]}var je=(e,t)=>`Found multiple elements with the role of: ${t}`,Pe=(e,t)=>`Unable to find an element with the role of: ${t}`,[Oe,Ne,Ge,$e,_e]=w(f(se,je,Pe)),Ue=(...e)=>Oe(...e),ze=(...e)=>Ne(...e),Ke=(...e)=>Ge(...e),Je=(...e)=>$e(...e),Ye=(...e)=>_e(...e);function re(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(s=>Ae(s,a,n)).flat(1/0)))]}var Qe=(e,t)=>`Found multiple elements with the label text of: ${t}`,Xe=(e,t)=>`Unable to find an element with the label text of: ${t}`,[Ze,ea,aa,ta,na]=w(f(re,Qe,Xe)),sa=(...e)=>Ze(...e),ra=(...e)=>ea(...e),oa=(...e)=>aa(...e),la=(...e)=>ta(...e),ia=(...e)=>na(...e);function oe(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(s=>xe(s,a,n)).flat(1/0)))]}var da=(e,t)=>`Found multiple elements with the placeholder text of: ${t}`,ca=(e,t)=>`Unable to find an element with the placeholder text of: ${t}`,[ua,pa,ma,ha,ya]=w(f(oe,da,ca)),ga=(...e)=>ua(...e),fa=(...e)=>pa(...e),ba=(...e)=>ma(...e),wa=(...e)=>ha(...e),va=(...e)=>ya(...e);function le(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(s=>Re(s,a,n)).flat(1/0)))]}var Sa=(e,t)=>`Found multiple elements with the text of: ${t}`,Ba=(e,t)=>`Unable to find an element with the text of: ${t}`,[Ta,Aa,xa,Ra,Ea]=w(f(le,Sa,Ba)),ka=(...e)=>Ta(...e),qa=(...e)=>Aa(...e),Ha=(...e)=>xa(...e),Da=(...e)=>Ra(...e),Wa=(...e)=>Ea(...e);function ie(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(s=>Ee(s,a,n)).flat(1/0)))]}var Ma=(e,t)=>`Found multiple elements with the display value of: ${t}`,Ca=(e,t)=>`Unable to find an element with the display value of: ${t}`,[Va,Ia,La,Fa,ja]=w(f(ie,Ma,Ca)),Pa=(...e)=>Va(...e),Oa=(...e)=>Ia(...e),Na=(...e)=>La(...e),Ga=(...e)=>Fa(...e),$a=(...e)=>ja(...e);function de(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(s=>ke(s,a,n)).flat(1/0)))]}var _a=(e,t)=>`Found multiple elements with the alt text of: ${t}`,Ua=(e,t)=>`Unable to find an element with the alt text of: ${t}`,[za,Ka,Ja,Ya,Qa]=w(f(de,_a,Ua)),Xa=(...e)=>za(...e),Za=(...e)=>Ka(...e),et=(...e)=>Ja(...e),at=(...e)=>Ya(...e),tt=(...e)=>Qa(...e);function ce(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(s=>qe(s,a,n)).flat(1/0)))]}var nt=(e,t)=>`Found multiple elements with the title of: ${t}`,st=(e,t)=>`Unable to find an element with the title of: ${t}`,[rt,ot,lt,it,dt]=w(f(ce,nt,st)),ct=(...e)=>rt(...e),ut=(...e)=>ot(...e),pt=(...e)=>lt(...e),mt=(...e)=>it(...e),ht=(...e)=>dt(...e);function ue(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>b(t,n).map(s=>He(s,a,n)).flat(1/0)))]}var yt=(e,t)=>`Found multiple elements with the test id of: ${t}`,gt=(e,t)=>`Unable to find an element with the test id of: ${t}`,[ft,bt,wt,vt,St]=w(f(ue,yt,gt)),Bt=(...e)=>ft(...e),Tt=(...e)=>bt(...e),At=(...e)=>wt(...e),xt=(...e)=>vt(...e),Rt=(...e)=>St(...e),X=/([^\S(\r\n|\r|\n)]*[\f\n\r\t\v]+)/.source;function Et(e){return e.replace(new RegExp(`${X}.*${X}{2,}`,"g"),"")}function kt(...e){let[t,a,n]=e,s=Pt(n?.filterNode||qt);return n==null&&(n={}),n.plugins==null&&(n.plugins=[]),n.plugins.push(s),g(()=>De(t,a,{...n,plugins:[s]}))}function pe(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qt(e){return e.nodeType!==K&&(e.nodeType!==he||!e.matches(ae().defaultIgnore))}var Ht=(e,t,a,n,s,o,l)=>{let p=n+a.indent,h=a.colors;return e.map(y=>{let B=t[y],S=l(B,a,p,s,o);return typeof B!="string"&&(S.indexOf(`
`)!==-1&&(S=a.spacingOuter+p+S+a.spacingOuter+n),S="{"+S+"}"),a.spacingInner+n+h.prop.open+y+h.prop.close+"="+h.value.open+S+h.value.close}).join("")},Dt=3,Wt=(e,t,a,n,s,o)=>Et(e.map(l=>{let p=typeof l=="string"?me(l,t):o(l,t,a,n,s);return p===""&&typeof l=="object"&&l!=null&&l.nodeType!==Dt?"":t.spacingOuter+a+p}).join("")),me=(e,t)=>{let a=t.colors.content;return a.open+pe(e)+a.close},Mt=(e,t)=>{let a=t.colors.comment;return a.open+"<!--"+pe(e)+"-->"+a.close},Ct=(e,t,a,n,s)=>{let o=n.colors.tag;return o.open+"<"+e+(t&&o.close+t+n.spacingOuter+s+o.open)+(a?">"+o.close+a+n.spacingOuter+s+o.open+"</"+e:(t&&!n.min?"":" ")+"/")+">"+o.close},Vt=(e,t)=>{let a=t.colors.tag;return a.open+"<"+e+a.close+" …"+a.open+" />"+a.close},he=1,ye=3,K=8,ge=11,It=/^((HTML|SVG)\w*)?Element$/,Lt=e=>{var t;let a=((t=e?.constructor)==null?void 0:t.name)||"",{nodeType:n,tagName:s}=e,o=typeof s=="string"&&s.includes("-")||typeof e.hasAttribute=="function"&&e.hasAttribute("is")||e instanceof HTMLElement;return n===he&&(It.test(a)||o)||n===ye&&a==="Text"||n===K&&a==="Comment"||n===ge};function Ft(e){return e.nodeType===ye}function jt(e){return e.nodeType===K}function Z(e){return e.nodeType===ge}function Pt(e){function t(a){let n=Array.prototype.slice.call(a.childNodes||a.children);return"shadowRoot"in a&&a.shadowRoot!=null&&a.shadowRoot.mode!=="closed"&&n.unshift(a.shadowRoot),n.filter(e)}return{test:a=>a?.constructor&&Lt(a),serialize:(a,n,s,o,l,p)=>{if(Ft(a))return me(a.data,n);if(jt(a))return Mt(a.data,n);let h="DocumentFragment";return"tagName"in a&&a.tagName?h=a.tagName.toLowerCase():a instanceof ShadowRoot&&(h="ShadowRoot"),++o>n.maxDepth?Vt(h,n):Ct(h,Ht(Z(a)?[]:Array.from(a.attributes).map(y=>y.name).sort(),Z(a)?{}:Array.from(a.attributes).reduce((y,B)=>(y[B.name]=B.value,y),{}),n,s+n.indent,o,l,p),Wt(t(a),n,s+n.indent,o,l,p),n,s)}}}({...Se});var Ot={...ve,...te};function Nt(e){let t=we(e,Ot);return{...t,queryAllByShadowRole:(...a)=>t.queryAllByShadowRole(...a),queryByShadowRole:(...a)=>t.queryByShadowRole(...a),getAllByShadowRole:(...a)=>t.getAllByShadowRole(...a),getByShadowRole:(...a)=>t.getByShadowRole(...a),findAllByShadowRole:(...a)=>t.findAllByShadowRole(...a),findByShadowRole:(...a)=>t.findByShadowRole(...a),queryAllByShadowLabelText:(...a)=>t.queryAllByShadowLabelText(...a),queryByShadowLabelText:(...a)=>t.queryByShadowLabelText(...a),getAllByShadowLabelText:(...a)=>t.getAllByShadowLabelText(...a),getByShadowLabelText:(...a)=>t.getByShadowLabelText(...a),findAllByShadowLabelText:(...a)=>t.findAllByShadowLabelText(...a),findByShadowLabelText:(...a)=>t.findByShadowLabelText(...a),queryAllByShadowPlaceholderText:(...a)=>t.queryAllByShadowPlaceholderText(...a),queryByShadowPlaceholderText:(...a)=>t.queryByShadowPlaceholderText(...a),getAllByShadowPlaceholderText:(...a)=>t.getAllByShadowPlaceholderText(...a),getByShadowPlaceholderText:(...a)=>t.getByShadowPlaceholderText(...a),findAllByShadowPlaceholderText:(...a)=>t.findAllByShadowPlaceholderText(...a),findByShadowPlaceholderText:(...a)=>t.findByShadowPlaceholderText(...a),queryAllByShadowText:(...a)=>t.queryAllByShadowText(...a),queryByShadowText:(...a)=>t.queryByShadowText(...a),getAllByShadowText:(...a)=>t.getAllByShadowText(...a),getByShadowText:(...a)=>t.getByShadowText(...a),findAllByShadowText:(...a)=>t.findAllByShadowText(...a),findByShadowText:(...a)=>t.findByShadowText(...a),queryAllByShadowDisplayValue:(...a)=>t.queryAllByShadowDisplayValue(...a),queryByShadowDisplayValue:(...a)=>t.queryByShadowDisplayValue(...a),getAllByShadowDisplayValue:(...a)=>t.getAllByShadowDisplayValue(...a),getByShadowDisplayValue:(...a)=>t.getByShadowDisplayValue(...a),findAllByShadowDisplayValue:(...a)=>t.findAllByShadowDisplayValue(...a),findByShadowDisplayValue:(...a)=>t.findByShadowDisplayValue(...a),queryAllByShadowAltText:(...a)=>t.queryAllByShadowAltText(...a),queryByShadowAltText:(...a)=>t.queryByShadowAltText(...a),getAllByShadowAltText:(...a)=>t.getAllByShadowAltText(...a),getByShadowAltText:(...a)=>t.getByShadowAltText(...a),findAllByShadowAltText:(...a)=>t.findAllByShadowAltText(...a),findByShadowAltText:(...a)=>t.findByShadowAltText(...a),queryAllByShadowTitle:(...a)=>t.queryAllByShadowTitle(...a),queryByShadowTitle:(...a)=>t.queryByShadowTitle(...a),getAllByShadowTitle:(...a)=>t.getAllByShadowTitle(...a),getByShadowTitle:(...a)=>t.getByShadowTitle(...a),findAllByShadowTitle:(...a)=>t.findAllByShadowTitle(...a),findByShadowTitle:(...a)=>t.findByShadowTitle(...a),queryAllByShadowTestId:(...a)=>t.queryAllByShadowTestId(...a),queryByShadowTestId:(...a)=>t.queryByShadowTestId(...a),getAllByShadowTestId:(...a)=>t.getAllByShadowTestId(...a),getByShadowTestId:(...a)=>t.getByShadowTestId(...a),findAllByShadowTestId:(...a)=>t.findAllByShadowTestId(...a),findByShadowTestId:(...a)=>t.findByShadowTestId(...a)}}Be({getElementError(e,t){let a=kt(t),n=new Error([e,`Ignored nodes: comments, ${ae().defaultIgnore}
${a}`].filter(Boolean).join(`

`));return n.name="ShadowDOMTestingLibraryElementError",n}});const{useArgs:Gt}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:r,fn:J,userEvent:U,waitFor:fe,within:c}=__STORYBOOK_MODULE_TEST__,$t={component:m,title:"Tester/RadioGroup",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{category:be.props}},children:{table:{disable:!0}},defaultValue:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(Y),mapping:Y},helpText:{table:{disable:!0}},hideLegend:{table:{disable:!0}},legend:{table:{disable:!0}},readOnly:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},selectedValue:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"},disabled:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},required:{table:{disable:!0}},onChange:{table:{disable:!0}},onBlur:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},u=e=>{const[,t]=Gt();return d.jsx(m,{...e,onChange:a=>{e.selectedValue?t({selectedValue:a.target.value}):e.defaultValue&&t({defaultValue:a.target.value})}})},v="annet",z="Type virksomhet",i={legend:z,children:[d.jsx(m.Radio,{value:"foretak",children:"Enkeltpersonsforetak"},"radioGroupRadio_1"),d.jsx(m.Radio,{value:"selskap",children:"Aksjeselskap"},"radioGroupRadio_2"),d.jsx(m.Radio,{value:"annet",children:"Annet"},"radioGroupRadio_3")]},T={render:u,name:"With Ref (FA1)",args:{...i,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=c(e).getByRole("group");await r(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},A={render:u,name:"With Attributes (FA2-5)",args:{...i,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=c(e).getByRole("group");await r(a).toHaveClass("dummyClassname"),await r(a).toHaveAttribute("id","htmlId"),await r(a).toHaveAttribute("lang","nb"),await r(a).toHaveAttribute("data-testid","123ID"),await r(a).toHaveAttribute("form","123form")}},x={render:u,name:"Defaults Variant Standard (A1, B1)",args:{...i},argTypes:{children:{table:{disable:!1}},legend:{table:{disable:!1}},variant:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=c(e),a=t.getByRole("group"),n=t.getAllByText(z)[0],s=t.getAllByRole("radio");await r(a).toBeInTheDocument(),await r(a.tagName).toBe("FIELDSET"),await r(n).toBeInTheDocument(),await r(n.tagName).toBe("LEGEND"),s.forEach(o=>{r(o).toHaveAttribute("name"),r(o).not.toHaveAttribute("aria-invalid")})}},R={render:u,name:"Variant Horizontal (A6)",args:{...i,variant:"horizontal"},argTypes:{variant:{table:{disable:!1}}}},E={render:u,name:"With HideLegend (B1)",args:{...i,hideLegend:!0},argTypes:{hideLegend:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getAllByText(z)[0];await r(a).toBeInTheDocument()}},k={render:u,name:"With SelectedValue (A3)",args:{...i,selectedValue:v,defaultValue:void 0},argTypes:{selectedValue:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=c(e).getByRole("radio",{checked:!0});await r(a).toHaveAttribute("value",v)}},q={render:u,name:"With DefaultValue (A3)",args:{...i,selectedValue:void 0,defaultValue:v},argTypes:{defaultValue:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("radio",{checked:!0});await r(a).toHaveAttribute("value",v)}},H={render:u,name:"With Disabled (A4 delvis)",args:{...i,disabled:!0,selectedValue:v,defaultValue:void 0,helpText:"Hjelpeknappen skal også være disabled"},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const t=c(e);t.getAllByRole("radio").forEach(s=>{r(s).toBeDisabled()});const n=t.getByRole("button");await r(n).toBeDisabled()}},D={render:u,name:"With Required (A7)",args:{...i,required:!0},argTypes:{required:{table:{disable:!1}}},play:async({canvasElement:e})=>{c(e).getAllByRole("radio").forEach(n=>{r(n).toBeRequired(),r(n).toHaveAttribute("aria-invalid","false")})}},W={render:u,name:"With Required And Mark (A7, A8)",args:{...i,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},M={render:u,name:"With Required And Mark And Legend As Markup (A7, A8)",args:{...i,legend:d.jsxs(d.Fragment,{children:[d.jsx(We,{as:"h4",level:3,children:z}),d.jsx("span",{children:"Med virksomhet så menes bla bla"})]}),required:!0,showRequiredMark:!0},argTypes:{showRequiredMark:{table:{disable:!1}}}},C={render:u,name:"With Name (B1)",args:{...i,name:"nameFraKonsument"},argTypes:{name:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{c(e).getAllByRole("radio").forEach(n=>{r(n).toHaveAttribute("name","nameFraKonsument")})}},V={render:u,name:"Without ErrorMessage (B4)",args:{...i},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=c(e),a=t.getAllByRole("generic")[6];await r(a).toBeInTheDocument(),await r(t.queryByText("Feilmelding")).not.toBeInTheDocument(),t.getAllByRole("radio").forEach(s=>{r(s).not.toHaveAttribute("aria-invalid","true"),r(s).not.toHaveAttribute("aria-describedby")})},parameters:{imageSnapshot:{disableSnapshot:!0}}},I={render:u,name:"With ErrorMessage (B4, A3)",args:{...i,errorMessage:"Feilmelding",selectedValue:v,defaultValue:void 0},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const t=c(e),a=t.getAllByRole("radio"),n=t.getByText("Feilmelding"),s=t.getAllByRole("generic")[6];await r(n).toBeInTheDocument(),await r(s).toBeInTheDocument(),a.forEach(o=>{r(o).toHaveAttribute("aria-invalid","true"),r(o).toHaveAttribute("aria-describedby",s.id)})}},L={render:u,name:"With ErrorMessage And AriaDescribedby (B4)",args:{...i,children:[d.jsx(m.Radio,{ariaDescribedby:"konsumentId",children:"Enkeltpersonsforetak"},"radioGroupRadio_1")],errorMessage:"Feilmelding"},argTypes:{},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=c(e),a=t.getAllByRole("generic")[4],n=t.getByRole("radio");r(n).toHaveAttribute("aria-describedby",`konsumentId ${a.id}`)}},F={render:u,name:"With HelpText (A1)",args:{...i,helpText:"Vi trenger å vite din type virksomhet."},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await r(a).toBeInTheDocument(),await U.click(a)}},j={name:"With Description (A1)",args:{...i,description:"Vi trenger å vite din type virksomhet."},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByText("Vi trenger å vite din type virksomhet.",{selector:":not([aria-hidden='true'])"});await r(a).toBeInTheDocument()}},_t=e=>{const[t,a]=ee.useState("Aksjeselskap");return d.jsx(m,{...e,onChange:n=>{a("Radio har blitt klikket på"),e.onChange&&e.onChange(n)},children:d.jsx(m.Radio,{value:"selskap",children:t})})},Ut=e=>{const[t,a]=ee.useState(""),s=document.querySelector("radiogroup-customelement")?.shadowRoot;return d.jsxs(m,{...e,legend:"Voksen eller barn",shadowRootNode:s??void 0,onChange:o=>{e.onChange&&e.onChange(o)},onBlur:o=>{a("Radiogruppe har mistet fokus (onBlur)"),e.onBlur&&e.onBlur(o)},children:[d.jsx(m.Radio,{value:"voksen",children:"Voksen"}),d.jsx(m.Radio,{value:"barn",children:"Barn"}),d.jsxs("label",{children:["FeltForFokus",d.jsx("input",{type:"text",value:"Annen input som skal få fokus",onChange:J()})]}),d.jsx("div",{children:t})]})},P={render:_t,name:"With EventHandlers",args:{...i,onChange:J()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:t})=>{const n=c(t).getByRole("radio");await r(n).toBeInTheDocument(),await r(n).not.toBeChecked(),await U.click(n),await r(n).toBeChecked(),await fe(()=>r(e.onChange).toHaveBeenCalledWith(r.objectContaining({target:r.objectContaining({value:"selskap"})})))}},O={render:Ut,name:"With onBlur Event",decorators:[Me],args:{...i,onBlur:J()},parameters:{imageSnapshot:{disableSnapshot:!0},customElementName:"radiogroup-customelement"},play:async({args:e,canvasElement:t})=>{const a=c(t);await r(a.queryByRole("radio")).not.toBeInTheDocument();const n=t.querySelector("radiogroup-customelement");await r(n).toBeInTheDocument();const s=Nt(t),l=(await s.findAllByShadowRole("radio"))?.find(y=>y.value==="voksen");l&&await U.click(l),await r(l).toBeChecked();const p=await s.findByShadowRole("radio",{name:"Barn"});await U.click(p);const h=s.getByShadowLabelText("FeltForFokus",{selector:"input"});await U.click(h),await fe(()=>r(e.onBlur).toHaveBeenCalled())}},N={name:"With onHelpToggle Event",args:{...i,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},G={name:"With Custom ClassNames (FA3)",args:{...i,classNames:{legend:"dummyClassname",errorMessage:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:"feil"},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=c(e),a=e.querySelector("[id^= radioErrorId]>div");await r(a).toHaveClass("dummyClassname"),await r(t.getByText("beskrivelse")).toHaveClass("dummyClassname")}},$={name:"Read Only",args:{...i,readOnly:!0,selectedValue:v,defaultValue:void 0,description:"Dette er en radiogruppe i read only modus"},argTypes:{readOnly:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=c(e).getAllByRole("radio");for(const n of a)await r(n).toHaveAttribute("data-read-only","true"),r(n).toHaveAccessibleName(/skrivebeskyttet$/)}},_={name:"Read Only And Description",args:{...i,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},render:e=>d.jsxs(m,{...e,children:[d.jsx(m.Radio,{description:"Dette er en radiogruppe i read only modus",children:"Enkeltpersonsforetak"}),d.jsx(m.Radio,{description:"Dette er en radiogruppe i read only modus",children:"Aksjeselskap"})]})};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...A.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...q.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...H.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...D.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...W.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...M.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...V.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...I.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...L.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...F.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...j.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...N.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...G.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...$.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,..._.parameters?.docs?.source}}};const zt=["WithRef","WithAttributes","Defaults","VariantHorizontal","WithHideLegend","WithSelectedValue","WithDefaultValue","WithDisabled","WithRequired","WithRequiredAndMark","WithRequiredAndMarkAndLegendAsMarkup","WithName","WithoutErrorMessage","WithErrorMessage","WithErrorMessageAndAriaDescribedby","WithHelpText","WithDescription","WithEventHandlers","WithOnBlurEvent","WithHelpToggleEvent","WithCustomClassNames","ReadOnly","ReadOnlyAndDescription"],en=Object.freeze(Object.defineProperty({__proto__:null,Defaults:x,ReadOnly:$,ReadOnlyAndDescription:_,VariantHorizontal:R,WithAttributes:A,WithCustomClassNames:G,WithDefaultValue:q,WithDescription:j,WithDisabled:H,WithErrorMessage:I,WithErrorMessageAndAriaDescribedby:L,WithEventHandlers:P,WithHelpText:F,WithHelpToggleEvent:N,WithHideLegend:E,WithName:C,WithOnBlurEvent:O,WithRef:T,WithRequired:D,WithRequiredAndMark:W,WithRequiredAndMarkAndLegendAsMarkup:M,WithSelectedValue:k,WithoutErrorMessage:V,__namedExportsOrder:zt,default:$t},Symbol.toStringTag,{value:"Module"}));export{en as R};
//# sourceMappingURL=RadioGroup.test.stories-B7zx5RwO.js.map
