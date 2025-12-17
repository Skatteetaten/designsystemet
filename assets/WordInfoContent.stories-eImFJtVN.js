import{e as s,j as n}from"./iframe-VHQh6taY.js";import{W as r}from"./index-CqsuB6cf.js";import{l as o}from"./storybook.testing.utils-BgHZnMzD.js";const a={component:r.Content,argTypes:{children:{control:"text",table:{category:s.props},description:'Innhold i popup-boksen. Må være string eller et HTML-element som er tillatt i en span. Finn ut hvilke <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content" target="_blank">elementer som er tillatt i en span</a>.'}}},e={render:t=>n.jsx("div",{className:"centerContent",children:n.jsx(r,{isOpen:!0,children:n.jsx(r.Content,{...t,children:o})})}),args:{children:o}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <div className={'centerContent'}>
      <WordInfo isOpen>
        <WordInfo.Content {...args}>{loremIpsum}</WordInfo.Content>
      </WordInfo>
    </div>,
  args: {
    children: loremIpsum
  }
}`,...e.parameters?.docs?.source}}};const i=["Preview"],p=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:i,default:a},Symbol.toStringTag,{value:"Module"}));export{p as W};
//# sourceMappingURL=WordInfoContent.stories-eImFJtVN.js.map
