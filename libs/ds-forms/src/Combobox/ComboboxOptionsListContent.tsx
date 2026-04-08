import React, { type JSX, useMemo, useRef } from 'react';

import { Divider } from '@skatteetaten/ds-content';
import { CheckIcon } from '@skatteetaten/ds-icons';

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
  multiple: boolean;
  isGroupItem: boolean;
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
  isGroupItem,
  multiple,
  focusedIndex,
  handleButtonFocus,
  handleOptionSelect,
}: ComboboxOptionItemProps): JSX.Element => {
  const { isSelected, isDisabled } = getOptionState(option, comboboxState);

  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
  const isScrolling = useRef(false);

  const isFocused = flatIndex === focusedIndex;

  return (
    <li
      key={option.value}
      id={`${comboboxId}-option-${flatIndex}`}
      role={'option'}
      aria-selected={isSelected ? 'true' : 'false'}
      aria-disabled={isDisabled ? 'true' : undefined}
      className={`${styles.option} ${multiple ? styles.optionWithCheckbox : ''} ${isGroupItem ? styles.optionInGroup : ''} ${isFocused ? styles.focused : ''} ${isDisabled ? styles.disabled : ''}`.trim()}
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
      /**
       * I multi-select bruker vi Pointer Events (Down/Move/Up) i kombinasjon
       * med en ref i stedet for onClick for å løse to problemer på mobil:
       *
       * 1. "Ghost clicks": Standard onClick på mobil har en forsinkelse (300ms)
       *    som ofte gjør at raske trykk på rad registreres på feil element
       *    etter at listen har rendret på nytt.
       * 2. Scroll vs. Valg: Ved å bruke en 'isScrolling' sjekk, hindrer vi at
       *    elementet blir valgt når brukeren egentlig bare prøver å scrolle
       *    over listen (noe onPointerDown alene ville trigget).
       *
       * CSS 'touch-action: pan-y' er nødvendig for å fjerne nettleserens
       * "double-tap to zoom"-forsinkelse, slik at onPointerUp fyrer
       * umiddelbart.
       *
       * I single-select bruker vi vanlig onClick for å unngå click-through og
       * sideeffekter på første klikk etter valgt option.
       */
      onPointerDown={(e) => {
        if (!multiple) {
          return;
        }

        pointerStartRef.current = { x: e.clientX, y: e.clientY };
        isScrolling.current = false;
      }}
      onPointerMove={(e) => {
        if (!multiple) {
          return;
        }

        if (!pointerStartRef.current) {
          return;
        }

        const deltaX = Math.abs(e.clientX - pointerStartRef.current.x);
        const deltaY = Math.abs(e.clientY - pointerStartRef.current.y);

        // Små bevegelser skjer ofte under et vanlig trykk på mobil.
        // Vi regner det først som scroll når bevegelsen passerer en liten terskel.
        if (deltaX > 6 || deltaY > 6) {
          isScrolling.current = true;
        }
      }}
      onPointerUp={(e) => {
        if (!multiple) {
          return;
        }

        // Kun velg hvis brukeren ikke har scrollet
        if (!isScrolling.current && !isDisabled) {
          // Hindre at samme trykk utløser en click-event på elementet
          // som ligger bak dropdownen etter at den er lukket.
          e.preventDefault();
          e.stopPropagation();

          handleOptionSelect(option, false);
        }

        pointerStartRef.current = null;
        isScrolling.current = false;
      }}
      onPointerCancel={() => {
        if (!multiple) {
          return;
        }

        pointerStartRef.current = null;
        isScrolling.current = false;
      }}
      onClick={(e) => {
        if (multiple) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

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
        {!multiple && isSelected && (
          <CheckIcon className={styles.checkIcon} aria-hidden={'true'} />
        )}
      </span>
    </li>
  );
};

/** Props for ComboboxOptionsListContent */
export interface ComboboxOptionsListContentProps {
  displayOptions: ComboboxOption[];
  comboboxId: string;
  comboboxState: ComboboxState;
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
            multiple={multiple}
            isGroupItem={hasGroups}
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
                multiple={multiple}
                isGroupItem={hasGroups}
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
              multiple={multiple}
              isGroupItem={hasGroups}
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
