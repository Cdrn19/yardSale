import React, { useContext } from 'react';
import '@styles/OrderItem.scss';

import AppContext from '@context/AppContext'

import icon_close from '@icons/icon_close.png';

const OrderItem = ({ product,indexValue }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (item) => {
		removeFromCart(item);
	};

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.image} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price} USD</p>
			<img src={icon_close} className="OrderItem__icon-close" alt="close" onClick={() => handleRemove(indexValue)} />
		</div>
	);
}

export default OrderItem;