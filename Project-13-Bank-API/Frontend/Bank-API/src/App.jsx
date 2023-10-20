import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import PublicRouter from '@/Pages/PublicRouter';

const App = () => {
    return(
		<BrowserRouter>
			<Routes>
				<Route element={ <PublicRouter /> } path='/*'/>
			</Routes>
		</BrowserRouter>
    )
}

export default App
