import{j as r,r as _}from"./iframe-VHQh6taY.js";import"./index-lB78RBB2.js";import{w as M}from"./storybook.testing.utils-BgHZnMzD.js";import{S as P}from"./icon.systems-pjRjKMCZ.js";import{S as l,g as $}from"./DatePickerCalendar-fvOeZNLZ.js";const{expect:t,fireEvent:z,fn:V,userEvent:q,waitFor:D,within:i}=__STORYBOOK_MODULE_TEST__,G={component:l,title:"Tester/Select",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},classNames:{table:{disable:!0}},defaultValue:{table:{disable:!0}},value:{table:{disable:!0}},placeholder:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(P),mapping:P},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},hidePlaceholder:{table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"},label:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},autoComplete:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},required:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},d="option1",c="option2",F="Ledetekst er obligatorisk",O="Ledetekst",K=[r.jsx(l.Option,{value:d,children:"Test 1"},"option_1"),r.jsx(l.Option,{value:c,children:"Test 2"},"option_2")],o={label:O,children:K},m={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("name","dummyNameForwardedFromRef")}},p={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"form123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const n=i(e),a=n.getByRole("combobox"),s=n.getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid"),await t(a).toHaveAttribute("data-testid","123ID"),await t(s).toHaveClass("dummyClassname"),await t(s).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("form","form123")}},u={name:"With Custom ClassNames (FA3)",args:{...o,classNames:{container:"dummyClassname",label:"dummyClassname",selectContainer:"dummyClassnameFormContainer",errorMessage:"dummyClassname"},errorMessage:F},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),a=e.querySelector(`${M} > div`),s=n.getByText(O),L=e.querySelector(`${M} > div > div`),I=e.querySelector("[id^=selectErrorId]>div");await t(a).toHaveClass("dummyClassname"),await t(s).toHaveClass("dummyClassname"),await t(L).toHaveClass("dummyClassnameFormContainer"),await t(I).toHaveClass("dummyClassname")}},b={name:"Defaults Variant Medium (A1, A2 delvis, A3, FS-A2, B2)",args:{...o},argTypes:{label:{table:{disable:!1}},children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox",{name:O});await t(a).toBeInTheDocument(),await t(a).toBeEnabled(),await t(a).toHaveValue(""),await t(a).toHaveTextContent($()),await t(a).toHaveAttribute("id"),await t(a.tagName).toBe("SELECT"),await t(a).not.toBeRequired(),await t(a).not.toHaveAttribute("aria-invalid"),await t(a).not.toHaveAttribute("aria-describedby");const s=e.querySelector("[id^=selectErrorId]");await t(s).toBeInTheDocument()}},g={name:"With Variant Large (A1)",args:{...o,variant:"large"},argTypes:{variant:{table:{disable:!1}}}},v={name:"With Variant Large And Long Text",args:{...o,hidePlaceholder:!0,variant:"large",children:[r.jsx(l.Option,{value:d,children:"En lang tekst som ikke skal synes bak åpne ikonet"},"option_1")]},argTypes:{variant:{table:{disable:!1}},children:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}}},h={name:"With Disabled (B1, B6)",args:{...o,disabled:!0,value:d},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox");await t(a).toBeDisabled()}},y={name:"With Value",args:{...o,value:c},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox");await t(a).toHaveValue(c)}},f={name:"With DefaultValue",args:{...o,defaultValue:c},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox");await t(a).toHaveValue(c)}},j="Velg fra listen noe gøy",x={name:"With AutoComplete Name And Placeholder (A2 delvis, B1)",args:{...o,autoComplete:"given-name",name:"test_name",placeholder:j},argTypes:{autoComplete:{table:{disable:!1}},name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),a=n.getByRole("combobox");await t(a).toHaveAttribute("autocomplete","given-name"),await t(a).toHaveAttribute("name","test_name");const s=n.getByText(j);await t(s).toBeInTheDocument(),await t(s.tagName).toBe("OPTION")}},S={name:"With HidePlaceholder (A2 delvis)",args:{...o,hidePlaceholder:!0},argTypes:{hidePlaceholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox");await t(a).not.toHaveValue("")}},w={name:"With Required (B1, B4)",args:{...o,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox");await t(a).toBeRequired()}},T={name:"With Required And Mark (B1, FS-A4 delvis)",args:{...o,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},A={name:"With ErrorMessage (A4 delvis, B5 delvis)",args:{...o,errorMessage:F},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}},play:async({canvasElement:e})=>{const n=i(e),a=n.getByRole("combobox",{description:F}),s=n.getAllByRole("generic")[3];await t(s).toBeInTheDocument(),await t(a).toHaveAttribute("aria-invalid","true"),await t(a).toHaveAttribute("aria-describedby")}},B={name:"With Description (FS-A3)",args:{...o,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),a=n.getByText("En liten beskrivelse tekst");await t(a).toBeInTheDocument();const s=n.getByRole("combobox");await t(s).toHaveAttribute("aria-describedby");const L=s.getAttribute("aria-describedby");await t(L).toMatch(/descId-/)}},H={name:"With HideLabel (FS-A7)",args:{...o,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox",{name:O});await t(a).toBeInTheDocument()}},C={name:"With HelpText (A1)",args:{...o,helpText:"Hjelpetekst"},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("button",{description:O});await t(a).toBeInTheDocument(),await z.click(a)}},U=e=>{const[n,a]=_.useState("Tester events");return r.jsx(l,{...e,label:n,onFocus:s=>{a("Select har fått fokus"),e.onFocus&&e.onFocus(s)},onBlur:s=>{a("Select har blitt blurret"),e.onBlur&&e.onBlur(s)},onChange:s=>{a("Select har blitt klikket på"),e.onChange&&e.onChange(s)}})},N={render:U,name:"With EventHandlers (A3)",args:{...o,onFocus:V(),onBlur:V(),onChange:V()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:n})=>{const s=i(n).getByRole("combobox");s.focus(),await D(()=>t(e.onFocus).toHaveBeenCalled()),await q.selectOptions(s,c),await D(()=>t(e.onChange).toHaveBeenCalled()),await q.tab(),await D(()=>t(e.onBlur).toHaveBeenCalled())}},W={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},E={args:{label:"Ledetekst",className:"textField150",defaultValue:d,children:[r.jsx(l.Option,{value:d,children:"Long input tekst"},"option_1"),r.jsx(l.Option,{value:c,children:"Very very very long inputtext"},"option_2")]},argTypes:{variant:{table:{disable:!1}},defaultValue:{table:{disable:!1}}}},k={args:{label:"Ledetekst",className:"textField150",placeholder:"Long placeholder text",children:[r.jsx(l.Option,{value:d,children:"Long input tekst"},"option_1"),r.jsx(l.Option,{value:c,children:"Very very very long inputtext"},"option_2")]},argTypes:{variant:{table:{disable:!1}},placeholder:{table:{disable:!1}}}},Y=()=>r.jsxs("div",{className:"flex gapS",children:[r.jsxs(l,{label:"Fruktsort",required:!0,children:[r.jsx(l.Option,{value:1,children:"Banan"}),r.jsx(l.Option,{value:2,children:"Eple"})]}),r.jsxs(l,{label:"Fruktsort",helpText:"Velg frukten du liker best.",required:!0,children:[r.jsx(l.Option,{value:1,children:"Banan"}),r.jsx(l.Option,{value:2,children:"Eple"})]})]}),R={render:Y};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLSelectElement | null): void => {
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const element = canvas.getByRole('combobox');
    await expect(element).toBeInTheDocument();
    await expect(element).toHaveAttribute('name', 'dummyNameForwardedFromRef');
  }
} satisfies Story`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    form: 'form123'
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
    const selectNode = canvas.getByRole('combobox');
    const container = canvas.getAllByRole('generic')[1];
    await expect(selectNode).toHaveAttribute('id', 'htmlid');
    await expect(selectNode).toHaveAttribute('data-testid', '123ID');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(selectNode).toHaveAttribute('form', 'form123');
  }
} satisfies Story`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      container: 'dummyClassname',
      label: 'dummyClassname',
      selectContainer: 'dummyClassnameFormContainer',
      errorMessage: 'dummyClassname'
    },
    errorMessage: errorMessageText
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
    const container = canvasElement.querySelector(\`\${wrapper} > div\`);
    const label = canvas.getByText(defaultLabelText);
    const selectContainer = canvasElement.querySelector(\`\${wrapper} > div > div\`);
    const errorMessageContainer = canvasElement.querySelector('[id^=selectErrorId]>div');
    await expect(container).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(selectContainer).toHaveClass('dummyClassnameFormContainer');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
  }
} satisfies Story`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Defaults Variant Medium (A1, A2 delvis, A3, FS-A2, B2)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    label: {
      table: {
        disable: false
      }
    },
    children: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectNode = canvas.getByRole('combobox', {
      name: defaultLabelText
    });
    await expect(selectNode).toBeInTheDocument();
    await expect(selectNode).toBeEnabled();
    await expect(selectNode).toHaveValue('');
    await expect(selectNode).toHaveTextContent(getSelectPlaceholderDefault());
    await expect(selectNode).toHaveAttribute('id');
    await expect(selectNode.tagName).toBe('SELECT');
    await expect(selectNode).not.toBeRequired();
    await expect(selectNode).not.toHaveAttribute('aria-invalid');
    await expect(selectNode).not.toHaveAttribute('aria-describedby');
    const errorMessageContainer = canvasElement.querySelector('[id^=selectErrorId]');
    await expect(errorMessageContainer).toBeInTheDocument();
  }
} satisfies Story`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Variant Large (A1)',
  args: {
    ...defaultArgs,
    variant: 'large'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Variant Large And Long Text',
  args: {
    ...defaultArgs,
    hidePlaceholder: true,
    variant: 'large',
    children: [<Select.Option key={'option_1'} value={valueOption1}>
        {'En lang tekst som ikke skal synes bak åpne ikonet'}
      </Select.Option>]
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    },
    children: {
      table: {
        disable: false
      }
    }
  },
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled (B1, B6)',
  args: {
    ...defaultArgs,
    disabled: true,
    value: valueOption1
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
      pseudoStates: ['hover', 'focus-visible']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectNode = canvas.getByRole('combobox');
    await expect(selectNode).toBeDisabled();
  }
} satisfies Story`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Value',
  args: {
    ...defaultArgs,
    value: valueOption2
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
    const optionNode = canvas.getByRole('combobox');
    await expect(optionNode).toHaveValue(valueOption2);
  }
} satisfies Story`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With DefaultValue',
  args: {
    ...defaultArgs,
    defaultValue: valueOption2
  },
  argTypes: {
    defaultValue: {
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
    const optionNode = canvas.getByRole('combobox');
    await expect(optionNode).toHaveValue(valueOption2);
  }
} satisfies Story`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With AutoComplete Name And Placeholder (A2 delvis, B1)',
  args: {
    ...defaultArgs,
    autoComplete: 'given-name',
    name: 'test_name',
    placeholder: customPlaceholderText
  },
  argTypes: {
    autoComplete: {
      table: {
        disable: false
      }
    },
    name: {
      table: {
        disable: false
      }
    },
    placeholder: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectNode = canvas.getByRole('combobox');
    await expect(selectNode).toHaveAttribute('autocomplete', 'given-name');
    await expect(selectNode).toHaveAttribute('name', 'test_name');
    const placeholderOption = canvas.getByText(customPlaceholderText);
    await expect(placeholderOption).toBeInTheDocument();
    await expect(placeholderOption.tagName).toBe('OPTION');
  }
} satisfies Story`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'With HidePlaceholder (A2 delvis)',
  args: {
    ...defaultArgs,
    hidePlaceholder: true
  },
  argTypes: {
    hidePlaceholder: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const optionNode = canvas.getByRole('combobox');
    await expect(optionNode).not.toHaveValue('');
  }
} satisfies Story`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'With Required (B1, B4)',
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
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectNode = canvas.getByRole('combobox');
    await expect(selectNode).toBeRequired();
  }
} satisfies Story`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With Required And Mark (B1, FS-A4 delvis)',
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
  }
} satisfies Story`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'With ErrorMessage (A4 delvis, B5 delvis)',
  args: {
    ...defaultArgs,
    errorMessage: errorMessageText
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
      pseudoStates: ['hover', 'focus-visible']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectNode = canvas.getByRole('combobox', {
      description: errorMessageText
    });
    const errorMessageContainer = canvas.getAllByRole('generic')[3];
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(selectNode).toHaveAttribute('aria-invalid', 'true');
    await expect(selectNode).toHaveAttribute('aria-describedby');
  }
} satisfies Story`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'With Description (FS-A3)',
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const labelWithDescription = canvas.getByText('En liten beskrivelse tekst');
    await expect(labelWithDescription).toBeInTheDocument();
    const selectNode = canvas.getByRole('combobox');
    await expect(selectNode).toHaveAttribute('aria-describedby');
    const describedbyValue = selectNode.getAttribute('aria-describedby');
    await expect(describedbyValue).toMatch(/descId-/);
  }
} satisfies Story`,...B.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'With HideLabel (FS-A7)',
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
    const selectNode = canvas.getByRole('combobox', {
      name: defaultLabelText
    });
    await expect(selectNode).toBeInTheDocument();
  }
} satisfies Story`,...H.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'With HelpText (A1)',
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst'
  },
  argTypes: {
    helpText: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button', {
      description: defaultLabelText
    });
    await expect(helpButton).toBeInTheDocument();
    await fireEvent.click(helpButton);
  }
} satisfies Story`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A3)',
  args: {
    ...defaultArgs,
    onFocus: fn(),
    onBlur: fn(),
    onChange: fn()
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
    const selectNode = canvas.getByRole('combobox');
    selectNode.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.selectOptions(selectNode, valueOption2);
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
  }
} satisfies Story`,...N.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'With onHelpToggle Event',
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst',
    onHelpToggle: (isOpen: boolean): void => {
      alert(isOpen ? 'Hjelpetekst blir vist' : 'Hjelpetekst skjules');
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...W.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Ledetekst',
    className: 'textField150',
    defaultValue: valueOption1,
    children: [<Select.Option key={'option_1'} value={valueOption1}>
        {'Long input tekst'}
      </Select.Option>, <Select.Option key={'option_2'} value={valueOption2}>
        {'Very very very long inputtext'}
      </Select.Option>]
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    },
    defaultValue: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Ledetekst',
    className: 'textField150',
    placeholder: 'Long placeholder text',
    children: [<Select.Option key={'option_1'} value={valueOption1}>
        {'Long input tekst'}
      </Select.Option>, <Select.Option key={'option_2'} value={valueOption2}>
        {'Very very very long inputtext'}
      </Select.Option>]
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    },
    placeholder: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...k.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: TwoSelects
}`,...R.parameters?.docs?.source}}};const J=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithVariantLarge","WithVariantLargeAndLongText","WithDisabled","WithValue","WithDefaultValue","WithAutoCompleteNameAndPlaceholder","WithHidePlaceholder","WithRequired","WithRequiredAndMark","WithErrorMessage","WithDescription","WithHideLabel","WithHelpText","WithEventHandlers","WithHelpToggleEvent","WithLongInput","WithLongPlaceholder","TwoSelectsOneWithHelpText"],te=Object.freeze(Object.defineProperty({__proto__:null,Defaults:b,TwoSelectsOneWithHelpText:R,WithAttributes:p,WithAutoCompleteNameAndPlaceholder:x,WithCustomClassNames:u,WithDefaultValue:f,WithDescription:B,WithDisabled:h,WithErrorMessage:A,WithEventHandlers:N,WithHelpText:C,WithHelpToggleEvent:W,WithHideLabel:H,WithHidePlaceholder:S,WithLongInput:E,WithLongPlaceholder:k,WithRef:m,WithRequired:w,WithRequiredAndMark:T,WithValue:y,WithVariantLarge:g,WithVariantLargeAndLongText:v,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{te as S};
//# sourceMappingURL=Select.test.stories-lKMoVB3G.js.map
