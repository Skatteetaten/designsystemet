import React, { JSX, useMemo, useState } from 'react';

import {
  dsI18n,
  getAutoCompletePropDescription,
  getCommonAutoCompleteDefault,
  getCommonFormVariantDefault,
} from '@skatteetaten/ds-core-utils';
import {
  getSearchFieldHasSearchButtonIconDefault,
  searchArrSize,
  SearchField,
  searchInList,
} from '@skatteetaten/ds-forms';
import { Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: SearchField,
  title: 'Komponenter/SearchField',
  argTypes: {
    // Props
    classNames: { table: { category: category.props } },
    clearButtonTitle: { table: { category: category.props } },
    searchButtonTitle: { table: { category: category.props } },
    results: { table: { category: category.props } },
    hasSearchButtonIcon: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getSearchFieldHasSearchButtonIconDefault().toString(),
        },
      },
    },
    defaultValue: { table: { category: category.props } },
    description: { table: { category: category.props } },
    label: { table: { category: category.props } },
    helpSvgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: {
        category: category.props,
        defaultValue: { summary: 'HelpSimpleSVGpath' },
      },
    },
    helpText: { table: { category: category.props } },
    hideLabel: { table: { category: category.props } },
    titleHelpSvg: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('Shared:shared.Help') },
      },
    },
    variant: {
      options: [...searchArrSize],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getCommonFormVariantDefault() },
      },
    },
    // HTML
    accessKey: {
      table: { category: category.htmlAttribute },
    },
    autoComplete: {
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: getCommonAutoCompleteDefault() },
        type: { summary: 'string' },
      },
      type: 'string',
      description: getAutoCompletePropDescription(),
    },
    disabled: { table: { category: category.htmlAttribute } },
    form: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    placeholder: {
      table: { category: category.htmlAttribute },
    },
    readOnly: { table: { category: category.htmlAttribute } },
    value: {
      control: 'text',
      table: { category: category.htmlAttribute },
    },
    // Events
    onBlur: { ...htmlEventDescription },
    onChange: { ...htmlEventDescription },
    onClear: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
    onHelpToggle: { table: { category: category.event } },
    onResultClick: { ...htmlEventDescription },
    onSearch: { ...htmlEventDescription },
    onSearchClick: { ...htmlEventDescription },
  },
  args: {
    label: 'Søk etter grønnsaker',
  },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Preview: Story = {};

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const [simpleValue, setSimpleValue] = useState<string>('');

    const options = useMemo(() => {
      return [
        {
          title: 'Agurk',
          description:
            'En forfriskende grønnsak som er flott i salater eller som en sunn snack.',
        },
        {
          title: 'Artisjokk',
          description:
            'Den spiselige bunnen av artisjokkblomsten, ofte tilberedt ved å koke eller dampe.',
        },
        {
          title: 'Bladbete',
          description:
            'Bladene og stilken til denne grønnsaken kan brukes i matlaging.',
        },
        {
          title: 'Endivie',
          description:
            'En type salat med litt bitre blader, perfekt for salatblandinger.',
        },
        {
          title: 'Ert',
          description:
            'Sukkererter er en deilig grønnsak som kan spises rå eller lett kokt.',
        },
        {
          title: 'Fennikel',
          description:
            'Denne knollgrønnsaken har en mild anissmak og kan brukes i supper eller salater.',
        },
        {
          title: 'Grønnkål',
          description:
            'En næringsrik bladgrønnsak som kan stekes, kokes eller brukes i smoothies.',
        },
        {
          title: 'Hvitløk',
          description:
            'Selv om den teknisk sett er en løk, brukes hvitløk ofte som en smakstilsetning i matlaging.',
        },
        {
          title: 'Jordskokk',
          description:
            'En rotgrønnsak med nøtteaktig smak, også kjent som "jordskollar" eller "topinambur".',
        },
        {
          title: 'Mangold',
          description:
            'En bladgrønnsak med røde eller gule stilker, ligner litt på bete.',
        },
        {
          title: 'Pastinakk',
          description:
            'En søt og aromatisk rotgrønnsak, flott i supper og stuinger.',
        },
        {
          title: 'Purreløk',
          description:
            'En mild løkvariant med lange, grønne stilker, ideell for supper og sauser.',
        },
        {
          title: 'Rosenkål',
          description:
            'Små, tette kålhoder som blir søtere når de blir kokt eller stekt.',
        },
        {
          title: 'Sellerirot',
          description:
            'En rotgrønnsak med en karakteristisk smak, ofte brukt i supper og gryteretter.',
        },
        {
          title: 'Spinat',
          description:
            'En næringsrik bladgrønnsak som kan brukes i salater, omeletter eller smoothies.',
        },
        {
          title: 'Sukkermais',
          description:
            'Søte maiskolber som kan grilles, kokes eller spises rå.',
        },
        {
          title: 'Tomat',
          description:
            'Teknisk sett en frukt, men ofte brukt som en grønnsak i matlaging.',
        },
        {
          title: 'Vårløk',
          description:
            'Tynne, grønne løk med mild smak, flott som garnityr eller i salater.',
        },
        {
          title: 'Sjalottløk',
          description:
            'Sjalottløk har en mild og søt smak, og er flott i sauser og dressinger.',
        },
        {
          title: 'Rødløk',
          description:
            'Rødløk gir en fin farge og en litt skarp smak til salater og sandwicher.',
        },
        {
          title: 'Sølvløk',
          description:
            'Sølvløk er små, oftest helt runde og hvite kepaløk med mild smak. De brukes rå i salater eller syltet, gjerne som pickles.',
        },
        {
          title: 'Zucchini',
          description:
            'En type squash med mykt skall, perfekt for steking eller grilling.',
        },
        {
          title: 'Østerssopp',
          description: 'En deilig soppvariant som kan brukes i ulike retter.',
        },
        {
          title: 'Aubergine',
          description:
            'Også kjent som eggplante, flott for grilling eller steking.',
        },
        {
          title: 'Blomkål',
          description:
            'En hvit blomstrende grønnsak som kan brukes i alt fra gratenger til risotto.',
        },
        {
          title: 'Cherrytomat',
          description:
            'Små, søte tomater som er perfekte for salater eller snacks.',
        },
        {
          title: 'Dill',
          description:
            'En urt med delikat smak, ofte brukt i sauser og dressinger.',
        },
        {
          title: 'Gresskar',
          description:
            'En stor, oransje grønnsak som kan brukes i supper eller bakverk.',
        },
        {
          title: 'Hodekål',
          description:
            'En tett, rund kål som er flott for surkål eller coleslaw.',
        },
        {
          title: 'Ingefær',
          description:
            'En rotgrønnsak med krydret smak, brukt i matlaging og te.',
        },
      ];
    }, []);

    const results = useMemo(
      () => (value.length >= 3 ? searchInList(options, value) : undefined),
      [value, options]
    );

    const simpleResults = useMemo(() => {
      return simpleValue.length >= 3
        ? searchInList(
            options.map((option) => ({
              description: option.title,
            })),
            simpleValue
          )
        : undefined;
    }, [options, simpleValue]);

    return (
      <>
        <SearchField
          label={'Søk etter grønnsaker'}
          value={value}
          results={results}
          placeholder={'Eksempel: tomat'}
          hideLabel={false}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          onSearch={() => alert('søk')}
          onSearchClick={() => alert('søk med knapp')}
          onClear={() => setValue('')}
          onResultClick={(result) => {
            alert(`${result.title}: ${result.description}`);
          }}
        />

        <SearchField
          label={'Søk etter grønnsaker uten beskrivelse'}
          helpText={'HJELP!'}
          value={simpleValue}
          results={simpleResults}
          placeholder={'Eksempel: agurk'}
          hideLabel={false}
          onChange={(event) => {
            setSimpleValue(event.target.value);
          }}
          onSearch={() => alert('søk')}
          onSearchClick={() => alert('søk med knapp')}
          onClear={() => setSimpleValue('')}
          onResultClick={(result) => {
            alert(result.description);
          }}
        />
        <form>
          <SearchField label={'uncontrolled'} hideLabel={false} />
        </form>
      </>
    );
  },
};
Examples.parameters = exampleParameters;
