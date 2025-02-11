import{w as g,e as n}from"./index-XVqkR3zt.js";import"./index-qxaMszO_.js";import{W as j}from"./index-BYj_oXFq.js";import{T as q}from"./index-DDpvzByM.js";import{S as b}from"./icon.systems-C3YHcMhe.js";import{a as f}from"./base-props.types-sXyoNogd.js";import"./jsx-runtime-CfatFE5O.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CT5qi75N.js";import"./index-DVxy_Kbo.js";import"./icon.utils-BQ79h5X2.js";const ra={component:q,title:"Tester/Tag",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!1}},children:{table:{disable:!1},control:"text"},svgPath:{table:{disable:!0},options:Object.keys(b),mapping:b},color:{table:{disable:!0}},size:{options:[f[1],f[2]],control:"radio",table:{disable:!0}}}},L="Særavgift",e={children:L},s={name:"With Ref (FA1)",args:{...e,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const a=g(t).getAllByRole("generic")[1];await n(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{...e,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=g(t).getAllByRole("generic")[1];await n(a).toHaveAttribute("id","htmlId"),await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","en"),await n(a).toHaveAttribute("data-testid","123ID")}},o={name:"Default Variant (ochre) (A3)",args:{...e},argTypes:{color:{table:{disable:!0}}}},l={name:"Variant (forest) (A3)",args:{...e,color:"forest"},argTypes:{color:{table:{disable:!0}}}},i={name:"Variant (burgundy) (A3)",args:{...e,color:"burgundy"},argTypes:{color:{table:{disable:!0}}}},c={name:"Variant (graphite) (A3)",args:{...e,color:"graphite"},argTypes:{color:{table:{disable:!0}}}},d={name:"Small (A1)",args:{...e,size:"small"},argTypes:{size:{table:{disable:!0}}}},m={name:"With Custom Icon (A5)",args:{...e,svgPath:j,color:"burgundy"},argTypes:{svgPath:{table:{disable:!1}}}},u={args:{...e,svgPath:j,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=g(t).getByText(L);a.focus(),await n(a).toBeInTheDocument(),await n(a).toHaveAttribute("tabIndex","-1")}};var y,h,A;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(A=(h=s.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var v,S,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} satisfies Story`,...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var w,I,F;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Default Variant (ochre) (A3)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story`,...(F=(I=o.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var W,x,D;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Variant (forest) (A3)',
  args: {
    ...defaultArgs,
    color: 'forest'
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story`,...(D=(x=l.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var B,R,H;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Variant (burgundy) (A3)',
  args: {
    ...defaultArgs,
    color: 'burgundy'
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story`,...(H=(R=i.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var C,V,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Variant (graphite) (A3)',
  args: {
    ...defaultArgs,
    color: 'graphite'
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story`,...(P=(V=c.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var E,G,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Small (A1)',
  args: {
    ...defaultArgs,
    size: 'small'
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story`,...(M=(G=d.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var z,N,k;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(N=m.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var O,Y,_;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};const oa=["WithRef","WithAttributes","DefaultYellow","DefaultGreen","DefaultRed","DefaultGrey","Small","WithCustomIcon","WithCanBeManuallyFocused"];export{l as DefaultGreen,c as DefaultGrey,i as DefaultRed,o as DefaultYellow,d as Small,r as WithAttributes,u as WithCanBeManuallyFocused,m as WithCustomIcon,s as WithRef,oa as __namedExportsOrder,ra as default};
//# sourceMappingURL=Tag.test.stories-D5HbQ1oi.js.map
