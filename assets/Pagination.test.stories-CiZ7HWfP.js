import{d as c,j as g,r as E}from"./iframe-s2_bNgHU.js";import{P as k,g as I,a as N}from"./index-BjBiKebW.js";import{L as W}from"./index-CJpzHRrE.js";const{useArgs:R}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:L,expect:s,fireEvent:d,waitFor:A,within:l,userEvent:D}=__STORYBOOK_MODULE_TEST__,H={component:k,title:"Tester/Pagination",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},currentPage:{table:{disable:!0}},defaultCurrent:{table:{disable:!0}},pageSize:{table:{disable:!0}},totalItems:{table:{disable:!0}},sibling:{table:{disable:!0}},hidePrevNextButtonTitle:{table:{disable:!0}},hidePageSummary:{table:{disable:!0},control:!1},ariaLabel:{table:{disable:!0}},onChange:{table:{disable:!0}}},args:{defaultCurrent:void 0,currentPage:void 0},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},o={pageSize:N(),totalItems:70,sibling:I(),onChange:L()},m={name:"With Ref (FA1)",args:{...o,defaultCurrent:1,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}}},p={name:"With Attributes (FA2-5)",args:{...o,defaultCurrent:1,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:t})=>{const e=l(t).getByRole("navigation");await s(e).toHaveAttribute("id","htmlId"),await s(e).toHaveClass("dummyClassname"),await s(e).toHaveAttribute("lang","nb"),await s(e).toHaveAttribute("data-testid","123ID")}},v={name:"Defaults",args:{defaultCurrent:1,totalItems:15}},b={name:"Hide Prev/Next-button Title (A1)",args:{...o,defaultCurrent:1,hidePrevNextButtonTitle:!0},argTypes:{hidePrevNextButtonTitle:{table:{disable:!1}}}},y={name:"With Prev Next Text (A2)",args:{...o,defaultCurrent:2},play:async({canvasElement:t})=>{const a=l(t),e=a.getByRole("button",{name:c.t("ds_navigation:pagination.NextButtonTitle")});await s(e).toBeInTheDocument();const n=a.getByRole("button",{name:c.t("ds_navigation:pagination.PreviousButtonTitle")});await s(n).toBeInTheDocument()}},B={name:"With List Length (A3)",args:{...o,pageSize:4,defaultCurrent:1},argTypes:{pageSize:{table:{disable:!1}}},play:async({canvasElement:t,step:a})=>{const e=l(t),n=e.getByText("Viser 1–4 av 70");await s(n).toBeInTheDocument();const i=e.getByRole("button",{name:c.t("ds_navigation:pagination.NextButtonTitle")});await d.click(i),await a("Antall elementer på side er satt til 4 i testen. Beregnet verdier er nå økt og pageSummary viser dette",async()=>{const r=e.getByText("Viser 5–8 av 70");await s(r).toBeInTheDocument()}),await d.click(i),await a("Test 9-12",async()=>{const r=e.getByText("Viser 9–12 av 70");await s(r).toBeInTheDocument()})}},h={name:"Width Sibling (A4)",args:{...o,defaultCurrent:3,sibling:2},argTypes:{sibling:{table:{disable:!1}},defaultCurrent:{table:{disable:!1}}},play:async({canvasElement:t,step:a})=>{const e=l(t);await a("Sjekker om knapper med verdi 1,2,4,5 eksisterer",async()=>{const i=e.getAllByRole("button",{name:/\d/,current:!1}).map(r=>r.textContent);await s(i).toEqual(s.arrayContaining(["1","2","4","5"]))})}},f={name:"With Navigation (A7, B2 delvis)",args:{...o,defaultCurrent:2},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t,args:a,step:e})=>{const n=l(t);await e("Klikk på side 7-knappen",async()=>{const i=n.getByRole("button",{name:"7"});await d.click(i),await A(()=>s(a.onChange).toHaveBeenCalledWith(7));const r=n.getByRole("button",{name:"7"});await s(r).toHaveAttribute("aria-current","true")}),await e("Klikk på forrige-knappen",async()=>{const i=n.getByRole("button",{name:c.t("ds_navigation:pagination.PreviousButtonTitle")});await d.click(i),await A(()=>s(a.onChange).toHaveBeenCalledWith(6));const r=n.getByRole("button",{name:"6"});await s(r).toHaveAttribute("aria-current","true")}),await e("Klikk på neste-knappen",async()=>{const i=n.getByRole("button",{name:c.t("ds_navigation:pagination.NextButtonTitle")});await d.click(i),await A(()=>s(a.onChange).toHaveBeenCalledWith(7));const r=n.getByRole("button",{name:"7"});await s(r).toHaveAttribute("aria-current","true")})}},S={name:"PrevNext Alternative Label (B5)",args:{...o,defaultCurrent:1,hidePrevNextButtonTitle:!0},argTypes:{hidePrevNextButtonTitle:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t,args:a})=>{const e=l(t),n=e.getByRole("button",{name:c.t("ds_navigation:pagination.NextButtonTitle")});await s(n).toBeInTheDocument(),await d.click(n),await s(a.onChange).toHaveBeenCalled();const i=e.getByRole("button",{name:c.t("ds_navigation:pagination.PreviousButtonTitle")});await s(i).toBeInTheDocument()}},u=[{navn:"Donald Duck",dato:"25.03.20",type:"Bruker"},{navn:"Robbie Wiliams",dato:"25.03.15",type:"Admin"},{navn:"Minnie Mouse",dato:"12.05.18",type:"Bruker"},{navn:"Katy Perry",dato:"01.01.23",type:"Admin"},{navn:"Langbein",dato:"14.02.22",type:"Bruker"},{navn:"Justin Bieber",dato:"08.03.19",type:"Bruker"}],_=(t,a,e)=>{const n=(a-1)*e;return t.map((i,r)=>g.jsxs(W.Element,{children:[r+1," ",i.navn]},`${i.navn}-${i.dato}`)).slice(n,n+e)},x={name:"With List Limit (A6, B3)",args:{pageSize:6,totalItems:u.length*7,sibling:I(),currentPage:1},argTypes:{currentPage:{table:{disable:!1}}},render:t=>{const[{currentPage:a},e]=R(),n=5,i=r=>{e({currentPage:r})};return g.jsxs(g.Fragment,{children:[g.jsx(W,{hasSpacing:!0,children:_(u.concat(u,u,u,u,u,u),a,n)}),g.jsx(k,{...t,pageSize:n,currentPage:a,onChange:i})]})}},w={name:"With Custom Aria Label (B1 delvis)",args:{...o,ariaLabel:"Egen tekst på nav-elementets aria-label",defaultCurrent:1},argTypes:{ariaLabel:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=l(t).getByRole("navigation");await s(e).toHaveAttribute("aria-label","Egen tekst på nav-elementets aria-label")}},T={name:"With Page Summary (A6)",args:{...o,defaultCurrent:1},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=l(t).getByText("Viser 1–10 av 70");await s(e).toBeInTheDocument()}},P={name:"With Page Summary Hidden (A5)",args:{...o,hidePageSummary:!0,defaultCurrent:1},argTypes:{hidePageSummary:{table:{disable:!1}}},play:async({canvasElement:t,step:a})=>{const e=l(t);await a("Summary er skjult for bruker, men synlig for skjermleser",async()=>{const n=e.getByText("Viser 1–10 av 70");await s(n).toBeInTheDocument(),await s(n).toHaveStyle({width:"1px"})})}},C={parameters:{imageSnapshot:{disableSnapshot:!0}},args:{totalItems:30,sibling:1,pageSize:5,currentPage:1},argTypes:{currentPage:{table:{disable:!1}}},play:async({canvasElement:t,args:a})=>{const e=l(t),n=e.getByText("Viser 1–5 av 30");await s(n).toBeInTheDocument();const i=e.getByRole("button",{name:c.t("ds_navigation:pagination.NextButtonTitle")});await D.click(i),await A(()=>s(a.onChange).toHaveBeenCalled);const r=await e.findByRole("button",{name:"2",current:!0});await s(r).toBeInTheDocument()},render:()=>{const[t,a]=E.useState(1),e=n=>{a(n)};return g.jsx(k,{totalItems:30,sibling:1,pageSize:5,currentPage:t,onChange:e})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    defaultCurrent: 1,
    ref: (instance: HTMLElement | null): void => {
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
  }
} satisfies Story`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    defaultCurrent: 1,
    id: 'htmlId',
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
    const nav = canvas.getByRole('navigation');
    await expect(nav).toHaveAttribute('id', 'htmlId');
    await expect(nav).toHaveClass('dummyClassname');
    await expect(nav).toHaveAttribute('lang', 'nb');
    await expect(nav).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Defaults',
  args: {
    defaultCurrent: 1,
    totalItems: 15
  }
} satisfies Story`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Hide Prev/Next-button Title (A1)',
  args: {
    ...defaultArgs,
    defaultCurrent: 1,
    hidePrevNextButtonTitle: true
  },
  argTypes: {
    hidePrevNextButtonTitle: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Prev Next Text (A2)',
  args: {
    ...defaultArgs,
    defaultCurrent: 2
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const nextButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_navigation:pagination.NextButtonTitle')
    });
    await expect(nextButton).toBeInTheDocument();
    const previousButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_navigation:pagination.PreviousButtonTitle')
    });
    await expect(previousButton).toBeInTheDocument();
  }
} satisfies Story`,...y.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'With List Length (A3)',
  args: {
    ...defaultArgs,
    pageSize: 4,
    defaultCurrent: 1
  },
  argTypes: {
    pageSize: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const paginationStatus = canvas.getByText('Viser 1–4 av 70');
    await expect(paginationStatus).toBeInTheDocument();
    const nextButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_navigation:pagination.NextButtonTitle')
    });
    await fireEvent.click(nextButton);
    await step('Antall elementer på side er satt til 4 i testen. Beregnet verdier er nå økt og pageSummary viser dette', async () => {
      const paginationStatusNextPage = canvas.getByText('Viser 5–8 av 70'); // Tankestrek
      await expect(paginationStatusNextPage).toBeInTheDocument();
    });
    await fireEvent.click(nextButton);
    await step('Test 9-12', async () => {
      const paginationStatusNextPage = canvas.getByText('Viser 9–12 av 70'); // Tankestrek
      await expect(paginationStatusNextPage).toBeInTheDocument();
    });
  }
} satisfies Story`,...B.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Width Sibling (A4)',
  args: {
    ...defaultArgs,
    defaultCurrent: 3,
    sibling: 2
  },
  argTypes: {
    sibling: {
      table: {
        disable: false
      }
    },
    defaultCurrent: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await step('Sjekker om knapper med verdi 1,2,4,5 eksisterer', async () => {
      const pageButtons = canvas.getAllByRole('button', {
        name: /\\d/,
        current: false
      });
      const pages = pageButtons.map(button => button.textContent);
      await expect(pages).toEqual(expect.arrayContaining(['1', '2', '4', '5']));
    });
  }
} satisfies Story`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With Navigation (A7, B2 delvis)',
  args: {
    ...defaultArgs,
    defaultCurrent: 2
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement,
    args,
    step
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await step('Klikk på side 7-knappen', async () => {
      const pageButton = canvas.getByRole('button', {
        name: '7'
      });
      await fireEvent.click(pageButton);
      await waitFor(() => expect(args.onChange).toHaveBeenCalledWith(7));
      const currentButton = canvas.getByRole('button', {
        name: '7'
      });
      await expect(currentButton).toHaveAttribute('aria-current', 'true');
    });
    await step('Klikk på forrige-knappen', async () => {
      const previousButton = canvas.getByRole('button', {
        name: dsI18n.t('ds_navigation:pagination.PreviousButtonTitle')
      });
      await fireEvent.click(previousButton);
      await waitFor(() => expect(args.onChange).toHaveBeenCalledWith(6));
      const currentButton = canvas.getByRole('button', {
        name: '6'
      });
      await expect(currentButton).toHaveAttribute('aria-current', 'true');
    });
    await step('Klikk på neste-knappen', async () => {
      const nextButton = canvas.getByRole('button', {
        name: dsI18n.t('ds_navigation:pagination.NextButtonTitle')
      });
      await fireEvent.click(nextButton);
      await waitFor(() => expect(args.onChange).toHaveBeenCalledWith(7));
      const currentButton = canvas.getByRole('button', {
        name: '7'
      });
      await expect(currentButton).toHaveAttribute('aria-current', 'true');
    });
  }
} satisfies Story`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'PrevNext Alternative Label (B5)',
  args: {
    ...defaultArgs,
    defaultCurrent: 1,
    hidePrevNextButtonTitle: true
  },
  argTypes: {
    hidePrevNextButtonTitle: {
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
    canvasElement,
    args
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const nextButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_navigation:pagination.NextButtonTitle')
    });
    await expect(nextButton).toBeInTheDocument();
    await fireEvent.click(nextButton);
    await expect(args.onChange).toHaveBeenCalled();
    const previousButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_navigation:pagination.PreviousButtonTitle')
    });
    await expect(previousButton).toBeInTheDocument();
  }
} satisfies Story`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With List Limit (A6, B3)',
  args: {
    pageSize: 6,
    totalItems: data.length * 7,
    sibling: getDefaultSibling(),
    currentPage: 1
  },
  argTypes: {
    currentPage: {
      table: {
        disable: false
      }
    }
  },
  render: (args): JSX.Element => {
    const [{
      currentPage
    }, updateArgs] = useArgs();
    const pageSize = 5;
    const onChange = (page: number): void => {
      updateArgs({
        currentPage: page
      });
    };
    return <>
        <List hasSpacing>
          {listWithLimit(data.concat(data, data, data, data, data, data), currentPage, pageSize)}
        </List>
        <Pagination {...args} pageSize={pageSize} currentPage={currentPage} onChange={onChange} />
      </>;
  }
} satisfies Story`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'With Custom Aria Label (B1 delvis)',
  args: {
    ...defaultArgs,
    ariaLabel: 'Egen tekst på nav-elementets aria-label',
    defaultCurrent: 1
  },
  argTypes: {
    ariaLabel: {
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
    const nav = canvas.getByRole('navigation');
    await expect(nav).toHaveAttribute('aria-label', 'Egen tekst på nav-elementets aria-label');
  }
} satisfies Story`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With Page Summary (A6)',
  args: {
    ...defaultArgs,
    defaultCurrent: 1
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
    // Antall elementer på side OG antall sider representert med siste page-button
    const paginationStatus = canvas.getByText('Viser 1–10 av 70');
    await expect(paginationStatus).toBeInTheDocument();
  }
} satisfies Story`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'With Page Summary Hidden (A5)',
  args: {
    ...defaultArgs,
    hidePageSummary: true,
    defaultCurrent: 1
  },
  argTypes: {
    hidePageSummary: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await step('Summary er skjult for bruker, men synlig for skjermleser', async () => {
      const paginationStatus = canvas.getByText('Viser 1–10 av 70');
      await expect(paginationStatus).toBeInTheDocument();
      await expect(paginationStatus).toHaveStyle({
        width: '1px'
      });
    });
  }
} satisfies Story`,...P.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  args: {
    totalItems: 30,
    sibling: 1,
    pageSize: 5,
    currentPage: 1
  },
  argTypes: {
    currentPage: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement,
    args
  }): Promise<void> => {
    const canvas = within(canvasElement);
    // Antall elementer på side OG antall sider representert med siste page-button
    const paginationStatus = canvas.getByText('Viser 1–5 av 30');
    await expect(paginationStatus).toBeInTheDocument();
    const nextButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_navigation:pagination.NextButtonTitle')
    });
    await userEvent.click(nextButton);
    await waitFor(() => expect(args.onChange).toHaveBeenCalled);
    const currentButton = await canvas.findByRole('button', {
      name: '2',
      current: true
    });
    await expect(currentButton).toBeInTheDocument();
  },
  render: (): JSX.Element => {
    const [currentPage, setCurrentPage] = useState(1);
    const onChange = (page: number): void => {
      setCurrentPage(page);
    };
    return <Pagination totalItems={30} sibling={1} pageSize={5} currentPage={currentPage} onChange={onChange} />;
  }
} satisfies Story`,...C.parameters?.docs?.source}}};const z=["WithRef","WithAttributes","Defaults","HidePrevNextButtonTitle","WithTextNextPref","WithListLength","Sibling","WithNavigation","WithPrevNextLabel","WithListLimit","WithCustomAriaLabel","WithPageSummary","WithHiddenPageSummary","WithControlled"],V=Object.freeze(Object.defineProperty({__proto__:null,Defaults:v,HidePrevNextButtonTitle:b,Sibling:h,WithAttributes:p,WithControlled:C,WithCustomAriaLabel:w,WithHiddenPageSummary:P,WithListLength:B,WithListLimit:x,WithNavigation:f,WithPageSummary:T,WithPrevNextLabel:S,WithRef:m,WithTextNextPref:y,__namedExportsOrder:z,default:H},Symbol.toStringTag,{value:"Module"}));export{V as P};
//# sourceMappingURL=Pagination.test.stories-CiZ7HWfP.js.map
