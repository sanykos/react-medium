import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch  from '../../hooks/useFetch'



const Authentication = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Custom hook
    const [{isLoading, response, error}, doFetch] = useFetch('/users/login')

   console.log(isLoading, response, error)

    const handleSubmit = (e) => {
        e.preventDefault()
        doFetch({
            method: 'post',
            data: {
                user: {
                    email: 'dfgdfds@mail.ru',
                    password: 'fgfdsfdsgdf'
                }
            }
        })
        console.log('data', email, password)
    }

  

    return(
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">
                        <h1 className="text-center">Login</h1>
                        <p className="text-center">
                            <Link to="register">Need an account</Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input 
                                    type="email" 
                                    className="form-control form-control-lg" 
                                    placeholder="Email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input 
                                    type="password" 
                                    className="form-control form-control-lg" 
                                    placeholder="Password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                </fieldset>
                                <button className="btn btn-lg btn-primary" type="submit" disabled={isLoading}>Sign in</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication