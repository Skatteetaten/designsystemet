import { ReactNode } from 'react';

import { UploadedFile, UploadResult } from './FileUploader.types';

export type ScreenReaderAriaLive = 'polite' | 'assertive';

export type UseFileUploaderAccessibilityAnnouncerProps = {
  uploadResult?: UploadResult;
  uploadedFiles?: UploadedFile[];
  isUploading?: boolean;
};

export type UseFileUploaderAccessibilityAnnouncerReturn = {
  screenReaderAnnouncement: ReactNode;
  screenReaderAriaLive: ScreenReaderAriaLive;
  announceDeleteResult: (announcement: string) => void;
};
