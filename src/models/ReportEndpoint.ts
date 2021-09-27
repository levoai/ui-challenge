export type ReportEndpoint = {
  url: string,
  duration: number,
  status: "ERROR" | "SUCCESS" | "FAILURE",
}
