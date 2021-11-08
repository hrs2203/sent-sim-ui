import Header from "./Header";
import { useSelector } from "react-redux";
import _ from "lodash"

export default function UserDetailPage() {
	const { username, email } = useSelector(state => Object({
		username: _.get(state, ["UserReducer", "userDetail", "username"], "username not found"),
		email: _.get(state, ["UserReducer", "userDetail", "email"], "email not found"),
	}))

	return (
		<div>
			<Header />
			<div className="flex px-10 py-4 justify-around overflow-x-auto">
				<div className="low_border mx-2 userDetail">
					<div className="flex">
						<div className="low_border circleShow mx-1">123</div>
						<div className="px-2 mx-1 sideDiv">
							<div className="low_border p-2 mx-1 mb-2">UserName : { username }</div>
							<div className="low_border p-2 mx-1 mb-2">Email : { email }</div>
						</div>
					</div>
					<div className="mt-2">
						<div className="low_border p-2 mx-1 mb-2">123</div>
						<div className="low_border p-2 mx-1 mb-2">123</div>
					</div>
				</div>
				<div className="low_border mx-2 userHistory">
					456
				</div>

			</div>
		</div>
	)
}