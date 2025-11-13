import{j as t}from"./iframe-CdXtTKZQ.js";import{W as M}from"./index-D0xxaDHU.js";import{T as n}from"./index-D-15xU56.js";import{S as b}from"./icon.systems-eQup-rxy.js";const{expect:s,within:g}=__STORYBOOK_MODULE_TEST__,V={component:n,title:"Tester/Tag",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},svgPath:{table:{disable:!0},options:Object.keys(b),mapping:b},color:{table:{disable:!0}},size:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},O="Særavgift",r={children:O},o={name:"With Ref (FA1)",args:{...r,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=g(a).getAllByRole("generic")[1];await s(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:a})=>{const e=g(a).getAllByRole("generic")[1];await s(e).toHaveAttribute("id","htmlId"),await s(e).toHaveClass("dummyClassname"),await s(e).toHaveAttribute("lang","en"),await s(e).toHaveAttribute("data-testid","123ID")}},i={name:"Default Variant (ochre) (A3)",args:{...r},argTypes:{color:{table:{disable:!1}}}},c={name:"All color variants (A3)",args:{...r},render:({children:a})=>t.jsxs(t.Fragment,{children:[t.jsx(n,{color:"ochre",children:a}),t.jsx(n,{color:"forest",children:a}),t.jsx(n,{color:"burgundy",children:a}),t.jsx(n,{color:"graphite",children:a}),t.jsx(n,{color:"denim",children:a}),t.jsx(n,{color:"white",children:a})]})},d={name:"Small (A1)",args:{...r,size:"small"},argTypes:{size:{table:{disable:!1}}}},m={name:"With Custom Icon (A5)",args:{...r,svgPath:M,color:"burgundy"},argTypes:{svgPath:{table:{disable:!1}}}},u={args:{...r,svgPath:M,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=g(a).getByText(O);e.focus(),await s(e).toBeInTheDocument(),await s(e).toHaveAttribute("tabIndex","-1")}};var f,y,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
} satisfies Story`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,A,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} satisfies Story`,...(T=(A=l.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var S,w,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var F,I,W;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(W=(I=c.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var B,R,H;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(R=d.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var j,C,D;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(C=m.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var E,P,_;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const z=["WithRef","WithAttributes","DefaultYellow","AllVariants","Small","WithCustomIcon","WithCanBeManuallyFocused"],k=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:c,DefaultYellow:i,Small:d,WithAttributes:l,WithCanBeManuallyFocused:u,WithCustomIcon:m,WithRef:o,__namedExportsOrder:z,default:V},Symbol.toStringTag,{value:"Module"}));export{k as T};
//# sourceMappingURL=Tag.test.stories-D3MrgazM.js.map
