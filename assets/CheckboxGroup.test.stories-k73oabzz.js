import{j as s}from"./iframe-BHAek7Q1.js";import{a as l}from"./index-D1w89d87.js";import{H as S,P as C}from"./index-BVEcgXLv.js";import{S as W}from"./icon.systems-MD0H-F_M.js";const{expect:n,fireEvent:R,within:i}=__STORYBOOK_MODULE_TEST__,M={component:l,title:"Tester/CheckboxGroup",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(W),mapping:W},helpText:{table:{disable:!0}},hideLegend:{table:{disable:!0}},legend:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},E="Velg det som passer deg",w="Velg minst ett av alternativene",I=[s.jsx(l.Checkbox,{children:"Har barn over 16 år"},"checkboxGroupOption_1"),s.jsx(l.Checkbox,{children:"Har barn under 12 år"},"checkboxGroupOption_2"),s.jsx(l.Checkbox,{children:"Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"},"checkboxGroupOption_4")],N=[s.jsx(l.Checkbox,{checked:!0,children:"Har barn over 16 år"},"checkboxGroupOption_1"),s.jsx(l.Checkbox,{children:"Har barn under 12 år"},"checkboxGroupOption_2"),s.jsx(l.Checkbox,{children:"Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"},"checkboxGroupOption_4")],r={legend:E,children:I},d={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("group");await n(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=i(e).getByRole("group");await n(a).toHaveAttribute("id","htmlid"),await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","nb"),await n(a).toHaveAttribute("data-testid","123ID"),await n(a).toHaveAttribute("form","123form")}},p={name:"Defaults (A1, B1, B5)",args:{...r},argTypes:{legend:{table:{disable:!1}},children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e),a=t.getByRole("group");await n(a).toBeInTheDocument(),await n(a.tagName).toBe("FIELDSET");const o=t.getAllByText(E)[0];await n(o).toBeInTheDocument(),await n(o.tagName).toBe("LEGEND");const B=e.querySelector("[id^=checkboxGroupErrorId]");await n(B).toBeInTheDocument();const D=t.getAllByRole("checkbox");for(const H of D)await n(H).not.toHaveAttribute("aria-invalid"),await n(H).not.toBeRequired()}},m={name:"Legend With Markup (B1)",args:{...r,legend:s.jsxs(s.Fragment,{children:[s.jsx(S,{as:"h1",level:3,children:"Dette er en Heading i legend"}),s.jsx(C,{variant:"ingress",children:s.jsx("em",{children:"Dette er en italic Paragraph med ingress variant i legend"})})]})},argTypes:{legend:{table:{disable:!1},control:{disable:!0}}}},g={name:"Legend With Markup and Required Mark (B1)",args:{...r,legend:s.jsxs(s.Fragment,{children:[s.jsx(S,{as:"h1",level:3,children:"Dette er en Heading i legend"}),s.jsx(C,{variant:"ingress",children:s.jsx("em",{children:"Dette er en italic Paragraph med ingress variant i legend"})})]}),showRequiredMark:!0},argTypes:{legend:{table:{disable:!1},control:{disable:!0}},showRequiredMark:{table:{disable:!1}}}},u={name:"With HideLegend (B1)",args:{...r,hideLegend:!0},argTypes:{hideLegend:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getAllByText(E)[0];await n(a).toBeInTheDocument()}},b={name:"With Disabled (A1, B2)",args:{...r,disabled:!0,helpText:"Hjelpeknappen skal også være disabled"},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e),a=t.getByRole("group");await n(a).toBeDisabled();const o=t.getByRole("button");await n(o).toBeDisabled()}},h={name:"With Disabled And Checked (A1)",args:{...r,children:N,disabled:!0},argTypes:{disabled:{table:{disable:!1}}}},y={name:"With Required Mark (A1, B3)",args:{...r,showRequiredMark:!0},argTypes:{showRequiredMark:{table:{disable:!1}}}},f={name:"With Error (A1, B5)",args:{...r,errorMessage:w},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e),a=e.querySelector("[id^=checkboxGroupErrorId]>div");await n(a).toBeInTheDocument();const o=t.getAllByRole("checkbox",{description:w});for(const B of o)await n(B).toHaveAttribute("aria-invalid","true")}},v={name:"With HelpText (A1)",args:{...r,helpText:"Vi trenger å vite om du har barn."},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("button");await n(a).toBeInTheDocument(),await R.click(a)}},x={name:"With Description (A1)",args:{...r,description:"Vi trenger å vite om du har barn."},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByText("Vi trenger å vite om du har barn.",{selector:":not([aria-hidden='true'])"});await n(a).toBeInTheDocument()}},k={name:"With onHelpToggle Event",args:{...r,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},T={name:"With Custom ClassNames (FA3)",args:{...r,classNames:{legend:"dummyClassname",errorMessage:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:w},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e),a=e.querySelector("[id^=checkboxGroupErrorId]>div");await n(a).toHaveClass("dummyClassname"),await n(t.getByText("beskrivelse")).toHaveClass("dummyClassname")}},A={name:"With ReadOnly",args:{...r,children:N,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getAllByRole("checkbox");for(const o of a)await n(o).toHaveAttribute("data-read-only","true"),n(o).toHaveAccessibleName(/skrivebeskyttet$/)}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    const fieldsetNode = canvas.getByRole('group');
    await expect(fieldsetNode).toHaveAttribute('id', 'dummyIdForwardedFromRef');
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
    const fieldsetNode = canvas.getByRole('group');
    await expect(fieldsetNode).toHaveAttribute('id', 'htmlid');
    await expect(fieldsetNode).toHaveClass('dummyClassname');
    await expect(fieldsetNode).toHaveAttribute('lang', 'nb');
    await expect(fieldsetNode).toHaveAttribute('data-testid', '123ID');
    await expect(fieldsetNode).toHaveAttribute('form', '123form');
  }
} satisfies Story`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A1, B1, B5)',
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
    const fieldsetNode = canvas.getByRole('group');
    await expect(fieldsetNode).toBeInTheDocument();
    await expect(fieldsetNode.tagName).toBe('FIELDSET');
    const legendNode = canvas.getAllByText(defaultLegendText)[0];
    await expect(legendNode).toBeInTheDocument();
    await expect(legendNode.tagName).toBe('LEGEND');
    const errorMessageContainer = canvasElement.querySelector('[id^=checkboxGroupErrorId]');
    await expect(errorMessageContainer).toBeInTheDocument();
    const inputNodes = canvas.getAllByRole('checkbox');
    for (const input of inputNodes) {
      await expect(input).not.toHaveAttribute('aria-invalid');
      await expect(input).not.toBeRequired();
    }
  }
} satisfies Story`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Legend With Markup (B1)',
  args: {
    ...defaultArgs,
    legend: <>
        <Heading as={'h1'} level={3}>
          {'Dette er en Heading i legend'}
        </Heading>
        <Paragraph variant={'ingress'}>
          <em>{'Dette er en italic Paragraph med ingress variant i legend'}</em>
        </Paragraph>
      </>
  },
  argTypes: {
    legend: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  }
} satisfies Story`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Legend With Markup and Required Mark (B1)',
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
        disable: false
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
} satisfies Story`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With HideLegend (B1)',
  args: {
    ...defaultArgs,
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
    const legendNode = canvas.getAllByText(defaultLegendText)[0];
    await expect(legendNode).toBeInTheDocument();
  }
} satisfies Story`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled (A1, B2)',
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const fieldsetNode = canvas.getByRole('group');
    await expect(fieldsetNode).toBeDisabled();
    const helpButton = canvas.getByRole('button');
    await expect(helpButton).toBeDisabled();
  }
} satisfies Story`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled And Checked (A1)',
  args: {
    ...defaultArgs,
    children: childrenWithOneChecked,
    disabled: true
  },
  argTypes: {
    disabled: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Required Mark (A1, B3)',
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
} satisfies Story`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With Error (A1, B5)',
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const errorMessage = canvasElement.querySelector('[id^=checkboxGroupErrorId]>div');
    await expect(errorMessage).toBeInTheDocument();
    const inputNodes = canvas.getAllByRole('checkbox', {
      description: defaultErrorMessage
    });
    for (const input of inputNodes) {
      await expect(input).toHaveAttribute('aria-invalid', 'true');
    }
  }
} satisfies Story`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With HelpText (A1)',
  args: {
    ...defaultArgs,
    helpText: 'Vi trenger å vite om du har barn.'
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
    const helpButton = canvas.getByRole('button');
    await expect(helpButton).toBeInTheDocument();
    await fireEvent.click(helpButton);
  }
} satisfies Story`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With Description (A1)',
  args: {
    ...defaultArgs,
    description: 'Vi trenger å vite om du har barn.'
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
    const description = canvas.getByText('Vi trenger å vite om du har barn.', {
      selector: ":not([aria-hidden='true'])"
    });
    await expect(description).toBeInTheDocument();
  }
} satisfies Story`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      legend: 'dummyClassname',
      errorMessage: 'dummyClassname',
      description: 'dummyClassname',
      helpText: 'dummyClassname'
    },
    description: 'beskrivelse',
    helpText: 'HJEEEEEEELP',
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
    const errorMessageContainer = canvasElement.querySelector('[id^=checkboxGroupErrorId]>div');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
    await expect(canvas.getByText('beskrivelse')).toHaveClass('dummyClassname');
  }
} satisfies Story`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'With ReadOnly',
  args: {
    ...defaultArgs,
    children: childrenWithOneChecked,
    readOnly: true
  },
  argTypes: {
    readOnly: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole('checkbox');
    for (const checkbox of checkboxes) {
      await expect(checkbox).toHaveAttribute('data-read-only', 'true');
      expect(checkbox).toHaveAccessibleName(/skrivebeskyttet$/);
    }
  }
} satisfies Story`,...A.parameters?.docs?.source}}};const j=["WithRef","WithAttributes","Defaults","LegendWithMarkup","LegendWithMarkupAndRequiredMark","WithHideLegend","WithDisabled","WithDisabledAndChecked","WithRequiredMark","WithError","WithHelptext","WithDescription","WithHelpToggleEvent","WithCustomClassNames","WithReadOnly"],F=Object.freeze(Object.defineProperty({__proto__:null,Defaults:p,LegendWithMarkup:m,LegendWithMarkupAndRequiredMark:g,WithAttributes:c,WithCustomClassNames:T,WithDescription:x,WithDisabled:b,WithDisabledAndChecked:h,WithError:f,WithHelpToggleEvent:k,WithHelptext:v,WithHideLegend:u,WithReadOnly:A,WithRef:d,WithRequiredMark:y,__namedExportsOrder:j,default:M},Symbol.toStringTag,{value:"Module"}));export{F as C};
//# sourceMappingURL=CheckboxGroup.test.stories-k73oabzz.js.map
