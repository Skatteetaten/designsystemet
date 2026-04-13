import { useCallback, useEffect, useSyncExternalStore } from 'react';

import { FormRequiredProps } from '../base-props.types';

export const useMediaQuery = (query: string): boolean => {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener('change', callback);
      return (): void => {
        mediaQueryList.removeEventListener('change', callback);
      };
    },
    [query]
  );

  const getSnapshot = useCallback(
    (): boolean => window.matchMedia(query).matches,
    [query]
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
};

export const useValidateFormRequiredProps = ({
  required,
  showRequiredMark,
}: FormRequiredProps): void => {
  useEffect(() => {
    if (!required && showRequiredMark === true) {
      console.warn(
        `Configuration warning: 'showRequiredMark' is set to 'true' while 'required' is '${required?.valueOf()}'. The required mark will be displayed, but the field will not be mandatory.`
      );
    }
  }, [required, showRequiredMark]);
};
