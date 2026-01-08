import{e as ge,j as d,r as X}from"./iframe-Br1Xu9zr.js";import{g as fe,q as we,b as f,s as be,c as Se,a as Be,d as ve,e as Te,f as Ae,h as xe,i as Re,j as Ee,k as qe,l as Z,p as ke}from"./dom.esm-a8G5HLmh.js";import{c as m}from"./index-B55DkYFu.js";import{H as He}from"./index-DCwxX22m.js";import{w as We}from"./webcomponent-decorator-BLN6dAgk.js";import{S as K}from"./icon.systems-BmhPSTgm.js";var Me=Object.defineProperty,Ce=(e,t)=>{for(var a in t)Me(e,a,{get:t[a],enumerable:!0})},ee={};Ce(ee,{findAllByShadowAltText:()=>Za,findAllByShadowDisplayValue:()=>Na,findAllByShadowLabelText:()=>ra,findAllByShadowPlaceholderText:()=>fa,findAllByShadowRole:()=>ze,findAllByShadowTestId:()=>Tt,findAllByShadowText:()=>ka,findAllByShadowTitle:()=>ut,findByShadowAltText:()=>et,findByShadowDisplayValue:()=>Oa,findByShadowLabelText:()=>oa,findByShadowPlaceholderText:()=>wa,findByShadowRole:()=>Ke,findByShadowTestId:()=>At,findByShadowText:()=>Ha,findByShadowTitle:()=>ht,getAllByShadowAltText:()=>Qa,getAllByShadowDisplayValue:()=>Pa,getAllByShadowLabelText:()=>na,getAllByShadowPlaceholderText:()=>ya,getAllByShadowRole:()=>Ge,getAllByShadowTestId:()=>Bt,getAllByShadowText:()=>Ea,getAllByShadowTitle:()=>dt,getByShadowAltText:()=>Xa,getByShadowDisplayValue:()=>ja,getByShadowLabelText:()=>sa,getByShadowPlaceholderText:()=>ga,getByShadowRole:()=>Ue,getByShadowTestId:()=>vt,getByShadowText:()=>qa,getByShadowTitle:()=>ct,queryAllByShadowAltText:()=>le,queryAllByShadowDisplayValue:()=>oe,queryAllByShadowLabelText:()=>ne,queryAllByShadowPlaceholderText:()=>se,queryAllByShadowRole:()=>te,queryAllByShadowTestId:()=>de,queryAllByShadowText:()=>re,queryAllByShadowTitle:()=>ie,queryByShadowAltText:()=>Ja,queryByShadowDisplayValue:()=>Fa,queryByShadowLabelText:()=>ta,queryByShadowPlaceholderText:()=>ma,queryByShadowRole:()=>$e,queryByShadowTestId:()=>St,queryByShadowText:()=>Ra,queryByShadowTitle:()=>it});Ve();function De(){Ie()}function Y(){HTMLSlotElement.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll}function g(e){De();try{let t=e();return typeof t=="object"&&"finally"in t&&typeof t.finally=="function"&&t.finally(()=>Y()),t}finally{Y()}}function Ve(){if(typeof ShadowRoot>"u")throw"Your environment does not support shadow roots.";ShadowRoot.prototype.matches==null&&Object.defineProperties(ShadowRoot.prototype,{matches:{get(){return function(e){return e.trim()==="*"?!0:!!this.querySelector(e)}}}}),ShadowRoot.prototype.outerHTML==null&&Object.defineProperties(ShadowRoot.prototype,{outerHTML:{get(){return this.innerHTML}}})}function Ie(){HTMLSlotElement.prototype.querySelectorAll=function(e){let t=HTMLElement.prototype.querySelectorAll,a=[];return this.assignedElements({flatten:!0}).forEach(n=>{let s=n,o=document.createElement("div");o.appendChild(s.cloneNode(!1)),o.querySelector(e)&&a.push(s),a=a.concat(Array.from(s.querySelectorAll(e)))}),a.length==0&&(a=Array.from(t.call(this,e))),[...new Set(a)]}}function w(e,t={shallow:!1}){return ae(e,"*",t)}function ae(e,t,a={shallow:!1},n=[],s=[]){return e instanceof Document&&(e=document.documentElement),n=[e],s.push(e),e instanceof HTMLElement&&e.shadowRoot!=null&&e.shadowRoot.mode!=="closed"&&(s.push(e.shadowRoot),n.push(e.shadowRoot)),n.forEach(o=>{o.querySelectorAll(t).forEach(l=>{if(l.shadowRoot==null||l.shadowRoot.mode==="closed"){s.push(l);return}if(s.push(l.shadowRoot),a.shallow===!0){l.shadowRoot.querySelectorAll(t).forEach(h=>{s.push(h)});return}l.shadowRoot.querySelectorAll(t).forEach(h=>{s.push(h),n.push(h)}),ae(l.shadowRoot,t,a,n,s)})}),[...new Set(s)]}function b(e){return e.map(t=>(...a)=>{let[n,s,o,...l]=a;return o==null&&(o={}),o.suggest=!1,t(n,s,o,...l)})}function te(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>w(t,n).map(s=>Be(s,a,n)).flat(1/0)))]}var Le=(e,t)=>`Found multiple elements with the role of: ${t}`,Fe=(e,t)=>`Unable to find an element with the role of: ${t}`,[Pe,je,Ne,Oe,_e]=b(f(te,Le,Fe)),$e=(...e)=>Pe(...e),Ge=(...e)=>je(...e),Ue=(...e)=>Ne(...e),ze=(...e)=>Oe(...e),Ke=(...e)=>_e(...e);function ne(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>w(t,n).map(s=>ve(s,a,n)).flat(1/0)))]}var Ye=(e,t)=>`Found multiple elements with the label text of: ${t}`,Je=(e,t)=>`Unable to find an element with the label text of: ${t}`,[Qe,Xe,Ze,ea,aa]=b(f(ne,Ye,Je)),ta=(...e)=>Qe(...e),na=(...e)=>Xe(...e),sa=(...e)=>Ze(...e),ra=(...e)=>ea(...e),oa=(...e)=>aa(...e);function se(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>w(t,n).map(s=>Te(s,a,n)).flat(1/0)))]}var la=(e,t)=>`Found multiple elements with the placeholder text of: ${t}`,ia=(e,t)=>`Unable to find an element with the placeholder text of: ${t}`,[da,ca,ua,ha,pa]=b(f(se,la,ia)),ma=(...e)=>da(...e),ya=(...e)=>ca(...e),ga=(...e)=>ua(...e),fa=(...e)=>ha(...e),wa=(...e)=>pa(...e);function re(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>w(t,n).map(s=>Ae(s,a,n)).flat(1/0)))]}var ba=(e,t)=>`Found multiple elements with the text of: ${t}`,Sa=(e,t)=>`Unable to find an element with the text of: ${t}`,[Ba,va,Ta,Aa,xa]=b(f(re,ba,Sa)),Ra=(...e)=>Ba(...e),Ea=(...e)=>va(...e),qa=(...e)=>Ta(...e),ka=(...e)=>Aa(...e),Ha=(...e)=>xa(...e);function oe(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>w(t,n).map(s=>xe(s,a,n)).flat(1/0)))]}var Wa=(e,t)=>`Found multiple elements with the display value of: ${t}`,Ma=(e,t)=>`Unable to find an element with the display value of: ${t}`,[Ca,Da,Va,Ia,La]=b(f(oe,Wa,Ma)),Fa=(...e)=>Ca(...e),Pa=(...e)=>Da(...e),ja=(...e)=>Va(...e),Na=(...e)=>Ia(...e),Oa=(...e)=>La(...e);function le(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>w(t,n).map(s=>Re(s,a,n)).flat(1/0)))]}var _a=(e,t)=>`Found multiple elements with the alt text of: ${t}`,$a=(e,t)=>`Unable to find an element with the alt text of: ${t}`,[Ga,Ua,za,Ka,Ya]=b(f(le,_a,$a)),Ja=(...e)=>Ga(...e),Qa=(...e)=>Ua(...e),Xa=(...e)=>za(...e),Za=(...e)=>Ka(...e),et=(...e)=>Ya(...e);function ie(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>w(t,n).map(s=>Ee(s,a,n)).flat(1/0)))]}var at=(e,t)=>`Found multiple elements with the title of: ${t}`,tt=(e,t)=>`Unable to find an element with the title of: ${t}`,[nt,st,rt,ot,lt]=b(f(ie,at,tt)),it=(...e)=>nt(...e),dt=(...e)=>st(...e),ct=(...e)=>rt(...e),ut=(...e)=>ot(...e),ht=(...e)=>lt(...e);function de(...e){let[t,a,n]=e;return n==null&&(n={}),n.suggest=!1,[...new Set(g(()=>w(t,n).map(s=>qe(s,a,n)).flat(1/0)))]}var pt=(e,t)=>`Found multiple elements with the test id of: ${t}`,mt=(e,t)=>`Unable to find an element with the test id of: ${t}`,[yt,gt,ft,wt,bt]=b(f(de,pt,mt)),St=(...e)=>yt(...e),Bt=(...e)=>gt(...e),vt=(...e)=>ft(...e),Tt=(...e)=>wt(...e),At=(...e)=>bt(...e),J=/([^\S(\r\n|\r|\n)]*[\f\n\r\t\v]+)/.source;function xt(e){return e.replace(new RegExp(`${J}.*${J}{2,}`,"g"),"")}function Rt(...e){let[t,a,n]=e,s=Ft(n?.filterNode||Et);return n==null&&(n={}),n.plugins==null&&(n.plugins=[]),n.plugins.push(s),g(()=>ke(t,a,{...n,plugins:[s]}))}function ce(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Et(e){return e.nodeType!==U&&(e.nodeType!==he||!e.matches(Z().defaultIgnore))}var qt=(e,t,a,n,s,o,l)=>{let h=n+a.indent,p=a.colors;return e.map(y=>{let v=t[y],S=l(v,a,h,s,o);return typeof v!="string"&&(S.indexOf(`
`)!==-1&&(S=a.spacingOuter+h+S+a.spacingOuter+n),S="{"+S+"}"),a.spacingInner+n+p.prop.open+y+p.prop.close+"="+p.value.open+S+p.value.close}).join("")},kt=3,Ht=(e,t,a,n,s,o)=>xt(e.map(l=>{let h=typeof l=="string"?ue(l,t):o(l,t,a,n,s);return h===""&&typeof l=="object"&&l!=null&&l.nodeType!==kt?"":t.spacingOuter+a+h}).join("")),ue=(e,t)=>{let a=t.colors.content;return a.open+ce(e)+a.close},Wt=(e,t)=>{let a=t.colors.comment;return a.open+"<!--"+ce(e)+"-->"+a.close},Mt=(e,t,a,n,s)=>{let o=n.colors.tag;return o.open+"<"+e+(t&&o.close+t+n.spacingOuter+s+o.open)+(a?">"+o.close+a+n.spacingOuter+s+o.open+"</"+e:(t&&!n.min?"":" ")+"/")+">"+o.close},Ct=(e,t)=>{let a=t.colors.tag;return a.open+"<"+e+a.close+" …"+a.open+" />"+a.close},he=1,pe=3,U=8,me=11,Dt=/^((HTML|SVG)\w*)?Element$/,Vt=e=>{var t;let a=((t=e?.constructor)==null?void 0:t.name)||"",{nodeType:n,tagName:s}=e,o=typeof s=="string"&&s.includes("-")||typeof e.hasAttribute=="function"&&e.hasAttribute("is")||e instanceof HTMLElement;return n===he&&(Dt.test(a)||o)||n===pe&&a==="Text"||n===U&&a==="Comment"||n===me};function It(e){return e.nodeType===pe}function Lt(e){return e.nodeType===U}function Q(e){return e.nodeType===me}function Ft(e){function t(a){let n=Array.prototype.slice.call(a.childNodes||a.children);return"shadowRoot"in a&&a.shadowRoot!=null&&a.shadowRoot.mode!=="closed"&&n.unshift(a.shadowRoot),n.filter(e)}return{test:a=>a?.constructor&&Vt(a),serialize:(a,n,s,o,l,h)=>{if(It(a))return ue(a.data,n);if(Lt(a))return Wt(a.data,n);let p="DocumentFragment";return"tagName"in a&&a.tagName?p=a.tagName.toLowerCase():a instanceof ShadowRoot&&(p="ShadowRoot"),++o>n.maxDepth?Ct(p,n):Mt(p,qt(Q(a)?[]:Array.from(a.attributes).map(y=>y.name).sort(),Q(a)?{}:Array.from(a.attributes).reduce((y,v)=>(y[v.name]=v.value,y),{}),n,s+n.indent,o,l,h),Ht(t(a),n,s+n.indent,o,l,h),n,s)}}}({...be});var Pt={...we,...ee};function jt(e){let t=fe(e,Pt);return{...t,queryAllByShadowRole:(...a)=>t.queryAllByShadowRole(...a),queryByShadowRole:(...a)=>t.queryByShadowRole(...a),getAllByShadowRole:(...a)=>t.getAllByShadowRole(...a),getByShadowRole:(...a)=>t.getByShadowRole(...a),findAllByShadowRole:(...a)=>t.findAllByShadowRole(...a),findByShadowRole:(...a)=>t.findByShadowRole(...a),queryAllByShadowLabelText:(...a)=>t.queryAllByShadowLabelText(...a),queryByShadowLabelText:(...a)=>t.queryByShadowLabelText(...a),getAllByShadowLabelText:(...a)=>t.getAllByShadowLabelText(...a),getByShadowLabelText:(...a)=>t.getByShadowLabelText(...a),findAllByShadowLabelText:(...a)=>t.findAllByShadowLabelText(...a),findByShadowLabelText:(...a)=>t.findByShadowLabelText(...a),queryAllByShadowPlaceholderText:(...a)=>t.queryAllByShadowPlaceholderText(...a),queryByShadowPlaceholderText:(...a)=>t.queryByShadowPlaceholderText(...a),getAllByShadowPlaceholderText:(...a)=>t.getAllByShadowPlaceholderText(...a),getByShadowPlaceholderText:(...a)=>t.getByShadowPlaceholderText(...a),findAllByShadowPlaceholderText:(...a)=>t.findAllByShadowPlaceholderText(...a),findByShadowPlaceholderText:(...a)=>t.findByShadowPlaceholderText(...a),queryAllByShadowText:(...a)=>t.queryAllByShadowText(...a),queryByShadowText:(...a)=>t.queryByShadowText(...a),getAllByShadowText:(...a)=>t.getAllByShadowText(...a),getByShadowText:(...a)=>t.getByShadowText(...a),findAllByShadowText:(...a)=>t.findAllByShadowText(...a),findByShadowText:(...a)=>t.findByShadowText(...a),queryAllByShadowDisplayValue:(...a)=>t.queryAllByShadowDisplayValue(...a),queryByShadowDisplayValue:(...a)=>t.queryByShadowDisplayValue(...a),getAllByShadowDisplayValue:(...a)=>t.getAllByShadowDisplayValue(...a),getByShadowDisplayValue:(...a)=>t.getByShadowDisplayValue(...a),findAllByShadowDisplayValue:(...a)=>t.findAllByShadowDisplayValue(...a),findByShadowDisplayValue:(...a)=>t.findByShadowDisplayValue(...a),queryAllByShadowAltText:(...a)=>t.queryAllByShadowAltText(...a),queryByShadowAltText:(...a)=>t.queryByShadowAltText(...a),getAllByShadowAltText:(...a)=>t.getAllByShadowAltText(...a),getByShadowAltText:(...a)=>t.getByShadowAltText(...a),findAllByShadowAltText:(...a)=>t.findAllByShadowAltText(...a),findByShadowAltText:(...a)=>t.findByShadowAltText(...a),queryAllByShadowTitle:(...a)=>t.queryAllByShadowTitle(...a),queryByShadowTitle:(...a)=>t.queryByShadowTitle(...a),getAllByShadowTitle:(...a)=>t.getAllByShadowTitle(...a),getByShadowTitle:(...a)=>t.getByShadowTitle(...a),findAllByShadowTitle:(...a)=>t.findAllByShadowTitle(...a),findByShadowTitle:(...a)=>t.findByShadowTitle(...a),queryAllByShadowTestId:(...a)=>t.queryAllByShadowTestId(...a),queryByShadowTestId:(...a)=>t.queryByShadowTestId(...a),getAllByShadowTestId:(...a)=>t.getAllByShadowTestId(...a),getByShadowTestId:(...a)=>t.getByShadowTestId(...a),findAllByShadowTestId:(...a)=>t.findAllByShadowTestId(...a),findByShadowTestId:(...a)=>t.findByShadowTestId(...a)}}Se({getElementError(e,t){let a=Rt(t),n=new Error([e,`Ignored nodes: comments, ${Z().defaultIgnore}
${a}`].filter(Boolean).join(`

`));return n.name="ShadowDOMTestingLibraryElementError",n}});const{useArgs:Nt}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:r,fn:z,userEvent:$,waitFor:ye,within:c}=__STORYBOOK_MODULE_TEST__,Ot={component:m,title:"Tester/RadioGroup",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{category:ge.props}},children:{table:{disable:!0}},defaultValue:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(K),mapping:K},helpText:{table:{disable:!0}},hideLegend:{table:{disable:!0}},legend:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},selectedValue:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"},disabled:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},required:{table:{disable:!0}},onChange:{table:{disable:!0}},onBlur:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},u=e=>{const[,t]=Nt();return d.jsx(m,{...e,onChange:a=>{e.selectedValue?t({selectedValue:a.target.value}):e.defaultValue&&t({defaultValue:a.target.value})}})},B="annet",G="Type virksomhet",i={legend:G,children:[d.jsx(m.Radio,{value:"foretak",children:"Enkeltpersonsforetak"},"radioGroupRadio_1"),d.jsx(m.Radio,{value:"selskap",children:"Aksjeselskap"},"radioGroupRadio_2"),d.jsx(m.Radio,{value:"annet",children:"Annet"},"radioGroupRadio_3")]},T={render:u,name:"With Ref (FA1)",args:{...i,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=c(e).getByRole("group");await r(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},A={render:u,name:"With Attributes (FA2-5)",args:{...i,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=c(e).getByRole("group");await r(a).toHaveClass("dummyClassname"),await r(a).toHaveAttribute("id","htmlId"),await r(a).toHaveAttribute("lang","nb"),await r(a).toHaveAttribute("data-testid","123ID"),await r(a).toHaveAttribute("form","123form")}},x={render:u,name:"Defaults Variant Standard (A1, B1)",args:{...i},argTypes:{children:{table:{disable:!1}},legend:{table:{disable:!1}},variant:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=c(e),a=t.getByRole("group"),n=t.getAllByText(G)[0],s=t.getAllByRole("radio");await r(a).toBeInTheDocument(),await r(a.tagName).toBe("FIELDSET"),await r(n).toBeInTheDocument(),await r(n.tagName).toBe("LEGEND"),s.forEach(o=>{r(o).toHaveAttribute("name"),r(o).toHaveAttribute("aria-invalid","false")})}},R={render:u,name:"Variant Horizontal (A6)",args:{...i,variant:"horizontal"},argTypes:{variant:{table:{disable:!1}}}},E={render:u,name:"With HideLegend (B1)",args:{...i,hideLegend:!0},argTypes:{hideLegend:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getAllByText(G)[0];await r(a).toBeInTheDocument()}},q={render:u,name:"With SelectedValue (A3)",args:{...i,selectedValue:B,defaultValue:void 0},argTypes:{selectedValue:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("radio",{checked:!0});await r(a).toHaveAttribute("value",B)}},k={render:u,name:"With DefaultValue (A3)",args:{...i,selectedValue:void 0,defaultValue:B},argTypes:{defaultValue:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("radio",{checked:!0});await r(a).toHaveAttribute("value",B)}},H={render:u,name:"With Disabled (A4 delvis)",args:{...i,disabled:!0,selectedValue:B,defaultValue:void 0},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{c(e).getAllByRole("radio").forEach(n=>{r(n).toBeDisabled()})}},W={render:u,name:"With Required (A7)",args:{...i,required:!0},argTypes:{required:{table:{disable:!1}}},play:async({canvasElement:e})=>{c(e).getAllByRole("radio").forEach(n=>{r(n).toBeRequired()})}},M={render:u,name:"With Required And Mark (A7, A8)",args:{...i,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},C={render:u,name:"With Required And Mark And Legend As Markup (A7, A8)",args:{...i,legend:d.jsxs(d.Fragment,{children:[d.jsx(He,{as:"h4",level:3,children:G}),d.jsx("span",{children:"Med virksomhet så menes bla bla"})]}),required:!0,showRequiredMark:!0},argTypes:{showRequiredMark:{table:{disable:!1}}}},D={render:u,name:"With Name (B1)",args:{...i,name:"nameFraKonsument"},argTypes:{name:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{c(e).getAllByRole("radio").forEach(n=>{r(n).toHaveAttribute("name","nameFraKonsument")})}},V={render:u,name:"Without ErrorMessage (B4)",args:{...i},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=c(e),a=t.getAllByRole("generic")[6];await r(a).toBeInTheDocument(),await r(t.queryByText("Feilmelding")).not.toBeInTheDocument(),t.getAllByRole("radio").forEach(s=>{r(s).not.toHaveAttribute("aria-invalid","true"),r(s).not.toHaveAttribute("aria-describedby")})},parameters:{imageSnapshot:{disableSnapshot:!0}}},I={render:u,name:"With ErrorMessage (B4, A3)",args:{...i,errorMessage:"Feilmelding",selectedValue:B,defaultValue:void 0},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=c(e),a=t.getAllByRole("radio"),n=t.getByText("Feilmelding"),s=t.getAllByRole("generic")[6];await r(n).toBeInTheDocument(),await r(s).toBeInTheDocument(),a.forEach(o=>{r(o).toHaveAttribute("aria-invalid","true"),r(o).toHaveAttribute("aria-describedby",s.id)})}},L={render:u,name:"With ErrorMessage And AriaDescribedby (B4)",args:{...i,children:[d.jsx(m.Radio,{ariaDescribedby:"konsumentId",children:"Enkeltpersonsforetak"},"radioGroupRadio_1")],errorMessage:"Feilmelding"},argTypes:{},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=c(e),a=t.getAllByRole("generic")[4],n=t.getByRole("radio");r(n).toHaveAttribute("aria-describedby",`konsumentId ${a.id}`)}},F={render:u,name:"With HelpText (A1)",args:{...i,helpText:"Vi trenger å vite din type virksomhet."},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button",{description:G});await r(a).toBeInTheDocument(),await $.click(a)}},P={name:"With Description (A1)",args:{...i,description:"Vi trenger å vite din type virksomhet."},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByText("Vi trenger å vite din type virksomhet.",{selector:":not([aria-hidden='true'])"});await r(a).toBeInTheDocument()}},_t=e=>{const[t,a]=X.useState("Aksjeselskap");return d.jsx(m,{...e,onChange:n=>{a("Radio har blitt klikket på"),e.onChange&&e.onChange(n)},children:d.jsx(m.Radio,{value:"selskap",children:t})})},$t=e=>{const[t,a]=X.useState(""),s=document.querySelector("radiogroup-customelement")?.shadowRoot;return d.jsxs(m,{...e,legend:"Voksen eller barn",shadowRootNode:s??void 0,onChange:o=>{e.onChange&&e.onChange(o)},onBlur:o=>{a("Radiogruppe har mistet fokus (onBlur)"),e.onBlur&&e.onBlur(o)},children:[d.jsx(m.Radio,{value:"voksen",children:"Voksen"}),d.jsx(m.Radio,{value:"barn",children:"Barn"}),d.jsxs("label",{children:["FeltForFokus",d.jsx("input",{type:"text",value:"Annen input som skal få fokus",onChange:z()})]}),d.jsx("div",{children:t})]})},j={render:_t,name:"With EventHandlers",args:{...i,onChange:z()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:t})=>{const n=c(t).getByRole("radio");await r(n).toBeInTheDocument(),await r(n).not.toBeChecked(),await $.click(n),await r(n).toBeChecked(),await ye(()=>r(e.onChange).toHaveBeenCalledWith(r.objectContaining({target:r.objectContaining({value:"selskap"})})))}},N={render:$t,name:"With onBlur Event",decorators:[We],args:{...i,onBlur:z()},parameters:{imageSnapshot:{disableSnapshot:!0},customElementName:"radiogroup-customelement"},play:async({args:e,canvasElement:t})=>{const a=c(t);await r(a.queryByRole("radio")).not.toBeInTheDocument();const n=t.querySelector("radiogroup-customelement");await r(n).toBeInTheDocument();const s=jt(t),l=(await s.findAllByShadowRole("radio"))?.find(y=>y.value==="voksen");l&&await $.click(l),await r(l).toBeChecked();const h=await s.findByShadowRole("radio",{name:"Barn"});await $.click(h);const p=s.getByShadowLabelText("FeltForFokus",{selector:"input"});await $.click(p),await ye(()=>r(e.onBlur).toHaveBeenCalled())}},O={name:"With onHelpToggle Event",args:{...i,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},_={name:"With Custom ClassNames (FA3)",args:{...i,classNames:{legend:"dummyClassname",errorMessage:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:"feil"},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=c(e),a=e.querySelector("[id^= radioErrorId]>div");await r(a).toHaveClass("dummyClassname"),await r(t.getByText("beskrivelse",{selector:"[aria-hidden='true']"})).toHaveClass("dummyClassname")}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
      expect(input).toHaveAttribute('aria-invalid', 'false');
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
} satisfies Story`,...E.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    await expect(input).toHaveAttribute('value', selectedValue);
  }
} satisfies Story`,...q.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
    });
  }
} satisfies Story`,...W.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...M.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
    const helpButton = canvas.getByRole('button', {
      description: defaultLegendText
    });
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
} satisfies Story`,...P.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...N.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText('beskrivelse', {
      selector: "[aria-hidden='true']"
    })).toHaveClass('dummyClassname');
  }
} satisfies Story`,..._.parameters?.docs?.source}}};const Gt=["WithRef","WithAttributes","Defaults","VariantHorizontal","WithHideLegend","WithSelectedValue","WithDefaultValue","WithDisabled","WithRequired","WithRequiredAndMark","WithRequiredAndMarkAndLegendAsMarkup","WithName","WithoutErrorMessage","WithErrorMessage","WithErrorMessageAndAriaDescribedby","WithHelpText","WithDescription","WithEventHandlers","WithOnBlurEvent","WithHelpToggleEvent","WithCustomClassNames"],Xt=Object.freeze(Object.defineProperty({__proto__:null,Defaults:x,VariantHorizontal:R,WithAttributes:A,WithCustomClassNames:_,WithDefaultValue:k,WithDescription:P,WithDisabled:H,WithErrorMessage:I,WithErrorMessageAndAriaDescribedby:L,WithEventHandlers:j,WithHelpText:F,WithHelpToggleEvent:O,WithHideLegend:E,WithName:D,WithOnBlurEvent:N,WithRef:T,WithRequired:W,WithRequiredAndMark:M,WithRequiredAndMarkAndLegendAsMarkup:C,WithSelectedValue:q,WithoutErrorMessage:V,__namedExportsOrder:Gt,default:Ot},Symbol.toStringTag,{value:"Module"}));export{Xt as R};
//# sourceMappingURL=RadioGroup.test.stories-BzJlSBOo.js.map
