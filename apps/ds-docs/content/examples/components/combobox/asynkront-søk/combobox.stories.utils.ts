import type { ComboboxOption } from "@skatteetaten/ds-forms";

export function generatePerformanceTestData(count: number): ComboboxOption[] {
  const domains = [
    "Inntekt",
    "Merverdiavgift",
    "Arbeidsgiveravgift",
    "Folkeregister",
    "Skattemelding",
    "Skattekort",
    "Verdsettelse",
    "Klage",
    "Kontroll",
    "Saksbehandling",
    "Utbetaling",
    "Veiledning",
    "Sikkerhet",
    "Internasjonal",
    "Næring",
    "Pensjon",
    "IT",
  ];
  const teams = ["Nord", "Sør", "Øst", "Vest"];

  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    const domain = domains[index % domains.length];
    const team = teams[index % teams.length];

    return {
      value: `avdeling-${number}`,
      label: `${domain} ${team} ${number}`,
    };
  });
}
