import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GeneralAppProvider } from './Contexts/GeneralAppContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GeneralAppProvider>
        <App />
      </GeneralAppProvider>
    </BrowserRouter>
  </React.StrictMode>
)