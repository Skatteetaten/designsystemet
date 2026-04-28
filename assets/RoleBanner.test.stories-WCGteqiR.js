import{j as t,d as p}from"./iframe-B8GUhlLl.js";import{R as u}from"./index-DzessJxh.js";const{expect:a,within:r}=__STORYBOOK_MODULE_TEST__,w={component:u,title:"Tester/RoleBanner",argTypes:{ref:{table:{disable:!0}},id:{table:{disable:!0}},className:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},user:{table:{disable:!0}},isSticky:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1},htmlValidate:{rules:{"no-redundant-role":"off"}}}},b={user:{name:"navn navnerson",role:"meg",identifier:"123456789"}},o={name:"With Ref (FA1)",args:{...b,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const e=r(n).getByRole("region");await a(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...b,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",user:{name:"navn navnerson",role:"meg",identifier:"123456789"}},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=r(n).getByRole("region");await a(e).toHaveClass("dummyClassname"),await a(e).toHaveAttribute("id","htmlId"),await a(e).toHaveAttribute("lang","nb"),await a(e).toHaveAttribute("data-testid","123ID")}},l={name:"Defaults (A1, B1)",args:{...b},argTypes:{},play:async({canvasElement:n})=>{const s=r(n),e=s.getByRole("region");a(e).toHaveAccessibleName(p.t("ds_layout:rolebanner.AriaLabel"));const v=s.getByText("navn navnerson");await a(v).toBeInTheDocument();const g=s.getByText("(123456789)");await a(g).toBeInTheDocument()}},c={name:"All Role Variants (A2, A5 B2)",args:{...b},parameters:{a11y:{test:"off"},htmlValidate:{test:"off"}},render:()=>t.jsxs(t.Fragment,{children:[t.jsx(u,{className:"bottomSpacingXL",user:{name:"Ola Nordmann",role:"meg",identifier:"010199 12345"}}),t.jsx(u,{className:"bottomSpacingXL",user:{name:"Kari Hansen",role:"andre",identifier:"020299 54321"}}),t.jsx(u,{user:{name:"Bedriften AS",role:"virksomhet",identifier:"999 888 777"}})]}),play:async({canvasElement:n})=>{const e=r(n).getAllByRole("region");await a(e).toHaveLength(3),await a(e[0]).toHaveAttribute("data-user","meg"),await a(e[1]).toHaveAttribute("data-user","andre"),await a(e[2]).toHaveAttribute("data-user","virksomhet");const v=e[0].querySelector('[class*="srOnly"]');await a(v).toBeNull();const g=p.t("ds_layout:rolebanner.Person"),f=r(e[1]).getByText(g);await a(f).toBeInTheDocument();const h=p.t("ds_layout:rolebanner.Business"),A=r(e[2]).getByText(h);await a(A).toBeInTheDocument()}},y=n=>t.jsxs("div",{className:"height200vh",children:[t.jsx(u,{...n}),t.jsx("p",{children:"Innhold under banneret"})]}),d={render:y,name:"Mobile Scrolled (A8, A9)",args:{user:{name:"Et veldig langt navn som vil bli avkortet når man scroller på mobil",role:"virksomhet",identifier:"999 888 777"}},globals:{viewport:{value:"--mobile"}},play:async({canvasElement:n})=>{const e=r(n).getByRole("region");e.setAttribute("data-scrolled","true"),await a(e).toHaveAttribute("data-scrolled","true")}},m={render:y,name:"Mobile (A7)",args:{user:{name:"Et veldig langt navn som vil bli avkortet når man scroller på mobil",role:"virksomhet",identifier:"999 888 777"}},globals:{viewport:{value:"--mobile"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    const container = canvas.getByRole('region');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    user: {
      name: 'navn navnerson',
      role: 'meg',
      identifier: '123456789'
    }
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
    const container = canvas.getByRole('region');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A1, B1)',
  args: {
    ...defaultArgs
  },
  argTypes: {},
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('region');
    expect(container).toHaveAccessibleName(dsI18n.t('ds_layout:rolebanner.AriaLabel'));
    const nameNode = canvas.getByText('navn navnerson');
    await expect(nameNode).toBeInTheDocument();
    const identifierNode = canvas.getByText('(123456789)');
    await expect(identifierNode).toBeInTheDocument();
  }
} satisfies Story`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'All Role Variants (A2, A5 B2)',
  args: {
    ...defaultArgs
  },
  parameters: {
    a11y: {
      test: 'off'
    },
    htmlValidate: {
      test: 'off'
    }
  },
  render: (): JSX.Element => <>
      <RoleBanner className={'bottomSpacingXL'} user={{
      name: 'Ola Nordmann',
      role: 'meg',
      identifier: '010199 12345'
    }} />
      <RoleBanner className={'bottomSpacingXL'} user={{
      name: 'Kari Hansen',
      role: 'andre',
      identifier: '020299 54321'
    }} />
      <RoleBanner user={{
      name: 'Bedriften AS',
      role: 'virksomhet',
      identifier: '999 888 777'
    }} />
    </>,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const banners = canvas.getAllByRole('region');
    await expect(banners).toHaveLength(3);
    await expect(banners[0]).toHaveAttribute('data-user', 'meg');
    await expect(banners[1]).toHaveAttribute('data-user', 'andre');
    await expect(banners[2]).toHaveAttribute('data-user', 'virksomhet');

    // 'meg' har ingen srOnly-tekst
    const megSrOnly = banners[0].querySelector('[class*="srOnly"]');
    await expect(megSrOnly).toBeNull();

    // 'andre' har srOnly-tekst "person"
    const personText = dsI18n.t('ds_layout:rolebanner.Person');
    const andreSrOnly = within(banners[1]).getByText(personText);
    await expect(andreSrOnly).toBeInTheDocument();

    // 'virksomhet' har srOnly-tekst "virksomhet"
    const businessText = dsI18n.t('ds_layout:rolebanner.Business');
    const virksomhetSrOnly = within(banners[2]).getByText(businessText);
    await expect(virksomhetSrOnly).toBeInTheDocument();
  }
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: TemplateWithTallContent,
  name: 'Mobile Scrolled (A8, A9)',
  args: {
    user: {
      name: 'Et veldig langt navn som vil bli avkortet når man scroller på mobil',
      role: 'virksomhet',
      identifier: '999 888 777'
    }
  },
  globals: {
    viewport: {
      value: '--mobile'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const banner = canvas.getByRole('region');
    // Manuelt sette data-scrolled for visuell testing
    banner.setAttribute('data-scrolled', 'true');
    await expect(banner).toHaveAttribute('data-scrolled', 'true');
  }
} satisfies Story`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: TemplateWithTallContent,
  name: 'Mobile (A7)',
  args: {
    user: {
      name: 'Et veldig langt navn som vil bli avkortet når man scroller på mobil',
      role: 'virksomhet',
      identifier: '999 888 777'
    }
  },
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...m.parameters?.docs?.source}}};const S=["WithRef","WithAttributes","Defaults","AllRoles","MobileAndScrolled","Mobile"],T=Object.freeze(Object.defineProperty({__proto__:null,AllRoles:c,Defaults:l,Mobile:m,MobileAndScrolled:d,WithAttributes:i,WithRef:o,__namedExportsOrder:S,default:w},Symbol.toStringTag,{value:"Module"}));export{T as R};
//# sourceMappingURL=RoleBanner.test.stories-WCGteqiR.js.map
