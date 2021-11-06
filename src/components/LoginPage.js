import _ from "lodash";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";


import { ACTION_SET } from "../model";
import { loginUser } from "../services/userAPI";

export default function LoginPage() {
	const dispatch = useDispatch();
	const { userDetail } = useSelector((state) => {
		return { userDetail: _.get(state, ["UserReducer"], { "404": "noting found" }) }
	})

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")


	const _loginUser = async (e) => {
		e.preventDefault()
		console.log(email, password);
		const login_api = await loginUser(email, password);
		console.log(login_api);
	}

	return (
		<div>
			<div className="grid grid-cols-2 mx-5 my-3">
				<div className=""></div>
				<div className="pt-2 p-4">
					<form>
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
							<button
								className="mt-6 bg-success p-2 px-4 text-18px font-poppins rounded text-white"
								onClick={_loginUser}
							>
								Login
							</button>
						</div>
					</form>
					<Link to="/register">
						<button className="mt-6 bg-red p-2 px-4 text-18px font-poppins rounded hover:bg-hoverRed focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-full ">
							Signup for free
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}