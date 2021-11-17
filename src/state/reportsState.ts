import { selectorFamily } from "recoil";
import { mockarooApi } from "../api/mockaroo.api";
import { IReport } from "../types";

export const reportsState = selectorFamily<Promise<IReport[]>, string>({
  key: "reportsState",
  get: (id) => () => {
    return mockarooApi.getAllReports(id);
  },
});
