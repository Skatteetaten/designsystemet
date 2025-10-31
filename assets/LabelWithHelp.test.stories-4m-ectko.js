import{W as Z}from"./index-Bs2jIcy5.js";import{a as $}from"./storybook.testing.utils-CMs160i9.js";import{L as ee}from"./LabelWithHelp-dgWfzcXf.js";import{S as f}from"./icon.systems-CMWPGVc8.js";const{expect:n,fireEvent:ae,userEvent:te,within:i}=__STORYBOOK_MODULE_TEST__,ne={component:ee,title:"Tester/LabelWithHelp (intern)",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0}},description:{table:{disable:!0}},helpText:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(f),mapping:f},hideLabel:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},htmlFor:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},y="Kort hjelpetekst",X="Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",l="Ledetekst",s={children:l},o={name:"With Ref (FA1)",args:{...s,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByText(l);await n(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=i(e).getByText(l);await n(a).toHaveAttribute("id","htmlid"),await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","nb"),await n(a).toHaveAttribute("data-testid","123ID")}},d={name:"Default (FS-A1, FS-A2, FS-A4, FS-B1)",args:{...s},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByText(l);await n(a.tagName).toBe("LABEL")}},p={name:"With Description (FS-A3)",args:{...s,description:y},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByText(y);await n(a).toBeInTheDocument()}},m={name:"With ShowRequiredMark (FS-A4)",args:{...s,showRequiredMark:!0},argTypes:{showRequiredMark:{table:{disable:!1}}}},b={name:"With HideLabel (FS-A7)",args:{...s,description:y,helpText:X,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e),a=t.getByText(l),r=t.getByText(y),T=t.getByRole("button");await n(a).toBeInTheDocument(),await n(r).toBeInTheDocument(),await n(T).toBeInTheDocument()}},u={name:"With HelpText HelpSvgPath And TitleHelpSvg (FS-A1, FS-A5 delvis, FS-B2 delvis)",args:{...s,helpText:X,helpSvgPath:Z,titleHelpSvg:"Tooltip"},argTypes:{helpText:{table:{disable:!1}},helpSvgPath:{table:{disable:!1}},titleHelpSvg:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e),a=t.getByRole("button",{description:l});await n(a).toBeInTheDocument();const r=t.getByLabelText("Tooltip",{selector:"svg"});await n(r).toBeInTheDocument();const T=t.getByText(l);await n(a).toHaveAttribute("aria-describedby",T.id),await te.click(a)}},h={name:"With Long Children",args:{...s,children:$},argTypes:{children:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}}},g={name:"With onHelpToggle Event",args:{...s,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},v={name:"With Custom ClassNames (FA3)",args:{...s,classNames:{label:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"hjelp"},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e),a=t.getByText(l);await n(a).toHaveClass("dummyClassname"),await n(t.getByText("beskrivelse")).toHaveClass("dummyClassname"),await ae.click(t.getByRole("button"));const r=t.getByText("hjelp").parentElement;await n(r).toHaveClass("dummyClassname")}};var S,x,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLLabelElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
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
    const label = canvas.getByText(defaultChildrenText);
    await expect(label).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var B,H,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID'
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
    const label = canvas.getByText(defaultChildrenText);
    await expect(label).toHaveAttribute('id', 'htmlid');
    await expect(label).toHaveClass('dummyClassname');
    await expect(label).toHaveAttribute('lang', 'nb');
    await expect(label).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(A=(H=c.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var C,W,F;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Default (FS-A1, FS-A2, FS-A4, FS-B1)',
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const label = canvas.getByText(defaultChildrenText);
    await expect(label.tagName).toBe('LABEL');
  }
} satisfies Story`,...(F=(W=d.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var k,D,E;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'With Description (FS-A3)',
  args: {
    ...defaultArgs,
    description: defaultDescription
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
    const descriptionNode = canvas.getByText(defaultDescription);
    await expect(descriptionNode).toBeInTheDocument();
  }
} satisfies Story`,...(E=(D=p.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,N,R;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'With ShowRequiredMark (FS-A4)',
  args: {
    ...defaultArgs,
    showRequiredMark: true
  },
  argTypes: {
    showRequiredMark: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(R=(N=m.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var I,P,j;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With HideLabel (FS-A7)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    helpText: defaultHelpText,
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
    const label = canvas.getByText(defaultChildrenText);
    const descriptionNode = canvas.getByText(defaultDescription);
    const helpButtonNode = canvas.getByRole('button');
    await expect(label).toBeInTheDocument();
    await expect(descriptionNode).toBeInTheDocument();
    await expect(helpButtonNode).toBeInTheDocument();
  }
} satisfies Story`,...(j=(P=b.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var M,_,O;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'With HelpText HelpSvgPath And TitleHelpSvg (FS-A1, FS-A5 delvis, FS-B2 delvis)',
  args: {
    ...defaultArgs,
    helpText: defaultHelpText,
    helpSvgPath: WarningSVGpath,
    titleHelpSvg: 'Tooltip'
  },
  argTypes: {
    helpText: {
      table: {
        disable: false
      }
    },
    helpSvgPath: {
      table: {
        disable: false
      }
    },
    titleHelpSvg: {
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
      description: defaultChildrenText
    });
    await expect(helpButton).toBeInTheDocument();
    const svgNode = canvas.getByLabelText('Tooltip', {
      selector: 'svg'
    });
    await expect(svgNode).toBeInTheDocument();
    const label = canvas.getByText(defaultChildrenText);
    await expect(helpButton).toHaveAttribute('aria-describedby', label.id);
    await userEvent.click(helpButton);
  }
} satisfies Story`,...(O=(_=u.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var q,V,G;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'With Long Children',
  args: {
    ...defaultArgs,
    children: loremIpsumWithoutSpaces
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
      value: '--mobile'
    }
  }
} satisfies Story`,...(G=(V=h.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var K,z,U;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(z=g.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var Y,J,Q;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      label: 'dummyClassname',
      description: 'dummyClassname',
      helpText: 'dummyClassname'
    },
    description: 'beskrivelse',
    helpText: 'hjelp'
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
    const label = canvas.getByText(defaultChildrenText);
    await expect(label).toHaveClass('dummyClassname');
    await expect(canvas.getByText('beskrivelse')).toHaveClass('dummyClassname');
    await fireEvent.click(canvas.getByRole('button'));
    const helpText = canvas.getByText('hjelp').parentElement;
    await expect(helpText).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const se=["WithRef","WithAttributes","Defaults","WithDescription","WithShowRequiredMark","WithHideLabel","WithHelpTextSvgPathAndTitle","WithLongChildren","WithHelpToggleEvent","WithCustomClassNames"],ce=Object.freeze(Object.defineProperty({__proto__:null,Defaults:d,WithAttributes:c,WithCustomClassNames:v,WithDescription:p,WithHelpTextSvgPathAndTitle:u,WithHelpToggleEvent:g,WithHideLabel:b,WithLongChildren:h,WithRef:o,WithShowRequiredMark:m,__namedExportsOrder:se,default:ne},Symbol.toStringTag,{value:"Module"}));export{ce as L};
//# sourceMappingURL=LabelWithHelp.test.stories-4m-ectko.js.map
