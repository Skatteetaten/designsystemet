import{r as L,j as _}from"./iframe-Br1Xu9zr.js";import{C as F}from"./index-B55DkYFu.js";const{expect:n,fn:q,userEvent:I,waitFor:P,within:i}=__STORYBOOK_MODULE_TEST__,H=(a,t)=>async({canvasElement:e})=>{const E=i(e).getByRole("checkbox");await n(E).toBeInTheDocument(),await n(E).toHaveAttribute(a,t)},j={component:F,title:"Tester/Checkbox",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0}},defaultChecked:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},hideLabel:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},checked:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},required:{table:{disable:!0}},value:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},D="Checkbox",M="Du må lese og forstå innholdet for å gå videre",r={children:D},o={name:"With Ref (FA1)",args:{...r,ref:a=>{a&&(a.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:H("name","dummyNameForwardedFromRef")},l={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const t=i(a),e=t.getByRole("checkbox"),s=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("id","htmlid"),await n(s).toHaveClass("dummyClassname"),await n(s).toHaveAttribute("lang","nb"),await n(e).toHaveAttribute("data-testid","123ID"),await n(e).toHaveAttribute("form","123form")}},c={name:"Defaults (A1, B1)",args:{...r},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:a})=>{const t=i(a),e=t.getByLabelText(D);await n(e).toBeInTheDocument(),await n(e.tagName).toBe("INPUT"),await n(e).toHaveAttribute("aria-invalid","false"),await n(e).not.toBeChecked(),await n(e).not.toBeRequired(),await n(e).toBeEnabled(),await n(e).not.toHaveAttribute("aria-describedby");const s=t.getAllByRole("generic")[6];await n(s).toBeInTheDocument()}},d={name:"With Description (A1)",args:{...r,description:"En beskrivelse av punktet"},argTypes:{description:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:a})=>{const t=i(a),e=t.getByText("En beskrivelse av punktet");await n(e).toBeInTheDocument();const s=t.getByRole("checkbox");await n(s).toHaveAttribute("aria-describedby");const E=s.getAttribute("aria-describedby");await n(E).toMatch(/descId-/)}},u={name:"With Description And Long Text (A1)",args:{...r,children:"Får ekstra lang reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning eller annen fritidsordning",description:"Litt rart å ha en beskrivende tekst rett under en lang tekst, men sånn har det blitt"},argTypes:{description:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},b={name:"With Description And Disabled (A1)",args:{...r,description:"En beskrivelse av punktet",disabled:!0},argTypes:{description:{table:{disable:!1}},disabled:{table:{disable:!1}}}},p={name:"With Long Text (A2)",args:{...r,children:"Får ekstra lang reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning eller annen fritidsordning"},argTypes:{children:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},m={name:"With Long Text And Breaking (A2)",args:{...r,children:"Fårekstrareiseveitiljobbpågrunnavleveringtilbarnehageellerskolefritidsordning"},argTypes:{children:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},h={name:"With HideLabel (A2)",args:{...r,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByLabelText(D);await n(e).toBeInTheDocument()}},g={name:"With Checked (A1, A3)",args:{...r,checked:!0},argTypes:{checked:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeChecked(),await n(e).toHaveAttribute("aria-invalid","false")}},v={name:"With Disabled (A1, A5 delvis, B2)",args:{...r,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeDisabled()}},y={name:"With Disabled And Checked (A1, A5 delvis, B2)",args:{...r,checked:!0,disabled:!0},argTypes:{checked:{table:{disable:!1}},disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeChecked(),await n(e).toBeDisabled()}},f={name:"With Required (B3)",args:{...r,required:!0},argTypes:{required:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeRequired()}},k={name:"With Required And Mark (A1, B3)",args:{...r,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeRequired()}},A={name:"With Required And Checked (B3)",args:{...r,checked:!0,required:!0},argTypes:{checked:{table:{disable:!1}},required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeChecked(),await n(e).toBeRequired()}},x={name:"With ErrorMessage (A1, B4)",args:{...r,errorMessage:M},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:a})=>{const t=i(a),e=t.getAllByRole("generic")[6];await n(e).toHaveAttribute("id");const s=t.getByRole("checkbox",{description:M});await n(s).toHaveAttribute("aria-invalid","true")}},w={name:"With Disabled And Required (A1)",args:{...r,disabled:!0,required:!0,showRequiredMark:!0},argTypes:{disabled:{table:{disable:!1}},required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeDisabled(),await n(e).toBeRequired()}},B={name:"With Error And Required (A1)",args:{...r,errorMessage:"Feilmelding",required:!0,showRequiredMark:!0},argTypes:{errorMessage:{table:{disable:!1}},required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toHaveAttribute("aria-invalid","true"),await n(e).toBeRequired()}},S={name:"With AriaDescribedby (B1)",args:{...r,ariaDescribedby:"testID"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toHaveAttribute("aria-describedby"),await n(e).toHaveAttribute("aria-describedby",n.stringMatching("testID"))}},N={name:"With Value",args:{...r,value:"test_value_checkbox"},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:H("value","test_value_checkbox")},T={name:"With DefaultChecked",args:{...r,defaultChecked:!0},argTypes:{defaultChecked:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeChecked()}},W={name:"With Name",args:{...r,name:"test_name_checkbox"},argTypes:{name:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:H("name","test_name_checkbox")},O=a=>{const[t,e]=L.useState("Checkbox");return _.jsx(F,{...a,onBlur:s=>{e("Checkbox har mistet fokus"),a.onBlur&&a.onBlur(s)},onChange:s=>{e("Checkbox har blitt klikket på"),a.onChange&&a.onChange(s)},onFocus:s=>{e("Checkbox har fått fokus"),a.onFocus&&a.onFocus(s)},children:t})},R={render:O,name:"With EventHandlers",args:{...r,onBlur:q(),onChange:q(),onFocus:q()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:a,canvasElement:t})=>{const s=i(t).getByRole("checkbox");await I.click(s),await P(()=>n(a.onChange).toHaveBeenCalled()),s.focus(),await n(s).toHaveFocus(),s.blur(),await n(s).not.toHaveFocus()}},C={name:"With Custom ClassNames (FA3)",args:{...r,classNames:{label:"dummyClassname",errorMessage:"dummyClassname"},errorMessage:M},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByText(D),s=a.querySelector("[id^=checkboxErrorId]>div");await n(e?.parentElement?.parentElement).toHaveClass("dummyClassname"),await n(s).toHaveClass("dummyClassname")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLInputElement | null): void => {
      if (instance) {
        instance.name = 'dummyNameForwardedFromRef';
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
  play: verifyAttribute('name', 'dummyNameForwardedFromRef')
} satisfies Story`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    form: '123form'
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
    const inputNode = canvas.getByRole('checkbox');
    const container = canvas.getAllByRole('generic')[1];
    await expect(inputNode).toHaveAttribute('id', 'htmlid');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(inputNode).toHaveAttribute('data-testid', '123ID');
    await expect(inputNode).toHaveAttribute('form', '123form');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A1, B1)',
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
    const inputNode = canvas.getByLabelText(defaultLabelText);
    await expect(inputNode).toBeInTheDocument();
    await expect(inputNode.tagName).toBe('INPUT');
    await expect(inputNode).toHaveAttribute('aria-invalid', 'false');
    await expect(inputNode).not.toBeChecked();
    await expect(inputNode).not.toBeRequired();
    await expect(inputNode).toBeEnabled();
    await expect(inputNode).not.toHaveAttribute('aria-describedby');
    const errorMessage = canvas.getAllByRole('generic')[6];
    await expect(errorMessage).toBeInTheDocument();
  }
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Description (A1)',
  args: {
    ...defaultArgs,
    description: 'En beskrivelse av punktet'
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
    const description = canvas.getByText('En beskrivelse av punktet');
    await expect(description).toBeInTheDocument();
    const checkbox = canvas.getByRole('checkbox');
    await expect(checkbox).toHaveAttribute('aria-describedby');
    const describedbyValue = checkbox.getAttribute('aria-describedby');
    await expect(describedbyValue).toMatch(/descId-/);
  }
} satisfies Story`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With Description And Long Text (A1)',
  args: {
    ...defaultArgs,
    children: 'Får ekstra lang reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning eller annen fritidsordning',
    description: 'Litt rart å ha en beskrivende tekst rett under en lang tekst, men sånn har det blitt'
  },
  argTypes: {
    description: {
      table: {
        disable: false
      }
    }
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With Description And Disabled (A1)',
  args: {
    ...defaultArgs,
    description: 'En beskrivelse av punktet',
    disabled: true
  },
  argTypes: {
    description: {
      table: {
        disable: false
      }
    },
    disabled: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Long Text (A2)',
  args: {
    ...defaultArgs,
    children: 'Får ekstra lang reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning eller annen fritidsordning'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Long Text And Breaking (A2)',
  args: {
    ...defaultArgs,
    children: 'Fårekstrareiseveitiljobbpågrunnavleveringtilbarnehageellerskolefritidsordning'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With HideLabel (A2)',
  args: {
    ...defaultArgs,
    hideLabel: true
  },
  argTypes: {
    hideLabel: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByLabelText(defaultLabelText);
    await expect(inputNode).toBeInTheDocument();
  }
} satisfies Story`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Checked (A1, A3)',
  args: {
    ...defaultArgs,
    checked: true
  },
  argTypes: {
    checked: {
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
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeChecked();
    await expect(inputNode).toHaveAttribute('aria-invalid', 'false');
  }
} satisfies Story`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled (A1, A5 delvis, B2)',
  args: {
    ...defaultArgs,
    disabled: true
  },
  argTypes: {
    disabled: {
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
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeDisabled();
  }
} satisfies Story`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled And Checked (A1, A5 delvis, B2)',
  args: {
    ...defaultArgs,
    checked: true,
    disabled: true
  },
  argTypes: {
    checked: {
      table: {
        disable: false
      }
    },
    disabled: {
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
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeChecked();
    await expect(inputNode).toBeDisabled();
  }
} satisfies Story`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With Required (B3)',
  args: {
    ...defaultArgs,
    required: true
  },
  argTypes: {
    required: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeRequired();
  }
} satisfies Story`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'With Required And Mark (A1, B3)',
  args: {
    ...defaultArgs,
    required: true,
    showRequiredMark: true
  },
  argTypes: {
    required: {
      table: {
        disable: false
      }
    },
    showRequiredMark: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeRequired();
  }
} satisfies Story`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'With Required And Checked (B3)',
  args: {
    ...defaultArgs,
    checked: true,
    required: true
  },
  argTypes: {
    checked: {
      table: {
        disable: false
      }
    },
    required: {
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
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeChecked();
    await expect(inputNode).toBeRequired();
  }
} satisfies Story`,...A.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With ErrorMessage (A1, B4)',
  args: {
    ...defaultArgs,
    errorMessage: defaultErrorMessage
  },
  argTypes: {
    errorMessage: {
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
    const errorMessageNode = canvas.getAllByRole('generic')[6];
    await expect(errorMessageNode).toHaveAttribute('id');
    const inputNode = canvas.getByRole('checkbox', {
      description: defaultErrorMessage
    });
    await expect(inputNode).toHaveAttribute('aria-invalid', 'true');
  }
} satisfies Story`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled And Required (A1)',
  args: {
    ...defaultArgs,
    disabled: true,
    required: true,
    showRequiredMark: true
  },
  argTypes: {
    disabled: {
      table: {
        disable: false
      }
    },
    required: {
      table: {
        disable: false
      }
    },
    showRequiredMark: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeDisabled();
    await expect(inputNode).toBeRequired();
  }
} satisfies Story`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'With Error And Required (A1)',
  args: {
    ...defaultArgs,
    errorMessage: 'Feilmelding',
    required: true,
    showRequiredMark: true
  },
  argTypes: {
    errorMessage: {
      table: {
        disable: false
      }
    },
    required: {
      table: {
        disable: false
      }
    },
    showRequiredMark: {
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
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toHaveAttribute('aria-invalid', 'true');
    await expect(inputNode).toBeRequired();
  }
} satisfies Story`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'With AriaDescribedby (B1)',
  args: {
    ...defaultArgs,
    ariaDescribedby: 'testID'
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
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toHaveAttribute('aria-describedby');
    await expect(inputNode).toHaveAttribute('aria-describedby', expect.stringMatching('testID'));
  }
} satisfies Story`,...S.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'With Value',
  args: {
    ...defaultArgs,
    value: 'test_value_checkbox'
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
  play: verifyAttribute('value', 'test_value_checkbox')
} satisfies Story`,...N.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With DefaultChecked',
  args: {
    ...defaultArgs,
    defaultChecked: true
  },
  argTypes: {
    defaultChecked: {
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
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeChecked();
  }
} satisfies Story`,...T.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'With Name',
  args: {
    ...defaultArgs,
    name: 'test_name_checkbox'
  },
  argTypes: {
    name: {
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
  play: verifyAttribute('name', 'test_name_checkbox')
} satisfies Story`,...W.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await userEvent.click(inputNode);
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    inputNode.focus();
    await expect(inputNode).toHaveFocus();
    inputNode.blur();
    await expect(inputNode).not.toHaveFocus();
  }
} satisfies Story`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      label: 'dummyClassname',
      errorMessage: 'dummyClassname'
    },
    errorMessage: defaultErrorMessage
  },
  argTypes: {
    classNames: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const label = canvas.getByText(defaultLabelText);
    const errorMessageContainer = canvasElement.querySelector('[id^=checkboxErrorId]>div');
    await expect(label?.parentElement?.parentElement).toHaveClass('dummyClassname');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
  }
} satisfies Story`,...C.parameters?.docs?.source}}};const V=["WithRef","WithAttributes","Defaults","WithDescription","WithDescriptionAndLongText","WithDescriptionAndDisabled","WithLongText","WithLongTextAndBreaking","WithHideLabel","WithChecked","WithDisabled","WithDisabledAndChecked","WithRequired","WithRequiredAndMark","WithRequiredAndChecked","WithError","WithDisabledAndRequired","WithErrorAndRequired","WithAriaDescribedby","WithValue","WithDefaultChecked","WithName","WithEventHandlers","WithCustomClassNames"],K=Object.freeze(Object.defineProperty({__proto__:null,Defaults:c,WithAriaDescribedby:S,WithAttributes:l,WithChecked:g,WithCustomClassNames:C,WithDefaultChecked:T,WithDescription:d,WithDescriptionAndDisabled:b,WithDescriptionAndLongText:u,WithDisabled:v,WithDisabledAndChecked:y,WithDisabledAndRequired:w,WithError:x,WithErrorAndRequired:B,WithEventHandlers:R,WithHideLabel:h,WithLongText:p,WithLongTextAndBreaking:m,WithName:W,WithRef:o,WithRequired:f,WithRequiredAndChecked:A,WithRequiredAndMark:k,WithValue:N,__namedExportsOrder:V,default:j},Symbol.toStringTag,{value:"Module"}));export{K as C};
//# sourceMappingURL=Checkbox.test.stories-CJbB-99O.js.map
