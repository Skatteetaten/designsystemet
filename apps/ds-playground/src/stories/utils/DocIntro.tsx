import { ReactNode } from 'react';

import { Link as DSLink } from '@skatteetaten/ds-buttons';
import { Paragraph } from '@skatteetaten/ds-typography';

interface DocIntroProps {
  name: string;
  url: string;
}

export const DocIntro = ({ name, url }: DocIntroProps): ReactNode => {
  return (
    <Paragraph variant={'ingress'}>
      {`Se `}
      <DSLink href={url}>{name}</DSLink>
      {` på stil og tone for eksempler og
        retningslinjer for denne komponenten.`}
    </Paragraph>
  );
};

export const MoreOf = ({ children }: { children?: ReactNode }): ReactNode => {
  return <Paragraph variant={'ingress'}>{children}</Paragraph>;
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
    <DSLink href={url} target={target}>
      {children}
    </DSLink>
  );
};
