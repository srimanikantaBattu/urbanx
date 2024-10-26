import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './RootLayout'
import Login from './components/Login'
import Register from './components/Register'
import Otp from './components/Otp'
import Home from './components/Water/WaterHome'
import Issues from './components/Water/Issues'
import Report from './components/Water/Report'
import Profile from './components/Water/Profile'
import HospitalPage from './components/health/HospitalPage'
import Homehealth from './components/health/Home'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children: [
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/otp",
          element: <Otp />
        },
        {
          path: "/homewater",
          element: <Home />
        },
        {
          path:"/issues",
          element:<Issues/>
        },
        {
          path:"/report",
          element:<Report/>
        },
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path:"/health/hospitalpage",
          element:<HospitalPage/>
        },{
          path:"/healthhome",
          element:<Homehealth/>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App


