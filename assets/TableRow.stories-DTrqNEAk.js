import{j as t,e,r as i}from"./iframe-CBOQuZmX.js";import{c as p,e as d,f as c,T as a}from"./index-B9FmAAUs.js";import{e as x}from"./stories.utils-CZ5hej_8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tEZUkoN5.js";import"./index-BxmwhRWV.js";import"./index-CSgUqAK2.js";const B={component:a.Row,title:"Komponenter/Table/Row",argTypes:{children:{control:!1,table:{category:e.props}},isExpandable:{control:"boolean",table:{category:e.props},description:"Om raden er utvidbar."},isExpanded:{control:"boolean",table:{defaultValue:{summary:c().toString()},category:e.props}},expandButtonAriaDescribedby:{table:{category:e.aria}},expandButtonTitle:{table:{defaultValue:{summary:d()},category:e.props}},expandButtonPosition:{control:"inline-radio",options:["left","right"],table:{defaultValue:{summary:p()},category:e.props},description:"Posisjonen til utvidelsesknappen."},expandableContent:{control:"text",table:{category:e.props}},expandButtonProps:{table:{category:e.props}},showExpandButtonTitle:{table:{category:e.props}},onExpand:{control:!1,table:{category:e.event},description:"Callback når raden utvides."},onClose:{control:!1,table:{category:e.event},description:"Callback når raden lukkes."}},args:{children:[t.jsx(a.DataCell,{children:"cell 1"},"cell1"),t.jsx(a.DataCell,{children:"cell 2"},"cell2")]}},l={decorators:[n=>t.jsx(a,{caption:"row example",children:t.jsx(a.Body,{children:t.jsx(n,{})})})]},o={render:n=>{const[s,r]=i.useState("Vis mer");return t.jsx(a,{caption:"row example",children:t.jsx(a.Body,{children:t.jsxs(a.Row,{expandButtonTitle:s,expandableContent:"Ekstra innhold",showExpandButtonTitle:!0,isExpandable:!0,onExpand:()=>r("Vis mindre"),onClose:()=>r("Vis mer"),children:[t.jsx(a.DataCell,{children:"cell 1"},"cell1"),t.jsx(a.DataCell,{children:"cell 2"},"cell2")]})})})}};o.parameters=x;l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [(Story): JSX.Element => <Table caption={'row example'}>
        <Table.Body>
          <Story />
        </Table.Body>
      </Table>]
} satisfies Story`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [expandButtonTitle, setExpandButtonTitle] = useState('Vis mer');
    return <Table caption={'row example'}>
        <Table.Body>
          <Table.Row expandButtonTitle={expandButtonTitle} expandableContent={'Ekstra innhold'} showExpandButtonTitle isExpandable onExpand={() => setExpandButtonTitle('Vis mindre')} onClose={() => setExpandButtonTitle('Vis mer')}>
            <Table.DataCell key={'cell1'}>{'cell 1'}</Table.DataCell>
            <Table.DataCell key={'cell2'}>{'cell 2'}</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>;
  }
} satisfies Story`,...o.parameters?.docs?.source}}};const f=["Preview","Examples"];export{o as Examples,l as Preview,f as __namedExportsOrder,B as default};
//# sourceMappingURL=TableRow.stories-DTrqNEAk.js.map
