import axios from 'axios';

const server_api = axios.create({
	baseURL: "http://127.0.0.1:8000/api/"
})

export async function loginUser(email, password) {
	const resp = await server_api.post("login", {
		"email": email, "password": password
	})
	return resp
}