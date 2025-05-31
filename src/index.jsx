import React from "react"
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
)
