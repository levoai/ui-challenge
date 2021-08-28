import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import TopBar from '../Components/TopBar';
import MockData from '../MockData';
import OrganizationContext from '../OrganizationContext';

export const OrganizationsPicker: React.FunctionComponent = () => {

    const [organizations, setOrganizations] = useContext(OrganizationContext);

    useEffect(() => {
        requestOrganizations();
    }, [])

    async function requestOrganizations() {
        //Uncomment when APIs are available
        // const res = await fetch("https://my.api.mockaroo.com/organizations.json?key=2e435a20");
        // const json = await res.json();
        // @ts-ignore
        setOrganizations(MockData[0]);
        
        //setOrganizations(Object.assign([], organizations, MockData[0]));
    }

    return (
        <div className="App flex-center">
            <TopBar></TopBar>
            <div className='flex flex-column width-100'>
            <div className="logo">Levo</div>
            <div className="flexbox flex-column flex-center">
                <h1 className="primary-color">Organizations</h1>
                <p className="secondary-color">Pick the organization you want to access to</p>
                {
                    // @ts-ignore
                    organizations ? organizations.map(({ name, id }) =>
                        <div className="org-box">
                            <Link to={`/organizations/${id}/reports`}>
                                <p>{name}</p>
                            </Link>
                        </div>)
                         : <div className="loader"></div>
                }
            </div>
            </div>
            
        </div>
    );
}

export default OrganizationsPicker;