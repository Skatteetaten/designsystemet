import chalk from 'chalk';

export function helpCommand(): void {
  console.info('Welcome to Skatteetatens Designsystem CLI');
  console.info(`
📝 Documentation
   ${chalk.blueBright('https://skatteetaten.github.io/designsystemet/?path=/docs/verktøy-kommandolinjeverktøy--docs')}

💻 Available Commands

   ${chalk.cyan('npx @skatteetaten/ds-cli')} ${chalk.green('help')}
   Display this help menu

   ${chalk.cyan('npx @skatteetaten/ds-cli')} ${chalk.green('codemod')} ${chalk.gray('<migration_name> <path>')}
   Apply code transformations for handling breaking changes when updating Designsystemet.

   For more details:
   ${chalk.cyan('npx @skatteetaten/ds-cli codemod')} ${chalk.green('--help')}
`);
}
