import{h as m,e as g,r as E,j as e,m as U,d as b,o as _}from"./iframe-CBOQuZmX.js";import{L as l,b as j,B as M}from"./index-BxmwhRWV.js";import{C as N}from"./index-haEYng38.js";import{a1 as P,a2 as B,a3 as V,a4 as y,o as D}from"./index-tEZUkoN5.js";import{T as I}from"./index-CHesE-0v.js";import{R as G}from"./index-B2Uv0TYg.js";import{P as h,H as o}from"./index-B4-BoLKC.js";import{g as z,a as J}from"./TopBannerLangPicker-SaEGrlJh.js";import{c as X}from"./custom-logo-DEIvZMaT.js";import{s as W}from"./ske-logo-HvnPnzIi.js";import{e as H}from"./stories.utils-CZ5hej_8.js";import{t as r}from"./TopBannerExternalExample.module-D-cyqUXs.js";const $={component:I,title:"Komponenter/TopBannerExternal",argTypes:{classNames:{control:!1,table:{category:g.props}},showSami:{table:{category:g.props,defaultValue:{summary:String(J())}}},defaultLocale:{table:{control:"text",category:g.props,defaultValue:{summary:z()}}},children:{control:"text",table:{category:g.props}},skipLink:{control:!1,table:{category:g.props}},logo:{table:{category:g.props},control:"select",options:["",X,W]},user:{control:!1,table:{category:g.props}},firstColumn:{control:"text",table:{category:g.props}},secondColumn:{control:"text",table:{category:g.props}},thirdColumn:{control:"text",table:{category:g.props}},additionalLanguages:{control:!1,table:{category:g.props}},searchContent:{control:"text",table:{category:g.props}},onSearchClick:{...m},onSearch:{...m},onLogInClick:{...m},onLogOutClick:{...m},onUserClick:{...m},onLanguageClick:{...m}},args:{onLogInClick:void 0,onLogOutClick:void 0,onUserClick:void 0},parameters:{layout:"fullscreen"}},f={},S={render:C=>{const k=E.useRef(null),p=E.useRef(null),[a,d]=E.useState(),A=n=>{const s=n.currentTarget.lang;b.changeLanguage(_[s])},w={name:"Ola Nordmann",personId:"10101012345",type:"Person"},u={total:3,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization"},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"}]};let x;(n=>{n.PERSON_SKATT="https://www.skatteetaten.no/person/skatt/",n.PERSON_AVGIFTER="https://www.skatteetaten.no/person/avgifter/",n.PERSON_FOLKEREGISTER="https://www.skatteetaten.no/person/folkeregister/",n.PERSON_UTENLANDSK="https://www.skatteetaten.no/person/utenlandsk/",n.PERSON_BETALING_OG_INNKREVING="https://www.skatteetaten.no/person/betaling-og-innkreving/",n.PERSON_FORSIDE="https://www.skatteetaten.no/person/",n.VIRKSOMHET_SKATT="https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",n.VIRKSOMHET_AVGIFTER="https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",n.VIRKSOMHET_RAPPORTERING_OG_BRANSJER="https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",n.VIRKSOMHET_STARTE_OG_DRIVE="https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",n.VIRKSOMHET_ARBEIDSGIVER="https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",n.VIRKSOMHET_UTENLANDSK="https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",n.VIRKSOMHET_FORSIDE="https://www.skatteetaten.no/bedrift-og-organisasjon/",n.RETTSKILDER="https://www.skatteetaten.no/rettskilder/",n.PRESSE="https://www.skatteetaten.no/presse/",n.SAMARBEIDSPARTNERE="https://www.skatteetaten.no/samarbeidspartnere/",n.KONTAKT="https://www.skatteetaten.no/kontakt/"})(x||(x={}));let T;(n=>{n.SKATT="/web/mineskatteforhold/",n.FOLKEREGISTER="/web/minfolkeregisterside/",n.INNBOKS="/web/innboks/",n.KJORETOY="/web/desta/",n.AKSJEOPPGAVEN="/web/aksjeoppgaven/?referrer=min-side"})(T||(T={}));let R;(n=>{n.VIRKSOMHET_KALENDER="/virksomhet/kalender",n.VIRKSOMHET_KRAVOVERSIKT="/virksomhet/kravoversikt",n.PERSON_FORSIDE="/person",n.PERSON_ARBEIDINNTEKT="/person/arbeidinntekt",n.PERSON_EIENDOMMER="/person/eiendommer",n.PERSON_KRAVOVERSIKT="/person/kravoversikt",n.PERSON_SAKSTATUS="/person/sakstatus",n.VIRKSOMHET_SAKSTATUS="/virksomhet/sakstatus"})(R||(R={}));const O=[{href:"/person",text:"Min side"},{href:"/web/mineskatteforhold/",text:"Skatt"},{href:"/web/minfolkeregisterside/",text:"Folkeregister"},{href:"/web/innboks/",text:"Innboks"},{href:"/person/sakstatus",text:"Mine saker"},{href:"/person/kravoversikt",text:"Krav og betaling"},{href:"/web/desta/",text:"Bil og andre kjøretøy"},{href:"/person/arbeidinntekt",text:"Arbeid og inntekt"},{href:"/web/aksjeoppgaven/?referrer=min-side",text:"Aksjeoppgaven"},{href:"/person/eiendommer",text:"Eiendommer"}],v=[{href:"https://www.skatteetaten.no/person/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/person/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/person/folkeregister/",text:"Folkeregisteret"},{href:"https://www.skatteetaten.no/person/utenlandsk/",text:"Utenlandsk"},{href:"https://www.skatteetaten.no/person/betaling-og-innkreving/",text:"Betaling og innkreving"}],K=[{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",text:"Rapportering og bransjer"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",text:"Starte, drive og avslutte"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",text:"Arbeidsgiver"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",text:"Utenlandsk"}],L=[{href:"web/minside/virksomhet/",text:"Min side"},{href:"/virksomhet/kalender",text:"Kalender"},{href:"/virksomhet/kravoversikt",text:"Krav og betaling"},{href:"/virksomhet/sakstatus",text:"Mine saker"},{href:"/web/innboks/",text:"Innboks"}];return e.jsxs(e.Fragment,{children:[e.jsx(I,{ref:p,classNames:{columns:r.columns},firstColumn:a?e.jsx(N,{spacing:"s",children:e.jsxs(N.Content,{children:[e.jsxs(o,{as:"h2",level:3,children:[a.role==="meg"&&e.jsx(P,{className:r.marginRightS}),a.role==="andre"&&e.jsx(B,{className:r.marginRightS}),a.role==="virksomhet"&&e.jsx(V,{className:r.marginRightS}),a?.role==="meg"?"Mitt innhold":a.name]}),e.jsx(h,{variant:"ingress",children:"Se, endre og send inn"}),e.jsx("ul",{className:r.linkWrapper,children:(a.role==="virksomhet"?L:O).map((n,s)=>e.jsx("li",{className:r.marginBottomS,children:e.jsx(j,{href:n.href,onClick:t=>{t.preventDefault(),p.current?.closeMenu?.()},children:n.text})},s))})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(o,{as:"h2",level:3,className:r.flex,children:[e.jsx(y,{className:r.marginRightS,size:"largePlus"}),"Min side"]}),e.jsx(h,{className:r.marginBottomS,children:"Se dine oppgaver og oversikt. Les og svar på meldinger."}),e.jsx(M,{svgPath:D,onClick:()=>k.current?.showModal(),children:"Logg inn"})]}),secondColumn:e.jsxs(e.Fragment,{children:[e.jsx(o,{as:"h2",hasSpacing:!0,children:"Alle temaer"}),e.jsxs("div",{className:r.secondColumn,children:[e.jsxs("div",{children:[e.jsx(o,{as:"h3",hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/person/",children:"For personer"})}),e.jsx(l,{className:r.marginBottomXL,children:v.map(n=>e.jsx(l.Link,{href:n.href,onClick:s=>{s.preventDefault(),p.current?.closeMenu?.()},children:n.text},n.text))}),e.jsx(o,{as:"h3",hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/",children:"For bedrifter og organisasjoner"})}),e.jsx(l,{className:r.marginBottomXL,children:K.map(n=>e.jsx(l.Link,{href:n.href,onClick:s=>{s.preventDefault(),p.current?.closeMenu?.()},children:n.text},n.text))})]}),e.jsxs("div",{children:[e.jsx(o,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/rettskilder/",children:"Rettskilder"})}),e.jsx(o,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/presse/",children:"Presse"})}),e.jsx(o,{as:"h3",level:4,className:r.marginBottomXL,children:e.jsx("a",{href:"https://www.skatteetaten.no/samarbeidspartnere/",children:"Samarbeidspartner"})}),e.jsx(o,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/kontakt/",children:"Kontakt oss"})})]})]})]}),user:a,searchContent:e.jsxs(e.Fragment,{children:[e.jsx(h,{className:r.marginBottomS,children:"Dette har andre søkt på:"}),e.jsxs(l,{children:[e.jsx(l.Link,{href:"#",children:"Se skatteoppgjøret ditt"}),e.jsx(l.Link,{href:"#",children:"Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift"}),e.jsx(l.Link,{href:"#",children:"Se dine skattekrav og betalinger"})]})]}),onLanguageClick:A,onLogInClick:()=>k.current?.showModal(),onLogOutClick:()=>d(void 0),onUserClick:()=>k.current?.showModal(),onSearch:(n,s)=>{alert(`søker etter ${s}`)},onSearchClick:(n,s)=>{alert(`søker etter ${s}`)}}),e.jsx(G,{ref:k,me:w,businesses:u,onEntitySelect:async n=>{let s;n.name===w.name?s="meg":n.type==="Organization"?s="virksomhet":s="andre",d({role:s,name:n.name}),k.current?.close()}}),e.jsx("main",{className:"breadcrumbs--external",children:e.jsx(h,{variant:"ingress",hasSpacing:!0,children:'Utgående mønster. Se "Example With User Menu" i stedet.'})})]})}};S.parameters=H;const c={render:C=>{const k=E.useRef(null),p=E.useRef(null),[a,d]=E.useState(),A=U("(min-width: 640px)"),w=t=>{const i=t.currentTarget.lang;b.changeLanguage(_[i])},u={name:"Ola Nordmann",personId:"10101012345",type:"Person"},x={total:2,list:[{name:"Kari Nordmann",personId:"10107554321",type:"Person"},{name:"Ola Hansen",personId:"10108167890",type:"Person"}]},T={total:3,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization"},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"}]};let R;(t=>{t.PERSON_SKATT="https://www.skatteetaten.no/person/skatt/",t.PERSON_AVGIFTER="https://www.skatteetaten.no/person/avgifter/",t.PERSON_FOLKEREGISTER="https://www.skatteetaten.no/person/folkeregister/",t.PERSON_UTENLANDSK="https://www.skatteetaten.no/person/utenlandsk/",t.PERSON_BETALING_OG_INNKREVING="https://www.skatteetaten.no/person/betaling-og-innkreving/",t.PERSON_FORSIDE="https://www.skatteetaten.no/person/",t.VIRKSOMHET_SKATT="https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",t.VIRKSOMHET_AVGIFTER="https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",t.VIRKSOMHET_RAPPORTERING_OG_BRANSJER="https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",t.VIRKSOMHET_STARTE_OG_DRIVE="https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",t.VIRKSOMHET_ARBEIDSGIVER="https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",t.VIRKSOMHET_UTENLANDSK="https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",t.VIRKSOMHET_FORSIDE="https://www.skatteetaten.no/bedrift-og-organisasjon/",t.RETTSKILDER="https://www.skatteetaten.no/rettskilder/",t.PRESSE="https://www.skatteetaten.no/presse/",t.SAMARBEIDSPARTNERE="https://www.skatteetaten.no/samarbeidspartnere/",t.KONTAKT="https://www.skatteetaten.no/kontakt/"})(R||(R={}));let O;(t=>{t.SKATT="/web/mineskatteforhold/",t.FOLKEREGISTER="/web/minfolkeregisterside/",t.INNBOKS="/web/innboks/",t.KJORETOY="/web/desta/",t.AKSJEOPPGAVEN="/web/aksjeoppgaven/?referrer=min-side"})(O||(O={}));let v;(t=>{t.VIRKSOMHET_KALENDER="/virksomhet/kalender",t.VIRKSOMHET_KRAVOVERSIKT="/virksomhet/kravoversikt",t.PERSON_FORSIDE="/person",t.PERSON_ARBEIDINNTEKT="/person/arbeidinntekt",t.PERSON_EIENDOMMER="/person/eiendommer",t.PERSON_KRAVOVERSIKT="/person/kravoversikt",t.PERSON_SAKSTATUS="/person/sakstatus",t.VIRKSOMHET_SAKSTATUS="/virksomhet/sakstatus"})(v||(v={}));const K=[{href:"/person",text:"Min side"},{href:"/web/mineskatteforhold/",text:"Skatt"},{href:"/web/minfolkeregisterside/",text:"Folkeregister"},{href:"/web/innboks/",text:"Innboks"},{href:"/person/sakstatus",text:"Mine saker"},{href:"/person/kravoversikt",text:"Krav og betaling"},{href:"/web/desta/",text:"Bil og andre kjøretøy"},{href:"/person/arbeidinntekt",text:"Arbeid og inntekt"},{href:"/web/aksjeoppgaven/?referrer=min-side",text:"Aksjeoppgaven"},{href:"/person/eiendommer",text:"Eiendommer"}],L=[{href:"https://www.skatteetaten.no/person/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/person/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/person/folkeregister/",text:"Folkeregisteret"},{href:"https://www.skatteetaten.no/person/utenlandsk/",text:"Utenlandsk"},{href:"https://www.skatteetaten.no/person/betaling-og-innkreving/",text:"Betaling og innkreving"}],n=[{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",text:"Rapportering og bransjer"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",text:"Starte, drive og avslutte"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",text:"Arbeidsgiver"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",text:"Utenlandsk"}],s=[{href:"web/minside/virksomhet/",text:"Min side"},{href:"/virksomhet/kalender",text:"Kalender"},{href:"/virksomhet/kravoversikt",text:"Krav og betaling"},{href:"/virksomhet/sakstatus",text:"Mine saker"},{href:"/web/innboks/",text:"Innboks"}];return e.jsxs(e.Fragment,{children:[e.jsx(I,{ref:p,classNames:{columns:r.columns},firstColumn:a?e.jsx(N,{spacing:"s",children:e.jsxs(N.Content,{children:[e.jsxs(o,{as:"h2",level:3,children:[a.role==="meg"&&e.jsx(P,{className:r.marginRightS}),a.role==="andre"&&e.jsx(B,{className:r.marginRightS}),a.role==="virksomhet"&&e.jsx(V,{className:r.marginRightS}),a?.role==="meg"?"Mitt innhold":a.name]}),e.jsx(h,{variant:"ingress",children:"Se, endre og send inn"}),e.jsx("ul",{className:r.linkWrapper,children:(a.role==="virksomhet"?s:K).map((t,i)=>e.jsx("li",{className:r.marginBottomS,children:e.jsx(j,{href:t.href,onClick:F=>{F.preventDefault(),p.current?.closeMenu?.()},children:t.text})},i))})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(o,{as:"h2",level:3,className:r.flex,children:[e.jsx(y,{className:r.marginRightS,size:"largePlus"}),"Min side"]}),e.jsx(h,{className:r.marginBottomS,children:"Se dine oppgaver og oversikt. Les og svar på meldinger."}),e.jsx(M,{svgPath:D,onClick:()=>k.current?.showModal(),children:"Logg inn"})]}),secondColumn:e.jsxs(e.Fragment,{children:[e.jsx(o,{as:"h2",hasSpacing:!0,children:"Alle temaer"}),e.jsxs("div",{className:r.secondColumn,children:[e.jsxs("div",{children:[e.jsx(o,{as:"h3",hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/person/",children:"For personer"})}),e.jsx(l,{className:r.marginBottomXL,children:L.map(t=>e.jsx(l.Link,{href:t.href,onClick:i=>{i.preventDefault(),p.current?.closeMenu?.()},children:t.text},t.text))}),e.jsx(o,{as:"h3",hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/",children:"For bedrifter og organisasjoner"})}),e.jsx(l,{className:r.marginBottomXL,children:n.map(t=>e.jsx(l.Link,{href:t.href,onClick:i=>{i.preventDefault(),p.current?.closeMenu?.()},children:t.text},t.text))})]}),e.jsxs("div",{children:[e.jsx(o,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/rettskilder/",children:"Rettskilder"})}),e.jsx(o,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/presse/",children:"Presse"})}),e.jsx(o,{as:"h3",level:4,className:r.marginBottomXL,children:e.jsx("a",{href:"https://www.skatteetaten.no/samarbeidspartnere/",children:"Samarbeidspartner"})}),e.jsx(o,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/kontakt/",children:"Kontakt oss"})})]})]})]}),searchContent:e.jsxs(e.Fragment,{children:[e.jsx(h,{className:r.marginBottomS,children:"Dette har andre søkt på:"}),e.jsxs(l,{children:[e.jsx(l.Link,{href:"#",children:"Se skatteoppgjøret ditt"}),e.jsx(l.Link,{href:"#",children:"Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift"}),e.jsx(l.Link,{href:"#",children:"Se dine skattekrav og betalinger"})]})]}),user:a,onLogOutClick:A?()=>d(void 0):void 0,onLanguageClick:w,onLogInClick:a?void 0:()=>k.current?.showModal(),onSearch:(t,i)=>{alert(`søker etter ${i}`)},onSearchClick:(t,i)=>{alert(`søker etter ${i}`)},children:a&&e.jsx(I.UserMenu,{user:a,notificationCount:1,onLogOutClick:()=>d(void 0),onSwitchUserClick:()=>k.current?.showModal()})}),e.jsx(G,{ref:k,me:u,people:x,businesses:T,onEntitySelect:async t=>{let i;t.name===u.name?i="meg":t.type==="Organization"?i="virksomhet":i="andre",d({role:i,name:t.name,orgnr:"999 999 999"}),k.current?.close()}})]})}};c.parameters=H;f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{} satisfies Story",...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      text: 'Krav og betaling'
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
      text: 'Krav og betaling'
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
                  <ul className={topBannerExternalExampleStyles.linkWrapper}>
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
                <Button svgPath={LockOutlineSVGpath} onClick={() => modalRef.current?.showModal()}>
                  {'Logg inn'}
                </Button>
              </>} secondColumn={<>
              <Heading as={'h2'} hasSpacing>
                {'Alle temaer'}
              </Heading>
              <div className={topBannerExternalExampleStyles.secondColumn}>
                <div>
                  <Heading as={'h3'} hasSpacing>
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
                  <Heading as={'h3'} hasSpacing>
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
            </>} onLanguageClick={handleLanguageClick} onLogInClick={() => modalRef.current?.showModal()} onLogOutClick={() => setUser(undefined)} onUserClick={(): void => modalRef.current?.showModal()} onSearch={(e, value) => {
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
} satisfies Story`,...S.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    const others: Paginated<Person> = {
      total: 2,
      list: [{
        name: 'Kari Nordmann',
        personId: '10107554321',
        type: 'Person'
      }, {
        name: 'Ola Hansen',
        personId: '10108167890',
        type: 'Person'
      }]
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
      text: 'Krav og betaling'
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
      text: 'Krav og betaling'
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
                  <ul className={topBannerExternalExampleStyles.linkWrapper}>
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
                <Button svgPath={LockOutlineSVGpath} onClick={() => modalRef.current?.showModal()}>
                  {'Logg inn'}
                </Button>
              </>} secondColumn={<>
              <Heading as={'h2'} hasSpacing>
                {'Alle temaer'}
              </Heading>
              <div className={topBannerExternalExampleStyles.secondColumn}>
                <div>
                  <Heading as={'h3'} hasSpacing>
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
                  <Heading as={'h3'} hasSpacing>
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
        <RolePicker ref={modalRef} me={me} people={others} businesses={businesses} onEntitySelect={async entity => {
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
} satisfies Story`,...c.parameters?.docs?.source}}};const Y=["Preview","ExampleWithRolePicker","ExampleWithUserMenu"],ge=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithRolePicker:S,ExampleWithUserMenu:c,Preview:f,__namedExportsOrder:Y,default:$},Symbol.toStringTag,{value:"Module"}));export{S as E,ge as T,c as a};
//# sourceMappingURL=TopBannerExternal.stories-Dx0tFe_a.js.map
