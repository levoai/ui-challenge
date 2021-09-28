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
        response.data.map((responseData: any) => organizations.push({
          id: responseData.id,
          name: responseData.name,
          ownerEmail: responseData.owner_email,
          ownerName: responseData.owner_name,
          ownerPicture: responseData.owner_picture
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
        const responseData: any = response.data;
        organization = {
          id: responseData.id,
          name: responseData.name,
          ownerEmail: responseData.owner_email,
          ownerName: responseData.owner_name,
          ownerPicture: responseData.owner_picture
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
        response.data.map((responseData: any) => reports.push({
          id: responseData.id,
          name: responseData.name,
          startDate: responseData.start_date,
          failedTests: responseData.failed_tests,
          succeedTests: responseData.succeed_tests,
          duration: responseData.duration,
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
        const responseData: any = response.data;

        const endpoints: ReportEndpoint[] = responseData.endpoints.map((endpoint: any) => ({
          duration: endpoint.duration,
          status: endpoint.status,
          url: endpoint.url,
        } as ReportEndpoint));

        reportDetails = {
          id: responseData.id,
          endpoints,
          endDate: responseData.end_date,
          duration: responseData.duration,
          jobName: responseData.job_name,
          branch: responseData.branch,
          githubUser: responseData.github_user,
          commit: responseData.commit,
          environmentUrl: responseData.environment_url,
        } as OrganizationReportDetail;
      }
    } catch (e) {
      console.log(e);
    }

    return reportDetails;
  }
}

export default new OrganizationService();
