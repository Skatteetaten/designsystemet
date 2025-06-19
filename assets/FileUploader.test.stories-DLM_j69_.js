import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{f as k,w as r,e as n,u as x,b as A}from"./index-DIxTUSTt.js";import"./dom.esm-CWppwVua.js";import{b as ye,d as T}from"./index-CwaotbcG.js";import{d as B}from"./index-CReUDGGp.js";import{w as D}from"./storybook.testing.utils-CMs160i9.js";import{c as t}from"./helpers-DjiZIot2.js";import{S as C}from"./icon.systems-NRpsphgm.js";import"./lz-string-DoYuj_7g.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D_ouKaeX.js";import"./DatePickerCalendar-v_gY3V1L.js";import"./index-CUnERQXD.js";import"./index-BQO_0U1F.js";import"./index-BQtvKDNR.js";import"./LabelWithHelp-JKcqOKZ0.js";import"./Help-BOwxnveE.js";import"./index-BAA7SjBM.js";import"./index-CPxI8T3e.js";import"./index-j9ELDiWk.js";import"./icon.utils-D_vdkWhZ.js";var j;(function(e){e.button="button",e.color="color",e.file="file",e.image="image",e.reset="reset",e.submit="submit",e.checkbox="checkbox",e.radio="radio"})(j||(j={}));const S=Symbol("Manage ClipboardSub");function he(e){return!!(e!=null&&e[S])}function be(e){he(e.navigator.clipboard)&&e.navigator.clipboard[S].resetClipboardStub()}function ve(e){he(e.navigator.clipboard)&&e.navigator.clipboard[S].detachClipboardStub()}const v=globalThis;typeof v.afterEach=="function"&&v.afterEach(()=>be(globalThis.window));typeof v.afterAll=="function"&&v.afterAll(()=>ve(globalThis.window));var _;(function(e){e.text="text",e.date="date",e["datetime-local"]="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url",e.week="week"})(_||(_={}));var W;(function(e){e.email="email",e.password="password",e.search="search",e.telephone="telephone",e.text="text",e.url="url"})(W||(W={}));var E;(function(e){e["{"]="}",e["["]="]"})(E||(E={}));var R;(function(e){e[e.Trigger=2]="Trigger",e[e.Call=1]="Call"})(R||(R={}));var w;(function(e){e[e.EachTrigger=4]="EachTrigger",e[e.EachApiCall=2]="EachApiCall",e[e.EachTarget=1]="EachTarget",e[e.Never=0]="Never"})(w||(w={}));var s;(function(e){e[e.STANDARD=0]="STANDARD",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e[e.NUMPAD=3]="NUMPAD"})(s||(s={}));[..."0123456789".split("").map(e=>({code:`Digit${e}`,key:e})),...")!@#$%^&*(".split("").map((e,a)=>({code:`Digit${a}`,key:e,shiftKey:!0})),..."abcdefghijklmnopqrstuvwxyz".split("").map(e=>({code:`Key${e.toUpperCase()}`,key:e})),..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(e=>({code:`Key${e}`,key:e,shiftKey:!0})),s.LEFT,s.RIGHT,s.LEFT,s.RIGHT,s.LEFT,s.RIGHT,s.LEFT,s.RIGHT,s.LEFT,s.RIGHT];w.EachApiCall;const $e={component:B,title:"Tester/FileUploader",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},description:{table:{category:t.props}},helpSvgPath:{options:Object.keys(C),mapping:C,table:{category:t.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{category:t.props}},hideLabel:{table:{category:t.props}},label:{table:{category:t.props}},showRequiredMark:{table:{category:t.props}},shouldNormalizeFileName:{table:{category:t.props,disable:!0}},errorMessage:{table:{category:t.props,disable:!0}},titleHelpSvg:{table:{category:t.props,defaultValue:{summary:ye()}}},uploadedFiles:{table:{disable:!0,category:t.props}},acceptedFileFormatsDisplay:{table:{disable:!0,category:t.props}},acceptedFileFormatsDescription:{table:{disable:!0,category:t.props}},uploadResult:{table:{disable:!0,category:t.props}},children:{table:{disable:!0,category:t.props}},fileIconTitle:{table:{disable:!0,category:t.props}},isUploading:{table:{disable:!0,category:t.props}},invalidCharacterRegexp:{control:"text",table:{disable:!0,category:t.props}},acceptedFileFormats:{table:{disable:!0,category:t.props}},multiple:{table:{disable:!0,category:t.htmlAttribute}},onFileDelete:{table:{category:t.event,disable:!0}},onFileDownload:{table:{category:t.event,disable:!0}},onFileChange:{table:{category:t.event,disable:!0}},onHelpToggle:{table:{category:t.event,disable:!0}}}},i={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const o=r(e).getAllByRole("generic")[1];await n(o).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=r(e),o=a.getAllByRole("generic")[1],F=a.getByRole("button");await n(F).toHaveAttribute("id","htmlId"),await n(o).toHaveClass("dummyClassname"),await n(o).toHaveAttribute("lang","en"),await n(o).toHaveAttribute("data-testid","123ID")}},p={name:"Defaults (A1 delvis)",argTypes:{},play:async({canvasElement:e})=>{const a=r(e);await n(a.getByText(T.t("ds_forms:fileuploader.AddSingleLabel"))).toBeInTheDocument()},parameters:{imageSnapshot:{hover:`${D} button`,focus:`${D} button`}}},d={name:"With Files (A5, B4 delvis)",argTypes:{},args:{helpText:"Hjelpetekst",label:"Dokumentasjon og grunnlag",acceptedFileFormats:[".pdf",".jpeg"],uploadedFiles:[{name:"dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf",href:"https://www.skatteetaten.no/person/"},{name:"grunnlag.jpg"},{name:"Screen_Shot_2023_08_03_at_14_48_38_PM_111.jpg"},{name:"test.png",href:"http://localhost:4400/designsystem_illustrasjon.png"}]},play:async({canvasElement:e})=>{const a=r(e);await n(a.getAllByText(T.t("ds_forms:fileuploader.FileIconLabel"))[0]).toBeInTheDocument(),await n(a.getByText("grunnlag.jpg")).toBeInTheDocument(),await n(a.getByText("test.png")).toBeInTheDocument(),await n(a.getByText("dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf")).toBeInTheDocument()},parameters:{}},m={name:"With Uploading (A3 delvis, A2 delvis)",argTypes:{},args:{isUploading:!0},parameters:{}},g={name:"With Error And Multiple(A4, A1 delvis)",argTypes:{},args:{multiple:!0,helpText:"Hjelpetekst",label:"Hemmelig kode",acceptedFileFormats:[".java",".cpp",".py"],errorMessage:"Du må laste opp en fil"},play:async({canvasElement:e})=>{const a=r(e);await n(a.getByText("Du må laste opp en fil")).toBeInTheDocument(),await n(a.getByText(T.t("ds_forms:fileuploader.AddMultipleLabel"))).toBeInTheDocument()},parameters:{}},we=e=>l.jsxs(l.Fragment,{children:[l.jsx(B,{...e,className:"bottomSpacingXL",uploadResult:{statusMessage:"Lastet opp 4 filer"}}),l.jsx(B,{...e,uploadResult:{statusMessage:"1 av 3 filer ble stoppet av virussjekk.",hasUploadFailed:!0}})]}),u={name:"With UploadResult (A4)",render:we,argTypes:{},args:{acceptedFileFormats:[".java",".cpp",".py"],uploadedFiles:[{name:"dokumentasjon.pdf",href:"https://www.skatteetaten.no/person/"},{name:"grunnlag.jpg"}]},parameters:{}},h={name:"With Text Overrides (A8)",argTypes:{},args:{acceptedFileFormats:["image/png"],acceptedFileFormatsDescription:"Tillatte filformater:_",acceptedFileFormatsDisplay:"bilder og dokumenter",children:"Trykk eller dra og slipp filer her",uploadedFiles:[{name:"document.pdf"}]},play:async({canvasElement:e})=>{const a=r(e);await n(a.getByText("Tillatte filformater:_")).toBeInTheDocument(),await n(a.getByText("bilder og dokumenter")).toBeInTheDocument(),await n(a.getByText("Trykk eller dra og slipp filer her")).toBeInTheDocument()},parameters:{}},f={name:"With File Change(A6)",args:{"data-testid":"testid123",helpText:"Hjelpetekst",label:"Dokumentasjon og grunnlag",uploadedFiles:[{name:"file.txt",href:"#"}],onFileDownload:k(),onFileChange:k(),onFileDelete:k()},play:async({args:e,canvasElement:a})=>{const o=r(a),F=o.getByTestId("testid123-input"),H=new File(["test"],"test.txt",{type:"txt"});await x.setup({pointerEventsCheck:w.Never}).upload(F,H),await A(()=>n(e.onFileChange).toHaveBeenCalledWith([H]));const fe=o.getByTitle(T.t("ds_forms:fileuploader.DeleteLabel"));await x.click(fe),await A(()=>n(e.onFileDelete).toHaveBeenCalledWith({name:"file.txt",href:"#"})),await x.click(o.getByText("file.txt")),await A(()=>n(e.onFileDownload).toHaveBeenCalledWith(n.anything(),{name:"file.txt",href:"#"}))},parameters:{imageSnapshot:{disable:!0}}},y={name:"With onHelpToggle Event",args:{label:"Last opp filer",helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},b={name:"With Custom ClassNames (FA3)",args:{classNames:{container:"dummyClassname",errorMessage:"dummyClassname"},errorMessage:"feil"},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=e.querySelector(`${D} > div`);await n(a).toHaveClass("dummyClassname")}};var I,U,N;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(U=i.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var M,L,P;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(P=(L=c.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var G,$,V;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=($=p.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var q,z,X;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
    await expect(canvas.getByText('grunnlag.jpg')).toBeInTheDocument();
    await expect(canvas.getByText('test.png')).toBeInTheDocument();
    await expect(canvas.getByText('dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf')).toBeInTheDocument();
  },
  parameters: {}
} satisfies Story`,...(X=(z=d.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};var J,Q,Z;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'With Uploading (A3 delvis, A2 delvis)',
  argTypes: {},
  args: {
    isUploading: true
  },
  parameters: {}
} satisfies Story`,...(Z=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var K,O,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(O=g.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var ee,ae,te;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,oe;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'With Text Overrides (A8)',
  argTypes: {},
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
  },
  parameters: {}
} satisfies Story`,...(oe=(se=h.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var re,le,ie;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,pe,de;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,ge,ue;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};const Ve=["WithRef","WithAttributes","Defaults","WithUploadedFiles","WithIsUploading","WithError","WithUploadResult","WithTextOverrides","WithFileChange","WithHelpToggleEvent","WithCustomClassNames"];export{p as Defaults,c as WithAttributes,b as WithCustomClassNames,g as WithError,f as WithFileChange,y as WithHelpToggleEvent,m as WithIsUploading,i as WithRef,h as WithTextOverrides,u as WithUploadResult,d as WithUploadedFiles,Ve as __namedExportsOrder,$e as default};
//# sourceMappingURL=FileUploader.test.stories-DLM_j69_.js.map
