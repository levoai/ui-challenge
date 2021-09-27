import http from "../http-common";
import { HTTP_CODES, API_KEY } from '../shared/constants';

// types
import { Organization } from "../models/Organization";
import { OrganizationReport } from "../models/OrganizationReport";

import { OrganizationReportDetail } from "../models/OrganizationReportDetail";
import { ReportEndpoint } from "../models/ReportEndpoint";

class OrganizationService {
  /**
   * Function responsible to get all organizations
   * @returns Array<Organization>
   */
  async getOrganizations(): Promise<Array<Organization>> {
    const organizations: Organization[] = [({
      id: 11,
      name: 'Dummy Organization',
    } as Organization)];
    try {
      const response = await http.get(`/organizations.json?key=${API_KEY}`);
      if (response.status === HTTP_CODES.SUCCESS) {
        // clear dummy data
        organizations.splice(0, organizations.length);
        // populate with real data
        response.data.map((item: any) => organizations.push({
          id: item.id,
          name: item.name,
          ownerEmail: item.owner_email,
          ownerName: item.owner_name,
          ownerPicture: item.owner_picture
        } as Organization));
      }
    } catch (e) {
      console.log(e);
    }
    return organizations;
  }

  /**
   * Get an organizatin by id
   * @param organizationId 
   * @returns Promise<Organization>
   */
  async getOrganization(organizationId: number): Promise<Organization> {
    let organization: Organization = {} as Organization;
    try {
      const response = await http.get(`/organizations/${organizationId}.json?key=${API_KEY}`);
      if (response.status === HTTP_CODES.SUCCESS) {
        const item: any = response.data;
        organization = {
          id: item.id,
          name: item.name,
          ownerEmail: item.owner_email,
          ownerName: item.owner_name,
          ownerPicture: item.owner_picture
        } as Organization;
      }
    } catch (e) {
      console.log(e);
    }
    return organization;
  }

  /**
   * Get organization reports by organization id
   * @param organizationId 
   * @returns Promise<Array<OrganizationReport>>
   */
  async getOrganizationReports(organizationId: number): Promise<Array<OrganizationReport>> {
    const reports: OrganizationReport[] = [{
      id: 1,
      name: 'report dummy',
      duration: 1,
      startDate: new Date().toUTCString(),
      failedTests: 5,
      succeedTests: 10,
    } as OrganizationReport];
    try {
      const response = await http.get(`/organizations/${organizationId}/reports.json?key=${API_KEY}`);
      if (response.status === HTTP_CODES.SUCCESS) {
        // clear dummy data
        reports.splice(0, reports.length);
        // populate with real data
        response.data.map((item: any) => reports.push({
          id: item.id,
          name: item.name,
          startDate: item.start_date,
          failedTests: item.failed_tests,
          succeedTests: item.succeed_tests,
          duration: item.duration,
        } as OrganizationReport));
      }
    } catch (e) {
      console.log(e);
    }
    return reports;
  }

  /**
   * Get a report detail given its organizationId and reportId
   * @param organizationId 
   * @param reportId 
   * @returns Promise<OrganizationReportDetail>
   */
  async getReportDetails(organizationId: number, reportId: number): Promise<OrganizationReportDetail> {
    let reportDetails: OrganizationReportDetail = {
      id: 123,
      endDate: new Date().toUTCString(),
      duration: 0,
      jobName: 'dummy',
      branch: 'challenge',
      githubUser: 'jhoansebastianlara',
      commit: 'agsd87ahb',
      environmentUrl: 'http://example.com/env',
      endpoints: [
        ({ duration: 0, status: 'FAILURE', url: '/test-dos' } as ReportEndpoint),
        ({ duration: 0, status: 'SUCCESS', url: '/test-one' } as ReportEndpoint),
        ({ duration: 0, status: 'SUCCESS', url: '/test-tres' } as ReportEndpoint),
        ({ duration: 0, status: 'SUCCESS', url: '/test-cuatro' } as ReportEndpoint),
        ({ duration: 0, status: 'FAILURE', url: '/cinco-test' } as ReportEndpoint),
        ({ duration: 0, status: 'SUCCESS', url: '/seis-test' } as ReportEndpoint)
      ]
    } as OrganizationReportDetail;
    try {
      const response = await http.get(`/organizations/${organizationId}/reports/${reportId}/details.json?key=${API_KEY}`);
      if (response.status === HTTP_CODES.SUCCESS) {
        const item: any = response.data;

        const endpoints: ReportEndpoint[] = item.endpoints.map((endpoint: any) => ({
          duration: endpoint.duration,
          status: endpoint.status,
          url: endpoint.url,
        } as ReportEndpoint));

        reportDetails = {
          id: item.id,
          endpoints,
          endDate: item.end_date,
          duration: item.duration,
          jobName: item.job_name,
          branch: item.branch,
          githubUser: item.github_user,
          commit: item.commit,
          environmentUrl: item.environment_url,
        } as OrganizationReportDetail;
      }
    } catch (e) {
      console.log(e);
    }

    return reportDetails;
  }
}

export default new OrganizationService();
