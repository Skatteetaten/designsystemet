import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as X}from"./index-BwDkhjyp.js";import{d as z}from"./index-BSjcMZTJ.js";import{B as a}from"./index-DLO4_ToG.js";import{w as o,e as s,a as G,b as K}from"./index-B8otpkpo.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-PT2LozU0.js";import"./index-BU2UjPj9.js";import"./index-DoWIm2Z4.js";const g="htmlId",se={component:a,title:"Tester/Breadcrumbs/Breadcrumbs",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}}},args:{children:t.jsxs(a.List,{children:[t.jsx(a.Item,{children:t.jsx(a.Link,{href:"#",children:"Bedrift og organisasjon"})}),t.jsx(a.Item,{children:t.jsx(a.Link,{href:"#",children:"Avgifter"})}),t.jsx(a.Item,{children:t.jsx(a.Link,{href:"#",children:"Avgifter på bil og kjøretøy"})}),t.jsx(a.Item,{children:t.jsx(a.Link,{href:"#",children:"Vektårsavgift"})})]})}},l={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=o(e).getByRole("navigation");await s(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes(FA2-5)",args:{id:g,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=o(e).getByRole("navigation");await s(n).toHaveClass("dummyClassname"),await s(n).toHaveAttribute("id",g),await s(n).toHaveAttribute("lang","nb"),await s(n).toHaveAttribute("data-testid","123ID")}},d={name:"Defaults (A1, A2)"},v=[{key:"i1",href:"#",title:"Bedrift og organisasjon"},{key:"i2",href:"#",title:"Avgifter"},{key:"i3",href:"#",title:"Avgifter på bil og kjøretøy"},{key:"i4",href:"#",title:"Vektårsavgift"}],J=()=>t.jsx(a,{children:t.jsx(a.List,{children:v.map(e=>t.jsx(a.Item,{children:t.jsx(a.Link,{href:e.href,children:e.title})},e.key))})}),M=()=>t.jsx(a,{children:t.jsx(a.List,{shouldCollapse:!1,children:v.map(e=>t.jsx(a.Item,{children:t.jsx(a.Link,{href:e.href,children:e.title})},e.key))})}),m={name:"With Collapse (A1)",parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},render:J,play:async({canvasElement:e})=>{const r=o(e),n=await r.findByRole("button");await s(n).toBeInTheDocument();const i=r.getAllByRole("listitem");await s(i.length).toEqual(3)}},p={name:"With AriaLabel (B1)",parameters:{imageSnapshot:{disable:!0}},render:M,play:async({canvasElement:e})=>{const n=o(e).getByRole("navigation");await s(n).toHaveAttribute("aria-label",z.t("ds_navigation:breadcrumbs.NavAriaLabel"))}},u={name:"Without Collapse (A2)",parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},render:M,play:async({canvasElement:e})=>{const n=o(e).getAllByRole("listitem");await s(n.length).toEqual(v.length)}},b={name:"With Expand Click And Focus(A4 delvis, C1)",parameters:{viewport:{defaultViewport:"--breakpoint-xs"}},render:J,play:async({canvasElement:e})=>{const r=o(e),n=await r.findByRole("button");await s(n).toBeInTheDocument(),await G.click(n),await s(n).not.toBeInTheDocument();const i=r.getAllByRole("link")[0];await K(()=>{s(i).toHaveFocus()})}},h={name:"With Navigation",parameters:{imageSnapshot:{disable:!0}},render:()=>{const[e,r]=X.useState(v),n=i=>{r(f=>f.slice(0,e.indexOf(i)+1))};return t.jsx(a,{children:t.jsx(a.List,{children:e.map(i=>t.jsx(a.Item,{children:t.jsx(a.Link,{href:i.href,onClick:f=>{f.preventDefault(),n(i)},children:i.title})},i.key))})})}};var y,x,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('navigation');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(w=(x=l.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var B,A,k;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(A=c.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var I,W,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Defaults (A1, A2)'
} satisfies Story`,...(j=(W=d.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var E,C,L;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'With Collapse (A1)',
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
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
} satisfies Story`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var R,S,D;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var F,T,H;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Without Collapse (A2)',
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
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
} satisfies Story`,...(H=(T=u.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var N,V,P;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With Expand Click And Focus(A4 delvis, C1)',
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
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
} satisfies Story`,...(P=(V=b.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var q,_,O;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'With Navigation',
  parameters: {
    imageSnapshot: {
      disable: true
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
} satisfies Story`,...(O=(_=h.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const re=["WithRef","WithAttributes","Defaults","WithCollapse","WithAriaLabel","WithoutCollapse","WithExpandClickAndFocus","WithNavigation"];export{d as Defaults,p as WithAriaLabel,c as WithAttributes,m as WithCollapse,b as WithExpandClickAndFocus,h as WithNavigation,l as WithRef,u as WithoutCollapse,re as __namedExportsOrder,se as default};
//# sourceMappingURL=Breadcrumbs.test.stories-CNtt8RlR.js.map
