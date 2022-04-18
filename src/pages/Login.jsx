import React, { useRef } from 'react';
import '@styles/Login.scss';

import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault()
		let formData = new FormData(form.current);
		let data = {
			username: formData.get('email'),
			password: formData.get('password')
		};
		console.log(data)
	};

	return (
		<div className="login">
			<div className="login-container">
				<img src={logo} alt="logo" className="login-container__logo" />
				<form action="/" className="login__form" ref={form}>
					<label htmlFor="email" className="login__form--label">Email address</label>
					<input type="text" name="email" placeholder="hello@yardsale.com" className="login__form--input-mail input" />
					<label htmlFor="password" className="login__form--label">Password</label>
					<input type="password" name="password" placeholder="*********" className="login__form--input-password input" />
					<button className="login__form--login-button" onClick={handleSubmit}>Log in</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="login__signup-button">Sign up</button>
			</div>
		</div>
	);
}

export default Login;
