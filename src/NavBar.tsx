import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Menu = styled.div`
	height: 40px;
	width: 200px;

	background-color: white;
	border-radius: 2px;

	display: flex;
	flex-direction: column;
	align-items: center;
	// justify-content: center;

	h2 {
		margin: 0;
	}
	transition: height 1s;
`;

export function NavBar() {
	const [open, setOpen] = useState(false);

	const onOpen = () => {
		console.log(open);
		setOpen((o) => !o);
		const menu = document.getElementsByClassName("collapsible")[0];
		if (menu) {
			if (!open) (menu as HTMLElement).style.height = "100vh";
			if (open) (menu as HTMLElement).style.height = "40px";
		}
	};

	return (
		<div>
			<Menu onClick={onOpen} className="collapsible">
				<h2>Menu</h2>
				{open && <NavLink to="/page1">Page1</NavLink>}
			</Menu>
		</div>
	);
}
