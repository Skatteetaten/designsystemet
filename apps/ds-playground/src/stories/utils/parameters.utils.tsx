import { ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';
import type { Parameters } from '@storybook/csf';

type DesignParameters = {
  name: string;
  url: string;
};

export const getParameters = function (
  designParameters: DesignParameters[]
): Parameters {
  return {
    docs: {
      page: (): JSX.Element => {
        return (
          <>
            <Stories title={''} />
            <ArgsTable story={PRIMARY_STORY} />
          </>
        );
      },
    },
    design: designParameters.map((designParameter: DesignParameters) => {
      return {
        name: designParameter.name,
        type: 'figma',
        url: designParameter.url,
      };
    }),
    backgrounds: {
      values: [
        { name: 'Svart', value: '#000' },
        { name: 'Hvit', value: '#fff' },
      ],
    },
  };
};
