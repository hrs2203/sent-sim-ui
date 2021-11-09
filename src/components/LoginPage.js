import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";



import { ACTION_SET } from "../model";
import { loginUser } from "../services/userAPI";
import Header from "./Header";
import { navigateTo } from "../util/navigation";

export default function LoginPage() {
	const dispatch = useDispatch();

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const _loginUser = async (e) => {
		e.preventDefault()
		dispatch({
			type: ACTION_SET.WORLD_ACTION.WORLD_TOGGLE
		})
		const login_api = await loginUser(email, password);
		const user_data = login_api.data.data;
		if ( login_api.data.status === 200 ){
			setTimeout(() => {
				dispatch({
					type: ACTION_SET.WORLD_ACTION.WORLD_TOGGLE
				})
				dispatch({
					type: ACTION_SET.USER_ACTION.USER_UPDATE,
					payload: { isLoggedIn: true, userDetail: user_data }
				})
				navigateTo("/user")
			}, 500);
		}
	}

	return (
		<div>
			<Header />
			<div className="mx-5 my-3 flex justify-center">
				<div className="pt-2 p-4 custom_form_auth low_border">

					<div className="grid grid-cols-1 gap-3">
						<div>
							<label className="font-poppins">Your Email</label>
							<input
								autoFocus
								id="email"
								type="email"
								placeholder="Enter your email here"
								className="shadow-sm appearance-none border rounded w-full py-2 px-3 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-poppins"
								value={email}
								onChange={(e) => { setEmail(e.target.value) }}
							/>
						</div>
						<div>
							<label className="font-poppins mt-4">Password</label>
							<div className="relative">
								<input
									id="password"
									type="password"
									placeholder="Your Password"
									className="shadow-sm appearance-none border rounded w-full py-2 px-3 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-poppins"
									value={password}
									onChange={(e) => { setPassword(e.target.value) }}
								/>
							</div>
						</div>
						<div className="flex">
							<button
								className="mt-6 bg-success p-2 px-4 text-18px font-poppins rounded text-white"
								onClick={_loginUser}
							> Login </button>
							<Link to="/register">
								<button className="mt-6 bg-red p-2 px-4 text-18px font-poppins rounded hover:bg-hoverRed focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-full ">
									Signup for free
								</button>
							</Link>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}