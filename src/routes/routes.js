// Libs
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

// Onboarding
import Home from '../pages/Onboarding/Home';
import OngFormScreen from '../pages/Onboarding/OngFormScreen';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<UnauthenticatedRoute exact path='/' component={Home} />
				<UnauthenticatedRoute exact path='/cadastro-da-organizacao' component={OngFormScreen} />
				{/* <PrivateRoute exact path='/config/precisa-de-ajuda' component={NeedHelp} /> */}
			</Switch>
		</BrowserRouter>
	)
};

export default Routes;
