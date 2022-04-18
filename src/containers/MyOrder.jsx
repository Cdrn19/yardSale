import React, { useContext } from 'react';

import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';

import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	let sumCart = () => {
		let reducer = (accumulator, currentValue) => 
			accumulator + currentValue.price;
			let sum =  state.cart.reduce(reducer, 0);
			return sum;
	};

	return (
		<aside className="MyOrder">
			<div className="MyOrder__Container">
				<img src={arrow} alt="arrow" />
				<p className="MyOrder__Title">My order</p>
			</div>
			<div className="MyOrder__Content">
				{state.cart.map((product,index) => (<OrderItem indexValue={index} key={index} product={product} /> ))}
				<div className="MyOrder__Order">
					<p>
						<span>Total</span>
					</p>
					<p>{sumCart()} USD</p>
				</div>
				<button className="MyOrder__Order--PrimaryButton">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;