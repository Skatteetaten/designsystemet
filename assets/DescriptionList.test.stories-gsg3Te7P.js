import{j as a}from"./iframe-Br1Xu9zr.js";import{D as t}from"./index-BVXicwjt.js";const{expect:r,within:h}=__STORYBOOK_MODULE_TEST__,y={component:t,title:"Tester/DescriptionList",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},variant:{table:{disable:!0}},isVerticalOnMobile:{table:{disable:!0}},descriptionDirection:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},size:{table:{disable:!0}},descriptionWeight:{table:{disable:!0}},isDescriptionVerticalOnMobile:{table:{disable:!0}},termWeight:{table:{disable:!0}}},args:{children:[a.jsx(t.Element,{term:"Saksbehandler",children:"Kenneth Performance"},"k1"),a.jsx(t.Element,{term:"Status",children:"Under behandling"},"k2"),a.jsx(t.Element,{term:"Sist endret",children:"30.12.2013"},"k3"),a.jsx(t.Element,{term:"Frist",children:"30.12.2013"},"k4"),a.jsx(t.Element,{term:"Farge",children:"Smaragdgrønn"},"k5"),a.jsx(t.Element,{term:"Først endret",children:"30.12.2010"},"k6")]},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},n={},i={name:"With Ref (FA1)",args:{...n,"data-testid":"123ID",ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const s=h(e).getByTestId("123ID");await r(s).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={name:"With Attributes (FA2-5)",args:{...n,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const s=h(e).getByTestId("123ID");await r(s).toHaveClass("dummyClassname"),await r(s).toHaveAttribute("id","htmlId"),await r(s).toHaveAttribute("lang","nb")}},o={name:"Defaults (B1)",args:{...n},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const u=h(e),s=u.getByText("Kenneth Performance"),f=u.getByText("Saksbehandler");await r(s).toBeInTheDocument(),await r(s.tagName).toBe("DD"),await r(f.tagName).toBe("DT")}},c={name:"With Spacing (A4)",args:{...n,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1},control:{disable:!1}}}},d={name:"With Size And FontWeight (A2)",args:{...n,size:"small",termWeight:"regular",descriptionWeight:"bold"},argTypes:{size:{table:{disable:!1},control:{disable:!0}}}},v=e=>a.jsxs(a.Fragment,{children:[a.jsx(t,{...e,hasSpacing:!0}),a.jsx(t,{...e,descriptionDirection:"vertical"})]}),m={name:"With Variant Vertical (A1, A2)",render:v,args:{...n,variant:"vertical"},argTypes:{variant:{table:{disable:!1},control:{disable:!0}}}},S=e=>a.jsxs(a.Fragment,{children:[a.jsx(t,{...e,hasSpacing:!0}),a.jsx(t,{...e,descriptionDirection:"vertical"})]}),b={name:"With Variant Horizontal (A1, A2, A7)",render:S,args:{...n,variant:"horizontal"},argTypes:{variant:{table:{disable:!1},control:{disable:!0}}}},p={name:"With IsVerticalOnMobile (A8)",args:{...n,variant:"horizontal",isVerticalOnMobile:!0},argTypes:{variant:{table:{disable:!1},control:{disable:!0}}},globals:{viewport:{value:"--breakpoint-xs"}}},g={name:"With isDescriptionVerticalOnMobile (A9)",args:{...n,descriptionDirection:"horizontal",isDescriptionVerticalOnMobile:!0},argTypes:{isDescriptionVerticalOnMobile:{table:{disable:!1},control:{disable:!0}}},globals:{viewport:{value:"--breakpoint-xs"}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    'data-testid': '123ID',
    ref: (instance: HTMLDListElement | null): void => {
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId('123ID');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
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
    const container = canvas.getByTestId('123ID');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (B1)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const descriptionNode = canvas.getByText('Kenneth Performance');
    const termNode = canvas.getByText('Saksbehandler');
    await expect(descriptionNode).toBeInTheDocument();
    await expect(descriptionNode.tagName).toBe('DD');
    await expect(termNode.tagName).toBe('DT');
  }
} satisfies Story`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Spacing (A4)',
  args: {
    ...defaultArgs,
    hasSpacing: true
  },
  argTypes: {
    hasSpacing: {
      table: {
        disable: false
      },
      control: {
        disable: false
      }
    }
  }
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Size And FontWeight (A2)',
  args: {
    ...defaultArgs,
    size: 'small',
    termWeight: 'regular',
    descriptionWeight: 'bold'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  }
} satisfies Story`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Variant Vertical (A1, A2)',
  render: VerticalTemplate,
  args: {
    ...defaultArgs,
    variant: 'vertical'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  }
} satisfies Story`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With Variant Horizontal (A1, A2, A7)',
  render: HorizontalTemplate,
  args: {
    ...defaultArgs,
    variant: 'horizontal'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  }
} satisfies Story`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With IsVerticalOnMobile (A8)',
  args: {
    ...defaultArgs,
    variant: 'horizontal',
    isVerticalOnMobile: true
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With isDescriptionVerticalOnMobile (A9)',
  args: {
    ...defaultArgs,
    descriptionDirection: 'horizontal',
    isDescriptionVerticalOnMobile: true
  },
  argTypes: {
    isDescriptionVerticalOnMobile: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...g.parameters?.docs?.source}}};const A=["WithRef","WithAttributes","Defaults","WithSpacing","WithSizeSmallAndBold","WithVariantVertial","WithVariantHorizontal","WithIsVerticalOnMobile","WithHasVerticalDescriptionDirectionOnMobile"],W=Object.freeze(Object.defineProperty({__proto__:null,Defaults:o,WithAttributes:l,WithHasVerticalDescriptionDirectionOnMobile:g,WithIsVerticalOnMobile:p,WithRef:i,WithSizeSmallAndBold:d,WithSpacing:c,WithVariantHorizontal:b,WithVariantVertial:m,__namedExportsOrder:A,default:y},Symbol.toStringTag,{value:"Module"}));export{W as D};
//# sourceMappingURL=DescriptionList.test.stories-gsg3Te7P.js.map
