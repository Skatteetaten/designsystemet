import{c as n,j as e}from"./iframe-B8GUhlLl.js";import{I as c,m as p}from"./index-ee2RFhIf.js";import{H as r}from"./index-BQLODoD0.js";import{e as i}from"./stories.utils-BCId827v.js";const d={component:r,title:"Komponenter/Heading",argTypes:{as:{control:"inline-radio",table:{category:n.props}},canBeManuallyFocused:{table:{category:n.props}},children:{control:"text",table:{category:n.props}},hasSpacing:{table:{category:n.props}},level:{control:"inline-radio",table:{category:n.props}}},args:{as:"h2",children:"Overskrift"}},t={},s={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"h1",hasSpacing:!0,children:"Overskriftsnivå 1"}),e.jsx(r,{as:"h2",hasSpacing:!0,children:"Overskriftsnivå 2"}),e.jsx(r,{as:"h3",hasSpacing:!0,children:"Overskriftsnivå 3"}),e.jsx(r,{as:"h4",hasSpacing:!0,children:"Overskriftsnivå 4"}),e.jsx(r,{as:"h5",hasSpacing:!0,children:"Overskriftsnivå 5"}),e.jsx(r,{as:"h6",hasSpacing:!0,children:"Overskriftsnivå 6"})]})};s.parameters=i;const a={render:o=>e.jsxs(r,{as:"h1",children:[e.jsx(c,{svgPath:p,size:"extraLarge"})," Skjemaet er sendt inn."]})};a.storyName="Overskrift med ikon";a.parameters=i;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{} satisfies Story",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <>
        <Heading as={'h1'} hasSpacing>
          {'Overskriftsnivå 1'}
        </Heading>
        <Heading as={'h2'} hasSpacing>
          {'Overskriftsnivå 2'}
        </Heading>
        <Heading as={'h3'} hasSpacing>
          {'Overskriftsnivå 3'}
        </Heading>
        <Heading as={'h4'} hasSpacing>
          {'Overskriftsnivå 4'}
        </Heading>
        <Heading as={'h5'} hasSpacing>
          {'Overskriftsnivå 5'}
        </Heading>
        <Heading as={'h6'} hasSpacing>
          {'Overskriftsnivå 6'}
        </Heading>
      </>;
  }
} satisfies Story`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <Heading as={'h1'}>
        <Icon svgPath={CompletedSVGpath} size={'extraLarge'} />
        {' Skjemaet er sendt inn.'}
      </Heading>;
  }
} satisfies Story`,...a.parameters?.docs?.source}}};const g=["Preview","Examples","HeadingWithIcon"],S=Object.freeze(Object.defineProperty({__proto__:null,Examples:s,HeadingWithIcon:a,Preview:t,__namedExportsOrder:g,default:d},Symbol.toStringTag,{value:"Module"}));export{s as E,S as H,a};
//# sourceMappingURL=Heading.stories-3NCfM-Yz.js.map
