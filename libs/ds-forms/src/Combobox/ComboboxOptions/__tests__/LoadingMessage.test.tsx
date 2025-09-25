import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { LoadingMessage } from '../LoadingMessage';

describe('LoadingMessage', () => {
  it('renders loading message with default text', async () => {
    render(<LoadingMessage comboboxId={'test-combobox'} />);

    expect(screen.getByTestId('combobox-loading-spinner')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('Laster...')).toBeInTheDocument();
    });
  });

  it('renders custom loading message', async () => {
    render(
      <LoadingMessage message={'Laster data...'} comboboxId={'test-combobox'} />
    );

    await waitFor(() => {
      expect(screen.getByText('Laster data...')).toBeInTheDocument();
    });
  });
});
