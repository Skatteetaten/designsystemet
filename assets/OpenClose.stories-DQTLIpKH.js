import{h as d,c as r,j as e}from"./iframe-LV2IHoVd.js";import{h as k,i as c,j as u,k as v,O as o}from"./index-CoFUi8Ca.js";import{P as i,H as f}from"./index-Bg4cHPXU.js";import{l as h}from"./storybook.testing.utils-BgHZnMzD.js";import{e as p}from"./stories.utils-DxY1qhhU.js";const y={component:o,title:"Komponenter/OpenClose",argTypes:{children:{control:"text",table:{category:r.props}},iconPosition:{control:"inline-radio",table:{category:r.props,defaultValue:{summary:v()}}},isOnClickOnlyFiredOnOpen:{table:{category:r.props}},isExpanded:{table:{category:r.props}},isDefaultExpanded:{table:{category:r.props}},keepMounted:{table:{category:r.props,defaultValue:{summary:u().toString()}}},showUnderline:{table:{category:r.props,defaultValue:{summary:c().toString()}}},title:{table:{category:r.props}},titleAs:{control:"inline-radio",table:{category:r.props}},variant:{control:"inline-radio",table:{category:r.props,defaultValue:{summary:k()}}},onClick:{...d}},args:{children:h,title:"OpenClose title"}},m="Hva er aksjesparekonto",g="En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen. ",s={args:{children:g,title:m},render:l=>e.jsx(o,{...l})},t={name:"Høyrestilt ikon",render:l=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Høyrestilt ikon kan gi et roligere visuelt inntrykk og bedre plassutnyttelse på mobil. Vestrejustert ikon kan samtidig være et bedre valg for universell utforming, siden ikonet kommer først i leserekkefølgen og blir synlig tidligere ved zoom."}),e.jsx(o,{title:m,iconPosition:"right",children:g})]})};t.parameters=p;const n={name:"Kompakt variant",render:l=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Kompakt variant bruker mindre fontstørrelse, og brukes normalt i situasjoner der det er lite plass tilgjengelig."}),e.jsx(o,{title:m,variant:"compact",children:g})]})};n.parameters=p;const a={name:"Eksempel - selvvalgt hjelpetekst",render:l=>e.jsxs("div",{className:"semantic-article",children:[e.jsx(f,{as:"h1",level:2,children:"Navn på oppgave eller tema"}),e.jsx(i,{variant:"ingress",children:"Hjelpetekst som vi ønsker at brukeren skal lese før hen går videre, plasserer vi normalt synlig og rett etter overskriften. "}),e.jsx(o,{title:"Hjelpetekst som folk kan velge å åpne",children:e.jsx(i,{children:"Denne teksten kan brukere hente frem og lese hvis de har behov for det. Den kan også bli stående oppe som ekstra støtte for prosessen videre. Det er viktig at tittelen på OpenClose-komponenten tydelig kommuniserer hva slags informasjon man kan finne ved å åpne den. "})})]})};a.parameters=p;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: exampleContent,
    title: exampleTitle
  },
  render: (args): JSX.Element => {
    return <OpenClose {...args} />;
  }
} satisfies Story`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Kompakt variant',
  render: (_args): JSX.Element => {
    return <>
        <Paragraph>
          {'Kompakt variant bruker mindre fontstørrelse, og brukes normalt i situasjoner der det er lite plass tilgjengelig.'}
        </Paragraph>
        <OpenClose title={exampleTitle} variant={'compact'}>
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
} satisfies Story`,...a.parameters?.docs?.source}}};const j=["Standard","HoyrestiltIkon","KompaktVariant","EksempelSelvvalgtHjelpetekst"],H=Object.freeze(Object.defineProperty({__proto__:null,EksempelSelvvalgtHjelpetekst:a,HoyrestiltIkon:t,KompaktVariant:n,Standard:s,__namedExportsOrder:j,default:y},Symbol.toStringTag,{value:"Module"}));export{a as E,t as H,n as K,H as O,s as S};
//# sourceMappingURL=OpenClose.stories-DQTLIpKH.js.map
