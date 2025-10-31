import{h as m,e as k,r as R,j as e,l as ee,d as C,m as F}from"./iframe-C2uFIQ6s.js";import{L as l,b as U,B as z}from"./index-C2_9aJjw.js";import{C as N}from"./index-BIr7-knc.js";import{Z as J,_ as $,$ as W,a0 as X,l as Y}from"./index-Bs2jIcy5.js";import{T as I}from"./index-BqCnNRLQ.js";import{R as Q}from"./index-CBqgQpW9.js";import{P as d,H as i}from"./index-BEXGZWqo.js";import{g as ne,a as te}from"./TopBannerLangPicker-Dn6hwOPN.js";import{c as re}from"./custom-logo-CtBjtPpz.js";import{s as ae}from"./ske-logo-BeXleE3j.js";import{e as Z}from"./stories.utils-CZ5hej_8.js";import{t as a}from"./TopBannerExternalExample.module-J_szXmUm.js";const se={component:I,title:"Komponenter/TopBannerExternal",argTypes:{classNames:{control:!1,table:{category:k.props}},showSami:{table:{category:k.props,defaultValue:{summary:String(te())}}},defaultLocale:{table:{control:"text",category:k.props,defaultValue:{summary:ne()}}},children:{control:"text",table:{category:k.props}},skipLink:{control:!1,table:{category:k.props}},logo:{table:{category:k.props},control:"select",options:["",re,ae]},user:{control:!1,table:{category:k.props}},firstColumn:{control:"text",table:{category:k.props}},secondColumn:{control:"text",table:{category:k.props}},thirdColumn:{control:"text",table:{category:k.props}},additionalLanguages:{control:!1,table:{category:k.props}},searchContent:{control:"text",table:{category:k.props}},onSearchClick:{...m},onSearch:{...m},onLogInClick:{...m},onLogOutClick:{...m},onUserClick:{...m},onLanguageClick:{...m}},args:{onLogInClick:void 0,onLogOutClick:void 0,onUserClick:void 0},parameters:{layout:"fullscreen"}},u={},c={render:q=>{const p=R.useRef(null),h=R.useRef(null),[o,S]=R.useState(),A=t=>{const n=t.currentTarget.lang;C.changeLanguage(F[n])},x={name:"Ola Nordmann",personId:"10101012345",type:"Person"},T={total:3,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization"},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"}]};let v;(t=>{t.PERSON_SKATT="https://www.skatteetaten.no/person/skatt/",t.PERSON_AVGIFTER="https://www.skatteetaten.no/person/avgifter/",t.PERSON_FOLKEREGISTER="https://www.skatteetaten.no/person/folkeregister/",t.PERSON_UTENLANDSK="https://www.skatteetaten.no/person/utenlandsk/",t.PERSON_BETALING_OG_INNKREVING="https://www.skatteetaten.no/person/betaling-og-innkreving/",t.PERSON_FORSIDE="https://www.skatteetaten.no/person/",t.VIRKSOMHET_SKATT="https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",t.VIRKSOMHET_AVGIFTER="https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",t.VIRKSOMHET_RAPPORTERING_OG_BRANSJER="https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",t.VIRKSOMHET_STARTE_OG_DRIVE="https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",t.VIRKSOMHET_ARBEIDSGIVER="https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",t.VIRKSOMHET_UTENLANDSK="https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",t.VIRKSOMHET_FORSIDE="https://www.skatteetaten.no/bedrift-og-organisasjon/",t.RETTSKILDER="https://www.skatteetaten.no/rettskilder/",t.PRESSE="https://www.skatteetaten.no/presse/",t.SAMARBEIDSPARTNERE="https://www.skatteetaten.no/samarbeidspartnere/",t.KONTAKT="https://www.skatteetaten.no/kontakt/"})(v||(v={}));let f;(t=>{t.SKATT="/web/mineskatteforhold/",t.FOLKEREGISTER="/web/minfolkeregisterside/",t.INNBOKS="/web/innboks/",t.KJORETOY="/web/desta/",t.AKSJEOPPGAVEN="/web/aksjeoppgaven/?referrer=min-side"})(f||(f={}));let w;(t=>{t.VIRKSOMHET_KALENDER="/virksomhet/kalender",t.VIRKSOMHET_KRAVOVERSIKT="/virksomhet/kravoversikt",t.PERSON_FORSIDE="/person",t.PERSON_ARBEIDINNTEKT="/person/arbeidinntekt",t.PERSON_EIENDOMMER="/person/eiendommer",t.PERSON_KRAVOVERSIKT="/person/kravoversikt",t.PERSON_SAKSTATUS="/person/sakstatus",t.VIRKSOMHET_SAKSTATUS="/virksomhet/sakstatus"})(w||(w={}));const O=[{href:"/person",text:"Min side"},{href:"/web/mineskatteforhold/",text:"Skatt"},{href:"/web/minfolkeregisterside/",text:"Folkeregister"},{href:"/web/innboks/",text:"Innboks"},{href:"/person/sakstatus",text:"Mine saker"},{href:"/person/kravoversikt",text:"Krav og betalinger"},{href:"/web/desta/",text:"Bil og andre kjøretøy"},{href:"/person/arbeidinntekt",text:"Arbeid og inntekt"},{href:"/web/aksjeoppgaven/?referrer=min-side",text:"Aksjeoppgaven"},{href:"/person/eiendommer",text:"Eiendommer"}],K=[{href:"https://www.skatteetaten.no/person/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/person/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/person/folkeregister/",text:"Folkeregisteret"},{href:"https://www.skatteetaten.no/person/utenlandsk/",text:"Utenlandsk"},{href:"https://www.skatteetaten.no/person/betaling-og-innkreving/",text:"Betaling og innkreving"}],L=[{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",text:"Rapportering og bransjer"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",text:"Starte, drive og avslutte"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",text:"Arbeidsgiver"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",text:"Utenlandsk"}],b=[{href:"web/minside/virksomhet/",text:"Min side"},{href:"/virksomhet/kalender",text:"Kalender"},{href:"/virksomhet/kravoversikt",text:"Krav og betalinger"},{href:"/virksomhet/sakstatus",text:"Mine saker"},{href:"/web/innboks/",text:"Innboks"}];return e.jsxs(e.Fragment,{children:[e.jsx(I,{ref:h,classNames:{columns:a.columns},firstColumn:o?e.jsx(N,{spacing:"s",children:e.jsxs(N.Content,{children:[e.jsxs(i,{as:"h2",level:3,children:[o.role==="meg"&&e.jsx(J,{className:a.marginRightS}),o.role==="andre"&&e.jsx($,{className:a.marginRightS}),o.role==="virksomhet"&&e.jsx(W,{className:a.marginRightS}),(o==null?void 0:o.role)==="meg"?"Mitt innhold":o.name]}),e.jsx(d,{variant:"ingress",children:"Se, endre og send inn"}),e.jsx("ul",{className:`${a.linkWrapper} ${a.linkWrapperPadding}`,children:(o.role==="virksomhet"?b:O).map((t,n)=>e.jsx("li",{className:a.marginBottomS,children:e.jsx(U,{href:t.href,onClick:r=>{var s,g;r.preventDefault(),(g=(s=h.current)==null?void 0:s.closeMenu)==null||g.call(s)},children:t.text})},n))})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(i,{as:"h2",level:3,className:a.flex,children:[e.jsx(X,{className:a.marginRightS,size:"largePlus"}),"Min side"]}),e.jsx(d,{className:a.marginBottomS,children:"Se dine oppgaver og oversikt. Les og svar på meldinger."}),e.jsx(z,{svgPath:Y,onClick:()=>{var t;return(t=p.current)==null?void 0:t.showModal()},children:"Logg inn"})]}),secondColumn:e.jsxs(e.Fragment,{children:[e.jsx(i,{as:"h2",level:2,hasSpacing:!0,children:"Alle temaer"}),e.jsxs("div",{className:a.secondColumn,children:[e.jsxs("div",{children:[e.jsx(i,{as:"h3",level:3,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/person/",children:"For personer"})}),e.jsx(l,{className:a.marginBottomXL,children:K.map(t=>e.jsx(l.Link,{href:t.href,onClick:n=>{var r,s;n.preventDefault(),(s=(r=h.current)==null?void 0:r.closeMenu)==null||s.call(r)},children:t.text},t.text))}),e.jsx(i,{as:"h3",level:3,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/",children:"For bedrifter og organisasjoner"})}),e.jsx(l,{className:a.marginBottomXL,children:L.map(t=>e.jsx(l.Link,{href:t.href,onClick:n=>{var r,s;n.preventDefault(),(s=(r=h.current)==null?void 0:r.closeMenu)==null||s.call(r)},children:t.text},t.text))})]}),e.jsxs("div",{children:[e.jsx(i,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/rettskilder/",children:"Rettskilder"})}),e.jsx(i,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/presse/",children:"Presse"})}),e.jsx(i,{as:"h3",level:4,className:a.marginBottomXL,children:e.jsx("a",{href:"https://www.skatteetaten.no/samarbeidspartnere/",children:"Samarbeidspartner"})}),e.jsx(i,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/kontakt/",children:"Kontakt oss"})})]})]})]}),user:o,searchContent:e.jsxs(e.Fragment,{children:[e.jsx(d,{className:a.marginBottomS,children:"Dette har andre søkt på:"}),e.jsxs(l,{children:[e.jsx(l.Link,{href:"#",children:"Se skatteoppgjøret ditt"}),e.jsx(l.Link,{href:"#",children:"Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift"}),e.jsx(l.Link,{href:"#",children:"Se dine skattekrav og betalinger"})]})]}),onLanguageClick:A,onLogInClick:()=>{var t;return(t=p.current)==null?void 0:t.showModal()},onLogOutClick:()=>S(void 0),onUserClick:()=>{var t;return(t=p.current)==null?void 0:t.showModal()},onSearch:(t,n)=>{alert(`søker etter ${n}`)},onSearchClick:(t,n)=>{alert(`søker etter ${n}`)}}),e.jsx(Q,{ref:p,me:x,businesses:T,onEntitySelect:async t=>{var r;let n;t.name===x.name?n="meg":t.type==="Organization"?n="virksomhet":n="andre",S({role:n,name:t.name}),(r=p.current)==null||r.close()}}),e.jsx("main",{className:"breadcrumbs--external",children:e.jsx(d,{variant:"ingress",hasSpacing:!0,children:'Utgående mønster. Se "Example With User Menu" i stedet.'})})]})}};c.parameters=Z;const E={render:q=>{const p=R.useRef(null),h=R.useRef(null),[o,S]=R.useState(),A=ee("(min-width: 640px)"),x=n=>{const r=n.currentTarget.lang;C.changeLanguage(F[r])},T={name:"Ola Nordmann",personId:"10101012345",type:"Person"},v={total:3,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization"},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"}]};let f;(n=>{n.PERSON_SKATT="https://www.skatteetaten.no/person/skatt/",n.PERSON_AVGIFTER="https://www.skatteetaten.no/person/avgifter/",n.PERSON_FOLKEREGISTER="https://www.skatteetaten.no/person/folkeregister/",n.PERSON_UTENLANDSK="https://www.skatteetaten.no/person/utenlandsk/",n.PERSON_BETALING_OG_INNKREVING="https://www.skatteetaten.no/person/betaling-og-innkreving/",n.PERSON_FORSIDE="https://www.skatteetaten.no/person/",n.VIRKSOMHET_SKATT="https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",n.VIRKSOMHET_AVGIFTER="https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",n.VIRKSOMHET_RAPPORTERING_OG_BRANSJER="https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",n.VIRKSOMHET_STARTE_OG_DRIVE="https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",n.VIRKSOMHET_ARBEIDSGIVER="https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",n.VIRKSOMHET_UTENLANDSK="https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",n.VIRKSOMHET_FORSIDE="https://www.skatteetaten.no/bedrift-og-organisasjon/",n.RETTSKILDER="https://www.skatteetaten.no/rettskilder/",n.PRESSE="https://www.skatteetaten.no/presse/",n.SAMARBEIDSPARTNERE="https://www.skatteetaten.no/samarbeidspartnere/",n.KONTAKT="https://www.skatteetaten.no/kontakt/"})(f||(f={}));let w;(n=>{n.SKATT="/web/mineskatteforhold/",n.FOLKEREGISTER="/web/minfolkeregisterside/",n.INNBOKS="/web/innboks/",n.KJORETOY="/web/desta/",n.AKSJEOPPGAVEN="/web/aksjeoppgaven/?referrer=min-side"})(w||(w={}));let O;(n=>{n.VIRKSOMHET_KALENDER="/virksomhet/kalender",n.VIRKSOMHET_KRAVOVERSIKT="/virksomhet/kravoversikt",n.PERSON_FORSIDE="/person",n.PERSON_ARBEIDINNTEKT="/person/arbeidinntekt",n.PERSON_EIENDOMMER="/person/eiendommer",n.PERSON_KRAVOVERSIKT="/person/kravoversikt",n.PERSON_SAKSTATUS="/person/sakstatus",n.VIRKSOMHET_SAKSTATUS="/virksomhet/sakstatus"})(O||(O={}));const K=[{href:"/person",text:"Min side"},{href:"/web/mineskatteforhold/",text:"Skatt"},{href:"/web/minfolkeregisterside/",text:"Folkeregister"},{href:"/web/innboks/",text:"Innboks"},{href:"/person/sakstatus",text:"Mine saker"},{href:"/person/kravoversikt",text:"Krav og betalinger"},{href:"/web/desta/",text:"Bil og andre kjøretøy"},{href:"/person/arbeidinntekt",text:"Arbeid og inntekt"},{href:"/web/aksjeoppgaven/?referrer=min-side",text:"Aksjeoppgaven"},{href:"/person/eiendommer",text:"Eiendommer"}],L=[{href:"https://www.skatteetaten.no/person/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/person/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/person/folkeregister/",text:"Folkeregisteret"},{href:"https://www.skatteetaten.no/person/utenlandsk/",text:"Utenlandsk"},{href:"https://www.skatteetaten.no/person/betaling-og-innkreving/",text:"Betaling og innkreving"}],b=[{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",text:"Rapportering og bransjer"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",text:"Starte, drive og avslutte"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",text:"Arbeidsgiver"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",text:"Utenlandsk"}],t=[{href:"web/minside/virksomhet/",text:"Min side"},{href:"/virksomhet/kalender",text:"Kalender"},{href:"/virksomhet/kravoversikt",text:"Krav og betalinger"},{href:"/virksomhet/sakstatus",text:"Mine saker"},{href:"/web/innboks/",text:"Innboks"}];return e.jsxs(e.Fragment,{children:[e.jsx(I,{ref:h,classNames:{columns:a.columns},firstColumn:o?e.jsx(N,{spacing:"s",children:e.jsxs(N.Content,{children:[e.jsxs(i,{as:"h2",level:3,children:[o.role==="meg"&&e.jsx(J,{className:a.marginRightS}),o.role==="andre"&&e.jsx($,{className:a.marginRightS}),o.role==="virksomhet"&&e.jsx(W,{className:a.marginRightS}),(o==null?void 0:o.role)==="meg"?"Mitt innhold":o.name]}),e.jsx(d,{variant:"ingress",children:"Se, endre og send inn"}),e.jsx("ul",{className:`${a.linkWrapper} ${a.linkWrapperPadding}`,children:(o.role==="virksomhet"?t:K).map((n,r)=>e.jsx("li",{className:a.marginBottomS,children:e.jsx(U,{href:n.href,onClick:s=>{var g,_;s.preventDefault(),(_=(g=h.current)==null?void 0:g.closeMenu)==null||_.call(g)},children:n.text})},r))})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(i,{as:"h2",level:3,className:a.flex,children:[e.jsx(X,{className:a.marginRightS,size:"largePlus"}),"Min side"]}),e.jsx(d,{className:a.marginBottomS,children:"Se dine oppgaver og oversikt. Les og svar på meldinger."}),e.jsx(z,{svgPath:Y,onClick:()=>{var n;return(n=p.current)==null?void 0:n.showModal()},children:"Logg inn"})]}),secondColumn:e.jsxs(e.Fragment,{children:[e.jsx(i,{as:"h2",level:2,hasSpacing:!0,children:"Alle temaer"}),e.jsxs("div",{className:a.secondColumn,children:[e.jsxs("div",{children:[e.jsx(i,{as:"h3",level:3,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/person/",children:"For personer"})}),e.jsx(l,{className:a.marginBottomXL,children:L.map(n=>e.jsx(l.Link,{href:n.href,onClick:r=>{var s,g;r.preventDefault(),(g=(s=h.current)==null?void 0:s.closeMenu)==null||g.call(s)},children:n.text},n.text))}),e.jsx(i,{as:"h3",level:3,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/",children:"For bedrifter og organisasjoner"})}),e.jsx(l,{className:a.marginBottomXL,children:b.map(n=>e.jsx(l.Link,{href:n.href,onClick:r=>{var s,g;r.preventDefault(),(g=(s=h.current)==null?void 0:s.closeMenu)==null||g.call(s)},children:n.text},n.text))})]}),e.jsxs("div",{children:[e.jsx(i,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/rettskilder/",children:"Rettskilder"})}),e.jsx(i,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/presse/",children:"Presse"})}),e.jsx(i,{as:"h3",level:4,className:a.marginBottomXL,children:e.jsx("a",{href:"https://www.skatteetaten.no/samarbeidspartnere/",children:"Samarbeidspartner"})}),e.jsx(i,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/kontakt/",children:"Kontakt oss"})})]})]})]}),searchContent:e.jsxs(e.Fragment,{children:[e.jsx(d,{className:a.marginBottomS,children:"Dette har andre søkt på:"}),e.jsxs(l,{children:[e.jsx(l.Link,{href:"#",children:"Se skatteoppgjøret ditt"}),e.jsx(l.Link,{href:"#",children:"Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift"}),e.jsx(l.Link,{href:"#",children:"Se dine skattekrav og betalinger"})]})]}),user:o,onLogOutClick:A?()=>S(void 0):void 0,onLanguageClick:x,onLogInClick:o?void 0:()=>{var n;return(n=p.current)==null?void 0:n.showModal()},onSearch:(n,r)=>{alert(`søker etter ${r}`)},onSearchClick:(n,r)=>{alert(`søker etter ${r}`)},children:o&&e.jsx(I.UserMenu,{user:o,notificationCount:1,onLogOutClick:()=>S(void 0),onSwitchUserClick:()=>{var n;return(n=p.current)==null?void 0:n.showModal()}})}),e.jsx(Q,{ref:p,me:T,businesses:v,onEntitySelect:async n=>{var s;let r;n.name===T.name?r="meg":n.type==="Organization"?r="virksomhet":r="andre",S({role:r,name:n.name,orgnr:"999 999 999"}),(s=p.current)==null||s.close()}})]})}};E.parameters=Z;var j,M,P;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:"{} satisfies Story",...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var B,V,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
} satisfies Story`,...(y=(V=c.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var D,G,H;E.parameters={...E.parameters,docs:{...(D=E.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(G=E.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const oe=["Preview","ExampleWithRolePicker","ExampleWithUserMenu"],fe=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithRolePicker:c,ExampleWithUserMenu:E,Preview:u,__namedExportsOrder:oe,default:se},Symbol.toStringTag,{value:"Module"}));export{c as E,fe as T,E as a};
//# sourceMappingURL=TopBannerExternal.stories-DW4QWFj-.js.map
