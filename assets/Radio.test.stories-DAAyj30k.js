import{h as A,j as y,r as Z}from"./iframe-Cq9sN_Dz.js";import{c as f}from"./index-DRFs0UrV.js";import{l as S,a as T}from"./storybook.testing.utils-BgHZnMzD.js";const{expect:n,fn:w,userEvent:ee,waitFor:x,within:i}=__STORYBOOK_MODULE_TEST__,ae={component:f.Radio,title:"Tester/RadioGroup/Radio",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},description:{table:{disable:!0}},value:{table:{disable:!0}},form:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{...A,table:{disable:!0}},onChange:{...A,table:{disable:!0}},onFocus:{...A,table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r=e=>y.jsx(f,{legend:"radio example",hideLegend:!0,children:y.jsx(f.Radio,{...e,children:e.children})}),X="Enkeltpersonsforetak",o={children:X},d={render:r,name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio");await n(a).toHaveAttribute("name","dummyIdForwardedFromRef")}},c={render:r,name:"With Attributes (FA2-5)",args:{...o,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=i(e),a=t.getAllByRole("generic")[3],s=t.getByRole("radio");await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","nb"),await n(s).toHaveAttribute("id","htmlId"),await n(s).toHaveAttribute("data-testid","123ID"),await n(s).toHaveAttribute("form","formid123")}},p={render:r,name:"Defaults (A1, A3, B1)",args:{...o},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio",{name:X});await n(a).toBeInTheDocument(),await n(a).toHaveAttribute("id")}},m={render:r,name:"With Description (A3, A5)",args:{...o,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const t=i(e),a=t.getByText("En liten beskrivelse tekst");await n(a).toBeInTheDocument();const s=t.getByRole("radio");await n(s).toHaveAttribute("aria-describedby");const l=s.getAttribute("aria-describedby");await n(l).toMatch(/descId-/)}},u={render:r,name:"With Long Text (A2)",args:{children:S,description:S},argTypes:{children:{table:{disable:!1}},description:{table:{disable:!1}}}},b={render:r,name:"With Long Text And Breaking",args:{children:T,description:T},argTypes:{children:{table:{disable:!1}},description:{table:{disable:!1}}}},g={render:r,name:"With Value",args:{...o,value:"person"},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio");await n(a).toHaveAttribute("value","person")}},h={render:r,name:"With AriaDescribedby (B4)",args:{...o,ariaDescribedby:"htmlId"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio");await n(a).toHaveAttribute("aria-describedby","htmlId")}},ne=e=>{const[t,a]=Z.useState("Radio");return y.jsx(f,{legend:"radio example",hideLegend:!0,children:y.jsx(f.Radio,{...e,onBlur:s=>{a("Radio har mistet fokus"),e.onBlur&&e.onBlur(s)},onChange:s=>{a("Radio har blitt klikket på"),e.onChange&&e.onChange(s)},onFocus:s=>{a("Radio har fått fokus"),e.onFocus&&e.onFocus(s)},children:`${e.children} ${t}`})})},v={render:ne,name:"With EventHandlers",args:{...o,onBlur:w(),onChange:w(),onFocus:w()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:t,step:a})=>{const l=i(t).getByRole("radio");await a("Klikker på radio og sjekker om onChange er kjørt og fokus er satt",async()=>{await ee.click(l),await x(()=>n(e.onChange).toHaveBeenCalled()),await n(l).toHaveFocus()}),await a("Fjerner fokus fra radio og sjekker om radio har mistet fokus",async()=>{l.blur(),await x(()=>n(e.onChange).toHaveBeenCalled()),await n(l).not.toHaveFocus()})}};var k,B,R;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var W,H,E;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
} satisfies Story`,...(E=(H=c.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var D,I,F;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
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
} satisfies Story`,...(F=(I=p.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var C,j,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const labelWithDescription = canvas.getByText('En liten beskrivelse tekst');
    await expect(labelWithDescription).toBeInTheDocument();
    const radio = canvas.getByRole('radio');
    await expect(radio).toHaveAttribute('aria-describedby');
    const describedbyValue = radio.getAttribute('aria-describedby');
    await expect(describedbyValue).toMatch(/descId-/);
  }
} satisfies Story`,...(L=(j=m.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var _,N,P;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(P=(N=u.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var O,V,M;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(V=b.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var K,G,$;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
} satisfies Story`,...($=(G=g.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var z,U,Y;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var q,J,Q;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const te=["WithRef","WithAttributes","Defaults","WithDescription","WithLongText","WithLongTextAndBreaking","WithValue","WithAriaDescribedby","WithEventHandlers"],oe=Object.freeze(Object.defineProperty({__proto__:null,Defaults:p,WithAriaDescribedby:h,WithAttributes:c,WithDescription:m,WithEventHandlers:v,WithLongText:u,WithLongTextAndBreaking:b,WithRef:d,WithValue:g,__namedExportsOrder:te,default:ae},Symbol.toStringTag,{value:"Module"}));export{oe as R};
//# sourceMappingURL=Radio.test.stories-DAAyj30k.js.map
