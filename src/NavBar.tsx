import React, { useState } from "react";
import styled from "styled-components";

const Header = styled.div``;

export function NavBar() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			{!open && <h1 className="header">Header</h1>}
			{!open && <nav className="header" />}
		</div>
	);
}
