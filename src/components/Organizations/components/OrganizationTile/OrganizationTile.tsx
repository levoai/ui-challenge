import React from "react";
import "./OrganizationTile.scss";

import { BsBuilding } from 'react-icons/bs';
import { Organization } from "../../../../models/Organization";

interface Props {
  organization: Organization
}

const OrganizationTile = (props: Props) => {
  return (
    <div className="OrganizationTile">
      <div className="OrganizationIcon">
        <BsBuilding size={22} color="#788896"/>
      </div>
      <h1 className="title">{props.organization.name}</h1>
    </div>
  );
}

export default OrganizationTile;
