import { JSX } from 'react';

import { linkTo } from '@storybook/addon-links';

import { Button, InlineButton, Link } from '@skatteetaten/ds-buttons';
import { DescriptionList, Divider, Panel } from '@skatteetaten/ds-content';
import { useMediaQuery } from '@skatteetaten/ds-core-utils';
import {
  CheckIcon,
  CheckSVGpath,
  EditIcon,
  SendSVGpath,
  WarningOutlineSVGpath,
} from '@skatteetaten/ds-icons';
import { Breadcrumbs } from '@skatteetaten/ds-navigation';
import { Tag, TagColor } from '@skatteetaten/ds-status';
import { Heading } from '@skatteetaten/ds-typography';

import styles from './Oppgaveliste.module.css';
import stylesAsString from './Oppgaveliste.module.css?raw';
import { includeStylesTransform } from '../../../.storybook/helpers';
import { withPageLayout } from '../../../.storybook/pagelayout-decorator';

export default {
  title: 'Sidetyper/Ekstern/Oppgaveliste (beta)',
  decorators: [withPageLayout],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
    docs: {
      source: {
        transform: includeStylesTransform(stylesAsString),
      },
    },
  },
};

enum Status {
  Started,
  NotStarted,
  Finished,
  Missing,
}

interface Task {
  text: string;
  status: Status;
}

export const Oppgaveliste = (): JSX.Element => {
  const isDesktop = useMediaQuery('(min-width: 480px)');
  const checkTasks: Task[] = [
    {
      text: 'Sjekk om du må sende inn',
      status: Status.Finished,
    },
    {
      text: 'Sjekk tilgang og rettigheter',
      status: Status.Finished,
    },
  ];

  const prepareTasks: Task[] = [
    {
      text: 'Bekreft virksomhetsopplysninger',
      status: Status.NotStarted,
    },
    {
      text: 'Kontaktopplysninger',
      status: Status.NotStarted,
    },
    {
      text: 'Dokumentasjon (Statens Vegvesen)',
      status: Status.Missing,
    },
    {
      text: 'Liste over personer',
      status: Status.Started,
    },
    {
      text: 'Samtykke og innsending',
      status: Status.NotStarted,
    },
  ];

  const createTask = (task: Task): JSX.Element => {
    let tagColor: TagColor = 'forest';
    switch (task.status) {
      case Status.Missing:
        tagColor = 'burgundy';
        break;
      case Status.NotStarted:
        tagColor = 'graphite';
        break;
      case Status.Started:
        tagColor = 'ochre';
        break;
    }

    let tagText = 'Ferdig';
    switch (task.status) {
      case Status.Missing:
        tagText = 'Mangler';
        break;
      case Status.NotStarted:
        tagText = 'Ikke startet';
        break;
      case Status.Started:
        tagText = 'I gang';
        break;
    }

    let svgPath: JSX.Element | undefined = CheckSVGpath;
    switch (task.status) {
      case Status.Missing:
        svgPath = WarningOutlineSVGpath;
        break;
      case Status.NotStarted:
        svgPath = undefined;
        break;
      case Status.Started:
        svgPath = undefined;
        break;
    }

    return (
      <li key={task.text} className={styles.resetListElement}>
        <div className={styles.task}>
          <Link
            className={styles.taskLink}
            href={'#'}
            onClick={(e) => {
              e.preventDefault();
              linkTo('Sidetyper/Ekstern/Oppgaveliste (beta)', 'Deloppgave')();
            }}
          >
            {task.text}
          </Link>
          <div>
            <Tag
              color={tagColor}
              svgPath={svgPath}
              size={isDesktop ? 'medium' : 'small'}
            >
              {tagText}
            </Tag>
          </div>
        </div>
        <Divider />
      </li>
    );
  };

  return (
    <main className={styles.mainExternal}>
      <Breadcrumbs className={styles.marginTopM}>
        <Breadcrumbs.List>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href={'#'}>{'Min side'}</Breadcrumbs.Link>
          </Breadcrumbs.Item>

          <Breadcrumbs.Item>
            <Breadcrumbs.Link href={'#'}>{'Løsning'}</Breadcrumbs.Link>
          </Breadcrumbs.Item>

          <Breadcrumbs.Item>
            <Breadcrumbs.Link href={'#'}>
              {'Rytmisk musikkutdanning'}
            </Breadcrumbs.Link>
          </Breadcrumbs.Item>
        </Breadcrumbs.List>
      </Breadcrumbs>
      <div className={styles.article}>
        <Heading as={'h1'} level={1} hasSpacing>
          {'Innrapportering for rytmisk musikkutdanning'}
        </Heading>
        <DescriptionList hasSpacing>
          <DescriptionList.Element term={'Virksomhetetns navn'}>
            {'Høssing Funk Skole'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Organisasjonsnummer'}>
            {'999 999 999'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Inntektsår'}>
            {'2025'}
          </DescriptionList.Element>
        </DescriptionList>
        <Heading as={'h2'} className={styles.heading} level={2} hasSpacing>
          <span className={styles.headingIcon}>
            <CheckIcon />
          </span>
          {'Sjekk før du starter'}
        </Heading>
        <ul className={styles.resetList}>{checkTasks.map(createTask)}</ul>
        <Heading
          as={'h2'}
          className={`${styles.heading} ${styles.marginTopXl}`}
          level={2}
          hasSpacing
        >
          <span className={styles.headingIcon}>
            <EditIcon />
          </span>
          {'Forbered søknad'}
        </Heading>
        <ul className={styles.resetList}>{prepareTasks.map(createTask)}</ul>
        <Button className={styles.sendInButton} svgPath={SendSVGpath}>
          {'Se over og send inn'}
        </Button>
      </div>

      <Panel
        className={styles.panel}
        variant={'filled'}
        color={'graphite'}
        spacing={'xxl'}
        padding={'m'}
      >
        <InlineButton className={styles.marginRightButton}>
          {'Lagre og fortsett senere'}
        </InlineButton>
        <InlineButton>{'Avbryt og slett'}</InlineButton>
      </Panel>
    </main>
  );
};
