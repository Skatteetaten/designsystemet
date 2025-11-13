import{c as He,f as Ee,j as c,d,r as We}from"./iframe-CdXtTKZQ.js";import"./dom.esm-f9C1yts5.js";import{b as S}from"./index-CLKUz3Po.js";import{w as ke}from"./storybook.testing.utils-BgHZnMzD.js";import{S as I}from"./icon.systems-eQup-rxy.js";const W=Symbol("Manage ClipboardSub");function xe(e){return!!(e!=null&&e[W])}function _e(e){xe(e.navigator.clipboard)&&e.navigator.clipboard[W].resetClipboardStub()}function Ce(e){xe(e.navigator.clipboard)&&e.navigator.clipboard[W].detachClipboardStub()}const D=globalThis;typeof D.afterEach=="function"&&D.afterEach(()=>_e(globalThis.window));typeof D.afterAll=="function"&&D.afterAll(()=>Ce(globalThis.window));var _=(function(e){return e[e.EachTrigger=4]="EachTrigger",e[e.EachApiCall=2]="EachApiCall",e[e.EachTarget=1]="EachTarget",e[e.Never=0]="Never",e})({}),l=(function(e){return e[e.STANDARD=0]="STANDARD",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e[e.NUMPAD=3]="NUMPAD",e})({});[..."0123456789".split("").map(e=>({code:`Digit${e}`,key:e})),...")!@#$%^&*(".split("").map((e,t)=>({code:`Digit${t}`,key:e,shiftKey:!0})),..."abcdefghijklmnopqrstuvwxyz".split("").map(e=>({code:`Key${e.toUpperCase()}`,key:e})),..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(e=>({code:`Key${e}`,key:e,shiftKey:!0})),l.LEFT,l.RIGHT,l.LEFT,l.RIGHT,l.LEFT,l.RIGHT,l.LEFT,l.RIGHT,l.LEFT,l.RIGHT];_.EachApiCall;const{expect:a,fn:H,userEvent:x,waitFor:E,within:i}=__STORYBOOK_MODULE_TEST__,Ie={component:S,title:"Tester/FileUploader",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},helpSvgPath:{options:Object.keys(I),mapping:I,table:{disable:!0,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{disable:!0}},hideLabel:{table:{disable:!0}},label:{table:{disable:!0}},showRequiredMark:{table:{disable:!0}},shouldNormalizeFileName:{table:{disable:!0}},titleHelpSvg:{table:{category:Ee.props,disable:!0,defaultValue:{summary:He()}}},uploadedFiles:{table:{disable:!0}},acceptedFileFormatsDisplay:{table:{disable:!0}},acceptedFileFormatsDescription:{table:{disable:!0}},uploadResult:{table:{disable:!0}},children:{table:{disable:!0}},fileIconTitle:{table:{disable:!0}},isUploading:{table:{disable:!0}},invalidCharacterRegexp:{control:"text",table:{disable:!0}},spinnerLabel:{table:{disable:!0}},acceptedFileFormats:{table:{disable:!0}},multiple:{table:{disable:!0}},onFileDelete:{table:{disable:!0}},onFileDownload:{table:{disable:!0}},onFileChange:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},p={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=i(e).getAllByRole("generic")[1];await a(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},u={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=i(e),n=t.getAllByRole("generic")[1],s=t.getByRole("button");await a(s).toHaveAttribute("id","htmlId"),await a(n).toHaveClass("dummyClassname"),await a(n).toHaveAttribute("lang","en"),await a(n).toHaveAttribute("data-testid","123ID")}},m={name:"Defaults (A1 delvis)",play:async({canvasElement:e})=>{const t=i(e);await a(t.getByText(d.t("ds_forms:fileuploader.AddSingleLabel"))).toBeInTheDocument()},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},g={name:"With Files (A5, B4 delvis)",args:{helpText:"Hjelpetekst",label:"Dokumentasjon og grunnlag",acceptedFileFormats:[".pdf",".jpeg"],uploadedFiles:[{name:"dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf",href:"https://www.skatteetaten.no/person/"},{name:"grunnlag.jpg"},{name:"Screen_Shot_2023_08_03_at_14_48_38_PM_111.jpg"},{name:"test.png",href:"http://localhost:4400/designsystem_illustrasjon.png"}]},play:async({canvasElement:e})=>{const t=i(e);await a(t.getAllByText(d.t("ds_forms:fileuploader.FileIconLabel"))[0]).toBeInTheDocument(),await a(t.getByText("grunnlag.jpg")).toBeInTheDocument(),await a(t.getByText("test.png")).toBeInTheDocument(),await a(t.getByText("dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf")).toBeInTheDocument()},parameters:{}},f={name:"With Uploading (A3 delvis, A2 delvis)",args:{isUploading:!0},argTypes:{isUploading:{table:{disable:!1}}}},b={name:"With Error And Multiple (A4, A1 delvis)",args:{multiple:!0,helpText:"Hjelpetekst",label:"Hemmelig kode",acceptedFileFormats:[".java",".cpp",".py"],errorMessage:"Du må laste opp en fil"},argTypes:{errorMessage:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e);await a(t.getByText("Du må laste opp en fil")).toBeInTheDocument(),await a(t.getByText(d.t("ds_forms:fileuploader.AddMultipleLabel"))).toBeInTheDocument()}},Re=e=>c.jsxs(c.Fragment,{children:[c.jsx(S,{...e,uploadResult:{statusMessage:"Lastet opp 4 filer"},hasSpacing:!0}),c.jsx(S,{...e,uploadResult:{statusMessage:"1 av 3 filer ble stoppet av virussjekk.",hasUploadFailed:!0}})]}),y={name:"With UploadResult (A4)",render:Re,args:{acceptedFileFormats:[".java",".cpp",".py"],uploadedFiles:[{name:"dokumentasjon.pdf",href:"https://www.skatteetaten.no/person/"},{name:"grunnlag.jpg"}]}},h={name:"With Text Overrides (A8)",args:{acceptedFileFormats:["image/png"],acceptedFileFormatsDescription:"Tillatte filformater:_",acceptedFileFormatsDisplay:"bilder og dokumenter",children:"Trykk eller dra og slipp filer her",uploadedFiles:[{name:"document.pdf"}]},play:async({canvasElement:e})=>{const t=i(e);await a(t.getByText("Tillatte filformater:_")).toBeInTheDocument(),await a(t.getByText("bilder og dokumenter")).toBeInTheDocument(),await a(t.getByText("Trykk eller dra og slipp filer her")).toBeInTheDocument()}},v={name:"With File Change(A6)",args:{"data-testid":"testid123",helpText:"Hjelpetekst",label:"Dokumentasjon og grunnlag",uploadedFiles:[{name:"file.txt",href:"#"}],onFileDownload:H(),onFileChange:H(),onFileDelete:H()},play:async({args:e,canvasElement:t})=>{const n=i(t),s=n.getByTestId("testid123-input"),o=new File(["test"],"test.txt",{type:"txt"});await x.setup({pointerEventsCheck:_.Never}).upload(s,o),await E(()=>a(e.onFileChange).toHaveBeenCalledWith([o]));const A=n.getByTitle(d.t("ds_forms:fileuploader.DeleteLabel"));await x.click(A),await E(()=>a(e.onFileDelete).toHaveBeenCalledWith({name:"file.txt",href:"#"})),await x.click(n.getByText("file.txt")),await E(()=>a(e.onFileDownload).toHaveBeenCalledWith(a.anything(),{name:"file.txt",href:"#"}))},parameters:{imageSnapshot:{disableSnapshot:!0}}},T={name:"With onHelpToggle Event",args:{label:"Last opp filer",helpText:"Hjelpetekst",onHelpToggle:e=>{alert(e?"Hjelpetekst blir vist":"Hjelpetekst skjules")}},parameters:{imageSnapshot:{disable:!0}}},w={name:"With Custom ClassNames (FA3)",args:{classNames:{container:"dummyClassname",errorMessage:"dummyClassname"},errorMessage:"feil"},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=e.querySelector(`${ke} > div`);await a(t).toHaveClass("dummyClassname")}},B={name:"With Focus Management (B7)",render:()=>{const e=()=>{const[t,n]=We.useState([{name:"first.pdf"},{name:"second.pdf"},{name:"third.pdf"}]);return c.jsx(S,{uploadedFiles:t,onFileDelete:s=>(n(o=>o.filter(r=>r.name!==s.name)),!0)})};return c.jsx(e,{})},play:async({canvasElement:e})=>{const t=i(e),n=d.t("ds_forms:fileuploader.DeleteLabel"),s=d.t("ds_forms:fileuploader.AddSingleLabel"),o=x.setup({pointerEventsCheck:_.Never}),r=t.getAllByRole("button",{name:n});a(r).toHaveLength(3);const A=r[0],Se=r[1];await o.click(Se),await a(t.queryByText("second.pdf")).not.toBeInTheDocument(),await a(A).toHaveFocus();const De=t.getAllByTitle(n)[0];await o.click(De),await a(t.queryByText("first.pdf")).not.toBeInTheDocument();const C=t.getByRole("button",{name:s});await a(C).toHaveFocus();const Ae=t.getAllByTitle(n)[0];await o.click(Ae),await a(t.queryByText("third.pdf")).not.toBeInTheDocument(),await a(t.queryAllByTitle(n).length).toBe(0),await a(C).toHaveFocus()},parameters:{imageSnapshot:{disableSnapshot:!0}}},R="Opplasting pågår, kan ta et par minutter.",F={name:"With Custom Spinner Label",args:{spinnerLabel:R,isUploading:!0},argTypes:{spinnerLabel:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=e.querySelector(`${ke} > div`),n=i(t).getByRole("button");await a(n).toHaveTextContent(R)}},k={name:"With Description",args:{label:"Last opp filer",description:"En liten beskrivelse tekst"},argTypes:{description:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e),n=t.getByText("En liten beskrivelse tekst");await a(n).toBeInTheDocument();const s=t.getByRole("button");await a(s).toHaveAttribute("aria-describedby");const o=s.getAttribute("aria-describedby");await a(o).toMatch(/descId-/)}};var j,L,M;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var U,N,P;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
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
} satisfies Story`,...(P=(N=u.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var q,G,V;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Defaults (A1 delvis)',
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(dsI18n.t('ds_forms:fileuploader.AddSingleLabel'))).toBeInTheDocument();
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...(V=(G=m.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var $,z,J;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(z=g.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var X,K,Q;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,O,Y;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(O=b.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var ee,te,ae;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,se,oe;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(oe=(se=h.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ie,re;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  }
} satisfies Story`,...(re=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ce,de,pe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(de=T.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,me,ge;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(me=w.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var fe,be,ye;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'With Focus Management (B7)',
  render: () => {
    const FocusManagementWrapper = (): JSX.Element => {
      const [files, setFiles] = useState([{
        name: 'first.pdf'
      }, {
        name: 'second.pdf'
      }, {
        name: 'third.pdf'
      }]);
      return <FileUploader uploadedFiles={files} onFileDelete={file => {
        setFiles(prev => prev.filter(f => f.name !== file.name));
        return true; // indicate successful delete
      }} />;
    };
    return <FocusManagementWrapper />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const deleteTitle = dsI18n.t('ds_forms:fileuploader.DeleteLabel');
    const uploadButtonName = dsI18n.t('ds_forms:fileuploader.AddSingleLabel');
    const user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never
    });
    const initialDeleteButtons = canvas.getAllByRole('button', {
      name: deleteTitle
    });
    expect(initialDeleteButtons).toHaveLength(3);
    const firstButton = initialDeleteButtons[0];
    const secondButton = initialDeleteButtons[1];

    // Delete the second file -> focus should move to previous (first) file's delete button
    await user.click(secondButton);
    await expect(canvas.queryByText('second.pdf')).not.toBeInTheDocument();
    await expect(firstButton).toHaveFocus();

    // Delete the first file (now list has first.pdf & third.pdf -> after deletion only third.pdf). No previous file, focus should move to upload button.
    const firstButtonAfter = canvas.getAllByTitle(deleteTitle)[0];
    await user.click(firstButtonAfter);
    await expect(canvas.queryByText('first.pdf')).not.toBeInTheDocument();
    const uploadButton = canvas.getByRole('button', {
      name: uploadButtonName
    });
    await expect(uploadButton).toHaveFocus();

    // Delete the last remaining file -> still focus on upload button and no delete buttons remain
    const lastDeleteButton = canvas.getAllByTitle(deleteTitle)[0];
    await user.click(lastDeleteButton);
    await expect(canvas.queryByText('third.pdf')).not.toBeInTheDocument();
    await expect(canvas.queryAllByTitle(deleteTitle).length).toBe(0);
    await expect(uploadButton).toHaveFocus();
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  }
}`,...(ye=(be=B.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var he,ve,Te;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'With Custom Spinner Label',
  args: {
    spinnerLabel,
    isUploading: true
  },
  argTypes: {
    spinnerLabel: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const container = canvasElement.querySelector(\`\${wrapper} > div\`);
    const button = within(container as HTMLElement).getByRole('button');
    await expect(button).toHaveTextContent(spinnerLabel);
  }
} satisfies Story`,...(Te=(ve=F.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var we,Be,Fe;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'With Description',
  args: {
    label: 'Last opp filer',
    description: 'En liten beskrivelse tekst'
  },
  argTypes: {
    description: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const description = canvas.getByText('En liten beskrivelse tekst');
    await expect(description).toBeInTheDocument();
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-describedby');
    const describedbyValue = button.getAttribute('aria-describedby');
    await expect(describedbyValue).toMatch(/descId-/);
  }
} satisfies Story`,...(Fe=(Be=k.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};const je=["WithRef","WithAttributes","Defaults","WithUploadedFiles","WithIsUploading","WithError","WithUploadResult","WithTextOverrides","WithFileChange","WithHelpToggleEvent","WithCustomClassNames","WithFocusManagement","WithCustomSpinnerLabel","WithDescription"],qe=Object.freeze(Object.defineProperty({__proto__:null,Defaults:m,WithAttributes:u,WithCustomClassNames:w,WithCustomSpinnerLabel:F,WithDescription:k,WithError:b,WithFileChange:v,WithFocusManagement:B,WithHelpToggleEvent:T,WithIsUploading:f,WithRef:p,WithTextOverrides:h,WithUploadResult:y,WithUploadedFiles:g,__namedExportsOrder:je,default:Ie},Symbol.toStringTag,{value:"Module"}));export{qe as F};
//# sourceMappingURL=FileUploader.test.stories-Do-8GIFg.js.map
