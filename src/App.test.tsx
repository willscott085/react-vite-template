import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import { WithProviders } from './__tests__/setup';

test('full app rendering/navigating', async () => {
  render(<App />, { wrapper: WithProviders });
  const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getByText(/Hi there!/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route';
  const queryClient = new QueryClient();

  // use <MemoryRouter> when you want to manually control the history
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    </QueryClientProvider>
  );

  // verify navigation to "no match" route
  expect(screen.getByText(/There's nothing here: 404!/i)).toBeInTheDocument();
});
