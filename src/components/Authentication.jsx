import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login_user, logout_user } from "../data/userDetail";
import { login_user_api } from "../api/auth";

const LoginForm = () => {
    const [userName, setUserName] = useState(undefined);
    const [password, setpassword] = useState(undefined);
    const dispatchAction = useDispatch();

    const handelUserNameChange = (e) => { setUserName(e.target.value); }
    const handelPasswordChange = (e) => { setpassword(e.target.value); }
    const loginFunction = async () =>  {
        const loginResponse = await login_user_api(userName, password);
        console.log(loginResponse);
        dispatchAction(login_user(loginResponse));
    }

    return (
        <>
            <input type="text" name="userName"
                onChange={handelUserNameChange}
                id="userName" placeholder="email" />
            <input type="password" name="password"
                onChange={handelPasswordChange}
                id="password" placeholder="password" />
            <button onClick={loginFunction}>login</button>
        </>
    )

}

const Authentication = () => {
    const userDetail = useSelector(state => state.userDetail.value);
    const dispatchAction = useDispatch();

    if (userDetail === undefined) {
        return (
            <div>
                <LoginForm />

            </div>
        )
    } else {
        return (
            <div>
                userObj  : {JSON.stringify(userDetail)}
                <br />
                <button onClick={() => {
                    dispatchAction(logout_user());
                }}>Logout</button>
            </div>
        )
    }

}

export default Authentication;