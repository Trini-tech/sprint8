import { describe, test, expect } from 'vitest';
import BalanceCard from './BalanceCard';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('BalanceCard', () => {
  test('should show BalanceCard component', () => {
    render(
      <Provider store={store}>
        <BalanceCard />
      </Provider>,
    );
    expect(screen.getByText('Balanç setmanal')).toBeDefined();
  });
});
