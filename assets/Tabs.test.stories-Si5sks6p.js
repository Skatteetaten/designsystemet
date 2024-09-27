import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{B as $}from"./index-DMYlLpXe.js";import{T as n}from"./index-NyjG6AqI.js";import{f as y,w as o,e as s,u as B,c as aa}from"./index-hUG6DWTw.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CI44Z2h3.js";import"./index-DcL_RvKM.js";import"./index-Cq8GVsVj.js";import"./index-DyVxOV_M.js";import"./index-CCUfsLXI.js";const{useArgs:ea}=__STORYBOOK_MODULE_PREVIEW_API__,pa={component:n,title:"Tester/Tabs/Tabs",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},defaultValue:{table:{disable:!0}},value:{table:{disable:!0}},isMultiline:{table:{disable:!0}},variant:{table:{disable:!0}},hasBorder:{table:{disable:!0}},onChange:{table:{disable:!0}}}},l={onChange:y(),defaultValue:"tab1"},b=t=>e.jsxs(n,{...t,onChange:r=>{var a;(a=t.onChange)==null||a.call(t,r)},children:[e.jsxs(n.List,{children:[e.jsx(n.Tab,{value:"tab1",children:"Person"}),e.jsx(n.Tab,{value:"tab2",children:"Bedrift"}),e.jsx(n.Tab,{value:"tab3",children:"Organisasjon"})]}),e.jsx(n.Panel,{value:"tab1",children:"Tabs.Panel Person"}),e.jsx(n.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"}),e.jsx(n.Panel,{value:"tab3",children:"Tabs.Panel Organisasjon"})]}),d={name:"Defaults (A2)",render:b,args:{...l},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:void 0}},play:async({canvasElement:t})=>{const a=o(t).getByRole("tab",{name:"Person"});await s(a).toBeInTheDocument()}},u={name:"With Ref (FA1)",args:{...l,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const a=o(t).getAllByRole("generic")[1];await s(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes (FA2-5, B1)",render:b,args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",defaultValue:"tab1"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=o(t).getAllByRole("generic")[1];await s(a).toHaveAttribute("id","htmlId"),await s(a).toHaveClass("dummyClassname"),await s(a).toHaveAttribute("lang","nb"),await s(a).toHaveAttribute("data-testid","123ID")}},p={name:"With Variant Compact (A1)",render:b,args:{...l,variant:"compact"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!1}}},T={name:"With DefaultValue",render:b,args:{...l,defaultValue:"tab2",onChange:y()},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const a=o(t).getByRole("tab",{name:"Bedrift"});await s(a).toBeInTheDocument(),await s(a).toHaveAttribute("aria-selected","true")}},v={name:"With Value",args:{...l,defaultValue:void 0,value:"tab2"},argTypes:{value:{table:{disable:!1}}},render:t=>{const[{value:r},a]=ea(),i=()=>{a(r==="tab1"?{value:"tab2"}:{value:"tab1"})};return e.jsxs(e.Fragment,{children:[e.jsxs(n,{...t,value:r,children:[e.jsxs(n.List,{children:[e.jsx(n.Tab,{value:"tab1",children:"Person"}),e.jsx(n.Tab,{value:"tab2",children:"Bedrift"})]}),e.jsx(n.Panel,{value:"tab1",children:"Tabs.Panel - Person"}),e.jsx(n.Panel,{value:"tab2",children:"Tabs.Panel - Bedrift"})]}),e.jsx($,{onClick:i,children:"ToggleTab"})]})},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t,step:r})=>{const a=o(t);await r("Sjekker om Bedrift-tab finnes og har attribut aria-selected:true",async()=>{const i=await a.findByRole("tab",{name:"Bedrift",selected:!0});await s(i).toBeInTheDocument()}),await r("Endrer value-prop utenfra og forventer at Person-tab er aktiv",async()=>{const i=await a.findByRole("button",{name:"ToggleTab"});await B.click(i);const c=await a.findByRole("tab",{name:"Person",selected:!0});await s(c).toBeInTheDocument()}),await r("Ingen test - Nullstiller - Toggler aktiv tab tilbake til tab2/Bedrift for å kunne kjøre test i nettelser flere ganger",async()=>{const i=await a.findByRole("button",{name:"ToggleTab"});await B.click(i)})}},g={name:"With Aria Roles tabIndex (B1, B2)",render:b,args:{...l,onChange:y()},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t,step:r})=>{const a=o(t),i=a.getByRole("tab",{name:"Person"});await s(i).toBeInTheDocument();const c=a.getByRole("tablist");await s(c).toBeInTheDocument();const z=a.getByRole("tabpanel");await s(z).toBeInTheDocument(),await r("Sjekk om korrekt tabIndex på aktiv og ikke-aktive tabs",async()=>{const G=a.getAllByRole("tab");Object.entries(G).forEach(async([ta,Q],Z)=>{await s(Q).toHaveAttribute("tabIndex",Z===0?"0":"-1")})})}},f={name:"With Multiline (A5)",args:{...l,isMultiline:!0},argTypes:{isMultiline:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!1},viewport:{defaultViewport:"--mobile"}},render:t=>e.jsxs(n,{...t,children:[e.jsxs(n.List,{children:[e.jsx(n.Tab,{value:"tab1",children:"Person"}),e.jsx(n.Tab,{value:"tab2",children:"Bedrift"}),e.jsx(n.Tab,{value:"tab3",children:"Ubehandlede saker (+99)"}),e.jsx(n.Tab,{value:"tab4",children:"Behandlede saker (1)"})]}),e.jsx(n.Panel,{value:"tab1",children:"Tabs.Panel - Person"}),e.jsx(n.Panel,{value:"tab2",children:"Tabs.Panel - Bedrift"}),e.jsx(n.Panel,{value:"tab3",children:"Tabs.Panel - Ubehandlede saker (+99)"}),e.jsx(n.Panel,{value:"tab4",children:"Tabs.Panel - Behandlede"})]})},h={name:"With Tab Click (A2, B2, B3, B4)",render:b,args:{...l,onChange:y()},parameters:{imageSnapshot:{disable:!0}},play:async({args:t,canvasElement:r})=>{const a=o(r),i=a.getByRole("tab",{name:"Person"});await s(i).toBeInTheDocument(),await s(i).toHaveAttribute("aria-selected","true"),await s(i).toHaveAttribute("tabIndex","0");const c=a.getByRole("tab",{name:"Bedrift"});await B.click(c),await aa(()=>s(t.onChange).toHaveBeenCalled()),await s(i).toHaveAttribute("aria-selected","false"),await s(i).toHaveAttribute("tabIndex","-1")}};var w,x,P;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    viewport: {
      defaultViewport: undefined
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
} satisfies Story`,...(P=(x=d.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var A,k,R;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
} satisfies Story`,...(R=(k=u.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var I,S,j;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(j=(S=m.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var E,W,C;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(W=p.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var D,V,H;T.parameters={...T.parameters,docs:{...(D=T.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'With DefaultValue',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    defaultValue: 'tab2',
    onChange: fn()
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
    const secondTab = canvas.getByRole('tab', {
      name: 'Bedrift'
    });
    await expect(secondTab).toBeInTheDocument();
    await expect(secondTab).toHaveAttribute('aria-selected', 'true');
  }
} satisfies Story`,...(H=(V=T.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var F,L,M;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    const [{
      value
    }, updateArgs] = useArgs();
    const toggleTab = (): void => {
      if (value === 'tab1') {
        updateArgs({
          value: 'tab2'
        });
      } else {
        updateArgs({
          value: 'tab1'
        });
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
      disable: true
    }
  },
  play: async ({
    canvasElement,
    step
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await step('Sjekker om Bedrift-tab finnes og har attribut aria-selected:true', async () => {
      const secondTab = await canvas.findByRole('tab', {
        name: 'Bedrift',
        selected: true
      });
      await expect(secondTab).toBeInTheDocument();
    });
    await step('Endrer value-prop utenfra og forventer at Person-tab er aktiv', async () => {
      const button = await canvas.findByRole('button', {
        name: 'ToggleTab'
      });
      await userEvent.click(button);
      const firsttab = await canvas.findByRole('tab', {
        name: 'Person',
        selected: true
      });
      await expect(firsttab).toBeInTheDocument();
    });
    await step('Ingen test - Nullstiller - Toggler aktiv tab tilbake til tab2/Bedrift for å kunne kjøre test i nettelser flere ganger', async () => {
      const button = await canvas.findByRole('button', {
        name: 'ToggleTab'
      });
      await userEvent.click(button);
    });
  }
} satisfies Story`,...(M=(L=v.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var _,O,N;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'With Aria Roles tabIndex (B1, B2)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    onChange: fn()
  },
  parameters: {
    imageSnapshot: {
      disable: true
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
} satisfies Story`,...(N=(O=g.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var U,J,X;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
    },
    viewport: {
      defaultViewport: '--mobile'
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
} satisfies Story`,...(X=(J=f.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var K,Y,q;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'With Tab Click (A2, B2, B3, B4)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    onChange: fn()
  },
  parameters: {
    imageSnapshot: {
      disable: true
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
} satisfies Story`,...(q=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};const Ta=["Defaults","WithRef","WithAttributes","WithVariantCompact","WithDefaultValue","WithValue","WithAriaRolesTabindex","WithMultiline","WithTabClick"];export{d as Defaults,g as WithAriaRolesTabindex,m as WithAttributes,T as WithDefaultValue,f as WithMultiline,u as WithRef,h as WithTabClick,v as WithValue,p as WithVariantCompact,Ta as __namedExportsOrder,pa as default};
//# sourceMappingURL=Tabs.test.stories-Si5sks6p.js.map
