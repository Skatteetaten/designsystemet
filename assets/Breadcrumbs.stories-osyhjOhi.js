import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as B,b as x}from"./index-palH82_U.js";import{B as r}from"./index-CxZaSSAf.js";import{c as f}from"./helpers-B90wjoUE.js";import{e as p}from"./stories.utils-Ys3NG0dr.js";r.List.displayName="Breadcrumbs.List";r.Item.displayName="Breadcrumbs.Item";r.Link.displayName="Breadcrumbs.Link";const g={component:r,title:"Komponenter/Breadcrumbs/Breadcrumbs",argTypes:{children:{control:!1,table:{category:f.props}}},args:{children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Bedrift og organisasjon"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Avgifter"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Avgifter på bil og kjøretøy"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Vektårsavgift"})})]})}},a={},n={name:"I publikumsløsning",render:h=>e.jsxs(e.Fragment,{children:[e.jsx(B,{}),e.jsx(r,{className:"breadcrumbs--external",children:e.jsxs(r.List,{shouldCollapse:!0,children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Bedrift og organisasjon"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Avgifter"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Avgifter på bil og kjøretøy"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Vektårsavgift"})})]})})]})};n.parameters={...p,layout:"fullscreen"};const s={name:"I intern løsning",render:h=>e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Navn på system",logoHref:"/"}),e.jsx(r,{className:"breadcrumbs--internal",children:e.jsxs(r.List,{shouldCollapse:!0,children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Arbeidsliste"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Eplepress AS"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Arbeidsoppgave"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Informasjon"})})]})})]})};s.parameters={...p,layout:"fullscreen"};var i,t,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{} satisfies Story",...(m=(t=a.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var c,d,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
} satisfies Story`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var o,u,b;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
} satisfies Story`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const j=["Preview","ExternalExample","InternalExample"],E=Object.freeze(Object.defineProperty({__proto__:null,ExternalExample:n,InternalExample:s,Preview:a,__namedExportsOrder:j,default:g},Symbol.toStringTag,{value:"Module"}));export{E as B,n as E,s as I};
//# sourceMappingURL=Breadcrumbs.stories-osyhjOhi.js.map
