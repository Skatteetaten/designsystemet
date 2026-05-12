import{j as a,r as x}from"./iframe-BQX7p2fO.js";import{B as H}from"./index-ZQJoFOIZ.js";import{T as e}from"./index-BWAuWBOL.js";import{y as j}from"./index-CR6dT-y4.js";const{expect:n,fn:R,userEvent:B,waitFor:w,within:b}=__STORYBOOK_MODULE_TEST__,I={component:e,title:"Tester/Tabs",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},defaultValue:{table:{disable:!0}},value:{table:{disable:!0}},isMultiline:{table:{disable:!0}},variant:{table:{disable:!0}},hasBorder:{table:{disable:!0}},onChange:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},o={defaultValue:"tab1"},y=s=>a.jsxs(e,{...s,onChange:r=>{s.onChange?.(r)},children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"tab1",children:"Person"}),a.jsx(e.Tab,{value:"tab2",children:"Bedrift"}),a.jsx(e.Tab,{value:"tab3",svgPath:j,children:"Organisasjon"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"}),a.jsx(e.Panel,{value:"tab3",children:"Tabs.Panel Organisasjon"})]}),W=s=>{const[r,t]=x.useState("tab1"),i=l=>{t(l)};return a.jsxs(e,{...s,value:r,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"tab1",onClick:()=>i("tab1"),children:"Person"}),a.jsx(e.Tab,{value:"tab2",onClick:()=>i("tab2"),children:"Bedrift"}),a.jsx(e.Tab,{value:"tab3",onClick:()=>i("tab3"),children:"Organisasjon"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"}),a.jsx(e.Panel,{value:"tab3",children:"Tabs.Panel Organisasjon"})]})},c={name:"With Ref (FA1)",args:{...o,ref:s=>{s&&(s.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s})=>{const t=b(s).getAllByRole("generic")[1];await n(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={name:"With Attributes (FA2-5, B1)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",defaultValue:"tab1"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:s})=>{const t=b(s).getAllByRole("generic")[1];await n(t).toHaveAttribute("id","htmlId"),await n(t).toHaveClass("dummyClassname"),await n(t).toHaveAttribute("lang","nb"),await n(t).toHaveAttribute("data-testid","123ID")}},u={name:"Defaults (A2)",render:y,args:{...o},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}},play:async({canvasElement:s,step:r})=>{const t=b(s),i=t.getByRole("tab",{name:"Person"});await n(i).toBeInTheDocument(),await n(i).toHaveAttribute("aria-selected","true");const l=t.getByRole("tablist");await n(l).toBeInTheDocument();const P=t.getByRole("tabpanel");await n(P).toBeInTheDocument(),await r("Sjekk om korrekt tabIndex på aktiv og ikke-aktive tabs",async()=>{const A=t.getAllByRole("tab");Object.entries(A).forEach(async([E,S],k)=>{await n(S).toHaveAttribute("tabIndex",k===0?"0":"-1")})})}},m={name:"With Variant Compact (A1)",render:y,args:{...o,variant:"compact"},argTypes:{variant:{table:{disable:!1}}}},p={name:"With Border (A1)",render:y,args:{...o,hasBorder:!0},argTypes:{hasBorder:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible"]}}},v={name:"With Value",args:{...o,defaultValue:void 0,value:"tab2"},argTypes:{value:{table:{disable:!1}}},render:s=>{const[r,t]=x.useState("tab2"),i=()=>{t(r==="tab1"?"tab2":"tab1")};return a.jsxs(a.Fragment,{children:[a.jsxs(e,{...s,value:r,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"tab1",children:"Person"}),a.jsx(e.Tab,{value:"tab2",children:"Bedrift"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel - Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel - Bedrift"})]}),a.jsx(H,{onClick:i,children:"ToggleTab"})]})},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s})=>{const r=b(s),t=await r.findByRole("tab",{name:"Bedrift"});await n(t).toHaveAttribute("aria-selected","true");const i=await r.findByRole("button",{name:"ToggleTab"});await B.click(i);const l=await r.findByRole("tab",{name:"Person"});await w(()=>n(l).toHaveAttribute("aria-selected","true")),await w(()=>n(t).toHaveAttribute("aria-selected","false"))}},T={name:"With Multiline (A5)",args:{...o,isMultiline:!0},argTypes:{isMultiline:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}},render:s=>a.jsxs(e,{...s,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"tab1",children:"Person"}),a.jsx(e.Tab,{value:"tab2",children:"Bedrift"}),a.jsx(e.Tab,{value:"tab3",children:"Ubehandlede saker (+99)"}),a.jsx(e.Tab,{value:"tab4",children:"Behandlede saker (1)"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel - Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel - Bedrift"}),a.jsx(e.Panel,{value:"tab3",children:"Tabs.Panel - Ubehandlede saker (+99)"}),a.jsx(e.Panel,{value:"tab4",children:"Tabs.Panel - Behandlede"})]})},h={name:"With Tab Click (A2, B2, B3, B4)",render:y,args:{...o,onChange:R()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:s,canvasElement:r})=>{const t=b(r),i=t.getByRole("tab",{name:"Person"});await n(i).toBeInTheDocument(),await n(i).toHaveAttribute("aria-selected","true"),await n(i).toHaveAttribute("tabIndex","0");const l=t.getByRole("tab",{name:"Bedrift"});await B.click(l),await w(()=>n(s.onChange).toHaveBeenCalled()),await n(i).toHaveAttribute("aria-selected","false"),await n(i).toHaveAttribute("tabIndex","-1")}},g={name:"With Tab OnClick Event",render:W,args:{...o},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s})=>{const r=b(s),t=r.getByRole("tab",{name:"Person"});await n(t).toBeInTheDocument(),await n(t).toHaveAttribute("aria-selected","true"),await n(t).toHaveAttribute("tabIndex","0");const i=r.getByRole("tab",{name:"Bedrift"});await B.click(i),await n(t).toHaveAttribute("aria-selected","false"),await n(t).toHaveAttribute("tabIndex","-1")}},f={render:y,args:{id:"skatt",defaultValue:"tab1"},argTypes:{id:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s})=>{const r=b(s),t=r.getAllByRole("generic")[1];await n(t).toHaveAttribute("id","skatt");const i=r.getByRole("tab",{name:"Person"});await n(i).toHaveAttribute("aria-controls","ds-tab-panel-skatt-tab1"),await n(i).toHaveAttribute("id","ds-tab-id-skatt-tab1");const l=r.getByRole("tabpanel");await n(l).toHaveAttribute("id","ds-tab-panel-skatt-tab1"),await n(l).toHaveAttribute("aria-labelledby","ds-tab-id-skatt-tab1")}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
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
    const tabs = canvas.getAllByRole('generic')[1];
    await expect(tabs).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5, B1)',
  args: {
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    defaultValue: 'tab1'
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
    imageSnapshot: {
      disableSnapshot: true
    },
    a11y: {
      test: 'off'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A2)',
  render: TemplateTabs,
  args: {
    ...defaultArgs
  },
  argTypes: {
    defaultValue: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible']
    }
  },
  play: async ({
    canvasElement,
    step
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const firstTab = canvas.getByRole('tab', {
      name: 'Person'
    });
    await expect(firstTab).toBeInTheDocument();
    await expect(firstTab).toHaveAttribute('aria-selected', 'true');
    const tabList = canvas.getByRole('tablist');
    await expect(tabList).toBeInTheDocument();
    const tabPanel = canvas.getByRole('tabpanel');
    await expect(tabPanel).toBeInTheDocument();
    await step('Sjekk om korrekt tabIndex på aktiv og ikke-aktive tabs', async () => {
      const tabs = canvas.getAllByRole('tab');
      Object.entries(tabs).forEach(async ([_i, tabElement], index) => {
        await expect(tabElement).toHaveAttribute('tabIndex', index === 0 ? '0' : '-1');
      });
    });
  }
} satisfies Story`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Variant Compact (A1)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    variant: 'compact'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Border (A1)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    hasBorder: true
  },
  argTypes: {
    hasBorder: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible']
    }
  }
} satisfies Story`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Value',
  args: {
    ...defaultArgs,
    defaultValue: undefined,
    value: 'tab2'
  },
  argTypes: {
    value: {
      table: {
        disable: false
      }
    }
  },
  render: (args): JSX.Element => {
    const [value, setValue] = useState('tab2');
    const toggleTab = (): void => {
      if (value === 'tab1') {
        setValue('tab2');
      } else {
        setValue('tab1');
      }
    };
    return <>
        <Tabs {...args} value={value}>
          <Tabs.List>
            <Tabs.Tab value={'tab1'}>{'Person'}</Tabs.Tab>
            <Tabs.Tab value={'tab2'}>{'Bedrift'}</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value={'tab1'}>{'Tabs.Panel - Person'}</Tabs.Panel>
          <Tabs.Panel value={'tab2'}>{'Tabs.Panel - Bedrift'}</Tabs.Panel>
        </Tabs>
        <Button onClick={toggleTab}>{'ToggleTab'}</Button>
      </>;
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
    const secondTab = await canvas.findByRole('tab', {
      name: 'Bedrift'
    });
    await expect(secondTab).toHaveAttribute('aria-selected', 'true');
    const button = await canvas.findByRole('button', {
      name: 'ToggleTab'
    });
    await userEvent.click(button);
    const firstTab = await canvas.findByRole('tab', {
      name: 'Person'
    });
    await waitFor(() => expect(firstTab).toHaveAttribute('aria-selected', 'true'));
    await waitFor(() => expect(secondTab).toHaveAttribute('aria-selected', 'false'));
  }
} satisfies Story`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With Multiline (A5)',
  args: {
    ...defaultArgs,
    isMultiline: true
  },
  argTypes: {
    isMultiline: {
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
  render: (args): JSX.Element => {
    return <Tabs {...args}>
        <Tabs.List>
          <Tabs.Tab value={'tab1'}>{'Person'}</Tabs.Tab>
          <Tabs.Tab value={'tab2'}>{'Bedrift'}</Tabs.Tab>
          <Tabs.Tab value={'tab3'}>{'Ubehandlede saker (+99)'}</Tabs.Tab>
          <Tabs.Tab value={'tab4'}>{'Behandlede saker (1)'}</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={'tab1'}>{'Tabs.Panel - Person'}</Tabs.Panel>
        <Tabs.Panel value={'tab2'}>{'Tabs.Panel - Bedrift'}</Tabs.Panel>
        <Tabs.Panel value={'tab3'}>
          {'Tabs.Panel - Ubehandlede saker (+99)'}
        </Tabs.Panel>
        <Tabs.Panel value={'tab4'}>{'Tabs.Panel - Behandlede'}</Tabs.Panel>
      </Tabs>;
  }
} satisfies Story`,...T.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Tab Click (A2, B2, B3, B4)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    onChange: fn()
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const firstTab = canvas.getByRole('tab', {
      name: 'Person'
    });
    await expect(firstTab).toBeInTheDocument();
    await expect(firstTab).toHaveAttribute('aria-selected', 'true');
    await expect(firstTab).toHaveAttribute('tabIndex', '0');
    const secondTab = canvas.getByRole('tab', {
      name: 'Bedrift'
    });
    await userEvent.click(secondTab);
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await expect(firstTab).toHaveAttribute('aria-selected', 'false');
    await expect(firstTab).toHaveAttribute('tabIndex', '-1');
  }
} satisfies Story`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Tab OnClick Event',
  render: TemplateTabsWithOnClick,
  args: {
    ...defaultArgs
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
    const firstTab = canvas.getByRole('tab', {
      name: 'Person'
    });
    await expect(firstTab).toBeInTheDocument();
    await expect(firstTab).toHaveAttribute('aria-selected', 'true');
    await expect(firstTab).toHaveAttribute('tabIndex', '0');
    const secondTab = canvas.getByRole('tab', {
      name: 'Bedrift'
    });
    await userEvent.click(secondTab);
    await expect(firstTab).toHaveAttribute('aria-selected', 'false');
    await expect(firstTab).toHaveAttribute('tabIndex', '-1');
  }
} satisfies Story`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: TemplateTabs,
  args: {
    id: 'skatt',
    defaultValue: 'tab1'
  },
  argTypes: {
    id: {
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'skatt');
    const tab = canvas.getByRole('tab', {
      name: 'Person'
    });
    await expect(tab).toHaveAttribute('aria-controls', 'ds-tab-panel-skatt-tab1');
    await expect(tab).toHaveAttribute('id', 'ds-tab-id-skatt-tab1');
    const tabPanel = canvas.getByRole('tabpanel');
    await expect(tabPanel).toHaveAttribute('id', 'ds-tab-panel-skatt-tab1');
    await expect(tabPanel).toHaveAttribute('aria-labelledby', 'ds-tab-id-skatt-tab1');
  }
} satisfies Story`,...f.parameters?.docs?.source}}};const C=["WithRef","WithAttributes","Defaults","WithVariantCompact","WithBorder","WithValue","WithMultiline","WithTabClick","WithTabOnClickEvent","WithId"],_=Object.freeze(Object.defineProperty({__proto__:null,Defaults:u,WithAttributes:d,WithBorder:p,WithId:f,WithMultiline:T,WithRef:c,WithTabClick:h,WithTabOnClickEvent:g,WithValue:v,WithVariantCompact:m,__namedExportsOrder:C,default:I},Symbol.toStringTag,{value:"Module"}));export{_ as T};
//# sourceMappingURL=Tabs.test.stories-wXXBgRo7.js.map
