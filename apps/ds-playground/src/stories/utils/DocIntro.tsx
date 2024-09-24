import { ReactNode } from 'react';
import { Paragraph } from '@skatteetaten/ds-typography';
import { Link } from '@skatteetaten/ds-buttons';

interface DocIntroProps {
  name: string;
  url: string;
}

export const DocIntro = ({ name, url }: DocIntroProps): ReactNode => {
  return (
    <Paragraph variant={'ingress'}>
      {`Se `}
      <Link href={url}>{name}</Link>
      {` på stil og tone for eksempler og
        retningslinjer for denne komponenten.`}
    </Paragraph>
  );
};
