import React from "react";
import emailjs from "emailjs-com";

export function ContactPage() {
	emailjs.init("iu8xABUMxkhOBMJVM");

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
		<form id="contact-form" onSubmit={sendEmail}>
			<h2>Send Email</h2>
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
		</form>
	);
}
