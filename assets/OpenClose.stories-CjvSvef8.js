import{h as c,c as r,j as e}from"./iframe-BQX7p2fO.js";import{O as t,h as k,i as u,j as v,k as h}from"./index-BWAuWBOL.js";import{H as m,P as g}from"./index-BLTwn-id.js";import{l as f}from"./storybook.testing.utils-BgHZnMzD.js";import{e as d}from"./stories.utils-B3vRc2tk.js";const j={component:t,title:"Komponenter/OpenClose",argTypes:{children:{control:"text",table:{category:r.props}},iconPosition:{control:"inline-radio",table:{category:r.props,defaultValue:{summary:h()}}},isOnClickOnlyFiredOnOpen:{table:{category:r.props}},isExpanded:{table:{category:r.props}},isDefaultExpanded:{table:{category:r.props}},keepMounted:{table:{category:r.props,defaultValue:{summary:v().toString()}}},showUnderline:{table:{category:r.props,defaultValue:{summary:u().toString()}}},size:{control:"inline-radio",table:{category:r.props,defaultValue:{summary:"large"}}},title:{table:{category:r.props}},titleAs:{control:"inline-radio",table:{category:r.props}},variant:{control:"inline-radio",table:{category:r.props,defaultValue:{summary:k()}},description:"<strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Bruk <code>size</code> i stedet."},onClick:{...c}},args:{children:f,title:"OpenClose title"}},o="Hva er aksjesparekonto",i="En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen. ",l={args:{children:i,title:o},render:p=>e.jsx(t,{...p})},s={name:"Høyrestilt ikon",render:p=>e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Høyrestilt ikon kan gi et roligere visuelt inntrykk og bedre plassutnyttelse på mobil. Vestrejustert ikon kan samtidig være et bedre valg for universell utforming, siden ikonet kommer først i leserekkefølgen og blir synlig tidligere ved zoom."}),e.jsx(t,{title:o,iconPosition:"right",children:i})]})};s.parameters=d;const n={name:"Størrelser",render:p=>e.jsxs(e.Fragment,{children:[e.jsx(g,{hasSpacing:!0,children:'Prop "size" kan brukes for å spesifisere størrelsen på OpenClose-komponenten, og erstatter "variant" i neste major. "small" og "large" tilsvarer dagens "compact" og "standard", mens "medium" er en ny størrelse som ligger mellom de to.'}),e.jsx(m,{as:"h3",level:4,children:"Small"}),e.jsx(t,{title:o,size:"small",children:i}),e.jsx(m,{as:"h2",level:4,children:"Medium"}),e.jsx(t,{title:o,size:"medium",children:i}),e.jsx(m,{as:"h2",level:4,children:"Large"}),e.jsx(t,{title:o,size:"large",children:i})]})};n.parameters=d;const a={name:"Eksempel - selvvalgt hjelpetekst",render:p=>e.jsxs("div",{className:"semantic-article",children:[e.jsx(m,{as:"h1",level:2,children:"Navn på oppgave eller tema"}),e.jsx(g,{variant:"ingress",children:"Hjelpetekst som vi ønsker at brukeren skal lese før hen går videre, plasserer vi normalt synlig og rett etter overskriften. "}),e.jsx(t,{title:"Hjelpetekst som folk kan velge å åpne",children:e.jsx(g,{children:"Denne teksten kan brukere hente frem og lese hvis de har behov for det. Den kan også bli stående oppe som ekstra støtte for prosessen videre. Det er viktig at tittelen på OpenClose-komponenten tydelig kommuniserer hva slags informasjon man kan finne ved å åpne den. "})})]})};a.parameters=d;l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: exampleContent,
    title: exampleTitle
  },
  render: (args): JSX.Element => {
    return <OpenClose {...args} />;
  }
} satisfies Story`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Høyrestilt ikon',
  render: (_args): JSX.Element => {
    return <>
        <Paragraph>
          {'Høyrestilt ikon kan gi et roligere visuelt inntrykk og bedre plassutnyttelse på mobil. Vestrejustert ikon kan samtidig være et bedre valg for universell utforming, siden ikonet kommer først i leserekkefølgen og blir synlig tidligere ved zoom.'}
        </Paragraph>
        <OpenClose title={exampleTitle} iconPosition={'right'}>
          {exampleContent}
        </OpenClose>
      </>;
  }
} satisfies Story`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Størrelser',
  render: (_args): JSX.Element => {
    return <>
        <Paragraph hasSpacing>
          {'Prop "size" kan brukes for å spesifisere størrelsen på OpenClose-komponenten, og erstatter "variant" i neste major. "small" og "large" tilsvarer dagens "compact" og "standard", mens "medium" er en ny størrelse som ligger mellom de to.'}
        </Paragraph>

        <Heading as={'h3'} level={4}>
          {'Small'}
        </Heading>
        <OpenClose title={exampleTitle} size={'small'}>
          {exampleContent}
        </OpenClose>

        <Heading as={'h2'} level={4}>
          {'Medium'}
        </Heading>
        <OpenClose title={exampleTitle} size={'medium'}>
          {exampleContent}
        </OpenClose>

        <Heading as={'h2'} level={4}>
          {'Large'}
        </Heading>
        <OpenClose title={exampleTitle} size={'large'}>
          {exampleContent}
        </OpenClose>
      </>;
  }
} satisfies Story`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Eksempel - selvvalgt hjelpetekst',
  render: (_args): JSX.Element => {
    return <div className={'semantic-article'}>
        <Heading as={'h1'} level={2}>
          {'Navn på oppgave eller tema'}
        </Heading>
        <Paragraph variant={'ingress'}>
          {'Hjelpetekst som vi ønsker at brukeren skal lese før hen går videre, plasserer vi normalt synlig og rett etter overskriften. '}
        </Paragraph>
        <OpenClose title={'Hjelpetekst som folk kan velge å åpne'}>
          <Paragraph>
            {'Denne teksten kan brukere hente frem og lese hvis de har behov for det. Den kan også bli stående oppe som ekstra støtte for prosessen videre. Det er viktig at tittelen på OpenClose-komponenten tydelig kommuniserer hva slags informasjon man kan finne ved å åpne den. '}
          </Paragraph>
        </OpenClose>
      </div>;
  }
} satisfies Story`,...a.parameters?.docs?.source}}};const y=["Standard","HoyrestiltIkon","Sizes","EksempelSelvvalgtHjelpetekst"],H=Object.freeze(Object.defineProperty({__proto__:null,EksempelSelvvalgtHjelpetekst:a,HoyrestiltIkon:s,Sizes:n,Standard:l,__namedExportsOrder:y,default:j},Symbol.toStringTag,{value:"Module"}));export{a as E,s as H,H as O,l as S,n as a};
//# sourceMappingURL=OpenClose.stories-CjvSvef8.js.map
