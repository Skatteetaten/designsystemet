import { DescriptionList } from '@skatteetaten/ds-content';

export default function DescriptionListHorizontalStateExample(): JSX.Element {
  return (
    <DescriptionList variant={'horizontal'} isVerticalOnMobile>
      <DescriptionList.Element term={'Referansenummer'}>
        {'REF-1234567'}
      </DescriptionList.Element>
      <DescriptionList.Element term={'Sendt inn'}>
        {'03.07.2023 11:03'}
      </DescriptionList.Element>
      <DescriptionList.Element term={'Status'}>
        {'Sendt inn'}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
