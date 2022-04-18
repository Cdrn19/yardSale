import React from 'react';


import Order from '@components/Order';

import '@styles/Orders.scss';

const Orders = () => {

	return (
		<div className="orders">
			<div className="orders__container">
				<h1 className="orders__title">My orders</h1>
				<div className="orders__content">
					<Order />
				</div>
			</div>
		</div>
	);
}

export default Orders;