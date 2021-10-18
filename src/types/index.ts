export type DateString = string;

export interface IOrganization {
  id: string;
  name: string;
  ownerEmail?: string;
  ownerName?: string;
  ownerPicture?: string;
}

export interface IReport {
  id: string;
  name: string;
  duration: number;
  startDate: DateString;
  failedTests: number;
  succeedTests: number;
}

export type TStatus = 'FAILURE' | 'SUCCESS';

export interface IEndpoint {
  url: string;
  duration: number;
  status: TStatus;
}

export interface IReportDetails {
  id: string;
  endpoints: IEndpoint[];
  duration: number;
  branch: string;
  commit: string;
  endDate: DateString;
  jobName: string;
  githubUser: string;
  environmentUrl: string;
}
