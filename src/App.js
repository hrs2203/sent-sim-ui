import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import UserDetailPage from "./components/UserDetailPage";
import ComparePage from "./components/ComparePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./model"
import APIDocs from "./components/APIDocs";

function RouteHandeller() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/user" element={<UserDetailPage />} />
				<Route path="/ComparisionPage" element={<ComparePage />} />
				<Route path="/doc" element={<APIDocs />} />
				<Route path="*" element={<div>404 Nothing found :| </div>} />
			</Routes>
		</BrowserRouter>
	)
}

export default function App() {
	return (
		<Provider store={store}>
			<RouteHandeller />
		</Provider>
	)
}