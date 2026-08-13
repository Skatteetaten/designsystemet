# Stegvise skjemaer

Bruk denne hjelpefilen når oppgaven gjelder et stegvis skjema, en veiviser eller en flyt som normalt løses med `StepList`.

## Standardmønster

- Start med `StepList` og den dokumenterte underkomponenten `StepList.Step`.
- Ikke lag en lokal stepper hvis dokumentert `StepList` dekker behovet.
- Kopier dokumentert eksempelkode først, og tilpass bare tekst, labels, felter, validering og dataflyt.
- Vis teksten "Alle felt må fylles ut med mindre feltet er merket valgfritt." over steglisten

## API-verifisering

- Verifiser både `StepList` og `StepList.Step` API før du foreslår props eller bruksmønster.
- Verifiser gyldige `variant`-verdier og tilgjengelige callback-props.
- Ikke gjett på props, eventnavn eller støttede tilstander.

## Dynamiske steg

Hvis senere steg avhenger av tidligere svar:

- avdekk ett nytt steg per «Neste»
- kollaps forrige steg til en kort oppsummering
- nullstill avhengige senere steg når tidligere svar endres
