// Libs
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import PrivateRoute from './PrivateRoute';
// import UnauthenticatedRoute from './UnauthenticatedRoute';

// Onboarding
import Home from '../pages/Onboarding/Home';
import OngFormScreen from '../pages/Onboarding/OngFormScreen';

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
			  <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cadastro-da-organizacao" element={<OngFormScreen/>}/>
				{/* <UnauthenticatedRoute exact path='/' component={Home} />
				<UnauthenticatedRoute exact path='/cadastro-da-organizacao' component={OngFormScreen} /> */}
				{/* <PrivateRoute exact path='/config/precisa-de-ajuda' component={NeedHelp} /> */}
			</Routes>
		</Router>
	)
};

export default AppRoutes;
