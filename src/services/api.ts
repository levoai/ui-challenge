/* eslint-disable camelcase */
import axios from 'axios';

import {
  DateString,
  IEndpoint,
  IOrganization,
  IReport,
  IReportDetails,
} from '../types';

const API_HOST = process.env.REACT_APP_API_HOST;
const API_KEY = process.env.REACT_APP_API_KEY;

type OriginalOrganization = Pick<IOrganization, 'name'> & {
  id: number;
  owner_email: string;
  owner_name: string;
  owner_picture: string;
};

type OriginalReport = Pick<IReport, 'name' | 'duration'> & {
  id: number;
  start_date: DateString;
  failed_tests: number;
  succeed_tests: number;
};

type OriginalReportDetails = Pick<
  IReportDetails,
  'duration' | 'branch' | 'commit'
> & {
  id: number;
  end_date: DateString;
  job_name: string;
  github_user: string;
  environment_url: string;
  endpoints: Array<
    Omit<IEndpoint, 'status'> & {
      status: 'ERROR' | 'FAILURE' | 'SUCCESS';
    }
  >;
};

const transformToOrganization = (
  organization: OriginalOrganization,
): IOrganization => ({
  id: String(organization.id),
  name: organization.name,
  ownerEmail: organization.owner_email,
  ownerName: organization.owner_name,
  ownerPicture: organization.owner_picture,
});

const transformToReport = (report: OriginalReport): IReport => ({
  id: String(report.id),
  name: report.name,
  duration: report.duration,
  startDate: report.start_date,
  failedTests: report.failed_tests,
  succeedTests: report.succeed_tests,
});

const transformToReportDetails = (
  reportDetails: OriginalReportDetails,
): IReportDetails => ({
  id: String(reportDetails.id),
  duration: reportDetails.duration,
  endDate: reportDetails.end_date,
  jobName: reportDetails.job_name,
  githubUser: reportDetails.github_user,
  environmentUrl: reportDetails.environment_url,
  branch: reportDetails.branch,
  commit: reportDetails.commit,
  endpoints: [
    ...reportDetails.endpoints.map((endpoint) => ({
      ...endpoint,
      status: endpoint.status === 'ERROR' ? 'FAILURE' : endpoint.status,
    })),
  ],
});

async function getOrganizations(): Promise<IOrganization[]> {
  const response = await axios.get<OriginalOrganization[]>(
    `${API_HOST}/organizations.json?key=${API_KEY}`,
  );

  return response.data?.map(transformToOrganization);
}

async function getOrganization({
  queryKey,
}: {
  queryKey: string[];
}): Promise<IOrganization | undefined> {
  const [, organizationId] = queryKey;

  const response = await axios.get<OriginalOrganization[]>(
    `${API_HOST}/organizations.json?key=${API_KEY}`,
  );

  return response.data
    ?.map(transformToOrganization)
    .find(({ id }) => id === organizationId);
}

async function getReports({
  queryKey,
}: {
  queryKey: string[];
}): Promise<IReport[]> {
  const [, organizationId] = queryKey;

  const response = await axios.get<OriginalReport[]>(
    `${API_HOST}/organizations/${organizationId}/reports.json?key=${API_KEY}`,
  );

  return response.data?.map(transformToReport);
}

async function getReport({
  queryKey,
}: {
  queryKey: string[];
}): Promise<IReportDetails> {
  const [, organizationId, reportId] = queryKey;

  const response = await axios.get<OriginalReportDetails>(
    `${API_HOST}/organizations/${organizationId}/reports/${reportId}/details.json?key=${API_KEY}`,
  );

  return transformToReportDetails(response.data);
}

export default {
  getOrganizations,
  getOrganization,
  getReports,
  getReport,
};
