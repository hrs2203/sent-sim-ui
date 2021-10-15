import { useState } from "react";
import { login } from "../api/LoginApi";


const LoginPage = ({ setUser, setPageName }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const on_email_trigger = ( e ) => {
        setEmail(e.target.value)
    }
    const on_pass_trigger = ( e ) => {
        setPassword(e.target.value)
    }

    const loginAction = () => {
        login(email, password).then( resp => resp["data"] ).then( user => {
            setUser(user)
            setPageName("userdetail")
        } )
    }

    

    return (
        <div>
            <div className="card p-2 mt-5" >
                <div className="m-4">
                    <div className="form-group m-1">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            value={email}
                            placeholder="Enter email"
                            onChange={on_email_trigger}
                        />
                    </div>
                    <br />
                    <div className="form-group m-1">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            placeholder="Password"
                            onChange={on_pass_trigger}
                        />
                        <small id="passwordHelp" className="form-text text-muted">
                            never share your password with anyone else.
                        </small>
                    </div>
                    <br></br>
                    <button
                        className="btn btn-outline-success"
                        onClick={loginAction}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
