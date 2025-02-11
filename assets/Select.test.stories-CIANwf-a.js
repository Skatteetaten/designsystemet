import{j as E}from"./jsx-runtime-CfatFE5O.js";import{r as $e}from"./index-ClcD9ViR.js";import{w as r,e as t,a as _e,f as R,b as k,u as M}from"./index-XVqkR3zt.js";import{d as ze}from"./index-qxaMszO_.js";import"./index-DOHHf95q.js";import{w as l}from"./storybook.testing.utils-CMs160i9.js";import{S as P}from"./icon.systems-C3YHcMhe.js";import{S as c}from"./DatePickerCalendar-DkH0XVvE.js";import{f as Ge}from"./base-props.types-sXyoNogd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Help-DD2Qmlbx.js";import"./index-CT5qi75N.js";import"./index-BYj_oXFq.js";import"./index-DVxy_Kbo.js";import"./LabelWithHelp-CBkTgz7a.js";import"./index-DdP4wgFW.js";import"./index-DDpvzByM.js";import"./icon.utils-BQ79h5X2.js";const ua={component:c,title:"Tester/Select/Select",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},classNames:{table:{disable:!0}},defaultValue:{table:{disable:!0}},value:{table:{disable:!0}},placeholder:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(P),mapping:P},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},hidePlaceholder:{table:{disable:!0}},variant:{table:{disable:!0},options:[...Ge],control:"inline-radio"},label:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},autoComplete:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},required:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}}},F="option1",i="option2",D="Ledetekst er obligatorisk",d="Ledetekst",Je=[E.jsx(c.Option,{value:F,children:"Test 1"},"option_1"),E.jsx(c.Option,{value:i,children:"Test 2"},"option_2")],o={label:d,children:Je},m={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("name","dummyNameForwardedFromRef")}},p={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"form123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=r(e),a=n.getByRole("combobox"),s=n.getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid"),await t(a).toHaveAttribute("data-testid","123ID"),await t(s).toHaveClass("dummyClassname"),await t(s).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("form","form123")}},u={name:"With Custom ClassNames (FA3)",args:{...o,classNames:{container:"dummyClassname",label:"dummyClassname",selectContainer:"dummyClassnameFormContainer",errorMessage:"dummyClassname"},errorMessage:D},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=r(e),a=e.querySelector(`${l} > div`),s=n.getByText(d),Oe=e.querySelector(`${l} > div > div`),je=e.querySelector("[id^=selectErrorId]>div");await t(a).toHaveClass("dummyClassname"),await t(s).toHaveClass("dummyClassname"),await t(Oe).toHaveClass("dummyClassnameFormContainer"),await t(je).toHaveClass("dummyClassname")}},b={name:"Defaults Variant Medium (A1, A2 delvis, A3, FS-A2, B2)",args:{...o},argTypes:{label:{table:{disable:!1}},children:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${l} select`,focus:`${l} select`}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox",{name:d});await t(a).toBeInTheDocument(),await t(a).toBeEnabled(),await t(a).toHaveValue(""),await t(a).toHaveTextContent(ze.t("Shared:shared.ChooseValue")),await t(a).toHaveAttribute("id"),await t(a.tagName).toBe("SELECT"),await t(a).not.toBeRequired(),await t(a).not.toHaveAttribute("aria-invalid"),await t(a).not.toHaveAttribute("aria-describedby");const s=e.querySelector("[id^=selectErrorId]");await t(s).toBeInTheDocument()}},g={name:"With Variant Large (A1)",args:{...o,variant:"large"},argTypes:{variant:{table:{disable:!1}}}},v={name:"With Variant Large And Long Text",args:{...o,hidePlaceholder:!0,variant:"large",children:[E.jsx(c.Option,{value:F,children:"En lang tekst som ikke skal synes bak åpne ikonet"},"option_1")]},argTypes:{variant:{table:{disable:!1}},children:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}},h={name:"With Disabled (B1, B6)",args:{...o,disabled:!0,value:F},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox");await t(a).toBeDisabled()}},y={name:"With Value",args:{...o,value:i},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox");await t(a).toHaveValue(i)}},f={name:"With DefaultValue",args:{...o,defaultValue:i},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox");await t(a).toHaveValue(i)}},V="Velg fra listen noe gøy",w={name:"With AutoComplete Name And Placeholder (A2 delvis, B1)",args:{...o,autoComplete:"given-name",name:"test_name",placeholder:V},argTypes:{autoComplete:{table:{disable:!1}},name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=r(e),a=n.getByRole("combobox");await t(a).toHaveAttribute("autocomplete","given-name"),await t(a).toHaveAttribute("name","test_name");const s=n.getByText(V);await t(s).toBeInTheDocument(),await t(s.tagName).toBe("OPTION")}},x={name:"With HidePlaceholder (A2 delvis)",args:{...o,hidePlaceholder:!0},argTypes:{hidePlaceholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox");await t(a).not.toHaveValue("")}},T={name:"With Required (B1, B4)",args:{...o,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox");await t(a).toBeRequired()}},A={name:"With Required And Mark (B1, FS-A4 delvis)",args:{...o,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},B={name:"With ErrorMessage (A4 delvis, B5 delvis)",args:{...o,errorMessage:D},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${l} select`,focus:`${l} select`}},play:async({canvasElement:e})=>{const n=r(e),a=n.getByRole("combobox",{description:D}),s=n.getAllByRole("generic")[3];await t(s).toBeInTheDocument(),await t(a).toHaveAttribute("aria-invalid","true"),await t(a).toHaveAttribute("aria-describedby")}},S={name:"With Description (FS-A3)",args:{...o,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=r(e).getByText("En liten beskrivelse tekst");await t(a).toBeInTheDocument()}},C={name:"With HideLabel (FS-A7)",args:{...o,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox",{name:d});await t(a).toBeInTheDocument()}},H={name:"With HelpText (A1)",args:{...o,helpText:"Hjelpetekst"},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=r(e).getByRole("button",{description:d});await t(a).toBeInTheDocument(),await _e.click(a)}},Ke=e=>{const[n,a]=$e.useState("Tester events");return E.jsx(c,{...e,label:n,onFocus:s=>{a("Select har fått fokus"),e.onFocus&&e.onFocus(s)},onBlur:s=>{a("Select har blitt blurret"),e.onBlur&&e.onBlur(s)},onChange:s=>{a("Select har blitt klikket på"),e.onChange&&e.onChange(s)}})},W={render:Ke,name:"With EventHandlers (A3)",args:{...o,onFocus:R(),onBlur:R(),onChange:R()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const s=r(n).getByRole("combobox");s.focus(),await k(()=>t(e.onFocus).toHaveBeenCalled()),await M.selectOptions(s,i),await k(()=>t(e.onChange).toHaveBeenCalled()),await M.tab(),await k(()=>t(e.onBlur).toHaveBeenCalled())}},N={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}};var q,L,I;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(I=(L=m.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var O,j,$;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
} satisfies Story`,...($=(j=p.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var _,z,G;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(z=u.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
      hover: \`\${wrapper} select\`,
      focus: \`\${wrapper} select\`
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
    await expect(selectNode).toHaveTextContent(dsI18n.t('Shared:shared.ChooseValue'));
    await expect(selectNode).toHaveAttribute('id');
    await expect(selectNode.tagName).toBe('SELECT');
    await expect(selectNode).not.toBeRequired();
    await expect(selectNode).not.toHaveAttribute('aria-invalid');
    await expect(selectNode).not.toHaveAttribute('aria-describedby');
    const errorMessageContainer = canvasElement.querySelector('[id^=selectErrorId]');
    await expect(errorMessageContainer).toBeInTheDocument();
  }
} satisfies Story`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectNode = canvas.getByRole('combobox');
    await expect(selectNode).toBeDisabled();
  }
} satisfies Story`,...(se=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,re,le;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const optionNode = canvas.getByRole('combobox');
    await expect(optionNode).toHaveValue(valueOption2);
  }
} satisfies Story`,...(le=(re=y.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ie,ce,de;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const optionNode = canvas.getByRole('combobox');
    await expect(optionNode).toHaveValue(valueOption2);
  }
} satisfies Story`,...(de=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ue;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var be,ge,ve;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(ve=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var he,ye,fe;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectNode = canvas.getByRole('combobox');
    await expect(selectNode).toBeRequired();
  }
} satisfies Story`,...(fe=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var we,xe,Te;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Ae,Be,Se;B.parameters={...B.parameters,docs:{...(Ae=B.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
      hover: \`\${wrapper} select\`,
      focus: \`\${wrapper} select\`
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
} satisfies Story`,...(Se=(Be=B.parameters)==null?void 0:Be.docs)==null?void 0:Se.source}}};var Ce,He,We;S.parameters={...S.parameters,docs:{...(Ce=S.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
  }
} satisfies Story`,...(We=(He=S.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};var Ne,Ee,Re;C.parameters={...C.parameters,docs:{...(Ne=C.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(Re=(Ee=C.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var ke,De,Fe;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(Fe=(De=H.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var Me,Pe,Ve;W.parameters={...W.parameters,docs:{...(Me=W.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(Ve=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var qe,Le,Ie;N.parameters={...N.parameters,docs:{...(qe=N.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:Ie.source}}};const ba=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithVariantLarge","WithVariantLargeAndLongText","WithDisabled","WithValue","WithDefaultValue","WithAutoCompleteNameAndPlaceholder","WithHidePlaceholder","WithRequired","WithRequiredAndMark","WithErrorMessage","WithDescription","WithHideLabel","WithHelpText","WithEventHandlers","WithHelpToggleEvent"];export{b as Defaults,p as WithAttributes,w as WithAutoCompleteNameAndPlaceholder,u as WithCustomClassNames,f as WithDefaultValue,S as WithDescription,h as WithDisabled,B as WithErrorMessage,W as WithEventHandlers,H as WithHelpText,N as WithHelpToggleEvent,C as WithHideLabel,x as WithHidePlaceholder,m as WithRef,T as WithRequired,A as WithRequiredAndMark,y as WithValue,g as WithVariantLarge,v as WithVariantLargeAndLongText,ba as __namedExportsOrder,ua as default};
//# sourceMappingURL=Select.test.stories-CIANwf-a.js.map
