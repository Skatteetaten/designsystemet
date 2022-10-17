/* eslint-disable @typescript-eslint/no-var-requires */
import { ColorPalette, ColorItem } from '@storybook/addon-docs';

import './designtokens.css';
const paletteJson = require('@skatteetaten/ds-core-designtokens/designtokens/palette.json');
type ColorTokens = { [key: string]: { [key: string]: string } };

const ColorPaletteOverTyped: React.FunctionComponent<{
  children: JSX.Element | Array<JSX.Element>;
}> = (props) => <ColorPalette {...(props as JSX.IntrinsicAttributes)} />;

const generateTokens = (
  colorsTokens: { [key: string]: string },
  semantic: boolean
): ColorTokens => {
  let paletteTokens: ColorTokens = {};

  Object.keys(colorsTokens)
    .filter((key) =>
      semantic ? key.includes('semantic') : !key.includes('semantic')
    )
    .forEach((key) => {
      const subPaletteNames = key.split('-');
      const subPaletteName = subPaletteNames[subPaletteNames.length - 2];
      const color = {
        [key]: colorsTokens[key],
      };
      paletteTokens = {
        ...paletteTokens,
        [subPaletteName]: { ...paletteTokens[subPaletteName], ...color },
      };
    });
  return paletteTokens;
};

interface PaletteTokenExamplesGeneratorProps {
  paletteType: 'color' | 'semantic';
}

export const PaletteTokenExamplesGenerator = ({
  paletteType,
}: PaletteTokenExamplesGeneratorProps): JSX.Element => {
  const paletteTokens: ColorTokens = generateTokens(
    paletteJson[':root,\n:host'],
    paletteType === 'semantic'
  );

  return (
    <ColorPaletteOverTyped>
      {Object.keys(paletteTokens).map((subPaletteKey) => {
        return (
          <ColorItem
            key={subPaletteKey}
            title={subPaletteKey}
            subtitle={paletteType}
            colors={{ ...paletteTokens[subPaletteKey] }}
          />
        );
      })}
    </ColorPaletteOverTyped>
  );
};
