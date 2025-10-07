import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { dsI18n } from '@skatteetaten/ds-core-utils';

import { LoadingMessage } from '../LoadingMessage';

describe('LoadingMessage', () => {
  it('renders loading message with default text', async () => {
    render(<LoadingMessage comboboxId={'test-combobox'} />);

    expect(screen.getByTestId('combobox-loading-spinner')).toBeInTheDocument();
    await waitFor(() => {
      expect(
        screen.getByText(dsI18n.t('ds_progress:spinner.LoadingLabel'))
      ).toBeInTheDocument();
    });
  });

  it('renders custom loading message', async () => {
    render(<LoadingMessage comboboxId={'test-combobox'} />);

    await waitFor(() => {
      expect(
        screen.getByText(dsI18n.t('ds_progress:spinner.LoadingLabel'))
      ).toBeInTheDocument();
    });
  });
});
