const WORLD_GET = "WORLD_GET"
const WORLD_UPDATE = "WORLD_UPDATE"
const WORLD_TOGGLE = "WORLD_TOGGLE"
const WORLD_RESET = "WORLD_RESET"

export const WORLD_ACTION = { WORLD_GET, WORLD_TOGGLE, WORLD_UPDATE, WORLD_RESET }

const initial_world = () => {
	return {
		"isLoading": false
	}
}


export function WorldReducer(state = initial_world(), action = {}) {
	const { type, payload } = action;
	switch (type) {
		case WORLD_GET:
			return { ...state };
		case WORLD_UPDATE:
			return { ...state, ...payload };
		case WORLD_TOGGLE:
			return { ...state, isLoading: !state.isLoading };
		case WORLD_RESET:
			return initial_world()
		default:
			return { ...state };
	}
}