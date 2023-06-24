import React from 'react'
import { Link } from 'react-router-dom'
import './signLogin.css'
const Registration = () => {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center mt-5">
            <div className='bg-dark'
                    style={{ maxWidth:"400px"}}>
                <div className="pt-5">
                    <h2 className='text-center text-light'>Registration</h2>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <form action="" className='p-3' >
                        <div className="form-group inPut">
                            <label htmlFor="username">
                               <i>Username</i>
                                </label>
                            <input type="text" name="" id="username" className='form-control'
                                autoComplete='off' placeholder='write your username' />
                        </div>
                        <div className="form-group">
                            <label for="email">
                            <i>Email</i>
                                </label>
                            <input type="email" className="form-control" id="email"
                                autoComplete='off' placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label for="password">
                            <i>Password</i>
                                </label>
                            <input type="password" className="form-control" id="password"
                                autoComplete='off' placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label for="confirmpassword">
                                <i>Confirm Password</i>
                                </label>
                            <input type="confirmpassword" className="form-control" id="confirmpassword"
                                autoComplete='off' placeholder="confirmPassword" />
                        </div>
                        <button className='btn btn-primary' type='submit'>Submit</button>
                        <br />
                        <span className='mx-3'>If already have an account
                            <i className='mx-2'>
                                <Link to='/login'>click here</Link>
                            </i>
                        </span>
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default Registration
