import React from "react";
import { ReportEndpoint } from "../../../../models/ReportEndpoint";
import { getMinutesFromMilliseconds } from "../../../../shared/utils";
import './EndpointTile.scss';

type ComponentProps = {
  endpoint: ReportEndpoint
}

const EndpointTile: React.FunctionComponent<ComponentProps> = ({ endpoint }) => {
  const minutesDuration = getMinutesFromMilliseconds(endpoint.duration);
  const auxClass = endpoint.status === "SUCCESS" ? 'succeed' : 'failed';

  return (
    <div className={`EndpointTile failed ${auxClass}`}>
      <span className="url">{endpoint.url}</span>
      <span className="time">{`${minutesDuration}s`}</span>
    </div>
  );
}

export default EndpointTile;
