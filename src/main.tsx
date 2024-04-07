import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/styles/index.scss'
import JHOWebRouter from './router'
import {HelmetProvider} from 'react-helmet-async'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <JHOWebRouter />
    </HelmetProvider>
  </React.StrictMode>
)
