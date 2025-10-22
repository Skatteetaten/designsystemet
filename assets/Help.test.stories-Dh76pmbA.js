import{c as Z,d as $}from"./iframe-BoxHncFg.js";import{W as ee}from"./index-Mlou2Fgf.js";import{a as y}from"./storybook.testing.utils-CMs160i9.js";import{H as te}from"./Help-DtlVvBAO.js";import{S as B}from"./icon.systems-qsHVbejn.js";const{expect:a,fireEvent:T,within:l}=__STORYBOOK_MODULE_TEST__,ne={component:te,title:"Tester/Help (intern)",argTypes:{description:{table:{disable:!0}},classNames:{table:{disable:!0}},hideHelp:{table:{disable:!0}},helpText:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(B),mapping:B},titleHelpSvg:{table:{disable:!0}},targetId:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},b="En liten beskrivelse",o="Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",i={name:"Defaults",play:async({canvasElement:n})=>{const e=n.querySelector("button");await a(e).not.toBeInTheDocument()}},r={name:"With HelpText (FS-A1, FS-A5 delvis, FS-B2 delvis)",args:{helpText:o},argTypes:{helpText:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=l(n),t=e.getByRole("button");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("aria-expanded","false");const s=e.getByLabelText(Z(),{selector:"svg"});await a(s).toBeInTheDocument()}},p={name:"With Description (FS-A5 delvis)",args:{description:b},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:n})=>{const t=l(n).getByText(b);await a(t).toBeInTheDocument()}},c={name:"With HelpText And Description (FS-A5 delvis)",args:{helpText:o,description:b},argTypes:{helpText:{table:{disable:!1}},description:{table:{disable:!1}}}},d={name:"With Long HelpText And Description",args:{helpText:y,description:y},argTypes:{helpText:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}},play:async({canvasElement:n})=>{const t=l(n).getByRole("button");await T.click(t)}},u={name:"With HelpSvgPath TitleHelpSvg And TargetId (FS-A5 delvis)",args:{helpText:o,helpSvgPath:ee,titleHelpSvg:"Tooltip",targetId:"storybook-root"},argTypes:{helpSvgPath:{table:{disable:!1}},titleHelpSvg:{table:{disable:!1}},targetId:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=l(n),t=e.getByRole("button");await a(t).toHaveAttribute("aria-describedby","storybook-root");const s=e.getByLabelText("Tooltip",{selector:"svg"});await a(s).toBeInTheDocument()}},h={name:"With HideHelp (FS-A7)",args:{helpText:o,description:b,hideHelp:!0},argTypes:{hideHelp:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=l(n),t=e.getByRole("button"),s=e.getByText(b);await a(t).toBeInTheDocument(),await a(s).toBeInTheDocument()}},m={name:"Click HelpButton On And Off (FS-A5 delvis, FS-B2 delvis)",args:{helpText:o},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const e=l(n),t=e.getByRole("button");await T.click(t),await a(t).toHaveAttribute("aria-expanded","true");const s=e.getByText(o);await a(s).toBeInTheDocument(),await T.click(t),await a(s).not.toBeInTheDocument(),await a(t).toHaveAttribute("aria-expanded","false")}},g={name:"Close HelpText With CloseButton (FS-A5 delvis, FS-A6, FS-B2 delvis)",args:{helpText:o},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const e=l(n),t=e.getByRole("button");await T.click(t);const s=e.getByTitle($.t("Shared:shared.Close"));await a(s).toBeInTheDocument();const X=e.getByText(o);await T.click(s),await a(X).not.toBeInTheDocument(),await a(t).toHaveFocus()}},v={name:"With onHelpToggle Event",args:{helpText:"Hjelpetekst",onHelpToggle:n=>{alert(n?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}};var S,x,H;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Defaults',
  play: async ({
    canvasElement
  }): Promise<void> => {
    const helpButton = canvasElement.querySelector('button');
    await expect(helpButton).not.toBeInTheDocument();
  }
} satisfies Story`,...(H=(x=i.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var f,w,D;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'With HelpText (FS-A1, FS-A5 delvis, FS-B2 delvis)',
  args: {
    helpText: defaultHelpText
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
    await expect(helpButton).toHaveAttribute('aria-expanded', 'false');
    const helpSvg = canvas.getByLabelText(getHelpTitleHelpSvgDefault(), {
      selector: 'svg'
    });
    await expect(helpSvg).toBeInTheDocument();
  }
} satisfies Story`,...(D=(w=r.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var A,I,W;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'With Description (FS-A5 delvis)',
  args: {
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
} satisfies Story`,...(W=(I=p.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var k,E,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'With HelpText And Description (FS-A5 delvis)',
  args: {
    helpText: defaultHelpText,
    description: defaultDescription
  },
  argTypes: {
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
  }
} satisfies Story`,...(F=(E=c.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var P,C,O;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'With Long HelpText And Description',
  args: {
    helpText: loremIpsumWithoutSpaces,
    description: loremIpsumWithoutSpaces
  },
  argTypes: {
    helpText: {
      table: {
        disable: false
      }
    }
  },
  globals: {
    viewport: {
      value: '--mobile'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button');
    await fireEvent.click(helpButton);
  }
} satisfies Story`,...(O=(C=d.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var R,_,j;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'With HelpSvgPath TitleHelpSvg And TargetId (FS-A5 delvis)',
  args: {
    helpText: defaultHelpText,
    helpSvgPath: WarningSVGpath,
    titleHelpSvg: 'Tooltip',
    targetId: 'storybook-root'
  },
  argTypes: {
    helpSvgPath: {
      table: {
        disable: false
      }
    },
    titleHelpSvg: {
      table: {
        disable: false
      }
    },
    targetId: {
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
    await expect(helpButton).toHaveAttribute('aria-describedby', 'storybook-root');
    const svgNode = canvas.getByLabelText('Tooltip', {
      selector: 'svg'
    });
    await expect(svgNode).toBeInTheDocument();
  }
} satisfies Story`,...(j=(_=u.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var N,L,V;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With HideHelp (FS-A7)',
  args: {
    helpText: defaultHelpText,
    description: defaultDescription,
    hideHelp: true
  },
  argTypes: {
    hideHelp: {
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
    const descriptionNode = canvas.getByText(defaultDescription);
    await expect(helpButton).toBeInTheDocument();
    await expect(descriptionNode).toBeInTheDocument();
  }
} satisfies Story`,...(V=(L=h.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var G,q,M;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Click HelpButton On And Off (FS-A5 delvis, FS-B2 delvis)',
  args: {
    helpText: defaultHelpText
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
    const helpButton = canvas.getByRole('button');
    await fireEvent.click(helpButton);
    await expect(helpButton).toHaveAttribute('aria-expanded', 'true');
    const helpText = canvas.getByText(defaultHelpText);
    await expect(helpText).toBeInTheDocument();
    await fireEvent.click(helpButton);
    await expect(helpText).not.toBeInTheDocument();
    await expect(helpButton).toHaveAttribute('aria-expanded', 'false');
  }
} satisfies Story`,...(M=(q=m.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var z,K,U;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Close HelpText With CloseButton (FS-A5 delvis, FS-A6, FS-B2 delvis)',
  args: {
    helpText: defaultHelpText
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
    const helpButton = canvas.getByRole('button');
    await fireEvent.click(helpButton);
    const closeButton = canvas.getByTitle(dsI18n.t('Shared:shared.Close'));
    await expect(closeButton).toBeInTheDocument();
    const helpText = canvas.getByText(defaultHelpText);
    await fireEvent.click(closeButton);
    await expect(helpText).not.toBeInTheDocument();
    await expect(helpButton).toHaveFocus();
  }
} satisfies Story`,...(U=(K=g.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,J,Q;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'With onHelpToggle Event',
  args: {
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
} satisfies Story`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const ae=["Defaults","WithHelptext","WithDescription","WithHelpTextAndDescription","WithLongHelpTextAndDescription","WithHelpSvgPathTitleHelpSvgAndTargetId","WithHideHelp","ClickHelpButton","ClickCloseButton","WithHelpToggleEvent"],pe=Object.freeze(Object.defineProperty({__proto__:null,ClickCloseButton:g,ClickHelpButton:m,Defaults:i,WithDescription:p,WithHelpSvgPathTitleHelpSvgAndTargetId:u,WithHelpTextAndDescription:c,WithHelpToggleEvent:v,WithHelptext:r,WithHideHelp:h,WithLongHelpTextAndDescription:d,__namedExportsOrder:ae,default:ne},Symbol.toStringTag,{value:"Module"}));export{pe as H};
//# sourceMappingURL=Help.test.stories-Dh76pmbA.js.map
