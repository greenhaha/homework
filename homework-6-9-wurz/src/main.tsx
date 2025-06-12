import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import Test from './components/test.tsx'
import OrderList from './components/OrderList.tsx'
import './components/OrderList.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Test /> */}
    <OrderList />
  </StrictMode>
)
