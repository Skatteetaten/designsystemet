import{j as t,d as B,r as w}from"./iframe-s2_bNgHU.js";import{B as a}from"./index-BjBiKebW.js";const{expect:s,fireEvent:A,waitFor:k,within:o}=__STORYBOOK_MODULE_TEST__,g="htmlId",S={component:a,title:"Tester/Breadcrumbs",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}}},args:{children:t.jsxs(a.List,{children:[t.jsx(a.Item,{children:t.jsx(a.Link,{href:"#",children:"Bedrift og organisasjon"})}),t.jsx(a.Item,{children:t.jsx(a.Link,{href:"#",children:"Avgifter"})}),t.jsx(a.Item,{children:t.jsx(a.Link,{href:"#",children:"Avgifter på bil og kjøretøy"})}),t.jsx(a.Item,{children:t.jsx(a.Link,{href:"#",children:"Vektårsavgift"})})]})},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},l={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=o(e).getByRole("navigation");await s(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes(FA2-5)",args:{id:g,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const n=o(e).getByRole("navigation");await s(n).toHaveClass("dummyClassname"),await s(n).toHaveAttribute("id",g),await s(n).toHaveAttribute("lang","nb"),await s(n).toHaveAttribute("data-testid","123ID")}},d={name:"Defaults (A1, A2)"},v=[{key:"i1",href:"#",title:"Bedrift og organisasjon"},{key:"i2",href:"#",title:"Avgifter"},{key:"i3",href:"#",title:"Avgifter på bil og kjøretøy"},{key:"i4",href:"#",title:"Vektårsavgift"}],y=()=>t.jsx(a,{children:t.jsx(a.List,{children:v.map(e=>t.jsx(a.Item,{children:t.jsx(a.Link,{href:e.href,children:e.title})},e.key))})}),x=()=>t.jsx(a,{children:t.jsx(a.List,{shouldCollapse:!1,children:v.map(e=>t.jsx(a.Item,{children:t.jsx(a.Link,{href:e.href,children:e.title})},e.key))})}),m={name:"With Collapse (A1)",globals:{viewport:{value:"--breakpoint-xs"}},render:y,play:async({canvasElement:e})=>{const r=o(e),n=await r.findByRole("button");await s(n).toBeInTheDocument();const i=r.getAllByRole("listitem");await s(i.length).toEqual(3)}},u={name:"With AriaLabel (B1)",parameters:{imageSnapshot:{disable:!0}},render:x,play:async({canvasElement:e})=>{const n=o(e).getByRole("navigation");await s(n).toHaveAttribute("aria-label",B.t("ds_navigation:breadcrumbs.NavAriaLabel"))}},p={name:"Without Collapse (A2)",globals:{viewport:{value:"--breakpoint-xs"}},render:x,play:async({canvasElement:e})=>{const n=o(e).getAllByRole("listitem");await s(n.length).toEqual(v.length)}},b={name:"With Expand Click And Focus(A4 delvis, C1)",globals:{viewport:{value:"--breakpoint-xs"}},render:y,play:async({canvasElement:e})=>{const r=o(e),n=await r.findByRole("button");await s(n).toBeInTheDocument(),await A.click(n),await s(n).not.toBeInTheDocument();const i=r.getAllByRole("link")[0];await k(()=>{s(i).toHaveFocus()})}},h={name:"With Navigation",parameters:{imageSnapshot:{disableSnapshot:!0}},render:()=>{const[e,r]=w.useState(v),n=i=>{r(f=>f.slice(0,e.indexOf(i)+1))};return t.jsx(a,{children:t.jsx(a.List,{children:e.map(i=>t.jsx(a.Item,{children:t.jsx(a.Link,{href:i.href,onClick:f=>{f.preventDefault(),n(i)},children:i.title})},i.key))})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
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
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('navigation');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes(FA2-5)',
  args: {
    id: elementId,
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
    const container = canvas.getByRole('navigation');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A1, A2)'
} satisfies Story`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Collapse (A1)',
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  },
  render: DefaultTemplate,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const expandButton = await canvas.findByRole('button');
    await expect(expandButton).toBeInTheDocument();
    const listItems = canvas.getAllByRole('listitem');
    await expect(listItems.length).toEqual(3);
  }
} satisfies Story`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With AriaLabel (B1)',
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  render: WithoutCollapseTemplate,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const nav = canvas.getByRole('navigation');
    await expect(nav).toHaveAttribute('aria-label', dsI18n.t('ds_navigation:breadcrumbs.NavAriaLabel'));
  }
} satisfies Story`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Without Collapse (A2)',
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  },
  render: WithoutCollapseTemplate,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const listItems = canvas.getAllByRole('listitem');
    await expect(listItems.length).toEqual(breadcrumbsData.length);
  }
} satisfies Story`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With Expand Click And Focus(A4 delvis, C1)',
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  },
  render: DefaultTemplate,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const expandButton = await canvas.findByRole('button');
    await expect(expandButton).toBeInTheDocument();
    await fireEvent.click(expandButton);
    await expect(expandButton).not.toBeInTheDocument();
    const firstLink = canvas.getAllByRole('link')[0];
    await waitFor(() => {
      expect(firstLink).toHaveFocus();
    });
  }
} satisfies Story`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Navigation',
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  render: (): JSX.Element => {
    const [breadcrumbs, setBreadcrumbs] = useState(breadcrumbsData);
    const handleNavigation = (item: (typeof breadcrumbs)[number]): void => {
      setBreadcrumbs(prevBreadcrumbs => prevBreadcrumbs.slice(0, breadcrumbs.indexOf(item) + 1));
    };
    return <Breadcrumbs>
        <Breadcrumbs.List>
          {breadcrumbs.map(item => <Breadcrumbs.Item key={item.key}>
              <Breadcrumbs.Link href={item.href} onClick={e => {
            e.preventDefault();
            handleNavigation(item);
          }}>
                {item.title}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>)}
        </Breadcrumbs.List>
      </Breadcrumbs>;
  }
} satisfies Story`,...h.parameters?.docs?.source}}};const I=["WithRef","WithAttributes","Defaults","WithCollapse","WithAriaLabel","WithoutCollapse","WithExpandClickAndFocus","WithNavigation"],E=Object.freeze(Object.defineProperty({__proto__:null,Defaults:d,WithAriaLabel:u,WithAttributes:c,WithCollapse:m,WithExpandClickAndFocus:b,WithNavigation:h,WithRef:l,WithoutCollapse:p,__namedExportsOrder:I,default:S},Symbol.toStringTag,{value:"Module"}));export{E as B};
//# sourceMappingURL=Breadcrumbs.test.stories-D-yciHas.js.map
