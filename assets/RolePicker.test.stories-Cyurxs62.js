import{j as u}from"./jsx-runtime-BjG_zV1W.js";import{r as q}from"./index-7h80QhK_.js";import{w as s,u as d,e as i,a as H}from"./index-DIxTUSTt.js";import{B as M}from"./index-B77p9Xne.js";import{d as y}from"./index-EsEcB_zD.js";import{R as F}from"./index-BjHq0w7B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-vpaAjjI_.js";import"./index-_-BAtSXr.js";import"./index-SYCMKRjb.js";import"./floating-ui.react-Bjj2VaAd.js";import"./index-tLsore8Q.js";import"./index-Byc3xEr-.js";import"./DatePickerCalendar-DfBQ8U9V.js";import"./LabelWithHelp-B7cXZmxy.js";import"./Help-fmzU6O8S.js";import"./index-CnP6odjp.js";import"./index-ukAKs0SN.js";import"./index-BHu9F8Kl.js";const Je={name:"Ola Nordmann",personId:"10101012345",type:"Person"},j={total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Toshiba AS",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi AS",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Meta",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"ApS"}]},Ke={total:4,list:[{name:"Antikvitet presis",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1}]},m={total:11,list:[{name:"Frisk Elefant",personId:"10090812345",type:"Person",isDeleted:!1},{name:"Melankolsk Aldrende Ape",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1},{name:"Kari Nordmann",personId:"10101054321",type:"Person",isDeleted:!1},{name:"Per Hansen",personId:"20202012345",type:"Person",isDeleted:!1},{name:"Lise Olsen",personId:"30303067890",type:"Person",isDeleted:!1},{name:"Nina Johansen",personId:"40404011223",type:"Person",isDeleted:!1},{name:"Ole Pettersen",personId:"50505044556",type:"Person",isDeleted:!1},{name:"Eva Nilsen",personId:"60606077889",type:"Person",isDeleted:!1}]},Bn={component:F,title:"Tester/RolePicker",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},me:{table:{disable:!0},control:"object"},people:{table:{disable:!0},control:"object"},businesses:{table:{disable:!0},control:"object"},minimumEntitiesForSearch:{table:{disable:!0},control:"number"},title:{table:{disable:!0},control:"text"},dismissOnEsc:{table:{disable:!0},control:"boolean"},dismissOnOutsideClick:{table:{disable:!0},control:"boolean"},hideCloseButton:{table:{disable:!0},control:"boolean"},showSubunits:{table:{disable:!0},control:"boolean"},showInactiveBusinesses:{table:{disable:!0},control:"boolean"},showDeceasedPeople:{table:{disable:!0},control:"boolean"},onClose:{table:{disable:!0}},onEntitySelect:{table:{disable:!0}},onLogout:{table:{disable:!0}},children:{table:{disable:!0},control:"object"}},parameters:{viewport:{viewPortHeight:1400}}},l={me:Je,businesses:j,people:Ke},c=t=>{const e=q.useRef(null),a=async n=>{var o;(o=e.current)==null||o.close()};return u.jsxs(u.Fragment,{children:[u.jsx(M,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),u.jsx(F,{...t,ref:e,onEntitySelect:a})]})},Ge=t=>{const e=q.useRef(null),a=async n=>({error:"Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang."});return u.jsxs(u.Fragment,{children:[u.jsx(M,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),u.jsx(F,{...t,ref:e,onEntitySelect:a})]})},Qe=t=>{const e=q.useRef(null),a=async n=>new Promise(o=>{setTimeout(()=>{var r;(r=e.current)==null||r.close(),o()},2e3)});return u.jsxs(u.Fragment,{children:[u.jsx(M,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),u.jsx(F,{...t,ref:e,onEntitySelect:a})]})},f={name:"Defaults (A1, A2, A14, B3, B2)",args:{...l,businesses:j,people:Ke},render:c,parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=s(t),a=e.getByRole("button");await d.click(a);const n=await e.findByRole("dialog"),o=s(n).queryByRole("searchbox");i(o).toBeInTheDocument()}},B={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID",...l},render:c,argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=s(t),a=e.getByRole("button");await d.click(a);const n=await e.findByRole("dialog");await i(n).toHaveAttribute("id","htmlId"),await i(n).toHaveClass("dummyClassname"),await i(n).toHaveAttribute("lang","en"),await i(n).toHaveAttribute("data-testid","123ID")}},v={name:"With Show Inactive Organizations And Show Less Button (A11, A18, B4)",args:{...l,people:void 0,me:void 0,showInactiveBusinesses:!0,showSubunits:!1},render:c,argTypes:{showInactiveBusinesses:{table:{disable:!1}}},play:async({args:t,canvasElement:e})=>{var b;const a=s(e),n=a.getByRole("button");await d.click(n);const o=await a.findByRole("dialog"),r=await s(o).findByRole("checkbox",{name:y.t("ds_overlays:rolepicker.ShowInactiveBusinessesHeader")});i(r).toBeChecked();const p=await s(o).findByRole("button",{name:/vis alle/i});await H.click(p);const g=await s(o).findAllByRole("link");i(g.length).toEqual((b=t.businesses)==null?void 0:b.list.length),i(p).toBeInTheDocument();const h=await s(o).findByText(/færre/i);i(h).toBeInTheDocument()}},w={name:"With Show All Clicked Focus (A12, B4)",args:{...l,businesses:j},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=s(t),a=e.getByRole("button");await d.click(a);const n=await e.findByRole("dialog"),o=await s(n).findByRole("button",{name:/vis alle/i}),r=await s(n).findAllByRole("link"),p=r.length-1;await H.click(o),i(r[p]).toHaveFocus()}},S={name:"Without Hide Close Icon (A3)",args:{...l,hideCloseButton:!0},render:c,argTypes:{hideCloseButton:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=s(t).getByRole("button");await d.click(a)}},L="Custom title",A={name:"With Custom Title (A4 delvis)",args:{...l,title:L},render:c,argTypes:{title:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=s(t),a=e.getByRole("button");await d.click(a);const n=await e.findByRole("dialog"),o=s(n).getByRole("heading",{level:1});i(o).toHaveTextContent(L)}},k={name:"With Children (A5)",args:{...l,people:void 0,children:u.jsx("div",{children:"Children"})},render:c,argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=s(t),a=e.getByRole("button");await d.click(a);const n=await e.findByRole("dialog"),o=s(n).getByText("Children");i(o).toBeInTheDocument()}},T={name:"With Only People Search (A6, A7)",args:{...l,businesses:void 0,people:m},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},D={name:"With Only Business Search (A6, A7)",args:{...l,people:void 0},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},R={name:"Without Search (A6)",args:{...l,businesses:{total:4,list:j.list.slice(1,3)},showSubunits:!1},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=s(t),a=e.getByRole("button");await d.click(a);const n=await e.findByRole("dialog"),o=s(n).queryAllByRole("button",{name:/vis alle/i});i(o.length).toBe(0);const r=s(n).queryAllByRole("textbox");i(r.length).toBe(0)},parameters:{imageSnapshot:{disable:!0}}},E={name:"With Error",args:{...l},render:Ge,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=s(t),a=e.getByRole("button");await d.click(a);const n=await e.findByRole("dialog"),o=s(n).getAllByRole("link")[0];await H.click(o);const r=await s(n).findByText("Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.");i(r).toBeInTheDocument()}},x={name:"With No Businesses",args:{...l,people:void 0,me:void 0,businesses:{total:0,list:[]}},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=s(t),a=e.getByRole("button");await d.click(a);const n=await e.findByRole("dialog"),o=s(n).getByRole("heading",{level:1});i(o).toHaveTextContent(y.t("ds_overlays:rolepicker.NoBusinessesErrorTitle"))}},W={name:"With Spinner",args:{...l},render:Qe,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},Xe={total:1e4,list:Array.from({length:1e4},(t,e)=>({name:`Organization ${e}`,organizationNumber:`${e}`,isDeleted:!1,unitType:"AS",type:"Organization"}))},I={name:"With 10000 Businesses",args:{...l,businesses:Xe,people:void 0},render:Ge,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},P={name:"With No Deleted Businesses",args:{...l,businesses:{total:3,list:[{name:"Samsung AS",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Statoil AS",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"AS"}]}]},people:void 0},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=s(t),a=e.getByRole("button");await d.click(a);const n=await e.findByRole("dialog"),o=s(n).queryByRole("checkbox",{name:y.t("ds_overlays:rolepicker.ShowInactiveBusinessesHeader")});i(o).not.toBeInTheDocument()}},z={name:"With No SubUnits",args:{...l,businesses:{total:2,list:[{name:"Samsung AS",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!0,type:"Organization",unitType:"AS"}]},people:void 0},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=s(t),a=e.getByRole("button");await d.click(a);const n=await e.findByRole("dialog"),o=s(n).queryByRole("checkbox",{name:y.t("ds_overlays:rolepicker.ShowSubBusinessesHeading")});i(o).not.toBeInTheDocument()}},Ye={...m,list:m.list.map((t,e)=>({...t,isDeleted:e%2===0}))},C={name:"With Deceased People",args:{...l,businesses:void 0,me:void 0,people:Ye,showDeceasedPeople:!0},render:c,argTypes:{showDeceasedPeople:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=s(t),a=e.getByRole("button");await d.click(a);const n=await e.findByRole("dialog"),o=await s(n).findByRole("checkbox",{name:y.t("ds_overlays:rolepicker.ShowDeceasedPersons")});i(o).toBeChecked();const r=await s(n).findByRole("button",{name:/vis alle/i});await H.click(r);const p=await s(n).findAllByRole("link");i(p.length).toEqual(m==null?void 0:m.list.length)}},N={name:"With No Double Unit Types",args:{...l,showSubunits:!1,people:void 0,me:void 0},render:c,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=s(t),a=e.getByRole("button");await d.click(a);const n=await e.findByRole("dialog");(await s(n).findAllByRole("heading",{level:3})).forEach(r=>{var b,_;const p=((b=r.textContent)==null?void 0:b.toUpperCase())||"",g=((_=r.textContent)==null?void 0:_.split(" "))||[],h=g[g.length-1];i(p.endsWith(` ${h} ${h}`)).toBe(!1)})}},O={name:"With Minimum Entities For Search (A19)",args:{...l,minimumEntitiesForSearch:17},render:c,play:async({canvasElement:t})=>{const e=s(t),a=e.getByRole("button");await d.click(a);const n=await e.findByRole("dialog"),o=s(n).queryByRole("searchbox");i(o).not.toBeInTheDocument()}};var U,V,$;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...($=(V=f.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var K,G,J;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(G=B.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,se;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(se=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ie,le;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var re,ce,de;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,me;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(me=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var be,ye,ge;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var he,fe,Be;R.parameters={...R.parameters,docs:{...(he=R.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(fe=R.parameters)==null?void 0:fe.docs)==null?void 0:Be.source}}};var ve,we,Se;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(Se=(we=E.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Ae,ke,Te;x.parameters={...x.parameters,docs:{...(Ae=x.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(ke=x.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var De,Re,Ee;W.parameters={...W.parameters,docs:{...(De=W.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ee=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var xe,We,Ie;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(We=I.parameters)==null?void 0:We.docs)==null?void 0:Ie.source}}};var Pe,ze,Ce;P.parameters={...P.parameters,docs:{...(Pe=P.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ce=(ze=P.parameters)==null?void 0:ze.docs)==null?void 0:Ce.source}}};var Ne,Oe,He;z.parameters={...z.parameters,docs:{...(Ne=z.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(He=(Oe=z.parameters)==null?void 0:Oe.docs)==null?void 0:He.source}}};var Fe,je,qe;C.parameters={...C.parameters,docs:{...(Fe=C.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(qe=(je=C.parameters)==null?void 0:je.docs)==null?void 0:qe.source}}};var Me,_e,Le;N.parameters={...N.parameters,docs:{...(Me=N.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(_e=N.parameters)==null?void 0:_e.docs)==null?void 0:Le.source}}};var Ue,Ve,$e;O.parameters={...O.parameters,docs:{...(Ue=O.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
} satisfies Story`,...($e=(Ve=O.parameters)==null?void 0:Ve.docs)==null?void 0:$e.source}}};const vn=["Defaults","WithAttributes","WithShowInactiveOrganizations","WithShowAllClicked","WithoutHideCloseIcon","WithCustomTitle","WithChildren","WithOnlyPeopleSearch","WithOnlyBusinessSearch","WithoutSearch","WithError","WithNoBusinesses","WithSpinner","With10000Businesses","WithNoDeletedBusinesses","WithNoSubunits","WithDeceasedPeople","WithNoDoubleUnitTypes","WithMinimumEntitiesForSearch"];export{f as Defaults,I as With10000Businesses,B as WithAttributes,k as WithChildren,A as WithCustomTitle,C as WithDeceasedPeople,E as WithError,O as WithMinimumEntitiesForSearch,x as WithNoBusinesses,P as WithNoDeletedBusinesses,N as WithNoDoubleUnitTypes,z as WithNoSubunits,D as WithOnlyBusinessSearch,T as WithOnlyPeopleSearch,w as WithShowAllClicked,v as WithShowInactiveOrganizations,W as WithSpinner,S as WithoutHideCloseIcon,R as WithoutSearch,vn as __namedExportsOrder,Bn as default};
//# sourceMappingURL=RolePicker.test.stories-Cyurxs62.js.map
