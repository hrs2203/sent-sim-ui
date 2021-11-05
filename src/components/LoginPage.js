import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";

import { ACTION_SET } from "../model";

export default function LoginPage() {
	const dispatch = useDispatch();
	const { userDetail } = useSelector((state) => {
		return { userDetail: _.get(state, ["UserReducer"], { "404": "noting found" }) }
	})


	const updateUser = () => {
		const count = _.get(userDetail, ["count"], 0) + 1;
		dispatch({
			type: ACTION_SET.USER_ACTION.USER_UPDATE,
			payload: {
				"name": "hrishabh", "type": "too much worked up", "count": count
			}
		})
	}

	const resetUser = () => {
		dispatch({
			type: ACTION_SET.USER_ACTION.USER_LOGOUT
		})
	}

	return (
		<div>
			{JSON.stringify(userDetail)}
			<br /><br />
			<button onClick={updateUser}>update</button>
			<button onClick={resetUser}>reset</button>
		</div>
	)
}