import { get } from "lodash";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import { routes } from ".";
import { SideNav } from "../components/SideNav";
import { ReportDetails, Reports } from "../screens";

export function OrganizationRouter() {
  const params = useParams();

  const id = get(params, "id");

  return (
    <BrowserRouter>
      <div className="flex">
        <div className="w-60">
        <SideNav organizationId={id}></SideNav>
        </div>
        <div className="flex-1 m-8">
          <Switch>
            <Route
              path={[routes.organization, routes.testReports]}
              component={Reports}
              exact
            />
            <Route
              path={routes.reportDetails}
              component={ReportDetails}
              exact
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
