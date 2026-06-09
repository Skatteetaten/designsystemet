import{j as s}from"./iframe-DyzX2HZk.js";import{a as l}from"./index-BsMkEDp2.js";import{A as I}from"./index-BVZq6FY6.js";import{H as W,P as R}from"./index-CMkU_MzX.js";import{S as D}from"./icon.systems-CftjSuGj.js";const{expect:a,fireEvent:j,userEvent:L,within:i}=__STORYBOOK_MODULE_TEST__,P={component:l,title:"Tester/CheckboxGroup",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(D),mapping:D},helpText:{table:{disable:!0}},hideLegend:{table:{disable:!0}},legend:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},ariaDescribedBy:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{htmlValidate:{test:"off"},imageSnapshot:{disableSnapshot:!1}}},S="Velg det som passer deg",C="Velg minst ett av alternativene",O=[s.jsx(l.Checkbox,{children:"Har barn over 16 år"},"checkboxGroupOption_1"),s.jsx(l.Checkbox,{children:"Har barn under 12 år"},"checkboxGroupOption_2"),s.jsx(l.Checkbox,{children:"Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"},"checkboxGroupOption_4")],N=[s.jsx(l.Checkbox,{checked:!0,children:"Har barn over 16 år"},"checkboxGroupOption_1"),s.jsx(l.Checkbox,{children:"Har barn under 12 år"},"checkboxGroupOption_2"),s.jsx(l.Checkbox,{children:"Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"},"checkboxGroupOption_4")],r={legend:S,children:O},p={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=i(e).getByRole("group");await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=i(e).getByRole("group");await a(t).toHaveAttribute("id","htmlid"),await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("lang","nb"),await a(t).toHaveAttribute("data-testid","123ID"),await a(t).toHaveAttribute("form","123form")}},g={name:"With Custom ClassNames (FA3)",args:{...r,classNames:{container:"dummyClassname",legend:"dummyClassname",errorMessage:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:C},argTypes:{classNames:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:e})=>{const n=i(e),t=n.getByRole("group");await a(t).toHaveClass("dummyClassname");const o=n.getByText(S);await a(o).toHaveClass("dummyClassname");const d=e.querySelector("[id^=checkboxGroupErrorId]>div");await a(d).toHaveClass("dummyClassname");const c=n.getByText("beskrivelse");await a(c).toHaveClass("dummyClassname");const H=n.getByRole("button");await L.click(H);const M=n.getByText("HJEEEEEEELP").parentElement;await a(M).toHaveClass("dummyClassname")}},u={name:"Defaults (A1, B1, B5)",args:{...r},argTypes:{legend:{table:{disable:!1}},children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),t=n.getByRole("group");await a(t).toBeInTheDocument(),await a(t.tagName).toBe("FIELDSET");const o=n.getAllByText(S)[0];await a(o).toBeInTheDocument(),await a(o.tagName).toBe("LEGEND");const d=e.querySelector("[id^=checkboxGroupErrorId]");await a(d).toBeInTheDocument();const c=n.getAllByRole("checkbox");for(const H of c)await a(H).not.toHaveAttribute("aria-invalid"),await a(H).not.toBeRequired()}},b={name:"With AriaDescribedBy",render:e=>{const n="checkboxgroup-alert-description-id";return s.jsxs(s.Fragment,{children:[s.jsx(l,{...e,ariaDescribedBy:n,hasSpacing:!0}),s.jsx(I,{id:n,variant:"warning",showAlert:!0,children:"Dette er en varselmelding for checkboxgroup"})]})},args:{...r},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=i(e),t=n.getByRole("group");await a(t).toHaveAttribute("aria-describedby");const o=n.getByText("Dette er en varselmelding for checkboxgroup");await a(o).toBeInTheDocument();const c=(t.getAttribute("aria-describedby")||"").split(" ").filter(Boolean);await a(c).toContain("checkboxgroup-alert-description-id")}},h={name:"Legend With Markup (B1)",args:{...r,legend:s.jsxs(s.Fragment,{children:[s.jsx(W,{as:"h1",level:3,children:"Dette er en Heading i legend"}),s.jsx(R,{variant:"ingress",children:s.jsx("em",{children:"Dette er en italic Paragraph med ingress variant i legend"})})]})},argTypes:{legend:{table:{disable:!1},control:{disable:!0}}}},y={name:"Legend With Markup and Required Mark (B1)",args:{...r,legend:s.jsxs(s.Fragment,{children:[s.jsx(W,{as:"h1",level:3,children:"Dette er en Heading i legend"}),s.jsx(R,{variant:"ingress",children:s.jsx("em",{children:"Dette er en italic Paragraph med ingress variant i legend"})})]}),showRequiredMark:!0},argTypes:{legend:{table:{disable:!1},control:{disable:!0}},showRequiredMark:{table:{disable:!1}}}},v={name:"With HideLegend (B1)",args:{...r,hideLegend:!0},argTypes:{hideLegend:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e).getAllByText(S)[0];await a(t).toBeInTheDocument()}},f={name:"With Disabled (A1, B2)",args:{...r,disabled:!0,helpText:"Hjelpeknappen skal også være disabled"},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),t=n.getByRole("group");await a(t).toBeDisabled();const o=n.getByRole("button");await a(o).toBeDisabled()}},x={name:"With Disabled And Checked (A1)",args:{...r,children:N,disabled:!0},argTypes:{disabled:{table:{disable:!1}}}},B={name:"With Required Mark (A1, B3)",args:{...r,showRequiredMark:!0},argTypes:{showRequiredMark:{table:{disable:!1}}}},k={name:"With Error (A1, B5)",args:{...r,errorMessage:C},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=i(e),t=e.querySelector("[id^=checkboxGroupErrorId]>div");await a(t).toBeInTheDocument();const o=n.getAllByRole("checkbox",{description:C});for(const d of o)await a(d).toHaveAttribute("aria-invalid","true")}},T={name:"With HelpText (A1)",args:{...r,helpText:"Vi trenger å vite om du har barn."},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e).getByRole("button");await a(t).toBeInTheDocument(),await j.click(t)}},w={name:"With Description (A1)",args:{...r,description:"Vi trenger å vite om du har barn."},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e).getByText("Vi trenger å vite om du har barn.",{selector:":not([aria-hidden='true'])"});await a(t).toBeInTheDocument()}},A={name:"With onHelpToggle Event",args:{...r,helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disableSnapshot:!0}}},E={name:"With ReadOnly",args:{...r,children:N,readOnly:!0},argTypes:{readOnly:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e).getAllByRole("checkbox");for(const o of t)await a(o).toHaveAttribute("data-read-only","true"),a(o).toHaveAccessibleName(/skrivebeskyttet$/)}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      container: 'dummyClassname',
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
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    },
    a11y: {
      test: 'off'
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
    const errorMessageContainer = canvasElement.querySelector('[id^=checkboxGroupErrorId]>div');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
    const description = canvas.getByText('beskrivelse');
    await expect(description).toHaveClass('dummyClassname');
    const helpButton = canvas.getByRole('button');
    await userEvent.click(helpButton);
    const helpText = canvas.getByText('HJEEEEEEELP');
    const helpBox = helpText.parentElement;
    await expect(helpBox).toHaveClass('dummyClassname');
  }
} satisfies Story`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With AriaDescribedBy',
  render: (args): JSX.Element => {
    const alertId = 'checkboxgroup-alert-description-id';
    return <>
        <CheckboxGroup {...args} ariaDescribedBy={alertId} hasSpacing />
        <Alert id={alertId} variant={'warning'} showAlert>
          {'Dette er en varselmelding for checkboxgroup'}
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
    const group = canvas.getByRole('group');
    await expect(group).toHaveAttribute('aria-describedby');
    const alertText = canvas.getByText('Dette er en varselmelding for checkboxgroup');
    await expect(alertText).toBeInTheDocument();
    const describedBy = group.getAttribute('aria-describedby') || '';
    const describedByIds = describedBy.split(' ').filter(Boolean);
    await expect(describedByIds).toContain('checkboxgroup-alert-description-id');
  }
} satisfies Story`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...E.parameters?.docs?.source}}};const q=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithAriaDescribedBy","LegendWithMarkup","LegendWithMarkupAndRequiredMark","WithHideLegend","WithDisabled","WithDisabledAndChecked","WithRequiredMark","WithError","WithHelptext","WithDescription","WithHelpToggleEvent","WithReadOnly"],z=Object.freeze(Object.defineProperty({__proto__:null,Defaults:u,LegendWithMarkup:h,LegendWithMarkupAndRequiredMark:y,WithAriaDescribedBy:b,WithAttributes:m,WithCustomClassNames:g,WithDescription:w,WithDisabled:f,WithDisabledAndChecked:x,WithError:k,WithHelpToggleEvent:A,WithHelptext:T,WithHideLegend:v,WithReadOnly:E,WithRef:p,WithRequiredMark:B,__namedExportsOrder:q,default:P},Symbol.toStringTag,{value:"Module"}));export{z as C};
//# sourceMappingURL=CheckboxGroup.test.stories-CR7HXAct.js.map
