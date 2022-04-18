import React from 'react';
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductDetail.scss';

import close from '@icon/icon_close.png';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail__Close">
				<img src={close} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;