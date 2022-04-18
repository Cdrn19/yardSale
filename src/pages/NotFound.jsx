import React from 'react';
import '@styles/NotFound.scss';

import logo from '@logos/logo_yard_sale.svg';

const NotFound = () => {
	return (
		<div className="NotFound">
			<div className="NotFound__container">
				<img src={logo} alt="logo" className="NotFound__logo" />
				<h1 className="NotFound__title">404 Error!</h1>
				<p className="NotFound__subtitle">The path you were trying to reach couldn't be found on the server.</p>
			</div>
		</div>
	);
}

export default NotFound;