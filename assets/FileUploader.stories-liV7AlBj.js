import{j as l}from"./jsx-runtime-Nms4Y4qS.js";import{r as k}from"./index-BwDkhjyp.js";import{d as I}from"./index-CI44Z2h3.js";import{c as f,C as N}from"./index-iIx-nC6Z.js";import{c as e}from"./helpers-CDRJ97Ot.js";import{S as x}from"./icon.systems-CzzhySyt.js";import{e as z}from"./stories.utils-DTsHYhvm.js";const J={component:f,title:"Komponenter/FileUploader",argTypes:{classNames:{table:{category:e.props}},acceptedFileFormatsDisplay:{table:{category:e.props}},description:{table:{category:e.props}},fileIconTitle:{table:{category:e.props}},errorMessage:{table:{category:e.props}},helpSvgPath:{options:Object.keys(x),mapping:x,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{category:e.props}},hideLabel:{table:{category:e.props}},invalidCharacterRegexp:{control:"text",table:{category:e.props}},isUploading:{table:{category:e.props}},label:{table:{category:e.props}},acceptedFileFormats:{table:{category:e.props}},shouldNormalizeFileName:{table:{category:e.props}},showRequiredMark:{table:{category:e.props}},successIconTitle:{table:{category:e.props}},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:I.t("Shared:shared.Help")}}},uploadedFiles:{table:{category:e.props}},uploadResult:{table:{category:e.props}},multiple:{table:{category:e.htmlAttribute}},children:{table:{category:e.props}},acceptedFileFormatsDescription:{table:{category:e.props}},onFileDelete:{table:{category:e.event}},onFileDownload:{table:{category:e.event}},onFileChange:{table:{category:e.event}},onHelpToggle:{table:{category:e.event}}},args:{helpText:"Hjelpetekst",label:"Ledetekst",acceptedFileFormats:[".pdf",".jpeg"],uploadedFiles:[{name:"test.pdf",href:"https://i.imgur.com/guZeGcr.png"},{name:"test.jpg"},{name:"test.png",href:"http://localhost:4400/designsystem_illustrasjon.png"}],onFileDelete:i=>(console.log(i),!0)}},g={};async function H(i){return await new Promise(a=>setTimeout(a,500)),i?Response.json({},{status:400}):Response.json({})}function V(i,a){return H(a)}function $(i,a){return H(a)}const d={render:i=>{const[a,S,b,y,U]=f.useFileUploader(),[p,j]=k.useState(!1),[h,c]=k.useState(""),E=async r=>(await $(r.name,p)).ok?(U(r),!0):!1,F=async r=>a.uploadedFiles.length>0?(c("Du har allerede lastet opp en fil. Fjern filen først om du ønsker å laste opp en annen fil i stedet"),Promise.reject()):r.length>1?(c("Det er ikke lov med flere filer (dette kan bare skje med drag and drop)"),Promise.reject()):(b(),(await V(r[0],p)).ok?(S(r),!0):(y(r,[{error:"det har skjedd noe feil",files:[{name:r[0].name}]}]),!1));return l.jsxs(l.Fragment,{children:[l.jsx(N,{checked:p,onChange:()=>j(!p),children:"La nettverkskall feile"}),l.jsx(f,{label:"Last opp et dokument",acceptedFileFormats:[".pdf",".jpeg",".png"],multiple:!1,...a,errorMessage:h,onFileDelete:E,onFileChange:F})]})}};d.parameters=z;const u={render:i=>{const a=r=>{const s=[];for(let o=0;o<r;o++){const m=new Promise((P,t)=>{Math.random()<.5?P({href:"https://skatteetaten.github.io/designsystemet/"}):t("Promise rejected")});s.push(m)}return s},[S,b,y,U,p]=f.useFileUploader(),[j,h]=k.useState(),[c,E]=k.useState(!0),F="http://localhost:9090/test";return l.jsxs(l.Fragment,{children:[l.jsx(N,{checked:c,onChange:()=>E(!c),children:"Bruk mockUpload"}),l.jsx(f,{label:"Dokumentasjon og grunnlag",helpText:"Trenger du hjelp?",acceptedFileFormats:[".pdf",".jpeg",".png"],invalidCharacterRegexp:/e/g,shouldNormalizeFileName:!0,...S,errorMessage:j??"",multiple:!0,onFileDelete:async r=>{if(await new Promise(o=>setTimeout(o,1500)),c)return p(r),!0;let s=!0;return await fetch(F,{method:"DELETE"}).then(o=>{o.ok?p(r):s=!1}),s},onFileChange:async r=>{if(y(),h(""),r.some(t=>t.size>9e5)){h("Filen er for stor eller noe");return}const s=[],o=[];let m=[];if(c?m=a(r.length):m=r.map(t=>fetch(F,{method:"POST",body:t}).then(n=>(console.log(n),n.ok?n.json():Promise.reject(n)))),(await Promise.allSettled(m)).forEach((t,n)=>{t.status==="fulfilled"?(console.log("FULLLFILLED",t),s.push({name:r[n].name,href:t.value.href,id:Math.random().toString(36).substring(2,10)})):t.status==="rejected"&&(console.log("REJECT",t),o.push({name:r[n].name,reason:t.reason.statusText,id:Math.random().toString(36).substring(2,10)}))}),o.length){const t=`${o.length} av ${r.length} filer ble ikke lastet Opp`;U(o.map(({name:n,reason:M})=>({name:n,errorMessage:M})),[{error:t,files:o.map(({name:n,id:M})=>({name:n,id:M}))}],s)}else b(s)}})]})}};u.parameters=z;var v,C,D;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:"{} satisfies Story",...(D=(C=g.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var L,T,w;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [fileUploaderState, setSuccess, setLoading, setFailure, remove] = FileUploader.useFileUploader();
    const [shouldError, setShouldError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const onDelete = async (file: UploadedFile): Promise<boolean> => {
      const response = await mockDelete(file.name, shouldError);
      if (response.ok) {
        remove(file);
        return true;
      } else {
        return false;
      }
    };
    const onChange = async (files: File[]): Promise<boolean> => {
      if (fileUploaderState.uploadedFiles.length > 0) {
        setErrorMessage('Du har allerede lastet opp en fil. Fjern filen først om du ønsker å laste opp en annen fil i stedet');
        return Promise.reject();
      }
      if (files.length > 1) {
        setErrorMessage('Det er ikke lov med flere filer (dette kan bare skje med drag and drop)');
        return Promise.reject();
      }
      setLoading();
      const response = await mockUpload(files[0], shouldError);
      if (!response.ok) {
        setFailure(files, [{
          error: 'det har skjedd noe feil',
          files: [{
            name: files[0].name
          }]
        }]);
        return false;
      } else {
        setSuccess(files);
        return true;
      }
    };
    return <>
        <Checkbox checked={shouldError} onChange={() => setShouldError(!shouldError)}>
          {'La nettverkskall feile'}
        </Checkbox>
        <FileUploader label={'Last opp et dokument'} acceptedFileFormats={['.pdf', '.jpeg', '.png']} multiple={false} {...fileUploaderState} errorMessage={errorMessage} onFileDelete={onDelete} onFileChange={onChange} />
      </>;
  }
} satisfies Story`,...(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var _,R,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    interface MockUploadedFile {
      href?: string;
    }
    const createMockPromises = (amount: number): Promise<MockUploadedFile>[] => {
      const promises: Promise<MockUploadedFile>[] = [];
      for (let i = 0; i < amount; i++) {
        const promise = new Promise<MockUploadedFile>((resolve, reject) => {
          if (Math.random() < 0.5) {
            resolve({
              href: 'https://skatteetaten.github.io/designsystemet/'
            });
          } else {
            reject('Promise rejected');
          }
        });
        promises.push(promise);
      }
      return promises;
    };
    const [fileUploaderState, setSuccess, setLoading, setFailure, remove] = FileUploader.useFileUploader();
    const [error, setError] = useState<string>();
    const [shouldMockUpload, setShouldMockUpload] = useState<boolean>(true);
    const uploadUrl = 'http://localhost:9090/test';
    return <>
        <Checkbox checked={shouldMockUpload} onChange={() => setShouldMockUpload(!shouldMockUpload)}>
          {'Bruk mockUpload'}
        </Checkbox>
        <FileUploader label={'Dokumentasjon og grunnlag'} helpText={'Trenger du hjelp?'} acceptedFileFormats={['.pdf', '.jpeg', '.png']} invalidCharacterRegexp={/e/g} shouldNormalizeFileName {...fileUploaderState} errorMessage={error ?? ''} multiple onFileDelete={async (file): Promise<boolean> => {
        await new Promise(_ => setTimeout(_, 1500));
        if (shouldMockUpload) {
          remove(file);
          return true;
        }
        let deleteStatus = true;
        await fetch(uploadUrl, {
          method: 'DELETE'
        }).then(response => {
          if (!response.ok) {
            deleteStatus = false;
          } else {
            remove(file);
          }
        });
        return deleteStatus;
      }} onFileChange={async (files: File[]): Promise<void> => {
        setLoading();
        setError('');
        if (files.some(file => file.size > 900_000)) {
          setError('Filen er for stor eller noe');
          return;
        }
        const succeeded: Array<UploadedFile> = [];
        const failed: Array<{
          name: string;
          reason: string;
          id?: string;
        }> = [];
        let uploadPromises: Promise<MockUploadedFile>[] = [];
        if (shouldMockUpload) {
          uploadPromises = createMockPromises(files.length);
        } else {
          uploadPromises = files.map(file => fetch(uploadUrl, {
            method: 'POST',
            body: file
          }).then(response => {
            console.log(response);
            if (!response.ok) {
              return Promise.reject(response);
            }
            return response.json();
          }));
        }
        const results = await Promise.allSettled(uploadPromises);
        results.forEach((result, index) => {
          if (result.status === 'fulfilled') {
            console.log('FULLLFILLED', result);
            succeeded.push({
              name: files[index].name,
              href: result.value.href,
              id: Math.random().toString(36).substring(2, 10)
            });
          } else if (result.status === 'rejected') {
            console.log('REJECT', result);
            failed.push({
              name: files[index].name,
              reason: result.reason.statusText,
              id: Math.random().toString(36).substring(2, 10)
            });
          }
        });
        if (failed.length) {
          const error = \`\${failed.length} av \${files.length} filer ble ikke lastet Opp\`;
          setFailure(failed.map(({
            name,
            reason
          }) => ({
            name,
            errorMessage: reason
          })), [{
            error,
            files: failed.map(({
              name,
              id
            }) => ({
              name,
              id
            }))
          }], succeeded);
        } else {
          setSuccess(succeeded);
        }
      }}></FileUploader>
      </>;
  }
} satisfies Story`,...(O=(R=u.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const A=["Preview","SimpleCompleteExample","Examples"],W=Object.freeze(Object.defineProperty({__proto__:null,Examples:u,Preview:g,SimpleCompleteExample:d,__namedExportsOrder:A,default:J},Symbol.toStringTag,{value:"Module"}));export{u as E,W as F,d as S};
//# sourceMappingURL=FileUploader.stories-liV7AlBj.js.map
