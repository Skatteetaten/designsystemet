import { Heading } from '@skatteetaten/ds-typography';

export default function HeadingLevelsStateExample(): JSX.Element {
  return (
    <div>
      <Heading as={'h1'} hasSpacing>
        {'Overskriftsnivå 1'}
      </Heading>
      <Heading as={'h2'} hasSpacing>
        {'Overskriftsnivå 2'}
      </Heading>
      <Heading as={'h3'} hasSpacing>
        {'Overskriftsnivå 3'}
      </Heading>
      <Heading as={'h4'} hasSpacing>
        {'Overskriftsnivå 4'}
      </Heading>
      <Heading as={'h5'} hasSpacing>
        {'Overskriftsnivå 5'}
      </Heading>
      <Heading as={'h6'} hasSpacing>
        {'Overskriftsnivå 6'}
      </Heading>
    </div>
  );
}
