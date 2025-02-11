import{w as s,e as t}from"./index-XVqkR3zt.js";import{C as E}from"./index-CkLwz20F.js";import"./jsx-runtime-CfatFE5O.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-qxaMszO_.js";import"./index-BYj_oXFq.js";import"./index-CT5qi75N.js";import"./index-DVxy_Kbo.js";import"./index-B1fqGhxG.js";import"./index-DdP4wgFW.js";const b="htmlId",j={component:E.Toggle,title:"Tester/Chips/Toggle",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},size:{table:{disable:!0}},isSelected:{table:{disable:!0}},showCheckmark:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},onClick:{table:{disable:!0}}}},n={children:"Trondheim"},i={name:"With Ref (FA1)",args:{...n,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=s(e).getByRole("button");await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={name:"With Attributes(FA2-5)",args:{...n,id:b,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=s(e).getByRole("button");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id",b),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},o={name:"Defaults (A2, A4,A5 delvis, A7, B1, B4)",args:{...n},play:async({canvasElement:e})=>{const a=s(e).getByRole("button");await t(a).toHaveAttribute("aria-pressed","false")}},c={name:"Without Checkmark (A4)",args:{showCheckmark:!1,...n},argTypes:{showCheckmark:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=s(e).queryByRole("img");await t(a).not.toBeInTheDocument()}},d={name:"With Selected (A6, B4)",args:{isSelected:!0,...n},argTypes:{showCheckmark:{table:{disable:!1}},isSelected:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=s(e).getByRole("button");await t(a).toHaveAttribute("aria-pressed","true")}},m={name:"With Size Small (A1)",args:{size:"small",...n},argTypes:{size:{table:{disable:!1}},showCheckmark:{table:{disable:!1}},isSelected:{table:{disable:!1}}}};var u,p,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLButtonElement | null): void => {
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
    const container = canvas.getByRole('button');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,h,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('button');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,A,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Defaults (A2, A4,A5 delvis, A7, B1, B4)',
  args: {
    ...defaultArgs
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('button');
    await expect(container).toHaveAttribute('aria-pressed', 'false');
  }
} satisfies Story`,...(w=(A=o.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var S,k,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Without Checkmark (A4)',
  args: {
    showCheckmark: false,
    ...defaultArgs
  },
  argTypes: {
    showCheckmark: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.queryByRole('img');
    await expect(icon).not.toBeInTheDocument();
  }
} satisfies Story`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var W,B,R;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'With Selected (A6, B4)',
  args: {
    isSelected: true,
    ...defaultArgs
  },
  argTypes: {
    showCheckmark: {
      table: {
        disable: false
      }
    },
    isSelected: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('button');
    await expect(container).toHaveAttribute('aria-pressed', 'true');
  }
} satisfies Story`,...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var T,H,I;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'With Size Small (A1)',
  args: {
    size: 'small',
    ...defaultArgs
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    },
    showCheckmark: {
      table: {
        disable: false
      }
    },
    isSelected: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(I=(H=m.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const G=["WithRef","WithAttributes","Defaults","WithoutCheckmark","WithSelected","WithSizeSmall"];export{o as Defaults,l as WithAttributes,i as WithRef,d as WithSelected,m as WithSizeSmall,c as WithoutCheckmark,G as __namedExportsOrder,j as default};
//# sourceMappingURL=ChipsToggle.test.stories-CJ_uoNBw.js.map
