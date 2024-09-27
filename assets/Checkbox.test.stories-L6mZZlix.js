import{j as ra}from"./jsx-runtime-Nms4Y4qS.js";import{r as ia}from"./index-BwDkhjyp.js";import{C as sa}from"./index-FK3RsA-s.js";import{w as r,e as n,f as oa,u as la,c as ca}from"./index-hUG6DWTw.js";import{w as i}from"./storybook.testing.utils-CMs160i9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CI44Z2h3.js";import"./DatePickerCalendar-CuGySpz0.js";import"./index-DMYlLpXe.js";import"./index-DcL_RvKM.js";import"./index-Cq8GVsVj.js";import"./LabelWithHelp-BmjIbcxG.js";import"./Help-CLr4Mr4j.js";import"./index-CCUfsLXI.js";import"./index-BdP0pRE8.js";const L=(a,t)=>async({canvasElement:e})=>{const l=r(e).getByRole("checkbox");await n(l).toBeInTheDocument(),await n(l).toHaveAttribute(a,t)},Ra={component:sa,title:"Tester/Checkbox",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0}},defaultChecked:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hideLabel:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},checked:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},required:{table:{disable:!0}},value:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onChange:{table:{disable:!0}}}},M="Checkbox",H="Du må lese og forstå innholdet for å gå videre",s={children:M},c={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:L("name","dummyNameForwardedFromRef")},d={name:"With Attributes (FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=r(a),e=t.getByRole("checkbox"),o=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("id","htmlid"),await n(o).toHaveClass("dummyClassname"),await n(o).toHaveAttribute("lang","nb"),await n(e).toHaveAttribute("data-testid","123ID"),await n(e).toHaveAttribute("form","123form")}},p={name:"Defaults (A1, B1)",args:{...s},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${i} label`,focus:`${i} input`,click:`${i} label`}},play:async({canvasElement:a})=>{const t=r(a),e=t.getByLabelText(M);await n(e).toBeInTheDocument(),await n(e.tagName).toBe("INPUT"),await n(e).not.toHaveAttribute("aria-invalid"),await n(e).not.toBeChecked(),await n(e).not.toBeRequired(),await n(e).toBeEnabled(),await n(e).not.toHaveAttribute("aria-describedby");const o=t.getAllByRole("generic")[6];await n(o).toBeInTheDocument()}},u={name:"With Description (A1)",args:{...s,description:"En beskrivelse av punktet"},argTypes:{description:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${i} label`,focus:`${i} input`,click:`${i} label`}},play:async({canvasElement:a})=>{const e=r(a).getByText("En beskrivelse av punktet");await n(e).toBeInTheDocument()}},b={name:"With Description And Long Text (A1)",args:{...s,children:"Får ekstra lang reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning eller annen fritidsordning",description:"Litt rart å ha en beskrivende tekst rett under en lang tekst, men sånn har det blitt"},argTypes:{description:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},m={name:"With Description And Disabled (A1)",args:{...s,description:"En beskrivelse av punktet",disabled:!0},argTypes:{description:{table:{disable:!1}},disabled:{table:{disable:!1}}}},g={name:"With Long Text (A2)",args:{...s,children:"Får ekstra lang reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning eller annen fritidsordning"},argTypes:{children:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},h={name:"With Long Text And Breaking (A2)",args:{...s,children:"Fårekstrareiseveitiljobbpågrunnavleveringtilbarnehageellerskolefritidsordning"},argTypes:{children:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},v={name:"With HideLabel (A2)",args:{...s,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a).getByLabelText(M);await n(e).toBeInTheDocument()}},y={name:"With Checked (A1, A3)",args:{...s,checked:!0},argTypes:{checked:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${i} label`,focus:`${i} input`,click:`${i} label`}},play:async({canvasElement:a})=>{const e=r(a).getByRole("checkbox");await n(e).toBeChecked(),await n(e).not.toHaveAttribute("aria-invalid")}},f={name:"With Disabled (A1, A5 delvis, B2)",args:{...s,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a).getByRole("checkbox");await n(e).toBeDisabled()}},k={name:"With Disabled And Checked (A1, A5 delvis, B2)",args:{...s,checked:!0,disabled:!0},argTypes:{checked:{table:{disable:!1}},disabled:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a).getByRole("checkbox");await n(e).toBeChecked(),await n(e).toBeDisabled()}},w={name:"With Required (B3)",args:{...s,required:!0},argTypes:{required:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a).getByRole("checkbox");await n(e).toBeRequired()}},A={name:"With Required And Mark (A1, B3)",args:{...s,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a).getByRole("checkbox");await n(e).toBeRequired()}},x={name:"With Required And Checked (B3)",args:{...s,checked:!0,required:!0},argTypes:{checked:{table:{disable:!1}},required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=r(a).getByRole("checkbox");await n(e).toBeChecked(),await n(e).not.toBeRequired()}},B={name:"With ErrorMessage (A1, B4)",args:{...s,errorMessage:H},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${i} label`,focus:`${i} input`,click:`${i} label`}},play:async({canvasElement:a})=>{const t=r(a),e=t.getAllByRole("generic")[6];await n(e).toHaveAttribute("id");const o=t.getByRole("checkbox",{description:H});await n(o).toHaveAttribute("aria-invalid","true")}},W={name:"With Disabled And Required (A1)",args:{...s,disabled:!0,required:!0,showRequiredMark:!0},argTypes:{disabled:{table:{disable:!1}},required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a).getByRole("checkbox");await n(e).toBeDisabled(),await n(e).toBeRequired()}},R={name:"With Error And Required (A1)",args:{...s,errorMessage:"Feilmelding",required:!0,showRequiredMark:!0},argTypes:{errorMessage:{table:{disable:!1}},required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${i} label`,focus:`${i} input`}},play:async({canvasElement:a})=>{const e=r(a).getByRole("checkbox");await n(e).toHaveAttribute("aria-invalid","true"),await n(e).toBeRequired()}},N={name:"With Checked And Required (B3)",args:{...s,checked:!0,required:!0},argTypes:{checked:{table:{disable:!1}},required:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a).getByRole("checkbox");await n(e).toBeChecked(),await n(e).not.toBeRequired()}},T={name:"With AriaDescribedby (B1)",args:{...s,ariaDescribedby:"testID"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=r(a).getByRole("checkbox");await n(e).toHaveAttribute("aria-describedby"),await n(e).toHaveAttribute("aria-describedby",n.stringMatching("testID"))}},C={name:"With Value",args:{...s,value:"test_value_checkbox"},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:L("value","test_value_checkbox")},E={name:"With DefaultChecked",args:{...s,defaultChecked:!0},argTypes:{defaultChecked:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=r(a).getByRole("checkbox");await n(e).toBeChecked()}},q={name:"With Name",args:{...s,name:"test_name_checkbox"},argTypes:{name:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:L("name","test_name_checkbox")},da=a=>{const[t,e]=ia.useState("Checkbox");return ra.jsx(sa,{...a,onChange:o=>{e("Checkbox har blitt klikket på"),a.onChange&&a.onChange(o)},children:t})},S={render:da,name:"With EventHandlers",args:{...s,onChange:oa()},parameters:{imageSnapshot:{disable:!0}},play:async({args:a,canvasElement:t})=>{const o=r(t).getByRole("checkbox");await la.click(o),await ca(()=>n(a.onChange).toHaveBeenCalled())}},D={name:"With Custom ClassNames (FA3)",args:{...s,classNames:{label:"dummyClassname",errorMessage:"dummyClassname"},errorMessage:H},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:a})=>{var l;const e=r(a).getByText(M),o=a.querySelector("[id^=checkboxErrorId]>div");await n((l=e==null?void 0:e.parentElement)==null?void 0:l.parentElement).toHaveClass("dummyClassname"),await n(o).toHaveClass("dummyClassname")}};var $,F,I;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(F=c.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var P,_,V;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(_=d.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var j,U,O;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(U=p.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var z,G,J;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,ne,te;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,re,ie;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,le,ce;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,pe,ue;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var be,me,ge;f.parameters={...f.parameters,docs:{...(be=f.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(me=f.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,ve,ye;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var fe,ke,we;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(we=(ke=w.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};var Ae,xe,Be;A.parameters={...A.parameters,docs:{...(Ae=A.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var We,Re,Ne;x.parameters={...x.parameters,docs:{...(We=x.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ne=(Re=x.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source}}};var Te,Ce,Ee;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ee=(Ce=B.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var qe,Se,De;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(De=(Se=W.parameters)==null?void 0:Se.docs)==null?void 0:De.source}}};var Me,He,Le;R.parameters={...R.parameters,docs:{...(Me=R.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(He=R.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};var $e,Fe,Ie;N.parameters={...N.parameters,docs:{...($e=N.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(Fe=N.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.source}}};var Pe,_e,Ve;T.parameters={...T.parameters,docs:{...(Pe=T.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ve=(_e=T.parameters)==null?void 0:_e.docs)==null?void 0:Ve.source}}};var je,Ue,Oe;C.parameters={...C.parameters,docs:{...(je=C.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
} satisfies Story`,...(Oe=(Ue=C.parameters)==null?void 0:Ue.docs)==null?void 0:Oe.source}}};var ze,Ge,Je;E.parameters={...E.parameters,docs:{...(ze=E.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
} satisfies Story`,...(Je=(Ge=E.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Ke,Qe,Xe;q.parameters={...q.parameters,docs:{...(Ke=q.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(Xe=(Qe=q.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ye,Ze,ea;S.parameters={...S.parameters,docs:{...(Ye=S.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers',
  args: {
    ...defaultArgs,
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
    const inputNode = canvas.getByRole('checkbox');
    await userEvent.click(inputNode);
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
  }
} satisfies Story`,...(ea=(Ze=S.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,na,ta;D.parameters={...D.parameters,docs:{...(aa=D.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
} satisfies Story`,...(ta=(na=D.parameters)==null?void 0:na.docs)==null?void 0:ta.source}}};const Na=["WithRef","WithAttributes","Defaults","WithDescription","WithDescriptionAndLongText","WithDescriptionAndDisabled","WithLongText","WithLongTextAndBreaking","WithHideLabel","WithChecked","WithDisabled","WithDisabledAndChecked","WithRequired","WithRequiredAndMark","WithRequiredAndChecked","WithError","WithDisabledAndRequired","WithErrorAndRequired","WithCheckedAndRequired","WithAriaDescribedby","WithValue","WithDefaultChecked","WithName","WithEventHandlers","WithCustomClassNames"];export{p as Defaults,T as WithAriaDescribedby,d as WithAttributes,y as WithChecked,N as WithCheckedAndRequired,D as WithCustomClassNames,E as WithDefaultChecked,u as WithDescription,m as WithDescriptionAndDisabled,b as WithDescriptionAndLongText,f as WithDisabled,k as WithDisabledAndChecked,W as WithDisabledAndRequired,B as WithError,R as WithErrorAndRequired,S as WithEventHandlers,v as WithHideLabel,g as WithLongText,h as WithLongTextAndBreaking,q as WithName,c as WithRef,w as WithRequired,x as WithRequiredAndChecked,A as WithRequiredAndMark,C as WithValue,Na as __namedExportsOrder,Ra as default};
//# sourceMappingURL=Checkbox.test.stories-L6mZZlix.js.map
