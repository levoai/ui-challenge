import React, {useState} from 'react';
import axios from "axios";
import '../App.css';

import {ResponseToCamel} from "../index";
import LevoLogo from "../components/LevoLogo";
import LoadingComponent from "../components/LoadingComponent";
import {useParams} from "react-router-dom";
import ReportDetail from "../components/ReportDetail";
import EndpointReport from "../components/EndpointReport";
let loading = true;

export interface IReportEndpoint {
    duration: number;
    status: string;
    url: string;
}
export interface ITestReportDetail {
    branch: string;
    commit: string;
    duration: number;
    endDate: string;
    endpoints: IReportEndpoint[];
    environmentUrl: string;
    githubUser: string;
    id: number;
    jobName: string;
}

export default function TestReportDetail() {
    const [reportDetail, setReportDetail] = useState<ITestReportDetail>();
    let { id, reportId } = useParams();
    React.useEffect(() => {
        loading = true;
        axios.get(`https://my.api.mockaroo.com/organizations/${id}/reports/${reportId}/details.json?key=2e435a20`).then((res) => {
            loading = false;
            res && res.data && setReportDetail(ResponseToCamel(res.data));
        })
    }, []);

    if (loading) {
        return (<LoadingComponent/>)
    }
    return (
        <div>
            <LevoLogo/>
            {reportDetail && <h3>Organizations</h3>}
            {reportDetail && <h4>Test reports</h4>}
            {reportDetail &&
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '160px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '30%'}}>
                        <ReportDetail reportDetail={reportDetail}/>
                        <h3>Failed tests</h3>
                    {reportDetail.endpoints.filter(endpoint => endpoint.status !== 'SUCCESS').map((endpointReport: IReportEndpoint, i) => (
                        <EndpointReport key={i} endpointReport={endpointReport}/>
                ))}
                        <h3>Passed tests</h3>
                    {reportDetail.endpoints.filter(endpoint => endpoint.status === 'SUCCESS').map((endpointReport: IReportEndpoint, i) => (
                        <EndpointReport key={i} endpointReport={endpointReport}/>
                ))}
                </div>
            </div>}
        </div>
    );
}
