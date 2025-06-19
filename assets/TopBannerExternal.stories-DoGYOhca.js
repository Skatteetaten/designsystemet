import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as S}from"./index-D_ouKaeX.js";import{L as o,b as O,B as C}from"./index-Dvbywa6-.js";import{C as T}from"./index-CJxYRboy.js";import{d as H,l as F}from"./index-CwaotbcG.js";import{s as U,a0 as z,a1 as W,a2 as $,a3 as J,a4 as X,a5 as Y,l as q}from"./index-BQO_0U1F.js";import{T as A}from"./index-CNb0RlXR.js";import{R as Q}from"./index-D-iyn2dT.js";import{P as c,H as g}from"./index-Dc9vnWYl.js";import{g as Z,a as ee}from"./TopBannerLangPicker-BquFub-4.js";import{h as p,c as s}from"./helpers-DjiZIot2.js";import{c as ne}from"./custom-logo-BLbAWs8x.js";import{s as te}from"./ske-logo-BSCI4sWT.js";import{e as re}from"./stories.utils-WEsnq5G6.js";const ae="_linkWrapper_ax540_1",se="_linkWrapperPadding_ax540_4",oe="_noPadding_ax540_8",ie="_marginBottomXL_ax540_12",le="_marginBottomS_ax540_16",ge="_marginRightS_ax540_20",pe="_flex_ax540_24",ke="_columns_ax540_29",he="_secondColumn_ax540_32",r={linkWrapper:ae,linkWrapperPadding:se,noPadding:oe,marginBottomXL:ie,marginBottomS:le,marginRightS:ge,flex:pe,columns:ke,secondColumn:he},me={component:A,title:"Komponenter/TopBannerExternal",argTypes:{classNames:{control:!1,table:{category:s.props}},showSami:{table:{category:s.props,defaultValue:{summary:String(ee())}}},defaultLocale:{table:{control:"text",category:s.props,defaultValue:{summary:Z()}}},children:{control:"text",table:{category:s.props}},skipLink:{control:!1,table:{category:s.props}},logo:{table:{category:s.props},control:"select",options:["",ne,te]},user:{control:!1,table:{category:s.props}},firstColumn:{control:"text",table:{category:s.props}},secondColumn:{control:"text",table:{category:s.props}},thirdColumn:{control:"text",table:{category:s.props}},additionalLanguages:{control:!1,table:{category:s.props}},searchContent:{control:"text",table:{category:s.props}},onSearchClick:{...p},onSearch:{...p},onLogInClick:{...p},onLogOutClick:{...p},onUserClick:{...p},onLanguageClick:{...p}},args:{onLogInClick:void 0,onLogOutClick:void 0,onUserClick:void 0},parameters:{layout:"fullscreen"}},h={},k={render:Se=>{const m=S.useRef(null),d=S.useRef(null),[i,E]=S.useState(),P=e=>{const t=e.currentTarget.lang;H.changeLanguage(F[t])},b=()=>{E(void 0)},j=()=>{var e;(e=m.current)==null||e.showModal()},f={name:"Ola Nordmann",personId:"10101012345",type:"Person"},M={total:3,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization"},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"}]};let R;(e=>{e.PERSON_SKATT="https://www.skatteetaten.no/person/skatt/",e.PERSON_AVGIFTER="https://www.skatteetaten.no/person/avgifter/",e.PERSON_FOLKEREGISTER="https://www.skatteetaten.no/person/folkeregister/",e.PERSON_UTENLANDSK="https://www.skatteetaten.no/person/utenlandsk/",e.PERSON_BETALING_OG_INNKREVING="https://www.skatteetaten.no/person/betaling-og-innkreving/",e.PERSON_FORSIDE="https://www.skatteetaten.no/person/",e.VIRKSOMHET_SKATT="https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",e.VIRKSOMHET_AVGIFTER="https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",e.VIRKSOMHET_RAPPORTERING_OG_BRANSJER="https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",e.VIRKSOMHET_STARTE_OG_DRIVE="https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",e.VIRKSOMHET_ARBEIDSGIVER="https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",e.VIRKSOMHET_UTENLANDSK="https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",e.VIRKSOMHET_FORSIDE="https://www.skatteetaten.no/bedrift-og-organisasjon/",e.RETTSKILDER="https://www.skatteetaten.no/rettskilder/",e.RETTSKILDER_PER_EMNE="https://www.skatteetaten.no/rettskilder/emne/",e.RETTSKILDER_PER_TYPE="https://www.skatteetaten.no/rettskilder/type/",e.OM_OSS_KONTAKT="https://www.skatteetaten.no/kontakt/",e.OM_OSS_DELING_AV_DATA="https://www.skatteetaten.no/deling/",e.OM_OSS_PRESSE="https://www.skatteetaten.no/presse/"})(R||(R={}));let w;(e=>{e.SKATT="/web/mineskatteforhold/",e.FOLKEREGISTER="/web/minfolkeregisterside/",e.INNBOKS="/web/innboks/",e.KJORETOY="/web/desta/",e.AKSJEOPPGAVEN="/web/aksjeoppgaven/?referrer=min-side"})(w||(w={}));let u;(e=>{e.VIRKSOMHET_KALENDER="/virksomhet/kalender",e.VIRKSOMHET_KRAVOVERSIKT="/virksomhet/kravoversikt",e.PERSON_FORSIDE="/person",e.PERSON_ARBEIDINNTEKT="/person/arbeidinntekt",e.PERSON_EIENDOMMER="/person/eiendommer",e.PERSON_KRAVOVERSIKT="/person/kravoversikt",e.PERSON_SAKSTATUS="/person/sakstatus",e.VIRKSOMHET_SAKSTATUS="/virksomhet/sakstatus"})(u||(u={}));const B=[{href:"/person",text:"Min side"},{href:"/web/mineskatteforhold/",text:"Skatt"},{href:"/web/minfolkeregisterside/",text:"Folkeregister"},{href:"/web/innboks/",text:"Innboks"},{href:"/person/sakstatus",text:"Mine saker"},{href:"/person/kravoversikt",text:"Krav og betalinger"},{href:"/web/desta/",text:"Bil og andre kjøretøy"},{href:"/person/arbeidinntekt",text:"Arbeid og inntekt"},{href:"/web/aksjeoppgaven/?referrer=min-side",text:"Aksjeoppgaven"},{href:"/person/eiendommer",text:"Eiendommer"}],y=[{href:"https://www.skatteetaten.no/person/",text:"Person forside"},{href:"https://www.skatteetaten.no/person/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/person/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/person/folkeregister/",text:"Folkeregisteret"},{href:"https://www.skatteetaten.no/person/utenlandsk/",text:"Utenlandsk"},{href:"https://www.skatteetaten.no/person/betaling-og-innkreving/",text:"Betaling og innkreving"}],V=[{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",text:"Rapportering og bransjer"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",text:"Starte og drive"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",text:"Arbeidsgiver"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",text:"Utenlandsk"}],G=[{href:"web/minside/virksomhet/",text:"Min side"},{href:"/virksomhet/kalender",text:"Kalender"},{href:"/virksomhet/kravoversikt",text:"Krav og betalinger"},{href:"/virksomhet/sakstatus",text:"Mine saker"},{href:"/web/innboks/",text:"Innboks"}],D=[{href:"https://www.skatteetaten.no/kontakt/",text:"Kontakt oss",svgPath:U},{href:"https://www.skatteetaten.no/kontakt/",text:"Deling av data",svgPath:z},{href:"https://www.skatteetaten.no/kontakt/",text:"Presse",svgPath:W}];return n.jsxs(n.Fragment,{children:[n.jsx(A,{ref:d,classNames:{columns:r.columns},firstColumn:i?n.jsx(T,{spacing:"s",children:n.jsxs(T.Content,{children:[n.jsxs(g,{as:"h2",level:3,children:[i.role==="meg"&&n.jsx($,{className:r.marginRightS}),i.role==="andre"&&n.jsx(J,{className:r.marginRightS}),i.role==="virksomhet"&&n.jsx(X,{className:r.marginRightS}),(i==null?void 0:i.role)==="meg"?"Mitt innhold":i.name]}),n.jsx(c,{variant:"ingress",children:"Se, endre og send inn"}),n.jsx("ul",{className:`${r.linkWrapper} ${r.linkWrapperPadding}`,children:(i.role==="virksomhet"?G:B).map((e,t)=>n.jsx("li",{className:r.marginBottomS,children:n.jsx(O,{href:e.href,onClick:a=>{var l,x;a.preventDefault(),(x=(l=d.current)==null?void 0:l.closeMenu)==null||x.call(l)},children:e.text})},t))})]})}):n.jsxs(n.Fragment,{children:[n.jsxs(g,{as:"h2",level:3,className:r.flex,children:[n.jsx(Y,{className:r.marginRightS,size:"largePlus"}),"Min side"]}),n.jsx(c,{className:r.marginBottomS,children:"Se dine oppgaver og oversikt. Les og svar på meldinger"}),n.jsx(C,{svgPath:q,children:"Logg inn på min side"})]}),secondColumn:n.jsxs(n.Fragment,{children:[n.jsx(g,{as:"h2",level:2,hasSpacing:!0,children:"Alle temaer"}),n.jsxs("div",{className:r.secondColumn,children:[n.jsxs("div",{children:[n.jsx(g,{as:"h3",level:3,hasSpacing:!0,children:n.jsx("a",{href:"https://www.skatteetaten.no/person/",children:"For personer"})}),n.jsx(o,{className:r.marginBottomXL,children:y.map(e=>n.jsx(o.Link,{href:e.href,onClick:t=>{var a,l;t.preventDefault(),(l=(a=d.current)==null?void 0:a.closeMenu)==null||l.call(a)},children:e.text},e.text))}),n.jsx(g,{as:"h3",level:3,hasSpacing:!0,children:n.jsx("a",{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/",children:"For bedrifter og organisasjoner"})}),n.jsx(o,{className:r.marginBottomXL,children:V.map(e=>n.jsx(o.Link,{href:e.href,onClick:t=>{var a,l;t.preventDefault(),(l=(a=d.current)==null?void 0:a.closeMenu)==null||l.call(a)},children:e.text},e.text))})]}),n.jsxs("div",{children:[n.jsx(g,{as:"h3",level:3,hasSpacing:!0,children:n.jsx("a",{href:"https://www.skatteetaten.no/rettskilder/",children:"Rettskilder"})}),n.jsxs(o,{className:r.marginBottomXL,children:[n.jsx(o.Link,{href:"https://www.skatteetaten.no/rettskilder/emne/",children:"Rettskilder per emne"}),n.jsx(o.Link,{href:"https://www.skatteetaten.no/rettskilder/type/",children:"Rettskilder per type"})]}),n.jsx(g,{as:"h3",level:3,hasSpacing:!0,children:"Om oss"}),n.jsx("ul",{className:`${r.linkWrapper} ${r.noPadding}`,children:D.map((e,t)=>n.jsx("li",{className:r.marginBottomS,children:n.jsx(O,{href:e.href,svgPath:e.svgPath,children:e.text})},t))})]})]})]}),user:i,searchContent:n.jsxs(n.Fragment,{children:[n.jsx(c,{className:r.marginBottomS,children:"Dette har andre søkt på:"}),n.jsxs(o,{children:[n.jsx(o.Link,{href:"#",children:"Se skatteoppgjøret ditt"}),n.jsx(o.Link,{href:"#",children:"Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift"}),n.jsx(o.Link,{href:"#",children:"Se dine skattekrav og betalinger"})]})]}),onLanguageClick:P,onLogInClick:j,onLogOutClick:b,onUserClick:()=>{var e;return(e=m.current)==null?void 0:e.showModal()},onSearch:(e,t)=>{alert(`søker etter ${t}`)},onSearchClick:(e,t)=>{alert(`søker etter ${t}`)}}),n.jsx(Q,{ref:m,me:f,businesses:M,onEntitySelect:async e=>{var a;let t;e.name===f.name?t="meg":e.type==="Organization"?t="virksomhet":t="andre",E({role:t,name:e.name}),(a=m.current)==null||a.close()}})]})}};k.parameters=re;var _,L,v;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:"{} satisfies Story",...(v=(L=h.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var I,N,K;k.parameters={...k.parameters,docs:{...(I=k.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
                    <LinkGroup.Link href={LenkerUinnlogget.RETTSKILDER_PER_TYPE}>
                      {'Rettskilder per type'}
                    </LinkGroup.Link>
                  </LinkGroup>
                  <Heading as={'h3'} level={3} hasSpacing>
                    {'Om oss'}
                  </Heading>
                  <ul className={\`\${topBannerExternalExampleStyles.linkWrapper} \${topBannerExternalExampleStyles.noPadding}\`}>
                    {omOssLinks.map((link, index) => <li key={index} className={topBannerExternalExampleStyles.marginBottomS}>
                        <Link href={link.href} svgPath={link.svgPath}>
                          {link.text}
                        </Link>
                      </li>)}
                  </ul>
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
} satisfies Story`,...(K=(N=k.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};const de=["Preview","Examples"],Ke=Object.freeze(Object.defineProperty({__proto__:null,Examples:k,Preview:h,__namedExportsOrder:de,default:me},Symbol.toStringTag,{value:"Module"}));export{k as E,Ke as T};
//# sourceMappingURL=TopBannerExternal.stories-DoGYOhca.js.map
