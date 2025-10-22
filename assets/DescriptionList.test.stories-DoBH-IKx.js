import{j as a}from"./iframe-BoxHncFg.js";import{D as t}from"./index-CxRKwedM.js";const{expect:r,within:h}=__STORYBOOK_MODULE_TEST__,U={component:t,title:"Tester/DescriptionList/DescriptionList",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},variant:{table:{disable:!0}},isVerticalOnMobile:{table:{disable:!0}},descriptionDirection:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},size:{table:{disable:!0}},descriptionWeight:{table:{disable:!0}},isDescriptionVerticalOnMobile:{table:{disable:!0}},termWeight:{table:{disable:!0}}},args:{children:[a.jsx(t.Element,{term:"Saksbehandler",children:"Kenneth Performance"},"k1"),a.jsx(t.Element,{term:"Status",children:"Under behandling"},"k2"),a.jsx(t.Element,{term:"Sist endret",children:"30.12.2013"},"k3"),a.jsx(t.Element,{term:"Frist",children:"30.12.2013"},"k4"),a.jsx(t.Element,{term:"Farge",children:"Smaragdgrønn"},"k5"),a.jsx(t.Element,{term:"Først endret",children:"30.12.2010"},"k6")]},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},n={},i={name:"With Ref (FA1)",args:{...n,"data-testid":"123ID",ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const s=h(e).getByTestId("123ID");await r(s).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={name:"With Attributes (FA2-5)",args:{...n,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const s=h(e).getByTestId("123ID");await r(s).toHaveClass("dummyClassname"),await r(s).toHaveAttribute("id","htmlId"),await r(s).toHaveAttribute("lang","nb")}},o={name:"Defaults (B1)",args:{...n},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const u=h(e),s=u.getByText("Kenneth Performance"),K=u.getByText("Saksbehandler");await r(s).toBeInTheDocument(),await r(s.tagName).toBe("DD"),await r(K.tagName).toBe("DT")}},c={name:"With Spacing (A4)",args:{...n,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1},control:{disable:!1}}}},d={name:"With Size And FontWeight (A2)",args:{...n,size:"small",termWeight:"regular",descriptionWeight:"bold"},argTypes:{size:{table:{disable:!1},control:{disable:!0}}}},Y=e=>a.jsxs(a.Fragment,{children:[a.jsx(t,{...e,hasSpacing:!0}),a.jsx(t,{...e,descriptionDirection:"vertical"})]}),m={name:"With Variant Vertical (A1, A2)",render:Y,args:{...n,variant:"vertical"},argTypes:{variant:{table:{disable:!1},control:{disable:!0}}}},q=e=>a.jsxs(a.Fragment,{children:[a.jsx(t,{...e,hasSpacing:!0}),a.jsx(t,{...e,descriptionDirection:"vertical"})]}),b={name:"With Variant Horizontal (A1, A2, A7)",render:q,args:{...n,variant:"horizontal"},argTypes:{variant:{table:{disable:!1},control:{disable:!0}}}},p={name:"With IsVerticalOnMobile (A8)",args:{...n,variant:"horizontal",isVerticalOnMobile:!0},argTypes:{variant:{table:{disable:!1},control:{disable:!0}}},globals:{viewport:{value:"--breakpoint-xs"}}},g={name:"With isDescriptionVerticalOnMobile (A9)",args:{...n,descriptionDirection:"horizontal",isDescriptionVerticalOnMobile:!0},argTypes:{isDescriptionVerticalOnMobile:{table:{disable:!1},control:{disable:!0}}},globals:{viewport:{value:"--breakpoint-xs"}}};var f,y,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,A,D;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var T,W,x;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(W=o.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var V,w,I;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var O,z,B;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
} satisfies Story`,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var F,M,E;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(E=(M=m.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var H,j,N;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(j=b.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var k,_,R;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(R=(_=p.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var L,P,C;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(P=g.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const G=["WithRef","WithAttributes","Defaults","WithSpacing","WithSizeSmallAndBold","WithVariantVertial","WithVariantHorizontal","WithIsVerticalOnMobile","WithHasVerticalDescriptionDirectionOnMobile"],X=Object.freeze(Object.defineProperty({__proto__:null,Defaults:o,WithAttributes:l,WithHasVerticalDescriptionDirectionOnMobile:g,WithIsVerticalOnMobile:p,WithRef:i,WithSizeSmallAndBold:d,WithSpacing:c,WithVariantHorizontal:b,WithVariantVertial:m,__namedExportsOrder:G,default:U},Symbol.toStringTag,{value:"Module"}));export{X as D};
//# sourceMappingURL=DescriptionList.test.stories-DoBH-IKx.js.map
