import { IconButton } from '@skatteetaten/ds-buttons';

const CustomStarSVGpath = (
  <path
    d={
      'M12 2.5l2.84 5.76 6.36.93-4.6 4.48 1.09 6.33L12 17.02 6.31 20l1.09-6.33-4.6-4.48 6.36-.93L12 2.5z'
    }
  />
);

export default function IconButtonCustomSvgPathStateExample(): JSX.Element {
  return <IconButton svgPath={CustomStarSVGpath} title={'Favoritt'} />;
}
