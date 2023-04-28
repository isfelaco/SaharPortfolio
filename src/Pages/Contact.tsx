import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const EmailForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
	gap: 10px;

	h1 {
		margin: 0;
	}
	textarea,
	input:not(last-child) {
		border: 1px solid white;
		border-radius: 5px;
		width: 100%;
		background-color: rgb(255, 255, 255, 0.3);
		font-family: myFont;
	}
	input:last-child {
		color: #aa4586;
		font-weight: bold;
		background: transparent;
		width: 100px;
		border: 1px solid white;
		border-radius: 5px;
	}
	textarea {
		height: 100px;
		max-height: 200px;
		resize: vertical;
	}
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #aa4586;

	border: 1px solid white;
	border-radius: 5px;
	background: rgb(255, 255, 255, 0.3);
	margin: 50px;
`;

const LeftColumn = styled(Column)`
	flex: 60%;
`;
const RightColumn = styled(Column)`
	flex: 40%;
`;

export function ContactPage() {
	emailjs.init(""); // insert public key here

	function sendEmail(e: any) {
		e.preventDefault();
		e.target.value = (Math.random() * 100000) | 0;
		emailjs.sendForm("contact_service", "contact_form", e.target).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	}

	return (
		<div className="container">
			<LeftColumn>
				<h1>Contact</h1>
				<h4>Email</h4>
				<h4>Phone Number</h4>
			</LeftColumn>

			<RightColumn>
				<EmailForm id="contact-form" onSubmit={sendEmail}>
					<h1>Send Email</h1>
					<input type="hidden" name="contact_number" />
					<label>Name</label>
					<input type="text" name="from_name" />
					<label>Email</label>
					<input type="email" name="reply_to" />
					<label>Subject</label>
					<input type="text" name="subject"></input>
					<label>Message</label>
					<textarea name="message"></textarea>
					<input type="submit" value="Send" />
				</EmailForm>
			</RightColumn>
		</div>
	);
}
