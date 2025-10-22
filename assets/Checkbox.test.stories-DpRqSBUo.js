import{r as ra,j as ia}from"./iframe-BoxHncFg.js";import{C as sa}from"./index-d7h_eiwz.js";const{expect:n,fn:M,userEvent:oa,waitFor:ca,within:i}=__STORYBOOK_MODULE_TEST__,F=(a,t)=>async({canvasElement:e})=>{const o=i(e).getByRole("checkbox");await n(o).toBeInTheDocument(),await n(o).toHaveAttribute(a,t)},la={component:sa,title:"Tester/Checkbox",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0}},defaultChecked:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},hideLabel:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},checked:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},required:{table:{disable:!0}},value:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onFocus:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},D="Checkbox",H="Du må lese og forstå innholdet for å gå videre",s={children:D},c={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.name="dummyNameForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:F("name","dummyNameForwardedFromRef")},l={name:"With Attributes (FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const t=i(a),e=t.getByRole("checkbox"),r=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("id","htmlid"),await n(r).toHaveClass("dummyClassname"),await n(r).toHaveAttribute("lang","nb"),await n(e).toHaveAttribute("data-testid","123ID"),await n(e).toHaveAttribute("form","123form")}},d={name:"Defaults (A1, B1)",args:{...s},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:a})=>{const t=i(a),e=t.getByLabelText(D);await n(e).toBeInTheDocument(),await n(e.tagName).toBe("INPUT"),await n(e).not.toHaveAttribute("aria-invalid"),await n(e).not.toBeChecked(),await n(e).not.toBeRequired(),await n(e).toBeEnabled(),await n(e).not.toHaveAttribute("aria-describedby");const r=t.getAllByRole("generic")[6];await n(r).toBeInTheDocument()}},u={name:"With Description (A1)",args:{...s,description:"En beskrivelse av punktet"},argTypes:{description:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:a})=>{const e=i(a).getByText("En beskrivelse av punktet");await n(e).toBeInTheDocument()}},p={name:"With Description And Long Text (A1)",args:{...s,children:"Får ekstra lang reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning eller annen fritidsordning",description:"Litt rart å ha en beskrivende tekst rett under en lang tekst, men sånn har det blitt"},argTypes:{description:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},b={name:"With Description And Disabled (A1)",args:{...s,description:"En beskrivelse av punktet",disabled:!0},argTypes:{description:{table:{disable:!1}},disabled:{table:{disable:!1}}}},m={name:"With Long Text (A2)",args:{...s,children:"Får ekstra lang reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning eller annen fritidsordning"},argTypes:{children:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},h={name:"With Long Text And Breaking (A2)",args:{...s,children:"Fårekstrareiseveitiljobbpågrunnavleveringtilbarnehageellerskolefritidsordning"},argTypes:{children:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},g={name:"With HideLabel (A2)",args:{...s,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByLabelText(D);await n(e).toBeInTheDocument()}},v={name:"With Checked (A1, A3)",args:{...s,checked:!0},argTypes:{checked:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeChecked(),await n(e).not.toHaveAttribute("aria-invalid")}},y={name:"With Disabled (A1, A5 delvis, B2)",args:{...s,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeDisabled()}},f={name:"With Disabled And Checked (A1, A5 delvis, B2)",args:{...s,checked:!0,disabled:!0},argTypes:{checked:{table:{disable:!1}},disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeChecked(),await n(e).toBeDisabled()}},k={name:"With Required (B3)",args:{...s,required:!0},argTypes:{required:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeRequired()}},A={name:"With Required And Mark (A1, B3)",args:{...s,required:!0,showRequiredMark:!0},argTypes:{required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeRequired()}},w={name:"With Required And Checked (B3)",args:{...s,checked:!0,required:!0},argTypes:{checked:{table:{disable:!1}},required:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeChecked(),await n(e).not.toBeRequired()}},x={name:"With ErrorMessage (A1, B4)",args:{...s,errorMessage:H},argTypes:{errorMessage:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:a})=>{const t=i(a),e=t.getAllByRole("generic")[6];await n(e).toHaveAttribute("id");const r=t.getByRole("checkbox",{description:H});await n(r).toHaveAttribute("aria-invalid","true")}},B={name:"With Disabled And Required (A1)",args:{...s,disabled:!0,required:!0,showRequiredMark:!0},argTypes:{disabled:{table:{disable:!1}},required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeDisabled(),await n(e).toBeRequired()}},S={name:"With Error And Required (A1)",args:{...s,errorMessage:"Feilmelding",required:!0,showRequiredMark:!0},argTypes:{errorMessage:{table:{disable:!1}},required:{table:{disable:!1}},showRequiredMark:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toHaveAttribute("aria-invalid","true"),await n(e).toBeRequired()}},N={name:"With Checked And Required (B3)",args:{...s,checked:!0,required:!0},argTypes:{checked:{table:{disable:!1}},required:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeChecked(),await n(e).not.toBeRequired()}},R={name:"With AriaDescribedby (B1)",args:{...s,ariaDescribedby:"testID"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toHaveAttribute("aria-describedby"),await n(e).toHaveAttribute("aria-describedby",n.stringMatching("testID"))}},W={name:"With Value",args:{...s,value:"test_value_checkbox"},argTypes:{value:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:F("value","test_value_checkbox")},T={name:"With DefaultChecked",args:{...s,defaultChecked:!0},argTypes:{defaultChecked:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("checkbox");await n(e).toBeChecked()}},C={name:"With Name",args:{...s,name:"test_name_checkbox"},argTypes:{name:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:F("name","test_name_checkbox")},da=a=>{const[t,e]=ra.useState("Checkbox");return ia.jsx(sa,{...a,onBlur:r=>{e("Checkbox har mistet fokus"),a.onBlur&&a.onBlur(r)},onChange:r=>{e("Checkbox har blitt klikket på"),a.onChange&&a.onChange(r)},onFocus:r=>{e("Checkbox har fått fokus"),a.onFocus&&a.onFocus(r)},children:t})},q={render:da,name:"With EventHandlers",args:{...s,onBlur:M(),onChange:M(),onFocus:M()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:a,canvasElement:t})=>{const r=i(t).getByRole("checkbox");await oa.click(r),await ca(()=>n(a.onChange).toHaveBeenCalled()),r.focus(),await n(r).toHaveFocus(),r.blur(),await n(r).not.toHaveFocus()}},E={name:"With Custom ClassNames (FA3)",args:{...s,classNames:{label:"dummyClassname",errorMessage:"dummyClassname"},errorMessage:H},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:a})=>{var o;const e=i(a).getByText(D),r=a.querySelector("[id^=checkboxErrorId]>div");await n((o=e==null?void 0:e.parentElement)==null?void 0:o.parentElement).toHaveClass("dummyClassname"),await n(r).toHaveClass("dummyClassname")}};var L,_,I;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(_=c.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var P,j,O;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(j=l.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var V,U,z;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
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
} satisfies Story`,...(z=(U=d.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var K,Y,G;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const description = canvas.getByText('En beskrivelse av punktet');
    await expect(description).toBeInTheDocument();
  }
} satisfies Story`,...(G=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,Q,X;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,ne,te;m.parameters={...m.parameters,docs:{...(ae=m.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,re,ie;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,ce,le;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,pe;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
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
} satisfies Story`,...(pe=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var be,me,he;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeDisabled();
  }
} satisfies Story`,...(he=(me=y.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ge,ve,ye;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
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
} satisfies Story`,...(ye=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var fe,ke,Ae;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ae=(ke=k.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var we,xe,Be;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var Se,Ne,Re;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(Re=(Ne=w.parameters)==null?void 0:Ne.docs)==null?void 0:Re.source}}};var We,Te,Ce;x.parameters={...x.parameters,docs:{...(We=x.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
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
} satisfies Story`,...(Ce=(Te=x.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var qe,Ee,De;B.parameters={...B.parameters,docs:{...(qe=B.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(De=(Ee=B.parameters)==null?void 0:Ee.docs)==null?void 0:De.source}}};var Me,He,Fe;S.parameters={...S.parameters,docs:{...(Me=S.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
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
} satisfies Story`,...(Fe=(He=S.parameters)==null?void 0:He.docs)==null?void 0:Fe.source}}};var Le,_e,Ie;N.parameters={...N.parameters,docs:{...(Le=N.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(_e=N.parameters)==null?void 0:_e.docs)==null?void 0:Ie.source}}};var Pe,je,Oe;R.parameters={...R.parameters,docs:{...(Pe=R.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Oe=(je=R.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};var Ve,Ue,ze;W.parameters={...W.parameters,docs:{...(Ve=W.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(ze=(Ue=W.parameters)==null?void 0:Ue.docs)==null?void 0:ze.source}}};var Ke,Ye,Ge;T.parameters={...T.parameters,docs:{...(Ke=T.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ge=(Ye=T.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.source}}};var Je,Qe,Xe;C.parameters={...C.parameters,docs:{...(Je=C.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
} satisfies Story`,...(Xe=(Qe=C.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,$e,ea;q.parameters={...q.parameters,docs:{...(Ze=q.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
} satisfies Story`,...(ea=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:ea.source}}};var aa,na,ta;E.parameters={...E.parameters,docs:{...(aa=E.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
} satisfies Story`,...(ta=(na=E.parameters)==null?void 0:na.docs)==null?void 0:ta.source}}};const ua=["WithRef","WithAttributes","Defaults","WithDescription","WithDescriptionAndLongText","WithDescriptionAndDisabled","WithLongText","WithLongTextAndBreaking","WithHideLabel","WithChecked","WithDisabled","WithDisabledAndChecked","WithRequired","WithRequiredAndMark","WithRequiredAndChecked","WithError","WithDisabledAndRequired","WithErrorAndRequired","WithCheckedAndRequired","WithAriaDescribedby","WithValue","WithDefaultChecked","WithName","WithEventHandlers","WithCustomClassNames"],ma=Object.freeze(Object.defineProperty({__proto__:null,Defaults:d,WithAriaDescribedby:R,WithAttributes:l,WithChecked:v,WithCheckedAndRequired:N,WithCustomClassNames:E,WithDefaultChecked:T,WithDescription:u,WithDescriptionAndDisabled:b,WithDescriptionAndLongText:p,WithDisabled:y,WithDisabledAndChecked:f,WithDisabledAndRequired:B,WithError:x,WithErrorAndRequired:S,WithEventHandlers:q,WithHideLabel:g,WithLongText:m,WithLongTextAndBreaking:h,WithName:C,WithRef:c,WithRequired:k,WithRequiredAndChecked:w,WithRequiredAndMark:A,WithValue:W,__namedExportsOrder:ua,default:la},Symbol.toStringTag,{value:"Module"}));export{ma as C};
//# sourceMappingURL=Checkbox.test.stories-DpRqSBUo.js.map
