import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{D as t}from"./index-Cons3ews.js";import{w as u,e as r}from"./index-B8otpkpo.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BSjcMZTJ.js";import"./index-BFUMlpsH.js";const X={component:t,title:"Tester/DescriptionList/DescriptionList",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},variant:{table:{disable:!0}},isVerticalOnMobile:{table:{disable:!0}},descriptionDirection:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},size:{table:{disable:!0}}},args:{children:[a.jsx(t.Element,{term:"Saksbehandler",children:"Kenneth Performance"},"k1"),a.jsx(t.Element,{term:"Status",children:"Under behandling"},"k2"),a.jsx(t.Element,{term:"Sist endret",children:"30.12.2013"},"k3"),a.jsx(t.Element,{term:"Frist",children:"30.12.2013"},"k4"),a.jsx(t.Element,{term:"Farge",children:"Smaragdgrønn"},"k5"),a.jsx(t.Element,{term:"Først endret",children:"30.12.2010"},"k6")]}},s={},l={name:"With Ref (FA1)",args:{...s,"data-testid":"123ID",ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=u(e).getByTestId("123ID");await r(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes (FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=u(e).getByTestId("123ID");await r(n).toHaveClass("dummyClassname"),await r(n).toHaveAttribute("id","htmlId"),await r(n).toHaveAttribute("lang","nb")}},c={name:"Defaults (B1)",args:{...s},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const i=u(e),n=i.getByText("Kenneth Performance"),C=i.getByText("Saksbehandler");await r(n).toBeInTheDocument(),await r(n.tagName).toBe("DD"),await r(C.tagName).toBe("DT")}},d={name:"With Spacing (A4)",args:{...s,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1},control:{disable:!1}}}},m={name:"With Size And FontWeight (A2)",args:{...s,size:"small",termWeight:"regular",descriptionWeight:"bold"},argTypes:{size:{table:{disable:!1},control:{disable:!0}}}},P=e=>a.jsxs(a.Fragment,{children:[a.jsx(t,{...e,hasSpacing:!0}),a.jsx(t,{...e,descriptionDirection:"vertical"})]}),p={name:"With Variant Vertical (A1, A2)",render:P,args:{...s,variant:"vertical"},argTypes:{variant:{table:{disable:!1},control:{disable:!0}}}},L=e=>a.jsxs(a.Fragment,{children:[a.jsx(t,{...e,hasSpacing:!0}),a.jsx(t,{...e,descriptionDirection:"vertical"})]}),b={name:"With Variant Horizontal (A1, A2, A7)",render:L,args:{...s,variant:"horizontal"},argTypes:{variant:{table:{disable:!1},control:{disable:!0}}}},g={name:"With IsVerticalOnMobile (A8)",args:{...s,variant:"horizontal",isVerticalOnMobile:!0},argTypes:{variant:{table:{disable:!1},control:{disable:!0}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}};var h,f,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,A,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId('123ID');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...(S=(A=o.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var T,W,x;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(W=c.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var D,w,I;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var V,z,F;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(F=(z=m.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var B,N,E;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
} satisfies Story`,...(E=(N=p.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var H,j,k;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(j=b.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var R,M,O;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(O=(M=g.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const Y=["WithRef","WithAttributes","Defaults","WithSpacing","WithSizeSmallAndBold","WithVariantVertial","WithVariantHorizontal","WithIsVerticalOnMobile"];export{c as Defaults,o as WithAttributes,g as WithIsVerticalOnMobile,l as WithRef,m as WithSizeSmallAndBold,d as WithSpacing,b as WithVariantHorizontal,p as WithVariantVertial,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=DescriptionList.test.stories-DykeIEDF.js.map
