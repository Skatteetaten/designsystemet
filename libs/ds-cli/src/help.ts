import chalk from 'chalk';

export function helpCommand(): void {
  console.info('Skatteetatens Designsystem CLI');
  console.info(`
📝 Documentation
   - ${chalk.blueBright('https://skatteetaten.github.io/designsystemet/?path=/docs/verktøy-kommandolinjeverktøy--docs')}

💻 Commands:
   - ${chalk.cyan(
     `npx @skatteetaten/ds-cli ${chalk.green('codemod')} ${chalk.gray('<migration_name> <path>')}`
   )}
   ✔︎ Code-transformations for breaking changes when updating Designsystemet
   ✔︎ Run with ${chalk.cyan(`${chalk.green('--help')}`)} to get started!
`);
}
