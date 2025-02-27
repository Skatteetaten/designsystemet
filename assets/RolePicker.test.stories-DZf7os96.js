import{j as d}from"./jsx-runtime-BYYWji4R.js";import{r as C}from"./index-ClcD9ViR.js";import{w as s,u,e as i,a as I}from"./index-DIxTUSTt.js";import{B as H}from"./index-DYo2YWtE.js";import{d as b}from"./index-D9wdQ6Rv.js";import{R as P}from"./index-BHh8H2oz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BomPkCop.js";import"./index-C176R4Vg.js";import"./index--gfV2u6P.js";import"./floating-ui.react-CRlmITer.js";import"./index-C-O_Pr5g.js";import"./index-Sqvq7mYU.js";import"./DatePickerCalendar-CdhpCad8.js";import"./LabelWithHelp-Ck3epTxf.js";import"./Help-qKV-_woo.js";import"./index-DeA6s3pl.js";import"./index-RZuery3U.js";const Fe={name:"Ola Nordmann",personId:"101010 12345",type:"Person"},N={total:16,list:[{name:"Costco",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Facebook",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"AS"}]},{name:"Instagram",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"AS"}]},{name:"Samsung",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Toshiba",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Meta",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Apple",organizationNumber:"412843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Microsoft",organizationNumber:"512843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Netflix",organizationNumber:"612843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Tesla",organizationNumber:"712843218",isDeleted:!1,type:"Organization",unitType:"AS"}]},He={total:4,list:[{name:"Antikvitet presis",personId:"138899 99726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"188495 74503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"088896 74513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"148924 49911",type:"Person",isDeleted:!1}]},p={total:11,list:[{name:"Frisk Elefant",personId:"100908 12345",type:"Person",isDeleted:!1},{name:"Melankolsk Aldrende Ape",personId:"138899 99726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"188495 74503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"088896 74513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"148924 49911",type:"Person",isDeleted:!1},{name:"Kari Nordmann",personId:"101010 54321",type:"Person",isDeleted:!1},{name:"Per Hansen",personId:"202020 12345",type:"Person",isDeleted:!1},{name:"Lise Olsen",personId:"303030 67890",type:"Person",isDeleted:!1},{name:"Nina Johansen",personId:"404040 11223",type:"Person",isDeleted:!1},{name:"Ole Pettersen",personId:"505050 44556",type:"Person",isDeleted:!1},{name:"Eva Nilsen",personId:"606060 77889",type:"Person",isDeleted:!1}]},rn={component:P,title:"Tester/RolePicker",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},me:{table:{disable:!0},control:"object"},people:{table:{disable:!0},control:"object"},businesses:{table:{disable:!0},control:"object"},title:{table:{disable:!0},control:"text"},dismissOnEsc:{table:{disable:!0},control:"boolean"},dismissOnOutsideClick:{table:{disable:!0},control:"boolean"},hideCloseButton:{table:{disable:!0},control:"boolean"},showSubunits:{table:{disable:!0},control:"boolean"},showInactiveBusinesses:{table:{disable:!0},control:"boolean"},showDeceasedPeople:{table:{disable:!0},control:"boolean"},onClose:{table:{disable:!0}},onEntitySelect:{table:{disable:!0}},onLogout:{table:{disable:!0}},children:{table:{disable:!0},control:"object"}},parameters:{viewport:{viewPortHeight:1400}}},l={me:Fe,businesses:N,people:He},r=a=>{const e=C.useRef(null),t=async n=>{var o;(o=e.current)==null||o.close()};return d.jsxs(d.Fragment,{children:[d.jsx(H,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),d.jsx(P,{...a,ref:e,onEntitySelect:t})]})},je=a=>{const e=C.useRef(null),t=async n=>({error:"Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang."});return d.jsxs(d.Fragment,{children:[d.jsx(H,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),d.jsx(P,{...a,ref:e,onEntitySelect:t})]})},_e=a=>{const e=C.useRef(null),t=async n=>new Promise(o=>{setTimeout(()=>{var c;(c=e.current)==null||c.close(),o()},2e3)});return d.jsxs(d.Fragment,{children:[d.jsx(H,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),d.jsx(P,{...a,ref:e,onEntitySelect:t})]})},g={name:"Defaults (A1, A2, A14, B3, B2)",args:{...l,businesses:N,people:He},render:r,parameters:{imageSnapshot:{disable:!0}}},y={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID",...l},render:r,argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog");await i(n).toHaveAttribute("id","htmlId"),await i(n).toHaveClass("dummyClassname"),await i(n).toHaveAttribute("lang","en"),await i(n).toHaveAttribute("data-testid","123ID")}},f={name:"With Show Inactive Organizations (A11, B4)",args:{...l,people:void 0,me:void 0,showInactiveBusinesses:!0,showSubunits:!1},render:r,argTypes:{showInactiveBusinesses:{table:{disable:!1}}},play:async({args:a,canvasElement:e})=>{var j;const t=s(e),n=t.getByRole("button");await u.click(n);const o=await t.findByRole("dialog"),c=await s(o).findByRole("checkbox",{name:b.t("ds_overlays:rolepicker.ShowInactiveBusinessesHeader")});i(c).toBeChecked();const m=await s(o).findByRole("button",{name:/vis alle/i});await I.click(m);const O=await s(o).findAllByRole("link");i(O.length).toEqual((j=a.businesses)==null?void 0:j.list.length)}},h={name:"With Show All Clicked Focus (A12, B4)",args:{...l,businesses:N},render:r,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=await s(n).findByRole("button",{name:/vis alle/i}),c=await s(n).findAllByRole("link"),m=c.length-1;await I.click(o),i(c[m]).toHaveFocus()}},v={name:"Without Hide Close Icon (A3)",args:{...l,hideCloseButton:!0},render:r,argTypes:{hideCloseButton:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=s(a).getByRole("button");await u.click(t)}},F="Custom title",B={name:"With Custom Title (A4 delvis)",args:{...l,title:F},render:r,argTypes:{title:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=s(n).getByRole("heading",{level:1});i(o).toHaveTextContent(F)}},w={name:"With Children (A5)",args:{...l,people:void 0,children:d.jsx("div",{children:"Children"})},render:r,argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=s(n).getByText("Children");i(o).toBeInTheDocument()}},S={name:"With Only People Search (A6, A7)",args:{...l,businesses:void 0,people:p},render:r,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},k={name:"With Only Business Search (A6, A7)",args:{...l,people:void 0},render:r,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},T={name:"Without Search (A6)",args:{...l,businesses:{total:4,list:N.list.slice(1,3)},showSubunits:!1},render:r,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=s(n).queryAllByRole("button",{name:/vis alle/i});i(o.length).toBe(0);const c=s(n).queryAllByRole("textbox");i(c.length).toBe(0)},parameters:{imageSnapshot:{disable:!0}}},A={name:"With Error",args:{...l},render:je,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=s(n).getAllByRole("link")[0];await I.click(o);const c=await s(n).findByText("Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.");i(c).toBeInTheDocument()}},D={name:"With No Businesses",args:{...l,people:void 0,me:void 0,businesses:{total:0,list:[]}},render:r,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=s(n).getByRole("heading",{level:1});i(o).toHaveTextContent(b.t("ds_overlays:rolepicker.NoBusinessesErrorTitle"))}},R={name:"With Spinner",args:{...l},render:_e,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},qe={total:1e4,list:Array.from({length:1e4},(a,e)=>({name:`Organization ${e}`,organizationNumber:`${e}`,isDeleted:!1,unitType:"AS",type:"Organization"}))},E={name:"With 10000 Businesses",args:{...l,businesses:qe,people:void 0},render:je,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},x={name:"With No Deleted Businesses",args:{...l,businesses:{total:3,list:[{name:"Samsung",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS",subunits:[{name:"Snapchat",organizationNumber:"123456623",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Statoil",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"AS"}]}]},people:void 0},render:r,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=s(n).queryByRole("checkbox",{name:b.t("ds_overlays:rolepicker.ShowInactiveBusinessesHeader")});i(o).not.toBeInTheDocument()}},W={name:"With No SubUnits",args:{...l,businesses:{total:2,list:[{name:"Samsung",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard",organizationNumber:"332843218",isDeleted:!0,type:"Organization",unitType:"AS"}]},people:void 0},render:r,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),o=s(n).queryByRole("checkbox",{name:b.t("ds_overlays:rolepicker.ShowSubBusinessesHeading")});i(o).not.toBeInTheDocument()}},Le={...p,list:p.list.map((a,e)=>({...a,isDeleted:e%2===0}))},z={name:"With Deceased People",args:{...l,businesses:void 0,me:void 0,people:Le,showDeceasedPeople:!0},render:r,argTypes:{showDeceasedPeople:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({args:a,canvasElement:e})=>{const t=s(e),n=t.getByRole("button");await u.click(n);const o=await t.findByRole("dialog"),c=await s(o).findByRole("checkbox",{name:b.t("ds_overlays:rolepicker.ShowDeceasedPersons")});i(c).toBeChecked();const m=await s(o).findByRole("button",{name:/vis alle/i});await I.click(m);const O=await s(o).findAllByRole("link");i(O.length).toEqual(p==null?void 0:p.list.length)}};var _,q,L;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(L=(q=g.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var M,V,K;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(V=y.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var U,$,G;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=($=f.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,Q,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,te;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,oe,ie;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,re,ce;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var de,ue,pe;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,be,ge;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(be=T.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var ye,fe,he;A.parameters={...A.parameters,docs:{...(ye=A.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ve,Be,we;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(we=(Be=D.parameters)==null?void 0:Be.docs)==null?void 0:we.source}}};var Se,ke,Te;R.parameters={...R.parameters,docs:{...(Se=R.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var Ae,De,Re;E.parameters={...E.parameters,docs:{...(Ae=E.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(Re=(De=E.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ee,xe,We;x.parameters={...x.parameters,docs:{...(Ee=x.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'With No Deleted Businesses',
  args: {
    ...defaultArgs,
    businesses: {
      total: 3,
      list: [{
        name: 'Samsung',
        organizationNumber: '312943218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'AS',
        subunits: [{
          name: 'Snapchat',
          organizationNumber: '123456623',
          isDeleted: false,
          type: 'Organization',
          unitType: 'AS'
        }, {
          name: 'Statoil',
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
} satisfies Story`,...(We=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:We.source}}};var ze,Ie,Pe;W.parameters={...W.parameters,docs:{...(ze=W.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'With No SubUnits',
  args: {
    ...defaultArgs,
    businesses: {
      total: 2,
      list: [{
        name: 'Samsung',
        organizationNumber: '312943218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'AS'
      }, {
        name: 'Vanguard',
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
} satisfies Story`,...(Pe=(Ie=W.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var Ne,Oe,Ce;z.parameters={...z.parameters,docs:{...(Ne=z.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ce=(Oe=z.parameters)==null?void 0:Oe.docs)==null?void 0:Ce.source}}};const cn=["Defaults","WithAttributes","WithShowInactiveOrganizations","WithShowAllClicked","WithoutHideCloseIcon","WithCustomTitle","WithChildren","WithOnlyPeopleSearch","WithOnlyBusinessSearch","WithoutSearch","WithError","WithNoBusinesses","WithSpinner","With10000Businesses","WithNoDeletedBusinesses","WithNoSubunits","WithDeceasedPeople"];export{g as Defaults,E as With10000Businesses,y as WithAttributes,w as WithChildren,B as WithCustomTitle,z as WithDeceasedPeople,A as WithError,D as WithNoBusinesses,x as WithNoDeletedBusinesses,W as WithNoSubunits,k as WithOnlyBusinessSearch,S as WithOnlyPeopleSearch,h as WithShowAllClicked,f as WithShowInactiveOrganizations,R as WithSpinner,v as WithoutHideCloseIcon,T as WithoutSearch,cn as __namedExportsOrder,rn as default};
//# sourceMappingURL=RolePicker.test.stories-DZf7os96.js.map
