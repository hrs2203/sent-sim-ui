import { useDispatch } from "react-redux";
import Header from "./Header";

import { ACTION_SET } from "../model";

export default function HomePage() {
	const dispatch = useDispatch();

	const resetUser = () => {
		dispatch({
			type: ACTION_SET.USER_ACTION.USER_LOGOUT
		})
	}

	return (
		<div>
			<Header />
			<div>
				Homepage
				<br>
				</br>
				<button onClick={resetUser}>reset</button>
			</div>
		</div>
	)
}