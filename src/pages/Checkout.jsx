import React from 'react';
import OrderItem from '@components/OrderItem';
// import Menu from '@components/Menu';
import '@styles/Checkout.scss';

const Checkout = () => {
	return (
		<div className="checkout">
			<div className="checkout__container">
				<h1 className="checkout__container--title">My order</h1>
				<div className="checkout__content">
					<div className="checkout__content--order">
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
					</div>
				</div>
				<OrderItem />
			</div>
		</div>
	);
}

export default Checkout;