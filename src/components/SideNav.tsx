import { useRecoilValueLoadable } from "recoil";
import { get } from "lodash";
import { Link } from "react-router-dom";
import { organizationDetailsState } from "../state/organizationDetailState";
import { Header } from ".";
import { routes } from "../router";
import { SideNavProps } from "../types";


export function SideNav({ organizationId }: SideNavProps) {
  const { contents, state } = useRecoilValueLoadable(
    organizationDetailsState(organizationId)
  );

  return (
    <div className="w-60 h-full fixed bg-blueGray-50 border-r-2 border-gray-300">
      <div className="flex flex-col items-center">
        <Header />
        <p className="text-center text-xl pt-2">
          {state === "hasError" || state === "loading"
            ? null
            : get(contents, "name")}
        </p>
        <ul className="mt-16 text-xl w-full font-medium">
          <Link
            to={routes.organization.replace(":id", organizationId)}
            className="flex items-center"
          >
            <span className="absolute">►</span>
            <li className="mx-auto text-purple-800 list-style-type-play">Test Reports</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
