import { JSX } from 'react';

type DocHeaderWrapperProps = {
  componentName: string;
  children: React.ReactNode;
};

export const DocHeaderWrapper = ({
  componentName,
  children,
}: DocHeaderWrapperProps): JSX.Element => {
  const illustrationBasePath =
    process.env.NODE_ENV === 'development'
      ? '/illustrations/'
      : '/web/designsystemet/illustrations/';

  return (
    <div className={'docHeaderWrapper'}>
      <div>{children}</div>
      <img
        src={`${illustrationBasePath}${componentName}.svg`}
        className={'componentIcon'}
        alt={''}
        aria-hidden
      />
    </div>
  );
};
