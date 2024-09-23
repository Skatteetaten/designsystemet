import { ReactNode } from 'react';

interface DocIntroProps {
  name: string;
  url: string;
}

export const DocIntro = ({ name, url }: DocIntroProps): ReactNode => {
  return (
    <p>
      <b>
        {`Se `}
        <a href={url}>{name}</a>
        {` på stil og tone for eksempler og
        retningslinjer for denne komponenten.`}
      </b>
    </p>
  );
};
