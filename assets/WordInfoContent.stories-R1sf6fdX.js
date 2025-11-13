import{f as l,j as n}from"./iframe-CdXtTKZQ.js";import{W as r}from"./index-6vEA_ZXZ.js";import{l as o}from"./storybook.testing.utils-BgHZnMzD.js";const d={component:r.Content,argTypes:{children:{control:"text",table:{category:l.props},description:'Innhold i popup-boksen. Må være string eller et HTML-element som er tillatt i en span. Finn ut hvilke <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content" target="_blank">elementer som er tillatt i en span</a>.'}}},e={render:i=>n.jsx("div",{className:"centerContent",children:n.jsx(r,{isOpen:!0,children:n.jsx(r.Content,{...i,children:o})})}),args:{children:o}};var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <div className={'centerContent'}>
      <WordInfo isOpen>
        <WordInfo.Content {...args}>{loremIpsum}</WordInfo.Content>
      </WordInfo>
    </div>,
  args: {
    children: loremIpsum
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const c=["Preview"],g=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{g as W};
//# sourceMappingURL=WordInfoContent.stories-R1sf6fdX.js.map
