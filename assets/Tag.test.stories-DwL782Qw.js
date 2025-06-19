import{w as g,e as n}from"./index-DIxTUSTt.js";import{W as j}from"./index-BQO_0U1F.js";import{T as L}from"./index-DisSb1NM.js";import{S as b}from"./icon.systems-NRpsphgm.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CwaotbcG.js";import"./index-Dvbywa6-.js";import"./index-BQtvKDNR.js";import"./icon.utils-D_vdkWhZ.js";const na={component:L,title:"Tester/Tag",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},svgPath:{table:{disable:!0},options:Object.keys(b),mapping:b},color:{table:{disable:!0}},size:{table:{disable:!0}}}},k="Særavgift",e={children:k},s={name:"With Ref (FA1)",args:{...e,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const a=g(t).getAllByRole("generic")[1];await n(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{...e,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=g(t).getAllByRole("generic")[1];await n(a).toHaveAttribute("id","htmlId"),await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","en"),await n(a).toHaveAttribute("data-testid","123ID")}},l={name:"Default Variant (ochre) (A3)",args:{...e},argTypes:{color:{table:{disable:!1}}}},o={name:"Variant (forest) (A3)",args:{...e,color:"forest"},argTypes:{color:{table:{disable:!1}}}},i={name:"Variant (burgundy) (A3)",args:{...e,color:"burgundy"},argTypes:{color:{table:{disable:!1}}}},c={name:"Variant (graphite) (A3)",args:{...e,color:"graphite"},argTypes:{color:{table:{disable:!1}}}},d={name:"Small (A1)",args:{...e,size:"small"},argTypes:{size:{table:{disable:!1}}}},m={name:"With Custom Icon (A5)",args:{...e,svgPath:j,color:"burgundy"},argTypes:{svgPath:{table:{disable:!1}}}},u={args:{...e,svgPath:j,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=g(t).getByText(k);a.focus(),await n(a).toBeInTheDocument(),await n(a).toHaveAttribute("tabIndex","-1")}};var f,y,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
} satisfies Story`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var A,v,S;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
} satisfies Story`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var T,w,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(w=l.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var F,W,x;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Variant (forest) (A3)',
  args: {
    ...defaultArgs,
    color: 'forest'
  },
  argTypes: {
    color: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(x=(W=o.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var D,B,R;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Variant (burgundy) (A3)',
  args: {
    ...defaultArgs,
    color: 'burgundy'
  },
  argTypes: {
    color: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(R=(B=i.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var H,C,V;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Variant (graphite) (A3)',
  args: {
    ...defaultArgs,
    color: 'graphite'
  },
  argTypes: {
    color: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(V=(C=c.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var P,E,G;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(E=d.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var M,z,N;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(z=m.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var O,Y,_;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};const sa=["WithRef","WithAttributes","DefaultYellow","DefaultGreen","DefaultRed","DefaultGrey","Small","WithCustomIcon","WithCanBeManuallyFocused"];export{o as DefaultGreen,c as DefaultGrey,i as DefaultRed,l as DefaultYellow,d as Small,r as WithAttributes,u as WithCanBeManuallyFocused,m as WithCustomIcon,s as WithRef,sa as __namedExportsOrder,na as default};
//# sourceMappingURL=Tag.test.stories-DwL782Qw.js.map
