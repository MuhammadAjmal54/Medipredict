// import { StrictMode } from 'react'
// import React from 'react';

// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {BrowserRouter} from 'react-router-dom'
// import AdminContextProvider from './context/AdminContext.jsx';
// import DoctorContextProvider from './context/DoctorContext.jsx';
// import AppContextProvider from './context/AppContext.jsx';

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <AdminContextProvider>
//     <DoctorContextProvider>
//       <AppContextProvider>
//         <App />
//       </AppContextProvider>
//     </DoctorContextProvider>
//   </AdminContextProvider>
//   </BrowserRouter>,
// )


// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Import your context providers
import AdminContextProvider from './context/AdminContext.jsx'
import AppContextProvider from './context/AppContext.jsx'
import DoctorContextProvider from './context/DoctorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <DoctorContextProvider>
        <AdminContextProvider>
          <App />
        </AdminContextProvider>
      </DoctorContextProvider>
    </AppContextProvider>
  </BrowserRouter>
)
