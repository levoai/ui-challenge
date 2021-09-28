import { ReportEndpoint } from "./ReportEndpoint"
export type OrganizationReportDetail = {
  id: number,
  endpoints: Array<ReportEndpoint>,
  endDate: string,
  duration: number,
  jobName: string,
  branch: string,
  githubUser: string,
  commit: string,
  environmentUrl: string,
}
