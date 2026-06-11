import { MegaButton } from '@skatteetaten/ds-buttons';

export default function MegaButtonExternalLinkStateExample(): JSX.Element {
  return (
    <MegaButton href={'#'} isExternal>
      {'Hent opplysninger om kjøretøy'}
    </MegaButton>
  );
}
