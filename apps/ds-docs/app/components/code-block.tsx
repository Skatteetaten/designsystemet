import {
  ChangeEventHandler,
  JSX,
  ReactElement,
  ReactNode,
  isValidElement,
} from 'react';

import { useShikiDynamic } from 'fumadocs-core/highlight/shiki/react';

import { Card } from '@skatteetaten/ds-content';
import { Select } from '@skatteetaten/ds-forms';
import { Heading } from '@skatteetaten/ds-typography';

import { CopyButton } from './copy-button';
import { skeCodeTheme } from '../../lib/code-theme';

import styles from './code-block.module.scss';

interface CodeBlockProps {
  code: string;
  filename?: string;
  fileSelect?: CodeBlockFileSelectProps;
  language: string;
}

interface CodeBlockFileSelectProps {
  options: Array<{
    label: string;
    value: string;
  }>;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

interface MdxCodeProps {
  children?: ReactNode;
  className?: string;
}

interface MdxPreProps {
  filename?: string;
  children?: ReactNode;
}

// MDX kan sende kodelinjer som nøstede ReactNode-strukturer.
// Vi flater dem ut rekursivt til ren tekst.
const extractText = (node: ReactNode): string => {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return '';
  }

  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(extractText).join('');
  }

  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    return extractText(element.props.children);
  }

  return '';
};

const CodeBlockPre = (props: JSX.IntrinsicElements['pre']): JSX.Element => (
  <pre
    aria-label={'Kodevisning'}
    role={'region'}
    {...props}
    className={styles.codeBlock}
  />
);

export const CodeBlock = ({
  code,
  filename,
  fileSelect,
  language,
}: CodeBlockProps): JSX.Element => {
  const highlighted = useShikiDynamic(
    () =>
      import('fumadocs-core/highlight').then((mod) => mod.getHighlighter('js')),
    code,
    {
      defaultValue: (
        <CodeBlockPre>
          <code>{code}</code>
        </CodeBlockPre>
      ),
      lang: language,
      theme: skeCodeTheme,
      components: {
        pre: CodeBlockPre,
      },
    },
    [code, language]
  );

  return (
    <Card className={styles.codeCard}>
      <div className={styles.header}>
        <div className={styles.label}>
          {fileSelect ? (
            <Select
              label={'Velg fil'}
              value={fileSelect.value}
              hideLabel
              hidePlaceholder
              onChange={fileSelect.onChange}
            >
              {fileSelect.options.map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          ) : (
            <Heading as={'h3'} level={5} className={styles.filename}>
              {filename ?? language}
            </Heading>
          )}
        </div>
        <CopyButton
          copyText={code}
          title={'Kopier kode'}
          copiedTitle={'Koden er kopiert'}
        />
      </div>
      {highlighted}
    </Card>
  );
};

export const InlineCode = ({ children }: MdxCodeProps): JSX.Element => (
  <code className={styles.inlineCode}>{children}</code>
);

// MDX renderer passer kodeblokker som <pre><code class="language-xxx">...</code></pre>
// MdxCode kjører for både inline-kode og <code>-barn inni <pre>.
// Når den er inni <pre> (har language-klasse), lar vi MdxPre styre rendringen.
export const MdxCode = ({ children, className }: MdxCodeProps): JSX.Element => {
  if (className?.startsWith('language-')) {
    return <code className={className}>{children}</code>;
  }

  return <InlineCode>{children}</InlineCode>;
};

export const MdxPre = ({ filename, children }: MdxPreProps): JSX.Element => {
  if (!isValidElement(children)) {
    return <pre className={styles.codeBlock}>{children}</pre>;
  }

  const child = children as ReactElement<MdxCodeProps>;
  const className = child.props.className ?? '';
  const language = className.startsWith('language-')
    ? className.slice('language-'.length)
    : 'javascript';
  const code = extractText(child.props.children).replace(/\n$/, '');

  return <CodeBlock code={code} filename={filename} language={language} />;
};
