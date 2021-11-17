import { Link } from "react-router-dom";
import { routes } from "../router";
import { ReportItemProps } from "../types";
import { formatDistance, addMilliseconds } from "date-fns";

export function ReportItem({ report, organizationId }: ReportItemProps) {
  const timeAgo = formatDistance(new Date(report.start_date), new Date(), {
    addSuffix: true,
  });
  const longTime = formatDistance(
    new Date(report.start_date),
    addMilliseconds(new Date(report.start_date), report.duration)
  );

  return (
    <Link
      to={routes.reportDetails
        .replace(":id", organizationId.toString())
        .replace(":reportId", report.id.toString())}
      className="flex px-4 py-2 my-1 items-center bg-blueGray-50"
    >
      <div className="flex flex-1 flex-col">
        <p className="text-gray-500 text-lg font-medium">Execution #{report.id}</p>
        <p className="text-gray-400 text-sm mt-1">{timeAgo} - {longTime} long</p>
      </div>
      <div className="w-32 text-green-800 text-center">
        <p>{report.succeed_tests} passed</p>
      </div>
      <div className="w-32 text-red-600 text-center">
        <p>{report.failed_tests} failed</p>
      </div>
    </Link>
  );
}

export default ReportItem;
