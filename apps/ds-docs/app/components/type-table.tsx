import { JSX } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';
import { Tag } from '@skatteetaten/ds-status';
import { Table } from '@skatteetaten/ds-table';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './type-table.module.scss';

interface DocgenDefaultValue {
  value?: string | number | boolean;
}

interface DocgenTypeValueItem {
  value: string;
}

interface DocgenType {
  name?: string;
  value?: DocgenTypeValueItem[];
}

interface DocgenProp {
  defaultValue: DocgenDefaultValue | null;
  description: string;
  name: string;
  required: boolean;
  type?: DocgenType;
}

interface DocgenInfo {
  description?: string;
  displayName?: string;
  props?: Record<string, DocgenProp>;
}

export interface ComponentWithDocgen {
  __docgenInfo?: DocgenInfo;
}

interface TypeTableProps {
  of: ComponentWithDocgen;
}

const getDisplayName = (of: ComponentWithDocgen): string => {
  return of.__docgenInfo?.displayName ?? 'Props';
};

const getTypeValue = (type?: DocgenType): string => {
  if (type?.value?.length) {
    return type.value.map((item) => item.value).join(' | ');
  }

  return type?.name ?? '';
};

const getDefaultValue = (defaultValue: DocgenDefaultValue | null): string => {
  if (defaultValue?.value === undefined) {
    return '';
  }

  return String(defaultValue.value);
};

const getPropName = (prop: DocgenProp): string => {
  return prop.required ? prop.name : `${prop.name}?`;
};

export const TypeTable = ({ of }: TypeTableProps): JSX.Element => {
  const props = Object.values(of.__docgenInfo?.props ?? {});
  const displayName = getDisplayName(of);

  return (
    <Table
      caption={displayName}
      className={styles.table}
      size={'large'}
      hasFullWidth
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{displayName}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.map((prop) => {
          const defaultValue = getDefaultValue(prop.defaultValue);
          const description = prop.description;

          return (
            <Table.Row key={prop.name}>
              <Table.DataCell>
                <Tag color={'denim'} className={styles.tag}>
                  {getPropName(prop)}
                </Tag>
                <DescriptionList
                  variant={'vertical'}
                  descriptionDirection={'vertical'}
                >
                  <DescriptionList.Element term={'Type'}>
                    <code className={styles.code}>
                      {getTypeValue(prop.type)}
                    </code>
                  </DescriptionList.Element>
                  {defaultValue && (
                    <DescriptionList.Element term={'Default'}>
                      <code className={styles.code}>
                        {getDefaultValue(prop.defaultValue)}
                      </code>
                    </DescriptionList.Element>
                  )}
                  {description && (
                    <DescriptionList.Element term={'Beskrivelse'}>
                      {prop.description}
                    </DescriptionList.Element>
                  )}
                </DescriptionList>
              </Table.DataCell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
