import { render, screen } from '@testing-library/react';
import { fetchData } from '../api';
import FetchData from '../FetchData';

test('check async', async () => {
  render(<FetchData />);
  const data = await fetchData();
  expect(data[1].id).toBe('2');
});
