import { selector } from "recoil";
import { mockarooApi } from "../api/mockaroo.api";
import { IOrganization } from "../types";

export const organizationState = selector<Promise<IOrganization[]>>({
  key: "organizationState",
  get: () => {
    return mockarooApi.getAllOrganization();
  },
});
