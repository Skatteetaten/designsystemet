import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-D_ouKaeX.js";import{c as u,T as a}from"./index-CuNl2EzI.js";import{c as e}from"./helpers-DjiZIot2.js";import{e as T}from"./stories.utils-WEsnq5G6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CwaotbcG.js";import"./index-BQO_0U1F.js";import"./index-CUnERQXD.js";import"./index-BQtvKDNR.js";const S={component:a.Row,title:"Komponenter/Table/Row",argTypes:{children:{control:!1,table:{category:e.props}},isExpandable:{table:{category:e.props}},isExpanded:{table:{category:e.props}},expandButtonAriaDescribedby:{table:{category:e.aria}},expandButtonTitle:{table:{category:e.props}},expandButtonPosition:{control:"inline-radio",table:{defaultValue:{summary:u()},category:e.props}},expandableContent:{control:"text",table:{category:e.props}},showExpandButtonTitle:{table:{category:e.props}},onExpand:{control:!1,table:{category:e.event}},onClose:{control:!1,table:{category:e.event}}},args:{children:[t.jsx(a.DataCell,{children:"cell 1"},"cell1"),t.jsx(a.DataCell,{children:"cell 2"},"cell2")]}},r={decorators:[l=>t.jsx(a,{caption:"row example",children:t.jsx(a.Body,{children:t.jsx(l,{})})})]},o={render:l=>{const[m,n]=b.useState("Vis mer");return t.jsx(a,{caption:"row example",children:t.jsx(a.Body,{children:t.jsxs(a.Row,{expandButtonTitle:m,expandableContent:"Ekstra innhold",showExpandButtonTitle:!0,isExpandable:!0,onExpand:()=>n("Vis mindre"),onClose:()=>n("Vis mer"),children:[t.jsx(a.DataCell,{children:"cell 1"},"cell1"),t.jsx(a.DataCell,{children:"cell 2"},"cell2")]})})})}};o.parameters=T;var s,p,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  decorators: [(Story): JSX.Element => <Table caption={'row example'}>
        <Table.Body>
          <Story />
        </Table.Body>
      </Table>]
} satisfies Story`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,d,x;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(d=o.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const R=["Preview","Examples"];export{o as Examples,r as Preview,R as __namedExportsOrder,S as default};
//# sourceMappingURL=TableRow.stories-Pa80Y7rN.js.map
