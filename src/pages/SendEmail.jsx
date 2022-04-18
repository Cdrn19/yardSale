import React from 'react';
import '@styles/SendEmail.scss';

import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg'

const SendEmail = () => {
	return (
		<div className="sendemail">
			<div className="sendemail__container">
				<img src={logo} alt="logo" className="sendemail__logo" />
				<h1 className="sendemail__title">Email has been sent!</h1>
				<p className="sendemail__subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="sendemail__email-image">
					<img src={email} alt="email" />
				</div>
				<button className="sendemail__login-button">Login</button>
				<p className="sendemail__resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;