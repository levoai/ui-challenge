import React, {useState} from 'react';
import axios from "axios";
import '../App.css';
import { ResponseToCamel} from "../index";
import LevoLogo from "../components/LevoLogo";
import LoadingComponent from "../components/LoadingComponent";
import {useNavigate, useParams} from "react-router-dom";
import TestReport from "../components/TestReport";
let loading = true;

export interface IExecutions {
    duration: number;
    failedTests: number;
    id: number;
    name: string;
    startDate: string;
    succeedTests: number;
}

export default function TestReports() {
    let navigate = useNavigate();
    let { id } = useParams();
    const [executions, setExecutions] = useState<IExecutions[]>();


    React.useEffect(() => {
        loading = true;
        axios.get(`https://my.api.mockaroo.com/organizations/${id}/reports.json?key=2e435a20`).then((res) => {
            loading = false;
            res && res.data && setExecutions(ResponseToCamel(res.data));
        })
    }, []);

    if (loading) {
        return (<LoadingComponent/>)
    }
    return (
        <div>
            <LevoLogo/>
            {executions && <h3>Organizations</h3>}
            {executions && <h4>Test reports</h4>}
            {executions &&
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '160px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '30%'}}>
                {executions.map((execution: IExecutions, i) => (
                    <TestReport key={i} execution={execution} onClick={() => {
                        navigate(`/organizations/${id}/reports/${execution.id}`, );
                    }}/>
                ))}
                </div>
            </div>}
        </div>
    );
}
