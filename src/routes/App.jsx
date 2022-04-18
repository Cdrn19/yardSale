import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppContext from '@context/AppContext';
import Checkout from '@pages/Checkout';
import CreateAccount from '@pages/CreateAccount';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import MyAccount from '@pages/MyAccount';
import NewPassword from '@pages/NewPassword';
import NotFound from '@pages/NotFound';
import Orders from '@pages/Orders';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.css';


const App = () => {
	let initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<Router>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/checkout" element={<Checkout />} />
						<Route exact path="/singup" element={<CreateAccount />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/account" element={<MyAccount />} />
						<Route exact path="/new-password" element={<NewPassword />} />
						<Route exact path="*" element={<NotFound />} />
						<Route exact path="/orders" element={<Orders />} />
						<Route exact path="/password-recovery" element={<PasswordRecovery />} />
						<Route exact path="/send-email" element={<SendEmail />} />
					</Routes>
				</Layout>
			</Router>
		</AppContext.Provider>	
	);
}

export default App;
