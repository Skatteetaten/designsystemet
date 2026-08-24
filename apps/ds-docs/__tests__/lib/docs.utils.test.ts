import type { Root } from 'fumadocs-core/page-tree';

import { getParentTitle } from '../../app/routes/docs.utils';

const pageTree: Root = {
  name: 'Designsystemet',
  children: [
    {
      type: 'folder',
      name: 'Byggeklosser',
      children: [
        {
          type: 'folder',
          name: 'Komponenter',
          index: {
            type: 'page',
            name: 'Komponenter',
            url: '/byggeklosser/komponenter',
          },
          children: [
            {
              type: 'page',
              name: 'Accordion',
              url: '/byggeklosser/komponenter/accordion',
            },
          ],
        },
        {
          type: 'folder',
          name: 'Ikoner',
          children: [
            {
              type: 'page',
              name: 'Systemikoner',
              url: '/byggeklosser/ikoner/systemikoner',
            },
          ],
        },
      ],
    },
  ],
};

describe('getParentTitle', () => {
  it('uses the parent index title from the page tree', () => {
    expect(
      getParentTitle('/byggeklosser/komponenter/accordion', pageTree)
    ).toBe('Komponenter');
  });

  it('uses the folder name when the parent has no index page', () => {
    expect(getParentTitle('/byggeklosser/ikoner/systemikoner', pageTree)).toBe(
      'Ikoner'
    );
  });

  it('uses the next parent for a folder index page', () => {
    expect(getParentTitle('/byggeklosser/komponenter', pageTree)).toBe(
      'Byggeklosser'
    );
  });

  it('returns no parent title for an unknown page', () => {
    expect(getParentTitle('/ukjent', pageTree)).toBeNull();
  });
});
