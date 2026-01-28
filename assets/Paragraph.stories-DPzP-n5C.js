import{e as o,j as e}from"./iframe-CBOQuZmX.js";import{b as l,P as n,H as p}from"./index-B4-BoLKC.js";import{l as m}from"./storybook.testing.utils-BgHZnMzD.js";import{e as i}from"./stories.utils-CZ5hej_8.js";const d={component:n,title:"Komponenter/Paragraph",argTypes:{canBeManuallyFocused:{table:{category:o.props}},children:{control:"text",table:{category:o.props}},hasSpacing:{table:{category:o.props}},variant:{table:{category:o.props,defaultValue:{summary:l()}}}},args:{children:m}},s={},a={render:g=>e.jsxs(e.Fragment,{children:[e.jsx(p,{as:"h1",hasSpacing:!0,children:"Flere oppgir kryptoverdier i skattemeldingen"}),e.jsx(n,{variant:"ingress",hasSpacing:!0,children:"Antall personer som oppgir kryptoverdier i skattemeldingen har økt fra 15.000 til 41.000. Skatteetaten ønsker at det skal bli pliktig for tilbydere av vekslingstjenester å rapportere om transaksjoner og eiere."}),e.jsx(n,{hasSpacing:!0,children:"- Det har vært en god vekst i antall personer som eier kryptovaluta, men fortsatt er det mange som ikke rapporterer sine verdier. Vi har økt vår innsats innen både veiledning og kontroll for at også denne delen av økonomien skal bli riktigere beskattet, sier skattedirektør Nina Schanke Funnemark."}),e.jsxs(n,{children:["Sammenlignet med ",e.jsx("a",{href:"https://www.skatteetaten.no/presse/nyhetsrommet/flere-oppgir-kryptoverdier-i-skattemeldingen/",target:"_blank",rel:"noreferrer",children:"tidligere år"})," oppgir langt flere personer at de eier kryptovaluta, og inntekt, formue og fradrag fra kryptovaluta øker også kraftig."]})]})};a.parameters=i;const r={render:g=>e.jsxs(n,{children:["Dette er et eksempel på et avsnitt med en ",e.jsx("a",{href:"https://www.skatteetaten.no/stilogtone/",target:"_blank",rel:"noreferrer",children:"lenke til stil og tone"})," og som får  designsystemets typografi."]})};r.storyName="Paragraf med lenke";r.parameters=i;const t={render:g=>e.jsxs(n,{children:["Noen ganger ønsker vi å fremheve tekst med ",e.jsx("strong",{children:"tydelig utheving"}),", mens andre ganger holder det med ",e.jsx("em",{children:"lett betoning"}),". Begge deler støttes automatisk i Paragraph."]})};t.storyName="Paragraf med utheving";t.parameters=i;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{} satisfies Story",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <>
        <Heading as={'h1'} hasSpacing>
          {'Flere oppgir kryptoverdier i skattemeldingen'}
        </Heading>
        <Paragraph variant={'ingress'} hasSpacing>
          {'Antall personer som oppgir kryptoverdier i skattemeldingen har økt fra 15.000 til 41.000. ' + 'Skatteetaten ønsker at det skal bli pliktig for tilbydere av vekslingstjenester å rapportere om transaksjoner og eiere.'}
        </Paragraph>
        <Paragraph hasSpacing>
          {'- Det har vært en god vekst i antall personer som eier kryptovaluta, men fortsatt er det mange som ikke rapporterer sine verdier. ' + 'Vi har økt vår innsats innen både veiledning og kontroll for at også denne delen av økonomien skal bli riktigere beskattet, sier skattedirektør Nina Schanke Funnemark.'}
        </Paragraph>
        <Paragraph>
          {'Sammenlignet med '}
          <a href={'https://www.skatteetaten.no/presse/nyhetsrommet/flere-oppgir-kryptoverdier-i-skattemeldingen/'} target={'_blank'} rel={'noreferrer'}>
            {'tidligere år'}
          </a>
          {' oppgir langt flere personer at de eier kryptovaluta, og inntekt, formue og fradrag fra kryptovaluta øker også kraftig.'}
        </Paragraph>
      </>;
  }
} satisfies Story`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <Paragraph>
        {'Dette er et eksempel på et avsnitt med en '}
        <a href={'https://www.skatteetaten.no/stilogtone/'} target={'_blank'} rel={'noreferrer'}>
          {'lenke til stil og tone'}
        </a>
        {' og som får  designsystemets typografi.'}
      </Paragraph>;
  }
} satisfies Story`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <Paragraph>
        {'Noen ganger ønsker vi å fremheve tekst med '}
        <strong>{'tydelig utheving'}</strong>
        {', mens andre ganger holder det med '}
        <em>{'lett betoning'}</em>
        {'. Begge deler støttes automatisk i Paragraph.'}
      </Paragraph>;
  }
} satisfies Story`,...t.parameters?.docs?.source}}};const k=["Preview","Examples","ExampleWithLink","ExampleWithInlineStyling"],v=Object.freeze(Object.defineProperty({__proto__:null,ExampleWithInlineStyling:t,ExampleWithLink:r,Examples:a,Preview:s,__namedExportsOrder:k,default:d},Symbol.toStringTag,{value:"Module"}));export{a as E,v as P,r as a,t as b};
//# sourceMappingURL=Paragraph.stories-DPzP-n5C.js.map
