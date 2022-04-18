import React from 'react';
import '@styles/NewPassword.scss';

import logo from '@logos/logo_yard_sale.svg'

const NewPassword = () => {
	return (
		<div className="newpassword">
			<div className="newpassword__container">
				<img src={logo} alt="logo" className="newpassword__logo" />
				<h1 className="newpassword__title">Create a new password</h1>
				<p className="newpassword__subtitle">Enter a new passwrd for yue account</p>
				<form action="/" className="newpassword__form">
					<label for="password" className="newpassword__form--label">Password</label>
					<input type="password" id="password" placeholder="*********" className="newpassword__form--input input-password" />
					<label for="new-password" className="newpassword__form--label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="newpassword__form--input input-password" />
					<input type="submit" value="Confirm" className="newpassword__form--login-button" />
				</form>
			</div>
		</div>
	);
}

export default NewPassword;