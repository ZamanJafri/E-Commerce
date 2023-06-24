import React from 'react'
import JustArrivedItem from './JustArrivedItem'

const JustArrived = () => {
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Just Arrived</span></h2>
                </div>
                <div className="row px-xl-5 pb-3">
                    <JustArrivedItem />
                    <JustArrivedItem />
                    <JustArrivedItem />
                    <JustArrivedItem />
                </div>
            </div>
        </>
    )
}

export default JustArrived
