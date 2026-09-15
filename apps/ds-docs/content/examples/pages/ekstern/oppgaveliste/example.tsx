import { JSX } from 'react';

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

import styles from './oppgaveliste.module.scss';

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

export default function Oppgaveliste(): JSX.Element {
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
      <li key={task.text}>
        <div className={styles.task}>
          <Link
            className={styles.taskLink}
            href={
              '/designsystemet/example.html?path=pages%2Fekstern%2Fdeloppgave'
            }
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
        <Heading as={'h1'} hasSpacing>
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
        <Heading as={'h2'} className={styles.heading} hasSpacing>
          <span className={styles.headingIcon}>
            <CheckIcon />
          </span>
          {'Sjekk før du starter'}
        </Heading>
        <ul className={styles.list}>{checkTasks.map(createTask)}</ul>
        <Heading
          as={'h2'}
          className={`${styles.heading} ${styles.marginTopXl}`}
          hasSpacing
        >
          <span className={styles.headingIcon}>
            <EditIcon />
          </span>
          {'Forbered søknad'}
        </Heading>
        <ul className={styles.list}>{prepareTasks.map(createTask)}</ul>
        <Button className={styles.sendInButton} svgPath={SendSVGpath}>
          {'Se over og send inn'}
        </Button>
      </div>

      <Panel variant={'filled'} color={'graphite'} padding={'m'}>
        <div className={styles.buttonRow}>
          <InlineButton>{'Lagre og fortsett senere'}</InlineButton>
          <InlineButton>{'Avbryt og slett'}</InlineButton>
        </div>
      </Panel>
    </main>
  );
}
