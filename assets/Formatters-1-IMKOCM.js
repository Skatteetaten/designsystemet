import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as o}from"./index-Ugg2TbUJ.js";import{M as s,b as m}from"./index-DAFHjOKu.js";import{F as i,a}from"./Formatters.stories-NzwinFxe.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-kBaDV3LR.js";import"./index-D9u29hOa.js";import"./index-Cu4lwwaE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./index-CwaotbcG.js";import"./index-BP9ucNdn.js";import"./DatePickerCalendar-CmyXWAFv.js";import"./index-Dvbywa6-.js";import"./index-BQO_0U1F.js";import"./index-BQtvKDNR.js";import"./LabelWithHelp-DECIiZLx.js";import"./Help-DnfPEwtQ.js";import"./index-Dc9vnWYl.js";import"./index-DisSb1NM.js";import"./index-CJxYRboy.js";function t(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(s,{of:i}),`
`,e.jsxs(n.h1,{id:"hvordan-bruke-hjelpefunksjonen-formatter",children:["Hvordan bruke hjelpefunksjonen ",e.jsx(n.em,{children:"formatter"})]}),`
`,e.jsx(n.p,{children:"Designsystemet tilbyr en funksjon som grupperer en rekke typer tall."}),`
`,e.jsx(n.h3,{id:"organisasjonsnummer",children:"Organisasjonsnummer"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formatter } from '@skatteetaten/ds-core-utils';

const organisationNumber = formatter({
  value: '123456789',
  type: 'organisationNumber',
});
console.log(organisationNumber.value);
// 123 456 789
`})}),`
`,e.jsx(n.h3,{id:"fødselsnummer--d-nummer",children:"Fødselsnummer / d-nummer"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formatter } from '@skatteetaten/ds-core-utils';
const nationalIdentityNumber = formatter({
  value: '12029412345',
  type: 'nationalIdentityNumber',
});
console.log(nationalIdentityNumber.value);
// 120294 12345
`})}),`
`,e.jsx(n.h3,{id:"bankkontonummer",children:"Bankkontonummer"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formatter } from '@skatteetaten/ds-core-utils';
const bankAccountNumber = formatter({
  value: '86011117947',
  type: 'bankAccountNumber',
});

console.log(bankAccountNumber.value);
// 8601 11 17947
`})}),`
`,e.jsx(n.h3,{id:"telefonnummer",children:"Telefonnummer"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formatter } from '@skatteetaten/ds-core-utils';
const phoneNumber = formatter({
  value: '11223344',
  type: 'phoneNumber',
});
console.log(phoneNumber.value);
// 11 22 33 44
`})}),`
`,e.jsx(n.h2,{id:"grupperingshjelper-for-org--fødsels--konto--og-telefonnummer",children:"Grupperingshjelper for org.- fødsels-, konto- og telefonnummer"}),`
`,e.jsx(n.p,{children:"Fødselsnummer, organisasjonsnummer, kontonummer og telefonnummer viser grupperte siffer som skilles med mellomrom. Nevnte grupperingen er lik for alle språk. F.eks så grupperes organisasjonsnummer med tre og tre siffer. 123 456 789 Den generiske funksjonen tar imot alle typer tegn, fjerner alle tegn som ikke er gyldig med valgt type og retunerer siffer som er gruppert."}),`
`,e.jsx(n.p,{children:'F.eks "234,456-890" => "123 456 789"'}),`
`,e.jsx(n.p,{children:"Fordi formateringsfunksjonen ikke er en controlled component så må vi regne med at input til funksjonen alltid kan inneholde alle typer tegn. Det vil si at returnert verdi fra formateringsfunksjonen alltid må kunne tolkes korrekt hvis brukt som value prop til formatter-funksjonen en gang til."}),`
`,e.jsx(n.h1,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.h2,{id:"definisjoner",children:"Definisjoner"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`type FormatTypes =
  | 'nationalIdentityNumber'
  | 'organisationNumber'
  | 'bankAccountNumber'
  | 'phoneNumber';

const maxLengths = {
  nationalIdentityNumber: 11,
  organisationNumber: 9,
  bankAccountNumber: 11,
  phoneNumber: 10,
};

export type FormatOptions = {
  /* nummberlignende streng som parses av formateringsrutinen etter bestemte regler
  //TODO Beskriv reglene
  // */
  value: string;
  /* bestemmer formatet og noen ganger maksimium-lengden på verdien som returneres */
  type: FormatTypes;
};

type FormattingResponse = {
  /* Formatert tall som brukes for visning.
  NB. value returnerer bindestrek som minustegn. Ikke unikode \\u2212 som
  Intl.NumberFormat returnerer */
  value: string;
};

export const formatter = ({ value, type, locale }: FormatterProps): FormattingResponse => {
    ...
}
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(m,{of:a})]})}function O(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{O as default};
//# sourceMappingURL=Formatters-1-IMKOCM.js.map
