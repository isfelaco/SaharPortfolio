import React from "react";
import styled from "styled-components";

const Title = styled.p`
	font-size: 100px;
	color: white;
	text-shadow: 2px 3px 0 #aa4586, 1px 3px 0 #aa4586, 1px 3px 0 #aa4586;
	display: flex;
	justify-self: center;
	align-self: center;
	letter-spacing: 5px;
	@keyframes growSpacing {
		0% {
			letter-spacing: 1px;
			opacity: 0%;
		}
		100% {
			letter-spacing: 5px;
			opacity: 100%;
		}
	}
	animation: growSpacing 5s;
`;

export function HomePage() {
	return (
		<div className="container">
			<Title>Sahar Asghari</Title>
		</div>
	);
}
