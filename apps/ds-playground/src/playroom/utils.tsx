import { JSX } from 'react';

import { Canvas } from '@storybook/blocks';
import { createUrl } from 'playroom/utils';
import ts from 'typescript';

const convertReactHooks = (code: string): string => {
  const reactHooks = [
    'useId',
    'useState',
    'useEffect',
    'useRef',
    'useContext',
    'useReducer',
    'useCallback',
    'useMemo',
    'useImperativeHandle',
    'useLayoutEffect',
    'useDebugValue',
  ];

  reactHooks.forEach((hook) => {
    code = code.replace(new RegExp(`${hook}\\(`, 'g'), `React.${hook}(`);
  });

  return code;
};

const convertTSXToJSX = (code: string): string => {
  return ts.transpile(code, {
    jsx: ts.JsxEmit.Preserve,
    target: ts.ScriptTarget.ESNext,
  });
};

const processCode = (code: string): string => {
  const jsx = convertTSXToJSX(extractArrowFunctionContent(code));
  const source = convertReactHooks(jsx);

  return `{
  (() => {
    ${source}
  })()
}`;
};

function extractArrowFunctionContent(str: string): string {
  const regex =
    /render:\s*((\(_args\)|\(args\))\s*:\s*JSX\.Element\s*=>\s*{|function\s+Render\((_args|args)\):\s*JSX\.Element\s*{)/;
  const match = str.match(regex);
  if (!match) return str;

  const startIndex = (match.index ?? 0) + match[0].length;
  let openBraces = 1;
  let endIndex = startIndex;

  while (openBraces > 0 && endIndex < str.length) {
    if (str[endIndex] === '{') {
      openBraces++;
    } else if (str[endIndex] === '}') {
      openBraces--;
    }
    endIndex++;
  }
  return str.slice(startIndex, endIndex - 1).trim();
}

const getPlayroomUrlFromSource = (code: string): string => {
  let url = createUrl({
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:9000'
        : '/web/designsystemet/playroom/index.html',

    code,
    title: 'Playroom',
    paramType: 'search',
  });

  url = url.replace('index.html/', 'index.html');
  return url;
};

export const PlayroomCanvas: typeof Canvas = ({ of }): JSX.Element => {
  return (
    <Canvas
      of={of}
      additionalActions={[
        {
          title: 'Open in Playroom',
          onClick: (): void => {
            const code = processCode(of.parameters.docs.source.originalSource);
            const url = getPlayroomUrlFromSource(code);
            window.open(url, '_blank');
          },
        },
      ]}
    />
  );
};
