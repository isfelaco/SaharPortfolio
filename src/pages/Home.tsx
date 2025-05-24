import { Typography, styled, Box } from "@mui/material";
import React from "react";

const Container = styled(Box)`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;

	background-image: url(pink-background.jpg);
	background-size: cover;
`;

const Title = styled(Typography)`
	color: white;
	text-shadow: 2px 3px 0 #aa4586, 1px 3px 0 #aa4586, 1px 3px 0 #aa4586;
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

export default function Home() {
	return (
		<Container>
			<Title variant="h1">Sahar Asghari</Title>
		</Container>
	);
}
