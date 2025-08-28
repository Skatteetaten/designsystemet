import{j as u}from"./jsx-runtime-BjG_zV1W.js";import{r as q}from"./index-D_ouKaeX.js";import{w as a,u as c,e as i,a as y,b as Ze}from"./index-DIxTUSTt.js";import{B as M}from"./index-Du3yX_TW.js";import{d as h}from"./index-CGk5cNE3.js";import{R as j}from"./index-hcTrRhi3.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CgEl4Pzg.js";import"./index-uxUkjR_c.js";import"./index-DXWIZOJk.js";import"./floating-ui.react-ayiMHenP.js";import"./index-D9u29hOa.js";import"./index-BuHbB7kV.js";import"./DatePickerCalendar-wzrlqniL.js";import"./LabelWithHelp-BzCMv1X3.js";import"./Help-YRS8Catz.js";import"./index-krISk8b9.js";import"./index-DtTKNpP0.js";import"./index-CxZaSSAf.js";const en={name:"Ola Nordmann",personId:"10101012345",type:"Person"},L={total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Toshiba AS",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi AS",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Meta",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"ApS"}]},Ye={total:4,list:[{name:"Antikvitet presis",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1}]},b={total:11,list:[{name:"Frisk Elefant",personId:"10090812345",type:"Person",isDeleted:!1},{name:"Melankolsk Aldrende Ape",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1},{name:"Kari Nordmann",personId:"10101054321",type:"Person",isDeleted:!1},{name:"Per Hansen",personId:"20202012345",type:"Person",isDeleted:!1},{name:"Lise Olsen",personId:"30303067890",type:"Person",isDeleted:!1},{name:"Nina Johansen",personId:"40404011223",type:"Person",isDeleted:!1},{name:"Ole Pettersen",personId:"50505044556",type:"Person",isDeleted:!1},{name:"Eva Nilsen",personId:"60606077889",type:"Person",isDeleted:!1}]},Tn={component:j,title:"Tester/RolePicker",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},me:{table:{disable:!0},control:"object"},people:{table:{disable:!0},control:"object"},businesses:{table:{disable:!0},control:"object"},minimumEntitiesForSearch:{table:{disable:!0}},title:{table:{disable:!0}},dismissOnEsc:{table:{disable:!0}},dismissOnOutsideClick:{table:{disable:!0}},hideCloseButton:{table:{disable:!0}},showSubunits:{table:{disable:!0}},showInactiveBusinesses:{table:{disable:!0}},showDeceasedPeople:{table:{disable:!0}},onClose:{table:{disable:!0}},onEntitySelect:{table:{disable:!0}},onLogout:{table:{disable:!0}},children:{table:{disable:!0},control:"object"}},parameters:{viewport:{viewPortHeight:1400}}},l={me:en,businesses:L,people:Ye},d=t=>{const e=q.useRef(null),s=async n=>{var o;(o=e.current)==null||o.close()};return u.jsxs(u.Fragment,{children:[u.jsx(M,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),u.jsx(j,{...t,ref:e,onEntitySelect:s})]})},_=t=>{const e=q.useRef(null),s=async n=>({error:"Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang."});return u.jsxs(u.Fragment,{children:[u.jsx(M,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),u.jsx(j,{...t,ref:e,onEntitySelect:s})]})},nn=t=>{const e=q.useRef(null),s=async n=>new Promise(o=>{setTimeout(()=>{var r;(r=e.current)==null||r.close(),o()},2e3)});return u.jsxs(u.Fragment,{children:[u.jsx(M,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),u.jsx(j,{...t,ref:e,onEntitySelect:s})]})},B={name:"Defaults (A1, A2, A14, B3, B2)",args:{...l,businesses:L,people:Ye},render:d,parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=a(t),s=e.getByRole("button");await c.click(s);const n=await e.findByRole("dialog"),o=a(n).queryByRole("searchbox");i(o).toBeInTheDocument()}},v={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID",...l},render:d,argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=a(t),s=e.getByRole("button");await c.click(s);const n=await e.findByRole("dialog");await i(n).toHaveAttribute("id","htmlId"),await i(n).toHaveClass("dummyClassname"),await i(n).toHaveAttribute("lang","en"),await i(n).toHaveAttribute("data-testid","123ID")}},w={name:"With Show Inactive Organizations And Show Less Button (A11, A18, B4)",args:{...l,people:void 0,me:void 0,showInactiveBusinesses:!0,showSubunits:!1},render:d,argTypes:{showInactiveBusinesses:{table:{disable:!1}}},play:async({args:t,canvasElement:e})=>{var g;const s=a(e),n=s.getByRole("button");await c.click(n);const o=await s.findByRole("dialog"),r=await a(o).findByRole("checkbox",{name:h.t("ds_overlays:rolepicker.ShowInactiveBusinessesHeader")});i(r).toBeChecked();const p=await a(o).findByRole("button",{name:/vis alle/i});await y.click(p);const m=await a(o).findAllByRole("link");i(m.length).toEqual((g=t.businesses)==null?void 0:g.list.length),i(p).toBeInTheDocument();const f=await a(o).findByText(/færre/i);i(f).toBeInTheDocument()}},S={name:"With Show All Clicked Focus (A12, B4)",args:{...l,businesses:L},render:d,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=a(t),s=e.getByRole("button");await c.click(s);const n=await e.findByRole("dialog"),o=await a(n).findByRole("button",{name:/vis alle/i}),r=await a(n).findAllByRole("link"),p=r.length-1;await y.click(o),i(r[p]).toHaveFocus()}},k={name:"Without Hide Close Icon (A3)",args:{...l,hideCloseButton:!0},render:d,argTypes:{hideCloseButton:{table:{disable:!1}}},play:async({canvasElement:t})=>{const s=a(t).getByRole("button");await c.click(s)}},K="Custom title",T={name:"With Custom Title (A4 delvis)",args:{...l,title:K},render:d,argTypes:{title:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=a(t),s=e.getByRole("button");await c.click(s);const n=await e.findByRole("dialog"),o=a(n).getByRole("heading",{level:1});i(o).toHaveTextContent(K)}},A={name:"With Children (A5)",args:{...l,people:void 0,children:u.jsx("div",{children:"Children"})},render:d,argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=a(t),s=e.getByRole("button");await c.click(s);const n=await e.findByRole("dialog"),o=a(n).getByText("Children");i(o).toBeInTheDocument()}},D={name:"With Only People Search (A6, A7)",args:{...l,businesses:void 0,people:b},render:d,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},R={name:"With Only Business Search (A6, A7)",args:{...l,people:void 0},render:d,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},E={name:"Without Search (A6)",args:{...l,businesses:{total:4,list:L.list.slice(1,3)},showSubunits:!1},render:d,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=a(t),s=e.getByRole("button");await c.click(s);const n=await e.findByRole("dialog"),o=a(n).queryAllByRole("button",{name:/vis alle/i});i(o.length).toBe(0);const r=a(n).queryAllByRole("textbox");i(r.length).toBe(0)},parameters:{imageSnapshot:{disable:!0}}},x={name:"With Error",args:{...l},render:_,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=a(t),s=e.getByRole("button");await c.click(s);const n=await e.findByRole("dialog"),o=a(n).getAllByRole("link")[0];await y.click(o);const r=await a(n).findByText("Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.");i(r).toBeInTheDocument()}},W={name:"With No Businesses",args:{...l,people:void 0,me:void 0,businesses:{total:0,list:[]}},render:d,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=a(t),s=e.getByRole("button");await c.click(s);const n=await e.findByRole("dialog"),o=a(n).getByRole("heading",{level:1});i(o).toHaveTextContent(h.t("ds_overlays:rolepicker.NoBusinessesErrorTitle"))}},I={name:"With Spinner",args:{...l},render:nn,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},tn={total:1e4,list:Array.from({length:1e4},(t,e)=>({name:`Organization ${e}`,organizationNumber:`${e}`,isDeleted:!1,unitType:"AS",type:"Organization"}))},C={name:"With 10000 Businesses",args:{...l,businesses:tn,people:void 0},render:_,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},P={name:"With No Deleted Businesses",args:{...l,businesses:{total:3,list:[{name:"Samsung AS",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Statoil AS",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"AS"}]}]},people:void 0},render:d,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=a(t),s=e.getByRole("button");await c.click(s);const n=await e.findByRole("dialog"),o=a(n).queryByRole("checkbox",{name:h.t("ds_overlays:rolepicker.ShowInactiveBusinessesHeader")});i(o).not.toBeInTheDocument()}},z={name:"With No SubUnits",args:{...l,businesses:{total:2,list:[{name:"Samsung AS",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!0,type:"Organization",unitType:"AS"}]},people:void 0},render:d,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=a(t),s=e.getByRole("button");await c.click(s);const n=await e.findByRole("dialog"),o=a(n).queryByRole("checkbox",{name:h.t("ds_overlays:rolepicker.ShowSubBusinessesHeading")});i(o).not.toBeInTheDocument()}},an={...b,list:b.list.map((t,e)=>({...t,isDeleted:e%2===0}))},N={name:"With Deceased People",args:{...l,businesses:void 0,me:void 0,people:an,showDeceasedPeople:!0},render:d,argTypes:{showDeceasedPeople:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=a(t),s=e.getByRole("button");await c.click(s);const n=await e.findByRole("dialog"),o=await a(n).findByRole("checkbox",{name:h.t("ds_overlays:rolepicker.ShowDeceasedPersons")});i(o).toBeChecked();const r=await a(n).findByRole("button",{name:/vis alle/i});await y.click(r);const p=await a(n).findAllByRole("link");i(p.length).toEqual(b==null?void 0:b.list.length)}},O={name:"With No Double Unit Types",args:{...l,showSubunits:!1,people:void 0,me:void 0},render:d,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=a(t),s=e.getByRole("button");await c.click(s);const n=await e.findByRole("dialog");(await a(n).findAllByRole("heading",{level:3})).forEach(r=>{var g,U;const p=((g=r.textContent)==null?void 0:g.toUpperCase())||"",m=((U=r.textContent)==null?void 0:U.split(" "))||[],f=m[m.length-1];i(p.endsWith(` ${f} ${f}`)).toBe(!1)})}},H={name:"With Minimum Entities For Search (A19)",args:{...l,minimumEntitiesForSearch:17},render:d,play:async({canvasElement:t})=>{const e=a(t),s=e.getByRole("button");await c.click(s);const n=await e.findByRole("dialog"),o=a(n).queryByRole("searchbox");i(o).not.toBeInTheDocument()}},F={name:"With Close Error",args:{...l},parameters:{imageSnapshot:{disable:!0}},render:_,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=a(t),s=e.getByRole("button");await c.click(s);const n=await e.findByRole("dialog"),o=a(n).getAllByRole("link")[0];await y.click(o);const p=(await a(n).findByText("Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.")).parentElement;i(p).toBeInTheDocument();const m=a(p).getByRole("button");i(m).toBeInTheDocument(),await y.click(m),await Ze(()=>i(p).not.toBeInTheDocument()),i(o).toHaveFocus()}};var V,$,G;B.parameters={...B.parameters,docs:{...(V=B.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Defaults (A1, A2, A14, B3, B2)',
  args: {
    ...defaultArgs,
    businesses,
    people
  },
  render: DefaultTemplate,
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const searchInput = within(modal).queryByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  }
} satisfies Story`,...(G=($=B.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,Q,X;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'en',
    'data-testid': '123ID',
    ...defaultArgs
  },
  render: DefaultTemplate,
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
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const container = await canvas.findByRole('dialog');
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'en');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'With Show Inactive Organizations And Show Less Button (A11, A18, B4)',
  args: {
    ...defaultArgs,
    people: undefined,
    me: undefined,
    showInactiveBusinesses: true,
    showSubunits: false
  },
  render: DefaultTemplate,
  argTypes: {
    showInactiveBusinesses: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const checkBox = await within(modal).findByRole('checkbox', {
      name: dsI18n.t('ds_overlays:rolepicker.ShowInactiveBusinessesHeader')
    });
    expect(checkBox).toBeChecked();
    const showMoreButton = await within(modal).findByRole('button', {
      name: /vis alle/i
    });
    await fireEvent.click(showMoreButton);
    const links = await within(modal).findAllByRole('link');
    expect(links.length).toEqual(args.businesses?.list.length);
    expect(showMoreButton).toBeInTheDocument();
    const showLessButton = await within(modal).findByText(/færre/i);
    expect(showLessButton).toBeInTheDocument();
  }
} satisfies Story`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,ae;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'With Show All Clicked Focus (A12, B4)',
  args: {
    ...defaultArgs,
    businesses
  },
  render: DefaultTemplate,
  argTypes: {
    me: {
      table: {
        disable: false
      }
    },
    people: {
      table: {
        disable: false
      }
    },
    businesses: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const button = await within(modal).findByRole('button', {
      name: /vis alle/i
    });
    const links = await within(modal).findAllByRole('link');
    const indexToFocus = links.length - 1;
    // userEvent.click lukker modalen(!)
    await fireEvent.click(button);
    expect(links[indexToFocus]).toHaveFocus();
  }
} satisfies Story`,...(ae=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,oe,ie;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Without Hide Close Icon (A3)',
  args: {
    ...defaultArgs,
    hideCloseButton: true
  },
  render: DefaultTemplate,
  argTypes: {
    hideCloseButton: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
  }
} satisfies Story`,...(ie=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,re,ce;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'With Custom Title (A4 delvis)',
  args: {
    ...defaultArgs,
    title
  },
  render: DefaultTemplate,
  argTypes: {
    title: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const titleElement = within(modal).getByRole('heading', {
      level: 1
    });
    expect(titleElement).toHaveTextContent(title);
  }
} satisfies Story`,...(ce=(re=T.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var de,ue,pe;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'With Children (A5)',
  args: {
    ...defaultArgs,
    people: undefined,
    children: <div>{'Children'}</div>
  },
  render: DefaultTemplate,
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const children = within(modal).getByText('Children');
    expect(children).toBeInTheDocument();
  }
} satisfies Story`,...(pe=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,be,ye;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'With Only People Search (A6, A7)',
  args: {
    ...defaultArgs,
    businesses: undefined,
    people: people11
  },
  render: DefaultTemplate,
  argTypes: {
    me: {
      table: {
        disable: false
      }
    },
    people: {
      table: {
        disable: false
      }
    },
    businesses: {
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
} satisfies Story`,...(ye=(be=D.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ge,he,fe;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'With Only Business Search (A6, A7)',
  args: {
    ...defaultArgs,
    people: undefined
  },
  render: DefaultTemplate,
  argTypes: {
    me: {
      table: {
        disable: false
      }
    },
    people: {
      table: {
        disable: false
      }
    },
    businesses: {
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
} satisfies Story`,...(fe=(he=R.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var Be,ve,we;E.parameters={...E.parameters,docs:{...(Be=E.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Without Search (A6)',
  args: {
    ...defaultArgs,
    businesses: {
      total: 4,
      list: businesses.list.slice(1, 3)
    },
    showSubunits: false
  },
  render: DefaultTemplate,
  argTypes: {
    me: {
      table: {
        disable: false
      }
    },
    people: {
      table: {
        disable: false
      }
    },
    businesses: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const buttons = within(modal).queryAllByRole('button', {
      name: /vis alle/i
    });
    expect(buttons.length).toBe(0);
    const textInputs = within(modal).queryAllByRole('textbox');
    expect(textInputs.length).toBe(0);
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...(we=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var Se,ke,Te;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'With Error',
  args: {
    ...defaultArgs
  },
  render: ErrorTemplate,
  argTypes: {
    me: {
      table: {
        disable: false
      }
    },
    people: {
      table: {
        disable: false
      }
    },
    businesses: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const firstLink = within(modal).getAllByRole('link')[0];
    await fireEvent.click(firstLink);
    const alert = await within(modal).findByText('Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.');
    expect(alert).toBeInTheDocument();
  }
} satisfies Story`,...(Te=(ke=x.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var Ae,De,Re;W.parameters={...W.parameters,docs:{...(Ae=W.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'With No Businesses',
  args: {
    ...defaultArgs,
    people: undefined,
    me: undefined,
    businesses: {
      total: 0,
      list: []
    }
  },
  render: DefaultTemplate,
  argTypes: {
    me: {
      table: {
        disable: false
      }
    },
    people: {
      table: {
        disable: false
      }
    },
    businesses: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const titleElement = within(modal).getByRole('heading', {
      level: 1
    });
    expect(titleElement).toHaveTextContent(dsI18n.t('ds_overlays:rolepicker.NoBusinessesErrorTitle'));
  }
} satisfies Story`,...(Re=(De=W.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ee,xe,We;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'With Spinner',
  args: {
    ...defaultArgs
  },
  render: SlowTemplate,
  argTypes: {
    me: {
      table: {
        disable: false
      }
    },
    people: {
      table: {
        disable: false
      }
    },
    businesses: {
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
} satisfies Story`,...(We=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:We.source}}};var Ie,Ce,Pe;C.parameters={...C.parameters,docs:{...(Ie=C.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'With 10000 Businesses',
  args: {
    ...defaultArgs,
    businesses: businesses10000,
    people: undefined
  },
  render: ErrorTemplate,
  argTypes: {
    me: {
      table: {
        disable: false
      }
    },
    people: {
      table: {
        disable: false
      }
    },
    businesses: {
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
} satisfies Story`,...(Pe=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:Pe.source}}};var ze,Ne,Oe;P.parameters={...P.parameters,docs:{...(ze=P.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'With No Deleted Businesses',
  args: {
    ...defaultArgs,
    businesses: {
      total: 3,
      list: [{
        name: 'Samsung AS',
        organizationNumber: '312943218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'AS',
        subunits: [{
          name: 'Snapchat AS',
          organizationNumber: '123456623',
          isDeleted: false,
          type: 'Organization',
          unitType: 'AS'
        }, {
          name: 'Statoil AS',
          organizationNumber: '312849218',
          isDeleted: false,
          type: 'Organization',
          unitType: 'AS'
        }]
      }]
    },
    people: undefined
  },
  render: DefaultTemplate,
  argTypes: {
    me: {
      table: {
        disable: false
      }
    },
    people: {
      table: {
        disable: false
      }
    },
    businesses: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const checkBox = within(modal).queryByRole('checkbox', {
      name: dsI18n.t('ds_overlays:rolepicker.ShowInactiveBusinessesHeader')
    });
    expect(checkBox).not.toBeInTheDocument();
  }
} satisfies Story`,...(Oe=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var He,Fe,je;z.parameters={...z.parameters,docs:{...(He=z.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'With No SubUnits',
  args: {
    ...defaultArgs,
    businesses: {
      total: 2,
      list: [{
        name: 'Samsung AS',
        organizationNumber: '312943218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'AS'
      }, {
        name: 'Vanguard AS',
        organizationNumber: '332843218',
        isDeleted: true,
        type: 'Organization',
        unitType: 'AS'
      }]
    },
    people: undefined
  },
  render: DefaultTemplate,
  argTypes: {
    me: {
      table: {
        disable: false
      }
    },
    people: {
      table: {
        disable: false
      }
    },
    businesses: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const checkBox = within(modal).queryByRole('checkbox', {
      name: dsI18n.t('ds_overlays:rolepicker.ShowSubBusinessesHeading')
    });
    expect(checkBox).not.toBeInTheDocument();
  }
} satisfies Story`,...(je=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var Le,qe,Me;N.parameters={...N.parameters,docs:{...(Le=N.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'With Deceased People',
  args: {
    ...defaultArgs,
    businesses: undefined,
    me: undefined,
    people: peopleWithDeceased,
    showDeceasedPeople: true
  },
  render: DefaultTemplate,
  argTypes: {
    showDeceasedPeople: {
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
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const checkBox = await within(modal).findByRole('checkbox', {
      name: dsI18n.t('ds_overlays:rolepicker.ShowDeceasedPersons')
    });
    expect(checkBox).toBeChecked();
    const button = await within(modal).findByRole('button', {
      name: /vis alle/i
    });
    await fireEvent.click(button);
    const links = await within(modal).findAllByRole('link');
    expect(links.length).toEqual(people11?.list.length);
  }
} satisfies Story`,...(Me=(qe=N.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};var _e,Ue,Ke;O.parameters={...O.parameters,docs:{...(_e=O.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'With No Double Unit Types',
  args: {
    ...defaultArgs,
    showSubunits: false,
    people: undefined,
    me: undefined
  },
  render: DefaultTemplate,
  argTypes: {
    me: {
      table: {
        disable: false
      }
    },
    people: {
      table: {
        disable: false
      }
    },
    businesses: {
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
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const titles = await within(modal).findAllByRole('heading', {
      level: 3
    });
    titles.forEach(title => {
      const titleText = title.textContent?.toUpperCase() || '';
      const words = title.textContent?.split(' ') || [];
      const unitType = words[words.length - 1];
      expect(titleText.endsWith(\` \${unitType} \${unitType}\`)).toBe(false);
    });
  }
} satisfies Story`,...(Ke=(Ue=O.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source}}};var Ve,$e,Ge;H.parameters={...H.parameters,docs:{...(Ve=H.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'With Minimum Entities For Search (A19)',
  args: {
    ...defaultArgs,
    minimumEntitiesForSearch: 17 // Det finnes 16 personer/virksomheter i rollevelgeren, så søkefeltet vises ikke
  },
  render: DefaultTemplate,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const searchInput = within(modal).queryByRole('searchbox');
    expect(searchInput).not.toBeInTheDocument();
  }
} satisfies Story`,...(Ge=($e=H.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source}}};var Je,Qe,Xe;F.parameters={...F.parameters,docs:{...(Je=F.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  name: 'With Close Error',
  args: {
    ...defaultArgs
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  render: ErrorTemplate,
  argTypes: {
    me: {
      table: {
        disable: false
      }
    },
    people: {
      table: {
        disable: false
      }
    },
    businesses: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const firstLink = within(modal).getAllByRole('link')[0];
    await fireEvent.click(firstLink);
    const alertText = await within(modal).findByText('Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.');
    const alert = alertText.parentElement as HTMLDivElement;
    expect(alert).toBeInTheDocument();
    const iconButton = within(alert).getByRole('button');
    expect(iconButton).toBeInTheDocument();
    await fireEvent.click(iconButton);
    await waitFor(() => expect(alert).not.toBeInTheDocument());
    expect(firstLink).toHaveFocus();
  }
} satisfies Story`,...(Xe=(Qe=F.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};const An=["Defaults","WithAttributes","WithShowInactiveOrganizations","WithShowAllClicked","WithoutHideCloseIcon","WithCustomTitle","WithChildren","WithOnlyPeopleSearch","WithOnlyBusinessSearch","WithoutSearch","WithError","WithNoBusinesses","WithSpinner","With10000Businesses","WithNoDeletedBusinesses","WithNoSubunits","WithDeceasedPeople","WithNoDoubleUnitTypes","WithMinimumEntitiesForSearch","WithCloseError"];export{B as Defaults,C as With10000Businesses,v as WithAttributes,A as WithChildren,F as WithCloseError,T as WithCustomTitle,N as WithDeceasedPeople,x as WithError,H as WithMinimumEntitiesForSearch,W as WithNoBusinesses,P as WithNoDeletedBusinesses,O as WithNoDoubleUnitTypes,z as WithNoSubunits,R as WithOnlyBusinessSearch,D as WithOnlyPeopleSearch,S as WithShowAllClicked,w as WithShowInactiveOrganizations,I as WithSpinner,k as WithoutHideCloseIcon,E as WithoutSearch,An as __namedExportsOrder,Tn as default};
//# sourceMappingURL=RolePicker.test.stories-BcE6D9Ql.js.map
