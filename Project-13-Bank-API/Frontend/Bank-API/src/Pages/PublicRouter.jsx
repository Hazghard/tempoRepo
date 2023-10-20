import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Home, Login, Dashboard, Error } from './index';

const PublicRouter = () => {
	console.log('PublicRouter loaded');
	return (
		<Routes>
			<Route index element={<Navigate to="/home" />} />

			<Route path='/home' element={<Home />} />
			<Route path='/login' element={<Login/>}/>
			<Route path='/profile' element={<Dashboard/>}/>

			<Route path='*' element={<Error />} />
		</Routes>
	);
};

export default PublicRouter;