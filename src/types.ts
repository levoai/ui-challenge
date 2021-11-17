export interface IOrganization {
  id: number;
  name: string;
  owner_email: string;
  owner_name: string;
  owner_picture: string;
}
export interface SideNavProps {
  organizationId: string;
}
export interface IReport {
  id: number;
  name: string;
  start_date: string | Date;
  duration: number;
  failed_tests: number;
  succeed_tests: number;
}

export enum EndpointStatusEnum {
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  ERROR = "ERROR",
}
export interface IEndpoint {
  url: string;
  duration: number;
  status: EndpointStatusEnum;
}
export interface IconProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}
export interface OrganizationProps {
  organization: IOrganization;
}
export interface ReportCardProps {
  report: IReportDetails;
}
export interface IReportDetails {
  id: number;
  endpoints: IEndpoint[];
  end_date: string;
  duration: number;
  job_name: string;
  branch: string;
  github_user: string;
  commit: string;
  environment_url: string;
}
export interface ReportEndpointProps {
  endpoint: IEndpoint;
}
export interface IBadge {
  success: boolean;
  title: string;
}
export interface ReportItemProps {
  report: IReport;
  organizationId: number;
}
export interface ReportDetailsResultProps {
  testsName: string;
  endpoints: IEndpoint[];
  total: number;
  icon: React.ReactNode;
}
