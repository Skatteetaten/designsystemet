import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as L}from"./index-D_ouKaeX.js";import{I as l,L as s}from"./index-eDVrZHQi.js";import{S as f}from"./index-DzkGBFys.js";import{k as x,F as S,E as b,Q as p}from"./index-CdwPxLML.js";import{g as j,a}from"./index-DyriRbJa.js";import{c as o}from"./helpers-B7KPg_So.js";import{d as B}from"./demo-logo-white-CdcQyXfP.js";import{e as E}from"./stories.utils-Ys3NG0dr.js";const G={component:a,title:"Komponenter/TopBannerInternal",argTypes:{children:{control:"text",table:{category:o.props}},classNames:{control:!1,table:{category:o.props}},skipLink:{control:!1,table:{category:o.props}},title:{table:{category:o.props}},description:{table:{category:o.props}},user:{table:{category:o.props}},isUnderConstruction:{table:{category:o.props}},constructionBandTitle:{table:{category:o.props}},logoHref:{table:{category:o.props}},logo:{table:{category:o.props}},hideLogoOnMobile:{table:{category:o.props,defaultValue:{summary:j().toString()}}},onLogoClick:{control:!1,table:{category:o.event}}},args:{logoHref:"/start",title:"Default Title"},parameters:{layout:"fullscreen"}},c={},i={render:v=>{const n=L.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsxs(a,{className:"bottomSpacingXL",title:"MVA",description:"Arbeidsliste",logoHref:"/home",user:"Etternavnesen Fornavn",children:[r.jsx(l,{svgPath:x,brightness:"light",children:"Hjelp"}),r.jsx(l,{svgPath:S,brightness:"light",children:"Dokumentasjon"}),r.jsx(l,{svgPath:b,brightness:"light",children:"Opprett RF-Ørtiatten"}),r.jsxs(a.ActionMenu,{menuActionsRef:n,children:[r.jsx(l,{className:"bottomSpacingXS",svgPath:p,onClick:()=>{var e,t;(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null||t.call(e)},children:"Legg til RF-skjema ørtifemten"}),r.jsxs(s,{children:[r.jsx(s.Link,{href:"#",isExternal:!0,onClick:()=>{var e,t;return(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null?void 0:t.call(e)},children:"Denne tingen her"}),r.jsx(s.Link,{href:"#",isExternal:!0,onClick:()=>{var e,t;return(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null?void 0:t.call(e)},children:"En annen ting"}),r.jsx(s.Link,{href:"#",isExternal:!0,onClick:()=>{var e,t;return(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null?void 0:t.call(e)},children:"Den tredje tingen"})]})]})]}),r.jsxs(a,{className:"bottomSpacingXL",title:"Global Skatt",logoHref:"/home",children:[r.jsx(f,{label:"Søk etter sak, virksomhet, dokument",placeholder:"Søk etter sak, virksomhet, dokument..."}),r.jsxs(a.ActionMenu,{menuActionsRef:n,children:[r.jsx(l,{className:"bottomSpacingXS",svgPath:p,onClick:()=>{var e,t;(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null||t.call(e)},children:"Legg til RF-skjema ørtifemten"}),r.jsxs(s,{children:[r.jsx(s.Link,{href:"#",isExternal:!0,onClick:()=>{var e,t;return(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null?void 0:t.call(e)},children:"Denne tingen her"}),r.jsx(s.Link,{href:"#",isExternal:!0,onClick:()=>{var e,t;return(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null?void 0:t.call(e)},children:"En annen ting"}),r.jsx(s.Link,{href:"#",isExternal:!0,onClick:()=>{var e,t;return(t=(e=n==null?void 0:n.current)==null?void 0:e.close)==null?void 0:t.call(e)},children:"Den tredje tingen"})]})]})]}),r.jsx(a,{className:"blueBackground",classNames:{logo:"demoLogo"},title:"SIRO",logo:B,logoHref:"/home"})]})}};i.parameters=E;var g,u,m;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:"{} satisfies Story",...(m=(u=c.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,k,d;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(d=(k=i.parameters)==null?void 0:k.docs)==null?void 0:d.source}}};const I=["Preview","Examples"],M=Object.freeze(Object.defineProperty({__proto__:null,Examples:i,Preview:c,__namedExportsOrder:I,default:G},Symbol.toStringTag,{value:"Module"}));export{i as E,M as T};
//# sourceMappingURL=TopBannerInternal.stories-C86tX60I.js.map
