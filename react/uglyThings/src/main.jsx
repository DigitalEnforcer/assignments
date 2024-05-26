import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ContextStoreProvider} from './ContextStore.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextStoreProvider value="">
      <App />
    </ContextStoreProvider>
  </React.StrictMode>,
)
