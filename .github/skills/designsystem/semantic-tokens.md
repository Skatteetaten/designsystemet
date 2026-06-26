# Semantiske tokens

Denne filen er en lokal referanse for bruk av semantiske designtokens i forslag fra skillen.

## Hensikt

Bruk denne referansen når du skal:

- foreslå stylingvalg i kode
- anbefale riktige tokenkategorier
- unngå hardkodede farger, spacing-verdier, storrelser eller typografi

## Hovedregel

Foretrekk semantiske tokens fremfor direkte verdier eller palettbaserte tokens når dokumentasjonen dekker behovet.

## Navngivning

- Prioriter tokennavn som begynner med `--semantic`.
- Ikke finn opp tokennavn.
- Hvis eksakt tokennavn er ukjent, beskriv tokenbehovet funksjonelt i stedet for å gjette.
- Bruk verifiserte tokennavn direkte når de er kjent, for eksempel `--semantic-interactive-main` for interaktive elementer.

## Foreslått struktur for omtale

Beskriv tokens i denne formen når eksakt navn ikke er verifisert:

- `--semantic-` + kategori + hensikt
- `--semantic-` + rolle + tilstand
- `--semantic-` + område + variant

Eksempel på verifisert tokennavn:

- `--semantic-interactive-main` brukes til interaktive elementer.

## Hvordan tokens bør omtales

Bruk funksjonelle beskrivelser som:

- semantic token for primær tekst
- semantic token for sekundær tekst
- semantic token for container-bakgrunn
- semantic token for feilstatus
- semantic token for fokus eller interaktiv tilstand
- semantic token for spacing mellom relaterte elementer
- semantic token for typografi i overskrift eller brødtekst

## Faktiske tokens fra designsystemet

### Side og overflate

- `--semantic-page-background`: Bakgrunn for hele siden. Brukes på rot-elementet eller layout-wrapper. Verdien er `graphite-0` (hvit/svært lys).
- `--semantic-page-foreground`: Standardtekstfarge på siden. Brukes for løpende tekst og ikoner på normal sidebakgrunn. Verdien er `graphite-100` (nesten sort).

### Interaktive elementer

- `--semantic-interactive-main`: Primærfarge for interaktive elementer: knapper, lenker, fokusrammer og checkmarks. Verdien er `azure-70` (mørk blå).
- `--semantic-interactive-background`: Bakgrunn for hover-tilstand på interaktive elementer. Brukes som dempet blå flate bak lenker og knapper ved hover. Verdien er `azure-10` (svært lys blå).
- `--semantic-interactive-foreground`: Farge for aktiv/trykket tilstand på interaktive elementer. Mørkere enn main, brukes på pressed-state. Verdien er `azure-100` (dyp blå).

### Statusfarger

- `--semantic-danger-background`: Bakgrunn for feil/farlige tilstander. Brukes i feilmeldingsbokser, error-alerts og felt med valideringsfeil. Verdien er `burgundy-10` (lys rødlilla).
- `--semantic-danger-foreground`: Tekst- og ikonfarge for feil/farlige tilstander. Brukes som border, ikonfyll og feilmeldingstekst. Verdien er mørk rød (`#a82e39`).
- `--semantic-disabled-background`: Bakgrunn for deaktiverte elementer. Brukes på input-felt, knapper og flater som ikke er tilgjengelige. Verdien er `graphite-10` (lys grå).
- `--semantic-disabled-foreground`: Tekst- og ikonfarge for deaktiverte elementer. Gir redusert kontrast som visuell indikasjon på deaktivert tilstand. Verdien er `graphite-50` (medium grå).
- `--semantic-success-background`: Bakgrunn for suksess-tilstander. Brukes i bekreftelsesmeldinger, suksess-alerts og fullføringsindikatorer. Verdien er `forest-10` (lys grønn).
- `--semantic-success-foreground`: Tekst- og ikonfarge for suksess-tilstander. Brukes som border og ikonfyll i suksess-alerts. Verdien er mørk grønn (`#316f2a`).
- `--semantic-warning-background`: Bakgrunn for advarselstilstander. Brukes i advarselsmeldinger og varsler som krever brukeroppmerksomhet. Verdien er `ochre-10` (lys gul/amber).
- `--semantic-warning-foreground`: Tekst- og ikonfarge for advarselstilstander. Brukes som border og ikonfyll i warnings. Verdien er mørk gul/amber (`#9f7509`).

### Skillelinjer

- `--semantic-divider-100`: Sterk skillelinje. Brukes der en tydelig visuell separasjon er nødvendig, f.eks. mellom tabell-rader i fokustilstand eller i Divider-komponenten med høy synlighet. Verdien er `graphite-100`.
- `--semantic-divider-30`: Dempet skillelinje. Brukes som standard separator mellom seksjoner, rader og elementer der linjen ikke skal dominere. Verdien er `graphite-30` (lys grå).

### Typografi

