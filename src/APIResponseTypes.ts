
export interface Organizations {
    id: number;
    name: string;
  }

  export interface Reports {
    id: number;
    name: string;
    failed_tests: number;
    succeed_tests: number;
    duration: number;
    start_date: Date;
  }

  export interface Details {
    id: number;
    endpoints: {
      url: string,
      duration: number,
      status: string
    }[];
    end_date: Date;
    duration: number;
    job_name: string;
    branch: string;
    github_user: string;
    commit: string;
    environment_url: string;
  }

 export interface RouterParams {
    orgId: string;
    reportId: string;
  }