import{j as e,e as a}from"./iframe-CBOQuZmX.js";import{a as m,L as n,P as i}from"./index-B4-BoLKC.js";import{e as l}from"./stories.utils-CZ5hej_8.js";const d={component:n,title:"Komponenter/List",argTypes:{as:{control:"inline-radio",table:{category:a.props,defaultValue:{summary:m()}}},canBeManuallyFocused:{table:{category:a.props}},children:{control:!1,table:{category:a.props}},hasSpacing:{table:{category:a.props,defaultValue:{summary:"false"}}}},args:{children:[e.jsx(n.Element,{children:"Kjenner du behovet til brukeren?"},"listElement1"),e.jsx(n.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement2"),e.jsx(n.Element,{children:"Snakk med andre."},"listElement3")]}},s={},r={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(i,{hasSpacing:!0,children:"På Min side finner du"}),e.jsxs(n,{hasSpacing:!0,children:[e.jsx(n.Element,{children:"din kontaktinformasjon"},"listElement_1"),e.jsx(n.Element,{children:"opplysningene dine i Folkeregisteret"},"listElement_2"),e.jsx(n.Element,{children:"oversikt over skatten din, blant annet skattekort, skattemelding og skatteoppgjør"},"listElement_3"),e.jsx(n.Element,{children:"kontonummeret du har registrert hos oss"},"listElement_4"),e.jsx(n.Element,{children:"innboksen din med faktura, melding og brev fra Skatteetaten og Folkeregisteret"},"listElement_5")]}),e.jsx(i,{children:"Du kan også endre mange av opplysningene dine på Min side."})]})};r.parameters=l;const t={render:o=>e.jsxs(n,{children:[e.jsxs(n.Element,{children:["Første punkt med ",e.jsx("strong",{children:"utheving"})," og ",e.jsx("em",{children:"betoning"})," i samme linje."]},"element_1"),e.jsx(n.Element,{children:"Andre punkt uten utheving."},"element_2")]})};t.storyName="Liste med utheving";t.parameters=l;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{} satisfies Story",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <>
        <Paragraph hasSpacing>{'På Min side finner du'}</Paragraph>
        <List hasSpacing>
          <List.Element key={'listElement_1'}>
            {'din kontaktinformasjon'}
          </List.Element>
          <List.Element key={'listElement_2'}>
            {'opplysningene dine i Folkeregisteret'}
          </List.Element>
          <List.Element key={'listElement_3'}>
            {'oversikt over skatten din, blant annet skattekort, skattemelding og skatteoppgjør'}
          </List.Element>
          <List.Element key={'listElement_4'}>
            {'kontonummeret du har registrert hos oss'}
          </List.Element>
          <List.Element key={'listElement_5'}>
            {'innboksen din med faktura, melding og brev fra Skatteetaten og Folkeregisteret'}
          </List.Element>
        </List>
        <Paragraph>
          {'Du kan også endre mange av opplysningene dine på Min side.'}
        </Paragraph>
      </>;
  }
} satisfies Story`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <List>
        <List.Element key={'element_1'}>
          {\`Første punkt med \`}
          <strong>{'utheving'}</strong>
          {' og '}
          <em>{'betoning'}</em>
          {' i samme linje.'}
        </List.Element>
        <List.Element key={'element_2'}>
          {'Andre punkt uten utheving.'}
        </List.Element>
      </List>;
  }
} satisfies Story`,...t.parameters?.docs?.source}}};const g=["Preview","Examples","ExampleWithInlineStyling"],k=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithInlineStyling:t,Examples:r,Preview:s,__namedExportsOrder:g,default:d},Symbol.toStringTag,{value:"Module"}));export{r as E,k as L,t as a};
//# sourceMappingURL=List.stories-Cga87rBt.js.map
