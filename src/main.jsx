import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import LoginForm from './pages/google-oath/login'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Interface from './components/Home';
import About from './pages/About';
import Register from './pages/Register'
import Bucket from './pages/Home/Bucket'
import Download from './pages/Home/Download'
import Team from './components/Team'
import Reactnavbar from './components/Navbar'

const router = createBrowserRouter([
  {
    path: "/",
    element:< App />
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/bucket',
    element: <Bucket />,
  },
  {
    path: '/download',
    element: <Download />,
  },
  {
    path: '/team',
    element: <Team />,
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Reactnavbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
