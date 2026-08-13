# Kildeoppslag

Denne filen samler detaljerte kilderutiner som er flyttet ut fra SKILL.md.

## Arbeidsflyt for Canvas-eksempelkode via `/@fs/`

Vite dev-serveren eksponerer rå filer via `/@fs/[absolutt-sti]`.

Finn rot-stien én gang per sesjon:

1. Hent en side fra docs-serveren med `fetch_webpage`.
2. Finn en `@fs`-referanse i HTML, for eksempel:

```
href="/@fs/[rot]/libs/ds-layout/src/TopBannerExternal/TopBannerLogo/ske-logo.svg"
```

3. Trekk ut `[rot]` frem til `/libs/` eller `/apps/`.

Les deretter:

1. MDX-filen for å finne `examplesPath`:

```
http://localhost:3000/@fs/[rot]/apps/ds-docs/content/docs/[sidesti].mdx
```

2. Eksempelkoden direkte:

```
http://localhost:3000/@fs/[rot]/apps/ds-docs/content/examples/[examplesPath]/example.tsx
```

Eksempel:

```
http://localhost:3000/@fs/[rot]/apps/ds-docs/content/examples/composed/datoer/datoOgTid/example.tsx
```

Merk: `/examples/`- og `/_source/`-endepunkter returnerer HTML-404, ikke kildekode.

## Tilgangssjekk for primærkilder

Hvis primærkilder ikke er tilgjengelige:

- gjennomfør live-tilgangssjekk minst en gang per sesjon, og alltid før du hevder at dokumentasjonen er tilgjengelig
- bruk eksplisitt sjekk mot lokal docs, for eksempel:
  - `curl -sS -o /dev/null -w "localhost %{http_code}\\n" http://localhost:3000/byggeklosser/komponenter/combobox`
  - `curl -g -sS -o /dev/null -w "::1 %{http_code}\\n" 'http://[::1]:3000/byggeklosser/komponenter/combobox'`
- merk at noen oppsett lytter kun på IPv6 ([::1])
- tolkning: HTTP 200-399 betyr tilgjengelig, HTTP 000 eller tilkoblingsfeil betyr utilgjengelig
- marker gap tydelig hvis primærkilder fortsatt mangler
- bruk sekundærkilder kun til orientering, ikke til å fastslå udekket API
- ikke gjett API-er, props eller kode basert kun på rendret innhold
- stopp og be brukeren velge eksplisitt om docs skal fikses først eller om fallback er akseptabelt
- ikke implementer kode etter manglende primærkilde uten et eksplisitt valg fra brukeren

## Hurtigreferanse til docs-URL-er

1. Komponentdokumentasjon (lokal): `http://localhost:3000/byggeklosser/komponenter/`
2. Komponentside-mønster: `http://localhost:3000/byggeklosser/komponenter/<komponentslug>`
3. Hjelpe bruker med: `http://localhost:3000/eksempler/helpe-bruker-med/`
4. Spørre bruker om: `http://localhost:3000/eksempler/sp%C3%B8rre-bruker-om/mange-valg`
5. Sidetyper: `http://localhost:3000/eksempler/sidetyper/`
6. Formattere: `http://localhost:3000/byggeklosser/formattere/`
7. Ikoner: `http://localhost:3000/byggeklosser/ikoner/systemikoner` og `http://localhost:3000/byggeklosser/ikoner/temaikoner`

Hvis en forventet komponentside mangler, be om avklaring i stedet for å gjette URL.
