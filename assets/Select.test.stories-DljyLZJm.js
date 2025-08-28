import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as aa}from"./index-D_ouKaeX.js";import{f as F,w as i,e as t,a as ta,b as V,u as P}from"./index-DIxTUSTt.js";import"./index-BuHbB7kV.js";import{w as d}from"./storybook.testing.utils-CMs160i9.js";import{S as M}from"./icon.systems-DzczaoTk.js";import{S as l,g as na}from"./DatePickerCalendar-wzrlqniL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CGk5cNE3.js";import"./Help-YRS8Catz.js";import"./index-Du3yX_TW.js";import"./index-CgEl4Pzg.js";import"./index-uxUkjR_c.js";import"./LabelWithHelp-BzCMv1X3.js";import"./index-DXWIZOJk.js";import"./index-krISk8b9.js";import"./index-DtTKNpP0.js";import"./icon.utils-XW2L0FSl.js";const Ba={component:l,title:"Tester/Select/Select",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},classNames:{table:{disable:!0}},defaultValue:{table:{disable:!0}},value:{table:{disable:!0}},placeholder:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(M),mapping:M},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},hidePlaceholder:{table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"},label:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},autoComplete:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},required:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}}},m="option1",c="option2",D="Ledetekst er obligatorisk",p="Ledetekst",sa=[o.jsx(l.Option,{value:m,children:"Test 1"},"option_1"),o.jsx(l.Option,{value:c,children:"Test 2"},"option_2")],r={label:p,children:sa},u={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("name","dummyNameForwardedFromRef")}},b={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"form123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),a=n.getByRole("combobox"),s=n.getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlid"),await t(a).toHaveAttribute("data-testid","123ID"),await t(s).toHaveClass("dummyClassname"),await t(s).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("form","form123")}},g={name:"With Custom ClassNames (FA3)",args:{...r,classNames:{container:"dummyClassname",label:"dummyClassname",selectContainer:"dummyClassnameFormContainer",errorMessage:"dummyClassname"},errorMessage:D},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),a=e.querySelector(`${d} > div`),s=n.getByText(p),Ze=e.querySelector(`${d} > div > div`),ea=e.querySelector("[id^=selectErrorId]>div");await t(a).toHaveClass("dummyClassname"),await t(s).toHaveClass("dummyClassname"),await t(Ze).toHaveClass("dummyClassnameFormContainer"),await t(ea).toHaveClass("dummyClassname")}},v={name:"Defaults Variant Medium (A1, A2 delvis, A3, FS-A2, B2)",args:{...r},argTypes:{label:{table:{disable:!1}},children:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${d} select`,focus:`${d} select`}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox",{name:p});await t(a).toBeInTheDocument(),await t(a).toBeEnabled(),await t(a).toHaveValue(""),await t(a).toHaveTextContent(na()),await t(a).toHaveAttribute("id"),await t(a.tagName).toBe("SELECT"),await t(a).not.toBeRequired(),await t(a).not.toHaveAttribute("aria-invalid"),await t(a).not.toHaveAttribute("aria-describedby");const s=e.querySelector("[id^=selectErrorId]");await t(s).toBeInTheDocument()}},h={name:"With Variant Large (A1)",args:{...r,variant:"large"},argTypes:{variant:{table:{disable:!1}}}},y={name:"With Variant Large And Long Text",args:{...r,hidePlaceholder:!0,variant:"large",children:[o.jsx(l.Option,{value:m,children:"En lang tekst som ikke skal synes bak åpne ikonet"},"option_1")]},argTypes:{variant:{table:{disable:!1}},children:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}},f={name:"With Disabled (B1, B6)",args:{...r,disabled:!0,value:m},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox");await t(a).toBeDisabled()}},x={name:"With Value",args:{...r,value:c},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox");await t(a).toHaveValue(c)}},w={name:"With DefaultValue",args:{...r,defaultValue:c},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox");await t(a).toHaveValue(c)}},q="Velg fra listen noe gøy",T={name:"With AutoComplete Name And Placeholder (A2 delvis, B1)",args:{...r,autoComplete:"given-name",name:"test_name",placeholder:q},argTypes:{autoComplete:{table:{disable:!1}},name:{table:{disable:!1}},placeholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),a=n.getByRole("combobox");await t(a).toHaveAttribute("autocomplete","given-name"),await t(a).toHaveAttribute("name","test_name");const s=n.getByText(q);await t(s).toBeInTheDocument(),await t(s.tagName).toBe("OPTION")}},S={name:"With HidePlaceholder (A2 delvis)",args:{...r,hidePlaceholder:!0},argTypes:{hidePlaceholder:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox");await t(a).not.toHaveValue("")}},A={name:"With Required (B1, B4)",args:{...r,required:!0},argTypes:{required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox");await t(a).toBeRequired()}},B={name:"With Required And Mark (B1, FS-A4 delvis)",args:{...r,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}}},H={name:"With ErrorMessage (A4 delvis, B5 delvis)",args:{...r,errorMessage:D},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${d} select`,focus:`${d} select`}},play:async({canvasElement:e})=>{const n=i(e),a=n.getByRole("combobox",{description:D}),s=n.getAllByRole("generic")[3];await t(s).toBeInTheDocument(),await t(a).toHaveAttribute("aria-invalid","true"),await t(a).toHaveAttribute("aria-describedby")}},C={name:"With Description (FS-A3)",args:{...r,description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByText("En liten beskrivelse tekst");await t(a).toBeInTheDocument()}},W={name:"With HideLabel (FS-A7)",args:{...r,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("combobox",{name:p});await t(a).toBeInTheDocument()}},N={name:"With HelpText (A1)",args:{...r,helpText:"Hjelpetekst"},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("button",{description:p});await t(a).toBeInTheDocument(),await ta.click(a)}},ra=e=>{const[n,a]=aa.useState("Tester events");return o.jsx(l,{...e,label:n,onFocus:s=>{a("Select har fått fokus"),e.onFocus&&e.onFocus(s)},onBlur:s=>{a("Select har blitt blurret"),e.onBlur&&e.onBlur(s)},onChange:s=>{a("Select har blitt klikket på"),e.onChange&&e.onChange(s)}})},E={render:ra,name:"With EventHandlers (A3)",args:{...r,onFocus:F(),onBlur:F(),onChange:F()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const s=i(n).getByRole("combobox");s.focus(),await V(()=>t(e.onFocus).toHaveBeenCalled()),await P.selectOptions(s,c),await V(()=>t(e.onChange).toHaveBeenCalled()),await P.tab(),await V(()=>t(e.onBlur).toHaveBeenCalled())}},k={name:"With onHelpToggle Event",args:{...r,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},R={args:{label:"Ledetekst",className:"textField150",defaultValue:m,children:[o.jsx(l.Option,{value:m,children:"Long input tekst"},"option_1"),o.jsx(l.Option,{value:c,children:"Very very very long inputtext"},"option_2")]},argTypes:{variant:{table:{disable:!1}},defaultValue:{table:{disable:!1}}}},O={args:{label:"Ledetekst",className:"textField150",placeholder:"Long placeholder text",children:[o.jsx(l.Option,{value:m,children:"Long input tekst"},"option_1"),o.jsx(l.Option,{value:c,children:"Very very very long inputtext"},"option_2")]},argTypes:{variant:{table:{disable:!1}},placeholder:{table:{disable:!1}}}},oa=()=>o.jsxs("div",{className:"flex gapS",children:[o.jsxs(l,{label:"Fruktsort",required:!0,children:[o.jsx(l.Option,{value:1,children:"Banan"}),o.jsx(l.Option,{value:2,children:"Eple"})]}),o.jsxs(l,{label:"Fruktsort",helpText:"Velg frukten du liker best.",required:!0,children:[o.jsx(l.Option,{value:1,children:"Banan"}),o.jsx(l.Option,{value:2,children:"Eple"})]})]}),L={render:oa};var j,I,_;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(I=u.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var $,G,z;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(z=(G=b.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
    await expect(selectNode).toHaveTextContent(getSelectPlaceholderDefault());
    await expect(selectNode).toHaveAttribute('id');
    await expect(selectNode.tagName).toBe('SELECT');
    await expect(selectNode).not.toBeRequired();
    await expect(selectNode).not.toHaveAttribute('aria-invalid');
    await expect(selectNode).not.toHaveAttribute('aria-describedby');
    const errorMessageContainer = canvasElement.querySelector('[id^=selectErrorId]');
    await expect(errorMessageContainer).toBeInTheDocument();
  }
} satisfies Story`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,oe,le;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,ce,de;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ue;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var be,ge,ve;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(ve=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var he,ye,fe;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(fe=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var xe,we,Te;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Se,Ae,Be;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:Be.source}}};var He,Ce,We;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
} satisfies Story`,...(We=(Ce=H.parameters)==null?void 0:Ce.docs)==null?void 0:We.source}}};var Ne,Ee,ke;C.parameters={...C.parameters,docs:{...(Ne=C.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(Ee=C.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};var Re,Oe,Le;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:Le.source}}};var Fe,Ve,De;N.parameters={...N.parameters,docs:{...(Fe=N.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(De=(Ve=N.parameters)==null?void 0:Ve.docs)==null?void 0:De.source}}};var Pe,Me,qe;E.parameters={...E.parameters,docs:{...(Pe=E.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(qe=(Me=E.parameters)==null?void 0:Me.docs)==null?void 0:qe.source}}};var je,Ie,_e;k.parameters={...k.parameters,docs:{...(je=k.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
} satisfies Story`,...(_e=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:_e.source}}};var $e,Ge,ze;R.parameters={...R.parameters,docs:{...($e=R.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
} satisfies Story`,...(ze=(Ge=R.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var Je,Ke,Qe;O.parameters={...O.parameters,docs:{...(Je=O.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
} satisfies Story`,...(Qe=(Ke=O.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ue,Xe,Ye;L.parameters={...L.parameters,docs:{...(Ue=L.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: TwoSelects
}`,...(Ye=(Xe=L.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};const Ha=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithVariantLarge","WithVariantLargeAndLongText","WithDisabled","WithValue","WithDefaultValue","WithAutoCompleteNameAndPlaceholder","WithHidePlaceholder","WithRequired","WithRequiredAndMark","WithErrorMessage","WithDescription","WithHideLabel","WithHelpText","WithEventHandlers","WithHelpToggleEvent","WithLongInput","WithLongPlaceholder","TwoSelectsOneWithHelpText"];export{v as Defaults,L as TwoSelectsOneWithHelpText,b as WithAttributes,T as WithAutoCompleteNameAndPlaceholder,g as WithCustomClassNames,w as WithDefaultValue,C as WithDescription,f as WithDisabled,H as WithErrorMessage,E as WithEventHandlers,N as WithHelpText,k as WithHelpToggleEvent,W as WithHideLabel,S as WithHidePlaceholder,R as WithLongInput,O as WithLongPlaceholder,u as WithRef,A as WithRequired,B as WithRequiredAndMark,x as WithValue,h as WithVariantLarge,y as WithVariantLargeAndLongText,Ha as __namedExportsOrder,Ba as default};
//# sourceMappingURL=Select.test.stories-DljyLZJm.js.map
