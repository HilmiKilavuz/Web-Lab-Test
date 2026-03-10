import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UIKit from './pages/UIKit.tsx'

// Basit URL tabanlı routing (react-router olmadan)
const isUIKit = window.location.pathname === '/uikit'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isUIKit ? <UIKit /> : <App />}
  </StrictMode>,
)
