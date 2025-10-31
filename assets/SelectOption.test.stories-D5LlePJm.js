import{j as x}from"./iframe-C2uFIQ6s.js";import"./index-k3V7IYJD.js";import{S as A}from"./DatePickerCalendar-8_aO5TLp.js";const{expect:t,within:r}=__STORYBOOK_MODULE_TEST__,w={component:A.Option,title:"Tester/Select/Option",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},value:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},l=e=>x.jsx(A.Option,{...e}),o="Option 1",m="option1",d={children:o},n={render:l,name:"With Ref (FA1)",args:{...d,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=r(e).getByText(o);await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},s={render:l,name:"With Attributes (FA2-5)",args:{...d,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=r(e).getByText(o);await t(a).toHaveAttribute("id","htmlid"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","nb")}},i={render:l,name:"With Children And Value",args:{...d,value:m},argTypes:{children:{table:{disable:!1}},value:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=r(e).getByText(o);await t(a).toBeInTheDocument(),await t(a).toHaveValue(m)}};var p,b,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const option = canvas.getByText(optionText);
    await expect(option).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var f,v,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
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
} satisfies Story`,...(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const S=["WithRef","WithAttributes","WithChildrenAndValue"],F=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:s,WithChildrenAndValue:i,WithRef:n,__namedExportsOrder:S,default:w},Symbol.toStringTag,{value:"Module"}));export{F as S};
//# sourceMappingURL=SelectOption.test.stories-D5LlePJm.js.map
