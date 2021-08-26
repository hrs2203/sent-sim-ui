import axios from "axios";

export const login_user_api = (email, password) => {
    return axios.post(
        "http://127.0.0.1:8000/api/login",
        { email: email, password: password }
    ).then(resp => resp.data).then(response => {
        const status = response["statue"];
        console.log(response);
        if (status === 200) {
            const userData = response["data"];
            return {
                "username": userData["username"],
                "email": userData["email"],
            }
        } else {
            return undefined;
        }
    }).catch(err => {
        return undefined
    });
}
