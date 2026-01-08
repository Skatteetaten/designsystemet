import{h as A,j as y,r as B}from"./iframe-Br1Xu9zr.js";import{c as f}from"./index-B55DkYFu.js";import{l as S,a as T}from"./storybook.testing.utils-BgHZnMzD.js";const{expect:n,fn:w,userEvent:R,waitFor:x,within:i}=__STORYBOOK_MODULE_TEST__,W={component:f.Radio,title:"Tester/RadioGroup/Radio",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},description:{table:{disable:!0}},value:{table:{disable:!0}},form:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{...A,table:{disable:!0}},onChange:{...A,table:{disable:!0}},onFocus:{...A,table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r=e=>y.jsx(f,{legend:"radio example",hideLegend:!0,children:y.jsx(f.Radio,{...e,children:e.children})}),k="Enkeltpersonsforetak",o={children:k},d={render:r,name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio");await n(a).toHaveAttribute("name","dummyIdForwardedFromRef")}},c={render:r,name:"With Attributes (FA2-5)",args:{...o,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=i(e),a=t.getAllByRole("generic")[3],s=t.getByRole("radio");await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","nb"),await n(s).toHaveAttribute("id","htmlId"),await n(s).toHaveAttribute("data-testid","123ID"),await n(s).toHaveAttribute("form","formid123")}},p={render:r,name:"Defaults (A1, A3, B1)",args:{...o},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio",{name:k});await n(a).toBeInTheDocument(),await n(a).toHaveAttribute("id")}},m={render:r,name:"With Description (A3, A5)",args:{...o,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const t=i(e),a=t.getByText("En liten beskrivelse tekst");await n(a).toBeInTheDocument();const s=t.getByRole("radio");await n(s).toHaveAttribute("aria-describedby");const l=s.getAttribute("aria-describedby");await n(l).toMatch(/descId-/)}},u={render:r,name:"With Long Text (A2)",args:{children:S,description:S},argTypes:{children:{table:{disable:!1}},description:{table:{disable:!1}}}},b={render:r,name:"With Long Text And Breaking",args:{children:T,description:T},argTypes:{children:{table:{disable:!1}},description:{table:{disable:!1}}}},g={render:r,name:"With Value",args:{...o,value:"person"},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio");await n(a).toHaveAttribute("value","person")}},h={render:r,name:"With AriaDescribedby (B4)",args:{...o,ariaDescribedby:"htmlId"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio");await n(a).toHaveAttribute("aria-describedby","htmlId")}},H=e=>{const[t,a]=B.useState("Radio");return y.jsx(f,{legend:"radio example",hideLegend:!0,children:y.jsx(f.Radio,{...e,onBlur:s=>{a("Radio har mistet fokus"),e.onBlur&&e.onBlur(s)},onChange:s=>{a("Radio har blitt klikket på"),e.onChange&&e.onChange(s)},onFocus:s=>{a("Radio har fått fokus"),e.onFocus&&e.onFocus(s)},children:`${e.children} ${t}`})})},v={render:H,name:"With EventHandlers",args:{...o,onBlur:w(),onChange:w(),onFocus:w()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:t,step:a})=>{const l=i(t).getByRole("radio");await a("Klikker på radio og sjekker om onChange er kjørt og fokus er satt",async()=>{await R.click(l),await x(()=>n(e.onChange).toHaveBeenCalled()),await n(l).toHaveFocus()}),await a("Fjerner fokus fra radio og sjekker om radio har mistet fokus",async()=>{l.blur(),await x(()=>n(e.onChange).toHaveBeenCalled()),await n(l).not.toHaveFocus()})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};const E=["WithRef","WithAttributes","Defaults","WithDescription","WithLongText","WithLongTextAndBreaking","WithValue","WithAriaDescribedby","WithEventHandlers"],C=Object.freeze(Object.defineProperty({__proto__:null,Defaults:p,WithAriaDescribedby:h,WithAttributes:c,WithDescription:m,WithEventHandlers:v,WithLongText:u,WithLongTextAndBreaking:b,WithRef:d,WithValue:g,__namedExportsOrder:E,default:W},Symbol.toStringTag,{value:"Module"}));export{C as R};
//# sourceMappingURL=Radio.test.stories-CDqiBCRV.js.map
