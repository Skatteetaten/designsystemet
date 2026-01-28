import{e,j as v,d as T}from"./iframe-CBOQuZmX.js";import{S as g}from"./index-BYntwts4.js";import{m as x}from"./index-tEZUkoN5.js";import{l as r}from"./storybook.testing.utils-BgHZnMzD.js";import{S as y}from"./icon.systems-DLlbXhEY.js";const{expect:a,fn:f,waitFor:W,within:h}=__STORYBOOK_MODULE_TEST__,B={component:g.Step,title:"Tester/StepList/Step",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},introContent:{table:{disable:!0,category:e.props}},introTitle:{table:{disable:!0,category:e.props}},introTitleAs:{table:{disable:!0,category:e.props}},stepTitle:{table:{disable:!0,category:e.props}},titleAs:{table:{disable:!0,category:e.props}},children:{table:{disable:!0,category:e.props}},onEdit:{table:{disable:!0,category:e.props}},onNext:{table:{disable:!0,category:e.props}},editButtonText:{table:{disable:!0,category:e.props}},nextButtonText:{table:{disable:!0,category:e.props}},nextButtonProps:{table:{disable:!0,category:e.props}},shouldAutoFocusWhenActive:{table:{disable:!0,category:e.props}},hasResultContentFullWidth:{table:{disable:!0,category:e.props}},title:{table:{disable:!0,category:e.props}},stepNumber:{table:{disable:!0,category:e.props}},svgPath:{options:Object.keys(y),mapping:y,table:{disable:!0,category:e.props}},svgTitle:{table:{disable:!0,category:e.props}},variant:{control:"inline-radio",table:{disable:!0,category:e.props}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},A={stepNumber:1,title:"title",onNext:f()},i=t=>v.jsx(g,{children:v.jsx(g.Step,{...t})}),l={render:i,name:"With Ref (FA1)",args:{...A,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=h(t).getByRole("listitem");await a(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={render:i,name:"With Attributes (FA2-5)",args:{...A,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:t})=>{const n=h(t).getByTestId("123ID");await a(n).toHaveAttribute("id","htmlid"),await a(n).toHaveClass("dummyClassname"),await a(n).toHaveAttribute("lang","nb")}},c={render:i,name:"With icon, titleAs, svgTitle, children (A4)",args:{variant:"active",title:"jeg er en tittel",titleAs:"h2",children:r,svgPath:x,svgTitle:"svg-tittel",onEdit:void 0},argTypes:{children:{table:{disable:!1}},title:{table:{disable:!1}},titleAs:{table:{disable:!1}},svgPath:{table:{disable:!1}}},play:async({canvasElement:t})=>{const s=h(t),n=s.getByRole("heading");await a(s.getByText("jeg er en tittel")).toBeInTheDocument(),await a(s.getByTitle("svg-tittel")).toBeInTheDocument(),await a(s.getByText(r)).toBeInTheDocument(),await a(n.tagName).toBe("H2");const S=t.querySelector('[aria-current="step"]');await W(async()=>{await a(S).toHaveFocus()})}},d={render:i,name:"With shouldAutoFocusWhenActive False ",args:{variant:"active",stepNumber:13,title:"jeg er en tittel",titleAs:"h2",children:r,shouldAutoFocusWhenActive:!1,onEdit:void 0},argTypes:{shouldAutoFocusWhenActive:{table:{disable:!1}}},play:async({canvasElement:t})=>{const s=t.querySelector('[aria-current="step"]');await a(s).not.toHaveFocus()},parameters:{imageSnapshot:{disableSnapshot:!0}}},u={render:i,name:"With full width content in result (A10)",args:{variant:"neutralResult",title:"jeg er en tittel",children:r,onEdit:void 0,hasResultContentFullWidth:!0},argTypes:{hasResultContentFullWidth:{table:{disable:!1}}}},p={render:i,name:"With edit button accessible description (B2 delvis)",args:{stepNumber:1,variant:"active",title:"tittel",children:r,onEdit:f()},argTypes:{title:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=h(t).getByRole("button",{name:T.t("ds_collections:steplist.Edit")});a(n).toHaveAccessibleDescription("tittel")},parameters:{imageSnapshot:{disableSnapshot:!0}}},m={render:i,name:"With Spinner In Next Button",args:{stepNumber:1,variant:"active",title:"tittel",children:r,nextButtonProps:{hasSpinner:!0},onNext:()=>console.log("next"),shouldAutoFocusWhenActive:!1},argTypes:{nextButtonProps:{table:{disable:!1}}}},b={render:i,name:"With Disabled Next Button",args:{stepNumber:1,variant:"active",title:"tittel",children:r,nextButtonProps:{disabled:!0},onNext:()=>console.log("next"),shouldAutoFocusWhenActive:!1},argTypes:{nextButtonProps:{table:{disable:!1}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLLIElement | null): void => {
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
    const step = canvas.getByRole('listitem');
    await expect(step).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
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
    const stepList = canvas.getByTestId('123ID');
    await expect(stepList).toHaveAttribute('id', 'htmlid');
    await expect(stepList).toHaveClass('dummyClassname');
    await expect(stepList).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With icon, titleAs, svgTitle, children (A4)',
  args: {
    variant: 'active',
    title: 'jeg er en tittel',
    titleAs: 'h2',
    children: loremIpsum,
    svgPath: TimersandSVGpath,
    svgTitle: 'svg-tittel',
    onEdit: undefined
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    title: {
      table: {
        disable: false
      }
    },
    titleAs: {
      table: {
        disable: false
      }
    },
    svgPath: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(canvas.getByText('jeg er en tittel')).toBeInTheDocument();
    await expect(canvas.getByTitle('svg-tittel')).toBeInTheDocument();
    await expect(canvas.getByText(loremIpsum)).toBeInTheDocument();
    await expect(heading.tagName).toBe('H2');
    const focused = canvasElement.querySelector('[aria-current="step"]');
    await waitFor(async () => {
      await expect(focused).toHaveFocus();
    });
  }
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With shouldAutoFocusWhenActive False ',
  args: {
    variant: 'active',
    stepNumber: 13,
    title: 'jeg er en tittel',
    titleAs: 'h2',
    children: loremIpsum,
    shouldAutoFocusWhenActive: false,
    onEdit: undefined
  },
  argTypes: {
    shouldAutoFocusWhenActive: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const focused = canvasElement.querySelector('[aria-current="step"]');
    await expect(focused).not.toHaveFocus();
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  }
} satisfies Story`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With full width content in result (A10)',
  args: {
    variant: 'neutralResult',
    title: 'jeg er en tittel',
    children: loremIpsum,
    onEdit: undefined,
    hasResultContentFullWidth: true
  },
  argTypes: {
    hasResultContentFullWidth: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With edit button accessible description (B2 delvis)',
  args: {
    stepNumber: 1,
    variant: 'active',
    title: 'tittel',
    children: loremIpsum,
    onEdit: fn()
  },
  argTypes: {
    title: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const endreButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_collections:steplist.Edit')
    });
    expect(endreButton).toHaveAccessibleDescription('tittel');
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  }
} satisfies Story`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Spinner In Next Button',
  args: {
    stepNumber: 1,
    variant: 'active',
    title: 'tittel',
    children: loremIpsum,
    nextButtonProps: {
      hasSpinner: true
    },
    onNext: (): void => console.log('next'),
    shouldAutoFocusWhenActive: false
  },
  argTypes: {
    nextButtonProps: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Disabled Next Button',
  args: {
    stepNumber: 1,
    variant: 'active',
    title: 'tittel',
    children: loremIpsum,
    nextButtonProps: {
      disabled: true
    },
    onNext: (): void => console.log('next'),
    shouldAutoFocusWhenActive: false
  },
  argTypes: {
    nextButtonProps: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...b.parameters?.docs?.source}}};const F=["WithRef","WithAttributes","WithIconTitleAS","WithShouldAutoFocusWhenActiveFalse","WithFullWidthResult","WithEditAccessibleDescription","NextButtonWithSpinner","NextButtonWithDisabled"],P=Object.freeze(Object.defineProperty({__proto__:null,NextButtonWithDisabled:b,NextButtonWithSpinner:m,WithAttributes:o,WithEditAccessibleDescription:p,WithFullWidthResult:u,WithIconTitleAS:c,WithRef:l,WithShouldAutoFocusWhenActiveFalse:d,__namedExportsOrder:F,default:B},Symbol.toStringTag,{value:"Module"}));export{P as S};
//# sourceMappingURL=StepListStep.test.stories-CxRwqNvJ.js.map
