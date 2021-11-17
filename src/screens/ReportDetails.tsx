import { get } from "lodash";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { Badge, ReportCard, ReportEndpoint } from "../components";
import { routes } from "../router";
import { reportDetailsState } from "../state/reportDetails";
import { EndpointStatusEnum, IEndpoint, ReportDetailsResultProps } from "../types";
import {
  CheckCircleSolid,
  ChevronRight,
  XCircleSolid,
} from "../utils/Images";

export function ReportDetails() {
  const params = useParams();

  const [textFilter, setTextFilter] = useState("");

  const organizationId = get(params, "id");
  const reportId = get(params, "reportId");

  const { contents, state } = useRecoilValueLoadable(
    reportDetailsState({
      organizationId,
      reportId,
    })
  );

  const endpoints: IEndpoint[] =
    state === "hasValue" ? get(contents, "endpoints") : [];

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextFilter(e.target.value.trim());
  }

  return (
    <div>
      <div className="flex gap-2">
        <p className="text-xl flex items-center">
          <Link
            to={routes.organization.replace(":id", organizationId.toString())}
            className="text-indigo-600 pr-6"
          >
            Test Reports
          </Link>
          <ChevronRight />
          <span className="px-2 pr-6">Execution #{reportId}</span>
        </p>
        {endpoints.length === 0 ? null : endpoints.filter(
            (e) => e.status !== EndpointStatusEnum.SUCCESS
          ).length > 0 ? (
          <Badge success={false} title="FAILED" />
        ) : (
          <Badge success={true} title="PASSED" />
        )}
      </div>
      <br />
      {state === "hasValue" ? (
        <ReportCard key={contents.id} report={contents} />
      ) : null}
      <br />
      <br />
      <input
        className="w-full text-black border-2 border-gray-400 placeholder-gray-300 rounded-md focus:border-purple-800"
        type="search"
        onChange={onChange}
        placeholder="Filter by endpoint..."
      />
      <br />
      <br />
      <ReportDetailsResult
        testsName="Failed Tests"
        endpoints={endpoints.filter(
          (e) => e.status !== EndpointStatusEnum.SUCCESS && e.url.includes(textFilter)
        )}
        total={endpoints.length}
        icon={
          <div className="text-red-600">
            <XCircleSolid />
          </div>
        }
      />
      <br />
      <br />
      <ReportDetailsResult
        testsName="Passed Tests"
        endpoints={endpoints.filter(
          (e) => e.status === EndpointStatusEnum.SUCCESS && e.url.includes(textFilter)
        )}
        total={endpoints.length}
        icon={
          <div className="text-green-600">
            <CheckCircleSolid />
          </div>
        }
      />
    </div>
  );
}



export const ReportDetailsResult: React.FunctionComponent<ReportDetailsResultProps> =
  ({ testsName, endpoints, total, icon }) => {
    return (
      <div>
        {endpoints.length > 0 && (
          <div>
            <div className="flex flex-row items-center gap-2">
              {icon}
              <p className="text-xl text-gray-500">
                {testsName} ({endpoints.length} / {total})
              </p>
            </div>
            <br />
            <div className="gap-2 flex flex-col">
              {endpoints.map((endpoint) => (
                <ReportEndpoint key={endpoint.url} endpoint={endpoint} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

export default ReportDetails;
