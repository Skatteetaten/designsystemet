import { Link } from "@skatteetaten/ds-buttons";
import { Paragraph } from "@skatteetaten/ds-typography";

export default function LinkOpenInNewTabStateExample(): JSX.Element {
  return (
    <Paragraph>
      {"Er det noe du er usikker pa, kan du lese"}{" "}
      <Link href={"https://www.nav.no"} target={"_blank"}>
        {"rettledningen hos Nav (apnes i ny fane)"}
      </Link>
      {"."}
    </Paragraph>
  );
}