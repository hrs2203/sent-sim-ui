export const USER_ACTIONS = [
	"USER_GET", "USER_UPDATE"
]

export const INITIAL_USER = {
	"name": "james"
}

export function UserReducer(state = INITIAL_USER, action = {}) {
	const { type, payload } = action;
	switch (type) {
		case "USER_GET":
			return { ...state }
		case "USER_UPDATE":
			return { ...state }
		default:
			return { ...state }
	}
}