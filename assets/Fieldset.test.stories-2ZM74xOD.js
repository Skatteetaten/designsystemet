import{j as r}from"./iframe-DyzX2HZk.js";import{F as D}from"./index-BsMkEDp2.js";import{z as F}from"./index-Cocas2j2.js";import{A as R}from"./index-BVZq6FY6.js";import{H as C,P as E}from"./index-CMkU_MzX.js";import{a as k}from"./storybook.testing.utils-BgHZnMzD.js";import{S as H}from"./icon.systems-CftjSuGj.js";const{expect:n,userEvent:I,within:l}=__STORYBOOK_MODULE_TEST__,L={component:D,title:"Tester/Fieldset",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0}},description:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpText:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(H),mapping:H},hideLegend:{table:{disable:!0}},legend:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},ariaDescribedBy:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1},htmlValidate:{test:"off"}}},B="Kort hjelpetekst",x="Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",w="Ledetekst",s={legend:w,children:r.jsx("div",{children:"Innhold"})},d={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=l(a).getByRole("group");await n(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const e=l(a).getByRole("group");await n(e).toHaveAttribute("id","htmlid"),await n(e).toHaveClass("dummyClassname"),await n(e).toHaveAttribute("lang","nb"),await n(e).toHaveAttribute("data-testid","123ID"),await n(e).toHaveAttribute("form","123form")}},p={name:"With Custom ClassNames (FA3)",args:{...s,classNames:{container:"dummyClassname",legend:"dummyClassname",contentContainer:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const t=l(a),e=t.getByRole("group");await n(e).toHaveClass("dummyClassname");const i=t.getByText(w);await n(i).toHaveClass("dummyClassname");const o=i.nextElementSibling;await n(o).toHaveClass("dummyClassname")}},m={name:"Default (FS-A1, FS-A2, FS-A4, A2, A3, B1)",args:{...s},argTypes:{legend:{table:{disable:!1}},children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=l(a).getByRole("group");await n(e.tagName).toBe("FIELDSET"),await n(e.firstElementChild?.tagName).toBe("LEGEND")}},g={name:"With AriaDescribedBy",render:a=>{const t="fieldset-alert-description-id";return r.jsxs(r.Fragment,{children:[r.jsx(D,{...a,ariaDescribedBy:t,hasSpacing:!0}),r.jsx(R,{id:t,variant:"warning",showAlert:!0,children:"Dette er en varselmelding for fieldset"})]})},args:{...s},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const t=l(a),e=t.getByRole("group");await n(e).toHaveAttribute("aria-describedby");const i=t.getByText("Dette er en varselmelding for fieldset");await n(i).toBeInTheDocument();const W=(e.getAttribute("aria-describedby")||"").split(" ").filter(Boolean);await n(W).toContain("fieldset-alert-description-id")}},u={name:"With Description (FS-A3)",args:{...s,description:B},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=l(a).getByText(B,{selector:":not([aria-hidden='true'])"});await n(e).toBeInTheDocument()}},b={name:"With ShowRequiredMark (FS-A4)",args:{...s,showRequiredMark:!0},argTypes:{showRequiredMark:{table:{disable:!1}}}},h={name:"With ShowRequiredMark And Legend Contains Markup (FS-A4)",args:{...s,legend:r.jsxs(r.Fragment,{children:[r.jsx(C,{as:"h1",level:3,children:"Dette er en Heading i legend"}),r.jsx(E,{variant:"ingress",children:r.jsx("em",{children:"Dette er en italic Paragraph med ingress variant i legend"})})]}),showRequiredMark:!0},argTypes:{legend:{table:{disable:!0},control:{disable:!0}},showRequiredMark:{table:{disable:!1}}}},f={name:"With HideLegend (FS-A7)",args:{...s,description:B,helpText:x,hideLegend:!0},argTypes:{hideLegend:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=l(a),e=t.getByText(w),i=t.getByText(B),o=t.getByRole("button");await n(e).toBeInTheDocument(),await n(i).toBeInTheDocument(),await n(o).toBeInTheDocument()}},y={name:"With Spacing (A2)",args:{...s,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},v={name:"With Disabled (A4)",args:{...s,disabled:!0,helpText:"Hjelpeknappen skal også være disabled"},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const t=l(a),e=t.getByRole("group");await n(e).toBeDisabled();const i=t.getByRole("button");await n(i).toBeDisabled()}},S={name:"With HelpText HelpSvgPath And TitleHelpSvg (FS-A1, FS-A5 delvis, FS-B2 delvis)",args:{...s,helpText:x,helpSvgPath:F,titleHelpSvg:"Tooltip"},argTypes:{helpText:{table:{disable:!1}},helpSvgPath:{table:{disable:!1}},titleHelpSvg:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=l(a),e=t.getByRole("button");await n(e).toBeInTheDocument();const i=t.getByLabelText("Tooltip",{selector:"svg"});await n(i).toBeInTheDocument();const o=t.getByText(w);await n(e).toHaveAttribute("aria-describedby",o.id),await I.click(e)}},T={name:"With Long Legend And HelpText And Description",args:{...s,legend:k,helpText:x,description:B},argTypes:{legend:{table:{disable:!1}},helpText:{table:{disable:!1}},description:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}}},A={name:"With onHelpToggle Event",args:{...s,helpText:"Hjelpetekst",onHelpToggle:a=>{alert(a?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disableSnapshot:!0}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      container: 'dummyClassname',
      legend: 'dummyClassname',
      contentContainer: 'dummyClassname'
    }
  },
  argTypes: {
    classNames: {
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
    const container = canvas.getByRole('group');
    await expect(container).toHaveClass('dummyClassname');
    const legend = canvas.getByText(defaultLegendText);
    await expect(legend).toHaveClass('dummyClassname');
    const contentContainer = legend.nextElementSibling;
    await expect(contentContainer).toHaveClass('dummyClassname');
  }
} satisfies Story`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With AriaDescribedBy',
  render: (args): JSX.Element => {
    const alertId = 'fieldset-alert-description-id';
    return <>
        <Fieldset {...args} ariaDescribedBy={alertId} hasSpacing />
        <Alert id={alertId} variant={'warning'} showAlert>
          {'Dette er en varselmelding for fieldset'}
        </Alert>
      </>;
  },
  args: {
    ...defaultArgs
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
    await expect(fieldset).toHaveAttribute('aria-describedby');
    const alertText = canvas.getByText('Dette er en varselmelding for fieldset');
    await expect(alertText).toBeInTheDocument();
    const describedBy = fieldset.getAttribute('aria-describedby') || '';
    const describedByIds = describedBy.split(' ').filter(Boolean);
    await expect(describedByIds).toContain('fieldset-alert-description-id');
  }
} satisfies Story`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    const legend = canvas.getByText(defaultLegendText);
    const descriptionNode = canvas.getByText(defaultDescription);
    const helpButtonNode = canvas.getByRole('button');
    await expect(legend).toBeInTheDocument();
    await expect(descriptionNode).toBeInTheDocument();
    await expect(helpButtonNode).toBeInTheDocument();
  }
} satisfies Story`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled (A4)',
  args: {
    ...defaultArgs,
    disabled: true,
    helpText: 'Hjelpeknappen skal også være disabled'
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
    const helpButton = canvas.getByRole('button');
    await expect(helpButton).toBeDisabled();
  }
} satisfies Story`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    const helpButton = canvas.getByRole('button');
    await expect(helpButton).toBeInTheDocument();
    const svgNode = canvas.getByLabelText('Tooltip', {
      selector: 'svg'
    });
    await expect(svgNode).toBeInTheDocument();
    const legend = canvas.getByText(defaultLegendText);
    await expect(helpButton).toHaveAttribute('aria-describedby', legend.id);
    await userEvent.click(helpButton);
  }
} satisfies Story`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With Long Legend And HelpText And Description',
  args: {
    ...defaultArgs,
    legend: loremIpsumWithoutSpaces,
    helpText: defaultHelpText,
    description: defaultDescription
  },
  argTypes: {
    legend: {
      table: {
        disable: false
      }
    },
    helpText: {
      table: {
        disable: false
      }
    },
    description: {
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
} satisfies Story`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  }
} satisfies Story`,...A.parameters?.docs?.source}}};const N=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithAriaDescribedBy","WithDescription","WithShowRequiredMark","WithShowRequiredMarkAndLegend","WithHideLegend","WithSpacing","WithDisabled","WithHelpTextSvgPathAndTitle","WithLongLegend","WithHelpToggleEvent"],V=Object.freeze(Object.defineProperty({__proto__:null,Defaults:m,WithAriaDescribedBy:g,WithAttributes:c,WithCustomClassNames:p,WithDescription:u,WithDisabled:v,WithHelpTextSvgPathAndTitle:S,WithHelpToggleEvent:A,WithHideLegend:f,WithLongLegend:T,WithRef:d,WithShowRequiredMark:b,WithShowRequiredMarkAndLegend:h,WithSpacing:y,__namedExportsOrder:N,default:L},Symbol.toStringTag,{value:"Module"}));export{V as F};
//# sourceMappingURL=Fieldset.test.stories-2ZM74xOD.js.map
