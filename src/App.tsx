import React from "react";
import "./Styles/App.css";
import { NavBar } from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { ContactPage } from "./Pages/Contact";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
