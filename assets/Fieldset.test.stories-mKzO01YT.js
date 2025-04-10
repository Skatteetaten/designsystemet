import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{w as i,e as t}from"./index-DIxTUSTt.js";import{F as pe}from"./index-Byc3xEr-.js";import{W as me}from"./index-vpaAjjI_.js";import{H as ge,P as ue}from"./index-SYCMKRjb.js";import{w as be,a as he}from"./storybook.testing.utils-CMs160i9.js";import{S as x}from"./icon.systems-DPAJIO4Y.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EsEcB_zD.js";import"./DatePickerCalendar-DfBQ8U9V.js";import"./index-B77p9Xne.js";import"./index-_-BAtSXr.js";import"./LabelWithHelp-B7cXZmxy.js";import"./Help-fmzU6O8S.js";import"./index-CnP6odjp.js";import"./index-ukAKs0SN.js";import"./icon.utils-XW2L0FSl.js";const Ie={component:pe,title:"Tester/Fieldset",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},children:{table:{disable:!0}},description:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpText:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(x),mapping:x},hideLegend:{table:{disable:!0}},legend:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}}},A="Kort hjelpetekst",ce="Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",o="Ledetekst",s={legend:o,children:l.jsx("div",{children:"Innhold"})},d={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("group");await t(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"123form"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("group");await t(e).toHaveAttribute("id","htmlid"),await t(e).toHaveClass("dummyClassname"),await t(e).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID"),await t(e).toHaveAttribute("form","123form")}},p={name:"Default (FS-A1, FS-A2, FS-A4, A2, A3, B1)",args:{...s},argTypes:{legend:{table:{disable:!1}},children:{table:{disable:!1}}},play:async({canvasElement:a})=>{var r;const e=i(a).getByRole("group");await t(e.tagName).toBe("FIELDSET"),await t((r=e.firstElementChild)==null?void 0:r.tagName).toBe("LEGEND")}},m={name:"With Description (FS-A3)",args:{...s,description:A},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByText(A);await t(e).toBeInTheDocument()}},g={name:"With ShowRequiredMark (FS-A4)",args:{...s,showRequiredMark:!0},argTypes:{showRequiredMark:{table:{disable:!1}}}},u={name:"With ShowRequiredMark And Legend Contains Markup (FS-A4)",args:{...s,legend:l.jsxs(l.Fragment,{children:[l.jsx(ge,{as:"h1",level:3,children:"Dette er en Heading i legend"}),l.jsx(ue,{variant:"ingress",children:l.jsx("em",{children:"Dette er en italic Paragraph med ingress variant i legend"})})]}),showRequiredMark:!0},argTypes:{legend:{table:{disable:!0},control:{disable:!0}},showRequiredMark:{table:{disable:!1}}}},b={name:"With HideLegend (FS-A7)",args:{...s,description:A,helpText:ce,hideLegend:!0},argTypes:{hideLegend:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a),e=n.getAllByText(o)[0],r=n.getByText(A),w=n.getByRole("button");await t(e).toBeInTheDocument(),await t(r).toBeInTheDocument(),await t(w).toBeInTheDocument()}},h={name:"With Spacing (A2)",args:{...s,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},f={name:"With Disabled (A4)",args:{...s,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("group");await t(e).toBeDisabled()}},v={name:"With HelpText HelpSvgPath And TitleHelpSvg (FS-A1, FS-A5 delvis, FS-B2 delvis)",args:{...s,helpText:ce,helpSvgPath:me,titleHelpSvg:"Tooltip"},argTypes:{helpText:{table:{disable:!1}},helpSvgPath:{table:{disable:!1}},titleHelpSvg:{table:{disable:!1}}},parameters:{imageSnapshot:{click:`${be} > fieldset > button`}},play:async({canvasElement:a})=>{const n=i(a),e=n.getByRole("button",{description:o});await t(e).toBeInTheDocument();const r=n.getByLabelText("Tooltip",{selector:"svg"});await t(r).toBeInTheDocument();const w=n.getAllByText(o)[0];await t(e).toHaveAttribute("aria-describedby",w.id)}},y={name:"With Long Legend",args:{...s,legend:he},argTypes:{legend:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}},S={name:"With onHelpToggle Event",args:{...s,helpText:"Hjelpetekst",onHelpToggle:a=>{alert(a?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},T={name:"With Custom ClassNames (FA3)",args:{...s,classNames:{legend:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getAllByText(o)[1];await t(e).toHaveClass("dummyClassname")}};var H,B,W;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
    const fieldset = canvas.getByRole('group');
    await expect(fieldset).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(W=(B=d.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var D,F,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    const fieldset = canvas.getByRole('group');
    await expect(fieldset).toHaveAttribute('id', 'htmlid');
    await expect(fieldset).toHaveClass('dummyClassname');
    await expect(fieldset).toHaveAttribute('lang', 'nb');
    await expect(fieldset).toHaveAttribute('data-testid', '123ID');
    await expect(fieldset).toHaveAttribute('form', '123form');
  }
} satisfies Story`,...(R=(F=c.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var k,L,E;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(E=(L=p.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var N,I,C;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(I=m.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var P,M,j;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(j=(M=g.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var q,V,G;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(V=u.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var O,_,$;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    const descriptionNode = canvas.getByText(defaultDescription);
    const helpButtonNode = canvas.getByRole('button');
    await expect(legend).toBeInTheDocument();
    await expect(descriptionNode).toBeInTheDocument();
    await expect(helpButtonNode).toBeInTheDocument();
  }
} satisfies Story`,...($=(_=b.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var K,z,J;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(z=h.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,U,X;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const fieldset = canvas.getByRole('group');
    await expect(fieldset).toBeDisabled();
  }
} satisfies Story`,...(X=(U=f.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
  parameters: {
    imageSnapshot: {
      click: \`\${wrapper} > fieldset > button\`
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
  }
} satisfies Story`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,ie,re;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var le,oe,de;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};const Ce=["WithRef","WithAttributes","Defaults","WithDescription","WithShowRequiredMark","WithShowRequiredMarkAndLegend","WithHideLegend","WithSpacing","WithDisabled","WithHelpTextSvgPathAndTitle","WithLongLegend","WithHelpToggleEvent","WithCustomClassNames"];export{p as Defaults,c as WithAttributes,T as WithCustomClassNames,m as WithDescription,f as WithDisabled,v as WithHelpTextSvgPathAndTitle,S as WithHelpToggleEvent,b as WithHideLegend,y as WithLongLegend,d as WithRef,g as WithShowRequiredMark,u as WithShowRequiredMarkAndLegend,h as WithSpacing,Ce as __namedExportsOrder,Ie as default};
//# sourceMappingURL=Fieldset.test.stories-mKzO01YT.js.map
