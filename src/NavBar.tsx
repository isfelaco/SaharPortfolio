import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Menu = styled.div`
	height: 40px;
	width: 200px;

	position: relative;
	top: 50px;

	background-color: rgb(221, 213, 222, 0.5);
	border-radius: 0px 50px 50px 0px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	h2 {
		margin: 0;
		color: white;
	}
	transition: height 1s;
`;

const Link = styled(NavLink)`
	color: white;
`;

export function NavBar() {
	const [open, setOpen] = useState(false);

	const onOpen = () => {
		console.log(open);
		setOpen((o) => !o);
		const menu = document.getElementsByClassName("collapsible")[0];
		if (menu) {
			if (!open) {
				(menu as HTMLElement).style.height = "calc(100vh - 100px)";
				(menu as HTMLElement).style.borderRadius = "0px 20px 20px 0px";
			}

			if (open) (menu as HTMLElement).style.height = "40px";
		}
	};

	return (
		<Menu onClick={onOpen} className="collapsible">
			<h2>MENU</h2>
			{open && (
				<div>
					<Link to="/page1">Page1</Link>
				</div>
			)}
		</Menu>
	);
}
