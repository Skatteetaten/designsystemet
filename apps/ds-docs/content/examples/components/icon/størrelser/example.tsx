import { type ReactElement } from 'react';

import { DeploySVGpath, Icon } from '@skatteetaten/ds-icons';

export default function IconSizesStateExample(): ReactElement {
  return (
    <>
      <Icon svgPath={DeploySVGpath} size={'medium'} />
      <Icon svgPath={DeploySVGpath} size={'large'} />
      <Icon svgPath={DeploySVGpath} size={'extraLarge'} />
    </>
  );
}
