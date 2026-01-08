import{j as e,e as s}from"./iframe-s2_bNgHU.js";import{a as i,L as t,P as a}from"./index-CJpzHRrE.js";import{e as l}from"./stories.utils-CZ5hej_8.js";const o={component:t,title:"Komponenter/List",argTypes:{as:{control:"inline-radio",table:{category:s.props,defaultValue:{summary:i()}}},canBeManuallyFocused:{table:{category:s.props}},children:{control:!1,table:{category:s.props}},hasSpacing:{table:{category:s.props,defaultValue:{summary:"false"}}}},args:{children:[e.jsx(t.Element,{children:"Kjenner du behovet til brukeren?"},"listElement1"),e.jsx(t.Element,{children:"Er du sikker på at du kjenner behovet til brukeren?"},"listElement2"),e.jsx(t.Element,{children:"Snakk med andre."},"listElement3")]}},r={},n={render:d=>e.jsxs(e.Fragment,{children:[e.jsx(a,{hasSpacing:!0,children:"På Min side finner du"}),e.jsxs(t,{hasSpacing:!0,children:[e.jsx(t.Element,{children:"din kontaktinformasjon"},"listElement_1"),e.jsx(t.Element,{children:"opplysningene dine i Folkeregisteret"},"listElement_2"),e.jsx(t.Element,{children:"oversikt over skatten din, blant annet skattekort, skattemelding og skatteoppgjør"},"listElement_3"),e.jsx(t.Element,{children:"kontonummeret du har registrert hos oss"},"listElement_4"),e.jsx(t.Element,{children:"innboksen din med faktura, melding og brev fra Skatteetaten og Folkeregisteret"},"listElement_5")]}),e.jsx(a,{children:"Du kan også endre mange av opplysningene dine på Min side."})]})};n.parameters=l;r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{} satisfies Story",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...n.parameters?.docs?.source}}};const m=["Preview","Examples"],k=Object.freeze(Object.defineProperty({__proto__:null,Examples:n,Preview:r,__namedExportsOrder:m,default:o},Symbol.toStringTag,{value:"Module"}));export{n as E,k as L};
//# sourceMappingURL=List.stories-Dr1HRqiw.js.map
