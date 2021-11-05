import _ from "lodash"
import { useSelector } from "react-redux"

export default function Header() {
	const { isLoggedIn } = useSelector(state => Object({
		isLoggedIn: _.get(state, ["UserReducer", "isLoggedIn"], false)
	}))
	
	return (
		<nav>
			{`${isLoggedIn}`}
		</nav>
	)
}