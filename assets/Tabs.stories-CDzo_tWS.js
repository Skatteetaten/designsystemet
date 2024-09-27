import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{T as a,i as T}from"./index-NyjG6AqI.js";import{P as m,q as v,B as n}from"./index-DcL_RvKM.js";import{H as r}from"./index-CCUfsLXI.js";import{c as t,h as g}from"./helpers-CDRJ97Ot.js";import{l as h}from"./storybook.testing.utils-CMs160i9.js";import{e as P}from"./stories.utils-DTsHYhvm.js";const x={component:a,title:"Komponenter/Tabs/Tabs",argTypes:{children:{table:{category:t.props}},value:{control:"text",table:{category:t.props}},defaultValue:{control:"text",table:{category:t.props}},isMultiline:{table:{category:t.props}},variant:{control:"inline-radio",table:{category:t.props,defaultValue:{summary:T()}}},hasBorder:{table:{category:t.props}},onChange:{...g}},args:{defaultValue:"tab1"}},l={render:i=>e.jsxs(a,{...i,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"tab1",children:"Alle oppgaver"}),e.jsx(a.Tab,{value:"tab2",children:"Prioritert"}),e.jsx(a.Tab,{value:"tab3",children:"Nye"}),e.jsx(a.Tab,{value:"tab4",children:"Mine oppgaver"}),e.jsx(a.Tab,{value:"tab5",children:"Utgått frist (+99)"}),e.jsx(a.Tab,{value:"tab6",children:"Nylig endret"}),e.jsx(a.Tab,{value:"tab7",children:"Arkitverte (18)"})]},"list1"),e.jsx(a.Panel,{value:"tab1",children:"Alle oppgaver - Tabs.Panel 1"},"panel1"),e.jsx(a.Panel,{value:"tab2",children:"Prioritert - Innhold i Tabs.Panel 2"},"panel2"),e.jsx(a.Panel,{value:"tab3",children:"Nye - Innhold i Tabs.Panel 3"},"panel3"),e.jsx(a.Panel,{value:"tab4",children:"Mine oppgaver - ubehandlede. Panel 4"}),e.jsx(a.Panel,{value:"tab5",children:"Utgått frist - Nye. Panel 5"}),e.jsx(a.Panel,{value:"tab6",children:"Nylig endret - Alle. Panel 6"}),e.jsx(a.Panel,{value:"tab7",children:"Arkitverte - Ingen. Panel 7"})]})},s={render:i=>e.jsxs(a,{defaultValue:"tab1",isMultiline:!0,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"tab1",svgPath:m,children:"Mine oppgaver (12)"}),e.jsx(a.Tab,{value:"tab2",svgPath:v,children:"Tildelt til andre (77)"}),e.jsx(a.Tab,{value:"tab3",svgPath:n,children:"Ubehandlede oppgaver (99+)"}),e.jsx(a.Tab,{value:"tab4",svgPath:n,children:"Langtekst som gjør at det må brekke"}),e.jsx(a.Tab,{value:"tab5",svgPath:n,children:"Langtekst som gjør at det må brekke"})]}),e.jsxs(a.Panel,{value:"tab1",children:[e.jsx(r,{as:"h3",level:3,children:"Mine oppgaver"}),h]}),e.jsxs(a.Panel,{value:"tab2",children:[e.jsx(r,{as:"h3",level:3,children:"Tildelt andre"}),"Lorem ipsum dolor sit amet, skattemyndighetene consectetuer adipiscing elit. Donec odio magna, sagittis eget rutrum quis, egestas vel nibh. Nullam eleifend ultricies eros, at accumsan nisl tincidunt sed. Vivamus vestibulum semper laoreet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Phasellus vel sapien eu magna laoreet rutrum. Curabitur eleifend tincidunt laoreet. Proin quam nibh, placerat vel blandit eu, placerat in tellus. Aenean lorem sem, malesuada in libero ut, mollis pretium turpis. Donec vitae sapien eu libero rutrum rutrum. Nam quis lacus neque. Pellentesque ultrices mattis odio. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas fermentum tortor at risus."]}),e.jsxs(a.Panel,{value:"tab3",children:[e.jsx(r,{as:"h3",level:3,children:"Ubehandlede"}),e.jsxs("ul",{children:[e.jsx("li",{children:"oppgave 1"}),e.jsx("li",{children:"oppgave2"})]})]})]})};s.parameters=P;var b,u,o;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <Tabs.List key={'list1'}>
        <Tabs.Tab value={'tab1'}>{'Alle oppgaver'}</Tabs.Tab>
        <Tabs.Tab value={'tab2'}>{'Prioritert'}</Tabs.Tab>
        <Tabs.Tab value={'tab3'}>{'Nye'}</Tabs.Tab>
        <Tabs.Tab value={'tab4'}>{'Mine oppgaver'}</Tabs.Tab>
        <Tabs.Tab value={'tab5'}>{'Utgått frist (+99)'}</Tabs.Tab>
        <Tabs.Tab value={'tab6'}>{'Nylig endret'}</Tabs.Tab>
        <Tabs.Tab value={'tab7'}>{'Arkitverte (18)'}</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel key={'panel1'} value={'tab1'}>
        {'Alle oppgaver - Tabs.Panel 1'}
      </Tabs.Panel>
      <Tabs.Panel key={'panel2'} value={'tab2'}>
        {'Prioritert - Innhold i Tabs.Panel 2'}
      </Tabs.Panel>
      <Tabs.Panel key={'panel3'} value={'tab3'}>
        {'Nye - Innhold i Tabs.Panel 3'}
      </Tabs.Panel>
      <Tabs.Panel value={'tab4'}>
        {'Mine oppgaver - ubehandlede. Panel 4'}
      </Tabs.Panel>
      <Tabs.Panel value={'tab5'}>{'Utgått frist - Nye. Panel 5'}</Tabs.Panel>
      <Tabs.Panel value={'tab6'}>{'Nylig endret - Alle. Panel 6'}</Tabs.Panel>
      <Tabs.Panel value={'tab7'}>{'Arkitverte - Ingen. Panel 7'}</Tabs.Panel>
    </Tabs>
} satisfies Story`,...(o=(u=l.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};var d,p,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <Tabs defaultValue={'tab1'} isMultiline>
        <Tabs.List>
          <Tabs.Tab value={'tab1'} svgPath={PersonSVGpath}>
            {'Mine oppgaver (12)'}
          </Tabs.Tab>
          <Tabs.Tab value={'tab2'} svgPath={AccountMultipleSVGpath}>
            {'Tildelt til andre (77)'}
          </Tabs.Tab>
          <Tabs.Tab value={'tab3'} svgPath={BriefcaseSVGpath}>
            {'Ubehandlede oppgaver (99+)'}
          </Tabs.Tab>
          <Tabs.Tab value={'tab4'} svgPath={BriefcaseSVGpath}>
            {'Langtekst som gjør at det må brekke'}
          </Tabs.Tab>
          <Tabs.Tab value={'tab5'} svgPath={BriefcaseSVGpath}>
            {'Langtekst som gjør at det må brekke'}
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={'tab1'}>
          <Heading as={'h3'} level={3}>
            {'Mine oppgaver'}
          </Heading>
          {loremIpsum}
        </Tabs.Panel>
        <Tabs.Panel value={'tab2'}>
          <Heading as={'h3'} level={3}>
            {'Tildelt andre'}
          </Heading>
          {'Lorem ipsum dolor sit amet, skattemyndighetene consectetuer adipiscing elit. Donec odio magna, sagittis eget rutrum quis, egestas vel nibh. Nullam eleifend ultricies eros, at accumsan nisl tincidunt sed. Vivamus vestibulum semper laoreet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Phasellus vel sapien eu magna laoreet rutrum. Curabitur eleifend tincidunt laoreet. Proin quam nibh, placerat vel blandit eu, placerat in tellus. Aenean lorem sem, malesuada in libero ut, mollis pretium turpis. Donec vitae sapien eu libero rutrum rutrum. Nam quis lacus neque. Pellentesque ultrices mattis odio. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas fermentum tortor at risus.'}
        </Tabs.Panel>
        <Tabs.Panel value={'tab3'}>
          <Heading as={'h3'} level={3}>
            {'Ubehandlede'}
          </Heading>
          <ul>
            <li>{'oppgave 1'}</li>
            <li>{'oppgave2'}</li>
          </ul>
        </Tabs.Panel>
      </Tabs>;
  }
} satisfies Story`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const j=["Preview","Examples"],N=Object.freeze(Object.defineProperty({__proto__:null,Examples:s,Preview:l,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{s as E,N as T};
//# sourceMappingURL=Tabs.stories-CDzo_tWS.js.map
