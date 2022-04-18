import React from 'react';
import '@styles/PasswordRecovery.scss';

import logo from '@logos/logo_yard_sale.svg';

const PasswordRecovery = () => {
	return (
		<div className="passwordrecovery">
			<div className="passwordrecovery__container">
				<img src={logo} alt="logo" className="passwordrecovery__logo" />
				<h1 className="passwordrecovery__title">Password recovery</h1>
				<p className="passwordrecovery__subtitle">Inform the email address used to create your account</p>
				<form action="/" className="passwordrecovery__form">
					<label htmlFor="email" className="passwordrecovery__label">Email address</label>
					<input type="text" id="email" className="passwordrecovery__input input-email" />
					<input type="submit" value="Confirm" className="passwordrecovery__login-button" />
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;