import{e,j as v,d as K}from"./iframe-BoxHncFg.js";import{S as g}from"./index-CfnY26Mx.js";import{j as U}from"./index-Mlou2Fgf.js";import{l as r}from"./storybook.testing.utils-CMs160i9.js";import{S as y}from"./icon.systems-qsHVbejn.js";const{expect:a,fn:V,waitFor:Y,within:h}=__STORYBOOK_MODULE_TEST__,J={component:g.Step,title:"Tester/StepList/Step",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},introContent:{table:{disable:!0,category:e.props}},introTitle:{table:{disable:!0,category:e.props}},introTitleAs:{table:{disable:!0,category:e.props}},stepTitle:{table:{disable:!0,category:e.props}},titleAs:{table:{disable:!0,category:e.props}},children:{table:{disable:!0,category:e.props}},onEdit:{table:{disable:!0,category:e.props}},onNext:{table:{disable:!0,category:e.props}},editButtonText:{table:{disable:!0,category:e.props}},nextButtonText:{table:{disable:!0,category:e.props}},nextButtonProps:{table:{disable:!0,category:e.props}},shouldAutoFocusWhenActive:{table:{disable:!0,category:e.props}},hasResultContentFullWidth:{table:{disable:!0,category:e.props}},title:{table:{disable:!0,category:e.props}},stepNumber:{table:{disable:!0,category:e.props}},svgPath:{options:Object.keys(y),mapping:y,table:{disable:!0,category:e.props}},svgTitle:{table:{disable:!0,category:e.props}},variant:{control:"inline-radio",table:{disable:!0,category:e.props}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},k={stepNumber:1,title:"title",onNext:V()},i=t=>v.jsx(g,{children:v.jsx(g.Step,{...t})}),l={render:i,name:"With Ref (FA1)",args:{...k,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=h(t).getByRole("listitem");await a(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={render:i,name:"With Attributes (FA2-5)",args:{...k,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:t})=>{const n=h(t).getByTestId("123ID");await a(n).toHaveAttribute("id","htmlid"),await a(n).toHaveClass("dummyClassname"),await a(n).toHaveAttribute("lang","nb")}},c={render:i,name:"With icon, titleAs, svgTitle, children (A4)",args:{variant:"active",title:"jeg er en tittel",titleAs:"h2",children:r,svgPath:U,svgTitle:"svg-tittel",onEdit:void 0},argTypes:{children:{table:{disable:!1}},title:{table:{disable:!1}},titleAs:{table:{disable:!1}},svgPath:{table:{disable:!1}}},play:async({canvasElement:t})=>{const s=h(t),n=s.getByRole("heading");await a(s.getByText("jeg er en tittel")).toBeInTheDocument(),await a(s.getByTitle("svg-tittel")).toBeInTheDocument(),await a(s.getByText(r)).toBeInTheDocument(),await a(n.tagName).toBe("H2");const z=t.querySelector('[aria-current="step"]');await Y(async()=>{await a(z).toHaveFocus()})}},d={render:i,name:"With shouldAutoFocusWhenActive False ",args:{variant:"active",stepNumber:13,title:"jeg er en tittel",titleAs:"h2",children:r,shouldAutoFocusWhenActive:!1,onEdit:void 0},argTypes:{shouldAutoFocusWhenActive:{table:{disable:!1}}},play:async({canvasElement:t})=>{const s=t.querySelector('[aria-current="step"]');await a(s).not.toHaveFocus()},parameters:{imageSnapshot:{disableSnapshot:!0}}},u={render:i,name:"With full width content in result (A10)",args:{variant:"neutralResult",title:"jeg er en tittel",children:r,onEdit:void 0,hasResultContentFullWidth:!0},argTypes:{hasResultContentFullWidth:{table:{disable:!1}}}},p={render:i,name:"With edit button accessible description (B2 delvis)",args:{stepNumber:1,variant:"active",title:"tittel",children:r,onEdit:V()},argTypes:{title:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=h(t).getByRole("button",{name:K.t("ds_collections:steplist.Edit")});a(n).toHaveAccessibleDescription("tittel")},parameters:{imageSnapshot:{disableSnapshot:!0}}},m={render:i,name:"With Spinner In Next Button",args:{stepNumber:1,variant:"active",title:"tittel",children:r,nextButtonProps:{hasSpinner:!0},onNext:()=>console.log("next"),shouldAutoFocusWhenActive:!1},argTypes:{nextButtonProps:{table:{disable:!1}}}},b={render:i,name:"With Disabled Next Button",args:{stepNumber:1,variant:"active",title:"tittel",children:r,nextButtonProps:{disabled:!0},onNext:()=>console.log("next"),shouldAutoFocusWhenActive:!1},argTypes:{nextButtonProps:{table:{disable:!1}}}};var f,A,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
} satisfies Story`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var T,x,W;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(W=(x=o.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var B,F,w;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  }
} satisfies Story`,...(E=(N=d.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var R,P,D;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(P=u.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var H,j,_;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(j=p.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var C,L,O;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var q,G,M;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(G=b.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const Q=["WithRef","WithAttributes","WithIconTitleAS","WithShouldAutoFocusWhenActiveFalse","WithFullWidthResult","WithEditAccessibleDescription","NextButtonWithSpinner","NextButtonWithDisabled"],ae=Object.freeze(Object.defineProperty({__proto__:null,NextButtonWithDisabled:b,NextButtonWithSpinner:m,WithAttributes:o,WithEditAccessibleDescription:p,WithFullWidthResult:u,WithIconTitleAS:c,WithRef:l,WithShouldAutoFocusWhenActiveFalse:d,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{ae as S};
//# sourceMappingURL=StepListStep.test.stories-ChjuW_iT.js.map
