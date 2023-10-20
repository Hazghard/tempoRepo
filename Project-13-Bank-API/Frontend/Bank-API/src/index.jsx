import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { Provider as ReactReduxProvider } from 'react-redux';
import store from '@/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<ReactReduxProvider store={store}>
		<App />
	</ReactReduxProvider>
  </React.StrictMode>,
)
