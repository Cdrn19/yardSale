import React, { useState, useContext } from 'react';
import '@styles/Header.scss';

import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import Menu from '@components/Menu';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCars from '@icons/icon_shopping_cart.svg';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);

	let handleToggle = () => {
		setToggle(!toggle);
		setToggleOrders(false);
	};

	let handleToggleOrders = () => {
		setToggleOrders(!toggleOrders);
		setToggle(false);
	};

	return (
		<nav className='main-nav'>
			<img src={menu} alt="menu" className="main-nav__menu" />
			<div className="main-nav__left">
				<img src={logo} alt="logo" className="main-nav__logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="main-nav__right">
				<ul>
					<li className="main-nav__right--email" onClick={handleToggle}>
						hello@yardsale.com
					</li>
					<li className="main-nav__right--shopping-cart" onClick={handleToggleOrders}>
						<img src={shoppingCars} alt="shopping cart" />
						{ state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;