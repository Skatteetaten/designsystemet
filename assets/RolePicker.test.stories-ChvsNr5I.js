import{j as r}from"./jsx-runtime-CfatFE5O.js";import{r as I}from"./index-ClcD9ViR.js";import{w as s,u,e as l,a as N}from"./index-XVqkR3zt.js";import{B as O}from"./index-CT5qi75N.js";import{d as E}from"./index-qxaMszO_.js";import{R as x}from"./index-D1Hhakcg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BYj_oXFq.js";import"./index-DVxy_Kbo.js";import"./index-DdP4wgFW.js";import"./index-ZuzByk-F.js";import"./index-DOHHf95q.js";import"./DatePickerCalendar-DkH0XVvE.js";import"./LabelWithHelp-CBkTgz7a.js";import"./Help-DD2Qmlbx.js";import"./index-DDpvzByM.js";import"./index-Deg9i1H2.js";const Oe={name:"Ola Nordmann",personId:"101010 12345",type:"Person"},z={total:16,list:[{name:"Costco",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Facebook",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"AS"}]},{name:"Instagram",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"AS"}]},{name:"Samsung",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Toshiba",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Meta",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Apple",organizationNumber:"412843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Microsoft",organizationNumber:"512843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Netflix",organizationNumber:"612843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Tesla",organizationNumber:"712843218",isDeleted:!1,type:"Organization",unitType:"AS"}]},We={total:4,list:[{name:"Antikvitet presis",personId:"138899 99726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"188495 74503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"088896 74513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"148924 49911",type:"Person",isDeleted:!1}]},Ce={total:11,list:[{name:"Frisk Elefant",personId:"100908 12345",type:"Person",isDeleted:!1},{name:"Melankolsk Aldrende Ape",personId:"138899 99726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"188495 74503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"088896 74513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"148924 49911",type:"Person",isDeleted:!1},{name:"Kari Nordmann",personId:"101010 54321",type:"Person",isDeleted:!1},{name:"Per Hansen",personId:"202020 12345",type:"Person",isDeleted:!1},{name:"Lise Olsen",personId:"303030 67890",type:"Person",isDeleted:!1},{name:"Nina Johansen",personId:"404040 11223",type:"Person",isDeleted:!1},{name:"Ole Pettersen",personId:"505050 44556",type:"Person",isDeleted:!1},{name:"Eva Nilsen",personId:"606060 77889",type:"Person",isDeleted:!1}]},nn={component:x,title:"Tester/RolePicker",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},me:{table:{disable:!0},control:"object"},people:{table:{disable:!0},control:"object"},businesses:{table:{disable:!0},control:"object"},title:{table:{disable:!0},control:"text"},dismissOnEsc:{table:{disable:!0},control:"boolean"},dismissOnOutsideClick:{table:{disable:!0},control:"boolean"},hideCloseButton:{table:{disable:!0},control:"boolean"},showSubunits:{table:{disable:!0},control:"boolean"},showInactiveBusinesses:{table:{disable:!0},control:"boolean"},onClose:{table:{disable:!0}},onEntitySelect:{table:{disable:!0}},onLogout:{table:{disable:!0}},children:{table:{disable:!0},control:"object"}},parameters:{viewport:{viewPortHeight:1400}}},o={me:Oe,businesses:z,people:We},c=a=>{const e=I.useRef(null),t=async n=>{var i;(i=e.current)==null||i.close()};return r.jsxs(r.Fragment,{children:[r.jsx(O,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),r.jsx(x,{...a,ref:e,onEntitySelect:t})]})},Ie=a=>{const e=I.useRef(null),t=async n=>({error:"Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang."});return r.jsxs(r.Fragment,{children:[r.jsx(O,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),r.jsx(x,{...a,ref:e,onEntitySelect:t})]})},Pe=a=>{const e=I.useRef(null),t=async n=>new Promise(i=>{setTimeout(()=>{var d;(d=e.current)==null||d.close(),i()},2e3)});return r.jsxs(r.Fragment,{children:[r.jsx(O,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),r.jsx(x,{...a,ref:e,onEntitySelect:t})]})},p={name:"Defaults (A1, A2, A14, B3, B2)",args:{...o,businesses:z,people:We},render:c,parameters:{imageSnapshot:{disable:!0}}},m={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID",...o},render:c,argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog");await l(n).toHaveAttribute("id","htmlId"),await l(n).toHaveClass("dummyClassname"),await l(n).toHaveAttribute("lang","en"),await l(n).toHaveAttribute("data-testid","123ID")}},b={name:"With Show Inactive Organizations (A11, B4)",args:{...o,people:void 0,me:void 0,showInactiveBusinesses:!0,showSubunits:!1},render:c,argTypes:{showInactiveBusinesses:{table:{disable:!1}}},play:async({args:a,canvasElement:e})=>{var C;const t=s(e),n=t.getByRole("button");await u.click(n);const i=await t.findByRole("dialog"),d=await s(i).findByRole("checkbox",{name:E.t("ds_overlays:rolepicker.ShowInactiveBusinessesHeader")});l(d).toBeChecked();const W=await s(i).findByRole("button",{name:/vis alle/i});await N.click(W);const Ne=await s(i).findAllByRole("link");l(Ne.length).toEqual((C=a.businesses)==null?void 0:C.list.length)}},g={name:"With Show All Clicked Focus (A12, B4)",args:{...o,businesses:z},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),i=await s(n).findByRole("button",{name:/vis alle/i}),d=await s(n).findAllByRole("link"),W=d.length-1;await N.click(i),l(d[W]).toHaveFocus()}},y={name:"Without Hide Close Icon (A3)",args:{...o,hideCloseButton:!0},render:c,argTypes:{hideCloseButton:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=s(a).getByRole("button");await u.click(t)}},P="Custom title",f={name:"With Custom Title (A4 delvis)",args:{...o,title:P},render:c,argTypes:{title:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),i=s(n).getByRole("heading",{level:1});l(i).toHaveTextContent(P)}},h={name:"With Children (A5)",args:{...o,people:void 0,children:r.jsx("div",{children:"Children"})},render:c,argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),i=s(n).getByText("Children");l(i).toBeInTheDocument()}},v={name:"With Only People Search (A6, A7)",args:{...o,businesses:void 0,people:Ce},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},B={name:"With Only Business Search (A6, A7)",args:{...o,people:void 0},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},S={name:"Without Search (A6)",args:{...o,businesses:{total:4,list:z.list.slice(1,3)},showSubunits:!1},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),i=s(n).queryAllByRole("button",{name:/vis alle/i});l(i.length).toBe(0);const d=s(n).queryAllByRole("textbox");l(d.length).toBe(0)},parameters:{imageSnapshot:{disable:!0}}},w={name:"With Error",args:{...o},render:Ie,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),i=s(n).getAllByRole("link")[0];await N.click(i);const d=await s(n).findByText("Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.");l(d).toBeInTheDocument()}},T={name:"With No Businesses",args:{...o,people:void 0,me:void 0,businesses:{total:0,list:[]}},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),i=s(n).getByRole("heading",{level:1});l(i).toHaveTextContent(E.t("ds_overlays:rolepicker.NoBusinessesErrorTitle"))}},k={name:"With Spinner",args:{...o},render:Pe,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},He={total:1e4,list:Array.from({length:1e4},(a,e)=>({name:`Organization ${e}`,organizationNumber:`${e}`,isDeleted:!1,unitType:"AS",type:"Organization"}))},A={name:"With 10000 Businesses",args:{...o,businesses:He,people:void 0},render:Ie,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},D={name:"With No Deleted Businesses",args:{...o,businesses:{total:3,list:[{name:"Samsung",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS",subunits:[{name:"Snapchat",organizationNumber:"123456623",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Statoil",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"AS"}]}]},people:void 0},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),i=s(n).queryByRole("checkbox",{name:E.t("ds_overlays:rolepicker.ShowInactiveBusinessesHeader")});l(i).not.toBeInTheDocument()}},R={name:"With No SubUnits",args:{...o,businesses:{total:2,list:[{name:"Samsung",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard",organizationNumber:"332843218",isDeleted:!0,type:"Organization",unitType:"AS"}]},people:void 0},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("button");await u.click(t);const n=await e.findByRole("dialog"),i=s(n).queryByRole("checkbox",{name:E.t("ds_overlays:rolepicker.ShowSubBusinessesHeading")});l(i).not.toBeInTheDocument()}};var H,j,F;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(F=(j=p.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var _,q,L;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(q=m.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var M,V,K;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(V=b.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var U,$,G;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=($=g.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,Q,X;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,te;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ie,oe;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(oe=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,re,ce;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(re=B.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var de,ue,pe;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,be,ge;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(be=w.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var ye,fe,he;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ve,Be,Se;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(Se=(Be=k.parameters)==null?void 0:Be.docs)==null?void 0:Se.source}}};var we,Te,ke;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(Te=A.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};var Ae,De,Re;D.parameters={...D.parameters,docs:{...(Ae=D.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(Re=(De=D.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ee,xe,ze;R.parameters={...R.parameters,docs:{...(Ee=R.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(ze=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:ze.source}}};const an=["Defaults","WithAttributes","WithShowInactiveOrganizations","WithShowAllClicked","WithoutHideCloseIcon","WithCustomTitle","WithChildren","WithOnlyPeopleSearch","WithOnlyBusinessSearch","WithoutSearch","WithError","WithNoBusinesses","WithSpinner","With10000Businesses","WithNoDeletedBusinesses","WithNoSubunits"];export{p as Defaults,A as With10000Businesses,m as WithAttributes,h as WithChildren,f as WithCustomTitle,w as WithError,T as WithNoBusinesses,D as WithNoDeletedBusinesses,R as WithNoSubunits,B as WithOnlyBusinessSearch,v as WithOnlyPeopleSearch,g as WithShowAllClicked,b as WithShowInactiveOrganizations,k as WithSpinner,y as WithoutHideCloseIcon,S as WithoutSearch,an as __namedExportsOrder,nn as default};
//# sourceMappingURL=RolePicker.test.stories-ChvsNr5I.js.map
