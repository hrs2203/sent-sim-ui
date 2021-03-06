import _ from "lodash"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { ACTION_SET } from "../model";
import { navigateTo } from "../util/navigation";

export default function Header() {
	const dispatch = useDispatch();
	const { isLoggedIn } = useSelector(state => Object({
		isLoggedIn: _.get(state, ["UserReducer", "isLoggedIn"], false),
	}))

	const item_style = "mx-2 my-2 px-2 w-40 item-center custom_nav_button"

	return (
		<nav className="custom_nav h-10 flex justify-center content-center">
			<Link to="/">
				<button className={item_style}>HomePage</button>
			</Link>
			{
				!isLoggedIn ? (<>
					<Link to="/login">
						<button className={item_style}>Login</button>
					</Link>
					<Link to="/register">
						<button className={item_style}>Register</button>
					</Link>
				</>) : (<>
					<Link to="/User">
						<button className={item_style}>User</button>
					</Link>
					<Link to="/ComparisionPage">
						<button className={item_style}>ComparisionPage</button>
					</Link>
					<Link to="/">
						<button className={item_style} onClick={() => {
							dispatch({
								type: ACTION_SET.USER_ACTION.USER_LOGOUT
							})
							dispatch({
								type: ACTION_SET.WORLD_ACTION.WORLD_RESET
							})
							navigateTo("/login")
						}}>Logout</button>
					</Link>
				</>)

			}


		</nav>
	)
}