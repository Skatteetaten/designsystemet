import { useEffect, useState } from 'react';

import { FormRequiredProps } from '../base-props.types';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = (): void => {
      setMatches(media.matches);
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

export const useValidateFormRequiredProps = ({
  required,
  showRequiredMark,
}: FormRequiredProps): void => {
  useEffect(() => {
    if (!required && showRequiredMark === true) {
      throw new Error(
        `Invalid configuration: 'showRequiredMark' cannot be true when 'required' is of type '${required?.valueOf()}'.`
      );
    }
  }, [required, showRequiredMark]);
};
