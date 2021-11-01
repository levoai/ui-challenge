import React from 'react'
import { Layout } from '../components/Layout'
import { OrganizationListElement } from '../components/OrganizationListElement'
import useFetchData from "../hooks/useFetchData";

interface Props {
    title: string,
    subtitle: string,
    organizations?: Array<string>,
}

export interface Organization {
    id: number;
    name: string;
    owner_email: string;
    owner_name: string;
    owner_picture: string;
}

export const Organizations = (props: Props) => {
    const { loading, error, response } = useFetchData("https://my.api.mockaroo.com/organizations.json?key=2e435a20"); //wired for this poc

    return (
        <Layout>
            <div>
            <h1>Organizations</h1>
            <h2>Pick the organization you want to access to</h2>
            {loading && <p>loading</p>}
            {error && <p>Error</p>}
            {!loading && response && 
                <ul className="list-unstyled">
                    {Object.entries(response).map(([key, value]) => <li><OrganizationListElement org={value as Organization} /> </li> )}
                </ul>
            }
            </div>
        </Layout>
    )
}
