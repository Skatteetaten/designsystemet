# Eksempeloppslag

Denne filen samler oppslagsinnhold for MDX-indeks, eksempler til bruk som mal (organisert etter kildens seksjoner) og komponentnivå-eksempler.

Sist verifisert mot kilden: 2026-09-22.

## Tilgjengelige MDX-sider i docs

Komponenter (`docs/byggeklosser/komponenter/`):
accordion, alert, blockquote, breadcrumbs, button, card, checkbox, checkboxgroup, chips, combobox, datepicker, descriptionlist, divider, errormessage, errorsummary, fieldset, fileuploader, footer, heading, icon, iconbutton, inlinebutton, link, linkgroup, list, megabutton, modal, navigationtile, openclose, pagination, panel, paragraph, popover, radiogroup, rolebanner, rolepicker, scrolltotopbutton, searchfield, select, spinner, steplist, table, tabs, tag, textarea, textfield, topbannerexternal, topbannerinternal, wordinfo

Hver komponentside har i tillegg sitt eget eksempel via `<Canvas examplesPath="components/[komponentnavn]" />`
i den enkelte komponent-MDX-en. Dette er utgangspunktet for komponentnivå-oppgaver,
uavhengig av tabellen under, som dekker sammensatte eksempler og sidetyper. Følg
Canvas-arbeidsflyten i [kildeoppslag.md](./kildeoppslag.md) for å lese eksempelkoden.

## Eksempler til bruk som mal (`docs/eksempler/`)

Kategori-kolonnen speiler de faktiske mappenavnene på GitHub master
(`apps/ds-docs/content/docs/eksempler/[seksjon]/`), slik at tabellen kan
krysssjekkes direkte mot kilden.

| Seksjon           | Navn                               | Sjekk først                                                                                    |
| ----------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------- |
| spørre-bruker-om  | Datoer og klokkeslett              | https://skatteetaten.github.io/designsystemet/eksempler/spørre-bruker-om/datoer                |
| spørre-bruker-om  | Å velge blant flere                | https://skatteetaten.github.io/designsystemet/eksempler/spørre-bruker-om/mange-valg            |
| hjelpe-bruker-med | Rollebytte og representasjon       | https://skatteetaten.github.io/designsystemet/eksempler/hjelpe-bruker-med/bytte-representasjon |
| sidetyper         | Sideoppsett for publikum (ekstern) | https://skatteetaten.github.io/designsystemet/eksempler/sidetyper/ekstern                      |
| sidetyper         | Feilside                           | https://skatteetaten.github.io/designsystemet/eksempler/sidetyper/feilside                     |
| sidetyper         | Skjema med steg                    | https://skatteetaten.github.io/designsystemet/eksempler/sidetyper/skjema-med-steg              |
| sidetyper         | Kvittering                         | https://skatteetaten.github.io/designsystemet/eksempler/sidetyper/kvittering                   |
| sidetyper         | Repeterende felter                 | https://skatteetaten.github.io/designsystemet/eksempler/sidetyper/repeterende-felter           |
| sidetyper         | Oppgaveliste (beta)                | https://skatteetaten.github.io/designsystemet/eksempler/sidetyper/oppgaveliste                 |
| sidetyper         | Deloppgave (beta)                  | https://skatteetaten.github.io/designsystemet/eksempler/sidetyper/deloppgave                   |
| sidetyper         | Arbeidsliste                       | https://skatteetaten.github.io/designsystemet/eksempler/sidetyper/arbeidsliste                 |
| sidetyper         | Saksvisning                        | https://skatteetaten.github.io/designsystemet/eksempler/sidetyper/saksvisning                  |

## Formattering av verdier (`docs/byggeklosser/formattere/`, ikke `/eksempler/`)

1. Beløp: https://skatteetaten.github.io/designsystemet/byggeklosser/formattere/belop
2. Fødselsnummer: https://skatteetaten.github.io/designsystemet/byggeklosser/formattere/fodselsnummer
3. Kontonummer: https://skatteetaten.github.io/designsystemet/byggeklosser/formattere/kontonummer
4. Organisasjonsnummer: https://skatteetaten.github.io/designsystemet/byggeklosser/formattere/organisasjonsnummer
5. Telefonnummer: https://skatteetaten.github.io/designsystemet/byggeklosser/formattere/phone

Grunnleggende (`docs/grunnleggende/`):
introduksjon, nettleserstøtte, styling, endringslogg, kom-i-gang/for-utviklere, kom-i-gang/for-designere
