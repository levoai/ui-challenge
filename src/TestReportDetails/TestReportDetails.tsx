import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../Components/SideBar';
import TopBar from '../Components/TopBar';
import OrganizationContext from '../OrganizationContext';
import { Details, RouterParams } from "../APIResponseTypes";
import { useParams } from 'react-router-dom';
import MockData from '../MockData';

export const TestReporDetails: React.FunctionComponent = () => {
    
    const { orgId } = useParams<RouterParams>();
    const [organizations, setOrganizations] = useContext(OrganizationContext);
    const [details, setDetails] = useState({} as Details);

    useEffect(() => {
        requestAndSetDetails();
    }, [])
    
    async function requestAndSetDetails() {
        //Uncomment when APIs are available
        // const res = await fetch("https://my.api.mockaroo.com/organizations.json?key=2e435a20");
        // const json = await res.json();
        // @ts-ignore
        setDetails(MockData[2]);
    }
    
    if(organizations.length > 0) {
        // @ts-ignore
        var activeOrg = organizations.find(o => o.id == orgId);
    }


    var successEndPoint = new Array;

    if(details.endpoints) {
        successEndPoint = details.endpoints.filter((e)=> e.status ==  "SUCCESS");
    }

    return (
        <div>
            <TopBar></TopBar>
            <div className="App-body">
                <SideBar title={activeOrg ? activeOrg.name : ""}></SideBar>
                <div className="">
                    <input type="text" name="name" />
                    <div className="Failed">
                        <div></div>
                    </div>
                    <div className="Passed">
                        {successEndPoint.map(({url})=> 
                            <div>{url}</div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TestReporDetails;