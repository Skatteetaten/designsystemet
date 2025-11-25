import{j as r}from"./jsx-runtime-BYYWji4R.js";import{r as L}from"./index-ClcD9ViR.js";import{I as l,L as a}from"./index-CEFmy_Ic.js";import{S as x}from"./index-DEJUArlV.js";import{k as f,F as S,E as b,O as p}from"./index-C8q4C1To.js";import{g as j,a as s}from"./index-VZVp1ZWa.js";import{c as o}from"./helpers-Q4uYuiE4.js";import{d as G}from"./demo-logo-white-Dd-h1hzi.js";import{e as A}from"./stories.utils-BbHpJfAb.js";const B={component:s,title:"Komponenter/TopBannerInternal/TopBannerInternal",argTypes:{children:{control:"text",table:{category:o.props}},classNames:{table:{category:o.props}},skipLink:{table:{category:o.props}},title:{table:{category:o.props}},description:{table:{category:o.props}},user:{table:{category:o.props}},isUnderConstruction:{table:{category:o.props}},constructionBandTitle:{table:{category:o.props}},logoHref:{table:{category:o.props}},logo:{table:{category:o.props}},hideLogoOnMobile:{table:{category:o.props,defaultValue:{summary:j().toString()}}},logoAltText:{table:{category:o.props}},onLogoClick:{table:{category:o.event}}},args:{logoHref:"/start",logoAltText:"til startsiden kakeportalen"},parameters:{layout:"fullscreen"}},c={},i={render:E=>{const n=L.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsxs(s,{className:"bottomSpacingXL",title:"MVA",description:"Arbeidsliste",logoAltText:"Forside MVA",logoHref:"/home",user:"Etternavnesen Fornavn",children:[r.jsx(l,{svgPath:f,brightness:"light",children:"Hjelp"}),r.jsx(l,{svgPath:S,brightness:"light",children:"Dokumentasjon"}),r.jsx(l,{svgPath:b,brightness:"light",children:"Opprett RF-Ørtiatten"}),r.jsxs(s.ActionMenu,{menuActionsRef:n,children:[r.jsx(l,{className:"bottomSpacingXS",svgPath:p,onClick:()=>{var e,t;(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null||t.call(e)},children:"Legg til RF-skjema ørtifemten"}),r.jsxs(a,{children:[r.jsx(a.Link,{href:"#",isExternal:!0,onClick:()=>{var e,t;return(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null?void 0:t.call(e)},children:"Denne tingen her"}),r.jsx(a.Link,{href:"#",isExternal:!0,onClick:()=>{var e,t;return(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null?void 0:t.call(e)},children:"En annen ting"}),r.jsx(a.Link,{href:"#",isExternal:!0,onClick:()=>{var e,t;return(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null?void 0:t.call(e)},children:"Den tredje tingen"})]})]})]}),r.jsxs(s,{className:"bottomSpacingXL",title:"Global Skatt",logoAltText:"Forside Global Skatt",logoHref:"/home",children:[r.jsx(x,{classNames:{searchContainer:"noMargin"},label:"Søk etter sak, virksomhet, dokument",placeholder:"Søk etter sak, virksomhet, dokument..."}),r.jsxs(s.ActionMenu,{menuActionsRef:n,children:[r.jsx(l,{className:"bottomSpacingXS",svgPath:p,onClick:()=>{var e,t;(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null||t.call(e)},children:"Legg til RF-skjema ørtifemten"}),r.jsxs(a,{children:[r.jsx(a.Link,{href:"#",isExternal:!0,onClick:()=>{var e,t;return(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null?void 0:t.call(e)},children:"Denne tingen her"}),r.jsx(a.Link,{href:"#",isExternal:!0,onClick:()=>{var e,t;return(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null?void 0:t.call(e)},children:"En annen ting"}),r.jsx(a.Link,{href:"#",isExternal:!0,onClick:()=>{var e,t;return(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null?void 0:t.call(e)},children:"Den tredje tingen"})]})]})]}),r.jsx(s,{className:"blueBackground",classNames:{logo:"demoLogo"},title:"SIRO",logo:G,logoAltText:"Forside Politiet",logoHref:"/home"})]})}};i.parameters=A;var g,u,m;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:"{} satisfies Story",...(m=(u=c.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var k,h,d;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const menuRef = useRef<ActionMenuActionsRef>(null);
    return <>
        <TopBannerInternal className={'bottomSpacingXL'} title={'MVA'} description={'Arbeidsliste'} logoAltText={'Forside MVA'} logoHref={'/home'} user={'Etternavnesen Fornavn'}>
          <InlineButton svgPath={HelpFilledSVGpath} brightness={'light'}>
            {'Hjelp'}
          </InlineButton>
          <InlineButton svgPath={FileSVGpath} brightness={'light'}>
            {'Dokumentasjon'}
          </InlineButton>
          <InlineButton svgPath={EditSVGpath} brightness={'light'}>
            {'Opprett RF-Ørtiatten'}
          </InlineButton>
          <TopBannerInternal.ActionMenu menuActionsRef={menuRef}>
            <InlineButton className={'bottomSpacingXS'} svgPath={AddSVGpath} onClick={() => {
            menuRef?.current?.close?.();
          }}>
              {'Legg til RF-skjema ørtifemten'}
            </InlineButton>
            <LinkGroup>
              <LinkGroup.Link href={'#'} isExternal onClick={() => menuRef?.current?.close?.()}>
                {'Denne tingen her'}
              </LinkGroup.Link>
              <LinkGroup.Link href={'#'} isExternal onClick={() => menuRef?.current?.close?.()}>
                {'En annen ting'}
              </LinkGroup.Link>
              <LinkGroup.Link href={'#'} isExternal onClick={() => menuRef?.current?.close?.()}>
                {'Den tredje tingen'}
              </LinkGroup.Link>
            </LinkGroup>
          </TopBannerInternal.ActionMenu>
        </TopBannerInternal>
        <TopBannerInternal className={'bottomSpacingXL'} title={'Global Skatt'} logoAltText={'Forside Global Skatt'} logoHref={'/home'}>
          <SearchField classNames={{
          searchContainer: 'noMargin'
        }} label={'Søk etter sak, virksomhet, dokument'} placeholder={'Søk etter sak, virksomhet, dokument...'} />
          <TopBannerInternal.ActionMenu menuActionsRef={menuRef}>
            <InlineButton className={'bottomSpacingXS'} svgPath={AddSVGpath} onClick={() => {
            menuRef?.current?.close?.();
          }}>
              {'Legg til RF-skjema ørtifemten'}
            </InlineButton>
            <LinkGroup>
              <LinkGroup.Link href={'#'} isExternal onClick={() => menuRef?.current?.close?.()}>
                {'Denne tingen her'}
              </LinkGroup.Link>
              <LinkGroup.Link href={'#'} isExternal onClick={() => menuRef?.current?.close?.()}>
                {'En annen ting'}
              </LinkGroup.Link>
              <LinkGroup.Link href={'#'} isExternal onClick={() => menuRef?.current?.close?.()}>
                {'Den tredje tingen'}
              </LinkGroup.Link>
            </LinkGroup>
          </TopBannerInternal.ActionMenu>
        </TopBannerInternal>
        <TopBannerInternal className={'blueBackground'} classNames={{
        logo: 'demoLogo'
      }} title={'SIRO'} logo={demoLogo} logoAltText={'Forside Politiet'} logoHref={'/home'}></TopBannerInternal>
      </>;
  }
} satisfies Story`,...(d=(h=i.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const I=["Preview","Examples"],H=Object.freeze(Object.defineProperty({__proto__:null,Examples:i,Preview:c,__namedExportsOrder:I,default:B},Symbol.toStringTag,{value:"Module"}));export{i as E,H as T};
//# sourceMappingURL=TopBannerInternal.stories-CNjHEEyn.js.map
