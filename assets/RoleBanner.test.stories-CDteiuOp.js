import{j as t,d as p}from"./iframe-BHAek7Q1.js";import{R as g}from"./index-5oWADZYA.js";const{expect:n,within:r}=__STORYBOOK_MODULE_TEST__,A={component:g,title:"Tester/RoleBanner",argTypes:{ref:{table:{disable:!0}},id:{table:{disable:!0}},className:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},u={user:{name:"navn navnerson",role:"meg",identifier:"123456789"}},o={name:"With Ref (FA1)",args:{...u,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=r(a).getByRole("region");await n(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...u,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",user:{name:"navn navnerson",role:"meg",identifier:"123456789"}},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a).getByRole("region");await n(e).toHaveClass("dummyClassname"),await n(e).toHaveAttribute("id","htmlId"),await n(e).toHaveAttribute("lang","nb"),await n(e).toHaveAttribute("data-testid","123ID")}},l={name:"Defaults (A1, B1)",args:{...u},argTypes:{},play:async({canvasElement:a})=>{const s=r(a),e=s.getByRole("region");n(e).toHaveAccessibleName(p.t("ds_layout:rolebanner.AriaLabel"));const v=s.getByText("navn navnerson");await n(v).toBeInTheDocument();const b=s.getByText("(123456789)");await n(b).toBeInTheDocument()}},m={name:"All Role Variants (A2, A5 B2)",args:{...u},parameters:{a11y:{test:"off"}},render:()=>t.jsxs(t.Fragment,{children:[t.jsx(g,{className:"bottomSpacingXL",user:{name:"Ola Nordmann",role:"meg",identifier:"010199 12345"}}),t.jsx(g,{className:"bottomSpacingXL",user:{name:"Kari Hansen",role:"andre",identifier:"020299 54321"}}),t.jsx(g,{user:{name:"Bedriften AS",role:"virksomhet",identifier:"999 888 777"}})]}),play:async({canvasElement:a})=>{const e=r(a).getAllByRole("region");await n(e).toHaveLength(3),await n(e[0]).toHaveAttribute("data-user","meg"),await n(e[1]).toHaveAttribute("data-user","andre"),await n(e[2]).toHaveAttribute("data-user","virksomhet");const v=e[0].querySelector('[class*="srOnly"]');await n(v).toBeNull();const b=p.t("ds_layout:rolebanner.Person"),y=r(e[1]).getByText(b);await n(y).toBeInTheDocument();const f=p.t("ds_layout:rolebanner.Business"),x=r(e[2]).getByText(f);await n(x).toBeInTheDocument()}},h=a=>t.jsxs("div",{className:"height200vh",children:[t.jsx(g,{...a}),t.jsx("p",{children:"Innhold under banneret"})]}),c={render:h,name:"Mobile Scrolled (A8, A9)",args:{user:{name:"Et veldig langt navn som vil bli avkortet når man scroller på mobil",role:"virksomhet",identifier:"999 888 777"}},globals:{viewport:{value:"--mobile"}},parameters:{viewport:{options:{maxHeight:{maxHeight:{name:"maxHeight",styles:{height:"300px"}}}}},chromatic:{modes:{maxHeight:{viewport:"maxHeight"}}}},play:async({canvasElement:a})=>{const e=r(a).getByRole("region");e.setAttribute("data-scrolled","true"),await n(e).toHaveAttribute("data-scrolled","true")}},d={render:h,name:"Mobile (A7)",args:{user:{name:"Et veldig langt navn som vil bli avkortet når man scroller på mobil",role:"virksomhet",identifier:"999 888 777"}},globals:{viewport:{value:"--mobile"}},parameters:{viewport:{options:{maxHeight:{maxHeight:{name:"maxHeight",styles:{height:"300px"}}}}},chromatic:{modes:{maxHeight:{viewport:"maxHeight"}}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'All Role Variants (A2, A5 B2)',
  args: {
    ...defaultArgs
  },
  parameters: {
    a11y: {
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
} satisfies Story`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      options: {
        maxHeight: {
          maxHeight: {
            name: 'maxHeight',
            styles: {
              height: '300px'
            }
          }
        }
      }
    },
    chromatic: {
      modes: {
        maxHeight: {
          viewport: 'maxHeight'
        }
      }
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
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  },
  parameters: {
    viewport: {
      options: {
        maxHeight: {
          maxHeight: {
            name: 'maxHeight',
            styles: {
              height: '300px'
            }
          }
        }
      }
    },
    chromatic: {
      modes: {
        maxHeight: {
          viewport: 'maxHeight'
        }
      }
    }
  }
} satisfies Story`,...d.parameters?.docs?.source}}};const w=["WithRef","WithAttributes","Defaults","AllRoles","MobileAndScrolled","Mobile"],B=Object.freeze(Object.defineProperty({__proto__:null,AllRoles:m,Defaults:l,Mobile:d,MobileAndScrolled:c,WithAttributes:i,WithRef:o,__namedExportsOrder:w,default:A},Symbol.toStringTag,{value:"Module"}));export{B as R};
//# sourceMappingURL=RoleBanner.test.stories-CDteiuOp.js.map
