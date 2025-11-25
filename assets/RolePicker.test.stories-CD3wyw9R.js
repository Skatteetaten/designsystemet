import{j as d}from"./jsx-runtime-BYYWji4R.js";import{r as j}from"./index-ClcD9ViR.js";import{w as s,u,e as i,a as N}from"./index-DIxTUSTt.js";import{B as F}from"./index-CEFmy_Ic.js";import{d as y}from"./index-BYKicpQW.js";import{R as O}from"./index-C22RbeRZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C8q4C1To.js";import"./index-BuQZV-my.js";import"./index-7bHEsQL_.js";import"./floating-ui.react-CRlmITer.js";import"./index-C-O_Pr5g.js";import"./index-DEJUArlV.js";import"./DatePickerCalendar-HH4LMRzz.js";import"./LabelWithHelp-D9yud6GC.js";import"./Help-CJ8w0Npo.js";import"./index-Cs0ivlf6.js";import"./index-DBMXQzRX.js";const $e={name:"Ola Nordmann",personId:"101010 12345",type:"Person"},H={total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Toshiba AS",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi AS",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Meta ANS",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"ANS"}]},Le={total:4,list:[{name:"Antikvitet presis",personId:"138899 99726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"188495 74503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"088896 74513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"148924 49911",type:"Person",isDeleted:!1}]},b={total:11,list:[{name:"Frisk Elefant",personId:"100908 12345",type:"Person",isDeleted:!1},{name:"Melankolsk Aldrende Ape",personId:"138899 99726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"188495 74503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"088896 74513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"148924 49911",type:"Person",isDeleted:!1},{name:"Kari Nordmann",personId:"101010 54321",type:"Person",isDeleted:!1},{name:"Per Hansen",personId:"202020 12345",type:"Person",isDeleted:!1},{name:"Lise Olsen",personId:"303030 67890",type:"Person",isDeleted:!1},{name:"Nina Johansen",personId:"404040 11223",type:"Person",isDeleted:!1},{name:"Ole Pettersen",personId:"505050 44556",type:"Person",isDeleted:!1},{name:"Eva Nilsen",personId:"606060 77889",type:"Person",isDeleted:!1}]},bn={component:O,title:"Tester/RolePicker",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},me:{table:{disable:!0},control:"object"},people:{table:{disable:!0},control:"object"},businesses:{table:{disable:!0},control:"object"},title:{table:{disable:!0},control:"text"},dismissOnEsc:{table:{disable:!0},control:"boolean"},dismissOnOutsideClick:{table:{disable:!0},control:"boolean"},hideCloseButton:{table:{disable:!0},control:"boolean"},showSubunits:{table:{disable:!0},control:"boolean"},showInactiveBusinesses:{table:{disable:!0},control:"boolean"},showDeceasedPeople:{table:{disable:!0},control:"boolean"},onClose:{table:{disable:!0}},onEntitySelect:{table:{disable:!0}},onLogout:{table:{disable:!0}},children:{table:{disable:!0},control:"object"}},parameters:{viewport:{viewPortHeight:1400}}},l={me:$e,businesses:H,people:Le},c=a=>{const e=j.useRef(null),t=async n=>{var o;(o=e.current)==null||o.close()};return d.jsxs(d.Fragment,{children:[d.jsx(F,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),d.jsx(O,{...a,ref:e,onEntitySelect:t})]})},Ve=a=>{const e=j.useRef(null),t=async n=>({error:"Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang."});return d.jsxs(d.Fragment,{children:[d.jsx(F,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),d.jsx(O,{...a,ref:e,onEntitySelect:t})]})},Me=a=>{const e=j.useRef(null),t=async n=>new Promise(o=>{setTimeout(()=>{var r;(r=e.current)==null||r.close(),o()},2e3)});return d.jsxs(d.Fragment,{children:[d.jsx(F,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),d.jsx(O,{...a,ref:e,onEntitySelect:t})]})},h={name:"Defaults (A1, A2, A14, B3, B2)",args:{...l,businesses:H,people:Le},render:c,parameters:{imageSnapshot:{disable:!0}}},f={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID",...l},render:c,argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog");await i(n).toHaveAttribute("id","htmlId"),await i(n).toHaveClass("dummyClassname"),await i(n).toHaveAttribute("lang","en"),await i(n).toHaveAttribute("data-testid","123ID")}},v={name:"With Show Inactive Organizations (A11, B4)",args:{...l,people:void 0,me:void 0,showInactiveBusinesses:!0,showSubunits:!1},render:c,argTypes:{showInactiveBusinesses:{table:{disable:!1}}},play:async({args:a,canvasElement:e})=>{var g;const t=s(e),n=t.getByRole("button");await u.click(n);const o=await t.findByRole("dialog"),r=await s(o).findByRole("checkbox",{name:y.t("ds_overlays:rolepicker.ShowInactiveBusinessesHeader")});i(r).toBeChecked();const p=await s(o).findByRole("button",{name:/vis alle/i});await N.click(p);const m=await s(o).findAllByRole("link");i(m.length).toEqual((g=a.businesses)==null?void 0:g.list.length)}},B={name:"With Show All Clicked Focus (A12, B4)",args:{...l,businesses:H},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=await s(n).findByRole("button",{name:/vis alle/i}),r=await s(n).findAllByRole("link"),p=r.length-1;await N.click(o),i(r[p]).toHaveFocus()}},w={name:"Without Hide Close Icon (A3)",args:{...l,hideCloseButton:!0},render:c,argTypes:{hideCloseButton:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=s(a).getByRole("button");await u.click(t)}},U="Custom title",S={name:"With Custom Title (A4 delvis)",args:{...l,title:U},render:c,argTypes:{title:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=s(n).getByRole("heading",{level:1});i(o).toHaveTextContent(U)}},A={name:"With Children (A5)",args:{...l,people:void 0,children:d.jsx("div",{children:"Children"})},render:c,argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=s(n).getByText("Children");i(o).toBeInTheDocument()}},k={name:"With Only People Search (A6, A7)",args:{...l,businesses:void 0,people:b},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},T={name:"With Only Business Search (A6, A7)",args:{...l,people:void 0},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},D={name:"Without Search (A6)",args:{...l,businesses:{total:4,list:H.list.slice(1,3)},showSubunits:!1},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=s(n).queryAllByRole("button",{name:/vis alle/i});i(o.length).toBe(0);const r=s(n).queryAllByRole("textbox");i(r.length).toBe(0)},parameters:{imageSnapshot:{disable:!0}}},R={name:"With Error",args:{...l},render:Ve,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=s(n).getAllByRole("link")[0];await N.click(o);const r=await s(n).findByText("Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.");i(r).toBeInTheDocument()}},x={name:"With No Businesses",args:{...l,people:void 0,me:void 0,businesses:{total:0,list:[]}},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=s(n).getByRole("heading",{level:1});i(o).toHaveTextContent(y.t("ds_overlays:rolepicker.NoBusinessesErrorTitle"))}},E={name:"With Spinner",args:{...l},render:Me,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},Ke={total:1e4,list:Array.from({length:1e4},(a,e)=>({name:`Organization ${e}`,organizationNumber:`${e}`,isDeleted:!1,unitType:"AS",type:"Organization"}))},W={name:"With 10000 Businesses",args:{...l,businesses:Ke,people:void 0},render:Ve,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},I={name:"With No Deleted Businesses",args:{...l,businesses:{total:3,list:[{name:"Samsung AS",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Statoil AS",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"AS"}]}]},people:void 0},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=s(n).queryByRole("checkbox",{name:y.t("ds_overlays:rolepicker.ShowInactiveBusinessesHeader")});i(o).not.toBeInTheDocument()}},P={name:"With No SubUnits",args:{...l,businesses:{total:2,list:[{name:"Samsung AS",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!0,type:"Organization",unitType:"AS"}]},people:void 0},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=s(n).queryByRole("checkbox",{name:y.t("ds_overlays:rolepicker.ShowSubBusinessesHeading")});i(o).not.toBeInTheDocument()}},Ge={...b,list:b.list.map((a,e)=>({...a,isDeleted:e%2===0}))},z={name:"With Deceased People",args:{...l,businesses:void 0,me:void 0,people:Ge,showDeceasedPeople:!0},render:c,argTypes:{showDeceasedPeople:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({args:a,canvasElement:e})=>{const t=s(e),n=t.getByRole("button");await u.click(n);const o=await t.findByRole("dialog"),r=await s(o).findByRole("checkbox",{name:y.t("ds_overlays:rolepicker.ShowDeceasedPersons")});i(r).toBeChecked();const p=await s(o).findByRole("button",{name:/vis alle/i});await N.click(p);const m=await s(o).findAllByRole("link");i(m.length).toEqual(b==null?void 0:b.list.length)}},C={name:"With No Double Unit Types",args:{...l,showSubunits:!1,people:void 0,me:void 0},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog");(await s(n).findAllByRole("heading",{level:3})).forEach(r=>{var _,q;const p=((_=r.textContent)==null?void 0:_.toUpperCase())||"",m=((q=r.textContent)==null?void 0:q.split(" "))||[],g=m[m.length-1];i(p.endsWith(` ${g} ${g}`)).toBe(!1)})}};var L,V,$;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
  }
}`,...($=(V=h.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var M,K,G;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(K=f.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var J,Q,X;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'With Show Inactive Organizations (A11, B4)',
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
    const button = await within(modal).findByRole('button', {
      name: /vis alle/i
    });
    await fireEvent.click(button);
    const links = await within(modal).findAllByRole('link');
    expect(links.length).toEqual(args.businesses?.list.length);
  }
} satisfies Story`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,te;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,oe,ie;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,re,ce;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var de,ue,pe;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,be,ge;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(be=T.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var ye,he,fe;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(fe=(he=D.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ve,Be,we;R.parameters={...R.parameters,docs:{...(ve=R.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(we=(Be=R.parameters)==null?void 0:Be.docs)==null?void 0:we.source}}};var Se,Ae,ke;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(Ae=x.parameters)==null?void 0:Ae.docs)==null?void 0:ke.source}}};var Te,De,Re;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
} satisfies Story`,...(Re=(De=E.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var xe,Ee,We;W.parameters={...W.parameters,docs:{...(xe=W.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(We=(Ee=W.parameters)==null?void 0:Ee.docs)==null?void 0:We.source}}};var Ie,Pe,ze;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(ze=(Pe=I.parameters)==null?void 0:Pe.docs)==null?void 0:ze.source}}};var Ce,Ne,Oe;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(Oe=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var He,je,Fe;z.parameters={...z.parameters,docs:{...(He=z.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
    args,
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
} satisfies Story`,...(Fe=(je=z.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};var _e,qe,Ue;C.parameters={...C.parameters,docs:{...(_e=C.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ue=(qe=C.parameters)==null?void 0:qe.docs)==null?void 0:Ue.source}}};const gn=["Defaults","WithAttributes","WithShowInactiveOrganizations","WithShowAllClicked","WithoutHideCloseIcon","WithCustomTitle","WithChildren","WithOnlyPeopleSearch","WithOnlyBusinessSearch","WithoutSearch","WithError","WithNoBusinesses","WithSpinner","With10000Businesses","WithNoDeletedBusinesses","WithNoSubunits","WithDeceasedPeople","WithNoDoubleUnitTypes"];export{h as Defaults,W as With10000Businesses,f as WithAttributes,A as WithChildren,S as WithCustomTitle,z as WithDeceasedPeople,R as WithError,x as WithNoBusinesses,I as WithNoDeletedBusinesses,C as WithNoDoubleUnitTypes,P as WithNoSubunits,T as WithOnlyBusinessSearch,k as WithOnlyPeopleSearch,B as WithShowAllClicked,v as WithShowInactiveOrganizations,E as WithSpinner,w as WithoutHideCloseIcon,D as WithoutSearch,gn as __namedExportsOrder,bn as default};
//# sourceMappingURL=RolePicker.test.stories-CD3wyw9R.js.map
