import { ChakraProvider } from '@chakra-ui/react'
// import React from 'react'
import ReactDom from 'react-dom/client'
import SearchPage from './pages/SearchPage'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

ReactDom.createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <ChakraProvider>
    <SearchPage />
    {/* <App /> */}
  </ChakraProvider>
)
