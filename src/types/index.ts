export type DateString = string;

export interface IOrganization {
  id: number;
  name: string;
  ownerEmail?: string;
  ownerName?: string;
  ownerPicture?: string;
}

export interface IReport {
  id: number;
  name: string;
  duration: number;
  startDate: DateString;
  failedTests: number;
  succeedTests: number;
}

export type TStatus = 'ERROR' | 'SUCCESS';

export interface IEndpoint {
  url: string;
  duration: number;
  status: TStatus;
}

export interface IReportDetails {
  id: number;
  endpoints: IEndpoint[];
  duration: number;
  branch: string;
  commit: string;
  endDate: DateString;
  jobName: string;
  githubUser: string;
  environmentUrl: string;
}
