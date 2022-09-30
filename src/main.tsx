import './index.css';
import App from './App';
import { AppProvider } from './state/providers/PostsProvider';
import { FeaturedPostProvider } from './state/providers/FeaturedPostprovider';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AppProvider>
			<FeaturedPostProvider>
				<App />
			</FeaturedPostProvider>
		</AppProvider>
	</React.StrictMode>
);
