import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{f as T,w as o,e as t,u as k,b as x}from"./index-DIxTUSTt.js";import"./dom.esm-CWppwVua.js";import{b as he,d as w}from"./index-CGk5cNE3.js";import{d as A}from"./index-BuHbB7kV.js";import{w as B}from"./storybook.testing.utils-CMs160i9.js";import{c as be}from"./helpers-B90wjoUE.js";import{S as H}from"./icon.systems-DzczaoTk.js";import"./lz-string-DoYuj_7g.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D_ouKaeX.js";import"./DatePickerCalendar-wzrlqniL.js";import"./index-Du3yX_TW.js";import"./index-CgEl4Pzg.js";import"./index-uxUkjR_c.js";import"./LabelWithHelp-BzCMv1X3.js";import"./Help-YRS8Catz.js";import"./index-DXWIZOJk.js";import"./index-krISk8b9.js";import"./index-DtTKNpP0.js";import"./icon.utils-XW2L0FSl.js";var C;(function(e){e.button="button",e.color="color",e.file="file",e.image="image",e.reset="reset",e.submit="submit",e.checkbox="checkbox",e.radio="radio"})(C||(C={}));const S=Symbol("Manage ClipboardSub");function ge(e){return!!(e!=null&&e[S])}function ye(e){ge(e.navigator.clipboard)&&e.navigator.clipboard[S].resetClipboardStub()}function ve(e){ge(e.navigator.clipboard)&&e.navigator.clipboard[S].detachClipboardStub()}const y=globalThis;typeof y.afterEach=="function"&&y.afterEach(()=>ye(globalThis.window));typeof y.afterAll=="function"&&y.afterAll(()=>ve(globalThis.window));var j;(function(e){e.text="text",e.date="date",e["datetime-local"]="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url",e.week="week"})(j||(j={}));var _;(function(e){e.email="email",e.password="password",e.search="search",e.telephone="telephone",e.text="text",e.url="url"})(_||(_={}));var W;(function(e){e["{"]="}",e["["]="]"})(W||(W={}));var E;(function(e){e[e.Trigger=2]="Trigger",e[e.Call=1]="Call"})(E||(E={}));var v;(function(e){e[e.EachTrigger=4]="EachTrigger",e[e.EachApiCall=2]="EachApiCall",e[e.EachTarget=1]="EachTarget",e[e.Never=0]="Never"})(v||(v={}));var n;(function(e){e[e.STANDARD=0]="STANDARD",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e[e.NUMPAD=3]="NUMPAD"})(n||(n={}));[..."0123456789".split("").map(e=>({code:`Digit${e}`,key:e})),...")!@#$%^&*(".split("").map((e,a)=>({code:`Digit${a}`,key:e,shiftKey:!0})),..."abcdefghijklmnopqrstuvwxyz".split("").map(e=>({code:`Key${e.toUpperCase()}`,key:e})),..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(e=>({code:`Key${e}`,key:e,shiftKey:!0})),n.LEFT,n.RIGHT,n.LEFT,n.RIGHT,n.LEFT,n.RIGHT,n.LEFT,n.RIGHT,n.LEFT,n.RIGHT];v.EachApiCall;const $e={component:A,title:"Tester/FileUploader",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{options:Object.keys(H),mapping:H,table:{disable:!0,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},label:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},shouldNormalizeFileName:{table:{disable:!0}},titleHelpSvg:{table:{category:be.props,disable:!0,defaultValue:{summary:he()}}},uploadedFiles:{table:{disable:!0}},acceptedFileFormatsDisplay:{table:{disable:!0}},acceptedFileFormatsDescription:{table:{disable:!0}},uploadResult:{table:{disable:!0}},children:{table:{disable:!0}},fileIconTitle:{table:{disable:!0}},isUploading:{table:{disable:!0}},invalidCharacterRegexp:{control:"text",table:{disable:!0}},acceptedFileFormats:{table:{disable:!0}},multiple:{table:{disable:!0}},onFileDelete:{table:{disable:!0}},onFileDownload:{table:{disable:!0}},onFileChange:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}}},r={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const s=o(e).getAllByRole("generic")[1];await t(s).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=o(e),s=a.getAllByRole("generic")[1],F=a.getByRole("button");await t(F).toHaveAttribute("id","htmlId"),await t(s).toHaveClass("dummyClassname"),await t(s).toHaveAttribute("lang","en"),await t(s).toHaveAttribute("data-testid","123ID")}},c={name:"Defaults (A1 delvis)",play:async({canvasElement:e})=>{const a=o(e);await t(a.getByText(w.t("ds_forms:fileuploader.AddSingleLabel"))).toBeInTheDocument()},parameters:{imageSnapshot:{hover:`${B} button`,focus:`${B} button`}}},d={name:"With Files (A5, B4 delvis)",args:{helpText:"Hjelpetekst",label:"Dokumentasjon og grunnlag",acceptedFileFormats:[".pdf",".jpeg"],uploadedFiles:[{name:"dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf",href:"https://www.skatteetaten.no/person/"},{name:"grunnlag.jpg"},{name:"Screen_Shot_2023_08_03_at_14_48_38_PM_111.jpg"},{name:"test.png",href:"http://localhost:4400/designsystem_illustrasjon.png"}]},play:async({canvasElement:e})=>{const a=o(e);await t(a.getAllByText(w.t("ds_forms:fileuploader.FileIconLabel"))[0]).toBeInTheDocument(),await t(a.getByText("grunnlag.jpg")).toBeInTheDocument(),await t(a.getByText("test.png")).toBeInTheDocument(),await t(a.getByText("dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf")).toBeInTheDocument()},parameters:{}},p={name:"With Uploading (A3 delvis, A2 delvis)",args:{isUploading:!0},argTypes:{isUploading:{table:{disable:!1}}}},m={name:"With Error And Multiple (A4, A1 delvis)",args:{multiple:!0,helpText:"Hjelpetekst",label:"Hemmelig kode",acceptedFileFormats:[".java",".cpp",".py"],errorMessage:"Du må laste opp en fil"},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=o(e);await t(a.getByText("Du må laste opp en fil")).toBeInTheDocument(),await t(a.getByText(w.t("ds_forms:fileuploader.AddMultipleLabel"))).toBeInTheDocument()}},we=e=>l.jsxs(l.Fragment,{children:[l.jsx(A,{...e,uploadResult:{statusMessage:"Lastet opp 4 filer"},hasSpacing:!0}),l.jsx(A,{...e,uploadResult:{statusMessage:"1 av 3 filer ble stoppet av virussjekk.",hasUploadFailed:!0}})]}),u={name:"With UploadResult (A4)",render:we,args:{acceptedFileFormats:[".java",".cpp",".py"],uploadedFiles:[{name:"dokumentasjon.pdf",href:"https://www.skatteetaten.no/person/"},{name:"grunnlag.jpg"}]}},g={name:"With Text Overrides (A8)",args:{acceptedFileFormats:["image/png"],acceptedFileFormatsDescription:"Tillatte filformater:_",acceptedFileFormatsDisplay:"bilder og dokumenter",children:"Trykk eller dra og slipp filer her",uploadedFiles:[{name:"document.pdf"}]},play:async({canvasElement:e})=>{const a=o(e);await t(a.getByText("Tillatte filformater:_")).toBeInTheDocument(),await t(a.getByText("bilder og dokumenter")).toBeInTheDocument(),await t(a.getByText("Trykk eller dra og slipp filer her")).toBeInTheDocument()}},f={name:"With File Change(A6)",args:{"data-testid":"testid123",helpText:"Hjelpetekst",label:"Dokumentasjon og grunnlag",uploadedFiles:[{name:"file.txt",href:"#"}],onFileDownload:T(),onFileChange:T(),onFileDelete:T()},play:async({args:e,canvasElement:a})=>{const s=o(a),F=s.getByTestId("testid123-input"),D=new File(["test"],"test.txt",{type:"txt"});await k.setup({pointerEventsCheck:v.Never}).upload(F,D),await x(()=>t(e.onFileChange).toHaveBeenCalledWith([D]));const fe=s.getByTitle(w.t("ds_forms:fileuploader.DeleteLabel"));await k.click(fe),await x(()=>t(e.onFileDelete).toHaveBeenCalledWith({name:"file.txt",href:"#"})),await k.click(s.getByText("file.txt")),await x(()=>t(e.onFileDownload).toHaveBeenCalledWith(t.anything(),{name:"file.txt",href:"#"}))},parameters:{imageSnapshot:{disable:!0}}},h={name:"With onHelpToggle Event",args:{label:"Last opp filer",helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},b={name:"With Custom ClassNames (FA3)",args:{classNames:{container:"dummyClassname",errorMessage:"dummyClassname"},errorMessage:"feil"},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=e.querySelector(`${B} > div`);await t(a).toHaveClass("dummyClassname")}};var R,I,U;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(I=r.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var M,N,P;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(P=(N=i.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var L,G,$;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Defaults (A1 delvis)',
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
} satisfies Story`,...($=(G=c.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var V,q,z;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'With Files (A5, B4 delvis)',
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
    await expect(canvas.getByText('grunnlag.jpg')).toBeInTheDocument();
    await expect(canvas.getByText('test.png')).toBeInTheDocument();
    await expect(canvas.getByText('dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf')).toBeInTheDocument();
  },
  parameters: {}
} satisfies Story`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var J,Q,X;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'With Uploading (A3 delvis, A2 delvis)',
  args: {
    isUploading: true
  },
  argTypes: {
    isUploading: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,K,O;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'With Error And Multiple (A4, A1 delvis)',
  args: {
    multiple: true,
    helpText: 'Hjelpetekst',
    label: 'Hemmelig kode',
    acceptedFileFormats: ['.java', '.cpp', '.py'],
    errorMessage: 'Du må laste opp en fil'
  },
  argTypes: {
    errorMessage: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Du må laste opp en fil')).toBeInTheDocument();
    await expect(canvas.getByText(dsI18n.t('ds_forms:fileuploader.AddMultipleLabel'))).toBeInTheDocument();
  }
} satisfies Story`,...(O=(K=m.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var Y,ee,ae;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'With UploadResult (A4)',
  render: UploadResultTemplate,
  args: {
    acceptedFileFormats: ['.java', '.cpp', '.py'],
    uploadedFiles: [{
      name: 'dokumentasjon.pdf',
      href: 'https://www.skatteetaten.no/person/'
    }, {
      name: 'grunnlag.jpg'
    }]
  }
} satisfies Story`,...(ae=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'With Text Overrides (A8)',
  args: {
    acceptedFileFormats: ['image/png'],
    acceptedFileFormatsDescription: 'Tillatte filformater:_',
    acceptedFileFormatsDisplay: 'bilder og dokumenter',
    children: 'Trykk eller dra og slipp filer her',
    uploadedFiles: [{
      name: 'document.pdf'
    }]
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Tillatte filformater:_')).toBeInTheDocument();
    await expect(canvas.getByText('bilder og dokumenter')).toBeInTheDocument();
    await expect(canvas.getByText('Trykk eller dra og slipp filer her')).toBeInTheDocument();
  }
} satisfies Story`,...(se=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,le,re;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(le=f.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var ie,ce,de;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,me,ue;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(me=b.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};const Ve=["WithRef","WithAttributes","Defaults","WithUploadedFiles","WithIsUploading","WithError","WithUploadResult","WithTextOverrides","WithFileChange","WithHelpToggleEvent","WithCustomClassNames"];export{c as Defaults,i as WithAttributes,b as WithCustomClassNames,m as WithError,f as WithFileChange,h as WithHelpToggleEvent,p as WithIsUploading,r as WithRef,g as WithTextOverrides,u as WithUploadResult,d as WithUploadedFiles,Ve as __namedExportsOrder,$e as default};
//# sourceMappingURL=FileUploader.test.stories-Clj_CkHQ.js.map
