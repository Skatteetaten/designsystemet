import{j as a,e,r as u}from"./iframe-DRo7xN6O.js";import{c as b,e as T,f as y,T as t}from"./index-UIlDmxNP.js";import{e as E}from"./stories.utils-CZ5hej_8.js";import"./index-CIGiQTsv.js";import"./index-C6akGUuV.js";import"./index-AjPAYYXA.js";const j={component:t.Row,title:"Komponenter/Table/Row",argTypes:{children:{control:!1,table:{category:e.props}},isExpandable:{control:"boolean",table:{category:e.props},description:"Om raden er utvidbar."},isExpanded:{control:"boolean",table:{defaultValue:{summary:y().toString()},category:e.props}},expandButtonAriaDescribedby:{table:{category:e.aria}},expandButtonTitle:{table:{defaultValue:{summary:T()},category:e.props}},expandButtonPosition:{control:"inline-radio",options:["left","right"],table:{defaultValue:{summary:b()},category:e.props},description:"Posisjonen til utvidelsesknappen."},expandableContent:{control:"text",table:{category:e.props}},showExpandButtonTitle:{table:{category:e.props}},onExpand:{control:!1,table:{category:e.event},description:"Callback når raden utvides."},onClose:{control:!1,table:{category:e.event},description:"Callback når raden lukkes."}},args:{children:[a.jsx(t.DataCell,{children:"cell 1"},"cell1"),a.jsx(t.DataCell,{children:"cell 2"},"cell2")]}},l={decorators:[n=>a.jsx(t,{caption:"row example",children:a.jsx(t.Body,{children:a.jsx(n,{})})})]},o={render:n=>{const[m,r]=u.useState("Vis mer");return a.jsx(t,{caption:"row example",children:a.jsx(t.Body,{children:a.jsxs(t.Row,{expandButtonTitle:m,expandableContent:"Ekstra innhold",showExpandButtonTitle:!0,isExpandable:!0,onExpand:()=>r("Vis mindre"),onClose:()=>r("Vis mer"),children:[a.jsx(t.DataCell,{children:"cell 1"},"cell1"),a.jsx(t.DataCell,{children:"cell 2"},"cell2")]})})})}};o.parameters=E;var s,i,p;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  decorators: [(Story): JSX.Element => <Table caption={'row example'}>
        <Table.Body>
          <Story />
        </Table.Body>
      </Table>]
} satisfies Story`,...(p=(i=l.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,c,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(c=o.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};const D=["Preview","Examples"];export{o as Examples,l as Preview,D as __namedExportsOrder,j as default};
//# sourceMappingURL=TableRow.stories-BhCdk0R0.js.map
