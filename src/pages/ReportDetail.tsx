import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ReportDetailComponent } from '../components/ReportDetailComponent';
import useFetchData from "../hooks/useFetchData";

interface MatchParams {
    org_id: string;
    org_name: string;
    report_id: string;
}

interface EndpointObj {
    url: string;
    duration: number;
    status: string;
}

export interface ReportDetailObj {
    id: number;
    endpoints: Array<EndpointObj>;
    end_date: string;
    duration: number;
    job_name: string;
    branch: string;
    github_user: string;
    commit: string;
    environment_url: string;
}

interface Props extends RouteComponentProps<MatchParams> { 

}


export const ReportDetail = (props: Props) => {
    const url = `https://my.api.mockaroo.com/organizations/${props.match.params.org_id}/reports/${props.match.params.report_id}/details.json?key=2e435a20`;
    const { loading, error, response } = useFetchData(url); //wired for this poc

    return (
        <Layout subtitle={props.match.params.org_name}>
            <p><Link to={`/reports/${props.match.params.org_id}/${props.match.params.org_name}`}>Test Reports</Link> &gt; Execution # {props.match.params.report_id}</p>
            {loading && <p>Loading</p>}
            {error && <p>error</p>}
            {!loading && response && response.id &&
                <ReportDetailComponent {...response as ReportDetailObj} />
            }
        </Layout>
    )
}
