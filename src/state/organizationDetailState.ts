import { selectorFamily } from "recoil";
import { mockarooApi } from "../api/mockaroo.api";
import { IOrganization } from "../types";

export const organizationDetailsState = selectorFamily<
  Promise<IOrganization>,
  string
>({
  key: "organizationDetails",
  get: (id) => () => {
    return mockarooApi.getOrganizationDetails(id);
  },
});
