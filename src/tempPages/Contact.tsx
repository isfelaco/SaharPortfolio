import React from "react";
import emailjs from "emailjs-com";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";

export default function Contact() {
	emailjs.init("public_key"); // insert public key here

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
		<Box
			sx={{
				flexGrow: 1,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<form id="contact-form" onSubmit={sendEmail}>
				<FormControl
					fullWidth
					sx={{ display: "flex", flexDirection: "column", gap: 2 }}
				>
					<Typography variant="h4">Send Email</Typography>

					<input type="hidden" name="contact_number" />
					<TextField name="from_name" label="Name" />
					<TextField type="email" name="from_email" label="Email" />
					<TextField name="subject" label="Subject" />
					<TextField name="message" multiline rows={4} label="Message" />
					<Button type="submit">Send</Button>
				</FormControl>
			</form>
		</Box>
	);
}
