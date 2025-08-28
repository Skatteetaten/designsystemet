import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as E}from"./index-D_ouKaeX.js";import{L as i,b as P,B as U}from"./index-Du3yX_TW.js";import{C as N}from"./index-DtTKNpP0.js";import{d as z,l as J}from"./index-CGk5cNE3.js";import{a0 as W,a1 as $,a2 as X,a3 as Y,l as q,s as ne,a4 as te,a5 as re}from"./index-CgEl4Pzg.js";import{T as I}from"./index-palH82_U.js";import{R as Q}from"./index-hcTrRhi3.js";import{P as c,H as g}from"./index-DXWIZOJk.js";import{g as ae,a as se}from"./TopBannerLangPicker-CgqTpUMW.js";import{h as d,c as k}from"./helpers-B90wjoUE.js";import{c as oe}from"./custom-logo-BLbAWs8x.js";import{s as ie}from"./ske-logo-BSCI4sWT.js";import{e as Z}from"./stories.utils-Ys3NG0dr.js";const le="_linkWrapper_ax540_1",ge="_linkWrapperPadding_ax540_4",ke="_noPadding_ax540_8",pe="_marginBottomXL_ax540_12",he="_marginBottomS_ax540_16",de="_marginRightS_ax540_20",Se="_flex_ax540_24",me="_columns_ax540_29",Ee="_secondColumn_ax540_32",a={linkWrapper:le,linkWrapperPadding:ge,noPadding:ke,marginBottomXL:pe,marginBottomS:he,marginRightS:de,flex:Se,columns:me,secondColumn:Ee},ce={component:I,title:"Komponenter/TopBannerExternal",argTypes:{classNames:{control:!1,table:{category:k.props}},showSami:{table:{category:k.props,defaultValue:{summary:String(se())}}},defaultLocale:{table:{control:"text",category:k.props,defaultValue:{summary:ae()}}},children:{control:"text",table:{category:k.props}},skipLink:{control:!1,table:{category:k.props}},logo:{table:{category:k.props},control:"select",options:["",oe,ie]},user:{control:!1,table:{category:k.props}},firstColumn:{control:"text",table:{category:k.props}},secondColumn:{control:"text",table:{category:k.props}},thirdColumn:{control:"text",table:{category:k.props}},additionalLanguages:{control:!1,table:{category:k.props}},searchContent:{control:"text",table:{category:k.props}},onSearchClick:{...d},onSearch:{...d},onLogInClick:{...d},onLogOutClick:{...d},onUserClick:{...d},onLanguageClick:{...d}},args:{onLogInClick:void 0,onLogOutClick:void 0,onUserClick:void 0},parameters:{layout:"fullscreen"}},u={},S={render:ee=>{const h=E.useRef(null),p=E.useRef(null),[o,R]=E.useState(),L=n=>{const r=n.currentTarget.lang;z.changeLanguage(J[r])},x=()=>{R(void 0)},_=()=>{var n;(n=h.current)==null||n.showModal()},f={name:"Ola Nordmann",personId:"10101012345",type:"Person"},T={total:3,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization"},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"}]};let w;(n=>{n.PERSON_SKATT="https://www.skatteetaten.no/person/skatt/",n.PERSON_AVGIFTER="https://www.skatteetaten.no/person/avgifter/",n.PERSON_FOLKEREGISTER="https://www.skatteetaten.no/person/folkeregister/",n.PERSON_UTENLANDSK="https://www.skatteetaten.no/person/utenlandsk/",n.PERSON_BETALING_OG_INNKREVING="https://www.skatteetaten.no/person/betaling-og-innkreving/",n.PERSON_FORSIDE="https://www.skatteetaten.no/person/",n.VIRKSOMHET_SKATT="https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",n.VIRKSOMHET_AVGIFTER="https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",n.VIRKSOMHET_RAPPORTERING_OG_BRANSJER="https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",n.VIRKSOMHET_STARTE_OG_DRIVE="https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",n.VIRKSOMHET_ARBEIDSGIVER="https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",n.VIRKSOMHET_UTENLANDSK="https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",n.VIRKSOMHET_FORSIDE="https://www.skatteetaten.no/bedrift-og-organisasjon/",n.RETTSKILDER="https://www.skatteetaten.no/rettskilder/",n.PRESSE="https://www.skatteetaten.no/presse/",n.SAMARBEIDSPARTNERE="https://www.skatteetaten.no/samarbeidspartnere/",n.KONTAKT="https://www.skatteetaten.no/kontakt/"})(w||(w={}));let O;(n=>{n.SKATT="/web/mineskatteforhold/",n.FOLKEREGISTER="/web/minfolkeregisterside/",n.INNBOKS="/web/innboks/",n.KJORETOY="/web/desta/",n.AKSJEOPPGAVEN="/web/aksjeoppgaven/?referrer=min-side"})(O||(O={}));let v;(n=>{n.VIRKSOMHET_KALENDER="/virksomhet/kalender",n.VIRKSOMHET_KRAVOVERSIKT="/virksomhet/kravoversikt",n.PERSON_FORSIDE="/person",n.PERSON_ARBEIDINNTEKT="/person/arbeidinntekt",n.PERSON_EIENDOMMER="/person/eiendommer",n.PERSON_KRAVOVERSIKT="/person/kravoversikt",n.PERSON_SAKSTATUS="/person/sakstatus",n.VIRKSOMHET_SAKSTATUS="/virksomhet/sakstatus"})(v||(v={}));const K=[{href:"/person",text:"Min side"},{href:"/web/mineskatteforhold/",text:"Skatt"},{href:"/web/minfolkeregisterside/",text:"Folkeregister"},{href:"/web/innboks/",text:"Innboks"},{href:"/person/sakstatus",text:"Mine saker"},{href:"/person/kravoversikt",text:"Krav og betalinger"},{href:"/web/desta/",text:"Bil og andre kjøretøy"},{href:"/person/arbeidinntekt",text:"Arbeid og inntekt"},{href:"/web/aksjeoppgaven/?referrer=min-side",text:"Aksjeoppgaven"},{href:"/person/eiendommer",text:"Eiendommer"}],A=[{href:"https://www.skatteetaten.no/person/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/person/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/person/folkeregister/",text:"Folkeregisteret"},{href:"https://www.skatteetaten.no/person/utenlandsk/",text:"Utenlandsk"},{href:"https://www.skatteetaten.no/person/betaling-og-innkreving/",text:"Betaling og innkreving"}],b=[{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",text:"Rapportering og bransjer"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",text:"Starte, drive og avslutte"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",text:"Arbeidsgiver"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",text:"Utenlandsk"}],t=[{href:"web/minside/virksomhet/",text:"Min side"},{href:"/virksomhet/kalender",text:"Kalender"},{href:"/virksomhet/kravoversikt",text:"Krav og betalinger"},{href:"/virksomhet/sakstatus",text:"Mine saker"},{href:"/web/innboks/",text:"Innboks"}];return e.jsxs(e.Fragment,{children:[e.jsx(I,{ref:p,classNames:{columns:a.columns},firstColumn:o?e.jsx(N,{spacing:"s",children:e.jsxs(N.Content,{children:[e.jsxs(g,{as:"h2",level:3,children:[o.role==="meg"&&e.jsx(W,{className:a.marginRightS}),o.role==="andre"&&e.jsx($,{className:a.marginRightS}),o.role==="virksomhet"&&e.jsx(X,{className:a.marginRightS}),(o==null?void 0:o.role)==="meg"?"Mitt innhold":o.name]}),e.jsx(c,{variant:"ingress",children:"Se, endre og send inn"}),e.jsx("ul",{className:`${a.linkWrapper} ${a.linkWrapperPadding}`,children:(o.role==="virksomhet"?t:K).map((n,r)=>e.jsx("li",{className:a.marginBottomS,children:e.jsx(P,{href:n.href,onClick:s=>{var l,j;s.preventDefault(),(j=(l=p.current)==null?void 0:l.closeMenu)==null||j.call(l)},children:n.text})},r))})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(g,{as:"h2",level:3,className:a.flex,children:[e.jsx(Y,{className:a.marginRightS,size:"largePlus"}),"Min side"]}),e.jsx(c,{className:a.marginBottomS,children:"Se dine oppgaver og oversikt. Les og svar på meldinger."}),e.jsx(U,{svgPath:q,children:"Logg inn"})]}),secondColumn:e.jsxs(e.Fragment,{children:[e.jsx(g,{as:"h2",level:2,hasSpacing:!0,children:"Alle temaer"}),e.jsxs("div",{className:a.secondColumn,children:[e.jsxs("div",{children:[e.jsx(g,{as:"h3",level:3,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/person/",children:"For personer"})}),e.jsx(i,{className:a.marginBottomXL,children:A.map(n=>e.jsx(i.Link,{href:n.href,onClick:r=>{var s,l;r.preventDefault(),(l=(s=p.current)==null?void 0:s.closeMenu)==null||l.call(s)},children:n.text},n.text))}),e.jsx(g,{as:"h3",level:3,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/",children:"For bedrifter og organisasjoner"})}),e.jsx(i,{className:a.marginBottomXL,children:b.map(n=>e.jsx(i.Link,{href:n.href,onClick:r=>{var s,l;r.preventDefault(),(l=(s=p.current)==null?void 0:s.closeMenu)==null||l.call(s)},children:n.text},n.text))})]}),e.jsxs("div",{children:[e.jsx(g,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/rettskilder/",children:"Rettskilder"})}),e.jsx(g,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/presse/",children:"Presse"})}),e.jsx(g,{as:"h3",level:4,className:a.marginBottomXL,children:e.jsx("a",{href:"https://www.skatteetaten.no/samarbeidspartnere/",children:"Samarbeidspartner"})}),e.jsx(g,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/kontakt/",children:"Kontakt oss"})})]})]})]}),user:o,searchContent:e.jsxs(e.Fragment,{children:[e.jsx(c,{className:a.marginBottomS,children:"Dette har andre søkt på:"}),e.jsxs(i,{children:[e.jsx(i.Link,{href:"#",children:"Se skatteoppgjøret ditt"}),e.jsx(i.Link,{href:"#",children:"Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift"}),e.jsx(i.Link,{href:"#",children:"Se dine skattekrav og betalinger"})]})]}),onLanguageClick:L,onLogInClick:_,onLogOutClick:x,onUserClick:()=>{var n;return(n=h.current)==null?void 0:n.showModal()},onSearch:(n,r)=>{alert(`søker etter ${r}`)},onSearchClick:(n,r)=>{alert(`søker etter ${r}`)}}),e.jsx(Q,{ref:h,me:f,businesses:T,onEntitySelect:async n=>{var s;let r;n.name===f.name?r="meg":n.type==="Organization"?r="virksomhet":r="andre",R({role:r,name:n.name}),(s=h.current)==null||s.close()}})]})}};S.parameters=Z;const m={render:ee=>{const h=E.useRef(null),p=E.useRef(null),[o,R]=E.useState(),L=t=>{const n=t.currentTarget.lang;z.changeLanguage(J[n])},x={name:"Ola Nordmann",personId:"10101012345",type:"Person"},_={total:3,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization"},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"}]};let f;(t=>{t.PERSON_SKATT="https://www.skatteetaten.no/person/skatt/",t.PERSON_AVGIFTER="https://www.skatteetaten.no/person/avgifter/",t.PERSON_FOLKEREGISTER="https://www.skatteetaten.no/person/folkeregister/",t.PERSON_UTENLANDSK="https://www.skatteetaten.no/person/utenlandsk/",t.PERSON_BETALING_OG_INNKREVING="https://www.skatteetaten.no/person/betaling-og-innkreving/",t.PERSON_FORSIDE="https://www.skatteetaten.no/person/",t.VIRKSOMHET_SKATT="https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",t.VIRKSOMHET_AVGIFTER="https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",t.VIRKSOMHET_RAPPORTERING_OG_BRANSJER="https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",t.VIRKSOMHET_STARTE_OG_DRIVE="https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",t.VIRKSOMHET_ARBEIDSGIVER="https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",t.VIRKSOMHET_UTENLANDSK="https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",t.VIRKSOMHET_FORSIDE="https://www.skatteetaten.no/bedrift-og-organisasjon/",t.RETTSKILDER="https://www.skatteetaten.no/rettskilder/",t.RETTSKILDER_PER_EMNE="https://www.skatteetaten.no/rettskilder/emne/",t.RETTSKILDER_PER_TYPE="https://www.skatteetaten.no/rettskilder/type/",t.OM_OSS_KONTAKT="https://www.skatteetaten.no/kontakt/",t.OM_OSS_DELING_AV_DATA="https://www.skatteetaten.no/deling/",t.OM_OSS_PRESSE="https://www.skatteetaten.no/presse/"})(f||(f={}));let T;(t=>{t.SKATT="/web/mineskatteforhold/",t.FOLKEREGISTER="/web/minfolkeregisterside/",t.INNBOKS="/web/innboks/",t.KJORETOY="/web/desta/",t.AKSJEOPPGAVEN="/web/aksjeoppgaven/?referrer=min-side"})(T||(T={}));let w;(t=>{t.VIRKSOMHET_KALENDER="/virksomhet/kalender",t.VIRKSOMHET_KRAVOVERSIKT="/virksomhet/kravoversikt",t.PERSON_FORSIDE="/person",t.PERSON_ARBEIDINNTEKT="/person/arbeidinntekt",t.PERSON_EIENDOMMER="/person/eiendommer",t.PERSON_KRAVOVERSIKT="/person/kravoversikt",t.PERSON_SAKSTATUS="/person/sakstatus",t.VIRKSOMHET_SAKSTATUS="/virksomhet/sakstatus"})(w||(w={}));const O=[{href:"/person",text:"Min side"},{href:"/web/mineskatteforhold/",text:"Skatt"},{href:"/web/minfolkeregisterside/",text:"Folkeregister"},{href:"/web/innboks/",text:"Innboks"},{href:"/person/sakstatus",text:"Mine saker"},{href:"/person/kravoversikt",text:"Krav og betalinger"},{href:"/web/desta/",text:"Bil og andre kjøretøy"},{href:"/person/arbeidinntekt",text:"Arbeid og inntekt"},{href:"/web/aksjeoppgaven/?referrer=min-side",text:"Aksjeoppgaven"},{href:"/person/eiendommer",text:"Eiendommer"}],v=[{href:"https://www.skatteetaten.no/person/",text:"Person forside"},{href:"https://www.skatteetaten.no/person/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/person/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/person/folkeregister/",text:"Folkeregisteret"},{href:"https://www.skatteetaten.no/person/utenlandsk/",text:"Utenlandsk"},{href:"https://www.skatteetaten.no/person/betaling-og-innkreving/",text:"Betaling og innkreving"}],K=[{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",text:"Rapportering og bransjer"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",text:"Starte og drive"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",text:"Arbeidsgiver"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",text:"Utenlandsk"}],A=[{href:"web/minside/virksomhet/",text:"Min side"},{href:"/virksomhet/kalender",text:"Kalender"},{href:"/virksomhet/kravoversikt",text:"Krav og betalinger"},{href:"/virksomhet/sakstatus",text:"Mine saker"},{href:"/web/innboks/",text:"Innboks"}],b=[{href:"https://www.skatteetaten.no/kontakt/",text:"Kontakt oss",svgPath:ne},{href:"https://www.skatteetaten.no/kontakt/",text:"Deling av data",svgPath:te},{href:"https://www.skatteetaten.no/kontakt/",text:"Presse",svgPath:re}];return e.jsxs(e.Fragment,{children:[e.jsx(I,{ref:p,classNames:{columns:a.columns},firstColumn:o?e.jsx(N,{spacing:"s",children:e.jsxs(N.Content,{children:[e.jsxs(g,{as:"h2",level:3,children:[o.role==="meg"&&e.jsx(W,{className:a.marginRightS}),o.role==="andre"&&e.jsx($,{className:a.marginRightS}),o.role==="virksomhet"&&e.jsx(X,{className:a.marginRightS}),(o==null?void 0:o.role)==="meg"?"Mitt innhold":o.name]}),e.jsx(c,{variant:"ingress",children:"Se, endre og send inn"}),e.jsx("ul",{className:`${a.linkWrapper} ${a.linkWrapperPadding}`,children:(o.role==="virksomhet"?A:O).map((t,n)=>e.jsx("li",{className:a.marginBottomS,children:e.jsx(P,{href:t.href,onClick:r=>{var s,l;r.preventDefault(),(l=(s=p.current)==null?void 0:s.closeMenu)==null||l.call(s)},children:t.text})},n))})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(g,{as:"h2",level:3,className:a.flex,children:[e.jsx(Y,{className:a.marginRightS,size:"largePlus"}),"Min side"]}),e.jsx(c,{className:a.marginBottomS,children:"Se dine oppgaver og oversikt. Les og svar på meldinger"}),e.jsx(U,{svgPath:q,children:"Logg inn på min side"})]}),secondColumn:e.jsxs(e.Fragment,{children:[e.jsx(g,{as:"h2",level:2,hasSpacing:!0,children:"Alle temaer"}),e.jsxs("div",{className:a.secondColumn,children:[e.jsxs("div",{children:[e.jsx(g,{as:"h3",level:3,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/person/",children:"For personer"})}),e.jsx(i,{className:a.marginBottomXL,children:v.map(t=>e.jsx(i.Link,{href:t.href,onClick:n=>{var r,s;n.preventDefault(),(s=(r=p.current)==null?void 0:r.closeMenu)==null||s.call(r)},children:t.text},t.text))}),e.jsx(g,{as:"h3",level:3,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/",children:"For bedrifter og organisasjoner"})}),e.jsx(i,{className:a.marginBottomXL,children:K.map(t=>e.jsx(i.Link,{href:t.href,onClick:n=>{var r,s;n.preventDefault(),(s=(r=p.current)==null?void 0:r.closeMenu)==null||s.call(r)},children:t.text},t.text))})]}),e.jsxs("div",{children:[e.jsx(g,{as:"h3",level:3,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/rettskilder/",children:"Rettskilder"})}),e.jsxs(i,{className:a.marginBottomXL,children:[e.jsx(i.Link,{href:"https://www.skatteetaten.no/rettskilder/emne/",children:"Rettskilder per emne"}),e.jsx(i.Link,{href:"https://www.skatteetaten.no/rettskilder/type/",onClick:t=>{var n,r;t.preventDefault(),(r=(n=p.current)==null?void 0:n.closeMenu)==null||r.call(n)},children:"Rettskilder per type"})]}),e.jsx(g,{as:"h3",level:3,hasSpacing:!0,children:"Om oss"}),e.jsx("ul",{className:`${a.linkWrapper} ${a.noPadding}`,children:b.map((t,n)=>e.jsx("li",{className:a.marginBottomS,children:e.jsx(P,{href:t.href,svgPath:t.svgPath,onClick:r=>{var s,l;r.preventDefault(),(l=(s=p.current)==null?void 0:s.closeMenu)==null||l.call(s)},children:t.text})},n))})]})]})]}),searchContent:e.jsxs(e.Fragment,{children:[e.jsx(c,{className:a.marginBottomS,children:"Dette har andre søkt på:"}),e.jsxs(i,{children:[e.jsx(i.Link,{href:"#",children:"Se skatteoppgjøret ditt"}),e.jsx(i.Link,{href:"#",children:"Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift"}),e.jsx(i.Link,{href:"#",children:"Se dine skattekrav og betalinger"})]})]}),onLanguageClick:L,onLogInClick:o?void 0:()=>{var t;return(t=h.current)==null?void 0:t.showModal()},onSearch:(t,n)=>{alert(`søker etter ${n}`)},onSearchClick:(t,n)=>{alert(`søker etter ${n}`)},children:o&&e.jsx(I.UserMenu,{user:o,notificationCount:1,onLogOutClick:()=>R(void 0),onSwitchUserClick:()=>{var t;return(t=h.current)==null?void 0:t.showModal()}})}),e.jsx(Q,{ref:h,me:x,businesses:_,onEntitySelect:async t=>{var r;let n;t.name===x.name?n="meg":t.type==="Organization"?n="virksomhet":n="andre",R({role:n,name:t.name,orgnr:"999 999 999"}),(r=h.current)==null||r.close()}})]})}};m.parameters=Z;var M,B,V;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:"{} satisfies Story",...(V=(B=u.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var G,D,y;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
      </>;
  }
} satisfies Story`,...(y=(D=S.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var H,C,F;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const topBannerRef = useRef<TopBannerExternalHandle>(null);
    const [user, setUser] = useState<User>();
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
            </>} onLanguageClick={handleLanguageClick} onLogInClick={!user ? (): void => modalRef.current?.showModal() : undefined} onSearch={(e, value) => {
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
} satisfies Story`,...(F=(C=m.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const Re=["Preview","ExampleWithRolePicker","ExampleWithUserMenu"],Pe=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithRolePicker:S,ExampleWithUserMenu:m,Preview:u,__namedExportsOrder:Re,default:ce},Symbol.toStringTag,{value:"Module"}));export{S as E,Pe as T,m as a};
//# sourceMappingURL=TopBannerExternal.stories-Br13g3C3.js.map