- `--semantic-font-size-default`: Standard skriftstørrelse for brødtekst og UI-elementer. Tilsvarer `font-size-m`. Brukes som basis der ingen spesifikk størrelse er definert.
- `--semantic-font-weight-default`: Standard skriftvekt for løpende tekst. Tilsvarer `font-weight-regular`. Brukes der ingen bold eller medium vekt er påkrevd.
- `--semantic-line-height-default`: Standard linjehøyde (`1.5`). Brukes for brødtekst, inputfelt og tabeller.
- `--semantic-line-height-article`: Linjehøyde for artikkelinnhold og lenketekst (`1.666`). Brukes der teksten har lengre linjer og trenger mer luft.
- `--semantic-line-height-buttons`: Linjehøyde for knappetekst (`1.666`). Brukes internt i Button-komponenten.
- `--semantic-line-height-heading1`: Linjehøyde for h1-overskrifter (`1.333`). Kompakt linjehøyde som passer store skriftstørrelser.
- `--semantic-line-height-heading2`: Linjehøyde for h2-overskrifter (`1.333`). Se `heading1`.
- `--semantic-line-height-heading3`: Linjehøyde for h3-overskrifter. Tilsvarer `line-height-default` (`1.5`).
- `--semantic-line-height-heading4`: Linjehøyde for h4-overskrifter (`1.666`). Mer luft enn h1–h2, passende for mindre overskrifter.
- `--semantic-line-height-input`: Linjehøyde for tekst i inputfelt. Tilsvarer `line-height-default` (`1.5`). Brukes internt i skjemakomponenter.
- `--semantic-line-height-table`: Linjehøyde for tabellceller. Tilsvarer `line-height-default` (`1.5`). Brukes internt i Table-komponenten.

### Størrelser og spacing

- `--semantic-size-default`: Standard komponentstørrelse. Tilsvarer `size-small`. Brukes som basis for komponenthøyde der ingen eksplisitt størrelse er satt.
- `--semantic-spacing-default`: Standard avstand mellom relaterte elementer. Tilsvarer `spacing-m`. Brukes som gap, margin eller padding mellom felt og komponenter innen en gruppe.

### Responsivt layout

- `--semantic-responsive-container`: Maks-bredde for den primære innholdscontaineren. Skalerer fra `container-xs` på smale skjermer til `container-l` på brede. Brukes på main content wrapper.
- `--semantic-responsive-container-spacing`: Horisontal padding for innholdscontaineren. Gir `spacing-m` sideavstand på smale skjermer, ingen padding på brede.
- `--semantic-responsive-article`: Maks-bredde for artikkel/tekstinnhold. Smalere enn container, skalerer fra `container-xs` til `container-s`. Brukes for lesbar artikkellayout.
- `--semantic-responsive-wide-content`: Maks-bredde for bredt innhold (bilder, tabeller, o.l.). Skalerer fra `container-xs` til `container-wide-content`.
- `--semantic-responsive-internal-aside`: Bredde på sidefeltet (aside) i interne tokolonelayouter. Skalerer fra smal til `container-aside` på brede skjermer.
- `--semantic-responsive-internal-container-display`: Display-egenskap for intern tokolonne-container. Satt til `flex` for å aktivere side-ved-side-layout.
- `--semantic-responsive-internal-container-flex-direction`: Retning for intern flex-container. `column` på smale skjermer, `row` på brede. Styrer om innhold og aside stappes vertikalt eller horisontalt.
- `--semantic-responsive-internal-container-spacing`: Gap mellom innhold og aside i intern tokolonne-layout. `spacing-m` på smale skjermer, `spacing-xl` på brede.

## Hvordan skillen bør svare

Når eksakt tokennavn er kjent:

- bruk tokennavnet direkte
- forklar kort hvorfor tokenet passer til hensikten
- behold prefikset `--semantic` i svaret og i kodeeksempler

Når eksakt tokennavn ikke er kjent:

- beskriv hvilken tokenkategori som trengs
- beskriv hensikten funksjonelt
- be brukeren eller dokumentasjonen verifisere det endelige navnet

Eksempel:

Bra:

- Bruk `--semantic-interactive-main` for interaktive elementer her.
- Bruk et semantisk spacing-token mellom feltene i stedet for en fast marginverdi.

Svakere:

- Sett teksten til graa.
- Legg inn 14px margin fordi det ser passe ut.

Verifisert eksempel fra designsystemet:

- `--semantic-interactive-main` for interaktive elementer

## Når dokumentasjonen er uklar

- Oppgi at eksakt tokennavn må verifiseres i dokumentasjonen.
- Foreslå kategori og bruk, ikke et oppdiktet navn.
- Behold semantisk intensjon i anbefalingen.

## Eksempel på god praksis

Bra:

- Bruk et semantisk token for feilmeldingstekst i stedet for en hardkodet rødfarge.
- Bruk et semantisk spacing-token mellom felter i stedet for faste pixelverdier.
- Bruk et semantisk font-token for brødtekst i stedet for en lokal font-size.

Mindre bra:

- Bruk #d82f2f for feil.
- Sett margin-bottom til 12px uten å sjekke tokenene.
- Bruk et oppdiktet tokennavn som virker plausibelt.
