import React from 'react'
import './Organizations.scss'

const Organizations = (props: React.PropsWithChildren<any>) => {
  return (
    <div className="Organizations">
      {props.children}
    </div>
  )
}

export default Organizations;