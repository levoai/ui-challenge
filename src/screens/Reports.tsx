import { get } from "lodash";
import { useParams } from "react-router";
import { useRecoilValueLoadable } from "recoil";
import { ReportItem } from "../components";
import { reportsState } from "../state/reportsState";
import { IReport } from "../types";

export function Reports() {
  const params = useParams();
  const organizationId = get(params, "id");

  const { contents, state } = useRecoilValueLoadable(
    reportsState(organizationId)
  );

  const reports: IReport[] = state === "hasValue" ? contents : [];

  return (
    <div className="w-full flex flex-col gap-2">
      <p className="text-2xl text-indigo-600">Test Reports</p>
      <br />
      {reports.map((report) => (
        <ReportItem
          key={report.id}
          report={report}
          organizationId={organizationId}
        />
      ))}
    </div>
  );
};

export default Reports;
