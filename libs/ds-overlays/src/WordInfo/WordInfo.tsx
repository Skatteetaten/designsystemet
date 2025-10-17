import { JSX } from 'react';

import { getWordInfoHasIconDefault } from './defaults';
import { WordInfoComponent, WordInfoProps } from './WordInfo.types';
import { Popover } from '../Popover/Popover';
import { WordInfoContent } from '../WordInfoContent/WordInfoContent';
import { WordInfoTrigger } from '../WordInfoTrigger/WordInfoTrigger';

export const WordInfo = ((props: WordInfoProps): JSX.Element => {
  return <Popover {...props} />;
}) as WordInfoComponent;

WordInfo.displayName = 'WordInfo';

WordInfo.Content = WordInfoContent;
WordInfo.Content.displayName = 'WordInfo.Content';
WordInfo.Trigger = WordInfoTrigger;
WordInfo.Trigger.displayName = 'WordInfo.Trigger';
