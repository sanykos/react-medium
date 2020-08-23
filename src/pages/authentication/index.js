import React from 'react'
import { Link } from 'react-router-dom'



const Authentication = () => {
    return(
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">
                        <h1 className="text-center">Login</h1>
                        <p className="text-center">
                            <Link to="register">Need an account</Link>
                        </p>
                        <form action="">
                            <fieldset>
                                <fieldset className="form-group">
                                    <input 
                                    type="email" 
                                    className="form-control form-control-lg" 
                                    placeholder="Email" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input 
                                    type="password" 
                                    className="form-control form-control-lg" 
                                    placeholder="Password" />
                                </fieldset>
                                <button className="btn btn-lg btn-primary" type="submit">Sign in</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication