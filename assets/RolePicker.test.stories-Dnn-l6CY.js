import{j as d,r as q,d as h}from"./iframe-Cq9sN_Dz.js";import{B as _}from"./index-5qJDb17Q.js";import{R as f}from"./index-A7kidHJq.js";import"./index-B4tfeJ0Q.js";import"./index-CGzeyL7S.js";import"./index-DskRqDMQ.js";import"./floating-ui.react-L_LK_AYv.js";import"./index-uf18E4Pi.js";import"./index-DQMWIbzV.js";import"./index-DRFs0UrV.js";import"./DatePickerCalendar-DQrt2Pnq.js";import"./LabelWithHelp-DsxvJyLL.js";import"./Help-CWz_ChTP.js";import"./Combobox.module-DGtBY5ID.js";import"./ComboboxButton-Xxl-Mf-n.js";import"./ComboboxSelectedOptions-CLxGYH0S.js";import"./index-DEEEsonz.js";import"./index-9jg8RjbV.js";import"./index-D6Uh_XyP.js";import"./index-D3J-49iD.js";const{expect:i,fireEvent:b,userEvent:r,waitFor:tn,within:t}=__STORYBOOK_MODULE_TEST__,an={name:"Ola Nordmann",personId:"10101012345",type:"Person"},M={total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Toshiba AS",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi AS",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Meta",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"ApS"}]},sn={total:4,list:[{name:"Antikvitet presis",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1}]},y={total:11,list:[{name:"Frisk Elefant",personId:"10090812345",type:"Person",isDeleted:!1},{name:"Melankolsk Aldrende Ape",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1},{name:"Kari Nordmann",personId:"10101054321",type:"Person",isDeleted:!1},{name:"Per Hansen",personId:"20202012345",type:"Person",isDeleted:!1},{name:"Lise Olsen",personId:"30303067890",type:"Person",isDeleted:!1},{name:"Nina Johansen",personId:"40404011223",type:"Person",isDeleted:!1},{name:"Ole Pettersen",personId:"50505044556",type:"Person",isDeleted:!1},{name:"Eva Nilsen",personId:"60606077889",type:"Person",isDeleted:!1}]},In={component:f,title:"Tester/RolePicker",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},me:{table:{disable:!0},control:"object"},people:{table:{disable:!0},control:"object"},businesses:{table:{disable:!0},control:"object"},minimumEntitiesForSearch:{table:{disable:!0}},title:{table:{disable:!0}},dismissOnEsc:{table:{disable:!0}},dismissOnOutsideClick:{table:{disable:!0}},hideCloseButton:{table:{disable:!0}},showSubunits:{table:{disable:!0}},showInactiveBusinesses:{table:{disable:!0}},showDeceasedPeople:{table:{disable:!0}},onClose:{table:{disable:!0}},onEntitySelect:{table:{disable:!0}},onLogout:{table:{disable:!0}},children:{table:{disable:!0},control:"object"}},tags:["test"],parameters:{chromatic:{disableSnapshot:!1}}},c={me:an,businesses:M,people:sn},u=a=>{const e=q.useRef(null),s=async n=>{var o;(o=e.current)==null||o.close()};return d.jsxs(d.Fragment,{children:[d.jsx(_,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),d.jsx(f,{...a,ref:e,onEntitySelect:s})]})},V=a=>{const e=q.useRef(null),s=async n=>({error:"Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang."});return d.jsxs(d.Fragment,{children:[d.jsx(_,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),d.jsx(f,{...a,ref:e,onEntitySelect:s})]})},on=a=>{const e=q.useRef(null),s=async n=>{var o;if(n.type==="Person"&&"personId"in n&&n.personId===an.personId)return{error:"Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang."};(o=e.current)==null||o.close()};return d.jsxs(d.Fragment,{children:[d.jsx(_,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),d.jsx(f,{...a,ref:e,onEntitySelect:s})]})},ln=a=>{const e=q.useRef(null),s=async n=>new Promise(o=>{setTimeout(()=>{var l;(l=e.current)==null||l.close(),o()},2e3)});return d.jsxs(d.Fragment,{children:[d.jsx(_,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Vis representasjonsvelger"}),d.jsx(f,{...a,ref:e,onEntitySelect:s})]})},v={name:"Defaults (A1, A2, A14, B3, B2)",args:{...c,businesses:M,people:sn},render:u,play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog"),o=t(n).queryByRole("searchbox");i(o).toBeInTheDocument()}},w={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID",...c},render:u,argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"},chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog");await i(n).toHaveAttribute("id","htmlId"),await i(n).toHaveClass("dummyClassname"),await i(n).toHaveAttribute("lang","en"),await i(n).toHaveAttribute("data-testid","123ID")}},k={name:"With Show Inactive Organizations And Show Less Button (A11, A18, B4)",args:{...c,people:void 0,me:void 0,showInactiveBusinesses:!0,showSubunits:!1},parameters:{chromatic:{disableSnapshot:!0}},render:u,argTypes:{showInactiveBusinesses:{table:{disable:!1}}},play:async({args:a,canvasElement:e})=>{var g;const s=t(e),n=s.getByRole("button");await r.click(n);const o=await s.findByRole("dialog"),l=await t(o).findByRole("checkbox",{name:h.t("ds_overlays:rolepicker.ShowInactiveBusinessesHeader")});i(l).toBeChecked();const p=await t(o).findByRole("button",{name:/vis alle/i});await b.click(p);const m=await t(o).findAllByRole("link");i(m.length).toEqual((g=a.businesses)==null?void 0:g.list.length),i(p).toBeInTheDocument();const B=await t(o).findByText(h.t("ds_overlays:rolepicker.ShowLess"));i(B).toBeInTheDocument()}},S={name:"With Show All Clicked Focus (A12, B4)",args:{...c,businesses:M},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog"),o=await t(n).findByRole("button",{name:/vis alle/i}),l=await t(n).findAllByRole("link"),p=l.length-1;await b.click(o),i(l[p]).toHaveFocus()}},T={name:"With Hide Close Icon (A3)",args:{...c,hideCloseButton:!0},render:u,argTypes:{hideCloseButton:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const s=t(a).getByRole("button");await r.click(s)}},U="Custom title",A={name:"With Custom Title (A4 delvis)",args:{...c,title:U},render:u,argTypes:{title:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog"),o=t(n).getByRole("heading",{level:1});i(o).toHaveTextContent(U)}},R={name:"With Children (A5)",args:{...c,people:void 0,children:d.jsx("div",{children:"Children"})},render:u,argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog"),o=t(n).getByText("Children");i(o).toBeInTheDocument()}},D={name:"With Only People Search (A6, A7)",args:{...c,businesses:void 0,people:y},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog"),o=t(n).queryByRole("button",{name:/vis alle personer/i});i(o).toBeInTheDocument();const l=t(n).queryAllByRole("searchbox");i(l.length).toBe(1)}},E={name:"With Only Business Search (A6, A7)",args:{...c,people:void 0},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog"),o=t(n).queryByRole("button",{name:/vis alle virksomheter/i});i(o).toBeInTheDocument();const l=t(n).queryAllByRole("searchbox");i(l.length).toBe(1)}},x={name:"Without Search (A6)",args:{...c,businesses:{total:4,list:M.list.slice(1,3)},showSubunits:!1},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog"),o=t(n).queryAllByRole("button",{name:h.t("ds_overlays:rolepicker.ShowAll")});i(o.length).toBe(0);const l=t(n).queryAllByRole("searchbox");i(l.length).toBe(0)}},I={name:"With Error",args:{...c},render:V,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog"),o=t(n).getAllByRole("link")[0];await b.click(o);const l=await t(n).findByText("Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.");i(l).toBeInTheDocument()}},W={name:"With No Businesses",args:{...c,people:void 0,me:void 0,businesses:{total:0,list:[]}},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog"),o=t(n).getByRole("heading",{level:1});i(o).toHaveTextContent(h.t("ds_overlays:rolepicker.NoBusinessesErrorTitle"))}},P={name:"With Spinner",args:{...c},render:ln,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}}},rn={total:1e4,list:Array.from({length:1e4},(a,e)=>({name:`Organization ${e}`,organizationNumber:`${e}`,isDeleted:!1,unitType:"AS",type:"Organization"}))},C={name:"With 10000 Businesses",args:{...c,businesses:rn,people:void 0},render:V,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}}},z={name:"With No Deleted Businesses",args:{...c,businesses:{total:3,list:[{name:"Samsung AS",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Statoil AS",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"AS"}]}]},people:void 0},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog"),o=t(n).queryByRole("checkbox",{name:h.t("ds_overlays:rolepicker.ShowInactiveBusinessesHeader")});i(o).not.toBeInTheDocument()}},N={name:"With No SubUnits",args:{...c,businesses:{total:2,list:[{name:"Samsung AS",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!0,type:"Organization",unitType:"AS"}]},people:void 0},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog"),o=t(n).queryByRole("checkbox",{name:h.t("ds_overlays:rolepicker.ShowSubBusinessesHeading")});i(o).not.toBeInTheDocument()}},cn={...y,list:y.list.map((a,e)=>({...a,isDeleted:e%2===0}))},O={name:"With Deceased People",args:{...c,businesses:void 0,me:void 0,people:cn,showDeceasedPeople:!0},render:u,argTypes:{showDeceasedPeople:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog"),o=await t(n).findByRole("checkbox",{name:h.t("ds_overlays:rolepicker.ShowDeceasedPersons")});i(o).toBeChecked();const l=await t(n).findByRole("button",{name:/vis alle/i});await b.click(l);const p=await t(n).findAllByRole("link");i(p.length).toEqual(y==null?void 0:y.list.length)}},F={name:"With No Double Unit Types",args:{...c,showSubunits:!1,people:void 0,me:void 0},render:u,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog");(await t(n).findAllByRole("heading",{level:3})).forEach(l=>{var g,K;const p=((g=l.textContent)==null?void 0:g.toUpperCase())||"",m=((K=l.textContent)==null?void 0:K.split(" "))||[],B=m[m.length-1];i(p.endsWith(` ${B} ${B}`)).toBe(!1)})}},j={name:"With Minimum Entities For Search (A19)",args:{...c,minimumEntitiesForSearch:17},render:u,parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog"),o=t(n).queryByRole("searchbox");i(o).not.toBeInTheDocument()}},H={name:"With Close Error",args:{...c},render:V,argTypes:{me:{table:{disable:!1}},people:{table:{disable:!1}},businesses:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog"),o=t(n).getAllByRole("link")[0];await b.click(o);const p=(await t(n).findByText("Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.")).parentElement;i(p).toBeInTheDocument();const m=t(p).getByRole("button");i(m).toBeInTheDocument(),await b.click(m),await tn(()=>i(p).not.toBeInTheDocument()),i(o).toHaveFocus()}},L={name:"With Error Reset After Valid Selection",args:{...c},render:on,parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=t(a),s=e.getByRole("button");await r.click(s);const n=await e.findByRole("dialog"),o=t(n).getAllByRole("link")[0];await b.click(o);const l=await t(n).findByText("Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.");i(l).toBeInTheDocument();const p=t(n).getByRole("link",{name:/antikvitet presis/i});await r.click(p),await tn(()=>i(n).not.toBeVisible()),r.click(s),i(l).not.toBeInTheDocument()}};var $,G,J;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Y,Q,X;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ne;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,se;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(se=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ie,le;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var re,ce,de;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,me;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(me=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,be,ye;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(be=D.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ge,fe,Be;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:Be.source}}};var ve,we,ke;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(we=x.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var Se,Te,Ae;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ae=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var Re,De,Ee;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ee=(De=W.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var xe,Ie,We;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(We=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:We.source}}};var Pe,Ce,ze;C.parameters={...C.parameters,docs:{...(Pe=C.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ze=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:ze.source}}};var Ne,Oe,Fe;z.parameters={...z.parameters,docs:{...(Ne=z.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(Fe=(Oe=z.parameters)==null?void 0:Oe.docs)==null?void 0:Fe.source}}};var je,He,Le;N.parameters={...N.parameters,docs:{...(je=N.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(He=N.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};var qe,_e,Me;O.parameters={...O.parameters,docs:{...(qe=O.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Me=(_e=O.parameters)==null?void 0:_e.docs)==null?void 0:Me.source}}};var Ve,Ke,Ue;F.parameters={...F.parameters,docs:{...(Ve=F.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ue=(Ke=F.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source}}};var $e,Ge,Je;j.parameters={...j.parameters,docs:{...($e=j.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
} satisfies Story`,...(Je=(Ge=j.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Ye,Qe,Xe;H.parameters={...H.parameters,docs:{...(Ye=H.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(Xe=(Qe=H.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,en,nn;L.parameters={...L.parameters,docs:{...(Ze=L.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
} satisfies Story`,...(nn=(en=L.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};const Wn=["Defaults","WithAttributes","WithShowInactiveOrganizations","WithShowAllClicked","WithHideCloseIcon","WithCustomTitle","WithChildren","WithOnlyPeopleSearch","WithOnlyBusinessSearch","WithoutSearch","WithError","WithNoBusinesses","WithSpinner","With10000Businesses","WithNoDeletedBusinesses","WithNoSubunits","WithDeceasedPeople","WithNoDoubleUnitTypes","WithMinimumEntitiesForSearch","WithCloseError","WithErrorReset"];export{v as Defaults,C as With10000Businesses,w as WithAttributes,R as WithChildren,H as WithCloseError,A as WithCustomTitle,O as WithDeceasedPeople,I as WithError,L as WithErrorReset,T as WithHideCloseIcon,j as WithMinimumEntitiesForSearch,W as WithNoBusinesses,z as WithNoDeletedBusinesses,F as WithNoDoubleUnitTypes,N as WithNoSubunits,E as WithOnlyBusinessSearch,D as WithOnlyPeopleSearch,S as WithShowAllClicked,k as WithShowInactiveOrganizations,P as WithSpinner,x as WithoutSearch,Wn as __namedExportsOrder,In as default};
//# sourceMappingURL=RolePicker.test.stories-Dnn-l6CY.js.map
