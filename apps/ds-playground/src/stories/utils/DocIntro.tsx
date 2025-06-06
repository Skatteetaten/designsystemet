import { ReactNode } from 'react';

import { Link as DSLink } from '@skatteetaten/ds-buttons';
import { InfoSquareSVGpath } from '@skatteetaten/ds-icons';

interface DocIntroProps {
  name: string;
  url: string;
}

export const DocIntro = ({ url }: DocIntroProps): ReactNode => {
  return (
    <div className={'topSpacingL'}>
      <DSLink href={url} svgPath={InfoSquareSVGpath} className={'docs'}>
        {`Eksempler og retningslinjer (skatteetaten.no).`}
      </DSLink>
    </div>
  );
};

export const Link = ({
  url,
  children,
  target,
}: {
  url: string;
  children: string;
  target?: string;
}): ReactNode => {
  return (
    <DSLink href={url} target={target} className={'docs'}>
      {children}
    </DSLink>
  );
};
