import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as R}from"./index-D_ouKaeX.js";import{L as i,b as j,B as U}from"./index-DfnG5Ebn.js";import{C as N}from"./index-CWrHDE5u.js";import{h as ne,d as z,l as W}from"./index-CGk5cNE3.js";import{a0 as J,a1 as $,a2 as X,a3 as Y,l as Q,s as te,a4 as re,a5 as ae}from"./index-DAV9Xejq.js";import{T as I}from"./index-FmG4s-WC.js";import{R as q}from"./index-D8cmx0R3.js";import{P as d,H as l}from"./index-DXWIZOJk.js";import{g as se,a as oe}from"./TopBannerLangPicker-D9vesMnm.js";import{h as S,c as g}from"./helpers-B90wjoUE.js";import{c as ie}from"./custom-logo-BLbAWs8x.js";import{s as le}from"./ske-logo-BSCI4sWT.js";import{e as Z}from"./stories.utils-Ys3NG0dr.js";const ge="_linkWrapper_ax540_1",ke="_linkWrapperPadding_ax540_4",pe="_noPadding_ax540_8",he="_marginBottomXL_ax540_12",de="_marginBottomS_ax540_16",me="_marginRightS_ax540_20",Se="_flex_ax540_24",ce="_columns_ax540_29",Ee="_secondColumn_ax540_32",a={linkWrapper:ge,linkWrapperPadding:ke,noPadding:pe,marginBottomXL:he,marginBottomS:de,marginRightS:me,flex:Se,columns:ce,secondColumn:Ee},Re={component:I,title:"Komponenter/TopBannerExternal",argTypes:{classNames:{control:!1,table:{category:g.props}},showSami:{table:{category:g.props,defaultValue:{summary:String(oe())}}},defaultLocale:{table:{control:"text",category:g.props,defaultValue:{summary:se()}}},children:{control:"text",table:{category:g.props}},skipLink:{control:!1,table:{category:g.props}},logo:{table:{category:g.props},control:"select",options:["",ie,le]},user:{control:!1,table:{category:g.props}},firstColumn:{control:"text",table:{category:g.props}},secondColumn:{control:"text",table:{category:g.props}},thirdColumn:{control:"text",table:{category:g.props}},additionalLanguages:{control:!1,table:{category:g.props}},searchContent:{control:"text",table:{category:g.props}},onSearchClick:{...S},onSearch:{...S},onLogInClick:{...S},onLogOutClick:{...S},onUserClick:{...S},onLanguageClick:{...S}},args:{onLogInClick:void 0,onLogOutClick:void 0,onUserClick:void 0},parameters:{layout:"fullscreen"}},u={},c={render:ee=>{const p=R.useRef(null),k=R.useRef(null),[o,m]=R.useState(),L=e=>{const t=e.currentTarget.lang;z.changeLanguage(W[t])},_=()=>{m(void 0)},x=()=>{var e;(e=p.current)==null||e.showModal()},O={name:"Ola Nordmann",personId:"10101012345",type:"Person"},T={total:3,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization"},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"}]};let f;(e=>{e.PERSON_SKATT="https://www.skatteetaten.no/person/skatt/",e.PERSON_AVGIFTER="https://www.skatteetaten.no/person/avgifter/",e.PERSON_FOLKEREGISTER="https://www.skatteetaten.no/person/folkeregister/",e.PERSON_UTENLANDSK="https://www.skatteetaten.no/person/utenlandsk/",e.PERSON_BETALING_OG_INNKREVING="https://www.skatteetaten.no/person/betaling-og-innkreving/",e.PERSON_FORSIDE="https://www.skatteetaten.no/person/",e.VIRKSOMHET_SKATT="https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",e.VIRKSOMHET_AVGIFTER="https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",e.VIRKSOMHET_RAPPORTERING_OG_BRANSJER="https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",e.VIRKSOMHET_STARTE_OG_DRIVE="https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",e.VIRKSOMHET_ARBEIDSGIVER="https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",e.VIRKSOMHET_UTENLANDSK="https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",e.VIRKSOMHET_FORSIDE="https://www.skatteetaten.no/bedrift-og-organisasjon/",e.RETTSKILDER="https://www.skatteetaten.no/rettskilder/",e.PRESSE="https://www.skatteetaten.no/presse/",e.SAMARBEIDSPARTNERE="https://www.skatteetaten.no/samarbeidspartnere/",e.KONTAKT="https://www.skatteetaten.no/kontakt/"})(f||(f={}));let w;(e=>{e.SKATT="/web/mineskatteforhold/",e.FOLKEREGISTER="/web/minfolkeregisterside/",e.INNBOKS="/web/innboks/",e.KJORETOY="/web/desta/",e.AKSJEOPPGAVEN="/web/aksjeoppgaven/?referrer=min-side"})(w||(w={}));let v;(e=>{e.VIRKSOMHET_KALENDER="/virksomhet/kalender",e.VIRKSOMHET_KRAVOVERSIKT="/virksomhet/kravoversikt",e.PERSON_FORSIDE="/person",e.PERSON_ARBEIDINNTEKT="/person/arbeidinntekt",e.PERSON_EIENDOMMER="/person/eiendommer",e.PERSON_KRAVOVERSIKT="/person/kravoversikt",e.PERSON_SAKSTATUS="/person/sakstatus",e.VIRKSOMHET_SAKSTATUS="/virksomhet/sakstatus"})(v||(v={}));const K=[{href:"/person",text:"Min side"},{href:"/web/mineskatteforhold/",text:"Skatt"},{href:"/web/minfolkeregisterside/",text:"Folkeregister"},{href:"/web/innboks/",text:"Innboks"},{href:"/person/sakstatus",text:"Mine saker"},{href:"/person/kravoversikt",text:"Krav og betalinger"},{href:"/web/desta/",text:"Bil og andre kjøretøy"},{href:"/person/arbeidinntekt",text:"Arbeid og inntekt"},{href:"/web/aksjeoppgaven/?referrer=min-side",text:"Aksjeoppgaven"},{href:"/person/eiendommer",text:"Eiendommer"}],A=[{href:"https://www.skatteetaten.no/person/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/person/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/person/folkeregister/",text:"Folkeregisteret"},{href:"https://www.skatteetaten.no/person/utenlandsk/",text:"Utenlandsk"},{href:"https://www.skatteetaten.no/person/betaling-og-innkreving/",text:"Betaling og innkreving"}],b=[{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",text:"Rapportering og bransjer"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",text:"Starte, drive og avslutte"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",text:"Arbeidsgiver"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",text:"Utenlandsk"}],P=[{href:"web/minside/virksomhet/",text:"Min side"},{href:"/virksomhet/kalender",text:"Kalender"},{href:"/virksomhet/kravoversikt",text:"Krav og betalinger"},{href:"/virksomhet/sakstatus",text:"Mine saker"},{href:"/web/innboks/",text:"Innboks"}];return n.jsxs(n.Fragment,{children:[n.jsx(I,{ref:k,classNames:{columns:a.columns},firstColumn:o?n.jsx(N,{spacing:"s",children:n.jsxs(N.Content,{children:[n.jsxs(l,{as:"h2",level:3,children:[o.role==="meg"&&n.jsx(J,{className:a.marginRightS}),o.role==="andre"&&n.jsx($,{className:a.marginRightS}),o.role==="virksomhet"&&n.jsx(X,{className:a.marginRightS}),(o==null?void 0:o.role)==="meg"?"Mitt innhold":o.name]}),n.jsx(d,{variant:"ingress",children:"Se, endre og send inn"}),n.jsx("ul",{className:`${a.linkWrapper} ${a.linkWrapperPadding}`,children:(o.role==="virksomhet"?P:K).map((e,t)=>n.jsx("li",{className:a.marginBottomS,children:n.jsx(j,{href:e.href,onClick:r=>{var s,h;r.preventDefault(),(h=(s=k.current)==null?void 0:s.closeMenu)==null||h.call(s)},children:e.text})},t))})]})}):n.jsxs(n.Fragment,{children:[n.jsxs(l,{as:"h2",level:3,className:a.flex,children:[n.jsx(Y,{className:a.marginRightS,size:"largePlus"}),"Min side"]}),n.jsx(d,{className:a.marginBottomS,children:"Se dine oppgaver og oversikt. Les og svar på meldinger."}),n.jsx(U,{svgPath:Q,children:"Logg inn"})]}),secondColumn:n.jsxs(n.Fragment,{children:[n.jsx(l,{as:"h2",level:2,hasSpacing:!0,children:"Alle temaer"}),n.jsxs("div",{className:a.secondColumn,children:[n.jsxs("div",{children:[n.jsx(l,{as:"h3",level:3,hasSpacing:!0,children:n.jsx("a",{href:"https://www.skatteetaten.no/person/",children:"For personer"})}),n.jsx(i,{className:a.marginBottomXL,children:A.map(e=>n.jsx(i.Link,{href:e.href,onClick:t=>{var r,s;t.preventDefault(),(s=(r=k.current)==null?void 0:r.closeMenu)==null||s.call(r)},children:e.text},e.text))}),n.jsx(l,{as:"h3",level:3,hasSpacing:!0,children:n.jsx("a",{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/",children:"For bedrifter og organisasjoner"})}),n.jsx(i,{className:a.marginBottomXL,children:b.map(e=>n.jsx(i.Link,{href:e.href,onClick:t=>{var r,s;t.preventDefault(),(s=(r=k.current)==null?void 0:r.closeMenu)==null||s.call(r)},children:e.text},e.text))})]}),n.jsxs("div",{children:[n.jsx(l,{as:"h3",level:4,hasSpacing:!0,children:n.jsx("a",{href:"https://www.skatteetaten.no/rettskilder/",children:"Rettskilder"})}),n.jsx(l,{as:"h3",level:4,hasSpacing:!0,children:n.jsx("a",{href:"https://www.skatteetaten.no/presse/",children:"Presse"})}),n.jsx(l,{as:"h3",level:4,className:a.marginBottomXL,children:n.jsx("a",{href:"https://www.skatteetaten.no/samarbeidspartnere/",children:"Samarbeidspartner"})}),n.jsx(l,{as:"h3",level:4,hasSpacing:!0,children:n.jsx("a",{href:"https://www.skatteetaten.no/kontakt/",children:"Kontakt oss"})})]})]})]}),user:o,searchContent:n.jsxs(n.Fragment,{children:[n.jsx(d,{className:a.marginBottomS,children:"Dette har andre søkt på:"}),n.jsxs(i,{children:[n.jsx(i.Link,{href:"#",children:"Se skatteoppgjøret ditt"}),n.jsx(i.Link,{href:"#",children:"Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift"}),n.jsx(i.Link,{href:"#",children:"Se dine skattekrav og betalinger"})]})]}),onLanguageClick:L,onLogInClick:x,onLogOutClick:_,onUserClick:()=>{var e;return(e=p.current)==null?void 0:e.showModal()},onSearch:(e,t)=>{alert(`søker etter ${t}`)},onSearchClick:(e,t)=>{alert(`søker etter ${t}`)}}),n.jsx(q,{ref:p,me:O,businesses:T,onEntitySelect:async e=>{var r;let t;e.name===O.name?t="meg":e.type==="Organization"?t="virksomhet":t="andre",m({role:t,name:e.name}),(r=p.current)==null||r.close()}}),n.jsx("main",{className:"breadcrumbs--external",children:n.jsx(d,{variant:"ingress",hasSpacing:!0,children:'Utgående mønster. Se "Example With User Menu" i stedet.'})})]})}};c.parameters=Z;const E={render:ee=>{const p=R.useRef(null),k=R.useRef(null),[o,m]=R.useState(),L=ne("(min-width: 640px)"),_=e=>{const t=e.currentTarget.lang;z.changeLanguage(W[t])},x={name:"Ola Nordmann",personId:"10101012345",type:"Person"},O={total:3,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization"},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"}]};let T;(e=>{e.PERSON_SKATT="https://www.skatteetaten.no/person/skatt/",e.PERSON_AVGIFTER="https://www.skatteetaten.no/person/avgifter/",e.PERSON_FOLKEREGISTER="https://www.skatteetaten.no/person/folkeregister/",e.PERSON_UTENLANDSK="https://www.skatteetaten.no/person/utenlandsk/",e.PERSON_BETALING_OG_INNKREVING="https://www.skatteetaten.no/person/betaling-og-innkreving/",e.PERSON_FORSIDE="https://www.skatteetaten.no/person/",e.VIRKSOMHET_SKATT="https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",e.VIRKSOMHET_AVGIFTER="https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",e.VIRKSOMHET_RAPPORTERING_OG_BRANSJER="https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",e.VIRKSOMHET_STARTE_OG_DRIVE="https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",e.VIRKSOMHET_ARBEIDSGIVER="https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",e.VIRKSOMHET_UTENLANDSK="https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",e.VIRKSOMHET_FORSIDE="https://www.skatteetaten.no/bedrift-og-organisasjon/",e.RETTSKILDER="https://www.skatteetaten.no/rettskilder/",e.RETTSKILDER_PER_EMNE="https://www.skatteetaten.no/rettskilder/emne/",e.RETTSKILDER_PER_TYPE="https://www.skatteetaten.no/rettskilder/type/",e.OM_OSS_KONTAKT="https://www.skatteetaten.no/kontakt/",e.OM_OSS_DELING_AV_DATA="https://www.skatteetaten.no/deling/",e.OM_OSS_PRESSE="https://www.skatteetaten.no/presse/"})(T||(T={}));let f;(e=>{e.SKATT="/web/mineskatteforhold/",e.FOLKEREGISTER="/web/minfolkeregisterside/",e.INNBOKS="/web/innboks/",e.KJORETOY="/web/desta/",e.AKSJEOPPGAVEN="/web/aksjeoppgaven/?referrer=min-side"})(f||(f={}));let w;(e=>{e.VIRKSOMHET_KALENDER="/virksomhet/kalender",e.VIRKSOMHET_KRAVOVERSIKT="/virksomhet/kravoversikt",e.PERSON_FORSIDE="/person",e.PERSON_ARBEIDINNTEKT="/person/arbeidinntekt",e.PERSON_EIENDOMMER="/person/eiendommer",e.PERSON_KRAVOVERSIKT="/person/kravoversikt",e.PERSON_SAKSTATUS="/person/sakstatus",e.VIRKSOMHET_SAKSTATUS="/virksomhet/sakstatus"})(w||(w={}));const v=[{href:"/person",text:"Min side"},{href:"/web/mineskatteforhold/",text:"Skatt"},{href:"/web/minfolkeregisterside/",text:"Folkeregister"},{href:"/web/innboks/",text:"Innboks"},{href:"/person/sakstatus",text:"Mine saker"},{href:"/person/kravoversikt",text:"Krav og betalinger"},{href:"/web/desta/",text:"Bil og andre kjøretøy"},{href:"/person/arbeidinntekt",text:"Arbeid og inntekt"},{href:"/web/aksjeoppgaven/?referrer=min-side",text:"Aksjeoppgaven"},{href:"/person/eiendommer",text:"Eiendommer"}],K=[{href:"https://www.skatteetaten.no/person/",text:"Person forside"},{href:"https://www.skatteetaten.no/person/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/person/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/person/folkeregister/",text:"Folkeregisteret"},{href:"https://www.skatteetaten.no/person/utenlandsk/",text:"Utenlandsk"},{href:"https://www.skatteetaten.no/person/betaling-og-innkreving/",text:"Betaling og innkreving"}],A=[{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",text:"Rapportering og bransjer"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",text:"Starte og drive"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",text:"Arbeidsgiver"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",text:"Utenlandsk"}],b=[{href:"web/minside/virksomhet/",text:"Min side"},{href:"/virksomhet/kalender",text:"Kalender"},{href:"/virksomhet/kravoversikt",text:"Krav og betalinger"},{href:"/virksomhet/sakstatus",text:"Mine saker"},{href:"/web/innboks/",text:"Innboks"}],P=[{href:"https://www.skatteetaten.no/kontakt/",text:"Kontakt oss",svgPath:te},{href:"https://www.skatteetaten.no/kontakt/",text:"Deling av data",svgPath:re},{href:"https://www.skatteetaten.no/kontakt/",text:"Presse",svgPath:ae}];return n.jsxs(n.Fragment,{children:[n.jsx(I,{ref:k,classNames:{columns:a.columns},firstColumn:o?n.jsx(N,{spacing:"s",children:n.jsxs(N.Content,{children:[n.jsxs(l,{as:"h2",level:3,children:[o.role==="meg"&&n.jsx(J,{className:a.marginRightS}),o.role==="andre"&&n.jsx($,{className:a.marginRightS}),o.role==="virksomhet"&&n.jsx(X,{className:a.marginRightS}),(o==null?void 0:o.role)==="meg"?"Mitt innhold":o.name]}),n.jsx(d,{variant:"ingress",children:"Se, endre og send inn"}),n.jsx("ul",{className:`${a.linkWrapper} ${a.linkWrapperPadding}`,children:(o.role==="virksomhet"?b:v).map((e,t)=>n.jsx("li",{className:a.marginBottomS,children:n.jsx(j,{href:e.href,onClick:r=>{var s,h;r.preventDefault(),(h=(s=k.current)==null?void 0:s.closeMenu)==null||h.call(s)},children:e.text})},t))})]})}):n.jsxs(n.Fragment,{children:[n.jsxs(l,{as:"h2",level:3,className:a.flex,children:[n.jsx(Y,{className:a.marginRightS,size:"largePlus"}),"Min side"]}),n.jsx(d,{className:a.marginBottomS,children:"Se dine oppgaver og oversikt. Les og svar på meldinger"}),n.jsx(U,{svgPath:Q,children:"Logg inn på min side"})]}),secondColumn:n.jsxs(n.Fragment,{children:[n.jsx(l,{as:"h2",level:2,hasSpacing:!0,children:"Alle temaer"}),n.jsxs("div",{className:a.secondColumn,children:[n.jsxs("div",{children:[n.jsx(l,{as:"h3",level:3,hasSpacing:!0,children:n.jsx("a",{href:"https://www.skatteetaten.no/person/",children:"For personer"})}),n.jsx(i,{className:a.marginBottomXL,children:K.map(e=>n.jsx(i.Link,{href:e.href,onClick:t=>{var r,s;t.preventDefault(),(s=(r=k.current)==null?void 0:r.closeMenu)==null||s.call(r)},children:e.text},e.text))}),n.jsx(l,{as:"h3",level:3,hasSpacing:!0,children:n.jsx("a",{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/",children:"For bedrifter og organisasjoner"})}),n.jsx(i,{className:a.marginBottomXL,children:A.map(e=>n.jsx(i.Link,{href:e.href,onClick:t=>{var r,s;t.preventDefault(),(s=(r=k.current)==null?void 0:r.closeMenu)==null||s.call(r)},children:e.text},e.text))})]}),n.jsxs("div",{children:[n.jsx(l,{as:"h3",level:3,hasSpacing:!0,children:n.jsx("a",{href:"https://www.skatteetaten.no/rettskilder/",children:"Rettskilder"})}),n.jsxs(i,{className:a.marginBottomXL,children:[n.jsx(i.Link,{href:"https://www.skatteetaten.no/rettskilder/emne/",children:"Rettskilder per emne"}),n.jsx(i.Link,{href:"https://www.skatteetaten.no/rettskilder/type/",onClick:e=>{var t,r;e.preventDefault(),(r=(t=k.current)==null?void 0:t.closeMenu)==null||r.call(t)},children:"Rettskilder per type"})]}),n.jsx(l,{as:"h3",level:3,hasSpacing:!0,children:"Om oss"}),n.jsx("ul",{className:`${a.linkWrapper} ${a.noPadding}`,children:P.map((e,t)=>n.jsx("li",{className:a.marginBottomS,children:n.jsx(j,{href:e.href,svgPath:e.svgPath,onClick:r=>{var s,h;r.preventDefault(),(h=(s=k.current)==null?void 0:s.closeMenu)==null||h.call(s)},children:e.text})},t))})]})]})]}),searchContent:n.jsxs(n.Fragment,{children:[n.jsx(d,{className:a.marginBottomS,children:"Dette har andre søkt på:"}),n.jsxs(i,{children:[n.jsx(i.Link,{href:"#",children:"Se skatteoppgjøret ditt"}),n.jsx(i.Link,{href:"#",children:"Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift"}),n.jsx(i.Link,{href:"#",children:"Se dine skattekrav og betalinger"})]})]}),user:o,onLogOutClick:L?()=>m(void 0):void 0,onLanguageClick:_,onLogInClick:o?void 0:()=>{var e;return(e=p.current)==null?void 0:e.showModal()},onSearch:(e,t)=>{alert(`søker etter ${t}`)},onSearchClick:(e,t)=>{alert(`søker etter ${t}`)},children:o&&n.jsx(I.UserMenu,{user:o,notificationCount:1,onLogOutClick:()=>m(void 0),onSwitchUserClick:()=>{var e;return(e=p.current)==null?void 0:e.showModal()}})}),n.jsx(q,{ref:p,me:x,businesses:O,onEntitySelect:async e=>{var r;let t;e.name===x.name?t="meg":e.type==="Organization"?t="virksomhet":t="andre",m({role:t,name:e.name,orgnr:"999 999 999"}),(r=p.current)==null||r.close()}})]})}};E.parameters=Z;var M,B,V;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:"{} satisfies Story",...(V=(B=u.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var D,G,y;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const topBannerRef = useRef<TopBannerExternalHandle>(null);
    const [user, setUser] = useState<User>();
    const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
      const lang = e.currentTarget.lang;
      dsI18n.changeLanguage(langToLocale[lang]);
    };
    const handleLogOut = (): void => {
      setUser(undefined);
    };
    const handleLogIn = (): void => {
      modalRef.current?.showModal();
    };
    const me: Person = {
      name: 'Ola Nordmann',
      personId: '10101012345',
      type: 'Person'
    };
    const businesses: Paginated<Business> = {
      total: 3,
      list: [{
        name: 'Costco AS',
        organizationNumber: '123456777',
        isDeleted: false,
        unitType: 'AS',
        type: 'Organization'
      }, {
        name: 'Instagram AS',
        organizationNumber: '312843211',
        isDeleted: true,
        unitType: 'AS',
        type: 'Organization'
      }, {
        name: 'Amazon ASA',
        organizationNumber: '112843218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'ASA'
      }]
    };
    enum LenkerUinnlogget {
      PERSON_SKATT = 'https://www.skatteetaten.no/person/skatt/',
      PERSON_AVGIFTER = 'https://www.skatteetaten.no/person/avgifter/',
      PERSON_FOLKEREGISTER = 'https://www.skatteetaten.no/person/folkeregister/',
      PERSON_UTENLANDSK = 'https://www.skatteetaten.no/person/utenlandsk/',
      PERSON_BETALING_OG_INNKREVING = 'https://www.skatteetaten.no/person/betaling-og-innkreving/',
      PERSON_FORSIDE = 'https://www.skatteetaten.no/person/',
      VIRKSOMHET_SKATT = 'https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/',
      VIRKSOMHET_AVGIFTER = 'https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/',
      VIRKSOMHET_RAPPORTERING_OG_BRANSJER = 'https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/',
      VIRKSOMHET_STARTE_OG_DRIVE = 'https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/',
      VIRKSOMHET_ARBEIDSGIVER = 'https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/',
      VIRKSOMHET_UTENLANDSK = 'https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/',
      VIRKSOMHET_FORSIDE = 'https://www.skatteetaten.no/bedrift-og-organisasjon/',
      RETTSKILDER = 'https://www.skatteetaten.no/rettskilder/',
      PRESSE = 'https://www.skatteetaten.no/presse/',
      SAMARBEIDSPARTNERE = 'https://www.skatteetaten.no/samarbeidspartnere/',
      KONTAKT = 'https://www.skatteetaten.no/kontakt/',
    }
    enum LenkerInnloggetIkkeMinSide {
      SKATT = '/web/mineskatteforhold/',
      FOLKEREGISTER = '/web/minfolkeregisterside/',
      INNBOKS = '/web/innboks/',
      KJORETOY = '/web/desta/',
      AKSJEOPPGAVEN = '/web/aksjeoppgaven/?referrer=min-side',
    }
    enum MinsideLenker {
      VIRKSOMHET_KALENDER = '/virksomhet/kalender',
      VIRKSOMHET_KRAVOVERSIKT = '/virksomhet/kravoversikt',
      PERSON_FORSIDE = '/person',
      PERSON_ARBEIDINNTEKT = '/person/arbeidinntekt',
      PERSON_EIENDOMMER = '/person/eiendommer',
      PERSON_KRAVOVERSIKT = '/person/kravoversikt',
      PERSON_SAKSTATUS = '/person/sakstatus',
      VIRKSOMHET_SAKSTATUS = '/virksomhet/sakstatus',
    }
    const loggedInLinks = [{
      href: MinsideLenker.PERSON_FORSIDE,
      text: 'Min side'
    }, {
      href: LenkerInnloggetIkkeMinSide.SKATT,
      text: 'Skatt'
    }, {
      href: LenkerInnloggetIkkeMinSide.FOLKEREGISTER,
      text: 'Folkeregister'
    }, {
      href: LenkerInnloggetIkkeMinSide.INNBOKS,
      text: 'Innboks'
    }, {
      href: MinsideLenker.PERSON_SAKSTATUS,
      text: 'Mine saker'
    }, {
      href: MinsideLenker.PERSON_KRAVOVERSIKT,
      text: 'Krav og betalinger'
    }, {
      href: LenkerInnloggetIkkeMinSide.KJORETOY,
      text: 'Bil og andre kjøretøy'
    }, {
      href: MinsideLenker.PERSON_ARBEIDINNTEKT,
      text: 'Arbeid og inntekt'
    }, {
      href: LenkerInnloggetIkkeMinSide.AKSJEOPPGAVEN,
      text: 'Aksjeoppgaven'
    }, {
      href: MinsideLenker.PERSON_EIENDOMMER,
      text: 'Eiendommer'
    }];
    const personlinks = [{
      href: LenkerUinnlogget.PERSON_SKATT,
      text: 'Skatt'
    }, {
      href: LenkerUinnlogget.PERSON_AVGIFTER,
      text: 'Avgifter'
    }, {
      href: LenkerUinnlogget.PERSON_FOLKEREGISTER,
      text: 'Folkeregisteret'
    }, {
      href: LenkerUinnlogget.PERSON_UTENLANDSK,
      text: 'Utenlandsk'
    }, {
      href: LenkerUinnlogget.PERSON_BETALING_OG_INNKREVING,
      text: 'Betaling og innkreving'
    }];
    const virksomhetlinks = [{
      href: LenkerUinnlogget.VIRKSOMHET_SKATT,
      text: 'Skatt'
    }, {
      href: LenkerUinnlogget.VIRKSOMHET_AVGIFTER,
      text: 'Avgifter'
    }, {
      href: LenkerUinnlogget.VIRKSOMHET_RAPPORTERING_OG_BRANSJER,
      text: 'Rapportering og bransjer'
    }, {
      href: LenkerUinnlogget.VIRKSOMHET_STARTE_OG_DRIVE,
      text: 'Starte, drive og avslutte'
    }, {
      href: LenkerUinnlogget.VIRKSOMHET_ARBEIDSGIVER,
      text: 'Arbeidsgiver'
    }, {
      href: LenkerUinnlogget.VIRKSOMHET_UTENLANDSK,
      text: 'Utenlandsk'
    }];
    const virksomhetLinks = [{
      href: 'web/minside/virksomhet/',
      text: 'Min side'
    }, {
      href: MinsideLenker.VIRKSOMHET_KALENDER,
      text: 'Kalender'
    }, {
      href: MinsideLenker.VIRKSOMHET_KRAVOVERSIKT,
      text: 'Krav og betalinger'
    }, {
      href: MinsideLenker.VIRKSOMHET_SAKSTATUS,
      text: 'Mine saker'
    }, {
      href: LenkerInnloggetIkkeMinSide.INNBOKS,
      text: 'Innboks'
    }];
    return <>
        <TopBannerExternal ref={topBannerRef} classNames={{
        columns: topBannerExternalExampleStyles.columns
      }} firstColumn={user ? <Card spacing={'s'}>
                <Card.Content>
                  <Heading as={'h2'} level={3}>
                    {user.role === 'meg' && <FavoriteIcon className={topBannerExternalExampleStyles.marginRightS} />}
                    {user.role === 'andre' && <AccountMultipleIcon className={topBannerExternalExampleStyles.marginRightS} />}
                    {user.role === 'virksomhet' && <BriefcaseIcon className={topBannerExternalExampleStyles.marginRightS} />}

                    {user?.role === 'meg' ? 'Mitt innhold' : user.name}
                  </Heading>
                  <Paragraph variant={'ingress'}>
                    {'Se, endre og send inn'}
                  </Paragraph>
                  <ul className={\`\${topBannerExternalExampleStyles.linkWrapper} \${topBannerExternalExampleStyles.linkWrapperPadding}\`}>
                    {(user.role === 'virksomhet' ? virksomhetLinks : loggedInLinks).map((link, index) => <li key={index} className={topBannerExternalExampleStyles.marginBottomS}>
                        <Link href={link.href} onClick={(e): void => {
                e.preventDefault();
                topBannerRef.current?.closeMenu?.();
              }}>
                          {link.text}
                        </Link>
                      </li>)}
                  </ul>
                </Card.Content>
              </Card> : <>
                <Heading as={'h2'} level={3} className={topBannerExternalExampleStyles.flex}>
                  <PersonIcon className={topBannerExternalExampleStyles.marginRightS} size={'largePlus'} />

                  {'Min side'}
                </Heading>
                <Paragraph className={topBannerExternalExampleStyles.marginBottomS}>
                  {'Se dine oppgaver og oversikt. Les og svar på meldinger.'}
                </Paragraph>
                <Button svgPath={LockOutlineSVGpath}>{'Logg inn'}</Button>
              </>} secondColumn={<>
              <Heading as={'h2'} level={2} hasSpacing>
                {'Alle temaer'}
              </Heading>
              <div className={topBannerExternalExampleStyles.secondColumn}>
                <div>
                  <Heading as={'h3'} level={3} hasSpacing>
                    <a href={LenkerUinnlogget.PERSON_FORSIDE}>
                      {'For personer'}
                    </a>
                  </Heading>
                  <LinkGroup className={topBannerExternalExampleStyles.marginBottomXL}>
                    {personlinks.map(link => <LinkGroup.Link key={link.text} href={link.href} onClick={(e): void => {
                e.preventDefault();
                topBannerRef.current?.closeMenu?.();
              }}>
                        {link.text}
                      </LinkGroup.Link>)}
                  </LinkGroup>
                  <Heading as={'h3'} level={3} hasSpacing>
                    <a href={LenkerUinnlogget.VIRKSOMHET_FORSIDE}>
                      {'For bedrifter og organisasjoner'}
                    </a>
                  </Heading>
                  <LinkGroup className={topBannerExternalExampleStyles.marginBottomXL}>
                    {virksomhetlinks.map(link => <LinkGroup.Link key={link.text} href={link.href} onClick={(e): void => {
                e.preventDefault();
                topBannerRef.current?.closeMenu?.();
              }}>
                        {link.text}
                      </LinkGroup.Link>)}
                  </LinkGroup>
                </div>
                <div>
                  <Heading as={'h3'} level={4} hasSpacing>
                    <a href={LenkerUinnlogget.RETTSKILDER}>{'Rettskilder'}</a>
                  </Heading>
                  <Heading as={'h3'} level={4} hasSpacing>
                    <a href={LenkerUinnlogget.PRESSE}>{'Presse'}</a>
                  </Heading>
                  <Heading as={'h3'} level={4} className={topBannerExternalExampleStyles.marginBottomXL}>
                    <a href={LenkerUinnlogget.SAMARBEIDSPARTNERE}>
                      {'Samarbeidspartner'}
                    </a>
                  </Heading>
                  <Heading as={'h3'} level={4} hasSpacing>
                    <a href={LenkerUinnlogget.KONTAKT}>{'Kontakt oss'}</a>
                  </Heading>
                </div>
              </div>
            </>} user={user} searchContent={<>
              <Paragraph className={topBannerExternalExampleStyles.marginBottomS}>
                {'Dette har andre søkt på:'}
              </Paragraph>
              <LinkGroup>
                <LinkGroup.Link href={'#'}>
                  {'Se skatteoppgjøret ditt'}
                </LinkGroup.Link>
                <LinkGroup.Link href={'#'}>
                  {'Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift'}
                </LinkGroup.Link>
                <LinkGroup.Link href={'#'}>
                  {'Se dine skattekrav og betalinger'}
                </LinkGroup.Link>
              </LinkGroup>
            </>} onLanguageClick={handleLanguageClick} onLogInClick={handleLogIn} onLogOutClick={handleLogOut} onUserClick={(): void => modalRef.current?.showModal()} onSearch={(e, value) => {
        alert(\`søker etter \${value}\`);
      }} onSearchClick={(e, value) => {
        alert(\`søker etter \${value}\`);
      }} />
        <RolePicker ref={modalRef} me={me} businesses={businesses} onEntitySelect={async entity => {
        let role: User['role'];
        if (entity.name === me.name) {
          role = 'meg';
        } else if (entity.type === 'Organization') {
          role = 'virksomhet';
        } else {
          role = 'andre';
        }
        setUser({
          role: role,
          name: entity.name
        });
        modalRef.current?.close();
      }} />
        <main className={'breadcrumbs--external'}>
          <Paragraph variant={'ingress'} hasSpacing>
            {'Utgående mønster. Se "Example With User Menu" i stedet.'}
          </Paragraph>
        </main>
      </>;
  }
} satisfies Story`,...(y=(G=c.parameters)==null?void 0:G.docs)==null?void 0:y.source}}};var H,C,F;E.parameters={...E.parameters,docs:{...(H=E.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const topBannerRef = useRef<TopBannerExternalHandle>(null);
    const [user, setUser] = useState<User>();
    const isDesktop = useMediaQuery('(min-width: 640px)');
    const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
      const lang = e.currentTarget.lang;
      dsI18n.changeLanguage(langToLocale[lang]);
    };
    const me: Person = {
      name: 'Ola Nordmann',
      personId: '10101012345',
      type: 'Person'
    };
    const businesses: Paginated<Business> = {
      total: 3,
      list: [{
        name: 'Costco AS',
        organizationNumber: '123456777',
        isDeleted: false,
        unitType: 'AS',
        type: 'Organization'
      }, {
        name: 'Instagram AS',
        organizationNumber: '312843211',
        isDeleted: true,
        unitType: 'AS',
        type: 'Organization'
      }, {
        name: 'Amazon ASA',
        organizationNumber: '112843218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'ASA'
      }]
    };
    enum LenkerUinnlogget {
      PERSON_SKATT = 'https://www.skatteetaten.no/person/skatt/',
      PERSON_AVGIFTER = 'https://www.skatteetaten.no/person/avgifter/',
      PERSON_FOLKEREGISTER = 'https://www.skatteetaten.no/person/folkeregister/',
      PERSON_UTENLANDSK = 'https://www.skatteetaten.no/person/utenlandsk/',
      PERSON_BETALING_OG_INNKREVING = 'https://www.skatteetaten.no/person/betaling-og-innkreving/',
      PERSON_FORSIDE = 'https://www.skatteetaten.no/person/',
      VIRKSOMHET_SKATT = 'https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/',
      VIRKSOMHET_AVGIFTER = 'https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/',
      VIRKSOMHET_RAPPORTERING_OG_BRANSJER = 'https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/',
      VIRKSOMHET_STARTE_OG_DRIVE = 'https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/',
      VIRKSOMHET_ARBEIDSGIVER = 'https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/',
      VIRKSOMHET_UTENLANDSK = 'https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/',
      VIRKSOMHET_FORSIDE = 'https://www.skatteetaten.no/bedrift-og-organisasjon/',
      RETTSKILDER = 'https://www.skatteetaten.no/rettskilder/',
      RETTSKILDER_PER_EMNE = 'https://www.skatteetaten.no/rettskilder/emne/',
      RETTSKILDER_PER_TYPE = 'https://www.skatteetaten.no/rettskilder/type/',
      OM_OSS_KONTAKT = 'https://www.skatteetaten.no/kontakt/',
      OM_OSS_DELING_AV_DATA = 'https://www.skatteetaten.no/deling/',
      OM_OSS_PRESSE = 'https://www.skatteetaten.no/presse/',
    }
    enum LenkerInnloggetIkkeMinSide {
      SKATT = '/web/mineskatteforhold/',
      FOLKEREGISTER = '/web/minfolkeregisterside/',
      INNBOKS = '/web/innboks/',
      KJORETOY = '/web/desta/',
      AKSJEOPPGAVEN = '/web/aksjeoppgaven/?referrer=min-side',
    }
    enum MinsideLenker {
      VIRKSOMHET_KALENDER = '/virksomhet/kalender',
      VIRKSOMHET_KRAVOVERSIKT = '/virksomhet/kravoversikt',
      PERSON_FORSIDE = '/person',
      PERSON_ARBEIDINNTEKT = '/person/arbeidinntekt',
      PERSON_EIENDOMMER = '/person/eiendommer',
      PERSON_KRAVOVERSIKT = '/person/kravoversikt',
      PERSON_SAKSTATUS = '/person/sakstatus',
      VIRKSOMHET_SAKSTATUS = '/virksomhet/sakstatus',
    }
    const loggedInLinks = [{
      href: MinsideLenker.PERSON_FORSIDE,
      text: 'Min side'
    }, {
      href: LenkerInnloggetIkkeMinSide.SKATT,
      text: 'Skatt'
    }, {
      href: LenkerInnloggetIkkeMinSide.FOLKEREGISTER,
      text: 'Folkeregister'
    }, {
      href: LenkerInnloggetIkkeMinSide.INNBOKS,
      text: 'Innboks'
    }, {
      href: MinsideLenker.PERSON_SAKSTATUS,
      text: 'Mine saker'
    }, {
      href: MinsideLenker.PERSON_KRAVOVERSIKT,
      text: 'Krav og betalinger'
    }, {
      href: LenkerInnloggetIkkeMinSide.KJORETOY,
      text: 'Bil og andre kjøretøy'
    }, {
      href: MinsideLenker.PERSON_ARBEIDINNTEKT,
      text: 'Arbeid og inntekt'
    }, {
      href: LenkerInnloggetIkkeMinSide.AKSJEOPPGAVEN,
      text: 'Aksjeoppgaven'
    }, {
      href: MinsideLenker.PERSON_EIENDOMMER,
      text: 'Eiendommer'
    }];
    const personlinks = [{
      href: LenkerUinnlogget.PERSON_FORSIDE,
      text: 'Person forside'
    }, {
      href: LenkerUinnlogget.PERSON_SKATT,
      text: 'Skatt'
    }, {
      href: LenkerUinnlogget.PERSON_AVGIFTER,
      text: 'Avgifter'
    }, {
      href: LenkerUinnlogget.PERSON_FOLKEREGISTER,
      text: 'Folkeregisteret'
    }, {
      href: LenkerUinnlogget.PERSON_UTENLANDSK,
      text: 'Utenlandsk'
    }, {
      href: LenkerUinnlogget.PERSON_BETALING_OG_INNKREVING,
      text: 'Betaling og innkreving'
    }];
    const virksomhetlinks = [{
      href: LenkerUinnlogget.VIRKSOMHET_SKATT,
      text: 'Skatt'
    }, {
      href: LenkerUinnlogget.VIRKSOMHET_AVGIFTER,
      text: 'Avgifter'
    }, {
      href: LenkerUinnlogget.VIRKSOMHET_RAPPORTERING_OG_BRANSJER,
      text: 'Rapportering og bransjer'
    }, {
      href: LenkerUinnlogget.VIRKSOMHET_STARTE_OG_DRIVE,
      text: 'Starte og drive'
    }, {
      href: LenkerUinnlogget.VIRKSOMHET_ARBEIDSGIVER,
      text: 'Arbeidsgiver'
    }, {
      href: LenkerUinnlogget.VIRKSOMHET_UTENLANDSK,
      text: 'Utenlandsk'
    }];
    const virksomhetLinks = [{
      href: 'web/minside/virksomhet/',
      text: 'Min side'
    }, {
      href: MinsideLenker.VIRKSOMHET_KALENDER,
      text: 'Kalender'
    }, {
      href: MinsideLenker.VIRKSOMHET_KRAVOVERSIKT,
      text: 'Krav og betalinger'
    }, {
      href: MinsideLenker.VIRKSOMHET_SAKSTATUS,
      text: 'Mine saker'
    }, {
      href: LenkerInnloggetIkkeMinSide.INNBOKS,
      text: 'Innboks'
    }];
    const omOssLinks = [{
      href: LenkerUinnlogget.OM_OSS_KONTAKT,
      text: 'Kontakt oss',
      svgPath: ChatBubbleOutlineSVGpath
    }, {
      href: LenkerUinnlogget.OM_OSS_KONTAKT,
      text: 'Deling av data',
      svgPath: ArrowUpDownSVGpath
    }, {
      href: LenkerUinnlogget.OM_OSS_KONTAKT,
      text: 'Presse',
      svgPath: ShareSVGpath
    }];
    return <>
        <TopBannerExternal ref={topBannerRef} classNames={{
        columns: topBannerExternalExampleStyles.columns
      }} firstColumn={user ? <Card spacing={'s'}>
                <Card.Content>
                  <Heading as={'h2'} level={3}>
                    {user.role === 'meg' && <FavoriteIcon className={topBannerExternalExampleStyles.marginRightS} />}
                    {user.role === 'andre' && <AccountMultipleIcon className={topBannerExternalExampleStyles.marginRightS} />}
                    {user.role === 'virksomhet' && <BriefcaseIcon className={topBannerExternalExampleStyles.marginRightS} />}

                    {user?.role === 'meg' ? 'Mitt innhold' : user.name}
                  </Heading>
                  <Paragraph variant={'ingress'}>
                    {'Se, endre og send inn'}
                  </Paragraph>
                  <ul className={\`\${topBannerExternalExampleStyles.linkWrapper} \${topBannerExternalExampleStyles.linkWrapperPadding}\`}>
                    {(user.role === 'virksomhet' ? virksomhetLinks : loggedInLinks).map((link, index) => <li key={index} className={topBannerExternalExampleStyles.marginBottomS}>
                        <Link href={link.href} onClick={(e): void => {
                e.preventDefault();
                topBannerRef.current?.closeMenu?.();
              }}>
                          {link.text}
                        </Link>
                      </li>)}
                  </ul>
                </Card.Content>
              </Card> : <>
                <Heading as={'h2'} level={3} className={topBannerExternalExampleStyles.flex}>
                  <PersonIcon className={topBannerExternalExampleStyles.marginRightS} size={'largePlus'} />

                  {'Min side'}
                </Heading>
                <Paragraph className={topBannerExternalExampleStyles.marginBottomS}>
                  {'Se dine oppgaver og oversikt. Les og svar på meldinger'}
                </Paragraph>
                <Button svgPath={LockOutlineSVGpath}>
                  {'Logg inn på min side'}
                </Button>
              </>} secondColumn={<>
              <Heading as={'h2'} level={2} hasSpacing>
                {'Alle temaer'}
              </Heading>
              <div className={topBannerExternalExampleStyles.secondColumn}>
                <div>
                  <Heading as={'h3'} level={3} hasSpacing>
                    <a href={LenkerUinnlogget.PERSON_FORSIDE}>
                      {'For personer'}
                    </a>
                  </Heading>
                  <LinkGroup className={topBannerExternalExampleStyles.marginBottomXL}>
                    {personlinks.map(link => <LinkGroup.Link key={link.text} href={link.href} onClick={(e): void => {
                e.preventDefault();
                topBannerRef.current?.closeMenu?.();
              }}>
                        {link.text}
                      </LinkGroup.Link>)}
                  </LinkGroup>
                  <Heading as={'h3'} level={3} hasSpacing>
                    <a href={LenkerUinnlogget.VIRKSOMHET_FORSIDE}>
                      {'For bedrifter og organisasjoner'}
                    </a>
                  </Heading>
                  <LinkGroup className={topBannerExternalExampleStyles.marginBottomXL}>
                    {virksomhetlinks.map(link => <LinkGroup.Link key={link.text} href={link.href} onClick={(e): void => {
                e.preventDefault();
                topBannerRef.current?.closeMenu?.();
              }}>
                        {link.text}
                      </LinkGroup.Link>)}
                  </LinkGroup>
                </div>
                <div>
                  <Heading as={'h3'} level={3} hasSpacing>
                    <a href={LenkerUinnlogget.RETTSKILDER}>{'Rettskilder'}</a>
                  </Heading>
                  <LinkGroup className={topBannerExternalExampleStyles.marginBottomXL}>
                    <LinkGroup.Link href={LenkerUinnlogget.RETTSKILDER_PER_EMNE}>
                      {'Rettskilder per emne'}
                    </LinkGroup.Link>
                    <LinkGroup.Link href={LenkerUinnlogget.RETTSKILDER_PER_TYPE} onClick={(e): void => {
                e.preventDefault();
                topBannerRef.current?.closeMenu?.();
              }}>
                      {'Rettskilder per type'}
                    </LinkGroup.Link>
                  </LinkGroup>
                  <Heading as={'h3'} level={3} hasSpacing>
                    {'Om oss'}
                  </Heading>
                  <ul className={\`\${topBannerExternalExampleStyles.linkWrapper} \${topBannerExternalExampleStyles.noPadding}\`}>
                    {omOssLinks.map((link, index) => <li key={index} className={topBannerExternalExampleStyles.marginBottomS}>
                        <Link href={link.href} svgPath={link.svgPath} onClick={(e): void => {
                  e.preventDefault();
                  topBannerRef.current?.closeMenu?.();
                }}>
                          {link.text}
                        </Link>
                      </li>)}
                  </ul>
                </div>
              </div>
            </>} searchContent={<>
              <Paragraph className={topBannerExternalExampleStyles.marginBottomS}>
                {'Dette har andre søkt på:'}
              </Paragraph>
              <LinkGroup>
                <LinkGroup.Link href={'#'}>
                  {'Se skatteoppgjøret ditt'}
                </LinkGroup.Link>
                <LinkGroup.Link href={'#'}>
                  {'Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift'}
                </LinkGroup.Link>
                <LinkGroup.Link href={'#'}>
                  {'Se dine skattekrav og betalinger'}
                </LinkGroup.Link>
              </LinkGroup>
            </>} user={user} onLogOutClick={isDesktop ? (): void => setUser(undefined) : undefined} onLanguageClick={handleLanguageClick} onLogInClick={!user ? (): void => modalRef.current?.showModal() : undefined} onSearch={(e, value) => {
        alert(\`søker etter \${value}\`);
      }} onSearchClick={(e, value) => {
        alert(\`søker etter \${value}\`);
      }}>
          {user && <TopBannerExternal.UserMenu user={user} notificationCount={1} onLogOutClick={() => setUser(undefined)} onSwitchUserClick={() => modalRef.current?.showModal()} />}
        </TopBannerExternal>
        <RolePicker ref={modalRef} me={me} businesses={businesses} onEntitySelect={async entity => {
        let role: User['role'];
        if (entity.name === me.name) {
          role = 'meg';
        } else if (entity.type === 'Organization') {
          role = 'virksomhet';
        } else {
          role = 'andre';
        }
        setUser({
          role: role,
          name: entity.name,
          orgnr: '999 999 999'
        });
        modalRef.current?.close();
      }} />
      </>;
  }
} satisfies Story`,...(F=(C=E.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const fe=["Preview","ExampleWithRolePicker","ExampleWithUserMenu"],je=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithRolePicker:c,ExampleWithUserMenu:E,Preview:u,__namedExportsOrder:fe,default:Re},Symbol.toStringTag,{value:"Module"}));export{c as E,je as T,E as a};
//# sourceMappingURL=TopBannerExternal.stories-CFuQ5Ghj.js.map
