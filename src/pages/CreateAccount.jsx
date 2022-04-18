import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
	return (
		<div className="createaccount">
			<div className="createaccount__container">
				<h1 className="createaccount__title">My account</h1>
				<form action="/" className="createaccount__form">
					<div>
						<label for="name" className="createaccount__form--label">Name</label>
						<input type="text" id="name" placeholder="Carlos Revetti" className="createaccount__form--input input-name" />
						<label for="email" className="createaccount__form--label">Email</label>
						<input type="text" id="email" placeholder="hello@yardsale.com" className="createaccount__form--input input-email" />
						<label for="password" className="createaccount__form--label">Password</label>
						<input type="password" id="password" placeholder="*********" className="createaccount__form--input input-password" />
					</div>
					<input type="submit" value="Create" className="createaccount__form--login-button" />
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;