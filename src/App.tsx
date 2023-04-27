import React from "react";
import "./Styles/App.css";
import { NavBar } from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";

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
