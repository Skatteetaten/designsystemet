import{j as t}from"./iframe-Br1Xu9zr.js";import{W as f}from"./index-Xbc0duXx.js";import{T as n}from"./index-8xSWa2YY.js";import{S as b}from"./icon.systems-BmhPSTgm.js";const{expect:s,within:g}=__STORYBOOK_MODULE_TEST__,h={component:n,title:"Tester/Tag",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},svgPath:{table:{disable:!0},options:Object.keys(b),mapping:b},color:{table:{disable:!0}},size:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},y="Særavgift",r={children:y},o={name:"With Ref (FA1)",args:{...r,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=g(a).getAllByRole("generic")[1];await s(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:a})=>{const e=g(a).getAllByRole("generic")[1];await s(e).toHaveAttribute("id","htmlId"),await s(e).toHaveClass("dummyClassname"),await s(e).toHaveAttribute("lang","en"),await s(e).toHaveAttribute("data-testid","123ID")}},i={name:"Default Variant (ochre) (A3)",args:{...r},argTypes:{color:{table:{disable:!1}}}},c={name:"All color variants (A3)",args:{...r},render:({children:a})=>t.jsxs(t.Fragment,{children:[t.jsx(n,{color:"ochre",children:a}),t.jsx(n,{color:"forest",children:a}),t.jsx(n,{color:"burgundy",children:a}),t.jsx(n,{color:"graphite",children:a}),t.jsx(n,{color:"denim",children:a}),t.jsx(n,{color:"white",children:a})]})},d={name:"Small (A1)",args:{...r,size:"small"},argTypes:{size:{table:{disable:!1}}}},m={name:"With Custom Icon (A5)",args:{...r,svgPath:f,color:"burgundy"},argTypes:{svgPath:{table:{disable:!1}}}},u={args:{...r,svgPath:f,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=g(a).getByText(y);e.focus(),await s(e).toBeInTheDocument(),await s(e).toHaveAttribute("tabIndex","-1")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'en',
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
    imageSnapshot: {
      disableSnapshot: true
    },
    a11y: {
      test: 'off'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'en');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Default Variant (ochre) (A3)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    color: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'All color variants (A3)',
  args: {
    ...defaultArgs
  },
  render: ({
    children
  }): JSX.Element => <>
      <Tag color={'ochre'}>{children}</Tag>
      <Tag color={'forest'}>{children}</Tag>
      <Tag color={'burgundy'}>{children}</Tag>
      <Tag color={'graphite'}>{children}</Tag>
      <Tag color={'denim'}>{children}</Tag>
      <Tag color={'white'}>{children}</Tag>
    </>
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Small (A1)',
  args: {
    ...defaultArgs,
    size: 'small'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Custom Icon (A5)',
  args: {
    ...defaultArgs,
    svgPath: WarningSVGpath,
    color: 'burgundy'
  },
  argTypes: {
    svgPath: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    svgPath: WarningSVGpath,
    canBeManuallyFocused: true
  },
  argTypes: {
    canBeManuallyFocused: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const tag = canvas.getByText(defaultText);
    tag.focus();
    await expect(tag).toBeInTheDocument();
    await expect(tag).toHaveAttribute('tabIndex', '-1');
  }
} satisfies Story`,...u.parameters?.docs?.source}}};const v=["WithRef","WithAttributes","DefaultYellow","AllVariants","Small","WithCustomIcon","WithCanBeManuallyFocused"],x=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:c,DefaultYellow:i,Small:d,WithAttributes:l,WithCanBeManuallyFocused:u,WithCustomIcon:m,WithRef:o,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{x as T};
//# sourceMappingURL=Tag.test.stories-8eWzNH-O.js.map
