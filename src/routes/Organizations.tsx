import React, {useState} from 'react';
import axios from "axios";
import '../App.css';

import Organization from "../components/Organization";
import {ResponseToCamel} from "../index";
import LevoLogo from "../components/LevoLogo";
import LoadingComponent from "../components/LoadingComponent";
import {useNavigate} from "react-router-dom";
let loading = true;

export interface IOrganization {
    id: number;
    name: string;
    ownerEmail: string;
    ownerName: string;
    ownerPicture: string;
}

export default function Organizations() {
    let navigate = useNavigate();
    const [organizations, setOrganizations] = useState<IOrganization[]>();

    React.useEffect(() => {
        loading = true;
        axios.get(`https://my.api.mockaroo.com/organizations.json?key=2e435a20`).then((res) => {
            loading = false;
            res && res.data && setOrganizations(ResponseToCamel(res.data));
        })
    }, []);

    if (loading) {
        return (<LoadingComponent/>)
    }
    return (
        <div>
            <LevoLogo/>
            {organizations && <h3>Organizations</h3>}
            {organizations && <h4>Pick the organization you want to access to</h4>}
            {organizations &&
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '160px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '30%'}}>
                {organizations.map((organization: IOrganization, i) => (
                    <Organization key={i} organization={organization} onClick={() => {
                            navigate(`/organizations/${organization.id}/reports`, );
                    }}/>
                ))}
                </div>
            </div>}
        </div>
    );
}
