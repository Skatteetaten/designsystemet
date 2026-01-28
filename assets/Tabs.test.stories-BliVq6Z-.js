import{j as e,r as A}from"./iframe-CBOQuZmX.js";import{B as j}from"./index-BxmwhRWV.js";import{T as t}from"./index-BYntwts4.js";const{expect:n,fn:B,userEvent:P,waitFor:x,within:o}=__STORYBOOK_MODULE_TEST__,I={component:t,title:"Tester/Tabs",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},defaultValue:{table:{disable:!0}},value:{table:{disable:!0}},isMultiline:{table:{disable:!0}},variant:{table:{disable:!0}},hasBorder:{table:{disable:!0}},onChange:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},b={onChange:B(),defaultValue:"tab1"},c=s=>e.jsxs(t,{...s,onChange:r=>{s.onChange?.(r)},children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"tab1",children:"Person"}),e.jsx(t.Tab,{value:"tab2",children:"Bedrift"}),e.jsx(t.Tab,{value:"tab3",children:"Organisasjon"})]}),e.jsx(t.Panel,{value:"tab1",children:"Tabs.Panel Person"}),e.jsx(t.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"}),e.jsx(t.Panel,{value:"tab3",children:"Tabs.Panel Organisasjon"})]}),C=s=>{const[r,a]=A.useState("tab1"),i=l=>{a(l)};return e.jsxs(t,{...s,value:r,children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"tab1",onClick:()=>i("tab1"),children:"Person"}),e.jsx(t.Tab,{value:"tab2",onClick:()=>i("tab2"),children:"Bedrift"}),e.jsx(t.Tab,{value:"tab3",onClick:()=>i("tab3"),children:"Organisasjon"})]}),e.jsx(t.Panel,{value:"tab1",children:"Tabs.Panel Person"}),e.jsx(t.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"}),e.jsx(t.Panel,{value:"tab3",children:"Tabs.Panel Organisasjon"})]})},d={name:"Defaults (A2)",render:c,args:{...b},argTypes:{defaultValue:{table:{disable:!1}}},play:async({canvasElement:s})=>{const a=o(s).getByRole("tab",{name:"Person"});await n(a).toBeInTheDocument()}},u={name:"With Ref (FA1)",args:{...b,ref:s=>{s&&(s.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:s})=>{const a=o(s).getAllByRole("generic")[1];await n(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes (FA2-5, B1)",render:c,args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",defaultValue:"tab1"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:s})=>{const a=o(s).getAllByRole("generic")[1];await n(a).toHaveAttribute("id","htmlId"),await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","nb"),await n(a).toHaveAttribute("data-testid","123ID")}},p={name:"With Variant Compact (A1)",render:c,args:{...b,variant:"compact"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!1}}},T={name:"With DefaultValue",render:c,args:{...b,defaultValue:"tab2",onChange:B()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s})=>{const a=o(s).getByRole("tab",{name:"Bedrift"});await n(a).toBeInTheDocument(),await n(a).toHaveAttribute("aria-selected","true")}},v={name:"With Value",args:{...b,defaultValue:void 0,value:"tab2"},argTypes:{value:{table:{disable:!1}}},render:s=>{const[r,a]=A.useState("tab2"),i=()=>{a(r==="tab1"?"tab2":"tab1")};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{...s,value:r,children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"tab1",children:"Person"}),e.jsx(t.Tab,{value:"tab2",children:"Bedrift"})]}),e.jsx(t.Panel,{value:"tab1",children:"Tabs.Panel - Person"}),e.jsx(t.Panel,{value:"tab2",children:"Tabs.Panel - Bedrift"})]}),e.jsx(j,{onClick:i,children:"ToggleTab"})]})},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s})=>{const r=o(s),a=await r.findByRole("tab",{name:"Bedrift"});await n(a).toHaveAttribute("aria-selected","true");const i=await r.findByRole("button",{name:"ToggleTab"});await P.click(i);const l=await r.findByRole("tab",{name:"Person"});await x(()=>n(l).toHaveAttribute("aria-selected","true")),await x(()=>n(a).toHaveAttribute("aria-selected","false"))}},g={name:"With Aria Roles tabIndex (B1, B2)",render:c,args:{...b,onChange:B()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s,step:r})=>{const a=o(s),i=a.getByRole("tab",{name:"Person"});await n(i).toBeInTheDocument();const l=a.getByRole("tablist");await n(l).toBeInTheDocument();const S=a.getByRole("tabpanel");await n(S).toBeInTheDocument(),await r("Sjekk om korrekt tabIndex på aktiv og ikke-aktive tabs",async()=>{const k=a.getAllByRole("tab");Object.entries(k).forEach(async([E,R],H)=>{await n(R).toHaveAttribute("tabIndex",H===0?"0":"-1")})})}},h={name:"With Multiline (A5)",args:{...b,isMultiline:!0},argTypes:{isMultiline:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!1}},globals:{viewport:{value:"--mobile"}},render:s=>e.jsxs(t,{...s,children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"tab1",children:"Person"}),e.jsx(t.Tab,{value:"tab2",children:"Bedrift"}),e.jsx(t.Tab,{value:"tab3",children:"Ubehandlede saker (+99)"}),e.jsx(t.Tab,{value:"tab4",children:"Behandlede saker (1)"})]}),e.jsx(t.Panel,{value:"tab1",children:"Tabs.Panel - Person"}),e.jsx(t.Panel,{value:"tab2",children:"Tabs.Panel - Bedrift"}),e.jsx(t.Panel,{value:"tab3",children:"Tabs.Panel - Ubehandlede saker (+99)"}),e.jsx(t.Panel,{value:"tab4",children:"Tabs.Panel - Behandlede"})]})},f={name:"With Tab Click (A2, B2, B3, B4)",render:c,args:{...b,onChange:B()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:s,canvasElement:r})=>{const a=o(r),i=a.getByRole("tab",{name:"Person"});await n(i).toBeInTheDocument(),await n(i).toHaveAttribute("aria-selected","true"),await n(i).toHaveAttribute("tabIndex","0");const l=a.getByRole("tab",{name:"Bedrift"});await P.click(l),await x(()=>n(s.onChange).toHaveBeenCalled()),await n(i).toHaveAttribute("aria-selected","false"),await n(i).toHaveAttribute("tabIndex","-1")}},y={name:"With Tab OnClick Event",render:C,args:{...b},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s})=>{const r=o(s),a=r.getByRole("tab",{name:"Person"});await n(a).toBeInTheDocument(),await n(a).toHaveAttribute("aria-selected","true"),await n(a).toHaveAttribute("tabIndex","0");const i=r.getByRole("tab",{name:"Bedrift"});await P.click(i),await n(a).toHaveAttribute("aria-selected","false"),await n(a).toHaveAttribute("tabIndex","-1")}},w={render:c,args:{id:"skatt",defaultValue:"tab1"},argTypes:{id:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s})=>{const r=o(s),a=r.getAllByRole("generic")[1];await n(a).toHaveAttribute("id","skatt");const i=r.getByRole("tab",{name:"Person"});await n(i).toHaveAttribute("aria-controls","ds-tab-panel-skatt-tab1"),await n(i).toHaveAttribute("id","ds-tab-id-skatt-tab1");const l=r.getByRole("tabpanel");await n(l).toHaveAttribute("id","ds-tab-panel-skatt-tab1"),await n(l).toHaveAttribute("aria-labelledby","ds-tab-id-skatt-tab1")}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole('tab', {
      name: 'Person'
    });
    await expect(tab).toBeInTheDocument();
  }
} satisfies Story`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole('generic')[1];
    await expect(tabs).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5, B1)',
  render: TemplateTabs,
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
} satisfies Story`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  },
  parameters: {
    imageSnapshot: {
      disable: false
    }
  }
} satisfies Story`,...p.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With DefaultValue',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    defaultValue: 'tab2',
    onChange: fn()
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
    const secondTab = canvas.getByRole('tab', {
      name: 'Bedrift'
    });
    await expect(secondTab).toBeInTheDocument();
    await expect(secondTab).toHaveAttribute('aria-selected', 'true');
  }
} satisfies Story`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Aria Roles tabIndex (B1, B2)',
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
    canvasElement,
    step
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const firstTab = canvas.getByRole('tab', {
      name: 'Person'
    });
    await expect(firstTab).toBeInTheDocument();
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
} satisfies Story`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    imageSnapshot: {
      disable: false
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
} satisfies Story`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};const W=["Defaults","WithRef","WithAttributes","WithVariantCompact","WithDefaultValue","WithValue","WithAriaRolesTabindex","WithMultiline","WithTabClick","WithTabOnClickEvent","WithId"],F=Object.freeze(Object.defineProperty({__proto__:null,Defaults:d,WithAriaRolesTabindex:g,WithAttributes:m,WithDefaultValue:T,WithId:w,WithMultiline:h,WithRef:u,WithTabClick:f,WithTabOnClickEvent:y,WithValue:v,WithVariantCompact:p,__namedExportsOrder:W,default:I},Symbol.toStringTag,{value:"Module"}));export{F as T};
//# sourceMappingURL=Tabs.test.stories-BliVq6Z-.js.map
