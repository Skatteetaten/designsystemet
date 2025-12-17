import{j as a}from"./iframe-VHQh6taY.js";import{A as t}from"./index-DgU9os4N.js";const{expect:r,within:h}=__STORYBOOK_MODULE_TEST__,f="htmlId",g="Meg selv",A="Beskrivelse",b="Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.",S={component:t,title:"Tester/Accordion",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},color:{table:{disable:!0}},size:{table:{disable:!0}},iconPosition:{table:{disable:!0}}},args:{children:a.jsx(t.Item,{title:g,children:b})},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},v=()=>{const e=[a.jsx(t.Item,{title:g,subtitle:A,children:b},"i1"),a.jsx(t.Item,{title:g,subtitle:A,children:b},"i2")];return a.jsxs(a.Fragment,{children:[a.jsx(t,{className:"bottomSpacingXL",color:"none",children:e}),a.jsx(t,{className:"bottomSpacingXL",color:"burgundy",children:e}),a.jsx(t,{className:"bottomSpacingXL",color:"denim",children:e}),a.jsx(t,{className:"bottomSpacingXL",color:"forest",children:e}),a.jsx(t,{className:"bottomSpacingXL",color:"graphite",children:e}),a.jsx(t,{className:"bottomSpacingXL",color:"ochre",children:e})]})},s={children:a.jsx(t.Item,{title:g,children:b})},i={name:"With Ref (FA1)",args:{...s,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=h(e).getAllByRole("generic")[1];await r(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes(FA2-5)",args:{...s,id:f,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const n=h(e).getAllByRole("generic")[1];await r(n).toHaveClass("dummyClassname"),await r(n).toHaveAttribute("id",f),await r(n).toHaveAttribute("lang","nb"),await r(n).toHaveAttribute("data-testid","123ID")}},l={name:"Defaults (A2, A4, A7 delvis)",args:s},c={name:"With Icon Left (A2)",args:{iconPosition:"left",...s}},d={render:v,name:"With All Color Variants (A1)",args:s},m={name:"Variant Small (A7)",args:{size:"small",...s}},u={name:"Variant Medium (A7)",args:{size:"medium",...s}},p={name:"Variant Large (A7)",args:{size:"large",...s}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLDivElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    }
  },
  argTypes: {
    ref: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes(FA2-5)',
  args: {
    ...defaultArgs,
    id: elementId,
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID'
  },
  argTypes: {
    id: {
      table: {
        disable: false
      }
    },
    className: {
      table: {
        disable: false
      }
    },
    lang: {
      table: {
        disable: false
      }
    },
    'data-testid': {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    a11y: {
      test: 'off'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A2, A4, A7 delvis)',
  args: defaultArgs
} satisfies Story`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Icon Left (A2)',
  args: {
    iconPosition: 'left',
    ...defaultArgs
  }
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: TemplateWithAllColors,
  name: 'With All Color Variants (A1)',
  args: defaultArgs
} satisfies Story`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Variant Small (A7)',
  args: {
    size: 'small',
    ...defaultArgs
  }
} satisfies Story`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Variant Medium (A7)',
  args: {
    size: 'medium',
    ...defaultArgs
  }
} satisfies Story`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Variant Large (A7)',
  args: {
    size: 'large',
    ...defaultArgs
  }
} satisfies Story`,...p.parameters?.docs?.source}}};const W=["WithRef","WithAttributes","Defaults","WithIconLeft","WithAllColorVariants","WithSmall","WithMedium","WithLarge"],w=Object.freeze(Object.defineProperty({__proto__:null,Defaults:l,WithAllColorVariants:d,WithAttributes:o,WithIconLeft:c,WithLarge:p,WithMedium:u,WithRef:i,WithSmall:m,__namedExportsOrder:W,default:S},Symbol.toStringTag,{value:"Module"}));export{w as A};
//# sourceMappingURL=Accordion.test.stories-gJxuqJZx.js.map
