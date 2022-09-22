import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FeaturedPostProvider } from './state/providers/FeaturedPostprovider'
import { AppProvider } from './state/providers/PostsProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <FeaturedPostProvider>
        <App />
      </FeaturedPostProvider>
    </AppProvider>
  </React.StrictMode>
)
