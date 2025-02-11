import{j as g}from"./jsx-runtime-CfatFE5O.js";import{f as fe,w as l,e as s,a as d,b as A,u as xe}from"./index-XVqkR3zt.js";import{d as c}from"./index-qxaMszO_.js";import{P as k,g as Se,a as ye}from"./index-Deg9i1H2.js";import{L as Be}from"./index-DdP4wgFW.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CT5qi75N.js";import"./index-BYj_oXFq.js";import"./index-DVxy_Kbo.js";const{useArgs:he}=__STORYBOOK_MODULE_PREVIEW_API__,Le={component:k,title:"Tester/Pagination",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},currentPage:{table:{disable:!0}},defaultCurrent:{table:{disable:!0}},pageSize:{table:{disable:!0}},totalItems:{table:{disable:!0}},sibling:{table:{disable:!0}},hidePrevNextButtonTitle:{table:{disable:!0}},hidePageSummary:{table:{disable:!0},control:!1},ariaLabel:{table:{disable:!0}},onChange:{table:{disable:!0}}},args:{defaultCurrent:void 0,currentPage:void 0}},o={pageSize:Se(),totalItems:70,sibling:ye(),onChange:fe()},m={name:"With Ref (FA1)",args:{...o,defaultCurrent:1,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},p={name:"With Attributes (FA2-5)",args:{...o,defaultCurrent:1,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=l(t).getByRole("navigation");await s(e).toHaveAttribute("id","htmlId"),await s(e).toHaveClass("dummyClassname"),await s(e).toHaveAttribute("lang","nb"),await s(e).toHaveAttribute("data-testid","123ID")}},v={name:"Defaults",args:{defaultCurrent:1,totalItems:15}},b={name:"Hide Prev/Next-button Title (A1)",args:{...o,defaultCurrent:1,hidePrevNextButtonTitle:!0},argTypes:{hidePrevNextButtonTitle:{table:{disable:!1}}}},y={name:"With Prev Next Text (A2)",args:{...o,defaultCurrent:2},play:async({canvasElement:t})=>{const a=l(t),e=a.getByRole("button",{name:c.t("ds_navigation:pagination.NextButtonTitle")});await s(e).toBeInTheDocument();const n=a.getByRole("button",{name:c.t("ds_navigation:pagination.PreviousButtonTitle")});await s(n).toBeInTheDocument()}},B={name:"With List Length (A3)",args:{...o,pageSize:4,defaultCurrent:1},argTypes:{pageSize:{table:{disable:!1}}},play:async({canvasElement:t,step:a})=>{const e=l(t),n=e.getByText("Viser 1–4 av 70");await s(n).toBeInTheDocument();const i=e.getByRole("button",{name:c.t("ds_navigation:pagination.NextButtonTitle")});await d.click(i),await a("Antall elementer på side er satt til 4 i testen. Beregnet verdier er nå økt og pageSummary viser dette",async()=>{const r=e.getByText("Viser 5–8 av 70");await s(r).toBeInTheDocument()}),await d.click(i),await a("Test 9-12",async()=>{const r=e.getByText("Viser 9–12 av 70");await s(r).toBeInTheDocument()})}},h={name:"Width Sibling (A4)",args:{...o,defaultCurrent:3,sibling:2},argTypes:{sibling:{table:{disable:!1}},defaultCurrent:{table:{disable:!1}}},play:async({canvasElement:t,step:a})=>{const e=l(t);await a("Sjekker om knapper med verdi 1,2,4,5 eksisterer",async()=>{const i=e.getAllByRole("button",{name:/\d/,current:!1}).map(r=>r.textContent);await s(i).toEqual(s.arrayContaining(["1","2","4","5"]))})}},f={name:"With Navigation (A7, B2 delvis)",args:{...o,defaultCurrent:2},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t,args:a,step:e})=>{const n=l(t);await e("Klikk på side 7-knappen",async()=>{const i=n.getByRole("button",{name:"7"});await d.click(i),await A(()=>s(a.onChange).toHaveBeenCalledWith(7));const r=n.getByRole("button",{name:"7"});await s(r).toHaveAttribute("aria-current","true")}),await e("Klikk på forrige-knappen",async()=>{const i=n.getByRole("button",{name:c.t("ds_navigation:pagination.PreviousButtonTitle")});await d.click(i),await A(()=>s(a.onChange).toHaveBeenCalledWith(6));const r=n.getByRole("button",{name:"6"});await s(r).toHaveAttribute("aria-current","true")}),await e("Klikk på neste-knappen",async()=>{const i=n.getByRole("button",{name:c.t("ds_navigation:pagination.NextButtonTitle")});await d.click(i),await A(()=>s(a.onChange).toHaveBeenCalledWith(7));const r=n.getByRole("button",{name:"7"});await s(r).toHaveAttribute("aria-current","true")})}},x={name:"PrevNext Alternative Label (B5)",args:{...o,defaultCurrent:1,hidePrevNextButtonTitle:!0},argTypes:{hidePrevNextButtonTitle:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:t,args:a})=>{const e=l(t),n=e.getByRole("button",{name:c.t("ds_navigation:pagination.NextButtonTitle")});await s(n).toBeInTheDocument(),await d.click(n),await s(a.onChange).toHaveBeenCalled();const i=e.getByRole("button",{name:c.t("ds_navigation:pagination.PreviousButtonTitle")});await s(i).toBeInTheDocument()}},u=[{navn:"Donald Duck",dato:"25.03.20",type:"Bruker"},{navn:"Robbie Wiliams",dato:"25.03.15",type:"Admin"},{navn:"Minnie Mouse",dato:"12.05.18",type:"Bruker"},{navn:"Katy Perry",dato:"01.01.23",type:"Admin"},{navn:"Langbein",dato:"14.02.22",type:"Bruker"},{navn:"Justin Bieber",dato:"08.03.19",type:"Bruker"}],we=(t,a,e)=>{const n=(a-1)*e;return t.map((i,r)=>g.jsxs(Be.Element,{children:[r+1," ",i.navn]},`${i.navn}-${i.dato}`)).slice(n,n+e)},S={name:"With List Limit (A6, B3)",args:{pageSize:6,totalItems:u.length*7,sibling:ye(),currentPage:1},render:t=>{const[{currentPage:a},e]=he(),n=5,i=r=>{e({currentPage:r})};return g.jsxs(g.Fragment,{children:[g.jsx(Be,{hasSpacing:!0,children:we(u.concat(u,u,u,u,u,u),a,n)}),g.jsx(k,{...t,pageSize:n,currentPage:a,onChange:i})]})}},w={name:"With Custom Aria Label (B1 delvis)",args:{...o,ariaLabel:"Egen tekst på nav-elementets aria-label",defaultCurrent:1},argTypes:{ariaLabel:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=l(t).getByRole("navigation");await s(e).toHaveAttribute("aria-label","Egen tekst på nav-elementets aria-label")}},T={name:"With Page Summary (A6)",args:{...o,defaultCurrent:1},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=l(t).getByText("Viser 1–10 av 70");await s(e).toBeInTheDocument()}},P={name:"With Page Summary Hidden (A5)",args:{...o,hidePageSummary:!0,defaultCurrent:1},argTypes:{hidePageSummary:{table:{disable:!1}}},play:async({canvasElement:t,step:a})=>{const e=l(t);await a("Summary er skjult for bruker, men synlig for skjermleser",async()=>{const n=e.getByText("Viser 1–10 av 70");await s(n).toBeInTheDocument(),await s(n).toHaveStyle({width:"1px"})})}},C={parameters:{imageSnapshot:{disable:!0}},args:{totalItems:30,sibling:1,pageSize:5,currentPage:1},argTypes:{currentPage:{table:{disable:!1}}},play:async({canvasElement:t,args:a})=>{const e=l(t),n=e.getByText("Viser 1–5 av 30");await s(n).toBeInTheDocument();const i=e.getByRole("button",{name:c.t("ds_navigation:pagination.NextButtonTitle")});await xe.click(i),await A(()=>s(a.onChange).toHaveBeenCalled);const r=await e.findByRole("button",{name:"2",current:!0});await s(r).toBeInTheDocument()},render:t=>{const[{currentPage:a},e]=he(),n=i=>{e({currentPage:i})};return g.jsx(k,{...t,currentPage:a,onChange:n})}};var W,I,N;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
      disable: true
    }
  }
} satisfies Story`,...(N=(I=m.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var E,R,L;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(R=p.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var H,D,_;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Defaults',
  args: {
    defaultCurrent: 1,
    totalItems: 15
  }
} satisfies Story`,...(_=(D=v.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var z,F,j;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(j=(F=b.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var V,K,O;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(K=y.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var M,J,q;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(q=(J=B.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var G,X,$;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
} satisfies Story`,...($=(X=h.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var U,Y,Q;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'With Navigation (A7, B2 delvis)',
  args: {
    ...defaultArgs,
    defaultCurrent: 2
  },
  parameters: {
    imageSnapshot: {
      disable: true
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
} satisfies Story`,...(Q=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var Z,ee,te;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
      disable: true
    },
    HTMLSnapshot: {
      disable: true
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
} satisfies Story`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,se;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'With List Limit (A6, B3)',
  args: {
    pageSize: 6,
    totalItems: data.length * 7,
    sibling: getDefaultSibling(),
    currentPage: 1
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
} satisfies Story`,...(se=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,re,oe;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const nav = canvas.getByRole('navigation');
    await expect(nav).toHaveAttribute('aria-label', 'Egen tekst på nav-elementets aria-label');
  }
} satisfies Story`,...(oe=(re=w.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var le,ue,ce;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'With Page Summary (A6)',
  args: {
    ...defaultArgs,
    defaultCurrent: 1
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
    // Antall elementer på side OG antall sider representert med siste page-button
    const paginationStatus = canvas.getByText('Viser 1–10 av 70');
    await expect(paginationStatus).toBeInTheDocument();
  }
} satisfies Story`,...(ce=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var ge,de,me;P.parameters={...P.parameters,docs:{...(ge=P.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
} satisfies Story`,...(me=(de=P.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ve,be;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    imageSnapshot: {
      disable: true
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
  render: (args): JSX.Element => {
    const [{
      currentPage
    }, setPage] = useArgs();
    const onChange = (page: number): void => {
      setPage({
        currentPage: page
      });
    };
    return <Pagination {...args} currentPage={currentPage} onChange={onChange} />;
  }
} satisfies Story`,...(be=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};const He=["WithRef","WithAttributes","Defaults","HidePrevNextButtonTitle","WithTextNextPref","WithListLength","Sibling","WithNavigation","WithPrevNextLabel","WithListLimit","WithCustomAriaLabel","WithPageSummary","WithHiddenPageSummary","WithControlled"];export{v as Defaults,b as HidePrevNextButtonTitle,h as Sibling,p as WithAttributes,C as WithControlled,w as WithCustomAriaLabel,P as WithHiddenPageSummary,B as WithListLength,S as WithListLimit,f as WithNavigation,T as WithPageSummary,x as WithPrevNextLabel,m as WithRef,y as WithTextNextPref,He as __namedExportsOrder,Le as default};
//# sourceMappingURL=Pagination.test.stories-_Hq-xtJ8.js.map
