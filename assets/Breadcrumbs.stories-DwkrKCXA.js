import{j as e,e as m}from"./iframe-s2_bNgHU.js";import{T as c,a as d}from"./index-7wWg-Emv.js";import{B as r}from"./index-BjBiKebW.js";import{e as i}from"./stories.utils-CZ5hej_8.js";r.List.displayName="Breadcrumbs.List";r.Item.displayName="Breadcrumbs.Item";r.Link.displayName="Breadcrumbs.Link";const l={component:r,title:"Komponenter/Breadcrumbs",argTypes:{children:{control:!1,table:{category:m.props}}},args:{children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Bedrift og organisasjon"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Avgifter"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Avgifter på bil og kjøretøy"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Vektårsavgift"})})]})}},a={},n={name:"I publikumsløsning",render:t=>e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsx(r,{className:"breadcrumbs--external",children:e.jsxs(r.List,{shouldCollapse:!0,children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Bedrift og organisasjon"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Avgifter"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Avgifter på bil og kjøretøy"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Vektårsavgift"})})]})})]})};n.parameters={...i,layout:"fullscreen"};const s={name:"I intern løsning",render:t=>e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Navn på system",logoHref:"/"}),e.jsx(r,{className:"breadcrumbs--internal",children:e.jsxs(r.List,{shouldCollapse:!0,children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Arbeidsliste"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Eplepress AS"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Arbeidsoppgave"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Informasjon"})})]})})]})};s.parameters={...i,layout:"fullscreen"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{} satisfies Story",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'I publikumsløsning',
  render: (_args): JSX.Element => {
    // .breadcrumbs--external {
    //   width: var(--semantic-responsive-container);
    //   margin: var(--spacing-m) auto;
    //   padding: var(--semantic-responsive-container-spacing);
    //   box-sizing: border-box;
    // }
    return <>
        <TopBannerExternal />
        <Breadcrumbs className={'breadcrumbs--external'}>
          <Breadcrumbs.List shouldCollapse>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>
                {'Bedrift og organisasjon'}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Avgifter'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>
                {'Avgifter på bil og kjøretøy'}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Vektårsavgift'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs>
      </>;
  }
} satisfies Story`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'I intern løsning',
  render: (_args): JSX.Element => {
    // .breadcrumbs--internal {
    //   padding: var(--spacing-s) var(--semantic-responsive-internal-container-spacing);
    // }
    return <>
        <TopBannerInternal title={'Navn på system'} logoHref={'/'} />
        <Breadcrumbs className={'breadcrumbs--internal'}>
          <Breadcrumbs.List shouldCollapse>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Arbeidsliste'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Eplepress AS'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Arbeidsoppgave'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Informasjon'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs>
      </>;
  }
} satisfies Story`,...s.parameters?.docs?.source}}};const o=["Preview","ExternalExample","InternalExample"],B=Object.freeze(Object.defineProperty({__proto__:null,ExternalExample:n,InternalExample:s,Preview:a,__namedExportsOrder:o,default:l},Symbol.toStringTag,{value:"Module"}));export{B,n as E,s as I};
//# sourceMappingURL=Breadcrumbs.stories-DwkrKCXA.js.map
