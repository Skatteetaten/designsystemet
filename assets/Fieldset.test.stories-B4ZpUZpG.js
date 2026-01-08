import{j as i}from"./iframe-s2_bNgHU.js";import{F as B}from"./index-D9_nlc1h.js";import{W}from"./index-CUsfAC9p.js";import{H as D,P as F}from"./index-CJpzHRrE.js";import{a as R}from"./storybook.testing.utils-BgHZnMzD.js";import{S as x}from"./icon.systems-DJyjpAy9.js";const{expect:t,userEvent:E,within:r}=__STORYBOOK_MODULE_TEST__,k={component:B,title:"Tester/Fieldset",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0}},description:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpText:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(x),mapping:x},hideLegend:{table:{disable:!0}},legend:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},T="Kort hjelpetekst",H="Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",S="Ledetekst",n={legend:S,children:i.jsx("div",{children:"Innhold"})},l={name:"With Ref (FA1)",args:{...n,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=r(a).getByRole("group");await t(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes (FA2-5)",args:{...n,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const e=r(a).getByRole("group");await t(e).toHaveAttribute("id","htmlid"),await t(e).toHaveClass("dummyClassname"),await t(e).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID"),await t(e).toHaveAttribute("form","123form")}},d={name:"Default (FS-A1, FS-A2, FS-A4, A2, A3, B1)",args:{...n},argTypes:{legend:{table:{disable:!1}},children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a).getByRole("group");await t(e.tagName).toBe("FIELDSET"),await t(e.firstElementChild?.tagName).toBe("LEGEND")}},c={name:"With Description (FS-A3)",args:{...n,description:T},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a).getByText(T,{selector:":not([aria-hidden='true'])"});await t(e).toBeInTheDocument()}},p={name:"With ShowRequiredMark (FS-A4)",args:{...n,showRequiredMark:!0},argTypes:{showRequiredMark:{table:{disable:!1}}}},g={name:"With ShowRequiredMark And Legend Contains Markup (FS-A4)",args:{...n,legend:i.jsxs(i.Fragment,{children:[i.jsx(D,{as:"h1",level:3,children:"Dette er en Heading i legend"}),i.jsx(F,{variant:"ingress",children:i.jsx("em",{children:"Dette er en italic Paragraph med ingress variant i legend"})})]}),showRequiredMark:!0},argTypes:{legend:{table:{disable:!0},control:{disable:!0}},showRequiredMark:{table:{disable:!1}}}},m={name:"With HideLegend (FS-A7)",args:{...n,description:T,helpText:H,hideLegend:!0},argTypes:{hideLegend:{table:{disable:!1}}},play:async({canvasElement:a})=>{const s=r(a),e=s.getAllByText(S)[0],A=s.getByText(T,{selector:"[aria-hidden='true']"}),w=s.getByRole("button");await t(e).toBeInTheDocument(),await t(A).toBeInTheDocument(),await t(w).toBeInTheDocument()}},u={name:"With Spacing (A2)",args:{...n,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},b={name:"With Disabled (A4)",args:{...n,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=r(a).getByRole("group");await t(e).toBeDisabled()}},h={name:"With HelpText HelpSvgPath And TitleHelpSvg (FS-A1, FS-A5 delvis, FS-B2 delvis)",args:{...n,helpText:H,helpSvgPath:W,titleHelpSvg:"Tooltip"},argTypes:{helpText:{table:{disable:!1}},helpSvgPath:{table:{disable:!1}},titleHelpSvg:{table:{disable:!1}}},play:async({canvasElement:a})=>{const s=r(a),e=s.getByRole("button",{description:S});await t(e).toBeInTheDocument();const A=s.getByLabelText("Tooltip",{selector:"svg"});await t(A).toBeInTheDocument();const w=s.getAllByText(S)[0];await t(e).toHaveAttribute("aria-describedby",w.id),await E.click(e)}},f={name:"With Long Legend",args:{...n,legend:R},argTypes:{legend:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}}},v={name:"With onHelpToggle Event",args:{...n,helpText:"Hjelpetekst",onHelpToggle:a=>{alert(a?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},y={name:"With Custom ClassNames (FA3)",args:{...n,classNames:{legend:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a).getAllByText(S)[1];await t(e).toHaveClass("dummyClassname")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLFieldSetElement | null): void => {
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
    const fieldset = canvas.getByRole('group');
    await expect(fieldset).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    const fieldset = canvas.getByRole('group');
    await expect(fieldset).toHaveAttribute('id', 'htmlid');
    await expect(fieldset).toHaveClass('dummyClassname');
    await expect(fieldset).toHaveAttribute('lang', 'nb');
    await expect(fieldset).toHaveAttribute('data-testid', '123ID');
    await expect(fieldset).toHaveAttribute('form', '123form');
  }
} satisfies Story`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Default (FS-A1, FS-A2, FS-A4, A2, A3, B1)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    legend: {
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const fieldset = canvas.getByRole('group');
    await expect(fieldset.tagName).toBe('FIELDSET');
    await expect(fieldset.firstElementChild?.tagName).toBe('LEGEND');
  }
} satisfies Story`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    const descriptionNode = canvas.getByText(defaultDescription, {
      selector: ":not([aria-hidden='true'])"
    });
    await expect(descriptionNode).toBeInTheDocument();
  }
} satisfies Story`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With ShowRequiredMark And Legend Contains Markup (FS-A4)',
  args: {
    ...defaultArgs,
    legend: <>
        <Heading as={'h1'} level={3}>
          {'Dette er en Heading i legend'}
        </Heading>
        <Paragraph variant={'ingress'}>
          <em>{'Dette er en italic Paragraph med ingress variant i legend'}</em>
        </Paragraph>
      </>,
    showRequiredMark: true
  },
  argTypes: {
    legend: {
      table: {
        disable: true
      },
      control: {
        disable: true
      }
    },
    showRequiredMark: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With HideLegend (FS-A7)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    helpText: defaultHelpText,
    hideLegend: true
  },
  argTypes: {
    hideLegend: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const legend = canvas.getAllByText(defaultLegendText)[0];
    const descriptionNode = canvas.getByText(defaultDescription, {
      selector: "[aria-hidden='true']"
    });
    const helpButtonNode = canvas.getByRole('button');
    await expect(legend).toBeInTheDocument();
    await expect(descriptionNode).toBeInTheDocument();
    await expect(helpButtonNode).toBeInTheDocument();
  }
} satisfies Story`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With Spacing (A2)',
  args: {
    ...defaultArgs,
    hasSpacing: true
  },
  argTypes: {
    hasSpacing: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled (A4)',
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
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const fieldset = canvas.getByRole('group');
    await expect(fieldset).toBeDisabled();
  }
} satisfies Story`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
      description: defaultLegendText
    });
    await expect(helpButton).toBeInTheDocument();
    const svgNode = canvas.getByLabelText('Tooltip', {
      selector: 'svg'
    });
    await expect(svgNode).toBeInTheDocument();
    const legend = canvas.getAllByText(defaultLegendText)[0];
    await expect(helpButton).toHaveAttribute('aria-describedby', legend.id);
    await userEvent.click(helpButton);
  }
} satisfies Story`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With Long Legend',
  args: {
    ...defaultArgs,
    legend: loremIpsumWithoutSpaces
  },
  argTypes: {
    legend: {
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
} satisfies Story`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      legend: 'dummyClassname'
    }
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
    const legend = canvas.getAllByText(defaultLegendText)[1];
    await expect(legend).toHaveClass('dummyClassname');
  }
} satisfies Story`,...y.parameters?.docs?.source}}};const L=["WithRef","WithAttributes","Defaults","WithDescription","WithShowRequiredMark","WithShowRequiredMarkAndLegend","WithHideLegend","WithSpacing","WithDisabled","WithHelpTextSvgPathAndTitle","WithLongLegend","WithHelpToggleEvent","WithCustomClassNames"],q=Object.freeze(Object.defineProperty({__proto__:null,Defaults:d,WithAttributes:o,WithCustomClassNames:y,WithDescription:c,WithDisabled:b,WithHelpTextSvgPathAndTitle:h,WithHelpToggleEvent:v,WithHideLegend:m,WithLongLegend:f,WithRef:l,WithShowRequiredMark:p,WithShowRequiredMarkAndLegend:g,WithSpacing:u,__namedExportsOrder:L,default:k},Symbol.toStringTag,{value:"Module"}));export{q as F};
//# sourceMappingURL=Fieldset.test.stories-B4ZpUZpG.js.map
