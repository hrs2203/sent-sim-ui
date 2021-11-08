import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { ACTION_SET } from "../model";
import { } from "../services/userAPI";
import Header from "./Header";
import { navigateTo } from "../util/navigation";


export default function RegistryPage() {
	const dispatch = useDispatch();

	const [UserName, setUserName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const _registerUser = async (e) => {

	}

	return (
		<div>
			<Header />
			<div className="mx-5 my-3 flex justify-center">
				<div className="pt-2 p-4 custom_form_auth low_border">

					<div className="grid grid-cols-1 gap-3">
						<div>
							<label className="font-poppins">Your User Name</label>
							<input
								autoFocus
								id="UserName"
								type="UserName"
								placeholder="Enter your UserName here"
								className="shadow-sm appearance-none border rounded w-full py-2 px-3 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-poppins"
								value={UserName}
								onChange={(e) => { setUserName(e.target.value) }}
							/>
						</div>
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
								onClick={_registerUser}
							> Signup </button>
							<Link to="/login">
								<button className="mt-6 bg-red p-2 px-4 text-18px font-poppins rounded hover:bg-hoverRed focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-full ">
									Login Now
								</button>
							</Link>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}