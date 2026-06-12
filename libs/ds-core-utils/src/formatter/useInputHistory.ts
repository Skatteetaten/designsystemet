import { useRef } from 'react';

import type {
  GetCurrentPositionFn,
  GetCurrentValueFn,
  HistoryState,
  InitializeFn,
  InputHistoryOptions,
  InputHistoryReturn,
  PushStateFn,
  RedoFn,
  UndoFn,
  UpdateCursorPositionFn,
} from './useInputHistory.types';

export const useInputHistory = (
  options: InputHistoryOptions = {}
): InputHistoryReturn => {
  const { initialValue = '' } = options;

  const historyRef = useRef<{
    past: HistoryState[];
    future: HistoryState[];
    current: HistoryState;
  }>({
    past: [],
    future: [],
    current: {
      value: initialValue,
      cursorPosition: 0,
    },
  });

  const initialize: InitializeFn = (value, cursorPosition = 0) => {
    if (!historyRef.current.past.length && !historyRef.current.future.length) {
      historyRef.current.current = { value, cursorPosition };
    }
  };

  const pushState: PushStateFn = (value, cursorPosition, input) => {
    const previousValue = historyRef.current.current.value;
    const previousPosition = input
      ? input.selectionEnd || 0
      : historyRef.current.current.cursorPosition;

    if (previousValue !== value) {
      historyRef.current = {
        past: [
          ...historyRef.current.past,
          {
            value: previousValue,
            cursorPosition: previousPosition,
          },
        ],
        future: [],
        current: { value, cursorPosition },
      };
    }
  };

  const undo: UndoFn = (cursorPosition) => {
    if (historyRef.current.past.length === 0) {
      return null;
    }

    //TODO: i dev henter vi cursorPosition fra input i stedet for historyRef her
    const currentState = {
      value: historyRef.current.current.value,
      cursorPosition,
    };
    const previousState = historyRef.current.past.pop();

    if (!previousState) {
      return null;
    }

    historyRef.current = {
      past: [...historyRef.current.past],
      future: [currentState, ...historyRef.current.future],
      current: previousState,
    };

    return previousState;
  };

  const redo: RedoFn = (cursorPosition) => {
    if (historyRef.current.future.length === 0) {
      return null;
    }

    const currentState = {
      value: historyRef.current.current.value,
      cursorPosition,
    };
    const nextState = historyRef.current.future.shift();

    if (!nextState) {
      return null;
    }

    historyRef.current = {
      past: [...historyRef.current.past, currentState],
      future: [...historyRef.current.future],
      current: nextState,
    };

    return nextState;
  };

  const updateCursorPosition: UpdateCursorPositionFn = (cursorPosition) => {
    historyRef.current.current.cursorPosition = cursorPosition;
  };

  const getCurrentValue: GetCurrentValueFn = () =>
    historyRef.current.current.value;

  const getCurrentPosition: GetCurrentPositionFn = () =>
    historyRef.current.current.cursorPosition;

  return {
    initialize,
    pushState,
    undo,
    redo,
    updateCursorPosition,
    getCurrentValue,
    getCurrentPosition,
  };
};
