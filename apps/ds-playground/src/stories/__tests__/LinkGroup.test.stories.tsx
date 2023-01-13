import {
  LinkGroup,
  LinkGroupProps,
  linkGroupVariantArr,
  getLinkGroupVariantDefault,
} from '@skatteetaten/ds-buttons';
import { CalendarSVGpath } from '@skatteetaten/ds-icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Page } from 'puppeteer';

import {
  screenShotOptions,
  wrapper,
} from './testUtils/puppeteer.testing.utils';

const testSnapshot = async (page: Page): Promise<void> => {
  const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
  expect(innerHtml).toMatchSnapshot();

  const image = await page.screenshot(screenShotOptions);
  expect(image).toMatchImageSnapshot();
};

export default {
  component: LinkGroup,
  title: 'Tests / LinkGroup',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    hasSpacing: { table: { disable: true } },
    variant: {
      table: { disable: true },
      options: [...linkGroupVariantArr],
      control: 'inline-radio',
    },
  },
} as ComponentMeta<typeof LinkGroup>;

const Template: ComponentStory<typeof LinkGroup> = (args) => (
  <div className={'noTransition'} data-test-block>
    <LinkGroup {...args} />
  </div>
);

const defaultArgs: LinkGroupProps = {
  variant: getLinkGroupVariantDefault(),
  children: [
    <LinkGroup.Link key={'linkGroupLink_1'} href={'#root'}>
      {'Er du pendler?'}
    </LinkGroup.Link>,
    <LinkGroup.Link key={'linkGroupLink_2'} href={'#root'}>
      {'Pendler du mye?'}
    </LinkGroup.Link>,
    <LinkGroup.Link key={'linkGroupLink_3'} href={'#root'}>
      {'Pendler du dagen lang?'}
    </LinkGroup.Link>,
  ],
};

// Når LinkGroup har en ref, så får dom a elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLUListElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ...WithRef.argTypes,
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    const refId = await page.$eval(`${wrapper} > ul`, (el) => el.id);
    expect(refId).toBe('dummyIdForwardedFromRef');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når LinkGroup har en id, så har ul-element id
export const WithId = Template.bind({});
WithId.storyName = 'With Id (FA2)';
WithId.args = {
  ...defaultArgs,
  id: 'htmlId',
};
WithId.argTypes = {
  ...WithId.argTypes,
  id: { table: { disable: false } },
};
WithId.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    const id = await page.$eval(`${wrapper} > ul`, (el) =>
      el.getAttribute('id')
    );
    expect(id).toBe('htmlId');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når LinkGroup har en custom CSS, så vises custom stil
export const WithCustomCss = Template.bind({});
WithCustomCss.storyName = 'With Custom CSS (FA3)';
WithCustomCss.args = {
  ...defaultArgs,
  className: 'dummyClassname',
};
WithCustomCss.argTypes = {
  ...WithCustomCss.argTypes,
  className: { table: { disable: false } },
};
WithCustomCss.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    const classNameAttribute = await page.$eval(`${wrapper}> ul`, (el) =>
      el.getAttribute('class')
    );
    expect(classNameAttribute).toContain('dummyClassname');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();
  },
};

// Når LinkGroup har en lang, så har ul-element lang
export const WithLang = Template.bind({});
WithLang.storyName = 'With Lang (FA4)';
WithLang.args = {
  ...defaultArgs,
  lang: 'nb',
};
WithLang.argTypes = {
  ...WithLang.argTypes,
  lang: { table: { disable: false } },
};
WithLang.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    const langAttribute = await page.$eval(`${wrapper} > ul`, (el) =>
      el.getAttribute('lang')
    );
    expect(langAttribute).toBe('nb');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når LinkGroup har dataTestid, så har ul-elementet data-testid satt
export const WithDataTestid = Template.bind({});
WithDataTestid.storyName = 'With DataTestid (FA5)';
WithDataTestid.args = {
  ...defaultArgs,
  'data-testid': '123ID',
};
WithDataTestid.argTypes = {
  ...WithDataTestid.argTypes,
  'data-testid': { table: { disable: false } },
};
WithDataTestid.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    const dataTestid = await page.$eval(`${wrapper} > ul`, (el) =>
      el.getAttribute('data-testid')
    );
    expect(dataTestid).toBe('123ID');

    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();
  },
};

