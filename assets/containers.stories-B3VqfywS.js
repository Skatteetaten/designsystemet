import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as u,T as j}from"./TokensList-CGswfLQi.js";import{T as n}from"./index-CeMaJgB_.js";import{P as g}from"./index-SYCMKRjb.js";import"./breakpoints-DU3zZRP4.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EsEcB_zD.js";import"./index-vpaAjjI_.js";import"./index-B77p9Xne.js";import"./index-_-BAtSXr.js";const E={title:"Designtokens/Containers"},p=`:root,
  :host`,l=[{name:"Breakpoint S",query:"@media (width >= 640px)"},{name:"Breakpoint M",query:"@media (width >= 1024px)"},{name:"Breakpoint L",query:"@media (width >= 1366px)"}],m=u,b=(a,r,c,i,d)=>Object.keys(a).map((s,x)=>e.jsxs(n.Row,{children:[x===i&&e.jsx(n.DataCell,{rowSpan:Math.floor(d-i),children:e.jsx("strong",{children:c})}),e.jsx(n.DataCell,{className:"rowLeftBorder",children:e.jsx("strong",{children:s})}),e.jsx(n.DataCell,{className:"rowLeftBorder",children:a[s]}),r.map(o=>e.jsx(n.DataCell,{className:`${m[o.query][p][s]?"rowLeftBorder":""} ${o.name==="Breakpoint L"?"rowRightBorder":""}`,children:m[o.query][p][s]||""},o.name))]},s)).slice(i,d),t={render:()=>{const a=Object.fromEntries(Object.entries(u[`:root,
:host`]).filter(([r,c])=>r.includes("responsive")));return e.jsxs(e.Fragment,{children:[e.jsx(j,{tokenType:"containers"}),e.jsx(g,{children:"Når dynamiske container-tokens endres fra utgangspunktet (mobile):"}),e.jsxs(n,{caption:"Når dynamiske container-tokens endres fra utgangspunktet (mobile)",variant:"compact",children:[e.jsx(n.Header,{children:e.jsxs(n.Row,{children:[e.jsx(n.HeaderCell,{colSpan:2,children:""}),e.jsx(n.HeaderCell,{className:"noWrap",children:"Mobile/Breakpoint XS"}),l.map(r=>e.jsx(n.HeaderCell,{className:"noWrap",children:r.name},r.name))]})}),e.jsxs(n.Body,{children:[b(a,l,"External",0,3),b(a,l,"Internal",3,8)]})]})]})},parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs"}};var T,h,k;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const responsiveTokens = Object.fromEntries(Object.entries(containersJson[':root,\\n:host']).filter(([key, _value]) => key.includes('responsive')));
    return <>
        <TokensList tokenType={'containers'} />
        <Paragraph>
          {'Når dynamiske container-tokens endres fra utgangspunktet (mobile):'}
        </Paragraph>
        <Table caption={'Når dynamiske container-tokens endres fra utgangspunktet (mobile)'} variant={'compact'}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={2}>{''}</Table.HeaderCell>
              <Table.HeaderCell className={'noWrap'}>
                {'Mobile/Breakpoint XS'}
              </Table.HeaderCell>
              {breakpoints.map(breakpoint => <Table.HeaderCell key={breakpoint.name} className={'noWrap'}>
                  {breakpoint.name}
                </Table.HeaderCell>)}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {generateTableRows(responsiveTokens, breakpoints, 'External', 0, 3)}
            {generateTableRows(responsiveTokens, breakpoints, 'Internal', 3, 8)}
          </Table.Body>
        </Table>
      </>;
  },
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true
      }
    },
    viewMode: 'docs'
  }
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const M=["Containers"];export{t as Containers,M as __namedExportsOrder,E as default};
//# sourceMappingURL=containers.stories-B3VqfywS.js.map
