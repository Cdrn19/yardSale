import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="myaccount">
			<div className="myaccount__container">
				<h1 className="myaccount__title">My account</h1>
				<form action="/" className="myaccount__form">
					<div>
						<label for="name" className="myaccount__form--label">Name</label>
						<p className="myaccount__form--value">Carlos Revetti</p>
						<label for="email" className="myaccount__form--label">Email</label>
						<p className="myaccount__form--value">hello@yardsale.com</p>
						<label for="password" className="myaccount__form--label">Password</label>
						<p className="myaccount__form--value">*********</p>
					</div>
					<input type="submit" value="Edit" className="MyAccount__container--Login-button" />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;