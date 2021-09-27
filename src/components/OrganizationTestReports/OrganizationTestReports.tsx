import React from 'react'
import './OrganizationTestReports.scss'

const OrganizationTestReports = (props: React.PropsWithChildren<any>) => {
  return (
    <div className="OrganizationTestReports">
      {props.children}
    </div>
  )
}

export default OrganizationTestReports;