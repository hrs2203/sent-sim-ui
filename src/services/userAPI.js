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

export async function getUserDetails(id) {
	const resp = await server_api.get(`/userhistory?pk=${id}`)
	return resp;
}

export async function addCredit(id, amt) {
	const resp = await server_api.get(`add_credit/${id}/${amt}`)
	return true
}

export async function sentenceList(hid) {
	const resp = await server_api.get(`history_sentences?hid=${hid}`);
	const r = resp.data.data
	if (Object.getPrototypeOf(r) === Object.getPrototypeOf([]))
		return r;
	return []
}

