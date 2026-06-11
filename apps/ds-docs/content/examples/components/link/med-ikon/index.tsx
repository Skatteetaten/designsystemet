import { Link } from '@skatteetaten/ds-buttons';
import { CalendarSVGpath } from '@skatteetaten/ds-icons';

export default function LinkWithIconStateExample(): JSX.Element {
  return (
    <Link href={'#ledig-dato'} svgPath={CalendarSVGpath}>
      {'Finn ledig dato'}
    </Link>
  );
}
