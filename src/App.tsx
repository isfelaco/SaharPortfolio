import React from "react";
import "./Styles/App.css";
import { NavBar } from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
