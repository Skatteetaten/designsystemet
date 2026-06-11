import { CompletedSVGpath, Icon } from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

export default function HeadingWithIconStateExample(): JSX.Element {
  return (
    <Heading as={'h1'}>
      <Icon svgPath={CompletedSVGpath} size={'extraLarge'} />
      {' Skjemaet er sendt inn.'}
    </Heading>
  );
}
