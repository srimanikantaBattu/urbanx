import React from 'react'
import {Outlet} from 'react-router-dom'
function RootLayout() {
  return (
    <div className="">
       <div className="" style={{minHeight:"90vh"}}>
       <Outlet />
       </div>
    </div>
  )
}

export default RootLayout;