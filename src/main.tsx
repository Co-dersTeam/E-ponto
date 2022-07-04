import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/App'
import GlobalStyle from './styles/global'


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
