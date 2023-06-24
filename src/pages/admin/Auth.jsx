import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'

const Auth = () => {
    return (
        <>
            <div className="container-fluid offer pt-5">
                <div className="row px-xl-5">
                    <div className="col-sm-3 pb-4">
                    <Sidebar />
                    </div>                   
                    <div className="col-sm-9">
                        <Outlet />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Auth
