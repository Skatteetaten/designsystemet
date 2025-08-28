import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as x}from"./index-D_ouKaeX.js";import{c as m,e as T,f as E,T as a}from"./index-QDa3CmGl.js";import{c as e}from"./helpers-B90wjoUE.js";import{e as y}from"./stories.utils-Ys3NG0dr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CGk5cNE3.js";import"./index-CgEl4Pzg.js";import"./index-Du3yX_TW.js";import"./index-uxUkjR_c.js";const R={component:a.Row,title:"Komponenter/Table/Row",argTypes:{classNames:{table:{disable:!0}},context:{table:{disable:!0}},svgPath:{table:{disable:!0}},hideIconButton:{table:{disable:!0}},iconButtonAriaExpanded:{table:{disable:!0}},isExpandButtonDisabled:{table:{disable:!0}},onExpandClick:{table:{disable:!0}},children:{control:!1,table:{category:e.props}},isExpandable:{control:"boolean",table:{category:e.props},description:"Om raden er utvidbar."},isExpanded:{control:"boolean",table:{defaultValue:{summary:E().toString()},category:e.props}},expandButtonAriaDescribedby:{table:{category:e.aria}},expandButtonTitle:{table:{defaultValue:{summary:T()},category:e.props}},expandButtonPosition:{control:"inline-radio",options:["left","right"],table:{defaultValue:{summary:m()},category:e.props},description:"Posisjonen til utvidelsesknappen."},expandableContent:{control:"text",table:{category:e.props}},showExpandButtonTitle:{table:{category:e.props}},onExpand:{control:!1,table:{category:e.event},description:"Callback når raden utvides."},onClose:{control:!1,table:{category:e.event},description:"Callback når raden lukkes."}},args:{children:[t.jsx(a.DataCell,{children:"cell 1"},"cell1"),t.jsx(a.DataCell,{children:"cell 2"},"cell2")]}},o={decorators:[n=>t.jsx(a,{caption:"row example",children:t.jsx(a.Body,{children:t.jsx(n,{})})})]},l={render:n=>{const[u,r]=x.useState("Vis mer");return t.jsx(a,{caption:"row example",children:t.jsx(a.Body,{children:t.jsxs(a.Row,{expandButtonTitle:u,expandableContent:"Ekstra innhold",showExpandButtonTitle:!0,isExpandable:!0,onExpand:()=>r("Vis mindre"),onClose:()=>r("Vis mer"),children:[t.jsx(a.DataCell,{children:"cell 1"},"cell1"),t.jsx(a.DataCell,{children:"cell 2"},"cell2")]})})})}};l.parameters=y;var s,i,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  decorators: [(Story): JSX.Element => <Table caption={'row example'}>
        <Table.Body>
          <Story />
        </Table.Body>
      </Table>]
} satisfies Story`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,c,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(b=(c=l.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const V=["Preview","Examples"];export{l as Examples,o as Preview,V as __namedExportsOrder,R as default};
//# sourceMappingURL=TableRow.stories-BHsO5JaD.js.map
