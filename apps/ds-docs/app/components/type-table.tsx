import { JSX } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';
import { Table } from '@skatteetaten/ds-table';

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

const isFunctionType = (typeValue: string): boolean => {
  return typeValue.includes('=>');
};

const isObjectType = (typeValue: string): boolean => {
  return typeValue.trimStart().startsWith('{');
};

const getDisplayTypeValue = (typeValue: string): string => {
  if (isFunctionType(typeValue)) {
    return 'function';
  }
  if (isObjectType(typeValue)) {
    return 'object';
  }
  return typeValue;
};

const getDefaultValue = (defaultValue: DocgenDefaultValue | null): string => {
  if (defaultValue?.value === undefined) {
    return '';
  }

  return String(defaultValue.value);
};

export const TypeTable = ({ of }: TypeTableProps): JSX.Element => {
  const props = Object.values(of.__docgenInfo?.props ?? {});
  const displayName = getDisplayName(of);

  return (
    <Table
      caption={`Props for ${displayName}}`}
      className={styles.table}
      hasFullWidth
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{'Navn'}</Table.HeaderCell>
          <Table.HeaderCell>{'Type'}</Table.HeaderCell>
          <Table.HeaderCell>{''}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.map((prop) => {
          const defaultValue = getDefaultValue(prop.defaultValue);
          const description = prop.description;

          return (
            <Table.Row
              key={prop.name}
              expandButtonPosition={'right'}
              expandableContent={
                <DescriptionList descriptionDirection={'vertical'}>
                  <DescriptionList.Element term={'Type'}>
                    <code className={styles.code}>
                      {getTypeValue(prop.type)}
                    </code>
                  </DescriptionList.Element>
                  {defaultValue && (
                    <DescriptionList.Element term={'Default'}>
                      <code className={styles.code}>{defaultValue}</code>
                    </DescriptionList.Element>
                  )}
                  {description && (
                    <DescriptionList.Element term={'Beskrivelse'}>
                      {description}
                    </DescriptionList.Element>
                  )}
                </DescriptionList>
              }
              isExpandable
            >
              <Table.DataCell>
                <strong>{prop.required ? prop.name : `${prop.name}?`}</strong>
              </Table.DataCell>
              <Table.DataCell>
                <code className={styles.code}>
                  {getDisplayTypeValue(getTypeValue(prop.type))}
                </code>
              </Table.DataCell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
