import React, { useContext } from 'react';
import '@styles/ProductItem.scss';

import AppContext from '@context/AppContext';
import iconAddToCart from '@icons/bt_add_to_cart.svg';


const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item);
	};

	return (
		<div className="ProductItem">
			<img src={product.image} alt={product.title} />
			<div className="ProductInfo">
				<div>
					<p>{product.price} USD</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={iconAddToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;