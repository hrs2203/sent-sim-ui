import _ from "lodash";
import { useSelector } from "react-redux";

export default function LoginPage() {
	const { userDetail } = useSelector((state) => {
		console.log(state);
		return { userDetail: _.get(state, ["UserReducer"], { "404": "noting found" }) }
	})

	return (
		<div>
			{JSON.stringify(userDetail)}
		</div>
	)
}