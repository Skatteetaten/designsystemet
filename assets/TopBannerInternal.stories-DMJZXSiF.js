import{e as n,r as c,j as e}from"./iframe-VHQh6taY.js";import{I as a,L as r}from"./index-C8wxqHpZ.js";import{S as p}from"./index-lB78RBB2.js";import{q as u,F as m,E as g,a5 as l}from"./index-Di_7ammq.js";import{d as h,a as o}from"./index-B_yqNyPt.js";import{d as k}from"./demo-logo-white-R7Uwp2Rb.js";import{e as d}from"./stories.utils-BTGWRhRm.js";const f={component:o,title:"Komponenter/TopBannerInternal",argTypes:{children:{control:"text",table:{category:n.props}},classNames:{control:!1,table:{category:n.props}},skipLink:{control:!1,table:{category:n.props}},title:{table:{category:n.props}},description:{table:{category:n.props}},user:{table:{category:n.props}},isUnderConstruction:{table:{category:n.props}},constructionBandTitle:{table:{category:n.props}},logoHref:{table:{category:n.props}},logo:{table:{category:n.props}},hideLogoOnMobile:{table:{category:n.props,defaultValue:{summary:h().toString()}}},onLogoClick:{control:!1,table:{category:n.event}}},args:{logoHref:"/start",title:"Default Title"},parameters:{layout:"fullscreen"}},i={},s={render:x=>{const t=c.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{className:"bottomSpacingXL",title:"MVA",description:"Arbeidsliste",logoHref:"/home",user:"Etternavnesen Fornavn",children:[e.jsx(a,{svgPath:u,brightness:"light",children:"Hjelp"}),e.jsx(a,{svgPath:m,brightness:"light",children:"Dokumentasjon"}),e.jsx(a,{svgPath:g,brightness:"light",children:"Opprett RF-Ørtiatten"}),e.jsxs(o.ActionMenu,{menuActionsRef:t,children:[e.jsx(a,{className:"bottomSpacingXS",svgPath:l,onClick:()=>{t?.current?.close?.()},children:"Legg til RF-skjema ørtifemten"}),e.jsxs(r,{children:[e.jsx(r.Link,{href:"#",isExternal:!0,onClick:()=>t?.current?.close?.(),children:"Denne tingen her"}),e.jsx(r.Link,{href:"#",isExternal:!0,onClick:()=>t?.current?.close?.(),children:"En annen ting"}),e.jsx(r.Link,{href:"#",isExternal:!0,onClick:()=>t?.current?.close?.(),children:"Den tredje tingen"})]})]})]}),e.jsxs(o,{className:"bottomSpacingXL",title:"Global Skatt",logoHref:"/home",children:[e.jsx(p,{label:"Søk etter sak, virksomhet, dokument",placeholder:"Søk etter sak, virksomhet, dokument..."}),e.jsxs(o.ActionMenu,{menuActionsRef:t,children:[e.jsx(a,{className:"bottomSpacingXS",svgPath:l,onClick:()=>{t?.current?.close?.()},children:"Legg til RF-skjema ørtifemten"}),e.jsxs(r,{children:[e.jsx(r.Link,{href:"#",isExternal:!0,onClick:()=>t?.current?.close?.(),children:"Denne tingen her"}),e.jsx(r.Link,{href:"#",isExternal:!0,onClick:()=>t?.current?.close?.(),children:"En annen ting"}),e.jsx(r.Link,{href:"#",isExternal:!0,onClick:()=>t?.current?.close?.(),children:"Den tredje tingen"})]})]})]}),e.jsx(o,{className:"blueBackground",classNames:{logo:"demoLogo"},title:"SIRO",logo:k,logoHref:"/home"})]})}};s.parameters=d;i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{} satisfies Story",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          <SearchField label={'Søk etter sak, virksomhet, dokument'} placeholder={'Søk etter sak, virksomhet, dokument...'} />
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
} satisfies Story`,...s.parameters?.docs?.source}}};const L=["Preview","Examples"],R=Object.freeze(Object.defineProperty({__proto__:null,Examples:s,Preview:i,__namedExportsOrder:L,default:f},Symbol.toStringTag,{value:"Module"}));export{s as E,R as T};
//# sourceMappingURL=TopBannerInternal.stories-DMJZXSiF.js.map
