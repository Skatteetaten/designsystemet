import{h as S,j as y,r as Z}from"./iframe-C2uFIQ6s.js";import{c as f}from"./index-k3V7IYJD.js";import{l as T,a as w}from"./storybook.testing.utils-CMs160i9.js";const{expect:n,fn:A,userEvent:ee,waitFor:k,within:i}=__STORYBOOK_MODULE_TEST__,ae={component:f.Radio,title:"Tester/RadioGroup/Radio",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},description:{table:{disable:!0}},value:{table:{disable:!0}},form:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{...S,table:{disable:!0}},onChange:{...S,table:{disable:!0}},onFocus:{...S,table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r=e=>y.jsx(f,{legend:"radio example",hideLegend:!0,children:y.jsx(f.Radio,{...e,children:e.children})}),X="Enkeltpersonsforetak",o={children:X},l={render:r,name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio");await n(a).toHaveAttribute("name","dummyIdForwardedFromRef")}},c={render:r,name:"With Attributes (FA2-5)",args:{...o,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=i(e),a=t.getAllByRole("generic")[3],s=t.getByRole("radio");await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","nb"),await n(s).toHaveAttribute("id","htmlId"),await n(s).toHaveAttribute("data-testid","123ID"),await n(s).toHaveAttribute("form","formid123")}},d={render:r,name:"Defaults (A1, A3, B1)",args:{...o},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio",{name:X});await n(a).toBeInTheDocument(),await n(a).toHaveAttribute("id")}},p={render:r,name:"With Description (A3, A5)",args:{...o,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=i(e).getByText("En liten beskrivelse tekst");await n(a).toBeInTheDocument()}},m={render:r,name:"With Long Text (A2)",args:{children:T,description:T},argTypes:{children:{table:{disable:!1}},description:{table:{disable:!1}}}},u={render:r,name:"With Long Text And Breaking",args:{children:w,description:w},argTypes:{children:{table:{disable:!1}},description:{table:{disable:!1}}}},b={render:r,name:"With Value",args:{...o,value:"person"},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio");await n(a).toHaveAttribute("value","person")}},h={render:r,name:"With AriaDescribedby (B4)",args:{...o,ariaDescribedby:"htmlId"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio");await n(a).toHaveAttribute("aria-describedby","htmlId")}},ne=e=>{const[t,a]=Z.useState("Radio");return y.jsx(f,{legend:"radio example",hideLegend:!0,children:y.jsx(f.Radio,{...e,onBlur:s=>{a("Radio har mistet fokus"),e.onBlur&&e.onBlur(s)},onChange:s=>{a("Radio har blitt klikket på"),e.onChange&&e.onChange(s)},onFocus:s=>{a("Radio har fått fokus"),e.onFocus&&e.onFocus(s)},children:`${e.children} ${t}`})})},g={render:ne,name:"With EventHandlers",args:{...o,onBlur:A(),onChange:A(),onFocus:A()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:t,step:a})=>{const v=i(t).getByRole("radio");await a("Klikker på radio og sjekker om onChange er kjørt og fokus er satt",async()=>{await ee.click(v),await k(()=>n(e.onChange).toHaveBeenCalled()),await n(v).toHaveFocus()}),await a("Fjerner fokus fra radio og sjekker om radio har mistet fokus",async()=>{v.blur(),await k(()=>n(e.onChange).toHaveBeenCalled()),await n(v).not.toHaveFocus()})}};var x,B,W;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLInputElement | null): void => {
      if (instance) {
        instance.name = 'dummyIdForwardedFromRef';
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
    const container = canvas.getByRole('radio');
    await expect(container).toHaveAttribute('name', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(W=(B=l.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var R,E,H;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: Template,
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    form: 'formid123'
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
    },
    form: {
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
    const container = canvas.getAllByRole('generic')[3];
    const input = canvas.getByRole('radio');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(input).toHaveAttribute('id', 'htmlId');
    await expect(input).toHaveAttribute('data-testid', '123ID');
    await expect(input).toHaveAttribute('form', 'formid123');
  }
} satisfies Story`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var D,F,I;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  name: 'Defaults (A1, A3, B1)',
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
      pseudoStates: ['hover', 'focus', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('radio', {
      name: defaultLabelText
    });
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAttribute('id');
  }
} satisfies Story`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var C,j,L;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  name: 'With Description (A3, A5)',
  args: {
    ...defaultArgs,
    description: 'En liten beskrivelse tekst'
  },
  argTypes: {
    description: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const labelWithDescription = canvas.getByText('En liten beskrivelse tekst');
    await expect(labelWithDescription).toBeInTheDocument();
  }
} satisfies Story`,...(L=(j=p.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var _,N,P;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  name: 'With Long Text (A2)',
  args: {
    children: loremIpsum,
    description: loremIpsum
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    description: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(P=(N=m.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var O,V,K;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Template,
  name: 'With Long Text And Breaking',
  args: {
    children: loremIpsumWithoutSpaces,
    description: loremIpsumWithoutSpaces
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    description: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(K=(V=u.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var M,G,$;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: Template,
  name: 'With Value',
  args: {
    ...defaultArgs,
    value: 'person'
  },
  argTypes: {
    value: {
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
    const input = canvas.getByRole('radio');
    await expect(input).toHaveAttribute('value', 'person');
  }
} satisfies Story`,...($=(G=b.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var z,U,Y;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  name: 'With AriaDescribedby (B4)',
  args: {
    ...defaultArgs,
    ariaDescribedby: 'htmlId'
  },
  argTypes: {
    ariaDescribedby: {
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
    const input = canvas.getByRole('radio');
    await expect(input).toHaveAttribute('aria-describedby', 'htmlId');
  }
} satisfies Story`,...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var q,J,Q;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers',
  args: {
    ...defaultArgs,
    onBlur: fn(),
    onChange: fn(),
    onFocus: fn()
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    args,
    canvasElement,
    step
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('radio');
    await step('Klikker på radio og sjekker om onChange er kjørt og fokus er satt', async () => {
      await userEvent.click(inputNode);
      await waitFor(() => expect(args.onChange).toHaveBeenCalled());
      await expect(inputNode).toHaveFocus();
    });
    await step('Fjerner fokus fra radio og sjekker om radio har mistet fokus', async () => {
      inputNode.blur();
      await waitFor(() => expect(args.onChange).toHaveBeenCalled());
      await expect(inputNode).not.toHaveFocus();
    });
  }
} satisfies Story`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const te=["WithRef","WithAttributes","Defaults","WithDescription","WithLongText","WithLongTextAndBreaking","WithValue","WithAriaDescribedby","WithEventHandlers"],oe=Object.freeze(Object.defineProperty({__proto__:null,Defaults:d,WithAriaDescribedby:h,WithAttributes:c,WithDescription:p,WithEventHandlers:g,WithLongText:m,WithLongTextAndBreaking:u,WithRef:l,WithValue:b,__namedExportsOrder:te,default:ae},Symbol.toStringTag,{value:"Module"}));export{oe as R};
//# sourceMappingURL=Radio.test.stories--Yczdn8D.js.map
