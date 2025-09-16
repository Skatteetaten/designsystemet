import { JSX } from 'react';

import { TermTipComponent, TermTipProps } from './TermTip.types';
import { TermTipContent } from './TermTipContent';
import { TermTipTerm } from './TermTipTerm';
import { Popover } from '../Popover/Popover';

export const TermTip = ((props: TermTipProps): JSX.Element => {
  return <Popover {...props} />;
}) as TermTipComponent;

TermTip.displayName = 'TermTip';

TermTip.Content = TermTipContent;
TermTip.Content.displayName = 'TermTip.Content';
TermTip.Term = TermTipTerm;
TermTip.Term.displayName = 'TermTip.Term';
