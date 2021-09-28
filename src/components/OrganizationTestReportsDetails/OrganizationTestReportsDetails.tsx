import React, { useEffect, useState } from "react";
import { MainMenu } from "../App/MainMenu";
import OrganizationService from "../../services/organizations.service";
import { Organization } from "../../models/Organization";
import { OrganizationReportDetail } from "../../models/OrganizationReportDetail";
import { Breadcrumb } from "../App/Breadcrumb";
import { BsFillXCircleFill, AiFillCheckCircle } from "react-icons/all";
import ReportSummary from "./components/ReportSummary";
import { ReportEndpoint } from "../../models/ReportEndpoint";
import CollapsibleEndpointsList from './components/CollapsibleEndpointsList'
import './OrganizationTestReportsDetails.scss';

const OrganizationTestReportsDetails: React.FunctionComponent = (props: React.PropsWithChildren<any>) => {
  const [testReportDetails, setTestReportDetails] = useState<OrganizationReportDetail>({} as OrganizationReportDetail);
  const [organization, setOrganization] = useState<Organization>({} as Organization);
  const [breadcrumbData, setBreadcrumbData] = useState<Array<any>>([
    {
      isLink: true,
      name: 'Test Reports',
      id: 1,
    },
  ]);
  const [searchValue, setSearchValue] = useState<string>('');

  const loadData = async () => {
    const { organizationId, reportId } = props.match.params
    const organization: Organization = await OrganizationService.getOrganization(organizationId);
    const reportDetails: OrganizationReportDetail = await OrganizationService.getReportDetails(organizationId, reportId);
    setOrganization(organization);
    setTestReportDetails(reportDetails);
    setBreadcrumbData([
      ...breadcrumbData,
      {
        isLink: false,
        name: organization.name,
        id: 2,
      }
    ]);
  }

  const getSucceedEndpoints = () => {
    const suceedEndpoints = testReportDetails.endpoints
      ? testReportDetails.endpoints.filter((endpoint: ReportEndpoint) => endpoint.status === "SUCCESS")
      : [];
    return filterEndpointsByUrl(suceedEndpoints);
  }

  const getFailedEndpoints = () => {
    const failedEndpoints = testReportDetails.endpoints
      ? testReportDetails.endpoints.filter((endpoint: ReportEndpoint) => endpoint.status !== "SUCCESS")
      : [];
    return filterEndpointsByUrl(failedEndpoints);
  }

  const filterEndpointsByUrl = (endpoints: Array<ReportEndpoint>) => {
    return searchValue
      ? endpoints.filter((endpoint: ReportEndpoint) => endpoint.url.includes(searchValue))
      : [...endpoints];
  }

  const getTotalEndpoints = () => {
    return (testReportDetails.endpoints ?? []).length;
  }

  const onSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="OrganizationTestReportsDetailsContainer">
      <MainMenu organizationName={organization.name} />
      <div className="OrganizationTestReportsDetails">
        <div className="breadcrumb-container">
          <Breadcrumb breadcrumbItems={breadcrumbData} />
          <div className="failed-flag">
            <BsFillXCircleFill />
            <span>FAILED</span>
          </div>
        </div>
        <div className="test-report-container">
          <ReportSummary report={testReportDetails} />
          <div className="results-container">
            <div className="results-tab purple">Results</div>
          </div>
          <div className="searchbar">
            <input
              type="text"
              value={searchValue} onChange={onSearch}
              placeholder="Filter by endpoint..."
            />
          </div>
          {
            testReportDetails.endpoints &&
            <CollapsibleEndpointsList
              endpoints={getFailedEndpoints()}
              Icon={<BsFillXCircleFill color="#D3455B" />}
              title={`Failed tests (${getFailedEndpoints().length} / ${getTotalEndpoints()})`}
            />
          }
          {
            testReportDetails.endpoints &&
            <CollapsibleEndpointsList
              endpoints={getSucceedEndpoints()}
              Icon={<AiFillCheckCircle color="#1BAE9F" />}
              title={`Passed tests (${getSucceedEndpoints().length} / ${getTotalEndpoints()})`}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default OrganizationTestReportsDetails;
