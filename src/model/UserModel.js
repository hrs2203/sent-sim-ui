const STORAGE_USER = 'STORAGE_USER'

const USER_GET = "USER_GET"
const USER_UPDATE = "USER_UPDATE"
const USER_LOGOUT = "USER_LOGOUT"

export const USER_ACTION = { USER_GET, USER_UPDATE, USER_LOGOUT };

export const initial_user = () => {
	const userData = localStorage.getItem(STORAGE_USER) || "{}"
	return JSON.parse(userData)
}

export function UserReducer(state = initial_user(), action = {}) {
	const { type, payload } = action;

	if (type === USER_LOGOUT) {
		localStorage.removeItem(STORAGE_USER)
	} else {
		localStorage.setItem(
			STORAGE_USER, JSON.stringify({ ...state, ...payload })
		)
	}

	switch (type) {
		case USER_GET:
			return { ...state }
		case USER_UPDATE:
			return { ...state, ...payload }
		case USER_LOGOUT:
			return {}
		default:
			return { ...state }
	}
}