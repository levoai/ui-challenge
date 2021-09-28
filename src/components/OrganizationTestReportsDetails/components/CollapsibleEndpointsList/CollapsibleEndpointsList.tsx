import React, { useState, ReactNode } from "react";
import { ReportEndpoint } from "../../../../models/ReportEndpoint";
import { IoIosArrowDown, IoIosArrowUp, BsFillXCircleFill } from 'react-icons/all';
import EndpointTile from '../EndpointTile';
import './CollapsibleEndpointsList.scss';

type ComponentProps = {
  endpoints: Array<ReportEndpoint>,
  Icon: ReactNode,
  title: string,
}

const CollapsibleEndpointsList: React.FunctionComponent<ComponentProps> = ({ endpoints, Icon, title }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const switchCollapsed = () => {
    setCollapsed(!collapsed);
  }

  const CollapsedIndicator = collapsed ? IoIosArrowUp : IoIosArrowDown;

  return (
    <div className="CollapsibleEndpointsList">
      <div className="collapsible-header">
        <CollapsedIndicator color="#788896" onClick={switchCollapsed} />
        {Icon}
        <span className="title">{title}</span>
      </div>
      {
        !collapsed && <div className="collapsible-body">
          {
            endpoints && endpoints.map((endpoint: ReportEndpoint) => <EndpointTile endpoint={endpoint} />)
          }
        </div>
      }
    </div>
  );
}

export default CollapsibleEndpointsList;
