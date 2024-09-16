import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './Home'
import Useref from './Components/Useref'
import Detailspage from './Pages/Detailspage'
import Account from './Pages/Account'

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'menu-page',
          element: <Account />
        },
        {
          path: 'contact-page',
          element: <Account />
        }, {
          path: 'detail-page/:id',
          element: <Detailspage />
        },
        {
          path: 'pages',
          element: <Useref />
        },
        , {

        }]
    }])
  return <RouterProvider router={router} />

}
