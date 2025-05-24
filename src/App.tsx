import React from "react";
import "./index.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Box } from "@mui/material";
import Contact from "./pages/Contact";

export const pages = {
	Contact: { path: "/contact", element: <Contact /> },
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					height: "100vh",
					width: "100vw",
				}}
			>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						{Object.entries(pages).map(([key, page]) => (
							<Route key={key} path={page.path} element={page.element} />
						))}
					</Routes>
				</BrowserRouter>
			</Box>
		</ThemeProvider>
	);
}

export default App;
