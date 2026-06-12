import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

export const waitNoticeDefaultTime = 1200000;
export const waitNoticeDemoTime = 5000;

export interface UseWaitNoticeResult {
  refModalWait: RefObject<HTMLDialogElement | null>;
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  closeDialog: () => void;
  openDialog: () => void;
}

export const useWaitNotice = (): UseWaitNoticeResult => {
  const refModalWait = useRef<HTMLDialogElement>(null);
  const [time, setTime] = useState<number>(waitNoticeDefaultTime);
  const lastActivity = useRef<number>(new Date().getTime());

  const resetTimer = (): void => {
    lastActivity.current = new Date().getTime();
  };

  const closeDialog = (): void => {
    refModalWait.current?.close();
    resetTimer();
  };

  const openDialog = (): void => {
    refModalWait.current?.showModal();
  };

  useEffect(() => {
    const checkExpiredTime = (): void => {
      const timePassed = new Date().getTime() - lastActivity.current;

      if (timePassed >= time) {
        openDialog();
      }
    };

    const intervalId = setInterval(checkExpiredTime, 1000);
    return (): void => clearInterval(intervalId);
  }, [time]);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    window.addEventListener('keydown', resetTimer, { signal });
    window.addEventListener('mousemove', resetTimer, { signal });
    window.addEventListener('scroll', resetTimer, { signal });
    window.addEventListener('resize', resetTimer, { signal });

    return (): void => {
      abortController.abort();
    };
  }, []);

  return {
    refModalWait,
    time,
    setTime,
    closeDialog,
    openDialog,
  };
};
