import{h as d,e as l,r as c,j as e,l as F,d as L,n as b}from"./iframe-Br1Xu9zr.js";import{L as i,b as _,B as j}from"./index-Mga-TJ2K.js";import{C as v}from"./index-BVXicwjt.js";import{a1 as M,a2 as P,a3 as B,a4 as V,o as D}from"./index-Xbc0duXx.js";import{T as O}from"./index-B4Z_eEFc.js";import{R as G}from"./index--7Yk7F8k.js";import{P as p,H as o}from"./index-DCwxX22m.js";import{g as U,a as z}from"./TopBannerLangPicker-Qt_63Ygu.js";import{c as J}from"./custom-logo-CsipwxXe.js";import{s as X}from"./ske-logo-DgW1fI8N.js";import{e as y}from"./stories.utils-CZ5hej_8.js";import{t as r}from"./TopBannerExternalExample.module-D-cyqUXs.js";const W={component:O,title:"Komponenter/TopBannerExternal",argTypes:{classNames:{control:!1,table:{category:l.props}},showSami:{table:{category:l.props,defaultValue:{summary:String(z())}}},defaultLocale:{table:{control:"text",category:l.props,defaultValue:{summary:U()}}},children:{control:"text",table:{category:l.props}},skipLink:{control:!1,table:{category:l.props}},logo:{table:{category:l.props},control:"select",options:["",J,X]},user:{control:!1,table:{category:l.props}},firstColumn:{control:"text",table:{category:l.props}},secondColumn:{control:"text",table:{category:l.props}},thirdColumn:{control:"text",table:{category:l.props}},additionalLanguages:{control:!1,table:{category:l.props}},searchContent:{control:"text",table:{category:l.props}},onSearchClick:{...d},onSearch:{...d},onLogInClick:{...d},onLogOutClick:{...d},onUserClick:{...d},onLanguageClick:{...d}},args:{onLogInClick:void 0,onLogOutClick:void 0,onUserClick:void 0},parameters:{layout:"fullscreen"}},f={},S={render:H=>{const g=c.useRef(null),k=c.useRef(null),[a,h]=c.useState(),N=t=>{const n=t.currentTarget.lang;L.changeLanguage(b[n])},w={name:"Ola Nordmann",personId:"10101012345",type:"Person"},u={total:3,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization"},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"}]};let x;(t=>{t.PERSON_SKATT="https://www.skatteetaten.no/person/skatt/",t.PERSON_AVGIFTER="https://www.skatteetaten.no/person/avgifter/",t.PERSON_FOLKEREGISTER="https://www.skatteetaten.no/person/folkeregister/",t.PERSON_UTENLANDSK="https://www.skatteetaten.no/person/utenlandsk/",t.PERSON_BETALING_OG_INNKREVING="https://www.skatteetaten.no/person/betaling-og-innkreving/",t.PERSON_FORSIDE="https://www.skatteetaten.no/person/",t.VIRKSOMHET_SKATT="https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",t.VIRKSOMHET_AVGIFTER="https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",t.VIRKSOMHET_RAPPORTERING_OG_BRANSJER="https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",t.VIRKSOMHET_STARTE_OG_DRIVE="https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",t.VIRKSOMHET_ARBEIDSGIVER="https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",t.VIRKSOMHET_UTENLANDSK="https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",t.VIRKSOMHET_FORSIDE="https://www.skatteetaten.no/bedrift-og-organisasjon/",t.RETTSKILDER="https://www.skatteetaten.no/rettskilder/",t.PRESSE="https://www.skatteetaten.no/presse/",t.SAMARBEIDSPARTNERE="https://www.skatteetaten.no/samarbeidspartnere/",t.KONTAKT="https://www.skatteetaten.no/kontakt/"})(x||(x={}));let E;(t=>{t.SKATT="/web/mineskatteforhold/",t.FOLKEREGISTER="/web/minfolkeregisterside/",t.INNBOKS="/web/innboks/",t.KJORETOY="/web/desta/",t.AKSJEOPPGAVEN="/web/aksjeoppgaven/?referrer=min-side"})(E||(E={}));let R;(t=>{t.VIRKSOMHET_KALENDER="/virksomhet/kalender",t.VIRKSOMHET_KRAVOVERSIKT="/virksomhet/kravoversikt",t.PERSON_FORSIDE="/person",t.PERSON_ARBEIDINNTEKT="/person/arbeidinntekt",t.PERSON_EIENDOMMER="/person/eiendommer",t.PERSON_KRAVOVERSIKT="/person/kravoversikt",t.PERSON_SAKSTATUS="/person/sakstatus",t.VIRKSOMHET_SAKSTATUS="/virksomhet/sakstatus"})(R||(R={}));const T=[{href:"/person",text:"Min side"},{href:"/web/mineskatteforhold/",text:"Skatt"},{href:"/web/minfolkeregisterside/",text:"Folkeregister"},{href:"/web/innboks/",text:"Innboks"},{href:"/person/sakstatus",text:"Mine saker"},{href:"/person/kravoversikt",text:"Krav og betaling"},{href:"/web/desta/",text:"Bil og andre kjøretøy"},{href:"/person/arbeidinntekt",text:"Arbeid og inntekt"},{href:"/web/aksjeoppgaven/?referrer=min-side",text:"Aksjeoppgaven"},{href:"/person/eiendommer",text:"Eiendommer"}],I=[{href:"https://www.skatteetaten.no/person/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/person/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/person/folkeregister/",text:"Folkeregisteret"},{href:"https://www.skatteetaten.no/person/utenlandsk/",text:"Utenlandsk"},{href:"https://www.skatteetaten.no/person/betaling-og-innkreving/",text:"Betaling og innkreving"}],A=[{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",text:"Rapportering og bransjer"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",text:"Starte, drive og avslutte"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",text:"Arbeidsgiver"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",text:"Utenlandsk"}],K=[{href:"web/minside/virksomhet/",text:"Min side"},{href:"/virksomhet/kalender",text:"Kalender"},{href:"/virksomhet/kravoversikt",text:"Krav og betaling"},{href:"/virksomhet/sakstatus",text:"Mine saker"},{href:"/web/innboks/",text:"Innboks"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{ref:k,classNames:{columns:r.columns},firstColumn:a?e.jsx(v,{spacing:"s",children:e.jsxs(v.Content,{children:[e.jsxs(o,{as:"h2",level:3,children:[a.role==="meg"&&e.jsx(M,{className:r.marginRightS}),a.role==="andre"&&e.jsx(P,{className:r.marginRightS}),a.role==="virksomhet"&&e.jsx(B,{className:r.marginRightS}),a?.role==="meg"?"Mitt innhold":a.name]}),e.jsx(p,{variant:"ingress",children:"Se, endre og send inn"}),e.jsx("ul",{className:r.linkWrapper,children:(a.role==="virksomhet"?K:T).map((t,n)=>e.jsx("li",{className:r.marginBottomS,children:e.jsx(_,{href:t.href,onClick:s=>{s.preventDefault(),k.current?.closeMenu?.()},children:t.text})},n))})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(o,{as:"h2",level:3,className:r.flex,children:[e.jsx(V,{className:r.marginRightS,size:"largePlus"}),"Min side"]}),e.jsx(p,{className:r.marginBottomS,children:"Se dine oppgaver og oversikt. Les og svar på meldinger."}),e.jsx(j,{svgPath:D,onClick:()=>g.current?.showModal(),children:"Logg inn"})]}),secondColumn:e.jsxs(e.Fragment,{children:[e.jsx(o,{as:"h2",level:2,hasSpacing:!0,children:"Alle temaer"}),e.jsxs("div",{className:r.secondColumn,children:[e.jsxs("div",{children:[e.jsx(o,{as:"h3",level:3,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/person/",children:"For personer"})}),e.jsx(i,{className:r.marginBottomXL,children:I.map(t=>e.jsx(i.Link,{href:t.href,onClick:n=>{n.preventDefault(),k.current?.closeMenu?.()},children:t.text},t.text))}),e.jsx(o,{as:"h3",level:3,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/",children:"For bedrifter og organisasjoner"})}),e.jsx(i,{className:r.marginBottomXL,children:A.map(t=>e.jsx(i.Link,{href:t.href,onClick:n=>{n.preventDefault(),k.current?.closeMenu?.()},children:t.text},t.text))})]}),e.jsxs("div",{children:[e.jsx(o,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/rettskilder/",children:"Rettskilder"})}),e.jsx(o,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/presse/",children:"Presse"})}),e.jsx(o,{as:"h3",level:4,className:r.marginBottomXL,children:e.jsx("a",{href:"https://www.skatteetaten.no/samarbeidspartnere/",children:"Samarbeidspartner"})}),e.jsx(o,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/kontakt/",children:"Kontakt oss"})})]})]})]}),user:a,searchContent:e.jsxs(e.Fragment,{children:[e.jsx(p,{className:r.marginBottomS,children:"Dette har andre søkt på:"}),e.jsxs(i,{children:[e.jsx(i.Link,{href:"#",children:"Se skatteoppgjøret ditt"}),e.jsx(i.Link,{href:"#",children:"Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift"}),e.jsx(i.Link,{href:"#",children:"Se dine skattekrav og betalinger"})]})]}),onLanguageClick:N,onLogInClick:()=>g.current?.showModal(),onLogOutClick:()=>h(void 0),onUserClick:()=>g.current?.showModal(),onSearch:(t,n)=>{alert(`søker etter ${n}`)},onSearchClick:(t,n)=>{alert(`søker etter ${n}`)}}),e.jsx(G,{ref:g,me:w,businesses:u,onEntitySelect:async t=>{let n;t.name===w.name?n="meg":t.type==="Organization"?n="virksomhet":n="andre",h({role:n,name:t.name}),g.current?.close()}}),e.jsx("main",{className:"breadcrumbs--external",children:e.jsx(p,{variant:"ingress",hasSpacing:!0,children:'Utgående mønster. Se "Example With User Menu" i stedet.'})})]})}};S.parameters=y;const m={render:H=>{const g=c.useRef(null),k=c.useRef(null),[a,h]=c.useState(),N=F("(min-width: 640px)"),w=n=>{const s=n.currentTarget.lang;L.changeLanguage(b[s])},u={name:"Ola Nordmann",personId:"10101012345",type:"Person"},x={total:3,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization"},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"}]};let E;(n=>{n.PERSON_SKATT="https://www.skatteetaten.no/person/skatt/",n.PERSON_AVGIFTER="https://www.skatteetaten.no/person/avgifter/",n.PERSON_FOLKEREGISTER="https://www.skatteetaten.no/person/folkeregister/",n.PERSON_UTENLANDSK="https://www.skatteetaten.no/person/utenlandsk/",n.PERSON_BETALING_OG_INNKREVING="https://www.skatteetaten.no/person/betaling-og-innkreving/",n.PERSON_FORSIDE="https://www.skatteetaten.no/person/",n.VIRKSOMHET_SKATT="https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",n.VIRKSOMHET_AVGIFTER="https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",n.VIRKSOMHET_RAPPORTERING_OG_BRANSJER="https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",n.VIRKSOMHET_STARTE_OG_DRIVE="https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",n.VIRKSOMHET_ARBEIDSGIVER="https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",n.VIRKSOMHET_UTENLANDSK="https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",n.VIRKSOMHET_FORSIDE="https://www.skatteetaten.no/bedrift-og-organisasjon/",n.RETTSKILDER="https://www.skatteetaten.no/rettskilder/",n.PRESSE="https://www.skatteetaten.no/presse/",n.SAMARBEIDSPARTNERE="https://www.skatteetaten.no/samarbeidspartnere/",n.KONTAKT="https://www.skatteetaten.no/kontakt/"})(E||(E={}));let R;(n=>{n.SKATT="/web/mineskatteforhold/",n.FOLKEREGISTER="/web/minfolkeregisterside/",n.INNBOKS="/web/innboks/",n.KJORETOY="/web/desta/",n.AKSJEOPPGAVEN="/web/aksjeoppgaven/?referrer=min-side"})(R||(R={}));let T;(n=>{n.VIRKSOMHET_KALENDER="/virksomhet/kalender",n.VIRKSOMHET_KRAVOVERSIKT="/virksomhet/kravoversikt",n.PERSON_FORSIDE="/person",n.PERSON_ARBEIDINNTEKT="/person/arbeidinntekt",n.PERSON_EIENDOMMER="/person/eiendommer",n.PERSON_KRAVOVERSIKT="/person/kravoversikt",n.PERSON_SAKSTATUS="/person/sakstatus",n.VIRKSOMHET_SAKSTATUS="/virksomhet/sakstatus"})(T||(T={}));const I=[{href:"/person",text:"Min side"},{href:"/web/mineskatteforhold/",text:"Skatt"},{href:"/web/minfolkeregisterside/",text:"Folkeregister"},{href:"/web/innboks/",text:"Innboks"},{href:"/person/sakstatus",text:"Mine saker"},{href:"/person/kravoversikt",text:"Krav og betaling"},{href:"/web/desta/",text:"Bil og andre kjøretøy"},{href:"/person/arbeidinntekt",text:"Arbeid og inntekt"},{href:"/web/aksjeoppgaven/?referrer=min-side",text:"Aksjeoppgaven"},{href:"/person/eiendommer",text:"Eiendommer"}],A=[{href:"https://www.skatteetaten.no/person/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/person/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/person/folkeregister/",text:"Folkeregisteret"},{href:"https://www.skatteetaten.no/person/utenlandsk/",text:"Utenlandsk"},{href:"https://www.skatteetaten.no/person/betaling-og-innkreving/",text:"Betaling og innkreving"}],K=[{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",text:"Rapportering og bransjer"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",text:"Starte, drive og avslutte"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",text:"Arbeidsgiver"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",text:"Utenlandsk"}],t=[{href:"web/minside/virksomhet/",text:"Min side"},{href:"/virksomhet/kalender",text:"Kalender"},{href:"/virksomhet/kravoversikt",text:"Krav og betaling"},{href:"/virksomhet/sakstatus",text:"Mine saker"},{href:"/web/innboks/",text:"Innboks"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{ref:k,classNames:{columns:r.columns},firstColumn:a?e.jsx(v,{spacing:"s",children:e.jsxs(v.Content,{children:[e.jsxs(o,{as:"h2",level:3,children:[a.role==="meg"&&e.jsx(M,{className:r.marginRightS}),a.role==="andre"&&e.jsx(P,{className:r.marginRightS}),a.role==="virksomhet"&&e.jsx(B,{className:r.marginRightS}),a?.role==="meg"?"Mitt innhold":a.name]}),e.jsx(p,{variant:"ingress",children:"Se, endre og send inn"}),e.jsx("ul",{className:r.linkWrapper,children:(a.role==="virksomhet"?t:I).map((n,s)=>e.jsx("li",{className:r.marginBottomS,children:e.jsx(_,{href:n.href,onClick:C=>{C.preventDefault(),k.current?.closeMenu?.()},children:n.text})},s))})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(o,{as:"h2",level:3,className:r.flex,children:[e.jsx(V,{className:r.marginRightS,size:"largePlus"}),"Min side"]}),e.jsx(p,{className:r.marginBottomS,children:"Se dine oppgaver og oversikt. Les og svar på meldinger."}),e.jsx(j,{svgPath:D,onClick:()=>g.current?.showModal(),children:"Logg inn"})]}),secondColumn:e.jsxs(e.Fragment,{children:[e.jsx(o,{as:"h2",level:2,hasSpacing:!0,children:"Alle temaer"}),e.jsxs("div",{className:r.secondColumn,children:[e.jsxs("div",{children:[e.jsx(o,{as:"h3",level:3,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/person/",children:"For personer"})}),e.jsx(i,{className:r.marginBottomXL,children:A.map(n=>e.jsx(i.Link,{href:n.href,onClick:s=>{s.preventDefault(),k.current?.closeMenu?.()},children:n.text},n.text))}),e.jsx(o,{as:"h3",level:3,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/",children:"For bedrifter og organisasjoner"})}),e.jsx(i,{className:r.marginBottomXL,children:K.map(n=>e.jsx(i.Link,{href:n.href,onClick:s=>{s.preventDefault(),k.current?.closeMenu?.()},children:n.text},n.text))})]}),e.jsxs("div",{children:[e.jsx(o,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/rettskilder/",children:"Rettskilder"})}),e.jsx(o,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/presse/",children:"Presse"})}),e.jsx(o,{as:"h3",level:4,className:r.marginBottomXL,children:e.jsx("a",{href:"https://www.skatteetaten.no/samarbeidspartnere/",children:"Samarbeidspartner"})}),e.jsx(o,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/kontakt/",children:"Kontakt oss"})})]})]})]}),searchContent:e.jsxs(e.Fragment,{children:[e.jsx(p,{className:r.marginBottomS,children:"Dette har andre søkt på:"}),e.jsxs(i,{children:[e.jsx(i.Link,{href:"#",children:"Se skatteoppgjøret ditt"}),e.jsx(i.Link,{href:"#",children:"Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift"}),e.jsx(i.Link,{href:"#",children:"Se dine skattekrav og betalinger"})]})]}),user:a,onLogOutClick:N?()=>h(void 0):void 0,onLanguageClick:w,onLogInClick:a?void 0:()=>g.current?.showModal(),onSearch:(n,s)=>{alert(`søker etter ${s}`)},onSearchClick:(n,s)=>{alert(`søker etter ${s}`)},children:a&&e.jsx(O.UserMenu,{user:a,notificationCount:1,onLogOutClick:()=>h(void 0),onSwitchUserClick:()=>g.current?.showModal()})}),e.jsx(G,{ref:g,me:u,businesses:x,onEntitySelect:async n=>{let s;n.name===u.name?s="meg":n.type==="Organization"?s="virksomhet":s="andre",h({role:s,name:n.name,orgnr:"999 999 999"}),g.current?.close()}})]})}};m.parameters=y;f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{} satisfies Story",...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...S.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};const $=["Preview","ExampleWithRolePicker","ExampleWithUserMenu"],le=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithRolePicker:S,ExampleWithUserMenu:m,Preview:f,__namedExportsOrder:$,default:W},Symbol.toStringTag,{value:"Module"}));export{S as E,le as T,m as a};
//# sourceMappingURL=TopBannerExternal.stories-jEdfyxBI.js.map
