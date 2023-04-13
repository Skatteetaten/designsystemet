import { forwardRef } from 'react';

export const MessageBar = forwardRef<HTMLDivElement>((): JSX.Element => {
  return <div>{'Welcome to MessageBar!'}</div>;
});
MessageBar.displayName = 'MessageBar';
