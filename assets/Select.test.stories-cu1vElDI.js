import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{r as Xe}from"./index-7h80QhK_.js";import{f as O,w as r,e as t,a as Ye,b as V,u as D}from"./index-DIxTUSTt.js";import{d as Ze}from"./index-EsEcB_zD.js";import"./index-DmQJLmMR.js";import{w as d}from"./storybook.testing.utils-CMs160i9.js";import{S as P}from"./icon.systems-DnY32ltf.js";import{S as l}from"./DatePickerCalendar-uhBuvt5I.js";import{f as ea}from"./base-props.types-B2QwU1g4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Help-DBM5pSGx.js";import"./index-TStLVSlm.js";import"./index-MCo35TjR.js";import"./index-_-BAtSXr.js";import"./LabelWithHelp-Bp_nNVMq.js";import"./index-SYCMKRjb.js";import"./index-Begbw_Sq.js";import"./index-B4uH14t0.js";import"./icon.utils-XW2L0FSl.js";const Ta={component:l,title:"Tester/Select/Select",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},classNames:{table:{disable:!0}},defaultValue:{table:{disable:!0}},value:{table:{disable:!0}},placeholder:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(P),mapping:P},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},hidePlaceholder:{table:{disable:!0}},variant:{table:{disable:!0},options:[...ea],control:"inline-radio"},label:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},autoComplete:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},required:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}}},m="option1",c="option2",F="Ledetekst er obligatorisk",p="Ledetekst",aa=[i.jsx(l.Option,{value:m,children:"Test 1"},"option_1"),i.jsx(l.Option,{value:c,children:"Test 2"},"option_2")],o={label:p,children:aa},u={name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("name","dummyNameForwardedFromRef")}},b={name:"With Attributes (FA2-5)",args:{...o,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"form123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=r(e),a=n.getByRole("combobox"),s=n.getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid"),await t(a).toHaveAttribute("data-testid","123ID"),await t(s).toHaveClass("dummyClassname"),await t(s).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("form","form123")}},g={name:"With Custom ClassNames (FA3)",args:{...o,classNames:{container:"dummyClassname",label:"dummyClassname",selectContainer:"dummyClassnameFormContainer",errorMessage:"dummyClassname"},errorMessage:F},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=r(e),a=e.querySelector(`${d} > div`),s=n.getByText(p),Qe=e.querySelector(`${d} > div > div`),Ue=e.querySelector("[id^=selectErrorId]>div");await t(a).toHaveClass("dummyClassname"),await t(s).toHaveClass("dummyClassname"),await t(Qe).toHaveClass("dummyClassnameFormContainer"),await t(Ue).toHaveClass("dummyClassname")}},v={name:"Defaults Variant Medium (A1, A2 delvis, A3, FS-A2, B2)",args:{...o},argTypes:{label:{table:{disable:!1}},children:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${d} select`,focus:`${d} select`}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox",{name:p});await t(a).toBeInTheDocument(),await t(a).toBeEnabled(),await t(a).toHaveValue(""),await t(a).toHaveTextContent(Ze.t("Shared:shared.ChooseValue")),await t(a).toHaveAttribute("id"),await t(a.tagName).toBe("SELECT"),await t(a).not.toBeRequired(),await t(a).not.toHaveAttribute("aria-invalid"),await t(a).not.toHaveAttribute("aria-describedby");const s=e.querySelector("[id^=selectErrorId]");await t(s).toBeInTheDocument()}},h={name:"With Variant Large (A1)",args:{...o,variant:"large"},argTypes:{variant:{table:{disable:!1}}}},y={name:"With Variant Large And Long Text",args:{...o,hidePlaceholder:!0,variant:"large",children:[i.jsx(l.Option,{value:m,children:"En lang tekst som ikke skal synes bak åpne ikonet"},"option_1")]},argTypes:{variant:{table:{disable:!1}},children:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}},f={name:"With Disabled (B1, B6)",args:{...o,disabled:!0,value:m},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox");await t(a).toBeDisabled()}},w={name:"With Value",args:{...o,value:c},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox");await t(a).toHaveValue(c)}},x={name:"With DefaultValue",args:{...o,defaultValue:c},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox");await t(a).toHaveValue(c)}},M="Velg fra listen noe gøy",T={name:"With AutoComplete Name And Placeholder (A2 delvis, B1)",args:{...o,autoComplete:"given-name",name:"test_name",placeholder:M},argTypes:{autoComplete:{table:{disable:!1}},name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=r(e),a=n.getByRole("combobox");await t(a).toHaveAttribute("autocomplete","given-name"),await t(a).toHaveAttribute("name","test_name");const s=n.getByText(M);await t(s).toBeInTheDocument(),await t(s.tagName).toBe("OPTION")}},S={name:"With HidePlaceholder (A2 delvis)",args:{...o,hidePlaceholder:!0},argTypes:{hidePlaceholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox");await t(a).not.toHaveValue("")}},A={name:"With Required (B1, B4)",args:{...o,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox");await t(a).toBeRequired()}},B={name:"With Required And Mark (B1, FS-A4 delvis)",args:{...o,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},C={name:"With ErrorMessage (A4 delvis, B5 delvis)",args:{...o,errorMessage:F},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${d} select`,focus:`${d} select`}},play:async({canvasElement:e})=>{const n=r(e),a=n.getByRole("combobox",{description:F}),s=n.getAllByRole("generic")[3];await t(s).toBeInTheDocument(),await t(a).toHaveAttribute("aria-invalid","true"),await t(a).toHaveAttribute("aria-describedby")}},H={name:"With Description (FS-A3)",args:{...o,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=r(e).getByText("En liten beskrivelse tekst");await t(a).toBeInTheDocument()}},W={name:"With HideLabel (FS-A7)",args:{...o,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=r(e).getByRole("combobox",{name:p});await t(a).toBeInTheDocument()}},N={name:"With HelpText (A1)",args:{...o,helpText:"Hjelpetekst"},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=r(e).getByRole("button",{description:p});await t(a).toBeInTheDocument(),await Ye.click(a)}},ta=e=>{const[n,a]=Xe.useState("Tester events");return i.jsx(l,{...e,label:n,onFocus:s=>{a("Select har fått fokus"),e.onFocus&&e.onFocus(s)},onBlur:s=>{a("Select har blitt blurret"),e.onBlur&&e.onBlur(s)},onChange:s=>{a("Select har blitt klikket på"),e.onChange&&e.onChange(s)}})},E={render:ta,name:"With EventHandlers (A3)",args:{...o,onFocus:O(),onBlur:O(),onChange:O()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const s=r(n).getByRole("combobox");s.focus(),await V(()=>t(e.onFocus).toHaveBeenCalled()),await D.selectOptions(s,c),await V(()=>t(e.onChange).toHaveBeenCalled()),await D.tab(),await V(()=>t(e.onBlur).toHaveBeenCalled())}},k={name:"With onHelpToggle Event",args:{...o,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},R={args:{label:"Ledetekst",className:"textField150",defaultValue:m,children:[i.jsx(l.Option,{value:m,children:"Long input tekst"},"option_1"),i.jsx(l.Option,{value:c,children:"Very very very long inputtext"},"option_2")]},argTypes:{variant:{table:{disable:!1}},defaultValue:{table:{disable:!1}}}},L={args:{label:"Ledetekst",className:"textField150",placeholder:"Long placeholder text",children:[i.jsx(l.Option,{value:m,children:"Long input tekst"},"option_1"),i.jsx(l.Option,{value:c,children:"Very very very long inputtext"},"option_2")]},argTypes:{variant:{table:{disable:!1}},placeholder:{table:{disable:!1}}}};var q,I,j;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(j=(I=u.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var _,$,z;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(z=($=b.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var G,J,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,oe,re;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var le,ie,ce;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,me,pe;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(me=x.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,be,ge;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(be=T.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var ve,he,ye;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(he=S.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var fe,we,xe;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(xe=(we=A.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var Te,Se,Ae;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ae=(Se=B.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};var Be,Ce,He;C.parameters={...C.parameters,docs:{...(Be=C.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
} satisfies Story`,...(He=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:He.source}}};var We,Ne,Ee;H.parameters={...H.parameters,docs:{...(We=H.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ee=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:Ee.source}}};var ke,Re,Le;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Le.source}}};var Oe,Ve,Fe;N.parameters={...N.parameters,docs:{...(Oe=N.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Fe=(Ve=N.parameters)==null?void 0:Ve.docs)==null?void 0:Fe.source}}};var De,Pe,Me;E.parameters={...E.parameters,docs:{...(De=E.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
} satisfies Story`,...(Me=(Pe=E.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source}}};var qe,Ie,je;k.parameters={...k.parameters,docs:{...(qe=k.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(je=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var _e,$e,ze;R.parameters={...R.parameters,docs:{...(_e=R.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
} satisfies Story`,...(ze=($e=R.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Ge,Je,Ke;L.parameters={...L.parameters,docs:{...(Ge=L.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ke=(Je=L.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};const Sa=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithVariantLarge","WithVariantLargeAndLongText","WithDisabled","WithValue","WithDefaultValue","WithAutoCompleteNameAndPlaceholder","WithHidePlaceholder","WithRequired","WithRequiredAndMark","WithErrorMessage","WithDescription","WithHideLabel","WithHelpText","WithEventHandlers","WithHelpToggleEvent","WithLongInput","WithLongPlaceholder"];export{v as Defaults,b as WithAttributes,T as WithAutoCompleteNameAndPlaceholder,g as WithCustomClassNames,x as WithDefaultValue,H as WithDescription,f as WithDisabled,C as WithErrorMessage,E as WithEventHandlers,N as WithHelpText,k as WithHelpToggleEvent,W as WithHideLabel,S as WithHidePlaceholder,R as WithLongInput,L as WithLongPlaceholder,u as WithRef,A as WithRequired,B as WithRequiredAndMark,w as WithValue,h as WithVariantLarge,y as WithVariantLargeAndLongText,Sa as __namedExportsOrder,Ta as default};
//# sourceMappingURL=Select.test.stories-cu1vElDI.js.map
