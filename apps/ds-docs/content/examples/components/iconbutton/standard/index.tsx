import { IconButton } from '@skatteetaten/ds-buttons';
import { PrintSVGpath } from '@skatteetaten/ds-icons';

export default function IconButtonStandardStateExample(): JSX.Element {
  return <IconButton svgPath={PrintSVGpath} title={'Skriv ut'} />;
}
