import { ReactNode, useEffect, useRef, useState } from 'react';

import { UploadedFile } from './FileUploader.types';
import {
  ScreenReaderAriaLive,
  UseFileUploaderAccessibilityAnnouncerProps,
  UseFileUploaderAccessibilityAnnouncerReturn,
} from './useFileUploaderAccessibilityAnnouncer.types';

// hvor lenge skal statusmeldinger og slettemeldinger være i live region før de fjernes.
const REMOVE_ANNOUNCEMENT_TIMEOUT = 5000;
// delay før en statusmelding blir lest opp for å unngå at melding om fokus leses samtidig
const SHOW_ANNOUNCEMENT_TIMEOUT = 120;

const getUploadedFilesSignature = (uploadedFiles?: UploadedFile[]): string =>
  uploadedFiles?.map((file) => file.id ?? file.name).join('|') ?? '';

export const useFileUploaderAccessibilityAnnouncer = ({
  uploadResult,
  uploadedFiles,
  isUploading,
}: UseFileUploaderAccessibilityAnnouncerProps): UseFileUploaderAccessibilityAnnouncerReturn => {
  const [screenReaderAnnouncement, setScreenReaderAnnouncement] =
    useState<ReactNode>();
  const [screenReaderAriaLive, setScreenReaderAriaLive] =
    useState<ScreenReaderAriaLive>('polite');
  const prevHadUploadResultRef = useRef<boolean>(false);
  const prevIsUploadingRef = useRef<boolean>(!!isUploading);
  const prevUploadedFilesSignatureRef = useRef<string>(
    getUploadedFilesSignature(uploadedFiles)
  );
  const activeAnnouncementSourceRef = useRef<'status' | 'delete' | undefined>(
    undefined
  );
  const statusMessageTimeoutRef = useRef<number | undefined>(undefined);
  const deleteAnnouncementTimeoutRef = useRef<number | undefined>(undefined);
  const uploadedFilesSignature = getUploadedFilesSignature(uploadedFiles);

  const clearStatusMessageTimeout = (): void => {
    clearTimeout(statusMessageTimeoutRef.current);
    statusMessageTimeoutRef.current = undefined;
  };

  const clearDeleteAnnouncementTimeout = (): void => {
    clearTimeout(deleteAnnouncementTimeoutRef.current);
    deleteAnnouncementTimeoutRef.current = undefined;
  };

  useEffect(() => {
    const hasStatusMessage = !!uploadResult?.statusMessage;
    const didUploadResultAppear = !prevHadUploadResultRef.current;
    const didUploadFinish = prevIsUploadingRef.current && !isUploading;
    const hasUploadedFilesChanged =
      prevUploadedFilesSignatureRef.current !== uploadedFilesSignature;
    const shouldAnnounceStatusMessage =
      hasStatusMessage &&
      (didUploadResultAppear || didUploadFinish || hasUploadedFilesChanged);

    if (!hasStatusMessage) {
      clearStatusMessageTimeout();
      if (activeAnnouncementSourceRef.current === 'status') {
        setScreenReaderAnnouncement(undefined);
        activeAnnouncementSourceRef.current = undefined;
      }
    } else if (shouldAnnounceStatusMessage) {
      //NOTE: hvis vi får samme statusmelding to ganger på rad så må live region tømmes først for at skjermleser skal lese den opp på nytt
      clearStatusMessageTimeout();
      clearDeleteAnnouncementTimeout();
      if (activeAnnouncementSourceRef.current === 'status') {
        setScreenReaderAnnouncement(undefined);
      }
      statusMessageTimeoutRef.current = window.setTimeout(() => {
        setScreenReaderAriaLive(
          uploadResult.hasUploadFailed ? 'assertive' : 'polite'
        );
        setScreenReaderAnnouncement(uploadResult.statusMessage);
        activeAnnouncementSourceRef.current = 'status';
        statusMessageTimeoutRef.current = window.setTimeout(() => {
          if (activeAnnouncementSourceRef.current === 'status') {
            setScreenReaderAnnouncement(undefined);
            activeAnnouncementSourceRef.current = undefined;
          }
          statusMessageTimeoutRef.current = undefined;
        }, REMOVE_ANNOUNCEMENT_TIMEOUT);
      }, SHOW_ANNOUNCEMENT_TIMEOUT);
    }

    prevHadUploadResultRef.current = !!uploadResult;
    prevIsUploadingRef.current = !!isUploading;
    prevUploadedFilesSignatureRef.current = uploadedFilesSignature;
  }, [uploadResult, isUploading, uploadedFilesSignature]);

  useEffect(() => {
    return (): void => {
      clearStatusMessageTimeout();
      clearDeleteAnnouncementTimeout();
    };
  }, []);

  const announceDeleteResult = (announcement: string): void => {
    clearStatusMessageTimeout();
    clearDeleteAnnouncementTimeout();
    setScreenReaderAriaLive('polite');
    setScreenReaderAnnouncement(announcement);
    activeAnnouncementSourceRef.current = 'delete';
    deleteAnnouncementTimeoutRef.current = window.setTimeout(() => {
      if (activeAnnouncementSourceRef.current === 'delete') {
        setScreenReaderAnnouncement(undefined);
        activeAnnouncementSourceRef.current = undefined;
      }
      deleteAnnouncementTimeoutRef.current = undefined;
    }, REMOVE_ANNOUNCEMENT_TIMEOUT);
  };

  return {
    screenReaderAnnouncement,
    screenReaderAriaLive,
    announceDeleteResult,
  };
};
