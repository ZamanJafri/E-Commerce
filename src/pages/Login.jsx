import React from 'react'
import { Link } from 'react-router-dom'
import './signLogin.css'
const Login = () => {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center mt-5">
                <div className='bg-dark'
                    style={{ maxWidth: "400px" }}>
                    <div className="pt-5">
                        <h2 className='text-center text-light'>Login</h2>
                    </div>
                    <form action="" className='p-4'>
                        <div className="form-group">
                            <label htmlFor="username">
                                <i>Username</i>
                            </label>
                            <input type="text" name="" id="username" className='form-control'
                                autoComplete='off' placeholder='write your username' />
                        </div>
                        <div className="form-group">
                            <label for="password">
                                <i>Password</i>
                            </label>
                            <input type="password" className="form-control" id="password"
                                autoComplete='off' placeholder="Password" />
                        </div>
                        <button className='btn btn-primary' type='submit'>Login</button>
                        <br />
                        <span className='mx-3'>If u don't have an account
                            <i className='mx-2'>
                                <Link to='/register'>click here</Link>
                            </i>
                        </span>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
