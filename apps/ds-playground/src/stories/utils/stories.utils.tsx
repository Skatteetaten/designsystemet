export const exampleParameters = {
  docs: {
    source: {
      type: 'code',
      language: 'tsx',
      transform: (source: string): string => {
        return source
          .replace('render: (_args): JSX.Element', 'const Examples = ()')
          .replace(
            'render: function Render(_args): JSX.Element ',
            'const Examples = () => '
          )
          .replace('satisfies Story', '');
      },
    },
  },
  /* _args i en story må finnes slik at props i fanen Controls skjules og er prefikset med underscore for å unngå eslint klaging */
  controls: {
    exclude: /.*/,
  },
};
