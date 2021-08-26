import axios from "axios";

export const login_user_api = (email, password) => {
    return axios.post(
        "http://127.0.0.1:8000/api/login",
        { email: email, password: password }
    ).then(data => data).catch(err => {
        console.log(err);
        return undefined
    });
}
