/* eslint-disable @typescript-eslint/no-var-requires */
import { IconButton } from '@skatteetaten/ds-buttons';
import { CopySVGpath } from '@skatteetaten/ds-icons';

const paletteJson = require('@skatteetaten/ds-core-designtokens/designtokens/palette.json');

export const PaletteTokenExamplesGenerator = (): JSX.Element => {
  const colorsTokens: { [key: string]: string } = paletteJson[':root,\n:host'];

  return (
    <table className={'paletteTable'}>
      <colgroup>
        <col className={'paletteTableCol65'} />
        <col className={'paletteTableCol25'} />
        <col className={'paletteTableCol10'} />
      </colgroup>
      <tr>
        <th className={'paletteTableHeader'}>{'Designtoken'}</th>
        <th className={'paletteTableHeader'}>{'Verdi'}</th>
        <th className={'paletteTableHeader'}>{'Kopier'}</th>
      </tr>
      {Object.keys(colorsTokens).map((key, index) => {
        const colorClassName = `colorToken${index}`;
        const cssRule = `.${colorClassName} { background: ${colorsTokens[key]}; width: 2rem; height: 2rem; }`;

        return (
          <>
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
          </>
        );
      })}
    </table>
  );
};
