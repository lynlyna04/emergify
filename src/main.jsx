import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SignUp } from './pages/SignUp.jsx'
import { Login } from './pages/Login.jsx'
import Police from './pages/Police.jsx'
import Ambulance from './pages/Ambulance.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },

  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/police',
    element: <Police />
  },
  {
    path: '/ambulance',
    element: <Ambulance />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
