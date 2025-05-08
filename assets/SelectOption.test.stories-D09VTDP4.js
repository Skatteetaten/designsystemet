import{j as w}from"./jsx-runtime-BjG_zV1W.js";import{w as r,e as t}from"./index-DIxTUSTt.js";import"./index-DmQJLmMR.js";import{S as A}from"./DatePickerCalendar-uhBuvt5I.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EsEcB_zD.js";import"./Help-DBM5pSGx.js";import"./index-TStLVSlm.js";import"./index-MCo35TjR.js";import"./index-_-BAtSXr.js";import"./LabelWithHelp-Bp_nNVMq.js";import"./index-SYCMKRjb.js";import"./index-Begbw_Sq.js";import"./index-B4uH14t0.js";const P={component:A.Option,title:"Tester/Select/Option",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},value:{table:{disable:!0}}}},l=e=>w.jsx(A.Option,{...e}),o="Option 1",c="option1",d={children:o},n={render:l,name:"With Ref (FA1)",args:{...d,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=r(e).getByText(o);await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},s={render:l,name:"With Attributes (FA2-5)",args:{...d,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=r(e).getByText(o);await t(a).toHaveAttribute("id","htmlid"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","nb")}},i={render:l,name:"With Children And Value",args:{...d,value:c},argTypes:{children:{table:{disable:!1}},value:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=r(e).getByText(o);await t(a).toBeInTheDocument(),await t(a).toHaveValue(c)}};var p,u,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLOptionElement | null): void => {
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
    const option = canvas.getByText(optionText);
    await expect(option).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,v,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
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
    const optionNode = canvas.getByText(optionText);
    await expect(optionNode).toHaveAttribute('id', 'htmlid');
    await expect(optionNode).toHaveAttribute('data-testid', '123ID');
    await expect(optionNode).toHaveClass('dummyClassname');
    await expect(optionNode).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var g,h,T;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  name: 'With Children And Value',
  args: {
    ...defaultArgs,
    value: optionValue
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    value: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const optionNode = canvas.getByText(optionText);
    await expect(optionNode).toBeInTheDocument();
    await expect(optionNode).toHaveValue(optionValue);
  }
} satisfies Story`,...(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const _=["WithRef","WithAttributes","WithChildrenAndValue"];export{s as WithAttributes,i as WithChildrenAndValue,n as WithRef,_ as __namedExportsOrder,P as default};
//# sourceMappingURL=SelectOption.test.stories-D09VTDP4.js.map
