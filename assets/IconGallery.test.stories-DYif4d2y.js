import{j as e}from"./iframe-LV2IHoVd.js";import{I as o}from"./index-DuhhME3h.js";import{S as n}from"./icon.systems-BccAeqUG.js";import{T as m}from"./icon.themes-DLpYqL4C.js";const l={component:o,title:"Tester/Icon Gallery",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},size:{table:{disable:!0}},svgPath:{table:{disable:!0}},title:{table:{disable:!0}},variant:{table:{disable:!0},control:"text"},ariaLabel:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},c=()=>e.jsx(e.Fragment,{children:Object.entries(n).map(([s,r])=>e.jsx(o,{svgPath:r,size:"large"},s))}),i=()=>e.jsx(e.Fragment,{children:Object.entries(m).map(([s,r])=>e.jsx(o,{svgPath:r,variant:"themeIcon"},s))}),t={render:c,name:"SystemIcons Image Snaphot"},a={render:i,name:"ThemeIcons Image Snaphot"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: TemplateSystemIcons,
  name: 'SystemIcons Image Snaphot'
} as Story`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: TemplateThemeIcons,
  name: 'ThemeIcons Image Snaphot'
} as Story`,...a.parameters?.docs?.source}}};const p=["SystemIcons","ThemeIcons"],u=Object.freeze(Object.defineProperty({__proto__:null,SystemIcons:t,ThemeIcons:a,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{u as I};
//# sourceMappingURL=IconGallery.test.stories-DYif4d2y.js.map
