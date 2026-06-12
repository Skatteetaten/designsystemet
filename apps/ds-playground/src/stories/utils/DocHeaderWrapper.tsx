import { JSX, ReactNode } from 'react';

type DocHeaderWrapperProps = {
  componentName: string;
  children: ReactNode;
};

export const DocHeaderWrapper = ({
  componentName,
  children,
}: DocHeaderWrapperProps): JSX.Element => {
  return (
    <div className={'docHeaderWrapper'}>
      <div>{children}</div>
      <img
        src={`illustrations/${componentName}.svg`}
        className={'componentIcon'}
        alt={''}
        aria-hidden
      />
    </div>
  );
};
