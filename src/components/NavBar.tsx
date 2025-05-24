import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	MenuItem,
	Box,
	Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { pages } from "../App";

export function NavBar() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const location = useLocation();

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="appbar menu"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: "block", md: "none" } }}
						>
							{Object.entries(pages).map(([name, page]) => (
								<MenuItem
									key={name}
									onClick={handleCloseNavMenu}
									component={NavLink}
									to={page.path}
									selected={location.pathname === page.path}
								>
									{name}
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Sahar Asghari's Portfolio
					</Typography>
					<Box
						sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 1 }}
					>
						{Object.entries(pages).map(([name, page]) => {
							const isActive = location.pathname === page.path;
							return (
								<Button
									component={NavLink}
									key={name}
									to={page.path}
									onClick={handleCloseNavMenu}
									variant={isActive ? "outlined" : "text"}
									color={isActive ? "secondary" : "primary"}
									sx={{ color: "white" }}
								>
									{name}
								</Button>
							);
						})}
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
}
