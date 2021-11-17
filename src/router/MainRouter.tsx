import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Organizations } from "../screens";
import { OrganizationRouter } from "./OrganizationRouter";
import { routes } from "./routes";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          component={Organizations}
          path={[routes.organizations, routes.home]}
          exact
        />
        <Route component={OrganizationRouter} path={routes.organization} />
      </Switch>
    </BrowserRouter>
  );
}
