import React, { useEffect,useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SideBar from '../Components/SideBar';
import TopBar from '../Components/TopBar';
import MockData from '../MockData';
import OrganizationContext from '../OrganizationContext';
import { Reports, RouterParams } from "../APIResponseTypes";
import Reportcard from '../Components/ReportCard';
import * as moment from 'moment';

export const TestReporList: React.FunctionComponent = () => {

    const { orgId } = useParams<RouterParams>();
    const [reports, setReports] = useState([] as Reports[]);
    const [organizations, setOrganizations] = useContext(OrganizationContext);

    useEffect(() => {
        requestAndSetReports();
    }, [])

    async function requestAndSetReports() {
        //Uncomment when APIs are available
        // const res = await fetch(`https://my.api.mockaroo.com/organizations/${orgId}/reports.json?key=2e435a20`);
        // const json = await res.json();
        // @ts-ignore
        setReports(MockData[1]);
    }

    // @ts-ignore
    var activeOrganization = organizations.find(o => o.id == orgId);

    return (  
            <div className="App">
            <TopBar></TopBar>
                <div className='App-body '>
                <SideBar title={activeOrganization ? activeOrganization.name : ""}></SideBar>
                    <div className="content">
                        <p>Test Reports</p>
                        <div className="report-box">
                        {reports.map(({id, name, failed_tests, succeed_tests, duration, start_date})=> 
                            <Reportcard 
                                key={id}
                                orgId={orgId}
                                reportId={id}
                                failed_tests={failed_tests}
                                succeed_tests={succeed_tests}
                                // @ts-ignore
                                duration={moment.duration(duration).humanize()}
                                // @ts-ignore
                                start_date={moment(start_date, "YYYYMMDD").fromNow()}
                                name={name}
                            />
                        )}
                        </div>
                    </div>
                </div> 
            </div>
    );
}

export default TestReporList;