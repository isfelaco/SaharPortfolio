import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#d3468d",
			light: "#d592be",
		},
		secondary: {
			main: "#ffffff",
		},
	},
	typography: {
		fontFamily: "myFont",
	},
});

export default theme;
