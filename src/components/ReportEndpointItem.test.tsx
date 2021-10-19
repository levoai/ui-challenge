import React from 'react';
import { render } from '@testing-library/react';

import ReportEndpointItem from './ReportEndpointItem';
import { IEndpoint } from '../types';

describe('ReportEndpointItem', () => {
  test('renders correctly for status FAILURE', () => {
    const endpoint: IEndpoint = {
      url: 'https://google.com',
      duration: 34242,
      status: 'FAILURE',
    };
    const { getByText } = render(<ReportEndpointItem {...endpoint} />);
    getByText(`${endpoint.duration}s`);
    getByText(endpoint.url);
  });
  test('renders correctly for status SUCCESS', () => {
    const endpoint: IEndpoint = {
      url: 'https://google.com',
      duration: 34242,
      status: 'SUCCESS',
    };
    const { getByText } = render(<ReportEndpointItem {...endpoint} />);
    getByText(`${endpoint.duration}s`);
    getByText(endpoint.url);
  });
});
