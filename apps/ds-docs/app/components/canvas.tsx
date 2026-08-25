import {
  ChangeEvent,
  JSX,
  ReactNode,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { Chips, OpenClose } from '@skatteetaten/ds-collections';
import { Card } from '@skatteetaten/ds-content';
import { EditSVGpath, ExternalSVGpath } from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';

import { ExampleDescriptor, getExamples } from './canvas.utils';
import { CodeBlock } from './code-block';
import { getExampleUrl } from '../../lib/example-url';
import { openExampleInStackblitz } from '../../lib/stackblitz';

import styles from './canvas.module.scss';

interface CanvasProps {
  children?: ReactNode;
  examplesPath?: string;
}

const MIN_IFRAME_HEIGHT = 200;

const getSelectedExample = (
  examples: ExampleDescriptor[],
  selectedExampleKey: string | null
): ExampleDescriptor | null => {
  return examples.find((example) => example.key === selectedExampleKey) ?? null;
};

const capitalizeFirstLetter = (text: string): string =>
  `${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`;

export const Canvas = ({
  children,
  examplesPath,
}: CanvasProps): JSX.Element => {
  const examples = examplesPath ? getExamples(examplesPath) : [];
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [selectedCodeFileKey, setSelectedCodeFileKey] = useState<string | null>(
    null
  );
  const [selectedExampleKey, setSelectedExampleKey] = useState<string | null>(
    null
  );

  const [stackblitzStatus, setStackblitzStatus] = useState<'idle' | 'error'>(
    'idle'
  );
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const loadedIframeUrlRef = useRef<string | null>(null);

  const selectedExample =
    getSelectedExample(examples, selectedExampleKey) ?? examples[0] ?? null;
  const selectedCodeFile =
    selectedExample?.codeFiles.find(
      (file) => file.key === selectedCodeFileKey
    ) ??
    selectedExample?.codeFiles[0] ??
    null;

  const handleSelectedExampleChange = useEffectEvent((): void => {
    setSelectedCodeFileKey(selectedExample?.codeFiles[0]?.key ?? null);
  });

  useEffect(() => {
    handleSelectedExampleChange();
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedExample?.key]);

  // Bytt iframe-innhold via location.replace, slik at foreldresidens historikk
  // ikke fylles opp av eksempelbytter.
  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe || !selectedExample) {
      return;
    }

    const nextUrl = getExampleUrl(selectedExample.urlPath, true);

    if (loadedIframeUrlRef.current === nextUrl) {
      return;
    }

    // Nullstill høyden med en gang slik at forrige eksempels høyde ikke
    // vises mens det nye eksempelet lastes inn.
    iframe.style.height = `${MIN_IFRAME_HEIGHT}px`;

    if (loadedIframeUrlRef.current && iframe.contentWindow) {
      iframe.contentWindow.location.replace(nextUrl);
    } else {
      iframe.setAttribute('src', nextUrl);
    }

    loadedIframeUrlRef.current = nextUrl;
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedExample?.urlPath]);

  // Observer iframe-innholdets høyde og oppdater iframen slik at vi slipper
  // dobbel scroll. Fungerer fordi iframen er same-origin.
  const handleIframeLoad = (): void => {
    const iframe = iframeRef.current;
    const doc = iframe?.contentDocument;
    const root = doc?.documentElement;

    if (!iframe || !root) {
      return;
    }

    resizeObserverRef.current?.disconnect();

    const applyHeight = (): void => {
      // Measure against the minimum viewport so a previously larger iframe
      // height does not keep contributing to scrollHeight.
      iframe.style.height = `${MIN_IFRAME_HEIGHT}px`;
      const nextHeight = Math.max(MIN_IFRAME_HEIGHT, root.scrollHeight);
      iframe.style.height = `${nextHeight}px`;
    };

    const observer = new ResizeObserver(applyHeight);
    observer.observe(root);
    resizeObserverRef.current = observer;
    applyHeight();
  };

  useEffect(() => {
    return (): void => {
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
    };
  }, []);

  if (!examplesPath) {
    return <div className={styles.canvas}>{children}</div>;
  }

  if (examples.length === 0 || !selectedExample || !selectedCodeFile) {
    return (
      <div className={styles.canvas}>
        <Paragraph>{`Fant ingen eksempler i "${examplesPath}".`}</Paragraph>
      </div>
    );
  }

  const handleOpenInStackblitz = (): void => {
    try {
      openExampleInStackblitz(selectedExample);
      setStackblitzStatus('idle');
    } catch {
      setStackblitzStatus('error');
    }
  };

  const handleOpenInNewTab = (): void => {
    const exampleUrl = getExampleUrl(selectedExample.urlPath);
    window.open(exampleUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCodeFileChange = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    const matchingFile = selectedExample.codeFiles.find(
      (file) => file.tabValue === event.target.value
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
              {capitalizeFirstLetter(example.label)}
            </Chips.Toggle>
          ))}
        </Chips>
      )}
      <Card className={styles.canvas}>
        <iframe
          ref={iframeRef}
          className={styles.example}
          title={selectedExample.label}
          loading={'lazy'}
          onLoad={handleIframeLoad}
        />
        <div className={styles.actions}>
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
            svgPath={ExternalSVGpath}
            title={'Åpne i ny fane'}
            onClick={handleOpenInNewTab}
          />
        </div>
      </Card>
      <OpenClose
        className={styles.codeSection}
        title={isCodeVisible ? 'Skjul kode' : 'Vis kode'}
        size={'medium'}
        iconPosition={'right'}
        isExpanded={isCodeVisible}
        onClick={() => setIsCodeVisible((prev) => !prev)}
      >
        {selectedExample.codeFiles.length > 1 ? (
          <CodeBlock
            code={selectedCodeFile.source}
            fileSelect={{
              options: selectedExample.codeFiles.map((file) => ({
                label: file.fileName,
                value: file.tabValue,
              })),
              value: selectedCodeFile.tabValue,
              onChange: handleCodeFileChange,
            }}
            language={selectedCodeFile.language}
          />
        ) : (
          <CodeBlock
            code={selectedCodeFile.source}
            filename={selectedCodeFile.fileName}
            language={selectedCodeFile.language}
          />
        )}
      </OpenClose>
    </>
  );
};
