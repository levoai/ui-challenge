import React, {MouseEventHandler} from 'react';
import '../App.css';
import {IOrganization} from "../routes/Organizations";

export default function Organization({organization, onClick}: {organization: IOrganization, onClick: MouseEventHandler}) {
    return (
            <div style={{}} onClick={onClick} className="organization-item">
                <div className="organization-icon">
                    <img src={organization.ownerPicture} alt={`${organization.ownerName}`} className="company-pic"/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%',
                        fontSize: '30px', color: 'white'}}>
                        <p  className="company-name">{organization.name}</p>
                    </div>
                </div>
            </div>
    );
}
