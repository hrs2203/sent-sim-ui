import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";


import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <HomePage /> } />
				<Route path="/login" element={ <LoginPage /> } />
				<Route path="/register" element={ <RegisterPage /> } />
				<Route path="*" element={ <div>404 Nothing found :| </div> } />
			</Routes>
		</BrowserRouter>
	)
}