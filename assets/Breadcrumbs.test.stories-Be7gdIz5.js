import{j as t,d as J,r as K}from"./iframe-C2uFIQ6s.js";import{B as a}from"./index-BsLSi2HZ.js";const{expect:s,fireEvent:U,waitFor:X,within:o}=__STORYBOOK_MODULE_TEST__,g="htmlId",Y={component:a,title:"Tester/Breadcrumbs/Breadcrumbs",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}}},args:{children:t.jsxs(a.List,{children:[t.jsx(a.Item,{children:t.jsx(a.Link,{href:"#",children:"Bedrift og organisasjon"})}),t.jsx(a.Item,{children:t.jsx(a.Link,{href:"#",children:"Avgifter"})}),t.jsx(a.Item,{children:t.jsx(a.Link,{href:"#",children:"Avgifter på bil og kjøretøy"})}),t.jsx(a.Item,{children:t.jsx(a.Link,{href:"#",children:"Vektårsavgift"})})]})},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},l={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=o(e).getByRole("navigation");await s(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes(FA2-5)",args:{id:g,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const n=o(e).getByRole("navigation");await s(n).toHaveClass("dummyClassname"),await s(n).toHaveAttribute("id",g),await s(n).toHaveAttribute("lang","nb"),await s(n).toHaveAttribute("data-testid","123ID")}},d={name:"Defaults (A1, A2)"},v=[{key:"i1",href:"#",title:"Bedrift og organisasjon"},{key:"i2",href:"#",title:"Avgifter"},{key:"i3",href:"#",title:"Avgifter på bil og kjøretøy"},{key:"i4",href:"#",title:"Vektårsavgift"}],V=()=>t.jsx(a,{children:t.jsx(a.List,{children:v.map(e=>t.jsx(a.Item,{children:t.jsx(a.Link,{href:e.href,children:e.title})},e.key))})}),z=()=>t.jsx(a,{children:t.jsx(a.List,{shouldCollapse:!1,children:v.map(e=>t.jsx(a.Item,{children:t.jsx(a.Link,{href:e.href,children:e.title})},e.key))})}),m={name:"With Collapse (A1)",globals:{viewport:{value:"--breakpoint-xs"}},render:V,play:async({canvasElement:e})=>{const r=o(e),n=await r.findByRole("button");await s(n).toBeInTheDocument();const i=r.getAllByRole("listitem");await s(i.length).toEqual(3)}},u={name:"With AriaLabel (B1)",parameters:{imageSnapshot:{disable:!0}},render:z,play:async({canvasElement:e})=>{const n=o(e).getByRole("navigation");await s(n).toHaveAttribute("aria-label",J.t("ds_navigation:breadcrumbs.NavAriaLabel"))}},p={name:"Without Collapse (A2)",globals:{viewport:{value:"--breakpoint-xs"}},render:z,play:async({canvasElement:e})=>{const n=o(e).getAllByRole("listitem");await s(n.length).toEqual(v.length)}},b={name:"With Expand Click And Focus(A4 delvis, C1)",globals:{viewport:{value:"--breakpoint-xs"}},render:V,play:async({canvasElement:e})=>{const r=o(e),n=await r.findByRole("button");await s(n).toBeInTheDocument(),await U.click(n),await s(n).not.toBeInTheDocument();const i=r.getAllByRole("link")[0];await X(()=>{s(i).toHaveFocus()})}},h={name:"With Navigation",parameters:{imageSnapshot:{disableSnapshot:!0}},render:()=>{const[e,r]=K.useState(v),n=i=>{r(f=>f.slice(0,e.indexOf(i)+1))};return t.jsx(a,{children:t.jsx(a.List,{children:e.map(i=>t.jsx(a.Item,{children:t.jsx(a.Link,{href:i.href,onClick:f=>{f.preventDefault(),n(i)},children:i.title})},i.key))})})}};var y,x,B;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(B=(x=l.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var w,A,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(A=c.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var S,I,W;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Defaults (A1, A2)'
} satisfies Story`,...(W=(I=d.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var j,E,C;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(E=m.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var L,R,D;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var T,F,H;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(F=p.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var N,_,O;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(_=b.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var P,q,M;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(q=h.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};const G=["WithRef","WithAttributes","Defaults","WithCollapse","WithAriaLabel","WithoutCollapse","WithExpandClickAndFocus","WithNavigation"],$=Object.freeze(Object.defineProperty({__proto__:null,Defaults:d,WithAriaLabel:u,WithAttributes:c,WithCollapse:m,WithExpandClickAndFocus:b,WithNavigation:h,WithRef:l,WithoutCollapse:p,__namedExportsOrder:G,default:Y},Symbol.toStringTag,{value:"Module"}));export{$ as B};
//# sourceMappingURL=Breadcrumbs.test.stories-Be7gdIz5.js.map
