import axios from "axios";
import { IOrganization, IReport, IReportDetails } from "../types";

const baseUrl = "https://my.api.mockaroo.com";
const key = "2e435a20";

interface MockarooAPI {
  getAllOrganization(): Promise<IOrganization[]>;
  getOrganizationDetails(id: string): Promise<IOrganization>;
  getAllReports(organizationId: string): Promise<IReport[]>;
  getReportDetails(
    organizationId: string,
    reportId: string
  ): Promise<IReportDetails>;
}

export const mockarooApi: MockarooAPI = {
  async getAllOrganization() {
    const res = await axios
      .get(`${baseUrl}/organizations.json?key=${key}`);
    return res.data;
  },

  async getOrganizationDetails(id) {
    const res = await axios
      .get(`${baseUrl}/organizations/${id}.json?key=${key}`);
    return res.data;
  },

  async getAllReports(organizationId) {
    const res = await axios
      .get(`${baseUrl}/organizations/${organizationId}/reports.json?key=${key}`);
    return res.data;
  },
  
  async getReportDetails(organizationId, reportId) {
    const res = await axios
      .get(
        `${baseUrl}/organizations/${organizationId}/reports/${reportId}/details.json?key=${key}`
      );
    return res.data;
  },
};
