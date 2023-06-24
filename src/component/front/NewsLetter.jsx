import React from 'react'

const NewsLetter = () => {
    return (
        <>
            <div className="col-md-6 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                <form action="" className='py-4'>
                    <div className="form-group">
                        <input type="text" className="form-control border-0 p-4" placeholder="Your Name" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control border-0 p-4" placeholder="Your Email"
                            required="required" />
                    </div>
                    <div className='text-center'>
                        <button className="btn btn-info border-0 p-4" type="submit">Subscribe Now</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewsLetter
