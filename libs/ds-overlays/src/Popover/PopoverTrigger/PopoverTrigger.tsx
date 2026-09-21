import { useContext, JSX } from 'react';

import { useMergeRefs } from '@floating-ui/react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { getDefaultHelpButtonTitle } from '@skatteetaten/ds-core-utils';
import { HelpSimpleSVGpath } from '@skatteetaten/ds-icons';

import { PopoverTriggerProps } from './PopoverTrigger.types';
import { PopoverContext } from '../PopoverContext';

export const PopoverTrigger = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  title,
  ariaDescribedby,
  size,
  svgPath,
  hideOutline = false,
  onClick,
  onBlur,
  onFocus,
}: PopoverTriggerProps): JSX.Element => {
  const titleHelpIcon = title ?? getDefaultHelpButtonTitle();

  const { floatingData, setIsOpen, isOpen } = useContext(PopoverContext);
  const { setReference } = floatingData.refs;
  const mergedRef = useMergeRefs([setReference, ref]);

  return (
    <IconButton
      ref={mergedRef}
      id={id}
      className={className}
      lang={lang}
      data-testid={dataTestId}
      title={titleHelpIcon}
      svgPath={svgPath ?? HelpSimpleSVGpath}
      size={size}
      ariaDescribedby={ariaDescribedby}
      ariaExpanded={isOpen}
      isOutlined={!hideOutline}
      onClick={(event): void => {
        onClick?.(event);
        setIsOpen(!isOpen);
      }}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

PopoverTrigger.displayName = 'PopoverTrigger';
