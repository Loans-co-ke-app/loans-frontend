import React from 'react';
import ReactGa from 'react-ga';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { TRACKING_ID } from './api';
// import { useLocation } from 'react-router-dom';
/* eslint-disable @typescript-eslint/no-explicit-any */
ReactGa.initialize(TRACKING_ID);
console.log();


const App = () => {
	// const location = useLocation();
	// initialize google analytics page view tracking
	React.useEffect(() => {
		ReactGa.pageview(window.location.pathname + window.location.search);
	}, [window.location.pathname, window.location.search]);

	return <RouterProvider router={router} />;
};

export default App;
