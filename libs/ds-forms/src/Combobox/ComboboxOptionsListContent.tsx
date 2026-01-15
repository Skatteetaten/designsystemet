import React, { type JSX, useMemo } from 'react';

import { Divider } from '@skatteetaten/ds-content';

import type { ComboboxOption } from './Combobox.types';
import {
  getOptionState,
  type ComboboxState,
} from './utils/combobox-state-utils';
import {
  buildGroupedStructure,
  hasGroupedOptions,
  type GroupedItem,
} from './utils/combobox-utils';

import styles from './Combobox.module.scss';

/** Props for rendering av en enkelt option-rad */
interface ComboboxOptionItemProps {
  option: ComboboxOption;
  flatIndex: number;
  comboboxId: string;
  comboboxState: ComboboxState;
  searchTerm: string;
  multiple: boolean;
  focusedIndex: number;
  handleButtonFocus: (index: number) => void;
  handleOptionSelect: (option: ComboboxOption, fromKeyboard?: boolean) => void;
}

/**
 * En enkelt option-rad. Brukes både for ugrupperte options og options innenfor
 * grupper.
 */
const ComboboxOptionItem = ({
  option,
  flatIndex,
  comboboxId,
  comboboxState,
  searchTerm,
  multiple,
  focusedIndex,
  handleButtonFocus,
  handleOptionSelect,
}: ComboboxOptionItemProps): JSX.Element => {
  const { isSelected, isDisabled } = getOptionState(option, comboboxState);

  // I enkeltvalg-modus markerer vi option som valgt når label matcher søketekst
  const isSelectedInSingleMode = !multiple && option.label === searchTerm;
  const ariaSelected = multiple ? isSelected : isSelectedInSingleMode;

  const isFocused = flatIndex === focusedIndex;

  return (
    <li
      key={option.value}
      id={`${comboboxId}-option-${flatIndex}`}
      role={'option'}
      aria-selected={ariaSelected ? 'true' : 'false'}
      aria-disabled={isDisabled ? 'true' : undefined}
      className={`${styles.option} ${multiple ? styles.optionWithCheckbox : ''} ${isFocused ? styles.focused : ''} ${isDisabled ? styles.disabled : ''}`.trim()}
      tabIndex={-1}
      onFocus={() => handleButtonFocus(flatIndex)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (!isDisabled) {
            handleOptionSelect(option, true);
          }
        }
      }}
      onClick={() => {
        if (!isDisabled) {
          handleOptionSelect(option, false);
        }
      }}
    >
      {multiple && (
        <div
          className={`${styles.checkboxIcon} ${isSelected ? styles.checked : ''} ${isDisabled ? styles.disabled : ''}`.trim()}
        >
          {isSelected && <div className={styles.checkboxIconCheck} />}
        </div>
      )}
      <span
        className={`${styles.optionLabel} ${isDisabled ? styles.disabled : ''}`.trim()}
      >
        {option.label}
      </span>
    </li>
  );
};

/** Props for ComboboxOptionsListContent */
export interface ComboboxOptionsListContentProps {
  displayOptions: ComboboxOption[];
  comboboxId: string;
  comboboxState: ComboboxState;
  searchTerm: string;
  multiple: boolean;
  focusedIndex: number;
  handleButtonFocus: (index: number) => void;
  handleOptionSelect: (option: ComboboxOption, fromKeyboard?: boolean) => void;
}

/**
 * Renderer options-listen - enten flat eller gruppert avhengig av om options
 * har group-felt.
 */
export const ComboboxOptionsListContent = ({
  displayOptions,
  comboboxId,
  comboboxState,
  searchTerm,
  multiple,
  focusedIndex,
  handleButtonFocus,
  handleOptionSelect,
}: ComboboxOptionsListContentProps): JSX.Element => {
  const hasGroups = useMemo(
    () => hasGroupedOptions(displayOptions),
    [displayOptions]
  );

  // Flat rendering (ingen grupper) - behold eksisterende oppførsel
  if (!hasGroups) {
    return (
      <>
        {displayOptions.map((option, index) => (
          <ComboboxOptionItem
            key={option.value}
            option={option}
            flatIndex={index}
            comboboxId={comboboxId}
            comboboxState={comboboxState}
            searchTerm={searchTerm}
            multiple={multiple}
            focusedIndex={focusedIndex}
            handleButtonFocus={handleButtonFocus}
            handleOptionSelect={handleOptionSelect}
          />
        ))}
      </>
    );
  }

  // Gruppert rendering
  const groupedStructure = buildGroupedStructure(displayOptions);
  let flatIndex = 0;

  return (
    <>
      {groupedStructure.map((item: GroupedItem, groupIndex) => {
        const prevItem =
          groupIndex > 0 ? groupedStructure[groupIndex - 1] : null;

        // Sjekk om vi skal vise divider: når type endres (flat/group overgang)
        const showDivider =
          prevItem !== null &&
          // Overgang fra option til group
          ((item.type === 'group' && prevItem.type === 'option') ||
            // Overgang fra group til option
            (item.type === 'option' && prevItem.type === 'group') ||
            // Overgang fra group til group
            (item.type === 'group' && prevItem.type === 'group'));

        if (item.type === 'option') {
          const currentIndex = flatIndex;
          flatIndex++;

          return (
            <React.Fragment key={item.option.value}>
              {showDivider && (
                <li role={'presentation'}>
                  <Divider ariaHidden />
                </li>
              )}
              <ComboboxOptionItem
                option={item.option}
                flatIndex={currentIndex}
                comboboxId={comboboxId}
                comboboxState={comboboxState}
                searchTerm={searchTerm}
                multiple={multiple}
                focusedIndex={focusedIndex}
                handleButtonFocus={handleButtonFocus}
                handleOptionSelect={handleOptionSelect}
              />
            </React.Fragment>
          );
        }

        // Gruppe med header og nested options
        const groupLabelId = `${comboboxId}-group-${groupIndex}`;
        const groupOptions = item.options.map((option) => {
          const currentIndex = flatIndex;
          flatIndex++;
          return (
            <ComboboxOptionItem
              key={option.value}
              option={option}
              flatIndex={currentIndex}
              comboboxId={comboboxId}
              comboboxState={comboboxState}
              searchTerm={searchTerm}
              multiple={multiple}
              focusedIndex={focusedIndex}
              handleButtonFocus={handleButtonFocus}
              handleOptionSelect={handleOptionSelect}
            />
          );
        });

        return (
          <React.Fragment key={`group-${item.groupLabel}`}>
            {showDivider && (
              <li role={'presentation'}>
                <Divider ariaHidden />
              </li>
            )}
            <li role={'presentation'} className={styles.optionGroup}>
              <div role={'group'} aria-labelledby={groupLabelId}>
                <span id={groupLabelId} className={styles.optionGroupLabel}>
                  {item.groupLabel}
                </span>
                <ul role={'presentation'} className={styles.optionGroupList}>
                  {groupOptions}
                </ul>
              </div>
            </li>
          </React.Fragment>
        );
      })}
    </>
  );
};
