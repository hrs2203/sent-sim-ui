export const url = "http://127.0.0.1:8000"

export const getPost = (body) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    };
}

export const login = (email, password) => {
    return fetch(`${url}/api/login`, getPost({
        "email": email, "password": password
    })).then(data => data.json()).then(d => {
        console.log(d);
        return d;
    }).catch(_ => { })
}

export const register = (username, email, password) => {
    return fetch(`${url}/api/register`, getPost({
        "username": username, "email": email, "password": password
    })).then(data => data.json()).then(d => {
        console.log(d);
        return d;
    }).catch(_ => { })
}
