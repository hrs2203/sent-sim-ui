import { useState } from "react";
import HomePage from "./HomePage.jsx";
import LoginPage from "./Login.jsx";
import UserDetail from "./UserDetail.jsx";
import RegisterPage from "./Register.jsx";


export const pageList = {
	"": (props) => <HomePage {...props} />,
	"login": (props) => <LoginPage {...props} />,
	"register": (props) => <RegisterPage {...props} />,
	"userdetail": (props) => <UserDetail {...props} />,
	"comparision": (props) => <HomePage {...props} />,
	"uploadcontent": (props) => <HomePage {...props} />,
}


const MainPage = () => {

	const [pageName, setPageName] = useState("")
	const [user, setUser] = useState(undefined);

	const is_logged_in = () => !(user === undefined)

	const transparent_btn = {
		"background-color": "transparent",
		"color": "black"
	}

	return (
		<div>
			<header>
				<nav class="navbar navbar-expand-lg navbar-light" style={{ "background-color": "#e3f2fd" }}>
					<li class="navbar-brand">Fuzzy Pancake</li>
					<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
						{
							is_logged_in() ? (
								<div class="navbar-nav">
									<button
										style={transparent_btn}
										class="btn m-2 nav-item nav-link"
										onClick={() => setPageName("userdetail")} >
										UserPage
									</button>
									<button
										style={transparent_btn}
										class="btn m-2 nav-item nav-link"
										onClick={() => setUser(undefined)} >
										Logout
									</button>
								</div>
							) : (
								<div class="navbar-nav">
									<button
										style={transparent_btn}
										class="btn m-2 nav-item nav-link"
										onClick={() => setPageName("login")} >
										Login
									</button>
									<button
										style={transparent_btn}
										class="btn m-2 nav-item nav-link"
										onClick={() => setPageName("register")} >
										Regsiter
									</button>
								</div>
							)
						}

					</div>
				</nav>
			</header>
			<div className="container">
				{pageList[pageName]({ setUser: setUser, setPageName: setPageName, user: JSON.stringify(user) })}
			</div>
		</div>
	)
}

export default MainPage

