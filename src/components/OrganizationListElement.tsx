import React from 'react'
import { Link } from 'react-router-dom';
import { Organization } from '../pages/Organizations'

interface Props {
    org: Organization;
}

export const OrganizationListElement = (props: Props) => {
    

    return (
        <li>
            <Link to={`/reports/${props.org.id}/${props.org.name}`} >
                <div className="icon">

                </div>
                <div className="org-name">
                    {props.org.name}
                </div>
            </Link>
        </li>
    )
}
