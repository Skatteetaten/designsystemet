import{j as i}from"./jsx-runtime-BYYWji4R.js";import{f as k,w as r,e as n,u as x,b as B}from"./index-DIxTUSTt.js";import"./dom.esm-k1xqAnB8.js";import{d as l}from"./index-BYKicpQW.js";import{c as A}from"./index-BeXAOmuM.js";import{w as S}from"./storybook.testing.utils-CMs160i9.js";import{c as t}from"./helpers-Q4uYuiE4.js";import{S as C}from"./icon.systems-D4eM4wId.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./DatePickerCalendar-BbGeszOG.js";import"./index-6vKJeIrk.js";import"./index-C8q4C1To.js";import"./index-BuQZV-my.js";import"./LabelWithHelp-CRKPUrUd.js";import"./Help-BOZ_R3ws.js";import"./index-B13CNY-b.js";import"./index-DTUQ_OOd.js";import"./icon.utils-DDvPh5sV.js";var _;(function(e){e.button="button",e.color="color",e.file="file",e.image="image",e.reset="reset",e.submit="submit",e.checkbox="checkbox",e.radio="radio"})(_||(_={}));const D=Symbol("Manage ClipboardSub");function he(e){return!!(e!=null&&e[D])}function ye(e){he(e.navigator.clipboard)&&e.navigator.clipboard[D].resetClipboardStub()}function be(e){he(e.navigator.clipboard)&&e.navigator.clipboard[D].detachClipboardStub()}const w=globalThis;typeof w.afterEach=="function"&&w.afterEach(()=>ye(globalThis.window));typeof w.afterAll=="function"&&w.afterAll(()=>be(globalThis.window));var j;(function(e){e.text="text",e.date="date",e["datetime-local"]="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url",e.week="week"})(j||(j={}));var W;(function(e){e.email="email",e.password="password",e.search="search",e.telephone="telephone",e.text="text",e.url="url"})(W||(W={}));var E;(function(e){e["{"]="}",e["["]="]"})(E||(E={}));var R;(function(e){e[e.Trigger=2]="Trigger",e[e.Call=1]="Call"})(R||(R={}));var T;(function(e){e[e.EachTrigger=4]="EachTrigger",e[e.EachApiCall=2]="EachApiCall",e[e.EachTarget=1]="EachTarget",e[e.Never=0]="Never"})(T||(T={}));var s;(function(e){e[e.STANDARD=0]="STANDARD",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e[e.NUMPAD=3]="NUMPAD"})(s||(s={}));[..."0123456789".split("").map(e=>({code:`Digit${e}`,key:e})),...")!@#$%^&*(".split("").map((e,a)=>({code:`Digit${a}`,key:e,shiftKey:!0})),..."abcdefghijklmnopqrstuvwxyz".split("").map(e=>({code:`Key${e.toUpperCase()}`,key:e})),..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(e=>({code:`Key${e}`,key:e,shiftKey:!0})),s.LEFT,s.RIGHT,s.LEFT,s.RIGHT,s.LEFT,s.RIGHT,s.LEFT,s.RIGHT,s.LEFT,s.RIGHT];T.EachApiCall;const Le={component:A,title:"Tester/FileUploader",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},description:{table:{category:t.props}},helpSvgPath:{options:Object.keys(C),mapping:C,table:{category:t.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{category:t.props}},hideLabel:{table:{category:t.props}},label:{table:{category:t.props}},showRequiredMark:{table:{category:t.props}},shouldNormalizeFileName:{table:{category:t.props,disable:!0}},errorMessage:{table:{category:t.props,disable:!0}},titleHelpSvg:{table:{category:t.props,defaultValue:{summary:l.t("Shared:shared.Help")}}},uploadedFiles:{table:{disable:!0,category:t.props}},acceptedFileFormatsDisplay:{table:{disable:!0,category:t.props}},acceptedFileFormatsDescription:{table:{disable:!0,category:t.props}},successIconTitle:{table:{disable:!0,category:t.props}},uploadResult:{table:{disable:!0,category:t.props}},children:{table:{disable:!0,category:t.props}},fileIconTitle:{table:{disable:!0,category:t.props}},isUploading:{table:{disable:!0,category:t.props}},invalidCharacterRegexp:{control:"text",table:{disable:!0,category:t.props}},acceptedFileFormats:{table:{disable:!0,category:t.props}},multiple:{table:{disable:!0,category:t.htmlAttribute}},onFileDelete:{table:{category:t.event,disable:!0}},onFileDownload:{table:{category:t.event,disable:!0}},onFileChange:{table:{category:t.event,disable:!0}},onHelpToggle:{table:{category:t.event,disable:!0}}}},c={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const o=r(e).getAllByRole("generic")[1];await n(o).toHaveAttribute("id","dummyIdForwardedFromRef")}},p={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=r(e),o=a.getAllByRole("generic")[1],F=a.getByRole("button");await n(F).toHaveAttribute("id","htmlId"),await n(o).toHaveClass("dummyClassname"),await n(o).toHaveAttribute("lang","en"),await n(o).toHaveAttribute("data-testid","123ID")}},d={name:"Defaults (A1 delvis)",argTypes:{},play:async({canvasElement:e})=>{const a=r(e);await n(a.getByText(l.t("ds_forms:fileuploader.AddSingleLabel"))).toBeInTheDocument()},parameters:{imageSnapshot:{hover:`${S} button`,focus:`${S} button`}}},m={name:"With Files (A5, B4 delvis)",argTypes:{},args:{helpText:"Hjelpetekst",label:"Dokumentasjon og grunnlag",acceptedFileFormats:[".pdf",".jpeg"],uploadedFiles:[{name:"dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf",href:"https://www.skatteetaten.no/person/"},{name:"grunnlag.jpg"},{name:"Screen_Shot_2023_08_03_at_14_48_38_PM_111.jpg"},{name:"test.png",href:"http://localhost:4400/designsystem_illustrasjon.png"}]},play:async({canvasElement:e})=>{const a=r(e);await n(a.getAllByText(l.t("ds_forms:fileuploader.FileIconLabel"))[0]).toBeInTheDocument(),await n(a.getAllByText(l.t("ds_forms:fileuploader.SuccessIconLabel"))[0]).toBeInTheDocument(),await n(a.getByText("grunnlag.jpg")).toBeInTheDocument(),await n(a.getByText("test.png")).toBeInTheDocument(),await n(a.getByText("dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf")).toBeInTheDocument()},parameters:{}},g={name:"With Uploading (A3 delvis, A2 delvis)",argTypes:{},args:{isUploading:!0},parameters:{}},u={name:"With Error And Multiple(A4, A1 delvis)",argTypes:{},args:{multiple:!0,helpText:"Hjelpetekst",label:"Hemmelig kode",acceptedFileFormats:[".java",".cpp",".py"],errorMessage:"Du må laste opp en fil"},play:async({canvasElement:e})=>{const a=r(e);await n(a.getByText("Du må laste opp en fil")).toBeInTheDocument(),await n(a.getByText(l.t("ds_forms:fileuploader.AddMultipleLabel"))).toBeInTheDocument()},parameters:{}},ve=e=>i.jsxs(i.Fragment,{children:[i.jsx(A,{...e,className:"bottomSpacingXL",uploadResult:{statusMessage:"Lastet opp 4 filer"}}),i.jsx(A,{...e,uploadResult:{statusMessage:"1 av 3 filer ble stoppet av virussjekk.",hasUploadFailed:!0}})]}),h={name:"With UploadResult (A4)",render:ve,argTypes:{},args:{acceptedFileFormats:[".java",".cpp",".py"],uploadedFiles:[{name:"dokumentasjon.pdf",href:"https://www.skatteetaten.no/person/"},{name:"grunnlag.jpg"}]},parameters:{}},f={name:"With Text Overrides (A8)",argTypes:{},args:{acceptedFileFormats:["image/png"],acceptedFileFormatsDescription:"Tillatte filformater:_",acceptedFileFormatsDisplay:"bilder og dokumenter",children:"Trykk eller dra og slipp filer her",uploadedFiles:[{name:"document.pdf"}],successIconTitle:"lastet opp"},play:async({canvasElement:e})=>{const a=r(e);await n(a.getByText("Tillatte filformater:_")).toBeInTheDocument(),await n(a.getByText("bilder og dokumenter")).toBeInTheDocument(),await n(a.getByText("Trykk eller dra og slipp filer her")).toBeInTheDocument()},parameters:{}},y={name:"With File Change(A6)",args:{"data-testid":"testid123",helpText:"Hjelpetekst",label:"Dokumentasjon og grunnlag",uploadedFiles:[{name:"file.txt",href:"#"}],onFileDownload:k(),onFileChange:k(),onFileDelete:k()},play:async({args:e,canvasElement:a})=>{const o=r(a),F=o.getByTestId("testid123-input"),H=new File(["test"],"test.txt",{type:"txt"});await x.setup({pointerEventsCheck:T.Never}).upload(F,H),await B(()=>n(e.onFileChange).toHaveBeenCalledWith([H]));const fe=o.getByTitle(l.t("ds_forms:fileuploader.DeleteLabel"));await x.click(fe),await B(()=>n(e.onFileDelete).toHaveBeenCalledWith({name:"file.txt",href:"#"})),await x.click(o.getByText("file.txt")),await B(()=>n(e.onFileDownload).toHaveBeenCalledWith(n.anything(),{name:"file.txt",href:"#"}))},parameters:{imageSnapshot:{disable:!0}}},b={name:"With onHelpToggle Event",args:{label:"Last opp filer",helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},v={name:"With Custom ClassNames (FA3)",args:{classNames:{container:"dummyClassname",errorMessage:"dummyClassname"},errorMessage:"feil"},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=e.querySelector(`${S} > div`);await n(a).toHaveClass("dummyClassname")}};var I,U,N;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(N=(U=c.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var M,L,P;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'en',
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
    const container = canvas.getAllByRole('generic')[1];
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'en');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(P=(L=p.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var G,$,V;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Defaults (A1 delvis)',
  argTypes: {},
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(dsI18n.t('ds_forms:fileuploader.AddSingleLabel'))).toBeInTheDocument();
  },
  parameters: {
    imageSnapshot: {
      hover: \`\${wrapper} button\`,
      focus: \`\${wrapper} button\`
    }
  }
} satisfies Story`,...(V=($=d.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var q,z,X;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'With Files (A5, B4 delvis)',
  argTypes: {},
  args: {
    helpText: 'Hjelpetekst',
    label: 'Dokumentasjon og grunnlag',
    acceptedFileFormats: ['.pdf', '.jpeg'],
    uploadedFiles: [{
      name: 'dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf',
      href: 'https://www.skatteetaten.no/person/'
    }, {
      name: 'grunnlag.jpg'
    }, {
      name: 'Screen_Shot_2023_08_03_at_14_48_38_PM_111.jpg'
    }, {
      name: 'test.png',
      href: 'http://localhost:4400/designsystem_illustrasjon.png'
    }]
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText(dsI18n.t('ds_forms:fileuploader.FileIconLabel'))[0]).toBeInTheDocument();
    await expect(canvas.getAllByText(dsI18n.t('ds_forms:fileuploader.SuccessIconLabel'))[0]).toBeInTheDocument();
    await expect(canvas.getByText('grunnlag.jpg')).toBeInTheDocument();
    await expect(canvas.getByText('test.png')).toBeInTheDocument();
    await expect(canvas.getByText('dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf')).toBeInTheDocument();
  },
  parameters: {}
} satisfies Story`,...(X=(z=m.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};var J,Q,Z;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'With Uploading (A3 delvis, A2 delvis)',
  argTypes: {},
  args: {
    isUploading: true
  },
  parameters: {}
} satisfies Story`,...(Z=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var K,O,Y;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'With Error And Multiple(A4, A1 delvis)',
  argTypes: {},
  args: {
    multiple: true,
    helpText: 'Hjelpetekst',
    label: 'Hemmelig kode',
    acceptedFileFormats: ['.java', '.cpp', '.py'],
    errorMessage: 'Du må laste opp en fil'
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Du må laste opp en fil')).toBeInTheDocument();
    await expect(canvas.getByText(dsI18n.t('ds_forms:fileuploader.AddMultipleLabel'))).toBeInTheDocument();
  },
  parameters: {}
} satisfies Story`,...(Y=(O=u.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var ee,ae,te;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'With UploadResult (A4)',
  render: UploadResultTemplate,
  argTypes: {},
  args: {
    acceptedFileFormats: ['.java', '.cpp', '.py'],
    uploadedFiles: [{
      name: 'dokumentasjon.pdf',
      href: 'https://www.skatteetaten.no/person/'
    }, {
      name: 'grunnlag.jpg'
    }]
  },
  parameters: {}
} satisfies Story`,...(te=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,oe;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'With Text Overrides (A8)',
  argTypes: {},
  args: {
    acceptedFileFormats: ['image/png'],
    acceptedFileFormatsDescription: 'Tillatte filformater:_',
    acceptedFileFormatsDisplay: 'bilder og dokumenter',
    children: 'Trykk eller dra og slipp filer her',
    uploadedFiles: [{
      name: 'document.pdf'
    }],
    successIconTitle: 'lastet opp'
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Tillatte filformater:_')).toBeInTheDocument();
    await expect(canvas.getByText('bilder og dokumenter')).toBeInTheDocument();
    await expect(canvas.getByText('Trykk eller dra og slipp filer her')).toBeInTheDocument();
  },
  parameters: {}
} satisfies Story`,...(oe=(se=f.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var re,le,ie;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'With File Change(A6)',
  args: {
    'data-testid': 'testid123',
    helpText: 'Hjelpetekst',
    label: 'Dokumentasjon og grunnlag',
    uploadedFiles: [{
      name: 'file.txt',
      href: '#'
    }],
    onFileDownload: fn(),
    onFileChange: fn(),
    onFileDelete: fn()
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId('testid123-input');
    const file = new File(['test'], 'test.txt', {
      type: 'txt'
    });
    const user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never
    });
    await user.upload(input, file);
    await waitFor(() => expect(args.onFileChange).toHaveBeenCalledWith([file]));
    const deleteButton = canvas.getByTitle(dsI18n.t('ds_forms:fileuploader.DeleteLabel'));
    await userEvent.click(deleteButton);
    await waitFor(() => expect(args.onFileDelete).toHaveBeenCalledWith({
      name: 'file.txt',
      href: '#'
    }));
    await userEvent.click(canvas.getByText('file.txt'));
    await waitFor(() => expect(args.onFileDownload).toHaveBeenCalledWith(expect.anything(), {
      name: 'file.txt',
      href: '#'
    }));
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...(ie=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,pe,de;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'With onHelpToggle Event',
  args: {
    label: 'Last opp filer',
    helpText: 'Hjelpetekst',
    onHelpToggle: (isOpen: boolean): void => {
      alert(isOpen ? 'Hjelpetekst blir vist' : 'Hjelpetekst skjules');
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...(de=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,ge,ue;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    classNames: {
      container: 'dummyClassname',
      errorMessage: 'dummyClassname'
    },
    errorMessage: 'feil'
  },
  argTypes: {
    classNames: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const container = canvasElement.querySelector(\`\${wrapper} > div\`);
    await expect(container).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(ue=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};const Pe=["WithRef","WithAttributes","Defaults","WithUploadedFiles","WithIsUploading","WithError","WithUploadResult","WithTextOverrides","WithFileChange","WithHelpToggleEvent","WithCustomClassNames"];export{d as Defaults,p as WithAttributes,v as WithCustomClassNames,u as WithError,y as WithFileChange,b as WithHelpToggleEvent,g as WithIsUploading,c as WithRef,f as WithTextOverrides,h as WithUploadResult,m as WithUploadedFiles,Pe as __namedExportsOrder,Le as default};
//# sourceMappingURL=FileUploader.test.stories-rdYplocB.js.map
