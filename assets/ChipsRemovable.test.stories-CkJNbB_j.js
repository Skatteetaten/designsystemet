import{w as c,e as t}from"./index-DIxTUSTt.js";import{C}from"./index-r2B9v0Ec.js";import{d as F}from"./index-D9wdQ6Rv.js";import"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BomPkCop.js";import"./index-DYo2YWtE.js";import"./index-C176R4Vg.js";import"./index-xt3MBfhK.js";import"./index--gfV2u6P.js";const m="htmlId",M={component:C.Removable,title:"Tester/Chips/Removable",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},size:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},onClose:{table:{disable:!0}}}},s={children:"Trondheim"},n={name:"With Ref (FA1)",args:{...s,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes(FA2-5)",args:{...s,id:m,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id",m),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},r={name:"Defaults (A2, A3, B3 delvis)",args:{...s}},l={name:"With Size Small (A1)",args:{size:"small",...s},argTypes:{size:{table:{disable:!1}}}},o={name:"With Close Icon Alternative Text (B3 delvis)",args:{...s},play:async({canvasElement:e})=>{const a=c(e).getByTitle(F.t("ds_collections:chips.RemoveFilter"));await t(a).toBeInTheDocument()}};var b,u,p;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
} satisfies Story`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,g,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,h,A;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Defaults (A2, A3, B3 delvis)',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...(A=(h=r.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var w,I,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    }
  }
} satisfies Story`,...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var T,R,W;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'With Close Icon Alternative Text (B3 delvis)',
  args: {
    ...defaultArgs
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByTitle(dsI18n.t('ds_collections:chips.RemoveFilter'));
    await expect(icon).toBeInTheDocument();
  }
} satisfies Story`,...(W=(R=o.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const O=["WithRef","WithAttributes","Defaults","WithSizeSmall","WithCloseIconAltText"];export{r as Defaults,i as WithAttributes,o as WithCloseIconAltText,n as WithRef,l as WithSizeSmall,O as __namedExportsOrder,M as default};
//# sourceMappingURL=ChipsRemovable.test.stories-CkJNbB_j.js.map
