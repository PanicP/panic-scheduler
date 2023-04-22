import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Header } from './components/Header'
import Calendar from './components/Test'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Header />
        <Calendar />
    </React.StrictMode>
)
