import { JSX, useEffect, useMemo, useRef, useState } from 'react';

import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  UseFloatingReturn,
  useInteractions,
} from '@floating-ui/react';
import { useMediaQuery } from '@skatteetaten/ds-core-utils';

import {
  getPopoverColorDefault,
  getPopoverPositionDefault,
  getPopoverRestoreFocusDefault,
} from './defaults';
import {
  PopoverComponent,
  PopoverPosition,
  PopoverProps,
} from './Popover.types';
import { PopoverContent } from '../PopoverContent/PopoverContent';
import { PopoverContext } from '../PopoverContext/PopoverContext';
import { PopoverTrigger } from '../PopoverTrigger/PopoverTrigger';

export const Popover = ((props: PopoverProps): JSX.Element => {
  const {
    isOpen: controlledOpen,
    position = getPopoverPositionDefault(),
    disableAutoDismiss,
    disableAutoDismissOnMobile,
    children,
    onClose,
  } = props;
  const arrowRef = useRef<HTMLDivElement>(null);

  const [internalOpen, setInternalOpen] = useState<boolean>(false);
  const isOpen = controlledOpen ?? internalOpen;
  const isMobile = !useMediaQuery('(min-width: 640px)');
  const shouldAutoDismiss = Boolean(
    !disableAutoDismiss &&
      (!isMobile || (!disableAutoDismissOnMobile && isMobile))
  );
  const arrowLen = arrowRef.current?.offsetWidth ?? 0;
  const floatingOffset = Math.sqrt(2 * arrowLen ** 2) / 2;
  const kebabize = (str: PopoverPosition): string =>
    str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

  const floatingData = useFloating<HTMLButtonElement>({
    open: isOpen,
    onOpenChange: (open) => {
      setInternalOpen(open);
      if (!open) {
        onClose?.();
      }
    },
    placement: kebabize(position) as UseFloatingReturn['placement'],
    whileElementsMounted: autoUpdate,
    middleware: [
      offset({ mainAxis: floatingOffset, alignmentAxis: -32 }),
      flip(),
      shift(),
      arrow({ element: arrowRef }),
    ],
  });

  const dismiss = useDismiss(floatingData.context, {
    enabled: shouldAutoDismiss,
    ancestorScroll: true,
  });
  const interactions = useInteractions([dismiss]);

  useEffect(() => {
    if (!isOpen || !shouldAutoDismiss) {
      return;
    }
    const handleResize = (): void => {
      setInternalOpen(false);
      onClose?.();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, shouldAutoDismiss, onClose]);

  const value = useMemo(
    () => ({
      floatingData,
      interactions,
      arrowRef,
      isOpen,
      setIsOpen: setInternalOpen,
      isMobile,
      ...props,
    }),
    [
      interactions,
      props,
      floatingData,
      arrowRef,
      isOpen,
      setInternalOpen,
      isMobile,
    ]
  );

  return (
    <PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>
  );
}) as PopoverComponent;

Popover.displayName = 'Popover';

export {
  getPopoverColorDefault,
  getPopoverPositionDefault,
  getPopoverRestoreFocusDefault,
};

Popover.Content = PopoverContent;
Popover.Content.displayName = 'Popover.Content';
Popover.Trigger = PopoverTrigger;
Popover.Trigger.displayName = 'Popover.Trigger';
