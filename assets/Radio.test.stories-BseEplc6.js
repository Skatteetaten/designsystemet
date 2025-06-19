import{j as w}from"./jsx-runtime-BjG_zV1W.js";import{r as ee}from"./index-D_ouKaeX.js";import{f as A,w as i,e as n,u as ae,b as k}from"./index-DIxTUSTt.js";import{R as d}from"./index-BP9ucNdn.js";import{w as l,l as x,a as B}from"./storybook.testing.utils-CMs160i9.js";import{h as T}from"./helpers-DjiZIot2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CwaotbcG.js";import"./DatePickerCalendar-CmyXWAFv.js";import"./index-Dvbywa6-.js";import"./index-BQO_0U1F.js";import"./index-BQtvKDNR.js";import"./LabelWithHelp-DECIiZLx.js";import"./Help-DnfPEwtQ.js";import"./index-Dc9vnWYl.js";import"./index-DisSb1NM.js";import"./index-CJxYRboy.js";const we={component:d.Radio,title:"Tester/RadioGroup/Radio",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},description:{table:{disable:!0}},value:{table:{disable:!0}},form:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{...T,table:{disable:!0}},onChange:{...T,table:{disable:!0}},onFocus:{...T,table:{disable:!0}}}},r=e=>w.jsx(d,{legend:"radio example",hideLegend:!0,children:w.jsx(d.Radio,{...e,children:e.children})}),Z="Enkeltpersonsforetak",o={children:Z},p={render:r,name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio");await n(a).toHaveAttribute("name","dummyIdForwardedFromRef")}},m={render:r,name:"With Attributes (FA2-5)",args:{...o,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e),a=t.getAllByRole("generic")[3],s=t.getByRole("radio");await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","nb"),await n(s).toHaveAttribute("id","htmlId"),await n(s).toHaveAttribute("data-testid","123ID"),await n(s).toHaveAttribute("form","formid123")}},u={render:r,name:"Defaults (A1, A3, B1)",args:{...o},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${l} input[type='radio']`,focus:`${l} input[type='radio']`,click:`${l} input[type='radio']`}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio",{name:Z});await n(a).toBeInTheDocument(),await n(a).toHaveAttribute("id")}},b={render:r,name:"With Description (A3, A5)",args:{...o,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${l} input[type='radio']`,focus:`${l} input[type='radio']`,click:`${l} input[type='radio']`}},play:async({canvasElement:e})=>{const a=i(e).getByText("En liten beskrivelse tekst");await n(a).toBeInTheDocument()}},g={render:r,name:"With Long Text (A2)",args:{children:x,description:x},argTypes:{children:{table:{disable:!1}},description:{table:{disable:!1}}}},h={render:r,name:"With Long Text And Breaking",args:{children:B,description:B},argTypes:{children:{table:{disable:!1}},description:{table:{disable:!1}}}},f={render:r,name:"With Value",args:{...o,value:"person"},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio");await n(a).toHaveAttribute("value","person")}},y={render:r,name:"With AriaDescribedby (B4)",args:{...o,ariaDescribedby:"htmlId"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio");await n(a).toHaveAttribute("aria-describedby","htmlId")}},ne=e=>{const[t,a]=ee.useState("Radio");return w.jsx(d,{legend:"radio example",hideLegend:!0,children:w.jsx(d.Radio,{...e,onBlur:s=>{a("Radio har mistet fokus"),e.onBlur&&e.onBlur(s)},onChange:s=>{a("Radio har blitt klikket på"),e.onChange&&e.onChange(s)},onFocus:s=>{a("Radio har fått fokus"),e.onFocus&&e.onFocus(s)},children:`${e.children} ${t}`})})},v={render:ne,name:"With EventHandlers",args:{...o,onBlur:A(),onChange:A(),onFocus:A()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:t,step:a})=>{const c=i(t).getByRole("radio");await a("Klikker på radio og sjekker om onChange er kjørt og fokus er satt",async()=>{await ae.click(c),await k(()=>n(e.onChange).toHaveBeenCalled()),await n(c).toHaveFocus()}),await a("Fjerner fokus fra radio og sjekker om radio har mistet fokus",async()=>{c.blur(),await k(()=>n(e.onChange).toHaveBeenCalled()),await n(c).not.toHaveFocus()})}};var W,R,S;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('radio');
    await expect(container).toHaveAttribute('name', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(S=(R=p.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var H,E,D;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(E=m.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var F,I,C;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      hover: \`\${wrapper} input[type='radio']\`,
      focus: \`\${wrapper} input[type='radio']\`,
      click: \`\${wrapper} input[type='radio']\`
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
} satisfies Story`,...(C=(I=u.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var j,L,$;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
      hover: \`\${wrapper} input[type='radio']\`,
      focus: \`\${wrapper} input[type='radio']\`,
      click: \`\${wrapper} input[type='radio']\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const labelWithDescription = canvas.getByText('En liten beskrivelse tekst');
    await expect(labelWithDescription).toBeInTheDocument();
  }
} satisfies Story`,...($=(L=b.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var N,P,V;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(P=g.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var G,K,_;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(K=h.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var M,O,q;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('radio');
    await expect(input).toHaveAttribute('value', 'person');
  }
} satisfies Story`,...(q=(O=f.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var z,J,Q;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('radio');
    await expect(input).toHaveAttribute('aria-describedby', 'htmlId');
  }
} satisfies Story`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ae=["WithRef","WithAttributes","Defaults","WithDescription","WithLongText","WithLongTextAndBreaking","WithValue","WithAriaDescribedby","WithEventHandlers"];export{u as Defaults,y as WithAriaDescribedby,m as WithAttributes,b as WithDescription,v as WithEventHandlers,g as WithLongText,h as WithLongTextAndBreaking,p as WithRef,f as WithValue,Ae as __namedExportsOrder,we as default};
//# sourceMappingURL=Radio.test.stories-BseEplc6.js.map
