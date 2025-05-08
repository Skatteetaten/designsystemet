import{j as v}from"./jsx-runtime-BYYWji4R.js";import{f as k,w as h,e as a,b as z}from"./index-DIxTUSTt.js";import{S as g}from"./index-BazQFD_p.js";import{d as J}from"./index-BYKicpQW.js";import{X as K}from"./index-C8q4C1To.js";import{l as r}from"./storybook.testing.utils-CMs160i9.js";import{c as e}from"./helpers-Q4uYuiE4.js";import{S as y}from"./icon.systems-D4eM4wId.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-6vKJeIrk.js";import"./index-BuQZV-my.js";import"./index-DzEaN3on.js";import"./index-B13CNY-b.js";import"./icon.utils-DDvPh5sV.js";const Q=["active","passive","positiveResult","neutralResult"],ue={component:g.Step,title:"Tester/StepList/Step",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},introContent:{table:{disable:!0,category:e.props}},introTitle:{table:{disable:!0,category:e.props}},introTitleAs:{table:{disable:!0,category:e.props}},stepTitle:{table:{disable:!0,category:e.props}},titleAs:{table:{disable:!0,category:e.props}},children:{table:{disable:!0,category:e.props}},onEdit:{table:{disable:!0,category:e.props}},onNext:{table:{disable:!0,category:e.props}},editButtonText:{table:{disable:!0,category:e.props}},nextButtonText:{table:{disable:!0,category:e.props}},nextButtonProps:{table:{disable:!0,category:e.props}},shouldAutoFocusWhenActive:{table:{disable:!0,category:e.props}},hasResultContentFullWidth:{table:{disable:!0,category:e.props}},title:{table:{disable:!0,category:e.props}},stepNumber:{table:{disable:!0,category:e.props}},svgPath:{options:Object.keys(y),mapping:y,table:{disable:!0,category:e.props}},svgTitle:{table:{disable:!0,category:e.props}},variant:{options:[...Q],control:"inline-radio",table:{disable:!0,category:e.props}}}},O={stepNumber:1,title:"title",onNext:k()},i=t=>v.jsx(g,{children:v.jsx(g.Step,{...t})}),l={render:i,name:"With Ref (FA1)",args:{...O,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const n=h(t).getByRole("listitem");await a(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={render:i,name:"With Attributes (FA2-5)",args:{...O,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=h(t).getByTestId("123ID");await a(n).toHaveAttribute("id","htmlid"),await a(n).toHaveClass("dummyClassname"),await a(n).toHaveAttribute("lang","nb")}},c={render:i,name:"With icon, titleAs, svgTitle, children (A4)",args:{variant:"active",title:"jeg er en tittel",titleAs:"h2",children:r,svgPath:K,svgTitle:"svg-tittel",onEdit:void 0},argTypes:{children:{table:{disable:!1}},title:{table:{disable:!1}},titleAs:{table:{disable:!1}},svgPath:{table:{disable:!1}}},play:async({canvasElement:t})=>{const s=h(t),n=s.getByRole("heading");await a(s.getByText("jeg er en tittel")).toBeInTheDocument(),await a(s.getByTitle("svg-tittel")).toBeInTheDocument(),await a(s.getByText(r)).toBeInTheDocument(),await a(n.tagName).toBe("H2");const X=t.querySelector('[aria-current="step"]');await z(async()=>{await a(X).toHaveFocus()})}},d={render:i,name:"With shouldAutoFocusWhenActive False ",args:{variant:"active",stepNumber:13,title:"jeg er en tittel",titleAs:"h2",children:r,shouldAutoFocusWhenActive:!1,onEdit:void 0},argTypes:{shouldAutoFocusWhenActive:{table:{disable:!1}}},play:async({canvasElement:t})=>{const s=t.querySelector('[aria-current="step"]');await a(s).not.toHaveFocus()},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}}},u={render:i,name:"With full width content in result (A10)",args:{variant:"neutralResult",title:"jeg er en tittel",children:r,onEdit:void 0,hasResultContentFullWidth:!0},argTypes:{hasResultContentFullWidth:{table:{disable:!1}}}},p={render:i,name:"With edit button accessible description (B2 delvis)",args:{stepNumber:1,variant:"active",title:"tittel",children:r,onEdit:k()},argTypes:{title:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=h(t).getByRole("button",{name:J.t("ds_collections:steplist.Edit")});a(n).toHaveAccessibleDescription("tittel")},parameters:{imageSnapshot:{disable:!0}}},m={render:i,name:"With Spinner In Next Button",args:{stepNumber:1,variant:"active",title:"tittel",children:r,nextButtonProps:{hasSpinner:!0},onNext:()=>console.log("next"),shouldAutoFocusWhenActive:!1},argTypes:{nextButtonProps:{table:{disable:!1}}}},b={render:i,name:"With Disabled Next Button",args:{stepNumber:1,variant:"active",title:"tittel",children:r,nextButtonProps:{disabled:!0},onNext:()=>console.log("next"),shouldAutoFocusWhenActive:!1},argTypes:{nextButtonProps:{table:{disable:!1}}}};var f,A,T;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const step = canvas.getByRole('listitem');
    await expect(step).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(T=(A=l.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var x,W,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const stepList = canvas.getByTestId('123ID');
    await expect(stepList).toHaveAttribute('id', 'htmlid');
    await expect(stepList).toHaveClass('dummyClassname');
    await expect(stepList).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...(S=(W=o.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var B,F,w;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(F=c.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var I,N,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
      disable: true
    },
    HTMLSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...(E=(N=d.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var R,P,H;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(P=u.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var D,j,C;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      disable: true
    }
  }
} satisfies Story`,...(C=(j=p.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var L,q,V;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(q=m.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var _,G,M;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(G=b.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const pe=["WithRef","WithAttributes","WithIconTitleAS","WithShouldAutoFocusWhenActiveFalse","WithFullWidthResult","WithEditAccessibleDescription","NextButtonWithSpinner","NextButtonWithDisabled"];export{b as NextButtonWithDisabled,m as NextButtonWithSpinner,o as WithAttributes,p as WithEditAccessibleDescription,u as WithFullWidthResult,c as WithIconTitleAS,l as WithRef,d as WithShouldAutoFocusWhenActiveFalse,pe as __namedExportsOrder,ue as default};
//# sourceMappingURL=StepListStep.test.stories-oYv6LdoF.js.map
