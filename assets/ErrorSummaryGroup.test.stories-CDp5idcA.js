import{j as r}from"./iframe-CBOQuZmX.js";import{E as a}from"./index-D76sDZza.js";const{expect:e,within:i}=__STORYBOOK_MODULE_TEST__,f={component:a.Group,title:"Tester/ErrorSummary/ErrorSummaryGroup",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},title:{table:{disable:!0}},titleAs:{control:"inline-radio",table:{disable:!0}}},tags:["test"]},o=[r.jsx(a.Error,{referenceId:"id_1",children:"Fornavn må fylles ut"},"errorSummaryError_1"),r.jsx(a.Error,{referenceId:"id_2",children:"Etternavn må fylles ut"},"errorSummaryError_2")],d={name:"With Ref (FA1)",args:{title:"Personopplysninger",children:o,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const t=i(n).getAllByRole("generic")[1];await e(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",title:"Personopplysninger",children:o},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:n})=>{const t=i(n).getByTestId("123ID");await e(t).toHaveAttribute("id","htmlId"),await e(t).toHaveClass("dummyClassname"),await e(t).toHaveAttribute("lang","nb")}},c={name:"With Title",args:{title:"Mottaker 1 av fullmakt",children:o},argTypes:{title:{table:{disable:!1}},children:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const l=i(n),t=l.getByRole("heading",{level:3});await e(t).toBeInTheDocument(),await e(t).toHaveTextContent("Mottaker 1 av fullmakt");const s=l.getAllByRole("listitem");await e(s).toHaveLength(2)}},u={name:"With TitleAs",args:{title:"Mottaker 1 av fullmakt",titleAs:"h4",children:o},argTypes:{titleAs:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const t=i(n).getByRole("heading",{level:4});await e(t).toBeInTheDocument(),await e(t).toHaveTextContent("Mottaker 1 av fullmakt")}},h=()=>r.jsxs(a,{title:"For å gå videre må du rette opp i følgende",showErrorSummary:!0,children:[r.jsx(a.Error,{referenceId:"inntekstaaret",children:"Inntekstsåret må være etter 2008"}),r.jsx(a.Error,{referenceId:"epost",children:"E-posten ser ikke riktig ut. Skriv slik: olaug.nordmann@norge.no"}),r.jsx(a.Error,{referenceId:"antallDager",children:"Antall dager må fylles ut."}),r.jsxs(a.Group,{title:"Mottaker 1 av fullmakt",children:[r.jsx(a.Error,{referenceId:"navn1",children:"Navn på person må fylles ut"}),r.jsx(a.Error,{referenceId:"fnummer1",children:"Fødselsnummer eller D-nummer må fylles ut"}),r.jsx(a.Error,{referenceId:"telefon1",children:"Telefonnummer må fylles ut"})]}),r.jsxs(a.Group,{title:"Mottaker 2 av fullmakt",children:[r.jsx(a.Error,{referenceId:"navn2",children:"Navn på person må fylles ut"}),r.jsx(a.Error,{referenceId:"fnummer2",children:"Fødselsnummer eller D-nummer må fylles ut"}),r.jsx(a.Error,{referenceId:"telefon2",children:"Telefonnummer må fylles ut"})]})]}),g={name:"Within ErrorSummary",args:{title:"Mottaker 1 av fullmakt",children:o},render:h,play:async({canvasElement:n})=>{const l=i(n),t=l.getByRole("heading",{level:2});await e(t).toHaveTextContent("For å gå videre må du rette opp i følgende");const s=l.getAllByRole("heading",{level:3});await e(s).toHaveLength(2),await e(s[0]).toHaveTextContent("Mottaker 1 av fullmakt"),await e(s[1]).toHaveTextContent("Mottaker 2 av fullmakt");const v=l.getAllByRole("link");await e(v).toHaveLength(9)}},p={name:"Within ErrorSummary on Mobile",args:{title:"Mottaker 1 av fullmakt",children:o},globals:{viewport:{value:"--mobile"}},render:h,play:async({canvasElement:n})=>{const l=i(n),t=l.getByRole("heading",{level:2});await e(t).toHaveTextContent("For å gå videre må du rette opp i følgende");const s=l.getAllByRole("heading",{level:3});await e(s).toHaveLength(2),await e(s[0]).toHaveTextContent("Mottaker 1 av fullmakt"),await e(s[1]).toHaveTextContent("Mottaker 2 av fullmakt");const v=l.getAllByRole("link");await e(v).toHaveLength(9)}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    title: 'Personopplysninger',
    children: defaultChildren,
    ref: (instance: HTMLDivElement | null): void => {
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
    const group = canvas.getAllByRole('generic')[1];
    await expect(group).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    title: 'Personopplysninger',
    children: defaultChildren
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
    const group = canvas.getByTestId('123ID');
    await expect(group).toHaveAttribute('id', 'htmlId');
    await expect(group).toHaveClass('dummyClassname');
    await expect(group).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Title',
  args: {
    title: 'Mottaker 1 av fullmakt',
    children: defaultChildren
  },
  argTypes: {
    title: {
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
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading', {
      level: 3
    });
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveTextContent('Mottaker 1 av fullmakt');
    const listItems = canvas.getAllByRole('listitem');
    await expect(listItems).toHaveLength(2);
  }
} satisfies Story`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With TitleAs',
  args: {
    title: 'Mottaker 1 av fullmakt',
    titleAs: 'h4',
    children: defaultChildren
  },
  argTypes: {
    titleAs: {
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
    const heading = canvas.getByRole('heading', {
      level: 4
    });
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveTextContent('Mottaker 1 av fullmakt');
  }
} satisfies Story`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Within ErrorSummary',
  args: {
    title: 'Mottaker 1 av fullmakt',
    children: defaultChildren
  },
  render: WithinErrorSummaryTemplate,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const mainHeading = canvas.getByRole('heading', {
      level: 2
    });
    await expect(mainHeading).toHaveTextContent('For å gå videre må du rette opp i følgende');
    const groupHeadings = canvas.getAllByRole('heading', {
      level: 3
    });
    await expect(groupHeadings).toHaveLength(2);
    await expect(groupHeadings[0]).toHaveTextContent('Mottaker 1 av fullmakt');
    await expect(groupHeadings[1]).toHaveTextContent('Mottaker 2 av fullmakt');
    const links = canvas.getAllByRole('link');
    await expect(links).toHaveLength(9);
  }
} satisfies Story`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Within ErrorSummary on Mobile',
  args: {
    title: 'Mottaker 1 av fullmakt',
    children: defaultChildren
  },
  globals: {
    viewport: {
      value: '--mobile'
    }
  },
  render: WithinErrorSummaryTemplate,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const mainHeading = canvas.getByRole('heading', {
      level: 2
    });
    await expect(mainHeading).toHaveTextContent('For å gå videre må du rette opp i følgende');
    const groupHeadings = canvas.getAllByRole('heading', {
      level: 3
    });
    await expect(groupHeadings).toHaveLength(2);
    await expect(groupHeadings[0]).toHaveTextContent('Mottaker 1 av fullmakt');
    await expect(groupHeadings[1]).toHaveTextContent('Mottaker 2 av fullmakt');
    const links = canvas.getAllByRole('link');
    await expect(links).toHaveLength(9);
  }
} satisfies Story`,...p.parameters?.docs?.source}}};const y=["WithRef","WithAttributes","WithTitle","WithTitleAs","WithinErrorSummary","WithinErrorSummaryOnMobile"],x=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:m,WithRef:d,WithTitle:c,WithTitleAs:u,WithinErrorSummary:g,WithinErrorSummaryOnMobile:p,__namedExportsOrder:y,default:f},Symbol.toStringTag,{value:"Module"}));export{x as E};
//# sourceMappingURL=ErrorSummaryGroup.test.stories-CDp5idcA.js.map
