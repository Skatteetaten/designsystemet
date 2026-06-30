import {
  JSX,
  ReactNode,
  useEffect,
  useEffectEvent,
  useId,
  useState,
} from 'react';

import { useShikiDynamic } from 'fumadocs-core/highlight/shiki/react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { Chips, Tabs } from '@skatteetaten/ds-collections';
import { Card } from '@skatteetaten/ds-content';
import { CodeSVGpath, CopySVGpath, EditSVGpath } from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';

import { ExampleDescriptor, getExamples } from './canvas.utils';
import { skeCodeTheme } from '../../lib/code-theme';
import { openExampleInStackblitz } from '../../lib/stackblitz';

import styles from './canvas.module.scss';

interface CanvasProps {
  children?: ReactNode;
  examplesPath?: string;
}

interface HighlightedCodeProps {
  code: string;
  language: string;
}

const getSelectedExample = (
  examples: ExampleDescriptor[],
  selectedExampleKey: string | null
): ExampleDescriptor | null => {
  return examples.find((example) => example.key === selectedExampleKey) ?? null;
};

const HighlightedCode = ({
  code,
  language,
}: HighlightedCodeProps): ReactNode => {
  return useShikiDynamic(
    () =>
      import('fumadocs-core/highlight').then((mod) => mod.getHighlighter('js')),
    code,
    {
      defaultValue: (
        <pre className={styles.codeBlock}>
          <code>{code}</code>
        </pre>
      ),
      lang: language,
      theme: skeCodeTheme,
      components: {
        pre: (props): JSX.Element => (
          <pre {...props} className={styles.codeBlock} />
        ),
      },
    },
    [code]
  );
};

export const Canvas = ({
  children,
  examplesPath,
}: CanvasProps): JSX.Element => {
  const codePanelId = useId();
  const examples = examplesPath ? getExamples(examplesPath) : [];
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [selectedCodeFileKey, setSelectedCodeFileKey] = useState<string | null>(
    null
  );
  const [selectedExampleKey, setSelectedExampleKey] = useState<string | null>(
    null
  );
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>(
    'idle'
  );
  const [stackblitzStatus, setStackblitzStatus] = useState<'idle' | 'error'>(
    'idle'
  );

  const selectedExample =
    getSelectedExample(examples, selectedExampleKey) ?? examples[0] ?? null;
  const selectedCodeFile =
    selectedExample?.codeFiles.find(
      (file) => file.key === selectedCodeFileKey
    ) ??
    selectedExample?.codeFiles[0] ??
    null;
  const SelectedExampleComponent = selectedExample?.Component;

  const handleSelectedCodeFileChange = useEffectEvent((): void => {
    if (!selectedCodeFile) {
      return;
    }

    setCopyStatus('idle');
  });

  const handleSelectedExampleChange = useEffectEvent((): void => {
    setSelectedCodeFileKey(selectedExample?.codeFiles[0]?.key ?? null);
  });

  useEffect(() => {
    handleSelectedCodeFileChange();
  }, [selectedCodeFile?.key]);

  useEffect(() => {
    handleSelectedExampleChange();
  }, [selectedExample?.key]);

  if (!examplesPath) {
    return <div className={styles.canvas}>{children}</div>;
  }

  if (
    examples.length === 0 ||
    !selectedExample ||
    !selectedCodeFile ||
    !SelectedExampleComponent
  ) {
    return (
      <div className={styles.canvas}>
        <Paragraph>{`Fant ingen eksempler i "${examplesPath}".`}</Paragraph>
      </div>
    );
  }

  const handleCopyCode = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(selectedCodeFile.source);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
  };

  const handleOpenInStackblitz = (): void => {
    try {
      openExampleInStackblitz(selectedExample);
      setStackblitzStatus('idle');
    } catch {
      setStackblitzStatus('error');
    }
  };

  const handleCodeFileChange = (value: string): void => {
    const matchingFile = selectedExample.codeFiles.find(
      (file) => file.tabValue === value
    );

    if (matchingFile) {
      setSelectedCodeFileKey(matchingFile.key);
    }
  };

  return (
    <>
      {examples.length > 1 && (
        <Chips ariaLabel={'Velg eksempel'} className={styles.chips}>
          {examples.map((example) => (
            <Chips.Toggle
              key={example.key}
              size={'small'}
              isSelected={example.key === selectedExample.key}
              onClick={() => setSelectedExampleKey(example.key)}
            >
              {example.label}
            </Chips.Toggle>
          ))}
        </Chips>
      )}
      <Card className={styles.canvas}>
        <div className={styles.example}>
          <SelectedExampleComponent key={selectedExample.key} />
        </div>
        <div className={styles.actions}>
          <IconButton
            svgPath={CopySVGpath}
            title={copyStatus === 'copied' ? 'Koden er kopiert' : 'Kopier kode'}
            onClick={handleCopyCode}
          />

          <IconButton
            svgPath={EditSVGpath}
            title={
              stackblitzStatus === 'error'
                ? 'Kunne ikke åpne i Stackblitz'
                : 'Rediger i Stackblitz'
            }
            onClick={handleOpenInStackblitz}
          />
          <IconButton
            svgPath={CodeSVGpath}
            ariaExpanded={isCodeVisible}
            title={isCodeVisible ? 'Skjul kode' : 'Vis kode'}
            ariaDescribedby={codePanelId}
            onClick={() => setIsCodeVisible((currentValue) => !currentValue)}
          />
        </div>
        {isCodeVisible && (
          <div id={codePanelId}>
            {selectedExample.codeFiles.length > 1 ? (
              <Tabs
                defaultValue={selectedCodeFile.key}
                value={selectedCodeFile.tabValue}
                isMultiline
                onChange={handleCodeFileChange}
              >
                <Tabs.List>
                  {selectedExample.codeFiles.map((file) => (
                    <Tabs.Tab key={file.key} value={file.tabValue}>
                      {file.fileName}
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
                {selectedExample.codeFiles.map((file) => (
                  <Tabs.Panel key={file.key} value={file.tabValue}>
                    <HighlightedCode
                      code={file.source}
                      language={file.language}
                    />
                  </Tabs.Panel>
                ))}
              </Tabs>
            ) : (
              <HighlightedCode
                code={selectedCodeFile.source}
                language={selectedCodeFile.language}
              />
            )}
          </div>
        )}
      </Card>
    </>
  );
};
