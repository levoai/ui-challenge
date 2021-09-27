import React, { useEffect, useState, useContext } from "react";
import OrganizationTestReports from './OrganizationTestReports';
import OrganizationService from "../../services/organizations.service";
import { Organization } from '../../models/Organization';
import { OrganizationReport } from "../../models/OrganizationReport";
import { MainMenu } from "../App/MainMenu";
import TestReportTile from "./components/TestReportTile";
import { Link } from 'react-router-dom';

const OrganizationTestsContainer: React.FunctionComponent = (props: React.PropsWithChildren<any>) => {
  const [testReports, setTestReports] = useState<Array<OrganizationReport>>([]);
  const [organization, setOrganization] = useState<Organization>({} as Organization);

  const loadData = async () => {
    const { organizationId } = props.match.params
    const organization: Organization = await OrganizationService.getOrganization(organizationId);
    const organizationReports: OrganizationReport[] = await OrganizationService.getOrganizationReports(organizationId);
    setOrganization(organization);
    setTestReports(organizationReports);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="OrganizationTestsContainer">
      <MainMenu organizationName={organization.name} />
      <OrganizationTestReports>
        <h2>Test Reports</h2>
        {
          testReports.map((report: OrganizationReport) => (
            <Link to={`/organizations/${organization.id}/test-reports/${report.id}`}>
              <TestReportTile report={report} />
            </Link>
          ))
        }
      </OrganizationTestReports>
    </div>
  );
}

export default OrganizationTestsContainer;
