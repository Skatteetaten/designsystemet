import{j as ia}from"./jsx-runtime-BYYWji4R.js";import{r as oa}from"./index-ClcD9ViR.js";import{f as M,w as i,e as n,u as la,b as ca}from"./index-DIxTUSTt.js";import{C as ra}from"./index-Sqvq7mYU.js";import{w as o}from"./storybook.testing.utils-CMs160i9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D9wdQ6Rv.js";import"./DatePickerCalendar-CdhpCad8.js";import"./index-DYo2YWtE.js";import"./index-BomPkCop.js";import"./index-C176R4Vg.js";import"./LabelWithHelp-Ck3epTxf.js";import"./Help-qKV-_woo.js";import"./index--gfV2u6P.js";import"./index-DeA6s3pl.js";const L=(a,t)=>async({canvasElement:e})=>{const l=i(e).getByRole("checkbox");await n(l).toBeInTheDocument(),await n(l).toHaveAttribute(a,t)},Wa={component:ra,title:"Tester/Checkbox",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0}},defaultChecked:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hideLabel:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},checked:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},required:{table:{disable:!0}},value:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}}}},H="Checkbox",F="Du må lese og forstå innholdet for å gå videre",s={children:H},c={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:L("name","dummyNameForwardedFromRef")},d={name:"With Attributes (FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=i(a),e=t.getByRole("checkbox"),r=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("id","htmlid"),await n(r).toHaveClass("dummyClassname"),await n(r).toHaveAttribute("lang","nb"),await n(e).toHaveAttribute("data-testid","123ID"),await n(e).toHaveAttribute("form","123form")}},u={name:"Defaults (A1, B1)",args:{...s},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${o} label`,focus:`${o} input`,click:`${o} label`}},play:async({canvasElement:a})=>{const t=i(a),e=t.getByLabelText(H);await n(e).toBeInTheDocument(),await n(e.tagName).toBe("INPUT"),await n(e).not.toHaveAttribute("aria-invalid"),await n(e).not.toBeChecked(),await n(e).not.toBeRequired(),await n(e).toBeEnabled(),await n(e).not.toHaveAttribute("aria-describedby");const r=t.getAllByRole("generic")[6];await n(r).toBeInTheDocument()}},p={name:"With Description (A1)",args:{...s,description:"En beskrivelse av punktet"},argTypes:{description:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${o} label`,focus:`${o} input`,click:`${o} label`}},play:async({canvasElement:a})=>{const e=i(a).getByText("En beskrivelse av punktet");await n(e).toBeInTheDocument()}},b={name:"With Description And Long Text (A1)",args:{...s,children:"Får ekstra lang reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning eller annen fritidsordning",description:"Litt rart å ha en beskrivende tekst rett under en lang tekst, men sånn har det blitt"},argTypes:{description:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},m={name:"With Description And Disabled (A1)",args:{...s,description:"En beskrivelse av punktet",disabled:!0},argTypes:{description:{table:{disable:!1}},disabled:{table:{disable:!1}}}},g={name:"With Long Text (A2)",args:{...s,children:"Får ekstra lang reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning eller annen fritidsordning"},argTypes:{children:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},h={name:"With Long Text And Breaking (A2)",args:{...s,children:"Fårekstrareiseveitiljobbpågrunnavleveringtilbarnehageellerskolefritidsordning"},argTypes:{children:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},v={name:"With HideLabel (A2)",args:{...s,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByLabelText(H);await n(e).toBeInTheDocument()}},y={name:"With Checked (A1, A3)",args:{...s,checked:!0},argTypes:{checked:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${o} label`,focus:`${o} input`,click:`${o} label`}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeChecked(),await n(e).not.toHaveAttribute("aria-invalid")}},f={name:"With Disabled (A1, A5 delvis, B2)",args:{...s,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeDisabled()}},k={name:"With Disabled And Checked (A1, A5 delvis, B2)",args:{...s,checked:!0,disabled:!0},argTypes:{checked:{table:{disable:!1}},disabled:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeChecked(),await n(e).toBeDisabled()}},w={name:"With Required (B3)",args:{...s,required:!0},argTypes:{required:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeRequired()}},A={name:"With Required And Mark (A1, B3)",args:{...s,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeRequired()}},x={name:"With Required And Checked (B3)",args:{...s,checked:!0,required:!0},argTypes:{checked:{table:{disable:!1}},required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeChecked(),await n(e).not.toBeRequired()}},B={name:"With ErrorMessage (A1, B4)",args:{...s,errorMessage:F},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${o} label`,focus:`${o} input`,click:`${o} label`}},play:async({canvasElement:a})=>{const t=i(a),e=t.getAllByRole("generic")[6];await n(e).toHaveAttribute("id");const r=t.getByRole("checkbox",{description:F});await n(r).toHaveAttribute("aria-invalid","true")}},N={name:"With Disabled And Required (A1)",args:{...s,disabled:!0,required:!0,showRequiredMark:!0},argTypes:{disabled:{table:{disable:!1}},required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeDisabled(),await n(e).toBeRequired()}},W={name:"With Error And Required (A1)",args:{...s,errorMessage:"Feilmelding",required:!0,showRequiredMark:!0},argTypes:{errorMessage:{table:{disable:!1}},required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${o} label`,focus:`${o} input`}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toHaveAttribute("aria-invalid","true"),await n(e).toBeRequired()}},R={name:"With Checked And Required (B3)",args:{...s,checked:!0,required:!0},argTypes:{checked:{table:{disable:!1}},required:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeChecked(),await n(e).not.toBeRequired()}},T={name:"With AriaDescribedby (B1)",args:{...s,ariaDescribedby:"testID"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toHaveAttribute("aria-describedby"),await n(e).toHaveAttribute("aria-describedby",n.stringMatching("testID"))}},C={name:"With Value",args:{...s,value:"test_value_checkbox"},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:L("value","test_value_checkbox")},q={name:"With DefaultChecked",args:{...s,defaultChecked:!0},argTypes:{defaultChecked:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeChecked()}},S={name:"With Name",args:{...s,name:"test_name_checkbox"},argTypes:{name:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:L("name","test_name_checkbox")},da=a=>{const[t,e]=oa.useState("Checkbox");return ia.jsx(ra,{...a,onBlur:r=>{e("Checkbox har mistet fokus"),a.onBlur&&a.onBlur(r)},onChange:r=>{e("Checkbox har blitt klikket på"),a.onChange&&a.onChange(r)},onFocus:r=>{e("Checkbox har fått fokus"),a.onFocus&&a.onFocus(r)},children:t})},E={render:da,name:"With EventHandlers",args:{...s,onBlur:M(),onChange:M(),onFocus:M()},parameters:{imageSnapshot:{disable:!0}},play:async({args:a,canvasElement:t})=>{const r=i(t).getByRole("checkbox");await la.click(r),await ca(()=>n(a.onChange).toHaveBeenCalled()),r.focus(),await n(r).toHaveFocus(),r.blur(),await n(r).not.toHaveFocus()}},D={name:"With Custom ClassNames (FA3)",args:{...s,classNames:{label:"dummyClassname",errorMessage:"dummyClassname"},errorMessage:F},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:a})=>{var l;const e=i(a).getByText(H),r=a.querySelector("[id^=checkboxErrorId]>div");await n((l=e==null?void 0:e.parentElement)==null?void 0:l.parentElement).toHaveClass("dummyClassname"),await n(r).toHaveClass("dummyClassname")}};var $,I,P;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: verifyAttribute('name', 'dummyNameForwardedFromRef')
} satisfies Story`,...(P=(I=c.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var _,V,j;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(j=(V=d.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var U,O,z;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
      hover: \`\${wrapper} label\`,
      focus: \`\${wrapper} input\`,
      click: \`\${wrapper} label\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByLabelText(defaultLabelText);
    await expect(inputNode).toBeInTheDocument();
    await expect(inputNode.tagName).toBe('INPUT');
    await expect(inputNode).not.toHaveAttribute('aria-invalid');
    await expect(inputNode).not.toBeChecked();
    await expect(inputNode).not.toBeRequired();
    await expect(inputNode).toBeEnabled();
    await expect(inputNode).not.toHaveAttribute('aria-describedby');
    const errorMessage = canvas.getAllByRole('generic')[6];
    await expect(errorMessage).toBeInTheDocument();
  }
} satisfies Story`,...(z=(O=u.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
      hover: \`\${wrapper} label\`,
      focus: \`\${wrapper} input\`,
      click: \`\${wrapper} label\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const description = canvas.getByText('En beskrivelse av punktet');
    await expect(description).toBeInTheDocument();
  }
} satisfies Story`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,se;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(se=(te=g.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var re,ie,oe;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(oe=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,ce,de;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,be;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
      hover: \`\${wrapper} label\`,
      focus: \`\${wrapper} input\`,
      click: \`\${wrapper} label\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeChecked();
    await expect(inputNode).not.toHaveAttribute('aria-invalid');
  }
} satisfies Story`,...(be=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var me,ge,he;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeDisabled();
  }
} satisfies Story`,...(he=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,ye,fe;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeChecked();
    await expect(inputNode).toBeDisabled();
  }
} satisfies Story`,...(fe=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var ke,we,Ae;w.parameters={...w.parameters,docs:{...(ke=w.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ae=(we=w.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};var xe,Be,Ne;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ne=(Be=A.parameters)==null?void 0:Be.docs)==null?void 0:Ne.source}}};var We,Re,Te;x.parameters={...x.parameters,docs:{...(We=x.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
    await expect(inputNode).not.toBeRequired();
  }
} satisfies Story`,...(Te=(Re=x.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var Ce,qe,Se;B.parameters={...B.parameters,docs:{...(Ce=B.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
      hover: \`\${wrapper} label\`,
      focus: \`\${wrapper} input\`,
      click: \`\${wrapper} label\`
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
} satisfies Story`,...(Se=(qe=B.parameters)==null?void 0:qe.docs)==null?void 0:Se.source}}};var Ee,De,He;N.parameters={...N.parameters,docs:{...(Ee=N.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(He=(De=N.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var Me,Fe,Le;W.parameters={...W.parameters,docs:{...(Me=W.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
      hover: \`\${wrapper} label\`,
      focus: \`\${wrapper} input\`
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
} satisfies Story`,...(Le=(Fe=W.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};var $e,Ie,Pe;R.parameters={...R.parameters,docs:{...($e=R.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  name: 'With Checked And Required (B3)',
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeChecked();
    await expect(inputNode).not.toBeRequired();
  }
} satisfies Story`,...(Pe=(Ie=R.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var _e,Ve,je;T.parameters={...T.parameters,docs:{...(_e=T.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(je=(Ve=T.parameters)==null?void 0:Ve.docs)==null?void 0:je.source}}};var Ue,Oe,ze;C.parameters={...C.parameters,docs:{...(Ue=C.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: verifyAttribute('value', 'test_value_checkbox')
} satisfies Story`,...(ze=(Oe=C.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var Ge,Je,Ke;q.parameters={...q.parameters,docs:{...(Ge=q.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeChecked();
  }
} satisfies Story`,...(Ke=(Je=q.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Xe,Ye;S.parameters={...S.parameters,docs:{...(Qe=S.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: verifyAttribute('name', 'test_name_checkbox')
} satisfies Story`,...(Ye=(Xe=S.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,ea,aa;E.parameters={...E.parameters,docs:{...(Ze=E.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
} satisfies Story`,...(aa=(ea=E.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var na,ta,sa;D.parameters={...D.parameters,docs:{...(na=D.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
} satisfies Story`,...(sa=(ta=D.parameters)==null?void 0:ta.docs)==null?void 0:sa.source}}};const Ra=["WithRef","WithAttributes","Defaults","WithDescription","WithDescriptionAndLongText","WithDescriptionAndDisabled","WithLongText","WithLongTextAndBreaking","WithHideLabel","WithChecked","WithDisabled","WithDisabledAndChecked","WithRequired","WithRequiredAndMark","WithRequiredAndChecked","WithError","WithDisabledAndRequired","WithErrorAndRequired","WithCheckedAndRequired","WithAriaDescribedby","WithValue","WithDefaultChecked","WithName","WithEventHandlers","WithCustomClassNames"];export{u as Defaults,T as WithAriaDescribedby,d as WithAttributes,y as WithChecked,R as WithCheckedAndRequired,D as WithCustomClassNames,q as WithDefaultChecked,p as WithDescription,m as WithDescriptionAndDisabled,b as WithDescriptionAndLongText,f as WithDisabled,k as WithDisabledAndChecked,N as WithDisabledAndRequired,B as WithError,W as WithErrorAndRequired,E as WithEventHandlers,v as WithHideLabel,g as WithLongText,h as WithLongTextAndBreaking,S as WithName,c as WithRef,w as WithRequired,x as WithRequiredAndChecked,A as WithRequiredAndMark,C as WithValue,Ra as __namedExportsOrder,Wa as default};
//# sourceMappingURL=Checkbox.test.stories-DNtBcn0x.js.map
