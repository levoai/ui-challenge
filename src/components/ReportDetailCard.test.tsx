import React from 'react';
import { render } from '@testing-library/react';

import ReportDetailCard from './ReportDetailCard';
import { IReportDetails } from '../types';

const reportDetail: IReportDetails = {
  id: '1',
  endpoints: [],
  duration: 2997343,
  branch: 'Nader Inc',
  commit: '3c87ci0vk4',
  endDate: '2021-07-09T06:00:56Z',
  jobName: 'Lotstring',
  githubUser: 'mkurton0',
  environmentUrl: 'http://163.com',
};

describe('ReportDetailCard', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2021-10-19T02:54:17.629Z'));
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  test('renders correctly', () => {
    const { getByText } = render(<ReportDetailCard {...reportDetail} />);
    getByText('Duration: 49m');
    getByText(reportDetail.branch);
    getByText(reportDetail.commit);
    getByText('Finished 3 months ago');
    getByText(reportDetail.jobName);
    getByText(reportDetail.githubUser);
    getByText(reportDetail.environmentUrl);
  });
});
