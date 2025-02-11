import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as na}from"./index-ClcD9ViR.js";import{f as B,w as o,e as s,u as w,b as sa}from"./index-XVqkR3zt.js";import{B as ra}from"./index-CT5qi75N.js";import{T as t}from"./index-CkLwz20F.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-qxaMszO_.js";import"./index-BYj_oXFq.js";import"./index-DVxy_Kbo.js";import"./index-B1fqGhxG.js";import"./index-DdP4wgFW.js";const{useArgs:ia}=__STORYBOOK_MODULE_PREVIEW_API__,ya={component:t,title:"Tester/Tabs/Tabs",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},defaultValue:{table:{disable:!0}},value:{table:{disable:!0}},isMultiline:{table:{disable:!0}},variant:{table:{disable:!0}},hasBorder:{table:{disable:!0}},onChange:{table:{disable:!0}}}},l={onChange:B(),defaultValue:"tab1"},c=n=>e.jsxs(t,{...n,onChange:r=>{var a;(a=n.onChange)==null||a.call(n,r)},children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"tab1",children:"Person"}),e.jsx(t.Tab,{value:"tab2",children:"Bedrift"}),e.jsx(t.Tab,{value:"tab3",children:"Organisasjon"})]}),e.jsx(t.Panel,{value:"tab1",children:"Tabs.Panel Person"}),e.jsx(t.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"}),e.jsx(t.Panel,{value:"tab3",children:"Tabs.Panel Organisasjon"})]}),la=n=>{const[r,a]=na.useState("tab1"),i=b=>{a(b)};return e.jsxs(t,{...n,value:r,children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"tab1",onClick:()=>i("tab1"),children:"Person"}),e.jsx(t.Tab,{value:"tab2",onClick:()=>i("tab2"),children:"Bedrift"}),e.jsx(t.Tab,{value:"tab3",onClick:()=>i("tab3"),children:"Organisasjon"})]}),e.jsx(t.Panel,{value:"tab1",children:"Tabs.Panel Person"}),e.jsx(t.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"}),e.jsx(t.Panel,{value:"tab3",children:"Tabs.Panel Organisasjon"})]})},d={name:"Defaults (A2)",render:c,args:{...l},argTypes:{defaultValue:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:void 0}},play:async({canvasElement:n})=>{const a=o(n).getByRole("tab",{name:"Person"});await s(a).toBeInTheDocument()}},u={name:"With Ref (FA1)",args:{...l,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=o(n).getAllByRole("generic")[1];await s(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes (FA2-5, B1)",render:c,args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",defaultValue:"tab1"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=o(n).getAllByRole("generic")[1];await s(a).toHaveAttribute("id","htmlId"),await s(a).toHaveClass("dummyClassname"),await s(a).toHaveAttribute("lang","nb"),await s(a).toHaveAttribute("data-testid","123ID")}},T={name:"With Variant Compact (A1)",render:c,args:{...l,variant:"compact"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!1}}},p={name:"With DefaultValue",render:c,args:{...l,defaultValue:"tab2",onChange:B()},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=o(n).getByRole("tab",{name:"Bedrift"});await s(a).toBeInTheDocument(),await s(a).toHaveAttribute("aria-selected","true")}},v={name:"With Value",args:{...l,defaultValue:void 0,value:"tab2"},argTypes:{value:{table:{disable:!1}}},render:n=>{const[{value:r},a]=ia(),i=()=>{a(r==="tab1"?{value:"tab2"}:{value:"tab1"})};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{...n,value:r,children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"tab1",children:"Person"}),e.jsx(t.Tab,{value:"tab2",children:"Bedrift"})]}),e.jsx(t.Panel,{value:"tab1",children:"Tabs.Panel - Person"}),e.jsx(t.Panel,{value:"tab2",children:"Tabs.Panel - Bedrift"})]}),e.jsx(ra,{onClick:i,children:"ToggleTab"})]})},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n,step:r})=>{const a=o(n);await r("Sjekker om Bedrift-tab finnes og har attribut aria-selected:true",async()=>{const i=await a.findByRole("tab",{name:"Bedrift",selected:!0});await s(i).toBeInTheDocument()}),await r("Endrer value-prop utenfra og forventer at Person-tab er aktiv",async()=>{const i=await a.findByRole("button",{name:"ToggleTab"});await w.click(i);const b=await a.findByRole("tab",{name:"Person",selected:!0});await s(b).toBeInTheDocument()}),await r("Ingen test - Nullstiller - Toggler aktiv tab tilbake til tab2/Bedrift for å kunne kjøre test i nettelser flere ganger",async()=>{const i=await a.findByRole("button",{name:"ToggleTab"});await w.click(i)})}},f={name:"With Aria Roles tabIndex (B1, B2)",render:c,args:{...l,onChange:B()},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n,step:r})=>{const a=o(n),i=a.getByRole("tab",{name:"Person"});await s(i).toBeInTheDocument();const b=a.getByRole("tablist");await s(b).toBeInTheDocument();const $=a.getByRole("tabpanel");await s($).toBeInTheDocument(),await r("Sjekk om korrekt tabIndex på aktiv og ikke-aktive tabs",async()=>{const aa=a.getAllByRole("tab");Object.entries(aa).forEach(async([oa,ea],ta)=>{await s(ea).toHaveAttribute("tabIndex",ta===0?"0":"-1")})})}},g={name:"With Multiline (A5)",args:{...l,isMultiline:!0},argTypes:{isMultiline:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!1},viewport:{defaultViewport:"--mobile"}},render:n=>e.jsxs(t,{...n,children:[e.jsxs(t.List,{children:[e.jsx(t.Tab,{value:"tab1",children:"Person"}),e.jsx(t.Tab,{value:"tab2",children:"Bedrift"}),e.jsx(t.Tab,{value:"tab3",children:"Ubehandlede saker (+99)"}),e.jsx(t.Tab,{value:"tab4",children:"Behandlede saker (1)"})]}),e.jsx(t.Panel,{value:"tab1",children:"Tabs.Panel - Person"}),e.jsx(t.Panel,{value:"tab2",children:"Tabs.Panel - Bedrift"}),e.jsx(t.Panel,{value:"tab3",children:"Tabs.Panel - Ubehandlede saker (+99)"}),e.jsx(t.Panel,{value:"tab4",children:"Tabs.Panel - Behandlede"})]})},h={name:"With Tab Click (A2, B2, B3, B4)",render:c,args:{...l,onChange:B()},parameters:{imageSnapshot:{disable:!0}},play:async({args:n,canvasElement:r})=>{const a=o(r),i=a.getByRole("tab",{name:"Person"});await s(i).toBeInTheDocument(),await s(i).toHaveAttribute("aria-selected","true"),await s(i).toHaveAttribute("tabIndex","0");const b=a.getByRole("tab",{name:"Bedrift"});await w.click(b),await sa(()=>s(n.onChange).toHaveBeenCalled()),await s(i).toHaveAttribute("aria-selected","false"),await s(i).toHaveAttribute("tabIndex","-1")}},y={name:"With Tab OnClick Event",render:la,args:{...l},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const r=o(n),a=r.getByRole("tab",{name:"Person"});await s(a).toBeInTheDocument(),await s(a).toHaveAttribute("aria-selected","true"),await s(a).toHaveAttribute("tabIndex","0");const i=r.getByRole("tab",{name:"Bedrift"});await w.click(i),await s(a).toHaveAttribute("aria-selected","false"),await s(a).toHaveAttribute("tabIndex","-1")}};var x,P,A;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
} satisfies Story`,...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var k,j,I;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(j=u.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var R,S,C;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(S=m.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var E,W,H;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(W=T.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var D,V,O;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(V=p.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var F,L,M;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(L=v.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var _,N,U;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(N=f.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var J,X,K;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(X=g.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Y,q,z;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...(z=(q=h.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,Q,Z;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'With Tab OnClick Event',
  render: TemplateTabsWithOnClick,
  args: {
    ...defaultArgs
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
} satisfies Story`,...(Z=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};const wa=["Defaults","WithRef","WithAttributes","WithVariantCompact","WithDefaultValue","WithValue","WithAriaRolesTabindex","WithMultiline","WithTabClick","WithTabOnClickEvent"];export{d as Defaults,f as WithAriaRolesTabindex,m as WithAttributes,p as WithDefaultValue,g as WithMultiline,u as WithRef,h as WithTabClick,y as WithTabOnClickEvent,v as WithValue,T as WithVariantCompact,wa as __namedExportsOrder,ya as default};
//# sourceMappingURL=Tabs.test.stories-DqDAtG11.js.map
