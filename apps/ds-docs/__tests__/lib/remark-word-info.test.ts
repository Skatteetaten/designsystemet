import { remarkWordInfo } from '../../lib/remark-word-info';

type WordInfoTransform = ReturnType<typeof remarkWordInfo>;
type WordInfoTree = Parameters<WordInfoTransform>[0];

describe('remarkWordInfo', () => {
  test('replaces marked text with a WordInfoTerm element', () => {
    const transform = remarkWordInfo();
    const tree: WordInfoTree = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            { type: 'text', value: 'Et ' },
            {
              type: 'link',
              url: 'wordinfo:visuell-stoy',
              children: [{ type: 'text', value: 'visuell støy' }],
            },
            { type: 'text', value: ' i tekst.' },
          ],
        },
      ],
    };

    transform(tree, { path: 'content/docs/test.mdx' });

    const paragraph = tree.children[0];

    if (!('children' in paragraph)) {
      throw new Error('Forventet at paragrafnoden har children.');
    }

    expect(paragraph.children).toEqual([
      { type: 'text', value: 'Et ' },
      {
        type: 'mdxJsxTextElement',
        name: 'WordInfoTerm',
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'wordInfoKey',
            value: 'visuell-stoy',
          },
        ],
        children: [{ type: 'text', value: 'visuell støy' }],
      },
      { type: 'text', value: ' i tekst.' },
    ]);
  });

  test('throws when an explanation is missing', () => {
    const transform = remarkWordInfo();
    const tree: WordInfoTree = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            { type: 'text', value: 'Et ' },
            {
              type: 'link',
              url: 'wordinfo:ukjent-begrep',
              children: [{ type: 'text', value: 'ukjent begrep' }],
            },
            { type: 'text', value: '.' },
          ],
        },
      ],
    };

    expect(() => transform(tree, { path: 'content/docs/test.mdx' })).toThrow(
      'Fant ikke WordInfo-forklaring for "ukjent begrep" (ukjent-begrep) i content/docs/test.mdx. Legg til ukjent-begrep.mdx i apps/ds-docs/content/word-info/.'
    );
  });

  test('throws when a wordinfo link is missing a key', () => {
    const transform = remarkWordInfo();
    const tree: WordInfoTree = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'link',
              url: 'wordinfo:',
              children: [{ type: 'text', value: 'visuell støy' }],
            },
          ],
        },
      ],
    };

    expect(() => transform(tree, { path: 'content/docs/test.mdx' })).toThrow(
      'WordInfo-lenken mangler nøkkel i content/docs/test.mdx. Bruk formatet [tekst](wordinfo:filnavn).'
    );
  });
});
