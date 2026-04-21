import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div dir='rtl' className='min-h-screen px-20 py-10'>
      <App />
    </div>
  </StrictMode>,
)
