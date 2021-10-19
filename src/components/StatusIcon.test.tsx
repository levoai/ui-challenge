import React from 'react';
import { render } from '@testing-library/react';

import StatusIcon from './StatusIcon';

describe('StatusIcon', () => {
  test('renders correctly when status is FAILURE', () => {
    const { getByTestId } = render(<StatusIcon status="FAILURE" />);
    getByTestId('failure-icon');
  });
  test('renders correctly when status is SUCCESS', () => {
    const { getByTestId } = render(<StatusIcon status="SUCCESS" />);
    getByTestId('passed-icon');
  });
});
