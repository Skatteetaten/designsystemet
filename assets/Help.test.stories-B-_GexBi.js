import{e as n,w as l,a as S}from"./index-DIxTUSTt.js";import{b as Z,d as ee}from"./index-CwaotbcG.js";import{W as te}from"./index-BQO_0U1F.js";import{w as i,a as x}from"./storybook.testing.utils-CMs160i9.js";import{H as ne}from"./Help-BOwxnveE.js";import{S as B}from"./icon.systems-NRpsphgm.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CUnERQXD.js";import"./index-BQtvKDNR.js";import"./icon.utils-D_vdkWhZ.js";const ge={component:ne,title:"Tester/Help (intern)",argTypes:{description:{table:{disable:!0}},classNames:{table:{disable:!0}},hideHelp:{table:{disable:!0}},helpText:{table:{disable:!0}},helpSvgPath:{table:{disable:!0},options:Object.keys(B),mapping:B},titleHelpSvg:{table:{disable:!0}},targetId:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}}},r="En liten beskrivelse",o="Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.",p={name:"Defaults",play:async({canvasElement:a})=>{const e=a.querySelector("button");await n(e).not.toBeInTheDocument()}},c={name:"With HelpText (FS-A1, FS-A5 delvis, FS-B2 delvis)",args:{helpText:o},argTypes:{helpText:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${i} > button`,focus:`${i} > button`,click:`${i} > button`}},play:async({canvasElement:a})=>{const e=l(a),t=e.getByRole("button");await n(t).toBeInTheDocument(),await n(t).toHaveAttribute("aria-expanded","false");const s=e.getByLabelText(Z(),{selector:"svg"});await n(s).toBeInTheDocument()}},d={name:"With Description (FS-A5 delvis)",args:{description:r},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=l(a).getByText(r);await n(t).toBeInTheDocument()}},u={name:"With HelpText And Description (FS-A5 delvis)",args:{helpText:o,description:r},argTypes:{helpText:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${i} > button`,click:`${i} > button`}}},m={name:"With Long HelpText And Description",args:{helpText:x,description:x},argTypes:{helpText:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"},imageSnapshot:{click:`${i} > button`}}},h={name:"With HelpSvgPath TitleHelpSvg And TargetId (FS-A5 delvis)",args:{helpText:o,helpSvgPath:te,titleHelpSvg:"Tooltip",targetId:"storybook-root"},argTypes:{helpSvgPath:{table:{disable:!1}},titleHelpSvg:{table:{disable:!1}},targetId:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=l(a),t=e.getByRole("button");await n(t).toHaveAttribute("aria-describedby","storybook-root");const s=e.getByLabelText("Tooltip",{selector:"svg"});await n(s).toBeInTheDocument()}},g={name:"With HideHelp (FS-A7)",args:{helpText:o,description:r,hideHelp:!0},argTypes:{hideHelp:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=l(a),t=e.getByRole("button"),s=e.getByText(r);await n(t).toBeInTheDocument(),await n(s).toBeInTheDocument()}},v={name:"Click HelpButton On And Off (FS-A5 delvis, FS-B2 delvis)",args:{helpText:o},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=l(a),t=e.getByRole("button");await S.click(t),await n(t).toHaveAttribute("aria-expanded","true");const s=e.getByText(o);await n(s).toBeInTheDocument(),await S.click(t),await n(s).not.toBeInTheDocument(),await n(t).toHaveAttribute("aria-expanded","false")}},T={name:"Close HelpText With CloseButton (FS-A5 delvis, FS-A6, FS-B2 delvis)",args:{helpText:o},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=l(a),t=e.getByRole("button");await S.click(t);const s=e.getByTitle(ee.t("Shared:shared.Close"));await n(s).toBeInTheDocument();const Y=e.getByText(o);await S.click(s),await n(Y).not.toBeInTheDocument(),await n(t).toHaveFocus()}},b={name:"With onHelpToggle Event",args:{helpText:"Hjelpetekst",onHelpToggle:a=>{alert(a?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}};var y,H,f;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Defaults',
  play: async ({
    canvasElement
  }): Promise<void> => {
    const helpButton = canvasElement.querySelector('button');
    await expect(helpButton).not.toBeInTheDocument();
  }
} satisfies Story`,...(f=(H=p.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var w,D,A;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
  parameters: {
    imageSnapshot: {
      hover: \`\${wrapper} > button\`,
      focus: \`\${wrapper} > button\`,
      click: \`\${wrapper} > button\`
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
} satisfies Story`,...(A=(D=c.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var k,I,W;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(W=(I=d.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var F,E,P;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
  },
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} > button\`,
      click: \`\${wrapper} > button\`
    }
  }
} satisfies Story`,...(P=(E=u.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var C,$,N;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    },
    imageSnapshot: {
      click: \`\${wrapper} > button\`
    }
  }
} satisfies Story`,...(N=($=m.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var R,j,L;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(j=h.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var O,V,G;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(V=g.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var q,_,z;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(z=(_=v.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var J,K,M;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(K=T.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,U,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const ve=["Defaults","WithHelptext","WithDescription","WithHelpTextAndDescription","WithLongHelpTextAndDescription","WithHelpSvgPathTitleHelpSvgAndTargetId","WithHideHelp","ClickHelpButton","ClickCloseButton","WithHelpToggleEvent"];export{T as ClickCloseButton,v as ClickHelpButton,p as Defaults,d as WithDescription,h as WithHelpSvgPathTitleHelpSvgAndTargetId,u as WithHelpTextAndDescription,b as WithHelpToggleEvent,c as WithHelptext,g as WithHideHelp,m as WithLongHelpTextAndDescription,ve as __namedExportsOrder,ge as default};
//# sourceMappingURL=Help.test.stories-B-_GexBi.js.map
