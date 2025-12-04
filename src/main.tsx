// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
// 1. IMPORTA BrowserRouter
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* 2. ENVUELVE TU APP CON EL ROUTER */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)