// Når LinkGroup instansieres, så vises default-variant list og rendrer riktig ulike tilstander (imageSnapshot viser kun ulike tilstander av listItem og ikke link)
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults Variant List (A1 delvis, A4 delvis, A5)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  children: { table: { disable: false } },
};
Defaults.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();

    const liElement = await page.$(`${wrapper} > ul > li:first-child`);

    await liElement?.hover();
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    // active
    const cdp = await page.target().createCDPSession();
    const docNodeId = (await cdp.send('DOM.getDocument')).root.nodeId;
    const nodeId = (
      await cdp.send('DOM.querySelector', {
        nodeId: docNodeId,
        selector: `${wrapper} > ul > li:first-child`,
      })
    ).nodeId;

    await cdp.send('CSS.enable');
    await cdp.send('CSS.forcePseudoState', {
      nodeId: nodeId,
      forcedPseudoClasses: ['active'],
    });

    const imageActive = await page.screenshot(screenShotOptions);
    expect(imageActive).toMatchImageSnapshot();
  },
};

// Når LinkGroup instansieres, så vises variant anchors og rendrer riktig ulike tilstander (imageSnapshot viser kun ulike tilstander av listItem og ikke link)
export const VariantAnchors = Template.bind({});
VariantAnchors.storyName = 'Variant Anchors (A1 delvis, A4 delvis, A6)';
VariantAnchors.args = {
  ...defaultArgs,
  variant: 'anchors',
};
VariantAnchors.argTypes = {
  ...VariantAnchors.argTypes,
  variant: { table: { disable: false } },
};
VariantAnchors.parameters = {
  async puppeteerTest(page: Page): Promise<void> {
    const innerHtml = await page.$eval(wrapper, (el) => el.innerHTML);
    expect(innerHtml).toMatchSnapshot();

    const image = await page.screenshot(screenShotOptions);
    expect(image).toMatchImageSnapshot();

    const liElement = await page.$(`${wrapper} > ul > li:first-child`);

    await liElement?.hover();
    const imageHovered = await page.screenshot(screenShotOptions);
    expect(imageHovered).toMatchImageSnapshot();

    // active
    const cdp = await page.target().createCDPSession();
    const docNodeId = (await cdp.send('DOM.getDocument')).root.nodeId;
    const nodeId = (
      await cdp.send('DOM.querySelector', {
        nodeId: docNodeId,
        selector: `${wrapper} > ul > li:first-child`,
      })
    ).nodeId;

    await cdp.send('CSS.enable');
    await cdp.send('CSS.forcePseudoState', {
      nodeId: nodeId,
      forcedPseudoClasses: ['active'],
    });

    const imageActive = await page.screenshot(screenShotOptions);
    expect(imageActive).toMatchImageSnapshot();
  },
};

// Når LinkGroup har en veldig lang tekst, valgfritt ikon og/eller external ikon så skal teksten og ikon ha hengende innrykk
export const WithLongTextAndIcons = Template.bind({});
WithLongTextAndIcons.storyName = 'With Long Text And Icons (A2)';
WithLongTextAndIcons.args = {
  ...defaultArgs,
  children: [
    <LinkGroup.Link key={'linkGroupLink_1'} href={'#root'} isExternal>
      {
        'Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert uansett om ikon eller ikke og får et hengende innrykk.'
      }
    </LinkGroup.Link>,
    <LinkGroup.Link
      key={'linkGroupLink_2'}
      href={'#root'}
      svgPath={CalendarSVGpath}
    >
      {
        'Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert uansett om ikon eller ikke og får et hengende innrykk.'
      }
    </LinkGroup.Link>,
  ],
};
WithLongTextAndIcons.argTypes = {
  ...WithLongTextAndIcons.argTypes,
  children: { table: { disable: false } },
};
WithLongTextAndIcons.parameters = {
  puppeteerTest: testSnapshot,
};

const TemplateWithTwoLinkGroups: ComponentStory<typeof LinkGroup> = (args) => (
  <div data-test-block>
    <LinkGroup {...args} />
    <LinkGroup {...args} />
  </div>
);

// Når LinkGroup har spacing, så får gruppen en margin under gruppen
export const WithSpacing = TemplateWithTwoLinkGroups.bind({});
WithSpacing.storyName = 'With Spacing (A3)';
WithSpacing.args = {
  ...defaultArgs,
  hasSpacing: true,
};
WithSpacing.argTypes = {
  ...WithSpacing.argTypes,
  hasSpacing: { table: { disable: false } },
};
WithSpacing.parameters = {
  puppeteerTest: testSnapshot,
};
