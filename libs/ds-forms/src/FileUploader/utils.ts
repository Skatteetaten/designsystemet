import React, { ChangeEvent, DragEvent } from 'react';

const dragEvents = ['dragover', 'dragenter', 'drop'];
export function isDragEvent(
  event: ChangeEvent<HTMLInputElement> | DragEvent<HTMLButtonElement>
): event is DragEvent<HTMLButtonElement> {
  return dragEvents.includes(event.type);
}

export function isChangeEvent(
  event: ChangeEvent<HTMLInputElement> | DragEvent<HTMLButtonElement>
): event is ChangeEvent<HTMLInputElement> {
  return Object.prototype.hasOwnProperty.call(event, 'target');
}

export const getFiles = (
  event:
    | React.ChangeEvent<HTMLInputElement>
    | React.DragEvent<HTMLButtonElement>
): Array<File> => {
  if (isDragEvent(event) && event.dataTransfer) {
    const dt = event.dataTransfer;

    if (dt.files && dt.files.length) {
      return Array.from(dt.files);
    }
  } else if (isChangeEvent(event) && event.target.files) {
    return Array.from(event.target.files);
  }
  return [];
};

const nonWordCharacterRegexp = /\W/g;
const fileNameRegex = /\.(?=[^.]+$)/;
export const normalize = (
  file: File,
  invalidCharacterRegexp?: RegExp
): string => {
  const nameList = file.name.split(fileNameRegex);
  const fileName = nameList[0];
  const normalizedName = fileName.replace(
    invalidCharacterRegexp || nonWordCharacterRegexp,
    '_'
  );
  return normalizedName.concat('.', nameList[1]);
};
