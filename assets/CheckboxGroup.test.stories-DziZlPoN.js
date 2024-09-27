import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{a as o}from"./index-FK3RsA-s.js";import{H as he,P as fe}from"./index-CCUfsLXI.js";import{w as i,e as n,b as ve}from"./index-hUG6DWTw.js";import{S as E}from"./icon.systems-Cj7Nt_Zb.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CI44Z2h3.js";import"./DatePickerCalendar-CuGySpz0.js";import"./index-DMYlLpXe.js";import"./index-DcL_RvKM.js";import"./index-Cq8GVsVj.js";import"./LabelWithHelp-BmjIbcxG.js";import"./Help-CLr4Mr4j.js";import"./index-BdP0pRE8.js";import"./icon.utils-Djpt9B5F.js";const Ie={component:o,title:"Tester/CheckboxGroup",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(E),mapping:E},helpText:{table:{disable:!0}},hideLegend:{table:{disable:!0}},legend:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}}},k="Velg det som passer deg",B="Velg minst ett av alternativene",ye=[t.jsx(o.Checkbox,{children:"Har barn over 16 år"},"checkboxGroupOption_1"),t.jsx(o.Checkbox,{children:"Har barn under 12 år"},"checkboxGroupOption_2"),t.jsx(o.Checkbox,{children:"Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"},"checkboxGroupOption_4")],xe=[t.jsx(o.Checkbox,{checked:!0,children:"Har barn over 16 år"},"checkboxGroupOption_1"),t.jsx(o.Checkbox,{children:"Har barn under 12 år"},"checkboxGroupOption_2"),t.jsx(o.Checkbox,{children:"Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"},"checkboxGroupOption_4")],r={legend:k,children:ye},d={name:"With Ref (FA1)",args:{...r,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("group");await n(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("group");await n(e).toHaveAttribute("id","htmlid"),await n(e).toHaveClass("dummyClassname"),await n(e).toHaveAttribute("lang","nb"),await n(e).toHaveAttribute("data-testid","123ID"),await n(e).toHaveAttribute("form","123form")}},m={name:"Defaults (A1, B1, B5)",args:{...r},argTypes:{legend:{table:{disable:!1}},children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const s=i(a),e=s.getByRole("group");await n(e).toBeInTheDocument(),await n(e.tagName).toBe("FIELDSET");const l=s.getAllByText(k)[0];await n(l).toBeInTheDocument(),await n(l.tagName).toBe("LEGEND");const w=s.getAllByRole("checkbox");for(const H of w)await n(H).not.toHaveAttribute("aria-invalid"),await n(H).not.toBeRequired()}},p={name:"Legend With Markup (B1)",args:{...r,legend:t.jsxs(t.Fragment,{children:[t.jsx(he,{as:"h1",level:3,children:"Dette er en Heading i legend"}),t.jsx(fe,{variant:"ingress",children:t.jsx("em",{children:"Dette er en italic Paragraph med ingress variant i legend"})})]})},argTypes:{legend:{table:{disable:!1},control:{disable:!0}}}},g={name:"Legend With Markup and Required Mark (B1)",args:{...r,legend:t.jsxs(t.Fragment,{children:[t.jsx(he,{as:"h1",level:3,children:"Dette er en Heading i legend"}),t.jsx(fe,{variant:"ingress",children:t.jsx("em",{children:"Dette er en italic Paragraph med ingress variant i legend"})})]}),showRequiredMark:!0},argTypes:{legend:{table:{disable:!1},control:{disable:!0}},showRequiredMark:{table:{disable:!1}}}},u={name:"With HideLegend (B1)",args:{...r,hideLegend:!0},argTypes:{hideLegend:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getAllByText(k)[0];await n(e).toBeInTheDocument()}},b={name:"With Disabled (A1, B2)",args:{...r,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("group");await n(e).toBeDisabled()}},h={name:"With Disabled And Checked (A1)",args:{...r,children:xe,disabled:!0},argTypes:{disabled:{table:{disable:!1}}}},f={name:"With Required Mark (A1, B3)",args:{...r,showRequiredMark:!0},argTypes:{showRequiredMark:{table:{disable:!1}}}},v={name:"With Error (A1, B5)",args:{...r,errorMessage:B},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:a})=>{const s=i(a),e=s.getAllByRole("generic")[17];await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("id");const l=s.getAllByRole("checkbox",{description:B});for(const w of l)await n(w).toHaveAttribute("aria-invalid","true")}},y={name:"With HelpText (A1)",args:{...r,helpText:"Vi trenger å vite om du har barn."},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("button",{description:k});await n(e).toBeInTheDocument(),await ve.click(e)}},x={name:"With Description (A1)",args:{...r,description:"Vi trenger å vite om du har barn."},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByText("Vi trenger å vite om du har barn.");await n(e).toBeInTheDocument()}},T={name:"With onHelpToggle Event",args:{...r,helpText:"Hjelpetekst",onHelpToggle:a=>{alert(a?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},A={name:"With Custom ClassNames (FA3)",args:{...r,classNames:{legend:"dummyClassname",errorMessage:"dummyClassname",description:"dummyClassname",helpText:"dummyClassname"},description:"beskrivelse",helpText:"HJEEEEEEELP",errorMessage:B},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:a})=>{const s=i(a),e=a.querySelector("[id^=checkboxGroupErrorId]>div");await n(e).toHaveClass("dummyClassname"),await n(s.getByText("beskrivelse")).toHaveClass("dummyClassname")}};var W,C,N;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const fieldsetNode = canvas.getByRole('group');
    await expect(fieldsetNode).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(N=(C=d.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var D,M,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    const fieldsetNode = canvas.getByRole('group');
    await expect(fieldsetNode).toHaveAttribute('id', 'htmlid');
    await expect(fieldsetNode).toHaveClass('dummyClassname');
    await expect(fieldsetNode).toHaveAttribute('lang', 'nb');
    await expect(fieldsetNode).toHaveAttribute('data-testid', '123ID');
    await expect(fieldsetNode).toHaveAttribute('form', '123form');
  }
} satisfies Story`,...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var S,L,j;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      await expect(input).not.toHaveAttribute('aria-invalid');
      await expect(input).not.toBeRequired();
    }
  }
} satisfies Story`,...(j=(L=m.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var I,P,q;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var F,G,O;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(G=g.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var V,_,J;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(_=u.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var z,K,Q;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,ne,te;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,re,ie;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,le,de;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
    const description = canvas.getByText('Vi trenger å vite om du har barn.');
    await expect(description).toBeInTheDocument();
  }
} satisfies Story`,...(de=(le=x.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,me,pe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,ue,be;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
    // eslint-disable-next-line testing-library/no-node-access
    const errorMessageContainer = canvasElement.querySelector('[id^=checkboxGroupErrorId]>div');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
    await expect(canvas.getByText('beskrivelse')).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(be=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};const Pe=["WithRef","WithAttributes","Defaults","LegendWithMarkup","LegendWithMarkupAndRequiredMark","WithHideLegend","WithDisabled","WithDisabledAndChecked","WithRequiredMark","WithError","WithHelptext","WithDescription","WithHelpToggleEvent","WithCustomClassNames"];export{m as Defaults,p as LegendWithMarkup,g as LegendWithMarkupAndRequiredMark,c as WithAttributes,A as WithCustomClassNames,x as WithDescription,b as WithDisabled,h as WithDisabledAndChecked,v as WithError,T as WithHelpToggleEvent,y as WithHelptext,u as WithHideLegend,d as WithRef,f as WithRequiredMark,Pe as __namedExportsOrder,Ie as default};
//# sourceMappingURL=CheckboxGroup.test.stories-DziZlPoN.js.map
