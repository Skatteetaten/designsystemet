import { forwardRef, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { useMergeRefs } from '@floating-ui/react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { HelpSimpleSVGpath } from '@skatteetaten/ds-icons';

import { PopoverTriggerProps } from './PopoverTrigger.types';
import { PopoverContext } from '../PopoverContext/PopoverContext';

export const PopoverTrigger = forwardRef<
  HTMLButtonElement,
  PopoverTriggerProps
>(
  (
    {
      id,
      className,
      lang,
      'data-testid': dataTestId,
      title,
      ariaDescribedby,
      size,
      svgPath,
      onClick,
      onBlur,
      onFocus,
    },
    ref
  ) => {
    const { t } = useTranslation('Shared', { i18n: dsI18n });

    const titleHelpIcon = title ?? t('shared.Help');

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
        isOutlined
        onClick={(event): void => {
          onClick?.(event);
          setIsOpen(!isOpen);
        }}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    );
  }
);

PopoverTrigger.displayName = 'PopoverTrigger';
