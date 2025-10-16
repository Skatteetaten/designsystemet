import{C as W}from"./index-CcgjbLA7.js";import{d as B}from"./iframe-DRo7xN6O.js";const{expect:t,within:c}=__STORYBOOK_MODULE_TEST__,m="htmlId",F={component:W.Removable,title:"Tester/Chips/Removable",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},size:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},onClose:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},o={children:"Trondheim"},s={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},n={name:"With Attributes(FA2-5)",args:{...o,id:m,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id",m),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},i={name:"Defaults (A2, A3, B3 delvis)",args:{...o}},r={name:"With Size Small (A1)",args:{size:"small",...o},argTypes:{size:{table:{disable:!1}}}},l={name:"With Close Icon Alternative Text (B3 delvis)",args:{...o},play:async({canvasElement:e})=>{const a=c(e).getByTitle(B.t("ds_collections:chips.RemoveFilter"));await t(a).toBeInTheDocument()}};var b,u,p;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('button');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,g,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    const container = canvas.getByRole('button');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,h,A;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Defaults (A2, A3, B3 delvis)',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...(A=(h=i.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var S,T,w;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(T=r.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var I,R,C;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(R=l.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const _=["WithRef","WithAttributes","Defaults","WithSizeSmall","WithCloseIconAltText"],H=Object.freeze(Object.defineProperty({__proto__:null,Defaults:i,WithAttributes:n,WithCloseIconAltText:l,WithRef:s,WithSizeSmall:r,__namedExportsOrder:_,default:F},Symbol.toStringTag,{value:"Module"}));export{H as C};
//# sourceMappingURL=ChipsRemovable.test.stories-DBmJOfjG.js.map
