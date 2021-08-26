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
    const loginFunction = async () => {
        const loginResponse = await login_user_api(userName, password);
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

const UserPreview = ({ userdata }) => {
    if (userdata === undefined) {
        return <div> User Not logged in </div>
    }
    return (
        <div>
            userName: {userdata['username']}
            <br />
            email: {userdata['email']}
        </div>
    )
}

const Authentication = () => {
    const userDetail = useSelector(state => state.userDetail.value);
    const dispatchAction = useDispatch();

    if (userDetail === undefined) {
        return (
            <div>
                <LoginForm />
                <UserPreview userdata={userDetail} />
            </div>
        )
    } else {
        return (
            <div>
                <UserPreview userdata={userDetail} />
                <br />
                <button onClick={() => {
                    dispatchAction(logout_user());
                }}>Logout</button>
            </div>
        )
    }

}

export default Authentication;