import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-Ugg2TbUJ.js";import{M as t,i as l}from"./index-DCPC9HG_.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CqX5u9dV.js";import"./index-D9u29hOa.js";import"./index-Cu4lwwaE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";const d="| Returverdi                        | Type                       | Beskrivelse                                                      |\n| --------------------------------- | -------------------------- | ---------------------------------------------------------------- |\n| `fileUploaderState.uploadedFiles` | `Array<UploadedFile>`      | Liste over filer som er lastet opp                               |\n| `fileUploaderState.uploadResult`  | `UploadResult ⏐ undefined` | Resultat av opplasting, inkludert statustekster og feilmeldinger |\n| `fileUploaderState.isUploading`   | `boolean`                  | Om opplasting pågår                                              |\n| `setSuccess`                      | `Function`                 | Funksjon for å indikere vellyket opplasting                      |\n| `setLoading`                      | `Function`                 | Funksjon for å indikere at opplasting pågår                      |\n| `setFailure`                      | `Function`                 | Funksjon for å indikere feil under opplasting                    |\n| `remove`                          | `Function`                 | Funksjon for å fjerne en fil fra listen over opplastede filer    |\n",a="| Parameter                | Type                                         | Beskrivelse                                                                   |\n| ------------------------ | -------------------------------------------- | ----------------------------------------------------------------------------- |\n| `renderStatus`           | `(status: UploadResultData<T>) => ReactNode` | Valgfri funksjon for å tilpasse visningen av statusmeldinger etter opplasting |\n| `initiallyUploadedFiles` | `Array<UploadedFile>`                        | Valgfri liste av filer som er initialt opplastet                              |\n";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Komponenter/FileUploader/useFileUploader"}),`
`,e.jsx(n.h1,{id:"usefileuploader",children:"useFileUploader"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useFileUploader"})," er en React hook som kan brukes for å administrere opplastingstilstand for filer i en FileUploader-komponent."]}),`
`,e.jsx(n.h2,{id:"importering",children:"Importering"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { FileUploader } from '@skatteetaten/ds-forms';

// Hooken hentes fra FileUploader-komponenten
const { useFileUploader } = FileUploader;
`})}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const [
  fileUploaderState,
  setSuccess,
  setLoading,
  setFailure,
  remove
] = useFileUploader<T>(
  renderStatus?: (status: UploadResultData<T>) => ReactNode,
  initiallyUploadedFiles?: Array<UploadedFile>
);
`})}),`
`,e.jsx(n.h3,{id:"parametere",children:"Parametere"}),`
`,e.jsx(l,{children:a}),`
`,e.jsx(n.h3,{id:"returverdier",children:"Returverdier"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`[
  // Tilstand
  {
    uploadedFiles: Array<UploadedFile>;
    uploadResult: UploadResult | undefined;
    isUploading: boolean;
  },
  // Metoder
  setSuccess: (files: Array<UploadedFile>, data?: T) => void,
  setLoading: () => void,
  setFailure: (files: Array<UploadedFile>, errorMessage: T, succeededFiles?: Array<UploadedFile>) => void,
  remove: (file: UploadedFile) => void
]
`})}),`
`,e.jsx(l,{children:d}),`
`,e.jsx(n.h2,{id:"beskrivelse",children:"Beskrivelse"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useFileUploader"})," er en hook som håndterer tilstanden til filopplasting i et grensesnitt. Den håndterer opplastede filer, statusmeldinger, og tilbyr funksjoner for å administrere hele opplastingsprosessen."]}),`
`,e.jsxs(n.p,{children:["Hooken støtter generiske typer (",e.jsx(n.code,{children:"<T>"}),") som kan brukes for å definere egne datatyper til statusmeldinger."]}),`
`,e.jsx(n.h3,{id:"validering-og-feilhåndtering",children:"Validering og feilhåndtering"}),`
`,e.jsx(n.p,{children:"Hooken utfører automatisk validering for å sikre at duplikate filer ikke legges til:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Hvis en fil med samme ",e.jsx(n.code,{children:"id"})," allerede finnes i tilstanden, vil ",e.jsx(n.code,{children:"setSuccess"})," og ",e.jsx(n.code,{children:"setFailure"})," kaste en feil."]}),`
`,e.jsxs(n.li,{children:["For filer uten ",e.jsx(n.code,{children:"id"})," brukes filnavnet til å sjekke for duplikater."]}),`
`]}),`
`,e.jsx(n.h2,{id:"eksempel",children:"Eksempel"}),`
`,e.jsxs(n.p,{children:["Nedenfor er et eksempel på hvordan ",e.jsx(n.code,{children:"useFileUploader"})," kan brukes i en React-komponent:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { FileUploader, UploadedFile } from '@skatteetaten/ds-forms';

export const FileUploaderTest = () => {
  // Destrukturering av returverdier fra hooken
  const [fileUploaderState, setSuccess, setLoading, setFailure, remove] =
    FileUploader.useFileUploader();

  const handleDelete = async (file: UploadedFile): Promise<boolean> => {
    try {
      // Simulerer et API-kall for å slette filen
      const response = await fetch(\`/api/files/\${file.id}\`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Fjerner filen fra tilstanden
        remove(file);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Feil under sletting av fil:', error);
      return false;
    }
  };

  const handleChange = async (files: File[]): Promise<void> => {
    try {
      // Indikerer at opplasting pågår
      setLoading();

      // Simulerer API-kall for opplasting
      const results = await Promise.allSettled(
        files.map(file => uploadFileToServer(file))
      );

      // Kategoriserer resultatet
      const succeeded: UploadedFile[] = [];
      const failed: UploadedFile[] = [];
      const errorsByType: Record<string, { error: string, files: UploadedFile[] }> = {};

      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          succeeded.push({
            name: files[index].name,
            id: result.value.id,
            href: result.value.url
          });
        } else {
          // Finn eller opprett feilkategori
          const errorType = result.reason.code || 'unknown';
          const errorMessage = result.reason.message || 'Ukjent feil';

          if (!errorsByType[errorType]) {
            errorsByType[errorType] = {
              error: errorMessage,
              files: []
            };
          }

          const failedFile = { name: files[index].name };
          failed.push(failedFile);
          errorsByType[errorType].files.push(failedFile);
        }
      });

      // Håndter resultatet
      if (failed.length > 0) {
        // Send strukturerte feilmeldinger og eventuelle vellykkede filer
        setFailure(
          failed,
          Object.values(errorsByType),
          succeeded.length > 0 ? succeeded : undefined
        );
      } else {
        // Alt gikk bra
        setSuccess(succeeded);
      }
    } catch (error: unknown) {
      // Generell feil i selve prosessen
      setFailure(
        files.map(file => ({ name: file.name })),
        [{
          error: \`Det oppstod en feil under opplasting: \${error}\`,
          files: files.map(file => ({ name: file.name }))
        }]
      );
    }
  };

  return (
    <FileUploader
      label="Last opp dokumentasjon"
      acceptedFileFormats={['.pdf', '.jpeg', '.png']}
      multiple
      {...fileUploaderState}
      onFileDelete={handleDelete}
      onFileChange={handleChange}
    />
  );
};
`})}),`
`,e.jsx(n.h2,{id:"bruk-med-fileuploader-komponenten",children:"Bruk med FileUploader-komponenten"}),`
`,e.jsxs(n.p,{children:["Hooken er designet for å brukes sammen med ",e.jsx(n.code,{children:"FileUploader"}),"-komponenten. Tilstanden fra hooken kan spres (spread) direkte til ",e.jsx(n.code,{children:"FileUploader"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<FileUploader
  label={'Last opp et dokument'}
  acceptedFileFormats={['.pdf', '.jpeg', '.png']}
  {...fileUploaderState}
  onFileDelete={handleDelete}
  onFileChange={handleChange}
/>
`})}),`
`,e.jsx(n.h2,{id:"spesialisert-bruk-med-egne-datatyper",children:"Spesialisert bruk med egne datatyper"}),`
`,e.jsx(n.p,{children:"Hooken støtter generiske typer for å håndtere egendefinerte datastrukturer i statusmeldinger:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Definerer en egen datatype for statusmeldinger
type CustomErrorData = {
  code: string;
  message: string;
};

// Bruker egendefinert datatype med hooken
const [state, setSuccess, setLoading, setFailure, remove] =
  FileUploader.useFileUploader<CustomErrorData>(
    // Egendefinert renderer for statusmeldinger
    (status) => {
      if (status.data && status.hasUploadFailed) {
        return <div>Feilkode: {status.data.code} - {status.data.message}</div>;
      }
      return status.uploadedFilesMessage;
    }
  );

// Senere kan du bruke den egendefinerte datatypen
setFailure(
  [{ name: 'dokument.pdf' }],
  { code: 'ERR-001', message: 'Ugyldig filformat' }
);
`})}),`
`,e.jsx(n.h3,{id:"standard-feilvisning",children:"Standard feilvisning"}),`
`,e.jsxs(n.p,{children:["Hvis du ikke angir en egendefinert ",e.jsx(n.code,{children:"renderStatus"}),"-funksjon, vil hooken vise feilmeldinger på følgende måte:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Hvis dataene følger standardformatet (array med ",e.jsx(n.code,{children:"error"})," og ",e.jsx(n.code,{children:"files"}),"-felter), vises en liste med feilmeldinger og berørte filer."]}),`
`,e.jsx(n.li,{children:"Ellers vises den generelle statusmeldingen."}),`
`]}),`
`,e.jsxs(n.p,{children:["Dette skjer gjennom den interne ",e.jsx(n.code,{children:"renderFileStatusMessage"}),"-funksjonen, som kontrollerer om feilmeldingsformatet er gyldig ved hjelp av ",e.jsx(n.code,{children:"isUploadError"}),"-funksjonen."]}),`
`,e.jsx(n.h2,{id:"tilstandshåndtering",children:"Tilstandshåndtering"}),`
`,e.jsx(n.p,{children:"Hooken håndterer følgende tilstander:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initiell tilstand"}),": Ingen opplastede filer eller med initialt opplastede filer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Opplasting pågår"}),": ",e.jsx(n.code,{children:"isUploading"})," er satt til ",e.jsx(n.code,{children:"true"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vellykket opplasting"}),": Filene legges til i ",e.jsx(n.code,{children:"uploadedFiles"})," og en suksessmelding vises"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Feilet opplasting"}),": Feilmelding vises og eventuelle vellykkede filer legges til"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sletting av filer"}),": Individuell fil fjernes fra listen"]}),`
`]}),`
`,e.jsx(n.h3,{id:"struktur-for-feilmelding",children:"Struktur for feilmelding"}),`
`,e.jsxs(n.p,{children:["For at feilmeldinger skal vises riktig, må data som sendes til ",e.jsx(n.code,{children:"setFailure"})," følge en bestemt struktur:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`setFailure(
  files, // Filer som feilet
  [
    {
      error: 'Feilmelding', // Tekst som beskriver feilen
      files: [
        // Liste over filer som er berørt av denne feilen
        { name: 'filnavn.pdf', id: 'fil-id' },
      ],
    },
  ],
  succeededFiles // Valgfri: filer som likevel ble lastet opp
);
`})}),`
`,e.jsx(n.p,{children:"Denne strukturen sikrer at feilmeldinger vises korrekt med filene de gjelder for."})]})}function x(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{x as default};
//# sourceMappingURL=useFileUploader-Wcq7Ihva.js.map
