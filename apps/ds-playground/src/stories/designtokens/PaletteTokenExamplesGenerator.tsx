/* eslint-disable @typescript-eslint/no-var-requires */
import { IconButton } from '@skatteetaten/ds-buttons';
import { CopySVGpath } from '@skatteetaten/ds-icons';

import './designtokens.css';
const paletteJson = require('@skatteetaten/ds-core-designtokens/designtokens/palette.json');

export const PaletteTokenExamplesGenerator = (): JSX.Element => {
  const colorsTokens: { [key: string]: string } = paletteJson[':root,\n:host'];

  return (
    <table className={'paletteTable'}>
      <colgroup>
        <col style={{ width: '50%' }} />
        <col style={{ width: '15%' }} />
        <col style={{ width: '25%' }} />
        <col style={{ width: '10%' }} />
      </colgroup>
      <tr>
        <th className={'paletteTableHeader'}>{'Designtoken'}</th>
        <th></th>
        <th className={'paletteTableHeader'}>{'Verdi'}</th>
        <th className={'paletteTableHeader'}>{'Kopier'}</th>
      </tr>
      {Object.keys(colorsTokens).map((key) => {
        return (
          <tr key={key} className={'paletteTableRow'}>
            <td>{key}</td>
            <td>
              <div
                style={{
                  background: colorsTokens[key],
                  height: '2rem',
                  width: '2rem',
                }}
              ></div>
            </td>
            <td>{colorsTokens[key]}</td>
            <td>
              <IconButton
                svgPath={CopySVGpath}
                title={'Kopier'}
                onClick={(): Promise<void> =>
                  navigator.clipboard.writeText(key)
                }
              />
            </td>
          </tr>
        );
      })}
    </table>
  );
};
