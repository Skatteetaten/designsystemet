import{j as d,r as q,d as b}from"./iframe-Br1Xu9zr.js";import{B as _}from"./index-Mga-TJ2K.js";import{R as y}from"./index--7Yk7F8k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Xbc0duXx.js";import"./index-CjBS1QGy.js";import"./index-DCwxX22m.js";import"./floating-ui.react-Bt7JJbcr.js";import"./index-BqK9uf9C.js";import"./index-DdZpjVXD.js";import"./index-B55DkYFu.js";import"./DatePickerCalendar-DwBW5N7C.js";import"./LabelWithHelp-ChfJsnaj.js";import"./Help-DqUYp3Aw.js";import"./Combobox.module-CSHfGvVK.js";import"./ComboboxButton-BxlP8MsT.js";import"./ComboboxSelectedOptions-lTpsloIV.js";import"./index-D26qgz4H.js";import"./index-BVXicwjt.js";import"./index-8xSWa2YY.js";import"./index-Bqe6vRXX.js";const{expect:i,fireEvent:h,userEvent:l,waitFor:U,within:t}=__STORYBOOK_MODULE_TEST__,$={name:"Ola Nordmann",personId:"10101012345",type:"Person"},M={total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Toshiba AS",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi AS",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Meta",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"ApS"}]},G={total:4,list:[{name:"Antikvitet presis",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1}]},L={total:11,list:[{name:"Frisk Elefant",personId:"10090812345",type:"Person",isDeleted:!1},{name:"Melankolsk Aldrende Ape",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1},{name:"Kari Nordmann",personId:"10101054321",type:"Person",isDeleted:!1},{name:"Per Hansen",personId:"20202012345",type:"Person",isDeleted:!1},{name:"Lise Olsen",personId:"30303067890",type:"Person",isDeleted:!1},{name:"Nina Johansen",personId:"40404011223",type:"Person",isDeleted:!1},{name:"Ole Pettersen",personId:"50505044556",type:"Person",isDeleted:!1},{name:"Eva Nilsen",personId:"60606077889",type:"Person",isDeleted:!1}]},ve={component:y,title:"Tester/RolePicker",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},me:{table:{disable:!0},control:"object"},people:{table:{disable:!0},control:"object"},businesses:{table:{disable:!0},control:"object"},minimumEntitiesForSearch:{table:{disable:!0}},title:{table:{disable:!0}},dismissOnEsc:{table:{disable:!0}},dismissOnOutsideClick:{table:{disable:!0}},hideCloseButton:{table:{disable:!0}},showSubunits:{table:{disable:!0}},showInactiveBusinesses:{table:{disable:!0}},showDeceasedPeople:{table:{disable:!0}},onClose:{table:{disable:!0}},onEntitySelect:{table:{disable:!0}},onLogout:{table:{disable:!0}},children:{table:{disable:!0},control:"object"}},tags:["test"],parameters:{chromatic:{disableSnapshot:!1}}},r={me:$,businesses:M,people:G},u=a=>{const e=q.useRef(null),s=async n=>{e.current?.close()};return d.jsxs(d.Fragment,{children:[d.jsx(_,{onClick:()=>e.current?.showModal(),children:"Vis representasjonsvelger"}),d.jsx(y,{...a,ref:e,onEntitySelect:s})]})},V=a=>{const e=q.useRef(null),s=async n=>({error:"Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang."});return d.jsxs(d.Fragment,{children:[d.jsx(_,{onClick:()=>e.current?.showModal(),children:"Vis representasjonsvelger"}),d.jsx(y,{...a,ref:e,onEntitySelect:s})]})},J=a=>{const e=q.useRef(null),s=async n=>{if(n.type==="Person"&&"personId"in n&&n.personId===$.personId)return{error:"Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang."};e.current?.close()};return d.jsxs(d.Fragment,{children:[d.jsx(_,{onClick:()=>e.current?.showModal(),children:"Vis representasjonsvelger"}),d.jsx(y,{...a,ref:e,onEntitySelect:s})]})},Y=a=>{const e=q.useRef(null),s=async n=>new Promise(o=>{setTimeout(()=>{e.current?.close(),o()},2e3)});return d.jsxs(d.Fragment,{children:[d.jsx(_,{onClick:()=>e.current?.showModal(),children:"Vis representasjonsvelger"}),d.jsx(y,{...a,ref:e,onEntitySelect:s})]})},f={name:"Defaults (A1, A2, A14, B3, B2)",args:{...r,businesses:M,people:G},render:u,play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog"),o=t(n).queryByRole("searchbox");i(o).toBeInTheDocument()}},B={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID",...r},render:u,argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"},chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog");await i(n).toHaveAttribute("id","htmlId"),await i(n).toHaveClass("dummyClassname"),await i(n).toHaveAttribute("lang","en"),await i(n).toHaveAttribute("data-testid","123ID")}},v={name:"With Show Inactive Organizations And Show Less Button (A11, A18, B4)",args:{...r,people:void 0,me:void 0,showInactiveBusinesses:!0,showSubunits:!1},parameters:{chromatic:{disableSnapshot:!0}},render:u,argTypes:{showInactiveBusinesses:{table:{disable:!1}}},play:async({args:a,canvasElement:e})=>{const s=t(e),n=s.getByRole("button");await l.click(n);const o=await s.findByRole("dialog"),c=await t(o).findByRole("checkbox",{name:b.t("ds_overlays:rolepicker.ShowInactiveBusinessesHeader")});i(c).toBeChecked();const p=await t(o).findByRole("button",{name:/vis alle/i});await h.click(p);const m=await t(o).findAllByRole("link");i(m.length).toEqual(a.businesses?.list.length),i(p).toBeInTheDocument();const g=await t(o).findByText(b.t("ds_overlays:rolepicker.ShowLess"));i(g).toBeInTheDocument()}},w={name:"With Show All Clicked Focus (A12, B4)",args:{...r,businesses:M},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog"),o=await t(n).findByRole("button",{name:/vis alle/i}),c=await t(n).findAllByRole("link"),p=c.length-1;await h.click(o),i(c[p]).toHaveFocus()}},k={name:"With Hide Close Icon (A3)",args:{...r,hideCloseButton:!0},render:u,argTypes:{hideCloseButton:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const s=t(a).getByRole("button");await l.click(s)}},K="Custom title",S={name:"With Custom Title (A4 delvis)",args:{...r,title:K},render:u,argTypes:{title:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog"),o=t(n).getByRole("heading",{level:1});i(o).toHaveTextContent(K)}},T={name:"With Children (A5)",args:{...r,people:void 0,children:d.jsx("div",{children:"Children"})},render:u,argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog"),o=t(n).getByText("Children");i(o).toBeInTheDocument()}},A={name:"With Only People Search (A6, A7)",args:{...r,businesses:void 0,people:L},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog"),o=t(n).queryByRole("button",{name:/vis alle personer/i});i(o).toBeInTheDocument();const c=t(n).queryAllByRole("searchbox");i(c.length).toBe(1)}},R={name:"With Only Business Search (A6, A7)",args:{...r,people:void 0},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog"),o=t(n).queryByRole("button",{name:/vis alle virksomheter/i});i(o).toBeInTheDocument();const c=t(n).queryAllByRole("searchbox");i(c.length).toBe(1)}},E={name:"Without Search (A6)",args:{...r,businesses:{total:4,list:M.list.slice(1,3)},showSubunits:!1},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog"),o=t(n).queryAllByRole("button",{name:b.t("ds_overlays:rolepicker.ShowAll")});i(o.length).toBe(0);const c=t(n).queryAllByRole("searchbox");i(c.length).toBe(0)}},D={name:"With Error",args:{...r},render:V,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog"),o=t(n).getAllByRole("link")[0];await h.click(o);const c=await t(n).findByText("Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.");i(c).toBeInTheDocument()}},x={name:"With No Businesses",args:{...r,people:void 0,me:void 0,businesses:{total:0,list:[]}},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog"),o=t(n).getByRole("heading",{level:1});i(o).toHaveTextContent(b.t("ds_overlays:rolepicker.NoBusinessesErrorTitle"))}},I={name:"With Spinner",args:{...r},render:Y,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}}},Q={total:1e4,list:Array.from({length:1e4},(a,e)=>({name:`Organization ${e}`,organizationNumber:`${e}`,isDeleted:!1,unitType:"AS",type:"Organization"}))},W={name:"With 10000 Businesses",args:{...r,businesses:Q,people:void 0},render:V,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}}},P={name:"With No Deleted Businesses",args:{...r,businesses:{total:3,list:[{name:"Samsung AS",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Statoil AS",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"AS"}]}]},people:void 0},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog"),o=t(n).queryByRole("checkbox",{name:b.t("ds_overlays:rolepicker.ShowInactiveBusinessesHeader")});i(o).not.toBeInTheDocument()}},C={name:"With No SubUnits",args:{...r,businesses:{total:2,list:[{name:"Samsung AS",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!0,type:"Organization",unitType:"AS"}]},people:void 0},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog"),o=t(n).queryByRole("checkbox",{name:b.t("ds_overlays:rolepicker.ShowSubBusinessesHeading")});i(o).not.toBeInTheDocument()}},X={...L,list:L.list.map((a,e)=>({...a,isDeleted:e%2===0}))},z={name:"With Deceased People",args:{...r,businesses:void 0,me:void 0,people:X,showDeceasedPeople:!0},render:u,argTypes:{showDeceasedPeople:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog"),o=await t(n).findByRole("checkbox",{name:b.t("ds_overlays:rolepicker.ShowDeceasedPersons")});i(o).toBeChecked();const c=await t(n).findByRole("button",{name:/vis alle/i});await h.click(c);const p=await t(n).findAllByRole("link");i(p.length).toEqual(L?.list.length)}},O={name:"With No Double Unit Types",args:{...r,showSubunits:!1,people:void 0,me:void 0},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog");(await t(n).findAllByRole("heading",{level:3})).forEach(c=>{const p=c.textContent?.toUpperCase()||"",m=c.textContent?.split(" ")||[],g=m[m.length-1];i(p.endsWith(` ${g} ${g}`)).toBe(!1)})}},N={name:"With Minimum Entities For Search (A19)",args:{...r,minimumEntitiesForSearch:17},render:u,parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog"),o=t(n).queryByRole("searchbox");i(o).not.toBeInTheDocument()}},F={name:"With Close Error",args:{...r},render:V,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog"),o=t(n).getAllByRole("link")[0];await h.click(o);const p=(await t(n).findByText("Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.")).parentElement;i(p).toBeInTheDocument();const m=t(p).getByRole("button");i(m).toBeInTheDocument(),await h.click(m),await U(()=>i(p).not.toBeInTheDocument()),i(o).toHaveFocus()}},j={name:"With Error Reset After Valid Selection",args:{...r},render:J,parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await l.click(s);const n=await e.findByRole("dialog"),o=t(n).getAllByRole("link")[0];await h.click(o);const c=await t(n).findByText("Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.");i(c).toBeInTheDocument();const p=t(n).getByRole("link",{name:/antikvitet presis/i});await l.click(p),await U(()=>i(n).not.toBeVisible()),l.click(s),i(c).not.toBeInTheDocument()}},H={render:u,name:"On Mobile",args:{...r},globals:{viewport:{value:"--mobile"}},play:async({canvasElement:a})=>{const s=t(a).getByRole("button");await l.click(s)}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A1, A2, A14, B3, B2)',
  args: {
    ...defaultArgs,
    businesses,
    people
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
    expect(searchInput).toBeInTheDocument();
  }
} satisfies Story`,...f.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
    },
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...B.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Show Inactive Organizations And Show Less Button (A11, A18, B4)',
  args: {
    ...defaultArgs,
    people: undefined,
    me: undefined,
    showInactiveBusinesses: true,
    showSubunits: false
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
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
    const showLessButton = await within(modal).findByText(dsI18n.t('ds_overlays:rolepicker.ShowLess'));
    expect(showLessButton).toBeInTheDocument();
  }
} satisfies Story`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'With Hide Close Icon (A3)',
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
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
  }
} satisfies Story`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const button = within(modal).queryByRole('button', {
      name: /vis alle personer/i
    });
    expect(button).toBeInTheDocument();
    const searchFields = within(modal).queryAllByRole('searchbox');
    expect(searchFields.length).toBe(1);
  }
} satisfies Story`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');
    const button = within(modal).queryByRole('button', {
      name: /vis alle virksomheter/i
    });
    expect(button).toBeInTheDocument();
    const searchFields = within(modal).queryAllByRole('searchbox');
    expect(searchFields.length).toBe(1);
  }
} satisfies Story`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    chromatic: {
      disableSnapshot: true
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
      name: dsI18n.t('ds_overlays:rolepicker.ShowAll')
    });
    expect(buttons.length).toBe(0);
    const searchFields = within(modal).queryAllByRole('searchbox');
    expect(searchFields.length).toBe(0);
  }
} satisfies Story`,...E.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...D.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
    chromatic: {
      disableSnapshot: true
    }
  }
} satisfies Story`,...I.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
    chromatic: {
      disableSnapshot: true
    }
  }
} satisfies Story`,...W.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...P.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...z.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'With Minimum Entities For Search (A19)',
  args: {
    ...defaultArgs,
    minimumEntitiesForSearch: 17 // Det finnes 16 personer/virksomheter i rollevelgeren, så søkefeltet vises ikke
  },
  render: DefaultTemplate,
  parameters: {
    chromatic: {
      disableSnapshot: true
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
    expect(searchInput).not.toBeInTheDocument();
  }
} satisfies Story`,...N.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'With Close Error',
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
  parameters: {
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...F.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'With Error Reset After Valid Selection',
  args: {
    ...defaultArgs
  },
  render: ErrorThenSuccessTemplate,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button');
    await userEvent.click(openButton);
    const modal = await canvas.findByRole('dialog');

    // Click on "me" (first role) which should fail
    const meLink = within(modal).getAllByRole('link')[0];
    await fireEvent.click(meLink);

    // Verify error appears
    const errorAlert = await within(modal).findByText('Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.');
    expect(errorAlert).toBeInTheDocument();

    // Click on a different person (should succeed and clear error)
    const validPersonLink = within(modal).getByRole('link', {
      name: /antikvitet presis/i
    });
    // Find a link that's not the "me" link (look for a person from the people list)
    await userEvent.click(validPersonLink);

    // Wait for the error to be removed and modal to close
    await waitFor(() => expect(modal).not.toBeVisible());

    // Open modal again
    userEvent.click(openButton);

    // Check that error message is gone
    expect(errorAlert).not.toBeInTheDocument();
  }
} satisfies Story`,...j.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: DefaultTemplate,
  name: 'On Mobile',
  args: {
    ...defaultArgs
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
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  }
} satisfies Story`,...H.parameters?.docs?.source}}};const we=["Defaults","WithAttributes","WithShowInactiveOrganizations","WithShowAllClicked","WithHideCloseIcon","WithCustomTitle","WithChildren","WithOnlyPeopleSearch","WithOnlyBusinessSearch","WithoutSearch","WithError","WithNoBusinesses","WithSpinner","With10000Businesses","WithNoDeletedBusinesses","WithNoSubunits","WithDeceasedPeople","WithNoDoubleUnitTypes","WithMinimumEntitiesForSearch","WithCloseError","WithErrorReset","OnMobile"];export{f as Defaults,H as OnMobile,W as With10000Businesses,B as WithAttributes,T as WithChildren,F as WithCloseError,S as WithCustomTitle,z as WithDeceasedPeople,D as WithError,j as WithErrorReset,k as WithHideCloseIcon,N as WithMinimumEntitiesForSearch,x as WithNoBusinesses,P as WithNoDeletedBusinesses,O as WithNoDoubleUnitTypes,C as WithNoSubunits,R as WithOnlyBusinessSearch,A as WithOnlyPeopleSearch,w as WithShowAllClicked,v as WithShowInactiveOrganizations,I as WithSpinner,E as WithoutSearch,we as __namedExportsOrder,ve as default};
//# sourceMappingURL=RolePicker.test.stories-LbX8tQdN.js.map
