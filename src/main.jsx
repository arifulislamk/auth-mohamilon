import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './providers/AuthProvider';
import Orders from './components/Orders';
import PravetRouter from './PrivetRouter/PravetRouter';
import Profile from './components/Profile';
import DashBoard from './components/DashBoard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/orders",
        element: <PravetRouter><Orders></Orders></PravetRouter>,
      },
      {
        path: "/profile",
        element: <PravetRouter><Profile></Profile></PravetRouter>
      },
      {
        path: "/dashboard",
        element: <PravetRouter><DashBoard></DashBoard></PravetRouter>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
