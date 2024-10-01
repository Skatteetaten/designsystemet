// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Fragment, JSX } from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';
import paletteJson from '@skatteetaten/ds-core-designtokens/designtokens/palette.json';
import { CopySVGpath } from '@skatteetaten/ds-icons';

export const PaletteTokenExamplesGenerator = (): JSX.Element => {
  const colorsTokens: { [key: string]: string } = paletteJson[':root,\n:host'];

  return (
    <table className={'paletteTable'}>
      <colgroup>
        <col className={'paletteTableCol65'} />
        <col className={'paletteTableCol25'} />
        <col className={'paletteTableCol10'} />
      </colgroup>
      <thead>
        <tr>
          <th className={'paletteTableHeader'}>{'Designtoken'}</th>
          <th className={'paletteTableHeader'}>{'Verdi'}</th>
          <th className={'paletteTableHeader'}>{'Kopier'}</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(colorsTokens).map((key, index) => {
          const colorClassName = `colorToken${index}`;
          const cssRule = `.${colorClassName} { background: ${colorsTokens[key]}; width: 2rem; height: 2rem; }`;

          return (
            <Fragment key={key}>
              <style>{cssRule}</style>
              <tr key={key} className={'paletteTableRow'}>
                <td>
                  <div className={'paletteTableDesigntoken'}>
                    <span>{key}</span>
                    <span className={`${colorClassName}`}></span>
                  </div>
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
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
};
