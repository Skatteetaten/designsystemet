import{W as x}from"./index-Di_7ammq.js";import{a as w}from"./storybook.testing.utils-BgHZnMzD.js";import{L as B}from"./LabelWithHelp-By58SB7B.js";import{S as f}from"./icon.systems-pjRjKMCZ.js";const{expect:n,fireEvent:H,userEvent:A,within:i}=__STORYBOOK_MODULE_TEST__,C={component:B,title:"Tester/LabelWithHelp (intern)",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0}},description:{table:{disable:!0}},helpText:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(f),mapping:f},hideLabel:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},htmlFor:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},y="Kort hjelpetekst",S="Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",l="Ledetekst",s={children:l},o={name:"With Ref (FA1)",args:{...s,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByText(l);await n(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=i(e).getByText(l);await n(a).toHaveAttribute("id","htmlid"),await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","nb"),await n(a).toHaveAttribute("data-testid","123ID")}},d={name:"Default (FS-A1, FS-A2, FS-A4, FS-B1)",args:{...s},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByText(l);await n(a.tagName).toBe("LABEL")}},p={name:"With Description (FS-A3)",args:{...s,description:y},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByText(y);await n(a).toBeInTheDocument()}},m={name:"With ShowRequiredMark (FS-A4)",args:{...s,showRequiredMark:!0},argTypes:{showRequiredMark:{table:{disable:!1}}}},b={name:"With HideLabel (FS-A7)",args:{...s,description:y,helpText:S,hideLabel:!0},argTypes:{hideLabel:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e),a=t.getByText(l),r=t.getByText(y),T=t.getByRole("button");await n(a).toBeInTheDocument(),await n(r).toBeInTheDocument(),await n(T).toBeInTheDocument()}},u={name:"With HelpText HelpSvgPath And TitleHelpSvg (FS-A1, FS-A5 delvis, FS-B2 delvis)",args:{...s,helpText:S,helpSvgPath:x,titleHelpSvg:"Tooltip"},argTypes:{helpText:{table:{disable:!1}},helpSvgPath:{table:{disable:!1}},titleHelpSvg:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e),a=t.getByRole("button",{description:l});await n(a).toBeInTheDocument();const r=t.getByLabelText("Tooltip",{selector:"svg"});await n(r).toBeInTheDocument();const T=t.getByText(l);await n(a).toHaveAttribute("aria-describedby",T.id),await A.click(a)}},h={name:"With Long Children",args:{...s,children:w},argTypes:{children:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}}},g={name:"With onHelpToggle Event",args:{...s,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},v={name:"With Custom ClassNames (FA3)",args:{...s,classNames:{label:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"hjelp"},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e),a=t.getByText(l);await n(a).toHaveClass("dummyClassname"),await n(t.getByText("beskrivelse")).toHaveClass("dummyClassname"),await H.click(t.getByRole("button"));const r=t.getByText("hjelp").parentElement;await n(r).toHaveClass("dummyClassname")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};const W=["WithRef","WithAttributes","Defaults","WithDescription","WithShowRequiredMark","WithHideLabel","WithHelpTextSvgPathAndTitle","WithLongChildren","WithHelpToggleEvent","WithCustomClassNames"],L=Object.freeze(Object.defineProperty({__proto__:null,Defaults:d,WithAttributes:c,WithCustomClassNames:v,WithDescription:p,WithHelpTextSvgPathAndTitle:u,WithHelpToggleEvent:g,WithHideLabel:b,WithLongChildren:h,WithRef:o,WithShowRequiredMark:m,__namedExportsOrder:W,default:C},Symbol.toStringTag,{value:"Module"}));export{L};
//# sourceMappingURL=LabelWithHelp.test.stories-89vRd4pn.js.map
