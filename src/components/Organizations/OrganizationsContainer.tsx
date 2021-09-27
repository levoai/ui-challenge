import React, { useEffect, useState } from "react";
import Organizations from './Organizations';
import OrganizationService from "../../services/organizations.service";
import { Organization } from '../../models/Organization';
import { Logo } from "../App/Logo";
import OrganizationTile from "./components/OrganizationTile";
import { Link } from 'react-router-dom';

const OrganizationsContainer: React.FunctionComponent = () => {
  const [organizations, setOrganizations] = useState<Array<Organization>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadOrganizations();
  }, []);

  const loadOrganizations = async () => {
    const organizations: Organization[] = await OrganizationService.getOrganizations();
    setOrganizations(organizations);
    setLoading(false);
  }

  return (<div className="OrganizationsContainer">
    <header className="App-header">
      <Logo />
    </header>
    <Organizations>
      <h2>Organizations</h2>
      <p>Pick the organization you want to access to</p>
      {
        loading ? <span>Loading...</span> :
          (organizations.length > 0
            ? organizations.map((organization: Organization) => <div key={organization.id}>
              <Link to={`/organizations/${organization.id}/test-reports`}>
                <OrganizationTile organization={organization} />
              </Link>
            </div>)
            : <span>No Organizations found :(</span>
          )
      }
    </Organizations>
  </div>);
}

export default OrganizationsContainer;