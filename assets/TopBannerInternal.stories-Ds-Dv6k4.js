import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as L}from"./index-7h80QhK_.js";import{I as l,L as a}from"./index-TStLVSlm.js";import{S as f}from"./index-DmQJLmMR.js";import{k as x,F as S,E as b,O as p}from"./index-MCo35TjR.js";import{g as j,a as s}from"./index-XLCM6Ud4.js";import{c as o}from"./helpers-BRYKCfPN.js";import{d as B}from"./demo-logo-white-DWpmU352.js";import{e as I}from"./stories.utils-Ys3NG0dr.js";const E={component:s,title:"Komponenter/TopBannerInternal/TopBannerInternal",argTypes:{children:{control:"text",table:{category:o.props}},classNames:{control:!1,table:{category:o.props}},skipLink:{control:!1,table:{category:o.props}},title:{table:{category:o.props}},description:{table:{category:o.props}},user:{table:{category:o.props}},isUnderConstruction:{table:{category:o.props}},constructionBandTitle:{table:{category:o.props}},logoHref:{table:{category:o.props}},logo:{table:{category:o.props}},hideLogoOnMobile:{table:{category:o.props,defaultValue:{summary:j().toString()}}},onLogoClick:{control:!1,table:{category:o.event}}},args:{logoHref:"/start",title:"Default Title"},parameters:{layout:"fullscreen"}},c={},i={render:v=>{const e=L.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsxs(s,{className:"bottomSpacingXL",title:"MVA",description:"Arbeidsliste",logoHref:"/home",user:"Etternavnesen Fornavn",children:[r.jsx(l,{svgPath:x,brightness:"light",children:"Hjelp"}),r.jsx(l,{svgPath:S,brightness:"light",children:"Dokumentasjon"}),r.jsx(l,{svgPath:b,brightness:"light",children:"Opprett RF-Ørtiatten"}),r.jsxs(s.ActionMenu,{menuActionsRef:e,children:[r.jsx(l,{className:"bottomSpacingXS",svgPath:p,onClick:()=>{var n,t;(t=(n=e==null?void 0:e.current)==null?void 0:n.close)==null||t.call(n)},children:"Legg til RF-skjema ørtifemten"}),r.jsxs(a,{children:[r.jsx(a.Link,{href:"#",isExternal:!0,onClick:()=>{var n,t;return(t=(n=e==null?void 0:e.current)==null?void 0:n.close)==null?void 0:t.call(n)},children:"Denne tingen her"}),r.jsx(a.Link,{href:"#",isExternal:!0,onClick:()=>{var n,t;return(t=(n=e==null?void 0:e.current)==null?void 0:n.close)==null?void 0:t.call(n)},children:"En annen ting"}),r.jsx(a.Link,{href:"#",isExternal:!0,onClick:()=>{var n,t;return(t=(n=e==null?void 0:e.current)==null?void 0:n.close)==null?void 0:t.call(n)},children:"Den tredje tingen"})]})]})]}),r.jsxs(s,{className:"bottomSpacingXL",title:"Global Skatt",logoHref:"/home",children:[r.jsx(f,{classNames:{searchContainer:"noMargin"},label:"Søk etter sak, virksomhet, dokument",placeholder:"Søk etter sak, virksomhet, dokument..."}),r.jsxs(s.ActionMenu,{menuActionsRef:e,children:[r.jsx(l,{className:"bottomSpacingXS",svgPath:p,onClick:()=>{var n,t;(t=(n=e==null?void 0:e.current)==null?void 0:n.close)==null||t.call(n)},children:"Legg til RF-skjema ørtifemten"}),r.jsxs(a,{children:[r.jsx(a.Link,{href:"#",isExternal:!0,onClick:()=>{var n,t;return(t=(n=e==null?void 0:e.current)==null?void 0:n.close)==null?void 0:t.call(n)},children:"Denne tingen her"}),r.jsx(a.Link,{href:"#",isExternal:!0,onClick:()=>{var n,t;return(t=(n=e==null?void 0:e.current)==null?void 0:n.close)==null?void 0:t.call(n)},children:"En annen ting"}),r.jsx(a.Link,{href:"#",isExternal:!0,onClick:()=>{var n,t;return(t=(n=e==null?void 0:e.current)==null?void 0:n.close)==null?void 0:t.call(n)},children:"Den tredje tingen"})]})]})]}),r.jsx(s,{className:"blueBackground",classNames:{logo:"demoLogo"},title:"SIRO",logo:B,logoHref:"/home"})]})}};i.parameters=I;var g,u,m;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:"{} satisfies Story",...(m=(u=c.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,k,d;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const menuRef = useRef<ActionMenuActionsRef>(null);
    return <>
        <TopBannerInternal className={'bottomSpacingXL'} title={'MVA'} description={'Arbeidsliste'} logoHref={'/home'} user={'Etternavnesen Fornavn'}>
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
        <TopBannerInternal className={'bottomSpacingXL'} title={'Global Skatt'} logoHref={'/home'}>
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
      }} title={'SIRO'} logo={demoLogo} logoHref={'/home'}></TopBannerInternal>
      </>;
  }
} satisfies Story`,...(d=(k=i.parameters)==null?void 0:k.docs)==null?void 0:d.source}}};const G=["Preview","Examples"],D=Object.freeze(Object.defineProperty({__proto__:null,Examples:i,Preview:c,__namedExportsOrder:G,default:E},Symbol.toStringTag,{value:"Module"}));export{i as E,D as T};
//# sourceMappingURL=TopBannerInternal.stories-Ds-Dv6k4.js.map
