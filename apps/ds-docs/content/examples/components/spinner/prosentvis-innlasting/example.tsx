import { type ReactElement, useEffect, useRef, useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Spinner } from '@skatteetaten/ds-progress';

export default function SpinnerPercentCompleteExample(): ReactElement {
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const interval = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (progress === 100 && interval.current) {
      clearInterval(interval.current);
      interval.current = undefined;
    }
  }, [progress]);

  useEffect(() => {
    return (): void => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  return (
    <>
      <Button
        onClick={(): void => {
          setProgress(0);
          setShowSpinner(!showSpinner);

          if (interval.current) {
            clearInterval(interval.current);
            interval.current = undefined;
          }

          interval.current = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
          }, 1000);
        }}
      >
        {'Toggle spinner'}
      </Button>

      {showSpinner && (
        <Spinner
          percentComplete={progress}
          className={'bottomSpacingXL'}
          size={'large'}
          color={'blue'}
          titlePosition={'right'}
        />
      )}
    </>
  );
}
