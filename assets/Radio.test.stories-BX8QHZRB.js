import{j as h}from"./jsx-runtime-Nms4Y4qS.js";import{R as f}from"./index-iIx-nC6Z.js";import{w as i,e as n}from"./index-hUG6DWTw.js";import{w as r,l as v,a as A}from"./storybook.testing.utils-CMs160i9.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CI44Z2h3.js";import"./DatePickerCalendar-DqZObTTf.js";import"./index-yuNN44a_.js";import"./index-DcL_RvKM.js";import"./index-Cq8GVsVj.js";import"./LabelWithHelp-ExQ5PDhB.js";import"./Help-BRrFw0Oq.js";import"./index-Cj6RUT7V.js";import"./index-Bl8CsqCQ.js";const oe={component:f.Radio,title:"Tester/RadioGroup/Radio",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},description:{table:{disable:!0}},value:{table:{disable:!0}},form:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}}}},t=e=>h.jsx(f,{legend:"radio example",hideLegend:!0,children:h.jsx(f.Radio,{...e,children:e.children})}),q="Enkeltpersonsforetak",o={children:q},l={render:t,name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio");await n(a).toHaveAttribute("name","dummyIdForwardedFromRef")}},d={render:t,name:"With Attributes (FA2-5)",args:{...o,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=i(e),a=s.getAllByRole("generic")[3],g=s.getByRole("radio");await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","nb"),await n(g).toHaveAttribute("id","htmlId"),await n(g).toHaveAttribute("data-testid","123ID"),await n(g).toHaveAttribute("form","formid123")}},c={render:t,name:"Defaults (A1, A3, B1)",args:{...o},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${r} input[type='radio']`,focus:`${r} input[type='radio']`,click:`${r} input[type='radio']`}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio",{name:q});await n(a).toBeInTheDocument(),await n(a).toHaveAttribute("id")}},p={render:t,name:"With Description (A3, A5)",args:{...o,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${r} input[type='radio']`,focus:`${r} input[type='radio']`,click:`${r} input[type='radio']`}},play:async({canvasElement:e})=>{const a=i(e).getByText("En liten beskrivelse tekst");await n(a).toBeInTheDocument()}},m={render:t,name:"With Long Text (A2)",args:{children:v,description:v},argTypes:{children:{table:{disable:!1}},description:{table:{disable:!1}}}},u={render:t,name:"With Long Text And Breaking",args:{children:A,description:A},argTypes:{children:{table:{disable:!1}},description:{table:{disable:!1}}}},b={render:t,name:"With Value",args:{...o,value:"person"},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio");await n(a).toHaveAttribute("value","person")}},y={render:t,name:"With AriaDescribedby (B4)",args:{...o,ariaDescribedby:"htmlId"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("radio");await n(a).toHaveAttribute("aria-describedby","htmlId")}};var T,w,W;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(W=(w=l.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var x,S,D;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var I,R,B;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(B=(R=c.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var E,k,H;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(k=p.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var F,L,$;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...($=(L=m.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var C,P,j;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies Story`,...(j=(P=u.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var N,V,G;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    // eslint-disable-next-line jest-dom/prefer-to-have-value
    await expect(input).toHaveAttribute('value', 'person');
  }
} satisfies Story`,...(G=(V=b.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var _,M,O;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(M=y.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const le=["WithRef","WithAttributes","Defaults","WithDescription","WithLongText","WithLongTextAndBreaking","WithValue","WithAriaDescribedby"];export{c as Defaults,y as WithAriaDescribedby,d as WithAttributes,p as WithDescription,m as WithLongText,u as WithLongTextAndBreaking,l as WithRef,b as WithValue,le as __namedExportsOrder,oe as default};
//# sourceMappingURL=Radio.test.stories-BX8QHZRB.js.map
