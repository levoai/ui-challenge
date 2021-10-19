import React from 'react';
import { render } from '@testing-library/react';

import Layout from './Layout';

describe('Layout', () => {
  test('renders correctly', () => {
    const { getByAltText } = render(<Layout />);
    getByAltText('app logo');
  });
});
