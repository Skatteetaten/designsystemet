export interface HistoryState {
  value: string;
  cursorPosition: number;
}

export interface InputHistoryOptions {
  initialValue?: string;
}

export type InitializeFn = (value: string, cursorPosition?: number) => void;
export type PushStateFn = (
  value: string,
  cursorPosition: number,
  input?: HTMLInputElement
) => void;
export type UndoFn = (cursorPosition: number) => HistoryState | null;
export type RedoFn = (cursorPosition: number) => HistoryState | null;
export type UpdateCursorPositionFn = (cursorPosition: number) => void;
export type GetCurrentValueFn = () => string;

export interface InputHistoryReturn {
  initialize: InitializeFn;
  pushState: PushStateFn;
  undo: UndoFn;
  redo: RedoFn;
  updateCursorPosition: UpdateCursorPositionFn;
  getCurrentValue: GetCurrentValueFn;
}
