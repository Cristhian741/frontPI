import React from 'react'
import ReactDOM from 'react-dom/client'
// Import our custom CSS
import "./scss/style.scss"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import App from "./App"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


