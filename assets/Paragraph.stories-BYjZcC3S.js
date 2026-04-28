import{c as i,j as e}from"./iframe-LV2IHoVd.js";import{I as p,w as d}from"./index-DuhhME3h.js";import{b as m,P as n,H as h}from"./index-Bg4cHPXU.js";import{l as k}from"./storybook.testing.utils-BgHZnMzD.js";import{e as g}from"./stories.utils-DxY1qhhU.js";const c={component:n,title:"Komponenter/Paragraph",argTypes:{canBeManuallyFocused:{table:{category:i.props}},children:{control:"text",table:{category:i.props}},hasSpacing:{table:{category:i.props}},variant:{table:{category:i.props,defaultValue:{summary:m()}}}},args:{children:k}},o={},s={render:l=>e.jsxs(e.Fragment,{children:[e.jsx(h,{as:"h1",hasSpacing:!0,children:"Flere oppgir kryptoverdier i skattemeldingen"}),e.jsx(n,{variant:"ingress",hasSpacing:!0,children:"Antall personer som oppgir kryptoverdier i skattemeldingen har økt fra 15.000 til 41.000. Skatteetaten ønsker at det skal bli pliktig for tilbydere av vekslingstjenester å rapportere om transaksjoner og eiere."}),e.jsx(n,{hasSpacing:!0,children:"- Det har vært en god vekst i antall personer som eier kryptovaluta, men fortsatt er det mange som ikke rapporterer sine verdier. Vi har økt vår innsats innen både veiledning og kontroll for at også denne delen av økonomien skal bli riktigere beskattet, sier skattedirektør Nina Schanke Funnemark."}),e.jsxs(n,{children:["Sammenlignet med ",e.jsx("a",{href:"https://www.skatteetaten.no/presse/nyhetsrommet/flere-oppgir-kryptoverdier-i-skattemeldingen/",target:"_blank",rel:"noreferrer",children:"tidligere år"})," oppgir langt flere personer at de eier kryptovaluta, og inntekt, formue og fradrag fra kryptovaluta øker også kraftig."]})]})};s.parameters=g;const r={render:l=>e.jsxs(n,{children:["Dette er et eksempel på et avsnitt med en ",e.jsx("a",{href:"https://www.skatteetaten.no/stilogtone/",target:"_blank",rel:"noreferrer",children:"lenke til stil og tone"})," og som får  designsystemets typografi."]})};r.storyName="Paragraf med lenke";r.parameters=g;const a={render:l=>e.jsxs(n,{children:["Noen ganger ønsker vi å fremheve tekst med ",e.jsx("strong",{children:"tydelig utheving"}),", mens andre ganger holder det med ",e.jsx("em",{children:"lett betoning"}),". Begge deler støttes automatisk i Paragraph."]})};a.storyName="Paragraf med utheving";a.parameters=g;const t={render:l=>e.jsxs(n,{children:[e.jsx(p,{svgPath:d})," Siden inneholder et filvedlegg."]})};t.storyName="Paragraf med ikon";t.parameters=g;o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{} satisfies Story",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <Paragraph>
        {'Dette er et eksempel på et avsnitt med en '}
        <a href={'https://www.skatteetaten.no/stilogtone/'} target={'_blank'} rel={'noreferrer'}>
          {'lenke til stil og tone'}
        </a>
        {' og som får  designsystemets typografi.'}
      </Paragraph>;
  }
} satisfies Story`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <Paragraph>
        {'Noen ganger ønsker vi å fremheve tekst med '}
        <strong>{'tydelig utheving'}</strong>
        {', mens andre ganger holder det med '}
        <em>{'lett betoning'}</em>
        {'. Begge deler støttes automatisk i Paragraph.'}
      </Paragraph>;
  }
} satisfies Story`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <Paragraph>
        <Icon svgPath={AttachFileSVGpath} />
        {' Siden inneholder et filvedlegg.'}
      </Paragraph>;
  }
} satisfies Story`,...t.parameters?.docs?.source}}};const f=["Preview","Examples","ParagraphWithLink","ParagraphWithInlineStyling","ParagraphWithIcon"],b=Object.freeze(Object.defineProperty({__proto__:null,Examples:s,ParagraphWithIcon:t,ParagraphWithInlineStyling:a,ParagraphWithLink:r,Preview:o,__namedExportsOrder:f,default:c},Symbol.toStringTag,{value:"Module"}));export{s as E,b as P,r as a,a as b,t as c};
//# sourceMappingURL=Paragraph.stories-BYjZcC3S.js.map
