// Libs
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import PrivateRoute from './PrivateRoute';
// import UnauthenticatedRoute from './UnauthenticatedRoute';

// Onboarding
import Home from '../pages/Onboarding/Home';
import OngForm from '../pages/Onboarding/OngFormScreen';
import CauseAndPeopleProfileForm from '../pages/Onboarding/CauseAndPeopleProfileFormScreen';

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
			  <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cadastro-da-organizacao" element={<OngForm/>}/>
        <Route exact path="/cadastro-das-causas" element={<CauseAndPeopleProfileForm/>}/>

				{/* <UnauthenticatedRoute exact path='/' component={Home} />
				<UnauthenticatedRoute exact path='/cadastro-da-organizacao' component={OngFormScreen} /> */}
				{/* <PrivateRoute exact path='/config/precisa-de-ajuda' component={NeedHelp} /> */}
			</Routes>
		</Router>
	)
};

export default AppRoutes;
