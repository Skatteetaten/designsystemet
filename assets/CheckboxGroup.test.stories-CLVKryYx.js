import{j as s}from"./iframe-Br1Xu9zr.js";import{a as o}from"./index-B55DkYFu.js";import{H as C,P as W}from"./index-DCwxX22m.js";import{S as E}from"./icon.systems-BmhPSTgm.js";const{expect:t,fireEvent:S,within:i}=__STORYBOOK_MODULE_TEST__,N={component:o,title:"Tester/CheckboxGroup",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(E),mapping:E},helpText:{table:{disable:!0}},hideLegend:{table:{disable:!0}},legend:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},k="Velg det som passer deg",B="Velg minst ett av alternativene",M=[s.jsx(o.Checkbox,{children:"Har barn over 16 år"},"checkboxGroupOption_1"),s.jsx(o.Checkbox,{children:"Har barn under 12 år"},"checkboxGroupOption_2"),s.jsx(o.Checkbox,{children:"Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"},"checkboxGroupOption_4")],D=[s.jsx(o.Checkbox,{checked:!0,children:"Har barn over 16 år"},"checkboxGroupOption_1"),s.jsx(o.Checkbox,{children:"Har barn under 12 år"},"checkboxGroupOption_2"),s.jsx(o.Checkbox,{children:"Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"},"checkboxGroupOption_4")],r={legend:k,children:M},l={name:"With Ref (FA1)",args:{...r,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("group");await t(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const e=i(a).getByRole("group");await t(e).toHaveAttribute("id","htmlid"),await t(e).toHaveClass("dummyClassname"),await t(e).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID"),await t(e).toHaveAttribute("form","123form")}},c={name:"Defaults (A1, B1, B5)",args:{...r},argTypes:{legend:{table:{disable:!1}},children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a),e=n.getByRole("group");await t(e).toBeInTheDocument(),await t(e.tagName).toBe("FIELDSET");const A=n.getAllByText(k)[0];await t(A).toBeInTheDocument(),await t(A.tagName).toBe("LEGEND");const w=n.getAllByRole("checkbox");for(const H of w)await t(H).toHaveAttribute("aria-invalid","false"),await t(H).not.toBeRequired()}},m={name:"Legend With Markup (B1)",args:{...r,legend:s.jsxs(s.Fragment,{children:[s.jsx(C,{as:"h1",level:3,children:"Dette er en Heading i legend"}),s.jsx(W,{variant:"ingress",children:s.jsx("em",{children:"Dette er en italic Paragraph med ingress variant i legend"})})]})},argTypes:{legend:{table:{disable:!1},control:{disable:!0}}}},g={name:"Legend With Markup and Required Mark (B1)",args:{...r,legend:s.jsxs(s.Fragment,{children:[s.jsx(C,{as:"h1",level:3,children:"Dette er en Heading i legend"}),s.jsx(W,{variant:"ingress",children:s.jsx("em",{children:"Dette er en italic Paragraph med ingress variant i legend"})})]}),showRequiredMark:!0},argTypes:{legend:{table:{disable:!1},control:{disable:!0}},showRequiredMark:{table:{disable:!1}}}},p={name:"With HideLegend (B1)",args:{...r,hideLegend:!0},argTypes:{hideLegend:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getAllByText(k)[0];await t(e).toBeInTheDocument()}},u={name:"With Disabled (A1, B2)",args:{...r,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("group");await t(e).toBeDisabled()}},b={name:"With Disabled And Checked (A1)",args:{...r,children:D,disabled:!0},argTypes:{disabled:{table:{disable:!1}}}},h={name:"With Required Mark (A1, B3)",args:{...r,showRequiredMark:!0},argTypes:{showRequiredMark:{table:{disable:!1}}}},f={name:"With Error (A1, B5)",args:{...r,errorMessage:B},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a),e=n.getAllByRole("generic")[17];await t(e).toBeInTheDocument(),await t(e).toHaveAttribute("id");const A=n.getAllByRole("checkbox",{description:B});for(const w of A)await t(w).toHaveAttribute("aria-invalid","true")}},v={name:"With HelpText (A1)",args:{...r,helpText:"Vi trenger å vite om du har barn."},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("button",{description:k});await t(e).toBeInTheDocument(),await S.click(e)}},y={name:"With Description (A1)",args:{...r,description:"Vi trenger å vite om du har barn."},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByText("Vi trenger å vite om du har barn.",{selector:":not([aria-hidden='true'])"});await t(e).toBeInTheDocument()}},x={name:"With onHelpToggle Event",args:{...r,helpText:"Hjelpetekst",onHelpToggle:a=>{alert(a?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},T={name:"With Custom ClassNames (FA3)",args:{...r,classNames:{legend:"dummyClassname",errorMessage:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:B},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a),e=a.querySelector("[id^=checkboxGroupErrorId]>div");await t(e).toHaveClass("dummyClassname"),await t(n.getByText("beskrivelse",{selector:"[aria-hidden='true']"})).toHaveClass("dummyClassname")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    const inputNodes = canvas.getAllByRole('checkbox');
    for (const input of inputNodes) {
      await expect(input).toHaveAttribute('aria-invalid', 'false');
      await expect(input).not.toBeRequired();
    }
  }
} satisfies Story`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled (A1, B2)',
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
    const fieldsetNode = canvas.getByRole('group');
    await expect(fieldsetNode).toBeDisabled();
  }
} satisfies Story`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    const errorMessageContainer = canvas.getAllByRole('generic')[17];
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(errorMessageContainer).toHaveAttribute('id');
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
    const helpButton = canvas.getByRole('button', {
      description: defaultLegendText
    });
    await expect(helpButton).toBeInTheDocument();
    await fireEvent.click(helpButton);
  }
} satisfies Story`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText('beskrivelse', {
      selector: "[aria-hidden='true']"
    })).toHaveClass('dummyClassname');
  }
} satisfies Story`,...T.parameters?.docs?.source}}};const R=["WithRef","WithAttributes","Defaults","LegendWithMarkup","LegendWithMarkupAndRequiredMark","WithHideLegend","WithDisabled","WithDisabledAndChecked","WithRequiredMark","WithError","WithHelptext","WithDescription","WithHelpToggleEvent","WithCustomClassNames"],q=Object.freeze(Object.defineProperty({__proto__:null,Defaults:c,LegendWithMarkup:m,LegendWithMarkupAndRequiredMark:g,WithAttributes:d,WithCustomClassNames:T,WithDescription:y,WithDisabled:u,WithDisabledAndChecked:b,WithError:f,WithHelpToggleEvent:x,WithHelptext:v,WithHideLegend:p,WithRef:l,WithRequiredMark:h,__namedExportsOrder:R,default:N},Symbol.toStringTag,{value:"Module"}));export{q as C};
//# sourceMappingURL=CheckboxGroup.test.stories-CLVKryYx.js.map
