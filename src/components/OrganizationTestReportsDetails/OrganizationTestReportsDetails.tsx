import React, {ReactNode} from 'react'
import './OrganizationTestReportsDetails.scss'

type ComponentProps = {
  children: ReactNode;
}

const OrganizationTestReportsDetails: React.FunctionComponent<ComponentProps> = ({children}) => {
  return (
    <div className="OrganizationTestReportsDetails">
      {children}
    </div>
  )
}

export default OrganizationTestReportsDetails;
