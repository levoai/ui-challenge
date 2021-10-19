import React from 'react';
import { render } from '@testing-library/react';

import ReportItem from './ReportItem';
import { IReport } from '../types';

const report: IReport = {
  id: '1',
  name: 'Nader Inc',
  duration: 2997343,
  startDate: '2021-07-09T06:00:56Z',
  failedTests: 9,
  succeedTests: 4,
};

describe('ReportItem', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2021-10-19T02:54:17.629Z'));
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  test('renders correctly', () => {
    const { getByText } = render(<ReportItem {...report} />);
    getByText(report.name);
    getByText('3 months ago - 49m long');
    getByText(`${report.failedTests} failed`);
    getByText(`${report.succeedTests} passed`);
  });
});
