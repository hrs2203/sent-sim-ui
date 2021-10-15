import { useState } from "react"
import { register } from "../api/LoginApi"

const RegisterPage = ({ name }) => {

    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const on_username_trigger = ( e ) => {
        setusername(e.target.value)
    }

    const on_email_trigger = ( e ) => {
        setemail(e.target.value)
    }

    const on_password_trigger = ( e ) => {
        setpassword(e.target.value)
    }
    

    return (
        <div>
            <div className="card p-2 mt-5" >
                <div className="m-4">
                    <div className="form-group m-1">
                        <label>User Name</label>
                        <input type="UserName"
                            className="form-control"
                            id="exampleInputUserName1"
                            value={username}
                            placeholder="Enter User Name"
                            onChange={on_username_trigger}
                        />
                    </div>
                    <br />
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
                            onChange={on_password_trigger}
                        />
                        <small id="passwordHelp" className="form-text text-muted">
                            never share your password with anyone else.
                        </small>
                    </div>
                    <br></br>
                    <button
                        type=""
                        className="btn btn-outline-success"
                        onClick={() => register(username, email, password)}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
